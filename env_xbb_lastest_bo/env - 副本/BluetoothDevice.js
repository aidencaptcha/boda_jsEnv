// BluetoothDevice对象
BluetoothDevice = function BluetoothDevice(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof BluetoothDevice) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('BluetoothDevice 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(BluetoothDevice, "BluetoothDevice");
BluetoothDevice.prototype.__proto__=EventTarget.prototype;
BluetoothDevice.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(BluetoothDevice.prototype, "id", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, BluetoothDevice.prototype, "BluetoothDevice", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(BluetoothDevice.prototype, "name", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, BluetoothDevice.prototype, "BluetoothDevice", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(BluetoothDevice.prototype, "gatt", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, BluetoothDevice.prototype, "BluetoothDevice", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(BluetoothDevice.prototype, "ongattserverdisconnected", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, BluetoothDevice.prototype, "BluetoothDevice", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, BluetoothDevice.prototype, "BluetoothDevice", "bodefault_set", arguments)}},);
