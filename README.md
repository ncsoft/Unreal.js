[![star this repo](http://githubbadges.com/star.svg?user=ncsoft&repo=Unreal.js&style=default)](https://github.com/ncsoft/Unreal.js)
[![fork this repo](http://githubbadges.com/fork.svg?user=ncsoft&repo=Unreal.js&style=default)](https://github.com/ncsoft/Unreal.js/fork)
# Unreal.js

Unreal.js is a plug-in which brings V8-powered Javascript into UnrealEngine4. 

- [Update notes](https://github.com/ncsoft/Unreal.js/wiki/Update-notes)

### Features
- Powered by latest V8 (ES6)
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
  
### Wiki
- https://github.com/ncsoft/Unreal.js/wiki

### Dummy demo 
- Very simple demo available (https://github.com/ncsoft/Unreal.js/archive/snippet-editor.zip)

### Install and play
- Video tutorial available! 
 * https://www.youtube.com/watch?v=XxPSLjBg7DU
 * https://www.youtube.com/watch?v=QDEy71oiHOg
- Make sure you have [UnrealEngine 4.11.2 canonical build](https://www.unrealengine.com/dashboard).
- Download [prebuilt UnrealJS plugin](https://github.com/ncsoft/Unreal.js/releases) and unzip into `Examples/Plugins/UnrealJS`.
 * Make sure your directory layout is correct:
  ```
 Examples/          # project root directory
     Content/
         Scripts/   # "npm install" here
     Plugins/
         UnrealJS/
```            
- Open `Examples/JavascriptPlayground.uproject`
- Activate `JavascriptConsole` by clicking `Windows - Developer Tools - JavascriptConsole`.

### Build
- Create a C++ project
- Download [ready to build Zip file](https://github.com/ncsoft/Unreal.js-core/releases/tag/ready-to-build) and unzip into Plugins folder under your project root.
 * <your project root>/Plugins/UnrealJS/... unzip here
- Open your `uproject` and click yes to build modules.
 
### License
Apache2

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
