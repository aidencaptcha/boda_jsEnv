// PannerNode对象
PannerNode = function PannerNode(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof PannerNode) ){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'PannerNode': 1 argument required, but only 0 present.")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('PannerNode 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(PannerNode, "PannerNode");
PannerNode.prototype.__proto__=AudioNode.prototype;
PannerNode.__proto__=AudioNode;
bodavm.toolsFunc.defineProperty(PannerNode.prototype, "panningModel", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(PannerNode.prototype, "positionX", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(PannerNode.prototype, "positionY", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(PannerNode.prototype, "positionZ", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(PannerNode.prototype, "orientationX", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(PannerNode.prototype, "orientationY", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(PannerNode.prototype, "orientationZ", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(PannerNode.prototype, "distanceModel", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(PannerNode.prototype, "refDistance", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(PannerNode.prototype, "maxDistance", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(PannerNode.prototype, "rolloffFactor", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(PannerNode.prototype, "coneInnerAngle", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(PannerNode.prototype, "coneOuterAngle", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(PannerNode.prototype, "coneOuterGain", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(PannerNode.prototype, "setOrientation", {configurable:true, enumerable:true, writable:true, value:function setOrientation (){return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "setOrientation", arguments)}},);
bodavm.toolsFunc.defineProperty(PannerNode.prototype, "setPosition", {configurable:true, enumerable:true, writable:true, value:function setPosition (){return bodavm.toolsFunc.dispatch(this, PannerNode.prototype, "PannerNode", "setPosition", arguments)}},);
