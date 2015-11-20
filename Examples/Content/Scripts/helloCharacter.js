(function (global) {
    "use strict"
    
    let _ = require('lodash')
    
    function GetPC() {
        return PlayerController.C(GWorld.GetAllActorsOfClass(PlayerController).OutActors[0])
    }
    
    function main() {        
        let PC = GetPC()
        
        class MyCharacter extends Character {
            ctor() {        
                let movement = this.GetMovementComponent()         
                movement.bUseRVOAvoidance = true
                movement.bOrientRotationToMovement = true
                this.bUseControllerRotationYaw = false                
                                
                this.Mesh.AddLocalOffset({Y:0.000856,Z:-97})
                this.Mesh.AddLocalRotation({Yaw:270})
                this.Mesh.SetSkeletalMesh(SkeletalMesh.Load('/Game/Mannequin/Character/Mesh/SK_Mannequin.SK_Mannequin'))
                this.Mesh.SetAnimInstanceClass(AnimBlueprint.Load('/Game/Mannequin/Animations/ThirdPerson_AnimBP.ThirdPerson_AnimBP').GeneratedClass)
            }
        }
        
        let MyCharacter_C = require('uclass')()(global,MyCharacter)
        
        function randomPoint() {
            return GWorld.GetRandomPoint(GWorld.NavigationSystem.MainNavData)
        }        
        
        function createCharacter() {
            let pos = randomPoint()
            pos.Z += 100
            let character = Character.C(new MyCharacter_C(GWorld,pos))
            character.SpawnDefaultController()
            let controller = AIController.C(character.Controller)
            
            function wander() {                                    
                controller.MoveToLocation(randomPoint(),-1,true,true,false,false)
            }
            
            controller.ReceiveMoveCompleted.Add( (reqid,status) => {                    
                wander()
            })
            
            wander()
            return character
        }
        
        let characters = _.range(0,20).map(()=>{
            while (true) {
                try {
                    return createCharacter()                
                } 
                catch (e) {
                }
            }
        })
        
        let alive = true
        
        function tick() {
            if (!alive) return;            
            
            characters = _.filter(characters,(c) => c.IsValid())
            let sum = _.reduce(characters,(sum,c) => KismetMathLibrary.Add_VectorVector(sum,c.GetActorLocation()),{});                     
            let center = KismetMathLibrary.Divide_VectorInt(sum,characters.length)
            PC.GetControlledPawn().SetActorLocation(KismetMathLibrary.Add_VectorVector(center,{Z:400}))                
            PC.SetInitialLocationAndRotation({},{Yaw:(Date.now() / 100) % 360,Pitch:-40,Roll:0})                                    
            
            process.nextTick(tick);
        }
        tick()                
        
        return function () {
            alive = false
            characters.forEach((a) => a.DestroyActor())
        }                
    }
    
    try {
        module.exports = () => {
            let cleanup = null
            process.nextTick(() => cleanup = main());
            return () => cleanup()
        }
    }
    catch (e) {
        require('bootstrap')('helloCharacter')
    }
})(this)
