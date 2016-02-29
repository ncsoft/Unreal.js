# Unreal.js

Unreal.js is a plug-in which brings V8-powered Javascript into UnrealEngine4. 

- [Update notes](https://github.com/ncsoft/Unreal.js/wiki/Update-notes)

### Features
- Powered by latest V8 (ES6)
- CommonJS modules
- Full access to the whole UnrealEngine API
- Free to subclass existing classes including blueprint
- Web-dev like UMG ([Jade](http://jade-lang.com), pseudo-css, pseudo-[angular.js](https://angularjs.org/))
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

### Install and play
- Make sure you have [UnrealEngine 4.10.4 canonical build](https://www.unrealengine.com/dashboard).
- Download [prebuilt UnrealJS plugin](https://github.com/ncsoft/Unreal.js/releases) and unzip into `Examples/Plugins/UnrealJS`.
 * Make sure your directory layout is correct:
  ```
 Examples/          # project root directory
     Content/
         Scripts/   # "npm install" here
     Plugins/
         UnrealJS/
```            
- `cd Examples/Content/Scripts && npm i` to install node.js packages which are required to run examples.
- Open `Examples/JavascriptPlayground.uproject`
- Activate `JavascriptConsole` by clicking `Windows - Developer Tools - JavascriptConsole`.

### Build
- Download prebuilt V8 and unzip into .../Plugins/UnrealJS. (files are located in *releases*)
- ```mklink /d /j Build/Plugins Plugins```
- ```mklink /d /j Examples/Plugins Plugins```

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

#### Web-dev like
```jade
div
	span.full
		Button.full
			text {{text}}
		div.full
			Button.full(fn.on-clicked="inc()")
				text {{count}}
			Button.full(fn.on-clicked="add()")
				text Click button above!
	span
		text.yellow >
		EditableText(Binding.Text='text',
			fn.on-text-changed='text = ^arguments[0]',
			HintText="Your secret goes here")
		
	list.full(repeat='item in items',on-click="discard(item)") 
		HorizontalBox.small
			text.full {{item.key}}
			text.full {{item.value}}
```
