// PictureInPictureWindow对象
PictureInPictureWindow = function PictureInPictureWindow(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof PictureInPictureWindow) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('PictureInPictureWindow 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(PictureInPictureWindow, "PictureInPictureWindow");
PictureInPictureWindow.prototype.__proto__=EventTarget.prototype;
PictureInPictureWindow.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(PictureInPictureWindow.prototype, "width", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PictureInPictureWindow.prototype, "PictureInPictureWindow", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(PictureInPictureWindow.prototype, "height", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PictureInPictureWindow.prototype, "PictureInPictureWindow", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(PictureInPictureWindow.prototype, "onresize", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PictureInPictureWindow.prototype, "PictureInPictureWindow", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, PictureInPictureWindow.prototype, "PictureInPictureWindow", "bodefault_set", arguments)}},);
