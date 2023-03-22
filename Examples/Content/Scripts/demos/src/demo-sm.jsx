const _ = require('lodash')
const ReactUMG = require('react-umg')
const React = require('react')

const LoadSchema_SM = require('./sm-schema')

function GenerateNode(ParentGraph, Template) {
    let Graph = ParentGraph.GetOuter()

    ParentGraph.ModifyObject();
    Graph.ModifyObject();

    let NewNode = new JavascriptObject(Graph);

    NewNode.Ref = Template.ref

    let NodeCreator = Graph.EdGraph.NodeCreator()
    let GraphNode = NodeCreator.Node

    GraphNode.GraphNode = NewNode

    NodeCreator.Finalize()

    _.each(Template.meta, (value, key) => GraphNode[key] = value);
    _.each(Template.delegate, (func, funcName) => GraphNode[funcName] = () => func(GraphNode, NewNode.Ref));

    Graph.PostEditChange()
    Graph.MarkPackageDirty()

    Graph.uNodes.push(GraphNode);

    return GraphNode;
}

module.exports = function (E) {

    function getGraphModules(_container) {
        let obj = new JavascriptObject

        let graph = JavascriptGraphEditorWidget.NewGraph(obj)

        class MySchema extends JavascriptGraphAssetGraphSchema { }
        let MySchema_C = require('uclass')()(global, MySchema)
        let schema = MySchema_C.GetDefaultObject()
        graph.Schema = MySchema_C

        const { GraphSchema, NodeSchema } = LoadSchema_SM(schema);
        schema = GraphSchema;

        function CreateConnections(TransitionNode, PreviousState, NextState) {
            let [Input, Output] = TransitionNode.GetPins();

            let pop = PreviousState.GetOutputPin()
            let nip = NextState.GetInputPin()

            Input.MakeLinkTo(pop);
            Output.MakeLinkTo(nip)
        }
        schema.OnCreateAutomaticConversionNodeAndConnections = [
            (PinA, PinB) => {
                let _schema = _.find(NodeSchema, _schema => _schema.Category == 'Trainsition')

                let TransitionNode = GenerateNode(graph, {
                    ref: _.cloneDeep(_schema.Ref),
                    delegate: _schema.Delegate
                })

                let NodeA = PinA.GetOwningNode()
                let NodeB = PinB.GetOwningNode()

                CreateConnections(TransitionNode, NodeA, NodeB);

                if (PinA.GetDirection() == 'EGPD_Output') {
                    CreateConnections(TransitionNode, NodeA, NodeB);
                } else {
                    CreateConnections(TransitionNode, NodeB, NodeA);
                }
            }
        ];

        schema.OnTakeWidget = [
            (node) => ReactUMG.wrap(node.GetWidget()).TakeWidget()
        ];

        schema.OnContextActions = [
            () => _(NodeSchema).filter(_schema => !_schema.Hidden).map(_schema => {
                return {
                    Category: _schema.Category,
                    MenuDescription: _schema.MenuDescription,
                    TooltipDescription: ""
                }
            }).value()
        ];

        schema.OnPerformAction = [
            (action, context) => {
                let _schema = _.find(NodeSchema, _schema => _schema.MenuDescription == action.MenuDescription)
                let { Location } = context;

                let StateMachineNode = GenerateNode(graph, {
                    ref: _.cloneDeep(_schema.Ref),
                    delegate: _schema.Delegate,
                    meta: { NodePosX: Location.X, NodePosY: Location.Y }
                });

                JavascriptGraphEditorLibrary.TryConnection(schema, context.FromPins[0], StateMachineNode.GetInputPin());
            }
        ];

        obj.EdGraph = graph;
        obj.uNodes = [];

        function makeGraphCommands() {
            let context = JavascriptMenuLibrary.NewBindingContext('GraphEditor', 'GraphEditorMenu', '', 'EditorStyle');
            let commands = new JavascriptUICommands

            function init() {
                commands.BindingContext = context
                commands.Commands = "SelectAll Delete Copy Cut Paste Duplicate".split(' ').map(x => ({
                    Id: x,
                    CommandInfo: JavascriptMenuLibrary.GenericCommand(x)
                }))
                commands.Initialize();
            }

            commands.OnExecuteAction = (what) => {
                let commands = {
                    Delete: () => {
                        const container = _container();
                        if (container) {
                            graph.ModifyObject()
                            let nodes = container.ueobj.GetSelectedNodes()
                            nodes.forEach(node => {
                                if (node.CanUserDeleteNode()) {
                                    node.ModifyObject()
                                    node.DestroyNode()
                                }
                            })
                            container.ueobj.ClearSelectionSet()
                        }
                    },
                    SelectAll: () => {
                        const container = _container();
                        if (container) {
                            container.ueobj.SelectAllNodes()
                        }
                    }
                }
                let cmd = commands[what]
                if (!cmd) {
                    throw new Error(what)
                }
                cmd()
            }

            commands.OnCanExecuteAction = (what) => {
                let commands = {
                    Delete: () => {
                        const container = _container();
                        let nodes = container != null ? container.ueobj.GetSelectedNodes() : []
                        return _.some(nodes, node => node.CanUserDeleteNode())
                    },
                    Copy: () => {
                        const container = _container();
                        let nodes = container != null ? container.ueobj.GetSelectedNodes() : []
                        return _.some(nodes, node => node.CanDuplicateNode())
                    },
                    Cut: () => commands.Copy && commands.Delete
                }
                let cmd = commands[what]
                return !cmd || cmd()
            }

            function uninit() {
                commands.Uninitialize();
                context.Destroy();
            }

            init();
            commands.destroy = uninit

            return commands
        }

        let graphCommands = makeGraphCommands()
        let graphCommandList = JavascriptMenuLibrary.CreateUICommandList()
        graphCommands.Bind(graphCommandList)

        return {
            graph: graph,
            graphCommandList: graphCommandList,
            nodeSchema: NodeSchema,
            destroy: () => {
                obj.uNodes.forEach(node => node.GraphNode.Ref = null)
                graphCommands.destroy()
            }
        }
    }

    class GraphSMEditor extends React.Component {
        constructor(props, context) {
            super(props, context);

            this.graphContainer = null;
            let { graph, graphCommandList, nodeSchema, destroy } = getGraphModules(() => this.graphContainer);
            this.graph = graph;
            this.graphCommandList = graphCommandList;
            this.NodeSchema = nodeSchema;
            this.destroy = destroy;
        }

        componentWillMount() {
            this.LoadGraph()
        }

        componentWillUnmount() {
            this.destroy()
        }

        LoadGraph() {
            let _schema = _.find(this.NodeSchema, _schema => _schema.Category == 'StateMachine')

            GenerateNode(this.graph, {
                ref: _.cloneDeep(_schema.Ref),
                delegate: _schema.Delegate,
                meta: { NodePosX: -300, NodePosY: 0 }
            });
        }

        render() {
            return (
                <uSizeBox>
                    <uJavascriptGraphEditorWidget ref={ref => this.graphContainer = ref} Graph={this.graph} CommandList={this.graphCommandList}
                        AppearanceInfo={{ CornerText: "Hello SM" }} />
                </uSizeBox>
            )
        }
    }

    return ReactUMG.wrap(<GraphSMEditor />)
}