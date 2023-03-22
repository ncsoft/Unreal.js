const _ = require('lodash')
const React = require('react');
const ReactUMG = require('react-umg');

module.exports = (schema) => {

    const Style_Font = { FontObject: Root.GetEngine().SmallFont, Size: 10 };

    let Style_Editor = new JavascriptStyleSet;
    Style_Editor.StyleSetName = 'EditorStyle';

    class StateMachineNode extends React.Component {
        render() {
            const nodeName = this.props.nodeName;
            const Style_Brush_Color = { R: 0.08, G: 0.08, B: 0.08, A: 1 }
            const Style_Slot = { 'HorizontalAlignment': 'HAlign_Center', 'VerticalAlignment': 'VAlign_Center' }
            return (
                <uBorder
                    Brush={Style_Editor.GetBrush('Graph.StateNode.ColorSpill')}
                    BrushColor={Style_Brush_Color}
                    Slot={Style_Slot}
                    Visibility={'SelfHitTestInvisible'} >
                    <span>
                        <text
                            Font={Style_Font}
                            Slot={{ Style_Slot }}
                            Text={nodeName}
                        />
                    </span>
                </uBorder>
            )
        }
    }

    class TrainsitionNode extends React.Component {
        render() {
            const nodeName = this.props.nodeName;
            const Style_Brush_Color = { R: 0.7, G: 0.1, B: 0.1, A: 1 }
            const Style_Slot = { 'HorizontalAlignment': 'HAlign_Center', 'VerticalAlignment': 'VAlign_Center' }
            return (
                <uOverlay Slot={Style_Slot} >
                    <img Brush={Style_Editor.GetBrush('Graph.TransitionNode.Body')} />
                    <img
                        Brush={Style_Editor.GetBrush('Graph.TransitionNode.ColorSpill')}
                        ColorAndOpacity={{ SpecifiedColor: Style_Brush_Color }} />
                    <img Brush={Style_Editor.GetBrush('Graph.TransitionNode.Icon')} />
                    <img Brush={Style_Editor.GetBrush('Graph.TransitionNode.Gloss')} />
                </uOverlay>
            )
        }
    }

    /***************************
     ** Node Schema */
    const StateMachine_Node_Schema = {
        Hidden: false,
        Category: "StateMachine",
        MenuDescription: "StateMachineNode",
        Ref: {
            NodeCategory: "StateMachine",
        },
        Delegate: {
            GetWidget: (GraphNode, ref) => {
                GraphNode.BackgroundColor.SpecifiedColor = { R: 0.08, G: 0.08, B: 0.08, A: 1 };
                return (
                    <StateMachineNode nodeName={'StateMachineNode'} />
                )
            },
            IsTrainsionNode: () => false,
            GetInputPin: (GraphNode) => GraphNode.GetPins()[0],
            GetOutputPin: (GraphNode) => GraphNode.GetPins()[1],
            GetRef: (__, ref) => ref
        }
    };

    const Transition_Node_schema = {
        Hidden: true,
        Category: "Trainsition",
        MenuDescription: "TrainsitionNode",
        Ref: {
            NodeCategory: "Trainsition",
        },
        Delegate: {
            GetWidget: (GraphNode, ref) => {
                GraphNode.BackgroundColor.SpecifiedColor = { R: 0.1, G: 0.1, B: 0.1, A: 1 };
                return (
                    <TrainsitionNode />
                )
            },
            IsTrainsionNode: () => true,
            GetInputPin: (GraphNode) => GraphNode.GetPins()[0],
            GetOutputPin: (GraphNode) => GraphNode.GetPins()[1],
            GetPreviousState: (GraphNode) => {
                const lks = GraphNode.GetInputPin().GetLinkedTo();
                return lks.length > 0 ? lks[0].GetOwningNode() : null;
            },
            GetNextState: (GraphNode) => {
                const lks = GraphNode.GetOutputPin().GetLinkedTo();
                return lks.length > 0 ? lks[0].GetOwningNode() : null;
            },
            GetRef: (__, ref) => ref
        }
    };
    const nodes = [StateMachine_Node_Schema, Transition_Node_schema];

    /***************************
     ** DrawingPolicy Delegate */
    const HoverColor = { R: 0.724, G: 0.256, B: 0.0, A: 1.0 };
    const BaseColor = { R: 0.9, G: 0.9, B: 0.9, A: 1.0 };
    schema.OnDetermineWiringStyle = [
        (OutputPin, InputPin, Params, DrawingPolicyContainer) => {
            Params.AssociatedPin1 = OutputPin;
            Params.AssociatedPin2 = InputPin;
            Params.WireThickness = 1.5

            if (InputPin.IsValid()) {
                if (InputPin.GetOwningNode().IsTrainsionNode()) {
                    Params.WireColor = DrawingPolicyContainer.IsContainedHoveredPins(InputPin) ? HoverColor : BaseColor;
                    Params.bUserFlag1 = InputPin.GetOwningNode().Bidirectional;

                    let bDeemphasizeUnhoveredPins = DrawingPolicyContainer.GetHorveredPinNum()
                    if (bDeemphasizeUnhoveredPins > 0) {
                        DrawingPolicyContainer.ApplyHoverDeemphasis(OutputPin, InputPin, Params.WireThickness, Params.WireColor);
                    }
                }
            }
            return { Params };
        }
    ];

    schema.OnDetermineLinkGeometry = [
        (OutputPin, InputPin, StartWidgetGeometry, EndWidgetGeometry, Container) => {
            const TransNode = InputPin.GetOwningNode()
            if (TransNode && TransNode.IsTrainsionNode()) {
                const PrevState = TransNode.GetPreviousState()
                const NextState = TransNode.GetNextState()
                if (PrevState && NextState) {
                    StartWidgetGeometry = Container.GetArrangedNodes(PrevState)
                    EndWidgetGeometry = Container.GetArrangedNodes(NextState)
                }
            } else {
                StartWidgetGeometry = Container.FindPinGeometries(Container.GetOutputPinWidget())
                const PinWidget = Container.FindPinToPinWidgetMap(InputPin)
                if (PinWidget) {
                    EndWidgetGeometry = Container.FindPinGeometries(PinWidget)
                }
            }

            return {
                StartWidgetGeometry,
                EndWidgetGeometry
            }
        }
    ];

    schema.OnUsingNodeWidgetMap = [
        () => true
    ];

    schema.OnDrawPreviewConnector = [
        (PinGeometry, StartPoint, EndPoint, Pin, Params, Conatiner) => {
            Params = Conatiner.DetermineWiringStyle(Pin, Pin, Params).Params;

            let SeedPoint = EndPoint;
            let AdjustedStartPoint = PinGeometry.FindClosestPointOnGeom(SeedPoint);

            Conatiner.DrawSplineWithArrow(AdjustedStartPoint, EndPoint, Params);
        }
    ];

    const LineSeparationAmount = 4.5;
    function Internal_DrawLineWithArrow(DrawingPolicyContainer, StartAnchorPoint, EndAnchorPoint, Params, ArrowRadius) {
        let DeltaPos = EndAnchorPoint.Subtract_Vector2DVector2D(StartAnchorPoint);
        let UnitDelta = DeltaPos.Normalize2D();
        let Normal = Vector2D.C({ X: DeltaPos.Y, Y: -DeltaPos.X }).Normalize2D();

        // Come up with the final start/end points
        let DirectionBias = Normal.Multiply_Vector2DFloat(LineSeparationAmount);
        let LengthBias = UnitDelta.Multiply_Vector2DFloat(ArrowRadius.X);
        let StartPoint = StartAnchorPoint.Add_Vector2DVector2D(DirectionBias).Add_Vector2DVector2D(LengthBias);
        let EndPoint = EndAnchorPoint.Add_Vector2DVector2D(DirectionBias).Subtract_Vector2DVector2D(LengthBias);

        // Draw a line/spline
        DrawingPolicyContainer.DrawConnection(StartPoint, EndPoint, Params);

        // Draw the arrow
        let ArrowDrawPos = EndPoint.Subtract_Vector2DVector2D(ArrowRadius);
        let AngleInRadians = Math.atan2(DeltaPos.Y, DeltaPos.X);

        DrawingPolicyContainer.MakeRotatedBox(ArrowDrawPos, AngleInRadians, Params.WireColor);
    }
    schema.OnDrawSplineWithArrow = [
        (StartAnchorPoint, EndAnchorPoint, Params, DrawingPolicyContainer, ArrowRadius) => {
            Internal_DrawLineWithArrow(DrawingPolicyContainer, StartAnchorPoint, EndAnchorPoint, Params, ArrowRadius);
            if (Params.bUserFlag1) {
                Internal_DrawLineWithArrow(DrawingPolicyContainer, EndAnchorPoint, StartAnchorPoint, Params, ArrowRadius);
            }

        }
    ];

    schema.OnDrawSplineWithArrow_Geom = [
        (StartGeom, EndGeom, Params, DrawingPolicyContainer) => {
            // Get a reasonable seed point (halfway between the boxes)
            let StartCenter = StartGeom.CenterOf();
            let EndCenter = EndGeom.CenterOf();
            let SeedPoint = StartCenter.Add_Vector2DVector2D(EndCenter).Multiply_Vector2DFloat(0.5);

            // Find the (approximate) closest points between the two boxes
            let StartAnchorPoint = StartGeom.FindClosestPointOnGeom(SeedPoint);
            let EndAnchorPoint = EndGeom.FindClosestPointOnGeom(SeedPoint);

            DrawingPolicyContainer.DrawSplineWithArrow(StartAnchorPoint, EndAnchorPoint, Params);
        }
    ];

    schema.OnComputeSplineTangent = [
        (Start, End) => {
            let Delta = End.Subtract_Vector2DVector2D(Start);
            let NormDelta = Delta.Normalize2D();

            return NormDelta;
        }
    ];

    /**********************
     ** SNodePin Delegate */
    schema.OnUsingDefaultPin = [
        () => true
    ];

    schema.OnGetSlateBrushName = [
        (bHovered) => bHovered ? 'Graph.StateNode.Pin.BackgroundHovered' : 'Graph.StateNode.Pin.Background'
    ];

    /********************
     ** SNode  Delegate */
    schema.OnUsingCustomContent = [
        (node) => true
    ];

    schema.OnDisableMakePins = [
        (node) => node.IsTrainsionNode()
    ];

    schema.OnSkipMoveTo = [
        (node) => node.IsTrainsionNode()
    ];

    schema.OnRequiresSecondPassLayout = [
        (node) => node.IsTrainsionNode()
    ];

    schema.OnPerformSecondPassLayout = [
        (node) => {
            if (node.IsTrainsionNode()) {

                let PrevState = node.GetPreviousState()
                let NextState = node.GetNextState()

                if (PrevState && NextState) {
                    let OutTransitions = [];

                    _.each(PrevState.GetOutputPin().GetLinkedTo(), pin => {
                        let TargetNode = pin.GetOwningNode();
                        if (TargetNode.IsTrainsionNode() && TargetNode.GetNextState() == NextState) {
                            OutTransitions.push(pin)
                        }
                    })

                    _.each(PrevState.GetInputPin().GetLinkedTo(), pin => {
                        let TargetNode = pin.GetOwningNode();
                        if (TargetNode.IsTrainsionNode() && TargetNode.Bidirectional && TargetNode.GetNextState() == NextState) {
                            OutTransitions.push(pin)
                        }
                    })

                    let container = new JavascriptPerformSecondPassLayoutContainer
                    let Index = _.findIndex(OutTransitions, TargetNode => TargetNode == node)
                    container.NodeIndex = Index == -1 ? 0 : Index;
                    container.MaxNodes = 1;
                    container.PrevNode = PrevState;
                    container.NextNode = NextState;
                    return container;
                }
            }
        }
    ];

    schema.OnMouseEnter = [
        (node, slatenode) => {
            if (node.IsTrainsionNode()) {
                slatenode.AddPinToHoverSet(node.GetInputPin())
            }
        }
    ];

    schema.OnMouseLeave = [
        (node, slatenode) => {
            if (node.IsTrainsionNode()) {
                slatenode.RemovePinFromHoverSet(node.GetInputPin())
            }
        }
    ];

    /*************************
     ** Schema  Delegate */
    schema.OnTryCreateConnection = [
        (PinA, PinB) => {
            if (PinB.GetDirection() == PinA.GetDirection()) {
                let Node = PinB.GetOwningNode()
                if (Node) {
                    if (PinA.GetDirection() == 'EGPD_Input') {
                        return { PinA, PinB: Node.GetOutputPin() }
                    }
                    else {
                        return { PinA, PinB: Node.GetInputPin() }
                    }
                }
            }
            return { PinA, PinB }
        }
    ];

    schema.OnCanCreateConnection = [
        (a, b) => {
            if (a.GetOwningNode() == b.GetOwningNode()) {
                return { Response: 'CONNECT_RESPONSE_DISALLOW', Message: '같은 노드인데요...' }
            }

            return { Response: 'CONNECT_RESPONSE_MAKE_WITH_CONVERSION_NODE', Message: '가능합니다' }
        }
    ];

    schema.OnAllocateDefaultPins = [
        (node) => {
            node.CreatePin('EGPD_Input', 'Transition', '', null, "In", {ContainerType: EPinContainerType.None, bIsReference: false, bIsConst: false, Index:-1})
            node.CreatePin('EGPD_Output', 'Transition', '', null, "Out", {ContainerType: EPinContainerType.None, bIsReference: false, bIsConst: false, Index:-1})
        }
    ];

    return {
        'GraphSchema': schema,
        'NodeSchema': nodes,
    };
}