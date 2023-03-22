let _ = require('lodash')
let delay = require('./lib/delay')
let instantiator = require('instantiator')
let UMG = require('UMG')

async function mixamo(index=0) {
    const bp = Blueprint.Load('/Game/MixamoAnimPack/Mixamo_Maw/Mixamo_Maw.Mixamo_Maw')
    if (!bp) {
        console.error("This demo requires mixamo plugin.")
        return
    }
    
    let character = new bp.GeneratedClass(GWorld,{X:(index - 1) * 250,Z:100},{Yaw:180})
    let controller = new AIController(GWorld)
    controller.Possess(character)

    function moveto(loc) {
        let result = controller.MoveToLocation(loc,10,true,true,true,true)
        if (result == 'RequestSuccessful') {
            return new Promise(resolve => controller.ReceiveMoveCompleted = [resolve])
        } else if (result == 'AlreadyAtGoal') {
            return Promise.resolve()
        } else {
            return Promise.reject(result)
        }
    }

    async function wander() {
        const dummy = controller.GetActorLocation()
        let { RandomLocation: loc } = NavigationSystemV1.GetRandomReachablePointInRadius(character, controller.GetActorLocation(), dummy, 1000)
        await moveto(loc)
    }

    async function random() {
        let fn = _.shuffle(_.without(_.values(actions),random))[0]
        await fn()
    }

    async function jump() {
        character.LaunchCharacter({Z:500})
        await delay(1000)
    }

    async function attack() {
        character["attacking?"] = true
        await delay(500)
        character["attacking?"] = false
    }

    function make_widget(opts,design) {
        let wc = new WidgetComponent(character)
        wc.SetRelativeLocation(opts.Location || {Z:150})
        wc.AttachTo(character.RootComponent)
        wc.Pivot = opts.Pivot || {X:0.5,Y:0}
        wc.Space = 'Screen'
        wc.DrawSize = opts.DrawSize || {X:200,Y:100}
        let widget = GWorld.CreateWidget(JavascriptWidget, GWorld.GetPlayerController(0))
        widget.proxy = {}
        widget.JavascriptContext = Context
        widget.SetRootWidget(instantiator(design))
        wc.SetWidget(widget)
        wc.bIsTwoSided = true
        wc.RegisterComponent()

        return function () {
            if (!character.IsValid()) return
            wc.UnregisterComponent()
            wc.DestroyComponent(character)
        }
    }

    function say(what) {
        return async function() {
            let bye = make_widget(
                {},
                UMG(SizeBox,{WidthOverride:200},
                    UMG.div({},
                        UMG.text({HorizontalAlignment:'EHTA_Center'},what),
                        UMG(Button,{},"Click me")
                    )
                )
            )
            await delay(1000)
            bye()
        }
    }

    let actions = {
        wander: wander,
        random: random,
        jump: jump,
        attack: attack,
        hello: say('안녕하세요'),
        bye: say('Good day!')
    }

    async function loop(N,what) {
        for (var i=0; i<N; ++i) {
            if (!character.IsValid()) return
            await what()
        }
    }

    async function seq(...ops) {
        for (var i=0; i<ops.length; ++i) {
            if (!character.IsValid()) return
            await ops[i]
        }
    }

    async function behaviortree() {
        await loop(20,actions.random)
    }

    const font = {
        FontObject : GEngine.SmallFont,
        Size : 15
    }

    function detail() {
        let alive = true, elem
        let bye = make_widget({
            Pivot:{Y:0},
            Location:{Z:-100},
            DrawSize:{X:300,Y:300}
        },
            UMG.div({},
                UMG.text({
                    Font:font,
                    $link:_elem => elem = _elem
                },"test!")
            )
        )
        function loop() {
            if (!alive || !character.IsValid()) return
            if (elem) {
                let loc = character.GetActorLocation()
                elem.SetText(`${loc.X.toFixed(2)}, ${loc.Y.toFixed(2)}, ${loc.Z.toFixed(2)}`)
            }
            process.nextTick(loop)
        }
        loop()

        return function () {
            alive = false
            bye()
        }
    }

    let bye = detail()

    await say()
    await behaviortree()

    bye()
}

module.exports = mixamo