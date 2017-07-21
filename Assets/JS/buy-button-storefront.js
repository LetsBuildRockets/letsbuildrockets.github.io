var ShopifyBuy = (function () {
'use strict';

var commonjsGlobal$1 = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
}



function createCommonjsModule$1(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var commonjsGlobal$$1 = typeof window !== 'undefined' ? window : typeof commonjsGlobal$1 !== 'undefined' ? commonjsGlobal$1 : typeof self !== 'undefined' ? self : {}

function interopDefault(ex) {
	return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

function createCommonjsModule$$1(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var polyfilled = createCommonjsModule$$1(function (module) {
'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}(function(){'use strict';if(self.fetch){return;}function normalizeName(name){if(typeof name!=='string'){name=String(name);}if(/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)){throw new TypeError('Invalid character in header field name');}return name.toLowerCase();}function normalizeValue(value){if(typeof value!=='string'){value=String(value);}return value;}function Headers(headers){this.map={};if(headers instanceof Headers){headers.forEach(function(value,name){this.append(name,value);},this);}else if(headers){Object.getOwnPropertyNames(headers).forEach(function(name){this.append(name,headers[name]);},this);}}Headers.prototype.append=function(name,value){name=normalizeName(name);value=normalizeValue(value);var list=this.map[name];if(!list){list=[];this.map[name]=list;}list.push(value);};Headers.prototype['delete']=function(name){delete this.map[normalizeName(name)];};Headers.prototype.get=function(name){var values=this.map[normalizeName(name)];return values?values[0]:null;};Headers.prototype.getAll=function(name){return this.map[normalizeName(name)]||[];};Headers.prototype.has=function(name){return this.map.hasOwnProperty(normalizeName(name));};Headers.prototype.set=function(name,value){this.map[normalizeName(name)]=[normalizeValue(value)];};Headers.prototype.forEach=function(callback,thisArg){Object.getOwnPropertyNames(this.map).forEach(function(name){this.map[name].forEach(function(value){callback.call(thisArg,value,name,this);},this);},this);};function consumed(body){if(body.bodyUsed){return Promise.reject(new TypeError('Already read'));}body.bodyUsed=true;}function fileReaderReady(reader){return new Promise(function(resolve,reject){reader.onload=function(){resolve(reader.result);};reader.onerror=function(){reject(reader.error);};});}function readBlobAsArrayBuffer(blob){var reader=new FileReader();reader.readAsArrayBuffer(blob);return fileReaderReady(reader);}function readBlobAsText(blob){var reader=new FileReader();reader.readAsText(blob);return fileReaderReady(reader);}var support={blob:'FileReader'in self&&'Blob'in self&&function(){try{new Blob();return true;}catch(e){return false;}}(),formData:'FormData'in self,arrayBuffer:'ArrayBuffer'in self};function Body(){this.bodyUsed=false;this._initBody=function(body){this._bodyInit=body;if(typeof body==='string'){this._bodyText=body;}else if(support.blob&&Blob.prototype.isPrototypeOf(body)){this._bodyBlob=body;}else if(support.formData&&FormData.prototype.isPrototypeOf(body)){this._bodyFormData=body;}else if(!body){this._bodyText='';}else if(support.arrayBuffer&&ArrayBuffer.prototype.isPrototypeOf(body)){// Only support ArrayBuffers for POST method.
// Receiving ArrayBuffers happens via Blobs, instead.
}else{throw new Error('unsupported BodyInit type');}};if(support.blob){this.blob=function(){var rejected=consumed(this);if(rejected){return rejected;}if(this._bodyBlob){return Promise.resolve(this._bodyBlob);}else if(this._bodyFormData){throw new Error('could not read FormData body as blob');}else{return Promise.resolve(new Blob([this._bodyText]));}};this.arrayBuffer=function(){return this.blob().then(readBlobAsArrayBuffer);};this.text=function(){var rejected=consumed(this);if(rejected){return rejected;}if(this._bodyBlob){return readBlobAsText(this._bodyBlob);}else if(this._bodyFormData){throw new Error('could not read FormData body as text');}else{return Promise.resolve(this._bodyText);}};}else{this.text=function(){var rejected=consumed(this);return rejected?rejected:Promise.resolve(this._bodyText);};}if(support.formData){this.formData=function(){return this.text().then(decode);};}this.json=function(){return this.text().then(JSON.parse);};return this;}// HTTP methods whose capitalization should be normalized
var methods=['DELETE','GET','HEAD','OPTIONS','POST','PUT'];function normalizeMethod(method){var upcased=method.toUpperCase();return methods.indexOf(upcased)>-1?upcased:method;}function Request(input,options){options=options||{};var body=options.body;if(Request.prototype.isPrototypeOf(input)){if(input.bodyUsed){throw new TypeError('Already read');}this.url=input.url;this.credentials=input.credentials;if(!options.headers){this.headers=new Headers(input.headers);}this.method=input.method;this.mode=input.mode;if(!body){body=input._bodyInit;input.bodyUsed=true;}}else{this.url=input;}this.credentials=options.credentials||this.credentials||'omit';if(options.headers||!this.headers){this.headers=new Headers(options.headers);}this.method=normalizeMethod(options.method||this.method||'GET');this.mode=options.mode||this.mode||null;this.referrer=null;if((this.method==='GET'||this.method==='HEAD')&&body){throw new TypeError('Body not allowed for GET or HEAD requests');}this._initBody(body);}Request.prototype.clone=function(){return new Request(this);};function decode(body){var form=new FormData();body.trim().split('&').forEach(function(bytes){if(bytes){var split=bytes.split('=');var name=split.shift().replace(/\+/g,' ');var value=split.join('=').replace(/\+/g,' ');form.append(decodeURIComponent(name),decodeURIComponent(value));}});return form;}function headers(xhr){var head=new Headers();var pairs=xhr.getAllResponseHeaders().trim().split('\n');pairs.forEach(function(header){var split=header.trim().split(':');var key=split.shift().trim();var value=split.join(':').trim();head.append(key,value);});return head;}Body.call(Request.prototype);function Response(bodyInit,options){if(!options){options={};}this._initBody(bodyInit);this.type='default';this.status=options.status;this.ok=this.status>=200&&this.status<300;this.statusText=options.statusText;this.headers=options.headers instanceof Headers?options.headers:new Headers(options.headers);this.url=options.url||'';}Body.call(Response.prototype);Response.prototype.clone=function(){return new Response(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new Headers(this.headers),url:this.url});};Response.error=function(){var response=new Response(null,{status:0,statusText:''});response.type='error';return response;};var redirectStatuses=[301,302,303,307,308];Response.redirect=function(url,status){if(redirectStatuses.indexOf(status)===-1){throw new RangeError('Invalid status code');}return new Response(null,{status:status,headers:{location:url}});};self.Headers=Headers;self.Request=Request;self.Response=Response;self.fetch=function(input,init){return new Promise(function(resolve,reject){var request;if(Request.prototype.isPrototypeOf(input)&&!init){request=input;}else{request=new Request(input,init);}var xhr=new XMLHttpRequest();function responseURL(){if('responseURL'in xhr){return xhr.responseURL;}// Avoid security warnings on getResponseHeader when not allowed by CORS
if(/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())){return xhr.getResponseHeader('X-Request-URL');}return;}xhr.onload=function(){var status=xhr.status===1223?204:xhr.status;if(status<100||status>599){reject(new TypeError('Network request failed'));return;}var options={status:status,statusText:xhr.statusText,headers:headers(xhr),url:responseURL()};var body='response'in xhr?xhr.response:xhr.responseText;resolve(new Response(body,options));};xhr.onerror=function(){reject(new TypeError('Network request failed'));};xhr.open(request.method,request.url,true);if(request.credentials==='include'){xhr.withCredentials=true;}if('responseType'in xhr&&support.blob){xhr.responseType='blob';}request.headers.forEach(function(value,name){xhr.setRequestHeader(name,value);});xhr.send(typeof request._bodyInit==='undefined'?null:request._bodyInit);});};self.fetch.polyfill=true;})();var toString$1={}.toString;var _cof=function _cof(it){return toString$1.call(it).slice(8,-1);};function createCommonjsModule$$1(fn,module){return module={exports:{}},fn(module,module.exports),module.exports;}var _global=createCommonjsModule$$1(function(module){// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global=module.exports=typeof window!='undefined'&&window.Math==Math?window:typeof self!='undefined'&&self.Math==Math?self:Function('return this')();if(typeof __g=='number')__g=global;// eslint-disable-line no-undef
});var global$1=_global;var SHARED='__core-js_shared__';var store=global$1[SHARED]||(global$1[SHARED]={});var _shared=function _shared(key){return store[key]||(store[key]={});};var id=0;var px=Math.random();var _uid=function _uid(key){return'Symbol('.concat(key===undefined?'':key,')_',(++id+px).toString(36));};var _wks=createCommonjsModule$$1(function(module){var store=_shared('wks'),uid=_uid,_Symbol=_global.Symbol,USE_SYMBOL=typeof _Symbol=='function';var $exports=module.exports=function(name){return store[name]||(store[name]=USE_SYMBOL&&_Symbol[name]||(USE_SYMBOL?_Symbol:uid)('Symbol.'+name));};$exports.store=store;});// getting tag from 19.1.3.6 Object.prototype.toString()
var cof=_cof;var TAG=_wks('toStringTag');var ARG=cof(function(){return arguments;}())=='Arguments';// fallback for IE11 Script Access Denied error
var tryGet=function tryGet(it,key){try{return it[key];}catch(e){/* empty */}};var _classof=function _classof(it){var O,T,B;return it===undefined?'Undefined':it===null?'Null'// @@toStringTag case
:typeof(T=tryGet(O=Object(it),TAG))=='string'?T// builtinTag case
:ARG?cof(O)// ES3 arguments fallback
:(B=cof(O))=='Object'&&typeof O.callee=='function'?'Arguments':B;};var _isObject=function _isObject(it){return(typeof it==='undefined'?'undefined':_typeof(it))==='object'?it!==null:typeof it==='function';};var isObject=_isObject;var _anObject=function _anObject(it){if(!isObject(it))throw TypeError(it+' is not an object!');return it;};var _fails=function _fails(exec){try{return!!exec();}catch(e){return true;}};// Thank's IE8 for his funny defineProperty
var _descriptors=!_fails(function(){return Object.defineProperty({},'a',{get:function get(){return 7;}}).a!=7;});var isObject$1=_isObject;var document$1=_global.document;var is=isObject$1(document$1)&&isObject$1(document$1.createElement);var _domCreate=function _domCreate(it){return is?document$1.createElement(it):{};};var _ie8DomDefine=!_descriptors&&!_fails(function(){return Object.defineProperty(_domCreate('div'),'a',{get:function get(){return 7;}}).a!=7;});// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject$2=_isObject;// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive=function _toPrimitive(it,S){if(!isObject$2(it))return it;var fn,val;if(S&&typeof(fn=it.toString)=='function'&&!isObject$2(val=fn.call(it)))return val;if(typeof(fn=it.valueOf)=='function'&&!isObject$2(val=fn.call(it)))return val;if(!S&&typeof(fn=it.toString)=='function'&&!isObject$2(val=fn.call(it)))return val;throw TypeError("Can't convert object to primitive value");};var anObject=_anObject;var IE8_DOM_DEFINE=_ie8DomDefine;var toPrimitive=_toPrimitive;var dP$1=Object.defineProperty;var f=_descriptors?Object.defineProperty:function defineProperty(O,P,Attributes){anObject(O);P=toPrimitive(P,true);anObject(Attributes);if(IE8_DOM_DEFINE)try{return dP$1(O,P,Attributes);}catch(e){/* empty */}if('get'in Attributes||'set'in Attributes)throw TypeError('Accessors not supported!');if('value'in Attributes)O[P]=Attributes.value;return O;};var _objectDp={f:f};var _propertyDesc=function _propertyDesc(bitmap,value){return{enumerable:!(bitmap&1),configurable:!(bitmap&2),writable:!(bitmap&4),value:value};};var dP=_objectDp;var createDesc=_propertyDesc;var _hide=_descriptors?function(object,key,value){return dP.f(object,key,createDesc(1,value));}:function(object,key,value){object[key]=value;return object;};var hasOwnProperty={}.hasOwnProperty;var _has=function _has(it,key){return hasOwnProperty.call(it,key);};var _core=createCommonjsModule$$1(function(module){var core=module.exports={version:'2.4.0'};if(typeof __e=='number')__e=core;// eslint-disable-line no-undef
});var _redefine=createCommonjsModule$$1(function(module){var global=_global,hide=_hide,has=_has,SRC=_uid('src'),TO_STRING='toString',$toString=Function[TO_STRING],TPL=(''+$toString).split(TO_STRING);_core.inspectSource=function(it){return $toString.call(it);};(module.exports=function(O,key,val,safe){var isFunction=typeof val=='function';if(isFunction)has(val,'name')||hide(val,'name',key);if(O[key]===val)return;if(isFunction)has(val,SRC)||hide(val,SRC,O[key]?''+O[key]:TPL.join(String(key)));if(O===global){O[key]=val;}else{if(!safe){delete O[key];hide(O,key,val);}else{if(O[key])O[key]=val;else hide(O,key,val);}}// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype,TO_STRING,function toString(){return typeof this=='function'&&this[SRC]||$toString.call(this);});});// 19.1.3.6 Object.prototype.toString()
var classof=_classof;var test={};test[_wks('toStringTag')]='z';if(test+''!='[object z]'){_redefine(Object.prototype,'toString',function toString(){return'[object '+classof(this)+']';},true);}// 7.1.4 ToInteger
var ceil=Math.ceil;var floor=Math.floor;var _toInteger=function _toInteger(it){return isNaN(it=+it)?0:(it>0?floor:ceil)(it);};// 7.2.1 RequireObjectCoercible(argument)
var _defined=function _defined(it){if(it==undefined)throw TypeError("Can't call method on  "+it);return it;};var toInteger=_toInteger;var defined=_defined;// true  -> String#at
// false -> String#codePointAt
var _stringAt=function _stringAt(TO_STRING){return function(that,pos){var s=String(defined(that)),i=toInteger(pos),l=s.length,a,b;if(i<0||i>=l)return TO_STRING?'':undefined;a=s.charCodeAt(i);return a<0xd800||a>0xdbff||i+1===l||(b=s.charCodeAt(i+1))<0xdc00||b>0xdfff?TO_STRING?s.charAt(i):a:TO_STRING?s.slice(i,i+2):(a-0xd800<<10)+(b-0xdc00)+0x10000;};};var _library=false;var _aFunction=function _aFunction(it){if(typeof it!='function')throw TypeError(it+' is not a function!');return it;};// optional / simple context binding
var aFunction=_aFunction;var _ctx=function _ctx(fn,that,length){aFunction(fn);if(that===undefined)return fn;switch(length){case 1:return function(a){return fn.call(that,a);};case 2:return function(a,b){return fn.call(that,a,b);};case 3:return function(a,b,c){return fn.call(that,a,b,c);};}return function()/* ...args */{return fn.apply(that,arguments);};};var global$2=_global;var core=_core;var hide$1=_hide;var redefine$1=_redefine;var ctx=_ctx;var PROTOTYPE='prototype';var $export$1=function $export$1(type,name,source){var IS_FORCED=type&$export$1.F,IS_GLOBAL=type&$export$1.G,IS_STATIC=type&$export$1.S,IS_PROTO=type&$export$1.P,IS_BIND=type&$export$1.B,target=IS_GLOBAL?global$2:IS_STATIC?global$2[name]||(global$2[name]={}):(global$2[name]||{})[PROTOTYPE],exports=IS_GLOBAL?core:core[name]||(core[name]={}),expProto=exports[PROTOTYPE]||(exports[PROTOTYPE]={}),key,own,out,exp;if(IS_GLOBAL)source=name;for(key in source){// contains in native
own=!IS_FORCED&&target&&target[key]!==undefined;// export native or passed
out=(own?target:source)[key];// bind timers to global for call from export context
exp=IS_BIND&&own?ctx(out,global$2):IS_PROTO&&typeof out=='function'?ctx(Function.call,out):out;// extend global
if(target)redefine$1(target,key,out,type&$export$1.U);// export
if(exports[key]!=out)hide$1(exports,key,exp);if(IS_PROTO&&expProto[key]!=out)expProto[key]=out;}};global$2.core=core;// type bitmap
$export$1.F=1;// forced
$export$1.G=2;// global
$export$1.S=4;// static
$export$1.P=8;// proto
$export$1.B=16;// bind
$export$1.W=32;// wrap
$export$1.U=64;// safe
$export$1.R=128;// real proto method for `library`
var _export=$export$1;var _iterators={};// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof$1=_cof;var _iobject=Object('z').propertyIsEnumerable(0)?Object:function(it){return cof$1(it)=='String'?it.split(''):Object(it);};// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject=_iobject;var defined$1=_defined;var _toIobject=function _toIobject(it){return IObject(defined$1(it));};// 7.1.15 ToLength
var toInteger$1=_toInteger;var min=Math.min;var _toLength=function _toLength(it){return it>0?min(toInteger$1(it),0x1fffffffffffff):0;// pow(2, 53) - 1 == 9007199254740991
};var toInteger$2=_toInteger;var max=Math.max;var min$1=Math.min;var _toIndex=function _toIndex(index,length){index=toInteger$2(index);return index<0?max(index+length,0):min$1(index,length);};// false -> Array#indexOf
// true  -> Array#includes
var toIObject$1=_toIobject;var toLength=_toLength;var toIndex=_toIndex;var _arrayIncludes=function _arrayIncludes(IS_INCLUDES){return function($this,el,fromIndex){var O=toIObject$1($this),length=toLength(O.length),index=toIndex(fromIndex,length),value;// Array#includes uses SameValueZero equality algorithm
if(IS_INCLUDES&&el!=el)while(length>index){value=O[index++];if(value!=value)return true;// Array#toIndex ignores holes, Array#includes - not
}else for(;length>index;index++){if(IS_INCLUDES||index in O){if(O[index]===el)return IS_INCLUDES||index||0;}}return!IS_INCLUDES&&-1;};};var shared=_shared('keys');var uid=_uid;var _sharedKey=function _sharedKey(key){return shared[key]||(shared[key]=uid(key));};var has$1=_has;var toIObject=_toIobject;var arrayIndexOf=_arrayIncludes(false);var IE_PROTO$1=_sharedKey('IE_PROTO');var _objectKeysInternal=function _objectKeysInternal(object,names){var O=toIObject(object),i=0,result=[],key;for(key in O){if(key!=IE_PROTO$1)has$1(O,key)&&result.push(key);}// Don't enum bug & hidden keys
while(names.length>i){if(has$1(O,key=names[i++])){~arrayIndexOf(result,key)||result.push(key);}}return result;};// IE 8- don't enum bug keys
var _enumBugKeys='constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys=_objectKeysInternal;var enumBugKeys$1=_enumBugKeys;var _objectKeys=Object.keys||function keys(O){return $keys(O,enumBugKeys$1);};var dP$2=_objectDp;var anObject$2=_anObject;var getKeys=_objectKeys;var _objectDps=_descriptors?Object.defineProperties:function defineProperties(O,Properties){anObject$2(O);var keys=getKeys(Properties),length=keys.length,i=0,P;while(length>i){dP$2.f(O,P=keys[i++],Properties[P]);}return O;};var _html=_global.document&&document.documentElement;// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject$1=_anObject;var dPs=_objectDps;var enumBugKeys=_enumBugKeys;var IE_PROTO=_sharedKey('IE_PROTO');var Empty=function Empty(){/* empty */};var PROTOTYPE$1='prototype';// Create object with fake `null` prototype: use iframe Object with cleared prototype
var _createDict=function createDict(){// Thrash, waste and sodomy: IE GC bug
var iframe=_domCreate('iframe'),i=enumBugKeys.length,lt='<',gt='>',iframeDocument;iframe.style.display='none';_html.appendChild(iframe);iframe.src='javascript:';// eslint-disable-line no-script-url
// createDict = iframe.contentWindow.Object;
// html.removeChild(iframe);
iframeDocument=iframe.contentWindow.document;iframeDocument.open();iframeDocument.write(lt+'script'+gt+'document.F=Object'+lt+'/script'+gt);iframeDocument.close();_createDict=iframeDocument.F;while(i--){delete _createDict[PROTOTYPE$1][enumBugKeys[i]];}return _createDict();};var _objectCreate=Object.create||function create(O,Properties){var result;if(O!==null){Empty[PROTOTYPE$1]=anObject$1(O);result=new Empty();Empty[PROTOTYPE$1]=null;// add "__proto__" for Object.getPrototypeOf polyfill
result[IE_PROTO]=O;}else result=_createDict();return Properties===undefined?result:dPs(result,Properties);};var def=_objectDp.f;var has$2=_has;var TAG$1=_wks('toStringTag');var _setToStringTag=function _setToStringTag(it,tag,stat){if(it&&!has$2(it=stat?it:it.prototype,TAG$1))def(it,TAG$1,{configurable:true,value:tag});};var create$1=_objectCreate;var descriptor=_propertyDesc;var setToStringTag$1=_setToStringTag;var IteratorPrototype={};// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype,_wks('iterator'),function(){return this;});var _iterCreate=function _iterCreate(Constructor,NAME,next){Constructor.prototype=create$1(IteratorPrototype,{next:descriptor(1,next)});setToStringTag$1(Constructor,NAME+' Iterator');};// 7.1.13 ToObject(argument)
var defined$2=_defined;var _toObject=function _toObject(it){return Object(defined$2(it));};// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has$3=_has;var toObject=_toObject;var IE_PROTO$2=_sharedKey('IE_PROTO');var ObjectProto=Object.prototype;var _objectGpo=Object.getPrototypeOf||function(O){O=toObject(O);if(has$3(O,IE_PROTO$2))return O[IE_PROTO$2];if(typeof O.constructor=='function'&&O instanceof O.constructor){return O.constructor.prototype;}return O instanceof Object?ObjectProto:null;};var LIBRARY=_library;var $export=_export;var redefine=_redefine;var hide=_hide;var has=_has;var Iterators=_iterators;var $iterCreate=_iterCreate;var setToStringTag=_setToStringTag;var getPrototypeOf=_objectGpo;var ITERATOR=_wks('iterator');var BUGGY=!([].keys&&'next'in[].keys());var FF_ITERATOR='@@iterator';var KEYS='keys';var VALUES='values';var returnThis=function returnThis(){return this;};var _iterDefine=function _iterDefine(Base,NAME,Constructor,next,DEFAULT,IS_SET,FORCED){$iterCreate(Constructor,NAME,next);var getMethod=function getMethod(kind){if(!BUGGY&&kind in proto)return proto[kind];switch(kind){case KEYS:return function keys(){return new Constructor(this,kind);};case VALUES:return function values(){return new Constructor(this,kind);};}return function entries(){return new Constructor(this,kind);};};var TAG=NAME+' Iterator',DEF_VALUES=DEFAULT==VALUES,VALUES_BUG=false,proto=Base.prototype,$native=proto[ITERATOR]||proto[FF_ITERATOR]||DEFAULT&&proto[DEFAULT],$default=$native||getMethod(DEFAULT),$entries=DEFAULT?!DEF_VALUES?$default:getMethod('entries'):undefined,$anyNative=NAME=='Array'?proto.entries||$native:$native,methods,key,IteratorPrototype;// Fix native
if($anyNative){IteratorPrototype=getPrototypeOf($anyNative.call(new Base()));if(IteratorPrototype!==Object.prototype){// Set @@toStringTag to native iterators
setToStringTag(IteratorPrototype,TAG,true);// fix for some old engines
if(!LIBRARY&&!has(IteratorPrototype,ITERATOR))hide(IteratorPrototype,ITERATOR,returnThis);}}// fix Array#{values, @@iterator}.name in V8 / FF
if(DEF_VALUES&&$native&&$native.name!==VALUES){VALUES_BUG=true;$default=function values(){return $native.call(this);};}// Define iterator
if((!LIBRARY||FORCED)&&(BUGGY||VALUES_BUG||!proto[ITERATOR])){hide(proto,ITERATOR,$default);}// Plug for library
Iterators[NAME]=$default;Iterators[TAG]=returnThis;if(DEFAULT){methods={values:DEF_VALUES?$default:getMethod(VALUES),keys:IS_SET?$default:getMethod(KEYS),entries:$entries};if(FORCED)for(key in methods){if(!(key in proto))redefine(proto,key,methods[key]);}else $export($export.P+$export.F*(BUGGY||VALUES_BUG),NAME,methods);}return methods;};var $at=_stringAt(true);// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String,'String',function(iterated){this._t=String(iterated);// target
this._i=0;// next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
},function(){var O=this._t,index=this._i,point;if(index>=O.length)return{value:undefined,done:true};point=$at(O,index);this._i+=point.length;return{value:point,done:false};});// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES=_wks('unscopables');var ArrayProto=Array.prototype;if(ArrayProto[UNSCOPABLES]==undefined)_hide(ArrayProto,UNSCOPABLES,{});var _addToUnscopables=function _addToUnscopables(key){ArrayProto[UNSCOPABLES][key]=true;};var _iterStep=function _iterStep(done,value){return{value:value,done:!!done};};var addToUnscopables=_addToUnscopables;var step=_iterStep;var Iterators$2=_iterators;var toIObject$2=_toIobject;// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator=_iterDefine(Array,'Array',function(iterated,kind){this._t=toIObject$2(iterated);// target
this._i=0;// next index
this._k=kind;// kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
},function(){var O=this._t,kind=this._k,index=this._i++;if(!O||index>=O.length){this._t=undefined;return step(1);}if(kind=='keys')return step(0,index);if(kind=='values')return step(0,O[index]);return step(0,[index,O[index]]);},'values');// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators$2.Arguments=Iterators$2.Array;addToUnscopables('keys');addToUnscopables('values');addToUnscopables('entries');var $iterators=es6_array_iterator;var redefine$2=_redefine;var global$3=_global;var hide$2=_hide;var Iterators$1=_iterators;var wks=_wks;var ITERATOR$1=wks('iterator');var TO_STRING_TAG=wks('toStringTag');var ArrayValues=Iterators$1.Array;for(var collections=['NodeList','DOMTokenList','MediaList','StyleSheetList','CSSRuleList'],i=0;i<5;i++){var NAME=collections[i],Collection=global$3[NAME],proto=Collection&&Collection.prototype,key;if(proto){if(!proto[ITERATOR$1])hide$2(proto,ITERATOR$1,ArrayValues);if(!proto[TO_STRING_TAG])hide$2(proto,TO_STRING_TAG,NAME);Iterators$1[NAME]=ArrayValues;for(key in $iterators){if(!proto[key])redefine$2(proto,key,$iterators[key],true);}}}var _anInstance=function _anInstance(it,Constructor,name,forbiddenField){if(!(it instanceof Constructor)||forbiddenField!==undefined&&forbiddenField in it){throw TypeError(name+': incorrect invocation!');}return it;};// call something on iterator step with safe closing on error
var anObject$3=_anObject;var _iterCall=function _iterCall(iterator,fn,value,entries){try{return entries?fn(anObject$3(value)[0],value[1]):fn(value);// 7.4.6 IteratorClose(iterator, completion)
}catch(e){var ret=iterator['return'];if(ret!==undefined)anObject$3(ret.call(iterator));throw e;}};// check on default Array iterator
var Iterators$3=_iterators;var ITERATOR$2=_wks('iterator');var ArrayProto$1=Array.prototype;var _isArrayIter=function _isArrayIter(it){return it!==undefined&&(Iterators$3.Array===it||ArrayProto$1[ITERATOR$2]===it);};var classof$2=_classof;var ITERATOR$3=_wks('iterator');var Iterators$4=_iterators;var core_getIteratorMethod=_core.getIteratorMethod=function(it){if(it!=undefined)return it[ITERATOR$3]||it['@@iterator']||Iterators$4[classof$2(it)];};var _forOf=createCommonjsModule$$1(function(module){var ctx=_ctx,call=_iterCall,isArrayIter=_isArrayIter,anObject=_anObject,toLength=_toLength,getIterFn=core_getIteratorMethod,BREAK={},RETURN={};var exports=module.exports=function(iterable,entries,fn,that,ITERATOR){var iterFn=ITERATOR?function(){return iterable;}:getIterFn(iterable),f=ctx(fn,that,entries?2:1),index=0,length,step,iterator,result;if(typeof iterFn!='function')throw TypeError(iterable+' is not iterable!');// fast case for arrays with default iterator
if(isArrayIter(iterFn))for(length=toLength(iterable.length);length>index;index++){result=entries?f(anObject(step=iterable[index])[0],step[1]):f(iterable[index]);if(result===BREAK||result===RETURN)return result;}else for(iterator=iterFn.call(iterable);!(step=iterator.next()).done;){result=call(iterator,f,step.value,entries);if(result===BREAK||result===RETURN)return result;}};exports.BREAK=BREAK;exports.RETURN=RETURN;});// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject$4=_anObject;var aFunction$2=_aFunction;var SPECIES=_wks('species');var _speciesConstructor=function _speciesConstructor(O,D){var C=anObject$4(O).constructor,S;return C===undefined||(S=anObject$4(C)[SPECIES])==undefined?D:aFunction$2(S);};// fast apply, http://jsperf.lnkit.com/fast-apply/5
var _invoke=function _invoke(fn,args,that){var un=that===undefined;switch(args.length){case 0:return un?fn():fn.call(that);case 1:return un?fn(args[0]):fn.call(that,args[0]);case 2:return un?fn(args[0],args[1]):fn.call(that,args[0],args[1]);case 3:return un?fn(args[0],args[1],args[2]):fn.call(that,args[0],args[1],args[2]);case 4:return un?fn(args[0],args[1],args[2],args[3]):fn.call(that,args[0],args[1],args[2],args[3]);}return fn.apply(that,args);};var ctx$2=_ctx;var invoke=_invoke;var html=_html;var cel=_domCreate;var global$5=_global;var process$2=global$5.process;var setTask=global$5.setImmediate;var clearTask=global$5.clearImmediate;var MessageChannel=global$5.MessageChannel;var counter=0;var queue={};var ONREADYSTATECHANGE='onreadystatechange';var defer;var channel;var port;var run=function run(){var id=+this;if(queue.hasOwnProperty(id)){var fn=queue[id];delete queue[id];fn();}};var listener=function listener(event){run.call(event.data);};// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask||!clearTask){setTask=function setImmediate(fn){var args=[],i=1;while(arguments.length>i){args.push(arguments[i++]);}queue[++counter]=function(){invoke(typeof fn=='function'?fn:Function(fn),args);};defer(counter);return counter;};clearTask=function clearImmediate(id){delete queue[id];};// Node.js 0.8-
if(_cof(process$2)=='process'){defer=function defer(id){process$2.nextTick(ctx$2(run,id,1));};// Browsers with MessageChannel, includes WebWorkers
}else if(MessageChannel){channel=new MessageChannel();port=channel.port2;channel.port1.onmessage=listener;defer=ctx$2(port.postMessage,port,1);// Browsers with postMessage, skip WebWorkers
// IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
}else if(global$5.addEventListener&&typeof postMessage=='function'&&!global$5.importScripts){defer=function defer(id){global$5.postMessage(id+'','*');};global$5.addEventListener('message',listener,false);// IE8-
}else if(ONREADYSTATECHANGE in cel('script')){defer=function defer(id){html.appendChild(cel('script'))[ONREADYSTATECHANGE]=function(){html.removeChild(this);run.call(id);};};// Rest old browsers
}else{defer=function defer(id){setTimeout(ctx$2(run,id,1),0);};}}var _task={set:setTask,clear:clearTask};var global$6=_global;var macrotask=_task.set;var Observer=global$6.MutationObserver||global$6.WebKitMutationObserver;var process$3=global$6.process;var Promise$1=global$6.Promise;var isNode$1=_cof(process$3)=='process';var _microtask=function _microtask(){var head,last,notify;var flush=function flush(){var parent,fn;if(isNode$1&&(parent=process$3.domain))parent.exit();while(head){fn=head.fn;head=head.next;try{fn();}catch(e){if(head)notify();else last=undefined;throw e;}}last=undefined;if(parent)parent.enter();};// Node.js
if(isNode$1){notify=function notify(){process$3.nextTick(flush);};// browsers with MutationObserver
}else if(Observer){var toggle=true,node=document.createTextNode('');new Observer(flush).observe(node,{characterData:true});// eslint-disable-line no-new
notify=function notify(){node.data=toggle=!toggle;};// environments with maybe non-completely correct, but existent Promise
}else if(Promise$1&&Promise$1.resolve){var promise=Promise$1.resolve();notify=function notify(){promise.then(flush);};// for other environments - macrotask based on:
// - setImmediate
// - MessageChannel
// - window.postMessag
// - onreadystatechange
// - setTimeout
}else{notify=function notify(){// strange IE + webpack dev server bug - use .call(global)
macrotask.call(global$6,flush);};}return function(fn){var task={fn:fn,next:undefined};if(last)last.next=task;if(!head){head=task;notify();}last=task;};};var redefine$3=_redefine;var _redefineAll=function _redefineAll(target,src,safe){for(var key in src){redefine$3(target,key,src[key],safe);}return target;};var global$7=_global;var dP$3=_objectDp;var DESCRIPTORS=_descriptors;var SPECIES$1=_wks('species');var _setSpecies=function _setSpecies(KEY){var C=global$7[KEY];if(DESCRIPTORS&&C&&!C[SPECIES$1])dP$3.f(C,SPECIES$1,{configurable:true,get:function get(){return this;}});};var ITERATOR$4=_wks('iterator');var SAFE_CLOSING=false;try{var riter=[7][ITERATOR$4]();riter['return']=function(){SAFE_CLOSING=true;};Array.from(riter,function(){throw 2;});}catch(e){/* empty */}var _iterDetect=function _iterDetect(exec,skipClosing){if(!skipClosing&&!SAFE_CLOSING)return false;var safe=false;try{var arr=[7],iter=arr[ITERATOR$4]();iter.next=function(){return{done:safe=true};};arr[ITERATOR$4]=function(){return iter;};exec(arr);}catch(e){/* empty */}return safe;};var LIBRARY$1=_library;var global$4=_global;var ctx$1=_ctx;var classof$1=_classof;var $export$2=_export;var isObject$3=_isObject;var aFunction$1=_aFunction;var anInstance=_anInstance;var forOf=_forOf;var speciesConstructor=_speciesConstructor;var task=_task.set;var microtask=_microtask();var PROMISE='Promise';var TypeError$1=global$4.TypeError;var process$1=global$4.process;var $Promise=global$4[PROMISE];var process$1=global$4.process;var isNode=classof$1(process$1)=='process';var empty=function empty(){/* empty */};var Internal;var GenericPromiseCapability;var Wrapper;var USE_NATIVE=!!function(){try{// correct subclassing with @@species support
var promise=$Promise.resolve(1),FakePromise=(promise.constructor={})[_wks('species')]=function(exec){exec(empty,empty);};// unhandled rejections tracking support, NodeJS Promise without it fails @@species test
return(isNode||typeof PromiseRejectionEvent=='function')&&promise.then(empty)instanceof FakePromise;}catch(e){/* empty */}}();// helpers
var sameConstructor=function sameConstructor(a,b){// with library wrapper special case
return a===b||a===$Promise&&b===Wrapper;};var isThenable=function isThenable(it){var then;return isObject$3(it)&&typeof(then=it.then)=='function'?then:false;};var newPromiseCapability=function newPromiseCapability(C){return sameConstructor($Promise,C)?new PromiseCapability(C):new GenericPromiseCapability(C);};var PromiseCapability=GenericPromiseCapability=function GenericPromiseCapability(C){var resolve,reject;this.promise=new C(function($$resolve,$$reject){if(resolve!==undefined||reject!==undefined)throw TypeError$1('Bad Promise constructor');resolve=$$resolve;reject=$$reject;});this.resolve=aFunction$1(resolve);this.reject=aFunction$1(reject);};var perform=function perform(exec){try{exec();}catch(e){return{error:e};}};var notify=function notify(promise,isReject){if(promise._n)return;promise._n=true;var chain=promise._c;microtask(function(){var value=promise._v,ok=promise._s==1,i=0;var run=function run(reaction){var handler=ok?reaction.ok:reaction.fail,resolve=reaction.resolve,reject=reaction.reject,domain=reaction.domain,result,then;try{if(handler){if(!ok){if(promise._h==2)onHandleUnhandled(promise);promise._h=1;}if(handler===true)result=value;else{if(domain)domain.enter();result=handler(value);if(domain)domain.exit();}if(result===reaction.promise){reject(TypeError$1('Promise-chain cycle'));}else if(then=isThenable(result)){then.call(result,resolve,reject);}else resolve(result);}else reject(value);}catch(e){reject(e);}};while(chain.length>i){run(chain[i++]);}// variable length - can't use forEach
promise._c=[];promise._n=false;if(isReject&&!promise._h)onUnhandled(promise);});};var onUnhandled=function onUnhandled(promise){task.call(global$4,function(){var value=promise._v,abrupt,handler,console;if(isUnhandled(promise)){abrupt=perform(function(){if(isNode){process$1.emit('unhandledRejection',value,promise);}else if(handler=global$4.onunhandledrejection){handler({promise:promise,reason:value});}else if((console=global$4.console)&&console.error){console.error('Unhandled promise rejection',value);}});// Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
promise._h=isNode||isUnhandled(promise)?2:1;}promise._a=undefined;if(abrupt)throw abrupt.error;});};var isUnhandled=function isUnhandled(promise){if(promise._h==1)return false;var chain=promise._a||promise._c,i=0,reaction;while(chain.length>i){reaction=chain[i++];if(reaction.fail||!isUnhandled(reaction.promise))return false;}return true;};var onHandleUnhandled=function onHandleUnhandled(promise){task.call(global$4,function(){var handler;if(isNode){process$1.emit('rejectionHandled',promise);}else if(handler=global$4.onrejectionhandled){handler({promise:promise,reason:promise._v});}});};var $reject=function $reject(value){var promise=this;if(promise._d)return;promise._d=true;promise=promise._w||promise;// unwrap
promise._v=value;promise._s=2;if(!promise._a)promise._a=promise._c.slice();notify(promise,true);};var $resolve=function $resolve(value){var promise=this,then;if(promise._d)return;promise._d=true;promise=promise._w||promise;// unwrap
try{if(promise===value)throw TypeError$1("Promise can't be resolved itself");if(then=isThenable(value)){microtask(function(){var wrapper={_w:promise,_d:false};// wrap
try{then.call(value,ctx$1($resolve,wrapper,1),ctx$1($reject,wrapper,1));}catch(e){$reject.call(wrapper,e);}});}else{promise._v=value;promise._s=1;notify(promise,false);}}catch(e){$reject.call({_w:promise,_d:false},e);// wrap
}};// constructor polyfill
if(!USE_NATIVE){// 25.4.3.1 Promise(executor)
$Promise=function Promise(executor){anInstance(this,$Promise,PROMISE,'_h');aFunction$1(executor);Internal.call(this);try{executor(ctx$1($resolve,this,1),ctx$1($reject,this,1));}catch(err){$reject.call(this,err);}};Internal=function Promise(executor){this._c=[];// <- awaiting reactions
this._a=undefined;// <- checked in isUnhandled reactions
this._s=0;// <- state
this._d=false;// <- done
this._v=undefined;// <- value
this._h=0;// <- rejection state, 0 - default, 1 - handled, 2 - unhandled
this._n=false;// <- notify
};Internal.prototype=_redefineAll($Promise.prototype,{// 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
then:function then(onFulfilled,onRejected){var reaction=newPromiseCapability(speciesConstructor(this,$Promise));reaction.ok=typeof onFulfilled=='function'?onFulfilled:true;reaction.fail=typeof onRejected=='function'&&onRejected;reaction.domain=isNode?process$1.domain:undefined;this._c.push(reaction);if(this._a)this._a.push(reaction);if(this._s)notify(this,false);return reaction.promise;},// 25.4.5.1 Promise.prototype.catch(onRejected)
'catch':function _catch(onRejected){return this.then(undefined,onRejected);}});PromiseCapability=function PromiseCapability(){var promise=new Internal();this.promise=promise;this.resolve=ctx$1($resolve,promise,1);this.reject=ctx$1($reject,promise,1);};}$export$2($export$2.G+$export$2.W+$export$2.F*!USE_NATIVE,{Promise:$Promise});_setToStringTag($Promise,PROMISE);_setSpecies(PROMISE);Wrapper=_core[PROMISE];// statics
$export$2($export$2.S+$export$2.F*!USE_NATIVE,PROMISE,{// 25.4.4.5 Promise.reject(r)
reject:function reject(r){var capability=newPromiseCapability(this),$$reject=capability.reject;$$reject(r);return capability.promise;}});$export$2($export$2.S+$export$2.F*(LIBRARY$1||!USE_NATIVE),PROMISE,{// 25.4.4.6 Promise.resolve(x)
resolve:function resolve(x){// instanceof instead of internal slot check because we should fix it without replacement native Promise core
if(x instanceof $Promise&&sameConstructor(x.constructor,this))return x;var capability=newPromiseCapability(this),$$resolve=capability.resolve;$$resolve(x);return capability.promise;}});$export$2($export$2.S+$export$2.F*!(USE_NATIVE&&_iterDetect(function(iter){$Promise.all(iter)['catch'](empty);})),PROMISE,{// 25.4.4.1 Promise.all(iterable)
all:function all(iterable){var C=this,capability=newPromiseCapability(C),resolve=capability.resolve,reject=capability.reject;var abrupt=perform(function(){var values=[],index=0,remaining=1;forOf(iterable,false,function(promise){var $index=index++,alreadyCalled=false;values.push(undefined);remaining++;C.resolve(promise).then(function(value){if(alreadyCalled)return;alreadyCalled=true;values[$index]=value;--remaining||resolve(values);},reject);});--remaining||resolve(values);});if(abrupt)reject(abrupt.error);return capability.promise;},// 25.4.4.4 Promise.race(iterable)
race:function race(iterable){var C=this,capability=newPromiseCapability(C),reject=capability.reject;var abrupt=perform(function(){forOf(iterable,false,function(promise){C.resolve(promise).then(capability.resolve,reject);});});if(abrupt)reject(abrupt.error);return capability.promise;}});var promise=_core.Promise;var base64=createCommonjsModule$$1(function(module,exports){(function(){var object=typeof exports!='undefined'?exports:this;// #8: web workers
var chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';function InvalidCharacterError(message){this.message=message;}InvalidCharacterError.prototype=new Error();InvalidCharacterError.prototype.name='InvalidCharacterError';// encoder
// [https://gist.github.com/999166] by [https://github.com/nignag]
object.btoa||(object.btoa=function(input){var str=String(input);for(// initialize result and counter
var block,charCode,idx=0,map=chars,output='';// if the next str index does not exist:
//   change the mapping table to "="
//   check if d has no fractional digits
str.charAt(idx|0)||(map='=',idx%1);// "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
output+=map.charAt(63&block>>8-idx%1*8)){charCode=str.charCodeAt(idx+=3/4);if(charCode>0xFF){throw new InvalidCharacterError("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");}block=block<<8|charCode;}return output;});// decoder
// [https://gist.github.com/1020396] by [https://github.com/atk]
object.atob||(object.atob=function(input){var str=String(input).replace(/=+$/,'');if(str.length%4==1){throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");}for(// initialize result and counters
var bc=0,bs,buffer,idx=0,output='';// get next character
buffer=str.charAt(idx++);// character found in table? initialize bit storage and add its ascii value;
~buffer&&(bs=bc%4?bs*64+buffer:buffer,// and if not first of each 4 characters,
// convert the first 8 bits to one ascii character
bc++%4)?output+=String.fromCharCode(255&bs>>(-2*bc&6)):0){// try to find character in table (0-63, not found => -1)
buffer=chars.indexOf(buffer);}return output;});})();});/* global global */var globalNamespace=void 0;if(typeof commonjsGlobal$$1==='undefined'){globalNamespace=window;}else{globalNamespace=commonjsGlobal$$1;}function set(key,value){if(!globalNamespace[key]){globalNamespace[key]=value;}}function get(key){return globalNamespace[key];}var globalVars={set:set,get:get};// drop in polyfills from base64
globalVars.set('btoa',base64.btoa);globalVars.set('atob',base64.atob);// drop in polyfills from Promise
globalVars.set('Promise',promise);/* eslint no-undefined: 0 */var assign=void 0;if(typeof Object.assign==='function'){assign=Object.assign;}else{assign=function assign(target){if(target===undefined||target===null){throw new TypeError('Cannot convert undefined or null to object');}var output=Object(target);var propertyObjects=[].slice.call(arguments,1);if(propertyObjects.length>0){propertyObjects.forEach(function(source){if(source!==undefined&&source!==null){var nextKey=void 0;for(nextKey in source){if(source.hasOwnProperty(nextKey)){output[nextKey]=source[nextKey];}}}});}return output;};}var assign$1=assign;var includes=void 0;if(!Array.prototype.includes){includes=function includes(array,searchElement){var ObjectifiedArray=Object(array);var length=parseInt(ObjectifiedArray.length,10)||0;if(length===0){return false;}var startIndex=parseInt(arguments[2],10)||0;var index=void 0;if(startIndex>=0){index=startIndex;}else{index=length+startIndex;if(index<0){index=0;}}while(index<length){var currentElement=ObjectifiedArray[index];/* eslint no-self-compare:0 */if(searchElement===currentElement||searchElement!==searchElement&&currentElement!==currentElement){// NaN !== NaN
return true;}index++;}return false;};}else{includes=function includes(array){var args=[].slice.call(arguments,1);return Array.prototype.includes.apply(array,args);};}var includes$1=includes;function wrap(func,superFunc){function superWrapper(){var originalSuper=this['super'];this['super']=function(){return superFunc.apply(this,arguments);};var ret=func.apply(this,arguments);this['super']=originalSuper;return ret;}superWrapper.wrappedFunction=func;return superWrapper;}function defineProperties$1(names,proto,destination){var parentProto=Object.getPrototypeOf(destination);names.forEach(function(name){var descriptor=Object.getOwnPropertyDescriptor(proto,name);var parentDescriptor=parentProto.hasOwnProperty(name)&&Object.getOwnPropertyDescriptor(parentProto,name);if(typeof parentDescriptor.value==='function'&&typeof descriptor.value==='function'){var wrappedFunction=wrap(descriptor.value,parentDescriptor.value);Object.defineProperty(destination,name,{value:wrappedFunction});}else{Object.defineProperty(destination,name,descriptor);}});}function createClass(props){var parent=arguments.length>1&&arguments[1]!==undefined?arguments[1]:Object;var Constructor=wrap(props.constructor,parent);var instancePropertyNames=Object.getOwnPropertyNames(props).filter(function(key){return!includes$1(['constructor','static'],key);});assign$1(Constructor,parent);Constructor.prototype=Object.create(parent.prototype);defineProperties$1(instancePropertyNames,props,Constructor.prototype);Constructor.prototype.constructor=Constructor;var staticProps=props['static'];if(staticProps){var staticPropertyNames=Object.getOwnPropertyNames(staticProps);defineProperties$1(staticPropertyNames,staticProps,Constructor);}return Constructor;}var CoreObject=createClass({constructor:function constructor(){},'static':{extend:function extend(subClassProps){return createClass(subClassProps,this);}}});function wrapConsole(logCommand){var logMethod=function logMethod(){var log=void 0;/* eslint-disable no-console */if(console[logCommand]){log=Function.prototype.bind.call(console[logCommand],console);}else{log=Function.prototype.bind.call(console.log,console);}log.apply(undefined,arguments);/* eslint-enable no-console */};return function(){var args=[].concat(Array.prototype.slice.call(arguments));args.unshift('[JS-BUY-SDK]: ');logMethod.apply(undefined,_toConsumableArray(args));};}var Logger=CoreObject.extend({/**
   * Wrapper around the console log so in the future we can have better dev output.
   * Also allows us to disable output in production.
   * @private
   * @class Logger
   * @constructor
   */constructor:function constructor(){},debug:wrapConsole('debug'),info:wrapConsole('info'),warn:wrapConsole('warn'),error:wrapConsole('error')});var logger=new Logger();var Config=CoreObject.extend({constructor:function constructor(attrs){var _this=this;Object.keys(this.deprecatedProperties).forEach(function(key){if(attrs.hasOwnProperty(key)){var transformName=_this.deprecatedProperties[key];var transform=_this[transformName];transform(attrs[key],attrs);}});this.requiredProperties.forEach(function(key){if(!attrs.hasOwnProperty(key)){throw new Error('new Config() requires the option \''+key+'\'');}else{_this[key]=attrs[key];}});this.optionalProperties.forEach(function(key){if(attrs.hasOwnProperty(key)){_this[key]=attrs[key];}});},/**
   * An object with keys for deprecated properties and values as functions that
   * will transform the value into a usable value. A depracation transform should
   * have the value signature function(deprecated_value, config_to_be_transformed)
   * @attribute deprecatedProperties
   * @default { myShopifyDomain: this.transformMyShopifyDomain }
   * @type Object
   * @private
   */deprecatedProperties:{myShopifyDomain:'transformMyShopifyDomain'},/**
   * Transform the myShopifyDomain config to a domain config.
   * @method transformMyShopifyDomain
   * @static
   * @private
   * @param {String} subdomain The original subdomain on myshopify.com
   * @param {Object} attrs. The config attributes to be transformed to a
   * non-deprecated state.
   * @return {Object} the transformed config attributes.
   */transformMyShopifyDomain:function transformMyShopifyDomain(subdomain,attrs){logger.warn('Config - ','myShopifyDomain is deprecated, please use domain and provide the full shop domain.');attrs.domain=subdomain+'.myshopify.com';},/**
   * Properties that must be set on initializations
   * @attribute requiredProperties
   * @default ['apiKey', 'appId', 'myShopifyDomain']
   * @type Array
   * @private
   */requiredProperties:['apiKey','appId','domain'],/**
   * Properties that may be set on initializations
   * @attribute requiredProperties
   * @default ['ajaxHeaders']
   * @type Array
   * @private
   */optionalProperties:['ajaxHeaders'],/**
   * The apiKey for authenticating against shopify. This is your api client's
   * public api token. Not the shared secret. Set during initialation.
   * @attribute apiKey
   * @default ''
   * @type String
   * @private
   */apiKey:'',/**
   * @attribute appId
   * @default ''
   * @type String
   * @private
   */appId:'',/**
   * The domain that all the api requests will go to
   * @attribute domain
   * @default ''
   * @type String
   * @private
   */domain:'',/**
   * The subdomain of myshopify.io that all the api requests will go to
   * @attribute myShopifyDomain
   * @default ''
   * @type String
   * @private
   * @deprecated Use `config.domain` instead.
   */myShopifyDomain:'',/**
   * @attribute ajaxHeaders
   * @default {}
   * @type Object
   * @private
   */ajaxHeaders:{}});var version$1='v0.6.2-c8f438f';// eslint-disable-line
var BaseModel=CoreObject.extend({constructor:function constructor(){var attrs=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var metaAttrs=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.attrs=attrs;assign$1(this,metaAttrs);},attrs:null,serializer:null,adapter:null,shopClient:null});/**
  * Class for product option
  * @class ProductOptionModel
  * @constructor
*/var ProductOptionModel=BaseModel.extend(Object.defineProperties({constructor:function constructor(){this['super'].apply(this,arguments);this.selected=this.values[0];}},{name:{/**
    * name of option. Example values: `"Size"`, `"Color"`, etc.
    * @property name
    * @readOnly
    * @type String
  */get:function get(){return this.attrs.name;},configurable:true,enumerable:true},values:{/**
    * an Array possible values for option. For instance if this option is a "Size" option an example value
    * for values could be: `["Large", "Medium", "Small"]`
    *
    * @property values
    * @readOnly
    * @type Array
  */get:function get(){return this.attrs.values;},configurable:true,enumerable:true},selected:{/**
    * get/set the currently selected option value with one of the values from the
    * {{#crossLink "ProductOptionModel/values"}}ProductOptionModel.values{{/crossLink}} array. For
    * instance if the option values array had the following `["Large", "Medium", "Small"]` setting `selected` to be
    * `"Large"`, `"Medium"`, or `"Small"` would be valid any other value would throw an `Error`.
    *
    * @property selected
    * @type String
  */get:function get(){return this._selected;},set:function set(value){if(includes$1(this.values,value)){this._selected=value;}else{throw new Error('Invalid option selection for '+this.name+'.');}return value;},configurable:true,enumerable:true}}));var variants=[{name:'pico',dimension:'16x16'},{name:'icon',dimension:'32x32'},{name:'thumb',dimension:'50x50'},{name:'small',dimension:'100x100'},{name:'compact',dimension:'160x160'},{name:'medium',dimension:'240x240'},{name:'large',dimension:'480x480'},{name:'grande',dimension:'600x600'},{name:'1024x1024',dimension:'1024x1024'},{name:'2048x2048',dimension:'2048x2048'}];var ImageModel=CoreObject.extend(Object.defineProperties({constructor:function constructor(attrs){var _this2=this;Object.keys(attrs).forEach(function(key){_this2[key]=attrs[key];});}},{variants:{/**
    * Image variants available for an image. An example value of `imageVariant`:
    * ```
    * [
    *   {
    *     "name": "pico",
    *     "dimensions": "16x16",
    *     "src": "https://cdn.shopify.com/s/files/1/1019/0495/products/alien_146ef7c1-26e9-4e96-96e6-9d37128d0005_pico.jpg?v=1469046423"
    *   },
    *   {
    *     "name": "compact",
    *     "dimensions": "160x160",
    *     "src": "https://cdn.shopify.com/s/files/1/1019/0495/products/alien_146ef7c1-26e9-4e96-96e6-9d37128d0005_compact.jpg?v=1469046423"
    *   }
    * ]
    * ```
    *
    * @attribute variants
    * @type {Array}
  */get:function get(){var src=this.src;var extensionIndex=src.lastIndexOf('.');var pathAndBasename=src.slice(0,extensionIndex);var extension=src.slice(extensionIndex);variants.forEach(function(variant){variant.src=pathAndBasename+'_'+variant.name+extension;});return variants;},configurable:true,enumerable:true}}));/**
  * Model for product variant
  * @class ProductVariantModel
  * @constructor
*/var ProductVariantModel=BaseModel.extend(Object.defineProperties({constructor:function constructor(){this['super'].apply(this,arguments);},/**
    * Get a checkout url for a specific product variant. You can
    * optionally pass a quantity. If no quantity is passed then quantity
    * will default to 1. The example below will grab a checkout url for
    * 3 copies of the first variant:
    * ```
    * const checkoutURL = product.variants[ 0 ].checkoutUrl(3);
    * ```
    *
    * @method checkoutUrl
    * @param {Number} [quantity = 1] quantity of variants
    * @public
    * @return {String} Checkout URL
  */checkoutUrl:function checkoutUrl(){var quantity=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1;var config=this.config;var baseUrl='https://'+config.domain+'/cart';var variantPath=this.id+':'+parseInt(quantity,10);var query='access_token='+config.apiKey+'&_fd=0';return baseUrl+'/'+variantPath+'?'+query;}},{id:{/**
    * Variant unique ID
    * @property id
    * @type {String}
  */get:function get(){return this.attrs.variant.id;},configurable:true,enumerable:true},productId:{/**
    * ID of product variant belongs to
    * @property productId
    * @type {String}
  */get:function get(){return this.attrs.product.id;},configurable:true,enumerable:true},title:{/**
    * Title of variant
    * @property title
    * @type {String}
  */get:function get(){return this.attrs.variant.title;},configurable:true,enumerable:true},productTitle:{/**
    * Title of product variant belongs to
    * @property productTitle
    * @type {String}
  */get:function get(){return this.attrs.product.title;},configurable:true,enumerable:true},compareAtPrice:{/**
    * Compare at price for variant. The `compareAtPrice` would be
    * the price of the product previously before the product went on sale. For more info
    * go <a href="https://docs.shopify.com/manual/products/promoting-marketing/sales" target="_blank">here</a>.
    *
    * If no `compareAtPrice` is set then this value will be `null`. An example value: `"5.00"`
    * @property compareAtPrice
    * @type {String}
  */get:function get(){return this.attrs.variant.compare_at_price;},configurable:true,enumerable:true},price:{/**
    * Price of the variant. The price will be in the following form: `"10.00"`
    *
    * @property price
    * @type {String}
  */get:function get(){return this.attrs.variant.price;},configurable:true,enumerable:true},formattedPrice:{/**
    * Price of variant, formatted according to shop currency format string.
    * For instance `"$10.00"`
    *
    * @property formattedPrice
    * @type {String}
  */get:function get(){return this.attrs.variant.formatted_price;},configurable:true,enumerable:true},grams:{/**
    * Variant weight in grams. If no weight is defined grams will be `0`.
    * @property grams
    * @type {Number}
  */get:function get(){return this.attrs.variant.grams;},configurable:true,enumerable:true},optionValues:{/**
    * Option values associated with this variant. Example `optionValues`:
    * ```
    * [
    *   {
    *     "name": "Size",
    *     "option_id": 9165336518,
    *     "value": "small"
    *   },
    *   {
    *     "name": "Color",
    *     "option_id": 9640532358,
    *     "value": "blue"
    *   }
    * ]
    * ````
    *
    * @property optionValues
    * @type {Array|Object}
  */get:function get(){return this.attrs.variant.option_values;},configurable:true,enumerable:true},available:{/**
    * Variant in stock. Always `true` if inventory tracking is disabled.
    * @property available
    * @type {Boolean}
  */get:function get(){return this.attrs.variant.available;},configurable:true,enumerable:true},image:{/**
    * Image for variant. An example image `Object`:
    * ```
    * {
    *   created_at: "2016-08-29T12:35:09-04:00",
    *   id: 17690553350,
    *   position: 1,
    *   product_id: 8291029446,
    *   src: "https://cdn.shopify.com/s/files/1/1019/0495/products/i11_c3334325-2d67-4623-8cd4-0a6b08aa1b83.jpg?v=1472488509",
    *   updated_at: "2016-08-29T12:35:09-04:00",
    *   variant_ids: [ 27690103238 ]
    * }
    * ```
    *
    * @property image
    * @type {Object}
  */get:function get(){var id=this.id;var images=this.attrs.product.images;var primaryImage=images[0];var variantImage=images.filter(function(image){return image.variant_ids.indexOf(id)!==-1;})[0];var image=variantImage||primaryImage;if(!image){return null;}return new ImageModel(image);},configurable:true,enumerable:true},imageVariants:{/**
    * Image variants available for a variant. An example value of `imageVariant`:
    * ```
    * [
    *   {
    *     "name": "pico",
    *     "dimensions": "16x16",
    *     "src": "https://cdn.shopify.com/s/files/1/1019/0495/products/alien_146ef7c1-26e9-4e96-96e6-9d37128d0005_pico.jpg?v=1469046423"
    *   },
    *   {
    *     "name": "compact",
    *     "dimensions": "160x160",
    *     "src": "https://cdn.shopify.com/s/files/1/1019/0495/products/alien_146ef7c1-26e9-4e96-96e6-9d37128d0005_compact.jpg?v=1469046423"
    *   }
    * ]
    * ```
    *
    * @property imageVariant
    * @type {Array}
  */get:function get(){if(!this.image){return[];}return this.image.variants;},configurable:true,enumerable:true}}));var uniq=function uniq(array){return array.reduce(function(uniqueArray,item){if(uniqueArray.indexOf(item)<0){uniqueArray.push(item);}return uniqueArray;},[]);};var NO_IMAGE_URI='https://widgets.shopifyapps.com/assets/no-image.svg';/**
   * Class for products returned by fetch('product')
   * @class ProductModel
   * @constructor
 */var ProductModel=BaseModel.extend(Object.defineProperties({constructor:function constructor(){this['super'].apply(this,arguments);}},{id:{/**
    * Product unique ID
    *
    * @property id
    * @type {String}
  */get:function get(){return this.attrs.product_id;},configurable:true,enumerable:true},title:{/**
    * The product title
    * @property title
    * @type {String}
  */get:function get(){return this.attrs.title;},configurable:true,enumerable:true},description:{/**
    * A product description.
    * @property description
    * @type {String}
  */get:function get(){return this.attrs.body_html;},configurable:true,enumerable:true},images:{/**
    * An `Array` of `Objects` that contain meta data about an image including `src` of the images.
    *
    * An example image `Object`:
    * ```
    * {
    *   created_at: "2016-08-29T12:35:09-04:00",
    *   id: 17690553350,
    *   position: 1,
    *   product_id: 8291029446,
    *   src: "https://cdn.shopify.com/s/files/1/1019/0495/products/i11_c3334325-2d67-4623-8cd4-0a6b08aa1b83.jpg?v=1472488509",
    *   updated_at: "2016-08-29T12:35:09-04:00",
    *   variant_ids: [ 27690103238 ]
    * }
    * ```
    * @property images
    * @type {Array} array of image objects.
  */get:function get(){return this.attrs.images.map(function(image){return new ImageModel(image);});},configurable:true,enumerable:true},memoized:{get:function get(){this._memoized=this._memoized||{};return this._memoized;},configurable:true,enumerable:true},options:{/**
   *  Get an array of {{#crossLink "ProductOptionModel"}}ProductOptionModels{{/crossLink}}.
   *  {{#crossLink "ProductOptionModel"}}ProductOptionModels{{/crossLink}} can be used to
   *  define the currently `selectedVariant` from which you can get a checkout url
   *  ({{#crossLink "ProductVariantModel/checkoutUrl"}}ProductVariantModel.checkoutUrl{{/crossLink}}) or can
   *  be added to a cart ({{#crossLink "CartModel/createLineItemsFromVariants"}}CartModel.createLineItemsFromVariants{{/crossLink}}).
   *
   *  Below is an example on how to create html for option selections:
   * ```javascript
   *  // the following will create an Array of HTML to create multiple select inputs
   *  // global callbacks are also created which will set the option as selected
   *  var elements = product.options.map(function(option) {
   *    // we'll create a callback in global scope
   *    // which will be called when the select's value changes
   *    var callBackName = option.name + 'onChange';
   *    window[ callBackName ] = function(select) {
   *      // set the products option to be selected
   *      option.selected = select.value;
   *    };
   *
   *    // return a string which will be HTML for the select
   *    return '<select name="' + option.name + '" onchange="'callBackName'(this)">' + option.values.map(function(value) {
   *      return '<option value="' + value + '">' + value + '</option>';
   *    }) + '</select>';
   *  });
   * ```
   *
   * @property options
   * @type {Array|ProductOptionModel}
   */get:function get(){if(this.memoized.options){return this.memoized.options;}var baseOptions=this.attrs.options;var variants$$1=this.variants;this.memoized.options=baseOptions.map(function(option){var name=option.name;var dupedValues=variants$$1.reduce(function(valueList,variant){var optionValueForOption=variant.optionValues.filter(function(optionValue){return optionValue.name===option.name;})[0];valueList.push(optionValueForOption.value);return valueList;},[]);var values=uniq(dupedValues);return new ProductOptionModel({name:name,values:values});});return this.memoized.options;},configurable:true,enumerable:true},variants:{/**
    * An `Array` of {{#crossLink "ProductVariantModel"}}ProductVariantModel's{{/crossLink}}
    * @property variants
    * @type {Array|ProductVariantModel} array of ProductVariantModel instances.
  */get:function get(){var _this3=this;return this.attrs.variants.map(function(variant){return new ProductVariantModel({variant:variant,product:_this3},{config:_this3.config});});},configurable:true,enumerable:true},selections:{/**
    * A read only `Array` of Strings represented currently selected option values. eg. `["Large", "Red"]`
    * @property selections
    * @type {Array | String}
  */get:function get(){return this.options.map(function(option){return option.selected;});},configurable:true,enumerable:true},selectedVariant:{/**
    * Retrieve variant for currently selected options. By default the first value in each
    * option is selected which means `selectedVariant` will never be `null`.
    *
    * With a `selectedVariant` you can create checkout url
    * ({{#crossLink "ProductVariantModel/checkoutUrl"}}ProductVariantModel.checkoutUrl{{/crossLink}}) or it can
    * be added to a cart ({{#crossLink "CartModel/createLineItemsFromVariants"}}CartModel.createLineItemsFromVariants{{/crossLink}}).
    *
    * @property selectedVariant
    * @type {ProductVariantModel}
  */get:function get(){var variantTitle=this.selections.join(' / ');return this.variants.filter(function(variant){return variant.title===variantTitle;})[0]||null;},configurable:true,enumerable:true},selectedVariantImage:{/**
    * Retrieve image for currently selected variantImage. An example image Object would look like this:
    * ```
    * {
    *   created_at: "2016-08-29T12:35:09-04:00",
    *   id: 17690553350,
    *   position: 1,
    *   product_id: 8291029446,
    *   src: "https://cdn.shopify.com/s/files/1/1019/0495/products/i11_c3334325-2d67-4623-8cd4-0a6b08aa1b83.jpg?v=1472488509",
    *   updated_at: "2016-08-29T12:35:09-04:00",
    *   variant_ids: [ 27690103238 ]
    * }
    * ```
    *
    * @property selectedVariantImage
    * @type {Object}
  */get:function get(){if(!this.selectedVariant){return null;}return this.selectedVariant.image;},configurable:true,enumerable:true}}));var ListingsSerializer=CoreObject.extend({constructor:function constructor(config){this.config=config;},rootKeyForType:function rootKeyForType(type){return type.slice(0,-1)+'_listing';},models:{collections:BaseModel,products:ProductModel},modelForType:function modelForType(type){return this.models[type];},deserializeSingle:function deserializeSingle(type){var singlePayload=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var metaAttrs=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var modelAttrs=singlePayload[this.rootKeyForType(type)];var model=this.modelFromAttrs(type,modelAttrs,metaAttrs);return model;},deserializeMultiple:function deserializeMultiple(type){var _this4=this;var collectionPayload=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var metaAttrs=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var models=collectionPayload[this.rootKeyForType(type)+'s'];return models.map(function(attrs){var model=_this4.modelFromAttrs(type,attrs,metaAttrs);return model;});},modelFromAttrs:function modelFromAttrs(type,attrs,metaAttrs){var Model=this.modelForType(type);metaAttrs.config=this.config;return new Model(attrs,metaAttrs);}});function authToUrl(url,opts){var authorization=void 0;if(opts.headers){Object.keys(opts.headers).forEach(function(key){if(key.toLowerCase()==='authorization'){authorization=opts.headers[key];}});}if(authorization){var hashedKey=authorization.split(' ').slice(-1)[0];try{var plainKey=atob(hashedKey);var newUrl=void 0;if(url.indexOf('?')>-1){newUrl=url+'&_x_http_authorization='+plainKey;}else{newUrl=url+'?_x_http_authorization='+plainKey;}return newUrl;}catch(e){// atob choked on non-encoded data. Therefore, not a form of auth we
// support.
//
// NOOP
//
}}/* eslint newline-before-return: 0 */return url;}function ie9Ajax(method,url,opts){return new Promise(function(resolve,reject){var xdr=new XDomainRequest();xdr.onload=function(){try{var json=JSON.parse(xdr.responseText);resolve({json:json,originalResponse:xdr,isJSON:true});}catch(e){resolve({text:xdr.responseText,originalResponse:xdr,isText:true});}};function handleError(){reject(new Error('There was an error with the XDR'));}xdr.onerror=handleError;xdr.ontimeout=handleError;xdr.open(method,authToUrl(url,opts));xdr.send(opts.data);});}function isNodeLikeEnvironment(){var windowAbsent=typeof window==='undefined';var requirePresent='function'==='function';return windowAbsent&&requirePresent;}function checkStatus(response){if(response.status>=200&&response.status<300){return response;}var error=new Error(response.statusText);error.status=response.status;error.response=response;throw error;}function parseResponse(response){return response.json().then(function(json){return{json:json,originalResponse:response,isJSON:true};})['catch'](function(){var responseClone=response.clone();return responseClone.text().then(function(text){return{text:text,originalResponse:responseClone,isText:true};});});}function ajax(method,url){var opts=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};// we need to check that we're not running in Node
// before we should check if this is ie9
if(!isNodeLikeEnvironment()){var xhr=new XMLHttpRequest();if(!('withCredentials'in xhr)){return ie9Ajax.apply(undefined,arguments);}}opts.method=method;opts.mode='cors';return fetch(url,opts).then(checkStatus).then(parseResponse);}var ListingsAdapter=CoreObject.extend(Object.defineProperties({ajax:ajax,constructor:function constructor(config){this.config=config;},pathForType:function pathForType(type){return'/'+type.slice(0,-1)+'_listings';},buildUrl:function buildUrl(singleOrMultiple,type,idOrQuery){switch(singleOrMultiple){case'multiple':return this.buildMultipleUrl(type,idOrQuery);case'single':return this.buildSingleUrl(type,idOrQuery);default:return'';}},buildMultipleUrl:function buildMultipleUrl(type){var query=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var url=''+this.baseUrl+this.pathForType(type);var paramNames=Object.keys(query);if(paramNames.length>0){var queryString=paramNames.map(function(key){var value=void 0;if(Array.isArray(query[key])){value=query[key].join(',');}else{value=query[key];}return key+'='+encodeURIComponent(value);}).join('&');return url+'?'+queryString;}return url;},buildSingleUrl:function buildSingleUrl(type,id){return''+this.baseUrl+this.pathForType(type)+'/'+id;},fetchMultiple:function fetchMultiple()/* type, [query] */{var url=this.buildUrl.apply(this,['multiple'].concat(Array.prototype.slice.call(arguments)));return this.ajax('GET',url,{headers:this.headers}).then(function(response){return response.json;});},fetchSingle:function fetchSingle()/* type, id */{var url=this.buildUrl.apply(this,['single'].concat(Array.prototype.slice.call(arguments)));return this.ajax('GET',url,{headers:this.headers}).then(function(response){return response.json;});}},{base64ApiKey:{get:function get(){return btoa(this.config.apiKey);},configurable:true,enumerable:true},baseUrl:{get:function get(){var _config=this.config;var domain=_config.domain;var appId=_config.appId;return'https://'+domain+'/api/apps/'+appId;},configurable:true,enumerable:true},headers:{get:function get(){return assign$1({},{Authorization:'Basic '+this.base64ApiKey,'Content-Type':'application/json','X-SDK-Variant':'javascript','X-SDK-Version':version$1},this.config.ajaxHeaders);},configurable:true,enumerable:true}}));var GUID_KEY='shopify-buy-uuid';/**
 * A cart stores an Array of `CartLineItemModel`'s in it's `lineItems` property.
 * @class CartLineItemModel
 * @constructor
 */var CartLineItemModel=BaseModel.extend(Object.defineProperties({constructor:function constructor(){this['super'].apply(this,arguments);}},{id:{/**
   * A line item ID.
   * @property id
   * @readOnly
   * @type {String}
   */get:function get(){return this.attrs[GUID_KEY];},configurable:true,enumerable:true},variant_id:{/**
   * ID of line item variant.
   * @property variant_id
   * @readOnly
   * @type {String}
   */get:function get(){return this.attrs.variant_id;},configurable:true,enumerable:true},product_id:{/**
   * ID of variant's product.
   * @property product_id
   * @readOnly
   * @type {String}
   */get:function get(){return this.attrs.product_id;},configurable:true,enumerable:true},image:{/**
   * Variant's image.
   * Example `Object` returned:
   * ```
   * {
   *    "id": 18723183238,
   *    "created_at": "2016-09-14T17:12:12-04:00",
   *    "position": 1,
   *    "updated_at": "2016-09-14T17:12:12-04:00",
   *    "product_id": 8569911558,
   *    "src": "https://cdn.shopify.com/s/files/1/1019/0495/products/Mop__three_different_mop_handles.jpg?v=1473887532",
   *    "variant_ids": []
   *  }
   * ```
   * @property image
   * @readOnly
   * @type {Object}
   */get:function get(){if(!this.attrs.image){return null;}return new ImageModel(this.attrs.image);},configurable:true,enumerable:true},imageVariants:{/**
    * Image variants available for a variant. An example value of `imageVariant`:
    * ```
    * [
    *   {
    *     "name": "pico",
    *     "dimensions": "16x16",
    *     "src": "https://cdn.shopify.com/s/files/1/1019/0495/products/alien_146ef7c1-26e9-4e96-96e6-9d37128d0005_pico.jpg?v=1469046423"
    *   },
    *   {
    *     "name": "compact",
    *     "dimensions": "160x160",
    *     "src": "https://cdn.shopify.com/s/files/1/1019/0495/products/alien_146ef7c1-26e9-4e96-96e6-9d37128d0005_compact.jpg?v=1469046423"
    *   }
    * ]
    * ```
    *
    * @property imageVariant
    * @type {Array}
  */get:function get(){if(!this.image){return[];}return this.image.variants;},configurable:true,enumerable:true},title:{/**
   * Product title of variant's parent product.
   * @property title
   * @readOnly
   * @type {String}
   */get:function get(){return this.attrs.title;},configurable:true,enumerable:true},quantity:{/**
   * Count of variants to order.
   * @property quantity
   * @type {Number}
   */get:function get(){return this.attrs.quantity;},set:function set(value){var parsedValue=parseInt(value,10);if(parsedValue<0){throw new Error('Quantities must be positive');}else if(parsedValue!==parseFloat(value)){/* incidentally, this covers all NaN values, because NaN !== Nan */throw new Error('Quantities must be whole numbers');}this.attrs.quantity=parsedValue;return this.attrs.quantity;},configurable:true,enumerable:true},properties:{/**
   * Customization information for a product.
   * <a href="https://help.shopify.com/themes/customization/products/get-customization-information-for-products" target="_blank">
   * See here for more info
   * </a>.
   * @property properties
   * @type {Object}
   * @private
   */get:function get(){return this.attrs.properties||{};},set:function set(value){this.attrs.properties=value||{};return value;},configurable:true,enumerable:true},variant_title:{/**
   * Title of variant.
   * @property variant_title
   * @readOnly
   * @type {String}
   */get:function get(){return this.attrs.variant_title;},configurable:true,enumerable:true},price:{/**
   * Price of the variant. For example: `"5.00"`.
   * @property price
   * @readOnly
   * @type {String}
   */get:function get(){return this.attrs.price;},configurable:true,enumerable:true},compare_at_price:{/**
    * Compare at price for variant. The `compareAtPrice` would be
    * the price of the product previously before the product went on sale. For more info
    * go <a href="https://docs.shopify.com/manual/products/promoting-marketing/sales" target="_blank">here</a>.
    *
    * If no `compareAtPrice` is set then this value will be `null`. An example value: `"5.00"`.
    * @property compareAtPrice
    * @readOnly
    * @type {String}
  */get:function get(){return this.attrs.compare_at_price;},configurable:true,enumerable:true},line_price:{/**
   * The total price for this line item. For instance if the variant costs `1.50` and you have a quantity
   * of 2 then `line_price` will be `3.00`.
   * @property line_price
   * @readOnly
   * @type {String}
   */get:function get(){return(this.quantity*parseFloat(this.price)).toFixed(2);},configurable:true,enumerable:true},grams:{/**
   * Variant's weight in grams. If no weight is set then `0` is returned.
   * @property grams
   * @readOnly
   * @type {Number}
   */get:function get(){return this.attrs.grams;},configurable:true,enumerable:true}}));/* eslint no-undefined: 0 complexity: 0 */var GUID_PREFIX='shopify-buy.'+Date.now();var GUID_DESC={writable:true,configurable:true,enumerable:true,value:null};var uuidSeed=0;function uuid(){return++uuidSeed;}var numberCache={};var stringCache={};function setGuidFor(obj){if(obj&&obj[GUID_KEY]){return obj[GUID_KEY];}if(obj===undefined){return'(undefined)';}if(obj===null){return'(null)';}var type=typeof obj==='undefined'?'undefined':_typeof(obj);var id=void 0;switch(type){case'number':id=numberCache[obj];if(!id){id=numberCache[obj]='nu'+obj;}break;case'string':id=stringCache[obj];if(!id){id=stringCache[obj]='st'+uuid();}break;case'boolean':if(obj){id='(true)';}else{id='(false)';}break;default:if(obj===Object){id='(Object)';break;}if(obj===Array){id='(Array)';break;}id=GUID_PREFIX+'.'+uuid();if(obj[GUID_KEY]===null){obj[GUID_KEY]=id;}else{GUID_DESC.value=id;Object.defineProperty(obj,GUID_KEY,GUID_DESC);}}return id;}function objectsEqual(one,two){if(one===two){return true;}return Object.keys(one).every(function(key){if(one[key]instanceof Date){return one[key].toString()===two[key].toString();}else if(_typeof(one[key])==='object'){return objectsEqual(one[key],two[key]);}return one[key]===two[key];});}/**
* Class for cart model
* @class CartModel
*/var CartModel=BaseModel.extend(Object.defineProperties({constructor:function constructor(){this['super'].apply(this,arguments);},/**
    * Add items to the cart. Updates cart's `lineItems` based on variants passed in.
    * ```javascript
    * cart.addVariants({variant: variantObject, quantity: 1}).then(cart => {
    *   // the cart has created line items
    * });
    * ```
    * @deprecated `createLineItemsFromVariants` will be used in the future as it's more descriptive
    * @method addVariants
    * @param {Object} item - One or more variants
    * @param {ProductVariantModel} item.variant - variant object
    * @param {Number} item.quantity - quantity
    * @param {Object} [moreItems...] - further objects defining `variant` and `quantity` maybe passed in
    * @private
    * @return {Promise|CartModel} - the cart instance.
  */addVariants:function addVariants(){logger.warn('CartModel - ','addVariants is deprecated, please use createLineItemsFromVariants instead');return this.createLineItemsFromVariants.apply(this,arguments);},/**
    * Add items to the cart. Updates cart's `lineItems` based on variants passed in.
    * ```javascript
    * cart.createLineItemsFromVariants({variant: variantObject, quantity: 1}).then(cart => {
    *   // the cart has created line items
    * });
    * ```
    * @method createLineItemsFromVariants
    * @param {Object} item - One or more variants
    * @param {ProductVariantModel} item.variant - variant object
    * @param {Number} item.quantity - quantity
    * @param {Object} [moreItems...] - further objects defining `variant` and `quantity` maybe passed in
    * @public
    * @return {Promise|CartModel} - the cart instance.
  */createLineItemsFromVariants:function createLineItemsFromVariants(){var newLineItems=[].concat(Array.prototype.slice.call(arguments)).map(function(item){var lineItem={image:item.variant.image,image_variants:item.variant.imageVariants,variant_id:item.variant.id,product_id:item.variant.productId,title:item.variant.productTitle,quantity:parseInt(item.quantity,10),properties:item.properties||{},variant_title:item.variant.title,price:item.variant.price,compare_at_price:item.variant.compareAtPrice,grams:item.variant.grams};setGuidFor(lineItem);return lineItem;});var existingLineItems=this.attrs.line_items;existingLineItems.push.apply(existingLineItems,_toConsumableArray(newLineItems));var dedupedLineItems=existingLineItems.reduce(function(itemAcc,item){var matchingItem=itemAcc.filter(function(existingItem){return existingItem.variant_id===item.variant_id&&objectsEqual(existingItem.properties,item.properties);})[0];if(matchingItem){matchingItem.quantity=matchingItem.quantity+item.quantity;}else{itemAcc.push(item);}return itemAcc;},[]);// Users may pass negative numbers and remove items. This ensures there's no
// item with a quantity of zero or less.
this.attrs.line_items=dedupedLineItems.reduce(function(itemAcc,item){if(item.quantity>=1){itemAcc.push(item);}return itemAcc;},[]);return this.updateModel();},/**
    * Update a line item quantity based on line item id
    * ```javascript
    * // This example changes the quantity for the first line item to 2
    * const firstLineItemId = cart.lineItems[0].id;
    *
    * cart.updateLineItem(firstLineItemId, 2).then(cart => {
    *   // the cart has updated the line item
    * });
    * ```
    * @method updateLineItem
    * @param {String} id - line item ID
    * @param {Number} quantity - new quantity for line item
    * @throws {Error} if line item with ID is not in cart.
    * @public
    * @return {Promise|CartModel} - the cart instance
  */updateLineItem:function updateLineItem(id,quantity){if(quantity<1){return this.removeLineItem(id);}var lineItem=this.lineItems.filter(function(item){return item.id===id;})[0];if(lineItem){lineItem.quantity=quantity;return this.updateModel();}return new Promise(function(resolve,reject){reject(new Error('line item with id: '+id+' not found in cart#'+this.id));});},/**
    * Remove a line item from cart based on line item id
    * ```javascript
    * // This example removes the first line item
    * const firstLineItemId = cart.lineItems[0].id;
    *
    * cart.removeLineItem(firstLineItemId).then(cart => {
    *   // the cart has removed the line item
    * });
    * ```
    *
    * @method removeLineItem
    * @param {String} id - line item ID
    * @throws {Error} if line item with ID is not in cart.
    * @public
    * @return {Promise|CartModel} - the cart instance
  */removeLineItem:function removeLineItem(id){var oldLength=this.lineItems.length;var newLineItems=this.lineItems.filter(function(item){return item.id!==id;});var newLength=newLineItems.length;if(newLength<oldLength){this.attrs.line_items=newLineItems.map(function(item){return item.attrs;});return this.updateModel();}return new Promise(function(resolve,reject){reject(new Error('line item with id: '+id+' not found in cart#'+this.id));});},/**
    * Remove all line items from cart
    * ```javascript
    * // This example removes all line items from the cart
    * cart.clearLineItems().then(cart => {
    *   // the cart has removed all line items
    * });
    * @method clearLineItems
    * @public
    * @return {Promise|CartModel} - the cart instance
  */clearLineItems:function clearLineItems(){this.attrs.line_items=[];return this.updateModel();},/**
    * Force update of cart model on server. This function will only be used in advanced situations and does not need to be called
    * explicitly to update line items. It is automatically called after
    * {{#crossLink "CartModel/createLineItemsFromVariants"}}{{/crossLink}},
    * {{#crossLink "CartModel/updateLineItem"}}{{/crossLink}},
    * {{#crossLink "CartModel/removeLineItem"}}{{/crossLink}},
    * and {{#crossLink "CartModel/removeLineItem"}}{{/crossLink}}
    *
    * @method updateModel
    * @public
    * @return {Promise|CartModel} - the cart instance
  */updateModel:function updateModel(){var _this5=this;return this.shopClient.update('carts',this).then(function(updateCart){assign$1(_this5.attrs,updateCart.attrs);return _this5;});}},{id:{/**
    * get ID for current cart
    * @property id
    * @readOnly
    * @type {String}
  */get:function get(){return this.attrs[GUID_KEY];},configurable:true,enumerable:true},lineItems:{/**
    * Get an `Array` of {{#crossLink "CartLineItemModel"}}CartLineItemModel's{{/crossLink}}
    * @property lineItems
    * @readOnly
    * @type {Array}
  */get:function get(){return(this.attrs.line_items||[]).map(function(item){return new CartLineItemModel(item);});},configurable:true,enumerable:true},lineItemCount:{/**
    * Gets the total quantity of all line items. Example: you've added two variants with quantities 3 and 2. `lineItemCount` will be 5.
    * @property lineItemCount
    * @readOnly
    * @type {Number}
  */get:function get(){return this.lineItems.reduce(function(total,item){return total+item.quantity;},0);},configurable:true,enumerable:true},subtotal:{/**
    * Get current subtotal price for all line items. Example: two items have been added to the cart that cost $1.25
    * then the subtotal will be `2.50`
    *
    * @property subtotal
    * @readOnly
    * @type {String}
  */get:function get(){var subtotal=this.lineItems.reduce(function(runningTotal,lineItem){return runningTotal+parseFloat(lineItem.line_price);},0);return subtotal.toFixed(2);},configurable:true,enumerable:true},checkoutUrl:{/**
    * Get checkout URL for current cart
    * @property checkoutUrl
    * @readOnly
    * @type {String}
  */get:function get(){var config=this.config;var baseUrl='https://'+config.domain+'/cart';var ga=globalVars.get('ga');var variantPath=this.lineItems.map(function(item){return item.variant_id+':'+item.quantity;});var query='access_token='+config.apiKey+'&_fd=0';if(typeof ga==='function'){var linkerParam=void 0;ga(function(tracker){linkerParam=tracker.get('linkerParam');});if(linkerParam){query+='&'+linkerParam;}}return baseUrl+'/'+variantPath+'?'+query;},configurable:true,enumerable:true}}));var CartSerializer=CoreObject.extend({constructor:function constructor(config){this.config=config;},rootKeyForType:function rootKeyForType(type){return type.slice(0,-1);},modelForType:function modelForType()/* type */{return CartModel;},deserializeSingle:function deserializeSingle(type){var singlePayload=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var metaAttrs=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var modelAttrs=singlePayload[this.rootKeyForType(type)];var model=this.modelFromAttrs(type,modelAttrs,metaAttrs);return model;},modelFromAttrs:function modelFromAttrs(type,attrs,metaAttrs){var Model=this.modelForType(type);metaAttrs.config=this.config;return new Model(attrs,metaAttrs);},serialize:function serialize(type,model){var root=this.rootKeyForType(type);var payload={};var attrs=assign$1({},model.attrs);payload[root]=attrs;delete attrs.attributes;Object.keys(attrs).forEach(function(key){var value=attrs[key];if(value===null||typeof value==='string'&&value.length===0){delete attrs[key];}});return payload;}});var ReferenceModel=BaseModel.extend(Object.defineProperties({/**
    * Class for reference model
    * @private
    * @class ReferenceModel
    * @constructor
  */constructor:function constructor(attrs){if(Object.keys(attrs).indexOf('referenceId')<0){throw new Error('Missing key referenceId of reference. References to null are not allowed');}this['super'].apply(this,arguments);}},{id:{/**
    * get the ID for current reference (not what it refers to, but its own unique identifier)
    * @property id
    * @type {String}
  */get:function get(){return this.attrs[GUID_KEY];},configurable:true,enumerable:true},referenceId:{get:function get(){return this.attrs.referenceId;},set:function set(value){this.attrs.referenceId=value;return value;},configurable:true,enumerable:true}}));var ReferenceSerializer=CoreObject.extend({constructor:function constructor(config){this.config=config;},modelForType:function modelForType()/* type */{return ReferenceModel;},deserializeSingle:function deserializeSingle(type){var singlePayload=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var metaAttrs=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var Model=this.modelForType(type);return new Model(singlePayload,metaAttrs);},serialize:function serialize(type,model){var attrs=assign$1({},model.attrs);return attrs;}});var Store=CoreObject.extend({constructor:function constructor(){this.localStorageAvailable=this.storageAvailable('localStorage');this.cache={};},setItem:function setItem(key,value){if(this.localStorageAvailable){localStorage.setItem(key,JSON.stringify(value));}else{this.cache[key]=value;}return value;},getItem:function getItem(key){if(this.localStorageAvailable){var stringValue=localStorage.getItem(key);try{return JSON.parse(stringValue);}catch(e){return null;}}else{return this.cache[key]||null;}},storageAvailable:function storageAvailable(type){try{var storage=globalVars.get(type);var x='__storage_test__';storage.setItem(x,x);storage.removeItem(x);return true;}catch(e){return false;}}});var LocalStorageAdapter=CoreObject.extend({constructor:function constructor(){this.store=new Store();},idKeyForType:function idKeyForType()/* type */{return GUID_KEY;},fetchSingle:function fetchSingle(type,id){var _this6=this;return new Promise(function(resolve,reject){var value=_this6.store.getItem(_this6.storageKey(type,id));if(value===null){reject(new Error(type+'#'+id+' not found'));return;}resolve(value);});},create:function create(type,payload){var _this7=this;return new Promise(function(resolve){var id=_this7.identify(payload);_this7.store.setItem(_this7.storageKey(type,id),payload);resolve(payload);});},update:function update(type,id,payload){var _this8=this;return new Promise(function(resolve){_this8.store.setItem(_this8.storageKey(type,id),payload);resolve(payload);});},storageKey:function storageKey(type,id){return type+'.'+id;},identify:function identify(payload){var keys=Object.keys(payload);if(keys.length===1&&_typeof(payload[keys[0]])==='object'){return setGuidFor(payload[keys[0]]);}return setGuidFor(payload);}});/**
 * @module shopify-buy
 * @submodule shop-client
 */function fetchFactory(fetchType,type){var func=void 0;switch(fetchType){case'all':func=function func(){return this.fetchAll(type);};break;case'one':func=function func(){return this.fetch.apply(this,[type].concat(Array.prototype.slice.call(arguments)));};break;case'query':func=function func(){return this.fetchQuery.apply(this,[type].concat(Array.prototype.slice.call(arguments)));};break;}return func;}var ShopClient=CoreObject.extend(Object.defineProperties({/**
   * @class ShopClient
   * @constructor
   */constructor:function constructor(config){this.config=config;this.serializers={products:ListingsSerializer,collections:ListingsSerializer,carts:CartSerializer,references:ReferenceSerializer};this.adapters={products:ListingsAdapter,collections:ListingsAdapter,carts:LocalStorageAdapter,references:LocalStorageAdapter};},config:null,/**
   * Fetch all of a `type`, returning a promise.
   *
   * ```javascript
   * client.fetchAll('products').then(products => {
   *   // do things with products
   * });
   * ```
   *
   * @method fetchAll
   * @private
   * @param {String} type The pluralized name of the type, in lower case.
   * @return {Promise|Array} a promise resolving with an array of `type`
   */fetchAll:function fetchAll(type){var _this9=this;var adapter=new this.adapters[type](this.config);return adapter.fetchMultiple(type).then(function(payload){return _this9.deserialize(type,payload,adapter,null,{multiple:true});});},/**
   * Fetch one of a `type`, returning a promise.
   *
   * ```javascript
   * client.fetch('products', 123).then(product => {
   *   // do things with the product
   * });
   * ```
   *
   * @method fetch
   * @private
   * @param {String} type The pluralized name of the type, in lower case.
   * @param {String|Number} id a unique identifier
   * @return {Promise|BaseModel} a promise resolving with a single instance of
   * `type` expressed as a `BaseModel`.
   */fetch:function fetch(type,id){var _this10=this;var adapter=new this.adapters[type](this.config);return adapter.fetchSingle(type,id).then(function(payload){return _this10.deserialize(type,payload,adapter,null,{single:true});});},/**
   * Fetch many of a `type`, that match `query`
   *
   * ```javascript
   * client.fetchQuery('products', { collection_id: 456 }).then(products => {
   *   // do things with the products
   * });
   * ```
   *
   * @method fetchQuery
   * @private
   * @param {String} type The pluralized name of the type, in lower case.
   * @param {Object} query a query sent to the api server.
   * @return {Promise|Array} a promise resolving with an array of `type`.
   */fetchQuery:function fetchQuery(type,query){var _this11=this;var adapter=new this.adapters[type](this.config);return adapter.fetchMultiple(type,query).then(function(payload){return _this11.deserialize(type,payload,adapter,null,{multiple:true});});},/**
   * Create an instance of `type`, optionally including `modelAttrs`.
   *
   * ```javascript
   * client.create('carts', { line_items: [ ... ] }).then(cart => {
   *   // do things with the cart.
   * });
   * ```
   *
   * @method create
   * @private
   * @param {String} type The pluralized name of the type, in lower case.
   * @param {Object} [modelAttrs={}] attributes representing the internal state
   * of the model to be persisted.
   * @return {Promise|CartModel} a promise resolving with a single instance of
   * `type`
   */create:function create(type){var _this12=this;var modelAttrs=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var adapter=new this.adapters[type](this.config);var serializer=new this.serializers[type](this.config);var Model=serializer.modelForType(type);var model=new Model(modelAttrs,{shopClient:this});var attrs=serializer.serialize(type,model);return adapter.create(type,attrs).then(function(payload){return _this12.deserialize(type,payload,adapter,serializer,{single:true});});},/**
   * Create an instance of `type`, optionally including `attrs`.
   *
   * ```javascript
   * client.create('carts', { line_items: [ ... ] }).then(cart => {
   *   // do things with the cart.
   * });
   * ```
   *
   * @method update
   * @private
   * @param {String} type The pluralized name of the type, in lower case.
   * @param {BaseModel} updatedModel The model that represents new state to
   * to persist.
   * @return {Promise|CartModel} a promise resolving with a single instance of
   * `type`
   */update:function update(type,updatedModel){var _this13=this;var adapter=updatedModel.adapter;var serializer=updatedModel.serializer;var serializedModel=serializer.serialize(type,updatedModel);var id=updatedModel.attrs[adapter.idKeyForType(type)];return adapter.update(type,id,serializedModel).then(function(payload){return _this13.deserialize(type,payload,adapter,serializer,{single:true});});},/**
   * Proxy to serializer's deserialize.
   *
   * @method deserialize
   * @private
   * @param {String} type The pluralized name of the type, in lower case.
   * @param {Object} payload The raw payload returned by the adapter.
   * @param {BaseAdapter} adapter The adapter that yielded the payload.
   * @param {BaseSerializer} existingSerializer The serializer to attach. If
   * none is passed, then `this.deserialize` will create one for the type.
   * @param {Object} opts Options that determine which deserialization method to
   * use.
   * @param {Boolean} opts.multiple true when the payload represents multiple
   * models
   * @param {Boolean} opts.single true when the payload represents one model.
   * @return {BaseModel} an instance of `type` reified into a model.
   */deserialize:function deserialize(type,payload,adapter,existingSerializer){var opts=arguments.length>4&&arguments[4]!==undefined?arguments[4]:{};var serializer=existingSerializer||new this.serializers[type](this.config);var meta={shopClient:this,adapter:adapter,serializer:serializer,type:type};var serializedPayload=void 0;if(opts.multiple){serializedPayload=serializer.deserializeMultiple(type,payload,meta);}else{serializedPayload=serializer.deserializeSingle(type,payload,meta);}return serializedPayload;},/**
    * Creates a {{#crossLink "CartModel"}}CartModel{{/crossLink}} instance.
    *
    * ```javascript
    * client.createCart().then(cart => {
    *   // do something with cart
    * });
    * ```
    *
    * @method createCart
    * @public
    * @return {Promise|CartModel} - new cart instance.
  */createCart:function createCart(){var userAttrs=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var baseAttrs={line_items:[]};var attrs={};assign$1(attrs,baseAttrs);assign$1(attrs,userAttrs);return this.create('carts',attrs);},/**
    * Updates an existing {{#crossLink "CartModel"}}CartModel{{/crossLink}} instance and persists it to localStorage.
    *
    * ```javascript
    * client.createCart().then(cart => {
    *   cart.lineItems = [
    *     // ...
    *   ];
    *   client.updateCart(cart);
    * });
    * ```
    *
    * @param {CartModel} updatedCart an updated CartModel
    * @method updateCart
    * @private
    * @return {Promise|CartModel} - updated cart instance.
  */updateCart:function updateCart(updatedCart){return this.update('carts',updatedCart);},/**
   * Retrieve a previously created cart by its key.
   *
   * ```javascript
   * client.fetchCart('shopify-buy.1459804699118.2').then(cart => {
   *   console.log(cart); // The retrieved cart
   * });
   *
   * @method fetchCart
   * @public
   * @param {String} id The cart's unique identifier
   * @return {Promise|CartModel} The cart model.
   *
   */fetchCart:fetchFactory('one','carts'),/**
   * This function will return an `Array` of products from your store
   * ```
   * client.fetchAllProducts()
   * .then(function(products) {
   *   // all products in store
   * });
   * ```
   *
   * @method fetchAllProducts
   * @public
   * @return {Promise|Array} The product models.
   */fetchAllProducts:fetchFactory('all','products'),/**
   * This function will return an `Array` of collections from your store
   * ```
   * client.fetchAllCollections()
   * .then(function(collections) {
   *
   * });
   * ```
   *
   * @method fetchAllCollections
   * @public
   * @return {Promise|Array} The collection models.
   */fetchAllCollections:fetchFactory('all','collections'),/**
   * Fetch one product by its ID.
   *
   * ```javascript
   * client.fetchProduct('8569911558').then(product => {
   *   console.log(product); // The product with an ID of '8569911558'
   * });
   * ```
   *
   * @method fetchProduct
   * @public
   * @param {String|Number} id a unique identifier
   * @return {Promise|BaseModel} The product model with the specified ID.
   */fetchProduct:fetchFactory('one','products'),/**
   * Fetch one collection by its ID.
   *
   * ```javascript
   * client.fetchCollection('336903494').then(collection => {
   *   console.log(collection); // The collection with an ID of '336903494'
   * });
   * ```
   *
   * @method fetchCollection
   * @public
   * @param {String|Number} id a unique identifier
   * @return {Promise|BaseModel} The collection model with the specified ID.
   */fetchCollection:fetchFactory('one','collections'),/**
   * Fetches a list of products matching a specified query.
   *
   * ```javascript
   * client.fetchQueryProducts({ collection_id: '336903494', tag: ['hats'] }).then(products => {
   *   console.log(products); // An array of products in collection '336903494' having the tag 'hats'
   * });
   * ```
   * @method fetchQueryProducts
   * @public
   * @param {Object} query A query sent to the api server containing one or more of:
   *   @param {String|Number} [query.collection_id] The ID of a collection to retrieve products from
   *   @param {Array} [query.tag] A list of tags to filter the products by. Accepts up to 10 tags.
   *   @param {Array} [query.product_ids] A list of product IDs to retrieve
   *   @param {String|Number} [query.page=1] The page offset number of the current lookup (based on the `limit`)
   *   @param {String|Number} [query.limit=50] The number of products to retrieve per page
   *   @param {String} [query.handle] The handle of the product to look up
   *   @param {String} [query.updated_at_min] Products updated since the supplied timestamp (format: 2008-12-31 03:00)
   *   @param {String} [query.sort_by] Will modify how products are ordered. Possible values are:
   *                                   `"updated_at"`, `"best-selling"`, `"title-ascending"`, `"title-descending"`,
   *                                   `"price-descending"`, `"price-ascending"`, `"created-descending"`, `"created-ascending"`,
   *                                   or `"collection-default"`. Using `"collection-default"` means that products will be ordered
   *                                   the using the custom ordering defined in your Shopify Admin. Default value `"collection-default"`.
   * @return {Promise|Array} The product models.
   */fetchQueryProducts:fetchFactory('query','products'),/**
   * Fetches a list of collections matching a specified query.
   *
   * ```javascript
   * client.fetchQueryCollections({page: 2, limit: 20}).then(collections => {
   *   console.log(collections); // An array of collection resources
   * });
   * ```
   *
   * @method fetchQueryCollections
   * @public
   * @param {Object} query a query sent to the api server.
   *   @param {String|Number} [query.page=1] the page offset number of the current lookup (based on the `limit`)
   *   @param {String|Number} [query.limit=50] the number of collections to retrieve per page
   * @return {Promise|Array} The collection models.
   */fetchQueryCollections:fetchFactory('query','collections'),/**
   * This method looks up a reference in localStorage to the most recent cart.
   * If one is not found, creates one. If the cart the reference points to
   * doesn't exist, create one and store the new reference.
   *
   * ```javascript
   * client.fetchRecentCart().then(cart => {
   *  // do stuff with the cart
   * });
   * ```
   *
   * @method fetchRecentCart
   * @public
   * @return {Promise|CartModel} The cart.
   */fetchRecentCart:function fetchRecentCart(){var _this14=this;return this.fetch('references',this.config.domain+'.recent-cart').then(function(reference){var cartId=reference.referenceId;return _this14.fetchCart(cartId);})['catch'](function(){return _this14.createCart().then(function(cart){var refAttrs={referenceId:cart.id};refAttrs[GUID_KEY]=_this14.config.domain+'.recent-cart';_this14.create('references',refAttrs);return cart;});});}},{serializers:{/**
   * @attribute
   * @default {
   *  products: ListingsAdapter,
   *  collections: ListingsAdapter,
   *  carts: CartAdapter
   * }
   * @type Object
   * @protected
   */// Prevent leaky state
get:function get(){return assign$1({},this.shadowedSerializers);},set:function set(values){this.shadowedSerializers=assign$1({},values);},configurable:true,enumerable:true},adapters:{get:function get(){return assign$1({},this.shadowedAdapters);},set:function set(values){this.shadowedAdapters=assign$1({},values);},configurable:true,enumerable:true}}));/* globals require */if(isNodeLikeEnvironment()){/* this indirection is needed because babel throws errors when
   * transpiling require('node-fetch') using `amd` plugin with babel6
   */var localRequire=commonjsRequire;var _fetch=localRequire('node-fetch');globalVars.set('fetch',_fetch);globalVars.set('Response',_fetch.Response);}/* global Buffer */if(isNodeLikeEnvironment()){globalVars.set('btoa',function(string){return new Buffer(string).toString('base64');});}/**
 * @module shopify-buy
 * @submodule shopify
 *//**
 * `ShopifyBuy` only defines one function {{#crossLink "ShopifyBuy/buildClient"}}{{/crossLink}} which can
 * be used to build a {{#crossLink "ShopClient"}}{{/crossLink}} to query your store using the
 * provided
 * {{#crossLink "ShopifyBuy/buildClient/configAttrs:apiKey"}}`apiKey`{{/crossLink}},
 * {{#crossLink "ShopifyBuy/buildClient/configAttrs:appId"}}`appId`{{/crossLink}},
 * and {{#crossLink "ShopifyBuy/buildClient/configAttrs:domain"}}`domain`{{/crossLink}}.
 * @class ShopifyBuy
 * @static
 */var Shopify={ShopClient:ShopClient,Config:Config,version:version$1,NO_IMAGE_URI:NO_IMAGE_URI,/**
   * Create a ShopClient. This is the main entry point to the SDK.
   *
   * ```javascript
   * const client = ShopifyBuy.buildClient({
   *   apiKey: 'bf081e860bc9dc1ce0654fdfbc20892d',
   *   appId: 6,
   *   myShopifyDomain: 'your-shop-subdomain.myshopify.com', //Deprecated. Use `domain` instead
   *   domain: 'embeds.myshopify.com'
   * });
   * ```
   *
   * @method buildClient
   * @for ShopifyBuy
   * @static
   * @public
   * @param {Object} configAttrs An object of required config data such as: `apiKey`, `appId`, `domain`
   * @param {String} configAttrs.apiKey An API Key for your store. Documentation how to get an API Key:
   *                                    https://help.shopify.com/api/sdks/js-buy-sdk/getting-started#api-key
   * @param {String} configAttrs.appId Typically will be 6 which is the Buy Button App Id. For more info on App Id see:
   *                                   https://help.shopify.com/api/sdks/js-buy-sdk/getting-started#app-id
   * @param {String} configAttrs.domain Your shop's full `myshopify.com` domain. For example: `embeds.myshopify.com`
   * @param {String} configAttrs.myShopifyDomain You shop's `myshopify.com` domain. [deprecated Use configAttrs.domain]
   * @return {ShopClient} a client for the shop using your api credentials which you can use to query your store.
   */buildClient:function buildClient(){var configAttrs=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var config=new this.Config(configAttrs);return new this.ShopClient(config);}};module.exports=Shopify;
});

var ShopifyBuy$1 = interopDefault(polyfilled);

function merge(target) {
  for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  sources.forEach(function (source) {
    if (source) {
      Object.keys(source).forEach(function (key) {
        if (Object.prototype.toString.call(source[key]) === '[object Object]') {
          target[key] = merge(target[key] || {}, source[key]);
        } else {
          target[key] = source[key];
        }
      });
    }
  });
  return target;
}

function isFunction$1(obj) {
  return !!(obj && obj.constructor && obj.call && obj.apply);
}

var quantityTemplate = '<div class="{{data.classes.product.quantity}} {{data.quantityClass}}" data-element="product.quantity">\n            {{#data.contents.quantityDecrement}}\n              <button class="{{data.classes.product.quantityButton}} {{data.classes.product.quantityDecrement}}" type="button" data-element="product.quantityDecrement"><span>-</span><span class="visuallyhidden">Decrement</span></button>\n            {{/data.contents.quantityDecrement}}\n            {{#data.contents.quantityInput}}\n              <input class="{{data.classes.product.quantityInput}}" type="number" min="0" aria-label="Quantity" value="{{data.selectedQuantity}}" data-element="product.quantityInput">\n            {{/data.contents.quantityInput}}\n            {{#data.contents.quantityIncrement}}\n              <button class="{{data.classes.product.quantityButton}} {{data.classes.product.quantityIncrement}}" type="button" data-element="product.quantityIncrement"><span>+</span><span class="visuallyhidden">Increment</span></button>\n            {{/data.contents.quantityIncrement}}\n           </div>';
var buttonTemplate = '<div class="{{data.classes.product.buttonWrapper}}" data-element="product.buttonWrapper"><button {{#data.buttonDisabled}}disabled{{/data.buttonDisabled}} class="{{data.classes.product.button}} {{data.buttonClass}}" data-element="product.button">{{data.buttonText}}</button></div>';

var productTemplate = {
  img: '<div class="{{data.classes.product.imgWrapper}}" data-element="product.imgWrapper"><a><img data-element="product.img" class="{{data.classes.product.img}}" src="{{data.currentImage.src}}" /></a></div>',
  imgWithCarousel: '<div class="{{data.classes.product.imgWrapper}}" data-element="product.imageWrapper">\n                      <div class="main-image-wrapper">\n                        <button type="button" class="carousel-button carousel-button--previous">\n                          Left\n                          <img class="carousel-button-arrow" src="//sdks.shopifycdn.com/buy-button/latest/arrow.svg" alt="Carousel Arrow"/>\n                        </button>\n                        <img class="{{data.classes.product.img}}" src="{{data.currentImage.src}}" data-element="product.img" />\n                        <button type="button" class="carousel-button carousel-button--next">\n                          Right\n                          <img class="carousel-button-arrow" src="//sdks.shopifycdn.com/buy-button/latest/arrow.svg" alt="Carousel Arrow"/>\n                        </button>\n                      </div>\n                      <div class="{{data.classes.product.carousel}}">\n                        {{#data.carouselImages}}\n                        <a data-element="product.carouselitem" href="{{src}}" class="{{data.classes.product.carouselItem}} {{#isSelected}} {{data.classes.product.carouselItemSelected}} {{/isSelected}}" data-image-id="{{id}}" style="background-image: url({{carouselSrc}})"></a>\n                        {{/data.carouselImages}}\n                      </div>\n                    </div>',
  title: '<h1 class="{{data.classes.product.title}}" data-element="product.title">{{data.title}}</h1>',
  variantTitle: '{{#data.hasVariants}}<h2 class="{{data.classes.product.variantTitle}}" data-element="product.variantTitle">{{data.selectedVariant.title}}</h2>{{/data.hasVariants}}',
  options: '{{#data.hasVariants}}<div class="{{data.classes.product.options}}" data-element="product.options">{{{data.optionsHtml}}}</div>{{/data.hasVariants}}',
  price: '<div class="{{data.classes.product.prices}}" data-element="product.prices">\n            {{#data.selectedVariant}}\n            <span class="{{data.classes.product.price}} {{data.priceClass}}" data-element="product.price">{{data.formattedPrice}}</span>\n            {{#data.selectedVariant.compareAtPrice}}<span class="{{data.classes.product.compareAt}}" data-element="product.compareAt">{{data.formattedCompareAtPrice}}</span>{{/data.selectedVariant.compareAtPrice}}\n            {{/data.selectedVariant}}\n          </div>',
  description: '<div class="{{data.classes.product.description}}" data-element="product.description">{{{data.description}}}</div>',
  button: buttonTemplate,
  quantity: quantityTemplate,
  buttonWithQuantity: '<div class="{{data.classes.product.buttonWithQuantity}}" data-element="product.buttonWithQuantity">' + quantityTemplate + buttonTemplate + '</div>'
};
var productTemplateWithURL = {
  img: '<div class="{{data.classes.product.imgWrapper}}" data-element="product.imgWrapper"><a target="_parent" href={{data.url_slug}}><img data-element="product.img" class="{{data.classes.product.img}}" src="{{data.currentImage.src}}" /></a></div>',
  imgWithCarousel: '<div class="{{data.classes.product.imgWrapper}}" data-element="product.imageWrapper">\n                      <div class="main-image-wrapper">\n                        <button type="button" class="carousel-button carousel-button--previous">\n                          Left\n                          <img class="carousel-button-arrow" src="//sdks.shopifycdn.com/buy-button/latest/arrow.svg" alt="Carousel Arrow"/>\n                        </button>\n                        <img class="{{data.classes.product.img}}" src="{{data.currentImage.src}}" data-element="product.img" />\n                        <button type="button" class="carousel-button carousel-button--next">\n                          Right\n                          <img class="carousel-button-arrow" src="//sdks.shopifycdn.com/buy-button/latest/arrow.svg" alt="Carousel Arrow"/>\n                        </button>\n                      </div>\n                      <div class="{{data.classes.product.carousel}}">\n                        {{#data.carouselImages}}\n                        <a data-element="product.carouselitem" href="{{src}}" class="{{data.classes.product.carouselItem}} {{#isSelected}} {{data.classes.product.carouselItemSelected}} {{/isSelected}}" data-image-id="{{id}}" style="background-image: url({{carouselSrc}})"></a>\n                        {{/data.carouselImages}}\n                      </div>\n                    </div>',
  title: '<h1 class="{{data.classes.product.title}}" data-element="product.title">{{data.title}}</h1>',
  variantTitle: '{{#data.hasVariants}}<h2 class="{{data.classes.product.variantTitle}}" data-element="product.variantTitle">{{data.selectedVariant.title}}</h2>{{/data.hasVariants}}',
  options: '{{#data.hasVariants}}<div class="{{data.classes.product.options}}" data-element="product.options">{{{data.optionsHtml}}}</div>{{/data.hasVariants}}',
  price: '<div class="{{data.classes.product.prices}}" data-element="product.prices">\n            {{#data.selectedVariant}}\n            <span class="{{data.classes.product.price}} {{data.priceClass}}" data-element="product.price">{{data.formattedPrice}}</span>\n            {{#data.selectedVariant.compareAtPrice}}<span class="{{data.classes.product.compareAt}}" data-element="product.compareAt">{{data.formattedCompareAtPrice}}</span>{{/data.selectedVariant.compareAtPrice}}\n            {{/data.selectedVariant}}\n          </div>',
  description: '<div class="{{data.classes.product.description}}" data-element="product.description">{{{data.description}}}</div>',
  button: buttonTemplate,
  quantity: quantityTemplate,
  buttonWithQuantity: '<div class="{{data.classes.product.buttonWithQuantity}}" data-element="product.buttonWithQuantity">' + quantityTemplate + buttonTemplate + '</div>'
};

var cartTemplates = {
  title: "<div class=\"{{data.classes.cart.header}}\" data-element=\"cart.header\">\n            <h2 class=\"{{data.classes.cart.title}}\" data-element=\"cart.title\">{{data.text.title}}</h2>\n            <button class=\"{{data.classes.cart.close}}\" data-element=\"cart.close\">\n              <span aria-role=\"hidden\">&times;</span>\n              <span class=\"visuallyhidden\">Close</span>\n             </button>\n          </div>",
  lineItems: "<div class=\"{{data.classes.cart.cartScroll}}\" data-elemenmt=\"cart.cartScroll\">\n                {{#data.isEmpty}}<p class=\"{{data.classes.cart.empty}} {{data.classes.cart.emptyCart}}\" data-element=\"cart.empty\">{{data.text.empty}}</p>{{/data.isEmpty}}\n                <div class=\"{{data.classes.cart.lineItems}}\" data-element=\"cart.lineItems\">{{{data.lineItemsHtml}}}</div>\n              </div>",
  footer: "{{^data.isEmpty}}\n            <div class=\"{{data.classes.cart.footer}}\" data-element=\"cart.footer\">\n              <p class=\"{{data.classes.cart.subtotalText}}\" data-element=\"cart.total\">{{data.text.total}}</p>\n              <p class=\"{{data.classes.cart.subtotal}}\" data-element=\"cart.subtotal\">{{data.formattedTotal}}</p>\n              <p class=\"{{data.classes.cart.notice}}\" data-element=\"cart.notice\">{{data.text.notice}}</p>\n              <button class=\"{{data.classes.cart.button}}\" type=\"button\" data-element=\"cart.button\">{{data.text.button}}</button>\n            </div>\n           {{/data.isEmpty}}"
};

var optionTemplates = {
  option: "<div class={{data.classes.option.option}} data-element=\"option.option\">\n    <label class=\"{{data.classes.option.label}} {{#data.onlyOption}}{{data.classes.option.hiddenLabel}}{{/data.onlyOption}}\" data-element=\"option.label\">{{data.name}}</label>\n      <div class=\"{{data.classes.option.wrapper}}\" data-element=\"option.wrapper\">\n      <select class=\"{{data.classes.option.select}}\" name=\"{{data.name}}\" data-element=\"option.select\">\n        {{#data.values}}\n          <option {{#selected}}selected{{/selected}} value=\"{{name}}\">{{name}}</option>\n        {{/data.values}}\n      </select>\n      <svg class=\"{{data.classes.option.selectIcon}}\" data-element=\"option.selectIcon\" viewBox=\"0 0 24 24\"><path d=\"M21 5.176l-9.086 9.353L3 5.176.686 7.647 12 19.382 23.314 7.647 21 5.176z\"></path></svg>\n    </div>\n  </div>"
};

var toggleTemplates = {
  title: '<h5 class="{{data.classes.toggle.title}}" data-element="toggle.title">{{data.text.title}}</h5>',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" class="{{data.classes.toggle.icon}}" data-element="toggle.icon" viewBox="0 0 25 25" enable-background="new 0 0 25 25"><g class="{{data.classes.toggle.iconPath}}"><path d="M24.6 3.6c-.3-.4-.8-.6-1.3-.6h-18.4l-.1-.5c-.3-1.5-1.7-1.5-2.5-1.5h-1.3c-.6 0-1 .4-1 1s.4 1 1 1h1.8l3 13.6c.2 1.2 1.3 2.4 2.5 2.4h12.7c.6 0 1-.4 1-1s-.4-1-1-1h-12.7c-.2 0-.5-.4-.6-.8l-.2-1.2h12.6c1.3 0 2.3-1.4 2.5-2.4l2.4-7.4v-.2c.1-.5-.1-1-.4-1.4zm-4 8.5v.2c-.1.3-.4.8-.5.8h-13l-1.8-8.1h17.6l-2.3 7.1z"/><circle cx="9" cy="22" r="2"/><circle cx="19" cy="22" r="2"/></g></svg>',
  count: '<div class="{{data.classes.toggle.count}}" data-element="toggle.count">{{data.count}}</div>'
};

var lineItemTemplates = {
  image: '<div class="{{data.classes.lineItem.image}}" style="background-image: url({{data.lineItemImage.src}})" data-element="lineItem.image"></div>',
  variantTitle: '<div class="{{data.classes.lineItem.variantTitle}}" data-element="lineItem.variantTitle">{{data.variantTitle}}</div>',

  title: '<span class="{{data.classes.lineItem.itemTitle}}" data-element="lineItem.itemTitle">{{data.title}}</span>',
  price: '<span class="{{data.classes.lineItem.price}}" data-element="lineItem.price">{{data.formattedPrice}}</span>',
  quantity: '<div class="{{data.classes.lineItem.quantity}}" data-element="lineItem.quantity">\n              <button class="{{data.classes.lineItem.quantityButton}} {{data.classes.lineItem.quantityDecrement}}" type="button" data-line-item-id="{{data.id}}" data-element="lineItem.quantityDecrement">\n                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M4 7h8v2H4z"/></svg><span class="visuallyhidden">Decrement</span>\n              </button>\n              <input class="{{data.classes.lineItem.quantityInput}}" type="number" min="0" aria-label="Quantity" data-line-item-id="{{data.id}}" value="{{data.quantity}}" data-element="lineItem.quantityInput">\n              <button class="{{data.classes.lineItem.quantityButton}} {{data.classes.lineItem.quantityIncrement}}" type="button" data-line-item-id="{{data.id}}" data-element="lineItem.quantityIncrement">\n                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M12 7H9V4H7v3H4v2h3v3h2V9h3z"/></svg><span class="visuallyhidden">Increment</span>\n              </button>\n            </div>'
};

var modalTemplates = {
  contents: "\n              <button class=\"{{data.classes.modal.close}}\" data-element=\"modal.close\">\n                <span aria-role=\"hidden\">&times;</span>\n                <span class=\"visuallyhidden\">Close</span>\n              </button>\n            "
};

var defaults = {
  product: {
    iframe: true,
    buttonDestination: 'cart',
    isButton: false,
    layout: 'vertical',
    manifest: ['product', 'option'],
    width: '280px',
    order: ['img', 'imgWithCarousel', 'title', 'variantTitle', 'price', 'options', 'quantity', 'button', 'buttonWithQuantity', 'description'],
    contents: {
      img: true,
      imgWithCarousel: false,
      title: true,
      variantTitle: false,
      price: true,
      options: true,
      quantity: false,
      quantityIncrement: false,
      quantityDecrement: false,
      quantityInput: true,
      button: true,
      buttonWithQuantity: false,
      description: false
    },
    templates: productTemplate,
    classes: {
      wrapper: 'shopify-buy__product-wrapper',
      product: 'shopify-buy__product',
      img: 'shopify-buy__product__variant-img',
      imgWrapper: 'shopify-buy__product-img-wrapper',
      carousel: 'shopify-buy__carousel',
      carouselNext: 'carousel-button--next',
      carouselPrevious: 'carousel-button--previous',
      carouselItem: 'shopify-buy__carousel-item',
      carouselItemSelected: 'shopify-buy__carousel-item--selected',
      blockButton: 'shopify-buy__btn--parent',
      button: 'shopify-buy__btn',
      buttonWrapper: 'shopify-buy__btn-wrapper',
      title: 'shopify-buy__product__title',
      prices: 'shopify-buy__product__price',
      price: 'shopify-buy__product__actual-price',
      compareAt: 'shopify-buy__product__compare-price',
      loweredPrice: 'shopify-buy__price--lowered',
      variantTitle: 'shopify-buy__product__variant-title',
      description: 'shopify-buy__product-description',
      options: 'shopify-buy__product__variant-selectors',
      disabled: 'shopify-buy__btn-disabled',
      buttonBesideQty: 'shopify-buy__beside-quantity',
      quantity: 'shopify-buy__quantity-container',
      quantityInput: 'shopify-buy__quantity',
      quantityButton: 'shopify-buy__btn--seamless',
      quantityIncrement: 'shopify-buy__quantity-increment',
      quantityDecrement: 'shopify-buy__quantity-decrement',
      buttonWithQuantity: 'shopify-buy__btn-and-quantity',
      quantityWithButtons: 'shopify-buy__quantity-with-btns',
      vertical: 'shopify-buy__layout-vertical',
      horizontal: 'shopify-buy__layout-horizontal'
    },
    text: {
      button: 'ADD TO CART',
      outOfStock: 'Out of stock',
      unavailable: 'Unavailable'
    }
  },
  modalProduct: {
    iframe: false,
    layout: 'horizontal',
    contents: {
      img: true,
      imgWithCarousel: false,
      title: true,
      variantTitle: false,
      price: true,
      options: true,
      button: true,
      buttonWithQuantity: false,
      quantity: false,
      quantityIncrement: false,
      quantityDecrement: false,
      description: true
    },
    order: ['img', 'imgWithCarousel', 'title', 'variantTitle', 'price', 'options', 'buttonWithQuantity', 'button', 'description'],
    classes: {
      wrapper: 'shopify-buy__modal-product-wrapper',
      hasImage: 'has-image'
    },
    buttonDestination: 'cart',
    text: {
      button: 'ADD TO CART'
    }
  },
  modal: {
    iframe: true,
    manifest: ['modal', 'product', 'option'],
    classes: {
      overlay: 'shopify-buy__modal-overlay',
      modal: 'shopify-buy__modal',
      contents: 'shopify-buy__modal-contents',
      close: 'shopify-buy__btn--close',
      wrapper: 'shopify-buy__modal-wrapper',
      product: 'shopify-buy__product-modal',
      img: 'shopify-buy__modal-img',
      imgWithCarousel: 'shopify-buy__modal-img',
      footer: 'shopify-buy__modal-footer',
      footerWithImg: 'shopify-buy__modal-footer--has-img',
      imgWithImg: 'shopify-buy__modal-img--has-img',
      contentsWithImg: 'shopify-buy__modal-contents--has-img',
      scrollContents: 'shopify-buy__modal-scroll-contents'
    },
    contents: {
      contents: true
    },
    order: ['contents'],
    templates: modalTemplates
  },
  productSet: {
    iframe: true,
    manifest: ['product', 'option', 'productSet'],
    contents: {
      title: false,
      products: true,
      pagination: true
    },
    order: ['title', 'products', 'pagination'],
    templates: {
      title: '<h2 class="{{data.classes.productSet.title}}">{{data.collection.attrs.title}}</h2>',
      products: '<div class="{{data.classes.productSet.products}}"></div>',
      pagination: '<button class="{{data.classes.productSet.paginationButton}} {{data.nextButtonClass}}">{{data.text.nextPageButton}}</button>'
    },
    classes: {
      wrapper: 'shopify-buy__collection-wrapper',
      productSet: 'shopify-buy__collection',
      title: 'shopify-buy__collection__title',
      collection: 'shopify-buy__collection',
      products: 'shopify-buy__collection-products',
      product: 'shopify-buy__collection-product',
      paginationButton: 'shopify-buy__collection-pagination-button shopify-buy__btn'
    },
    text: {
      nextPageButton: 'Next page'
    }
  },
  option: {
    templates: optionTemplates,
    contents: {
      option: true
    },
    order: ['option'],
    classes: {
      option: 'shopify-buy__option-select',
      wrapper: 'shopify-buy__option-select-wrapper',
      select: 'shopify-buy__option-select__select',
      label: 'shopify-buy__option-select__label',
      optionDisabled: 'shopify-buy__option--disabled',
      optionSelected: 'shopify-buy__option--selected',
      selectIcon: 'shopify-buy__select-icon',
      hiddenLabel: 'visuallyhidden'
    }
  },
  cart: {
    iframe: true,
    templates: cartTemplates,
    startOpen: false,
    popup: true,
    manifest: ['cart', 'lineItem', 'toggle'],
    contents: {
      title: true,
      lineItems: true,
      footer: true
    },
    order: ['title', 'lineItems', 'footer'],
    classes: {
      wrapper: 'shopify-buy__cart-wrapper',
      cart: 'shopify-buy__cart',
      header: 'shopify-buy__cart__header',
      title: 'shopify-buy__cart__title',
      lineItems: 'shopify-buy__cart-items',
      footer: 'shopify-buy__cart-bottom',
      subtotalText: 'shopify-buy__cart__subtotal__text',
      subtotal: 'shopify-buy__cart__subtotal__price',
      notice: 'shopify-buy__cart__notice',
      currency: 'shopify-buy__cart__currency',
      button: 'shopify-buy__btn shopify-buy__btn--cart-checkout',
      close: 'shopify-buy__btn--close',
      cartScroll: 'shopify-buy__cart-scroll',
      empty: 'shopify-buy__cart-empty-text'
    },
    text: {
      title: 'Cart',
      empty: 'Your cart is empty.',
      button: 'CHECKOUT',
      total: 'SUBTOTAL',
      currency: 'CAD',
      notice: 'Shipping and discount codes are added at checkout.'
    }
  },
  lineItem: {
    templates: lineItemTemplates,
    contents: {
      image: true,
      variantTitle: true,
      title: true,
      price: true,
      quantity: true,
      quantityIncrement: true,
      quantityDecrement: true,
      quantityInput: true
    },
    order: ['image', 'variantTitle', 'title', 'price', 'quantity'],
    classes: {
      lineItem: 'shopify-buy__cart-item',
      image: 'shopify-buy__cart-item__image',
      variantTitle: 'shopify-buy__cart-item__variant-title',
      itemTitle: 'shopify-buy__cart-item__title',
      price: 'shopify-buy__cart-item__price',
      quantity: 'shopify-buy__quantity-container clearfix',
      quantityInput: 'shopify-buy__quantity shopify-buy__cart-item__quantity-input',
      quantityButton: 'shopify-buy__btn--seamless',
      quantityIncrement: 'shopify-buy__quantity-increment',
      quantityDecrement: 'shopify-buy__quantity-decrement'
    }
  },
  toggle: {
    templates: toggleTemplates,
    manifest: ['toggle'],
    iframe: true,
    sticky: true,
    contents: {
      count: true,
      icon: true,
      title: false
    },
    order: ['count', 'icon', 'title'],
    classes: {
      wrapper: 'shopify-buy__cart-toggle-wrapper',
      toggle: 'shopify-buy__cart-toggle',
      title: 'shopify-buy__cart-toggle__title',
      count: 'shopify-buy__cart-toggle__count',
      icon: 'shopify-buy__icon-cart shopify-buy__icon-cart--side',
      iconPath: 'shopify-buy__icon-cart__group'
    },
    text: {
      title: 'cart'
    }
  },
  window: {
    height: 600,
    width: 400,
    toolbar: 0,
    scrollbars: 1,
    status: 0,
    resizable: 1,
    center: 0,
    createnew: 1,
    location: 0,
    menubar: 0,
    onUnload: null,
    titlebar: 'yes'
  }
};

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

function wrapConsole(logCommand) {
  var logMethod = function logMethod() {
    var hostConsole = window.console;
    var args = Array.prototype.slice.apply(arguments).join(' ');
    /* eslint-disable no-console */
    if (hostConsole) {
      hostConsole[logCommand](args);
    }
    /* eslint-enable no-console */
  };

  return function () {
    var args = [].concat(Array.prototype.slice.call(arguments));

    args.unshift('[SHOPIFY-BUY-UI]: ');
    logMethod.apply(undefined, toConsumableArray(args));
  };
}

var logger = {
  debug: wrapConsole('debug'),
  info: wrapConsole('info'),
  warn: wrapConsole('warn'),
  error: wrapConsole('error'),
  log: wrapConsole('log')
};

function isArray(arg) {
  return Object.prototype.toString.call(arg) === '[object Array]';
}

function logNotFound(component) {
  var errInfo = '';
  if (component.id) {
    if (isArray(component.id)) {
      errInfo = 'for ids ' + component.id.join(', ') + '.';
    } else {
      errInfo = 'for id ' + component.id + '.';
    }
  } else if (component.handle) {
    errInfo = 'for handle "' + component.handle + '".';
  }
  var message = 'Not Found: ' + component.typeKey + ' not found ' + errInfo;
  logger.warn(message);
}

var defaultMoneyFormat = '${{amount}}';

var index = createCommonjsModule$$1(function (module) {
// Create a range object for efficently rendering strings to elements.
var range;

var testEl = (typeof document !== 'undefined') ?
    document.body || document.createElement('div') :
    {};

var XHTML = 'http://www.w3.org/1999/xhtml';
var ELEMENT_NODE = 1;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;

// Fixes <https://github.com/patrick-steele-idem/morphdom/issues/32>
// (IE7+ support) <=IE7 does not support el.hasAttribute(name)
var hasAttributeNS;

if (testEl.hasAttributeNS) {
    hasAttributeNS = function(el, namespaceURI, name) {
        return el.hasAttributeNS(namespaceURI, name);
    };
} else if (testEl.hasAttribute) {
    hasAttributeNS = function(el, namespaceURI, name) {
        return el.hasAttribute(name);
    };
} else {
    hasAttributeNS = function(el, namespaceURI, name) {
        return !!el.getAttributeNode(name);
    };
}

function empty(o) {
    for (var k in o) {
        if (o.hasOwnProperty(k)) {
            return false;
        }
    }
    return true;
}

function toElement(str) {
    if (!range && document.createRange) {
        range = document.createRange();
        range.selectNode(document.body);
    }

    var fragment;
    if (range && range.createContextualFragment) {
        fragment = range.createContextualFragment(str);
    } else {
        fragment = document.createElement('body');
        fragment.innerHTML = str;
    }
    return fragment.childNodes[0];
}

var specialElHandlers = {
    /**
     * Needed for IE. Apparently IE doesn't think that "selected" is an
     * attribute when reading over the attributes using selectEl.attributes
     */
    OPTION: function(fromEl, toEl) {
        fromEl.selected = toEl.selected;
        if (fromEl.selected) {
            fromEl.setAttribute('selected', '');
        } else {
            fromEl.removeAttribute('selected', '');
        }
    },
    /**
     * The "value" attribute is special for the <input> element since it sets
     * the initial value. Changing the "value" attribute without changing the
     * "value" property will have no effect since it is only used to the set the
     * initial value.  Similar for the "checked" attribute, and "disabled".
     */
    INPUT: function(fromEl, toEl) {
        fromEl.checked = toEl.checked;
        if (fromEl.checked) {
            fromEl.setAttribute('checked', '');
        } else {
            fromEl.removeAttribute('checked');
        }

        if (fromEl.value !== toEl.value) {
            fromEl.value = toEl.value;
        }

        if (!hasAttributeNS(toEl, null, 'value')) {
            fromEl.removeAttribute('value');
        }

        fromEl.disabled = toEl.disabled;
        if (fromEl.disabled) {
            fromEl.setAttribute('disabled', '');
        } else {
            fromEl.removeAttribute('disabled');
        }
    },

    TEXTAREA: function(fromEl, toEl) {
        var newValue = toEl.value;
        if (fromEl.value !== newValue) {
            fromEl.value = newValue;
        }

        if (fromEl.firstChild) {
            fromEl.firstChild.nodeValue = newValue;
        }
    }
};

function noop() {}

/**
 * Returns true if two node's names and namespace URIs are the same.
 *
 * @param {Element} a
 * @param {Element} b
 * @return {boolean}
 */
var compareNodeNames = function(a, b) {
    return a.nodeName === b.nodeName &&
           a.namespaceURI === b.namespaceURI;
};

/**
 * Create an element, optionally with a known namespace URI.
 *
 * @param {string} name the element name, e.g. 'div' or 'svg'
 * @param {string} [namespaceURI] the element's namespace URI, i.e. the value of
 * its `xmlns` attribute or its inferred namespace.
 *
 * @return {Element}
 */
function createElementNS(name, namespaceURI) {
    return !namespaceURI || namespaceURI === XHTML ?
        document.createElement(name) :
        document.createElementNS(namespaceURI, name);
}

/**
 * Loop over all of the attributes on the target node and make sure the original
 * DOM node has the same attributes. If an attribute found on the original node
 * is not on the new node then remove it from the original node.
 *
 * @param  {Element} fromNode
 * @param  {Element} toNode
 */
function morphAttrs(fromNode, toNode) {
    var attrs = toNode.attributes;
    var i;
    var attr;
    var attrName;
    var attrNamespaceURI;
    var attrValue;
    var fromValue;

    for (i = attrs.length - 1; i >= 0; i--) {
        attr = attrs[i];
        attrName = attr.name;
        attrValue = attr.value;
        attrNamespaceURI = attr.namespaceURI;

        if (attrNamespaceURI) {
            attrName = attr.localName || attrName;
            fromValue = fromNode.getAttributeNS(attrNamespaceURI, attrName);
        } else {
            fromValue = fromNode.getAttribute(attrName);
        }

        if (fromValue !== attrValue) {
            if (attrNamespaceURI) {
                fromNode.setAttributeNS(attrNamespaceURI, attrName, attrValue);
            } else {
                fromNode.setAttribute(attrName, attrValue);
            }
        }
    }

    // Remove any extra attributes found on the original DOM element that
    // weren't found on the target element.
    attrs = fromNode.attributes;

    for (i = attrs.length - 1; i >= 0; i--) {
        attr = attrs[i];
        if (attr.specified !== false) {
            attrName = attr.name;
            attrNamespaceURI = attr.namespaceURI;

            if (!hasAttributeNS(toNode, attrNamespaceURI, attrNamespaceURI ? attrName = attr.localName || attrName : attrName)) {
                if (attrNamespaceURI) {
                    fromNode.removeAttributeNS(attrNamespaceURI, attr.localName);
                } else {
                    fromNode.removeAttribute(attrName);
                }
            }
        }
    }
}

/**
 * Copies the children of one DOM element to another DOM element
 */
function moveChildren(fromEl, toEl) {
    var curChild = fromEl.firstChild;
    while (curChild) {
        var nextChild = curChild.nextSibling;
        toEl.appendChild(curChild);
        curChild = nextChild;
    }
    return toEl;
}

function defaultGetNodeKey(node) {
    return node.id;
}

function morphdom(fromNode, toNode, options) {
    if (!options) {
        options = {};
    }

    if (typeof toNode === 'string') {
        if (fromNode.nodeName === '#document' || fromNode.nodeName === 'HTML') {
            var toNodeHtml = toNode;
            toNode = document.createElement('html');
            toNode.innerHTML = toNodeHtml;
        } else {
            toNode = toElement(toNode);
        }
    }

    // XXX optimization: if the nodes are equal, don't morph them
    /*
    if (fromNode.isEqualNode(toNode)) {
      return fromNode;
    }
    */

    var savedEls = {}; // Used to save off DOM elements with IDs
    var unmatchedEls = {};
    var getNodeKey = options.getNodeKey || defaultGetNodeKey;
    var onBeforeNodeAdded = options.onBeforeNodeAdded || noop;
    var onNodeAdded = options.onNodeAdded || noop;
    var onBeforeElUpdated = options.onBeforeElUpdated || options.onBeforeMorphEl || noop;
    var onElUpdated = options.onElUpdated || noop;
    var onBeforeNodeDiscarded = options.onBeforeNodeDiscarded || noop;
    var onNodeDiscarded = options.onNodeDiscarded || noop;
    var onBeforeElChildrenUpdated = options.onBeforeElChildrenUpdated || options.onBeforeMorphElChildren || noop;
    var childrenOnly = options.childrenOnly === true;
    var movedEls = [];

    function removeNodeHelper(node, nestedInSavedEl) {
        var id = getNodeKey(node);
        // If the node has an ID then save it off since we will want
        // to reuse it in case the target DOM tree has a DOM element
        // with the same ID
        if (id) {
            savedEls[id] = node;
        } else if (!nestedInSavedEl) {
            // If we are not nested in a saved element then we know that this node has been
            // completely discarded and will not exist in the final DOM.
            onNodeDiscarded(node);
        }

        if (node.nodeType === ELEMENT_NODE) {
            var curChild = node.firstChild;
            while (curChild) {
                removeNodeHelper(curChild, nestedInSavedEl || id);
                curChild = curChild.nextSibling;
            }
        }
    }

    function walkDiscardedChildNodes(node) {
        if (node.nodeType === ELEMENT_NODE) {
            var curChild = node.firstChild;
            while (curChild) {


                if (!getNodeKey(curChild)) {
                    // We only want to handle nodes that don't have an ID to avoid double
                    // walking the same saved element.

                    onNodeDiscarded(curChild);

                    // Walk recursively
                    walkDiscardedChildNodes(curChild);
                }

                curChild = curChild.nextSibling;
            }
        }
    }

    function removeNode(node, parentNode, alreadyVisited) {
        if (onBeforeNodeDiscarded(node) === false) {
            return;
        }

        parentNode.removeChild(node);
        if (alreadyVisited) {
            if (!getNodeKey(node)) {
                onNodeDiscarded(node);
                walkDiscardedChildNodes(node);
            }
        } else {
            removeNodeHelper(node);
        }
    }

    function morphEl(fromEl, toEl, alreadyVisited, childrenOnly) {
        var toElKey = getNodeKey(toEl);
        if (toElKey) {
            // If an element with an ID is being morphed then it is will be in the final
            // DOM so clear it out of the saved elements collection
            delete savedEls[toElKey];
        }

        if (!childrenOnly) {
            if (onBeforeElUpdated(fromEl, toEl) === false) {
                return;
            }

            morphAttrs(fromEl, toEl);
            onElUpdated(fromEl);

            if (onBeforeElChildrenUpdated(fromEl, toEl) === false) {
                return;
            }
        }

        if (fromEl.nodeName !== 'TEXTAREA') {
            var curToNodeChild = toEl.firstChild;
            var curFromNodeChild = fromEl.firstChild;
            var curToNodeId;

            var fromNextSibling;
            var toNextSibling;
            var savedEl;
            var unmatchedEl;

            outer: while (curToNodeChild) {
                toNextSibling = curToNodeChild.nextSibling;
                curToNodeId = getNodeKey(curToNodeChild);

                while (curFromNodeChild) {
                    var curFromNodeId = getNodeKey(curFromNodeChild);
                    fromNextSibling = curFromNodeChild.nextSibling;

                    if (!alreadyVisited) {
                        if (curFromNodeId && (unmatchedEl = unmatchedEls[curFromNodeId])) {
                            unmatchedEl.parentNode.replaceChild(curFromNodeChild, unmatchedEl);
                            morphEl(curFromNodeChild, unmatchedEl, alreadyVisited);
                            curFromNodeChild = fromNextSibling;
                            continue;
                        }
                    }

                    var curFromNodeType = curFromNodeChild.nodeType;

                    if (curFromNodeType === curToNodeChild.nodeType) {
                        var isCompatible = false;

                        // Both nodes being compared are Element nodes
                        if (curFromNodeType === ELEMENT_NODE) {
                            if (compareNodeNames(curFromNodeChild, curToNodeChild)) {
                                // We have compatible DOM elements
                                if (curFromNodeId || curToNodeId) {
                                    // If either DOM element has an ID then we
                                    // handle those differently since we want to
                                    // match up by ID
                                    if (curToNodeId === curFromNodeId) {
                                        isCompatible = true;
                                    }
                                } else {
                                    isCompatible = true;
                                }
                            }

                            if (isCompatible) {
                                // We found compatible DOM elements so transform
                                // the current "from" node to match the current
                                // target DOM node.
                                morphEl(curFromNodeChild, curToNodeChild, alreadyVisited);
                            }
                        // Both nodes being compared are Text or Comment nodes
                    } else if (curFromNodeType === TEXT_NODE || curFromNodeType == COMMENT_NODE) {
                            isCompatible = true;
                            // Simply update nodeValue on the original node to
                            // change the text value
                            curFromNodeChild.nodeValue = curToNodeChild.nodeValue;
                        }

                        if (isCompatible) {
                            curToNodeChild = toNextSibling;
                            curFromNodeChild = fromNextSibling;
                            continue outer;
                        }
                    }

                    // No compatible match so remove the old node from the DOM
                    // and continue trying to find a match in the original DOM
                    removeNode(curFromNodeChild, fromEl, alreadyVisited);
                    curFromNodeChild = fromNextSibling;
                }

                if (curToNodeId) {
                    if ((savedEl = savedEls[curToNodeId])) {
                        if (compareNodeNames(savedEl, curToNodeChild)) {
                            morphEl(savedEl, curToNodeChild, true);
                            // We want to append the saved element instead
                            curToNodeChild = savedEl;
                        } else {
                            delete savedEls[curToNodeId];
                            onNodeDiscarded(savedEl);
                        }
                    } else {
                        // The current DOM element in the target tree has an ID
                        // but we did not find a match in any of the
                        // corresponding siblings. We just put the target
                        // element in the old DOM tree but if we later find an
                        // element in the old DOM tree that has a matching ID
                        // then we will replace the target element with the
                        // corresponding old element and morph the old element
                        unmatchedEls[curToNodeId] = curToNodeChild;
                    }
                }

                // If we got this far then we did not find a candidate match for
                // our "to node" and we exhausted all of the children "from"
                // nodes. Therefore, we will just append the current "to node"
                // to the end
                if (onBeforeNodeAdded(curToNodeChild) !== false) {
                    fromEl.appendChild(curToNodeChild);
                    onNodeAdded(curToNodeChild);
                }

                if (curToNodeChild.nodeType === ELEMENT_NODE &&
                    (curToNodeId || curToNodeChild.firstChild)) {
                    // The element that was just added to the original DOM may
                    // have some nested elements with a key/ID that needs to be
                    // matched up with other elements. We'll add the element to
                    // a list so that we can later process the nested elements
                    // if there are any unmatched keyed elements that were
                    // discarded
                    movedEls.push(curToNodeChild);
                }

                curToNodeChild = toNextSibling;
                curFromNodeChild = fromNextSibling;
            }

            // We have processed all of the "to nodes". If curFromNodeChild is
            // non-null then we still have some from nodes left over that need
            // to be removed
            while (curFromNodeChild) {
                fromNextSibling = curFromNodeChild.nextSibling;
                removeNode(curFromNodeChild, fromEl, alreadyVisited);
                curFromNodeChild = fromNextSibling;
            }
        }

        var specialElHandler = specialElHandlers[fromEl.nodeName];
        if (specialElHandler) {
            specialElHandler(fromEl, toEl);
        }
    } // END: morphEl(...)

    var morphedNode = fromNode;
    var morphedNodeType = morphedNode.nodeType;
    var toNodeType = toNode.nodeType;

    if (!childrenOnly) {
        // Handle the case where we are given two DOM nodes that are not
        // compatible (e.g. <div> --> <span> or <div> --> TEXT)
        if (morphedNodeType === ELEMENT_NODE) {
            if (toNodeType === ELEMENT_NODE) {
                if (!compareNodeNames(fromNode, toNode)) {
                    onNodeDiscarded(fromNode);
                    morphedNode = moveChildren(fromNode, createElementNS(toNode.nodeName, toNode.namespaceURI));
                }
            } else {
                // Going from an element node to a text node
                morphedNode = toNode;
            }
        } else if (morphedNodeType === TEXT_NODE || morphedNodeType === COMMENT_NODE) { // Text or comment node
            if (toNodeType === morphedNodeType) {
                morphedNode.nodeValue = toNode.nodeValue;
                return morphedNode;
            } else {
                // Text node to something else
                morphedNode = toNode;
            }
        }
    }

    if (morphedNode === toNode) {
        // The "to node" was not compatible with the "from node" so we had to
        // toss out the "from node" and use the "to node"
        onNodeDiscarded(fromNode);
    } else {
        morphEl(morphedNode, toNode, false, childrenOnly);

        /**
         * What we will do here is walk the tree for the DOM element that was
         * moved from the target DOM tree to the original DOM tree and we will
         * look for keyed elements that could be matched to keyed elements that
         * were earlier discarded.  If we find a match then we will move the
         * saved element into the final DOM tree.
         */
        var handleMovedEl = function(el) {
            var curChild = el.firstChild;
            while (curChild) {
                var nextSibling = curChild.nextSibling;

                var key = getNodeKey(curChild);
                if (key) {
                    var savedEl = savedEls[key];
                    if (savedEl && compareNodeNames(curChild, savedEl)) {
                        curChild.parentNode.replaceChild(savedEl, curChild);
                        // true: already visited the saved el tree
                        morphEl(savedEl, curChild, true);
                        curChild = nextSibling;
                        if (empty(savedEls)) {
                            return false;
                        }
                        continue;
                    }
                }

                if (curChild.nodeType === ELEMENT_NODE) {
                    handleMovedEl(curChild);
                }

                curChild = nextSibling;
            }
        };

        // The loop below is used to possibly match up any discarded
        // elements in the original DOM tree with elemenets from the
        // target tree that were moved over without visiting their
        // children
        if (!empty(savedEls)) {
            handleMovedElsLoop:
            while (movedEls.length) {
                var movedElsTemp = movedEls;
                movedEls = [];
                for (var i=0; i<movedElsTemp.length; i++) {
                    if (handleMovedEl(movedElsTemp[i]) === false) {
                        // There are no more unmatched elements so completely end
                        // the loop
                        break handleMovedElsLoop;
                    }
                }
            }
        }

        // Fire the "onNodeDiscarded" event for any saved elements
        // that never found a new home in the morphed DOM
        for (var savedElId in savedEls) {
            if (savedEls.hasOwnProperty(savedElId)) {
                var savedEl = savedEls[savedElId];
                onNodeDiscarded(savedEl);
                walkDiscardedChildNodes(savedEl);
            }
        }
    }

    if (!childrenOnly && morphedNode !== fromNode && fromNode.parentNode) {
        // If we had to swap out the from node with a new node because the old
        // node was not compatible with the target node then we need to
        // replace the old DOM node in the original DOM tree. This is only
        // possible if the original DOM node was part of a DOM tree which
        // we know is the case if it has a parent node.
        fromNode.parentNode.replaceChild(morphedNode, fromNode);
    }

    return morphedNode;
}

module.exports = morphdom;
});

var morphdom = interopDefault(index);

var mustache = createCommonjsModule$$1(function (module, exports) {
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

/*global define: false Mustache: true*/

(function defineMustache (global, factory) {
  if (typeof exports === 'object' && exports && typeof exports.nodeName !== 'string') {
    factory(exports); // CommonJS
  } else if (typeof define === 'function' && define.amd) {
    define(['exports'], factory); // AMD
  } else {
    global.Mustache = {};
    factory(global.Mustache); // script, wsh, asp
  }
}(commonjsGlobal$$1, function mustacheFactory (mustache) {

  var objectToString = Object.prototype.toString;
  var isArray = Array.isArray || function isArrayPolyfill (object) {
    return objectToString.call(object) === '[object Array]';
  };

  function isFunction (object) {
    return typeof object === 'function';
  }

  /**
   * More correct typeof string handling array
   * which normally returns typeof 'object'
   */
  function typeStr (obj) {
    return isArray(obj) ? 'array' : typeof obj;
  }

  function escapeRegExp (string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
  }

  /**
   * Null safe way of checking whether or not an object,
   * including its prototype, has a given property
   */
  function hasProperty (obj, propName) {
    return obj != null && typeof obj === 'object' && (propName in obj);
  }

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  var regExpTest = RegExp.prototype.test;
  function testRegExp (re, string) {
    return regExpTest.call(re, string);
  }

  var nonSpaceRe = /\S/;
  function isWhitespace (string) {
    return !testRegExp(nonSpaceRe, string);
  }

  var entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  };

  function escapeHtml (string) {
    return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap (s) {
      return entityMap[s];
    });
  }

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var equalsRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  /**
   * Breaks up the given `template` string into a tree of tokens. If the `tags`
   * argument is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
   * course, the default is to use mustaches (i.e. mustache.tags).
   *
   * A token is an array with at least 4 elements. The first element is the
   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
   * all text that appears outside a symbol this element is "text".
   *
   * The second element of a token is its "value". For mustache tags this is
   * whatever else was inside the tag besides the opening symbol. For text tokens
   * this is the text itself.
   *
   * The third and fourth elements of the token are the start and end indices,
   * respectively, of the token in the original template.
   *
   * Tokens that are the root node of a subtree contain two more elements: 1) an
   * array of tokens in the subtree and 2) the index in the original template at
   * which the closing tag for that section begins.
   */
  function parseTemplate (template, tags) {
    if (!template)
      return [];

    var sections = [];     // Stack to hold section tokens
    var tokens = [];       // Buffer to hold the tokens
    var spaces = [];       // Indices of whitespace tokens on the current line
    var hasTag = false;    // Is there a {{tag}} on the current line?
    var nonSpace = false;  // Is there a non-space char on the current line?

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    function stripSpace () {
      if (hasTag && !nonSpace) {
        while (spaces.length)
          delete tokens[spaces.pop()];
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    }

    var openingTagRe, closingTagRe, closingCurlyRe;
    function compileTags (tagsToCompile) {
      if (typeof tagsToCompile === 'string')
        tagsToCompile = tagsToCompile.split(spaceRe, 2);

      if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
        throw new Error('Invalid tags: ' + tagsToCompile);

      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
      closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
      closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
    }

    compileTags(tags || mustache.tags);

    var scanner = new Scanner(template);

    var start, type, value, chr, token, openSection;
    while (!scanner.eos()) {
      start = scanner.pos;

      // Match any text between tags.
      value = scanner.scanUntil(openingTagRe);

      if (value) {
        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
          } else {
            nonSpace = true;
          }

          tokens.push([ 'text', chr, start, start + 1 ]);
          start += 1;

          // Check for whitespace on the current line.
          if (chr === '\n')
            stripSpace();
        }
      }

      // Match the opening tag.
      if (!scanner.scan(openingTagRe))
        break;

      hasTag = true;

      // Get the tag type.
      type = scanner.scan(tagRe) || 'name';
      scanner.scan(whiteRe);

      // Get the tag value.
      if (type === '=') {
        value = scanner.scanUntil(equalsRe);
        scanner.scan(equalsRe);
        scanner.scanUntil(closingTagRe);
      } else if (type === '{') {
        value = scanner.scanUntil(closingCurlyRe);
        scanner.scan(curlyRe);
        scanner.scanUntil(closingTagRe);
        type = '&';
      } else {
        value = scanner.scanUntil(closingTagRe);
      }

      // Match the closing tag.
      if (!scanner.scan(closingTagRe))
        throw new Error('Unclosed tag at ' + scanner.pos);

      token = [ type, value, start, scanner.pos ];
      tokens.push(token);

      if (type === '#' || type === '^') {
        sections.push(token);
      } else if (type === '/') {
        // Check section nesting.
        openSection = sections.pop();

        if (!openSection)
          throw new Error('Unopened section "' + value + '" at ' + start);

        if (openSection[1] !== value)
          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
      } else if (type === 'name' || type === '{' || type === '&') {
        nonSpace = true;
      } else if (type === '=') {
        // Set the tags for the next time around.
        compileTags(value);
      }
    }

    // Make sure there are no open sections when we're done.
    openSection = sections.pop();

    if (openSection)
      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

    return nestTokens(squashTokens(tokens));
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens (tokens) {
    var squashedTokens = [];

    var token, lastToken;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      if (token) {
        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
          lastToken[1] += token[1];
          lastToken[3] = token[3];
        } else {
          squashedTokens.push(token);
          lastToken = token;
        }
      }
    }

    return squashedTokens;
  }

  /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */
  function nestTokens (tokens) {
    var nestedTokens = [];
    var collector = nestedTokens;
    var sections = [];

    var token, section;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      switch (token[0]) {
        case '#':
        case '^':
          collector.push(token);
          sections.push(token);
          collector = token[4] = [];
          break;
        case '/':
          section = sections.pop();
          section[5] = token[2];
          collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
          break;
        default:
          collector.push(token);
      }
    }

    return nestedTokens;
  }

  /**
   * A simple string scanner that is used by the template parser to find
   * tokens in template strings.
   */
  function Scanner (string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function eos () {
    return this.tail === '';
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function scan (re) {
    var match = this.tail.match(re);

    if (!match || match.index !== 0)
      return '';

    var string = match[0];

    this.tail = this.tail.substring(string.length);
    this.pos += string.length;

    return string;
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function scanUntil (re) {
    var index = this.tail.search(re), match;

    switch (index) {
      case -1:
        match = this.tail;
        this.tail = '';
        break;
      case 0:
        match = '';
        break;
      default:
        match = this.tail.substring(0, index);
        this.tail = this.tail.substring(index);
    }

    this.pos += match.length;

    return match;
  };

  /**
   * Represents a rendering context by wrapping a view object and
   * maintaining a reference to the parent context.
   */
  function Context (view, parentContext) {
    this.view = view;
    this.cache = { '.': this.view };
    this.parent = parentContext;
  }

  /**
   * Creates a new context using the given view with this context
   * as the parent.
   */
  Context.prototype.push = function push (view) {
    return new Context(view, this);
  };

  /**
   * Returns the value of the given name in this context, traversing
   * up the context hierarchy if the value is absent in this context's view.
   */
  Context.prototype.lookup = function lookup (name) {
    var cache = this.cache;

    var value;
    if (cache.hasOwnProperty(name)) {
      value = cache[name];
    } else {
      var context = this, names, index, lookupHit = false;

      while (context) {
        if (name.indexOf('.') > 0) {
          value = context.view;
          names = name.split('.');
          index = 0;

          /**
           * Using the dot notion path in `name`, we descend through the
           * nested objects.
           *
           * To be certain that the lookup has been successful, we have to
           * check if the last object in the path actually has the property
           * we are looking for. We store the result in `lookupHit`.
           *
           * This is specially necessary for when the value has been set to
           * `undefined` and we want to avoid looking up parent contexts.
           **/
          while (value != null && index < names.length) {
            if (index === names.length - 1)
              lookupHit = hasProperty(value, names[index]);

            value = value[names[index++]];
          }
        } else {
          value = context.view[name];
          lookupHit = hasProperty(context.view, name);
        }

        if (lookupHit)
          break;

        context = context.parent;
      }

      cache[name] = value;
    }

    if (isFunction(value))
      value = value.call(this.view);

    return value;
  };

  /**
   * A Writer knows how to take a stream of tokens and render them to a
   * string, given a context. It also maintains a cache of templates to
   * avoid the need to parse the same template twice.
   */
  function Writer () {
    this.cache = {};
  }

  /**
   * Clears all cached templates in this writer.
   */
  Writer.prototype.clearCache = function clearCache () {
    this.cache = {};
  };

  /**
   * Parses and caches the given `template` and returns the array of tokens
   * that is generated from the parse.
   */
  Writer.prototype.parse = function parse (template, tags) {
    var cache = this.cache;
    var tokens = cache[template];

    if (tokens == null)
      tokens = cache[template] = parseTemplate(template, tags);

    return tokens;
  };

  /**
   * High-level method that is used to render the given `template` with
   * the given `view`.
   *
   * The optional `partials` argument may be an object that contains the
   * names and templates of partials that are used in the template. It may
   * also be a function that is used to load partial templates on the fly
   * that takes a single argument: the name of the partial.
   */
  Writer.prototype.render = function render (template, view, partials) {
    var tokens = this.parse(template);
    var context = (view instanceof Context) ? view : new Context(view);
    return this.renderTokens(tokens, context, partials, template);
  };

  /**
   * Low-level method that renders the given array of `tokens` using
   * the given `context` and `partials`.
   *
   * Note: The `originalTemplate` is only ever used to extract the portion
   * of the original template that was contained in a higher-order section.
   * If the template doesn't use higher-order sections, this argument may
   * be omitted.
   */
  Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate) {
    var buffer = '';

    var token, symbol, value;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      value = undefined;
      token = tokens[i];
      symbol = token[0];

      if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate);
      else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate);
      else if (symbol === '>') value = this.renderPartial(token, context, partials, originalTemplate);
      else if (symbol === '&') value = this.unescapedValue(token, context);
      else if (symbol === 'name') value = this.escapedValue(token, context);
      else if (symbol === 'text') value = this.rawValue(token);

      if (value !== undefined)
        buffer += value;
    }

    return buffer;
  };

  Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate) {
    var self = this;
    var buffer = '';
    var value = context.lookup(token[1]);

    // This function is used to render an arbitrary template
    // in the current context by higher-order sections.
    function subRender (template) {
      return self.render(template, context, partials);
    }

    if (!value) return;

    if (isArray(value)) {
      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
      }
    } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
    } else if (isFunction(value)) {
      if (typeof originalTemplate !== 'string')
        throw new Error('Cannot use higher-order sections without the original template');

      // Extract the portion of the original template that the section contains.
      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

      if (value != null)
        buffer += value;
    } else {
      buffer += this.renderTokens(token[4], context, partials, originalTemplate);
    }
    return buffer;
  };

  Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate) {
    var value = context.lookup(token[1]);

    // Use JavaScript's definition of falsy. Include empty arrays.
    // See https://github.com/janl/mustache.js/issues/186
    if (!value || (isArray(value) && value.length === 0))
      return this.renderTokens(token[4], context, partials, originalTemplate);
  };

  Writer.prototype.renderPartial = function renderPartial (token, context, partials) {
    if (!partials) return;

    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
    if (value != null)
      return this.renderTokens(this.parse(value), context, partials, value);
  };

  Writer.prototype.unescapedValue = function unescapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return value;
  };

  Writer.prototype.escapedValue = function escapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return mustache.escape(value);
  };

  Writer.prototype.rawValue = function rawValue (token) {
    return token[1];
  };

  mustache.name = 'mustache.js';
  mustache.version = '2.2.1';
  mustache.tags = [ '{{', '}}' ];

  // All high-level mustache.* functions use this writer.
  var defaultWriter = new Writer();

  /**
   * Clears all cached templates in the default writer.
   */
  mustache.clearCache = function clearCache () {
    return defaultWriter.clearCache();
  };

  /**
   * Parses and caches the given template in the default writer and returns the
   * array of tokens it contains. Doing this ahead of time avoids the need to
   * parse templates on the fly as they are rendered.
   */
  mustache.parse = function parse (template, tags) {
    return defaultWriter.parse(template, tags);
  };

  /**
   * Renders the `template` with the given `view` and `partials` using the
   * default writer.
   */
  mustache.render = function render (template, view, partials) {
    if (typeof template !== 'string') {
      throw new TypeError('Invalid template! Template should be a "string" ' +
                          'but "' + typeStr(template) + '" was given as the first ' +
                          'argument for mustache#render(template, view, partials)');
    }

    return defaultWriter.render(template, view, partials);
  };

  // This is here for backwards compatibility with 0.4.x.,
  /*eslint-disable */ // eslint wants camel cased function name
  mustache.to_html = function to_html (template, view, partials, send) {
    /*eslint-enable*/

    var result = mustache.render(template, view, partials);

    if (isFunction(send)) {
      send(result);
    } else {
      return result;
    }
  };

  // Export the escaping function so that the user may override it.
  // See https://github.com/janl/mustache.js/issues/244
  mustache.escape = escapeHtml;

  // Export these mainly for testing, but also for advanced usage.
  mustache.Scanner = Scanner;
  mustache.Context = Context;
  mustache.Writer = Writer;

}));
});

var Mustache = interopDefault(mustache);

var Template = function () {
  function Template(templates, contents, order) {
    classCallCheck(this, Template);

    this.templates = templates;
    this.contents = contents;
    this.order = order;
  }

  Template.prototype.render = function render(data, cb) {
    var output = Mustache.render(this.masterTemplate, data);
    if (!cb) {
      return output;
    }
    return cb(output);
  };

  createClass(Template, [{
    key: 'masterTemplate',
    get: function get() {
      var _this = this;

      return this.order.reduce(function (acc, key) {
        var string = '';
        if (_this.contents[key]) {
          string = _this.templates[key] || '';
        }
        return acc + string;
      }, '');
    }
  }]);
  return Template;
}();

var stylesTemplate = '{{#selectors}}' + '{{#media}} {{media}} { {{/media}}' + '{{selector}} { ' + '{{#declarations}}' + '{{property}}: {{{value}}};' + '{{/declarations}}' + ' } ' + '{{#media}} } {{/media}}' + '{{/selectors}}';

var conditionalStyles = ".shopify-buy__modal {\n  display: none;\n}\n\n.is-active {\n}\n\n.is-active .shopify-buy__modal {\n  display: block;\n  opacity: 1;\n  margin-left: auto;\n  margin-right: auto;\n}\n";

function addClassToElement(className, element) {
  if (!className) {
    return;
  }
  if (element.classList) {
    element.classList.add(className);
  } else {
    var classes = element.className.split(' ');
    if (classes.indexOf(className) > -1) {
      return;
    }
    element.setAttribute('class', element.className + ' ' + className);
  }
}

function removeClassFromElement(className, element) {
  if (!className) {
    return;
  }
  if (element.classList) {
    element.classList.remove(className);
  } else {
    element.setAttribute('class', element.className.replace(className, ''));
  }
}

var iframeStyles = {
  width: '100%',
  overflow: 'hidden',
  border: 'none'
};

var iframeAttrs = {
  horizontalscrolling: 'no',
  verticalscrolling: 'no',
  allowTransparency: 'true',
  frameBorder: '0',
  scrolling: 'no'
};

var webfontScript = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js';

function isPseudoSelector$1(key) {
  return key.charAt(0) === ':';
}

function isMedia$1(key) {
  return key.charAt(0) === '@';
}

function isValue(test) {
  return typeof test === 'string' || typeof test === 'number';
}

function ruleDeclarations(rule) {
  return Object.keys(rule).filter(function (key) {
    return isValue(rule[key]);
  }).map(function (key) {
    return { property: key, value: rule[key] };
  });
}

function selectorStyleGroup(selector, selectorClass, classes) {
  var styleGroup = [];
  if (selector && selectorClass) {
    (function () {
      var formattedSelector = selectorClass.split(' ').join('.');
      if (!isPseudoSelector$1(formattedSelector)) {
        formattedSelector = '.' + formattedSelector;
      }
      styleGroup = Object.keys(selector).filter(function (decKey) {
        return !isValue(selector[decKey]);
      }).reduce(function (acc, decKey) {
        var className = classes[decKey] || decKey;
        return acc.concat(selectorStyleGroup(selector[decKey], className, classes).map(function (group) {
          var groupSelector = '';
          if (isPseudoSelector$1(group.selector)) {
            groupSelector = '' + formattedSelector + group.selector;
          } else if (isMedia$1(decKey)) {
            groupSelector = formattedSelector;
          } else {
            groupSelector = formattedSelector + ' ' + group.selector;
          }
          return {
            selector: groupSelector,
            declarations: group.declarations,
            media: isMedia$1(decKey) ? decKey : null
          };
        }));
      }, []);
      var declarations = ruleDeclarations(selector);
      if (declarations.length) {
        styleGroup.push({
          selector: '' + formattedSelector,
          declarations: declarations
        });
      }
    })();
  }
  return styleGroup;
}

var iframe = function () {
  function iframe(node, config) {
    var _this = this;

    classCallCheck(this, iframe);

    this.el = document.createElement('iframe');
    this.parent = node;
    this.stylesheet = config.stylesheet;
    this.customStylesHash = config.customStyles || {};
    this.classes = config.classes;
    this.browserFeatures = config.browserFeatures;
    this.googleFonts = config.googleFonts || [];
    this.name = config.name;
    if (config.width) {
      this.setWidth(config.width);
    }
    Object.keys(iframeStyles).forEach(function (key) {
      _this.el.style[key] = iframeStyles[key];
    });
    Object.keys(iframeAttrs).forEach(function (key) {
      return _this.el.setAttribute(key, iframeAttrs[key]);
    });
    this.el.setAttribute('name', config.name);
    this.styleTag = null;
  }

  iframe.prototype.load = function load() {
    var _this2 = this;

    return new Promise(function (resolve) {
      _this2.el.onload = function () {
        return _this2.loadFonts().then(function () {
          _this2.appendStyleTag();
          return resolve();
        });
      };
      _this2.parent.appendChild(_this2.el);
    });
  };

  iframe.prototype.loadFonts = function loadFonts() {
    var _this3 = this;

    if (!this.googleFonts || !this.googleFonts.length) {
      return Promise.resolve(true);
    }
    return this.loadFontScript().then(function () {
      return new Promise(function (resolve) {
        if (!window.WebFont) {
          return resolve();
        }
        window.WebFont.load({
          google: {
            families: _this3.googleFonts
          },
          fontactive: function fontactive() {
            return resolve();
          },
          context: _this3.el.contentWindow || frames[_this3.name]
        });
        return window.setTimeout(function () {
          return resolve();
        }, 1000);
      });
    });
  };

  iframe.prototype.loadFontScript = function loadFontScript() {
    if (window.WebFont) {
      return Promise.resolve();
    }
    var fontScript = document.createElement('script');
    return new Promise(function (resolve) {
      fontScript.onload = function () {
        resolve();
      };
      fontScript.src = webfontScript;
      document.head.appendChild(fontScript);
      setTimeout(function () {
        resolve();
      }, 500);
    });
  };

  iframe.prototype.setWidth = function setWidth(width) {
    this.parent.style['max-width'] = width;
  };

  iframe.prototype.addClass = function addClass(className) {
    addClassToElement(className, this.parent);
  };

  iframe.prototype.removeClass = function removeClass(className) {
    removeClassFromElement(className, this.parent);
  };

  iframe.prototype.setName = function setName(name) {
    this.el.setAttribute('name', name);
  };

  iframe.prototype.updateStyles = function updateStyles(customStyles, googleFonts) {
    var _this4 = this;

    this.googleFonts = googleFonts;
    return this.loadFonts().then(function () {
      _this4.customStylesHash = customStyles;
      _this4.styleTag.innerHTML = _this4.css;
      return;
    });
  };

  iframe.prototype.appendStyleTag = function appendStyleTag() {
    if (!this.document.head) {
      return;
    }
    this.styleTag = this.document.createElement('style');

    if (this.styleTag.styleSheet) {
      this.styleTag.styleSheet.cssText = this.css;
    } else {
      this.styleTag.appendChild(this.document.createTextNode(this.css));
    }

    this.document.head.appendChild(this.styleTag);
  };

  createClass(iframe, [{
    key: 'width',
    get: function get() {
      return this.parent.style['max-width'];
    }
  }, {
    key: 'document',
    get: function get() {
      var doc = void 0;
      if (this.el.contentWindow && this.el.contentWindow.document.body) {
        doc = this.el.contentWindow.document;
      } else if (this.el.document && this.el.document.body) {
        doc = this.el.document;
      } else if (this.el.contentDocument && this.el.contentDocument.body) {
        doc = this.el.contentDocument;
      }
      return doc;
    }
  }, {
    key: 'customStyles',
    get: function get() {
      var _this5 = this;

      var customStyles = [];
      Object.keys(this.customStylesHash).forEach(function (typeKey) {
        if (_this5.customStylesHash[typeKey]) {
          Object.keys(_this5.customStylesHash[typeKey]).forEach(function (key) {
            var styleGroup = selectorStyleGroup(_this5.customStylesHash[typeKey][key], _this5.classes[typeKey][key], _this5.classes[typeKey]);
            customStyles = customStyles.concat(styleGroup);
          });
        }
      });
      return customStyles;
    }
  }, {
    key: 'conditionalCSS',
    get: function get() {
      if (this.browserFeatures.transition && this.browserFeatures.transform && this.browserFeatures.animation) {
        return '';
      }
      return conditionalStyles;
    }
  }, {
    key: 'css',
    get: function get() {
      var compiled = Mustache.render(stylesTemplate, { selectors: this.customStyles });
      return this.stylesheet + ' \n ' + compiled + ' \n ' + this.conditionalCSS;
    }
  }]);
  return iframe;
}();

var styles = {};
styles.cart = 'html, body, h1, h2, h3, h4, h5, p {   padding: 0;   margin: 0; } * {   box-sizing: border-box; } body, html {   min-height: 100%; } html {   font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;   font-size: 14px;   line-height: 1.2;   color: #4c4c4c;   text-rendering: optimizeLegibility;   -webkit-font-smoothing: antialiased;   -moz-osx-font-smoothing: grayscale; } ul {   list-style: none;   padding-left: 0;   margin: 0; } img {   display: block;   max-width: 100%; } input {   -webkit-appearance: textfield;   margin: 0; } .clearfix { } .clearfix:after {   content: "";   display: table;   clear: both; } .visuallyhidden {   border: 0;   height: 1px;   margin: -1px;   overflow: hidden;   padding: 0;   position: absolute;   width: 1px; } .component-container {   overflow: hidden; } .shopify-buy__type--center {   text-align: center; } .shopify-buy__btn {   color: #fff;   font-size: 15px;   background-color: #78b657;   padding: 12px 40px;   letter-spacing: .3px;   display: block;   border-radius: 3px;   cursor: pointer;   -webkit-transition: background 200ms ease;   transition: background 200ms ease;   max-width: 100%;   text-overflow: ellipsis;   overflow: hidden;   line-height: 1.2;   border: 0;   -moz-appearance: none;   -webkit-appearance: none } .shopify-buy__btn:hover,   .shopify-buy__btn:focus {   background-color: #5f9d3e; } .shopify-buy__btn--parent {   background-color: transparent;   border: 0;   padding: 0;   cursor: pointer } .shopify-buy__btn--parent:hover,   .shopify-buy__btn--parent:focus { } .shopify-buy__btn--parent:hover .product__variant-img, .shopify-buy__btn--parent:focus .product__variant-img {   opacity: .7; } .shopify-buy__btn--cart-tab {   padding: 5px 11px;   border-radius: 3px 0 0 3px;   position: fixed;   right: 0;   top: 50%;   -webkit-transform: translate(100%, -50%);           transform: translate(100%, -50%);   opacity: 0;   min-width: inherit;   width: auto;   height: auto;   z-index: 2147483647 } .shopify-buy__btn--cart-tab.is-active {   -webkit-transform: translateY(-50%);           transform: translateY(-50%);   opacity: 1; } .shopify-buy__btn__counter {   display: block;   margin: 0 auto 10px auto;   font-size: 18px; } .shopify-buy__icon-cart--side {   height: 20px;   width: 20px; } .shopify-buy__btn[disabled] {   background-color: #999;   pointer-events: none; } .shopify-buy__btn--close {   position: absolute;   right: 9px;   top: 8px;   font-size: 35px;   color: #767676;   border: none;   background-color: transparent;   -webkit-transition: color 100ms ease, -webkit-transform 100ms ease;   transition: color 100ms ease, -webkit-transform 100ms ease;   transition: transform 100ms ease, color 100ms ease;   transition: transform 100ms ease, color 100ms ease, -webkit-transform 100ms ease;   cursor: pointer;   font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;   padding-right: 9px } .shopify-buy__btn--close:hover {   -webkit-transform: scale(1.2);           transform: scale(1.2);   color: rgb(105, 105, 105); } @-webkit-keyframes flipIn {   from {     max-height: 0;     -webkit-transform: rotatex(90deg) translatey(-50%);             transform: rotatex(90deg) translatey(-50%);     margin-bottom: -65px;     opacity: 0;   }    to {     max-height: none;     -webkit-transform: none;             transform: none;     margin-bottom: 20px;     opacity: 1;   } } @keyframes flipIn {   from {     max-height: 0;     -webkit-transform: rotatex(90deg) translatey(-50%);             transform: rotatex(90deg) translatey(-50%);     margin-bottom: -65px;     opacity: 0;   }    to {     max-height: none;     -webkit-transform: none;             transform: none;     margin-bottom: 20px;     opacity: 1;   } } @-webkit-keyframes flipOut {   from {     max-height: none;     -webkit-transform: none;             transform: none;     margin-bottom: 20px;     opacity: 1;   }    to {     max-height: 0;     -webkit-transform: rotatex(90deg) translatey(-50%);             transform: rotatex(90deg) translatey(-50%);     margin-bottom: -65px;     opacity: 0;   } } @keyframes flipOut {   from {     max-height: none;     -webkit-transform: none;             transform: none;     margin-bottom: 20px;     opacity: 1;   }    to {     max-height: 0;     -webkit-transform: rotatex(90deg) translatey(-50%);             transform: rotatex(90deg) translatey(-50%);     margin-bottom: -65px;     opacity: 0;   } } .shopify-buy__cart-wrapper {   height: 100%;   padding-left: 10px; } .shopify-buy__cart {   height: 100%;   background-color: #fff;   width: calc(100% - 10px);   position: absolute;   right: 0;   box-shadow: -5px 0 5px rgba(0, 0, 0, .1); } .shopify-buy__cart__header {   padding: 20px;   padding-right: 40px;   position: relative;   z-index: 2147483647; } .shopify-buy__cart__title {   font-size: 18px;   color: #767676;   font-weight: normal;   overflow: hidden;   text-overflow: ellipsis; } .shopify-buy__cart-scroll {   padding: 70px 0 135px 0;   position: absolute;   top: 0;   height: 100%;   width: 100%; } .shopify-buy__cart-items {   overflow: hidden;   overflow-y: auto;   height: 100%;   position: relative;   padding: 0 20px 20px;   -webkit-overflow-scrolling: touch;   -webkit-perspective: 400px;           perspective: 400px;   -webkit-perspective-origin: 50% 0px;           perspective-origin: 50% 0px; } .shopify-buy__cart-item {   min-height: 65px;   margin-bottom: 20px;   overflow: hidden;   position: relative;   -webkit-backface-visibility: visible;           backface-visibility: visible;   -webkit-animation: 200ms flipIn forwards;           animation: 200ms flipIn forwards; } .shopify-buy__cart-item.is-hidden {   -webkit-animation-name: flipOut;           animation-name: flipOut; } .shopify-buy__cart-item__image {   width: 65px;   height: 65px;   background-size: contain;   background-repeat: no-repeat;   background-position: center center;   background-color: transparent;   position: absolute;   left: 0;   top: 0; } .shopify-buy__cart-item__title {   font-size: 14px;   margin-left: 80px;   display: block;   margin-bottom: 10px; } .shopify-buy__cart-item__price {   float: right;   font-size: 14px;   font-weight: bold;   line-height: 26px; } .shopify-buy__cart-item__variant-title {   float: right;   color: #4c4c4c;   font-size: 11px;   font-weight: bold;   max-width: 220px;   overflow: hidden;   text-overflow: ellipsis; } .shopify-buy__cart-bottom {   background-color: #fff;   position: absolute;   width: 100%;   bottom: 0;   padding: 20px; } .shopify-buy__cart__subtotal__text {   text-transform: uppercase;   float: left;   font-size: 11px;   color: #4c4c4c; } .shopify-buy__cart__subtotal__price {   float: right; } .shopify-buy__cart__currency {   font-size: 12px; } .shopify-buy__cart__notice {   font-size: 11px;   clear: both;   padding-top: 10px;   text-align: center;   color: #4c4c4c; } .shopify-buy__cart-empty-text {   padding: 10px 15px;   text-align: center; } .shopify-buy__btn--cart-checkout {   clear: both;   margin-top: 15px;   width: 100%;   padding: 10px 5px;   font-size: 16px; } .shopify-buy__quantity-container {   margin-left: 80px;   height: 26px;   line-height: 26px; } .shopify-buy__cart-item__quantity-input {   float: left;   background: transparent; } .shopify-buy__quantity-decrement, .shopify-buy__quantity-increment {   color: #4c4c4c;   display: block;   height: 30px;   float: left;   line-height: 16px;   font-family: monospace;   width: 26px;   padding: 0;   border: none;   background: transparent;   box-shadow: none;   cursor: pointer;   font-size: 18px;   text-align: center;   font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;   border: 1px solid #767676;   position: relative } .shopify-buy__quantity-decrement svg, .shopify-buy__quantity-increment svg {   width: 14px;   height: 14px;   position: absolute;   top: 50%;   left: 50%;   margin-top: -6px;   margin-left: -7px;   fill: currentColor; } .shopify-buy__quantity-decrement {   border-radius: 3px 0 0 3px; } .shopify-buy__quantity-increment {   border-radius: 0 3px 3px 0; } .shopify-buy__quantity {   color: black;   width: 45px;   height: 30px;   font-size: 16px;   border: none;   text-align: center;   -moz-appearance: textfield;   -webkit-appearance: none;   display: inline-block;   padding: 0;   border-radius: 0;   border-top: 1px solid #767676;   border-bottom: 1px solid #767676; } input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button {   -webkit-appearance: none;   margin: 0; } .shopify-buy__quantity-container.shopify-buy__quantity-with-btns {   overflow: hidden } .shopify-buy__quantity-container.shopify-buy__quantity-with-btns .shopify-buy__quantity {   border-left: 0;   border-right: 0;   float: left; } ';
styles.modal = 'html, body, h1, h2, h3, h4, h5, p {   padding: 0;   margin: 0; } * {   box-sizing: border-box; } body, html {   min-height: 100%; } html {   font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;   font-size: 14px;   line-height: 1.2;   color: #4c4c4c;   text-rendering: optimizeLegibility;   -webkit-font-smoothing: antialiased;   -moz-osx-font-smoothing: grayscale; } ul {   list-style: none;   padding-left: 0;   margin: 0; } img {   display: block;   max-width: 100%; } input {   -webkit-appearance: textfield;   margin: 0; } .clearfix { } .clearfix:after {   content: "";   display: table;   clear: both; } .visuallyhidden {   border: 0;   height: 1px;   margin: -1px;   overflow: hidden;   padding: 0;   position: absolute;   width: 1px; } .component-container {   overflow: hidden; } .shopify-buy__type--center {   text-align: center; } .shopify-buy__quantity-decrement, .shopify-buy__quantity-increment {   color: #4c4c4c;   display: block;   height: 30px;   float: left;   line-height: 16px;   font-family: monospace;   width: 26px;   padding: 0;   border: none;   background: transparent;   box-shadow: none;   cursor: pointer;   font-size: 18px;   text-align: center;   font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;   border: 1px solid #767676;   position: relative } .shopify-buy__quantity-decrement svg, .shopify-buy__quantity-increment svg {   width: 14px;   height: 14px;   position: absolute;   top: 50%;   left: 50%;   margin-top: -6px;   margin-left: -7px;   fill: currentColor; } .shopify-buy__quantity-decrement {   border-radius: 3px 0 0 3px; } .shopify-buy__quantity-increment {   border-radius: 0 3px 3px 0; } .shopify-buy__quantity {   color: black;   width: 45px;   height: 30px;   font-size: 16px;   border: none;   text-align: center;   -moz-appearance: textfield;   -webkit-appearance: none;   display: inline-block;   padding: 0;   border-radius: 0;   border-top: 1px solid #767676;   border-bottom: 1px solid #767676; } input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button {   -webkit-appearance: none;   margin: 0; } .shopify-buy__quantity-container.shopify-buy__quantity-with-btns {   overflow: hidden } .shopify-buy__quantity-container.shopify-buy__quantity-with-btns .shopify-buy__quantity {   border-left: 0;   border-right: 0;   float: left; } .shopify-buy__btn {   color: #fff;   font-size: 15px;   background-color: #78b657;   padding: 12px 40px;   letter-spacing: .3px;   display: block;   border-radius: 3px;   cursor: pointer;   -webkit-transition: background 200ms ease;   transition: background 200ms ease;   max-width: 100%;   text-overflow: ellipsis;   overflow: hidden;   line-height: 1.2;   border: 0;   -moz-appearance: none;   -webkit-appearance: none } .shopify-buy__btn:hover,   .shopify-buy__btn:focus {   background-color: #5f9d3e; } .shopify-buy__btn--parent {   background-color: transparent;   border: 0;   padding: 0;   cursor: pointer } .shopify-buy__btn--parent:hover,   .shopify-buy__btn--parent:focus { } .shopify-buy__btn--parent:hover .product__variant-img, .shopify-buy__btn--parent:focus .product__variant-img {   opacity: .7; } .shopify-buy__btn--cart-tab {   padding: 5px 11px;   border-radius: 3px 0 0 3px;   position: fixed;   right: 0;   top: 50%;   -webkit-transform: translate(100%, -50%);           transform: translate(100%, -50%);   opacity: 0;   min-width: inherit;   width: auto;   height: auto;   z-index: 2147483647 } .shopify-buy__btn--cart-tab.is-active {   -webkit-transform: translateY(-50%);           transform: translateY(-50%);   opacity: 1; } .shopify-buy__btn__counter {   display: block;   margin: 0 auto 10px auto;   font-size: 18px; } .shopify-buy__icon-cart--side {   height: 20px;   width: 20px; } .shopify-buy__btn[disabled] {   background-color: #999;   pointer-events: none; } .shopify-buy__btn--close {   position: absolute;   right: 9px;   top: 8px;   font-size: 35px;   color: #767676;   border: none;   background-color: transparent;   -webkit-transition: color 100ms ease, -webkit-transform 100ms ease;   transition: color 100ms ease, -webkit-transform 100ms ease;   transition: transform 100ms ease, color 100ms ease;   transition: transform 100ms ease, color 100ms ease, -webkit-transform 100ms ease;   cursor: pointer;   font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;   padding-right: 9px } .shopify-buy__btn--close:hover {   -webkit-transform: scale(1.2);           transform: scale(1.2);   color: rgb(105, 105, 105); } .shopify-buy__option-select-wrapper {   border: 1px solid #d3dbe2;   border-radius: 3px;   box-sizing: border-box;   position: relative;   background: #fff;   overflow: hidden;   vertical-align: bottom; } .shopify-buy__select-icon {   cursor: pointer;   display: block;   fill: #798c9c;   position: absolute;   right: 10px;   top: 50%;   margin-top: -6px;   pointer-events: none;   width: 12px;   height: 12px;   vertical-align: middle; } .shopify-buy__option-select { } .shopify-buy__option-select + .shopify-buy__option-select {   margin-top: 7.5px; } .shopify-buy__option-select__label {   display: block;   font-size: 14px;   margin-top: 15px;   margin-bottom: 5px; } .shopify-buy__btn--parent { } .shopify-buy__btn--parent .shopify-buy__option-select__label {   cursor: pointer; } .shopify-buy__option-select__select {   font-size: inherit;   padding: 7px 10px;   padding-right: 32px;   border: 0;   width: 100%;   background: transparent;   -webkit-appearance: none;   -moz-appearance: none } .shopify-buy__option-select__select::-ms-expand {   display: none; } .shopify-buy__btn--parent { } .shopify-buy__btn--parent .shopify-buy__option-select__select {   cursor: pointer; } .shopify-buy__product {   overflow: hidden;   width: 100%; } .shopify-buy__product__variant-img {   margin: 0 auto 15px auto;   -webkit-transition: opacity 0.3s ease;   transition: opacity 0.3s ease;   opacity: 1 } .shopify-buy__product__variant-img.is-transitioning {   opacity: 0; } .shopify-buy__is-button {   cursor: pointer; } .shopify-buy__no-image { } .shopify-buy__no-image .shopify-buy__product__variant-img {   display: none; } .shopify-buy__product__title {   font-size: 18px;   line-height: 1.2;   color: #4a4a4a;   margin-bottom: 15px;   font-weight: 700; } .shopify-buy__layout-horizontal { } .shopify-buy__layout-horizontal .shopify-buy__product__title {   margin-top: 10px; } .shopify-buy__product__variant-title {   font-size: 18px;   color: #666;   font-weight: 400;   text-align: center;   margin-bottom: 15px; } .shopify-buy__product__price {   margin-bottom: 15px; } .shopify-buy__product-description {   margin-top: 30px;   line-height: 1.65;   color: #4a4a4a } .shopify-buy__product-description p,   .shopify-buy__product-description ul,   .shopify-buy__product-description ol,   .shopify-buy__product-description img {   margin-bottom: 10px; } .shopify-buy__product-description p:last-child, .shopify-buy__product-description ul:last-child, .shopify-buy__product-description ol:last-child, .shopify-buy__product-description img:last-child {   margin-bottom: 0; } .shopify-buy__product-description a {   color: inherit; } .shopify-buy__product-description img {   max-width: 100%; } .shopify-buy__product-description h1 {   font-size: 20px; } .shopify-buy__product-description h2 {   font-size: 18px; } .shopify-buy__product-description h3 {   font-size: 17px; } .shopify-buy__product-description ul,   .shopify-buy__product-description ol {   margin-left: 2em; } .shopify-buy__product-description ul {   list-style-type: disc; } .shopify-buy__layout-vertical {   text-align: center; } .shopify-buy__product__actual-price, .shopify-buy__product__compare-price {   color: #4a4a4a;   display: inline-block; } .shopify-buy__product__actual-price {   font-size: 14px; } .shopify-buy__product__compare-price {   font-size: 12px;   text-decoration: line-through;   padding-left: 5px;   opacity: 0.65; } .shopify-buy__product__variant-selectors {   text-align: left;   font-size: 14px; } .shopify-buy__layout-vertical { } .shopify-buy__layout-vertical .shopify-buy__product__variant-selectors {   width: 100%;   max-width: 280px;   display: inline-block; } .shopify-buy__quantity {   border-left: 1px solid;   border-right: 1px solid;   border-radius: 3px; } .shopify-buy__quantity, .shopify-buy__quantity-increment, .shopify-buy__quantity-decrement {   border-color: #d3dbe2;   line-height: 1.2;   font-size: 15px;   height: auto;   padding-top: 12px;   padding-bottom: 12px; } .shopify-buy__btn {   display: inline-block; } .shopify-buy__btn-wrapper {   margin-top: 20px; } .shopify-buy__btn.shopify-buy__beside-quantity {   display: inline-block;   vertical-align: top;   border-top-left-radius: 0;   border-bottom-left-radius: 0;   border: 1px solid transparent; } .shopify-buy__btn-and-quantity { } .shopify-buy__btn-and-quantity .shopify-buy__quantity {   border-right: 0;   border-top-right-radius: 0;   border-bottom-right-radius: 0;   background: #fff; } .shopify-buy__btn-and-quantity .shopify-buy__quantity-container {   display: inline-block;   vertical-align: top; } .shopify-buy__btn-and-quantity .shopify-buy__btn-wrapper {   display: inline-block;   vertical-align: top;   margin: 0; } .shopify-buy__cart-item__quantity-container {   margin-top: 20px;   display: inline-block; } .shopify-buy__layout-vertical, .shopify-buy__layout-horizontal { } .shopify-buy__layout-vertical .shopify-buy__btn,   .shopify-buy__layout-vertical .shopify-buy__quantity-container,   .shopify-buy__layout-horizontal .shopify-buy__btn,   .shopify-buy__layout-horizontal .shopify-buy__quantity-container {   margin: 20px auto 0; } .shopify-buy__layout-vertical .shopify-buy__btn:first-child, .shopify-buy__layout-horizontal .shopify-buy__btn:first-child {   margin-top: 0; } .shopify-buy__layout-vertical .shopify-buy__btn-and-quantity, .shopify-buy__layout-horizontal .shopify-buy__btn-and-quantity {   margin: 20px auto 0; } .shopify-buy__layout-vertical .shopify-buy__btn-and-quantity .shopify-buy__btn,     .shopify-buy__layout-vertical .shopify-buy__btn-and-quantity .shopify-buy__quantity-container,     .shopify-buy__layout-horizontal .shopify-buy__btn-and-quantity .shopify-buy__btn,     .shopify-buy__layout-horizontal .shopify-buy__btn-and-quantity .shopify-buy__quantity-container {   margin: 0 auto; } .shopify-buy__layout-vertical .shopify-buy__btn-and-quantity:first-child, .shopify-buy__layout-horizontal .shopify-buy__btn-and-quantity:first-child {   margin: 0 auto; } .shopify-buy__layout-vertical .shopify-buy__product__variant-img, .shopify-buy__layout-horizontal .shopify-buy__product__variant-img {   max-width: 100%; } @media (min-width: 500px) {   .shopify-buy__layout-horizontal:not(.no-image) {     text-align: left;     margin-bottom: 0;     margin-left: 0   }   .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__product-img-wrapper {     float: left;     width: 40%;   }   .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__product__variant-title {     text-align: left;   }   .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__product__title,     .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__product__variant-title,     .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__product__price,     .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__product-description,     .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__btn-and-quantity,     .shopify-buy__layout-horizontal:not(.no-image) > .shopify-buy__btn-wrapper,     .shopify-buy__layout-horizontal:not(.no-image) > .shopify-buy__quantity-container,     .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__product__variant-selectors {     margin-left: calc(40% + 25px);   } } @media (min-width: 680px) {   .shopify-buy__layout-horizontal:not(.no-image) {   }   .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__product-img-wrapper {     float: left;     width: 60%;   }   .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__product__title,     .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__product__variant-title,     .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__product__price,     .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__product-description,     .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__btn-and-quantity,     .shopify-buy__layout-horizontal:not(.no-image) > .shopify-buy__btn-wrapper,     .shopify-buy__layout-horizontal:not(.no-image) > .shopify-buy__quantity-container,     .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__product__variant-selectors {     margin-left: calc(60% + 25px);   } } .no-image { } .no-image .shopify-buy__product-img-wrapper {   display: none; } @-webkit-keyframes dash {   to {     stroke-dashoffset: 0;   } } @keyframes dash {   to {     stroke-dashoffset: 0;   } } .shopify-buy__carousel {   font-size: 0;   text-align: center;   min-height: 90px;   margin-left: -15px;   margin-top: 15px; } .shopify-buy__carousel-item {   width: calc(16.666% - 15px);   margin-left: 15px;   display: inline-block;   vertical-align: middle;   cursor: pointer;   position: relative;   background-size: cover;   background-position: center;   padding: 0;   border: none } .shopify-buy__carousel-item:nth-child(n+7) {   margin-top: 15px; } .shopify-buy__carousel-item:before {   content: "";   display: block;   padding-top: 100%; } .main-image-wrapper {   position: relative; } .carousel-button {   position: absolute;   width: 75px;   top: 0;   height: 100%;   border: none;   font-size: 0;   background-color: transparent;   opacity: 0.4;   cursor: pointer } .carousel-button:hover,   .carousel-button:focus {   opacity: 0.9;   outline: none; } .carousel-button-arrow {   width: 20px;   display: inline-block;   margin-left: 25px; } .carousel-button--previous {   left: 0;   -webkit-transform: rotate(180deg);           transform: rotate(180deg); } .carousel-button--next {   right: 0; } .shopify-buy__carousel-item--selected {   opacity: 0.4; } .shopify-buy__btn--close {   right: 0px;   font-size: 45px;   font-weight: 100;   z-index: 2147483647;   padding: 0 10px; } .shopify-buy__modal {   background: #fff;   width: calc(100% - 20px);   position: absolute;   left: 0;   right: 0;   z-index: 2147483646; } .shopify-buy__product {   text-align: left; } .shopify-buy__product__title, .shopify-buy__product__price, .shopify-buy__product__variant-title {   text-align: left; } .shopify-buy__product__title {   font-size: 26px;   font-weight: 700;   line-height: 1.4; } .shopify-buy__product__compare-price {   display: inline-block;   margin-right: 5px; } .shopify-buy__product__actual-price {   display: inline-block; } .shopify-buy__modal .shopify-buy__modal-product-wrapper {   width: 100%; } .shopify-buy__product__variant-image {   margin: 0; } @media (max-width: 499px) {   body.is-active {     overflow: hidden;     position: fixed;     height: 100vh;     -webkit-transition: all 0s;     transition: all 0s;   }    .shopify-buy__modal {     width: 100%;     min-height: 100vh;     position: fixed;     overflow-y: auto;   }    .shopify-buy__product {     padding: 15px;     position: absolute;     top: 0;     left: 0;   }    .shopify-buy__product__variant-img {     max-height: 60vh;     margin: 0 auto;     width: auto;     max-width: 100%;   }    .shopify-buy__btn--close {     position: fixed;     top: 0;     right: 0;   } } @-webkit-keyframes slideIn {   from {     opacity: 0;     transform: translateY(-200px);     -webkit-transform: translateY(-200px);   }    to {     opacity: 1;     transform: translateY(0);     -webkit-transform: translateY(0);   } } @keyframes slideIn {   from {     opacity: 0;     transform: translateY(-200px);     -webkit-transform: translateY(-200px);   }    to {     opacity: 1;     transform: translateY(0);     -webkit-transform: translateY(0);   } } @-webkit-keyframes slideOut {   from {     opacity: 1;     transform: translateY(0);     -webkit-transform: translateY(0);   }    to {     opacity: 0;     transform: translateY(-200px);     -webkit-transform: translateY(-200px);   } } @keyframes slideOut {   from {     opacity: 1;     transform: translateY(0);     -webkit-transform: translateY(0);   }    to {     opacity: 0;     transform: translateY(-200px);     -webkit-transform: translateY(-200px);   } } @media (min-width: 500px) {   html,   body.is-active {     height: 100%;   }    .shopify-buy__modal-overlay {     width: 100%;     height: 100%;     position: fixed;     overflow-y: scroll;   }    .shopify-buy__modal {     margin: 100px auto 40px auto;     opacity: 0;     border-radius: 2px;     border: 1px solid rgba(0, 0, 0, .72);     -webkit-transform: translateY(-200px);             transform: translateY(-200px);     max-width: 1000px;     -webkit-animation: 200ms slideOut forwards;             animation: 200ms slideOut forwards;   }    .is-active {   }    .is-active .shopify-buy__modal {     -webkit-animation-name: slideIn;             animation-name: slideIn;   }    .shopify-buy__product {     padding: 30px;   }    .shopify-buy__product-img-wrapper {     height: 100%;     padding-right: 30px;   }    .shopify-buy__product__variant-img {     margin: 0 auto;   }    .shopify-buy__btn--close {     top: -60px;     color: rgb(255, 255, 255)   }    .shopify-buy__btn--close:hover {     color: #fff;   } } @media (min-width: 680px) {   .shopify-buy__product {     padding: 45px;   } } ';
styles.product = 'html, body, h1, h2, h3, h4, h5, p {   padding: 0;   margin: 0; } * {   box-sizing: border-box; } body, html {   min-height: 100%; } html {   font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;   font-size: 14px;   line-height: 1.2;   color: #4c4c4c;   text-rendering: optimizeLegibility;   -webkit-font-smoothing: antialiased;   -moz-osx-font-smoothing: grayscale; } ul {   list-style: none;   padding-left: 0;   margin: 0; } img {   display: block;   max-width: 100%; } input {   -webkit-appearance: textfield;   margin: 0; } .clearfix { } .clearfix:after {   content: "";   display: table;   clear: both; } .visuallyhidden {   border: 0;   height: 1px;   margin: -1px;   overflow: hidden;   padding: 0;   position: absolute;   width: 1px; } .component-container {   overflow: hidden; } .shopify-buy__type--center {   text-align: center; } .shopify-buy__quantity-decrement, .shopify-buy__quantity-increment {   color: #4c4c4c;   display: block;   height: 30px;   float: left;   line-height: 16px;   font-family: monospace;   width: 26px;   padding: 0;   border: none;   background: transparent;   box-shadow: none;   cursor: pointer;   font-size: 18px;   text-align: center;   font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;   border: 1px solid #767676;   position: relative } .shopify-buy__quantity-decrement svg, .shopify-buy__quantity-increment svg {   width: 14px;   height: 14px;   position: absolute;   top: 50%;   left: 50%;   margin-top: -6px;   margin-left: -7px;   fill: currentColor; } .shopify-buy__quantity-decrement {   border-radius: 3px 0 0 3px; } .shopify-buy__quantity-increment {   border-radius: 0 3px 3px 0; } .shopify-buy__quantity {   color: black;   width: 45px;   height: 30px;   font-size: 16px;   border: none;   text-align: center;   -moz-appearance: textfield;   -webkit-appearance: none;   display: inline-block;   padding: 0;   border-radius: 0;   border-top: 1px solid #767676;   border-bottom: 1px solid #767676; } input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button {   -webkit-appearance: none;   margin: 0; } .shopify-buy__quantity-container.shopify-buy__quantity-with-btns {   overflow: hidden } .shopify-buy__quantity-container.shopify-buy__quantity-with-btns .shopify-buy__quantity {   border-left: 0;   border-right: 0;   float: left; } .shopify-buy__btn {   color: #fff;   font-size: 15px;   background-color: #78b657;   padding: 12px 40px;   letter-spacing: .3px;   display: block;   border-radius: 3px;   cursor: pointer;   -webkit-transition: background 200ms ease;   transition: background 200ms ease;   max-width: 100%;   text-overflow: ellipsis;   overflow: hidden;   line-height: 1.2;   border: 0;   -moz-appearance: none;   -webkit-appearance: none } .shopify-buy__btn:hover,   .shopify-buy__btn:focus {   background-color: #5f9d3e; } .shopify-buy__btn--parent {   background-color: transparent;   border: 0;   padding: 0;   cursor: pointer } .shopify-buy__btn--parent:hover,   .shopify-buy__btn--parent:focus { } .shopify-buy__btn--parent:hover .product__variant-img, .shopify-buy__btn--parent:focus .product__variant-img {   opacity: .7; } .shopify-buy__btn--cart-tab {   padding: 5px 11px;   border-radius: 3px 0 0 3px;   position: fixed;   right: 0;   top: 50%;   -webkit-transform: translate(100%, -50%);           transform: translate(100%, -50%);   opacity: 0;   min-width: inherit;   width: auto;   height: auto;   z-index: 2147483647 } .shopify-buy__btn--cart-tab.is-active {   -webkit-transform: translateY(-50%);           transform: translateY(-50%);   opacity: 1; } .shopify-buy__btn__counter {   display: block;   margin: 0 auto 10px auto;   font-size: 18px; } .shopify-buy__icon-cart--side {   height: 20px;   width: 20px; } .shopify-buy__btn[disabled] {   background-color: #999;   pointer-events: none; } .shopify-buy__btn--close {   position: absolute;   right: 9px;   top: 8px;   font-size: 35px;   color: #767676;   border: none;   background-color: transparent;   -webkit-transition: color 100ms ease, -webkit-transform 100ms ease;   transition: color 100ms ease, -webkit-transform 100ms ease;   transition: transform 100ms ease, color 100ms ease;   transition: transform 100ms ease, color 100ms ease, -webkit-transform 100ms ease;   cursor: pointer;   font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;   padding-right: 9px } .shopify-buy__btn--close:hover {   -webkit-transform: scale(1.2);           transform: scale(1.2);   color: rgb(105, 105, 105); } .shopify-buy__option-select-wrapper {   border: 1px solid #d3dbe2;   border-radius: 3px;   box-sizing: border-box;   position: relative;   background: #fff;   overflow: hidden;   vertical-align: bottom; } .shopify-buy__select-icon {   cursor: pointer;   display: block;   fill: #798c9c;   position: absolute;   right: 10px;   top: 50%;   margin-top: -6px;   pointer-events: none;   width: 12px;   height: 12px;   vertical-align: middle; } .shopify-buy__option-select { } .shopify-buy__option-select + .shopify-buy__option-select {   margin-top: 7.5px; } .shopify-buy__option-select__label {   display: block;   font-size: 14px;   margin-top: 15px;   margin-bottom: 5px; } .shopify-buy__btn--parent { } .shopify-buy__btn--parent .shopify-buy__option-select__label {   cursor: pointer; } .shopify-buy__option-select__select {   font-size: inherit;   padding: 7px 10px;   padding-right: 32px;   border: 0;   width: 100%;   background: transparent;   -webkit-appearance: none;   -moz-appearance: none } .shopify-buy__option-select__select::-ms-expand {   display: none; } .shopify-buy__btn--parent { } .shopify-buy__btn--parent .shopify-buy__option-select__select {   cursor: pointer; } .shopify-buy__product {   overflow: hidden;   width: 100%; } .shopify-buy__product__variant-img {   margin: 0 auto 15px auto;   -webkit-transition: opacity 0.3s ease;   transition: opacity 0.3s ease;   opacity: 1 } .shopify-buy__product__variant-img.is-transitioning {   opacity: 0; } .shopify-buy__is-button {   cursor: pointer; } .shopify-buy__no-image { } .shopify-buy__no-image .shopify-buy__product__variant-img {   display: none; } .shopify-buy__product__title {   font-size: 18px;   line-height: 1.2;   color: #4a4a4a;   margin-bottom: 15px;   font-weight: 700; } .shopify-buy__layout-horizontal { } .shopify-buy__layout-horizontal .shopify-buy__product__title {   margin-top: 10px; } .shopify-buy__product__variant-title {   font-size: 18px;   color: #666;   font-weight: 400;   text-align: center;   margin-bottom: 15px; } .shopify-buy__product__price {   margin-bottom: 15px; } .shopify-buy__product-description {   margin-top: 30px;   line-height: 1;   color: #4a4a4a } .shopify-buy__product-description p,   .shopify-buy__product-description ul,   .shopify-buy__product-description ol,   .shopify-buy__product-description img {   margin-bottom: 10px; } .shopify-buy__product-description p:last-child, .shopify-buy__product-description ul:last-child, .shopify-buy__product-description ol:last-child, .shopify-buy__product-description img:last-child {   margin-bottom: 0; } .shopify-buy__product-description a {   color: inherit; } .shopify-buy__product-description img {   max-width: 100%; } .shopify-buy__product-description h1 {   font-size: 20px; } .shopify-buy__product-description h2 {   font-size: 18px; } .shopify-buy__product-description h3 {   font-size: 17px; } .shopify-buy__product-description ul,   .shopify-buy__product-description ol {   margin-left: 2em; } .shopify-buy__product-description ul {   list-style-type: disc; } .shopify-buy__layout-vertical {   text-align: center; } .shopify-buy__product__actual-price, .shopify-buy__product__compare-price {   color: #4a4a4a;   display: inline-block; } .shopify-buy__product__actual-price {   font-size: 14px; } .shopify-buy__product__compare-price {   font-size: 12px;   text-decoration: line-through;   padding-left: 5px;   opacity: 0.65; } .shopify-buy__product__variant-selectors {   text-align: left;   width: 230px;   font-size: 14px; } .shopify-buy__layout-vertical { } .shopify-buy__layout-vertical .shopify-buy__product__variant-selectors {   width: 100%;   max-width: 280px;   display: inline-block; } .shopify-buy__quantity {   border-left: 1px solid;   border-right: 1px solid;   border-radius: 3px; } .shopify-buy__quantity, .shopify-buy__quantity-increment, .shopify-buy__quantity-decrement {   border-color: #d3dbe2;   line-height: 1.2;   font-size: 15px;   height: auto;   padding-top: 12px;   padding-bottom: 12px; } .shopify-buy__btn {   display: inline-block; } .shopify-buy__btn-wrapper {   margin-top: 20px; } .shopify-buy__btn.shopify-buy__beside-quantity {   display: inline-block;   vertical-align: top;   border-top-left-radius: 0;   border-bottom-left-radius: 0;   border: 1px solid transparent; } .shopify-buy__btn-and-quantity { } .shopify-buy__btn-and-quantity .shopify-buy__quantity {   border-right: 0;   border-top-right-radius: 0;   border-bottom-right-radius: 0;   background: #fff; } .shopify-buy__btn-and-quantity .shopify-buy__quantity-container {   display: inline-block;   vertical-align: top; } .shopify-buy__btn-and-quantity .shopify-buy__btn-wrapper {   display: inline-block;   vertical-align: top;   margin: 0; } .shopify-buy__cart-item__quantity-container {   margin-top: 20px;   display: inline-block; } .shopify-buy__layout-vertical, .shopify-buy__layout-horizontal { } .shopify-buy__layout-vertical .shopify-buy__btn,   .shopify-buy__layout-vertical .shopify-buy__quantity-container,   .shopify-buy__layout-horizontal .shopify-buy__btn,   .shopify-buy__layout-horizontal .shopify-buy__quantity-container {   margin: 20px auto 0; } .shopify-buy__layout-vertical .shopify-buy__btn:first-child, .shopify-buy__layout-horizontal .shopify-buy__btn:first-child {   margin-top: 0; } .shopify-buy__layout-vertical .shopify-buy__btn-and-quantity, .shopify-buy__layout-horizontal .shopify-buy__btn-and-quantity {   margin: 20px auto 0; } .shopify-buy__layout-vertical .shopify-buy__btn-and-quantity .shopify-buy__btn,     .shopify-buy__layout-vertical .shopify-buy__btn-and-quantity .shopify-buy__quantity-container,     .shopify-buy__layout-horizontal .shopify-buy__btn-and-quantity .shopify-buy__btn,     .shopify-buy__layout-horizontal .shopify-buy__btn-and-quantity .shopify-buy__quantity-container {   margin: 0 auto; } .shopify-buy__layout-vertical .shopify-buy__btn-and-quantity:first-child, .shopify-buy__layout-horizontal .shopify-buy__btn-and-quantity:first-child {   margin: 0 auto; } .shopify-buy__layout-vertical .shopify-buy__product__variant-img, .shopify-buy__layout-horizontal .shopify-buy__product__variant-img {   max-width: 100%; } @media (min-width: 500px) {   .shopify-buy__layout-horizontal:not(.no-image) {     text-align: left;     margin-bottom: 0;     margin-left: 0   }   .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__product-img-wrapper {     float: left;     width: 40%;   }   .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__product__variant-title {     text-align: left;   }   .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__product__title,     .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__product__variant-title,     .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__product__price,     .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__product-description,     .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__btn-and-quantity,     .shopify-buy__layout-horizontal:not(.no-image) > .shopify-buy__btn-wrapper,     .shopify-buy__layout-horizontal:not(.no-image) > .shopify-buy__quantity-container,     .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__product__variant-selectors {     margin-left: calc(40% + 25px);   } } @media (min-width: 680px) {   .shopify-buy__layout-horizontal:not(.no-image) {   }   .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__product-img-wrapper {     float: left;     width: 40%;   }   .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__product__title,     .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__product__variant-title,     .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__product__price,     .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__product-description,     .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__btn-and-quantity,     .shopify-buy__layout-horizontal:not(.no-image) > .shopify-buy__btn-wrapper,     .shopify-buy__layout-horizontal:not(.no-image) > .shopify-buy__quantity-container,     .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__product__variant-selectors {     margin-left: calc(40% + 25px);   } } .no-image { } .no-image .shopify-buy__product-img-wrapper {   display: none; } @-webkit-keyframes dash {   to {     stroke-dashoffset: 0;   } } @keyframes dash {   to {     stroke-dashoffset: 0;   } } .shopify-buy__carousel {   font-size: 0;   text-align: center;   min-height: 90px;   margin-left: -15px;   margin-top: 15px; } .shopify-buy__carousel-item {   width: calc(16.666% - 15px);   margin-left: 15px;   display: inline-block;   vertical-align: middle;   cursor: pointer;   position: relative;   background-size: cover;   background-position: center;   padding: 0;   border: none } .shopify-buy__carousel-item:nth-child(n+7) {   margin-top: 15px; } .shopify-buy__carousel-item:before {   content: "";   display: block;   padding-top: 100%; } .main-image-wrapper {   position: relative; } .carousel-button {   position: absolute;   width: 75px;   top: 0;   height: 100%;   border: none;   font-size: 0;   background-color: transparent;   opacity: 0.4;   cursor: pointer } .carousel-button:hover,   .carousel-button:focus {   opacity: 0.9;   outline: none; } .carousel-button-arrow {   width: 20px;   display: inline-block;   margin-left: 25px; } .carousel-button--previous {   left: 0;   -webkit-transform: rotate(180deg);           transform: rotate(180deg); } .carousel-button--next {   right: 0; } .shopify-buy__carousel-item--selected {   opacity: 0.4; } ';
	styles.productSet = 'html, body, h1, h2, h3, h4, h5, p {   padding: 0;   margin: 0; } * {   box-sizing: border-box; } body, html {   min-height: 100%; } html {   font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;   font-size: 14px;   line-height: 1.2;   color: #4c4c4c;   text-rendering: optimizeLegibility;   -webkit-font-smoothing: antialiased;   -moz-osx-font-smoothing: grayscale; } ul {   list-style: none;   padding-left: 0;   margin: 0; } img {   display: block;   max-width: 100%; } input {   -webkit-appearance: textfield;   margin: 0; } .clearfix { } .clearfix:after {   content: "";   display: table;   clear: both; } .visuallyhidden {   border: 0;   height: 1px;   margin: -1px;   overflow: hidden;   padding: 0;   position: absolute;   width: 1px; } .component-container {   overflow: hidden; } .shopify-buy__type--center {   text-align: center; } .shopify-buy__btn {   color: #fff;   font-size: 15px;   background-color: #78b657;   padding: 12px 40px;   letter-spacing: .3px;   display: block;   border-radius: 3px;   cursor: pointer;   -webkit-transition: background 200ms ease;   transition: background 200ms ease;   max-width: 100%;   text-overflow: ellipsis;   overflow: hidden;   line-height: 1.2;   border: 0;   -moz-appearance: none;   -webkit-appearance: none } .shopify-buy__btn:hover,   .shopify-buy__btn:focus {   background-color: #5f9d3e; } .shopify-buy__btn--parent {   background-color: transparent;   border: 0;   padding: 0;   cursor: pointer } .shopify-buy__btn--parent:hover,   .shopify-buy__btn--parent:focus { } .shopify-buy__btn--parent:hover .product__variant-img, .shopify-buy__btn--parent:focus .product__variant-img {   opacity: .7; } .shopify-buy__btn--cart-tab {   padding: 5px 11px;   border-radius: 3px 0 0 3px;   position: fixed;   right: 0;   top: 50%;   -webkit-transform: translate(100%, -50%);           transform: translate(100%, -50%);   opacity: 0;   min-width: inherit;   width: auto;   height: auto;   z-index: 2147483647 } .shopify-buy__btn--cart-tab.is-active {   -webkit-transform: translateY(-50%);           transform: translateY(-50%);   opacity: 1; } .shopify-buy__btn__counter {   display: block;   margin: 0 auto 10px auto;   font-size: 18px; } .shopify-buy__icon-cart--side {   height: 20px;   width: 20px; } .shopify-buy__btn[disabled] {   background-color: #999;   pointer-events: none; } .shopify-buy__btn--close {   position: absolute;   right: 9px;   top: 8px;   font-size: 35px;   color: #767676;   border: none;   background-color: transparent;   -webkit-transition: color 100ms ease, -webkit-transform 100ms ease;   transition: color 100ms ease, -webkit-transform 100ms ease;   transition: transform 100ms ease, color 100ms ease;   transition: transform 100ms ease, color 100ms ease, -webkit-transform 100ms ease;   cursor: pointer;   font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;   padding-right: 9px } .shopify-buy__btn--close:hover {   -webkit-transform: scale(1.2);           transform: scale(1.2);   color: rgb(105, 105, 105); } .shopify-buy__quantity-decrement, .shopify-buy__quantity-increment {   color: #4c4c4c;   display: block;   height: 30px;   float: left;   line-height: 16px;   font-family: monospace;   width: 26px;   padding: 0;   border: none;   background: transparent;   box-shadow: none;   cursor: pointer;   font-size: 18px;   text-align: center;   font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;   border: 1px solid #767676;   position: relative } .shopify-buy__quantity-decrement svg, .shopify-buy__quantity-increment svg {   width: 14px;   height: 14px;   position: absolute;   top: 50%;   left: 50%;   margin-top: -6px;   margin-left: -7px;   fill: currentColor; } .shopify-buy__quantity-decrement {   border-radius: 3px 0 0 3px; } .shopify-buy__quantity-increment {   border-radius: 0 3px 3px 0; } .shopify-buy__quantity {   color: black;   width: 45px;   height: 30px;   font-size: 16px;   border: none;   text-align: center;   -moz-appearance: textfield;   -webkit-appearance: none;   display: inline-block;   padding: 0;   border-radius: 0;   border-top: 1px solid #767676;   border-bottom: 1px solid #767676; } input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button {   -webkit-appearance: none;   margin: 0; } .shopify-buy__quantity-container.shopify-buy__quantity-with-btns {   overflow: hidden } .shopify-buy__quantity-container.shopify-buy__quantity-with-btns .shopify-buy__quantity {   border-left: 0;   border-right: 0;   float: left; } .shopify-buy__option-select-wrapper {   border: 1px solid #d3dbe2;   border-radius: 3px;   box-sizing: border-box;   position: relative;   background: #fff;   overflow: hidden;   vertical-align: bottom; } .shopify-buy__select-icon {   cursor: pointer;   display: block;   fill: #798c9c;   position: absolute;   right: 10px;   top: 50%;   margin-top: -6px;   pointer-events: none;   width: 12px;   height: 12px;   vertical-align: middle; } .shopify-buy__option-select { } .shopify-buy__option-select + .shopify-buy__option-select {   margin-top: 7.5px; } .shopify-buy__option-select__label {   display: block;   font-size: 14px;   margin-top: 15px;   margin-bottom: 5px; } .shopify-buy__btn--parent { } .shopify-buy__btn--parent .shopify-buy__option-select__label {   cursor: pointer; } .shopify-buy__option-select__select {   font-size: inherit;   padding: 7px 10px;   padding-right: 32px;   border: 0;   width: 100%;   background: transparent;   -webkit-appearance: none;   -moz-appearance: none } .shopify-buy__option-select__select::-ms-expand {   display: none; } .shopify-buy__btn--parent { } .shopify-buy__btn--parent .shopify-buy__option-select__select {   cursor: pointer; } .shopify-buy__product {   overflow: hidden;   width: 100%; } .shopify-buy__product__variant-img {   margin: 0 auto 15px auto;   -webkit-transition: opacity 0.3s ease;   transition: opacity 0.3s ease;   opacity: 1 } .shopify-buy__product__variant-img.is-transitioning {   opacity: 0; } .shopify-buy__is-button {   cursor: pointer; } .shopify-buy__no-image { } .shopify-buy__no-image .shopify-buy__product__variant-img {   display: none; } .shopify-buy__product__title {   font-size: 18px;   line-height: 1.2;   color: #4a4a4a;   margin-bottom: 15px;   font-weight: 700; } .shopify-buy__layout-horizontal { } .shopify-buy__layout-horizontal .shopify-buy__product__title {   margin-top: 10px; } .shopify-buy__product__variant-title {   font-size: 18px;   color: #666;   font-weight: 400;   text-align: center;   margin-bottom: 15px; } .shopify-buy__product__price {   margin-bottom: 15px; } .shopify-buy__product-description {   margin-top: 30px;   line-height: 1.65;   color: #4a4a4a } .shopify-buy__product-description p,   .shopify-buy__product-description ul,   .shopify-buy__product-description ol,   .shopify-buy__product-description img {   margin-bottom: 10px; } .shopify-buy__product-description p:last-child, .shopify-buy__product-description ul:last-child, .shopify-buy__product-description ol:last-child, .shopify-buy__product-description img:last-child {   margin-bottom: 0; } .shopify-buy__product-description a {   color: inherit; } .shopify-buy__product-description img {   max-width: 100%; } .shopify-buy__product-description h1 {   font-size: 20px; } .shopify-buy__product-description h2 {   font-size: 18px; } .shopify-buy__product-description h3 {   font-size: 17px; } .shopify-buy__product-description ul,   .shopify-buy__product-description ol {   margin-left: 2em; } .shopify-buy__product-description ul {   list-style-type: disc; } .shopify-buy__layout-vertical {   text-align: center; } .shopify-buy__product__actual-price, .shopify-buy__product__compare-price {   color: #4a4a4a;   display: inline-block; } .shopify-buy__product__actual-price {   font-size: 14px; } .shopify-buy__product__compare-price {   font-size: 12px;   text-decoration: line-through;   padding-left: 5px;   opacity: 0.65; } .shopify-buy__product__variant-selectors {   text-align: left;   font-size: 14px; } .shopify-buy__layout-vertical { } .shopify-buy__layout-vertical .shopify-buy__product__variant-selectors {   width: 100%;   max-width: 280px;   display: inline-block; } .shopify-buy__quantity {   border-left: 1px solid;   border-right: 1px solid;   border-radius: 3px; } .shopify-buy__quantity, .shopify-buy__quantity-increment, .shopify-buy__quantity-decrement {   border-color: #d3dbe2;   line-height: 1.2;   font-size: 15px;   height: auto;   padding-top: 12px;   padding-bottom: 12px; } .shopify-buy__btn {   display: inline-block; } .shopify-buy__btn-wrapper {   margin-top: 20px; } .shopify-buy__btn.shopify-buy__beside-quantity {   display: inline-block;   vertical-align: top;   border-top-left-radius: 0;   border-bottom-left-radius: 0;   border: 1px solid transparent; } .shopify-buy__btn-and-quantity { } .shopify-buy__btn-and-quantity .shopify-buy__quantity {   border-right: 0;   border-top-right-radius: 0;   border-bottom-right-radius: 0;   background: #fff; } .shopify-buy__btn-and-quantity .shopify-buy__quantity-container {   display: inline-block;   vertical-align: top; } .shopify-buy__btn-and-quantity .shopify-buy__btn-wrapper {   display: inline-block;   vertical-align: top;   margin: 0; } .shopify-buy__cart-item__quantity-container {   margin-top: 20px;   display: inline-block; } .shopify-buy__layout-vertical, .shopify-buy__layout-horizontal { } .shopify-buy__layout-vertical .shopify-buy__btn,   .shopify-buy__layout-vertical .shopify-buy__quantity-container,   .shopify-buy__layout-horizontal .shopify-buy__btn,   .shopify-buy__layout-horizontal .shopify-buy__quantity-container {   margin: 20px auto 0; } .shopify-buy__layout-vertical .shopify-buy__btn:first-child, .shopify-buy__layout-horizontal .shopify-buy__btn:first-child {   margin-top: 0; } .shopify-buy__layout-vertical .shopify-buy__btn-and-quantity, .shopify-buy__layout-horizontal .shopify-buy__btn-and-quantity {   margin: 20px auto 0; } .shopify-buy__layout-vertical .shopify-buy__btn-and-quantity .shopify-buy__btn,     .shopify-buy__layout-vertical .shopify-buy__btn-and-quantity .shopify-buy__quantity-container,     .shopify-buy__layout-horizontal .shopify-buy__btn-and-quantity .shopify-buy__btn,     .shopify-buy__layout-horizontal .shopify-buy__btn-and-quantity .shopify-buy__quantity-container {   margin: 0 auto; } .shopify-buy__layout-vertical .shopify-buy__btn-and-quantity:first-child, .shopify-buy__layout-horizontal .shopify-buy__btn-and-quantity:first-child {   margin: 0 auto; } .shopify-buy__layout-vertical .shopify-buy__product__variant-img, .shopify-buy__layout-horizontal .shopify-buy__product__variant-img {   max-width: 100%; } @media (min-width: 500px) {   .shopify-buy__layout-horizontal:not(.no-image) {     text-align: left;     margin-bottom: 0;     margin-left: 0   }   .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__product-img-wrapper {     float: left;     width: 40%;   }   .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__product__variant-title {     text-align: left;   }   .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__product__title,     .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__product__variant-title,     .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__product__price,     .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__product-description,     .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__btn-and-quantity,     .shopify-buy__layout-horizontal:not(.no-image) > .shopify-buy__btn-wrapper,     .shopify-buy__layout-horizontal:not(.no-image) > .shopify-buy__quantity-container,     .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__product__variant-selectors {     margin-left: calc(40% + 25px);   } } @media (min-width: 680px) {   .shopify-buy__layout-horizontal:not(.no-image) {   }   .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__product-img-wrapper {     float: left;     width: 60%;   }   .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__product__title,     .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__product__variant-title,     .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__product__price,     .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__product-description,     .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__btn-and-quantity,     .shopify-buy__layout-horizontal:not(.no-image) > .shopify-buy__btn-wrapper,     .shopify-buy__layout-horizontal:not(.no-image) > .shopify-buy__quantity-container,     .shopify-buy__layout-horizontal:not(.no-image) .shopify-buy__product__variant-selectors {     margin-left: calc(60% + 25px);   } } .no-image { } .no-image .shopify-buy__product-img-wrapper {   display: none; } @-webkit-keyframes dash {   to {     stroke-dashoffset: 0;   } } @keyframes dash {   to {     stroke-dashoffset: 0;   } } .shopify-buy__carousel {   font-size: 0;   text-align: center;   min-height: 90px;   margin-left: -15px;   margin-top: 15px; } .shopify-buy__carousel-item {   width: calc(16.666% - 15px);   margin-left: 15px;   display: inline-block;   vertical-align: middle;   cursor: pointer;   position: relative;   background-size: cover;   background-position: center;   padding: 0;   border: none } .shopify-buy__carousel-item:nth-child(n+7) {   margin-top: 15px; } .shopify-buy__carousel-item:before {   content: "";   display: block;   padding-top: 100%; } .main-image-wrapper {   position: relative; } .carousel-button {   position: absolute;   width: 75px;   top: 0;   height: 100%;   border: none;   font-size: 0;   background-color: transparent;   opacity: 0.4;   cursor: pointer } .carousel-button:hover,   .carousel-button:focus {   opacity: 0.9;   outline: none; } .carousel-button-arrow {   width: 20px;   display: inline-block;   margin-left: 25px; } .carousel-button--previous {   left: 0;   -webkit-transform: rotate(180deg);           transform: rotate(180deg); } .carousel-button--next {   right: 0; } .shopify-buy__carousel-item--selected {   opacity: 0.4; } .shopify-buy__collection {   overflow: hidden; } .shopify-buy__collection-products {   margin-left: -15px;   text-align: center } @media(min-width: 601px) {   .shopify-buy__collection-products {     margin-left: -20px;   }   } .shopify-buy__product {   min-width: 240px;   width: auto;   margin-left: 15px;   display: inline-block;   vertical-align: top } @media(min-width: 601px) {   .shopify-buy__product {     width: calc(25% - 20px);     margin-left: 20px;     margin-bottom: 50px;   }   } .shopify-buy__btn.shopify-buy__collection-pagination-button  {   display: none;   margin: 15px auto } .shopify-buy__btn.shopify-buy__collection-pagination-button.is-active {   display: block; }  ';
styles.toggle = 'html, body, h1, h2, h3, h4, h5, p {   padding: 0;   margin: 0; } * {   box-sizing: border-box; } body, html {   min-height: 100%; } html {   font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;   font-size: 14px;   line-height: 1.2;   color: #4c4c4c;   text-rendering: optimizeLegibility;   -webkit-font-smoothing: antialiased;   -moz-osx-font-smoothing: grayscale; } ul {   list-style: none;   padding-left: 0;   margin: 0; } img {   display: block;   max-width: 100%; } input {   -webkit-appearance: textfield;   margin: 0; } .clearfix { } .clearfix:after {   content: "";   display: table;   clear: both; } .visuallyhidden {   border: 0;   height: 1px;   margin: -1px;   overflow: hidden;   padding: 0;   position: absolute;   width: 1px; } .component-container {   overflow: hidden; } .shopify-buy__type--center {   text-align: center; } .shopify-buy__btn {   color: #fff;   font-size: 15px;   background-color: #78b657;   padding: 12px 40px;   letter-spacing: .3px;   display: block;   border-radius: 3px;   cursor: pointer;   -webkit-transition: background 200ms ease;   transition: background 200ms ease;   max-width: 100%;   text-overflow: ellipsis;   overflow: hidden;   line-height: 1.2;   border: 0;   -moz-appearance: none;   -webkit-appearance: none } .shopify-buy__btn:hover,   .shopify-buy__btn:focus {   background-color: #5f9d3e; } .shopify-buy__btn--parent {   background-color: transparent;   border: 0;   padding: 0;   cursor: pointer } .shopify-buy__btn--parent:hover,   .shopify-buy__btn--parent:focus { } .shopify-buy__btn--parent:hover .product__variant-img, .shopify-buy__btn--parent:focus .product__variant-img {   opacity: .7; } .shopify-buy__btn--cart-tab {   padding: 5px 11px;   border-radius: 3px 0 0 3px;   position: fixed;   right: 0;   top: 50%;   -webkit-transform: translate(100%, -50%);           transform: translate(100%, -50%);   opacity: 0;   min-width: inherit;   width: auto;   height: auto;   z-index: 2147483647 } .shopify-buy__btn--cart-tab.is-active {   -webkit-transform: translateY(-50%);           transform: translateY(-50%);   opacity: 1; } .shopify-buy__btn__counter {   display: block;   margin: 0 auto 10px auto;   font-size: 18px; } .shopify-buy__icon-cart--side {   height: 20px;   width: 20px; } .shopify-buy__btn[disabled] {   background-color: #999;   pointer-events: none; } .shopify-buy__btn--close {   position: absolute;   right: 9px;   top: 8px;   font-size: 35px;   color: #767676;   border: none;   background-color: transparent;   -webkit-transition: color 100ms ease, -webkit-transform 100ms ease;   transition: color 100ms ease, -webkit-transform 100ms ease;   transition: transform 100ms ease, color 100ms ease;   transition: transform 100ms ease, color 100ms ease, -webkit-transform 100ms ease;   cursor: pointer;   font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;   padding-right: 9px } .shopify-buy__btn--close:hover {   -webkit-transform: scale(1.2);           transform: scale(1.2);   color: rgb(105, 105, 105); } .shopify-buy__cart-toggle-wrapper {   display: inline-block; } .shopify-buy__cart-toggle {   background-color: #78b657;   color: #fff;   border-radius: 3px 0 0 3px;;   padding: 8px 10px;   text-align: center;   display: inline-block;   min-width: 46px;   margin-right: 0;   cursor: pointer;   -webkit-transition: background 200ms ease;   transition: background 200ms ease } .shopify-buy__cart-toggle:hover {   background-color: #5f9d3e; } .shopify-buy__cart-toggle__count {   font-size: 18px;   margin-bottom: 10px; } .shopify-buy__icon-cart__group {   fill: #fff; } .is-inline {    .shopify-buy__icon-cart {     margin-right: 5px;   }    .shopify-buy__cart-toggle__title {     font-size: 16px;     font-weight: normal;   }    .shopify-buy__cart-toggle__count {     margin-left: 21px;     margin-bottom: 0;     position: relative   }    .shopify-buy__cart-toggle__count:before {     content: "";     display: block;     position: absolute;     left: -12px;     height: 100%;     width: 1px;     background-color: #fff;     opacity: 0.3;   } } .is-inline .shopify-buy__icon-cart,   .is-inline .shopify-buy__cart-toggle__title,   .is-inline .shopify-buy__cart-toggle__count {   display: inline-block;   vertical-align: middle; } .is-inline.shopify-buy__cart-toggle {   border-radius: 3px;   padding: 5px 10px; } ';

var delegateEventSplitter = /^(\S+)\s*(.*)$/;
var ESC_KEY$1 = 27;

var View = function () {
  function View(component) {
    classCallCheck(this, View);

    this.component = component;
    this.iframe = null;
    this.node = this.component.node;
    this.template = new Template(this.component.options.templates, this.component.options.contents, this.component.options.order);
  }

  View.prototype.init = function init() {
    this.component.node.className += ' shopify-buy-frame shopify-buy-frame--' + this.component.typeKey;
    if (this.iframe || !this.component.options.iframe) {
      return Promise.resolve(this.iframe);
    }
    this.iframe = new iframe(this.component.node, {
      classes: this.component.classes,
      customStyles: this.component.styles,
      stylesheet: styles[this.component.typeKey],
      browserFeatures: this.component.props.browserFeatures,
      googleFonts: this.component.googleFonts,
      name: this.component.name,
      width: this.component.options.layout === 'vertical' ? this.component.options.width : null
    });
    this.iframe.addClass(this.className);
    return this.iframe.load();
  };

  /**
   * renders string template using viewData to wrapper element.
   */


  View.prototype.render = function render() {
    var _this = this;

    this.component._userEvent('beforeRender');

    this.component.viewData.url_slug = this.component['url_slug']; // set url_slug
    var html = this.template.render({ data: this.component.viewData }, function (data) {
      return _this.wrapTemplate(data);
    });
    if (!this.wrapper) {
      this.wrapper = this._createWrapper();
    }
    this.updateNode(this.wrapper, html);
    this.resize();
    this.component._userEvent('afterRender');
  };

  /**
   * delegates DOM events to event listeners.
   */


  View.prototype.delegateEvents = function delegateEvents() {
    var _this2 = this;

    this.closeComponentsOnEsc();
    Object.keys(this.component.DOMEvents).forEach(function (key) {
      var _key$match = key.match(delegateEventSplitter);

      var _key$match2 = slicedToArray(_key$match, 3);

      var eventName = _key$match2[1];
      var selectorString = _key$match2[2];

      if (selectorString) {
        _this2._on(eventName, selectorString, function (evt, target) {
          _this2.component.DOMEvents[key].call(_this2, evt, target);
        });
      } else {
        _this2.wrapper.addEventListener('click', function (evt) {
          _this2.component.DOMEvents[key].call(_this2, evt);
        });
      }
    });
    if (this.iframe) {
      this.iframe.el.onload = function () {
        _this2.iframe.el.onload = null;
        _this2.reloadIframe();
      };
    }
  };

  View.prototype.reloadIframe = function reloadIframe() {
    this.node.removeChild(this.iframe.el);
    this.wrapper = null;
    this.iframe = null;
    this.component.init();
  };

  View.prototype.append = function append(wrapper) {
    if (this.iframe) {
      this.document.body.appendChild(wrapper);
    } else {
      this.component.node.appendChild(wrapper);
    }
  };

  View.prototype.addClass = function addClass(className) {
    if (this.iframe) {
      this.iframe.addClass(className);
    } else {
      addClassToElement(className, this.component.node);
    }
  };

  View.prototype.removeClass = function removeClass(className) {
    if (this.iframe) {
      this.iframe.removeClass(className);
    } else {
      removeClassFromElement(className, this.component.node);
    }
  };

  View.prototype.destroy = function destroy() {
    this.node.parentNode.removeChild(this.node);
  };

  /**
   * update the contents of a DOM node with template
   * @param {String} className - class name to select node.
   * @param {Object} template - template to be rendered.
   */


  View.prototype.renderChild = function renderChild(className, template) {
    var selector = '.' + className.split(' ').join('.');
    var node = this.wrapper.querySelector(selector);
    var html = template.render({ data: this.component.viewData });
    this.updateNode(node, html);
  };

  /**
   * call morpdom on a node with new HTML
   * @param {Object} node - DOM node to be updated.
   * @param {String} html - HTML to update DOM node with.
   */


  View.prototype.updateNode = function updateNode(node, html) {
    var div = document.createElement('div');
    div.innerHTML = html;
    morphdom(node, div.firstElementChild);
  };

  /**
   * wrap HTML string in containing elements.
   * May be defined in subclass.
   * @param {String} html - HTML string.
   * @return {String} wrapped string.
   */


  View.prototype.wrapTemplate = function wrapTemplate(html) {
    return '<div class="' + this.component.classes[this.component.typeKey][this.component.typeKey] + '">' + html + '</div>';
  };

  /**
   * resize iframe if necessary.
   */


  View.prototype.resize = function resize() {
    if (!this.iframe || !this.wrapper) {
      return;
    }
    if (this.shouldResizeX) {
      this._resizeX();
    }
    if (this.shouldResizeY) {
      this._resizeY();
    }
  };

  /**
   * get total height of iframe contents
   * @return {String} value in pixels.
   */


  /**
   * Focus first focusable element in wrapper.
   */
  View.prototype.setFocus = function setFocus() {
    var focusable = this.wrapper.querySelectorAll('a, button, input, select')[0];
    if (focusable) {
      focusable.focus();
    }
  };

  /**
   * determines if iframe will require horizontal resizing to contain its children.
   * May be defined in subclass.
   * @return {Boolean}
   */


  View.prototype.closeComponentsOnEsc = function closeComponentsOnEsc() {
    var _this3 = this;

    if (!this.iframe) {
      return;
    }
    this.document.addEventListener('keydown', function (evt) {
      if (evt.keyCode !== ESC_KEY$1) {
        return;
      }
      _this3.component.props.closeModal();
      _this3.component.props.closeCart();
    });
  };

  View.prototype.animateRemoveNode = function animateRemoveNode(id) {
    var _this4 = this;

    var el = this.document.getElementById(id);
    addClassToElement('is-hidden', el);
    if (this.component.props.browserFeatures.animation) {
      el.addEventListener('animationend', function () {
        if (!el.parentNode) {
          return;
        }
        _this4.removeNode(el);
      });
    } else {
      this.removeNode(el);
    }
  };

  View.prototype.removeNode = function removeNode(el) {
    el.parentNode.removeChild(el);
    this.render();
  };

  View.prototype._createWrapper = function _createWrapper() {
    var wrapper = document.createElement('div');
    wrapper.className = this.component.classes[this.component.typeKey][this.component.typeKey];
    this.append(wrapper);
    return wrapper;
  };

  View.prototype._resizeX = function _resizeX() {
    this.iframe.el.style.width = this.document.body.clientWidth + 'px';
  };

  View.prototype._resizeY = function _resizeY(value) {
    var newHeight = value || this.outerHeight;
    this.iframe.el.style.height = newHeight;
  };

  View.prototype._on = function _on(eventName, selector, fn) {
    var _this5 = this;

    this.wrapper.addEventListener(eventName, function (evt) {
      var possibleTargets = Array.prototype.slice.call(_this5.wrapper.querySelectorAll(selector));
      var target = evt.target;

      possibleTargets.forEach(function (possibleTarget) {
        var el = target;
        while (el && el !== _this5.wrapper) {
          if (el === possibleTarget) {
            return fn.call(possibleTarget, evt, possibleTarget);
          }
          el = el.parentNode;
        }
        return el;
      });
    }, eventName === 'blur');
  };

  createClass(View, [{
    key: 'outerHeight',
    get: function get() {
      var style = window.getComputedStyle(this.wrapper, '');
      if (!style) {
        return this.wrapper.clientHeight + 'px';
      }
      var height = style.getPropertyValue('height');
      if (!height || height === '0px' || height === 'auto') {
        var clientHeight = this.wrapper.clientHeight;
        height = style.getPropertyValue('height') || clientHeight + 'px';
      }
      return height;
    }
  }, {
    key: 'className',
    get: function get() {
      return '';
    }
  }, {
    key: 'shouldResizeX',
    get: function get() {
      return false;
    }

    /**
     * determines if iframe will require vertical resizing to contain its children.
     * May be defined in subclass.
     * @return {Boolean}
     */

  }, {
    key: 'shouldResizeY',
    get: function get() {
      return false;
    }

    /**
     * get reference to document object.
     * @return {Objcet} instance of Document.
     */

  }, {
    key: 'document',
    get: function get() {
      return this.iframe ? this.iframe.document : window.document;
    }
  }]);
  return View;
}();

var Updater = function () {
  function Updater(component) {
    classCallCheck(this, Updater);

    this.component = component;
  }

  Updater.prototype.updateConfig = function updateConfig(config) {
    this.component.config = merge(this.component.config, config.options);
    this.component.view.template = new Template(this.component.options.templates, this.component.options.contents, this.component.options.order);
    if (this.component.view.iframe) {
      this.component.view.iframe.updateStyles(this.component.styles, this.component.googleFonts);
    }
    this.component.view.render();
    this.component.view.resize();
  };

  return Updater;
}();

function moneyFormat() {
  var format = arguments.length <= 0 || arguments[0] === undefined ? defaultMoneyFormat : arguments[0];

  return decodeURIComponent(format);
}

/**
 * Manages rendering, lifecycle, and data fetching of a cmoponent.
 */

var Component = function () {


  /**
   * creates a component.
   * @param {Object} config - configuration object.
   * @param {Object} props - data and utilities passed down from UI instance.
   */
  function Component(config, props) {
    classCallCheck(this, Component);

    this.id = config.id;
    this.url_slug = config.url_slug
    this.handle = config.handle;
    this.node = config.node;
    this.globalConfig = {
      debug: config.debug,
      moneyFormat: moneyFormat(config.moneyFormat),
      cartNode: config.cartNode,
      modalNode: config.modalNode,
      toggles: config.toggles
    };
    if(config.url_slug) {
      var urlified = defaults;
      urlified.product.templates= productTemplateWithURL;
      this.config = merge({}, urlified, config.options || {});
    } else this.config = merge({}, defaults, config.options || {});
    this.props = props;
    this.model = {};
    this.updater = new Updater(this);
    this.view = new View(this);
  }

  /**
   * get unique name for component.
   * @return {String} component name.
   */


  /**
   * initializes component by creating model and rendering view.
   * @param {Object} [data] - data to initialize model with.
   * @return {Promise} promise resolving to instance.
   */
  Component.prototype.init = function init(data) {
    var _this = this;
    this._userEvent('beforeInit');
    return this.view.init().then(function () {
      return _this.setupModel(data);
    }).then(function (model) {
      _this.model = model;
      _this.view.render();
      _this.view.delegateEvents();
      _this._userEvent('afterInit');
      return _this;
    }).catch(function (err) {
      if (err.message.indexOf('Not Found') > -1) {
        logNotFound(_this);
      }
      throw err;
    });
  };

  /**
   * fetches data if necessary
   * @param {Object} [data] - data to initialize model with.
   */


  Component.prototype.setupModel = function setupModel(data) {
    if (data) {
      return Promise.resolve(data);
    } else {
      return this.fetchData();
    }
  };

  /**
   * re-assign configuration and re-render component.
   * @param {Object} config - new configuration object.
   */


  Component.prototype.updateConfig = function updateConfig(config) {
    return this.updater.updateConfig(config);
  };

  /**
   * remove node from DOM.
   */


  Component.prototype.destroy = function destroy() {
    this.view.destroy();
  };

  Component.prototype._userEvent = function _userEvent(methodName) {
    if (this.globalConfig.debug) {
      logger.info('EVENT: ' + methodName + ' (' + this.typeKey + ')');
    }
    if (isFunction$1(this.events[methodName])) {
      this.events[methodName].call(this, this);
    }
  };

  createClass(Component, [{
    key: 'name',
    get: function get() {
      var uniqueHandle = '';
      if (this.id) {
        uniqueHandle = '-' + this.id;
      } else if (this.handle) {
        uniqueHandle = '-' + this.handle;
      }
      return 'frame-' + this.typeKey + uniqueHandle;
    }

    /**
     * get configuration options specific to this component.
     * @return {Object} options object.
     */

  }, {
    key: 'options',
    get: function get() {
      return merge({}, this.config[this.typeKey]);
    }

    /**
     * get events to be bound to DOM.
     * @return {Object} DOMEvents object.
     */

  }, {
    key: 'DOMEvents',
    get: function get() {
      return this.options.DOMEvents || {};
    }

    /**
     * get events to be called on lifecycle methods.
     * @return {Object} events object.
     */

  }, {
    key: 'events',
    get: function get() {
      return this.options.events || {};
    }

    /**
     * get classes for component and any components it contains as determined by manifest.
     * @return {Object} class keys and names.
     */

  }, {
    key: 'classes',
    get: function get() {
      var _this2 = this;

      return this.options.manifest.filter(function (component) {
        return _this2.config[component].classes;
      }).reduce(function (hash, component) {
        hash[component] = _this2.config[component].classes;
        return hash;
      }, {});
    }

    /**
     * get classes formatted as CSS selectors.
     * @return {Object} class keys and selectors.
     */

  }, {
    key: 'selectors',
    get: function get() {
      var _this3 = this;

      return this.options.manifest.filter(function (component) {
        return _this3.config[component].classes;
      }).reduce(function (hash, component) {
        hash[component] = Object.keys(_this3.config[component].classes).reduce(function (classes, classKey) {
          classes[classKey] = '.' + _this3.classes[component][classKey].split(' ').join('.');
          return classes;
        }, {});
        return hash;
      }, {});
    }

    /**
     * get styles for component and any components it contains as determined by manifest.
     * @return {Object} key-value pairs of CSS styles.
     */

  }, {
    key: 'styles',
    get: function get() {
      var _this4 = this;

      return this.options.manifest.filter(function (component) {
        return _this4.config[component].styles;
      }).reduce(function (hash, component) {
        hash[component] = _this4.config[component].styles;
        return hash;
      }, {});
    }

    /**
     * get google fonts for component and any components it contains as determined by manifest.
     * @return {Array} array of names of fonts to be loaded.
     */

  }, {
    key: 'googleFonts',
    get: function get() {
      var _this5 = this;

      return this.options.manifest.filter(function (component) {
        return _this5.config[component].googleFonts;
      }).reduce(function (fonts, component) {
        return fonts.concat(_this5.config[component].googleFonts);
      }, []);
    }

    /**
     * get data to be passed to view.
     * @return {Object} viewData object.
     */

  }, {
    key: 'viewData',
    get: function get() {
      return merge(this.model, this.options.viewData, {
        classes: this.classes,
        text: this.options.text
      });
    }

    /**
     * get callbacks for morphdom lifecycle events.
     * @return {Object} object.
     */

  }, {
    key: 'morphCallbacks',
    get: function get() {
      return {
        onBeforeElUpdated: function onBeforeElUpdated(fromEl, toEl) {
          if (fromEl.tagName === 'IMG') {
            if (fromEl.src === toEl.getAttribute('data-src')) {
              return false;
            }
          }
          return true;
        }
      };
    }
  }]);
  return Component;
}();

var Checkout = function () {
  function Checkout(config) {
    classCallCheck(this, Checkout);

    this.config = config;
  }

  Checkout.prototype.open = function open(url) {
    if (this.config.cart.popup) {
      window.open(url, 'checkout', this.params);
    } else {
      window.location = url;
    }
  };

  createClass(Checkout, [{
    key: 'params',
    get: function get() {
      var config = _extends({}, this.config.window, {
        left: window.outerWidth / 2 - 200,
        top: window.outerHeight / 2 - 300
      });

      return Object.keys(config).reduce(function (acc, key) {
        return '' + acc + key + '=' + config[key] + ',';
      }, '');
    }
  }]);
  return Checkout;
}();

var windowUtils = {
  location: function location() {
    return window.location.href;
  }
};

var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
var thousandsRegex = /(\d)(?=(\d\d\d)+(?!\d))/g;

function formatWithDelimiters(number) {
  var precision = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];
  var thousands = arguments.length <= 2 || arguments[2] === undefined ? ',' : arguments[2];
  var decimal = arguments.length <= 3 || arguments[3] === undefined ? '.' : arguments[3];

  if (isNaN(number) || number == null) {
    return 0;
  }

  var fixedNumber = (number / 100.0).toFixed(precision);
  var parts = fixedNumber.split('.');
  var dollars = parts[0].replace(thousandsRegex, '$1' + thousands);
  var cents = parts[1] ? decimal + parts[1] : '';

  return dollars + cents;
}

function formatMoney(amount, format) {
  var cents = amount * 100;

  if (typeof cents === 'string') {
    cents = cents.replace('.', '');
  }

  var value = '';
  var formatString = format || defaultMoneyFormat;
  var placeholderMatch = formatString.match(placeholderRegex);

  if (!placeholderMatch) {
    formatString = defaultMoneyFormat;
    placeholderMatch = formatString.match(placeholderRegex);
  }

  switch (placeholderMatch[1]) {
    case 'amount':
      value = formatWithDelimiters(cents);
      break;
    case 'amount_no_decimals':
      value = formatWithDelimiters(cents, 0);
      break;
    case 'amount_with_comma_separator':
      value = formatWithDelimiters(cents, 2, '.', ',');
      break;
    case 'amount_no_decimals_with_comma_separator':
      value = formatWithDelimiters(cents, 0, '.', ',');
      break;
    case 'amount_no_decimals_with_space_separator':
      value = formatWithDelimiters(cents, 0, ' ');
      break;
    default:
      value = formatWithDelimiters(cents);
  }

  return formatString.replace(placeholderRegex, value);
}

var pollInterval = 200;

var ProductView = function (_View) {
  inherits(ProductView, _View);

  function ProductView() {
    classCallCheck(this, ProductView);
    return possibleConstructorReturn(this, _View.apply(this, arguments));
  }

  /**
   * check size of image until it is resolved, then set height of iframe.
   */
  ProductView.prototype.resizeUntilLoaded = function resizeUntilLoaded() {
    var _this2 = this;

    if (!this.iframe || !this.component.model.selectedVariantImage) {
      return;
    }
    var img = this.wrapper.getElementsByClassName(this.component.classes.product.img)[0];
    var intervals = 0;
    if (img) {
      (function () {
        var productResize = setInterval(function () {
          if (!img.naturalWidth && intervals < 30) {
            intervals++;
            return;
          }
          _this2.resize();
          clearInterval(productResize);
        }, pollInterval);
      })();
    }
  };

  /**
   * renders string template using viewData to wrapper element.
   * Resizes iframe to match image size.
   */


  ProductView.prototype.render = function render() {
    _View.prototype.render.call(this);
    this.resizeUntilLoaded();
  };

  ProductView.prototype.wrapTemplate = function wrapTemplate(html) {
    var ariaLabel = void 0;
    switch (this.component.options.buttonDestination) {
      case 'modal':
        ariaLabel = 'View details';
        break;
      case 'cart':
        ariaLabel = 'Add to cart';
        break;
      default:
        ariaLabel = 'Buy Now';
    }

    if (this.component.isButton) {
      return '<div class="' + this.wrapperClass + ' ' + this.component.classes.product.product + '"><div tabindex="0" role="button" aria-label="' + ariaLabel + '" class="' + this.component.classes.product.blockButton + '">' + html + '</div></div>';
    } else {
      return '<div class="' + this.wrapperClass + ' ' + this.component.classes.product.product + '">' + html + '</div>';
    }
  };

  createClass(ProductView, [{
    key: 'className',
    get: function get() {
      return this.component.classes.product[this.component.options.layout];
    }
  }, {
    key: 'shouldResizeX',
    get: function get() {
      return false;
    }
  }, {
    key: 'shouldResizeY',
    get: function get() {
      return true;
    }
  }, {
    key: 'wrapperClass',
    get: function get() {
      return (this.component.currentImage ? 'has-image' : 'no-image') + ' ' + this.component.classes.product[this.component.options.layout];
    }
  }]);
  return ProductView;
}(View);

var MAX_WIDTH = '950px';

var ProductUpdater = function (_Updater) {
  inherits(ProductUpdater, _Updater);

  function ProductUpdater() {
    classCallCheck(this, ProductUpdater);
    return possibleConstructorReturn(this, _Updater.apply(this, arguments));
  }

  ProductUpdater.prototype.updateConfig = function updateConfig(config) {
    var _this2 = this;

    if (config.id || config.variantId) {
      this.component.id = config.id || this.component.id;
      this.component.defaultVariantId = config.variantId || this.component.defaultVariantId;
      this.component.init();
      return;
    }

    var layout = this.component.options.layout;

    if (config.options && config.options.product) {

      if (config.options.product.layout) {
        layout = config.options.product.layout;
      }

      if (this.component.view.iframe) {
        if (layout === 'vertical' && this.component.view.iframe.width === MAX_WIDTH) {
          this.component.view.iframe.setWidth(this.component.options.width);
        }

        if (layout === 'horizontal' && this.component.view.iframe.width && this.component.view.iframe.width !== MAX_WIDTH) {
          this.component.view.iframe.setWidth(MAX_WIDTH);
        }

        if (config.options.product.width && layout === 'vertical') {
          this.component.view.iframe.setWidth(config.options.product.width);
        }

        if (config.options.product.layout) {
          this.component.view.iframe.el.style.width = '100%';
        }
      }
    }

    if (this.component.view.iframe) {
      this.component.view.iframe.removeClass(this.component.classes.product.vertical);
      this.component.view.iframe.removeClass(this.component.classes.product.horizontal);
      this.component.view.iframe.addClass(this.component.classes.product[layout]);
      this.component.view.resizeUntilLoaded();
    }
    [].concat(toConsumableArray(this.component.view.wrapper.querySelectorAll('img'))).forEach(function (img) {
      img.addEventListener('load', function () {
        _this2.component.view.resizeUntilLoaded();
      });
    });
    _Updater.prototype.updateConfig.call(this, config);
    if (this.component.cart) {
      this.component.cart.updateConfig(config);
    }
    if (this.component.modal) {
      this.component.modal.updateConfig(_extends({}, config, {
        options: _extends({}, this.component.config, {
          product: this.component.modalProductConfig
        })
      }));
    }
  };

  return ProductUpdater;
}(Updater);

function isFunction(obj) {
  return Boolean(obj && obj.constructor && obj.call && obj.apply);
}

function isPseudoSelector(key) {
  return key.charAt(0) === ':';
}

function isMedia(key) {
  return key.charAt(0) === '@';
}

var ENTER_KEY = 13;

var propertiesWhitelist = ['background', 'background-color', 'border', 'border-radius', 'color', 'border-color', 'border-width', 'border-style', 'transition', 'text-transform', 'text-shadow', 'box-shadow', 'font-size', 'font-family'];

function whitelistedProperties(selectorStyles) {
  return Object.keys(selectorStyles).reduce(function (filteredStyles, propertyName) {
    if (isPseudoSelector(propertyName) || isMedia(propertyName)) {
      filteredStyles[propertyName] = whitelistedProperties(selectorStyles[propertyName]);
      return filteredStyles;
    }
    if (propertiesWhitelist.indexOf(propertyName) > -1) {
      filteredStyles[propertyName] = selectorStyles[propertyName];
    }
    return filteredStyles;
  }, {});
}

/**
 * Renders and fetches data for product embed.
 * @extends Component.
 */

var Product = function (_Component) {
  inherits(Product, _Component);

  /**
   * create Product.
   * @param {Object} config - configuration object.
   * @param {Object} props - data and utilities passed down from UI instance.
   */
  function Product(config, props) {
    classCallCheck(this, Product);
    var _this = possibleConstructorReturn(this, _Component.call(this, config, props));

    _this.typeKey = 'product';
    _this.defaultVariantId = config.variantId;
    _this.cachedImage = null;
    _this.childTemplate = new Template(_this.config.option.templates, _this.config.option.contents, _this.config.option.order);
    _this.cart = null;
    _this.modal = null;
    _this.imgStyle = '';
    _this.selectedQuantity = 1;
    _this.updater = new ProductUpdater(_this);
    _this.view = new ProductView(_this);
    _this.selectedImage = null;
    return _this;
  }

  /**
   * determines if product requries a cart component based on buttonDestination.
   * @return {Boolean}
   */


  /**
   * prevent events from bubbling if entire product is being treated as button.
   */
  Product.prototype.stopPropagation = function stopPropagation(evt) {
    if (this.isButton) {
      evt.stopImmediatePropagation();
    }
  };

  /**
   * get HTML for product options selector.
   * @return {String} HTML
   */


  /**
   * determines whether an option can resolve to an available variant given current selections
   * @return {Boolean}
   */
  Product.prototype.optionValueCanBeSelected = function optionValueCanBeSelected(selections, name, value) {
    var variants = this.variantArray;
    var selectableValues = _extends({}, selections, defineProperty({}, name, value));

    var satisfactoryVariants = variants.filter(function (variant) {
      var matchingOptions = Object.keys(selectableValues).filter(function (key) {
        return variant.optionValues[key] === selectableValues[key];
      });
      return matchingOptions.length === Object.keys(selectableValues).length;
    });

    var variantSelectable = false;

    variantSelectable = satisfactoryVariants.reduce(function (variantExists, variant) {
      var variantAvailable = variant.available;
      if (!variantExists) {
        return variantAvailable;
      }
      return variantExists;
    }, false);
    return variantSelectable;
  };

  /**
   * get options for product with selected value.
   * @return {Array}
   */


  /**
   * open online store in new tab.
   */
  Product.prototype.openOnlineStore = function openOnlineStore() {
    this._userEvent('openOnlineStore');
    window.open(this.onlineStoreURL);
  };

  /**
   * initializes component by creating model and rendering view.
   * Creates and initalizes cart if necessary.
   * @param {Object} [data] - data to initialize model with.
   * @return {Promise} promise resolving to instance.
   */


  Product.prototype.init = function init(data) {
    var _this2 = this;

    return this.createCart().then(function (cart) {
      _this2.cart = cart;
      return _Component.prototype.init.call(_this2, data).then(function (model) {
        if (model) {
          _this2.view.render();
        }
        return model;
      });
    });
  };

  /**
   * creates cart if necessary.
   * @return {Promise}
   */


  Product.prototype.createCart = function createCart() {
    var cartConfig = _extends({}, this.globalConfig, {
      node: this.globalConfig.cartNode,
      options: this.config
    });

    if (this.shouldCreateCart) {
      return this.props.createCart(cartConfig);
    } else {
      return Promise.resolve(null);
    }
  };

  /**
   * fetches data if necessary.
   * Sets default variant for product.
   * @param {Object} [data] - data to initialize model with.
   */


  Product.prototype.setupModel = function setupModel(data) {
    var _this3 = this;

    return _Component.prototype.setupModel.call(this, data).then(function (model) {
      return _this3.setDefaultVariant(model);
    });
  };

  /**
   * fetch product data from API.
   * @return {Promise} promise resolving to model data.
   */


  Product.prototype.sdkFetch = function sdkFetch() {
    if (this.id) {
      return this.props.client.fetchProduct(this.id);
    } else if (this.handle) {
      return this.props.client.fetchQueryProducts({ handle: this.handle }).then(function (products) {
        return products[0];
      });
    }
    return Promise.reject(new Error('SDK Fetch Failed'));
  };

  /**
   * call sdkFetch and set selected quantity to 0.
   * @throw 'Not Found' if model not returned.
   * @return {Promise} promise resolving to model data.
   */


  Product.prototype.fetchData = function fetchData() {
    return this.sdkFetch().then(function (model) {
      if (model) {
        model.selectedQuantity = 0;
        return model;
      }
      throw new Error('Not Found');
    });
  };

  Product.prototype.onButtonClick = function onButtonClick(evt, target) {
    evt.stopPropagation();
    if (isFunction(this.options.buttonDestination)) {
      this.options.buttonDestination(this);
    } else if (this.options.buttonDestination === 'cart') {
      this.props.closeModal();
      this._userEvent('addVariantToCart');
      this.props.tracker.trackMethod(this.cart.addVariantToCart.bind(this), 'Update Cart', this.selectedVariantTrackingInfo)(this.model.selectedVariant, this.model.selectedQuantity);
      if (this.iframe) {
        this.props.setActiveEl(target);
      }
    } else if (this.options.buttonDestination === 'modal') {
      this.props.setActiveEl(target);
      this.openModal();
    } else if (this.options.buttonDestination === 'onlineStore') {
      this.openOnlineStore();
    } else {
      this._userEvent('openCheckout');
      new Checkout(this.config).open(this.model.selectedVariant.checkoutUrl(this.selectedQuantity));
    }
  };

  Product.prototype.onBlockButtonKeyup = function onBlockButtonKeyup(evt, target) {
    if (evt.keyCode === ENTER_KEY) {
      this.onButtonClick(evt, target);
    }
  };

  Product.prototype.onOptionSelect = function onOptionSelect(evt) {
    var target = evt.target;
    var value = target.options[target.selectedIndex].value;
    var name = target.getAttribute('name');
    this.selectedImage = null;
    this.updateVariant(name, value);
  };

  Product.prototype.onQuantityBlur = function onQuantityBlur(evt, target) {
    this.updateQuantity(function () {
      return parseInt(target.value, 10);
    });
  };

  Product.prototype.onQuantityIncrement = function onQuantityIncrement(qty) {
    this.updateQuantity(function (prevQty) {
      return prevQty + qty;
    });
  };

  Product.prototype.closeCartOnBgClick = function closeCartOnBgClick() {
    if (this.cart && this.cart.isVisible) {
      this.cart.close();
    }
  };

  Product.prototype.onCarouselItemClick = function onCarouselItemClick(evt, target) {
    evt.preventDefault();
    var selectedImageId = target.getAttribute('data-image-id');
    var imageList = this.model.images;
    var foundImage = imageList.filter(function (image) {
      return image.id === parseInt(selectedImageId, 10);
    })[0];

    if (foundImage) {
      this.selectedImage = foundImage;
      this.cachedImage = foundImage;
    }
    this.view.render();
  };

  Product.prototype.nextIndex = function nextIndex(currentIndex, offset) {
    var nextIndex = currentIndex + offset;
    if (nextIndex > this.model.images.length) {
      return 0;
    }
    if (nextIndex < 0) {
      return this.model.images.length - 1;
    }
    return nextIndex;
  };

  Product.prototype.onCarouselChange = function onCarouselChange(offset) {
    var _this4 = this;

    var imageList = this.model.images;
    var currentImage = imageList.filter(function (image) {
      return image.id === _this4.currentImage.id;
    })[0];
    var currentImageIndex = imageList.indexOf(currentImage);
    this.selectedImage = imageList[this.nextIndex(currentImageIndex, offset)];
    this.cachedImage = this.selectedImage;
    this.view.render();
  };

  /**
   * create modal instance and initialize.
   * @return {Promise} promise resolving to modal instance
   */


  Product.prototype.openModal = function openModal() {
    if (!this.modal) {
      var modalConfig = _extends({}, this.globalConfig, {
        node: this.globalConfig.modalNode,
        options: _extends({}, this.config, {
          product: this.modalProductConfig,
          modal: _extends({}, this.config.modal, {
            googleFonts: this.options.googleFonts
          })
        })
      });
      this.modal = this.props.createModal(modalConfig, this.props);
    }
    this._userEvent('openModal');
    return this.modal.init(this.model);
  };

  /**
   * update quantity of selected variant and rerender.
   * @param {Function} fn - function which returns new quantity given current quantity.
   */


  Product.prototype.updateQuantity = function updateQuantity(fn) {
    var quantity = fn(this.selectedQuantity);
    if (quantity < 0) {
      quantity = 0;
    }
    this.selectedQuantity = quantity;
    this._userEvent('updateQuantity');
    this.view.render();
  };

  /**
   * Update variant based on option value.
   * @param {String} optionName - name of option being modified.
   * @param {String} value - value of selected option.
   * @return {Object} updated option object.
   */


  Product.prototype.updateVariant = function updateVariant(optionName, value) {
    var updatedOption = this.model.options.filter(function (option) {
      return option.name === optionName;
    })[0];
    updatedOption.selected = value;
    if (this.variantExists) {
      this.cachedImage = this.model.selectedVariantImage;
    }
    this.view.render();
    this._userEvent('updateVariant');
    return updatedOption;
  };

  /**
   * set default variant to be selected on initialization.
   * @param {Object} model - model to be modified.
   */


  Product.prototype.setDefaultVariant = function setDefaultVariant(model) {
    var _this5 = this;

    if (!this.defaultVariantId) {
      return model;
    }

    var selectedVariant = model.variants.filter(function (variant) {
      return variant.id === _this5.defaultVariantId;
    })[0];
    if (selectedVariant) {
      model.options.forEach(function (option) {
        option.selected = selectedVariant.optionValues.filter(function (optionValue) {
          return optionValue.name === option.name;
        })[0].value;
      });
    } else {

      // eslint-disable-next-line
      console.error('invalid variant ID');
    }
    return model;
  };

  createClass(Product, [{
    key: 'shouldCreateCart',
    get: function get() {
      return this.options.buttonDestination !== 'checkout' && this.config.modalProduct.buttonDestination !== 'checkout';
    }

    /**
     * determines when image src should be updated
     * @return {Boolean}
     */

  }, {
    key: 'shouldUpdateImage',
    get: function get() {
      return !this.cachedImage || this.image && this.image.src && this.image.src !== this.cachedImage.src;
    }

    /**
     * get image for product and cache it. Return caches image if shouldUpdateImage is false.
     * @return {Object} image objcet.
     */

  }, {
    key: 'currentImage',
    get: function get() {
      if (this.shouldUpdateImage) {
        this.cachedImage = this.image;
      }

      return this.cachedImage;
    }

    /**
     * get image for selected variant and size based on options or layout.
     * @return {Object} image object.
     */

  }, {
    key: 'image',
    get: function get() {
      var _this6 = this;

      if (!this.model.selectedVariant || !this.model.selectedVariant.image || !this.model.selectedVariant.image.variants.length) {
        return null;
      }
      var availableSizes = this.model.selectedVariant.image.variants;

      var imageSize = 'grande';

      if (this.options.width && this.options.layout === 'vertical') {
        imageSize = availableSizes.filter(function (image) {
          var containerWidth = parseInt(_this6.options.width, 10);
          return parseInt(image.dimension, 10) >= containerWidth * 1.5;
        })[0].name;
      }

      if (this.options.imageSize) {
        imageSize = this.options.imageSize;
      }

      var sourceImage = this.model.selectedVariant.image;
      if (this.selectedImage) {
        sourceImage = this.model.images.filter(function (image) {
          return image.id === _this6.selectedImage.id;
        })[0];
      }

      return _extends({}, sourceImage.variants.filter(function (image) {
        return image.name === imageSize;
      })[0], {
        id: sourceImage.id
      });
    }

    /**
     * get formatted cart subtotal based on moneyFormat
     * @return {String}
     */

  }, {
    key: 'formattedPrice',
    get: function get() {
      if (!this.model.selectedVariant) {
        return '';
      }
      return formatMoney(this.model.selectedVariant.price, this.globalConfig.moneyFormat);
    }

    /**
     * get formatted cart subtotal based on moneyFormat
     * @return {String}
     */

  }, {
    key: 'formattedCompareAtPrice',
    get: function get() {
      if (!this.model.selectedVariant) {
        return '';
      }
      return formatMoney(this.model.selectedVariant.compareAtPrice, this.globalConfig.moneyFormat);
    }

    /**
     * get data to be passed to view.
     * @return {Object} viewData object.
     */

  }, {
    key: 'viewData',
    get: function get() {
      var image = _extends({}, this.currentImage);
      return merge(this.model, this.options.viewData, {
        classes: this.classes,
        contents: this.options.contents,
        text: this.options.text,
        optionsHtml: this.optionsHtml,
        decoratedOptions: this.decoratedOptions,
        currentImage: image,
        buttonClass: this.buttonClass,
        hasVariants: this.hasVariants,
        buttonDisabled: !this.buttonEnabled,
        selectedQuantity: this.selectedQuantity,
        buttonText: this.buttonText,
        imgStyle: this.imgStyle,
        quantityClass: this.quantityClass,
        priceClass: this.priceClass,
        formattedPrice: this.formattedPrice,
        formattedCompareAtPrice: this.formattedCompareAtPrice,
        carouselIndex: 0,
        carouselImages: this.carouselImages
      });
    }
  }, {
    key: 'carouselImages',
    get: function get() {
      var _this7 = this;

      return this.model.images.map(function (image) {
        return _extends({}, image, {
          isSelected: image.id === _this7.currentImage.id,
          carouselSrc: image.variants[3].src
        });
      });
    }
  }, {
    key: 'buttonClass',
    get: function get() {
      var disabledClass = this.buttonEnabled ? '' : this.classes.disabled;
      var quantityClass = this.options.contents.buttonWithQuantity ? this.classes.product.buttonBesideQty : '';
      return disabledClass + ' ' + quantityClass;
    }
  }, {
    key: 'quantityClass',
    get: function get() {
      return this.options.contents.quantityIncrement || this.options.contents.quantityDecrement ? this.classes.product.quantityWithButtons : '';
    }
  }, {
    key: 'buttonText',
    get: function get() {
      if (this.options.buttonDestination === 'modal') {
        return this.options.text.button;
      }
      if (!this.variantExists) {
        return this.options.text.unavailable;
      }
      if (!this.variantInStock) {
        return this.options.text.outOfStock;
      }
      return this.options.text.button;
    }
  }, {
    key: 'buttonEnabled',
    get: function get() {
      return this.options.buttonDestination === 'modal' || this.buttonActionAvailable && this.variantExists && this.variantInStock;
    }
  }, {
    key: 'variantExists',
    get: function get() {
      return Boolean(this.model.selectedVariant);
    }
  }, {
    key: 'variantInStock',
    get: function get() {
      return this.variantExists && this.model.selectedVariant.available;
    }
  }, {
    key: 'hasVariants',
    get: function get() {
      return this.model.variants.length > 1;
    }
  }, {
    key: 'requiresCart',
    get: function get() {
      return this.options.buttonDestination === 'cart';
    }
  }, {
    key: 'buttonActionAvailable',
    get: function get() {
      return !this.requiresCart || Boolean(this.cart);
    }
  }, {
    key: 'hasQuantity',
    get: function get() {
      return this.options.contents.quantityInput;
    }
  }, {
    key: 'priceClass',
    get: function get() {
      return this.model.selectedVariant && this.model.selectedVariant.compareAtPrice ? this.classes.product.loweredPrice : '';
    }
  }, {
    key: 'isButton',
    get: function get() {
      return this.options.isButton && !(this.options.contents.button || this.options.contents.buttonWithQuantity);
    }

    /**
     * get events to be bound to DOM.
     * @return {Object}
     */

  }, {
    key: 'DOMEvents',
    get: function get() {
      var _merge;

      return merge({}, (_merge = {
        click: this.closeCartOnBgClick.bind(this)
      }, defineProperty(_merge, 'click ' + this.selectors.option.select, this.stopPropagation.bind(this)), defineProperty(_merge, 'focus ' + this.selectors.option.select, this.stopPropagation.bind(this)), defineProperty(_merge, 'click ' + this.selectors.option.wrapper, this.stopPropagation.bind(this)), defineProperty(_merge, 'click ' + this.selectors.product.quantityInput, this.stopPropagation.bind(this)), defineProperty(_merge, 'click ' + this.selectors.product.quantityButton, this.stopPropagation.bind(this)), defineProperty(_merge, 'change ' + this.selectors.option.select, this.onOptionSelect.bind(this)), defineProperty(_merge, 'click ' + this.selectors.product.button, this.onButtonClick.bind(this)), defineProperty(_merge, 'click ' + this.selectors.product.blockButton, this.onButtonClick.bind(this)), defineProperty(_merge, 'keyup ' + this.selectors.product.blockButton, this.onBlockButtonKeyup.bind(this)), defineProperty(_merge, 'click ' + this.selectors.product.quantityIncrement, this.onQuantityIncrement.bind(this, 1)), defineProperty(_merge, 'click ' + this.selectors.product.quantityDecrement, this.onQuantityIncrement.bind(this, -1)), defineProperty(_merge, 'blur ' + this.selectors.product.quantityInput, this.onQuantityBlur.bind(this)), defineProperty(_merge, 'click ' + this.selectors.product.carouselItem, this.onCarouselItemClick.bind(this)), defineProperty(_merge, 'click ' + this.selectors.product.carouselNext, this.onCarouselChange.bind(this, 1)), defineProperty(_merge, 'click ' + this.selectors.product.carouselPrevious, this.onCarouselChange.bind(this, -1)), _merge), this.options.DOMEvents);
    }
  }, {
    key: 'optionsHtml',
    get: function get() {
      var _this8 = this;

      if (!this.options.contents.options) {
        return '';
      }
      return this.decoratedOptions.reduce(function (acc, option) {
        var data = merge(option, _this8.options.viewData);
        data.classes = _this8.classes;
        data.onlyOption = _this8.model.options.length === 1;

        return acc + _this8.childTemplate.render({ data: data });
      }, '');
    }

    /**
     * get product variants with embedded options
     * @return {Array} array of variants
     */

  }, {
    key: 'variantArray',
    get: function get() {
      delete this.variantArrayMemo;
      this.variantArrayMemo = this.model.variants.map(function (variant) {
        var betterVariant = {
          id: variant.id,
          available: variant.available,
          optionValues: {}
        };
        variant.optionValues.forEach(function (optionValue) {
          betterVariant.optionValues[optionValue.name] = optionValue.value;
        });

        return betterVariant;
      });
      return this.variantArrayMemo;
    }

    /**
     * get selected values for options
     * @return {Object} object with option names as keys
     */

  }, {
    key: 'selections',
    get: function get() {
      var _this9 = this;

      var selections = {};

      this.model.selections.forEach(function (selection, index) {
        var option = _this9.model.options[index];
        selections[option.name] = selection;
      });

      return selections;
    }
  }, {
    key: 'decoratedOptions',
    get: function get() {
      var _this10 = this;

      var selections = this.selections;
      return this.model.options.map(function (option) {
        return {
          name: option.name,
          values: option.values.map(function (value) {
            return {
              name: value,
              selected: value === option.selected,
              disabled: !_this10.optionValueCanBeSelected(selections, option.name, value)
            };
          })
        };
      });
    }

    /**
     * get info about product to be sent to tracker
     * @return {Object}
     */

  }, {
    key: 'trackingInfo',
    get: function get() {
      if (!this.model.selectedVariant) {
        return {};
      }
      return {
        id: this.id,
        name: this.model.selectedVariant.productTitle,
        sku: null,
        price: this.model.selectedVariant.price
      };
    }

    /**
     * get info about variant to be sent to tracker
     * @return {Object}
     */

  }, {
    key: 'selectedVariantTrackingInfo',
    get: function get() {
      var variant = this.model.selectedVariant;
      return {
        id: variant.id,
        name: variant.productTitle,
        quantity: this.model.selectedQuantity,
        sku: null,
        price: variant.price
      };
    }

    /**
     * get configuration object for product details modal based on product config and modalProduct config.
     * @return {Object} configuration object.
     */

  }, {
    key: 'modalProductConfig',
    get: function get() {
      var _this11 = this;

      var modalProductStyles = void 0;
      if (this.config.product.styles) {
        modalProductStyles = merge({}, Object.keys(this.config.product.styles).reduce(function (productStyles, selectorKey) {
          productStyles[selectorKey] = whitelistedProperties(_this11.config.product.styles[selectorKey]);
          return productStyles;
        }, {}), this.config.modalProduct.styles);
      } else {
        modalProductStyles = {};
      }

      return _extends({}, this.config.modalProduct, {
        styles: modalProductStyles
      });
    }

    /**
     * get params for online store URL.
     * @return {Object}
     */

  }, {
    key: 'onlineStoreParams',
    get: function get() {
      return {
        channel: 'buy_button',
        referrer: encodeURIComponent(windowUtils.location()),
        variant: this.model.selectedVariant.id
      };
    }

    /**
     * get query string for online store URL from params
     * @return {String}
     */

  }, {
    key: 'onlineStoreQueryString',
    get: function get() {
      var _this12 = this;

      return Object.keys(this.onlineStoreParams).reduce(function (string, key) {
        return '' + string + key + '=' + _this12.onlineStoreParams[key] + '&';
      }, '?');
    }

    /**
     * get URL to open online store page for product.
     * @return {String}
     */

  }, {
    key: 'onlineStoreURL',
    get: function get() {
      var identifier = this.handle ? this.handle : this.id;
      return 'https://' + this.props.client.config.domain + '/products/' + identifier + this.onlineStoreQueryString;
    }
  }]);
  return Product;
}(Component);

var ModalView = function (_View) {
  inherits(ModalView, _View);

  function ModalView() {
    classCallCheck(this, ModalView);
    return possibleConstructorReturn(this, _View.apply(this, arguments));
  }

  ModalView.prototype.wrapTemplate = function wrapTemplate(html) {
    return '<div class="' + this.component.classes.modal.overlay + '"><div class="' + this.component.classes.modal.modal + '">' + html + '</div></div>';
  };

  /**
   * close modal.
   */


  ModalView.prototype.close = function close() {
    var _this2 = this;

    this.component.isVisible = false;
    removeClassFromElement('is-active', this.wrapper);
    removeClassFromElement('is-active', this.document.body);
    removeClassFromElement('shopify-buy-modal-is-active', document.body);
    removeClassFromElement('shopify-buy-modal-is-active', document.getElementsByTagName('html')[0]);
    if (!this.iframe) {
      removeClassFromElement('is-active', this.component.node);
      removeClassFromElement('is-block', this.component.node);
      return;
    }
    this.iframe.removeClass('is-block');
    if (this.component.props.browserFeatures.transition) {
      this.iframe.parent.addEventListener('transitionend', function () {
        _this2.iframe.removeClass('is-active');
      });
    } else {
      this.iframe.removeClass('is-active');
    }
  };

  /**
   * delegates DOM events to event listeners.
   * Adds event listener to wrapper to close modal on click.
   */


  ModalView.prototype.delegateEvents = function delegateEvents() {
    _View.prototype.delegateEvents.call(this);
    this.wrapper.addEventListener('click', this.component.closeOnBgClick.bind(this.component));
  };

  ModalView.prototype.render = function render() {
    if (!this.component.isVisible) {
      return;
    }
    _View.prototype.render.call(this);
    addClassToElement('is-active', this.document.body);
    addClassToElement('shopify-buy-modal-is-active', document.body);
    addClassToElement('shopify-buy-modal-is-active', document.getElementsByTagName('html')[0]);
    addClassToElement('is-active', this.wrapper);
    if (this.iframe) {
      this.iframe.addClass('is-active');
      this.iframe.addClass('is-block');
    } else {
      addClassToElement('is-active', this.component.node);
      addClassToElement('is-block', this.component.node);
    }
  };

  return ModalView;
}(View);

var ModalUpdater = function (_Updater) {
  inherits(ModalUpdater, _Updater);

  function ModalUpdater() {
    classCallCheck(this, ModalUpdater);
    return possibleConstructorReturn(this, _Updater.apply(this, arguments));
  }

  ModalUpdater.prototype.updateConfig = function updateConfig(config) {
    var _this2 = this;

    _Updater.prototype.updateConfig.call(this, config);
    this.component.product = new Product(this.component.productConfig, this.component.props);
    return this.component.product.init(this.component.model).then(function () {
      return _this2.component.view.resize();
    });
  };

  return ModalUpdater;
}(Updater);

/**
 * Renders product modal.
 * @extends Component.
 */

var Modal = function (_Component) {
  inherits(Modal, _Component);

  /**
   * create Modal.
   * @param {Object} config - configuration object.
   * @param {Object} props - data and utilities passed down from UI instance.
   */
  function Modal(config, props) {
    classCallCheck(this, Modal);

    var _this = possibleConstructorReturn(this, _Component.call(this, config, props));

    _this.typeKey = 'modal';
    _this.node = config.node ? config.node.appendChild(document.createElement('div')) : document.body.appendChild(document.createElement('div'));
    _this.node.className = 'shopify-buy-modal-wrapper';
    _this.product = null;
    _this.updater = new ModalUpdater(_this);
    _this.view = new ModalView(_this);
    return _this;
  }

  /**
   * get events to be bound to DOM.
   * Combines Product events with modal events.
   * @return {Object}
   */


  Modal.prototype.closeOnBgClick = function closeOnBgClick(evt) {
    if (!this.productWrapper.contains(evt.target)) {
      this.props.closeModal();
    }
  };

  /**
   * initializes component by creating model and rendering view.
   * Creates and initializes product component.
   * @param {Object} [data] - data to initialize model with.
   * @return {Promise} promise resolving to instance.
  */


  Modal.prototype.init = function init(data) {
    var _this2 = this;

    this.isVisible = true;
    return _Component.prototype.init.call(this, data).then(function () {
      _this2.productWrapper = _this2.view.wrapper.getElementsByClassName(_this2.classes.modal.modal)[0];
      _this2.product = new Product(_this2.productConfig, _this2.props);
      return _this2.product.init(_this2.model).then(function () {
        _this2.view.setFocus();
        return _this2.view.resize();
      });
    });
  };

  /**
   * close modal.
   */


  Modal.prototype.close = function close() {
    this._userEvent('closeModal');
    this.view.close();
  };

  createClass(Modal, [{
    key: 'DOMEvents',
    get: function get() {
      return _extends({}, defineProperty({}, 'click ' + this.selectors.modal.close, this.props.closeModal.bind(this)), this.options.DOMEvents);
    }

    /**
     * get configuration object for product within modal. Set product node to modal contents.
     * @return {Object}
     */

  }, {
    key: 'productConfig',
    get: function get() {
      return _extends({}, this.globalConfig, {
        node: this.productWrapper,
        options: merge({}, this.config)
      });
    }
  }]);
  return Modal;
}(Component);

var ProductSetUpdater = function (_Updater) {
  inherits(ProductSetUpdater, _Updater);

  function ProductSetUpdater() {
    classCallCheck(this, ProductSetUpdater);
    return possibleConstructorReturn(this, _Updater.apply(this, arguments));
  }

  ProductSetUpdater.prototype.updateConfig = function updateConfig(config) {
    _Updater.prototype.updateConfig.call(this, config);
    this.component.props.destroyComponent('modal');
    this.component.cart.updateConfig(config);
    this.component.renderProducts();
  };

  return ProductSetUpdater;
}(Updater);

var pollInterval$1 = 200;

var ProductSetView = function (_View) {
  inherits(ProductSetView, _View);

  function ProductSetView(component) {
    classCallCheck(this, ProductSetView);

    var _this = possibleConstructorReturn(this, _View.call(this, component));

    _this.height = 0;
    _this.resizeCompleted = false;
    return _this;
  }

  ProductSetView.prototype.wrapTemplate = function wrapTemplate(html) {
    return '<div class="' + this.component.classes.productSet.productSet + '">' + html + '</div>';
  };

  /**
   * resize iframe until it is tall enough to contain all products.
   */


  ProductSetView.prototype.resizeUntilFits = function resizeUntilFits() {
    var _this2 = this;

    if (!this.iframe || this.resizeCompleted) {
      return;
    }
    var maxResizes = this.component.products.length;
    var resizes = 0;

    this.height = this.outerHeight;
    this.resize();
    var productSetResize = setInterval(function () {
      var currentHeight = _this2.outerHeight;
      if (parseInt(currentHeight, 10) > parseInt(_this2.height, 10)) {
        resizes++;
        _this2.height = currentHeight;
        _this2.resize(currentHeight);
      }
      if (resizes > maxResizes) {
        _this2.resizeCompleted = true;
        clearInterval(productSetResize);
      }
    }, pollInterval$1);
  };

  createClass(ProductSetView, [{
    key: 'shouldResizeY',
    get: function get() {
      return true;
    }
  }]);
  return ProductSetView;
}(View);

function isArray$1(arg) {
  return Object.prototype.toString.call(arg) === '[object Array]';
}

/**
 * Renders and fetches data for collection and product set embed.
 * @extends Component.
 */

var ProductSet = function (_Component) {
  inherits(ProductSet, _Component);

  /**
   * create ProductSet
   * @param {Object} config - configuration object.
   * @param {Object} props - data and utilities passed down from UI instance.
   */
  function ProductSet(config, props) {
    classCallCheck(this, ProductSet);

    var _this = possibleConstructorReturn(this, _Component.call(this, config, props));

    _this.typeKey = 'productSet';
    _this.products = [];
    _this.cart = null;
    _this.page = 1;
    _this.nextModel = { products: [] };
    _this.updater = new ProductSetUpdater(_this);
    _this.view = new ProductSetView(_this);
    return _this;
  }

  /**
   * initializes component by creating model and rendering view.
   * Creates and initalizes cart if necessary.
   * Calls renderProducts.
   * @param {Object} [data] - data to initialize model with.
   * @return {Promise} promise resolving to instance.
   */
  ProductSet.prototype.init = function init(data) {
    var _this2 = this;

    var cartConfig = _extends({}, this.globalConfig, {
      options: this.config
    });

    return this.props.createCart(cartConfig).then(function (cart) {
      _this2.cart = cart;
      return _Component.prototype.init.call(_this2, data).then(function (model) {
        if (model) {
          return _this2.renderProducts(_this2.model.products);
        }
        return _this2;
      });
    });
  };

  /**
   * fetches products from SDK based on provided config information.
   * @param {Object} options - query options for request
   * @return {Promise} promise resolving to collection data.
   */


  ProductSet.prototype.sdkFetch = function sdkFetch() {
    var _this3 = this;

    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];


    /* eslint-disable camelcase */
    var queryOptions = _extends({}, this.fetchQuery, options);
    var method = void 0;
    if (this.id) {
      var queryKey = void 0;
      if (isArray$1(this.id)) {
        queryKey = 'product_ids';
      } else {
        queryKey = 'collection_id';
        queryOptions.sort_by = 'collection-default';
      }
      method = this.props.client.fetchQueryProducts(_extends({}, queryOptions, defineProperty({}, queryKey, this.id)));
    } else if (this.handle) {
      method = this.props.client.fetchQueryCollections({ handle: this.handle }).then(function (collections) {
        if (collections.length) {
          var collection = collections[0];
          _this3.id = collection.attrs.collection_id;
          return _this3.sdkFetch(options);
        }
        return Promise.resolve([]);
      });
    }
    return method;

    /* eslint-enable camelcase */
  };

  /**
   * call sdkFetch and set model.products to products array.
   * @throw 'Not Found' if model not returned.
   * @return {Promise} promise resolving to model data.
   */


  ProductSet.prototype.fetchData = function fetchData() {
    return this.sdkFetch().then(function (products) {
      if (products.length) {
        return {
          products: products
        };
      }
      throw new Error('Not Found');
    });
  };

  /**
   * make request to SDK for current page + 1 to determine if next page exists. Render button if next page exists.
   * @return {Promise} promise resolving when button is rendered or not.
   */


  ProductSet.prototype.showPagination = function showPagination() {
    var _this4 = this;

    return this.sdkFetch({ page: this.page + 1 }).then(function (data) {
      _this4.nextModel = { products: data };
      _this4.view.renderChild(_this4.classes.productSet.paginationButton, _this4.paginationTemplate);
      _this4.view.resize();
      return;
    });
  };

  /**
   * append next page worth of products into the DOM
   */


  ProductSet.prototype.nextPage = function nextPage() {
    this.model = this.nextModel;
    this.page = this.page + 1;
    this._userEvent('loadNextPage');
    this.renderProducts();
  };

  /**
   * render product components into productSet container. Show pagination button if necessary.
   * @return {Promise} promise resolving to instance.
   */


  ProductSet.prototype.renderProducts = function renderProducts() {
    var _this5 = this;

    if (!this.model.products.length) {
      return Promise.resolve();
    }
    var productConfig = _extends({}, this.globalConfig, {
      node: this.view.document.querySelector('.' + this.classes.productSet.products),
      options: merge({}, this.config, {
        product: {
          iframe: false,
          classes: {
            wrapper: this.classes.productSet.product
          }
        }
      })
    });

    var promises = this.model.products.map(function (productModel) {
      var product = new Product(productConfig, _this5.props);
      _this5.products.push(product);
      return product.init(productModel);
    });

    return Promise.all(promises).then(function () {
      _this5.view.resizeUntilFits();
      _this5.showPagination();
      return _this5;
    });
  };

  createClass(ProductSet, [{
    key: 'nextButtonClass',
    get: function get() {
      return this.nextModel.products.length ? 'is-active' : '';
    }

    /**
     * get data to be passed to view.
     * @return {Object} viewData object.
     */

  }, {
    key: 'viewData',
    get: function get() {
      return _extends({}, this.options.viewData, {
        classes: this.classes,
        text: this.options.text,
        nextButtonClass: this.nextButtonClass
      });
    }

    /**
     * get events to be bound to DOM.
     * @return {Object}
     */

  }, {
    key: 'DOMEvents',
    get: function get() {
      return _extends({}, defineProperty({
        click: this.props.closeCart.bind(this)
      }, 'click ' + this.selectors.productSet.paginationButton, this.nextPage.bind(this)), this.options.DOMEvents);
    }

    /**
     * get template for rendering pagination button.
     * @return {Object} Template instance
     */

  }, {
    key: 'paginationTemplate',
    get: function get() {
      this._paginationTemplate = this._paginationTemplate || new Template({ pagination: this.options.templates.pagination }, { pagination: true }, ['pagination']);
      return this._paginationTemplate;
    }
  }, {
    key: 'fetchQuery',
    get: function get() {

      /* eslint-disable camelcase */
      return {
        limit: 30,
        page: 1
      };

      /* eslint-enable camelcase */
    }

    /**
     * get info about collection or set to be sent to tracker
     * @return {Object|Array}
     */

  }, {
    key: 'trackingInfo',
    get: function get() {
      if (isArray$1(this.id)) {
        return this.model.products.map(function (product) {
          return {
            id: product.id,
            name: product.selectedVariant.title,
            price: product.selectedVariant.price,
            sku: null
          };
        });
      }
      return {
        id: this.id
      };
    }
  }]);
  return ProductSet;
}(Component);

var ENTER_KEY$1 = 13;

var ToggleView = function (_View) {
  inherits(ToggleView, _View);

  function ToggleView() {
    classCallCheck(this, ToggleView);
    return possibleConstructorReturn(this, _View.apply(this, arguments));
  }

  ToggleView.prototype.render = function render() {
    _View.prototype.render.call(this);
    if (this.component.options.sticky) {
      this.addClass('is-sticky');
    }
    if (this.isVisible) {
      this.addClass('is-active');
    } else {
      this.removeClass('is-active');
    }
    if (this.iframe) {
      this.iframe.parent.setAttribute('tabindex', 0);
      this.resize();
    }
  };

  ToggleView.prototype.delegateEvents = function delegateEvents() {
    var _this2 = this;

    _View.prototype.delegateEvents.call(this);
    if (!this.iframe) {
      return;
    }
    this.iframe.parent.addEventListener('keydown', function (evt) {
      if (evt.keyCode !== ENTER_KEY$1) {
        return;
      }
      _this2.component.props.cart.toggleVisibility(_this2.component.props.cart);
    });
  };

  ToggleView.prototype.wrapTemplate = function wrapTemplate(html) {
    return '<div class="' + this.stickyClass + ' ' + this.component.classes.toggle.toggle + '">' + html + '</div>';
  };

  ToggleView.prototype._resizeX = function _resizeX() {
    this.iframe.el.style.width = this.wrapper.clientWidth + 'px';
  };

  createClass(ToggleView, [{
    key: 'shouldResizeY',
    get: function get() {
      return true;
    }
  }, {
    key: 'shouldResizeX',
    get: function get() {
      return true;
    }
  }, {
    key: 'isVisible',
    get: function get() {
      return this.component.count > 0;
    }
  }, {
    key: 'stickyClass',
    get: function get() {
      return this.component.options.sticky ? 'is-sticky' : 'is-inline';
    }
  }, {
    key: 'outerHeight',
    get: function get() {
      return this.wrapper.clientHeight + 'px';
    }
  }]);
  return ToggleView;
}(View);

var CartToggle = function (_Component) {
  inherits(CartToggle, _Component);

  function CartToggle(config, props) {
    classCallCheck(this, CartToggle);

    var _this = possibleConstructorReturn(this, _Component.call(this, config, props));

    _this.typeKey = 'toggle';
    _this.node = config.node || _this.props.cart.node.parentNode.insertBefore(document.createElement('div'), _this.props.cart.node);
    _this.view = new ToggleView(_this);
    return _this;
  }

  CartToggle.prototype.toggleCart = function toggleCart(evt) {
    evt.stopPropagation();
    this.props.cart.toggleVisibility();
  };

  createClass(CartToggle, [{
    key: 'count',
    get: function get() {
      return this.props.cart.model.lineItems.reduce(function (acc, lineItem) {
        return acc + lineItem.quantity;
      }, 0);
    }
  }, {
    key: 'viewData',
    get: function get() {
      return _extends({}, this.options.viewData, {
        classes: this.classes,
        text: this.options.text,
        count: this.count
      });
    }
  }, {
    key: 'DOMEvents',
    get: function get() {
      return merge({}, {
        click: this.toggleCart.bind(this)
      }, this.options.DOMEvents);
    }
  }]);
  return CartToggle;
}(Component);

var CartView = function (_View) {
  inherits(CartView, _View);

  function CartView(component) {
    classCallCheck(this, CartView);

    var _this = possibleConstructorReturn(this, _View.call(this, component));

    _this.node.className = 'shopify-buy-cart-wrapper';
    return _this;
  }

  CartView.prototype.render = function render() {
    _View.prototype.render.call(this);
    if (this.component.isVisible) {
      this.addClass('is-active');
      this.addClass('is-initialized');
    } else {
      this.removeClass('is-active');
    }
  };

  CartView.prototype.wrapTemplate = function wrapTemplate(html) {
    return '<div class="' + this.component.classes.cart.cart + '">' + html + '</div>';
  };

  createClass(CartView, [{
    key: 'wrapperClass',
    get: function get() {
      return this.component.isVisible ? 'is-active' : '';
    }
  }]);
  return CartView;
}(View);

var CartUpdater = function (_Updater) {
  inherits(CartUpdater, _Updater);

  function CartUpdater() {
    classCallCheck(this, CartUpdater);
    return possibleConstructorReturn(this, _Updater.apply(this, arguments));
  }

  CartUpdater.prototype.updateConfig = function updateConfig(config) {
    _Updater.prototype.updateConfig.call(this, config);
    this.component.toggles.forEach(function (toggle) {
      return toggle.updateConfig(config);
    });
  };

  return CartUpdater;
}(Updater);

var NO_IMG_URL = '//sdks.shopifycdn.com/buy-button/latest/no-image.jpg';

/**
 * Renders and cart embed.
 * @extends Component.
 */

var Cart = function (_Component) {
  inherits(Cart, _Component);

  /**
   * create Cart.
   * @param {Object} config - configuration object.
   * @param {Object} props - data and utilities passed down from UI instance.
   */
  function Cart(config, props) {
    classCallCheck(this, Cart);

    var _this = possibleConstructorReturn(this, _Component.call(this, config, props));

    _this.addVariantToCart = _this.addVariantToCart.bind(_this);
    _this.childTemplate = new Template(_this.config.lineItem.templates, _this.config.lineItem.contents, _this.config.lineItem.order);
    _this.node = config.node || document.body.appendChild(document.createElement('div'));
    _this.isVisible = _this.options.startOpen;
    _this.checkout = new Checkout(_this.config);
    var toggles = _this.globalConfig.toggles || [{
      node: _this.node.parentNode.insertBefore(document.createElement('div'), _this.node)
    }];
    _this.toggles = toggles.map(function (toggle) {
      return new CartToggle(merge({}, config, toggle), _extends({}, _this.props, { cart: _this }));
    });
    _this.updater = new CartUpdater(_this);
    _this.view = new CartView(_this);
    return _this;
  }

  Cart.prototype.createToggles = function createToggles(config) {
    var _this2 = this;

    this.toggles = this.toggles.concat(config.toggles.map(function (toggle) {
      return new CartToggle(merge({}, config, toggle), _extends({}, _this2.props, { cart: _this2 }));
    }));
    return Promise.all(this.toggles.map(function (toggle) {
      return toggle.init({ lineItems: _this2.model.lineItems });
    }));
  };

  /**
   * get key for configuration object.
   * @return {String}
   */


  Cart.prototype.imageForLineItem = function imageForLineItem(lineItem) {
    if (!lineItem.imageVariants) {
      return lineItem.image;
    }
    return lineItem.imageVariants.filter(function (image) {
      return image.name === 'compact';
    })[0] || { src: NO_IMG_URL };
  };

  /**
   * get model data either by calling client.createCart or loading from localStorage.
   * @return {Promise} promise resolving to cart instance.
   */


  Cart.prototype.fetchData = function fetchData() {
    return this.props.client.fetchRecentCart();
  };

  /**
   * initializes component by creating model and rendering view.
   * Creates and initalizes toggle component.
   * @param {Object} [data] - data to initialize model with.
   * @return {Promise} promise resolving to instance.
   */


  Cart.prototype.init = function init(data) {
    var _this3 = this;

    return _Component.prototype.init.call(this, data).then(function (cart) {
      return _this3.toggles.map(function (toggle) {
        return toggle.init({ lineItems: cart.model.lineItems });
      });
    }).then(function () {
      return _this3;
    });
  };

  Cart.prototype.destroy = function destroy() {
    _Component.prototype.destroy.call(this);
    this.toggles.forEach(function (toggle) {
      return toggle.destroy();
    });
  };

  /**
   * closes cart
   */


  Cart.prototype.close = function close() {
    this.isVisible = false;
    this.view.render();
  };

  /**
   * opens cart
   */


  Cart.prototype.open = function open() {
    this.isVisible = true;
    this.view.render();
    this.view.setFocus();
  };

  /**
   * toggles cart visibility
   * @param {Boolean} visible - desired state.
   */


  Cart.prototype.toggleVisibility = function toggleVisibility(visible) {
    this.isVisible = visible || !this.isVisible;
    this.view.render();
    if (this.isVisible) {
      this.view.setFocus();
    }
  };

  Cart.prototype.onQuantityBlur = function onQuantityBlur(evt, target) {
    this.setQuantity(target, function () {
      return parseInt(target.value, 10);
    });
  };

  Cart.prototype.onQuantityIncrement = function onQuantityIncrement(qty, evt, target) {
    this.setQuantity(target, function (prevQty) {
      return prevQty + qty;
    });
  };

  Cart.prototype.onCheckout = function onCheckout() {
    this.checkout.open(this.model.checkoutUrl);
  };

  /**
   * set quantity for a line item.
   * @param {Object} target - DOM node of line item
   * @param {Function} fn - function to return new quantity given currrent quantity.
   */


  Cart.prototype.setQuantity = function setQuantity(target, fn) {
    var id = target.getAttribute('data-line-item-id');
    var item = this.model.lineItems.filter(function (lineItem) {
      return lineItem.id === id;
    })[0];
    var newQty = fn(item.quantity);
    return this.props.tracker.trackMethod(this.updateItem.bind(this), 'Update Cart', this.cartItemTrackingInfo(item, newQty))(id, newQty);
  };

  /**
   * update line item.
   * @param {Number} id - lineItem id.
   * @param {Number} qty - quantity for line item.
   */


  Cart.prototype.updateItem = function updateItem(id, qty) {
    var _this4 = this;

    this._userEvent('updateItemQuantity');
    return this.model.updateLineItem(id, qty).then(function (cart) {
      _this4.model = cart;
      _this4.toggles.forEach(function (toggle) {
        return toggle.view.render();
      });
      if (qty > 0) {
        _this4.view.render();
      } else {
        _this4.view.animateRemoveNode(id);
      }
      return cart;
    });
  };

  /**
   * add variant to cart.
   * @param {Object} variant - variant object.
   * @param {Number} [quantity=1] - quantity to be added.
   */


  Cart.prototype.addVariantToCart = function addVariantToCart(variant) {
    var _this5 = this;

    var quantity = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

    if (quantity <= 0) {
      return null;
    }
    this.open();
    return this.model.createLineItemsFromVariants({ variant: variant, quantity: quantity }).then(function (cart) {
      _this5.view.render();
      _this5.toggles.forEach(function (toggle) {
        return toggle.view.render();
      });
      _this5.view.setFocus();
      return cart;
    });
  };

  /**
   * Remove all lineItems in the cart
   */


  Cart.prototype.empty = function empty() {
    var _this6 = this;

    return this.model.clearLineItems().then(function () {
      _this6.view.render();
      _this6.toggles.forEach(function (toggle) {
        return toggle.view.render();
      });
      return;
    });
  };

  /**
   * get info about line item to be sent to tracker
   * @return {Object}
   */


  Cart.prototype.cartItemTrackingInfo = function cartItemTrackingInfo(item, quantity) {
    return {
      id: item.variant_id,
      name: item.title,
      sku: null,
      price: item.price,
      prevQuantity: item.quantity,
      quantity: parseFloat(quantity)
    };
  };

  createClass(Cart, [{
    key: 'typeKey',
    get: function get() {
      return 'cart';
    }

    /**
     * get events to be bound to DOM.
     * @return {Object}
     */

  }, {
    key: 'DOMEvents',
    get: function get() {
      var _merge;

      return merge({}, (_merge = {}, defineProperty(_merge, 'click ' + this.selectors.cart.close, this.props.closeCart.bind(this)), defineProperty(_merge, 'click ' + this.selectors.lineItem.quantityIncrement, this.onQuantityIncrement.bind(this, 1)), defineProperty(_merge, 'click ' + this.selectors.lineItem.quantityDecrement, this.onQuantityIncrement.bind(this, -1)), defineProperty(_merge, 'click ' + this.selectors.cart.button, this.onCheckout.bind(this)), defineProperty(_merge, 'blur ' + this.selectors.lineItem.quantityInput, this.onQuantityBlur.bind(this)), _merge), this.options.DOMEvents);
    }

    /**
     * get HTML for cart line items.
     * @return {String} HTML
     */

  }, {
    key: 'lineItemsHtml',
    get: function get() {
      var _this7 = this;

      return this.model.lineItems.reduce(function (acc, lineItem) {
        var data = merge(lineItem, _this7.options.viewData);
        data.classes = _this7.classes;
        data.lineItemImage = _this7.imageForLineItem(data);
        data.variantTitle = data.variant_title === 'Default Title' ? '' : data.variant_title;
        data.formattedPrice = formatMoney(data.line_price, _this7.globalConfig.moneyFormat);
        return acc + _this7.childTemplate.render({ data: data }, function (output) {
          return '<div id="' + lineItem.id + '" class=' + _this7.classes.lineItem.lineItem + '>' + output + '</div>';
        });
      }, '');
    }

    /**
     * get data to be passed to view.
     * @return {Object} viewData object.
     */

  }, {
    key: 'viewData',
    get: function get() {
      return merge(this.model, this.options.viewData, {
        text: this.options.text,
        classes: this.classes,
        lineItemsHtml: this.lineItemsHtml,
        isEmpty: this.isEmpty,
        formattedTotal: this.formattedTotal
      });
    }

    /**
     * get formatted cart subtotal based on moneyFormat
     * @return {String}
     */

  }, {
    key: 'formattedTotal',
    get: function get() {
      return formatMoney(this.model.subtotal, this.globalConfig.moneyFormat);
    }

    /**
     * whether cart is empty
     * @return {Boolean}
     */

  }, {
    key: 'isEmpty',
    get: function get() {
      return this.model.lineItems.length < 1;
    }
  }, {
    key: 'wrapperClass',
    get: function get() {
      return this.isVisible ? 'is-active' : '';
    }
  }]);
  return Cart;
}(Component);

var Tracker = function () {
  function Tracker(lib, clientConfig) {
    classCallCheck(this, Tracker);

    this.lib = lib || null;
    this.clientConfig = clientConfig;
  }

  Tracker.prototype.trackMethod = function trackMethod(fn, event, properties) {
    var self = this;
    return function () {
      var returnValue = fn.apply(undefined, arguments);
      if (returnValue && returnValue.then) {
        return returnValue.then(function (val) {
          self.callLib(event, properties);
          return val;
        });
      }
      self.callLib(event, properties);
      return returnValue;
    };
  };

  Tracker.prototype.callLib = function callLib(eventName, properties) {
    switch (eventName) {
      case 'Update Cart':
        if (properties.quantity < 1) {
          return this.track('Removed Product', properties);
        }
        if (properties.prevQuantity && properties.quantity < properties.prevQuantity) {
          return;
        }
        this.track('Added Product', properties);
      default:
        return this.track(eventName, properties);
    }
  };

  Tracker.prototype.trackPageview = function trackPageview() {
    if (this.lib && this.lib.page) {
      this.lib.page();
    }
  };

  Tracker.prototype.trackComponent = function trackComponent(type, properties) {
    switch (type) {
      case 'product':
        return this.track('Viewed Product', properties);
      case 'collection':
        return this.track('Viewed Product Category', properties);
    }
  };

  Tracker.prototype.track = function track(eventName, properties) {
    properties.pageurl = document.location.href;
    properties.referrer = document.referrer;
    properties.subdomain = this.clientConfig.domain;
    if (this.lib && this.lib.track) {
      this.lib.track(eventName, properties);
    }
  };

  return Tracker;
}();

var hostStyles = ".shopify-buy-modal-is-active {\n  height: 100%;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n.shopify-buy-frame {\n  display: inline-block\n}\n\n.shopify-buy-frame iframe {\n  width: 100%;\n  display: block;\n  height: 0;\n  overflow: hidden;\n}\n\n.shopify-buy-frame--cart {\n  width: 100%;\n  max-width: 350px;\n  position: fixed;\n  top: 0;\n  right: 0;\n  height: 100%;\n  z-index: 2147483647;\n  transform: translateX(100%);\n  -webkit-transform: translateX(100%)\n}\n\n.shopify-buy-frame--cart iframe {\n  height: 100%;\n}\n\n.shopify-buy-frame--cart.is-initialized {\n  -webkit-transition: all 250ms cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition: all 250ms cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n\n.shopify-buy-frame--cart.is-active {\n  transform: translateX(0);\n  -webkit-transform: translateX(0);\n}\n\n.shopify-buy-frame--product {\n  display: block\n}\n\n.shopify-buy-frame--product.shopify-buy__layout-horizontal {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.shopify-buy-frame--product.shopify-buy__layout-horizontal iframe {\n  max-width: 100%;\n}\n\n@media (min-width: 950px) {\n\n  .shopify-buy-frame--product.shopify-buy__layout-horizontal iframe {\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n\n.shopify-buy-frame--toggle {\n  display: inline-block\n}\n\n.shopify-buy-frame--toggle:not(.is-sticky) {\n  overflow: hidden;\n  padding: 5px;\n}\n\n.shopify-buy-frame--toggle.is-sticky {\n  display: none;\n  position: fixed;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  -webkit-transform: translateY(-50%);\n  z-index: 2147483645;\n}\n\n.shopify-buy-frame--toggle.is-active.is-sticky {\n  display: block;\n}\n\n.is-active {\n}\n\n.is-active .shopify-buy-frame--toggle {\n}\n\n.is-active .shopify-buy-frame--toggle iframe {\n  min-height: 67px;\n}\n\n.shopify-buy-frame--productSet {\n  width: 100%;\n}\n\n.shopify-buy-frame--modal {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 2147483646;\n  display: none;\n  -webkit-transition: background 300ms ease;\n  transition: background 300ms ease\n}\n\n.shopify-buy-frame--modal iframe {\n  height: 100%;\n  width: 100%;\n  max-width: none;\n}\n\n.shopify-buy-frame--modal.is-active {\n  background: rgba(0, 0, 0, .6);\n}\n\n.shopify-buy-frame--modal.is-block {\n  display: block;\n}\n";

var conditionalStyles$1 = ".shopify-buy-frame--cart {\n  display: none\n}\n.shopify-buy-frame--cart.is-active {\n  display: block\n}\n";

var frameUtils = {};

var lastTime = 0;
var vendors = ['ms', 'moz', 'webkit', 'o'];
if (window.requestAnimationFrame && window.cancelAnimationFrame) {
  frameUtils.requestAnimationFrame = window.requestAnimationFrame;
  frameUtils.cancelAnimationFrame = window.cancelAnimationFrame;
} else {
  for (var x = 0; x < vendors.length && !frameUtils.requestAnimationFrame; ++x) {
    frameUtils.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    frameUtils.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!frameUtils.requestAnimationFrame) frameUtils.requestAnimationFrame = function (callback, element) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = window.setTimeout(function () {
      callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };

  if (!frameUtils.cancelAnimationFrame) frameUtils.cancelAnimationFrame = function (id) {
    clearTimeout(id);
  };
}

function CustomEvent(event, params) {
  params = params || { bubbles: false, cancelable: false, detail: undefined };
  var evt = document.createEvent('CustomEvent');
  evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
  return evt;
}

CustomEvent.prototype = window.Event.prototype;

var throttle = function throttle(type, name, obj) {
  obj = obj || window;
  var running = false;
  var func = function func() {
    if (running) {
      return;
    }
    running = true;
    frameUtils.requestAnimationFrame.call(window, function () {
      obj.dispatchEvent(new CustomEvent(name));
      running = false;
    });
  };
  obj.addEventListener(type, func);
};

function detectCSSFeature(featurename) {
  var feature = false,
      domPrefixes = 'Webkit Moz ms O'.split(' '),
      elm = document.createElement('div'),
      featurenameCapital = null;

  featurename = featurename.toLowerCase();

  if (elm.style[featurename] !== undefined) {
    feature = true;
  }

  if (feature === false) {
    featurenameCapital = featurename.charAt(0).toUpperCase() + featurename.substr(1);
    for (var i = 0; i < domPrefixes.length; i++) {
      if (elm.style[domPrefixes[i] + featurenameCapital] !== undefined) {
        feature = true;
        break;
      }
    }
  }
  return feature;
}

var supportsAnimations = function supportsAnimations() {
  return detectCSSFeature('animation');
};

var supportsTransitions = function supportsTransitions() {
  return detectCSSFeature('transition');
};

var supportsTransforms = function supportsTransforms() {
  return detectCSSFeature('transform');
};

var browserFeatures = {
  animation: supportsAnimations(),
  transition: supportsTransitions(),
  transform: supportsTransforms()
};

var DATA_ATTRIBUTE = 'data-shopify-buy-ui';
var ESC_KEY = 27;

/** Initializes and coordinates components. */

var UI = function () {

  /**
   * create a UI instance
   * @param {Object} client - Instance of ShopifyBuy Client
   * @param {Object} integrations - optional tracker and logger integrations
   * @param {String} styleOverrides - additional CSS to be added to _host_ style tag
   */
  function UI(client) {
    var integrations = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    var styleOverrides = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];
    classCallCheck(this, UI);

    this.client = client;
    this.iframeComponents = [];
    this.components = {
      product: [],
      cart: [],
      collection: [],
      productSet: [],
      modal: [],
      toggle: []
    };
    this.componentTypes = {
      product: Product,
      cart: Cart,
      collection: ProductSet,
      productSet: ProductSet,
      toggle: CartToggle
    };
    this.errorReporter = integrations.errorReporter;
    this.tracker = new Tracker(integrations.tracker, this.client.config);
    this.styleOverrides = styleOverrides;
    this.tracker.trackPageview();
    this.activeEl = null;
    this._appendStyleTag();
    this._bindResize();
    this._bindHostClick();
    this._bindEsc(window);
    this._bindPostMessage();
  }

  /**
   * create a component of a type.
   * @param {String} type - one of 'product', 'productSet', 'collection', 'cart'.
   * @param {Object} config - configuration object
   * @return {Promise} resolves to instance of newly created component.
   */


  UI.prototype.createComponent = function createComponent(type, config) {
    var _this = this;
    //console.log(config);
    config.node = config.node || this._queryEntryNode();
    var component = new this.componentTypes[type](config, this.componentProps);
    if (component.iframe) {
      this._bindEsc(component.iframe.el.contentWindow || component.iframe.el);
    }
    this.components[type].push(component);
    return component.init().then(function () {
      _this.trackComponent(type, component);
      return component;
    }).catch(function (error) {
      if (_this.errorReporter) {
        _this.errorReporter.notifyException(error);
      }

      // eslint-disable-next-line
      console.error(error);
    });
  };

  UI.prototype.trackComponent = function trackComponent(type, component) {
    var _this2 = this;

    if (type === 'productSet') {
      component.trackingInfo.forEach(function (product) {
        _this2.tracker.trackComponent('product', product);
      });
    } else {
      this.tracker.trackComponent(type, component.trackingInfo);
    }
  };

  /**
   * destroy a component
   * @param {String} type - one of 'product', 'productSet', 'collection', 'cart'.
   * @param {Number} id - ID of the component's model.
   */


  UI.prototype.destroyComponent = function destroyComponent(type, id) {
    var _this3 = this;

    this.components[type].forEach(function (component, index) {
      if (id && !component.model.id === id) {
        return;
      }
      _this3.components[type][index].destroy();
      _this3.components[type].splice(index, 1);
    });
  };

  /**
   * create a cart object to be shared between components.
   * @param {Object} config - configuration object.
   * @return {Promise} a promise which resolves once the cart has been initialized.
   */


  UI.prototype.createCart = function createCart(config) {
    var _this4 = this;

    if (this.components.cart.length) {
      if (config.toggles && config.toggles.length > this.components.cart[0].toggles.length) {
        return this.components.cart[0].createToggles(config).then(function () {
          return _this4.components.cart[0];
        });
      }
      return Promise.resolve(this.components.cart[0]);
    } else {
      var cart = new Cart(config, this.componentProps);
      this.components.cart.push(cart);
      return cart.init();
    }
  };

  /**
   * close any cart.
   */


  UI.prototype.closeCart = function closeCart() {
    var _this5 = this;

    if (!this.components.cart.length) {
      return;
    }
    this.components.cart.forEach(function (cart) {
      if (!cart.isVisible) {
        return;
      }
      cart.close();
      _this5.restoreFocus();
    });
  };

  /**
   * open any cart.
   */


  UI.prototype.openCart = function openCart() {
    if (this.components.cart.length) {
      this.components.cart.forEach(function (cart) {
        cart.open();
      });
    }
  };

  /**
   * toggle visibility of cart.
   * @param {Boolean} [visibility] - desired state of cart.
   */


  UI.prototype.toggleCart = function toggleCart(visibility) {
    if (this.components.cart.length) {
      this.components.cart.forEach(function (cart) {
        cart.toggleVisibility(visibility);
      });
    }
    if (!visibility) {
      this.restoreFocus();
    }
  };

  /**
   * create a modal object to be shared between components.
   * @param {Object} config - configuration object.
   * @return {Modal} a Modal instance.
   */


  UI.prototype.createModal = function createModal(config) {
    if (this.components.modal.length) {
      return this.components.modal[0];
    } else {
      var modal = new Modal(config, this.componentProps);
      this.components.modal.push(modal);
      return modal;
    }
  };

  UI.prototype.setActiveEl = function setActiveEl(el) {
    this.activeEl = el;
  };

  /**
   * close any modals.
   */


  UI.prototype.closeModal = function closeModal() {
    if (!this.components.modal.length) {
      return;
    }
    this.components.modal.forEach(function (modal) {
      return modal.close();
    });
    this.restoreFocus();
  };

  UI.prototype.restoreFocus = function restoreFocus() {
    if (this.activeEl && !this.modalOpen && !this.cartOpen) {
      this.activeEl.focus();
    }
  };

  /**
   * get properties to be passed to any component.
   * @return {Object} props object.
   */


  UI.prototype._queryEntryNode = function _queryEntryNode() {
    this.entry = this.entry || window.document.querySelectorAll('script[' + DATA_ATTRIBUTE + ']')[0];

    var div = document.createElement('div');

    if (this.entry) {
      var parentNode = this.entry.parentNode;
      if (parentNode.tagName === 'HEAD' || parentNode.tagName === 'HTML') {
        this._appendToBody(div);
      } else {
        this.entry.removeAttribute(DATA_ATTRIBUTE);
        parentNode.insertBefore(div, this.entry);
      }
    } else {
      this._appendToBody(div);
    }
    return div;
  };

  UI.prototype._appendToBody = function _appendToBody(el) {
    if (!document.body) {
      document.body = document.createElement('body');
    }
    document.body.appendChild(el);
  };

  UI.prototype._appendStyleTag = function _appendStyleTag() {
    var styleTag = document.createElement('style');
    if (styleTag.styleSheet) {
      styleTag.styleSheet.cssText = this.styleText;
    } else {
      styleTag.appendChild(document.createTextNode(this.styleText));
    }
    document.head.appendChild(styleTag);
  };

  UI.prototype._bindHostClick = function _bindHostClick() {
    var _this6 = this;

    document.addEventListener('click', function (evt) {
      if (_this6.components.cart.length < 1) {
        return;
      }
      var cartNode = _this6.components.cart[0].node;
      if (evt.target === cartNode || cartNode.contains(evt.target)) {
        return;
      }
      _this6.closeCart();
    });
  };

  UI.prototype._bindResize = function _bindResize() {
    var _this7 = this;

    throttle('resize', 'safeResize');
    window.addEventListener('safeResize', function () {
      _this7.components.collection.forEach(function (collection) {
        return collection.view.resize();
      });
      _this7.components.productSet.forEach(function (set) {
        return set.view.resize();
      });
      _this7.components.product.forEach(function (product) {
        return product.view.resize();
      });
    });
  };

  UI.prototype._bindEsc = function _bindEsc(context) {
    var _this8 = this;

    context.addEventListener('keydown', function (evt) {
      if (evt.keyCode !== ESC_KEY) {
        return;
      }
      _this8.closeModal();
      _this8.closeCart();
    });
  };

  UI.prototype._bindPostMessage = function _bindPostMessage() {
    var _this9 = this;

    window.addEventListener('message', function (msg) {
      var data = void 0;
      try {
        data = JSON.parse(msg.data);
      } catch (err) {
        data = {};
      }
      if (data.syncCart || data.current_checkout_page && data.current_checkout_page === '/checkout/thank_you') {
        _this9.components.cart.forEach(function (cart) {
          cart.empty();
        });
      }
    });
  };

  createClass(UI, [{
    key: 'modalOpen',
    get: function get() {
      return this.components.modal.reduce(function (isOpen, modal) {
        return isOpen || modal.isVisible;
      }, false);
    }
  }, {
    key: 'cartOpen',
    get: function get() {
      return this.components.cart.reduce(function (isOpen, cart) {
        return isOpen || cart.isVisible;
      }, false);
    }
  }, {
    key: 'componentProps',
    get: function get() {
      return {
        client: this.client,
        createCart: this.createCart.bind(this),
        closeCart: this.closeCart.bind(this),
        toggleCart: this.toggleCart.bind(this),
        createModal: this.createModal.bind(this),
        closeModal: this.closeModal.bind(this),
        setActiveEl: this.setActiveEl.bind(this),
        destroyComponent: this.destroyComponent.bind(this),
        tracker: this.tracker,
        errorReporter: this.errorReporter,
        browserFeatures: browserFeatures
      };
    }

    /**
     * get string of CSS to be inserted into host style tag.
     */

  }, {
    key: 'styleText',
    get: function get() {
      if (browserFeatures.transition && browserFeatures.transform && browserFeatures.animation) {
        return hostStyles + this.styleOverrides;
      }
      return hostStyles + conditionalStyles$1 + this.styleOverrides;
    }
  }]);
  return UI;
}();

window.ShopifyBuy = window.ShopifyBuy || ShopifyBuy$1;

ShopifyBuy$1.UI = window.ShopifyBuy.UI || {
  domains: {},

  init: function init(client) {
    var integrations = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    var styleOverrides = arguments[2];

    var domain = client.config.domain;
    if (!this.domains[domain]) {
      this.domains[domain] = new UI(client, integrations, styleOverrides);
    }
    return this.domains[domain];
  },


  adapterHelpers: {
    templates: {
      product: productTemplate
    }
  }
};

var buybutton_cjs = ShopifyBuy$1;

var Integration = (function () {
    function Integration(defaultOptions, options) {
        this.options = {};
        this.options = Integration.merge(defaultOptions, options);
    }
    Integration.merge = function (base, other) {
        var r = {};
        for (var key in base) {
            r[key] = base[key];
        }
        for (var key in other) {
            r[key] = other[key];
        }
        return r;
    };
    Integration.flatten = function (arg) {
        var copy = Integration.merge(arg, {});
        copy.properties = {};
        return Integration.merge(copy, arg.properties);
    };
    return Integration;
}());
var Integration_1 = Integration;

var integration = {
	Integration: Integration_1
};

var request = createCommonjsModule$1(function (module, exports) {
"use strict";
// Nginx load balancers have endpoints structured as
// https://v.shopify.com/{appName}/{requestType}
exports.base = 'https://v.shopify.com/';
function queryString(obj) {
    var res = [];
    for (var key in obj) {
        if ((typeof obj[key] !== 'number') && !obj[key]) {
            continue;
        }
        if ((typeof obj[key] === 'object') && Object.keys(obj[key]).length === 0) {
            continue;
        }
        res.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
    return res.join('&');
}
exports.queryString = queryString;
// Did not move this to tag.ts because the additional overhead of bundling
// it into the base distribution was 0.5kB whereas this only adds 0.05kB
function img(src) {
    var img = new Image(1, 1);
    img.src = src;
    img.style.display = 'none';
    return img;
}
exports.img = img;
function load(appName, requestType, args) {
    return img(exports.base + appName + '/' + requestType + '?' + queryString(args));
}
exports.load = load;
function internalError(e) {
    return load('internal_errors', 'page', {
        name: e.name,
        line: (e.lineNumber || e.line),
        script: (e.fileName || e.sourceURL || e.script),
        stack: (e.stackTrace || e.stack),
        message: e.message,
        url: window.location
    });
}
exports.internalError = internalError;
});

var cookie = createCommonjsModule$1(function (module, exports) {
"use strict";
var shortTermLength = 1000 * 60 * 30; // 30 min expiry
var longTermLength = 1000 * 60 * 60 * 24 * 360 * 2; // ~2 year expiry
var shopify = 'shopify';
var shopifyDomain = '.shopify.com';
var myShopifyDomain = '.myshopify.com';
exports.cookie = {
    parse: function (str) {
        var obj = {};
        for (var _i = 0, _a = str.split(/ *; */); _i < _a.length; _i++) {
            var pair = _a[_i];
            var split = pair.split('=');
            obj[decodeURIComponent(split[0])] = decodeURIComponent(split[1]);
        }
        return obj;
    },
    read: function (name) {
        return exports.cookie.parse(document.cookie)[name];
    },
    write: function (name, value, options) {
        if (options === void 0) { options = {}; }
        var str = encodeURIComponent(name) + '=' + encodeURIComponent(value);
        if (options.maxage) {
            options.expires = new Date(Date.now() + options.maxage);
        }
        if (options.path) {
            str += '; path=' + options.path;
        }
        if (options.domain) {
            str += '; domain=' + options.domain;
        }
        if (options.expires) {
            str += '; expires=' + options.expires.toUTCString();
        }
        if (options.secure) {
            str += '; secure';
        }
        document.cookie = str;
        return str; // for testing domain, path, etc
    },
    clear: function (name, options) {
        if (options === void 0) { options = {}; }
        options.maxage = -1;
        return exports.cookie.write(name, '', options);
    }
};
function read(key) {
    return exports.cookie.read(key);
}
exports.read = read;
function write(key, val, opts) {
    if (opts === void 0) { opts = {}; }
    if (!isEnabled()) {
        return;
    }
    writeForDomain(key, val, opts.permanent, shopifyCookieDomain(window.location.hostname));
    writeForDomain(key, val, opts.permanent, myShopifyDomain);
    writeForDomain(key, val, opts.permanent, opts.domain);
    // This is needed for edge cases in older browsers where explicitly setting
    // domain to window.location.hostname doesn't work. This was breaking tests
    // on Chrome 44 / Win 8
    writeForDomain(key, val, opts.permanent, '');
}
exports.write = write;
function isEnabled() {
    return window.navigator.cookieEnabled;
}
exports.isEnabled = isEnabled;
function shopifyCookieDomain(hostname) {
    var indexShopifyString = hostname.indexOf(shopify);
    if (indexShopifyString === 0) {
        return '.' + hostname;
    }
    else if (indexShopifyString > 0) {
        return hostname.slice(indexShopifyString - 1);
    }
    else {
        return shopifyDomain;
    }
}
exports.shopifyCookieDomain = shopifyCookieDomain;
function writeForDomain(key, val, permanent, domain) {
    var opts = {
        maxage: permanent ? longTermLength : shortTermLength,
        domain: domain,
        path: '/'
    };
    exports.cookie.write(key, val, opts);
}
});

var token$1 = createCommonjsModule$1(function (module, exports) {
"use strict";
var cookie$$1 = cookie;
exports.deprecatedShortTermKey = '_s';
exports.shortTermKey = '_shopify_s';
exports.deprecatedLongTermKey = '_y';
exports.longTermKey = '_shopify_y';
exports.firstSeenKey = '_shopify_fs';
var tokenHash = 'xxxxxxxx-xxxx-4xxx-xxxx';
var uniqueIdManager = {
    fetch: function (key) {
        return cookie$$1.read(key);
    },
    fetchOrSet: function (permanent) {
        var deprecatedKey = permanent ? exports.deprecatedLongTermKey : exports.deprecatedShortTermKey;
        var key = permanent ? exports.longTermKey : exports.shortTermKey;
        var token = uniqueIdManager.fetch(deprecatedKey) ||
            uniqueIdManager.fetch(key) ||
            uniqueIdManager.build();
        var opts = { permanent: permanent };
        cookie$$1.write(deprecatedKey, token, opts);
        cookie$$1.write(key, token, opts);
        return token;
    },
    build: function () {
        if (!cookie$$1.isEnabled()) {
            return '00000000-0000-0000-4000-000000000000';
        }
        try {
            var crypto_1 = window.crypto || window['msCrypto'];
            var randomValuesArray_1 = new Uint16Array(19);
            crypto_1.getRandomValues(randomValuesArray_1);
            // Generate a strong UUID
            var i_1 = 0;
            return tokenHash.replace(/[x]/g, function (c) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                var r = randomValuesArray_1[i_1] % 16;
                var v = c === 'x' ? r : (r & 0x3 | 0x8);
                i_1++;
                return v.toString(16);
            }).toUpperCase();
        }
        catch (err) {
            // crypto not available, generate weak UUID
            return tokenHash.replace(/[x]/g, function (c) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                var r = Math.random() * 16 | 0;
                var v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            }).toUpperCase();
        }
    }
};
var firstSeenManager = {
    fetch: function () {
        return cookie$$1.read(exports.firstSeenKey);
    },
    fetchOrSet: function () {
        var token = firstSeenManager.fetch() || (new Date()).toISOString();
        var opts = { permanent: true };
        cookie$$1.write(exports.firstSeenKey, token, opts);
        return token;
    }
};
function hasShortTerm() {
    return (!!cookie$$1.read(exports.shortTermKey) || !!cookie$$1.read(exports.deprecatedShortTermKey));
}
exports.hasShortTerm = hasShortTerm;
function hasLongTerm() {
    return (!!cookie$$1.read(exports.longTermKey) || !!cookie$$1.read(exports.deprecatedLongTermKey));
}
exports.hasLongTerm = hasLongTerm;
function shortTerm() {
    return uniqueIdManager.fetchOrSet(false);
}
exports.shortTerm = shortTerm;
function longTerm() {
    return uniqueIdManager.fetchOrSet(true);
}
exports.longTerm = longTerm;
function buildToken() {
    return uniqueIdManager.build();
}
exports.buildToken = buildToken;
function firstSeen() {
    return firstSeenManager.fetchOrSet();
}
exports.firstSeen = firstSeen;
});

var __extends = (commonjsGlobal$1 && commonjsGlobal$1.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var integration_1$1 = integration;
var request_1$1 = request;
var token = token$1;
var Trekkie = (function (_super) {
    __extends(Trekkie, _super);
    function Trekkie(options, ready) {
        _super.call(this, {}, options);
        this.defaultAttributes = {
            appName: options.appName,
            hasUniqCookie: token.hasLongTerm() ? 1 : 0,
            hasVisitCookie: token.hasShortTerm() ? 1 : 0,
            uniqToken: token.longTerm(),
            visitToken: token.shortTerm(),
            microSessionId: token.buildToken(),
            microSessionCount: 0,
            firstSeen: token.firstSeen()
        };
        if (options.defaultAttributes) {
            this.defaultAttributes = integration_1$1.Integration.merge(options.defaultAttributes, this.defaultAttributes);
        }
        ready();
    }
    Trekkie.prototype.identify = function (identify) {
        this.emit('identify', identify);
    };
    Trekkie.prototype.page = function (page) {
        this.emit('page', page);
    };
    Trekkie.prototype.track = function (track) {
        this.emit('track', track);
    };
    Trekkie.prototype.emit = function (requestType, args) {
        ++this.defaultAttributes.microSessionCount;
        args = integration_1$1.Integration.flatten(args);
        args['eventType'] = requestType;
        request_1$1.load(this.defaultAttributes.appName, requestType, integration_1$1.Integration.merge(args, this.defaultAttributes));
    };
    return Trekkie;
}(integration_1$1.Integration));
var Trekkie_1 = Trekkie;

var trekkie = {
	Trekkie: Trekkie_1
};

var trekkie_1 = trekkie;
var exportVar = 'analytics';
var trekkieClass = trekkie_1.Trekkie;
var enabledIntegrations = [];
// DO NOT edit this file by hand, it is auto-generated by the build system.

var config = {
	exportVar: exportVar,
	trekkieClass: trekkieClass,
	enabledIntegrations: enabledIntegrations
};

var integration_1 = integration;
var config_1 = config;
var request_1 = request;
var Tricorder = (function () {
    function Tricorder(config$$1, ready) {
        this.integrations = [];
        // The Trekkie integration is always enabled.
        var integrationCount = 1 + config_1.enabledIntegrations.length;
        var readyFunc = this.waitFor(integrationCount, function () {
            try {
                ready();
            }
            catch (e) {
                request_1.internalError(e);
            }
        });
        this.trekkie = new config_1.trekkieClass(config$$1.Trekkie, readyFunc);
        this.integrations.push(this.trekkie);
        for (var _i = 0, enabledIntegrations_1 = config_1.enabledIntegrations; _i < enabledIntegrations_1.length; _i++) {
            var t = enabledIntegrations_1[_i];
            var options = config$$1[t[0]];
            var classRef = t[1];
            // only activate integrations whose config is present
            if (options && typeof options === 'object') {
                this.integrations.push(new classRef(options, this.trekkie, readyFunc));
            }
            else {
                // readyFunc blocks until it is called integrationCount times, but if
                // an integration's config key isn't present, call readyFunc on its
                // behalf because it won't be initialized.
                readyFunc();
            }
        }
    }
    // Because trekkie currently supports an args Object as the first argument,
    // shuffle arguments to support both signatures
    // identify(args: Object)
    // identify(id: string, args: Object)
    Tricorder.prototype.identify = function (id, args) {
        if (id === void 0) { id = ''; }
        if (args === void 0) { args = {}; }
        try {
            if (id instanceof Object) {
                args = id, id = '';
            }
            for (var _i = 0, _a = this.integrations; _i < _a.length; _i++) {
                var i = _a[_i];
                i.identify({ id: id, properties: args });
            }
        }
        catch (e) {
            request_1.internalError(e);
        }
    };
    // Support both signatures
    // page(args: Object)
    // page(name: string, args: Object)
    Tricorder.prototype.page = function (name, args) {
        if (name === void 0) { name = ''; }
        if (args === void 0) { args = {}; }
        try {
            if (name instanceof Object) {
                args = name, name = '';
            }
            var page = this.pageDefaults();
            page.name = name;
            page.properties = integration_1.Integration.merge(page.properties, args);
            for (var _i = 0, _a = this.integrations; _i < _a.length; _i++) {
                var i = _a[_i];
                i.page(page);
            }
        }
        catch (e) {
            request_1.internalError(e);
        }
    };
    // Support both signatures
    // track(args: Object)
    // track(event: string, args: Object)
    Tricorder.prototype.track = function (event, args) {
        if (event === void 0) { event = ''; }
        if (args === void 0) { args = {}; }
        try {
            if (event instanceof Object) {
                args = event, event = '';
            }
            for (var _i = 0, _a = this.integrations; _i < _a.length; _i++) {
                var i = _a[_i];
                i.track({ event: event, properties: args });
            }
        }
        catch (e) {
            request_1.internalError(e);
        }
    };
    // analytics.js actually supports an array of form elements apart from a
    // single one, but in production it is only used on single element so just
    // target that case.
    Tricorder.prototype.trackForm = function (form, event, args) {
        var _this = this;
        if (event === void 0) { event = ''; }
        if (args === void 0) { args = {}; }
        try {
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                _this.track(event, args);
                setTimeout(function () {
                    try {
                        form.submit();
                    }
                    catch (e) {
                        request_1.internalError(e);
                    }
                }, 0);
            });
        }
        catch (e) {
            request_1.internalError(e);
        }
    };
    Tricorder.prototype.trackLink = function (link, event, args) {
        var _this = this;
        if (event === void 0) { event = ''; }
        if (args === void 0) { args = {}; }
        try {
            link.addEventListener('click', function (e) {
                var href = link.getAttribute('href')
                    || link.getAttributeNS('http://www.w3.org/1999/xlink', 'href')
                    || link.getAttribute('xlink:href');
                _this.track(event, args);
                if (href && link.target !== '_blank' && !_this.isMeta(e)) {
                    e.preventDefault();
                    setTimeout(function () {
                        _this.setLocation(href);
                    }, 0);
                }
            });
        }
        catch (e) {
            request_1.internalError(e);
        }
    };

    Tricorder.prototype.isMeta = function (e) {
        if (e instanceof KeyboardEvent && (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)) {
            return true;
        }
        // Logic that handles checks for the middle mouse button, based
        // on [jQuery](https://github.com/jquery/jquery/blob/master/src/event.js#L466)
        if (e instanceof MouseEvent) {
            var which = e.which;
            var button = e.button;
            if (!which && button !== undefined) {
                return button === 1 || button === 2;
            }
            else if (which === 2) {
                return true;
            }
        }
        return false;
    };
    Tricorder.prototype.setLocation = function (href) {
        window.location.href = href;
    };
    Tricorder.prototype.ready = function (handler) {
        setTimeout(handler, 0);
    };
    Tricorder.prototype.waitFor = function (integrationCount, ready) {
        return function () {
            --integrationCount;
            if (integrationCount > 0) {
                return;
            }
            else if (integrationCount === 0) {
                setTimeout(ready, 0);
            }
        };
    };
    // Library methods inlined to reduce bundling overhead
    Tricorder.prototype.pageDefaults = function () {
        // Extract search
        var search = window.location.href;
        var s = search.indexOf('?');
        search = s === -1 ? '' : search.slice(s);
        s = search.indexOf('#');
        search = s === -1 ? search : search.slice(0, s);
        search = search === '?' ? '' : search;
        return {
            path: window.location.pathname,
            referrer: document.referrer,
            search: search,
            title: document.title,
            url: this.url(),
            properties: {}
        };
    };
    Tricorder.prototype.canonical = function () {
        var tags = document.getElementsByTagName('link');
        for (var i = 0; i < tags.length; i++) {
            var tag = tags[i];
            if (tag.getAttribute('rel') === 'canonical') {
                return tag.getAttribute('href');
            }
        }
        return '';
    };
    Tricorder.prototype.url = function () {
        var canon = this.canonical();
        if (canon) {
            return canon.indexOf('?') > 0 ? canon : canon + window.location.search;
        }
        var url = window.location.href;
        var i = url.indexOf('#');
        return i === -1 ? url : url.slice(0, i);
    };
    return Tricorder;
}());
var Tricorder_1 = Tricorder;

var asyncGenerator$1 = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();















var _extends$1 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var get$1 = function get$1(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get$1(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

















var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

function handleUncaughtError(notifier, errorData) {
  if (!/sdks.shopifycdn.com|widgets.shopifyapps.com/.test(errorData.url)) {
    return;
  }
  var metadata = _extends$1({}, errorData, {
    stacktrace: errorData.error ? errorData.error.stack : null,
    location: window.location
  });
  notifier.notifyException(errorData.error, metadata);
}

var bugsnag$1 = createCommonjsModule$1(function (module) {
//
// **Bugsnag.js** is the official JavaScript notifier for
// [Bugsnag](https://bugsnag.com).
//
// Bugsnag gives you instant notification of errors and
// exceptions in your website's JavaScript code.
//
// Bugsnag.js is incredibly small, and has no external dependencies (not even
// jQuery!) so you can safely use it on any website.
//

// The `Bugsnag` object is the only globally exported variable
(function (window, old) {
  var self = {},
      lastEvent,
      lastScript,
      previousNotification,
      shouldCatch = true,
      ignoreOnError = 0,

      // We've seen cases where individual clients can infinite loop sending us errors
      // (in some cases 10,000+ errors per page). This limit is at the point where
      // you've probably learned everything useful there is to debug the problem,
      // and we're happy to under-estimate the count to save the client (and Bugsnag's) resources.
      eventsRemaining = 10,
      // The default depth of attached metadata which is parsed before truncation. It
      // is configurable via the `maxDepth` setting.
      maxPayloadDepth = 5;

  // #### Bugsnag.noConflict
  //
  // This is obsolete with UMD, as we cannot assume the global scope is polluted with
  // the Bugsnag object anyway. In this case, it's up to the host Javascript file to
  // correctly utilise this functionality.
  //
  // Maybe it's worth removing all together, if we're loading via any UMD method.
  self.noConflict = function() {
    window.Bugsnag = old;
    if (typeof old === "undefined") {
      delete window.Bugsnag;
    }
    return self;
  };

  // ### Bugsnag.refresh
  //
  // Resets the Bugsnag rate limit. If you have a large single-page app, you may
  // wish to call this in your router to avoid exception reports being thrown
  // away.
  //
  // By default Bugsnag aggressively limits the number of exception reports from
  // one page load. This protects both the client's browser and our servers in
  // cases where exceptions are thrown in tight loops or scroll handlers.
  self.refresh = function() {
    eventsRemaining = 10;
  };

  //
  // ### Manual error notification (public methods)
  //

  // #### Bugsnag.notifyException
  //
  // Notify Bugsnag about a given `exception`, typically that you've caught
  // with a `try/catch` statement or that you've generated yourself.
  //
  // It's almost always better to let an exception bubble rather than catching
  // it, as that gives more consistent behaviour across browsers. Consider
  // re-throwing instead of calling .notifyException.
  //
  // Since most JavaScript exceptions use the `Error` class, we also allow
  // you to provide a custom error name when calling `notifyException`.
  //
  // The default value is "warning" and "error" and "info" are also supported by the
  // backend, all other values cause the notification to be dropped; and you
  // will not see it in your dashboard.
  self.notifyException = function (exception, name, metaData, severity) {
    if (!exception) {
      return;
    }
    if (name && typeof name !== "string") {
      metaData = name;
      name = undefined;
    }
    if (!metaData) {
      metaData = {};
    }
    addScriptToMetaData(metaData);

    sendToBugsnag({
      name: name || exception.name,
      message: exception.message || exception.description,
      stacktrace: stacktraceFromException(exception) || generateStacktrace(),
      file: exception.fileName || exception.sourceURL,
      lineNumber: exception.lineNumber || exception.line,
      columnNumber: exception.columnNumber ? exception.columnNumber + 1 : undefined,
      severity: severity || "warning"
    }, metaData);
  };

  // #### Bugsnag.notify
  //
  // Notify Bugsnag about an error by passing in a `name` and `message`,
  // without requiring an exception.
  self.notify = function (name, message, metaData, severity) {
    sendToBugsnag({
      name: name,
      message: message,
      stacktrace: generateStacktrace(),
      // These are defaults so that 'bugsnag.notify()' calls show up in old IE,
      // newer browsers get a legit stacktrace from generateStacktrace().
      file: window.location.toString(),
      lineNumber: 1,
      severity: severity || "warning"
    }, metaData);
  };

  // Return a function acts like the given function, but reports
  // any exceptions to Bugsnag before re-throwing them.
  //
  // This is not a public function because it can only be used if
  // the exception is not caught after being thrown out of this function.
  //
  // If you call wrap twice on the same function, it'll give you back the
  // same wrapped function. This lets removeEventListener to continue to
  // work.
  function wrap(_super, options) {
    try {
      if (typeof _super !== "function") {
        return _super;
      }
      if (!_super.bugsnag) {
        var currentScript = getCurrentScript();
        _super.bugsnag = function (event) {
          if (options && options.eventHandler) {
            lastEvent = event;
          }
          lastScript = currentScript;

          // We set shouldCatch to false on IE < 10 because catching the error ruins the file/line as reported in window.onerror,
          // We set shouldCatch to false on Chrome/Safari because it interferes with "break on unhandled exception"
          // All other browsers need shouldCatch to be true, as they don't pass the exception object to window.onerror
          if (shouldCatch) {
            try {
              return _super.apply(this, arguments);
            } catch (e) {
              // We do this rather than stashing treating the error like lastEvent
              // because in FF 26 onerror is not called for synthesized event handlers.
              if (getSetting("autoNotify", true)) {
                self.notifyException(e, null, null, "error");
                ignoreNextOnError();
              }
              throw e;
            } finally {
              lastScript = null;
            }
          } else {
            var ret = _super.apply(this, arguments);
            // in case of error, this is set to null in window.onerror
            lastScript = null;
            return ret;
          }
        };
        _super.bugsnag.bugsnag = _super.bugsnag;
      }
      return _super.bugsnag;

    // This can happen if _super is not a normal javascript function.
    // For example, see https://github.com/bugsnag/bugsnag-js/issues/28
    } catch (e) {
      return _super;
    }
  }

  //
  // ### Script tag tracking
  //

  // To emulate document.currentScript we use document.scripts.last.
  // This only works while synchronous scripts are running, so we track
  // that here.
  var synchronousScriptsRunning = document.readyState !== "complete";
  function loadCompleted() {
    synchronousScriptsRunning = false;
  }

  // from jQuery. We don't have quite such tight bounds as they do if
  // we end up on the window.onload event as we don't try and hack
  // the .scrollLeft() fix in because it doesn't work in frames so
  // we'd need these fallbacks anyway.
  // The worst that can happen is we group an event handler that fires
  // before us into the last script tag.
  if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", loadCompleted, true);
    window.addEventListener("load", loadCompleted, true);
  } else {
    window.attachEvent("onload", loadCompleted);
  }

  function getCurrentScript() {
    var script = document.currentScript || lastScript;

    if (!script && synchronousScriptsRunning) {
      var scripts = document.scripts || document.getElementsByTagName("script");
      script = scripts[scripts.length - 1];
    }

    return script;
  }

  function addScriptToMetaData(metaData) {
    var script = getCurrentScript();

    if (script) {
      metaData.script = {
        src: script.src,
        content: getSetting("inlineScript", true) ? script.innerHTML : ""
      };
    }
  }

  //
  // ### Helpers & Setup
  //

  // Compile regular expressions upfront.
  var API_KEY_REGEX = /^[0-9a-f]{32}$/i;
  var FUNCTION_REGEX = /function\s*([\w\-$]+)?\s*\(/i;

  // Set up default notifier settings.
  var DEFAULT_BASE_ENDPOINT = "https://notify.bugsnag.com/";
  var DEFAULT_NOTIFIER_ENDPOINT = DEFAULT_BASE_ENDPOINT + "js";
  var NOTIFIER_VERSION = "2.5.0";

  // Keep a reference to the currently executing script in the DOM.
  // We'll use this later to extract settings from attributes.
  var scripts = document.getElementsByTagName("script");
  var thisScript = scripts[scripts.length - 1];

  // Simple logging function that wraps `console.log` if available.
  // This is useful for warning about configuration issues
  // eg. forgetting to set an API key.
  function log(msg) {
    var disableLog = getSetting("disableLog");

    var console = window.console;
    if (console !== undefined && console.log !== undefined && !disableLog) {
      console.log("[Bugsnag] " + msg);
    }
  }

  // Deeply serialize an object into a query string. We use the PHP-style
  // nested object syntax, `nested[keys]=val`, to support heirachical
  // objects. Similar to jQuery's `$.param` method.
  function serialize(obj, prefix, depth) {
    var maxDepth = getSetting("maxDepth", maxPayloadDepth);

    if (depth >= maxDepth) {
      return encodeURIComponent(prefix) + "=[RECURSIVE]";
    }
    depth = depth + 1 || 1;

    try {
      if (window.Node && obj instanceof window.Node) {
        return encodeURIComponent(prefix) + "=" + encodeURIComponent(targetToString(obj));
      }

      var str = [];
      for (var p in obj) {
        if (obj.hasOwnProperty(p) && p != null && obj[p] != null) {
          var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
          str.push(typeof v === "object" ? serialize(v, k, depth) : encodeURIComponent(k) + "=" + encodeURIComponent(v));
        }
      }
      return str.join("&");
    } catch (e) {
      return encodeURIComponent(prefix) + "=" + encodeURIComponent("" + e);
    }
  }

  // Deep-merge the `source` object into the `target` object and return
  // the `target`. Properties in source that will overwrite those in target.
  // Similar to jQuery's `$.extend` method.
  function merge(target, source, depth) {
    if (source == null) {
      return target;
    } else if (depth >= getSetting("maxDepth", maxPayloadDepth)) {
      return "[RECURSIVE]";
    }

    target = target || {};
    for (var key in source) {
      if (source.hasOwnProperty(key)) {
        try {
          if (source[key].constructor === Object) {
            target[key] = merge(target[key], source[key], depth + 1 || 1);
          } else {
            target[key] = source[key];
          }
        } catch (e) {
          target[key] = source[key];
        }
      }
    }

    return target;
  }

  // Make a HTTP request with given `url` and `params` object.
  // For maximum browser compatibility and cross-domain support, requests are
  // made by creating a temporary JavaScript `Image` object.
  // Additionally the request can be done via XHR (needed for Chrome apps and extensions)
  // To set the script to use XHR, you can specify data-notifyhandler attribute in the script tag
  // Eg. `<script data-notifyhandler="xhr">` - the request defaults to image if attribute is not set
  function request(url, params) {
    url += "?" + serialize(params) + "&ct=img&cb=" + new Date().getTime();
    if (typeof BUGSNAG_TESTING !== "undefined" && self.testRequest) {
      self.testRequest(url, params);
    } else {
      var notifyHandler = getSetting("notifyHandler");
      if (notifyHandler === "xhr") {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.send();
      } else {
        var img = new Image();
        img.src = url;
      }
    }
  }

  // Extract all `data-*` attributes from a DOM element and return them as an
  // object. This is used to allow Bugsnag settings to be set via attributes
  // on the `script` tag, eg. `<script data-apikey="xyz">`.
  // Similar to jQuery's `$(el).data()` method.
  function getData(node) {
    var dataAttrs = {};
    var dataRegex = /^data\-([\w\-]+)$/;

    // If the node doesn't exist due to being loaded as a commonjs module,
    // then return an empty object and fallback to self[].
    if (node) {
      var attrs = node.attributes;
      for (var i = 0; i < attrs.length; i++) {
        var attr = attrs[i];
        if (dataRegex.test(attr.nodeName)) {
          var key = attr.nodeName.match(dataRegex)[1];
          dataAttrs[key] = attr.value || attr.nodeValue;
        }
      }
    }

    return dataAttrs;
  }

  // Get configuration settings from either `self` (the `Bugsnag` object)
  // or `data` (the `data-*` attributes).
  var data;
  function getSetting(name, fallback) {
    data = data || getData(thisScript);
    var setting = self[name] !== undefined ? self[name] : data[name.toLowerCase()];
    if (setting === "false") {
      setting = false;
    }
    return setting !== undefined ? setting : fallback;
  }

  // Validate a Bugsnag API key exists and is of the correct format.
  function validateApiKey(apiKey) {
    if (!apiKey || !apiKey.match(API_KEY_REGEX)) {
      log("Invalid API key '" + apiKey + "'");
      return false;
    }

    return true;
  }

  // Send an error to Bugsnag.
  function sendToBugsnag(details, metaData) {
    // Validate the configured API key.
    var apiKey = getSetting("apiKey");
    if (!validateApiKey(apiKey) || !eventsRemaining) {
      return;
    }
    eventsRemaining -= 1;

    // Check if we should notify for this release stage.
    var releaseStage = getSetting("releaseStage", "production");
    var notifyReleaseStages = getSetting("notifyReleaseStages");
    if (notifyReleaseStages) {
      var shouldNotify = false;
      for (var i = 0; i < notifyReleaseStages.length; i++) {
        if (releaseStage === notifyReleaseStages[i]) {
          shouldNotify = true;
          break;
        }
      }

      if (!shouldNotify) {
        return;
      }
    }

    // Don't send multiple copies of the same error.
    // This fixes a problem when a client goes into an infinite loop,
    // and starts wasting all their bandwidth sending messages to bugsnag.
    var deduplicate = [details.name, details.message, details.stacktrace].join("|");
    if (deduplicate === previousNotification) {
      return;
    } else {
      previousNotification = deduplicate;
    }

    if (lastEvent) {
      metaData = metaData || {};
      metaData["Last Event"] = eventToMetaData(lastEvent);
    }

    // Build the request payload by combining error information with other data
    // such as user-agent and locale, `metaData` and settings.
    var payload = {
      notifierVersion: NOTIFIER_VERSION,

      apiKey: apiKey,
      projectRoot: getSetting("projectRoot") || window.location.protocol + "//" + window.location.host,
      context: getSetting("context") || window.location.pathname,
      userId: getSetting("userId"), // Deprecated, remove in v3
      user: getSetting("user"),
      metaData: merge(merge({}, getSetting("metaData")), metaData),
      releaseStage: releaseStage,
      appVersion: getSetting("appVersion"),

      url: window.location.href,
      userAgent: navigator.userAgent,
      language: navigator.language || navigator.userLanguage,

      severity: details.severity,

      name: details.name,
      message: details.message,
      stacktrace: details.stacktrace,
      file: details.file,
      lineNumber: details.lineNumber,
      columnNumber: details.columnNumber,
      payloadVersion: "2"
    };

    // Run any `beforeNotify` function
    var beforeNotify = self.beforeNotify;
    if (typeof(beforeNotify) === "function") {
      var retVal = beforeNotify(payload, payload.metaData);
      if (retVal === false) {
        return;
      }
    }

    if (payload.lineNumber === 0 && (/Script error\.?/).test(payload.message)) {
      return log("Ignoring cross-domain script error. See https://bugsnag.com/docs/notifiers/js/cors");
    }

    // Make the HTTP request
    request(getSetting("endpoint") || DEFAULT_NOTIFIER_ENDPOINT, payload);
  }

  // Generate a browser stacktrace (or approximation) from the current stack.
  // This is used to add a stacktrace to `Bugsnag.notify` calls, and to add a
  // stacktrace approximation where we can't get one from an exception.
  function generateStacktrace() {
    var generated, stacktrace;
    var MAX_FAKE_STACK_SIZE = 10;
    var ANONYMOUS_FUNCTION_PLACEHOLDER = "[anonymous]";

    // Try to generate a real stacktrace (most browsers, except IE9 and below).
    try {
      throw new Error("");
    } catch (exception) {
      generated = "<generated>\n";
      stacktrace = stacktraceFromException(exception);
    }

    // Otherwise, build a fake stacktrace from the list of method names by
    // looping through the list of functions that called this one (and skip
    // whoever called us).
    if (!stacktrace) {
      generated = "<generated-ie>\n";
      var functionStack = [];
      try {
        var curr = arguments.callee.caller.caller;
        while (curr && functionStack.length < MAX_FAKE_STACK_SIZE) {
          var fn = FUNCTION_REGEX.test(curr.toString()) ? RegExp.$1 || ANONYMOUS_FUNCTION_PLACEHOLDER : ANONYMOUS_FUNCTION_PLACEHOLDER;
          functionStack.push(fn);
          curr = curr.caller;
        }
      } catch (e) {
        log(e);
      }
      stacktrace = functionStack.join("\n");
    }

    // Tell the backend to ignore the first two lines in the stack-trace.
    // generateStacktrace() + window.onerror,
    // generateStacktrace() + notify,
    // generateStacktrace() + notifyException
    return generated + stacktrace;
  }

  // Get the stacktrace string from an exception
  function stacktraceFromException(exception) {
    return exception.stack || exception.backtrace || exception.stacktrace;
  }

  // Populate the event tab of meta-data.
  function eventToMetaData(event) {
    var tab = {
      millisecondsAgo: new Date() - event.timeStamp,
      type: event.type,
      which: event.which,
      target: targetToString(event.target)
    };

    return tab;
  }

  // Convert a DOM element into a string suitable for passing to Bugsnag.
  function targetToString(target) {
    if (target) {
      var attrs = target.attributes;

      if (attrs) {
        var ret = "<" + target.nodeName.toLowerCase();
        for (var i = 0; i < attrs.length; i++) {
          if (attrs[i].value && attrs[i].value.toString() != "null") {
            ret += " " + attrs[i].name + "=\"" + attrs[i].value + "\"";
          }
        }
        return ret + ">";
      } else {
         // e.g. #document
        return target.nodeName;
      }
    }
  }

  // If we've notified bugsnag of an exception in wrap, we don't want to
  // re-notify when it hits window.onerror after we re-throw it.
  function ignoreNextOnError() {
    ignoreOnError += 1;
    window.setTimeout(function () {
      ignoreOnError -= 1;
    });
  }

  // Disable catching on IE < 10 as it destroys stack-traces from generateStackTrace()
  if (!window.atob) {
    shouldCatch = false;

  // Disable catching on browsers that support HTML5 ErrorEvents properly.
  // This lets debug on unhandled exceptions work.
  } else if (window.ErrorEvent) {
    try {
      if (new window.ErrorEvent("test").colno === 0) {
        shouldCatch = false;
      }
    } catch(e){ }
  }


  //
  // ### Polyfilling
  //

  // Add a polyFill to an object
  function polyFill(obj, name, makeReplacement) {
    var original = obj[name];
    var replacement = makeReplacement(original);
    obj[name] = replacement;

    if (typeof BUGSNAG_TESTING !== "undefined" && window.undo) {
      window.undo.push(function () {
        obj[name] = original;
      });
    }
  }

  if (getSetting("autoNotify", true)) {
    //
    // ### Automatic error notification
    //
    // Attach to `window.onerror` events and notify Bugsnag when they happen.
    // These are mostly js compile/parse errors, but on some browsers all
    // "uncaught" exceptions will fire this event.
    //
    polyFill(window, "onerror", function (_super) {
      // Keep a reference to any existing `window.onerror` handler
      if (typeof BUGSNAG_TESTING !== "undefined") {
        self._onerror = _super;
      }

      return function bugsnag$1(message, url, lineNo, charNo, exception) {
        var shouldNotify = getSetting("autoNotify", true);
        var metaData = {};

        // IE 6+ support.
        if (!charNo && window.event) {
          charNo = window.event.errorCharacter;
        }

        addScriptToMetaData(metaData);
        lastScript = null;

        if (shouldNotify && !ignoreOnError) {

          sendToBugsnag({
            name: exception && exception.name || "window.onerror",
            message: message,
            file: url,
            lineNumber: lineNo,
            columnNumber: charNo,
            stacktrace: (exception && stacktraceFromException(exception)) || generateStacktrace(),
            severity: "error"
          }, metaData);
        }

        if (typeof BUGSNAG_TESTING !== "undefined") {
          _super = self._onerror;
        }

        // Fire the existing `window.onerror` handler, if one exists
        if (_super) {
          _super(message, url, lineNo, charNo, exception);
        }
      };
    });

    var hijackTimeFunc = function (_super) {
      // Note, we don't do `_super.call` because that doesn't work on IE 8,
      // luckily this is implicitly window so it just works everywhere.
      //
      // setTimout in all browsers except IE <9 allows additional parameters
      // to be passed, so in order to support these without resorting to call/apply
      // we need an extra layer of wrapping.
      return function (f, t) {
        if (typeof f === "function") {
          f = wrap(f);
          var args = Array.prototype.slice.call(arguments, 2);
          return _super(function () {
            f.apply(this, args);
          }, t);
        } else {
          return _super(f, t);
        }
      };
    };

    polyFill(window, "setTimeout", hijackTimeFunc);
    polyFill(window, "setInterval", hijackTimeFunc);

    if (window.requestAnimationFrame) {
      polyFill(window, "requestAnimationFrame", function (_super) {
        return function (callback) {
          return _super(wrap(callback));
        };
      });
    }

    if (window.setImmediate) {
      polyFill(window, "setImmediate", function (_super) {
        return function (f) {
          var args = Array.prototype.slice.call(arguments);
          args[0] = wrap(args[0]);
          return _super.apply(this, args);
        };
      });
    }

    // EventTarget is all that's required in modern chrome/opera
    // EventTarget + Window + ModalWindow is all that's required in modern FF (there are a few Moz prefixed ones that we're ignoring)
    // The rest is a collection of stuff for Safari and IE 11. (Again ignoring a few MS and WebKit prefixed things)
    "EventTarget Window Node ApplicationCache AudioTrackList ChannelMergerNode CryptoOperation EventSource FileReader HTMLUnknownElement IDBDatabase IDBRequest IDBTransaction KeyOperation MediaController MessagePort ModalWindow Notification SVGElementInstance Screen TextTrack TextTrackCue TextTrackList WebSocket WebSocketWorker Worker XMLHttpRequest XMLHttpRequestEventTarget XMLHttpRequestUpload".replace(/\w+/g, function (global) {
      var prototype = window[global] && window[global].prototype;
      if (prototype && prototype.hasOwnProperty && prototype.hasOwnProperty("addEventListener")) {
        polyFill(prototype, "addEventListener", function (_super) {
          return function (e, f, capture, secure) {
            // HTML lets event-handlers be objects with a handlEvent function,
            // we need to change f.handleEvent here, as self.wrap will ignore f.
            try {
              if (f && f.handleEvent) {
                f.handleEvent = wrap(f.handleEvent, {eventHandler: true});
              }
            } catch (err) {
              // When selenium is installed, we sometimes get 'Permission denied to access property "handleEvent"'
              // Because this catch is around Bugsnag library code, it won't catch any user errors
              log(err);
            }
            return _super.call(this, e, wrap(f, {eventHandler: true}), capture, secure);
          };
        });

        // We also need to hack removeEventListener so that you can remove any
        // event listeners.
        polyFill(prototype, "removeEventListener", function (_super) {
          return function (e, f, capture, secure) {
            _super.call(this, e, f, capture, secure);
            return _super.call(this, e, wrap(f), capture, secure);
          };
        });
      }
    });
  }

  window.Bugsnag = self;
  // If people are using a javascript loader, we should integrate with it.
  // We don't want to defer instrumenting their code with callbacks however,
  // so we slightly abuse the intent and continue with our plan of polyfilling
  // the browser whether or not they ever actually require the module.
  // This has the nice side-effect of continuing to work when people are using
  // AMD but loading Bugsnag via a CDN.
  // It has the not-so-nice side-effect of polluting the global namespace, but
  // you can easily call Bugsnag.noConflict() to fix that.
  if (typeof define === "function" && define.amd) {
    // AMD
    define([], function () {
      return self;
    });
  } else if (typeof module === "object" && typeof module.exports === "object") {
    // CommonJS/Browserify
    module.exports = self;
  }

})(window, window.Bugsnag);
});

var bugsnag = window.Bugsnag.noConflict();
bugsnag.autoNotify = false;
bugsnag.apiKey = '984b96f9e4731b19d6ef03748c94a73a';
bugsnag.metaData = {
  embedType: 'v4'
};

window.onerror = function (message, url, line, col, error) {
  handleUncaughtError(bugsnag, { message: message, url: url, line: line, col: col, error: error });
};

buybutton_cjs.UI.onReady = function (client) {
  client.config.ajaxHeaders = {
    'X-Application-Name': 'buy-button'
  };
  return new Promise(function (resolve) {
    var tricorder = new Tricorder_1({ Trekkie: { appName: 'buy_now' } }, function () {
      resolve(buybutton_cjs.UI.init(client, {
        tracker: tricorder,
        errorReporter: bugsnag
      }));
    });
  });
};

return buybutton_cjs;

}());
