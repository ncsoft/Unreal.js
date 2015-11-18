# Unreal.js

Unreal.js is a plug-in which brings V8-powered Javascript into UnrealEngine4. 

### Features
- Powered by latest V8 (ES6)
- CommonJS modules
- Full access to the whole UnrealEngine API
- Free to subclass existing classes including blueprint
- Web-dev like UMG (Jade, pseudo-css, pseudo-angular.js)
- Live reload
- Communicate with outer world: REST, process(pipe), arraybuffer, ...
- Bridge API for editor extension
- Auto-completion for Visual Studio (auto-generated *.d.ts)
- Dedicated Javascript console on UnrealEditor

### Status
- `Preparing for shipment`

### License
Apache2

### Examples

#### Create a new actor
```js
let myActor = new Actor(GWorld,{X:10,Y:20,Z:30});
myActor.SetActorLocation({X:40,Y:80,Z:120});
```

#### Subclass an existing class
```js
class MyActor extends Actor {
  properties() {
    this.MyProp/*EditAnywhere+Replicated+int*/;
  }
  RPC(x/*int*/) /*Server+Reliable*/ {
    console.log('This function is replicated',This.MyProp++);
  }
}
let MyActor_C = require('uclass')()(global,MyActor);
if (GWorld.IsServer()) { 
  new MyActor_C(GWorld);
}
```

#### Node.js like 
```js
let _ = require('lodash');
let kick = () => {
  console.log("Hello timer!",_.keys(this));
  setTimeout(kick,1000);
};
kick();
```
