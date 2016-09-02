[![star this repo](http://githubbadges.com/star.svg?user=ncsoft&repo=Unreal.js&style=default)](https://github.com/ncsoft/Unreal.js)
[![fork this repo](http://githubbadges.com/fork.svg?user=ncsoft&repo=Unreal.js&style=default)](https://github.com/ncsoft/Unreal.js/fork)
# Unreal.js 

Unreal.js is a plug-in which brings V8-powered Javascript into UnrealEngine4. 

- [Link to the Unreal Engine Marketplace](https://www.unrealengine.com/marketplace/unrealjs)
- [Update notes](https://github.com/ncsoft/Unreal.js/wiki/Update-notes)

### Features
- Powered by latest V8 (ES6, 5.1.300)
- CommonJS modules
- Full access to the whole UnrealEngine API
- Free to subclass existing classes including blueprint
- Live reload
- Communicate with outer world: REST(http), websocket, process(pipe), arraybuffer, ...
- Bridge API for editor extension
- Auto-completion for **Visual Studio Code** (auto-generated [*.d.ts](http://definitelytyped.org/))
- Debugging within **Visual Studio**, Visual Studio Code, WebStorm and all IDE which supports V8 protocol
- Profiling supported by V8
- Dedicated Javascript console on UnrealEditor

  ![](https://github.com/ncsoft/Unreal.js/blob/master/doc/images/UnrealJs_JavascriptConsole.gif) 

- (Full) access to existing javascript libraries via npm, bower, ...

### Dummy demo 
- Very simple demo available (https://github.com/ncsoft/Unreal.js/archive/snippet-editor.zip)

### Tutorials & documentation

- [Building the plugin](https://github.com/ncsoft/Unreal.js/wiki/Building-the-plugin)
- [Running the examples](https://github.com/ncsoft/Unreal.js/wiki/Running-the-examples)
- [Video tutorials](https://github.com/ncsoft/Unreal.js/wiki/Video-tutorials)
- [Wiki](https://github.com/ncsoft/Unreal.js/wiki)
 
### License
- Licensed under the MIT license
- see [LICENSE](https://github.com/ncsoft/Unreal.js/blob/master/LICENSE) for details

### Examples

#### [2048](https://github.com/gabrielecirulli/2048)
- [View source code](https://github.com/ncsoft/Unreal.js/blob/master/Examples/Content/Scripts/2048/)

  ![](https://github.com/ncsoft/Unreal.js/blob/master/doc/images/UnrealJs_example_2048.gif)

#### [Springy](http://getspringy.com)
- [View source code](https://github.com/ncsoft/Unreal.js/blob/master/Examples/Content/Scripts/helloSpringy.js)

  ![](https://github.com/ncsoft/Unreal.js/blob/master/doc/images/UnrealJs_springy.gif)

#### Editor extension
- [View source code](https://github.com/ncsoft/Unreal.js/blob/master/Examples/Content/Scripts/extension-spiralGenerator.js)

  ![](https://github.com/ncsoft/Unreal.js/blob/master/doc/images/UnrealJs_editor.gif)
  
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
    console.log('This function is replicated',this.MyProp++);
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
