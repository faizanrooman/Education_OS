var np=Object.defineProperty;var ip=(e,t,n)=>t in e?np(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Oa=(e,t,n)=>ip(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Zc={exports:{}},as={},eu={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fi=Symbol.for("react.element"),rp=Symbol.for("react.portal"),sp=Symbol.for("react.fragment"),op=Symbol.for("react.strict_mode"),lp=Symbol.for("react.profiler"),ap=Symbol.for("react.provider"),cp=Symbol.for("react.context"),up=Symbol.for("react.forward_ref"),fp=Symbol.for("react.suspense"),dp=Symbol.for("react.memo"),pp=Symbol.for("react.lazy"),Da=Symbol.iterator;function mp(e){return e===null||typeof e!="object"?null:(e=Da&&e[Da]||e["@@iterator"],typeof e=="function"?e:null)}var tu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nu=Object.assign,iu={};function Fn(e,t,n){this.props=e,this.context=t,this.refs=iu,this.updater=n||tu}Fn.prototype.isReactComponent={};Fn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Fn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ru(){}ru.prototype=Fn.prototype;function kl(e,t,n){this.props=e,this.context=t,this.refs=iu,this.updater=n||tu}var Sl=kl.prototype=new ru;Sl.constructor=kl;nu(Sl,Fn.prototype);Sl.isPureReactComponent=!0;var La=Array.isArray,su=Object.prototype.hasOwnProperty,El={current:null},ou={key:!0,ref:!0,__self:!0,__source:!0};function lu(e,t,n){var i,r={},s=null,o=null;if(t!=null)for(i in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)su.call(t,i)&&!ou.hasOwnProperty(i)&&(r[i]=t[i]);var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){for(var a=Array(l),c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}if(e&&e.defaultProps)for(i in l=e.defaultProps,l)r[i]===void 0&&(r[i]=l[i]);return{$$typeof:Fi,type:e,key:s,ref:o,props:r,_owner:El.current}}function hp(e,t){return{$$typeof:Fi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function bl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fi}function gp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var xa=/\/+/g;function $s(e,t){return typeof e=="object"&&e!==null&&e.key!=null?gp(""+e.key):t.toString(36)}function wr(e,t,n,i,r){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Fi:case rp:o=!0}}if(o)return o=e,r=r(o),e=i===""?"."+$s(o,0):i,La(r)?(n="",e!=null&&(n=e.replace(xa,"$&/")+"/"),wr(r,t,n,"",function(c){return c})):r!=null&&(bl(r)&&(r=hp(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(xa,"$&/")+"/")+e)),t.push(r)),1;if(o=0,i=i===""?".":i+":",La(e))for(var l=0;l<e.length;l++){s=e[l];var a=i+$s(s,l);o+=wr(s,t,n,a,r)}else if(a=mp(e),typeof a=="function")for(e=a.call(e),l=0;!(s=e.next()).done;)s=s.value,a=i+$s(s,l++),o+=wr(s,t,n,a,r);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Yi(e,t,n){if(e==null)return e;var i=[],r=0;return wr(e,i,"","",function(s){return t.call(n,s,r++)}),i}function yp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},_r={transition:null},vp={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:_r,ReactCurrentOwner:El};function au(){throw Error("act(...) is not supported in production builds of React.")}j.Children={map:Yi,forEach:function(e,t,n){Yi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Yi(e,function(){t++}),t},toArray:function(e){return Yi(e,function(t){return t})||[]},only:function(e){if(!bl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};j.Component=Fn;j.Fragment=sp;j.Profiler=lp;j.PureComponent=kl;j.StrictMode=op;j.Suspense=fp;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vp;j.act=au;j.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=nu({},e.props),r=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=El.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)su.call(t,a)&&!ou.hasOwnProperty(a)&&(i[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){l=Array(a);for(var c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}return{$$typeof:Fi,type:e.type,key:r,ref:s,props:i,_owner:o}};j.createContext=function(e){return e={$$typeof:cp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ap,_context:e},e.Consumer=e};j.createElement=lu;j.createFactory=function(e){var t=lu.bind(null,e);return t.type=e,t};j.createRef=function(){return{current:null}};j.forwardRef=function(e){return{$$typeof:up,render:e}};j.isValidElement=bl;j.lazy=function(e){return{$$typeof:pp,_payload:{_status:-1,_result:e},_init:yp}};j.memo=function(e,t){return{$$typeof:dp,type:e,compare:t===void 0?null:t}};j.startTransition=function(e){var t=_r.transition;_r.transition={};try{e()}finally{_r.transition=t}};j.unstable_act=au;j.useCallback=function(e,t){return we.current.useCallback(e,t)};j.useContext=function(e){return we.current.useContext(e)};j.useDebugValue=function(){};j.useDeferredValue=function(e){return we.current.useDeferredValue(e)};j.useEffect=function(e,t){return we.current.useEffect(e,t)};j.useId=function(){return we.current.useId()};j.useImperativeHandle=function(e,t,n){return we.current.useImperativeHandle(e,t,n)};j.useInsertionEffect=function(e,t){return we.current.useInsertionEffect(e,t)};j.useLayoutEffect=function(e,t){return we.current.useLayoutEffect(e,t)};j.useMemo=function(e,t){return we.current.useMemo(e,t)};j.useReducer=function(e,t,n){return we.current.useReducer(e,t,n)};j.useRef=function(e){return we.current.useRef(e)};j.useState=function(e){return we.current.useState(e)};j.useSyncExternalStore=function(e,t,n){return we.current.useSyncExternalStore(e,t,n)};j.useTransition=function(){return we.current.useTransition()};j.version="18.3.1";eu.exports=j;var F=eu.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp=F,_p=Symbol.for("react.element"),kp=Symbol.for("react.fragment"),Sp=Object.prototype.hasOwnProperty,Ep=wp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bp={key:!0,ref:!0,__self:!0,__source:!0};function cu(e,t,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(i in t)Sp.call(t,i)&&!bp.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)r[i]===void 0&&(r[i]=t[i]);return{$$typeof:_p,type:e,key:s,ref:o,props:r,_owner:Ep.current}}as.Fragment=kp;as.jsx=cu;as.jsxs=cu;Zc.exports=as;var b=Zc.exports,uu={exports:{}},Oe={},fu={exports:{}},du={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,R){var P=T.length;T.push(R);e:for(;0<P;){var Y=P-1>>>1,re=T[Y];if(0<r(re,R))T[Y]=R,T[P]=re,P=Y;else break e}}function n(T){return T.length===0?null:T[0]}function i(T){if(T.length===0)return null;var R=T[0],P=T.pop();if(P!==R){T[0]=P;e:for(var Y=0,re=T.length,Qi=re>>>1;Y<Qi;){var Mt=2*(Y+1)-1,Ms=T[Mt],$t=Mt+1,Gi=T[$t];if(0>r(Ms,P))$t<re&&0>r(Gi,Ms)?(T[Y]=Gi,T[$t]=P,Y=$t):(T[Y]=Ms,T[Mt]=P,Y=Mt);else if($t<re&&0>r(Gi,P))T[Y]=Gi,T[$t]=P,Y=$t;else break e}}return R}function r(T,R){var P=T.sortIndex-R.sortIndex;return P!==0?P:T.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var a=[],c=[],m=1,u=null,f=3,h=!1,w=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var R=n(c);R!==null;){if(R.callback===null)i(c);else if(R.startTime<=T)i(c),R.sortIndex=R.expirationTime,t(a,R);else break;R=n(c)}}function v(T){if(y=!1,g(T),!w)if(n(a)!==null)w=!0,Ps(k);else{var R=n(c);R!==null&&js(v,R.startTime-T)}}function k(T,R){w=!1,y&&(y=!1,p(S),S=-1),h=!0;var P=f;try{for(g(R),u=n(a);u!==null&&(!(u.expirationTime>R)||T&&!D());){var Y=u.callback;if(typeof Y=="function"){u.callback=null,f=u.priorityLevel;var re=Y(u.expirationTime<=R);R=e.unstable_now(),typeof re=="function"?u.callback=re:u===n(a)&&i(a),g(R)}else i(a);u=n(a)}if(u!==null)var Qi=!0;else{var Mt=n(c);Mt!==null&&js(v,Mt.startTime-R),Qi=!1}return Qi}finally{u=null,f=P,h=!1}}var C=!1,E=null,S=-1,O=5,I=-1;function D(){return!(e.unstable_now()-I<O)}function G(){if(E!==null){var T=e.unstable_now();I=T;var R=!0;try{R=E(!0,T)}finally{R?le():(C=!1,E=null)}}else C=!1}var le;if(typeof d=="function")le=function(){d(G)};else if(typeof MessageChannel<"u"){var qn=new MessageChannel,tp=qn.port2;qn.port1.onmessage=G,le=function(){tp.postMessage(null)}}else le=function(){_(G,0)};function Ps(T){E=T,C||(C=!0,le())}function js(T,R){S=_(function(){T(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){w||h||(w=!0,Ps(k))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(T){switch(f){case 1:case 2:case 3:var R=3;break;default:R=f}var P=f;f=R;try{return T()}finally{f=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,R){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var P=f;f=T;try{return R()}finally{f=P}},e.unstable_scheduleCallback=function(T,R,P){var Y=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?Y+P:Y):P=Y,T){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=P+re,T={id:m++,callback:R,priorityLevel:T,startTime:P,expirationTime:re,sortIndex:-1},P>Y?(T.sortIndex=P,t(c,T),n(a)===null&&T===n(c)&&(y?(p(S),S=-1):y=!0,js(v,P-Y))):(T.sortIndex=re,t(a,T),w||h||(w=!0,Ps(k))),T},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(T){var R=f;return function(){var P=f;f=R;try{return T.apply(this,arguments)}finally{f=P}}}})(du);fu.exports=du;var Cp=fu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Np=F,Ie=Cp;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pu=new Set,_i={};function tn(e,t){On(e,t),On(e+"Capture",t)}function On(e,t){for(_i[e]=t,e=0;e<t.length;e++)pu.add(t[e])}var ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),So=Object.prototype.hasOwnProperty,Ap=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ra={},Pa={};function Tp(e){return So.call(Pa,e)?!0:So.call(Ra,e)?!1:Ap.test(e)?Pa[e]=!0:(Ra[e]=!0,!1)}function Ip(e,t,n,i){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Op(e,t,n,i){if(t===null||typeof t>"u"||Ip(e,t,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _e(e,t,n,i,r,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new _e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ue[t]=new _e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new _e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new _e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new _e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new _e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new _e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new _e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new _e(e,5,!1,e.toLowerCase(),null,!1,!1)});var Cl=/[\-:]([a-z])/g;function Nl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Cl,Nl);ue[t]=new _e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Cl,Nl);ue[t]=new _e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Cl,Nl);ue[t]=new _e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new _e(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new _e(e,1,!1,e.toLowerCase(),null,!0,!0)});function Al(e,t,n,i){var r=ue.hasOwnProperty(t)?ue[t]:null;(r!==null?r.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Op(t,n,r,i)&&(n=null),i||r===null?Tp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(t=r.attributeName,i=r.attributeNamespace,n===null?e.removeAttribute(t):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?e.setAttributeNS(i,t,n):e.setAttribute(t,n))))}var pt=Np.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ji=Symbol.for("react.element"),ln=Symbol.for("react.portal"),an=Symbol.for("react.fragment"),Tl=Symbol.for("react.strict_mode"),Eo=Symbol.for("react.profiler"),mu=Symbol.for("react.provider"),hu=Symbol.for("react.context"),Il=Symbol.for("react.forward_ref"),bo=Symbol.for("react.suspense"),Co=Symbol.for("react.suspense_list"),Ol=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),gu=Symbol.for("react.offscreen"),ja=Symbol.iterator;function Qn(e){return e===null||typeof e!="object"?null:(e=ja&&e[ja]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,Fs;function ii(e){if(Fs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Fs=t&&t[1]||""}return`
`+Fs+e}var zs=!1;function Bs(e,t){if(!e||zs)return"";zs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var i=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){i=c}e.call(t.prototype)}else{try{throw Error()}catch(c){i=c}e()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,l=s.length-1;1<=o&&0<=l&&r[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(r[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||r[o]!==s[l]){var a=`
`+r[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=l);break}}}finally{zs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ii(e):""}function Dp(e){switch(e.tag){case 5:return ii(e.type);case 16:return ii("Lazy");case 13:return ii("Suspense");case 19:return ii("SuspenseList");case 0:case 2:case 15:return e=Bs(e.type,!1),e;case 11:return e=Bs(e.type.render,!1),e;case 1:return e=Bs(e.type,!0),e;default:return""}}function No(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case an:return"Fragment";case ln:return"Portal";case Eo:return"Profiler";case Tl:return"StrictMode";case bo:return"Suspense";case Co:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case hu:return(e.displayName||"Context")+".Consumer";case mu:return(e._context.displayName||"Context")+".Provider";case Il:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ol:return t=e.displayName||null,t!==null?t:No(e.type)||"Memo";case ht:t=e._payload,e=e._init;try{return No(e(t))}catch{}}return null}function Lp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return No(t);case 8:return t===Tl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Lt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function xp(e){var t=yu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xi(e){e._valueTracker||(e._valueTracker=xp(e))}function vu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=yu(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Rr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ao(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ma(e,t){var n=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;n=Lt(t.value!=null?t.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function wu(e,t){t=t.checked,t!=null&&Al(e,"checked",t,!1)}function To(e,t){wu(e,t);var n=Lt(t.value),i=t.type;if(n!=null)i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Io(e,t.type,n):t.hasOwnProperty("defaultValue")&&Io(e,t.type,Lt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $a(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Io(e,t,n){(t!=="number"||Rr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ri=Array.isArray;function Sn(e,t,n,i){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Lt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Oo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(ri(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Lt(n)}}function _u(e,t){var n=Lt(t.value),i=Lt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),i!=null&&(e.defaultValue=""+i)}function za(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ku(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Do(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ku(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zi,Su=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,i,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,i,r)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zi=Zi||document.createElement("div"),Zi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ki(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ci={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rp=["Webkit","ms","Moz","O"];Object.keys(ci).forEach(function(e){Rp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ci[t]=ci[e]})});function Eu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ci.hasOwnProperty(e)&&ci[e]?(""+t).trim():t+"px"}function bu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Eu(n,t[n],i);n==="float"&&(n="cssFloat"),i?e.setProperty(n,r):e[n]=r}}var Pp=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lo(e,t){if(t){if(Pp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function xo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ro=null;function Dl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Po=null,En=null,bn=null;function Ba(e){if(e=Ui(e)){if(typeof Po!="function")throw Error(N(280));var t=e.stateNode;t&&(t=ps(t),Po(e.stateNode,e.type,t))}}function Cu(e){En?bn?bn.push(e):bn=[e]:En=e}function Nu(){if(En){var e=En,t=bn;if(bn=En=null,Ba(e),t)for(e=0;e<t.length;e++)Ba(t[e])}}function Au(e,t){return e(t)}function Tu(){}var Us=!1;function Iu(e,t,n){if(Us)return e(t,n);Us=!0;try{return Au(e,t,n)}finally{Us=!1,(En!==null||bn!==null)&&(Tu(),Nu())}}function Si(e,t){var n=e.stateNode;if(n===null)return null;var i=ps(n);if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var jo=!1;if(ct)try{var Gn={};Object.defineProperty(Gn,"passive",{get:function(){jo=!0}}),window.addEventListener("test",Gn,Gn),window.removeEventListener("test",Gn,Gn)}catch{jo=!1}function jp(e,t,n,i,r,s,o,l,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var ui=!1,Pr=null,jr=!1,Mo=null,Mp={onError:function(e){ui=!0,Pr=e}};function $p(e,t,n,i,r,s,o,l,a){ui=!1,Pr=null,jp.apply(Mp,arguments)}function Fp(e,t,n,i,r,s,o,l,a){if($p.apply(this,arguments),ui){if(ui){var c=Pr;ui=!1,Pr=null}else throw Error(N(198));jr||(jr=!0,Mo=c)}}function nn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ou(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ua(e){if(nn(e)!==e)throw Error(N(188))}function zp(e){var t=e.alternate;if(!t){if(t=nn(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,i=t;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ua(r),e;if(s===i)return Ua(r),t;s=s.sibling}throw Error(N(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,l=r.child;l;){if(l===n){o=!0,n=r,i=s;break}if(l===i){o=!0,i=r,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,i=r;break}if(l===i){o=!0,i=s,n=r;break}l=l.sibling}if(!o)throw Error(N(189))}}if(n.alternate!==i)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function Du(e){return e=zp(e),e!==null?Lu(e):null}function Lu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Lu(e);if(t!==null)return t;e=e.sibling}return null}var xu=Ie.unstable_scheduleCallback,Va=Ie.unstable_cancelCallback,Bp=Ie.unstable_shouldYield,Up=Ie.unstable_requestPaint,J=Ie.unstable_now,Vp=Ie.unstable_getCurrentPriorityLevel,Ll=Ie.unstable_ImmediatePriority,Ru=Ie.unstable_UserBlockingPriority,Mr=Ie.unstable_NormalPriority,Kp=Ie.unstable_LowPriority,Pu=Ie.unstable_IdlePriority,cs=null,Ze=null;function Hp(e){if(Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(cs,e,void 0,(e.current.flags&128)===128)}catch{}}var We=Math.clz32?Math.clz32:Qp,Wp=Math.log,qp=Math.LN2;function Qp(e){return e>>>=0,e===0?32:31-(Wp(e)/qp|0)|0}var er=64,tr=4194304;function si(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function $r(e,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,r=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~r;l!==0?i=si(l):(s&=o,s!==0&&(i=si(s)))}else o=n&~r,o!==0?i=si(o):s!==0&&(i=si(s));if(i===0)return 0;if(t!==0&&t!==i&&!(t&r)&&(r=i&-i,s=t&-t,r>=s||r===16&&(s&4194240)!==0))return t;if(i&4&&(i|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)n=31-We(t),r=1<<n,i|=e[n],t&=~r;return i}function Gp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yp(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-We(s),l=1<<o,a=r[o];a===-1?(!(l&n)||l&i)&&(r[o]=Gp(l,t)):a<=t&&(e.expiredLanes|=l),s&=~l}}function $o(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ju(){var e=er;return er<<=1,!(er&4194240)&&(er=64),e}function Vs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function zi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-We(t),e[t]=n}function Jp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-We(n),s=1<<r;t[r]=0,i[r]=-1,e[r]=-1,n&=~s}}function xl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-We(n),r=1<<i;r&t|e[i]&t&&(e[i]|=t),n&=~r}}var $=0;function Mu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var $u,Rl,Fu,zu,Bu,Fo=!1,nr=[],St=null,Et=null,bt=null,Ei=new Map,bi=new Map,vt=[],Xp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ka(e,t){switch(e){case"focusin":case"focusout":St=null;break;case"dragenter":case"dragleave":Et=null;break;case"mouseover":case"mouseout":bt=null;break;case"pointerover":case"pointerout":Ei.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bi.delete(t.pointerId)}}function Yn(e,t,n,i,r,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},t!==null&&(t=Ui(t),t!==null&&Rl(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Zp(e,t,n,i,r){switch(t){case"focusin":return St=Yn(St,e,t,n,i,r),!0;case"dragenter":return Et=Yn(Et,e,t,n,i,r),!0;case"mouseover":return bt=Yn(bt,e,t,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ei.set(s,Yn(Ei.get(s)||null,e,t,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,bi.set(s,Yn(bi.get(s)||null,e,t,n,i,r)),!0}return!1}function Uu(e){var t=Ut(e.target);if(t!==null){var n=nn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ou(n),t!==null){e.blockedOn=t,Bu(e.priority,function(){Fu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Ro=i,n.target.dispatchEvent(i),Ro=null}else return t=Ui(n),t!==null&&Rl(t),e.blockedOn=n,!1;t.shift()}return!0}function Ha(e,t,n){kr(e)&&n.delete(t)}function em(){Fo=!1,St!==null&&kr(St)&&(St=null),Et!==null&&kr(Et)&&(Et=null),bt!==null&&kr(bt)&&(bt=null),Ei.forEach(Ha),bi.forEach(Ha)}function Jn(e,t){e.blockedOn===t&&(e.blockedOn=null,Fo||(Fo=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,em)))}function Ci(e){function t(r){return Jn(r,e)}if(0<nr.length){Jn(nr[0],e);for(var n=1;n<nr.length;n++){var i=nr[n];i.blockedOn===e&&(i.blockedOn=null)}}for(St!==null&&Jn(St,e),Et!==null&&Jn(Et,e),bt!==null&&Jn(bt,e),Ei.forEach(t),bi.forEach(t),n=0;n<vt.length;n++)i=vt[n],i.blockedOn===e&&(i.blockedOn=null);for(;0<vt.length&&(n=vt[0],n.blockedOn===null);)Uu(n),n.blockedOn===null&&vt.shift()}var Cn=pt.ReactCurrentBatchConfig,Fr=!0;function tm(e,t,n,i){var r=$,s=Cn.transition;Cn.transition=null;try{$=1,Pl(e,t,n,i)}finally{$=r,Cn.transition=s}}function nm(e,t,n,i){var r=$,s=Cn.transition;Cn.transition=null;try{$=4,Pl(e,t,n,i)}finally{$=r,Cn.transition=s}}function Pl(e,t,n,i){if(Fr){var r=zo(e,t,n,i);if(r===null)Zs(e,t,i,zr,n),Ka(e,i);else if(Zp(r,e,t,n,i))i.stopPropagation();else if(Ka(e,i),t&4&&-1<Xp.indexOf(e)){for(;r!==null;){var s=Ui(r);if(s!==null&&$u(s),s=zo(e,t,n,i),s===null&&Zs(e,t,i,zr,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Zs(e,t,i,null,n)}}var zr=null;function zo(e,t,n,i){if(zr=null,e=Dl(i),e=Ut(e),e!==null)if(t=nn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ou(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return zr=e,null}function Vu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vp()){case Ll:return 1;case Ru:return 4;case Mr:case Kp:return 16;case Pu:return 536870912;default:return 16}default:return 16}}var _t=null,jl=null,Sr=null;function Ku(){if(Sr)return Sr;var e,t=jl,n=t.length,i,r="value"in _t?_t.value:_t.textContent,s=r.length;for(e=0;e<n&&t[e]===r[e];e++);var o=n-e;for(i=1;i<=o&&t[n-i]===r[s-i];i++);return Sr=r.slice(e,1<i?1-i:void 0)}function Er(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ir(){return!0}function Wa(){return!1}function De(e){function t(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ir:Wa,this.isPropagationStopped=Wa,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ir)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ir)},persist:function(){},isPersistent:ir}),t}var zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ml=De(zn),Bi=q({},zn,{view:0,detail:0}),im=De(Bi),Ks,Hs,Xn,us=q({},Bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$l,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xn&&(Xn&&e.type==="mousemove"?(Ks=e.screenX-Xn.screenX,Hs=e.screenY-Xn.screenY):Hs=Ks=0,Xn=e),Ks)},movementY:function(e){return"movementY"in e?e.movementY:Hs}}),qa=De(us),rm=q({},us,{dataTransfer:0}),sm=De(rm),om=q({},Bi,{relatedTarget:0}),Ws=De(om),lm=q({},zn,{animationName:0,elapsedTime:0,pseudoElement:0}),am=De(lm),cm=q({},zn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),um=De(cm),fm=q({},zn,{data:0}),Qa=De(fm),dm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mm[e])?!!t[e]:!1}function $l(){return hm}var gm=q({},Bi,{key:function(e){if(e.key){var t=dm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Er(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$l,charCode:function(e){return e.type==="keypress"?Er(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Er(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ym=De(gm),vm=q({},us,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ga=De(vm),wm=q({},Bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$l}),_m=De(wm),km=q({},zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sm=De(km),Em=q({},us,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bm=De(Em),Cm=[9,13,27,32],Fl=ct&&"CompositionEvent"in window,fi=null;ct&&"documentMode"in document&&(fi=document.documentMode);var Nm=ct&&"TextEvent"in window&&!fi,Hu=ct&&(!Fl||fi&&8<fi&&11>=fi),Ya=" ",Ja=!1;function Wu(e,t){switch(e){case"keyup":return Cm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cn=!1;function Am(e,t){switch(e){case"compositionend":return qu(t);case"keypress":return t.which!==32?null:(Ja=!0,Ya);case"textInput":return e=t.data,e===Ya&&Ja?null:e;default:return null}}function Tm(e,t){if(cn)return e==="compositionend"||!Fl&&Wu(e,t)?(e=Ku(),Sr=jl=_t=null,cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Hu&&t.locale!=="ko"?null:t.data;default:return null}}var Im={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Im[e.type]:t==="textarea"}function Qu(e,t,n,i){Cu(i),t=Br(t,"onChange"),0<t.length&&(n=new Ml("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var di=null,Ni=null;function Om(e){of(e,0)}function fs(e){var t=dn(e);if(vu(t))return e}function Dm(e,t){if(e==="change")return t}var Gu=!1;if(ct){var qs;if(ct){var Qs="oninput"in document;if(!Qs){var Za=document.createElement("div");Za.setAttribute("oninput","return;"),Qs=typeof Za.oninput=="function"}qs=Qs}else qs=!1;Gu=qs&&(!document.documentMode||9<document.documentMode)}function ec(){di&&(di.detachEvent("onpropertychange",Yu),Ni=di=null)}function Yu(e){if(e.propertyName==="value"&&fs(Ni)){var t=[];Qu(t,Ni,e,Dl(e)),Iu(Om,t)}}function Lm(e,t,n){e==="focusin"?(ec(),di=t,Ni=n,di.attachEvent("onpropertychange",Yu)):e==="focusout"&&ec()}function xm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fs(Ni)}function Rm(e,t){if(e==="click")return fs(t)}function Pm(e,t){if(e==="input"||e==="change")return fs(t)}function jm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Qe=typeof Object.is=="function"?Object.is:jm;function Ai(e,t){if(Qe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!So.call(t,r)||!Qe(e[r],t[r]))return!1}return!0}function tc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nc(e,t){var n=tc(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tc(n)}}function Ju(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ju(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xu(){for(var e=window,t=Rr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rr(e.document)}return t}function zl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Mm(e){var t=Xu(),n=e.focusedElem,i=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ju(n.ownerDocument.documentElement,n)){if(i!==null&&zl(n)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!e.extend&&s>i&&(r=i,i=s,s=r),r=nc(n,s);var o=nc(n,i);r&&o&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),s>i?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $m=ct&&"documentMode"in document&&11>=document.documentMode,un=null,Bo=null,pi=null,Uo=!1;function ic(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Uo||un==null||un!==Rr(i)||(i=un,"selectionStart"in i&&zl(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),pi&&Ai(pi,i)||(pi=i,i=Br(Bo,"onSelect"),0<i.length&&(t=new Ml("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=un)))}function rr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fn={animationend:rr("Animation","AnimationEnd"),animationiteration:rr("Animation","AnimationIteration"),animationstart:rr("Animation","AnimationStart"),transitionend:rr("Transition","TransitionEnd")},Gs={},Zu={};ct&&(Zu=document.createElement("div").style,"AnimationEvent"in window||(delete fn.animationend.animation,delete fn.animationiteration.animation,delete fn.animationstart.animation),"TransitionEvent"in window||delete fn.transitionend.transition);function ds(e){if(Gs[e])return Gs[e];if(!fn[e])return e;var t=fn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Zu)return Gs[e]=t[n];return e}var ef=ds("animationend"),tf=ds("animationiteration"),nf=ds("animationstart"),rf=ds("transitionend"),sf=new Map,rc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rt(e,t){sf.set(e,t),tn(t,[e])}for(var Ys=0;Ys<rc.length;Ys++){var Js=rc[Ys],Fm=Js.toLowerCase(),zm=Js[0].toUpperCase()+Js.slice(1);Rt(Fm,"on"+zm)}Rt(ef,"onAnimationEnd");Rt(tf,"onAnimationIteration");Rt(nf,"onAnimationStart");Rt("dblclick","onDoubleClick");Rt("focusin","onFocus");Rt("focusout","onBlur");Rt(rf,"onTransitionEnd");On("onMouseEnter",["mouseout","mouseover"]);On("onMouseLeave",["mouseout","mouseover"]);On("onPointerEnter",["pointerout","pointerover"]);On("onPointerLeave",["pointerout","pointerover"]);tn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));tn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));tn("onBeforeInput",["compositionend","keypress","textInput","paste"]);tn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));tn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));tn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bm=new Set("cancel close invalid load scroll toggle".split(" ").concat(oi));function sc(e,t,n){var i=e.type||"unknown-event";e.currentTarget=n,Fp(i,t,void 0,e),e.currentTarget=null}function of(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],r=i.event;i=i.listeners;e:{var s=void 0;if(t)for(var o=i.length-1;0<=o;o--){var l=i[o],a=l.instance,c=l.currentTarget;if(l=l.listener,a!==s&&r.isPropagationStopped())break e;sc(r,l,c),s=a}else for(o=0;o<i.length;o++){if(l=i[o],a=l.instance,c=l.currentTarget,l=l.listener,a!==s&&r.isPropagationStopped())break e;sc(r,l,c),s=a}}}if(jr)throw e=Mo,jr=!1,Mo=null,e}function U(e,t){var n=t[qo];n===void 0&&(n=t[qo]=new Set);var i=e+"__bubble";n.has(i)||(lf(t,e,2,!1),n.add(i))}function Xs(e,t,n){var i=0;t&&(i|=4),lf(n,e,i,t)}var sr="_reactListening"+Math.random().toString(36).slice(2);function Ti(e){if(!e[sr]){e[sr]=!0,pu.forEach(function(n){n!=="selectionchange"&&(Bm.has(n)||Xs(n,!1,e),Xs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[sr]||(t[sr]=!0,Xs("selectionchange",!1,t))}}function lf(e,t,n,i){switch(Vu(t)){case 1:var r=tm;break;case 4:r=nm;break;default:r=Pl}n=r.bind(null,t,n,e),r=void 0,!jo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Zs(e,t,n,i,r){var s=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var l=i.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===r||a.nodeType===8&&a.parentNode===r))return;o=o.return}for(;l!==null;){if(o=Ut(l),o===null)return;if(a=o.tag,a===5||a===6){i=s=o;continue e}l=l.parentNode}}i=i.return}Iu(function(){var c=s,m=Dl(n),u=[];e:{var f=sf.get(e);if(f!==void 0){var h=Ml,w=e;switch(e){case"keypress":if(Er(n)===0)break e;case"keydown":case"keyup":h=ym;break;case"focusin":w="focus",h=Ws;break;case"focusout":w="blur",h=Ws;break;case"beforeblur":case"afterblur":h=Ws;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=qa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=sm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=_m;break;case ef:case tf:case nf:h=am;break;case rf:h=Sm;break;case"scroll":h=im;break;case"wheel":h=bm;break;case"copy":case"cut":case"paste":h=um;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Ga}var y=(t&4)!==0,_=!y&&e==="scroll",p=y?f!==null?f+"Capture":null:f;y=[];for(var d=c,g;d!==null;){g=d;var v=g.stateNode;if(g.tag===5&&v!==null&&(g=v,p!==null&&(v=Si(d,p),v!=null&&y.push(Ii(d,v,g)))),_)break;d=d.return}0<y.length&&(f=new h(f,w,null,n,m),u.push({event:f,listeners:y}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==Ro&&(w=n.relatedTarget||n.fromElement)&&(Ut(w)||w[ut]))break e;if((h||f)&&(f=m.window===m?m:(f=m.ownerDocument)?f.defaultView||f.parentWindow:window,h?(w=n.relatedTarget||n.toElement,h=c,w=w?Ut(w):null,w!==null&&(_=nn(w),w!==_||w.tag!==5&&w.tag!==6)&&(w=null)):(h=null,w=c),h!==w)){if(y=qa,v="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=Ga,v="onPointerLeave",p="onPointerEnter",d="pointer"),_=h==null?f:dn(h),g=w==null?f:dn(w),f=new y(v,d+"leave",h,n,m),f.target=_,f.relatedTarget=g,v=null,Ut(m)===c&&(y=new y(p,d+"enter",w,n,m),y.target=g,y.relatedTarget=_,v=y),_=v,h&&w)t:{for(y=h,p=w,d=0,g=y;g;g=rn(g))d++;for(g=0,v=p;v;v=rn(v))g++;for(;0<d-g;)y=rn(y),d--;for(;0<g-d;)p=rn(p),g--;for(;d--;){if(y===p||p!==null&&y===p.alternate)break t;y=rn(y),p=rn(p)}y=null}else y=null;h!==null&&oc(u,f,h,y,!1),w!==null&&_!==null&&oc(u,_,w,y,!0)}}e:{if(f=c?dn(c):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var k=Dm;else if(Xa(f))if(Gu)k=Pm;else{k=xm;var C=Lm}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=Rm);if(k&&(k=k(e,c))){Qu(u,k,n,m);break e}C&&C(e,f,c),e==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Io(f,"number",f.value)}switch(C=c?dn(c):window,e){case"focusin":(Xa(C)||C.contentEditable==="true")&&(un=C,Bo=c,pi=null);break;case"focusout":pi=Bo=un=null;break;case"mousedown":Uo=!0;break;case"contextmenu":case"mouseup":case"dragend":Uo=!1,ic(u,n,m);break;case"selectionchange":if($m)break;case"keydown":case"keyup":ic(u,n,m)}var E;if(Fl)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else cn?Wu(e,n)&&(S="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(Hu&&n.locale!=="ko"&&(cn||S!=="onCompositionStart"?S==="onCompositionEnd"&&cn&&(E=Ku()):(_t=m,jl="value"in _t?_t.value:_t.textContent,cn=!0)),C=Br(c,S),0<C.length&&(S=new Qa(S,e,null,n,m),u.push({event:S,listeners:C}),E?S.data=E:(E=qu(n),E!==null&&(S.data=E)))),(E=Nm?Am(e,n):Tm(e,n))&&(c=Br(c,"onBeforeInput"),0<c.length&&(m=new Qa("onBeforeInput","beforeinput",null,n,m),u.push({event:m,listeners:c}),m.data=E))}of(u,t)})}function Ii(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Br(e,t){for(var n=t+"Capture",i=[];e!==null;){var r=e,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Si(e,n),s!=null&&i.unshift(Ii(e,s,r)),s=Si(e,t),s!=null&&i.push(Ii(e,s,r))),e=e.return}return i}function rn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function oc(e,t,n,i,r){for(var s=t._reactName,o=[];n!==null&&n!==i;){var l=n,a=l.alternate,c=l.stateNode;if(a!==null&&a===i)break;l.tag===5&&c!==null&&(l=c,r?(a=Si(n,s),a!=null&&o.unshift(Ii(n,a,l))):r||(a=Si(n,s),a!=null&&o.push(Ii(n,a,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Um=/\r\n?/g,Vm=/\u0000|\uFFFD/g;function lc(e){return(typeof e=="string"?e:""+e).replace(Um,`
`).replace(Vm,"")}function or(e,t,n){if(t=lc(t),lc(e)!==t&&n)throw Error(N(425))}function Ur(){}var Vo=null,Ko=null;function Ho(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wo=typeof setTimeout=="function"?setTimeout:void 0,Km=typeof clearTimeout=="function"?clearTimeout:void 0,ac=typeof Promise=="function"?Promise:void 0,Hm=typeof queueMicrotask=="function"?queueMicrotask:typeof ac<"u"?function(e){return ac.resolve(null).then(e).catch(Wm)}:Wo;function Wm(e){setTimeout(function(){throw e})}function eo(e,t){var n=t,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){e.removeChild(r),Ci(t);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ci(t)}function Ct(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function cc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Bn=Math.random().toString(36).slice(2),Xe="__reactFiber$"+Bn,Oi="__reactProps$"+Bn,ut="__reactContainer$"+Bn,qo="__reactEvents$"+Bn,qm="__reactListeners$"+Bn,Qm="__reactHandles$"+Bn;function Ut(e){var t=e[Xe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ut]||n[Xe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=cc(e);e!==null;){if(n=e[Xe])return n;e=cc(e)}return t}e=n,n=e.parentNode}return null}function Ui(e){return e=e[Xe]||e[ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function dn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function ps(e){return e[Oi]||null}var Qo=[],pn=-1;function Pt(e){return{current:e}}function V(e){0>pn||(e.current=Qo[pn],Qo[pn]=null,pn--)}function z(e,t){pn++,Qo[pn]=e.current,e.current=t}var xt={},me=Pt(xt),Ee=Pt(!1),Gt=xt;function Dn(e,t){var n=e.type.contextTypes;if(!n)return xt;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=t[s];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function be(e){return e=e.childContextTypes,e!=null}function Vr(){V(Ee),V(me)}function uc(e,t,n){if(me.current!==xt)throw Error(N(168));z(me,t),z(Ee,n)}function af(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in t))throw Error(N(108,Lp(e)||"Unknown",r));return q({},n,i)}function Kr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xt,Gt=me.current,z(me,e),z(Ee,Ee.current),!0}function fc(e,t,n){var i=e.stateNode;if(!i)throw Error(N(169));n?(e=af(e,t,Gt),i.__reactInternalMemoizedMergedChildContext=e,V(Ee),V(me),z(me,e)):V(Ee),z(Ee,n)}var it=null,ms=!1,to=!1;function cf(e){it===null?it=[e]:it.push(e)}function Gm(e){ms=!0,cf(e)}function jt(){if(!to&&it!==null){to=!0;var e=0,t=$;try{var n=it;for($=1;e<n.length;e++){var i=n[e];do i=i(!0);while(i!==null)}it=null,ms=!1}catch(r){throw it!==null&&(it=it.slice(e+1)),xu(Ll,jt),r}finally{$=t,to=!1}}return null}var mn=[],hn=0,Hr=null,Wr=0,Le=[],xe=0,Yt=null,rt=1,st="";function Ft(e,t){mn[hn++]=Wr,mn[hn++]=Hr,Hr=e,Wr=t}function uf(e,t,n){Le[xe++]=rt,Le[xe++]=st,Le[xe++]=Yt,Yt=e;var i=rt;e=st;var r=32-We(i)-1;i&=~(1<<r),n+=1;var s=32-We(t)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,rt=1<<32-We(t)+r|n<<r|i,st=s+e}else rt=1<<s|n<<r|i,st=e}function Bl(e){e.return!==null&&(Ft(e,1),uf(e,1,0))}function Ul(e){for(;e===Hr;)Hr=mn[--hn],mn[hn]=null,Wr=mn[--hn],mn[hn]=null;for(;e===Yt;)Yt=Le[--xe],Le[xe]=null,st=Le[--xe],Le[xe]=null,rt=Le[--xe],Le[xe]=null}var Te=null,Ae=null,K=!1,He=null;function ff(e,t){var n=Pe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function dc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Te=e,Ae=Ct(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Te=e,Ae=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Yt!==null?{id:rt,overflow:st}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Pe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Te=e,Ae=null,!0):!1;default:return!1}}function Go(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Yo(e){if(K){var t=Ae;if(t){var n=t;if(!dc(e,t)){if(Go(e))throw Error(N(418));t=Ct(n.nextSibling);var i=Te;t&&dc(e,t)?ff(i,n):(e.flags=e.flags&-4097|2,K=!1,Te=e)}}else{if(Go(e))throw Error(N(418));e.flags=e.flags&-4097|2,K=!1,Te=e}}}function pc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Te=e}function lr(e){if(e!==Te)return!1;if(!K)return pc(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ho(e.type,e.memoizedProps)),t&&(t=Ae)){if(Go(e))throw df(),Error(N(418));for(;t;)ff(e,t),t=Ct(t.nextSibling)}if(pc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ae=Ct(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ae=null}}else Ae=Te?Ct(e.stateNode.nextSibling):null;return!0}function df(){for(var e=Ae;e;)e=Ct(e.nextSibling)}function Ln(){Ae=Te=null,K=!1}function Vl(e){He===null?He=[e]:He.push(e)}var Ym=pt.ReactCurrentBatchConfig;function Zn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var i=n.stateNode}if(!i)throw Error(N(147,e));var r=i,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var l=r.refs;o===null?delete l[s]:l[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function ar(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function mc(e){var t=e._init;return t(e._payload)}function pf(e){function t(p,d){if(e){var g=p.deletions;g===null?(p.deletions=[d],p.flags|=16):g.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function i(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function r(p,d){return p=It(p,d),p.index=0,p.sibling=null,p}function s(p,d,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<d?(p.flags|=2,d):g):(p.flags|=2,d)):(p.flags|=1048576,d)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,d,g,v){return d===null||d.tag!==6?(d=ao(g,p.mode,v),d.return=p,d):(d=r(d,g),d.return=p,d)}function a(p,d,g,v){var k=g.type;return k===an?m(p,d,g.props.children,v,g.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ht&&mc(k)===d.type)?(v=r(d,g.props),v.ref=Zn(p,d,g),v.return=p,v):(v=Or(g.type,g.key,g.props,null,p.mode,v),v.ref=Zn(p,d,g),v.return=p,v)}function c(p,d,g,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=co(g,p.mode,v),d.return=p,d):(d=r(d,g.children||[]),d.return=p,d)}function m(p,d,g,v,k){return d===null||d.tag!==7?(d=Qt(g,p.mode,v,k),d.return=p,d):(d=r(d,g),d.return=p,d)}function u(p,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ao(""+d,p.mode,g),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ji:return g=Or(d.type,d.key,d.props,null,p.mode,g),g.ref=Zn(p,null,d),g.return=p,g;case ln:return d=co(d,p.mode,g),d.return=p,d;case ht:var v=d._init;return u(p,v(d._payload),g)}if(ri(d)||Qn(d))return d=Qt(d,p.mode,g,null),d.return=p,d;ar(p,d)}return null}function f(p,d,g,v){var k=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:l(p,d,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ji:return g.key===k?a(p,d,g,v):null;case ln:return g.key===k?c(p,d,g,v):null;case ht:return k=g._init,f(p,d,k(g._payload),v)}if(ri(g)||Qn(g))return k!==null?null:m(p,d,g,v,null);ar(p,g)}return null}function h(p,d,g,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(g)||null,l(d,p,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ji:return p=p.get(v.key===null?g:v.key)||null,a(d,p,v,k);case ln:return p=p.get(v.key===null?g:v.key)||null,c(d,p,v,k);case ht:var C=v._init;return h(p,d,g,C(v._payload),k)}if(ri(v)||Qn(v))return p=p.get(g)||null,m(d,p,v,k,null);ar(d,v)}return null}function w(p,d,g,v){for(var k=null,C=null,E=d,S=d=0,O=null;E!==null&&S<g.length;S++){E.index>S?(O=E,E=null):O=E.sibling;var I=f(p,E,g[S],v);if(I===null){E===null&&(E=O);break}e&&E&&I.alternate===null&&t(p,E),d=s(I,d,S),C===null?k=I:C.sibling=I,C=I,E=O}if(S===g.length)return n(p,E),K&&Ft(p,S),k;if(E===null){for(;S<g.length;S++)E=u(p,g[S],v),E!==null&&(d=s(E,d,S),C===null?k=E:C.sibling=E,C=E);return K&&Ft(p,S),k}for(E=i(p,E);S<g.length;S++)O=h(E,p,S,g[S],v),O!==null&&(e&&O.alternate!==null&&E.delete(O.key===null?S:O.key),d=s(O,d,S),C===null?k=O:C.sibling=O,C=O);return e&&E.forEach(function(D){return t(p,D)}),K&&Ft(p,S),k}function y(p,d,g,v){var k=Qn(g);if(typeof k!="function")throw Error(N(150));if(g=k.call(g),g==null)throw Error(N(151));for(var C=k=null,E=d,S=d=0,O=null,I=g.next();E!==null&&!I.done;S++,I=g.next()){E.index>S?(O=E,E=null):O=E.sibling;var D=f(p,E,I.value,v);if(D===null){E===null&&(E=O);break}e&&E&&D.alternate===null&&t(p,E),d=s(D,d,S),C===null?k=D:C.sibling=D,C=D,E=O}if(I.done)return n(p,E),K&&Ft(p,S),k;if(E===null){for(;!I.done;S++,I=g.next())I=u(p,I.value,v),I!==null&&(d=s(I,d,S),C===null?k=I:C.sibling=I,C=I);return K&&Ft(p,S),k}for(E=i(p,E);!I.done;S++,I=g.next())I=h(E,p,S,I.value,v),I!==null&&(e&&I.alternate!==null&&E.delete(I.key===null?S:I.key),d=s(I,d,S),C===null?k=I:C.sibling=I,C=I);return e&&E.forEach(function(G){return t(p,G)}),K&&Ft(p,S),k}function _(p,d,g,v){if(typeof g=="object"&&g!==null&&g.type===an&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ji:e:{for(var k=g.key,C=d;C!==null;){if(C.key===k){if(k=g.type,k===an){if(C.tag===7){n(p,C.sibling),d=r(C,g.props.children),d.return=p,p=d;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ht&&mc(k)===C.type){n(p,C.sibling),d=r(C,g.props),d.ref=Zn(p,C,g),d.return=p,p=d;break e}n(p,C);break}else t(p,C);C=C.sibling}g.type===an?(d=Qt(g.props.children,p.mode,v,g.key),d.return=p,p=d):(v=Or(g.type,g.key,g.props,null,p.mode,v),v.ref=Zn(p,d,g),v.return=p,p=v)}return o(p);case ln:e:{for(C=g.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(p,d.sibling),d=r(d,g.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=co(g,p.mode,v),d.return=p,p=d}return o(p);case ht:return C=g._init,_(p,d,C(g._payload),v)}if(ri(g))return w(p,d,g,v);if(Qn(g))return y(p,d,g,v);ar(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(n(p,d.sibling),d=r(d,g),d.return=p,p=d):(n(p,d),d=ao(g,p.mode,v),d.return=p,p=d),o(p)):n(p,d)}return _}var xn=pf(!0),mf=pf(!1),qr=Pt(null),Qr=null,gn=null,Kl=null;function Hl(){Kl=gn=Qr=null}function Wl(e){var t=qr.current;V(qr),e._currentValue=t}function Jo(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Nn(e,t){Qr=e,Kl=gn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function $e(e){var t=e._currentValue;if(Kl!==e)if(e={context:e,memoizedValue:t,next:null},gn===null){if(Qr===null)throw Error(N(308));gn=e,Qr.dependencies={lanes:0,firstContext:e}}else gn=gn.next=e;return t}var Vt=null;function ql(e){Vt===null?Vt=[e]:Vt.push(e)}function hf(e,t,n,i){var r=t.interleaved;return r===null?(n.next=n,ql(t)):(n.next=r.next,r.next=n),t.interleaved=n,ft(e,i)}function ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var gt=!1;function Ql(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nt(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,M&2){var r=i.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),i.pending=t,ft(e,n)}return r=i.interleaved,r===null?(t.next=t,ql(i)):(t.next=r.next,r.next=t),i.interleaved=t,ft(e,n)}function br(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,xl(e,n)}}function hc(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=t:s=s.next=t}else r=s=t;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Gr(e,t,n,i){var r=e.updateQueue;gt=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var a=l,c=a.next;a.next=null,o===null?s=c:o.next=c,o=a;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==o&&(l===null?m.firstBaseUpdate=c:l.next=c,m.lastBaseUpdate=a))}if(s!==null){var u=r.baseState;o=0,m=c=a=null,l=s;do{var f=l.lane,h=l.eventTime;if((i&f)===f){m!==null&&(m=m.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,y=l;switch(f=t,h=n,y.tag){case 1:if(w=y.payload,typeof w=="function"){u=w.call(h,u,f);break e}u=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,f=typeof w=="function"?w.call(h,u,f):w,f==null)break e;u=q({},u,f);break e;case 2:gt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=r.effects,f===null?r.effects=[l]:f.push(l))}else h={eventTime:h,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(c=m=h,a=u):m=m.next=h,o|=f;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;f=l,l=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(m===null&&(a=u),r.baseState=a,r.firstBaseUpdate=c,r.lastBaseUpdate=m,t=r.shared.interleaved,t!==null){r=t;do o|=r.lane,r=r.next;while(r!==t)}else s===null&&(r.shared.lanes=0);Xt|=o,e.lanes=o,e.memoizedState=u}}function gc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(N(191,r));r.call(i)}}}var Vi={},et=Pt(Vi),Di=Pt(Vi),Li=Pt(Vi);function Kt(e){if(e===Vi)throw Error(N(174));return e}function Gl(e,t){switch(z(Li,t),z(Di,e),z(et,Vi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Do(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Do(t,e)}V(et),z(et,t)}function Rn(){V(et),V(Di),V(Li)}function yf(e){Kt(Li.current);var t=Kt(et.current),n=Do(t,e.type);t!==n&&(z(Di,e),z(et,n))}function Yl(e){Di.current===e&&(V(et),V(Di))}var H=Pt(0);function Yr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var no=[];function Jl(){for(var e=0;e<no.length;e++)no[e]._workInProgressVersionPrimary=null;no.length=0}var Cr=pt.ReactCurrentDispatcher,io=pt.ReactCurrentBatchConfig,Jt=0,W=null,ne=null,se=null,Jr=!1,mi=!1,xi=0,Jm=0;function fe(){throw Error(N(321))}function Xl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Qe(e[n],t[n]))return!1;return!0}function Zl(e,t,n,i,r,s){if(Jt=s,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Cr.current=e===null||e.memoizedState===null?th:nh,e=n(i,r),mi){s=0;do{if(mi=!1,xi=0,25<=s)throw Error(N(301));s+=1,se=ne=null,t.updateQueue=null,Cr.current=ih,e=n(i,r)}while(mi)}if(Cr.current=Xr,t=ne!==null&&ne.next!==null,Jt=0,se=ne=W=null,Jr=!1,t)throw Error(N(300));return e}function ea(){var e=xi!==0;return xi=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?W.memoizedState=se=e:se=se.next=e,se}function Fe(){if(ne===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=se===null?W.memoizedState:se.next;if(t!==null)se=t,ne=e;else{if(e===null)throw Error(N(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},se===null?W.memoizedState=se=e:se=se.next=e}return se}function Ri(e,t){return typeof t=="function"?t(e):t}function ro(e){var t=Fe(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var i=ne,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var l=o=null,a=null,c=s;do{var m=c.lane;if((Jt&m)===m)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:e(i,c.action);else{var u={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(l=a=u,o=i):a=a.next=u,W.lanes|=m,Xt|=m}c=c.next}while(c!==null&&c!==s);a===null?o=i:a.next=l,Qe(i,t.memoizedState)||(Se=!0),t.memoizedState=i,t.baseState=o,t.baseQueue=a,n.lastRenderedState=i}if(e=n.interleaved,e!==null){r=e;do s=r.lane,W.lanes|=s,Xt|=s,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function so(e){var t=Fe(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var i=n.dispatch,r=n.pending,s=t.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=e(s,o.action),o=o.next;while(o!==r);Qe(s,t.memoizedState)||(Se=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function vf(){}function wf(e,t){var n=W,i=Fe(),r=t(),s=!Qe(i.memoizedState,r);if(s&&(i.memoizedState=r,Se=!0),i=i.queue,ta(Sf.bind(null,n,i,e),[e]),i.getSnapshot!==t||s||se!==null&&se.memoizedState.tag&1){if(n.flags|=2048,Pi(9,kf.bind(null,n,i,r,t),void 0,null),oe===null)throw Error(N(349));Jt&30||_f(n,t,r)}return r}function _f(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function kf(e,t,n,i){t.value=n,t.getSnapshot=i,Ef(t)&&bf(e)}function Sf(e,t,n){return n(function(){Ef(t)&&bf(e)})}function Ef(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Qe(e,n)}catch{return!0}}function bf(e){var t=ft(e,1);t!==null&&qe(t,e,1,-1)}function yc(e){var t=Je();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ri,lastRenderedState:e},t.queue=e,e=e.dispatch=eh.bind(null,W,e),[t.memoizedState,e]}function Pi(e,t,n,i){return e={tag:e,create:t,destroy:n,deps:i,next:null},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e)),e}function Cf(){return Fe().memoizedState}function Nr(e,t,n,i){var r=Je();W.flags|=e,r.memoizedState=Pi(1|t,n,void 0,i===void 0?null:i)}function hs(e,t,n,i){var r=Fe();i=i===void 0?null:i;var s=void 0;if(ne!==null){var o=ne.memoizedState;if(s=o.destroy,i!==null&&Xl(i,o.deps)){r.memoizedState=Pi(t,n,s,i);return}}W.flags|=e,r.memoizedState=Pi(1|t,n,s,i)}function vc(e,t){return Nr(8390656,8,e,t)}function ta(e,t){return hs(2048,8,e,t)}function Nf(e,t){return hs(4,2,e,t)}function Af(e,t){return hs(4,4,e,t)}function Tf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function If(e,t,n){return n=n!=null?n.concat([e]):null,hs(4,4,Tf.bind(null,t,e),n)}function na(){}function Of(e,t){var n=Fe();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&Xl(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Df(e,t){var n=Fe();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&Xl(t,i[1])?i[0]:(e=e(),n.memoizedState=[e,t],e)}function Lf(e,t,n){return Jt&21?(Qe(n,t)||(n=ju(),W.lanes|=n,Xt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function Xm(e,t){var n=$;$=n!==0&&4>n?n:4,e(!0);var i=io.transition;io.transition={};try{e(!1),t()}finally{$=n,io.transition=i}}function xf(){return Fe().memoizedState}function Zm(e,t,n){var i=Tt(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Rf(e))Pf(t,n);else if(n=hf(e,t,n,i),n!==null){var r=ye();qe(n,e,i,r),jf(n,t,i)}}function eh(e,t,n){var i=Tt(e),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rf(e))Pf(t,r);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,l=s(o,n);if(r.hasEagerState=!0,r.eagerState=l,Qe(l,o)){var a=t.interleaved;a===null?(r.next=r,ql(t)):(r.next=a.next,a.next=r),t.interleaved=r;return}}catch{}finally{}n=hf(e,t,r,i),n!==null&&(r=ye(),qe(n,e,i,r),jf(n,t,i))}}function Rf(e){var t=e.alternate;return e===W||t!==null&&t===W}function Pf(e,t){mi=Jr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function jf(e,t,n){if(n&4194240){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,xl(e,n)}}var Xr={readContext:$e,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},th={readContext:$e,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:vc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Nr(4194308,4,Tf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Nr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Nr(4,2,e,t)},useMemo:function(e,t){var n=Je();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var i=Je();return t=n!==void 0?n(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=Zm.bind(null,W,e),[i.memoizedState,e]},useRef:function(e){var t=Je();return e={current:e},t.memoizedState=e},useState:yc,useDebugValue:na,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=yc(!1),t=e[0];return e=Xm.bind(null,e[1]),Je().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=W,r=Je();if(K){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),oe===null)throw Error(N(349));Jt&30||_f(i,t,n)}r.memoizedState=n;var s={value:n,getSnapshot:t};return r.queue=s,vc(Sf.bind(null,i,s,e),[e]),i.flags|=2048,Pi(9,kf.bind(null,i,s,n,t),void 0,null),n},useId:function(){var e=Je(),t=oe.identifierPrefix;if(K){var n=st,i=rt;n=(i&~(1<<32-We(i)-1)).toString(32)+n,t=":"+t+"R"+n,n=xi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Jm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},nh={readContext:$e,useCallback:Of,useContext:$e,useEffect:ta,useImperativeHandle:If,useInsertionEffect:Nf,useLayoutEffect:Af,useMemo:Df,useReducer:ro,useRef:Cf,useState:function(){return ro(Ri)},useDebugValue:na,useDeferredValue:function(e){var t=Fe();return Lf(t,ne.memoizedState,e)},useTransition:function(){var e=ro(Ri)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:vf,useSyncExternalStore:wf,useId:xf,unstable_isNewReconciler:!1},ih={readContext:$e,useCallback:Of,useContext:$e,useEffect:ta,useImperativeHandle:If,useInsertionEffect:Nf,useLayoutEffect:Af,useMemo:Df,useReducer:so,useRef:Cf,useState:function(){return so(Ri)},useDebugValue:na,useDeferredValue:function(e){var t=Fe();return ne===null?t.memoizedState=e:Lf(t,ne.memoizedState,e)},useTransition:function(){var e=so(Ri)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:vf,useSyncExternalStore:wf,useId:xf,unstable_isNewReconciler:!1};function Ve(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Xo(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var gs={isMounted:function(e){return(e=e._reactInternals)?nn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=ye(),r=Tt(e),s=lt(i,r);s.payload=t,n!=null&&(s.callback=n),t=Nt(e,s,r),t!==null&&(qe(t,e,r,i),br(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=ye(),r=Tt(e),s=lt(i,r);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Nt(e,s,r),t!==null&&(qe(t,e,r,i),br(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ye(),i=Tt(e),r=lt(n,i);r.tag=2,t!=null&&(r.callback=t),t=Nt(e,r,i),t!==null&&(qe(t,e,i,n),br(t,e,i))}};function wc(e,t,n,i,r,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,o):t.prototype&&t.prototype.isPureReactComponent?!Ai(n,i)||!Ai(r,s):!0}function Mf(e,t,n){var i=!1,r=xt,s=t.contextType;return typeof s=="object"&&s!==null?s=$e(s):(r=be(t)?Gt:me.current,i=t.contextTypes,s=(i=i!=null)?Dn(e,r):xt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=gs,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=s),t}function _c(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&gs.enqueueReplaceState(t,t.state,null)}function Zo(e,t,n,i){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs={},Ql(e);var s=t.contextType;typeof s=="object"&&s!==null?r.context=$e(s):(s=be(t)?Gt:me.current,r.context=Dn(e,s)),r.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Xo(e,t,s,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&gs.enqueueReplaceState(r,r.state,null),Gr(e,n,r,i),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function Pn(e,t){try{var n="",i=t;do n+=Dp(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:r,digest:null}}function oo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function el(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var rh=typeof WeakMap=="function"?WeakMap:Map;function $f(e,t,n){n=lt(-1,n),n.tag=3,n.payload={element:null};var i=t.value;return n.callback=function(){es||(es=!0,ul=i),el(e,t)},n}function Ff(e,t,n){n=lt(-1,n),n.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var r=t.value;n.payload=function(){return i(r)},n.callback=function(){el(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){el(e,t),typeof i!="function"&&(At===null?At=new Set([this]):At.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function kc(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new rh;var r=new Set;i.set(t,r)}else r=i.get(t),r===void 0&&(r=new Set,i.set(t,r));r.has(n)||(r.add(n),e=vh.bind(null,e,t,n),t.then(e,e))}function Sc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ec(e,t,n,i,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=lt(-1,1),t.tag=2,Nt(n,t,1))),n.lanes|=1),e)}var sh=pt.ReactCurrentOwner,Se=!1;function he(e,t,n,i){t.child=e===null?mf(t,null,n,i):xn(t,e.child,n,i)}function bc(e,t,n,i,r){n=n.render;var s=t.ref;return Nn(t,r),i=Zl(e,t,n,i,s,r),n=ea(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,dt(e,t,r)):(K&&n&&Bl(t),t.flags|=1,he(e,t,i,r),t.child)}function Cc(e,t,n,i,r){if(e===null){var s=n.type;return typeof s=="function"&&!ua(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,zf(e,t,s,i,r)):(e=Or(n.type,null,i,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ai,n(o,i)&&e.ref===t.ref)return dt(e,t,r)}return t.flags|=1,e=It(s,i),e.ref=t.ref,e.return=t,t.child=e}function zf(e,t,n,i,r){if(e!==null){var s=e.memoizedProps;if(Ai(s,i)&&e.ref===t.ref)if(Se=!1,t.pendingProps=i=s,(e.lanes&r)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,dt(e,t,r)}return tl(e,t,n,i,r)}function Bf(e,t,n){var i=t.pendingProps,r=i.children,s=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},z(vn,Ne),Ne|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,z(vn,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,z(vn,Ne),Ne|=i}else s!==null?(i=s.baseLanes|n,t.memoizedState=null):i=n,z(vn,Ne),Ne|=i;return he(e,t,r,n),t.child}function Uf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function tl(e,t,n,i,r){var s=be(n)?Gt:me.current;return s=Dn(t,s),Nn(t,r),n=Zl(e,t,n,i,s,r),i=ea(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,dt(e,t,r)):(K&&i&&Bl(t),t.flags|=1,he(e,t,n,r),t.child)}function Nc(e,t,n,i,r){if(be(n)){var s=!0;Kr(t)}else s=!1;if(Nn(t,r),t.stateNode===null)Ar(e,t),Mf(t,n,i),Zo(t,n,i,r),i=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var a=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=$e(c):(c=be(n)?Gt:me.current,c=Dn(t,c));var m=n.getDerivedStateFromProps,u=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";u||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==i||a!==c)&&_c(t,o,i,c),gt=!1;var f=t.memoizedState;o.state=f,Gr(t,i,o,r),a=t.memoizedState,l!==i||f!==a||Ee.current||gt?(typeof m=="function"&&(Xo(t,n,m,i),a=t.memoizedState),(l=gt||wc(t,n,l,i,f,a,c))?(u||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=a),o.props=i,o.state=a,o.context=c,i=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{o=t.stateNode,gf(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Ve(t.type,l),o.props=c,u=t.pendingProps,f=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=$e(a):(a=be(n)?Gt:me.current,a=Dn(t,a));var h=n.getDerivedStateFromProps;(m=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==u||f!==a)&&_c(t,o,i,a),gt=!1,f=t.memoizedState,o.state=f,Gr(t,i,o,r);var w=t.memoizedState;l!==u||f!==w||Ee.current||gt?(typeof h=="function"&&(Xo(t,n,h,i),w=t.memoizedState),(c=gt||wc(t,n,c,i,f,w,a)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,w,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,w,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=w),o.props=i,o.state=w,o.context=a,i=c):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return nl(e,t,n,i,s,r)}function nl(e,t,n,i,r,s){Uf(e,t);var o=(t.flags&128)!==0;if(!i&&!o)return r&&fc(t,n,!1),dt(e,t,s);i=t.stateNode,sh.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&o?(t.child=xn(t,e.child,null,s),t.child=xn(t,null,l,s)):he(e,t,l,s),t.memoizedState=i.state,r&&fc(t,n,!0),t.child}function Vf(e){var t=e.stateNode;t.pendingContext?uc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&uc(e,t.context,!1),Gl(e,t.containerInfo)}function Ac(e,t,n,i,r){return Ln(),Vl(r),t.flags|=256,he(e,t,n,i),t.child}var il={dehydrated:null,treeContext:null,retryLane:0};function rl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Kf(e,t,n){var i=t.pendingProps,r=H.current,s=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(r&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),z(H,r&1),e===null)return Yo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=i.children,e=i.fallback,s?(i=t.mode,s=t.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ws(o,i,0,null),e=Qt(e,i,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=rl(n),t.memoizedState=il,e):ia(t,o));if(r=e.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return oh(e,t,o,i,l,r,n);if(s){s=i.fallback,o=t.mode,r=e.child,l=r.sibling;var a={mode:"hidden",children:i.children};return!(o&1)&&t.child!==r?(i=t.child,i.childLanes=0,i.pendingProps=a,t.deletions=null):(i=It(r,a),i.subtreeFlags=r.subtreeFlags&14680064),l!==null?s=It(l,s):(s=Qt(s,o,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,o=e.child.memoizedState,o=o===null?rl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=il,i}return s=e.child,e=s.sibling,i=It(s,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=n),i.return=t,i.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function ia(e,t){return t=ws({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function cr(e,t,n,i){return i!==null&&Vl(i),xn(t,e.child,null,n),e=ia(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function oh(e,t,n,i,r,s,o){if(n)return t.flags&256?(t.flags&=-257,i=oo(Error(N(422))),cr(e,t,o,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=i.fallback,r=t.mode,i=ws({mode:"visible",children:i.children},r,0,null),s=Qt(s,r,o,null),s.flags|=2,i.return=t,s.return=t,i.sibling=s,t.child=i,t.mode&1&&xn(t,e.child,null,o),t.child.memoizedState=rl(o),t.memoizedState=il,s);if(!(t.mode&1))return cr(e,t,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var l=i.dgst;return i=l,s=Error(N(419)),i=oo(s,i,void 0),cr(e,t,o,i)}if(l=(o&e.childLanes)!==0,Se||l){if(i=oe,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ft(e,r),qe(i,e,r,-1))}return ca(),i=oo(Error(N(421))),cr(e,t,o,i)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=wh.bind(null,e),r._reactRetry=t,null):(e=s.treeContext,Ae=Ct(r.nextSibling),Te=t,K=!0,He=null,e!==null&&(Le[xe++]=rt,Le[xe++]=st,Le[xe++]=Yt,rt=e.id,st=e.overflow,Yt=t),t=ia(t,i.children),t.flags|=4096,t)}function Tc(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Jo(e.return,t,n)}function lo(e,t,n,i,r){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Hf(e,t,n){var i=t.pendingProps,r=i.revealOrder,s=i.tail;if(he(e,t,i.children,n),i=H.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tc(e,n,t);else if(e.tag===19)Tc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(z(H,i),!(t.mode&1))t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Yr(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),lo(t,!1,r,n,s);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Yr(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}lo(t,!0,n,null,s);break;case"together":lo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ar(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=It(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=It(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function lh(e,t,n){switch(t.tag){case 3:Vf(t),Ln();break;case 5:yf(t);break;case 1:be(t.type)&&Kr(t);break;case 4:Gl(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,r=t.memoizedProps.value;z(qr,i._currentValue),i._currentValue=r;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(z(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?Kf(e,t,n):(z(H,H.current&1),e=dt(e,t,n),e!==null?e.sibling:null);z(H,H.current&1);break;case 19:if(i=(n&t.childLanes)!==0,e.flags&128){if(i)return Hf(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),z(H,H.current),i)break;return null;case 22:case 23:return t.lanes=0,Bf(e,t,n)}return dt(e,t,n)}var Wf,sl,qf,Qf;Wf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sl=function(){};qf=function(e,t,n,i){var r=e.memoizedProps;if(r!==i){e=t.stateNode,Kt(et.current);var s=null;switch(n){case"input":r=Ao(e,r),i=Ao(e,i),s=[];break;case"select":r=q({},r,{value:void 0}),i=q({},i,{value:void 0}),s=[];break;case"textarea":r=Oo(e,r),i=Oo(e,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Ur)}Lo(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var l=r[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(_i.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var a=i[c];if(l=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&a!==l&&(a!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(_i.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&U("scroll",e),s||l===a||(s=[])):(s=s||[]).push(c,a))}n&&(s=s||[]).push("style",n);var c=s;(t.updateQueue=c)&&(t.flags|=4)}};Qf=function(e,t,n,i){n!==i&&(t.flags|=4)};function ei(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function ah(e,t,n){var i=t.pendingProps;switch(Ul(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return be(t.type)&&Vr(),de(t),null;case 3:return i=t.stateNode,Rn(),V(Ee),V(me),Jl(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(lr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,He!==null&&(pl(He),He=null))),sl(e,t),de(t),null;case 5:Yl(t);var r=Kt(Li.current);if(n=t.type,e!==null&&t.stateNode!=null)qf(e,t,n,i,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(N(166));return de(t),null}if(e=Kt(et.current),lr(t)){i=t.stateNode,n=t.type;var s=t.memoizedProps;switch(i[Xe]=t,i[Oi]=s,e=(t.mode&1)!==0,n){case"dialog":U("cancel",i),U("close",i);break;case"iframe":case"object":case"embed":U("load",i);break;case"video":case"audio":for(r=0;r<oi.length;r++)U(oi[r],i);break;case"source":U("error",i);break;case"img":case"image":case"link":U("error",i),U("load",i);break;case"details":U("toggle",i);break;case"input":Ma(i,s),U("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},U("invalid",i);break;case"textarea":Fa(i,s),U("invalid",i)}Lo(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?i.textContent!==l&&(s.suppressHydrationWarning!==!0&&or(i.textContent,l,e),r=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&or(i.textContent,l,e),r=["children",""+l]):_i.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&U("scroll",i)}switch(n){case"input":Xi(i),$a(i,s,!0);break;case"textarea":Xi(i),za(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ur)}i=r,t.updateQueue=i,i!==null&&(t.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ku(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=o.createElement(n,{is:i.is}):(e=o.createElement(n),n==="select"&&(o=e,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):e=o.createElementNS(e,n),e[Xe]=t,e[Oi]=i,Wf(e,t,!1,!1),t.stateNode=e;e:{switch(o=xo(n,i),n){case"dialog":U("cancel",e),U("close",e),r=i;break;case"iframe":case"object":case"embed":U("load",e),r=i;break;case"video":case"audio":for(r=0;r<oi.length;r++)U(oi[r],e);r=i;break;case"source":U("error",e),r=i;break;case"img":case"image":case"link":U("error",e),U("load",e),r=i;break;case"details":U("toggle",e),r=i;break;case"input":Ma(e,i),r=Ao(e,i),U("invalid",e);break;case"option":r=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},r=q({},i,{value:void 0}),U("invalid",e);break;case"textarea":Fa(e,i),r=Oo(e,i),U("invalid",e);break;default:r=i}Lo(n,r),l=r;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?bu(e,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Su(e,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&ki(e,a):typeof a=="number"&&ki(e,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(_i.hasOwnProperty(s)?a!=null&&s==="onScroll"&&U("scroll",e):a!=null&&Al(e,s,a,o))}switch(n){case"input":Xi(e),$a(e,i,!1);break;case"textarea":Xi(e),za(e);break;case"option":i.value!=null&&e.setAttribute("value",""+Lt(i.value));break;case"select":e.multiple=!!i.multiple,s=i.value,s!=null?Sn(e,!!i.multiple,s,!1):i.defaultValue!=null&&Sn(e,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Ur)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)Qf(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(N(166));if(n=Kt(Li.current),Kt(et.current),lr(t)){if(i=t.stateNode,n=t.memoizedProps,i[Xe]=t,(s=i.nodeValue!==n)&&(e=Te,e!==null))switch(e.tag){case 3:or(i.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&or(i.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Xe]=t,t.stateNode=i}return de(t),null;case 13:if(V(H),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Ae!==null&&t.mode&1&&!(t.flags&128))df(),Ln(),t.flags|=98560,s=!1;else if(s=lr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(N(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(N(317));s[Xe]=t}else Ln(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),s=!1}else He!==null&&(pl(He),He=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?ie===0&&(ie=3):ca())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return Rn(),sl(e,t),e===null&&Ti(t.stateNode.containerInfo),de(t),null;case 10:return Wl(t.type._context),de(t),null;case 17:return be(t.type)&&Vr(),de(t),null;case 19:if(V(H),s=t.memoizedState,s===null)return de(t),null;if(i=(t.flags&128)!==0,o=s.rendering,o===null)if(i)ei(s,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Yr(e),o!==null){for(t.flags|=128,ei(s,!1),i=o.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)s=n,e=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return z(H,H.current&1|2),t.child}e=e.sibling}s.tail!==null&&J()>jn&&(t.flags|=128,i=!0,ei(s,!1),t.lanes=4194304)}else{if(!i)if(e=Yr(o),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ei(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!K)return de(t),null}else 2*J()-s.renderingStartTime>jn&&n!==1073741824&&(t.flags|=128,i=!0,ei(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=J(),t.sibling=null,n=H.current,z(H,i?n&1|2:n&1),t):(de(t),null);case 22:case 23:return aa(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?Ne&1073741824&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function ch(e,t){switch(Ul(t),t.tag){case 1:return be(t.type)&&Vr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rn(),V(Ee),V(me),Jl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Yl(t),null;case 13:if(V(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));Ln()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(H),null;case 4:return Rn(),null;case 10:return Wl(t.type._context),null;case 22:case 23:return aa(),null;case 24:return null;default:return null}}var ur=!1,pe=!1,uh=typeof WeakSet=="function"?WeakSet:Set,A=null;function yn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Q(e,t,i)}else n.current=null}function ol(e,t,n){try{n()}catch(i){Q(e,t,i)}}var Ic=!1;function fh(e,t){if(Vo=Fr,e=Xu(),zl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,c=0,m=0,u=e,f=null;t:for(;;){for(var h;u!==n||r!==0&&u.nodeType!==3||(l=o+r),u!==s||i!==0&&u.nodeType!==3||(a=o+i),u.nodeType===3&&(o+=u.nodeValue.length),(h=u.firstChild)!==null;)f=u,u=h;for(;;){if(u===e)break t;if(f===n&&++c===r&&(l=o),f===s&&++m===i&&(a=o),(h=u.nextSibling)!==null)break;u=f,f=u.parentNode}u=h}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ko={focusedElem:e,selectionRange:n},Fr=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,_=w.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ve(t.type,y),_);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(v){Q(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return w=Ic,Ic=!1,w}function hi(e,t,n){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&e)===e){var s=r.destroy;r.destroy=void 0,s!==void 0&&ol(t,n,s)}r=r.next}while(r!==i)}}function ys(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==t)}}function ll(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Gf(e){var t=e.alternate;t!==null&&(e.alternate=null,Gf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Xe],delete t[Oi],delete t[qo],delete t[qm],delete t[Qm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Yf(e){return e.tag===5||e.tag===3||e.tag===4}function Oc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function al(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ur));else if(i!==4&&(e=e.child,e!==null))for(al(e,t,n),e=e.sibling;e!==null;)al(e,t,n),e=e.sibling}function cl(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(cl(e,t,n),e=e.sibling;e!==null;)cl(e,t,n),e=e.sibling}var ae=null,Ke=!1;function mt(e,t,n){for(n=n.child;n!==null;)Jf(e,t,n),n=n.sibling}function Jf(e,t,n){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(cs,n)}catch{}switch(n.tag){case 5:pe||yn(n,t);case 6:var i=ae,r=Ke;ae=null,mt(e,t,n),ae=i,Ke=r,ae!==null&&(Ke?(e=ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ae.removeChild(n.stateNode));break;case 18:ae!==null&&(Ke?(e=ae,n=n.stateNode,e.nodeType===8?eo(e.parentNode,n):e.nodeType===1&&eo(e,n),Ci(e)):eo(ae,n.stateNode));break;case 4:i=ae,r=Ke,ae=n.stateNode.containerInfo,Ke=!0,mt(e,t,n),ae=i,Ke=r;break;case 0:case 11:case 14:case 15:if(!pe&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ol(n,t,o),r=r.next}while(r!==i)}mt(e,t,n);break;case 1:if(!pe&&(yn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(l){Q(n,t,l)}mt(e,t,n);break;case 21:mt(e,t,n);break;case 22:n.mode&1?(pe=(i=pe)||n.memoizedState!==null,mt(e,t,n),pe=i):mt(e,t,n);break;default:mt(e,t,n)}}function Dc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new uh),t.forEach(function(i){var r=_h.bind(null,e,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Be(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:ae=l.stateNode,Ke=!1;break e;case 3:ae=l.stateNode.containerInfo,Ke=!0;break e;case 4:ae=l.stateNode.containerInfo,Ke=!0;break e}l=l.return}if(ae===null)throw Error(N(160));Jf(s,o,r),ae=null,Ke=!1;var a=r.alternate;a!==null&&(a.return=null),r.return=null}catch(c){Q(r,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Xf(t,e),t=t.sibling}function Xf(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Be(t,e),Ye(e),i&4){try{hi(3,e,e.return),ys(3,e)}catch(y){Q(e,e.return,y)}try{hi(5,e,e.return)}catch(y){Q(e,e.return,y)}}break;case 1:Be(t,e),Ye(e),i&512&&n!==null&&yn(n,n.return);break;case 5:if(Be(t,e),Ye(e),i&512&&n!==null&&yn(n,n.return),e.flags&32){var r=e.stateNode;try{ki(r,"")}catch(y){Q(e,e.return,y)}}if(i&4&&(r=e.stateNode,r!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&wu(r,s),xo(l,o);var c=xo(l,s);for(o=0;o<a.length;o+=2){var m=a[o],u=a[o+1];m==="style"?bu(r,u):m==="dangerouslySetInnerHTML"?Su(r,u):m==="children"?ki(r,u):Al(r,m,u,c)}switch(l){case"input":To(r,s);break;case"textarea":_u(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?Sn(r,!!s.multiple,h,!1):f!==!!s.multiple&&(s.defaultValue!=null?Sn(r,!!s.multiple,s.defaultValue,!0):Sn(r,!!s.multiple,s.multiple?[]:"",!1))}r[Oi]=s}catch(y){Q(e,e.return,y)}}break;case 6:if(Be(t,e),Ye(e),i&4){if(e.stateNode===null)throw Error(N(162));r=e.stateNode,s=e.memoizedProps;try{r.nodeValue=s}catch(y){Q(e,e.return,y)}}break;case 3:if(Be(t,e),Ye(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ci(t.containerInfo)}catch(y){Q(e,e.return,y)}break;case 4:Be(t,e),Ye(e);break;case 13:Be(t,e),Ye(e),r=e.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(oa=J())),i&4&&Dc(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(pe=(c=pe)||m,Be(t,e),pe=c):Be(t,e),Ye(e),i&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(A=e,m=e.child;m!==null;){for(u=A=m;A!==null;){switch(f=A,h=f.child,f.tag){case 0:case 11:case 14:case 15:hi(4,f,f.return);break;case 1:yn(f,f.return);var w=f.stateNode;if(typeof w.componentWillUnmount=="function"){i=f,n=f.return;try{t=i,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(y){Q(i,n,y)}}break;case 5:yn(f,f.return);break;case 22:if(f.memoizedState!==null){xc(u);continue}}h!==null?(h.return=f,A=h):xc(u)}m=m.sibling}e:for(m=null,u=e;;){if(u.tag===5){if(m===null){m=u;try{r=u.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=u.stateNode,a=u.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Eu("display",o))}catch(y){Q(e,e.return,y)}}}else if(u.tag===6){if(m===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(y){Q(e,e.return,y)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===e)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break e;for(;u.sibling===null;){if(u.return===null||u.return===e)break e;m===u&&(m=null),u=u.return}m===u&&(m=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:Be(t,e),Ye(e),i&4&&Dc(e);break;case 21:break;default:Be(t,e),Ye(e)}}function Ye(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Yf(n)){var i=n;break e}n=n.return}throw Error(N(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ki(r,""),i.flags&=-33);var s=Oc(e);cl(e,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,l=Oc(e);al(e,l,o);break;default:throw Error(N(161))}}catch(a){Q(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dh(e,t,n){A=e,Zf(e)}function Zf(e,t,n){for(var i=(e.mode&1)!==0;A!==null;){var r=A,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ur;if(!o){var l=r.alternate,a=l!==null&&l.memoizedState!==null||pe;l=ur;var c=pe;if(ur=o,(pe=a)&&!c)for(A=r;A!==null;)o=A,a=o.child,o.tag===22&&o.memoizedState!==null?Rc(r):a!==null?(a.return=o,A=a):Rc(r);for(;s!==null;)A=s,Zf(s),s=s.sibling;A=r,ur=l,pe=c}Lc(e)}else r.subtreeFlags&8772&&s!==null?(s.return=r,A=s):Lc(e)}}function Lc(e){for(;A!==null;){var t=A;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pe||ys(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!pe)if(n===null)i.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:Ve(t.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&gc(t,s,i);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}gc(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var u=m.dehydrated;u!==null&&Ci(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}pe||t.flags&512&&ll(t)}catch(f){Q(t,t.return,f)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function xc(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function Rc(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ys(4,t)}catch(a){Q(t,n,a)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var r=t.return;try{i.componentDidMount()}catch(a){Q(t,r,a)}}var s=t.return;try{ll(t)}catch(a){Q(t,s,a)}break;case 5:var o=t.return;try{ll(t)}catch(a){Q(t,o,a)}}}catch(a){Q(t,t.return,a)}if(t===e){A=null;break}var l=t.sibling;if(l!==null){l.return=t.return,A=l;break}A=t.return}}var ph=Math.ceil,Zr=pt.ReactCurrentDispatcher,ra=pt.ReactCurrentOwner,je=pt.ReactCurrentBatchConfig,M=0,oe=null,te=null,ce=0,Ne=0,vn=Pt(0),ie=0,ji=null,Xt=0,vs=0,sa=0,gi=null,ke=null,oa=0,jn=1/0,nt=null,es=!1,ul=null,At=null,fr=!1,kt=null,ts=0,yi=0,fl=null,Tr=-1,Ir=0;function ye(){return M&6?J():Tr!==-1?Tr:Tr=J()}function Tt(e){return e.mode&1?M&2&&ce!==0?ce&-ce:Ym.transition!==null?(Ir===0&&(Ir=ju()),Ir):(e=$,e!==0||(e=window.event,e=e===void 0?16:Vu(e.type)),e):1}function qe(e,t,n,i){if(50<yi)throw yi=0,fl=null,Error(N(185));zi(e,n,i),(!(M&2)||e!==oe)&&(e===oe&&(!(M&2)&&(vs|=n),ie===4&&wt(e,ce)),Ce(e,i),n===1&&M===0&&!(t.mode&1)&&(jn=J()+500,ms&&jt()))}function Ce(e,t){var n=e.callbackNode;Yp(e,t);var i=$r(e,e===oe?ce:0);if(i===0)n!==null&&Va(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(n!=null&&Va(n),t===1)e.tag===0?Gm(Pc.bind(null,e)):cf(Pc.bind(null,e)),Hm(function(){!(M&6)&&jt()}),n=null;else{switch(Mu(i)){case 1:n=Ll;break;case 4:n=Ru;break;case 16:n=Mr;break;case 536870912:n=Pu;break;default:n=Mr}n=ld(n,ed.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ed(e,t){if(Tr=-1,Ir=0,M&6)throw Error(N(327));var n=e.callbackNode;if(An()&&e.callbackNode!==n)return null;var i=$r(e,e===oe?ce:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=ns(e,i);else{t=i;var r=M;M|=2;var s=nd();(oe!==e||ce!==t)&&(nt=null,jn=J()+500,qt(e,t));do try{gh();break}catch(l){td(e,l)}while(!0);Hl(),Zr.current=s,M=r,te!==null?t=0:(oe=null,ce=0,t=ie)}if(t!==0){if(t===2&&(r=$o(e),r!==0&&(i=r,t=dl(e,r))),t===1)throw n=ji,qt(e,0),wt(e,i),Ce(e,J()),n;if(t===6)wt(e,i);else{if(r=e.current.alternate,!(i&30)&&!mh(r)&&(t=ns(e,i),t===2&&(s=$o(e),s!==0&&(i=s,t=dl(e,s))),t===1))throw n=ji,qt(e,0),wt(e,i),Ce(e,J()),n;switch(e.finishedWork=r,e.finishedLanes=i,t){case 0:case 1:throw Error(N(345));case 2:zt(e,ke,nt);break;case 3:if(wt(e,i),(i&130023424)===i&&(t=oa+500-J(),10<t)){if($r(e,0)!==0)break;if(r=e.suspendedLanes,(r&i)!==i){ye(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=Wo(zt.bind(null,e,ke,nt),t);break}zt(e,ke,nt);break;case 4:if(wt(e,i),(i&4194240)===i)break;for(t=e.eventTimes,r=-1;0<i;){var o=31-We(i);s=1<<o,o=t[o],o>r&&(r=o),i&=~s}if(i=r,i=J()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ph(i/1960))-i,10<i){e.timeoutHandle=Wo(zt.bind(null,e,ke,nt),i);break}zt(e,ke,nt);break;case 5:zt(e,ke,nt);break;default:throw Error(N(329))}}}return Ce(e,J()),e.callbackNode===n?ed.bind(null,e):null}function dl(e,t){var n=gi;return e.current.memoizedState.isDehydrated&&(qt(e,t).flags|=256),e=ns(e,t),e!==2&&(t=ke,ke=n,t!==null&&pl(t)),e}function pl(e){ke===null?ke=e:ke.push.apply(ke,e)}function mh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Qe(s(),r))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wt(e,t){for(t&=~sa,t&=~vs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-We(t),i=1<<n;e[n]=-1,t&=~i}}function Pc(e){if(M&6)throw Error(N(327));An();var t=$r(e,0);if(!(t&1))return Ce(e,J()),null;var n=ns(e,t);if(e.tag!==0&&n===2){var i=$o(e);i!==0&&(t=i,n=dl(e,i))}if(n===1)throw n=ji,qt(e,0),wt(e,t),Ce(e,J()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zt(e,ke,nt),Ce(e,J()),null}function la(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(jn=J()+500,ms&&jt())}}function Zt(e){kt!==null&&kt.tag===0&&!(M&6)&&An();var t=M;M|=1;var n=je.transition,i=$;try{if(je.transition=null,$=1,e)return e()}finally{$=i,je.transition=n,M=t,!(M&6)&&jt()}}function aa(){Ne=vn.current,V(vn)}function qt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Km(n)),te!==null)for(n=te.return;n!==null;){var i=n;switch(Ul(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Vr();break;case 3:Rn(),V(Ee),V(me),Jl();break;case 5:Yl(i);break;case 4:Rn();break;case 13:V(H);break;case 19:V(H);break;case 10:Wl(i.type._context);break;case 22:case 23:aa()}n=n.return}if(oe=e,te=e=It(e.current,null),ce=Ne=t,ie=0,ji=null,sa=vs=Xt=0,ke=gi=null,Vt!==null){for(t=0;t<Vt.length;t++)if(n=Vt[t],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Vt=null}return e}function td(e,t){do{var n=te;try{if(Hl(),Cr.current=Xr,Jr){for(var i=W.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Jr=!1}if(Jt=0,se=ne=W=null,mi=!1,xi=0,ra.current=null,n===null||n.return===null){ie=1,ji=t,te=null;break}e:{var s=e,o=n.return,l=n,a=t;if(t=ce,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,m=l,u=m.tag;if(!(m.mode&1)&&(u===0||u===11||u===15)){var f=m.alternate;f?(m.updateQueue=f.updateQueue,m.memoizedState=f.memoizedState,m.lanes=f.lanes):(m.updateQueue=null,m.memoizedState=null)}var h=Sc(o);if(h!==null){h.flags&=-257,Ec(h,o,l,s,t),h.mode&1&&kc(s,c,t),t=h,a=c;var w=t.updateQueue;if(w===null){var y=new Set;y.add(a),t.updateQueue=y}else w.add(a);break e}else{if(!(t&1)){kc(s,c,t),ca();break e}a=Error(N(426))}}else if(K&&l.mode&1){var _=Sc(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Ec(_,o,l,s,t),Vl(Pn(a,l));break e}}s=a=Pn(a,l),ie!==4&&(ie=2),gi===null?gi=[s]:gi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var p=$f(s,a,t);hc(s,p);break e;case 1:l=a;var d=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(At===null||!At.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var v=Ff(s,l,t);hc(s,v);break e}}s=s.return}while(s!==null)}rd(n)}catch(k){t=k,te===n&&n!==null&&(te=n=n.return);continue}break}while(!0)}function nd(){var e=Zr.current;return Zr.current=Xr,e===null?Xr:e}function ca(){(ie===0||ie===3||ie===2)&&(ie=4),oe===null||!(Xt&268435455)&&!(vs&268435455)||wt(oe,ce)}function ns(e,t){var n=M;M|=2;var i=nd();(oe!==e||ce!==t)&&(nt=null,qt(e,t));do try{hh();break}catch(r){td(e,r)}while(!0);if(Hl(),M=n,Zr.current=i,te!==null)throw Error(N(261));return oe=null,ce=0,ie}function hh(){for(;te!==null;)id(te)}function gh(){for(;te!==null&&!Bp();)id(te)}function id(e){var t=od(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?rd(e):te=t,ra.current=null}function rd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ch(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,te=null;return}}else if(n=ah(n,t,Ne),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);ie===0&&(ie=5)}function zt(e,t,n){var i=$,r=je.transition;try{je.transition=null,$=1,yh(e,t,n,i)}finally{je.transition=r,$=i}return null}function yh(e,t,n,i){do An();while(kt!==null);if(M&6)throw Error(N(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Jp(e,s),e===oe&&(te=oe=null,ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fr||(fr=!0,ld(Mr,function(){return An(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=je.transition,je.transition=null;var o=$;$=1;var l=M;M|=4,ra.current=null,fh(e,n),Xf(n,e),Mm(Ko),Fr=!!Vo,Ko=Vo=null,e.current=n,dh(n),Up(),M=l,$=o,je.transition=s}else e.current=n;if(fr&&(fr=!1,kt=e,ts=r),s=e.pendingLanes,s===0&&(At=null),Hp(n.stateNode),Ce(e,J()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(es)throw es=!1,e=ul,ul=null,e;return ts&1&&e.tag!==0&&An(),s=e.pendingLanes,s&1?e===fl?yi++:(yi=0,fl=e):yi=0,jt(),null}function An(){if(kt!==null){var e=Mu(ts),t=je.transition,n=$;try{if(je.transition=null,$=16>e?16:e,kt===null)var i=!1;else{if(e=kt,kt=null,ts=0,M&6)throw Error(N(331));var r=M;for(M|=4,A=e.current;A!==null;){var s=A,o=s.child;if(A.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var c=l[a];for(A=c;A!==null;){var m=A;switch(m.tag){case 0:case 11:case 15:hi(8,m,s)}var u=m.child;if(u!==null)u.return=m,A=u;else for(;A!==null;){m=A;var f=m.sibling,h=m.return;if(Gf(m),m===c){A=null;break}if(f!==null){f.return=h,A=f;break}A=h}}}var w=s.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var _=y.sibling;y.sibling=null,y=_}while(y!==null)}}A=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,A=o;else e:for(;A!==null;){if(s=A,s.flags&2048)switch(s.tag){case 0:case 11:case 15:hi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,A=p;break e}A=s.return}}var d=e.current;for(A=d;A!==null;){o=A;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,A=g;else e:for(o=d;A!==null;){if(l=A,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ys(9,l)}}catch(k){Q(l,l.return,k)}if(l===o){A=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,A=v;break e}A=l.return}}if(M=r,jt(),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(cs,e)}catch{}i=!0}return i}finally{$=n,je.transition=t}}return!1}function jc(e,t,n){t=Pn(n,t),t=$f(e,t,1),e=Nt(e,t,1),t=ye(),e!==null&&(zi(e,1,t),Ce(e,t))}function Q(e,t,n){if(e.tag===3)jc(e,e,n);else for(;t!==null;){if(t.tag===3){jc(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(At===null||!At.has(i))){e=Pn(n,e),e=Ff(t,e,1),t=Nt(t,e,1),e=ye(),t!==null&&(zi(t,1,e),Ce(t,e));break}}t=t.return}}function vh(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),t=ye(),e.pingedLanes|=e.suspendedLanes&n,oe===e&&(ce&n)===n&&(ie===4||ie===3&&(ce&130023424)===ce&&500>J()-oa?qt(e,0):sa|=n),Ce(e,t)}function sd(e,t){t===0&&(e.mode&1?(t=tr,tr<<=1,!(tr&130023424)&&(tr=4194304)):t=1);var n=ye();e=ft(e,t),e!==null&&(zi(e,t,n),Ce(e,n))}function wh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),sd(e,n)}function _h(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(N(314))}i!==null&&i.delete(t),sd(e,n)}var od;od=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ee.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,lh(e,t,n);Se=!!(e.flags&131072)}else Se=!1,K&&t.flags&1048576&&uf(t,Wr,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Ar(e,t),e=t.pendingProps;var r=Dn(t,me.current);Nn(t,n),r=Zl(null,t,i,e,r,n);var s=ea();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,be(i)?(s=!0,Kr(t)):s=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ql(t),r.updater=gs,t.stateNode=r,r._reactInternals=t,Zo(t,i,e,n),t=nl(null,t,i,!0,s,n)):(t.tag=0,K&&s&&Bl(t),he(null,t,r,n),t=t.child),t;case 16:i=t.elementType;e:{switch(Ar(e,t),e=t.pendingProps,r=i._init,i=r(i._payload),t.type=i,r=t.tag=Sh(i),e=Ve(i,e),r){case 0:t=tl(null,t,i,e,n);break e;case 1:t=Nc(null,t,i,e,n);break e;case 11:t=bc(null,t,i,e,n);break e;case 14:t=Cc(null,t,i,Ve(i.type,e),n);break e}throw Error(N(306,i,""))}return t;case 0:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:Ve(i,r),tl(e,t,i,r,n);case 1:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:Ve(i,r),Nc(e,t,i,r,n);case 3:e:{if(Vf(t),e===null)throw Error(N(387));i=t.pendingProps,s=t.memoizedState,r=s.element,gf(e,t),Gr(t,i,null,n);var o=t.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){r=Pn(Error(N(423)),t),t=Ac(e,t,i,n,r);break e}else if(i!==r){r=Pn(Error(N(424)),t),t=Ac(e,t,i,n,r);break e}else for(Ae=Ct(t.stateNode.containerInfo.firstChild),Te=t,K=!0,He=null,n=mf(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ln(),i===r){t=dt(e,t,n);break e}he(e,t,i,n)}t=t.child}return t;case 5:return yf(t),e===null&&Yo(t),i=t.type,r=t.pendingProps,s=e!==null?e.memoizedProps:null,o=r.children,Ho(i,r)?o=null:s!==null&&Ho(i,s)&&(t.flags|=32),Uf(e,t),he(e,t,o,n),t.child;case 6:return e===null&&Yo(t),null;case 13:return Kf(e,t,n);case 4:return Gl(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=xn(t,null,i,n):he(e,t,i,n),t.child;case 11:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:Ve(i,r),bc(e,t,i,r,n);case 7:return he(e,t,t.pendingProps,n),t.child;case 8:return he(e,t,t.pendingProps.children,n),t.child;case 12:return he(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(i=t.type._context,r=t.pendingProps,s=t.memoizedProps,o=r.value,z(qr,i._currentValue),i._currentValue=o,s!==null)if(Qe(s.value,o)){if(s.children===r.children&&!Ee.current){t=dt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===i){if(s.tag===1){a=lt(-1,n&-n),a.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?a.next=a:(a.next=m.next,m.next=a),c.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Jo(s.return,n,t),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(N(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Jo(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}he(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,i=t.pendingProps.children,Nn(t,n),r=$e(r),i=i(r),t.flags|=1,he(e,t,i,n),t.child;case 14:return i=t.type,r=Ve(i,t.pendingProps),r=Ve(i.type,r),Cc(e,t,i,r,n);case 15:return zf(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:Ve(i,r),Ar(e,t),t.tag=1,be(i)?(e=!0,Kr(t)):e=!1,Nn(t,n),Mf(t,i,r),Zo(t,i,r,n),nl(null,t,i,!0,e,n);case 19:return Hf(e,t,n);case 22:return Bf(e,t,n)}throw Error(N(156,t.tag))};function ld(e,t){return xu(e,t)}function kh(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pe(e,t,n,i){return new kh(e,t,n,i)}function ua(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sh(e){if(typeof e=="function")return ua(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Il)return 11;if(e===Ol)return 14}return 2}function It(e,t){var n=e.alternate;return n===null?(n=Pe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Or(e,t,n,i,r,s){var o=2;if(i=e,typeof e=="function")ua(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case an:return Qt(n.children,r,s,t);case Tl:o=8,r|=8;break;case Eo:return e=Pe(12,n,t,r|2),e.elementType=Eo,e.lanes=s,e;case bo:return e=Pe(13,n,t,r),e.elementType=bo,e.lanes=s,e;case Co:return e=Pe(19,n,t,r),e.elementType=Co,e.lanes=s,e;case gu:return ws(n,r,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case mu:o=10;break e;case hu:o=9;break e;case Il:o=11;break e;case Ol:o=14;break e;case ht:o=16,i=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=Pe(o,n,t,r),t.elementType=e,t.type=i,t.lanes=s,t}function Qt(e,t,n,i){return e=Pe(7,e,i,t),e.lanes=n,e}function ws(e,t,n,i){return e=Pe(22,e,i,t),e.elementType=gu,e.lanes=n,e.stateNode={isHidden:!1},e}function ao(e,t,n){return e=Pe(6,e,null,t),e.lanes=n,e}function co(e,t,n){return t=Pe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Eh(e,t,n,i,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vs(0),this.expirationTimes=Vs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vs(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function fa(e,t,n,i,r,s,o,l,a){return e=new Eh(e,t,n,l,a),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Pe(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ql(s),e}function bh(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ln,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}function ad(e){if(!e)return xt;e=e._reactInternals;e:{if(nn(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(be(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(be(n))return af(e,n,t)}return t}function cd(e,t,n,i,r,s,o,l,a){return e=fa(n,i,!0,e,r,s,o,l,a),e.context=ad(null),n=e.current,i=ye(),r=Tt(n),s=lt(i,r),s.callback=t??null,Nt(n,s,r),e.current.lanes=r,zi(e,r,i),Ce(e,i),e}function _s(e,t,n,i){var r=t.current,s=ye(),o=Tt(r);return n=ad(n),t.context===null?t.context=n:t.pendingContext=n,t=lt(s,o),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=Nt(r,t,o),e!==null&&(qe(e,r,o,s),br(e,r,o)),o}function is(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Mc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function da(e,t){Mc(e,t),(e=e.alternate)&&Mc(e,t)}function Ch(){return null}var ud=typeof reportError=="function"?reportError:function(e){console.error(e)};function pa(e){this._internalRoot=e}ks.prototype.render=pa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));_s(e,t,null,null)};ks.prototype.unmount=pa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Zt(function(){_s(null,e,null,null)}),t[ut]=null}};function ks(e){this._internalRoot=e}ks.prototype.unstable_scheduleHydration=function(e){if(e){var t=zu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<vt.length&&t!==0&&t<vt[n].priority;n++);vt.splice(n,0,e),n===0&&Uu(e)}};function ma(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ss(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $c(){}function Nh(e,t,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=is(o);s.call(c)}}var o=cd(t,i,e,0,null,!1,!1,"",$c);return e._reactRootContainer=o,e[ut]=o.current,Ti(e.nodeType===8?e.parentNode:e),Zt(),o}for(;r=e.lastChild;)e.removeChild(r);if(typeof i=="function"){var l=i;i=function(){var c=is(a);l.call(c)}}var a=fa(e,0,!1,null,null,!1,!1,"",$c);return e._reactRootContainer=a,e[ut]=a.current,Ti(e.nodeType===8?e.parentNode:e),Zt(function(){_s(t,a,n,i)}),a}function Es(e,t,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var l=r;r=function(){var a=is(o);l.call(a)}}_s(t,o,e,r)}else o=Nh(n,t,e,r,i);return is(o)}$u=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=si(t.pendingLanes);n!==0&&(xl(t,n|1),Ce(t,J()),!(M&6)&&(jn=J()+500,jt()))}break;case 13:Zt(function(){var i=ft(e,1);if(i!==null){var r=ye();qe(i,e,1,r)}}),da(e,1)}};Rl=function(e){if(e.tag===13){var t=ft(e,134217728);if(t!==null){var n=ye();qe(t,e,134217728,n)}da(e,134217728)}};Fu=function(e){if(e.tag===13){var t=Tt(e),n=ft(e,t);if(n!==null){var i=ye();qe(n,e,t,i)}da(e,t)}};zu=function(){return $};Bu=function(e,t){var n=$;try{return $=e,t()}finally{$=n}};Po=function(e,t,n){switch(t){case"input":if(To(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var r=ps(i);if(!r)throw Error(N(90));vu(i),To(i,r)}}}break;case"textarea":_u(e,n);break;case"select":t=n.value,t!=null&&Sn(e,!!n.multiple,t,!1)}};Au=la;Tu=Zt;var Ah={usingClientEntryPoint:!1,Events:[Ui,dn,ps,Cu,Nu,la]},ti={findFiberByHostInstance:Ut,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Th={bundleType:ti.bundleType,version:ti.version,rendererPackageName:ti.rendererPackageName,rendererConfig:ti.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Du(e),e===null?null:e.stateNode},findFiberByHostInstance:ti.findFiberByHostInstance||Ch,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dr.isDisabled&&dr.supportsFiber)try{cs=dr.inject(Th),Ze=dr}catch{}}Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ah;Oe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ma(t))throw Error(N(200));return bh(e,t,null,n)};Oe.createRoot=function(e,t){if(!ma(e))throw Error(N(299));var n=!1,i="",r=ud;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=fa(e,1,!1,null,null,n,!1,i,r),e[ut]=t.current,Ti(e.nodeType===8?e.parentNode:e),new pa(t)};Oe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Du(t),e=e===null?null:e.stateNode,e};Oe.flushSync=function(e){return Zt(e)};Oe.hydrate=function(e,t,n){if(!Ss(t))throw Error(N(200));return Es(null,e,t,!0,n)};Oe.hydrateRoot=function(e,t,n){if(!ma(e))throw Error(N(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=ud;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=cd(t,null,e,1,n??null,r,!1,s,o),e[ut]=t.current,Ti(e),i)for(e=0;e<i.length;e++)n=i[e],r=n._getVersion,r=r(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new ks(t)};Oe.render=function(e,t,n){if(!Ss(t))throw Error(N(200));return Es(null,e,t,!1,n)};Oe.unmountComponentAtNode=function(e){if(!Ss(e))throw Error(N(40));return e._reactRootContainer?(Zt(function(){Es(null,null,e,!1,function(){e._reactRootContainer=null,e[ut]=null})}),!0):!1};Oe.unstable_batchedUpdates=la;Oe.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!Ss(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Es(e,t,n,!1,i)};Oe.version="18.3.1-next-f1338f8080-20240426";function fd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fd)}catch(e){console.error(e)}}fd(),uu.exports=Oe;var Ih=uu.exports,dd,Fc=Ih;dd=Fc.createRoot,Fc.hydrateRoot;const Oh=[{id:"org-admin",title:"Organisation Admin"},{id:"super-admin",title:"Super Admin (platform operator)"}];function Dh(e){const t=new Set(e.map(n=>n.id));return[...e,...Oh.filter(n=>!t.has(n.id))]}const pd="/api/v1",ml="eos.token";function md(){try{return localStorage.getItem(ml)}catch{return null}}function hd(e){try{e?localStorage.setItem(ml,e):localStorage.removeItem(ml)}catch{}}class rs extends Error{constructor(t,n,i){super(n),this.status=t,this.body=i}}async function Ot(e,t={}){const n={...t.headers},i=md();i&&(n.Authorization=`Bearer ${i}`);let r=t.body;t.json!==void 0&&(n["Content-Type"]="application/json",r=JSON.stringify(t.json));const s=await fetch(`${pd}${e}`,{...t,headers:n,body:r});if(s.status===204)return;const o=await s.json().catch(()=>{});if(!s.ok)throw new rs(s.status,(o==null?void 0:o.detail)??s.statusText,o);return o}async function Lh(){try{const e=await fetch(`${pd}/health`,{signal:AbortSignal.timeout(2500),headers:{Accept:"application/json"}});if(!e.ok)return!1;const t=await e.json().catch(()=>null);return(t==null?void 0:t.status)==="ok"}catch{return!1}}function xh(e){return{plan:e.plan,academyType:e.academy_type,modules:new Set(e.modules),moduleNames:new Set(e.module_names),upgradableModules:e.upgradable_modules,limits:e.limits}}async function uo(){const e=await Ot("/identity/auth/me");if(!e.organisation_id)return{me:e,organisation:null,entitlement:null,trialEndsAt:null,subscriptionStatus:null};const[t,n]=await Promise.all([Ot("/tenancy/organisation"),Ot("/tenancy/organisation/entitlement")]);return{me:e,organisation:t,entitlement:xh(n),trialEndsAt:n.trial_ends_at,subscriptionStatus:n.subscription_status}}async function Rh(e,t,n){const i=await Ot("/identity/auth/login",{method:"POST",json:{email:e,password:t,organisation_slug:n||void 0}});hd(i.token)}function zc(){hd(null)}async function Ph(e){return Ot("/billing/subscription/upgrade",{method:"POST",json:{plan:e}})}function jh({slug:e,onDone:t,onSignUp:n}){const[i,r]=F.useState(""),[s,o]=F.useState(""),[l,a]=F.useState(e??""),[c,m]=F.useState(null),[u,f]=F.useState(!1),h=async w=>{w.preventDefault(),f(!0),m(null);try{await Rh(i,s,l||void 0),t()}catch(y){const _=y instanceof rs?y.message:String(y);m(_.includes("pending_approval")?"Your organisation's academic package is waiting for platform approval. Try again once you receive the approval email.":_)}finally{f(!1)}};return b.jsxs("form",{className:"eos-auth",onSubmit:h,children:[b.jsx("h1",{children:"Sign in"}),b.jsxs("label",{children:["Email",b.jsx("input",{type:"email",value:i,onChange:w=>r(w.target.value),required:!0,autoFocus:!0})]}),b.jsxs("label",{children:["Password",b.jsx("input",{type:"password",value:s,onChange:w=>o(w.target.value),required:!0})]}),b.jsxs("label",{children:["Organisation short name ",b.jsx("span",{className:"eos-auth__hint",children:"(only if your email is in more than one)"}),b.jsx("input",{value:l,onChange:w=>a(w.target.value)})]}),c&&b.jsx("p",{className:"eos-auth__error",role:"alert",children:c}),b.jsx("button",{disabled:u,children:u?"Signing in…":"Sign in"}),b.jsxs("p",{className:"eos-auth__hint",children:["New here? ",b.jsx("a",{href:"#signup",onClick:w=>{w.preventDefault(),n()},children:"Register your organisation"})]})]})}function Mh({onDone:e,onLogin:t}){const[n,i]=F.useState([]),[r,s]=F.useState({organisation_name:"",slug:"",academy_type:"",name:"",email:"",password:""}),[o,l]=F.useState(null),[a,c]=F.useState(!1),[m,u]=F.useState(null),[f,h]=F.useState(null),[w,y]=F.useState("");F.useEffect(()=>{Ot("/tenancy/academy-types").then(v=>{i(v),s(k=>{var C;return{...k,academy_type:k.academy_type||((C=v[0])==null?void 0:C.id)||""}})})},[]);const _=v=>v.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,40),p=async v=>{v.preventDefault(),c(!0),l(null);try{const k=await Ot("/tenancy/register",{method:"POST",json:{organisation_name:r.organisation_name,slug:r.slug||_(r.organisation_name),academy_type:r.academy_type,admin:{name:r.name,email:r.email,password:r.password},accepted_terms:!0}});u(k),k.verification_token&&y(k.verification_token)}catch(k){l(k instanceof rs?k.message:String(k))}finally{c(!1)}},d=async v=>{v.preventDefault(),c(!0),l(null);try{const k=await Ot("/tenancy/register/verify",{method:"POST",json:{token:w}});k.status==="active"?e(m.slug):h(k)}catch(k){l(k instanceof rs?k.message:String(k))}finally{c(!1)}};if(f)return b.jsxs("div",{className:"eos-auth",children:[b.jsx("h1",{children:"Email verified"}),b.jsxs("p",{children:[r.organisation_name," is waiting for the platform administrator to approve its academic package. You will get an email when it is approved, and can then sign in."]}),b.jsx("p",{className:"eos-auth__hint",children:b.jsx("a",{href:"#login",onClick:v=>{v.preventDefault(),t()},children:"Back to sign in"})})]});if(m)return b.jsxs("form",{className:"eos-auth",onSubmit:d,children:[b.jsx("h1",{children:"Verify your email"}),b.jsxs("p",{children:["We sent a verification token to ",r.email,". Paste it below to activate ",r.organisation_name,"."]}),b.jsxs("label",{children:["Verification token",b.jsx("input",{value:w,onChange:v=>y(v.target.value),required:!0})]}),o&&b.jsx("p",{className:"eos-auth__error",role:"alert",children:o}),b.jsx("button",{disabled:a,children:"Activate organisation"})]});const g=n.find(v=>v.id===r.academy_type);return b.jsxs("form",{className:"eos-auth",onSubmit:p,children:[b.jsx("h1",{children:"Register your organisation"}),b.jsx("p",{children:"Start a free 30-day trial. Pick the academy type and you get the common platform plus the features of that field."}),b.jsxs("label",{children:["Organisation name",b.jsx("input",{value:r.organisation_name,onChange:v=>s({...r,organisation_name:v.target.value,slug:_(v.target.value)}),required:!0})]}),b.jsxs("label",{children:["Short name (used in your URL)",b.jsx("input",{value:r.slug,onChange:v=>s({...r,slug:v.target.value}),pattern:"[a-z0-9-]{3,40}",required:!0})]}),b.jsxs("label",{children:["Academy type",b.jsx("select",{value:r.academy_type,onChange:v=>s({...r,academy_type:v.target.value}),children:n.map(v=>b.jsx("option",{value:v.id,children:v.title},v.id))})]}),g&&b.jsx("p",{className:"eos-auth__hint",children:g.description}),b.jsxs("label",{children:["Your name",b.jsx("input",{value:r.name,onChange:v=>s({...r,name:v.target.value}),required:!0})]}),b.jsxs("label",{children:["Work email",b.jsx("input",{type:"email",value:r.email,onChange:v=>s({...r,email:v.target.value}),required:!0})]}),b.jsxs("label",{children:["Password",b.jsx("input",{type:"password",minLength:8,value:r.password,onChange:v=>s({...r,password:v.target.value}),required:!0})]}),o&&b.jsx("p",{className:"eos-auth__error",role:"alert",children:o}),b.jsx("button",{disabled:a,children:a?"Creating…":"Create organisation"}),b.jsxs("p",{className:"eos-auth__hint",children:["Already registered? ",b.jsx("a",{href:"#login",onClick:v=>{v.preventDefault(),t()},children:"Sign in"})]})]})}class $h{constructor(){Oa(this,"byId",new Map)}register(t){for(const n of t){if(this.byId.has(n.id))throw new Error(`Duplicate widget id "${n.id}"`);this.byId.set(n.id,n)}}get(t){return this.byId.get(t)}has(t){return this.byId.has(t)}ids(){return[...this.byId.keys()]}clear(){this.byId.clear()}}const Fh={"1x1":{col:1,row:1},"2x1":{col:2,row:1},"2x2":{col:2,row:2}};function fo({title:e,size:t,state:n="ready",message:i,children:r}){const s=Fh[t];return b.jsxs("section",{className:"eos-widget","data-state":n,style:{gridColumn:`span ${s.col}`,gridRow:`span ${s.row}`},"aria-busy":n==="loading",children:[b.jsx("header",{className:"eos-widget__header",children:b.jsx("h2",{className:"eos-widget__title",children:e})}),b.jsxs("div",{className:"eos-widget__body",children:[n==="loading"&&b.jsx("p",{className:"eos-widget__status",children:"Loading…"}),n==="empty"&&b.jsx("p",{className:"eos-widget__status",children:i??"Nothing to show"}),n==="error"&&b.jsx("p",{className:"eos-widget__status eos-widget__status--error",role:"alert",children:i??"Could not load"}),n==="ready"&&r]})]})}const zh=`# Dashboard layout for the Actor role at a Theatre / Drama Academy (ADR-0004 profile theatre-academy).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: actor
title: "Actor"
extends: student
widgets:
  - productions.my-roles
  - selection-process.upcoming
  - facility-booking.my-bookings
  - portfolio.my-portfolio
  - inventory-equipment.my-loans
`,Bh=`# Dashboard layout for the Applicant role. Widget ids are <module>.<widget>.
# Order is display order. The shell hides widgets the viewer lacks permission for.
role: applicant
title: "Applicant"
widgets:
  - admissions.application-status
  - admissions.pending-documents
  - fees-accounts.fee-due
  - web-portal-cms.announcements
`,Uh=`# Dashboard layout for the Artist role at a Arts Academy / Fine Arts College (ADR-0004 profile arts-academy).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: artist
title: "Artist"
extends: student
widgets:
  - portfolio.my-portfolio
  - projects.my-projects
  - facility-booking.my-bookings
  - selection-process.upcoming
  - productions.upcoming
  - inventory-equipment.my-loans
`,Vh=`# Dashboard layout for the Athlete role. Widget ids are <module>.<widget>.
# Order is display order. The shell hides widgets the viewer lacks permission for.
role: athlete
title: "Athlete"
extends: student
widgets:
  - athlete-performance.training-schedule
  - athlete-performance.performance-trend
  - sports-nutrition-health.nutrition-plan
  - tournament-events.upcoming
`,Kh=`# Dashboard layout for the Chef / Operations Instructor role at a Hospitality / Hotel Management (ADR-0004 profile hospitality-institute).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: chef-instructor
title: "Chef / Operations Instructor"
extends: faculty
widgets:
  - skill-progress.assessments-due
  - facility-booking.bookings-today
  - inventory-equipment.low-stock
  - productions.in-preparation
`,Hh=`# Dashboard layout for the Choreographer role at a Dance / Performing Arts Academy (ADR-0004 profile dance-academy).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: choreographer
title: "Choreographer"
extends: faculty
widgets:
  - productions.in-preparation
  - selection-process.to-judge
  - skill-progress.assessments-due
  - facility-booking.bookings-today
`,Wh=`# Dashboard layout for the Clinical Supervisor role at a Medical / Health Sciences College (ADR-0004 profile medical-college).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: clinical-supervisor
title: "Clinical Supervisor"
extends: faculty
widgets:
  - field-training.trainees-to-assess
  - skill-progress.assessments-due
  - field-training.placements-open
  - facility-booking.bookings-today
`,qh=`# Dashboard layout for the Coach role. Widget ids are <module>.<widget>.
# Order is display order. The shell hides widgets the viewer lacks permission for.
role: coach
title: "Coach"
extends: faculty
widgets:
  - athlete-performance.squad-overview
  - athlete-performance.session-plan
  - training-video-analysis.reviews-pending
  - facility-booking.bookings
  - wearables.alerts
  - tournament-events.calendar
`,Qh=`# Dashboard layout for the Corporate Mentor role at a Management / Business School (ADR-0004 profile management-institute).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: corporate-mentor
title: "Corporate Mentor"
extends: faculty
widgets:
  - projects.to-review
  - field-training.trainees-to-assess
  - selection-process.to-judge
  - productions.in-preparation
`,Gh=`# Dashboard layout for the Dancer role at a Dance / Performing Arts Academy (ADR-0004 profile dance-academy).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: dancer
title: "Dancer"
extends: student
widgets:
  - skill-progress.my-progress
  - productions.my-roles
  - selection-process.upcoming
  - facility-booking.my-bookings
  - inventory-equipment.my-loans
  - timetable-attendance.today
`,Yh=`# Dashboard layout for the Department Admin / HoD role. Widget ids are <module>.<widget>.
# Order is display order. The shell hides widgets the viewer lacks permission for.
role: department-admin
title: "Department Admin / HoD"
widgets:
  - workflow.approvals-pending
  - academic-management.faculty-load
  - timetable-attendance.department-attendance
  - examinations.results-summary
  - reporting.department-reports
`,Jh=`# Dashboard layout for the Design Mentor role at a Design / Fashion Institute (ADR-0004 profile design-fashion-institute).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: design-mentor
title: "Design Mentor"
extends: faculty
widgets:
  - portfolio.reviews-pending
  - projects.to-review
  - selection-process.to-judge
  - field-training.trainees-to-assess
`,Xh=`# Dashboard layout for the Designer role at a Design / Fashion Institute (ADR-0004 profile design-fashion-institute).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: designer
title: "Designer"
extends: student
widgets:
  - portfolio.my-portfolio
  - projects.my-projects
  - productions.upcoming
  - facility-booking.my-bookings
  - field-training.my-placement
  - selection-process.upcoming
`,Zh=`# Dashboard layout for the Director role at a Theatre / Drama Academy (ADR-0004 profile theatre-academy).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: director
title: "Director"
extends: faculty
widgets:
  - productions.in-preparation
  - selection-process.to-judge
  - projects.to-review
  - facility-booking.bookings-today
`,eg=`# Dashboard layout for the Engineering Student role at a Engineering / Technology College (ADR-0004 profile engineering-college).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: engineering-student
title: "Engineering Student"
extends: student
widgets:
  - projects.my-projects
  - projects.milestones-due
  - facility-booking.my-bookings
  - field-training.my-placement
  - productions.upcoming
  - placement-career.openings
`,tg=`# Dashboard layout for the Ensemble / Orchestra Director role at a Music Academy / Conservatory (ADR-0004 profile music-academy).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: ensemble-director
title: "Ensemble / Orchestra Director"
widgets:
  - productions.in-preparation
  - productions.calendar
  - selection-process.open-calls
  - inventory-equipment.low-stock
`,ng=`# Dashboard layout for the Equipment Manager role at a Film / Media / Animation Institute (ADR-0004 profile film-media-institute).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: equipment-manager
title: "Equipment Manager"
widgets:
  - inventory-equipment.low-stock
  - inventory-equipment.overdue-loans
  - facility-booking.bookings-today
  - maintenance.tickets
`,ig=`# Dashboard layout for the Examination Staff role. Widget ids are <module>.<widget>.
# Order is display order. The shell hides widgets the viewer lacks permission for.
role: examination-staff
title: "Examination Staff"
widgets:
  - examinations.schedule
  - examinations.hall-tickets-issued
  - examinations.results-pending
  - enrolment-registration.registered-candidates
`,rg=`# Dashboard layout for the Exhibition & Gallery Manager role at a Arts Academy / Fine Arts College (ADR-0004 profile arts-academy).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: exhibition-manager
title: "Exhibition & Gallery Manager"
widgets:
  - productions.calendar
  - productions.upcoming
  - facility-booking.bookings-today
  - inventory-equipment.low-stock
`,sg=`# Dashboard layout for the Facility / Inventory Staff role. Widget ids are <module>.<widget>.
# Order is display order. The shell hides widgets the viewer lacks permission for.
role: facility-staff
title: "Facility / Inventory Staff"
widgets:
  - facility-booking.bookings-today
  - maintenance.tickets
  - inventory-equipment.low-stock
  - asset-management.audit-due
`,og=`# Dashboard layout for the Faculty / Instructor role. Widget ids are <module>.<widget>.
# Order is display order. The shell hides widgets the viewer lacks permission for.
role: faculty
title: "Faculty / Instructor"
widgets:
  - timetable-attendance.today-classes
  - timetable-attendance.attendance-to-mark
  - lms.assignments-to-grade
  - examinations.exam-duties
  - academic-management.course-roster
`,lg=`# Dashboard layout for the Farm Supervisor role at a Agriculture / Veterinary / Field Sciences (ADR-0004 profile agriculture-college).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: farm-supervisor
title: "Farm Supervisor"
extends: faculty
widgets:
  - field-training.trainees-to-assess
  - facility-booking.bookings-today
  - inventory-equipment.low-stock
  - projects.active
`,ag=`# Dashboard layout for the Field Trainee role at a Agriculture / Veterinary / Field Sciences (ADR-0004 profile agriculture-college).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: field-trainee
title: "Field Trainee"
extends: student
widgets:
  - field-training.my-placement
  - field-training.hours-logged
  - projects.my-projects
  - facility-booking.my-bookings
  - skill-progress.my-progress
`,cg=`# Dashboard layout for the Filmmaker role at a Film / Media / Animation Institute (ADR-0004 profile film-media-institute).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: filmmaker
title: "Filmmaker"
extends: student
widgets:
  - projects.my-projects
  - projects.milestones-due
  - facility-booking.my-bookings
  - inventory-equipment.my-loans
  - portfolio.my-portfolio
  - productions.upcoming
`,ug=`# Dashboard layout for the Finance Staff role. Widget ids are <module>.<widget>.
# Order is display order. The shell hides widgets the viewer lacks permission for.
role: finance-staff
title: "Finance Staff"
widgets:
  - fees-accounts.collections-today
  - fees-accounts.outstanding-dues
  - payment-sbiepay.reconciliation
  - budget-grants.budget-vs-spend
  - procurement.purchase-orders-pending
`,fg=`# Dashboard layout for the Governance (Grievance / RTI / IQAC) role. Widget ids are <module>.<widget>.
# Order is display order. The shell hides widgets the viewer lacks permission for.
role: governance
title: "Governance (Grievance / RTI / IQAC)"
widgets:
  - grievance.open-by-committee
  - rti.nearing-deadline
  - iqac-accreditation.action-items
  - regulatory-reports.due
`,dg=`# Dashboard layout for the Hospital Coordinator role at a Medical / Health Sciences College (ADR-0004 profile medical-college).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: hospital-coordinator
title: "Hospital Coordinator"
widgets:
  - field-training.active-placements
  - field-training.placements-open
  - facility-booking.bookings-today
  - regulatory-reports.due
`,pg=`# Dashboard layout for the Hospitality Trainee role at a Hospitality / Hotel Management (ADR-0004 profile hospitality-institute).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: hospitality-trainee
title: "Hospitality Trainee"
extends: student
widgets:
  - field-training.my-placement
  - skill-progress.my-progress
  - facility-booking.my-bookings
  - productions.upcoming
  - inventory-equipment.my-loans
  - placement-career.openings
`,mg=`# Dashboard layout for the HR Staff role. Widget ids are <module>.<widget>.
# Order is display order. The shell hides widgets the viewer lacks permission for.
role: hr-staff
title: "HR Staff"
widgets:
  - hr-payroll.leave-requests
  - hr-payroll.payroll-run-status
  - e-office.files-pending
  - hr-payroll.joinings-and-exits
`,hg=`# Dashboard layout for the Industry Coordinator role at a Hospitality / Hotel Management (ADR-0004 profile hospitality-institute).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: industry-coordinator
title: "Industry Coordinator"
widgets:
  - field-training.placements-open
  - field-training.active-placements
  - placement-career.openings
  - productions.calendar
`,gg=`# Dashboard layout for the Industry Liaison role at a Design / Fashion Institute (ADR-0004 profile design-fashion-institute).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: industry-liaison
title: "Industry Liaison"
widgets:
  - field-training.placements-open
  - projects.active
  - productions.calendar
  - placement-career.openings
`,yg=`# Dashboard layout for the Lab In-charge role at a Engineering / Technology College (ADR-0004 profile engineering-college).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: lab-in-charge
title: "Lab In-charge"
widgets:
  - facility-booking.bookings-today
  - inventory-equipment.low-stock
  - inventory-equipment.overdue-loans
  - maintenance.tickets
`,vg=`# Dashboard layout for the Law Student role at a Law College / Law University (ADR-0004 profile law-college).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: law-student
title: "Law Student"
extends: student
widgets:
  - selection-process.upcoming
  - productions.upcoming
  - field-training.my-placement
  - projects.my-projects
  - field-training.hours-logged
  - placement-career.openings
`,wg=`# Dashboard layout for the Legal Mentor role at a Law College / Law University (ADR-0004 profile law-college).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: legal-mentor
title: "Legal Mentor"
extends: faculty
widgets:
  - projects.to-review
  - selection-process.to-judge
  - field-training.trainees-to-assess
  - productions.in-preparation
`,_g=`# Dashboard layout for the Management Student role at a Management / Business School (ADR-0004 profile management-institute).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: management-student
title: "Management Student"
extends: student
widgets:
  - productions.upcoming
  - projects.my-projects
  - field-training.my-placement
  - placement-career.openings
  - alumni.mentoring
  - lms.course-materials
`,kg=`# Dashboard layout for the Management (VC, Registrar) role. Widget ids are <module>.<widget>.
# Order is display order. The shell hides widgets the viewer lacks permission for.
role: management
title: "Management (VC, Registrar)"
widgets:
  - admissions.funnel
  - fees-accounts.collection-vs-target
  - reporting.attendance-and-results-by-department
  - grievance.open
  - regulatory-reports.compliance-calendar
  - productions.upcoming
`,Sg=`# Dashboard layout for the Medical Staff (Doctor / Physio) role. Widget ids are <module>.<widget>.
# Order is display order. The shell hides widgets the viewer lacks permission for.
role: medical-staff
title: "Medical Staff (Doctor / Physio)"
widgets:
  - sports-nutrition-health.injured-athletes
  - sports-nutrition-health.appointments-today
  - athlete-performance.fitness-clearances
  - facility-booking.bookings
`,Eg=`# Dashboard layout for the Medical Student role at a Medical / Health Sciences College (ADR-0004 profile medical-college).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: medical-student
title: "Medical Student"
extends: student
widgets:
  - field-training.my-placement
  - field-training.hours-logged
  - skill-progress.my-progress
  - facility-booking.my-bookings
  - projects.my-projects
  - lms.course-materials
`,bg=`# Dashboard layout for the Mentor Teacher role at a Teacher Education / B.Ed. (ADR-0004 profile teacher-education-college).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: mentor-teacher
title: "Mentor Teacher"
extends: faculty
widgets:
  - field-training.trainees-to-assess
  - portfolio.reviews-pending
  - projects.to-review
  - skill-progress.assessments-due
`,Cg=`# Dashboard layout for the Moot Court Coordinator role at a Law College / Law University (ADR-0004 profile law-college).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: moot-court-coordinator
title: "Moot Court Coordinator"
widgets:
  - selection-process.open-calls
  - productions.calendar
  - productions.upcoming
  - field-training.placements-open
`,Ng=`# Dashboard layout for the Music Teacher role at a Music Academy / Conservatory (ADR-0004 profile music-academy).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: music-teacher
title: "Music Teacher"
extends: faculty
widgets:
  - skill-progress.assessments-due
  - selection-process.to-judge
  - portfolio.reviews-pending
  - facility-booking.bookings-today
`,Ag=`# Dashboard layout for the Musician role at a Music Academy / Conservatory (ADR-0004 profile music-academy).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: musician
title: "Musician"
extends: student
widgets:
  - portfolio.my-portfolio
  - facility-booking.my-bookings
  - selection-process.upcoming
  - productions.upcoming
  - skill-progress.my-progress
  - inventory-equipment.my-loans
`,Tg=`# Dashboard layout for the Nutritionist role. Widget ids are <module>.<widget>.
# Order is display order. The shell hides widgets the viewer lacks permission for.
role: nutritionist
title: "Nutritionist"
widgets:
  - sports-nutrition-health.athletes-on-plans
  - sports-nutrition-health.plan-reviews-due
  - athlete-performance.body-composition-trend
`,Ig=`# Dashboard layout for the Organisation Admin role (ADR-0005). Exists in every organisation.
role: org-admin
title: "Organisation Admin"
widgets:
  - billing.plan-and-trial
  - billing.usage-vs-limits
  - tenancy.enabled-modules
  - identity.users-and-roles
  - billing.invoices
  - audit.recent-activity
`,Og=`# Dashboard layout for the Placement Officer role at a Management / Business School (ADR-0004 profile management-institute).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: placement-officer
title: "Placement Officer"
widgets:
  - field-training.placements-open
  - placement-career.openings
  - placement-career.drives
  - productions.calendar
`,Dg=`# Dashboard layout for the Practicum Coordinator role at a Teacher Education / B.Ed. (ADR-0004 profile teacher-education-college).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: practicum-coordinator
title: "Practicum Coordinator"
widgets:
  - field-training.placements-open
  - field-training.active-placements
  - skill-progress.cohort-overview
  - placement-career.openings
`,Lg=`# Dashboard layout for the Production Manager role at a Dance / Performing Arts Academy (ADR-0004 profile dance-academy).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: production-manager
title: "Production Manager"
widgets:
  - productions.calendar
  - productions.upcoming
  - inventory-equipment.low-stock
  - facility-booking.bookings-today
`,xg=`# Dashboard layout for the Production Supervisor role at a Film / Media / Animation Institute (ADR-0004 profile film-media-institute).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: production-supervisor
title: "Production Supervisor"
extends: faculty
widgets:
  - projects.to-review
  - projects.active
  - productions.in-preparation
  - selection-process.to-judge
`,Rg=`# Dashboard layout for the Project Guide role at a Engineering / Technology College (ADR-0004 profile engineering-college).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: project-guide
title: "Project Guide"
extends: faculty
widgets:
  - projects.to-review
  - projects.active
  - skill-progress.assessments-due
  - field-training.trainees-to-assess
`,Pg=`# Dashboard layout for the Research Lead role at a Agriculture / Veterinary / Field Sciences (ADR-0004 profile agriculture-college).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: research-lead
title: "Research Lead"
widgets:
  - projects.active
  - projects.to-review
  - productions.upcoming
  - field-training.placements-open
`,jg=`# Dashboard layout for the Research Office role at a Research / Doctoral University (ADR-0004 profile research-university).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: research-office
title: "Research Office"
widgets:
  - selection-process.open-calls
  - projects.active
  - budget-grants.budget-vs-spend
  - productions.calendar
  - regulatory-reports.due
`,Mg=`# Dashboard layout for the Research Scholar role at a Research / Doctoral University (ADR-0004 profile research-university).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: research-scholar
title: "Research Scholar"
extends: student
widgets:
  - projects.my-projects
  - projects.milestones-due
  - portfolio.my-portfolio
  - productions.upcoming
  - selection-process.my-applications
  - budget-grants.my-grants
`,$g=`# Dashboard layout for the Research Supervisor role at a Research / Doctoral University (ADR-0004 profile research-university).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: research-supervisor
title: "Research Supervisor"
extends: faculty
widgets:
  - projects.to-review
  - projects.active
  - selection-process.to-judge
  - portfolio.reviews-pending
`,Fg=`# Dashboard layout for the Stage Manager role at a Theatre / Drama Academy (ADR-0004 profile theatre-academy).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: stage-manager
title: "Stage Manager"
widgets:
  - productions.calendar
  - facility-booking.bookings-today
  - inventory-equipment.low-stock
  - productions.upcoming
`,zg=`# Dashboard layout for the Student role. Widget ids are <module>.<widget>.
# Order is display order. The shell hides widgets the viewer lacks permission for.
role: student
title: "Student"
widgets:
  - timetable-attendance.today
  - timetable-attendance.attendance-summary
  - examinations.upcoming-assessments
  - lms.course-materials
  - fees-accounts.fee-dues
  - hostel.notices
  - transport.notices
  - library.loans
`,Bg=`# Dashboard layout for the Studio Instructor role at a Arts Academy / Fine Arts College (ADR-0004 profile arts-academy).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: studio-instructor
title: "Studio Instructor"
extends: faculty
widgets:
  - portfolio.reviews-pending
  - projects.to-review
  - selection-process.to-judge
  - facility-booking.bookings-today
  - productions.in-preparation
`,Ug=`# Dashboard layout for the Super Admin, the platform operator outside every organisation (ADR-0005).
# Rendered by the admin screens in apps/frontend (one application, ADR-0005).
role: super-admin
title: "Super Admin"
widgets:
  - tenancy.approval-queue
  - tenancy.organisations-by-status
  - tenancy.recent-registrations
  - billing.trials-expiring
  - billing.revenue-by-plan
  - billing.subscriptions-by-plan
  - audit.super-admin-actions
`,Vg=`# Dashboard layout for the Support Staff (Helpdesk) role. Widget ids are <module>.<widget>.
# Order is display order. The shell hides widgets the viewer lacks permission for.
role: support-staff
title: "Support Staff (Helpdesk)"
widgets:
  - helpdesk.open-by-priority
  - sla-management.breaches
  - incident-management.open
  - amc-vendor-support.contracts-expiring
  - knowledge-base.top-articles
`,Kg=`# Dashboard layout for the Teacher Trainee role at a Teacher Education / B.Ed. (ADR-0004 profile teacher-education-college).
# Widgets come from the generic practice, facilities and academics modules; the profile vocabulary names them.
role: teacher-trainee
title: "Teacher Trainee"
extends: student
widgets:
  - field-training.my-placement
  - projects.my-projects
  - portfolio.my-portfolio
  - skill-progress.my-progress
  - field-training.hours-logged
`,ha=Symbol.for("yaml.alias"),hl=Symbol.for("yaml.document"),Dt=Symbol.for("yaml.map"),gd=Symbol.for("yaml.pair"),tt=Symbol.for("yaml.scalar"),Un=Symbol.for("yaml.seq"),ze=Symbol.for("yaml.node.type"),Vn=e=>!!e&&typeof e=="object"&&e[ze]===ha,bs=e=>!!e&&typeof e=="object"&&e[ze]===hl,Ki=e=>!!e&&typeof e=="object"&&e[ze]===Dt,ee=e=>!!e&&typeof e=="object"&&e[ze]===gd,B=e=>!!e&&typeof e=="object"&&e[ze]===tt,Hi=e=>!!e&&typeof e=="object"&&e[ze]===Un;function X(e){if(e&&typeof e=="object")switch(e[ze]){case Dt:case Un:return!0}return!1}function Z(e){if(e&&typeof e=="object")switch(e[ze]){case ha:case Dt:case tt:case Un:return!0}return!1}const yd=e=>(B(e)||X(e))&&!!e.anchor,Bt=Symbol("break visit"),Hg=Symbol("skip children"),vi=Symbol("remove node");function Kn(e,t){const n=Wg(t);bs(e)?wn(null,e.contents,n,Object.freeze([e]))===vi&&(e.contents=null):wn(null,e,n,Object.freeze([]))}Kn.BREAK=Bt;Kn.SKIP=Hg;Kn.REMOVE=vi;function wn(e,t,n,i){const r=qg(e,t,n,i);if(Z(r)||ee(r))return Qg(e,i,r),wn(e,r,n,i);if(typeof r!="symbol"){if(X(t)){i=Object.freeze(i.concat(t));for(let s=0;s<t.items.length;++s){const o=wn(s,t.items[s],n,i);if(typeof o=="number")s=o-1;else{if(o===Bt)return Bt;o===vi&&(t.items.splice(s,1),s-=1)}}}else if(ee(t)){i=Object.freeze(i.concat(t));const s=wn("key",t.key,n,i);if(s===Bt)return Bt;s===vi&&(t.key=null);const o=wn("value",t.value,n,i);if(o===Bt)return Bt;o===vi&&(t.value=null)}}return r}function Wg(e){return typeof e=="object"&&(e.Collection||e.Node||e.Value)?Object.assign({Alias:e.Node,Map:e.Node,Scalar:e.Node,Seq:e.Node},e.Value&&{Map:e.Value,Scalar:e.Value,Seq:e.Value},e.Collection&&{Map:e.Collection,Seq:e.Collection},e):e}function qg(e,t,n,i){var r,s,o,l,a;if(typeof n=="function")return n(e,t,i);if(Ki(t))return(r=n.Map)==null?void 0:r.call(n,e,t,i);if(Hi(t))return(s=n.Seq)==null?void 0:s.call(n,e,t,i);if(ee(t))return(o=n.Pair)==null?void 0:o.call(n,e,t,i);if(B(t))return(l=n.Scalar)==null?void 0:l.call(n,e,t,i);if(Vn(t))return(a=n.Alias)==null?void 0:a.call(n,e,t,i)}function Qg(e,t,n){const i=t[t.length-1];if(X(i))i.items[e]=n;else if(ee(i))e==="key"?i.key=n:i.value=n;else if(bs(i))i.contents=n;else{const r=Vn(i)?"alias":"scalar";throw new Error(`Cannot replace node with ${r} parent`)}}const Gg={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},Yg=e=>e.replace(/[!,[\]{}]/g,t=>Gg[t]);class ge{constructor(t,n){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},ge.defaultYaml,t),this.tags=Object.assign({},ge.defaultTags,n)}clone(){const t=new ge(this.yaml,this.tags);return t.docStart=this.docStart,t}atDocument(){const t=new ge(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:ge.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},ge.defaultTags);break}return t}add(t,n){this.atNextDocument&&(this.yaml={explicit:ge.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},ge.defaultTags),this.atNextDocument=!1);const i=t.trim().split(/[ \t]+/),r=i.shift();switch(r){case"%TAG":{if(i.length!==2&&(n(0,"%TAG directive should contain exactly two parts"),i.length<2))return!1;const[s,o]=i;return this.tags[s]=o,!0}case"%YAML":{if(this.yaml.explicit=!0,i.length!==1)return n(0,"%YAML directive should contain exactly one part"),!1;const[s]=i;if(s==="1.1"||s==="1.2")return this.yaml.version=s,!0;{const o=/^\d+\.\d+$/.test(s);return n(6,`Unsupported YAML version ${s}`,o),!1}}default:return n(0,`Unknown directive ${r}`,!0),!1}}tagName(t,n){if(t==="!")return"!";if(t[0]!=="!")return n(`Not a valid tag: ${t}`),null;if(t[1]==="<"){const o=t.slice(2,-1);return o==="!"||o==="!!"?(n(`Verbatim tags aren't resolved, so ${t} is invalid.`),null):(t[t.length-1]!==">"&&n("Verbatim tags must end with a >"),o)}const[,i,r]=t.match(/^(.*!)([^!]*)$/s);r||n(`The ${t} tag has no suffix`);const s=this.tags[i];if(s)try{return s+decodeURIComponent(r)}catch(o){return n(String(o)),null}return i==="!"?t:(n(`Could not resolve tag: ${t}`),null)}tagString(t){for(const[n,i]of Object.entries(this.tags))if(t.startsWith(i))return n+Yg(t.substring(i.length));return t[0]==="!"?t:`!<${t}>`}toString(t){const n=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],i=Object.entries(this.tags);let r;if(t&&i.length>0&&Z(t.contents)){const s={};Kn(t.contents,(o,l)=>{Z(l)&&l.tag&&(s[l.tag]=!0)}),r=Object.keys(s)}else r=[];for(const[s,o]of i)s==="!!"&&o==="tag:yaml.org,2002:"||(!t||r.some(l=>l.startsWith(o)))&&n.push(`%TAG ${s} ${o}`);return n.join(`
`)}}ge.defaultYaml={explicit:!1,version:"1.2"};ge.defaultTags={"!!":"tag:yaml.org,2002:"};function vd(e){if(/[\x00-\x19\s,[\]{}]/.test(e)){const n=`Anchor must not contain whitespace or control characters: ${JSON.stringify(e)}`;throw new Error(n)}return!0}function wd(e){const t=new Set;return Kn(e,{Value(n,i){i.anchor&&t.add(i.anchor)}}),t}function _d(e,t){for(let n=1;;++n){const i=`${e}${n}`;if(!t.has(i))return i}}function Jg(e,t){const n=[],i=new Map;let r=null;return{onAnchor:s=>{n.push(s),r??(r=wd(e));const o=_d(t,r);return r.add(o),o},setAnchors:()=>{for(const s of n){const o=i.get(s);if(typeof o=="object"&&o.anchor&&(B(o.node)||X(o.node)))o.node.anchor=o.anchor;else{const l=new Error("Failed to resolve repeated object (this should not happen)");throw l.source=s,l}}},sourceObjects:i}}function _n(e,t,n,i){if(i&&typeof i=="object")if(Array.isArray(i))for(let r=0,s=i.length;r<s;++r){const o=i[r],l=_n(e,i,String(r),o);l===void 0?delete i[r]:l!==o&&(i[r]=l)}else if(i instanceof Map)for(const r of Array.from(i.keys())){const s=i.get(r),o=_n(e,i,r,s);o===void 0?i.delete(r):o!==s&&i.set(r,o)}else if(i instanceof Set)for(const r of Array.from(i)){const s=_n(e,i,r,r);s===void 0?i.delete(r):s!==r&&(i.delete(r),i.add(s))}else for(const[r,s]of Object.entries(i)){const o=_n(e,i,r,s);o===void 0?delete i[r]:o!==s&&(i[r]=o)}return e.call(t,n,i)}function Me(e,t,n){if(Array.isArray(e))return e.map((i,r)=>Me(i,String(r),n));if(e&&typeof e.toJSON=="function"){if(!n||!yd(e))return e.toJSON(t,n);const i={aliasCount:0,count:1,res:void 0};n.anchors.set(e,i),n.onCreate=s=>{i.res=s,delete n.onCreate};const r=e.toJSON(t,n);return n.onCreate&&n.onCreate(r),r}return typeof e=="bigint"&&!(n!=null&&n.keep)?Number(e):e}class ga{constructor(t){Object.defineProperty(this,ze,{value:t})}clone(){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(t.range=this.range.slice()),t}toJS(t,{mapAsMap:n,maxAliasCount:i,onAnchor:r,reviver:s}={}){if(!bs(t))throw new TypeError("A document argument is required");const o={anchors:new Map,doc:t,keep:!0,mapAsMap:n===!0,mapKeyWarned:!1,maxAliasCount:typeof i=="number"?i:100},l=Me(this,"",o);if(typeof r=="function")for(const{count:a,res:c}of o.anchors.values())r(c,a);return typeof s=="function"?_n(s,{"":l},"",l):l}}class ya extends ga{constructor(t){super(ha),this.source=t,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(t,n){if((n==null?void 0:n.maxAliasCount)===0)throw new ReferenceError("Alias resolution is disabled");let i;n!=null&&n.aliasResolveCache?i=n.aliasResolveCache:(i=[],Kn(t,{Node:(s,o)=>{(Vn(o)||yd(o))&&i.push(o)}}),n&&(n.aliasResolveCache=i));let r;for(const s of i){if(s===this)break;s.anchor===this.source&&(r=s)}if(r&&n){const{anchors:s,doc:o,maxAliasCount:l}=n;let a=s.get(r);if(a||(Me(r,null,n),a=s.get(r)),(a==null?void 0:a.res)===void 0){const c="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(c)}if(l>=0&&(a.count+=1,a.aliasCount===0&&(a.aliasCount=Dr(o,r,s)),a.count*a.aliasCount>l)){const c="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(c)}}return r}toJSON(t,n){if(!n)return{source:this.source};const i=this.resolve(n.doc,n);if(!i){const r=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(r)}return n.anchors.get(i).res}toString(t,n,i){const r=`*${this.source}`;if(t){if(vd(this.source),t.options.verifyAliasOrder&&!t.anchors.has(this.source)){const s=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(s)}if(t.implicitKey)return`${r} `}return r}}function Dr(e,t,n){if(Vn(t)){const i=t.resolve(e),r=n&&i&&n.get(i);return r?r.count*r.aliasCount:0}else if(X(t)){let i=0;for(const r of t.items){const s=Dr(e,r,n);s>i&&(i=s)}return i}else if(ee(t)){const i=Dr(e,t.key,n),r=Dr(e,t.value,n);return Math.max(i,r)}return 1}const kd=e=>!e||typeof e!="function"&&typeof e!="object";class L extends ga{constructor(t){super(tt),this.value=t}toJSON(t,n){return n!=null&&n.keep?this.value:Me(this.value,t,n)}toString(){return String(this.value)}}L.BLOCK_FOLDED="BLOCK_FOLDED";L.BLOCK_LITERAL="BLOCK_LITERAL";L.PLAIN="PLAIN";L.QUOTE_DOUBLE="QUOTE_DOUBLE";L.QUOTE_SINGLE="QUOTE_SINGLE";const Xg="tag:yaml.org,2002:";function Zg(e,t,n){if(t){const i=n.filter(s=>s.tag===t),r=i.find(s=>!s.format)??i[0];if(!r)throw new Error(`Tag ${t} not found`);return r}return n.find(i=>{var r;return((r=i.identify)==null?void 0:r.call(i,e))&&!i.format})}function Mi(e,t,n){var u,f,h;if(bs(e)&&(e=e.contents),Z(e))return e;if(ee(e)){const w=(f=(u=n.schema[Dt]).createNode)==null?void 0:f.call(u,n.schema,null,n);return w.items.push(e),w}(e instanceof String||e instanceof Number||e instanceof Boolean||typeof BigInt<"u"&&e instanceof BigInt)&&(e=e.valueOf());const{aliasDuplicateObjects:i,onAnchor:r,onTagObj:s,schema:o,sourceObjects:l}=n;let a;if(i&&e&&typeof e=="object"){if(a=l.get(e),a)return a.anchor??(a.anchor=r(e)),new ya(a.anchor);a={anchor:null,node:null},l.set(e,a)}t!=null&&t.startsWith("!!")&&(t=Xg+t.slice(2));let c=Zg(e,t,o.tags);if(!c){if(e&&typeof e.toJSON=="function"&&(e=e.toJSON()),!e||typeof e!="object"){const w=new L(e);return a&&(a.node=w),w}c=e instanceof Map?o[Dt]:Symbol.iterator in Object(e)?o[Un]:o[Dt]}s&&(s(c),delete n.onTagObj);const m=c!=null&&c.createNode?c.createNode(n.schema,e,n):typeof((h=c==null?void 0:c.nodeClass)==null?void 0:h.from)=="function"?c.nodeClass.from(n.schema,e,n):new L(e);return t?m.tag=t:c.default||(m.tag=c.tag),a&&(a.node=m),m}function ss(e,t,n){let i=n;for(let r=t.length-1;r>=0;--r){const s=t[r];if(typeof s=="number"&&Number.isInteger(s)&&s>=0){const o=[];o[s]=i,i=o}else i=new Map([[s,i]])}return Mi(i,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:e,sourceObjects:new Map})}const li=e=>e==null||typeof e=="object"&&!!e[Symbol.iterator]().next().done;class Sd extends ga{constructor(t,n){super(t),Object.defineProperty(this,"schema",{value:n,configurable:!0,enumerable:!1,writable:!0})}clone(t){const n=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return t&&(n.schema=t),n.items=n.items.map(i=>Z(i)||ee(i)?i.clone(t):i),this.range&&(n.range=this.range.slice()),n}addIn(t,n){if(li(t))this.add(n);else{const[i,...r]=t,s=this.get(i,!0);if(X(s))s.addIn(r,n);else if(s===void 0&&this.schema)this.set(i,ss(this.schema,r,n));else throw new Error(`Expected YAML collection at ${i}. Remaining path: ${r}`)}}deleteIn(t){const[n,...i]=t;if(i.length===0)return this.delete(n);const r=this.get(n,!0);if(X(r))return r.deleteIn(i);throw new Error(`Expected YAML collection at ${n}. Remaining path: ${i}`)}getIn(t,n){const[i,...r]=t,s=this.get(i,!0);return r.length===0?!n&&B(s)?s.value:s:X(s)?s.getIn(r,n):void 0}hasAllNullValues(t){return this.items.every(n=>{if(!ee(n))return!1;const i=n.value;return i==null||t&&B(i)&&i.value==null&&!i.commentBefore&&!i.comment&&!i.tag})}hasIn(t){const[n,...i]=t;if(i.length===0)return this.has(n);const r=this.get(n,!0);return X(r)?r.hasIn(i):!1}setIn(t,n){const[i,...r]=t;if(r.length===0)this.set(i,n);else{const s=this.get(i,!0);if(X(s))s.setIn(r,n);else if(s===void 0&&this.schema)this.set(i,ss(this.schema,r,n));else throw new Error(`Expected YAML collection at ${i}. Remaining path: ${r}`)}}}const ey=e=>e.replace(/^(?!$)(?: $)?/gm,"#");function ot(e,t){return/^\n+$/.test(e)?e.substring(1):t?e.replace(/^(?! *$)/gm,t):e}const Ht=(e,t,n)=>e.endsWith(`
`)?ot(n,t):n.includes(`
`)?`
`+ot(n,t):(e.endsWith(" ")?"":" ")+n,Ed="flow",gl="block",Lr="quoted";function Cs(e,t,n="flow",{indentAtStart:i,lineWidth:r=80,minContentWidth:s=20,onFold:o,onOverflow:l}={}){if(!r||r<0)return e;r<s&&(s=0);const a=Math.max(1+s,1+r-t.length);if(e.length<=a)return e;const c=[],m={};let u=r-t.length;typeof i=="number"&&(i>r-Math.max(2,s)?c.push(0):u=r-i);let f,h,w=!1,y=-1,_=-1,p=-1;n===gl&&(y=Bc(e,y,t.length),y!==-1&&(u=y+a));for(let g;g=e[y+=1];){if(n===Lr&&g==="\\"){switch(_=y,e[y+1]){case"x":y+=3;break;case"u":y+=5;break;case"U":y+=9;break;default:y+=1}p=y}if(g===`
`)n===gl&&(y=Bc(e,y,t.length)),u=y+t.length+a,f=void 0;else{if(g===" "&&h&&h!==" "&&h!==`
`&&h!=="	"){const v=e[y+1];v&&v!==" "&&v!==`
`&&v!=="	"&&(f=y)}if(y>=u)if(f)c.push(f),u=f+a,f=void 0;else if(n===Lr){for(;h===" "||h==="	";)h=g,g=e[y+=1],w=!0;const v=y>p+1?y-2:_-1;if(m[v])return e;c.push(v),m[v]=!0,u=v+a,f=void 0}else w=!0}h=g}if(w&&l&&l(),c.length===0)return e;o&&o();let d=e.slice(0,c[0]);for(let g=0;g<c.length;++g){const v=c[g],k=c[g+1]||e.length;v===0?d=`
${t}${e.slice(0,k)}`:(n===Lr&&m[v]&&(d+=`${e[v]}\\`),d+=`
${t}${e.slice(v+1,k)}`)}return d}function Bc(e,t,n){let i=t,r=t+1,s=e[r];for(;s===" "||s==="	";)if(t<r+n)s=e[++t];else{do s=e[++t];while(s&&s!==`
`);i=t,r=t+1,s=e[r]}return i}const Ns=(e,t)=>({indentAtStart:t?e.indent.length:e.indentAtStart,lineWidth:e.options.lineWidth,minContentWidth:e.options.minContentWidth}),As=e=>/^(%|---|\.\.\.)/m.test(e);function ty(e,t,n){if(!t||t<0)return!1;const i=t-n,r=e.length;if(r<=i)return!1;for(let s=0,o=0;s<r;++s)if(e[s]===`
`){if(s-o>i)return!0;if(o=s+1,r-o<=i)return!1}return!0}function wi(e,t){const n=JSON.stringify(e);if(t.options.doubleQuotedAsJSON)return n;const{implicitKey:i}=t,r=t.options.doubleQuotedMinMultiLineLength,s=t.indent||(As(e)?"  ":"");let o="",l=0;for(let a=0,c=n[a];c;c=n[++a])if(c===" "&&n[a+1]==="\\"&&n[a+2]==="n"&&(o+=n.slice(l,a)+"\\ ",a+=1,l=a,c="\\"),c==="\\")switch(n[a+1]){case"u":{o+=n.slice(l,a);const m=n.substr(a+2,4);switch(m){case"0000":o+="\\0";break;case"0007":o+="\\a";break;case"000b":o+="\\v";break;case"001b":o+="\\e";break;case"0085":o+="\\N";break;case"00a0":o+="\\_";break;case"2028":o+="\\L";break;case"2029":o+="\\P";break;default:m.substr(0,2)==="00"?o+="\\x"+m.substr(2):o+=n.substr(a,6)}a+=5,l=a+1}break;case"n":if(i||n[a+2]==='"'||n.length<r)a+=1;else{for(o+=n.slice(l,a)+`

`;n[a+2]==="\\"&&n[a+3]==="n"&&n[a+4]!=='"';)o+=`
`,a+=2;o+=s,n[a+2]===" "&&(o+="\\"),a+=1,l=a+1}break;default:a+=1}return o=l?o+n.slice(l):n,i?o:Cs(o,s,Lr,Ns(t,!1))}function yl(e,t){if(t.options.singleQuote===!1||t.implicitKey&&e.includes(`
`)||/[ \t]\n|\n[ \t]/.test(e))return wi(e,t);const n=t.indent||(As(e)?"  ":""),i="'"+e.replace(/'/g,"''").replace(/\n+/g,`$&
${n}`)+"'";return t.implicitKey?i:Cs(i,n,Ed,Ns(t,!1))}function kn(e,t){const{singleQuote:n}=t.options;let i;if(n===!1)i=wi;else{const r=e.includes('"'),s=e.includes("'");r&&!s?i=yl:s&&!r?i=wi:i=n?yl:wi}return i(e,t)}let vl;try{vl=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{vl=/\n+(?!\n|$)/g}function xr({comment:e,type:t,value:n},i,r,s){const{blockQuote:o,commentString:l,lineWidth:a}=i.options;if(!o||/\n[\t ]+$/.test(n))return kn(n,i);const c=i.indent||(i.forceBlockIndent||As(n)?"  ":""),m=o==="literal"?!0:o==="folded"||t===L.BLOCK_FOLDED?!1:t===L.BLOCK_LITERAL?!0:!ty(n,a,c.length);if(!n)return m?`|
`:`>
`;let u,f;for(f=n.length;f>0;--f){const k=n[f-1];if(k!==`
`&&k!=="	"&&k!==" ")break}let h=n.substring(f);const w=h.indexOf(`
`);w===-1?u="-":n===h||w!==h.length-1?(u="+",s&&s()):u="",h&&(n=n.slice(0,-h.length),h[h.length-1]===`
`&&(h=h.slice(0,-1)),h=h.replace(vl,`$&${c}`));let y=!1,_,p=-1;for(_=0;_<n.length;++_){const k=n[_];if(k===" ")y=!0;else if(k===`
`)p=_;else break}let d=n.substring(0,p<_?p+1:_);d&&(n=n.substring(d.length),d=d.replace(/\n+/g,`$&${c}`));let v=(y?c?"2":"1":"")+u;if(e&&(v+=" "+l(e.replace(/ ?[\r\n]+/g," ")),r&&r()),!m){const k=n.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${c}`);let C=!1;const E=Ns(i,!0);o!=="folded"&&t!==L.BLOCK_FOLDED&&(E.onOverflow=()=>{C=!0});const S=Cs(`${d}${k}${h}`,c,gl,E);if(!C)return`>${v}
${c}${S}`}return n=n.replace(/\n+/g,`$&${c}`),`|${v}
${c}${d}${n}${h}`}function ny(e,t,n,i){const{type:r,value:s}=e,{actualString:o,implicitKey:l,indent:a,indentStep:c,inFlow:m}=t;if(l&&s.includes(`
`)||m&&/[[\]{},]/.test(s))return kn(s,t);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(s))return l||m||!s.includes(`
`)?kn(s,t):xr(e,t,n,i);if(!l&&!m&&r!==L.PLAIN&&s.includes(`
`))return xr(e,t,n,i);if(As(s)){if(a==="")return t.forceBlockIndent=!0,xr(e,t,n,i);if(l&&a===c)return kn(s,t)}const u=s.replace(/\n+/g,`$&
${a}`);if(o){const f=y=>{var _;return y.default&&y.tag!=="tag:yaml.org,2002:str"&&((_=y.test)==null?void 0:_.test(u))},{compat:h,tags:w}=t.doc.schema;if(w.some(f)||h!=null&&h.some(f))return kn(s,t)}return l?u:Cs(u,a,Ed,Ns(t,!1))}function va(e,t,n,i){const{implicitKey:r,inFlow:s}=t,o=typeof e.value=="string"?e:Object.assign({},e,{value:String(e.value)});let{type:l}=e;l!==L.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(o.value)&&(l=L.QUOTE_DOUBLE);const a=m=>{switch(m){case L.BLOCK_FOLDED:case L.BLOCK_LITERAL:return r||s?kn(o.value,t):xr(o,t,n,i);case L.QUOTE_DOUBLE:return wi(o.value,t);case L.QUOTE_SINGLE:return yl(o.value,t);case L.PLAIN:return ny(o,t,n,i);default:return null}};let c=a(l);if(c===null){const{defaultKeyType:m,defaultStringType:u}=t.options,f=r&&m||u;if(c=a(f),c===null)throw new Error(`Unsupported default string type ${f}`)}return c}function bd(e,t){const n=Object.assign({blockQuote:!0,commentString:ey,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trailingComma:!1,trueStr:"true",verifyAliasOrder:!0},e.schema.toStringOptions,t);let i;switch(n.collectionStyle){case"block":i=!1;break;case"flow":i=!0;break;default:i=null}return{anchors:new Set,doc:e,flowCollectionPadding:n.flowCollectionPadding?" ":"",indent:"",indentStep:typeof n.indent=="number"?" ".repeat(n.indent):"  ",inFlow:i,options:n}}function iy(e,t){var r;if(t.tag){const s=e.filter(o=>o.tag===t.tag);if(s.length>0)return s.find(o=>o.format===t.format)??s[0]}let n,i;if(B(t)){i=t.value;let s=e.filter(o=>{var l;return(l=o.identify)==null?void 0:l.call(o,i)});if(s.length>1){const o=s.filter(l=>l.test);o.length>0&&(s=o)}n=s.find(o=>o.format===t.format)??s.find(o=>!o.format)}else i=t,n=e.find(s=>s.nodeClass&&i instanceof s.nodeClass);if(!n){const s=((r=i==null?void 0:i.constructor)==null?void 0:r.name)??(i===null?"null":typeof i);throw new Error(`Tag not resolved for ${s} value`)}return n}function ry(e,t,{anchors:n,doc:i}){if(!i.directives)return"";const r=[],s=(B(e)||X(e))&&e.anchor;s&&vd(s)&&(n.add(s),r.push(`&${s}`));const o=e.tag??(t.default?null:t.tag);return o&&r.push(i.directives.tagString(o)),r.join(" ")}function Mn(e,t,n,i){var a;if(ee(e))return e.toString(t,n,i);if(Vn(e)){if(t.doc.directives)return e.toString(t);if((a=t.resolvedAliases)!=null&&a.has(e))throw new TypeError("Cannot stringify circular structure without alias nodes");t.resolvedAliases?t.resolvedAliases.add(e):t.resolvedAliases=new Set([e]),e=e.resolve(t.doc)}let r;const s=Z(e)?e:t.doc.createNode(e,{onTagObj:c=>r=c});r??(r=iy(t.doc.schema.tags,s));const o=ry(s,r,t);o.length>0&&(t.indentAtStart=(t.indentAtStart??0)+o.length+1);const l=typeof r.stringify=="function"?r.stringify(s,t,n,i):B(s)?va(s,t,n,i):s.toString(t,n,i);return o?B(s)||l[0]==="{"||l[0]==="["?`${o} ${l}`:`${o}
${t.indent}${l}`:l}function sy({key:e,value:t},n,i,r){const{allNullValues:s,doc:o,indent:l,indentStep:a,options:{commentString:c,indentSeq:m,simpleKeys:u}}=n;let f=Z(e)&&e.comment||null;if(u){if(f)throw new Error("With simple keys, key nodes cannot have comments");if(X(e)||!Z(e)&&typeof e=="object"){const E="With simple keys, collection cannot be used as a key value";throw new Error(E)}}let h=!u&&(!e||f&&t==null&&!n.inFlow||X(e)||(B(e)?e.type===L.BLOCK_FOLDED||e.type===L.BLOCK_LITERAL:typeof e=="object"));n=Object.assign({},n,{allNullValues:!1,implicitKey:!h&&(u||!s),indent:l+a});let w=!1,y=!1,_=Mn(e,n,()=>w=!0,()=>y=!0);if(!h&&!n.inFlow&&_.length>1024){if(u)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");h=!0}if(n.inFlow){if(s||t==null)return w&&i&&i(),_===""?"?":h?`? ${_}`:_}else if(s&&!u||t==null&&h)return _=`? ${_}`,f&&!w?_+=Ht(_,n.indent,c(f)):y&&r&&r(),_;w&&(f=null),h?(f&&(_+=Ht(_,n.indent,c(f))),_=`? ${_}
${l}:`):(_=`${_}:`,f&&(_+=Ht(_,n.indent,c(f))));let p,d,g;Z(t)?(p=!!t.spaceBefore,d=t.commentBefore,g=t.comment):(p=!1,d=null,g=null,t&&typeof t=="object"&&(t=o.createNode(t))),n.implicitKey=!1,!h&&!f&&B(t)&&(n.indentAtStart=_.length+1),y=!1,!m&&a.length>=2&&!n.inFlow&&!h&&Hi(t)&&!t.flow&&!t.tag&&!t.anchor&&(n.indent=n.indent.substring(2));let v=!1;const k=Mn(t,n,()=>v=!0,()=>y=!0);let C=" ";if(f||p||d){if(C=p?`
`:"",d){const E=c(d);C+=`
${ot(E,n.indent)}`}k===""&&!n.inFlow?C===`
`&&g&&(C=`

`):C+=`
${n.indent}`}else if(!h&&X(t)){const E=k[0],S=k.indexOf(`
`),O=S!==-1,I=n.inFlow??t.flow??t.items.length===0;if(O||!I){let D=!1;if(O&&(E==="&"||E==="!")){let G=k.indexOf(" ");E==="&"&&G!==-1&&G<S&&k[G+1]==="!"&&(G=k.indexOf(" ",G+1)),(G===-1||S<G)&&(D=!0)}D||(C=`
${n.indent}`)}}else(k===""||k[0]===`
`)&&(C="");return _+=C+k,n.inFlow?v&&i&&i():g&&!v?_+=Ht(_,n.indent,c(g)):y&&r&&r(),_}function Cd(e,t){(e==="debug"||e==="warn")&&console.warn(t)}const pr="<<",at={identify:e=>e===pr||typeof e=="symbol"&&e.description===pr,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new L(Symbol(pr)),{addToJSMap:Nd}),stringify:()=>pr},oy=(e,t)=>(at.identify(t)||B(t)&&(!t.type||t.type===L.PLAIN)&&at.identify(t.value))&&(e==null?void 0:e.doc.schema.tags.some(n=>n.tag===at.tag&&n.default));function Nd(e,t,n){const i=Ad(e,n);if(Hi(i))for(const r of i.items)po(e,t,r);else if(Array.isArray(i))for(const r of i)po(e,t,r);else po(e,t,i)}function po(e,t,n){const i=Ad(e,n);if(!Ki(i))throw new Error("Merge sources must be maps or map aliases");const r=i.toJSON(null,e,Map);for(const[s,o]of r)t instanceof Map?t.has(s)||t.set(s,o):t instanceof Set?t.add(s):Object.prototype.hasOwnProperty.call(t,s)||Object.defineProperty(t,s,{value:o,writable:!0,enumerable:!0,configurable:!0});return t}function Ad(e,t){return e&&Vn(t)?t.resolve(e.doc,e):t}function Td(e,t,{key:n,value:i}){if(Z(n)&&n.addToJSMap)n.addToJSMap(e,t,i);else if(oy(e,n))Nd(e,t,i);else{const r=Me(n,"",e);if(t instanceof Map)t.set(r,Me(i,r,e));else if(t instanceof Set)t.add(r);else{const s=ly(n,r,e),o=Me(i,s,e);s in t?Object.defineProperty(t,s,{value:o,writable:!0,enumerable:!0,configurable:!0}):t[s]=o}}return t}function ly(e,t,n){if(t===null)return"";if(typeof t!="object")return String(t);if(Z(e)&&(n!=null&&n.doc)){const i=bd(n.doc,{});i.anchors=new Set;for(const s of n.anchors.keys())i.anchors.add(s.anchor);i.inFlow=!0,i.inStringifyKey=!0;const r=e.toString(i);if(!n.mapKeyWarned){let s=JSON.stringify(r);s.length>40&&(s=s.substring(0,36)+'..."'),Cd(n.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${s}. Set mapAsMap: true to use object keys.`),n.mapKeyWarned=!0}return r}return JSON.stringify(t)}function wa(e,t,n){const i=Mi(e,void 0,n),r=Mi(t,void 0,n);return new ve(i,r)}class ve{constructor(t,n=null){Object.defineProperty(this,ze,{value:gd}),this.key=t,this.value=n}clone(t){let{key:n,value:i}=this;return Z(n)&&(n=n.clone(t)),Z(i)&&(i=i.clone(t)),new ve(n,i)}toJSON(t,n){const i=n!=null&&n.mapAsMap?new Map:{};return Td(n,i,this)}toString(t,n,i){return t!=null&&t.doc?sy(this,t,n,i):JSON.stringify(this)}}function Id(e,t,n){return(t.inFlow??e.flow?cy:ay)(e,t,n)}function ay({comment:e,items:t},n,{blockItemPrefix:i,flowChars:r,itemIndent:s,onChompKeep:o,onComment:l}){const{indent:a,options:{commentString:c}}=n,m=Object.assign({},n,{indent:s,type:null});let u=!1;const f=[];for(let w=0;w<t.length;++w){const y=t[w];let _=null;if(Z(y))!u&&y.spaceBefore&&f.push(""),os(n,f,y.commentBefore,u),y.comment&&(_=y.comment);else if(ee(y)){const d=Z(y.key)?y.key:null;d&&(!u&&d.spaceBefore&&f.push(""),os(n,f,d.commentBefore,u))}u=!1;let p=Mn(y,m,()=>_=null,()=>u=!0);_&&(p+=Ht(p,s,c(_))),u&&_&&(u=!1),f.push(i+p)}let h;if(f.length===0)h=r.start+r.end;else{h=f[0];for(let w=1;w<f.length;++w){const y=f[w];h+=y?`
${a}${y}`:`
`}}return e?(h+=`
`+ot(c(e),a),l&&l()):u&&o&&o(),h}function cy({items:e},t,{flowChars:n,itemIndent:i}){const{indent:r,indentStep:s,flowCollectionPadding:o,options:{commentString:l}}=t;i+=s;const a=Object.assign({},t,{indent:i,inFlow:!0,type:null});let c=!1,m=0;const u=[];for(let w=0;w<e.length;++w){const y=e[w];let _=null;if(Z(y))y.spaceBefore&&u.push(""),os(t,u,y.commentBefore,!1),y.comment&&(_=y.comment);else if(ee(y)){const d=Z(y.key)?y.key:null;d&&(d.spaceBefore&&u.push(""),os(t,u,d.commentBefore,!1),d.comment&&(c=!0));const g=Z(y.value)?y.value:null;g?(g.comment&&(_=g.comment),g.commentBefore&&(c=!0)):y.value==null&&(d!=null&&d.comment)&&(_=d.comment)}_&&(c=!0);let p=Mn(y,a,()=>_=null);c||(c=u.length>m||p.includes(`
`)),w<e.length-1?p+=",":t.options.trailingComma&&(t.options.lineWidth>0&&(c||(c=u.reduce((d,g)=>d+g.length+2,2)+(p.length+2)>t.options.lineWidth)),c&&(p+=",")),_&&(p+=Ht(p,i,l(_))),u.push(p),m=u.length}const{start:f,end:h}=n;if(u.length===0)return f+h;if(!c){const w=u.reduce((y,_)=>y+_.length+2,2);c=t.options.lineWidth>0&&w>t.options.lineWidth}if(c){let w=f;for(const y of u)w+=y?`
${s}${r}${y}`:`
`;return`${w}
${r}${h}`}else return`${f}${o}${u.join(" ")}${o}${h}`}function os({indent:e,options:{commentString:t}},n,i,r){if(i&&r&&(i=i.replace(/^\n+/,"")),i){const s=ot(t(i),e);n.push(s.trimStart())}}function Wt(e,t){const n=B(t)?t.value:t;for(const i of e)if(ee(i)&&(i.key===t||i.key===n||B(i.key)&&i.key.value===n))return i}class Re extends Sd{static get tagName(){return"tag:yaml.org,2002:map"}constructor(t){super(Dt,t),this.items=[]}static from(t,n,i){const{keepUndefined:r,replacer:s}=i,o=new this(t),l=(a,c)=>{if(typeof s=="function")c=s.call(n,a,c);else if(Array.isArray(s)&&!s.includes(a))return;(c!==void 0||r)&&o.items.push(wa(a,c,i))};if(n instanceof Map)for(const[a,c]of n)l(a,c);else if(n&&typeof n=="object")for(const a of Object.keys(n))l(a,n[a]);return typeof t.sortMapEntries=="function"&&o.items.sort(t.sortMapEntries),o}add(t,n){var o;let i;ee(t)?i=t:!t||typeof t!="object"||!("key"in t)?i=new ve(t,t==null?void 0:t.value):i=new ve(t.key,t.value);const r=Wt(this.items,i.key),s=(o=this.schema)==null?void 0:o.sortMapEntries;if(r){if(!n)throw new Error(`Key ${i.key} already set`);B(r.value)&&kd(i.value)?r.value.value=i.value:r.value=i.value}else if(s){const l=this.items.findIndex(a=>s(i,a)<0);l===-1?this.items.push(i):this.items.splice(l,0,i)}else this.items.push(i)}delete(t){const n=Wt(this.items,t);return n?this.items.splice(this.items.indexOf(n),1).length>0:!1}get(t,n){const i=Wt(this.items,t),r=i==null?void 0:i.value;return(!n&&B(r)?r.value:r)??void 0}has(t){return!!Wt(this.items,t)}set(t,n){this.add(new ve(t,n),!0)}toJSON(t,n,i){const r=i?new i:n!=null&&n.mapAsMap?new Map:{};n!=null&&n.onCreate&&n.onCreate(r);for(const s of this.items)Td(n,r,s);return r}toString(t,n,i){if(!t)return JSON.stringify(this);for(const r of this.items)if(!ee(r))throw new Error(`Map items must all be pairs; found ${JSON.stringify(r)} instead`);return!t.allNullValues&&this.hasAllNullValues(!1)&&(t=Object.assign({},t,{allNullValues:!0})),Id(this,t,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:t.indent||"",onChompKeep:i,onComment:n})}}const Hn={collection:"map",default:!0,nodeClass:Re,tag:"tag:yaml.org,2002:map",resolve(e,t){return Ki(e)||t("Expected a mapping for this tag"),e},createNode:(e,t,n)=>Re.from(e,t,n)};class en extends Sd{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(t){super(Un,t),this.items=[]}add(t){this.items.push(t)}delete(t){const n=mr(t);return typeof n!="number"?!1:this.items.splice(n,1).length>0}get(t,n){const i=mr(t);if(typeof i!="number")return;const r=this.items[i];return!n&&B(r)?r.value:r}has(t){const n=mr(t);return typeof n=="number"&&n<this.items.length}set(t,n){const i=mr(t);if(typeof i!="number")throw new Error(`Expected a valid index, not ${t}.`);const r=this.items[i];B(r)&&kd(n)?r.value=n:this.items[i]=n}toJSON(t,n){const i=[];n!=null&&n.onCreate&&n.onCreate(i);let r=0;for(const s of this.items)i.push(Me(s,String(r++),n));return i}toString(t,n,i){return t?Id(this,t,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(t.indent||"")+"  ",onChompKeep:i,onComment:n}):JSON.stringify(this)}static from(t,n,i){const{replacer:r}=i,s=new this(t);if(n&&Symbol.iterator in Object(n)){let o=0;for(let l of n){if(typeof r=="function"){const a=n instanceof Set?l:String(o++);l=r.call(n,a,l)}s.items.push(Mi(l,void 0,i))}}return s}}function mr(e){let t=B(e)?e.value:e;return t&&typeof t=="string"&&(t=Number(t)),typeof t=="number"&&Number.isInteger(t)&&t>=0?t:null}const Wn={collection:"seq",default:!0,nodeClass:en,tag:"tag:yaml.org,2002:seq",resolve(e,t){return Hi(e)||t("Expected a sequence for this tag"),e},createNode:(e,t,n)=>en.from(e,t,n)},Ts={identify:e=>typeof e=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:e=>e,stringify(e,t,n,i){return t=Object.assign({actualString:!0},t),va(e,t,n,i)}},Is={identify:e=>e==null,createNode:()=>new L(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new L(null),stringify:({source:e},t)=>typeof e=="string"&&Is.test.test(e)?e:t.options.nullStr},_a={identify:e=>typeof e=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:e=>new L(e[0]==="t"||e[0]==="T"),stringify({source:e,value:t},n){if(e&&_a.test.test(e)){const i=e[0]==="t"||e[0]==="T";if(t===i)return e}return t?n.options.trueStr:n.options.falseStr}};function Ge({format:e,minFractionDigits:t,tag:n,value:i}){if(typeof i=="bigint")return String(i);const r=typeof i=="number"?i:Number(i);if(!isFinite(r))return isNaN(r)?".nan":r<0?"-.inf":".inf";let s=Object.is(i,-0)?"-0":JSON.stringify(i);if(!e&&t&&(!n||n==="tag:yaml.org,2002:float")&&/^-?\d/.test(s)&&!s.includes("e")){let o=s.indexOf(".");o<0&&(o=s.length,s+=".");let l=t-(s.length-o-1);for(;l-- >0;)s+="0"}return s}const Od={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>e.slice(-3).toLowerCase()==="nan"?NaN:e[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Ge},Dd={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e),stringify(e){const t=Number(e.value);return isFinite(t)?t.toExponential():Ge(e)}},Ld={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(e){const t=new L(parseFloat(e)),n=e.indexOf(".");return n!==-1&&e[e.length-1]==="0"&&(t.minFractionDigits=e.length-n-1),t},stringify:Ge},Os=e=>typeof e=="bigint"||Number.isInteger(e),ka=(e,t,n,{intAsBigInt:i})=>i?BigInt(e):parseInt(e.substring(t),n);function xd(e,t,n){const{value:i}=e;return Os(i)&&i>=0?n+i.toString(t):Ge(e)}const Rd={identify:e=>Os(e)&&e>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(e,t,n)=>ka(e,2,8,n),stringify:e=>xd(e,8,"0o")},Pd={identify:Os,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(e,t,n)=>ka(e,0,10,n),stringify:Ge},jd={identify:e=>Os(e)&&e>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(e,t,n)=>ka(e,2,16,n),stringify:e=>xd(e,16,"0x")},uy=[Hn,Wn,Ts,Is,_a,Rd,Pd,jd,Od,Dd,Ld];function Uc(e){return typeof e=="bigint"||Number.isInteger(e)}const hr=({value:e})=>JSON.stringify(e),fy=[{identify:e=>typeof e=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:e=>e,stringify:hr},{identify:e=>e==null,createNode:()=>new L(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:hr},{identify:e=>typeof e=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:e=>e==="true",stringify:hr},{identify:Uc,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(e,t,{intAsBigInt:n})=>n?BigInt(e):parseInt(e,10),stringify:({value:e})=>Uc(e)?e.toString():JSON.stringify(e)},{identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:e=>parseFloat(e),stringify:hr}],dy={default:!0,tag:"",test:/^/,resolve(e,t){return t(`Unresolved plain scalar ${JSON.stringify(e)}`),e}},py=[Hn,Wn].concat(fy,dy),Sa={identify:e=>e instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(e,t){if(typeof atob=="function"){const n=atob(e.replace(/[\n\r]/g,"")),i=new Uint8Array(n.length);for(let r=0;r<n.length;++r)i[r]=n.charCodeAt(r);return i}else return t("This environment does not support reading binary tags; either Buffer or atob is required"),e},stringify({comment:e,type:t,value:n},i,r,s){if(!n)return"";const o=n;let l;if(typeof btoa=="function"){let a="";for(let c=0;c<o.length;++c)a+=String.fromCharCode(o[c]);l=btoa(a)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(t??(t=L.BLOCK_LITERAL),t!==L.QUOTE_DOUBLE){const a=Math.max(i.options.lineWidth-i.indent.length,i.options.minContentWidth),c=Math.ceil(l.length/a),m=new Array(c);for(let u=0,f=0;u<c;++u,f+=a)m[u]=l.substr(f,a);l=m.join(t===L.BLOCK_LITERAL?`
`:" ")}return va({comment:e,type:t,value:l},i,r,s)}};function Md(e,t){if(Hi(e))for(let n=0;n<e.items.length;++n){let i=e.items[n];if(!ee(i)){if(Ki(i)){i.items.length>1&&t("Each pair must have its own sequence indicator");const r=i.items[0]||new ve(new L(null));if(i.commentBefore&&(r.key.commentBefore=r.key.commentBefore?`${i.commentBefore}
${r.key.commentBefore}`:i.commentBefore),i.comment){const s=r.value??r.key;s.comment=s.comment?`${i.comment}
${s.comment}`:i.comment}i=r}e.items[n]=ee(i)?i:new ve(i)}}else t("Expected a sequence for this tag");return e}function $d(e,t,n){const{replacer:i}=n,r=new en(e);r.tag="tag:yaml.org,2002:pairs";let s=0;if(t&&Symbol.iterator in Object(t))for(let o of t){typeof i=="function"&&(o=i.call(t,String(s++),o));let l,a;if(Array.isArray(o))if(o.length===2)l=o[0],a=o[1];else throw new TypeError(`Expected [key, value] tuple: ${o}`);else if(o&&o instanceof Object){const c=Object.keys(o);if(c.length===1)l=c[0],a=o[l];else throw new TypeError(`Expected tuple with one key, not ${c.length} keys`)}else l=o;r.items.push(wa(l,a,n))}return r}const Ea={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:Md,createNode:$d};class Tn extends en{constructor(){super(),this.add=Re.prototype.add.bind(this),this.delete=Re.prototype.delete.bind(this),this.get=Re.prototype.get.bind(this),this.has=Re.prototype.has.bind(this),this.set=Re.prototype.set.bind(this),this.tag=Tn.tag}toJSON(t,n){if(!n)return super.toJSON(t);const i=new Map;n!=null&&n.onCreate&&n.onCreate(i);for(const r of this.items){let s,o;if(ee(r)?(s=Me(r.key,"",n),o=Me(r.value,s,n)):s=Me(r,"",n),i.has(s))throw new Error("Ordered maps must not include duplicate keys");i.set(s,o)}return i}static from(t,n,i){const r=$d(t,n,i),s=new this;return s.items=r.items,s}}Tn.tag="tag:yaml.org,2002:omap";const ba={collection:"seq",identify:e=>e instanceof Map,nodeClass:Tn,default:!1,tag:"tag:yaml.org,2002:omap",resolve(e,t){const n=Md(e,t),i=[];for(const{key:r}of n.items)B(r)&&(i.includes(r.value)?t(`Ordered maps must not include duplicate keys: ${r.value}`):i.push(r.value));return Object.assign(new Tn,n)},createNode:(e,t,n)=>Tn.from(e,t,n)};function Fd({value:e,source:t},n){return t&&(e?zd:Bd).test.test(t)?t:e?n.options.trueStr:n.options.falseStr}const zd={identify:e=>e===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new L(!0),stringify:Fd},Bd={identify:e=>e===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new L(!1),stringify:Fd},my={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>e.slice(-3).toLowerCase()==="nan"?NaN:e[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Ge},hy={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e.replace(/_/g,"")),stringify(e){const t=Number(e.value);return isFinite(t)?t.toExponential():Ge(e)}},gy={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(e){const t=new L(parseFloat(e.replace(/_/g,""))),n=e.indexOf(".");if(n!==-1){const i=e.substring(n+1).replace(/_/g,"");i[i.length-1]==="0"&&(t.minFractionDigits=i.length)}return t},stringify:Ge},Wi=e=>typeof e=="bigint"||Number.isInteger(e);function Ds(e,t,n,{intAsBigInt:i}){const r=e[0];if((r==="-"||r==="+")&&(t+=1),e=e.substring(t).replace(/_/g,""),i){switch(n){case 2:e=`0b${e}`;break;case 8:e=`0o${e}`;break;case 16:e=`0x${e}`;break}const o=BigInt(e);return r==="-"?BigInt(-1)*o:o}const s=parseInt(e,n);return r==="-"?-1*s:s}function Ca(e,t,n){const{value:i}=e;if(Wi(i)){const r=i.toString(t);return i<0?"-"+n+r.substr(1):n+r}return Ge(e)}const yy={identify:Wi,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(e,t,n)=>Ds(e,2,2,n),stringify:e=>Ca(e,2,"0b")},vy={identify:Wi,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(e,t,n)=>Ds(e,1,8,n),stringify:e=>Ca(e,8,"0")},wy={identify:Wi,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(e,t,n)=>Ds(e,0,10,n),stringify:Ge},_y={identify:Wi,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(e,t,n)=>Ds(e,2,16,n),stringify:e=>Ca(e,16,"0x")};class In extends Re{constructor(t){super(t),this.tag=In.tag}add(t){let n;ee(t)?n=t:t&&typeof t=="object"&&"key"in t&&"value"in t&&t.value===null?n=new ve(t.key,null):n=new ve(t,null),Wt(this.items,n.key)||this.items.push(n)}get(t,n){const i=Wt(this.items,t);return!n&&ee(i)?B(i.key)?i.key.value:i.key:i}set(t,n){if(typeof n!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof n}`);const i=Wt(this.items,t);i&&!n?this.items.splice(this.items.indexOf(i),1):!i&&n&&this.items.push(new ve(t))}toJSON(t,n){return super.toJSON(t,n,Set)}toString(t,n,i){if(!t)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},t,{allNullValues:!0}),n,i);throw new Error("Set items must all have null values")}static from(t,n,i){const{replacer:r}=i,s=new this(t);if(n&&Symbol.iterator in Object(n))for(let o of n)typeof r=="function"&&(o=r.call(n,o,o)),s.items.push(wa(o,null,i));return s}}In.tag="tag:yaml.org,2002:set";const Na={collection:"map",identify:e=>e instanceof Set,nodeClass:In,default:!1,tag:"tag:yaml.org,2002:set",createNode:(e,t,n)=>In.from(e,t,n),resolve(e,t){if(Ki(e)){if(e.hasAllNullValues(!0))return Object.assign(new In,e);t("Set items must all have null values")}else t("Expected a mapping for this tag");return e}};function Aa(e,t){const n=e[0],i=n==="-"||n==="+"?e.substring(1):e,r=o=>t?BigInt(o):Number(o),s=i.replace(/_/g,"").split(":").reduce((o,l)=>o*r(60)+r(l),r(0));return n==="-"?r(-1)*s:s}function Ud(e){let{value:t}=e,n=o=>o;if(typeof t=="bigint")n=o=>BigInt(o);else if(isNaN(t)||!isFinite(t))return Ge(e);let i="";t<0&&(i="-",t*=n(-1));const r=n(60),s=[t%r];return t<60?s.unshift(0):(t=(t-s[0])/r,s.unshift(t%r),t>=60&&(t=(t-s[0])/r,s.unshift(t))),i+s.map(o=>String(o).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const Vd={identify:e=>typeof e=="bigint"||Number.isInteger(e),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(e,t,{intAsBigInt:n})=>Aa(e,n),stringify:Ud},Kd={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:e=>Aa(e,!1),stringify:Ud},Ls={identify:e=>e instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(e){const t=e.match(Ls.test);if(!t)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,n,i,r,s,o,l]=t.map(Number),a=t[7]?Number((t[7]+"00").substr(1,3)):0;let c=Date.UTC(n,i-1,r,s||0,o||0,l||0,a);const m=t[8];if(m&&m!=="Z"){let u=Aa(m,!1);Math.abs(u)<30&&(u*=60),c-=6e4*u}return new Date(c)},stringify:({value:e})=>(e==null?void 0:e.toISOString().replace(/(T00:00:00)?\.000Z$/,""))??""},Vc=[Hn,Wn,Ts,Is,zd,Bd,yy,vy,wy,_y,my,hy,gy,Sa,at,ba,Ea,Na,Vd,Kd,Ls],Kc=new Map([["core",uy],["failsafe",[Hn,Wn,Ts]],["json",py],["yaml11",Vc],["yaml-1.1",Vc]]),Hc={binary:Sa,bool:_a,float:Ld,floatExp:Dd,floatNaN:Od,floatTime:Kd,int:Pd,intHex:jd,intOct:Rd,intTime:Vd,map:Hn,merge:at,null:Is,omap:ba,pairs:Ea,seq:Wn,set:Na,timestamp:Ls},ky={"tag:yaml.org,2002:binary":Sa,"tag:yaml.org,2002:merge":at,"tag:yaml.org,2002:omap":ba,"tag:yaml.org,2002:pairs":Ea,"tag:yaml.org,2002:set":Na,"tag:yaml.org,2002:timestamp":Ls};function mo(e,t,n){const i=Kc.get(t);if(i&&!e)return n&&!i.includes(at)?i.concat(at):i.slice();let r=i;if(!r)if(Array.isArray(e))r=[];else{const s=Array.from(Kc.keys()).filter(o=>o!=="yaml11").map(o=>JSON.stringify(o)).join(", ");throw new Error(`Unknown schema "${t}"; use one of ${s} or define customTags array`)}if(Array.isArray(e))for(const s of e)r=r.concat(s);else typeof e=="function"&&(r=e(r.slice()));return n&&(r=r.concat(at)),r.reduce((s,o)=>{const l=typeof o=="string"?Hc[o]:o;if(!l){const a=JSON.stringify(o),c=Object.keys(Hc).map(m=>JSON.stringify(m)).join(", ");throw new Error(`Unknown custom tag ${a}; use one of ${c}`)}return s.includes(l)||s.push(l),s},[])}const Sy=(e,t)=>e.key<t.key?-1:e.key>t.key?1:0;class Ta{constructor({compat:t,customTags:n,merge:i,resolveKnownTags:r,schema:s,sortMapEntries:o,toStringDefaults:l}){this.compat=Array.isArray(t)?mo(t,"compat"):t?mo(null,t):null,this.name=typeof s=="string"&&s||"core",this.knownTags=r?ky:{},this.tags=mo(n,this.name,i),this.toStringOptions=l??null,Object.defineProperty(this,Dt,{value:Hn}),Object.defineProperty(this,tt,{value:Ts}),Object.defineProperty(this,Un,{value:Wn}),this.sortMapEntries=typeof o=="function"?o:o===!0?Sy:null}clone(){const t=Object.create(Ta.prototype,Object.getOwnPropertyDescriptors(this));return t.tags=this.tags.slice(),t}}function Ey(e,t){var a;const n=[];let i=t.directives===!0;if(t.directives!==!1&&e.directives){const c=e.directives.toString(e);c?(n.push(c),i=!0):e.directives.docStart&&(i=!0)}i&&n.push("---");const r=bd(e,t),{commentString:s}=r.options;if(e.commentBefore){n.length!==1&&n.unshift("");const c=s(e.commentBefore);n.unshift(ot(c,""))}let o=!1,l=null;if(e.contents){if(Z(e.contents)){if(e.contents.spaceBefore&&i&&n.push(""),e.contents.commentBefore){const u=s(e.contents.commentBefore);n.push(ot(u,""))}r.forceBlockIndent=!!e.comment,l=e.contents.comment}const c=l?void 0:()=>o=!0;let m=Mn(e.contents,r,()=>l=null,c);l&&(m+=Ht(m,"",s(l))),(m[0]==="|"||m[0]===">")&&n[n.length-1]==="---"?n[n.length-1]=`--- ${m}`:n.push(m)}else n.push(Mn(e.contents,r));if((a=e.directives)!=null&&a.docEnd)if(e.comment){const c=s(e.comment);c.includes(`
`)?(n.push("..."),n.push(ot(c,""))):n.push(`... ${c}`)}else n.push("...");else{let c=e.comment;c&&o&&(c=c.replace(/^\n+/,"")),c&&((!o||l)&&n[n.length-1]!==""&&n.push(""),n.push(ot(s(c),"")))}return n.join(`
`)+`
`}class xs{constructor(t,n,i){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,ze,{value:hl});let r=null;typeof n=="function"||Array.isArray(n)?r=n:i===void 0&&n&&(i=n,n=void 0);const s=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},i);this.options=s;let{version:o}=s;i!=null&&i._directives?(this.directives=i._directives.atDocument(),this.directives.yaml.explicit&&(o=this.directives.yaml.version)):this.directives=new ge({version:o}),this.setSchema(o,i),this.contents=t===void 0?null:this.createNode(t,r,i)}clone(){const t=Object.create(xs.prototype,{[ze]:{value:hl}});return t.commentBefore=this.commentBefore,t.comment=this.comment,t.errors=this.errors.slice(),t.warnings=this.warnings.slice(),t.options=Object.assign({},this.options),this.directives&&(t.directives=this.directives.clone()),t.schema=this.schema.clone(),t.contents=Z(this.contents)?this.contents.clone(t.schema):this.contents,this.range&&(t.range=this.range.slice()),t}add(t){sn(this.contents)&&this.contents.add(t)}addIn(t,n){sn(this.contents)&&this.contents.addIn(t,n)}createAlias(t,n){if(!t.anchor){const i=wd(this);t.anchor=!n||i.has(n)?_d(n||"a",i):n}return new ya(t.anchor)}createNode(t,n,i){let r;if(typeof n=="function")t=n.call({"":t},"",t),r=n;else if(Array.isArray(n)){const _=d=>typeof d=="number"||d instanceof String||d instanceof Number,p=n.filter(_).map(String);p.length>0&&(n=n.concat(p)),r=n}else i===void 0&&n&&(i=n,n=void 0);const{aliasDuplicateObjects:s,anchorPrefix:o,flow:l,keepUndefined:a,onTagObj:c,tag:m}=i??{},{onAnchor:u,setAnchors:f,sourceObjects:h}=Jg(this,o||"a"),w={aliasDuplicateObjects:s??!0,keepUndefined:a??!1,onAnchor:u,onTagObj:c,replacer:r,schema:this.schema,sourceObjects:h},y=Mi(t,m,w);return l&&X(y)&&(y.flow=!0),f(),y}createPair(t,n,i={}){const r=this.createNode(t,null,i),s=this.createNode(n,null,i);return new ve(r,s)}delete(t){return sn(this.contents)?this.contents.delete(t):!1}deleteIn(t){return li(t)?this.contents==null?!1:(this.contents=null,!0):sn(this.contents)?this.contents.deleteIn(t):!1}get(t,n){return X(this.contents)?this.contents.get(t,n):void 0}getIn(t,n){return li(t)?!n&&B(this.contents)?this.contents.value:this.contents:X(this.contents)?this.contents.getIn(t,n):void 0}has(t){return X(this.contents)?this.contents.has(t):!1}hasIn(t){return li(t)?this.contents!==void 0:X(this.contents)?this.contents.hasIn(t):!1}set(t,n){this.contents==null?this.contents=ss(this.schema,[t],n):sn(this.contents)&&this.contents.set(t,n)}setIn(t,n){li(t)?this.contents=n:this.contents==null?this.contents=ss(this.schema,Array.from(t),n):sn(this.contents)&&this.contents.setIn(t,n)}setSchema(t,n={}){typeof t=="number"&&(t=String(t));let i;switch(t){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new ge({version:"1.1"}),i={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=t:this.directives=new ge({version:t}),i={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,i=null;break;default:{const r=JSON.stringify(t);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${r}`)}}if(n.schema instanceof Object)this.schema=n.schema;else if(i)this.schema=new Ta(Object.assign(i,n));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:t,jsonArg:n,mapAsMap:i,maxAliasCount:r,onAnchor:s,reviver:o}={}){const l={anchors:new Map,doc:this,keep:!t,mapAsMap:i===!0,mapKeyWarned:!1,maxAliasCount:typeof r=="number"?r:100},a=Me(this.contents,n??"",l);if(typeof s=="function")for(const{count:c,res:m}of l.anchors.values())s(m,c);return typeof o=="function"?_n(o,{"":a},"",a):a}toJSON(t,n){return this.toJS({json:!0,jsonArg:t,mapAsMap:!1,onAnchor:n})}toString(t={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in t&&(!Number.isInteger(t.indent)||Number(t.indent)<=0)){const n=JSON.stringify(t.indent);throw new Error(`"indent" option must be a positive integer, not ${n}`)}return Ey(this,t)}}function sn(e){if(X(e))return!0;throw new Error("Expected a YAML collection as document contents")}class Hd extends Error{constructor(t,n,i,r){super(),this.name=t,this.code=i,this.message=r,this.pos=n}}class ai extends Hd{constructor(t,n,i){super("YAMLParseError",t,n,i)}}class by extends Hd{constructor(t,n,i){super("YAMLWarning",t,n,i)}}const Wc=(e,t)=>n=>{if(n.pos[0]===-1)return;n.linePos=n.pos.map(l=>t.linePos(l));const{line:i,col:r}=n.linePos[0];n.message+=` at line ${i}, column ${r}`;let s=r-1,o=e.substring(t.lineStarts[i-1],t.lineStarts[i]).replace(/[\n\r]+$/,"");if(s>=60&&o.length>80){const l=Math.min(s-39,o.length-79);o="…"+o.substring(l),s-=l-1}if(o.length>80&&(o=o.substring(0,79)+"…"),i>1&&/^ *$/.test(o.substring(0,s))){let l=e.substring(t.lineStarts[i-2],t.lineStarts[i-1]);l.length>80&&(l=l.substring(0,79)+`…
`),o=l+o}if(/[^ ]/.test(o)){let l=1;const a=n.linePos[1];(a==null?void 0:a.line)===i&&a.col>r&&(l=Math.max(1,Math.min(a.col-r,80-s)));const c=" ".repeat(s)+"^".repeat(l);n.message+=`:

${o}
${c}
`}};function $n(e,{flow:t,indicator:n,next:i,offset:r,onError:s,parentIndent:o,startOnNewline:l}){let a=!1,c=l,m=l,u="",f="",h=!1,w=!1,y=null,_=null,p=null,d=null,g=null,v=null,k=null;for(const S of e)switch(w&&(S.type!=="space"&&S.type!=="newline"&&S.type!=="comma"&&s(S.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),w=!1),y&&(c&&S.type!=="comment"&&S.type!=="newline"&&s(y,"TAB_AS_INDENT","Tabs are not allowed as indentation"),y=null),S.type){case"space":!t&&(n!=="doc-start"||(i==null?void 0:i.type)!=="flow-collection")&&S.source.includes("	")&&(y=S),m=!0;break;case"comment":{m||s(S,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const O=S.source.substring(1)||" ";u?u+=f+O:u=O,f="",c=!1;break}case"newline":c?u?u+=S.source:(!v||n!=="seq-item-ind")&&(a=!0):f+=S.source,c=!0,h=!0,(_||p)&&(d=S),m=!0;break;case"anchor":_&&s(S,"MULTIPLE_ANCHORS","A node can have at most one anchor"),S.source.endsWith(":")&&s(S.offset+S.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),_=S,k??(k=S.offset),c=!1,m=!1,w=!0;break;case"tag":{p&&s(S,"MULTIPLE_TAGS","A node can have at most one tag"),p=S,k??(k=S.offset),c=!1,m=!1,w=!0;break}case n:(_||p)&&s(S,"BAD_PROP_ORDER",`Anchors and tags must be after the ${S.source} indicator`),v&&s(S,"UNEXPECTED_TOKEN",`Unexpected ${S.source} in ${t??"collection"}`),v=S,c=n==="seq-item-ind"||n==="explicit-key-ind",m=!1;break;case"comma":if(t){g&&s(S,"UNEXPECTED_TOKEN",`Unexpected , in ${t}`),g=S,c=!1,m=!1;break}default:s(S,"UNEXPECTED_TOKEN",`Unexpected ${S.type} token`),c=!1,m=!1}const C=e[e.length-1],E=C?C.offset+C.source.length:r;return w&&i&&i.type!=="space"&&i.type!=="newline"&&i.type!=="comma"&&(i.type!=="scalar"||i.source!=="")&&s(i.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),y&&(c&&y.indent<=o||(i==null?void 0:i.type)==="block-map"||(i==null?void 0:i.type)==="block-seq")&&s(y,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:g,found:v,spaceBefore:a,comment:u,hasNewline:h,anchor:_,tag:p,newlineAfterProp:d,end:E,start:k??E}}function $i(e){if(!e)return null;switch(e.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(e.source.includes(`
`))return!0;if(e.end){for(const t of e.end)if(t.type==="newline")return!0}return!1;case"flow-collection":for(const t of e.items){for(const n of t.start)if(n.type==="newline")return!0;if(t.sep){for(const n of t.sep)if(n.type==="newline")return!0}if($i(t.key)||$i(t.value))return!0}return!1;default:return!0}}function wl(e,t,n){if((t==null?void 0:t.type)==="flow-collection"){const i=t.end[0];i.indent===e&&(i.source==="]"||i.source==="}")&&$i(t)&&n(i,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function Wd(e,t,n){const{uniqueKeys:i}=e.options;if(i===!1)return!1;const r=typeof i=="function"?i:(s,o)=>s===o||B(s)&&B(o)&&s.value===o.value;return t.some(s=>r(s.key,n))}const qc="All mapping items must start at the same column";function Cy({composeNode:e,composeEmptyNode:t},n,i,r,s){var m;const o=(s==null?void 0:s.nodeClass)??Re,l=new o(n.schema);n.atRoot&&(n.atRoot=!1);let a=i.offset,c=null;for(const u of i.items){const{start:f,key:h,sep:w,value:y}=u,_=$n(f,{indicator:"explicit-key-ind",next:h??(w==null?void 0:w[0]),offset:a,onError:r,parentIndent:i.indent,startOnNewline:!0}),p=!_.found;if(p){if(h&&(h.type==="block-seq"?r(a,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in h&&h.indent!==i.indent&&r(a,"BAD_INDENT",qc)),!_.anchor&&!_.tag&&!w){c=_.end,_.comment&&(l.comment?l.comment+=`
`+_.comment:l.comment=_.comment);continue}(_.newlineAfterProp||$i(h))&&r(h??f[f.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else((m=_.found)==null?void 0:m.indent)!==i.indent&&r(a,"BAD_INDENT",qc);n.atKey=!0;const d=_.end,g=h?e(n,h,_,r):t(n,d,f,null,_,r);n.schema.compat&&wl(i.indent,h,r),n.atKey=!1,Wd(n,l.items,g)&&r(d,"DUPLICATE_KEY","Map keys must be unique");const v=$n(w??[],{indicator:"map-value-ind",next:y,offset:g.range[2],onError:r,parentIndent:i.indent,startOnNewline:!h||h.type==="block-scalar"});if(a=v.end,v.found){p&&((y==null?void 0:y.type)==="block-map"&&!v.hasNewline&&r(a,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),n.options.strict&&_.start<v.found.offset-1024&&r(g.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const k=y?e(n,y,v,r):t(n,a,w,null,v,r);n.schema.compat&&wl(i.indent,y,r),a=k.range[2];const C=new ve(g,k);n.options.keepSourceTokens&&(C.srcToken=u),l.items.push(C)}else{p&&r(g.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),v.comment&&(g.comment?g.comment+=`
`+v.comment:g.comment=v.comment);const k=new ve(g);n.options.keepSourceTokens&&(k.srcToken=u),l.items.push(k)}}return c&&c<a&&r(c,"IMPOSSIBLE","Map comment with trailing content"),l.range=[i.offset,a,c??a],l}function Ny({composeNode:e,composeEmptyNode:t},n,i,r,s){const o=(s==null?void 0:s.nodeClass)??en,l=new o(n.schema);n.atRoot&&(n.atRoot=!1),n.atKey&&(n.atKey=!1);let a=i.offset,c=null;for(const{start:m,value:u}of i.items){const f=$n(m,{indicator:"seq-item-ind",next:u,offset:a,onError:r,parentIndent:i.indent,startOnNewline:!0});if(!f.found)if(f.anchor||f.tag||u)(u==null?void 0:u.type)==="block-seq"?r(f.end,"BAD_INDENT","All sequence items must start at the same column"):r(a,"MISSING_CHAR","Sequence item without - indicator");else{c=f.end,f.comment&&(l.comment=f.comment);continue}const h=u?e(n,u,f,r):t(n,f.end,m,null,f,r);n.schema.compat&&wl(i.indent,u,r),a=h.range[2],l.items.push(h)}return l.range=[i.offset,a,c??a],l}function qi(e,t,n,i){let r="";if(e){let s=!1,o="";for(const l of e){const{source:a,type:c}=l;switch(c){case"space":s=!0;break;case"comment":{n&&!s&&i(l,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const m=a.substring(1)||" ";r?r+=o+m:r=m,o="";break}case"newline":r&&(o+=a),s=!0;break;default:i(l,"UNEXPECTED_TOKEN",`Unexpected ${c} at node end`)}t+=a.length}}return{comment:r,offset:t}}const ho="Block collections are not allowed within flow collections",go=e=>e&&(e.type==="block-map"||e.type==="block-seq");function Ay({composeNode:e,composeEmptyNode:t},n,i,r,s){var _;const o=i.start.source==="{",l=o?"flow map":"flow sequence",a=(s==null?void 0:s.nodeClass)??(o?Re:en),c=new a(n.schema);c.flow=!0;const m=n.atRoot;m&&(n.atRoot=!1),n.atKey&&(n.atKey=!1);let u=i.offset+i.start.source.length;for(let p=0;p<i.items.length;++p){const d=i.items[p],{start:g,key:v,sep:k,value:C}=d,E=$n(g,{flow:l,indicator:"explicit-key-ind",next:v??(k==null?void 0:k[0]),offset:u,onError:r,parentIndent:i.indent,startOnNewline:!1});if(!E.found){if(!E.anchor&&!E.tag&&!k&&!C){p===0&&E.comma?r(E.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${l}`):p<i.items.length-1&&r(E.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${l}`),E.comment&&(c.comment?c.comment+=`
`+E.comment:c.comment=E.comment),u=E.end;continue}!o&&n.options.strict&&$i(v)&&r(v,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(p===0)E.comma&&r(E.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${l}`);else if(E.comma||r(E.start,"MISSING_CHAR",`Missing , between ${l} items`),E.comment){let S="";e:for(const O of g)switch(O.type){case"comma":case"space":break;case"comment":S=O.source.substring(1);break e;default:break e}if(S){let O=c.items[c.items.length-1];ee(O)&&(O=O.value??O.key),O.comment?O.comment+=`
`+S:O.comment=S,E.comment=E.comment.substring(S.length+1)}}if(!o&&!k&&!E.found){const S=C?e(n,C,E,r):t(n,E.end,k,null,E,r);c.items.push(S),u=S.range[2],go(C)&&r(S.range,"BLOCK_IN_FLOW",ho)}else{n.atKey=!0;const S=E.end,O=v?e(n,v,E,r):t(n,S,g,null,E,r);go(v)&&r(O.range,"BLOCK_IN_FLOW",ho),n.atKey=!1;const I=$n(k??[],{flow:l,indicator:"map-value-ind",next:C,offset:O.range[2],onError:r,parentIndent:i.indent,startOnNewline:!1});if(I.found){if(!o&&!E.found&&n.options.strict){if(k)for(const le of k){if(le===I.found)break;if(le.type==="newline"){r(le,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}E.start<I.found.offset-1024&&r(I.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else C&&("source"in C&&((_=C.source)==null?void 0:_[0])===":"?r(C,"MISSING_CHAR",`Missing space after : in ${l}`):r(I.start,"MISSING_CHAR",`Missing , or : between ${l} items`));const D=C?e(n,C,I,r):I.found?t(n,I.end,k,null,I,r):null;D?go(C)&&r(D.range,"BLOCK_IN_FLOW",ho):I.comment&&(O.comment?O.comment+=`
`+I.comment:O.comment=I.comment);const G=new ve(O,D);if(n.options.keepSourceTokens&&(G.srcToken=d),o){const le=c;Wd(n,le.items,O)&&r(S,"DUPLICATE_KEY","Map keys must be unique"),le.items.push(G)}else{const le=new Re(n.schema);le.flow=!0,le.items.push(G);const qn=(D??O).range;le.range=[O.range[0],qn[1],qn[2]],c.items.push(le)}u=D?D.range[2]:I.end}}const f=o?"}":"]",[h,...w]=i.end;let y=u;if((h==null?void 0:h.source)===f)y=h.offset+h.source.length;else{const p=l[0].toUpperCase()+l.substring(1),d=m?`${p} must end with a ${f}`:`${p} in block collection must be sufficiently indented and end with a ${f}`;r(u,m?"MISSING_CHAR":"BAD_INDENT",d),h&&h.source.length!==1&&w.unshift(h)}if(w.length>0){const p=qi(w,y,n.options.strict,r);p.comment&&(c.comment?c.comment+=`
`+p.comment:c.comment=p.comment),c.range=[i.offset,y,p.offset]}else c.range=[i.offset,y,y];return c}function yo(e,t,n,i,r,s){const o=n.type==="block-map"?Cy(e,t,n,i,s):n.type==="block-seq"?Ny(e,t,n,i,s):Ay(e,t,n,i,s),l=o.constructor;return r==="!"||r===l.tagName?(o.tag=l.tagName,o):(r&&(o.tag=r),o)}function Ty(e,t,n,i,r){var f;const s=i.tag,o=s?t.directives.tagName(s.source,h=>r(s,"TAG_RESOLVE_FAILED",h)):null;if(n.type==="block-seq"){const{anchor:h,newlineAfterProp:w}=i,y=h&&s?h.offset>s.offset?h:s:h??s;y&&(!w||w.offset<y.offset)&&r(y,"MISSING_CHAR","Missing newline after block sequence props")}const l=n.type==="block-map"?"map":n.type==="block-seq"?"seq":n.start.source==="{"?"map":"seq";if(!s||!o||o==="!"||o===Re.tagName&&l==="map"||o===en.tagName&&l==="seq")return yo(e,t,n,r,o);let a=t.schema.tags.find(h=>h.tag===o&&h.collection===l);if(!a){const h=t.schema.knownTags[o];if((h==null?void 0:h.collection)===l)t.schema.tags.push(Object.assign({},h,{default:!1})),a=h;else return h?r(s,"BAD_COLLECTION_TYPE",`${h.tag} used for ${l} collection, but expects ${h.collection??"scalar"}`,!0):r(s,"TAG_RESOLVE_FAILED",`Unresolved tag: ${o}`,!0),yo(e,t,n,r,o)}const c=yo(e,t,n,r,o,a),m=((f=a.resolve)==null?void 0:f.call(a,c,h=>r(s,"TAG_RESOLVE_FAILED",h),t.options))??c,u=Z(m)?m:new L(m);return u.range=c.range,u.tag=o,a!=null&&a.format&&(u.format=a.format),u}function Iy(e,t,n){const i=t.offset,r=Oy(t,e.options.strict,n);if(!r)return{value:"",type:null,comment:"",range:[i,i,i]};const s=r.mode===">"?L.BLOCK_FOLDED:L.BLOCK_LITERAL,o=t.source?Dy(t.source):[];let l=o.length;for(let y=o.length-1;y>=0;--y){const _=o[y][1];if(_===""||_==="\r")l=y;else break}if(l===0){const y=r.chomp==="+"&&o.length>0?`
`.repeat(Math.max(1,o.length-1)):"";let _=i+r.length;return t.source&&(_+=t.source.length),{value:y,type:s,comment:r.comment,range:[i,_,_]}}let a=t.indent+r.indent,c=t.offset+r.length,m=0;for(let y=0;y<l;++y){const[_,p]=o[y];if(p===""||p==="\r")r.indent===0&&_.length>a&&(a=_.length);else{_.length<a&&n(c+_.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),r.indent===0&&(a=_.length),m=y,a===0&&!e.atRoot&&n(c,"BAD_INDENT","Block scalar values in collections must be indented");break}c+=_.length+p.length+1}for(let y=o.length-1;y>=l;--y)o[y][0].length>a&&(l=y+1);let u="",f="",h=!1;for(let y=0;y<m;++y)u+=o[y][0].slice(a)+`
`;for(let y=m;y<l;++y){let[_,p]=o[y];c+=_.length+p.length+1;const d=p[p.length-1]==="\r";if(d&&(p=p.slice(0,-1)),p&&_.length<a){const v=`Block scalar lines must not be less indented than their ${r.indent?"explicit indentation indicator":"first line"}`;n(c-p.length-(d?2:1),"BAD_INDENT",v),_=""}s===L.BLOCK_LITERAL?(u+=f+_.slice(a)+p,f=`
`):_.length>a||p[0]==="	"?(f===" "?f=`
`:!h&&f===`
`&&(f=`

`),u+=f+_.slice(a)+p,f=`
`,h=!0):p===""?f===`
`?u+=`
`:f=`
`:(u+=f+p,f=" ",h=!1)}switch(r.chomp){case"-":break;case"+":for(let y=l;y<o.length;++y)u+=`
`+o[y][0].slice(a);u[u.length-1]!==`
`&&(u+=`
`);break;default:u+=`
`}const w=i+r.length+t.source.length;return{value:u,type:s,comment:r.comment,range:[i,w,w]}}function Oy({offset:e,props:t},n,i){if(t[0].type!=="block-scalar-header")return i(t[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:r}=t[0],s=r[0];let o=0,l="",a=-1;for(let f=1;f<r.length;++f){const h=r[f];if(!l&&(h==="-"||h==="+"))l=h;else{const w=Number(h);!o&&w?o=w:a===-1&&(a=e+f)}}a!==-1&&i(a,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${r}`);let c=!1,m="",u=r.length;for(let f=1;f<t.length;++f){const h=t[f];switch(h.type){case"space":c=!0;case"newline":u+=h.source.length;break;case"comment":n&&!c&&i(h,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),u+=h.source.length,m=h.source.substring(1);break;case"error":i(h,"UNEXPECTED_TOKEN",h.message),u+=h.source.length;break;default:{const w=`Unexpected token in block scalar header: ${h.type}`;i(h,"UNEXPECTED_TOKEN",w);const y=h.source;y&&typeof y=="string"&&(u+=y.length)}}}return{mode:s,indent:o,chomp:l,comment:m,length:u}}function Dy(e){const t=e.split(/\n( *)/),n=t[0],i=n.match(/^( *)/),s=[i!=null&&i[1]?[i[1],n.slice(i[1].length)]:["",n]];for(let o=1;o<t.length;o+=2)s.push([t[o],t[o+1]]);return s}function Ly(e,t,n){const{offset:i,type:r,source:s,end:o}=e;let l,a;const c=(f,h,w)=>n(i+f,h,w);switch(r){case"scalar":l=L.PLAIN,a=xy(s,c);break;case"single-quoted-scalar":l=L.QUOTE_SINGLE,a=Ry(s,c);break;case"double-quoted-scalar":l=L.QUOTE_DOUBLE,a=Py(s,c);break;default:return n(e,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${r}`),{value:"",type:null,comment:"",range:[i,i+s.length,i+s.length]}}const m=i+s.length,u=qi(o,m,t,n);return{value:a,type:l,comment:u.comment,range:[i,m,u.offset]}}function xy(e,t){let n="";switch(e[0]){case"	":n="a tab character";break;case",":n="flow indicator character ,";break;case"%":n="directive indicator character %";break;case"|":case">":{n=`block scalar indicator ${e[0]}`;break}case"@":case"`":{n=`reserved character ${e[0]}`;break}}return n&&t(0,"BAD_SCALAR_START",`Plain value cannot start with ${n}`),qd(e)}function Ry(e,t){return(e[e.length-1]!=="'"||e.length===1)&&t(e.length,"MISSING_CHAR","Missing closing 'quote"),qd(e.slice(1,-1)).replace(/''/g,"'")}function qd(e){const t=/(.*?)\r?\n/sy;let n=t.exec(e);if(!n)return e;let i,r;try{i=new RegExp("(?<![ 	])[ 	]+$"),r=new RegExp("^[ 	]+|(?<![ 	])[ 	]+$","g")}catch{i=/[ \t]+$/,r=/^[ \t]+|[ \t]+$/g}let s=n[1].replace(i,""),o=" ",l=t.lastIndex;for(;n=t.exec(e);){const c=n[1].replace(r,"");c===""?o===`
`?s+=o:o=`
`:(s+=o+c,o=" "),l=t.lastIndex}const a=/[ \t]*(.*)/sy;return a.lastIndex=l,n=a.exec(e),s+o+((n==null?void 0:n[1])??"")}function Py(e,t){let n="";for(let i=1;i<e.length-1;++i){const r=e[i];if(!(r==="\r"&&e[i+1]===`
`))if(r===`
`){const{fold:s,offset:o}=jy(e,i);n+=s,i=o}else if(r==="\\"){let s=e[++i];const o=My[s];if(o)n+=o;else if(s===`
`)for(s=e[i+1];s===" "||s==="	";)s=e[++i+1];else if(s==="\r"&&e[i+1]===`
`)for(s=e[++i+1];s===" "||s==="	";)s=e[++i+1];else if(s==="x"||s==="u"||s==="U"){const l=s==="x"?2:s==="u"?4:8;n+=$y(e,i+1,l,t),i+=l}else{const l=e.substr(i-1,2);t(i-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${l}`),n+=l}}else if(r===" "||r==="	"){const s=i;let o=e[i+1];for(;o===" "||o==="	";)o=e[++i+1];o!==`
`&&!(o==="\r"&&e[i+2]===`
`)&&(n+=i>s?e.slice(s,i+1):r)}else n+=r}return(e[e.length-1]!=='"'||e.length===1)&&t(e.length,"MISSING_CHAR",'Missing closing "quote'),n}function jy(e,t){let n="",i=e[t+1];for(;(i===" "||i==="	"||i===`
`||i==="\r")&&!(i==="\r"&&e[t+2]!==`
`);)i===`
`&&(n+=`
`),t+=1,i=e[t+1];return n||(n=" "),{fold:n,offset:t}}const My={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function $y(e,t,n,i){const r=e.substr(t,n),o=r.length===n&&/^[0-9a-fA-F]+$/.test(r)?parseInt(r,16):NaN;try{return String.fromCodePoint(o)}catch{const l=e.substr(t-2,n+2);return i(t-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${l}`),l}}function Qd(e,t,n,i){const{value:r,type:s,comment:o,range:l}=t.type==="block-scalar"?Iy(e,t,i):Ly(t,e.options.strict,i),a=n?e.directives.tagName(n.source,u=>i(n,"TAG_RESOLVE_FAILED",u)):null;let c;e.options.stringKeys&&e.atKey?c=e.schema[tt]:a?c=Fy(e.schema,r,a,n,i):t.type==="scalar"?c=zy(e,r,t,i):c=e.schema[tt];let m;try{const u=c.resolve(r,f=>i(n??t,"TAG_RESOLVE_FAILED",f),e.options);m=B(u)?u:new L(u)}catch(u){const f=u instanceof Error?u.message:String(u);i(n??t,"TAG_RESOLVE_FAILED",f),m=new L(r)}return m.range=l,m.source=r,s&&(m.type=s),a&&(m.tag=a),c.format&&(m.format=c.format),o&&(m.comment=o),m}function Fy(e,t,n,i,r){var l;if(n==="!")return e[tt];const s=[];for(const a of e.tags)if(!a.collection&&a.tag===n)if(a.default&&a.test)s.push(a);else return a;for(const a of s)if((l=a.test)!=null&&l.test(t))return a;const o=e.knownTags[n];return o&&!o.collection?(e.tags.push(Object.assign({},o,{default:!1,test:void 0})),o):(r(i,"TAG_RESOLVE_FAILED",`Unresolved tag: ${n}`,n!=="tag:yaml.org,2002:str"),e[tt])}function zy({atKey:e,directives:t,schema:n},i,r,s){const o=n.tags.find(l=>{var a;return(l.default===!0||e&&l.default==="key")&&((a=l.test)==null?void 0:a.test(i))})||n[tt];if(n.compat){const l=n.compat.find(a=>{var c;return a.default&&((c=a.test)==null?void 0:c.test(i))})??n[tt];if(o.tag!==l.tag){const a=t.tagString(o.tag),c=t.tagString(l.tag),m=`Value may be parsed as either ${a} or ${c}`;s(r,"TAG_RESOLVE_FAILED",m,!0)}}return o}function By(e,t,n){if(t){n??(n=t.length);for(let i=n-1;i>=0;--i){let r=t[i];switch(r.type){case"space":case"comment":case"newline":e-=r.source.length;continue}for(r=t[++i];(r==null?void 0:r.type)==="space";)e+=r.source.length,r=t[++i];break}}return e}const Uy={composeNode:Gd,composeEmptyNode:Ia};function Gd(e,t,n,i){const r=e.atKey,{spaceBefore:s,comment:o,anchor:l,tag:a}=n;let c,m=!0;switch(t.type){case"alias":c=Vy(e,t,i),(l||a)&&i(t,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":c=Qd(e,t,a,i),l&&(c.anchor=l.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":try{c=Ty(Uy,e,t,n,i),l&&(c.anchor=l.source.substring(1))}catch(u){const f=u instanceof Error?u.message:String(u);i(t,"RESOURCE_EXHAUSTION",f)}break;default:{const u=t.type==="error"?t.message:`Unsupported token (type: ${t.type})`;i(t,"UNEXPECTED_TOKEN",u),m=!1}}return c??(c=Ia(e,t.offset,void 0,null,n,i)),l&&c.anchor===""&&i(l,"BAD_ALIAS","Anchor cannot be an empty string"),r&&e.options.stringKeys&&(!B(c)||typeof c.value!="string"||c.tag&&c.tag!=="tag:yaml.org,2002:str")&&i(a??t,"NON_STRING_KEY","With stringKeys, all keys must be strings"),s&&(c.spaceBefore=!0),o&&(t.type==="scalar"&&t.source===""?c.comment=o:c.commentBefore=o),e.options.keepSourceTokens&&m&&(c.srcToken=t),c}function Ia(e,t,n,i,{spaceBefore:r,comment:s,anchor:o,tag:l,end:a},c){const m={type:"scalar",offset:By(t,n,i),indent:-1,source:""},u=Qd(e,m,l,c);return o&&(u.anchor=o.source.substring(1),u.anchor===""&&c(o,"BAD_ALIAS","Anchor cannot be an empty string")),r&&(u.spaceBefore=!0),s&&(u.comment=s,u.range[2]=a),u}function Vy({options:e},{offset:t,source:n,end:i},r){const s=new ya(n.substring(1));s.source===""&&r(t,"BAD_ALIAS","Alias cannot be an empty string"),s.source.endsWith(":")&&r(t+n.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const o=t+n.length,l=qi(i,o,e.strict,r);return s.range=[t,o,l.offset],l.comment&&(s.comment=l.comment),s}function Ky(e,t,{offset:n,start:i,value:r,end:s},o){const l=Object.assign({_directives:t},e),a=new xs(void 0,l),c={atKey:!1,atRoot:!0,directives:a.directives,options:a.options,schema:a.schema},m=$n(i,{indicator:"doc-start",next:r??(s==null?void 0:s[0]),offset:n,onError:o,parentIndent:0,startOnNewline:!0});m.found&&(a.directives.docStart=!0,r&&(r.type==="block-map"||r.type==="block-seq")&&!m.hasNewline&&o(m.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),a.contents=r?Gd(c,r,m,o):Ia(c,m.end,i,null,m,o);const u=a.contents.range[2],f=qi(s,u,!1,o);return f.comment&&(a.comment=f.comment),a.range=[n,u,f.offset],a}function ni(e){if(typeof e=="number")return[e,e+1];if(Array.isArray(e))return e.length===2?e:[e[0],e[1]];const{offset:t,source:n}=e;return[t,t+(typeof n=="string"?n.length:1)]}function Qc(e){var r;let t="",n=!1,i=!1;for(let s=0;s<e.length;++s){const o=e[s];switch(o[0]){case"#":t+=(t===""?"":i?`

`:`
`)+(o.substring(1)||" "),n=!0,i=!1;break;case"%":((r=e[s+1])==null?void 0:r[0])!=="#"&&(s+=1),n=!1;break;default:n||(i=!0),n=!1}}return{comment:t,afterEmptyLine:i}}class Hy{constructor(t={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(n,i,r,s)=>{const o=ni(n);s?this.warnings.push(new by(o,i,r)):this.errors.push(new ai(o,i,r))},this.directives=new ge({version:t.version||"1.2"}),this.options=t}decorate(t,n){const{comment:i,afterEmptyLine:r}=Qc(this.prelude);if(i){const s=t.contents;if(n)t.comment=t.comment?`${t.comment}
${i}`:i;else if(r||t.directives.docStart||!s)t.commentBefore=i;else if(X(s)&&!s.flow&&s.items.length>0){let o=s.items[0];ee(o)&&(o=o.key);const l=o.commentBefore;o.commentBefore=l?`${i}
${l}`:i}else{const o=s.commentBefore;s.commentBefore=o?`${i}
${o}`:i}}if(n){for(let s=0;s<this.errors.length;++s)t.errors.push(this.errors[s]);for(let s=0;s<this.warnings.length;++s)t.warnings.push(this.warnings[s])}else t.errors=this.errors,t.warnings=this.warnings;this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:Qc(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(t,n=!1,i=-1){for(const r of t)yield*this.next(r);yield*this.end(n,i)}*next(t){switch(t.type){case"directive":this.directives.add(t.source,(n,i,r)=>{const s=ni(t);s[0]+=n,this.onError(s,"BAD_DIRECTIVE",i,r)}),this.prelude.push(t.source),this.atDirectives=!0;break;case"document":{const n=Ky(this.options,this.directives,t,this.onError);this.atDirectives&&!n.directives.docStart&&this.onError(t,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(n,!1),this.doc&&(yield this.doc),this.doc=n,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(t.source);break;case"error":{const n=t.source?`${t.message}: ${JSON.stringify(t.source)}`:t.message,i=new ai(ni(t),"UNEXPECTED_TOKEN",n);this.atDirectives||!this.doc?this.errors.push(i):this.doc.errors.push(i);break}case"doc-end":{if(!this.doc){const i="Unexpected doc-end without preceding document";this.errors.push(new ai(ni(t),"UNEXPECTED_TOKEN",i));break}this.doc.directives.docEnd=!0;const n=qi(t.end,t.offset+t.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),n.comment){const i=this.doc.comment;this.doc.comment=i?`${i}
${n.comment}`:n.comment}this.doc.range[2]=n.offset;break}default:this.errors.push(new ai(ni(t),"UNEXPECTED_TOKEN",`Unsupported token ${t.type}`))}}*end(t=!1,n=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(t){const i=Object.assign({_directives:this.directives},this.options),r=new xs(void 0,i);this.atDirectives&&this.onError(n,"MISSING_CHAR","Missing directives-end indicator line"),r.range=[0,n,n],this.decorate(r,!1),yield r}}}const Yd="\uFEFF",Jd="",Xd="",_l="";function Wy(e){switch(e){case Yd:return"byte-order-mark";case Jd:return"doc-mode";case Xd:return"flow-error-end";case _l:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(e[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}function Ue(e){switch(e){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const Gc=new Set("0123456789ABCDEFabcdef"),qy=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),gr=new Set(",[]{}"),Qy=new Set(` ,[]{}
\r	`),vo=e=>!e||Qy.has(e);class Gy{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(t,n=!1){if(t){if(typeof t!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+t:t,this.lineEndPos=null}this.atEnd=!n;let i=this.next??"stream";for(;i&&(n||this.hasChars(1));)i=yield*this.parseNext(i)}atLineEnd(){let t=this.pos,n=this.buffer[t];for(;n===" "||n==="	";)n=this.buffer[++t];return!n||n==="#"||n===`
`?!0:n==="\r"?this.buffer[t+1]===`
`:!1}charAt(t){return this.buffer[this.pos+t]}continueScalar(t){let n=this.buffer[t];if(this.indentNext>0){let i=0;for(;n===" ";)n=this.buffer[++i+t];if(n==="\r"){const r=this.buffer[i+t+1];if(r===`
`||!r&&!this.atEnd)return t+i+1}return n===`
`||i>=this.indentNext||!n&&!this.atEnd?t+i:-1}if(n==="-"||n==="."){const i=this.buffer.substr(t,3);if((i==="---"||i==="...")&&Ue(this.buffer[t+3]))return-1}return t}getLine(){let t=this.lineEndPos;return(typeof t!="number"||t!==-1&&t<this.pos)&&(t=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=t),t===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[t-1]==="\r"&&(t-=1),this.buffer.substring(this.pos,t))}hasChars(t){return this.pos+t<=this.buffer.length}setNext(t){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=t,null}peek(t){return this.buffer.substr(this.pos,t)}*parseNext(t){switch(t){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let t=this.getLine();if(t===null)return this.setNext("stream");if(t[0]===Yd&&(yield*this.pushCount(1),t=t.substring(1)),t[0]==="%"){let n=t.length,i=t.indexOf("#");for(;i!==-1;){const s=t[i-1];if(s===" "||s==="	"){n=i-1;break}else i=t.indexOf("#",i+1)}for(;;){const s=t[n-1];if(s===" "||s==="	")n-=1;else break}const r=(yield*this.pushCount(n))+(yield*this.pushSpaces(!0));return yield*this.pushCount(t.length-r),this.pushNewline(),"stream"}if(this.atLineEnd()){const n=yield*this.pushSpaces(!0);return yield*this.pushCount(t.length-n),yield*this.pushNewline(),"stream"}return yield Jd,yield*this.parseLineStart()}*parseLineStart(){const t=this.charAt(0);if(!t&&!this.atEnd)return this.setNext("line-start");if(t==="-"||t==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const n=this.peek(3);if((n==="---"||n==="...")&&Ue(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,n==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!Ue(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[t,n]=this.peek(2);if(!n&&!this.atEnd)return this.setNext("block-start");if((t==="-"||t==="?"||t===":")&&Ue(n)){const i=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=i,"block-start"}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const t=this.getLine();if(t===null)return this.setNext("doc");let n=yield*this.pushIndicators();switch(t[n]){case"#":yield*this.pushCount(t.length-n);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(vo),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return n+=yield*this.parseBlockScalarHeader(),n+=yield*this.pushSpaces(!0),yield*this.pushCount(t.length-n),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let t,n,i=-1;do t=yield*this.pushNewline(),t>0?(n=yield*this.pushSpaces(!1),this.indentValue=i=n):n=0,n+=yield*this.pushSpaces(!0);while(t+n>0);const r=this.getLine();if(r===null)return this.setNext("flow");if((i!==-1&&i<this.indentNext&&r[0]!=="#"||i===0&&(r.startsWith("---")||r.startsWith("..."))&&Ue(r[3]))&&!(i===this.indentNext-1&&this.flowLevel===1&&(r[0]==="]"||r[0]==="}")))return this.flowLevel=0,yield Xd,yield*this.parseLineStart();let s=0;for(;r[s]===",";)s+=yield*this.pushCount(1),s+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(s+=yield*this.pushIndicators(),r[s]){case void 0:return"flow";case"#":return yield*this.pushCount(r.length-s),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(vo),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const o=this.charAt(1);if(this.flowKey||Ue(o)||o===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const t=this.charAt(0);let n=this.buffer.indexOf(t,this.pos+1);if(t==="'")for(;n!==-1&&this.buffer[n+1]==="'";)n=this.buffer.indexOf("'",n+2);else for(;n!==-1;){let s=0;for(;this.buffer[n-1-s]==="\\";)s+=1;if(s%2===0)break;n=this.buffer.indexOf('"',n+1)}const i=this.buffer.substring(0,n);let r=i.indexOf(`
`,this.pos);if(r!==-1){for(;r!==-1;){const s=this.continueScalar(r+1);if(s===-1)break;r=i.indexOf(`
`,s)}r!==-1&&(n=r-(i[r-1]==="\r"?2:1))}if(n===-1){if(!this.atEnd)return this.setNext("quoted-scalar");n=this.buffer.length}return yield*this.pushToIndex(n+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let t=this.pos;for(;;){const n=this.buffer[++t];if(n==="+")this.blockScalarKeep=!0;else if(n>"0"&&n<="9")this.blockScalarIndent=Number(n)-1;else if(n!=="-")break}return yield*this.pushUntil(n=>Ue(n)||n==="#")}*parseBlockScalar(){let t=this.pos-1,n=0,i;e:for(let s=this.pos;i=this.buffer[s];++s)switch(i){case" ":n+=1;break;case`
`:t=s,n=0;break;case"\r":{const o=this.buffer[s+1];if(!o&&!this.atEnd)return this.setNext("block-scalar");if(o===`
`)break}default:break e}if(!i&&!this.atEnd)return this.setNext("block-scalar");if(n>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=n:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{const s=this.continueScalar(t+1);if(s===-1)break;t=this.buffer.indexOf(`
`,s)}while(t!==-1);if(t===-1){if(!this.atEnd)return this.setNext("block-scalar");t=this.buffer.length}}let r=t+1;for(i=this.buffer[r];i===" ";)i=this.buffer[++r];if(i==="	"){for(;i==="	"||i===" "||i==="\r"||i===`
`;)i=this.buffer[++r];t=r-1}else if(!this.blockScalarKeep)do{let s=t-1,o=this.buffer[s];o==="\r"&&(o=this.buffer[--s]);const l=s;for(;o===" ";)o=this.buffer[--s];if(o===`
`&&s>=this.pos&&s+1+n>l)t=s;else break}while(!0);return yield _l,yield*this.pushToIndex(t+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const t=this.flowLevel>0;let n=this.pos-1,i=this.pos-1,r;for(;r=this.buffer[++i];)if(r===":"){const s=this.buffer[i+1];if(Ue(s)||t&&gr.has(s))break;n=i}else if(Ue(r)){let s=this.buffer[i+1];if(r==="\r"&&(s===`
`?(i+=1,r=`
`,s=this.buffer[i+1]):n=i),s==="#"||t&&gr.has(s))break;if(r===`
`){const o=this.continueScalar(i+1);if(o===-1)break;i=Math.max(i,o-2)}}else{if(t&&gr.has(r))break;n=i}return!r&&!this.atEnd?this.setNext("plain-scalar"):(yield _l,yield*this.pushToIndex(n+1,!0),t?"flow":"doc")}*pushCount(t){return t>0?(yield this.buffer.substr(this.pos,t),this.pos+=t,t):0}*pushToIndex(t,n){const i=this.buffer.slice(this.pos,t);return i?(yield i,this.pos+=i.length,i.length):(n&&(yield""),0)}*pushIndicators(){let t=0;e:for(;;){switch(this.charAt(0)){case"!":t+=yield*this.pushTag(),t+=yield*this.pushSpaces(!0);continue e;case"&":t+=yield*this.pushUntil(vo),t+=yield*this.pushSpaces(!0);continue e;case"-":case"?":case":":{const n=this.flowLevel>0,i=this.charAt(1);if(Ue(i)||n&&gr.has(i)){n?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,t+=yield*this.pushCount(1),t+=yield*this.pushSpaces(!0);continue e}}}break e}return t}*pushTag(){if(this.charAt(1)==="<"){let t=this.pos+2,n=this.buffer[t];for(;!Ue(n)&&n!==">";)n=this.buffer[++t];return yield*this.pushToIndex(n===">"?t+1:t,!1)}else{let t=this.pos+1,n=this.buffer[t];for(;n;)if(qy.has(n))n=this.buffer[++t];else if(n==="%"&&Gc.has(this.buffer[t+1])&&Gc.has(this.buffer[t+2]))n=this.buffer[t+=3];else break;return yield*this.pushToIndex(t,!1)}}*pushNewline(){const t=this.buffer[this.pos];return t===`
`?yield*this.pushCount(1):t==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(t){let n=this.pos-1,i;do i=this.buffer[++n];while(i===" "||t&&i==="	");const r=n-this.pos;return r>0&&(yield this.buffer.substr(this.pos,r),this.pos=n),r}*pushUntil(t){let n=this.pos,i=this.buffer[n];for(;!t(i);)i=this.buffer[++n];return yield*this.pushToIndex(n,!1)}}class Yy{constructor(){this.lineStarts=[],this.addNewLine=t=>this.lineStarts.push(t),this.linePos=t=>{let n=0,i=this.lineStarts.length;for(;n<i;){const s=n+i>>1;this.lineStarts[s]<t?n=s+1:i=s}if(this.lineStarts[n]===t)return{line:n+1,col:1};if(n===0)return{line:0,col:t};const r=this.lineStarts[n-1];return{line:n,col:t-r+1}}}}function yt(e,t){for(let n=0;n<e.length;++n)if(e[n].type===t)return!0;return!1}function Yc(e){for(let t=0;t<e.length;++t)switch(e[t].type){case"space":case"comment":case"newline":break;default:return t}return-1}function Zd(e){switch(e==null?void 0:e.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function yr(e){switch(e.type){case"document":return e.start;case"block-map":{const t=e.items[e.items.length-1];return t.sep??t.start}case"block-seq":return e.items[e.items.length-1].start;default:return[]}}function on(e){var n;if(e.length===0)return[];let t=e.length;e:for(;--t>=0;)switch(e[t].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;((n=e[++t])==null?void 0:n.type)==="space";);return e.splice(t,e.length)}function ls(e,t){if(t.length<1e5)Array.prototype.push.apply(e,t);else for(let n=0;n<t.length;++n)e.push(t[n])}function Jc(e){if(e.start.type==="flow-seq-start")for(const t of e.items)t.sep&&!t.value&&!yt(t.start,"explicit-key-ind")&&!yt(t.sep,"map-value-ind")&&(t.key&&(t.value=t.key),delete t.key,Zd(t.value)?t.value.end?ls(t.value.end,t.sep):t.value.end=t.sep:ls(t.start,t.sep),delete t.sep)}class Jy{constructor(t){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new Gy,this.onNewLine=t}*parse(t,n=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const i of this.lexer.lex(t,n))yield*this.next(i);n||(yield*this.end())}*next(t){if(this.source=t,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=t.length;return}const n=Wy(t);if(n)if(n==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=n,yield*this.step(),n){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+t.length);break;case"space":this.atNewLine&&t[0]===" "&&(this.indent+=t.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=t.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=t.length}else{const i=`Not a YAML token: ${t}`;yield*this.pop({type:"error",offset:this.offset,message:i,source:t}),this.offset+=t.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const t=this.peek(1);if(this.type==="doc-end"&&(t==null?void 0:t.type)!=="doc-end"){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!t)return yield*this.stream();switch(t.type){case"document":return yield*this.document(t);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(t);case"block-scalar":return yield*this.blockScalar(t);case"block-map":return yield*this.blockMap(t);case"block-seq":return yield*this.blockSequence(t);case"flow-collection":return yield*this.flowCollection(t);case"doc-end":return yield*this.documentEnd(t)}yield*this.pop()}peek(t){return this.stack[this.stack.length-t]}*pop(t){const n=t??this.stack.pop();if(!n)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield n;else{const i=this.peek(1);switch(n.type==="block-scalar"?n.indent="indent"in i?i.indent:0:n.type==="flow-collection"&&i.type==="document"&&(n.indent=0),n.type==="flow-collection"&&Jc(n),i.type){case"document":i.value=n;break;case"block-scalar":i.props.push(n);break;case"block-map":{const r=i.items[i.items.length-1];if(r.value){i.items.push({start:[],key:n,sep:[]}),this.onKeyLine=!0;return}else if(r.sep)r.value=n;else{Object.assign(r,{key:n,sep:[]}),this.onKeyLine=!r.explicitKey;return}break}case"block-seq":{const r=i.items[i.items.length-1];r.value?i.items.push({start:[],value:n}):r.value=n;break}case"flow-collection":{const r=i.items[i.items.length-1];!r||r.value?i.items.push({start:[],key:n,sep:[]}):r.sep?r.value=n:Object.assign(r,{key:n,sep:[]});return}default:yield*this.pop(),yield*this.pop(n)}if((i.type==="document"||i.type==="block-map"||i.type==="block-seq")&&(n.type==="block-map"||n.type==="block-seq")){const r=n.items[n.items.length-1];r&&!r.sep&&!r.value&&r.start.length>0&&Yc(r.start)===-1&&(n.indent===0||r.start.every(s=>s.type!=="comment"||s.indent<n.indent))&&(i.type==="document"?i.end=r.start:i.items.push({start:r.start}),n.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const t={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&t.start.push(this.sourceToken),this.stack.push(t);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(t){if(t.value)return yield*this.lineEnd(t);switch(this.type){case"doc-start":{Yc(t.start)!==-1?(yield*this.pop(),yield*this.step()):t.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":t.start.push(this.sourceToken);return}const n=this.startBlockValue(t);n?this.stack.push(n):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(t){if(this.type==="map-value-ind"){const n=yr(this.peek(2)),i=on(n);let r;t.end?(r=t.end,r.push(this.sourceToken),delete t.end):r=[this.sourceToken];const s={type:"block-map",offset:t.offset,indent:t.indent,items:[{start:i,key:t,sep:r}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=s}else yield*this.lineEnd(t)}*blockScalar(t){switch(this.type){case"space":case"comment":case"newline":t.props.push(this.sourceToken);return;case"scalar":if(t.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let n=this.source.indexOf(`
`)+1;for(;n!==0;)this.onNewLine(this.offset+n),n=this.source.indexOf(`
`,n)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(t){var i;const n=t.items[t.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,n.value){const r="end"in n.value?n.value.end:void 0,s=Array.isArray(r)?r[r.length-1]:void 0;(s==null?void 0:s.type)==="comment"?r==null||r.push(this.sourceToken):t.items.push({start:[this.sourceToken]})}else n.sep?n.sep.push(this.sourceToken):n.start.push(this.sourceToken);return;case"space":case"comment":if(n.value)t.items.push({start:[this.sourceToken]});else if(n.sep)n.sep.push(this.sourceToken);else{if(this.atIndentedComment(n.start,t.indent)){const r=t.items[t.items.length-2],s=(i=r==null?void 0:r.value)==null?void 0:i.end;if(Array.isArray(s)){ls(s,n.start),s.push(this.sourceToken),t.items.pop();return}}n.start.push(this.sourceToken)}return}if(this.indent>=t.indent){const r=!this.onKeyLine&&this.indent===t.indent,s=r&&(n.sep||n.explicitKey)&&this.type!=="seq-item-ind";let o=[];if(s&&n.sep&&!n.value){const l=[];for(let a=0;a<n.sep.length;++a){const c=n.sep[a];switch(c.type){case"newline":l.push(a);break;case"space":break;case"comment":c.indent>t.indent&&(l.length=0);break;default:l.length=0}}l.length>=2&&(o=n.sep.splice(l[1]))}switch(this.type){case"anchor":case"tag":s||n.value?(o.push(this.sourceToken),t.items.push({start:o}),this.onKeyLine=!0):n.sep?n.sep.push(this.sourceToken):n.start.push(this.sourceToken);return;case"explicit-key-ind":!n.sep&&!n.explicitKey?(n.start.push(this.sourceToken),n.explicitKey=!0):s||n.value?(o.push(this.sourceToken),t.items.push({start:o,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(n.explicitKey)if(n.sep)if(n.value)t.items.push({start:[],key:null,sep:[this.sourceToken]});else if(yt(n.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:o,key:null,sep:[this.sourceToken]}]});else if(Zd(n.key)&&!yt(n.sep,"newline")){const l=on(n.start),a=n.key,c=n.sep;c.push(this.sourceToken),delete n.key,delete n.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:l,key:a,sep:c}]})}else o.length>0?n.sep=n.sep.concat(o,this.sourceToken):n.sep.push(this.sourceToken);else if(yt(n.start,"newline"))Object.assign(n,{key:null,sep:[this.sourceToken]});else{const l=on(n.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:l,key:null,sep:[this.sourceToken]}]})}else n.sep?n.value||s?t.items.push({start:o,key:null,sep:[this.sourceToken]}):yt(n.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):n.sep.push(this.sourceToken):Object.assign(n,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const l=this.flowScalar(this.type);s||n.value?(t.items.push({start:o,key:l,sep:[]}),this.onKeyLine=!0):n.sep?this.stack.push(l):(Object.assign(n,{key:l,sep:[]}),this.onKeyLine=!0);return}default:{const l=this.startBlockValue(t);if(l){if(l.type==="block-seq"){if(!n.explicitKey&&n.sep&&!yt(n.sep,"newline")){yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source});return}}else r&&t.items.push({start:o});this.stack.push(l);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(t){var i;const n=t.items[t.items.length-1];switch(this.type){case"newline":if(n.value){const r="end"in n.value?n.value.end:void 0,s=Array.isArray(r)?r[r.length-1]:void 0;(s==null?void 0:s.type)==="comment"?r==null||r.push(this.sourceToken):t.items.push({start:[this.sourceToken]})}else n.start.push(this.sourceToken);return;case"space":case"comment":if(n.value)t.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(n.start,t.indent)){const r=t.items[t.items.length-2],s=(i=r==null?void 0:r.value)==null?void 0:i.end;if(Array.isArray(s)){ls(s,n.start),s.push(this.sourceToken),t.items.pop();return}}n.start.push(this.sourceToken)}return;case"anchor":case"tag":if(n.value||this.indent<=t.indent)break;n.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==t.indent)break;n.value||yt(n.start,"seq-item-ind")?t.items.push({start:[this.sourceToken]}):n.start.push(this.sourceToken);return}if(this.indent>t.indent){const r=this.startBlockValue(t);if(r){this.stack.push(r);return}}yield*this.pop(),yield*this.step()}*flowCollection(t){const n=t.items[t.items.length-1];if(this.type==="flow-error-end"){let i;do yield*this.pop(),i=this.peek(1);while((i==null?void 0:i.type)==="flow-collection")}else if(t.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!n||n.sep?t.items.push({start:[this.sourceToken]}):n.start.push(this.sourceToken);return;case"map-value-ind":!n||n.value?t.items.push({start:[],key:null,sep:[this.sourceToken]}):n.sep?n.sep.push(this.sourceToken):Object.assign(n,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!n||n.value?t.items.push({start:[this.sourceToken]}):n.sep?n.sep.push(this.sourceToken):n.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const r=this.flowScalar(this.type);!n||n.value?t.items.push({start:[],key:r,sep:[]}):n.sep?this.stack.push(r):Object.assign(n,{key:r,sep:[]});return}case"flow-map-end":case"flow-seq-end":t.end.push(this.sourceToken);return}const i=this.startBlockValue(t);i?this.stack.push(i):(yield*this.pop(),yield*this.step())}else{const i=this.peek(2);if(i.type==="block-map"&&(this.type==="map-value-ind"&&i.indent===t.indent||this.type==="newline"&&!i.items[i.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&i.type!=="flow-collection"){const r=yr(i),s=on(r);Jc(t);const o=t.end.splice(1,t.end.length);o.push(this.sourceToken);const l={type:"block-map",offset:t.offset,indent:t.indent,items:[{start:s,key:t,sep:o}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=l}else yield*this.lineEnd(t)}}flowScalar(t){if(this.onNewLine){let n=this.source.indexOf(`
`)+1;for(;n!==0;)this.onNewLine(this.offset+n),n=this.source.indexOf(`
`,n)+1}return{type:t,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(t){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const n=yr(t),i=on(n);return i.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:i,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const n=yr(t),i=on(n);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:i,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(t,n){return this.type!=="comment"||this.indent<=n?!1:t.every(i=>i.type==="newline"||i.type==="space")}*documentEnd(t){this.type!=="doc-mode"&&(t.end?t.end.push(this.sourceToken):t.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(t){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;case"space":case"comment":default:t.end?t.end.push(this.sourceToken):t.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function Xy(e){const t=e.prettyErrors!==!1;return{lineCounter:e.lineCounter||t&&new Yy||null,prettyErrors:t}}function Zy(e,t={}){const{lineCounter:n,prettyErrors:i}=Xy(t),r=new Jy(n==null?void 0:n.addNewLine),s=new Hy(t);let o=null;for(const l of s.compose(r.parse(e),!0,e.length))if(!o)o=l;else if(o.options.logLevel!=="silent"){o.errors.push(new ai(l.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return i&&n&&(o.errors.forEach(Wc(e,n)),o.warnings.forEach(Wc(e,n))),o}function Rs(e,t,n){let i;const r=Zy(e,n);if(!r)return null;if(r.warnings.forEach(s=>Cd(r.options.logLevel,s)),r.errors.length>0){if(r.options.logLevel!=="silent")throw r.errors[0];r.errors=[]}return r.toJS(Object.assign({reviver:i},n))}const ev=Object.assign({"../../../../platform/identity/config/dashboards/actor.yaml":zh,"../../../../platform/identity/config/dashboards/applicant.yaml":Bh,"../../../../platform/identity/config/dashboards/artist.yaml":Uh,"../../../../platform/identity/config/dashboards/athlete.yaml":Vh,"../../../../platform/identity/config/dashboards/chef-instructor.yaml":Kh,"../../../../platform/identity/config/dashboards/choreographer.yaml":Hh,"../../../../platform/identity/config/dashboards/clinical-supervisor.yaml":Wh,"../../../../platform/identity/config/dashboards/coach.yaml":qh,"../../../../platform/identity/config/dashboards/corporate-mentor.yaml":Qh,"../../../../platform/identity/config/dashboards/dancer.yaml":Gh,"../../../../platform/identity/config/dashboards/department-admin.yaml":Yh,"../../../../platform/identity/config/dashboards/design-mentor.yaml":Jh,"../../../../platform/identity/config/dashboards/designer.yaml":Xh,"../../../../platform/identity/config/dashboards/director.yaml":Zh,"../../../../platform/identity/config/dashboards/engineering-student.yaml":eg,"../../../../platform/identity/config/dashboards/ensemble-director.yaml":tg,"../../../../platform/identity/config/dashboards/equipment-manager.yaml":ng,"../../../../platform/identity/config/dashboards/examination-staff.yaml":ig,"../../../../platform/identity/config/dashboards/exhibition-manager.yaml":rg,"../../../../platform/identity/config/dashboards/facility-staff.yaml":sg,"../../../../platform/identity/config/dashboards/faculty.yaml":og,"../../../../platform/identity/config/dashboards/farm-supervisor.yaml":lg,"../../../../platform/identity/config/dashboards/field-trainee.yaml":ag,"../../../../platform/identity/config/dashboards/filmmaker.yaml":cg,"../../../../platform/identity/config/dashboards/finance-staff.yaml":ug,"../../../../platform/identity/config/dashboards/governance.yaml":fg,"../../../../platform/identity/config/dashboards/hospital-coordinator.yaml":dg,"../../../../platform/identity/config/dashboards/hospitality-trainee.yaml":pg,"../../../../platform/identity/config/dashboards/hr-staff.yaml":mg,"../../../../platform/identity/config/dashboards/industry-coordinator.yaml":hg,"../../../../platform/identity/config/dashboards/industry-liaison.yaml":gg,"../../../../platform/identity/config/dashboards/lab-in-charge.yaml":yg,"../../../../platform/identity/config/dashboards/law-student.yaml":vg,"../../../../platform/identity/config/dashboards/legal-mentor.yaml":wg,"../../../../platform/identity/config/dashboards/management-student.yaml":_g,"../../../../platform/identity/config/dashboards/management.yaml":kg,"../../../../platform/identity/config/dashboards/medical-staff.yaml":Sg,"../../../../platform/identity/config/dashboards/medical-student.yaml":Eg,"../../../../platform/identity/config/dashboards/mentor-teacher.yaml":bg,"../../../../platform/identity/config/dashboards/moot-court-coordinator.yaml":Cg,"../../../../platform/identity/config/dashboards/music-teacher.yaml":Ng,"../../../../platform/identity/config/dashboards/musician.yaml":Ag,"../../../../platform/identity/config/dashboards/nutritionist.yaml":Tg,"../../../../platform/identity/config/dashboards/org-admin.yaml":Ig,"../../../../platform/identity/config/dashboards/placement-officer.yaml":Og,"../../../../platform/identity/config/dashboards/practicum-coordinator.yaml":Dg,"../../../../platform/identity/config/dashboards/production-manager.yaml":Lg,"../../../../platform/identity/config/dashboards/production-supervisor.yaml":xg,"../../../../platform/identity/config/dashboards/project-guide.yaml":Rg,"../../../../platform/identity/config/dashboards/research-lead.yaml":Pg,"../../../../platform/identity/config/dashboards/research-office.yaml":jg,"../../../../platform/identity/config/dashboards/research-scholar.yaml":Mg,"../../../../platform/identity/config/dashboards/research-supervisor.yaml":$g,"../../../../platform/identity/config/dashboards/stage-manager.yaml":Fg,"../../../../platform/identity/config/dashboards/student.yaml":zg,"../../../../platform/identity/config/dashboards/studio-instructor.yaml":Bg,"../../../../platform/identity/config/dashboards/super-admin.yaml":Ug,"../../../../platform/identity/config/dashboards/support-staff.yaml":Vg,"../../../../platform/identity/config/dashboards/teacher-trainee.yaml":Kg});function tv(){var t;const e={};for(const[n,i]of Object.entries(ev)){const r=Rs(i),s=(t=n.split("/").pop())==null?void 0:t.replace(/\.yaml$/,"");if(r.role!==s)throw new Error(`Layout file ${n} declares role "${r.role}"; file name says "${s}"`);e[r.role]=r}return e}function nv(e,t){const n=t[e];if(!n)return[];const i=[];if(n.extends){const r=t[n.extends];if(!r)throw new Error(`Layout "${e}" extends unknown role "${n.extends}"`);if(r.extends)throw new Error(`Layout "${e}" extends "${n.extends}", which itself extends; only one level is allowed`);i.push(...r.widgets)}return i.push(...n.widgets),[...new Set(i)]}const iv=`# Institution profile: everything one organisation of this academy type enables (ADR-0004, ADR-0005).
# Chosen at registration as the academy type. The plan then decides how much of it is unlocked.
profile: agriculture-college
title: "Agriculture / Veterinary / Field Sciences"
description: "Field training, farm management, practical rotations, labs, research trials, extension."

suites:
  common: [student-lifecycle, academics, practice, facilities, finance-operations, campus-life, governance, support]
  specialized: []

# <domain>/<module> under modules/. Field-specific behaviour comes from the practice suite plus vocabulary.
modules:
  - student-lifecycle/web-portal-cms
  - student-lifecycle/admissions
  - student-lifecycle/student-information
  - student-lifecycle/enrolment-registration
  - academics/academic-management
  - academics/lms
  - academics/examinations
  - academics/timetable-attendance
  - practice/portfolio
  - practice/projects
  - practice/selection-process
  - practice/productions
  - practice/field-training
  - practice/skill-progress
  - facilities/facility-booking
  - facilities/inventory-equipment
  - facilities/asset-management
  - facilities/maintenance
  - finance-operations/fees-accounts
  - finance-operations/budget-grants
  - finance-operations/procurement
  - finance-operations/hr-payroll
  - finance-operations/e-office
  - campus-life/hostel
  - campus-life/transport
  - campus-life/library
  - campus-life/placement-career
  - campus-life/alumni
  - governance/grievance
  - governance/rti
  - governance/iqac-accreditation
  - governance/regulatory-reports
  - support/helpdesk
  - support/sla-management
  - support/knowledge-base
  - support/incident-management
  - support/amc-vendor-support

integrations:
  - payment-sbiepay
  - digilocker
  - nad
  - government-portals
  - messaging-providers
  - video-conferencing
  - external-university-portals

# Roles for this academy. id = dashboard layout file in ../dashboards/<id>.yaml.
roles:
  - { id: applicant,          title: "Applicant" }
  - { id: student,            title: "Student" }
  - { id: field-trainee,      title: "Field Trainee" }
  - { id: faculty,            title: "Faculty / Instructor" }
  - { id: farm-supervisor,    title: "Farm Supervisor" }
  - { id: research-lead,      title: "Research Lead" }
  - { id: examination-staff,  title: "Examination Staff" }
  - { id: department-admin,   title: "Department Admin / HoD" }
  - { id: finance-staff,      title: "Finance Staff" }
  - { id: hr-staff,           title: "HR Staff" }
  - { id: facility-staff,     title: "Facility / Inventory Staff" }
  - { id: governance,         title: "Governance (Grievance / RTI / IQAC)" }
  - { id: support-staff,      title: "Support Staff (Helpdesk)" }
  - { id: management,         title: "Management (VC, Registrar)" }
  - { id: org-admin,          title: "Organisation Admin" }

# Field vocabulary for generic modules. Key = <module>.<term>, value = the word this academy uses.
vocabulary:
  field-training.placement: "Farm / practical rotation"
  projects.project: "Research trial"
  facility-booking.resource: "Farm plot / lab"
  productions.production: "Extension activity"
`,rv=`# Institution profile: everything one organisation of this academy type enables (ADR-0004, ADR-0005).
# Chosen at registration as the academy type. The plan then decides how much of it is unlocked.
profile: arts-academy
title: "Arts Academy / Fine Arts College"
description: "Studios, portfolios, artwork projects, critiques and juries, exhibitions."

suites:
  common: [student-lifecycle, academics, practice, facilities, finance-operations, campus-life, governance, support]
  specialized: []

# <domain>/<module> under modules/. Field-specific behaviour comes from the practice suite plus vocabulary.
modules:
  - student-lifecycle/web-portal-cms
  - student-lifecycle/admissions
  - student-lifecycle/student-information
  - student-lifecycle/enrolment-registration
  - academics/academic-management
  - academics/lms
  - academics/examinations
  - academics/timetable-attendance
  - practice/portfolio
  - practice/projects
  - practice/selection-process
  - practice/productions
  - practice/field-training
  - practice/skill-progress
  - facilities/facility-booking
  - facilities/inventory-equipment
  - facilities/asset-management
  - facilities/maintenance
  - finance-operations/fees-accounts
  - finance-operations/budget-grants
  - finance-operations/procurement
  - finance-operations/hr-payroll
  - finance-operations/e-office
  - campus-life/hostel
  - campus-life/transport
  - campus-life/library
  - campus-life/placement-career
  - campus-life/alumni
  - governance/grievance
  - governance/rti
  - governance/iqac-accreditation
  - governance/regulatory-reports
  - support/helpdesk
  - support/sla-management
  - support/knowledge-base
  - support/incident-management
  - support/amc-vendor-support

integrations:
  - payment-sbiepay
  - digilocker
  - nad
  - government-portals
  - messaging-providers
  - video-conferencing
  - external-university-portals

# Roles for this academy. id = dashboard layout file in ../dashboards/<id>.yaml.
roles:
  - { id: applicant,           title: "Applicant" }
  - { id: student,             title: "Student" }
  - { id: artist,              title: "Artist" }
  - { id: faculty,             title: "Faculty / Instructor" }
  - { id: studio-instructor,   title: "Studio Instructor" }
  - { id: exhibition-manager,  title: "Exhibition & Gallery Manager" }
  - { id: examination-staff,   title: "Examination Staff" }
  - { id: department-admin,    title: "Department Admin / HoD" }
  - { id: finance-staff,       title: "Finance Staff" }
  - { id: hr-staff,            title: "HR Staff" }
  - { id: facility-staff,      title: "Facility / Inventory Staff" }
  - { id: governance,          title: "Governance (Grievance / RTI / IQAC)" }
  - { id: support-staff,       title: "Support Staff (Helpdesk)" }
  - { id: management,          title: "Management (VC, Registrar)" }
  - { id: org-admin,           title: "Organisation Admin" }

# Field vocabulary for generic modules. Key = <module>.<term>, value = the word this academy uses.
vocabulary:
  portfolio.item: "Artwork"
  projects.project: "Artwork project"
  selection-process.selection: "Critique / jury"
  productions.production: "Exhibition"
  facility-booking.resource: "Studio"
  inventory-equipment.item: "Material"
`,sv=`# Institution profile: everything one organisation of this academy type enables (ADR-0004, ADR-0005).
# Chosen at registration as the academy type. The plan then decides how much of it is unlocked.
profile: dance-academy
title: "Dance / Performing Arts Academy"
description: "Classes, choreography, studios, auditions, performances, costumes and skill progress."

suites:
  common: [student-lifecycle, academics, practice, facilities, finance-operations, campus-life, governance, support]
  specialized: []

# <domain>/<module> under modules/. Field-specific behaviour comes from the practice suite plus vocabulary.
modules:
  - student-lifecycle/web-portal-cms
  - student-lifecycle/admissions
  - student-lifecycle/student-information
  - student-lifecycle/enrolment-registration
  - academics/academic-management
  - academics/lms
  - academics/examinations
  - academics/timetable-attendance
  - practice/portfolio
  - practice/projects
  - practice/selection-process
  - practice/productions
  - practice/field-training
  - practice/skill-progress
  - facilities/facility-booking
  - facilities/inventory-equipment
  - facilities/asset-management
  - facilities/maintenance
  - finance-operations/fees-accounts
  - finance-operations/budget-grants
  - finance-operations/procurement
  - finance-operations/hr-payroll
  - finance-operations/e-office
  - campus-life/hostel
  - campus-life/transport
  - campus-life/library
  - campus-life/placement-career
  - campus-life/alumni
  - governance/grievance
  - governance/rti
  - governance/iqac-accreditation
  - governance/regulatory-reports
  - support/helpdesk
  - support/sla-management
  - support/knowledge-base
  - support/incident-management
  - support/amc-vendor-support

integrations:
  - payment-sbiepay
  - digilocker
  - nad
  - government-portals
  - messaging-providers
  - video-conferencing
  - external-university-portals

# Roles for this academy. id = dashboard layout file in ../dashboards/<id>.yaml.
roles:
  - { id: applicant,           title: "Applicant" }
  - { id: student,             title: "Student" }
  - { id: dancer,              title: "Dancer" }
  - { id: faculty,             title: "Faculty / Instructor" }
  - { id: choreographer,       title: "Choreographer" }
  - { id: production-manager,  title: "Production Manager" }
  - { id: examination-staff,   title: "Examination Staff" }
  - { id: department-admin,    title: "Department Admin / HoD" }
  - { id: finance-staff,       title: "Finance Staff" }
  - { id: hr-staff,            title: "HR Staff" }
  - { id: facility-staff,      title: "Facility / Inventory Staff" }
  - { id: governance,          title: "Governance (Grievance / RTI / IQAC)" }
  - { id: support-staff,       title: "Support Staff (Helpdesk)" }
  - { id: management,          title: "Management (VC, Registrar)" }
  - { id: org-admin,           title: "Organisation Admin" }

# Field vocabulary for generic modules. Key = <module>.<term>, value = the word this academy uses.
vocabulary:
  productions.production: "Performance"
  selection-process.selection: "Audition"
  facility-booking.resource: "Practice studio"
  inventory-equipment.item: "Costume / prop"
  skill-progress.assessment: "Technique assessment"
`,ov=`# Institution profile: everything one organisation of this academy type enables (ADR-0004, ADR-0005).
# Chosen at registration as the academy type. The plan then decides how much of it is unlocked.
profile: design-fashion-institute
title: "Design / Fashion Institute"
description: "Design studios, collections, critiques, shows, industry projects and internships."

suites:
  common: [student-lifecycle, academics, practice, facilities, finance-operations, campus-life, governance, support]
  specialized: []

# <domain>/<module> under modules/. Field-specific behaviour comes from the practice suite plus vocabulary.
modules:
  - student-lifecycle/web-portal-cms
  - student-lifecycle/admissions
  - student-lifecycle/student-information
  - student-lifecycle/enrolment-registration
  - academics/academic-management
  - academics/lms
  - academics/examinations
  - academics/timetable-attendance
  - practice/portfolio
  - practice/projects
  - practice/selection-process
  - practice/productions
  - practice/field-training
  - practice/skill-progress
  - facilities/facility-booking
  - facilities/inventory-equipment
  - facilities/asset-management
  - facilities/maintenance
  - finance-operations/fees-accounts
  - finance-operations/budget-grants
  - finance-operations/procurement
  - finance-operations/hr-payroll
  - finance-operations/e-office
  - campus-life/hostel
  - campus-life/transport
  - campus-life/library
  - campus-life/placement-career
  - campus-life/alumni
  - governance/grievance
  - governance/rti
  - governance/iqac-accreditation
  - governance/regulatory-reports
  - support/helpdesk
  - support/sla-management
  - support/knowledge-base
  - support/incident-management
  - support/amc-vendor-support

integrations:
  - payment-sbiepay
  - digilocker
  - nad
  - government-portals
  - messaging-providers
  - video-conferencing
  - external-university-portals

# Roles for this academy. id = dashboard layout file in ../dashboards/<id>.yaml.
roles:
  - { id: applicant,          title: "Applicant" }
  - { id: student,            title: "Student" }
  - { id: designer,           title: "Designer" }
  - { id: faculty,            title: "Faculty / Instructor" }
  - { id: design-mentor,      title: "Design Mentor" }
  - { id: industry-liaison,   title: "Industry Liaison" }
  - { id: examination-staff,  title: "Examination Staff" }
  - { id: department-admin,   title: "Department Admin / HoD" }
  - { id: finance-staff,      title: "Finance Staff" }
  - { id: hr-staff,           title: "HR Staff" }
  - { id: facility-staff,     title: "Facility / Inventory Staff" }
  - { id: governance,         title: "Governance (Grievance / RTI / IQAC)" }
  - { id: support-staff,      title: "Support Staff (Helpdesk)" }
  - { id: management,         title: "Management (VC, Registrar)" }
  - { id: org-admin,          title: "Organisation Admin" }

# Field vocabulary for generic modules. Key = <module>.<term>, value = the word this academy uses.
vocabulary:
  portfolio.item: "Collection"
  projects.project: "Collection / industry project"
  selection-process.selection: "Critique"
  productions.production: "Show"
  facility-booking.resource: "Studio"
  field-training.placement: "Internship"
`,lv=`# Institution profile: everything one organisation of this academy type enables (ADR-0004, ADR-0005).
# Chosen at registration as the academy type. The plan then decides how much of it is unlocked.
profile: engineering-college
title: "Engineering / Technology College"
description: "Labs, capstone projects, industrial training, innovation, hackathons, placements."

suites:
  common: [student-lifecycle, academics, practice, facilities, finance-operations, campus-life, governance, support]
  specialized: []

# <domain>/<module> under modules/. Field-specific behaviour comes from the practice suite plus vocabulary.
modules:
  - student-lifecycle/web-portal-cms
  - student-lifecycle/admissions
  - student-lifecycle/student-information
  - student-lifecycle/enrolment-registration
  - academics/academic-management
  - academics/lms
  - academics/examinations
  - academics/timetable-attendance
  - practice/portfolio
  - practice/projects
  - practice/selection-process
  - practice/productions
  - practice/field-training
  - practice/skill-progress
  - facilities/facility-booking
  - facilities/inventory-equipment
  - facilities/asset-management
  - facilities/maintenance
  - finance-operations/fees-accounts
  - finance-operations/budget-grants
  - finance-operations/procurement
  - finance-operations/hr-payroll
  - finance-operations/e-office
  - campus-life/hostel
  - campus-life/transport
  - campus-life/library
  - campus-life/placement-career
  - campus-life/alumni
  - governance/grievance
  - governance/rti
  - governance/iqac-accreditation
  - governance/regulatory-reports
  - support/helpdesk
  - support/sla-management
  - support/knowledge-base
  - support/incident-management
  - support/amc-vendor-support

integrations:
  - payment-sbiepay
  - digilocker
  - nad
  - government-portals
  - messaging-providers
  - video-conferencing
  - external-university-portals

# Roles for this academy. id = dashboard layout file in ../dashboards/<id>.yaml.
roles:
  - { id: applicant,            title: "Applicant" }
  - { id: student,              title: "Student" }
  - { id: engineering-student,  title: "Engineering Student" }
  - { id: faculty,              title: "Faculty / Instructor" }
  - { id: project-guide,        title: "Project Guide" }
  - { id: lab-in-charge,        title: "Lab In-charge" }
  - { id: examination-staff,    title: "Examination Staff" }
  - { id: department-admin,     title: "Department Admin / HoD" }
  - { id: finance-staff,        title: "Finance Staff" }
  - { id: hr-staff,             title: "HR Staff" }
  - { id: facility-staff,       title: "Facility / Inventory Staff" }
  - { id: governance,           title: "Governance (Grievance / RTI / IQAC)" }
  - { id: support-staff,        title: "Support Staff (Helpdesk)" }
  - { id: management,           title: "Management (VC, Registrar)" }
  - { id: org-admin,            title: "Organisation Admin" }

# Field vocabulary for generic modules. Key = <module>.<term>, value = the word this academy uses.
vocabulary:
  projects.project: "Capstone / project"
  facility-booking.resource: "Laboratory"
  productions.production: "Hackathon / tech event"
  field-training.placement: "Industrial training"
  inventory-equipment.item: "Lab equipment"
`,av=`# Institution profile: everything one organisation of this academy type enables (ADR-0004, ADR-0005).
# Chosen at registration as the academy type. The plan then decides how much of it is unlocked.
profile: film-media-institute
title: "Film / Media / Animation Institute"
description: "Film projects, production, equipment, media assets, editing, screenings and showreels."

suites:
  common: [student-lifecycle, academics, practice, facilities, finance-operations, campus-life, governance, support]
  specialized: []

# <domain>/<module> under modules/. Field-specific behaviour comes from the practice suite plus vocabulary.
modules:
  - student-lifecycle/web-portal-cms
  - student-lifecycle/admissions
  - student-lifecycle/student-information
  - student-lifecycle/enrolment-registration
  - academics/academic-management
  - academics/lms
  - academics/examinations
  - academics/timetable-attendance
  - practice/portfolio
  - practice/projects
  - practice/selection-process
  - practice/productions
  - practice/field-training
  - practice/skill-progress
  - facilities/facility-booking
  - facilities/inventory-equipment
  - facilities/asset-management
  - facilities/maintenance
  - finance-operations/fees-accounts
  - finance-operations/budget-grants
  - finance-operations/procurement
  - finance-operations/hr-payroll
  - finance-operations/e-office
  - campus-life/hostel
  - campus-life/transport
  - campus-life/library
  - campus-life/placement-career
  - campus-life/alumni
  - governance/grievance
  - governance/rti
  - governance/iqac-accreditation
  - governance/regulatory-reports
  - support/helpdesk
  - support/sla-management
  - support/knowledge-base
  - support/incident-management
  - support/amc-vendor-support

integrations:
  - payment-sbiepay
  - digilocker
  - nad
  - government-portals
  - messaging-providers
  - video-conferencing
  - external-university-portals

# Roles for this academy. id = dashboard layout file in ../dashboards/<id>.yaml.
roles:
  - { id: applicant,              title: "Applicant" }
  - { id: student,                title: "Student" }
  - { id: filmmaker,              title: "Filmmaker" }
  - { id: faculty,                title: "Faculty / Instructor" }
  - { id: production-supervisor,  title: "Production Supervisor" }
  - { id: equipment-manager,      title: "Equipment Manager" }
  - { id: examination-staff,      title: "Examination Staff" }
  - { id: department-admin,       title: "Department Admin / HoD" }
  - { id: finance-staff,          title: "Finance Staff" }
  - { id: hr-staff,               title: "HR Staff" }
  - { id: facility-staff,         title: "Facility / Inventory Staff" }
  - { id: governance,             title: "Governance (Grievance / RTI / IQAC)" }
  - { id: support-staff,          title: "Support Staff (Helpdesk)" }
  - { id: management,             title: "Management (VC, Registrar)" }
  - { id: org-admin,              title: "Organisation Admin" }

# Field vocabulary for generic modules. Key = <module>.<term>, value = the word this academy uses.
vocabulary:
  projects.project: "Film project"
  portfolio.item: "Showreel"
  productions.production: "Screening / festival"
  inventory-equipment.item: "Equipment"
  facility-booking.resource: "Edit suite / studio"
`,cv=`# Institution profile: everything one organisation of this academy type enables (ADR-0004, ADR-0005).
# Chosen at registration as the academy type. The plan then decides how much of it is unlocked.
profile: hospitality-institute
title: "Hospitality / Hotel Management"
description: "Training kitchens, hotel operations, internships, practical assessments, events."

suites:
  common: [student-lifecycle, academics, practice, facilities, finance-operations, campus-life, governance, support]
  specialized: []

# <domain>/<module> under modules/. Field-specific behaviour comes from the practice suite plus vocabulary.
modules:
  - student-lifecycle/web-portal-cms
  - student-lifecycle/admissions
  - student-lifecycle/student-information
  - student-lifecycle/enrolment-registration
  - academics/academic-management
  - academics/lms
  - academics/examinations
  - academics/timetable-attendance
  - practice/portfolio
  - practice/projects
  - practice/selection-process
  - practice/productions
  - practice/field-training
  - practice/skill-progress
  - facilities/facility-booking
  - facilities/inventory-equipment
  - facilities/asset-management
  - facilities/maintenance
  - finance-operations/fees-accounts
  - finance-operations/budget-grants
  - finance-operations/procurement
  - finance-operations/hr-payroll
  - finance-operations/e-office
  - campus-life/hostel
  - campus-life/transport
  - campus-life/library
  - campus-life/placement-career
  - campus-life/alumni
  - governance/grievance
  - governance/rti
  - governance/iqac-accreditation
  - governance/regulatory-reports
  - support/helpdesk
  - support/sla-management
  - support/knowledge-base
  - support/incident-management
  - support/amc-vendor-support

integrations:
  - payment-sbiepay
  - digilocker
  - nad
  - government-portals
  - messaging-providers
  - video-conferencing
  - external-university-portals

# Roles for this academy. id = dashboard layout file in ../dashboards/<id>.yaml.
roles:
  - { id: applicant,             title: "Applicant" }
  - { id: student,               title: "Student" }
  - { id: hospitality-trainee,   title: "Hospitality Trainee" }
  - { id: faculty,               title: "Faculty / Instructor" }
  - { id: chef-instructor,       title: "Chef / Operations Instructor" }
  - { id: industry-coordinator,  title: "Industry Coordinator" }
  - { id: examination-staff,     title: "Examination Staff" }
  - { id: department-admin,      title: "Department Admin / HoD" }
  - { id: finance-staff,         title: "Finance Staff" }
  - { id: hr-staff,              title: "HR Staff" }
  - { id: facility-staff,        title: "Facility / Inventory Staff" }
  - { id: governance,            title: "Governance (Grievance / RTI / IQAC)" }
  - { id: support-staff,         title: "Support Staff (Helpdesk)" }
  - { id: management,            title: "Management (VC, Registrar)" }
  - { id: org-admin,             title: "Organisation Admin" }

# Field vocabulary for generic modules. Key = <module>.<term>, value = the word this academy uses.
vocabulary:
  field-training.placement: "Industry internship"
  facility-booking.resource: "Training kitchen / lab"
  productions.production: "Banquet / event"
  skill-progress.assessment: "Practical assessment"
`,uv=`# Institution profile: everything one organisation of this academy type enables (ADR-0004, ADR-0005).
# Chosen at registration as the academy type. The plan then decides how much of it is unlocked.
profile: law-college
title: "Law College / Law University"
description: "Moot court, internships, case research, legal clinics, competitions, court visits."

suites:
  common: [student-lifecycle, academics, practice, facilities, finance-operations, campus-life, governance, support]
  specialized: []

# <domain>/<module> under modules/. Field-specific behaviour comes from the practice suite plus vocabulary.
modules:
  - student-lifecycle/web-portal-cms
  - student-lifecycle/admissions
  - student-lifecycle/student-information
  - student-lifecycle/enrolment-registration
  - academics/academic-management
  - academics/lms
  - academics/examinations
  - academics/timetable-attendance
  - practice/portfolio
  - practice/projects
  - practice/selection-process
  - practice/productions
  - practice/field-training
  - practice/skill-progress
  - facilities/facility-booking
  - facilities/inventory-equipment
  - facilities/asset-management
  - facilities/maintenance
  - finance-operations/fees-accounts
  - finance-operations/budget-grants
  - finance-operations/procurement
  - finance-operations/hr-payroll
  - finance-operations/e-office
  - campus-life/hostel
  - campus-life/transport
  - campus-life/library
  - campus-life/placement-career
  - campus-life/alumni
  - governance/grievance
  - governance/rti
  - governance/iqac-accreditation
  - governance/regulatory-reports
  - support/helpdesk
  - support/sla-management
  - support/knowledge-base
  - support/incident-management
  - support/amc-vendor-support

integrations:
  - payment-sbiepay
  - digilocker
  - nad
  - government-portals
  - messaging-providers
  - video-conferencing
  - external-university-portals

# Roles for this academy. id = dashboard layout file in ../dashboards/<id>.yaml.
roles:
  - { id: applicant,               title: "Applicant" }
  - { id: student,                 title: "Student" }
  - { id: law-student,             title: "Law Student" }
  - { id: faculty,                 title: "Faculty / Instructor" }
  - { id: legal-mentor,            title: "Legal Mentor" }
  - { id: moot-court-coordinator,  title: "Moot Court Coordinator" }
  - { id: examination-staff,       title: "Examination Staff" }
  - { id: department-admin,        title: "Department Admin / HoD" }
  - { id: finance-staff,           title: "Finance Staff" }
  - { id: hr-staff,                title: "HR Staff" }
  - { id: facility-staff,          title: "Facility / Inventory Staff" }
  - { id: governance,              title: "Governance (Grievance / RTI / IQAC)" }
  - { id: support-staff,           title: "Support Staff (Helpdesk)" }
  - { id: management,              title: "Management (VC, Registrar)" }
  - { id: org-admin,               title: "Organisation Admin" }

# Field vocabulary for generic modules. Key = <module>.<term>, value = the word this academy uses.
vocabulary:
  selection-process.selection: "Moot court selection"
  productions.production: "Competition / debate"
  field-training.placement: "Legal internship / clinic"
  projects.project: "Case research"
`,fv=`# Institution profile: everything one organisation of this academy type enables (ADR-0004, ADR-0005).
# Chosen at registration as the academy type. The plan then decides how much of it is unlocked.
profile: management-institute
title: "Management / Business School"
description: "Case competitions, corporate relations, live projects, internships, placements, alumni."

suites:
  common: [student-lifecycle, academics, practice, facilities, finance-operations, campus-life, governance, support]
  specialized: []

# <domain>/<module> under modules/. Field-specific behaviour comes from the practice suite plus vocabulary.
modules:
  - student-lifecycle/web-portal-cms
  - student-lifecycle/admissions
  - student-lifecycle/student-information
  - student-lifecycle/enrolment-registration
  - academics/academic-management
  - academics/lms
  - academics/examinations
  - academics/timetable-attendance
  - practice/portfolio
  - practice/projects
  - practice/selection-process
  - practice/productions
  - practice/field-training
  - practice/skill-progress
  - facilities/facility-booking
  - facilities/inventory-equipment
  - facilities/asset-management
  - facilities/maintenance
  - finance-operations/fees-accounts
  - finance-operations/budget-grants
  - finance-operations/procurement
  - finance-operations/hr-payroll
  - finance-operations/e-office
  - campus-life/hostel
  - campus-life/transport
  - campus-life/library
  - campus-life/placement-career
  - campus-life/alumni
  - governance/grievance
  - governance/rti
  - governance/iqac-accreditation
  - governance/regulatory-reports
  - support/helpdesk
  - support/sla-management
  - support/knowledge-base
  - support/incident-management
  - support/amc-vendor-support

integrations:
  - payment-sbiepay
  - digilocker
  - nad
  - government-portals
  - messaging-providers
  - video-conferencing
  - external-university-portals

# Roles for this academy. id = dashboard layout file in ../dashboards/<id>.yaml.
roles:
  - { id: applicant,           title: "Applicant" }
  - { id: student,             title: "Student" }
  - { id: management-student,  title: "Management Student" }
  - { id: faculty,             title: "Faculty / Instructor" }
  - { id: corporate-mentor,    title: "Corporate Mentor" }
  - { id: placement-officer,   title: "Placement Officer" }
  - { id: examination-staff,   title: "Examination Staff" }
  - { id: department-admin,    title: "Department Admin / HoD" }
  - { id: finance-staff,       title: "Finance Staff" }
  - { id: hr-staff,            title: "HR Staff" }
  - { id: facility-staff,      title: "Facility / Inventory Staff" }
  - { id: governance,          title: "Governance (Grievance / RTI / IQAC)" }
  - { id: support-staff,       title: "Support Staff (Helpdesk)" }
  - { id: management,          title: "Management (VC, Registrar)" }
  - { id: org-admin,           title: "Organisation Admin" }

# Field vocabulary for generic modules. Key = <module>.<term>, value = the word this academy uses.
vocabulary:
  productions.production: "Case competition / industry event"
  projects.project: "Live project"
  field-training.placement: "Internship"
  selection-process.selection: "Competition selection"
`,dv=`# Institution profile: everything one organisation of this academy type enables (ADR-0004, ADR-0005).
# Chosen at registration as the academy type. The plan then decides how much of it is unlocked.
profile: medical-college
title: "Medical / Health Sciences College"
description: "Clinical training and rotations, skills, hospital integration, labs, residency, research."

suites:
  common: [student-lifecycle, academics, practice, facilities, finance-operations, campus-life, governance, support]
  specialized: []

# <domain>/<module> under modules/. Field-specific behaviour comes from the practice suite plus vocabulary.
modules:
  - student-lifecycle/web-portal-cms
  - student-lifecycle/admissions
  - student-lifecycle/student-information
  - student-lifecycle/enrolment-registration
  - academics/academic-management
  - academics/lms
  - academics/examinations
  - academics/timetable-attendance
  - practice/portfolio
  - practice/projects
  - practice/selection-process
  - practice/productions
  - practice/field-training
  - practice/skill-progress
  - facilities/facility-booking
  - facilities/inventory-equipment
  - facilities/asset-management
  - facilities/maintenance
  - finance-operations/fees-accounts
  - finance-operations/budget-grants
  - finance-operations/procurement
  - finance-operations/hr-payroll
  - finance-operations/e-office
  - campus-life/hostel
  - campus-life/transport
  - campus-life/library
  - campus-life/placement-career
  - campus-life/alumni
  - governance/grievance
  - governance/rti
  - governance/iqac-accreditation
  - governance/regulatory-reports
  - support/helpdesk
  - support/sla-management
  - support/knowledge-base
  - support/incident-management
  - support/amc-vendor-support

integrations:
  - payment-sbiepay
  - digilocker
  - nad
  - government-portals
  - messaging-providers
  - video-conferencing
  - external-university-portals

# Roles for this academy. id = dashboard layout file in ../dashboards/<id>.yaml.
roles:
  - { id: applicant,             title: "Applicant" }
  - { id: student,               title: "Student" }
  - { id: medical-student,       title: "Medical Student" }
  - { id: faculty,               title: "Faculty / Instructor" }
  - { id: clinical-supervisor,   title: "Clinical Supervisor" }
  - { id: hospital-coordinator,  title: "Hospital Coordinator" }
  - { id: examination-staff,     title: "Examination Staff" }
  - { id: department-admin,      title: "Department Admin / HoD" }
  - { id: finance-staff,         title: "Finance Staff" }
  - { id: hr-staff,              title: "HR Staff" }
  - { id: facility-staff,        title: "Facility / Inventory Staff" }
  - { id: governance,            title: "Governance (Grievance / RTI / IQAC)" }
  - { id: support-staff,         title: "Support Staff (Helpdesk)" }
  - { id: management,            title: "Management (VC, Registrar)" }
  - { id: org-admin,             title: "Organisation Admin" }

# Field vocabulary for generic modules. Key = <module>.<term>, value = the word this academy uses.
vocabulary:
  field-training.placement: "Clinical rotation"
  skill-progress.assessment: "Skills assessment"
  facility-booking.resource: "Lab / skills room"
  projects.project: "Research project"
`,pv=`# Institution profile: everything one organisation of this academy type enables (ADR-0004, ADR-0005).
# Chosen at registration as the academy type. The plan then decides how much of it is unlocked.
profile: music-academy
title: "Music Academy / Conservatory"
description: "Lessons, practice rooms, auditions, recitals, ensembles and instruments."

suites:
  common: [student-lifecycle, academics, practice, facilities, finance-operations, campus-life, governance, support]
  specialized: []

# <domain>/<module> under modules/. Field-specific behaviour comes from the practice suite plus vocabulary.
modules:
  - student-lifecycle/web-portal-cms
  - student-lifecycle/admissions
  - student-lifecycle/student-information
  - student-lifecycle/enrolment-registration
  - academics/academic-management
  - academics/lms
  - academics/examinations
  - academics/timetable-attendance
  - practice/portfolio
  - practice/projects
  - practice/selection-process
  - practice/productions
  - practice/field-training
  - practice/skill-progress
  - facilities/facility-booking
  - facilities/inventory-equipment
  - facilities/asset-management
  - facilities/maintenance
  - finance-operations/fees-accounts
  - finance-operations/budget-grants
  - finance-operations/procurement
  - finance-operations/hr-payroll
  - finance-operations/e-office
  - campus-life/hostel
  - campus-life/transport
  - campus-life/library
  - campus-life/placement-career
  - campus-life/alumni
  - governance/grievance
  - governance/rti
  - governance/iqac-accreditation
  - governance/regulatory-reports
  - support/helpdesk
  - support/sla-management
  - support/knowledge-base
  - support/incident-management
  - support/amc-vendor-support

integrations:
  - payment-sbiepay
  - digilocker
  - nad
  - government-portals
  - messaging-providers
  - video-conferencing
  - external-university-portals

# Roles for this academy. id = dashboard layout file in ../dashboards/<id>.yaml.
roles:
  - { id: applicant,          title: "Applicant" }
  - { id: student,            title: "Student" }
  - { id: musician,           title: "Musician" }
  - { id: faculty,            title: "Faculty / Instructor" }
  - { id: music-teacher,      title: "Music Teacher" }
  - { id: ensemble-director,  title: "Ensemble / Orchestra Director" }
  - { id: examination-staff,  title: "Examination Staff" }
  - { id: department-admin,   title: "Department Admin / HoD" }
  - { id: finance-staff,      title: "Finance Staff" }
  - { id: hr-staff,           title: "HR Staff" }
  - { id: facility-staff,     title: "Facility / Inventory Staff" }
  - { id: governance,         title: "Governance (Grievance / RTI / IQAC)" }
  - { id: support-staff,      title: "Support Staff (Helpdesk)" }
  - { id: management,         title: "Management (VC, Registrar)" }
  - { id: org-admin,          title: "Organisation Admin" }

# Field vocabulary for generic modules. Key = <module>.<term>, value = the word this academy uses.
vocabulary:
  portfolio.item: "Repertoire piece"
  selection-process.selection: "Audition"
  productions.production: "Recital / concert"
  facility-booking.resource: "Practice room"
  inventory-equipment.item: "Instrument"
  skill-progress.assessment: "Grade exam"
`,mv=`# Institution profile: everything one organisation of this academy type enables (ADR-0004, ADR-0005).
# Chosen at registration as the academy type. The plan then decides how much of it is unlocked.
profile: research-university
title: "Research / Doctoral University"
description: "PhD lifecycle, supervisors, proposals, ethics, grants, publications, conferences, viva."

suites:
  common: [student-lifecycle, academics, practice, facilities, finance-operations, campus-life, governance, support]
  specialized: []

# <domain>/<module> under modules/. Field-specific behaviour comes from the practice suite plus vocabulary.
modules:
  - student-lifecycle/web-portal-cms
  - student-lifecycle/admissions
  - student-lifecycle/student-information
  - student-lifecycle/enrolment-registration
  - academics/academic-management
  - academics/lms
  - academics/examinations
  - academics/timetable-attendance
  - practice/portfolio
  - practice/projects
  - practice/selection-process
  - practice/productions
  - practice/field-training
  - practice/skill-progress
  - facilities/facility-booking
  - facilities/inventory-equipment
  - facilities/asset-management
  - facilities/maintenance
  - finance-operations/fees-accounts
  - finance-operations/budget-grants
  - finance-operations/procurement
  - finance-operations/hr-payroll
  - finance-operations/e-office
  - campus-life/hostel
  - campus-life/transport
  - campus-life/library
  - campus-life/placement-career
  - campus-life/alumni
  - governance/grievance
  - governance/rti
  - governance/iqac-accreditation
  - governance/regulatory-reports
  - support/helpdesk
  - support/sla-management
  - support/knowledge-base
  - support/incident-management
  - support/amc-vendor-support

integrations:
  - payment-sbiepay
  - digilocker
  - nad
  - government-portals
  - messaging-providers
  - video-conferencing
  - external-university-portals

# Roles for this academy. id = dashboard layout file in ../dashboards/<id>.yaml.
roles:
  - { id: applicant,            title: "Applicant" }
  - { id: student,              title: "Student" }
  - { id: research-scholar,     title: "Research Scholar" }
  - { id: faculty,              title: "Faculty / Instructor" }
  - { id: research-supervisor,  title: "Research Supervisor" }
  - { id: research-office,      title: "Research Office" }
  - { id: examination-staff,    title: "Examination Staff" }
  - { id: department-admin,     title: "Department Admin / HoD" }
  - { id: finance-staff,        title: "Finance Staff" }
  - { id: hr-staff,             title: "HR Staff" }
  - { id: facility-staff,       title: "Facility / Inventory Staff" }
  - { id: governance,           title: "Governance (Grievance / RTI / IQAC)" }
  - { id: support-staff,        title: "Support Staff (Helpdesk)" }
  - { id: management,           title: "Management (VC, Registrar)" }
  - { id: org-admin,            title: "Organisation Admin" }

# Field vocabulary for generic modules. Key = <module>.<term>, value = the word this academy uses.
vocabulary:
  projects.project: "Research project"
  portfolio.item: "Publication"
  productions.production: "Conference"
  selection-process.selection: "Supervisor allocation / viva"
  projects.milestone: "Thesis milestone"
`,hv=`# Institution profile: everything one installation of Education OS enables.
# Decision and format: docs/architecture/adr/0004-institution-profiles.md
# Apps read modules.enabled from here; the gateway blocks routes of modules not listed.
profile: sports-college
title: "Sports University / Sports College"
description: "Reference profile. Common suites plus the sports specialization."

suites:
  common: [student-lifecycle, academics, practice, facilities, finance-operations, campus-life, governance, support]
  specialized: [sports]

# <domain>/<module> under modules/. Everything not listed is disabled, in the UI and at the API.
modules:
  - student-lifecycle/web-portal-cms
  - student-lifecycle/admissions
  - student-lifecycle/student-information
  - student-lifecycle/enrolment-registration
  - academics/academic-management
  - academics/lms
  - academics/examinations
  - academics/timetable-attendance
  - practice/portfolio
  - practice/projects
  - practice/selection-process
  - practice/productions
  - practice/field-training
  - practice/skill-progress
  - sports/athlete-performance
  - sports/training-video-analysis
  - sports/sports-nutrition-health
  - sports/tournament-events
  - facilities/sports-facilities
  - facilities/facility-booking
  - facilities/inventory-equipment
  - facilities/asset-management
  - facilities/maintenance
  - finance-operations/fees-accounts
  - finance-operations/budget-grants
  - finance-operations/procurement
  - finance-operations/hr-payroll
  - finance-operations/e-office
  - campus-life/hostel
  - campus-life/transport
  - campus-life/library
  - campus-life/placement-career
  - campus-life/alumni
  - governance/grievance
  - governance/rti
  - governance/iqac-accreditation
  - governance/regulatory-reports
  - support/helpdesk
  - support/sla-management
  - support/knowledge-base
  - support/incident-management
  - support/amc-vendor-support

integrations:
  - payment-sbiepay
  - digilocker
  - nad
  - government-portals
  - messaging-providers
  - video-conferencing
  - wearables
  - external-university-portals

# Roles for this institution. id = dashboard layout file in ../dashboards/<id>.yaml.
roles:
  - { id: applicant,          title: "Applicant" }
  - { id: student,            title: "Student" }
  - { id: athlete,            title: "Athlete" }
  - { id: faculty,            title: "Faculty / Instructor" }
  - { id: coach,              title: "Coach" }
  - { id: medical-staff,      title: "Medical Staff (Doctor / Physio)" }
  - { id: nutritionist,       title: "Nutritionist" }
  - { id: examination-staff,  title: "Examination Staff" }
  - { id: department-admin,   title: "Department Admin / HoD" }
  - { id: finance-staff,      title: "Finance Staff" }
  - { id: hr-staff,           title: "HR Staff" }
  - { id: facility-staff,     title: "Facility / Inventory Staff" }
  - { id: governance,         title: "Governance (Grievance / RTI / IQAC)" }
  - { id: support-staff,      title: "Support Staff (Helpdesk)" }
  - { id: management,         title: "Management (VC, Registrar)" }
  - { id: org-admin,          title: "Organisation Admin" }     # created at registration (ADR-0005)

# Field vocabulary for generic modules. Key = <module>.<term>, value = the word this institution uses.
vocabulary:
  facility-booking.resource: "Facility"
  facility-booking.resources: "Facilities"
  inventory-equipment.item: "Equipment"
  tournament-events.event: "Tournament"
  athlete-performance.subject: "Athlete"
`,gv=`# Institution profile: everything one organisation of this academy type enables (ADR-0004, ADR-0005).
# Chosen at registration as the academy type. The plan then decides how much of it is unlocked.
profile: teacher-education-college
title: "Teacher Education / B.Ed."
description: "Teaching practice, school internships, lesson plans, observation, portfolios, mentors."

suites:
  common: [student-lifecycle, academics, practice, facilities, finance-operations, campus-life, governance, support]
  specialized: []

# <domain>/<module> under modules/. Field-specific behaviour comes from the practice suite plus vocabulary.
modules:
  - student-lifecycle/web-portal-cms
  - student-lifecycle/admissions
  - student-lifecycle/student-information
  - student-lifecycle/enrolment-registration
  - academics/academic-management
  - academics/lms
  - academics/examinations
  - academics/timetable-attendance
  - practice/portfolio
  - practice/projects
  - practice/selection-process
  - practice/productions
  - practice/field-training
  - practice/skill-progress
  - facilities/facility-booking
  - facilities/inventory-equipment
  - facilities/asset-management
  - facilities/maintenance
  - finance-operations/fees-accounts
  - finance-operations/budget-grants
  - finance-operations/procurement
  - finance-operations/hr-payroll
  - finance-operations/e-office
  - campus-life/hostel
  - campus-life/transport
  - campus-life/library
  - campus-life/placement-career
  - campus-life/alumni
  - governance/grievance
  - governance/rti
  - governance/iqac-accreditation
  - governance/regulatory-reports
  - support/helpdesk
  - support/sla-management
  - support/knowledge-base
  - support/incident-management
  - support/amc-vendor-support

integrations:
  - payment-sbiepay
  - digilocker
  - nad
  - government-portals
  - messaging-providers
  - video-conferencing
  - external-university-portals

# Roles for this academy. id = dashboard layout file in ../dashboards/<id>.yaml.
roles:
  - { id: applicant,              title: "Applicant" }
  - { id: student,                title: "Student" }
  - { id: teacher-trainee,        title: "Teacher Trainee" }
  - { id: faculty,                title: "Faculty / Instructor" }
  - { id: mentor-teacher,         title: "Mentor Teacher" }
  - { id: practicum-coordinator,  title: "Practicum Coordinator" }
  - { id: examination-staff,      title: "Examination Staff" }
  - { id: department-admin,       title: "Department Admin / HoD" }
  - { id: finance-staff,          title: "Finance Staff" }
  - { id: hr-staff,               title: "HR Staff" }
  - { id: facility-staff,         title: "Facility / Inventory Staff" }
  - { id: governance,             title: "Governance (Grievance / RTI / IQAC)" }
  - { id: support-staff,          title: "Support Staff (Helpdesk)" }
  - { id: management,             title: "Management (VC, Registrar)" }
  - { id: org-admin,              title: "Organisation Admin" }

# Field vocabulary for generic modules. Key = <module>.<term>, value = the word this academy uses.
vocabulary:
  field-training.placement: "School internship"
  projects.project: "Lesson plan"
  portfolio.item: "Teaching portfolio"
  skill-progress.assessment: "Practicum assessment"
`,yv=`# Institution profile: everything one organisation of this academy type enables (ADR-0004, ADR-0005).
# Chosen at registration as the academy type. The plan then decides how much of it is unlocked.
profile: theatre-academy
title: "Theatre / Drama Academy"
description: "Productions, casting, rehearsals, scripts, stage and venue, costumes and tickets."

suites:
  common: [student-lifecycle, academics, practice, facilities, finance-operations, campus-life, governance, support]
  specialized: []

# <domain>/<module> under modules/. Field-specific behaviour comes from the practice suite plus vocabulary.
modules:
  - student-lifecycle/web-portal-cms
  - student-lifecycle/admissions
  - student-lifecycle/student-information
  - student-lifecycle/enrolment-registration
  - academics/academic-management
  - academics/lms
  - academics/examinations
  - academics/timetable-attendance
  - practice/portfolio
  - practice/projects
  - practice/selection-process
  - practice/productions
  - practice/field-training
  - practice/skill-progress
  - facilities/facility-booking
  - facilities/inventory-equipment
  - facilities/asset-management
  - facilities/maintenance
  - finance-operations/fees-accounts
  - finance-operations/budget-grants
  - finance-operations/procurement
  - finance-operations/hr-payroll
  - finance-operations/e-office
  - campus-life/hostel
  - campus-life/transport
  - campus-life/library
  - campus-life/placement-career
  - campus-life/alumni
  - governance/grievance
  - governance/rti
  - governance/iqac-accreditation
  - governance/regulatory-reports
  - support/helpdesk
  - support/sla-management
  - support/knowledge-base
  - support/incident-management
  - support/amc-vendor-support

integrations:
  - payment-sbiepay
  - digilocker
  - nad
  - government-portals
  - messaging-providers
  - video-conferencing
  - external-university-portals

# Roles for this academy. id = dashboard layout file in ../dashboards/<id>.yaml.
roles:
  - { id: applicant,          title: "Applicant" }
  - { id: student,            title: "Student" }
  - { id: actor,              title: "Actor" }
  - { id: faculty,            title: "Faculty / Instructor" }
  - { id: director,           title: "Director" }
  - { id: stage-manager,      title: "Stage Manager" }
  - { id: examination-staff,  title: "Examination Staff" }
  - { id: department-admin,   title: "Department Admin / HoD" }
  - { id: finance-staff,      title: "Finance Staff" }
  - { id: hr-staff,           title: "HR Staff" }
  - { id: facility-staff,     title: "Facility / Inventory Staff" }
  - { id: governance,         title: "Governance (Grievance / RTI / IQAC)" }
  - { id: support-staff,      title: "Support Staff (Helpdesk)" }
  - { id: management,         title: "Management (VC, Registrar)" }
  - { id: org-admin,          title: "Organisation Admin" }

# Field vocabulary for generic modules. Key = <module>.<term>, value = the word this academy uses.
vocabulary:
  productions.production: "Production"
  selection-process.selection: "Casting call"
  facility-booking.resource: "Rehearsal space / venue"
  inventory-equipment.item: "Costume / prop"
  projects.project: "Script"
`,vv=`# Plans. The super admin edits these in the admin screens of apps/frontend; this file is the seed and the default.
# An organisation's entitlement = modules in its academy profile that its plan allows,
# plus super-admin overrides. "suites" and "modules" accept suite names (every module in the
# suite) or <domain>/<module> paths. "*" means everything.
plans:
  - id: trial
    title: "Trial"
    description: "Try the common platform and one specialized suite, free for 30 days."
    trial_days: 30
    price_per_month: 0
    currency: INR
    suites: [student-lifecycle, academics, practice, support]
    modules: []
    specialized_suites: 1        # how many of the profile's specialized suites are on
    integrations: [messaging-providers]
    limits: { users: 25, students: 500, storage_gb: 2 }
    after_trial: read_only       # read_only | suspend

  - id: standard
    title: "Standard"
    description: "Every common suite plus the profile's specialized suites."
    price_per_month: 24999
    currency: INR
    suites: [student-lifecycle, academics, practice, facilities, finance-operations, campus-life, governance, support]
    modules: []
    specialized_suites: all
    integrations: [messaging-providers, payment-sbiepay, video-conferencing, digilocker]
    limits: { users: 500, students: 10000, storage_gb: 100 }

  - id: premium
    title: "Premium"
    description: "Everything, every integration, priority support."
    price_per_month: 59999
    currency: INR
    suites: ["*"]
    modules: []
    specialized_suites: all
    integrations: ["*"]
    limits: { users: 5000, students: 100000, storage_gb: 1000 }
    support: priority
`,wv=Object.assign({"../../../../platform/identity/config/profiles/agriculture-college.yaml":iv,"../../../../platform/identity/config/profiles/arts-academy.yaml":rv,"../../../../platform/identity/config/profiles/dance-academy.yaml":sv,"../../../../platform/identity/config/profiles/design-fashion-institute.yaml":ov,"../../../../platform/identity/config/profiles/engineering-college.yaml":lv,"../../../../platform/identity/config/profiles/film-media-institute.yaml":av,"../../../../platform/identity/config/profiles/hospitality-institute.yaml":cv,"../../../../platform/identity/config/profiles/law-college.yaml":uv,"../../../../platform/identity/config/profiles/management-institute.yaml":fv,"../../../../platform/identity/config/profiles/medical-college.yaml":dv,"../../../../platform/identity/config/profiles/music-academy.yaml":pv,"../../../../platform/identity/config/profiles/research-university.yaml":mv,"../../../../platform/identity/config/profiles/sports-college.yaml":hv,"../../../../platform/identity/config/profiles/teacher-education-college.yaml":gv,"../../../../platform/identity/config/profiles/theatre-academy.yaml":yv}),_v=Object.assign({"../../../../platform/billing/config/plans.yaml":vv});function kv(){const e={};for(const t of Object.values(wv)){const n=Rs(t);e[n.profile]=n}return e}function Sv(){const e=Object.values(_v)[0];if(!e)return{};const t=Rs(e);return Object.fromEntries(t.plans.map(n=>[n.id,n]))}const Ev=e=>e.split("/")[0]??"",bv=e=>e.split("/").pop()??e;function Cv(e,t,n=[]){const i=t.suites.includes("*"),r=new Set(t.specialized_suites==="all"?e.suites.specialized:e.suites.specialized.slice(0,t.specialized_suites)),s=a=>{const c=Ev(a);return t.modules.includes(a)?!0:e.suites.specialized.includes(c)?i||r.has(c):i||t.suites.includes(c)},o=e.modules.filter(a=>s(a)||n.includes(a)),l=e.modules.filter(a=>!o.includes(a));return{plan:t.id,academyType:e.profile,modules:new Set(o),moduleNames:new Set(o.map(bv)),upgradableModules:l,limits:t.limits}}function Nv(e){return e.split(".")[0]??e}function Av({role:e,layouts:t,registry:n,permissions:i,entitlement:r,canUpgrade:s=!1}){const o=t[e];if(!o)return b.jsxs("p",{role:"alert",className:"eos-dashboard__missing",children:['No dashboard layout for role "',e,'".']});const l=nv(e,t),a=u=>i==="all"||i.has(u),c=u=>{if(!r)return!0;const f=Nv(u);return r.moduleNames.has(f)||!r.upgradableModules.some(h=>h.endsWith("/"+f))},m=l.flatMap(u=>{if(!c(u))return s?[b.jsx(fo,{title:u,size:"1x1",state:"empty",message:"Not in your plan · Upgrade to unlock"},u)]:[];const f=n.get(u);if(!f)return[b.jsx(fo,{title:u,size:"1x1",state:"empty",message:"Not built yet"},u)];if(!a(f.permission))return[];const h=f.component;return[b.jsx(fo,{title:f.title,size:f.size,children:b.jsx(h,{role:e})},u)]});return b.jsxs("section",{className:"eos-dashboard","aria-label":`${o.title} dashboard`,children:[b.jsx("h1",{className:"eos-dashboard__title",children:o.title}),m.length===0?b.jsx("p",{className:"eos-dashboard__missing",children:"Nothing to show for this role."}):b.jsx("div",{className:"eos-dashboard__grid",children:m})]})}function Tv({roles:e,value:t,onChange:n}){return b.jsxs("label",{className:"eos-role-switcher",children:["View as",b.jsx("select",{value:t,onChange:i=>n(i.target.value),children:e.map(i=>b.jsx("option",{value:i.id,children:i.title},i.id))})]})}const Iv="modulepreload",Ov=function(e){return"/"+e},Xc={},x=function(t,n,i){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(n.map(a=>{if(a=Ov(a),a in Xc)return;Xc[a]=!0;const c=a.endsWith(".css"),m=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${m}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":Iv,c||(u.as="script"),u.crossOrigin="",u.href=a,l&&u.setAttribute("nonce",l),document.head.appendChild(u),c)return new Promise((f,h)=>{u.addEventListener("load",f),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${a}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return r.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return t().catch(s)})},Dv=`# Modules composed into this app, as <domain>/<module> under modules/.
# The dashboard shell registers each listed module's frontend/src/widgets/index.ts.
# Example:
#   modules:
#     - academics/lms
#     - finance-operations/fees-accounts
modules: []
platform: []
`,ep=new $h,Lv=Object.assign({"../../../modules/academics/academic-management/frontend/src/widgets/index.ts":()=>x(()=>import("./index-Feu24wMY.js"),[]),"../../../modules/academics/examinations/frontend/src/widgets/index.ts":()=>x(()=>import("./index-lD20hJZM.js"),[]),"../../../modules/academics/lms/frontend/src/widgets/index.ts":()=>x(()=>import("./index-BeYMQhfx.js"),[]),"../../../modules/academics/timetable-attendance/frontend/src/widgets/index.ts":()=>x(()=>import("./index-vku1Omnm.js"),[]),"../../../modules/campus-life/alumni/frontend/src/widgets/index.ts":()=>x(()=>import("./index-BZnoDGcW.js"),[]),"../../../modules/campus-life/hostel/frontend/src/widgets/index.ts":()=>x(()=>import("./index-CCR4BMUN.js"),[]),"../../../modules/campus-life/library/frontend/src/widgets/index.ts":()=>x(()=>import("./index-_7rgyT0s.js"),[]),"../../../modules/campus-life/placement-career/frontend/src/widgets/index.ts":()=>x(()=>import("./index-CwTakR7j.js"),[]),"../../../modules/campus-life/transport/frontend/src/widgets/index.ts":()=>x(()=>import("./index-C-gtnJyj.js"),[]),"../../../modules/facilities/asset-management/frontend/src/widgets/index.ts":()=>x(()=>import("./index-I0fTVc53.js"),[]),"../../../modules/facilities/facility-booking/frontend/src/widgets/index.ts":()=>x(()=>import("./index-DUUqwAUB.js"),[]),"../../../modules/facilities/inventory-equipment/frontend/src/widgets/index.ts":()=>x(()=>import("./index-CudeGtKA.js"),[]),"../../../modules/facilities/maintenance/frontend/src/widgets/index.ts":()=>x(()=>import("./index-DWJVPfsL.js"),[]),"../../../modules/facilities/sports-facilities/frontend/src/widgets/index.ts":()=>x(()=>import("./index-CNIGhVq5.js"),[]),"../../../modules/finance-operations/budget-grants/frontend/src/widgets/index.ts":()=>x(()=>import("./index-64cXw8Jd.js"),[]),"../../../modules/finance-operations/e-office/frontend/src/widgets/index.ts":()=>x(()=>import("./index-CFDJxPcE.js"),[]),"../../../modules/finance-operations/fees-accounts/frontend/src/widgets/index.ts":()=>x(()=>import("./index-D4h3T3ZQ.js"),[]),"../../../modules/finance-operations/hr-payroll/frontend/src/widgets/index.ts":()=>x(()=>import("./index-bRArgQVK.js"),[]),"../../../modules/finance-operations/procurement/frontend/src/widgets/index.ts":()=>x(()=>import("./index-DGqRSCUo.js"),[]),"../../../modules/governance/grievance/frontend/src/widgets/index.ts":()=>x(()=>import("./index-DkRVTAup.js"),[]),"../../../modules/governance/iqac-accreditation/frontend/src/widgets/index.ts":()=>x(()=>import("./index-Po1pqkri.js"),[]),"../../../modules/governance/regulatory-reports/frontend/src/widgets/index.ts":()=>x(()=>import("./index-eoLtfMuI.js"),[]),"../../../modules/governance/rti/frontend/src/widgets/index.ts":()=>x(()=>import("./index-SoQkx9QT.js"),[]),"../../../modules/practice/field-training/frontend/src/widgets/index.ts":()=>x(()=>import("./index-flpdUfzo.js"),[]),"../../../modules/practice/portfolio/frontend/src/widgets/index.ts":()=>x(()=>import("./index-DaFhI-3e.js"),[]),"../../../modules/practice/productions/frontend/src/widgets/index.ts":()=>x(()=>import("./index-CQFCOwR7.js"),[]),"../../../modules/practice/projects/frontend/src/widgets/index.ts":()=>x(()=>import("./index-DH7WGvHK.js"),[]),"../../../modules/practice/selection-process/frontend/src/widgets/index.ts":()=>x(()=>import("./index-CL2Osoy2.js"),[]),"../../../modules/practice/skill-progress/frontend/src/widgets/index.ts":()=>x(()=>import("./index-BELh9a9a.js"),[]),"../../../modules/sports/athlete-performance/frontend/src/widgets/index.ts":()=>x(()=>import("./index-BQJMAZbk.js"),[]),"../../../modules/sports/sports-nutrition-health/frontend/src/widgets/index.ts":()=>x(()=>import("./index-DAL1RdKh.js"),[]),"../../../modules/sports/tournament-events/frontend/src/widgets/index.ts":()=>x(()=>import("./index-DHs90od-.js"),[]),"../../../modules/sports/training-video-analysis/frontend/src/widgets/index.ts":()=>x(()=>import("./index-Cxc_SC39.js"),[]),"../../../modules/student-lifecycle/admissions/frontend/src/widgets/index.ts":()=>x(()=>import("./index-o9woAcOX.js"),[]),"../../../modules/student-lifecycle/enrolment-registration/frontend/src/widgets/index.ts":()=>x(()=>import("./index-fxhS5L_E.js"),[]),"../../../modules/student-lifecycle/student-information/frontend/src/widgets/index.ts":()=>x(()=>import("./index-DQuX_XLG.js"),[]),"../../../modules/student-lifecycle/web-portal-cms/frontend/src/widgets/index.ts":()=>x(()=>import("./index-CKF0h0JE.js"),[]),"../../../modules/support/amc-vendor-support/frontend/src/widgets/index.ts":()=>x(()=>import("./index-B8ffs1fH.js"),[]),"../../../modules/support/helpdesk/frontend/src/widgets/index.ts":()=>x(()=>import("./index-Bj6RmBFt.js"),[]),"../../../modules/support/incident-management/frontend/src/widgets/index.ts":()=>x(()=>import("./index-CladJ--y.js"),[]),"../../../modules/support/knowledge-base/frontend/src/widgets/index.ts":()=>x(()=>import("./index-CDhy5Pxc.js"),[]),"../../../modules/support/sla-management/frontend/src/widgets/index.ts":()=>x(()=>import("./index-9f4C769f.js"),[])});async function xv(){var n;const e=((n=Rs(Dv))==null?void 0:n.modules)??[],t=[];for(const i of e){const r=`../../../modules/${i}/frontend/src/widgets/index.ts`,s=Lv[r];if(!s){console.warn(`modules.enabled.yaml lists "${i}" but it has no frontend/src/widgets/index.ts`);continue}const o=await s();ep.register(o.widgets??[]),t.push(i)}return t}function Rv({organisation:e,profile:t,profiles:n,entitlement:i,plans:r,onChangePlan:s,onChangeAcademy:o,lockAcademy:l=!1,note:a}){const c=r[i.plan],m=i.upgradableModules.length;return b.jsxs("div",{className:"eos-tenant","aria-label":"Organisation and plan",children:[b.jsx("span",{className:"eos-tenant__org",children:e}),l?b.jsx("span",{className:"eos-tenant__meta",children:t.title}):b.jsxs("label",{className:"eos-tenant__plan",children:["Academy",b.jsx("select",{value:t.profile,onChange:u=>o(u.target.value),children:Object.values(n).map(u=>b.jsx("option",{value:u.profile,children:u.title},u.profile))})]}),b.jsxs("label",{className:"eos-tenant__plan",children:["Plan",b.jsx("select",{value:i.plan,onChange:u=>s(u.target.value),children:Object.values(r).map(u=>b.jsx("option",{value:u.id,children:u.title},u.id))})]}),c!=null&&c.trial_days?b.jsx("span",{className:"eos-tenant__trial",children:a??`Trial · ${c.trial_days} days`}):null,m>0?b.jsxs("span",{className:"eos-tenant__upgrade",children:[m," module",m===1?"":"s"," locked · ",b.jsx("a",{href:"#upgrade",children:"Upgrade"})]}):null]})}const Pv=tv(),vr=kv(),wo=Sv();function _o(e,t,n){const i=new URLSearchParams(window.location.search).get(e)??t;return n(i)?i:t}function ko(e,t){const n=new URL(window.location.href);n.searchParams.set(e,t),window.history.replaceState(null,"",n)}function jv(){var O,I;const[e,t]=F.useState("loading"),[n,i]=F.useState(null),[r,s]=F.useState(!1),[o,l]=F.useState(),[a,c]=F.useState(()=>_o("academy","sports-college",D=>D in vr)),[m,u]=F.useState(()=>_o("plan","trial",D=>D in wo)),[f,h]=F.useState(()=>_o("role","student",()=>!0));F.useEffect(()=>{xv().then(()=>s(!0));const D=new URLSearchParams(window.location.search).get("preview")==="1";(async()=>{if(D||!await Lh()){t("preview");return}if(!md()){t(window.location.hash==="#signup"?"signup":"login");return}try{i(await uo()),t("app")}catch{zc(),t("login")}})()},[]);const w=vr[a],y=F.useMemo(()=>Cv(w,wo[m]),[w,m]),_=e==="app"&&(n!=null&&n.organisation)?vr[n.organisation.academy_type]:w,p=F.useMemo(()=>Dh((_==null?void 0:_.roles)??[]),[_]),d=e==="app"?(n==null?void 0:n.entitlement)??void 0:y;F.useEffect(()=>{if(e==="app"&&n){const D=n.me.is_super_admin?"super-admin":n.me.roles[0]??"student";h(D)}else p.some(D=>D.id===f)||h("student")},[e,n,p]);const g=D=>{ko("role",D),h(D)},v=async D=>{if(e==="app"){const G=await Ph(D);G.activated?i(await uo()):G.payment_url&&window.location.assign(G.payment_url);return}ko("plan",D),u(D)},k=D=>{ko("academy",D),c(D)},C=()=>{zc(),i(null),t("login")};if(e==="loading")return b.jsx("main",{className:"eos-app",children:b.jsx("p",{style:{padding:16},children:"Loading…"})});if(e==="signup")return b.jsx("main",{className:"eos-app",children:b.jsx(Mh,{onDone:D=>{l(D),t("login")},onLogin:()=>t("login")})});if(e==="login")return b.jsx("main",{className:"eos-app",children:b.jsx(jh,{slug:o,onDone:async()=>{i(await uo()),t("app")},onSignUp:()=>t("signup")})});const E=e==="app"?!!(n!=null&&n.me.permissions.includes("billing:subscription:manage")):f==="org-admin"||f==="management",S=n!=null&&n.trialEndsAt?`Trial ends ${new Date(n.trialEndsAt).toLocaleDateString()}`:null;return b.jsxs("main",{className:"eos-app",children:[e==="preview"&&b.jsx("div",{className:"eos-banner",children:"Preview mode: no API connected. Academy, role and plan come from the URL. Add the API to register real organisations."}),b.jsxs("header",{className:"eos-app__bar",children:[b.jsx("strong",{children:"Education OS"}),e==="preview"?b.jsx(Tv,{roles:p,value:f,onChange:g}):b.jsxs("span",{className:"eos-role-switcher",children:[n==null?void 0:n.me.name," · ",((O=p.find(D=>D.id===f))==null?void 0:O.title)??f,n!=null&&n.me.impersonated_by?" · impersonated":"",b.jsx("button",{className:"eos-tenant__signout",onClick:C,children:"Sign out"})]})]}),_&&d&&b.jsx(Rv,{organisation:e==="app"?((I=n==null?void 0:n.organisation)==null?void 0:I.name)??"Platform":`Demo ${_.title.split(" / ")[0]}`,profile:_,profiles:vr,entitlement:d,plans:wo,onChangePlan:v,onChangeAcademy:k,lockAcademy:e==="app",note:S}),r?b.jsx(Av,{role:f,layouts:Pv,registry:ep,permissions:"all",entitlement:d,canUpgrade:E}):b.jsx("p",{children:"Loading modules…"})]})}dd(document.getElementById("root")).render(b.jsx(F.StrictMode,{children:b.jsx(jv,{})}));
