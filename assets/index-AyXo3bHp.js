(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function wT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var qy={exports:{}},ou={},Gy={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mo=Symbol.for("react.element"),ET=Symbol.for("react.portal"),TT=Symbol.for("react.fragment"),IT=Symbol.for("react.strict_mode"),ST=Symbol.for("react.profiler"),xT=Symbol.for("react.provider"),AT=Symbol.for("react.context"),CT=Symbol.for("react.forward_ref"),kT=Symbol.for("react.suspense"),RT=Symbol.for("react.memo"),PT=Symbol.for("react.lazy"),om=Symbol.iterator;function bT(t){return t===null||typeof t!="object"?null:(t=om&&t[om]||t["@@iterator"],typeof t=="function"?t:null)}var Ky={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qy=Object.assign,Yy={};function is(t,e,n){this.props=t,this.context=e,this.refs=Yy,this.updater=n||Ky}is.prototype.isReactComponent={};is.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};is.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Xy(){}Xy.prototype=is.prototype;function pd(t,e,n){this.props=t,this.context=e,this.refs=Yy,this.updater=n||Ky}var md=pd.prototype=new Xy;md.constructor=pd;Qy(md,is.prototype);md.isPureReactComponent=!0;var am=Array.isArray,Jy=Object.prototype.hasOwnProperty,gd={current:null},Zy={key:!0,ref:!0,__self:!0,__source:!0};function e_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Jy.call(e,r)&&!Zy.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Mo,type:t,key:s,ref:o,props:i,_owner:gd.current}}function NT(t,e){return{$$typeof:Mo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function yd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Mo}function DT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var lm=/\/+/g;function fc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?DT(""+t.key):e.toString(36)}function Ha(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Mo:case ET:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+fc(o,0):r,am(i)?(n="",t!=null&&(n=t.replace(lm,"$&/")+"/"),Ha(i,e,n,"",function(h){return h})):i!=null&&(yd(i)&&(i=NT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(lm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",am(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+fc(s,l);o+=Ha(s,e,n,u,i)}else if(u=bT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+fc(s,l++),o+=Ha(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ea(t,e,n){if(t==null)return t;var r=[],i=0;return Ha(t,r,"","",function(s){return e.call(n,s,i++)}),r}function VT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var _t={current:null},Wa={transition:null},LT={ReactCurrentDispatcher:_t,ReactCurrentBatchConfig:Wa,ReactCurrentOwner:gd};function t_(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:Ea,forEach:function(t,e,n){Ea(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ea(t,function(){e++}),e},toArray:function(t){return Ea(t,function(e){return e})||[]},only:function(t){if(!yd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=is;re.Fragment=TT;re.Profiler=ST;re.PureComponent=pd;re.StrictMode=IT;re.Suspense=kT;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=LT;re.act=t_;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Qy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=gd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Jy.call(e,u)&&!Zy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Mo,type:t.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:AT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:xT,_context:t},t.Consumer=t};re.createElement=e_;re.createFactory=function(t){var e=e_.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:CT,render:t}};re.isValidElement=yd;re.lazy=function(t){return{$$typeof:PT,_payload:{_status:-1,_result:t},_init:VT}};re.memo=function(t,e){return{$$typeof:RT,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=Wa.transition;Wa.transition={};try{t()}finally{Wa.transition=e}};re.unstable_act=t_;re.useCallback=function(t,e){return _t.current.useCallback(t,e)};re.useContext=function(t){return _t.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return _t.current.useDeferredValue(t)};re.useEffect=function(t,e){return _t.current.useEffect(t,e)};re.useId=function(){return _t.current.useId()};re.useImperativeHandle=function(t,e,n){return _t.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return _t.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return _t.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return _t.current.useMemo(t,e)};re.useReducer=function(t,e,n){return _t.current.useReducer(t,e,n)};re.useRef=function(t){return _t.current.useRef(t)};re.useState=function(t){return _t.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return _t.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return _t.current.useTransition()};re.version="18.3.1";Gy.exports=re;var te=Gy.exports;const OT=wT(te);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var MT=te,jT=Symbol.for("react.element"),FT=Symbol.for("react.fragment"),UT=Object.prototype.hasOwnProperty,zT=MT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,BT={key:!0,ref:!0,__self:!0,__source:!0};function n_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)UT.call(e,r)&&!BT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:jT,type:t,key:s,ref:o,props:i,_owner:zT.current}}ou.Fragment=FT;ou.jsx=n_;ou.jsxs=n_;qy.exports=ou;var d=qy.exports,r_={exports:{}},Lt={},i_={exports:{}},s_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,G){var Q=O.length;O.push(G);e:for(;0<Q;){var j=Q-1>>>1,X=O[j];if(0<i(X,G))O[j]=G,O[Q]=X,Q=j;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var G=O[0],Q=O.pop();if(Q!==G){O[0]=Q;e:for(var j=0,X=O.length,ie=X>>>1;j<ie;){var Ie=2*(j+1)-1,ye=O[Ie],le=Ie+1,wt=O[le];if(0>i(ye,Q))le<X&&0>i(wt,ye)?(O[j]=wt,O[le]=Q,j=le):(O[j]=ye,O[Ie]=Q,j=Ie);else if(le<X&&0>i(wt,Q))O[j]=wt,O[le]=Q,j=le;else break e}}return G}function i(O,G){var Q=O.sortIndex-G.sortIndex;return Q!==0?Q:O.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],p=1,m=null,g=3,E=!1,k=!1,P=!1,D=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(O){for(var G=n(h);G!==null;){if(G.callback===null)r(h);else if(G.startTime<=O)r(h),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(h)}}function L(O){if(P=!1,A(O),!k)if(n(u)!==null)k=!0,_n($);else{var G=n(h);G!==null&&F(L,G.startTime-O)}}function $(O,G){k=!1,P&&(P=!1,x(_),_=-1),E=!0;var Q=g;try{for(A(G),m=n(u);m!==null&&(!(m.expirationTime>G)||O&&!C());){var j=m.callback;if(typeof j=="function"){m.callback=null,g=m.priorityLevel;var X=j(m.expirationTime<=G);G=t.unstable_now(),typeof X=="function"?m.callback=X:m===n(u)&&r(u),A(G)}else r(u);m=n(u)}if(m!==null)var ie=!0;else{var Ie=n(h);Ie!==null&&F(L,Ie.startTime-G),ie=!1}return ie}finally{m=null,g=Q,E=!1}}var B=!1,T=null,_=-1,w=5,S=-1;function C(){return!(t.unstable_now()-S<w)}function R(){if(T!==null){var O=t.unstable_now();S=O;var G=!0;try{G=T(!0,O)}finally{G?I():(B=!1,T=null)}}else B=!1}var I;if(typeof v=="function")I=function(){v(R)};else if(typeof MessageChannel<"u"){var Be=new MessageChannel,Mt=Be.port2;Be.port1.onmessage=R,I=function(){Mt.postMessage(null)}}else I=function(){D(R,0)};function _n(O){T=O,B||(B=!0,I())}function F(O,G){_=D(function(){O(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){k||E||(k=!0,_n($))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(O){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var Q=g;g=G;try{return O()}finally{g=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,G){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Q=g;g=O;try{return G()}finally{g=Q}},t.unstable_scheduleCallback=function(O,G,Q){var j=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?j+Q:j):Q=j,O){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=Q+X,O={id:p++,callback:G,priorityLevel:O,startTime:Q,expirationTime:X,sortIndex:-1},Q>j?(O.sortIndex=Q,e(h,O),n(u)===null&&O===n(h)&&(P?(x(_),_=-1):P=!0,F(L,Q-j))):(O.sortIndex=X,e(u,O),k||E||(k=!0,_n($))),O},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(O){var G=g;return function(){var Q=g;g=G;try{return O.apply(this,arguments)}finally{g=Q}}}})(s_);i_.exports=s_;var $T=i_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var HT=te,Vt=$T;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o_=new Set,uo={};function ri(t,e){Hi(t,e),Hi(t+"Capture",e)}function Hi(t,e){for(uo[t]=e,t=0;t<e.length;t++)o_.add(e[t])}var bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yc=Object.prototype.hasOwnProperty,WT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,um={},cm={};function qT(t){return Yc.call(cm,t)?!0:Yc.call(um,t)?!1:WT.test(t)?cm[t]=!0:(um[t]=!0,!1)}function GT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function KT(t,e,n,r){if(e===null||typeof e>"u"||GT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ze[t]=new vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ze[e]=new vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ze[t]=new vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ze[t]=new vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ze[t]=new vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ze[t]=new vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ze[t]=new vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ze[t]=new vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ze[t]=new vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var _d=/[\-:]([a-z])/g;function vd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_d,vd);Ze[e]=new vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_d,vd);Ze[e]=new vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_d,vd);Ze[e]=new vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ze[t]=new vt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ze[t]=new vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function wd(t,e,n,r){var i=Ze.hasOwnProperty(e)?Ze[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(KT(e,n,i,r)&&(n=null),r||i===null?qT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Fn=HT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ta=Symbol.for("react.element"),vi=Symbol.for("react.portal"),wi=Symbol.for("react.fragment"),Ed=Symbol.for("react.strict_mode"),Xc=Symbol.for("react.profiler"),a_=Symbol.for("react.provider"),l_=Symbol.for("react.context"),Td=Symbol.for("react.forward_ref"),Jc=Symbol.for("react.suspense"),Zc=Symbol.for("react.suspense_list"),Id=Symbol.for("react.memo"),Gn=Symbol.for("react.lazy"),u_=Symbol.for("react.offscreen"),hm=Symbol.iterator;function Rs(t){return t===null||typeof t!="object"?null:(t=hm&&t[hm]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Object.assign,pc;function Ms(t){if(pc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);pc=e&&e[1]||""}return`
`+pc+t}var mc=!1;function gc(t,e){if(!t||mc)return"";mc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{mc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ms(t):""}function QT(t){switch(t.tag){case 5:return Ms(t.type);case 16:return Ms("Lazy");case 13:return Ms("Suspense");case 19:return Ms("SuspenseList");case 0:case 2:case 15:return t=gc(t.type,!1),t;case 11:return t=gc(t.type.render,!1),t;case 1:return t=gc(t.type,!0),t;default:return""}}function eh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case wi:return"Fragment";case vi:return"Portal";case Xc:return"Profiler";case Ed:return"StrictMode";case Jc:return"Suspense";case Zc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case l_:return(t.displayName||"Context")+".Consumer";case a_:return(t._context.displayName||"Context")+".Provider";case Td:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Id:return e=t.displayName||null,e!==null?e:eh(t.type)||"Memo";case Gn:e=t._payload,t=t._init;try{return eh(t(e))}catch{}}return null}function YT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return eh(e);case 8:return e===Ed?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function _r(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function c_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function XT(t){var e=c_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ia(t){t._valueTracker||(t._valueTracker=XT(t))}function h_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=c_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function dl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function th(t,e){var n=e.checked;return Ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function dm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=_r(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function d_(t,e){e=e.checked,e!=null&&wd(t,"checked",e,!1)}function nh(t,e){d_(t,e);var n=_r(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?rh(t,e.type,n):e.hasOwnProperty("defaultValue")&&rh(t,e.type,_r(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function fm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function rh(t,e,n){(e!=="number"||dl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var js=Array.isArray;function Di(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+_r(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ih(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function pm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(js(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:_r(n)}}function f_(t,e){var n=_r(e.value),r=_r(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function mm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function p_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?p_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Sa,m_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Sa=Sa||document.createElement("div"),Sa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Sa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function co(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Gs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},JT=["Webkit","ms","Moz","O"];Object.keys(Gs).forEach(function(t){JT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Gs[e]=Gs[t]})});function g_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Gs.hasOwnProperty(t)&&Gs[t]?(""+e).trim():e+"px"}function y_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=g_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var ZT=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oh(t,e){if(e){if(ZT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function ah(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lh=null;function Sd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var uh=null,Vi=null,Li=null;function gm(t){if(t=Uo(t)){if(typeof uh!="function")throw Error(U(280));var e=t.stateNode;e&&(e=hu(e),uh(t.stateNode,t.type,e))}}function __(t){Vi?Li?Li.push(t):Li=[t]:Vi=t}function v_(){if(Vi){var t=Vi,e=Li;if(Li=Vi=null,gm(t),e)for(t=0;t<e.length;t++)gm(e[t])}}function w_(t,e){return t(e)}function E_(){}var yc=!1;function T_(t,e,n){if(yc)return t(e,n);yc=!0;try{return w_(t,e,n)}finally{yc=!1,(Vi!==null||Li!==null)&&(E_(),v_())}}function ho(t,e){var n=t.stateNode;if(n===null)return null;var r=hu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var ch=!1;if(bn)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){ch=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{ch=!1}function eI(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(p){this.onError(p)}}var Ks=!1,fl=null,pl=!1,hh=null,tI={onError:function(t){Ks=!0,fl=t}};function nI(t,e,n,r,i,s,o,l,u){Ks=!1,fl=null,eI.apply(tI,arguments)}function rI(t,e,n,r,i,s,o,l,u){if(nI.apply(this,arguments),Ks){if(Ks){var h=fl;Ks=!1,fl=null}else throw Error(U(198));pl||(pl=!0,hh=h)}}function ii(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function I_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ym(t){if(ii(t)!==t)throw Error(U(188))}function iI(t){var e=t.alternate;if(!e){if(e=ii(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ym(i),t;if(s===r)return ym(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function S_(t){return t=iI(t),t!==null?x_(t):null}function x_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=x_(t);if(e!==null)return e;t=t.sibling}return null}var A_=Vt.unstable_scheduleCallback,_m=Vt.unstable_cancelCallback,sI=Vt.unstable_shouldYield,oI=Vt.unstable_requestPaint,De=Vt.unstable_now,aI=Vt.unstable_getCurrentPriorityLevel,xd=Vt.unstable_ImmediatePriority,C_=Vt.unstable_UserBlockingPriority,ml=Vt.unstable_NormalPriority,lI=Vt.unstable_LowPriority,k_=Vt.unstable_IdlePriority,au=null,ln=null;function uI(t){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(au,t,void 0,(t.current.flags&128)===128)}catch{}}var Jt=Math.clz32?Math.clz32:dI,cI=Math.log,hI=Math.LN2;function dI(t){return t>>>=0,t===0?32:31-(cI(t)/hI|0)|0}var xa=64,Aa=4194304;function Fs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Fs(l):(s&=o,s!==0&&(r=Fs(s)))}else o=n&~i,o!==0?r=Fs(o):s!==0&&(r=Fs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Jt(e),i=1<<n,r|=t[n],e&=~i;return r}function fI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Jt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=fI(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function dh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function R_(){var t=xa;return xa<<=1,!(xa&4194240)&&(xa=64),t}function _c(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function jo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jt(e),t[e]=n}function mI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Jt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ad(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Jt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var fe=0;function P_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var b_,Cd,N_,D_,V_,fh=!1,Ca=[],ir=null,sr=null,or=null,fo=new Map,po=new Map,Qn=[],gI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vm(t,e){switch(t){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":fo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":po.delete(e.pointerId)}}function bs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Uo(e),e!==null&&Cd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function yI(t,e,n,r,i){switch(e){case"focusin":return ir=bs(ir,t,e,n,r,i),!0;case"dragenter":return sr=bs(sr,t,e,n,r,i),!0;case"mouseover":return or=bs(or,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return fo.set(s,bs(fo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,po.set(s,bs(po.get(s)||null,t,e,n,r,i)),!0}return!1}function L_(t){var e=Ur(t.target);if(e!==null){var n=ii(e);if(n!==null){if(e=n.tag,e===13){if(e=I_(n),e!==null){t.blockedOn=e,V_(t.priority,function(){N_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ph(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);lh=r,n.target.dispatchEvent(r),lh=null}else return e=Uo(n),e!==null&&Cd(e),t.blockedOn=n,!1;e.shift()}return!0}function wm(t,e,n){qa(t)&&n.delete(e)}function _I(){fh=!1,ir!==null&&qa(ir)&&(ir=null),sr!==null&&qa(sr)&&(sr=null),or!==null&&qa(or)&&(or=null),fo.forEach(wm),po.forEach(wm)}function Ns(t,e){t.blockedOn===e&&(t.blockedOn=null,fh||(fh=!0,Vt.unstable_scheduleCallback(Vt.unstable_NormalPriority,_I)))}function mo(t){function e(i){return Ns(i,t)}if(0<Ca.length){Ns(Ca[0],t);for(var n=1;n<Ca.length;n++){var r=Ca[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ir!==null&&Ns(ir,t),sr!==null&&Ns(sr,t),or!==null&&Ns(or,t),fo.forEach(e),po.forEach(e),n=0;n<Qn.length;n++)r=Qn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Qn.length&&(n=Qn[0],n.blockedOn===null);)L_(n),n.blockedOn===null&&Qn.shift()}var Oi=Fn.ReactCurrentBatchConfig,yl=!0;function vI(t,e,n,r){var i=fe,s=Oi.transition;Oi.transition=null;try{fe=1,kd(t,e,n,r)}finally{fe=i,Oi.transition=s}}function wI(t,e,n,r){var i=fe,s=Oi.transition;Oi.transition=null;try{fe=4,kd(t,e,n,r)}finally{fe=i,Oi.transition=s}}function kd(t,e,n,r){if(yl){var i=ph(t,e,n,r);if(i===null)kc(t,e,r,_l,n),vm(t,r);else if(yI(i,t,e,n,r))r.stopPropagation();else if(vm(t,r),e&4&&-1<gI.indexOf(t)){for(;i!==null;){var s=Uo(i);if(s!==null&&b_(s),s=ph(t,e,n,r),s===null&&kc(t,e,r,_l,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else kc(t,e,r,null,n)}}var _l=null;function ph(t,e,n,r){if(_l=null,t=Sd(r),t=Ur(t),t!==null)if(e=ii(t),e===null)t=null;else if(n=e.tag,n===13){if(t=I_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _l=t,null}function O_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(aI()){case xd:return 1;case C_:return 4;case ml:case lI:return 16;case k_:return 536870912;default:return 16}default:return 16}}var tr=null,Rd=null,Ga=null;function M_(){if(Ga)return Ga;var t,e=Rd,n=e.length,r,i="value"in tr?tr.value:tr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ga=i.slice(t,1<r?1-r:void 0)}function Ka(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ka(){return!0}function Em(){return!1}function Ot(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ka:Em,this.isPropagationStopped=Em,this}return Ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ka)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ka)},persist:function(){},isPersistent:ka}),e}var ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pd=Ot(ss),Fo=Ae({},ss,{view:0,detail:0}),EI=Ot(Fo),vc,wc,Ds,lu=Ae({},Fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ds&&(Ds&&t.type==="mousemove"?(vc=t.screenX-Ds.screenX,wc=t.screenY-Ds.screenY):wc=vc=0,Ds=t),vc)},movementY:function(t){return"movementY"in t?t.movementY:wc}}),Tm=Ot(lu),TI=Ae({},lu,{dataTransfer:0}),II=Ot(TI),SI=Ae({},Fo,{relatedTarget:0}),Ec=Ot(SI),xI=Ae({},ss,{animationName:0,elapsedTime:0,pseudoElement:0}),AI=Ot(xI),CI=Ae({},ss,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),kI=Ot(CI),RI=Ae({},ss,{data:0}),Im=Ot(RI),PI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},NI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function DI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=NI[t])?!!e[t]:!1}function bd(){return DI}var VI=Ae({},Fo,{key:function(t){if(t.key){var e=PI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ka(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bd,charCode:function(t){return t.type==="keypress"?Ka(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ka(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),LI=Ot(VI),OI=Ae({},lu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sm=Ot(OI),MI=Ae({},Fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bd}),jI=Ot(MI),FI=Ae({},ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),UI=Ot(FI),zI=Ae({},lu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),BI=Ot(zI),$I=[9,13,27,32],Nd=bn&&"CompositionEvent"in window,Qs=null;bn&&"documentMode"in document&&(Qs=document.documentMode);var HI=bn&&"TextEvent"in window&&!Qs,j_=bn&&(!Nd||Qs&&8<Qs&&11>=Qs),xm=" ",Am=!1;function F_(t,e){switch(t){case"keyup":return $I.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function U_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ei=!1;function WI(t,e){switch(t){case"compositionend":return U_(e);case"keypress":return e.which!==32?null:(Am=!0,xm);case"textInput":return t=e.data,t===xm&&Am?null:t;default:return null}}function qI(t,e){if(Ei)return t==="compositionend"||!Nd&&F_(t,e)?(t=M_(),Ga=Rd=tr=null,Ei=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return j_&&e.locale!=="ko"?null:e.data;default:return null}}var GI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!GI[t.type]:e==="textarea"}function z_(t,e,n,r){__(r),e=vl(e,"onChange"),0<e.length&&(n=new Pd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ys=null,go=null;function KI(t){J_(t,0)}function uu(t){var e=Si(t);if(h_(e))return t}function QI(t,e){if(t==="change")return e}var B_=!1;if(bn){var Tc;if(bn){var Ic="oninput"in document;if(!Ic){var km=document.createElement("div");km.setAttribute("oninput","return;"),Ic=typeof km.oninput=="function"}Tc=Ic}else Tc=!1;B_=Tc&&(!document.documentMode||9<document.documentMode)}function Rm(){Ys&&(Ys.detachEvent("onpropertychange",$_),go=Ys=null)}function $_(t){if(t.propertyName==="value"&&uu(go)){var e=[];z_(e,go,t,Sd(t)),T_(KI,e)}}function YI(t,e,n){t==="focusin"?(Rm(),Ys=e,go=n,Ys.attachEvent("onpropertychange",$_)):t==="focusout"&&Rm()}function XI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return uu(go)}function JI(t,e){if(t==="click")return uu(e)}function ZI(t,e){if(t==="input"||t==="change")return uu(e)}function e1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var en=typeof Object.is=="function"?Object.is:e1;function yo(t,e){if(en(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Yc.call(e,i)||!en(t[i],e[i]))return!1}return!0}function Pm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bm(t,e){var n=Pm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pm(n)}}function H_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?H_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function W_(){for(var t=window,e=dl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=dl(t.document)}return e}function Dd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function t1(t){var e=W_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&H_(n.ownerDocument.documentElement,n)){if(r!==null&&Dd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=bm(n,s);var o=bm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var n1=bn&&"documentMode"in document&&11>=document.documentMode,Ti=null,mh=null,Xs=null,gh=!1;function Nm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gh||Ti==null||Ti!==dl(r)||(r=Ti,"selectionStart"in r&&Dd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xs&&yo(Xs,r)||(Xs=r,r=vl(mh,"onSelect"),0<r.length&&(e=new Pd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ti)))}function Ra(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ii={animationend:Ra("Animation","AnimationEnd"),animationiteration:Ra("Animation","AnimationIteration"),animationstart:Ra("Animation","AnimationStart"),transitionend:Ra("Transition","TransitionEnd")},Sc={},q_={};bn&&(q_=document.createElement("div").style,"AnimationEvent"in window||(delete Ii.animationend.animation,delete Ii.animationiteration.animation,delete Ii.animationstart.animation),"TransitionEvent"in window||delete Ii.transitionend.transition);function cu(t){if(Sc[t])return Sc[t];if(!Ii[t])return t;var e=Ii[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in q_)return Sc[t]=e[n];return t}var G_=cu("animationend"),K_=cu("animationiteration"),Q_=cu("animationstart"),Y_=cu("transitionend"),X_=new Map,Dm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(t,e){X_.set(t,e),ri(e,[t])}for(var xc=0;xc<Dm.length;xc++){var Ac=Dm[xc],r1=Ac.toLowerCase(),i1=Ac[0].toUpperCase()+Ac.slice(1);Ar(r1,"on"+i1)}Ar(G_,"onAnimationEnd");Ar(K_,"onAnimationIteration");Ar(Q_,"onAnimationStart");Ar("dblclick","onDoubleClick");Ar("focusin","onFocus");Ar("focusout","onBlur");Ar(Y_,"onTransitionEnd");Hi("onMouseEnter",["mouseout","mouseover"]);Hi("onMouseLeave",["mouseout","mouseover"]);Hi("onPointerEnter",["pointerout","pointerover"]);Hi("onPointerLeave",["pointerout","pointerover"]);ri("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ri("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ri("onBeforeInput",["compositionend","keypress","textInput","paste"]);ri("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ri("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ri("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Us="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),s1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Us));function Vm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,rI(r,e,void 0,t),t.currentTarget=null}function J_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Vm(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Vm(i,l,h),s=u}}}if(pl)throw t=hh,pl=!1,hh=null,t}function ve(t,e){var n=e[Eh];n===void 0&&(n=e[Eh]=new Set);var r=t+"__bubble";n.has(r)||(Z_(e,t,2,!1),n.add(r))}function Cc(t,e,n){var r=0;e&&(r|=4),Z_(n,t,r,e)}var Pa="_reactListening"+Math.random().toString(36).slice(2);function _o(t){if(!t[Pa]){t[Pa]=!0,o_.forEach(function(n){n!=="selectionchange"&&(s1.has(n)||Cc(n,!1,t),Cc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Pa]||(e[Pa]=!0,Cc("selectionchange",!1,e))}}function Z_(t,e,n,r){switch(O_(e)){case 1:var i=vI;break;case 4:i=wI;break;default:i=kd}n=i.bind(null,e,n,t),i=void 0,!ch||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function kc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Ur(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}T_(function(){var h=s,p=Sd(n),m=[];e:{var g=X_.get(t);if(g!==void 0){var E=Pd,k=t;switch(t){case"keypress":if(Ka(n)===0)break e;case"keydown":case"keyup":E=LI;break;case"focusin":k="focus",E=Ec;break;case"focusout":k="blur",E=Ec;break;case"beforeblur":case"afterblur":E=Ec;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Tm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=II;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=jI;break;case G_:case K_:case Q_:E=AI;break;case Y_:E=UI;break;case"scroll":E=EI;break;case"wheel":E=BI;break;case"copy":case"cut":case"paste":E=kI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Sm}var P=(e&4)!==0,D=!P&&t==="scroll",x=P?g!==null?g+"Capture":null:g;P=[];for(var v=h,A;v!==null;){A=v;var L=A.stateNode;if(A.tag===5&&L!==null&&(A=L,x!==null&&(L=ho(v,x),L!=null&&P.push(vo(v,L,A)))),D)break;v=v.return}0<P.length&&(g=new E(g,k,null,n,p),m.push({event:g,listeners:P}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",g&&n!==lh&&(k=n.relatedTarget||n.fromElement)&&(Ur(k)||k[Nn]))break e;if((E||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,E?(k=n.relatedTarget||n.toElement,E=h,k=k?Ur(k):null,k!==null&&(D=ii(k),k!==D||k.tag!==5&&k.tag!==6)&&(k=null)):(E=null,k=h),E!==k)){if(P=Tm,L="onMouseLeave",x="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(P=Sm,L="onPointerLeave",x="onPointerEnter",v="pointer"),D=E==null?g:Si(E),A=k==null?g:Si(k),g=new P(L,v+"leave",E,n,p),g.target=D,g.relatedTarget=A,L=null,Ur(p)===h&&(P=new P(x,v+"enter",k,n,p),P.target=A,P.relatedTarget=D,L=P),D=L,E&&k)t:{for(P=E,x=k,v=0,A=P;A;A=fi(A))v++;for(A=0,L=x;L;L=fi(L))A++;for(;0<v-A;)P=fi(P),v--;for(;0<A-v;)x=fi(x),A--;for(;v--;){if(P===x||x!==null&&P===x.alternate)break t;P=fi(P),x=fi(x)}P=null}else P=null;E!==null&&Lm(m,g,E,P,!1),k!==null&&D!==null&&Lm(m,D,k,P,!0)}}e:{if(g=h?Si(h):window,E=g.nodeName&&g.nodeName.toLowerCase(),E==="select"||E==="input"&&g.type==="file")var $=QI;else if(Cm(g))if(B_)$=ZI;else{$=XI;var B=YI}else(E=g.nodeName)&&E.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&($=JI);if($&&($=$(t,h))){z_(m,$,n,p);break e}B&&B(t,g,h),t==="focusout"&&(B=g._wrapperState)&&B.controlled&&g.type==="number"&&rh(g,"number",g.value)}switch(B=h?Si(h):window,t){case"focusin":(Cm(B)||B.contentEditable==="true")&&(Ti=B,mh=h,Xs=null);break;case"focusout":Xs=mh=Ti=null;break;case"mousedown":gh=!0;break;case"contextmenu":case"mouseup":case"dragend":gh=!1,Nm(m,n,p);break;case"selectionchange":if(n1)break;case"keydown":case"keyup":Nm(m,n,p)}var T;if(Nd)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ei?F_(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(j_&&n.locale!=="ko"&&(Ei||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ei&&(T=M_()):(tr=p,Rd="value"in tr?tr.value:tr.textContent,Ei=!0)),B=vl(h,_),0<B.length&&(_=new Im(_,t,null,n,p),m.push({event:_,listeners:B}),T?_.data=T:(T=U_(n),T!==null&&(_.data=T)))),(T=HI?WI(t,n):qI(t,n))&&(h=vl(h,"onBeforeInput"),0<h.length&&(p=new Im("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:h}),p.data=T))}J_(m,e)})}function vo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function vl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ho(t,n),s!=null&&r.unshift(vo(t,s,i)),s=ho(t,e),s!=null&&r.push(vo(t,s,i))),t=t.return}return r}function fi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Lm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=ho(n,s),u!=null&&o.unshift(vo(n,u,l))):i||(u=ho(n,s),u!=null&&o.push(vo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var o1=/\r\n?/g,a1=/\u0000|\uFFFD/g;function Om(t){return(typeof t=="string"?t:""+t).replace(o1,`
`).replace(a1,"")}function ba(t,e,n){if(e=Om(e),Om(t)!==e&&n)throw Error(U(425))}function wl(){}var yh=null,_h=null;function vh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wh=typeof setTimeout=="function"?setTimeout:void 0,l1=typeof clearTimeout=="function"?clearTimeout:void 0,Mm=typeof Promise=="function"?Promise:void 0,u1=typeof queueMicrotask=="function"?queueMicrotask:typeof Mm<"u"?function(t){return Mm.resolve(null).then(t).catch(c1)}:wh;function c1(t){setTimeout(function(){throw t})}function Rc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),mo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);mo(e)}function ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function jm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var os=Math.random().toString(36).slice(2),an="__reactFiber$"+os,wo="__reactProps$"+os,Nn="__reactContainer$"+os,Eh="__reactEvents$"+os,h1="__reactListeners$"+os,d1="__reactHandles$"+os;function Ur(t){var e=t[an];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Nn]||n[an]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=jm(t);t!==null;){if(n=t[an])return n;t=jm(t)}return e}t=n,n=t.parentNode}return null}function Uo(t){return t=t[an]||t[Nn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Si(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function hu(t){return t[wo]||null}var Th=[],xi=-1;function Cr(t){return{current:t}}function Ee(t){0>xi||(t.current=Th[xi],Th[xi]=null,xi--)}function ge(t,e){xi++,Th[xi]=t.current,t.current=e}var vr={},ct=Cr(vr),St=Cr(!1),qr=vr;function Wi(t,e){var n=t.type.contextTypes;if(!n)return vr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function xt(t){return t=t.childContextTypes,t!=null}function El(){Ee(St),Ee(ct)}function Fm(t,e,n){if(ct.current!==vr)throw Error(U(168));ge(ct,e),ge(St,n)}function ev(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,YT(t)||"Unknown",i));return Ae({},n,r)}function Tl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vr,qr=ct.current,ge(ct,t),ge(St,St.current),!0}function Um(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=ev(t,e,qr),r.__reactInternalMemoizedMergedChildContext=t,Ee(St),Ee(ct),ge(ct,t)):Ee(St),ge(St,n)}var In=null,du=!1,Pc=!1;function tv(t){In===null?In=[t]:In.push(t)}function f1(t){du=!0,tv(t)}function kr(){if(!Pc&&In!==null){Pc=!0;var t=0,e=fe;try{var n=In;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}In=null,du=!1}catch(i){throw In!==null&&(In=In.slice(t+1)),A_(xd,kr),i}finally{fe=e,Pc=!1}}return null}var Ai=[],Ci=0,Il=null,Sl=0,jt=[],Ft=0,Gr=null,Sn=1,xn="";function Mr(t,e){Ai[Ci++]=Sl,Ai[Ci++]=Il,Il=t,Sl=e}function nv(t,e,n){jt[Ft++]=Sn,jt[Ft++]=xn,jt[Ft++]=Gr,Gr=t;var r=Sn;t=xn;var i=32-Jt(r)-1;r&=~(1<<i),n+=1;var s=32-Jt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Sn=1<<32-Jt(e)+i|n<<i|r,xn=s+t}else Sn=1<<s|n<<i|r,xn=t}function Vd(t){t.return!==null&&(Mr(t,1),nv(t,1,0))}function Ld(t){for(;t===Il;)Il=Ai[--Ci],Ai[Ci]=null,Sl=Ai[--Ci],Ai[Ci]=null;for(;t===Gr;)Gr=jt[--Ft],jt[Ft]=null,xn=jt[--Ft],jt[Ft]=null,Sn=jt[--Ft],jt[Ft]=null}var Nt=null,Pt=null,Te=!1,Yt=null;function rv(t,e){var n=zt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function zm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Nt=t,Pt=ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Nt=t,Pt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gr!==null?{id:Sn,overflow:xn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=zt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Nt=t,Pt=null,!0):!1;default:return!1}}function Ih(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Sh(t){if(Te){var e=Pt;if(e){var n=e;if(!zm(t,e)){if(Ih(t))throw Error(U(418));e=ar(n.nextSibling);var r=Nt;e&&zm(t,e)?rv(r,n):(t.flags=t.flags&-4097|2,Te=!1,Nt=t)}}else{if(Ih(t))throw Error(U(418));t.flags=t.flags&-4097|2,Te=!1,Nt=t}}}function Bm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nt=t}function Na(t){if(t!==Nt)return!1;if(!Te)return Bm(t),Te=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!vh(t.type,t.memoizedProps)),e&&(e=Pt)){if(Ih(t))throw iv(),Error(U(418));for(;e;)rv(t,e),e=ar(e.nextSibling)}if(Bm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pt=ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pt=null}}else Pt=Nt?ar(t.stateNode.nextSibling):null;return!0}function iv(){for(var t=Pt;t;)t=ar(t.nextSibling)}function qi(){Pt=Nt=null,Te=!1}function Od(t){Yt===null?Yt=[t]:Yt.push(t)}var p1=Fn.ReactCurrentBatchConfig;function Vs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function Da(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $m(t){var e=t._init;return e(t._payload)}function sv(t){function e(x,v){if(t){var A=x.deletions;A===null?(x.deletions=[v],x.flags|=16):A.push(v)}}function n(x,v){if(!t)return null;for(;v!==null;)e(x,v),v=v.sibling;return null}function r(x,v){for(x=new Map;v!==null;)v.key!==null?x.set(v.key,v):x.set(v.index,v),v=v.sibling;return x}function i(x,v){return x=hr(x,v),x.index=0,x.sibling=null,x}function s(x,v,A){return x.index=A,t?(A=x.alternate,A!==null?(A=A.index,A<v?(x.flags|=2,v):A):(x.flags|=2,v)):(x.flags|=1048576,v)}function o(x){return t&&x.alternate===null&&(x.flags|=2),x}function l(x,v,A,L){return v===null||v.tag!==6?(v=Mc(A,x.mode,L),v.return=x,v):(v=i(v,A),v.return=x,v)}function u(x,v,A,L){var $=A.type;return $===wi?p(x,v,A.props.children,L,A.key):v!==null&&(v.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Gn&&$m($)===v.type)?(L=i(v,A.props),L.ref=Vs(x,v,A),L.return=x,L):(L=tl(A.type,A.key,A.props,null,x.mode,L),L.ref=Vs(x,v,A),L.return=x,L)}function h(x,v,A,L){return v===null||v.tag!==4||v.stateNode.containerInfo!==A.containerInfo||v.stateNode.implementation!==A.implementation?(v=jc(A,x.mode,L),v.return=x,v):(v=i(v,A.children||[]),v.return=x,v)}function p(x,v,A,L,$){return v===null||v.tag!==7?(v=Wr(A,x.mode,L,$),v.return=x,v):(v=i(v,A),v.return=x,v)}function m(x,v,A){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Mc(""+v,x.mode,A),v.return=x,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ta:return A=tl(v.type,v.key,v.props,null,x.mode,A),A.ref=Vs(x,null,v),A.return=x,A;case vi:return v=jc(v,x.mode,A),v.return=x,v;case Gn:var L=v._init;return m(x,L(v._payload),A)}if(js(v)||Rs(v))return v=Wr(v,x.mode,A,null),v.return=x,v;Da(x,v)}return null}function g(x,v,A,L){var $=v!==null?v.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return $!==null?null:l(x,v,""+A,L);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Ta:return A.key===$?u(x,v,A,L):null;case vi:return A.key===$?h(x,v,A,L):null;case Gn:return $=A._init,g(x,v,$(A._payload),L)}if(js(A)||Rs(A))return $!==null?null:p(x,v,A,L,null);Da(x,A)}return null}function E(x,v,A,L,$){if(typeof L=="string"&&L!==""||typeof L=="number")return x=x.get(A)||null,l(v,x,""+L,$);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Ta:return x=x.get(L.key===null?A:L.key)||null,u(v,x,L,$);case vi:return x=x.get(L.key===null?A:L.key)||null,h(v,x,L,$);case Gn:var B=L._init;return E(x,v,A,B(L._payload),$)}if(js(L)||Rs(L))return x=x.get(A)||null,p(v,x,L,$,null);Da(v,L)}return null}function k(x,v,A,L){for(var $=null,B=null,T=v,_=v=0,w=null;T!==null&&_<A.length;_++){T.index>_?(w=T,T=null):w=T.sibling;var S=g(x,T,A[_],L);if(S===null){T===null&&(T=w);break}t&&T&&S.alternate===null&&e(x,T),v=s(S,v,_),B===null?$=S:B.sibling=S,B=S,T=w}if(_===A.length)return n(x,T),Te&&Mr(x,_),$;if(T===null){for(;_<A.length;_++)T=m(x,A[_],L),T!==null&&(v=s(T,v,_),B===null?$=T:B.sibling=T,B=T);return Te&&Mr(x,_),$}for(T=r(x,T);_<A.length;_++)w=E(T,x,_,A[_],L),w!==null&&(t&&w.alternate!==null&&T.delete(w.key===null?_:w.key),v=s(w,v,_),B===null?$=w:B.sibling=w,B=w);return t&&T.forEach(function(C){return e(x,C)}),Te&&Mr(x,_),$}function P(x,v,A,L){var $=Rs(A);if(typeof $!="function")throw Error(U(150));if(A=$.call(A),A==null)throw Error(U(151));for(var B=$=null,T=v,_=v=0,w=null,S=A.next();T!==null&&!S.done;_++,S=A.next()){T.index>_?(w=T,T=null):w=T.sibling;var C=g(x,T,S.value,L);if(C===null){T===null&&(T=w);break}t&&T&&C.alternate===null&&e(x,T),v=s(C,v,_),B===null?$=C:B.sibling=C,B=C,T=w}if(S.done)return n(x,T),Te&&Mr(x,_),$;if(T===null){for(;!S.done;_++,S=A.next())S=m(x,S.value,L),S!==null&&(v=s(S,v,_),B===null?$=S:B.sibling=S,B=S);return Te&&Mr(x,_),$}for(T=r(x,T);!S.done;_++,S=A.next())S=E(T,x,_,S.value,L),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?_:S.key),v=s(S,v,_),B===null?$=S:B.sibling=S,B=S);return t&&T.forEach(function(R){return e(x,R)}),Te&&Mr(x,_),$}function D(x,v,A,L){if(typeof A=="object"&&A!==null&&A.type===wi&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Ta:e:{for(var $=A.key,B=v;B!==null;){if(B.key===$){if($=A.type,$===wi){if(B.tag===7){n(x,B.sibling),v=i(B,A.props.children),v.return=x,x=v;break e}}else if(B.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Gn&&$m($)===B.type){n(x,B.sibling),v=i(B,A.props),v.ref=Vs(x,B,A),v.return=x,x=v;break e}n(x,B);break}else e(x,B);B=B.sibling}A.type===wi?(v=Wr(A.props.children,x.mode,L,A.key),v.return=x,x=v):(L=tl(A.type,A.key,A.props,null,x.mode,L),L.ref=Vs(x,v,A),L.return=x,x=L)}return o(x);case vi:e:{for(B=A.key;v!==null;){if(v.key===B)if(v.tag===4&&v.stateNode.containerInfo===A.containerInfo&&v.stateNode.implementation===A.implementation){n(x,v.sibling),v=i(v,A.children||[]),v.return=x,x=v;break e}else{n(x,v);break}else e(x,v);v=v.sibling}v=jc(A,x.mode,L),v.return=x,x=v}return o(x);case Gn:return B=A._init,D(x,v,B(A._payload),L)}if(js(A))return k(x,v,A,L);if(Rs(A))return P(x,v,A,L);Da(x,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,v!==null&&v.tag===6?(n(x,v.sibling),v=i(v,A),v.return=x,x=v):(n(x,v),v=Mc(A,x.mode,L),v.return=x,x=v),o(x)):n(x,v)}return D}var Gi=sv(!0),ov=sv(!1),xl=Cr(null),Al=null,ki=null,Md=null;function jd(){Md=ki=Al=null}function Fd(t){var e=xl.current;Ee(xl),t._currentValue=e}function xh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Mi(t,e){Al=t,Md=ki=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(It=!0),t.firstContext=null)}function Ht(t){var e=t._currentValue;if(Md!==t)if(t={context:t,memoizedValue:e,next:null},ki===null){if(Al===null)throw Error(U(308));ki=t,Al.dependencies={lanes:0,firstContext:t}}else ki=ki.next=t;return e}var zr=null;function Ud(t){zr===null?zr=[t]:zr.push(t)}function av(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ud(e)):(n.next=i.next,i.next=n),e.interleaved=n,Dn(t,r)}function Dn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Kn=!1;function zd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Rn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function lr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Dn(t,n)}return i=r.interleaved,i===null?(e.next=e,Ud(r)):(e.next=i.next,i.next=e),r.interleaved=e,Dn(t,n)}function Qa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ad(t,n)}}function Hm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Cl(t,e,n,r){var i=t.updateQueue;Kn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=h:l.next=h,p.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,p=h=u=null,l=s;do{var g=l.lane,E=l.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:E,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=t,P=l;switch(g=e,E=n,P.tag){case 1:if(k=P.payload,typeof k=="function"){m=k.call(E,m,g);break e}m=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=P.payload,g=typeof k=="function"?k.call(E,m,g):k,g==null)break e;m=Ae({},m,g);break e;case 2:Kn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else E={eventTime:E,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(h=p=E,u=m):p=p.next=E,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(p===null&&(u=m),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Qr|=o,t.lanes=o,t.memoizedState=m}}function Wm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var zo={},un=Cr(zo),Eo=Cr(zo),To=Cr(zo);function Br(t){if(t===zo)throw Error(U(174));return t}function Bd(t,e){switch(ge(To,e),ge(Eo,t),ge(un,zo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:sh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=sh(e,t)}Ee(un),ge(un,e)}function Ki(){Ee(un),Ee(Eo),Ee(To)}function uv(t){Br(To.current);var e=Br(un.current),n=sh(e,t.type);e!==n&&(ge(Eo,t),ge(un,n))}function $d(t){Eo.current===t&&(Ee(un),Ee(Eo))}var Se=Cr(0);function kl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bc=[];function Hd(){for(var t=0;t<bc.length;t++)bc[t]._workInProgressVersionPrimary=null;bc.length=0}var Ya=Fn.ReactCurrentDispatcher,Nc=Fn.ReactCurrentBatchConfig,Kr=0,xe=null,Fe=null,He=null,Rl=!1,Js=!1,Io=0,m1=0;function it(){throw Error(U(321))}function Wd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!en(t[n],e[n]))return!1;return!0}function qd(t,e,n,r,i,s){if(Kr=s,xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ya.current=t===null||t.memoizedState===null?v1:w1,t=n(r,i),Js){s=0;do{if(Js=!1,Io=0,25<=s)throw Error(U(301));s+=1,He=Fe=null,e.updateQueue=null,Ya.current=E1,t=n(r,i)}while(Js)}if(Ya.current=Pl,e=Fe!==null&&Fe.next!==null,Kr=0,He=Fe=xe=null,Rl=!1,e)throw Error(U(300));return t}function Gd(){var t=Io!==0;return Io=0,t}function sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?xe.memoizedState=He=t:He=He.next=t,He}function Wt(){if(Fe===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var e=He===null?xe.memoizedState:He.next;if(e!==null)He=e,Fe=t;else{if(t===null)throw Error(U(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},He===null?xe.memoizedState=He=t:He=He.next=t}return He}function So(t,e){return typeof e=="function"?e(t):e}function Dc(t){var e=Wt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Fe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var p=h.lane;if((Kr&p)===p)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:p,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,xe.lanes|=p,Qr|=p}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,en(r,e.memoizedState)||(It=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,xe.lanes|=s,Qr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Vc(t){var e=Wt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);en(s,e.memoizedState)||(It=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function cv(){}function hv(t,e){var n=xe,r=Wt(),i=e(),s=!en(r.memoizedState,i);if(s&&(r.memoizedState=i,It=!0),r=r.queue,Kd(pv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||He!==null&&He.memoizedState.tag&1){if(n.flags|=2048,xo(9,fv.bind(null,n,r,i,e),void 0,null),qe===null)throw Error(U(349));Kr&30||dv(n,e,i)}return i}function dv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function fv(t,e,n,r){e.value=n,e.getSnapshot=r,mv(e)&&gv(t)}function pv(t,e,n){return n(function(){mv(e)&&gv(t)})}function mv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!en(t,n)}catch{return!0}}function gv(t){var e=Dn(t,1);e!==null&&Zt(e,t,1,-1)}function qm(t){var e=sn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:So,lastRenderedState:t},e.queue=t,t=t.dispatch=_1.bind(null,xe,t),[e.memoizedState,t]}function xo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function yv(){return Wt().memoizedState}function Xa(t,e,n,r){var i=sn();xe.flags|=t,i.memoizedState=xo(1|e,n,void 0,r===void 0?null:r)}function fu(t,e,n,r){var i=Wt();r=r===void 0?null:r;var s=void 0;if(Fe!==null){var o=Fe.memoizedState;if(s=o.destroy,r!==null&&Wd(r,o.deps)){i.memoizedState=xo(e,n,s,r);return}}xe.flags|=t,i.memoizedState=xo(1|e,n,s,r)}function Gm(t,e){return Xa(8390656,8,t,e)}function Kd(t,e){return fu(2048,8,t,e)}function _v(t,e){return fu(4,2,t,e)}function vv(t,e){return fu(4,4,t,e)}function wv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ev(t,e,n){return n=n!=null?n.concat([t]):null,fu(4,4,wv.bind(null,e,t),n)}function Qd(){}function Tv(t,e){var n=Wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Wd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Iv(t,e){var n=Wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Wd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Sv(t,e,n){return Kr&21?(en(n,e)||(n=R_(),xe.lanes|=n,Qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,It=!0),t.memoizedState=n)}function g1(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=Nc.transition;Nc.transition={};try{t(!1),e()}finally{fe=n,Nc.transition=r}}function xv(){return Wt().memoizedState}function y1(t,e,n){var r=cr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Av(t))Cv(e,n);else if(n=av(t,e,n,r),n!==null){var i=yt();Zt(n,t,r,i),kv(n,e,r)}}function _1(t,e,n){var r=cr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Av(t))Cv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,en(l,o)){var u=e.interleaved;u===null?(i.next=i,Ud(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=av(t,e,i,r),n!==null&&(i=yt(),Zt(n,t,r,i),kv(n,e,r))}}function Av(t){var e=t.alternate;return t===xe||e!==null&&e===xe}function Cv(t,e){Js=Rl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function kv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ad(t,n)}}var Pl={readContext:Ht,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},v1={readContext:Ht,useCallback:function(t,e){return sn().memoizedState=[t,e===void 0?null:e],t},useContext:Ht,useEffect:Gm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xa(4194308,4,wv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xa(4,2,t,e)},useMemo:function(t,e){var n=sn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=sn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=y1.bind(null,xe,t),[r.memoizedState,t]},useRef:function(t){var e=sn();return t={current:t},e.memoizedState=t},useState:qm,useDebugValue:Qd,useDeferredValue:function(t){return sn().memoizedState=t},useTransition:function(){var t=qm(!1),e=t[0];return t=g1.bind(null,t[1]),sn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=xe,i=sn();if(Te){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),qe===null)throw Error(U(349));Kr&30||dv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Gm(pv.bind(null,r,s,t),[t]),r.flags|=2048,xo(9,fv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=sn(),e=qe.identifierPrefix;if(Te){var n=xn,r=Sn;n=(r&~(1<<32-Jt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Io++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=m1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},w1={readContext:Ht,useCallback:Tv,useContext:Ht,useEffect:Kd,useImperativeHandle:Ev,useInsertionEffect:_v,useLayoutEffect:vv,useMemo:Iv,useReducer:Dc,useRef:yv,useState:function(){return Dc(So)},useDebugValue:Qd,useDeferredValue:function(t){var e=Wt();return Sv(e,Fe.memoizedState,t)},useTransition:function(){var t=Dc(So)[0],e=Wt().memoizedState;return[t,e]},useMutableSource:cv,useSyncExternalStore:hv,useId:xv,unstable_isNewReconciler:!1},E1={readContext:Ht,useCallback:Tv,useContext:Ht,useEffect:Kd,useImperativeHandle:Ev,useInsertionEffect:_v,useLayoutEffect:vv,useMemo:Iv,useReducer:Vc,useRef:yv,useState:function(){return Vc(So)},useDebugValue:Qd,useDeferredValue:function(t){var e=Wt();return Fe===null?e.memoizedState=t:Sv(e,Fe.memoizedState,t)},useTransition:function(){var t=Vc(So)[0],e=Wt().memoizedState;return[t,e]},useMutableSource:cv,useSyncExternalStore:hv,useId:xv,unstable_isNewReconciler:!1};function Kt(t,e){if(t&&t.defaultProps){e=Ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ah(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var pu={isMounted:function(t){return(t=t._reactInternals)?ii(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=yt(),i=cr(t),s=Rn(r,i);s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,i),e!==null&&(Zt(e,t,i,r),Qa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=yt(),i=cr(t),s=Rn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,i),e!==null&&(Zt(e,t,i,r),Qa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=yt(),r=cr(t),i=Rn(n,r);i.tag=2,e!=null&&(i.callback=e),e=lr(t,i,r),e!==null&&(Zt(e,t,r,n),Qa(e,t,r))}};function Km(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!yo(n,r)||!yo(i,s):!0}function Rv(t,e,n){var r=!1,i=vr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ht(s):(i=xt(e)?qr:ct.current,r=e.contextTypes,s=(r=r!=null)?Wi(t,i):vr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=pu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Qm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&pu.enqueueReplaceState(e,e.state,null)}function Ch(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},zd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ht(s):(s=xt(e)?qr:ct.current,i.context=Wi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ah(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&pu.enqueueReplaceState(i,i.state,null),Cl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Qi(t,e){try{var n="",r=e;do n+=QT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Lc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function kh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var T1=typeof WeakMap=="function"?WeakMap:Map;function Pv(t,e,n){n=Rn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Nl||(Nl=!0,jh=r),kh(t,e)},n}function bv(t,e,n){n=Rn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){kh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){kh(t,e),typeof r!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ym(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new T1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=O1.bind(null,t,e,n),e.then(t,t))}function Xm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Rn(-1,1),e.tag=2,lr(n,e,1))),n.lanes|=1),t)}var I1=Fn.ReactCurrentOwner,It=!1;function pt(t,e,n,r){e.child=t===null?ov(e,null,n,r):Gi(e,t.child,n,r)}function Zm(t,e,n,r,i){n=n.render;var s=e.ref;return Mi(e,i),r=qd(t,e,n,r,s,i),n=Gd(),t!==null&&!It?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Vn(t,e,i)):(Te&&n&&Vd(e),e.flags|=1,pt(t,e,r,i),e.child)}function eg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!rf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Nv(t,e,s,r,i)):(t=tl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:yo,n(o,r)&&t.ref===e.ref)return Vn(t,e,i)}return e.flags|=1,t=hr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Nv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(yo(s,r)&&t.ref===e.ref)if(It=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(It=!0);else return e.lanes=t.lanes,Vn(t,e,i)}return Rh(t,e,n,r,i)}function Dv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Pi,kt),kt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(Pi,kt),kt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ge(Pi,kt),kt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ge(Pi,kt),kt|=r;return pt(t,e,i,n),e.child}function Vv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Rh(t,e,n,r,i){var s=xt(n)?qr:ct.current;return s=Wi(e,s),Mi(e,i),n=qd(t,e,n,r,s,i),r=Gd(),t!==null&&!It?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Vn(t,e,i)):(Te&&r&&Vd(e),e.flags|=1,pt(t,e,n,i),e.child)}function tg(t,e,n,r,i){if(xt(n)){var s=!0;Tl(e)}else s=!1;if(Mi(e,i),e.stateNode===null)Ja(t,e),Rv(e,n,r),Ch(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Ht(h):(h=xt(n)?qr:ct.current,h=Wi(e,h));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Qm(e,o,r,h),Kn=!1;var g=e.memoizedState;o.state=g,Cl(e,r,o,i),u=e.memoizedState,l!==r||g!==u||St.current||Kn?(typeof p=="function"&&(Ah(e,n,p,r),u=e.memoizedState),(l=Kn||Km(e,n,l,r,g,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,lv(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Kt(e.type,l),o.props=h,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ht(u):(u=xt(n)?qr:ct.current,u=Wi(e,u));var E=n.getDerivedStateFromProps;(p=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&Qm(e,o,r,u),Kn=!1,g=e.memoizedState,o.state=g,Cl(e,r,o,i);var k=e.memoizedState;l!==m||g!==k||St.current||Kn?(typeof E=="function"&&(Ah(e,n,E,r),k=e.memoizedState),(h=Kn||Km(e,n,h,r,g,k,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),o.props=r,o.state=k,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Ph(t,e,n,r,s,i)}function Ph(t,e,n,r,i,s){Vv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Um(e,n,!1),Vn(t,e,s);r=e.stateNode,I1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Gi(e,t.child,null,s),e.child=Gi(e,null,l,s)):pt(t,e,l,s),e.memoizedState=r.state,i&&Um(e,n,!0),e.child}function Lv(t){var e=t.stateNode;e.pendingContext?Fm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Fm(t,e.context,!1),Bd(t,e.containerInfo)}function ng(t,e,n,r,i){return qi(),Od(i),e.flags|=256,pt(t,e,n,r),e.child}var bh={dehydrated:null,treeContext:null,retryLane:0};function Nh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ov(t,e,n){var r=e.pendingProps,i=Se.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ge(Se,i&1),t===null)return Sh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=yu(o,r,0,null),t=Wr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Nh(n),e.memoizedState=bh,t):Yd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return S1(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=hr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=hr(l,s):(s=Wr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Nh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=bh,r}return s=t.child,t=s.sibling,r=hr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Yd(t,e){return e=yu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Va(t,e,n,r){return r!==null&&Od(r),Gi(e,t.child,null,n),t=Yd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function S1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Lc(Error(U(422))),Va(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=yu({mode:"visible",children:r.children},i,0,null),s=Wr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Gi(e,t.child,null,o),e.child.memoizedState=Nh(o),e.memoizedState=bh,s);if(!(e.mode&1))return Va(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=Lc(s,r,void 0),Va(t,e,o,r)}if(l=(o&t.childLanes)!==0,It||l){if(r=qe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Dn(t,i),Zt(r,t,i,-1))}return nf(),r=Lc(Error(U(421))),Va(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=M1.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Pt=ar(i.nextSibling),Nt=e,Te=!0,Yt=null,t!==null&&(jt[Ft++]=Sn,jt[Ft++]=xn,jt[Ft++]=Gr,Sn=t.id,xn=t.overflow,Gr=e),e=Yd(e,r.children),e.flags|=4096,e)}function rg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),xh(t.return,e,n)}function Oc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Mv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(pt(t,e,r.children,n),r=Se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rg(t,n,e);else if(t.tag===19)rg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(Se,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&kl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Oc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&kl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Oc(e,!0,n,null,s);break;case"together":Oc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ja(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Vn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=hr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=hr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function x1(t,e,n){switch(e.tag){case 3:Lv(e),qi();break;case 5:uv(e);break;case 1:xt(e.type)&&Tl(e);break;case 4:Bd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ge(xl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(Se,Se.current&1),e.flags|=128,null):n&e.child.childLanes?Ov(t,e,n):(ge(Se,Se.current&1),t=Vn(t,e,n),t!==null?t.sibling:null);ge(Se,Se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Mv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Se,Se.current),r)break;return null;case 22:case 23:return e.lanes=0,Dv(t,e,n)}return Vn(t,e,n)}var jv,Dh,Fv,Uv;jv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Dh=function(){};Fv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Br(un.current);var s=null;switch(n){case"input":i=th(t,i),r=th(t,r),s=[];break;case"select":i=Ae({},i,{value:void 0}),r=Ae({},r,{value:void 0}),s=[];break;case"textarea":i=ih(t,i),r=ih(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=wl)}oh(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(uo.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(uo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&ve("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};Uv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ls(t,e){if(!Te)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function st(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function A1(t,e,n){var r=e.pendingProps;switch(Ld(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(e),null;case 1:return xt(e.type)&&El(),st(e),null;case 3:return r=e.stateNode,Ki(),Ee(St),Ee(ct),Hd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Na(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yt!==null&&(zh(Yt),Yt=null))),Dh(t,e),st(e),null;case 5:$d(e);var i=Br(To.current);if(n=e.type,t!==null&&e.stateNode!=null)Fv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return st(e),null}if(t=Br(un.current),Na(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[an]=e,r[wo]=s,t=(e.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<Us.length;i++)ve(Us[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":dm(r,s),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ve("invalid",r);break;case"textarea":pm(r,s),ve("invalid",r)}oh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ba(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ba(r.textContent,l,t),i=["children",""+l]):uo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ve("scroll",r)}switch(n){case"input":Ia(r),fm(r,s,!0);break;case"textarea":Ia(r),mm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=wl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=p_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[an]=e,t[wo]=r,jv(t,e,!1,!1),e.stateNode=t;e:{switch(o=ah(n,r),n){case"dialog":ve("cancel",t),ve("close",t),i=r;break;case"iframe":case"object":case"embed":ve("load",t),i=r;break;case"video":case"audio":for(i=0;i<Us.length;i++)ve(Us[i],t);i=r;break;case"source":ve("error",t),i=r;break;case"img":case"image":case"link":ve("error",t),ve("load",t),i=r;break;case"details":ve("toggle",t),i=r;break;case"input":dm(t,r),i=th(t,r),ve("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ae({},r,{value:void 0}),ve("invalid",t);break;case"textarea":pm(t,r),i=ih(t,r),ve("invalid",t);break;default:i=r}oh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?y_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&m_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&co(t,u):typeof u=="number"&&co(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(uo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ve("scroll",t):u!=null&&wd(t,s,u,o))}switch(n){case"input":Ia(t),fm(t,r,!1);break;case"textarea":Ia(t),mm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+_r(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Di(t,!!r.multiple,s,!1):r.defaultValue!=null&&Di(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=wl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return st(e),null;case 6:if(t&&e.stateNode!=null)Uv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Br(To.current),Br(un.current),Na(e)){if(r=e.stateNode,n=e.memoizedProps,r[an]=e,(s=r.nodeValue!==n)&&(t=Nt,t!==null))switch(t.tag){case 3:ba(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ba(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[an]=e,e.stateNode=r}return st(e),null;case 13:if(Ee(Se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Te&&Pt!==null&&e.mode&1&&!(e.flags&128))iv(),qi(),e.flags|=98560,s=!1;else if(s=Na(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[an]=e}else qi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;st(e),s=!1}else Yt!==null&&(zh(Yt),Yt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Se.current&1?Ue===0&&(Ue=3):nf())),e.updateQueue!==null&&(e.flags|=4),st(e),null);case 4:return Ki(),Dh(t,e),t===null&&_o(e.stateNode.containerInfo),st(e),null;case 10:return Fd(e.type._context),st(e),null;case 17:return xt(e.type)&&El(),st(e),null;case 19:if(Ee(Se),s=e.memoizedState,s===null)return st(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ls(s,!1);else{if(Ue!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=kl(t),o!==null){for(e.flags|=128,Ls(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(Se,Se.current&1|2),e.child}t=t.sibling}s.tail!==null&&De()>Yi&&(e.flags|=128,r=!0,Ls(s,!1),e.lanes=4194304)}else{if(!r)if(t=kl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ls(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Te)return st(e),null}else 2*De()-s.renderingStartTime>Yi&&n!==1073741824&&(e.flags|=128,r=!0,Ls(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=De(),e.sibling=null,n=Se.current,ge(Se,r?n&1|2:n&1),e):(st(e),null);case 22:case 23:return tf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?kt&1073741824&&(st(e),e.subtreeFlags&6&&(e.flags|=8192)):st(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function C1(t,e){switch(Ld(e),e.tag){case 1:return xt(e.type)&&El(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ki(),Ee(St),Ee(ct),Hd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $d(e),null;case 13:if(Ee(Se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));qi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(Se),null;case 4:return Ki(),null;case 10:return Fd(e.type._context),null;case 22:case 23:return tf(),null;case 24:return null;default:return null}}var La=!1,ut=!1,k1=typeof WeakSet=="function"?WeakSet:Set,q=null;function Ri(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(t,e,r)}else n.current=null}function Vh(t,e,n){try{n()}catch(r){Re(t,e,r)}}var ig=!1;function R1(t,e){if(yh=yl,t=W_(),Dd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,p=0,m=t,g=null;t:for(;;){for(var E;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(E=m.firstChild)!==null;)g=m,m=E;for(;;){if(m===t)break t;if(g===n&&++h===i&&(l=o),g===s&&++p===r&&(u=o),(E=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=E}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(_h={focusedElem:t,selectionRange:n},yl=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var P=k.memoizedProps,D=k.memoizedState,x=e.stateNode,v=x.getSnapshotBeforeUpdate(e.elementType===e.type?P:Kt(e.type,P),D);x.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(L){Re(e,e.return,L)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return k=ig,ig=!1,k}function Zs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Vh(e,n,s)}i=i.next}while(i!==r)}}function mu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Lh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function zv(t){var e=t.alternate;e!==null&&(t.alternate=null,zv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[an],delete e[wo],delete e[Eh],delete e[h1],delete e[d1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Bv(t){return t.tag===5||t.tag===3||t.tag===4}function sg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Bv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Oh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=wl));else if(r!==4&&(t=t.child,t!==null))for(Oh(t,e,n),t=t.sibling;t!==null;)Oh(t,e,n),t=t.sibling}function Mh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Mh(t,e,n),t=t.sibling;t!==null;)Mh(t,e,n),t=t.sibling}var Ke=null,Qt=!1;function Hn(t,e,n){for(n=n.child;n!==null;)$v(t,e,n),n=n.sibling}function $v(t,e,n){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(au,n)}catch{}switch(n.tag){case 5:ut||Ri(n,e);case 6:var r=Ke,i=Qt;Ke=null,Hn(t,e,n),Ke=r,Qt=i,Ke!==null&&(Qt?(t=Ke,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ke.removeChild(n.stateNode));break;case 18:Ke!==null&&(Qt?(t=Ke,n=n.stateNode,t.nodeType===8?Rc(t.parentNode,n):t.nodeType===1&&Rc(t,n),mo(t)):Rc(Ke,n.stateNode));break;case 4:r=Ke,i=Qt,Ke=n.stateNode.containerInfo,Qt=!0,Hn(t,e,n),Ke=r,Qt=i;break;case 0:case 11:case 14:case 15:if(!ut&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Vh(n,e,o),i=i.next}while(i!==r)}Hn(t,e,n);break;case 1:if(!ut&&(Ri(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Re(n,e,l)}Hn(t,e,n);break;case 21:Hn(t,e,n);break;case 22:n.mode&1?(ut=(r=ut)||n.memoizedState!==null,Hn(t,e,n),ut=r):Hn(t,e,n);break;default:Hn(t,e,n)}}function og(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new k1),e.forEach(function(r){var i=j1.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Gt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ke=l.stateNode,Qt=!1;break e;case 3:Ke=l.stateNode.containerInfo,Qt=!0;break e;case 4:Ke=l.stateNode.containerInfo,Qt=!0;break e}l=l.return}if(Ke===null)throw Error(U(160));$v(s,o,i),Ke=null,Qt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Re(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Hv(e,t),e=e.sibling}function Hv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gt(e,t),rn(t),r&4){try{Zs(3,t,t.return),mu(3,t)}catch(P){Re(t,t.return,P)}try{Zs(5,t,t.return)}catch(P){Re(t,t.return,P)}}break;case 1:Gt(e,t),rn(t),r&512&&n!==null&&Ri(n,n.return);break;case 5:if(Gt(e,t),rn(t),r&512&&n!==null&&Ri(n,n.return),t.flags&32){var i=t.stateNode;try{co(i,"")}catch(P){Re(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&d_(i,s),ah(l,o);var h=ah(l,s);for(o=0;o<u.length;o+=2){var p=u[o],m=u[o+1];p==="style"?y_(i,m):p==="dangerouslySetInnerHTML"?m_(i,m):p==="children"?co(i,m):wd(i,p,m,h)}switch(l){case"input":nh(i,s);break;case"textarea":f_(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?Di(i,!!s.multiple,E,!1):g!==!!s.multiple&&(s.defaultValue!=null?Di(i,!!s.multiple,s.defaultValue,!0):Di(i,!!s.multiple,s.multiple?[]:"",!1))}i[wo]=s}catch(P){Re(t,t.return,P)}}break;case 6:if(Gt(e,t),rn(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Re(t,t.return,P)}}break;case 3:if(Gt(e,t),rn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{mo(e.containerInfo)}catch(P){Re(t,t.return,P)}break;case 4:Gt(e,t),rn(t);break;case 13:Gt(e,t),rn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Zd=De())),r&4&&og(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(ut=(h=ut)||p,Gt(e,t),ut=h):Gt(e,t),rn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!p&&t.mode&1)for(q=t,p=t.child;p!==null;){for(m=q=p;q!==null;){switch(g=q,E=g.child,g.tag){case 0:case 11:case 14:case 15:Zs(4,g,g.return);break;case 1:Ri(g,g.return);var k=g.stateNode;if(typeof k.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(P){Re(r,n,P)}}break;case 5:Ri(g,g.return);break;case 22:if(g.memoizedState!==null){lg(m);continue}}E!==null?(E.return=g,q=E):lg(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{i=m.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=g_("display",o))}catch(P){Re(t,t.return,P)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(P){Re(t,t.return,P)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Gt(e,t),rn(t),r&4&&og(t);break;case 21:break;default:Gt(e,t),rn(t)}}function rn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Bv(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(co(i,""),r.flags&=-33);var s=sg(t);Mh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=sg(t);Oh(t,l,o);break;default:throw Error(U(161))}}catch(u){Re(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function P1(t,e,n){q=t,Wv(t)}function Wv(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||La;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ut;l=La;var h=ut;if(La=o,(ut=u)&&!h)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?ug(i):u!==null?(u.return=o,q=u):ug(i);for(;s!==null;)q=s,Wv(s),s=s.sibling;q=i,La=l,ut=h}ag(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):ag(t)}}function ag(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ut||mu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ut)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Kt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Wm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Wm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var p=h.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&mo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}ut||e.flags&512&&Lh(e)}catch(g){Re(e,e.return,g)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function lg(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function ug(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{mu(4,e)}catch(u){Re(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Re(e,i,u)}}var s=e.return;try{Lh(e)}catch(u){Re(e,s,u)}break;case 5:var o=e.return;try{Lh(e)}catch(u){Re(e,o,u)}}}catch(u){Re(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var b1=Math.ceil,bl=Fn.ReactCurrentDispatcher,Xd=Fn.ReactCurrentOwner,$t=Fn.ReactCurrentBatchConfig,he=0,qe=null,Le=null,Je=0,kt=0,Pi=Cr(0),Ue=0,Ao=null,Qr=0,gu=0,Jd=0,eo=null,Tt=null,Zd=0,Yi=1/0,Tn=null,Nl=!1,jh=null,ur=null,Oa=!1,nr=null,Dl=0,to=0,Fh=null,Za=-1,el=0;function yt(){return he&6?De():Za!==-1?Za:Za=De()}function cr(t){return t.mode&1?he&2&&Je!==0?Je&-Je:p1.transition!==null?(el===0&&(el=R_()),el):(t=fe,t!==0||(t=window.event,t=t===void 0?16:O_(t.type)),t):1}function Zt(t,e,n,r){if(50<to)throw to=0,Fh=null,Error(U(185));jo(t,n,r),(!(he&2)||t!==qe)&&(t===qe&&(!(he&2)&&(gu|=n),Ue===4&&Yn(t,Je)),At(t,r),n===1&&he===0&&!(e.mode&1)&&(Yi=De()+500,du&&kr()))}function At(t,e){var n=t.callbackNode;pI(t,e);var r=gl(t,t===qe?Je:0);if(r===0)n!==null&&_m(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&_m(n),e===1)t.tag===0?f1(cg.bind(null,t)):tv(cg.bind(null,t)),u1(function(){!(he&6)&&kr()}),n=null;else{switch(P_(r)){case 1:n=xd;break;case 4:n=C_;break;case 16:n=ml;break;case 536870912:n=k_;break;default:n=ml}n=Zv(n,qv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function qv(t,e){if(Za=-1,el=0,he&6)throw Error(U(327));var n=t.callbackNode;if(ji()&&t.callbackNode!==n)return null;var r=gl(t,t===qe?Je:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Vl(t,r);else{e=r;var i=he;he|=2;var s=Kv();(qe!==t||Je!==e)&&(Tn=null,Yi=De()+500,Hr(t,e));do try{V1();break}catch(l){Gv(t,l)}while(!0);jd(),bl.current=s,he=i,Le!==null?e=0:(qe=null,Je=0,e=Ue)}if(e!==0){if(e===2&&(i=dh(t),i!==0&&(r=i,e=Uh(t,i))),e===1)throw n=Ao,Hr(t,0),Yn(t,r),At(t,De()),n;if(e===6)Yn(t,r);else{if(i=t.current.alternate,!(r&30)&&!N1(i)&&(e=Vl(t,r),e===2&&(s=dh(t),s!==0&&(r=s,e=Uh(t,s))),e===1))throw n=Ao,Hr(t,0),Yn(t,r),At(t,De()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:jr(t,Tt,Tn);break;case 3:if(Yn(t,r),(r&130023424)===r&&(e=Zd+500-De(),10<e)){if(gl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){yt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=wh(jr.bind(null,t,Tt,Tn),e);break}jr(t,Tt,Tn);break;case 4:if(Yn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Jt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*b1(r/1960))-r,10<r){t.timeoutHandle=wh(jr.bind(null,t,Tt,Tn),r);break}jr(t,Tt,Tn);break;case 5:jr(t,Tt,Tn);break;default:throw Error(U(329))}}}return At(t,De()),t.callbackNode===n?qv.bind(null,t):null}function Uh(t,e){var n=eo;return t.current.memoizedState.isDehydrated&&(Hr(t,e).flags|=256),t=Vl(t,e),t!==2&&(e=Tt,Tt=n,e!==null&&zh(e)),t}function zh(t){Tt===null?Tt=t:Tt.push.apply(Tt,t)}function N1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!en(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yn(t,e){for(e&=~Jd,e&=~gu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jt(e),r=1<<n;t[n]=-1,e&=~r}}function cg(t){if(he&6)throw Error(U(327));ji();var e=gl(t,0);if(!(e&1))return At(t,De()),null;var n=Vl(t,e);if(t.tag!==0&&n===2){var r=dh(t);r!==0&&(e=r,n=Uh(t,r))}if(n===1)throw n=Ao,Hr(t,0),Yn(t,e),At(t,De()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,jr(t,Tt,Tn),At(t,De()),null}function ef(t,e){var n=he;he|=1;try{return t(e)}finally{he=n,he===0&&(Yi=De()+500,du&&kr())}}function Yr(t){nr!==null&&nr.tag===0&&!(he&6)&&ji();var e=he;he|=1;var n=$t.transition,r=fe;try{if($t.transition=null,fe=1,t)return t()}finally{fe=r,$t.transition=n,he=e,!(he&6)&&kr()}}function tf(){kt=Pi.current,Ee(Pi)}function Hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,l1(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(Ld(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&El();break;case 3:Ki(),Ee(St),Ee(ct),Hd();break;case 5:$d(r);break;case 4:Ki();break;case 13:Ee(Se);break;case 19:Ee(Se);break;case 10:Fd(r.type._context);break;case 22:case 23:tf()}n=n.return}if(qe=t,Le=t=hr(t.current,null),Je=kt=e,Ue=0,Ao=null,Jd=gu=Qr=0,Tt=eo=null,zr!==null){for(e=0;e<zr.length;e++)if(n=zr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}zr=null}return t}function Gv(t,e){do{var n=Le;try{if(jd(),Ya.current=Pl,Rl){for(var r=xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Rl=!1}if(Kr=0,He=Fe=xe=null,Js=!1,Io=0,Xd.current=null,n===null||n.return===null){Ue=1,Ao=e,Le=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Je,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var E=Xm(o);if(E!==null){E.flags&=-257,Jm(E,o,l,s,e),E.mode&1&&Ym(s,h,e),e=E,u=h;var k=e.updateQueue;if(k===null){var P=new Set;P.add(u),e.updateQueue=P}else k.add(u);break e}else{if(!(e&1)){Ym(s,h,e),nf();break e}u=Error(U(426))}}else if(Te&&l.mode&1){var D=Xm(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Jm(D,o,l,s,e),Od(Qi(u,l));break e}}s=u=Qi(u,l),Ue!==4&&(Ue=2),eo===null?eo=[s]:eo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var x=Pv(s,u,e);Hm(s,x);break e;case 1:l=u;var v=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(ur===null||!ur.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var L=bv(s,l,e);Hm(s,L);break e}}s=s.return}while(s!==null)}Yv(n)}catch($){e=$,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(!0)}function Kv(){var t=bl.current;return bl.current=Pl,t===null?Pl:t}function nf(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),qe===null||!(Qr&268435455)&&!(gu&268435455)||Yn(qe,Je)}function Vl(t,e){var n=he;he|=2;var r=Kv();(qe!==t||Je!==e)&&(Tn=null,Hr(t,e));do try{D1();break}catch(i){Gv(t,i)}while(!0);if(jd(),he=n,bl.current=r,Le!==null)throw Error(U(261));return qe=null,Je=0,Ue}function D1(){for(;Le!==null;)Qv(Le)}function V1(){for(;Le!==null&&!sI();)Qv(Le)}function Qv(t){var e=Jv(t.alternate,t,kt);t.memoizedProps=t.pendingProps,e===null?Yv(t):Le=e,Xd.current=null}function Yv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=C1(n,e),n!==null){n.flags&=32767,Le=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ue=6,Le=null;return}}else if(n=A1(n,e,kt),n!==null){Le=n;return}if(e=e.sibling,e!==null){Le=e;return}Le=e=t}while(e!==null);Ue===0&&(Ue=5)}function jr(t,e,n){var r=fe,i=$t.transition;try{$t.transition=null,fe=1,L1(t,e,n,r)}finally{$t.transition=i,fe=r}return null}function L1(t,e,n,r){do ji();while(nr!==null);if(he&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(mI(t,s),t===qe&&(Le=qe=null,Je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Oa||(Oa=!0,Zv(ml,function(){return ji(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=$t.transition,$t.transition=null;var o=fe;fe=1;var l=he;he|=4,Xd.current=null,R1(t,n),Hv(n,t),t1(_h),yl=!!yh,_h=yh=null,t.current=n,P1(n),oI(),he=l,fe=o,$t.transition=s}else t.current=n;if(Oa&&(Oa=!1,nr=t,Dl=i),s=t.pendingLanes,s===0&&(ur=null),uI(n.stateNode),At(t,De()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Nl)throw Nl=!1,t=jh,jh=null,t;return Dl&1&&t.tag!==0&&ji(),s=t.pendingLanes,s&1?t===Fh?to++:(to=0,Fh=t):to=0,kr(),null}function ji(){if(nr!==null){var t=P_(Dl),e=$t.transition,n=fe;try{if($t.transition=null,fe=16>t?16:t,nr===null)var r=!1;else{if(t=nr,nr=null,Dl=0,he&6)throw Error(U(331));var i=he;for(he|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(q=h;q!==null;){var p=q;switch(p.tag){case 0:case 11:case 15:Zs(8,p,s)}var m=p.child;if(m!==null)m.return=p,q=m;else for(;q!==null;){p=q;var g=p.sibling,E=p.return;if(zv(p),p===h){q=null;break}if(g!==null){g.return=E,q=g;break}q=E}}}var k=s.alternate;if(k!==null){var P=k.child;if(P!==null){k.child=null;do{var D=P.sibling;P.sibling=null,P=D}while(P!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Zs(9,s,s.return)}var x=s.sibling;if(x!==null){x.return=s.return,q=x;break e}q=s.return}}var v=t.current;for(q=v;q!==null;){o=q;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,q=A;else e:for(o=v;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:mu(9,l)}}catch($){Re(l,l.return,$)}if(l===o){q=null;break e}var L=l.sibling;if(L!==null){L.return=l.return,q=L;break e}q=l.return}}if(he=i,kr(),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(au,t)}catch{}r=!0}return r}finally{fe=n,$t.transition=e}}return!1}function hg(t,e,n){e=Qi(n,e),e=Pv(t,e,1),t=lr(t,e,1),e=yt(),t!==null&&(jo(t,1,e),At(t,e))}function Re(t,e,n){if(t.tag===3)hg(t,t,n);else for(;e!==null;){if(e.tag===3){hg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ur===null||!ur.has(r))){t=Qi(n,t),t=bv(e,t,1),e=lr(e,t,1),t=yt(),e!==null&&(jo(e,1,t),At(e,t));break}}e=e.return}}function O1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=yt(),t.pingedLanes|=t.suspendedLanes&n,qe===t&&(Je&n)===n&&(Ue===4||Ue===3&&(Je&130023424)===Je&&500>De()-Zd?Hr(t,0):Jd|=n),At(t,e)}function Xv(t,e){e===0&&(t.mode&1?(e=Aa,Aa<<=1,!(Aa&130023424)&&(Aa=4194304)):e=1);var n=yt();t=Dn(t,e),t!==null&&(jo(t,e,n),At(t,n))}function M1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Xv(t,n)}function j1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),Xv(t,n)}var Jv;Jv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||St.current)It=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return It=!1,x1(t,e,n);It=!!(t.flags&131072)}else It=!1,Te&&e.flags&1048576&&nv(e,Sl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ja(t,e),t=e.pendingProps;var i=Wi(e,ct.current);Mi(e,n),i=qd(null,e,r,t,i,n);var s=Gd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xt(r)?(s=!0,Tl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zd(e),i.updater=pu,e.stateNode=i,i._reactInternals=e,Ch(e,r,t,n),e=Ph(null,e,r,!0,s,n)):(e.tag=0,Te&&s&&Vd(e),pt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ja(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=U1(r),t=Kt(r,t),i){case 0:e=Rh(null,e,r,t,n);break e;case 1:e=tg(null,e,r,t,n);break e;case 11:e=Zm(null,e,r,t,n);break e;case 14:e=eg(null,e,r,Kt(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),Rh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),tg(t,e,r,i,n);case 3:e:{if(Lv(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,lv(t,e),Cl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Qi(Error(U(423)),e),e=ng(t,e,r,n,i);break e}else if(r!==i){i=Qi(Error(U(424)),e),e=ng(t,e,r,n,i);break e}else for(Pt=ar(e.stateNode.containerInfo.firstChild),Nt=e,Te=!0,Yt=null,n=ov(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qi(),r===i){e=Vn(t,e,n);break e}pt(t,e,r,n)}e=e.child}return e;case 5:return uv(e),t===null&&Sh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,vh(r,i)?o=null:s!==null&&vh(r,s)&&(e.flags|=32),Vv(t,e),pt(t,e,o,n),e.child;case 6:return t===null&&Sh(e),null;case 13:return Ov(t,e,n);case 4:return Bd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Gi(e,null,r,n):pt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),Zm(t,e,r,i,n);case 7:return pt(t,e,e.pendingProps,n),e.child;case 8:return pt(t,e,e.pendingProps.children,n),e.child;case 12:return pt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ge(xl,r._currentValue),r._currentValue=o,s!==null)if(en(s.value,o)){if(s.children===i.children&&!St.current){e=Vn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Rn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var p=h.pending;p===null?u.next=u:(u.next=p.next,p.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),xh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),xh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}pt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Mi(e,n),i=Ht(i),r=r(i),e.flags|=1,pt(t,e,r,n),e.child;case 14:return r=e.type,i=Kt(r,e.pendingProps),i=Kt(r.type,i),eg(t,e,r,i,n);case 15:return Nv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),Ja(t,e),e.tag=1,xt(r)?(t=!0,Tl(e)):t=!1,Mi(e,n),Rv(e,r,i),Ch(e,r,i,n),Ph(null,e,r,!0,t,n);case 19:return Mv(t,e,n);case 22:return Dv(t,e,n)}throw Error(U(156,e.tag))};function Zv(t,e){return A_(t,e)}function F1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(t,e,n,r){return new F1(t,e,n,r)}function rf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function U1(t){if(typeof t=="function")return rf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Td)return 11;if(t===Id)return 14}return 2}function hr(t,e){var n=t.alternate;return n===null?(n=zt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function tl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")rf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case wi:return Wr(n.children,i,s,e);case Ed:o=8,i|=8;break;case Xc:return t=zt(12,n,e,i|2),t.elementType=Xc,t.lanes=s,t;case Jc:return t=zt(13,n,e,i),t.elementType=Jc,t.lanes=s,t;case Zc:return t=zt(19,n,e,i),t.elementType=Zc,t.lanes=s,t;case u_:return yu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case a_:o=10;break e;case l_:o=9;break e;case Td:o=11;break e;case Id:o=14;break e;case Gn:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=zt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Wr(t,e,n,r){return t=zt(7,t,r,e),t.lanes=n,t}function yu(t,e,n,r){return t=zt(22,t,r,e),t.elementType=u_,t.lanes=n,t.stateNode={isHidden:!1},t}function Mc(t,e,n){return t=zt(6,t,null,e),t.lanes=n,t}function jc(t,e,n){return e=zt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function z1(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_c(0),this.expirationTimes=_c(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_c(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function sf(t,e,n,r,i,s,o,l,u){return t=new z1(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=zt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zd(s),t}function B1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ew(t){if(!t)return vr;t=t._reactInternals;e:{if(ii(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(xt(n))return ev(t,n,e)}return e}function tw(t,e,n,r,i,s,o,l,u){return t=sf(n,r,!0,t,i,s,o,l,u),t.context=ew(null),n=t.current,r=yt(),i=cr(n),s=Rn(r,i),s.callback=e??null,lr(n,s,i),t.current.lanes=i,jo(t,i,r),At(t,r),t}function _u(t,e,n,r){var i=e.current,s=yt(),o=cr(i);return n=ew(n),e.context===null?e.context=n:e.pendingContext=n,e=Rn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=lr(i,e,o),t!==null&&(Zt(t,i,o,s),Qa(t,i,o)),o}function Ll(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function dg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function of(t,e){dg(t,e),(t=t.alternate)&&dg(t,e)}function $1(){return null}var nw=typeof reportError=="function"?reportError:function(t){console.error(t)};function af(t){this._internalRoot=t}vu.prototype.render=af.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));_u(t,e,null,null)};vu.prototype.unmount=af.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Yr(function(){_u(null,t,null,null)}),e[Nn]=null}};function vu(t){this._internalRoot=t}vu.prototype.unstable_scheduleHydration=function(t){if(t){var e=D_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qn.length&&e!==0&&e<Qn[n].priority;n++);Qn.splice(n,0,t),n===0&&L_(t)}};function lf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function fg(){}function H1(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=Ll(o);s.call(h)}}var o=tw(e,r,t,0,null,!1,!1,"",fg);return t._reactRootContainer=o,t[Nn]=o.current,_o(t.nodeType===8?t.parentNode:t),Yr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=Ll(u);l.call(h)}}var u=sf(t,0,!1,null,null,!1,!1,"",fg);return t._reactRootContainer=u,t[Nn]=u.current,_o(t.nodeType===8?t.parentNode:t),Yr(function(){_u(e,u,n,r)}),u}function Eu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Ll(o);l.call(u)}}_u(e,o,t,i)}else o=H1(n,e,t,i,r);return Ll(o)}b_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Fs(e.pendingLanes);n!==0&&(Ad(e,n|1),At(e,De()),!(he&6)&&(Yi=De()+500,kr()))}break;case 13:Yr(function(){var r=Dn(t,1);if(r!==null){var i=yt();Zt(r,t,1,i)}}),of(t,1)}};Cd=function(t){if(t.tag===13){var e=Dn(t,134217728);if(e!==null){var n=yt();Zt(e,t,134217728,n)}of(t,134217728)}};N_=function(t){if(t.tag===13){var e=cr(t),n=Dn(t,e);if(n!==null){var r=yt();Zt(n,t,e,r)}of(t,e)}};D_=function(){return fe};V_=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};uh=function(t,e,n){switch(e){case"input":if(nh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=hu(r);if(!i)throw Error(U(90));h_(r),nh(r,i)}}}break;case"textarea":f_(t,n);break;case"select":e=n.value,e!=null&&Di(t,!!n.multiple,e,!1)}};w_=ef;E_=Yr;var W1={usingClientEntryPoint:!1,Events:[Uo,Si,hu,__,v_,ef]},Os={findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},q1={bundleType:Os.bundleType,version:Os.version,rendererPackageName:Os.rendererPackageName,rendererConfig:Os.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=S_(t),t===null?null:t.stateNode},findFiberByHostInstance:Os.findFiberByHostInstance||$1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ma=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ma.isDisabled&&Ma.supportsFiber)try{au=Ma.inject(q1),ln=Ma}catch{}}Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W1;Lt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lf(e))throw Error(U(200));return B1(t,e,null,n)};Lt.createRoot=function(t,e){if(!lf(t))throw Error(U(299));var n=!1,r="",i=nw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=sf(t,1,!1,null,null,n,!1,r,i),t[Nn]=e.current,_o(t.nodeType===8?t.parentNode:t),new af(e)};Lt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=S_(e),t=t===null?null:t.stateNode,t};Lt.flushSync=function(t){return Yr(t)};Lt.hydrate=function(t,e,n){if(!wu(e))throw Error(U(200));return Eu(null,t,e,!0,n)};Lt.hydrateRoot=function(t,e,n){if(!lf(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=nw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=tw(e,null,t,1,n??null,i,!1,s,o),t[Nn]=e.current,_o(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new vu(e)};Lt.render=function(t,e,n){if(!wu(e))throw Error(U(200));return Eu(null,t,e,!1,n)};Lt.unmountComponentAtNode=function(t){if(!wu(t))throw Error(U(40));return t._reactRootContainer?(Yr(function(){Eu(null,null,t,!1,function(){t._reactRootContainer=null,t[Nn]=null})}),!0):!1};Lt.unstable_batchedUpdates=ef;Lt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!wu(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return Eu(t,e,n,!1,r)};Lt.version="18.3.1-next-f1338f8080-20240426";function rw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rw)}catch(t){console.error(t)}}rw(),r_.exports=Lt;var G1=r_.exports,iw,pg=G1;iw=pg.createRoot,pg.hydrateRoot;const K1=()=>{};var mg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Q1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ow={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,p=s>>2,m=(s&3)<<4|l>>4;let g=(l&15)<<2|h>>6,E=h&63;u||(E=64,o||(g=64)),r.push(n[p],n[m],n[g],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Q1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new Y1;const g=s<<2|l>>4;if(r.push(g),h!==64){const E=l<<4&240|h>>2;if(r.push(E),m!==64){const k=h<<6&192|m;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Y1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const X1=function(t){const e=sw(t);return ow.encodeByteArray(e,!0)},Ol=function(t){return X1(t).replace(/\./g,"")},aw=function(t){try{return ow.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1=()=>J1().__FIREBASE_DEFAULTS__,eS=()=>{if(typeof process>"u"||typeof mg>"u")return;const t=mg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},tS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&aw(t[1]);return e&&JSON.parse(e)},Tu=()=>{try{return K1()||Z1()||eS()||tS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},lw=t=>{var e,n;return(n=(e=Tu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},nS=t=>{const e=lw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},uw=()=>{var t;return(t=Tu())==null?void 0:t.config},cw=t=>{var e;return(e=Tu())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function hw(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Ol(JSON.stringify(n)),Ol(JSON.stringify(o)),""].join(".")}const no={};function sS(){const t={prod:[],emulator:[]};for(const e of Object.keys(no))no[e]?t.emulator.push(e):t.prod.push(e);return t}function oS(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let gg=!1;function dw(t,e){if(typeof window>"u"||typeof document>"u"||!as(window.location.host)||no[t]===e||no[t]||gg)return;no[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",s=sS().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,E){g.setAttribute("width","24"),g.setAttribute("id",E),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{gg=!0,o()},g}function p(g,E){g.setAttribute("id",E),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=oS(r),E=n("text"),k=document.getElementById(E)||document.createElement("span"),P=n("learnmore"),D=document.getElementById(P)||document.createElement("a"),x=n("preprendIcon"),v=document.getElementById(x)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const A=g.element;l(A),p(D,P);const L=h();u(v,x),A.append(v,k,D,L),document.body.appendChild(A)}s?(k.innerText="Preview backend disconnected.",v.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(v.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",E)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function aS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function lS(){var e;const t=(e=Tu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function uS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function cS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dS(){const t=ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function fS(){return!lS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pS(){try{return typeof indexedDB=="object"}catch{return!1}}function mS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS="FirebaseError";class Un extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gS,Object.setPrototypeOf(this,Un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bo.prototype.create)}}class Bo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?yS(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Un(i,l,r)}}function yS(t,e){return t.replace(_S,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const _S=/\{\$([^}]+)}/g;function vS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(yg(s)&&yg(o)){if(!Xr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function yg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Bs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function wS(t,e){const n=new ES(t,e);return n.subscribe.bind(n)}class ES{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");TS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Fc),i.error===void 0&&(i.error=Fc),i.complete===void 0&&(i.complete=Fc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function TS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(t){return t&&t._delegate?t._delegate:t}class Jr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new rS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xS(e))try{this.getOrInitializeService({instanceIdentifier:Fr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fr){return this.instances.has(e)}getOptions(e=Fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:SS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fr){return this.component?this.component.multipleInstances?e:Fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function SS(t){return t===Fr?void 0:t}function xS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new IS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const CS={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},kS=se.INFO,RS={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},PS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=RS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class uf{constructor(e){this.name=e,this._logLevel=kS,this._logHandler=PS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?CS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const bS=(t,e)=>e.some(n=>t instanceof n);let _g,vg;function NS(){return _g||(_g=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function DS(){return vg||(vg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fw=new WeakMap,Bh=new WeakMap,pw=new WeakMap,Uc=new WeakMap,cf=new WeakMap;function VS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(dr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&fw.set(n,t)}).catch(()=>{}),cf.set(e,t),e}function LS(t){if(Bh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Bh.set(t,e)}let $h={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Bh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||pw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function OS(t){$h=t($h)}function MS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(zc(this),e,...n);return pw.set(r,e.sort?e.sort():[e]),dr(r)}:DS().includes(t)?function(...e){return t.apply(zc(this),e),dr(fw.get(this))}:function(...e){return dr(t.apply(zc(this),e))}}function jS(t){return typeof t=="function"?MS(t):(t instanceof IDBTransaction&&LS(t),bS(t,NS())?new Proxy(t,$h):t)}function dr(t){if(t instanceof IDBRequest)return VS(t);if(Uc.has(t))return Uc.get(t);const e=jS(t);return e!==t&&(Uc.set(t,e),cf.set(e,t)),e}const zc=t=>cf.get(t);function FS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=dr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(dr(o.result),u.oldVersion,u.newVersion,dr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const US=["get","getKey","getAll","getAllKeys","count"],zS=["put","add","delete","clear"],Bc=new Map;function wg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bc.get(e))return Bc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=zS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||US.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Bc.set(e,s),s}OS(t=>({...t,get:(e,n,r)=>wg(e,n)||t.get(e,n,r),has:(e,n)=>!!wg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($S(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $S(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hh="@firebase/app",Eg="0.14.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=new uf("@firebase/app"),HS="@firebase/app-compat",WS="@firebase/analytics-compat",qS="@firebase/analytics",GS="@firebase/app-check-compat",KS="@firebase/app-check",QS="@firebase/auth",YS="@firebase/auth-compat",XS="@firebase/database",JS="@firebase/data-connect",ZS="@firebase/database-compat",ex="@firebase/functions",tx="@firebase/functions-compat",nx="@firebase/installations",rx="@firebase/installations-compat",ix="@firebase/messaging",sx="@firebase/messaging-compat",ox="@firebase/performance",ax="@firebase/performance-compat",lx="@firebase/remote-config",ux="@firebase/remote-config-compat",cx="@firebase/storage",hx="@firebase/storage-compat",dx="@firebase/firestore",fx="@firebase/ai",px="@firebase/firestore-compat",mx="firebase",gx="12.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh="[DEFAULT]",yx={[Hh]:"fire-core",[HS]:"fire-core-compat",[qS]:"fire-analytics",[WS]:"fire-analytics-compat",[KS]:"fire-app-check",[GS]:"fire-app-check-compat",[QS]:"fire-auth",[YS]:"fire-auth-compat",[XS]:"fire-rtdb",[JS]:"fire-data-connect",[ZS]:"fire-rtdb-compat",[ex]:"fire-fn",[tx]:"fire-fn-compat",[nx]:"fire-iid",[rx]:"fire-iid-compat",[ix]:"fire-fcm",[sx]:"fire-fcm-compat",[ox]:"fire-perf",[ax]:"fire-perf-compat",[lx]:"fire-rc",[ux]:"fire-rc-compat",[cx]:"fire-gcs",[hx]:"fire-gcs-compat",[dx]:"fire-fst",[px]:"fire-fst-compat",[fx]:"fire-vertex","fire-js":"fire-js",[mx]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=new Map,_x=new Map,qh=new Map;function Tg(t,e){try{t.container.addComponent(e)}catch(n){Ln.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xi(t){const e=t.name;if(qh.has(e))return Ln.debug(`There were multiple attempts to register component ${e}.`),!1;qh.set(e,t);for(const n of Ml.values())Tg(n,t);for(const n of _x.values())Tg(n,t);return!0}function hf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ut(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fr=new Bo("app","Firebase",vx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=gx;function mw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Wh,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw fr.create("bad-app-name",{appName:String(i)});if(n||(n=uw()),!n)throw fr.create("no-options");const s=Ml.get(i);if(s){if(Xr(n,s.options)&&Xr(r,s.config))return s;throw fr.create("duplicate-app",{appName:i})}const o=new AS(i);for(const u of qh.values())o.addComponent(u);const l=new wx(n,r,o);return Ml.set(i,l),l}function gw(t=Wh){const e=Ml.get(t);if(!e&&t===Wh&&uw())return mw();if(!e)throw fr.create("no-app",{appName:t});return e}function pr(t,e,n){let r=yx[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ln.warn(o.join(" "));return}Xi(new Jr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ex="firebase-heartbeat-database",Tx=1,Co="firebase-heartbeat-store";let $c=null;function yw(){return $c||($c=FS(Ex,Tx,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Co)}catch(n){console.warn(n)}}}}).catch(t=>{throw fr.create("idb-open",{originalErrorMessage:t.message})})),$c}async function Ix(t){try{const n=(await yw()).transaction(Co),r=await n.objectStore(Co).get(_w(t));return await n.done,r}catch(e){if(e instanceof Un)Ln.warn(e.message);else{const n=fr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ln.warn(n.message)}}}async function Ig(t,e){try{const r=(await yw()).transaction(Co,"readwrite");await r.objectStore(Co).put(e,_w(t)),await r.done}catch(n){if(n instanceof Un)Ln.warn(n.message);else{const r=fr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ln.warn(r.message)}}}function _w(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sx=1024,xx=30;class Ax{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new kx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Sg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>xx){const o=Rx(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ln.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Sg(),{heartbeatsToSend:r,unsentEntries:i}=Cx(this._heartbeatsCache.heartbeats),s=Ol(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Ln.warn(n),""}}}function Sg(){return new Date().toISOString().substring(0,10)}function Cx(t,e=Sx){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),xg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),xg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class kx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pS()?mS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ix(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ig(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ig(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function xg(t){return Ol(JSON.stringify({version:2,heartbeats:t})).length}function Rx(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Px(t){Xi(new Jr("platform-logger",e=>new BS(e),"PRIVATE")),Xi(new Jr("heartbeat",e=>new Ax(e),"PRIVATE")),pr(Hh,Eg,t),pr(Hh,Eg,"esm2020"),pr("fire-js","")}Px("");function vw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bx=vw,ww=new Bo("auth","Firebase",vw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=new uf("@firebase/auth");function Nx(t,...e){jl.logLevel<=se.WARN&&jl.warn(`Auth (${ls}): ${t}`,...e)}function nl(t,...e){jl.logLevel<=se.ERROR&&jl.error(`Auth (${ls}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t,...e){throw df(t,...e)}function cn(t,...e){return df(t,...e)}function Ew(t,e,n){const r={...bx(),[e]:n};return new Bo("auth","Firebase",r).create(e,{appName:t.name})}function Pn(t){return Ew(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function df(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ww.create(t,...e)}function Z(t,e,...n){if(!t)throw df(e,...n)}function An(t){const e="INTERNAL ASSERTION FAILED: "+t;throw nl(e),new Error(e)}function On(t,e){t||An(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Dx(){return Ag()==="http:"||Ag()==="https:"}function Ag(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Dx()||cS()||"connection"in navigator)?navigator.onLine:!0}function Lx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,n){this.shortDelay=e,this.longDelay=n,On(n>e,"Short delay should be less than long delay!"),this.isMobile=aS()||hS()}get(){return Vx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(t,e){On(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;An("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;An("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;An("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ox={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],jx=new Ho(3e4,6e4);function Rr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Pr(t,e,n,r,i={}){return Iw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=$o({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...s};return uS()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&as(t.emulatorConfig.host)&&(h.credentials="include"),Tw.fetch()(await Sw(t,t.config.apiHost,n,l),h)})}async function Iw(t,e,n){t._canInitEmulator=!1;const r={...Ox,...e};try{const i=new Ux(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ja(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ja(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ja(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ja(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Ew(t,p,h);tn(t,p)}}catch(i){if(i instanceof Un)throw i;tn(t,"network-request-failed",{message:String(i)})}}async function Wo(t,e,n,r,i={}){const s=await Pr(t,e,n,r,i);return"mfaPendingCredential"in s&&tn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Sw(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?ff(t.config,i):`${t.config.apiScheme}://${i}`;return Mx.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function Fx(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ux{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(cn(this.auth,"network-request-failed")),jx.get())})}}function ja(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=cn(t,e,r);return i.customData._tokenResponse=n,i}function Cg(t){return t!==void 0&&t.enterprise!==void 0}class zx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Fx(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Bx(t,e){return Pr(t,"GET","/v2/recaptchaConfig",Rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $x(t,e){return Pr(t,"POST","/v1/accounts:delete",e)}async function Fl(t,e){return Pr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Hx(t,e=!1){const n=je(t),r=await n.getIdToken(e),i=pf(r);Z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ro(Hc(i.auth_time)),issuedAtTime:ro(Hc(i.iat)),expirationTime:ro(Hc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Hc(t){return Number(t)*1e3}function pf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return nl("JWT malformed, contained fewer than 3 sections"),null;try{const i=aw(n);return i?JSON.parse(i):(nl("Failed to decode base64 JWT payload"),null)}catch(i){return nl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function kg(t){const e=pf(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ko(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Un&&Wx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Wx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ro(this.lastLoginAt),this.creationTime=ro(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ul(t){var m;const e=t.auth,n=await t.getIdToken(),r=await ko(t,Fl(e,{idToken:n}));Z(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(m=i.providerUserInfo)!=null&&m.length?xw(i.providerUserInfo):[],o=Kx(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),h=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Kh(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,p)}async function Gx(t){const e=je(t);await Ul(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Kx(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function xw(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qx(t,e){const n=await Iw(t,{},async()=>{const r=$o({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await Sw(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&as(t.emulatorConfig.host)&&(u.credentials="include"),Tw.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Yx(t,e){return Pr(t,"POST","/v2/accounts:revokeToken",Rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Z(e.length!==0,"internal-error");const n=kg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Qx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Fi;return r&&(Z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fi,this.toJSON())}_performRefresh(){return An("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Xt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new qx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Kh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ko(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Hx(this,e)}reload(){return Gx(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Xt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ul(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ut(this.auth.app))return Promise.reject(Pn(this.auth));const e=await this.getIdToken();return await ko(this,$x(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,p=n.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:E,providerData:k,stsTokenManager:P}=n;Z(m&&P,e,"internal-error");const D=Fi.fromJSON(this.name,P);Z(typeof m=="string",e,"internal-error"),Wn(r,e.name),Wn(i,e.name),Z(typeof g=="boolean",e,"internal-error"),Z(typeof E=="boolean",e,"internal-error"),Wn(s,e.name),Wn(o,e.name),Wn(l,e.name),Wn(u,e.name),Wn(h,e.name),Wn(p,e.name);const x=new Xt({uid:m,auth:e,email:i,emailVerified:g,displayName:r,isAnonymous:E,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:D,createdAt:h,lastLoginAt:p});return k&&Array.isArray(k)&&(x.providerData=k.map(v=>({...v}))),u&&(x._redirectEventId=u),x}static async _fromIdTokenResponse(e,n,r=!1){const i=new Fi;i.updateFromServerResponse(n);const s=new Xt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ul(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Z(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?xw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Fi;l.updateFromIdToken(r);const u=new Xt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Kh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg=new Map;function Cn(t){On(t instanceof Function,"Expected a class definition");let e=Rg.get(t);return e?(On(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Rg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Aw.type="NONE";const Pg=Aw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(t,e,n){return`firebase:${t}:${e}:${n}`}class Ui{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=rl(this.userKey,i.apiKey,s),this.fullPersistenceKey=rl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Fl(this.auth,{idToken:e}).catch(()=>{});return n?Xt._fromGetAccountInfoResponse(this.auth,n,e):null}return Xt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ui(Cn(Pg),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Cn(Pg);const o=rl(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const p=await h._get(o);if(p){let m;if(typeof p=="string"){const g=await Fl(e,{idToken:p}).catch(()=>{});if(!g)break;m=await Xt._fromGetAccountInfoResponse(e,g,p)}else m=Xt._fromJSON(e,p);h!==s&&(l=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ui(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Ui(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Pw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Nw(e))return"Blackberry";if(Dw(e))return"Webos";if(kw(e))return"Safari";if((e.includes("chrome/")||Rw(e))&&!e.includes("edge/"))return"Chrome";if(bw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Cw(t=ht()){return/firefox\//i.test(t)}function kw(t=ht()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Rw(t=ht()){return/crios\//i.test(t)}function Pw(t=ht()){return/iemobile/i.test(t)}function bw(t=ht()){return/android/i.test(t)}function Nw(t=ht()){return/blackberry/i.test(t)}function Dw(t=ht()){return/webos/i.test(t)}function mf(t=ht()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Xx(t=ht()){var e;return mf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Jx(){return dS()&&document.documentMode===10}function Vw(t=ht()){return mf(t)||bw(t)||Dw(t)||Nw(t)||/windows phone/i.test(t)||Pw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(t,e=[]){let n;switch(t){case"Browser":n=bg(ht());break;case"Worker":n=`${bg(ht())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ls}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eA(t,e={}){return Pr(t,"GET","/v2/passwordPolicy",Rr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA=6;class nA{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??tA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ng(this),this.idTokenSubscription=new Ng(this),this.beforeStateQueue=new Zx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ww,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Cn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Ui.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Fl(this,{idToken:e}),r=await Xt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Ut(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ul(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Lx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ut(this.app))return Promise.reject(Pn(this));const n=e?je(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ut(this.app)?Promise.reject(Pn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ut(this.app)?Promise.reject(Pn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await eA(this),n=new nA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Bo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Yx(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Cn(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await Ui.create(this,[Cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Lw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Ut(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Nx(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function si(t){return je(t)}class Ng{constructor(e){this.auth=e,this.observer=null,this.addObserver=wS(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Iu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function iA(t){Iu=t}function Ow(t){return Iu.loadJS(t)}function sA(){return Iu.recaptchaEnterpriseScript}function oA(){return Iu.gapiScript}function aA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class lA{constructor(){this.enterprise=new uA}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class uA{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const cA="recaptcha-enterprise",Mw="NO_RECAPTCHA";class hA{constructor(e){this.type=cA,this.auth=si(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{Bx(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new zx(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Cg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(Mw)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new lA().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Cg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=sA();u.length!==0&&(u+=l),Ow(u).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function Dg(t,e,n,r=!1,i=!1){const s=new hA(t);let o;if(i)o=Mw;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Qh(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Dg(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Dg(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dA(t,e){const n=hf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Xr(s,e??{}))return i;tn(i,"already-initialized")}return n.initialize({options:e})}function fA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function pA(t,e,n){const r=si(t);Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=jw(e),{host:o,port:l}=mA(e),u=l===null?"":`:${l}`,h={url:`${s}//${o}${u}/`},p=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){Z(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Z(Xr(h,r.config.emulator)&&Xr(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,as(o)?(hw(`${s}//${o}${u}`),dw("Auth",!0)):gA()}function jw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function mA(t){const e=jw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Vg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Vg(o)}}}function Vg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function gA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return An("not implemented")}_getIdTokenResponse(e){return An("not implemented")}_linkToIdToken(e,n){return An("not implemented")}_getReauthenticationResolver(e){return An("not implemented")}}async function yA(t,e){return Pr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _A(t,e){return Wo(t,"POST","/v1/accounts:signInWithPassword",Rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vA(t,e){return Wo(t,"POST","/v1/accounts:signInWithEmailLink",Rr(t,e))}async function wA(t,e){return Wo(t,"POST","/v1/accounts:signInWithEmailLink",Rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro extends gf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ro(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ro(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qh(e,n,"signInWithPassword",_A);case"emailLink":return vA(e,{email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qh(e,r,"signUpPassword",yA);case"emailLink":return wA(e,{idToken:n,email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zi(t,e){return Wo(t,"POST","/v1/accounts:signInWithIdp",Rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA="http://localhost";class Zr extends gf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Zr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zi(e,n)}buildRequest(){const e={requestUri:EA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$o(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function IA(t){const e=zs(Bs(t)).link,n=e?zs(Bs(e)).deep_link_id:null,r=zs(Bs(t)).deep_link_id;return(r?zs(Bs(r)).link:null)||r||n||e||t}class yf{constructor(e){const n=zs(Bs(e)),r=n.apiKey??null,i=n.oobCode??null,s=TA(n.mode??null);Z(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=IA(e);try{return new yf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(){this.providerId=us.PROVIDER_ID}static credential(e,n){return Ro._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=yf.parseLink(n);return Z(r,"argument-error"),Ro._fromEmailAndCode(e,r.code,r.tenantId)}}us.PROVIDER_ID="password";us.EMAIL_PASSWORD_SIGN_IN_METHOD="password";us.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends Fw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends qo{constructor(){super("facebook.com")}static credential(e){return Zr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends qo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Zr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.GOOGLE_SIGN_IN_METHOD="google.com";Jn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends qo{constructor(){super("github.com")}static credential(e){return Zr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.GITHUB_SIGN_IN_METHOD="github.com";Zn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends qo{constructor(){super("twitter.com")}static credential(e,n){return Zr._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return er.credential(n,r)}catch{return null}}}er.TWITTER_SIGN_IN_METHOD="twitter.com";er.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SA(t,e){return Wo(t,"POST","/v1/accounts:signUp",Rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Xt._fromIdTokenResponse(e,r,i),o=Lg(r);return new ei({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Lg(r);return new ei({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Lg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl extends Un{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,zl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new zl(e,n,r,i)}}function Uw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?zl._fromErrorAndOperation(t,s,e,r):s})}async function xA(t,e,n=!1){const r=await ko(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ei._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AA(t,e,n=!1){const{auth:r}=t;if(Ut(r.app))return Promise.reject(Pn(r));const i="reauthenticate";try{const s=await ko(t,Uw(r,i,e,t),n);Z(s.idToken,r,"internal-error");const o=pf(s.idToken);Z(o,r,"internal-error");const{sub:l}=o;return Z(t.uid===l,r,"user-mismatch"),ei._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&tn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zw(t,e,n=!1){if(Ut(t.app))return Promise.reject(Pn(t));const r="signIn",i=await Uw(t,r,e),s=await ei._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function CA(t,e){return zw(si(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bw(t){const e=si(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function kA(t,e,n){if(Ut(t.app))return Promise.reject(Pn(t));const r=si(t),o=await Qh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",SA).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Bw(t),u}),l=await ei._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function RA(t,e,n){return Ut(t.app)?Promise.reject(Pn(t)):CA(je(t),us.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Bw(t),r})}function PA(t,e,n,r){return je(t).onIdTokenChanged(e,n,r)}function bA(t,e,n){return je(t).beforeAuthStateChanged(e,n)}function NA(t,e,n,r){return je(t).onAuthStateChanged(e,n,r)}function DA(t){return je(t).signOut()}const Bl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Bl,"1"),this.storage.removeItem(Bl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA=1e3,LA=10;class Hw extends $w{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Vw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Jx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,LA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},VA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hw.type="LOCAL";const OA=Hw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww extends $w{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ww.type="SESSION";const qw=Ww;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Su(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await MA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Su.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=_f("",20);i.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(p),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(){return window}function FA(t){hn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(){return typeof hn().WorkerGlobalScope<"u"&&typeof hn().importScripts=="function"}async function UA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function BA(){return Gw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw="firebaseLocalStorageDb",$A=1,$l="firebaseLocalStorage",Qw="fbase_key";class Go{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xu(t,e){return t.transaction([$l],e?"readwrite":"readonly").objectStore($l)}function HA(){const t=indexedDB.deleteDatabase(Kw);return new Go(t).toPromise()}function Yh(){const t=indexedDB.open(Kw,$A);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore($l,{keyPath:Qw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains($l)?e(r):(r.close(),await HA(),e(await Yh()))})})}async function Og(t,e,n){const r=xu(t,!0).put({[Qw]:e,value:n});return new Go(r).toPromise()}async function WA(t,e){const n=xu(t,!1).get(e),r=await new Go(n).toPromise();return r===void 0?null:r.value}function Mg(t,e){const n=xu(t,!0).delete(e);return new Go(n).toPromise()}const qA=800,GA=3;class Yw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>GA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Su._getInstance(BA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await UA(),!this.activeServiceWorker)return;this.sender=new jA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yh();return await Og(e,Bl,"1"),await Mg(e,Bl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Og(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>WA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Mg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=xu(i,!1).getAll();return new Go(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yw.type="LOCAL";const KA=Yw;new Ho(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QA(t,e){return e?Cn(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf extends gf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function YA(t){return zw(t.auth,new vf(t),t.bypassAuthState)}function XA(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),AA(n,new vf(t),t.bypassAuthState)}async function JA(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),xA(n,new vf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return YA;case"linkViaPopup":case"linkViaRedirect":return JA;case"reauthViaPopup":case"reauthViaRedirect":return XA;default:tn(this.auth,"internal-error")}}resolve(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA=new Ho(2e3,1e4);class bi extends Xw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,bi.currentPopupAction&&bi.currentPopupAction.cancel(),bi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){On(this.filter.length===1,"Popup operations only handle one event");const e=_f();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ZA.get())};e()}}bi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC="pendingRedirect",il=new Map;class tC extends Xw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=il.get(this.auth._key());if(!e){try{const r=await nC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}il.set(this.auth._key(),e)}return this.bypassAuthState||il.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nC(t,e){const n=sC(e),r=iC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function rC(t,e){il.set(t._key(),e)}function iC(t){return Cn(t._redirectPersistence)}function sC(t){return rl(eC,t.config.apiKey,t.name)}async function oC(t,e,n=!1){if(Ut(t.app))return Promise.reject(Pn(t));const r=si(t),i=QA(r,e),o=await new tC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC=10*60*1e3;class lC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Jw(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(cn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aC&&this.cachedEventUids.clear(),this.cachedEventUids.has(jg(e))}saveEventToCache(e){this.cachedEventUids.add(jg(e)),this.lastProcessedEventTime=Date.now()}}function jg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Jw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function uC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cC(t,e={}){return Pr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dC=/^https?/;async function fC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await cC(t);for(const n of e)try{if(pC(n))return}catch{}tn(t,"unauthorized-domain")}function pC(t){const e=Gh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!dC.test(n))return!1;if(hC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC=new Ho(3e4,6e4);function Fg(){const t=hn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gC(t){return new Promise((e,n)=>{var i,s,o;function r(){Fg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fg(),n(cn(t,"network-request-failed"))},timeout:mC.get()})}if((s=(i=hn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=hn().gapi)!=null&&o.load)r();else{const l=aA("iframefcb");return hn()[l]=()=>{gapi.load?r():n(cn(t,"network-request-failed"))},Ow(`${oA()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw sl=null,e})}let sl=null;function yC(t){return sl=sl||gC(t),sl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _C=new Ho(5e3,15e3),vC="__/auth/iframe",wC="emulator/auth/iframe",EC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function IC(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ff(e,wC):`https://${t.config.authDomain}/${vC}`,r={apiKey:e.apiKey,appName:t.name,v:ls},i=TC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${$o(r).slice(1)}`}async function SC(t){const e=await yC(t),n=hn().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:IC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:EC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=cn(t,"network-request-failed"),l=hn().setTimeout(()=>{s(o)},_C.get());function u(){hn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},AC=500,CC=600,kC="_blank",RC="http://localhost";class Ug{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function PC(t,e,n,r=AC,i=CC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...xC,width:r.toString(),height:i.toString(),top:s,left:o},h=ht().toLowerCase();n&&(l=Rw(h)?kC:n),Cw(h)&&(e=e||RC,u.scrollbars="yes");const p=Object.entries(u).reduce((g,[E,k])=>`${g}${E}=${k},`,"");if(Xx(h)&&l!=="_self")return bC(e||"",l),new Ug(null);const m=window.open(e||"",l,p);Z(m,t,"popup-blocked");try{m.focus()}catch{}return new Ug(m)}function bC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC="__/auth/handler",DC="emulator/auth/handler",VC=encodeURIComponent("fac");async function zg(t,e,n,r,i,s){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ls,eventId:i};if(e instanceof Fw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof qo){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),h=u?`#${VC}=${encodeURIComponent(u)}`:"";return`${LC(t)}?${$o(l).slice(1)}${h}`}function LC({config:t}){return t.emulator?ff(t,DC):`https://${t.authDomain}/${NC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc="webStorageSupport";class OC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qw,this._completeRedirectFn=oC,this._overrideRedirectResult=rC}async _openPopup(e,n,r,i){var o;On((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await zg(e,n,r,Gh(),i);return PC(e,s,_f())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await zg(e,n,r,Gh(),i);return FA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(On(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await SC(e),r=new lC(e);return n.register("authEvent",i=>(Z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wc,{type:Wc},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Wc];s!==void 0&&n(!!s),tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Vw()||kw()||mf()}}const MC=OC;var Bg="@firebase/auth",$g="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function UC(t){Xi(new Jr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Lw(t)},h=new rA(r,i,s,u);return fA(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Xi(new Jr("auth-internal",e=>{const n=si(e.getProvider("auth").getImmediate());return(r=>new jC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),pr(Bg,$g,FC(t)),pr(Bg,$g,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC=5*60,BC=cw("authIdTokenMaxAge")||zC;let Hg=null;const $C=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>BC)return;const i=n==null?void 0:n.token;Hg!==i&&(Hg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function HC(t=gw()){const e=hf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=dA(t,{popupRedirectResolver:MC,persistence:[KA,OA,qw]}),r=cw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=$C(s.toString());bA(n,o,()=>o(n.currentUser)),PA(n,l=>o(l))}}const i=lw("auth");return i&&pA(n,`http://${i}`),n}function WC(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}iA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=cn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",WC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});UC("Browser");var Wg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mr,Zw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,_){function w(){}w.prototype=_.prototype,T.D=_.prototype,T.prototype=new w,T.prototype.constructor=T,T.C=function(S,C,R){for(var I=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)I[Be-2]=arguments[Be];return _.prototype[C].apply(S,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,_,w){w||(w=0);var S=Array(16);if(typeof _=="string")for(var C=0;16>C;++C)S[C]=_.charCodeAt(w++)|_.charCodeAt(w++)<<8|_.charCodeAt(w++)<<16|_.charCodeAt(w++)<<24;else for(C=0;16>C;++C)S[C]=_[w++]|_[w++]<<8|_[w++]<<16|_[w++]<<24;_=T.g[0],w=T.g[1],C=T.g[2];var R=T.g[3],I=_+(R^w&(C^R))+S[0]+3614090360&4294967295;_=w+(I<<7&4294967295|I>>>25),I=R+(C^_&(w^C))+S[1]+3905402710&4294967295,R=_+(I<<12&4294967295|I>>>20),I=C+(w^R&(_^w))+S[2]+606105819&4294967295,C=R+(I<<17&4294967295|I>>>15),I=w+(_^C&(R^_))+S[3]+3250441966&4294967295,w=C+(I<<22&4294967295|I>>>10),I=_+(R^w&(C^R))+S[4]+4118548399&4294967295,_=w+(I<<7&4294967295|I>>>25),I=R+(C^_&(w^C))+S[5]+1200080426&4294967295,R=_+(I<<12&4294967295|I>>>20),I=C+(w^R&(_^w))+S[6]+2821735955&4294967295,C=R+(I<<17&4294967295|I>>>15),I=w+(_^C&(R^_))+S[7]+4249261313&4294967295,w=C+(I<<22&4294967295|I>>>10),I=_+(R^w&(C^R))+S[8]+1770035416&4294967295,_=w+(I<<7&4294967295|I>>>25),I=R+(C^_&(w^C))+S[9]+2336552879&4294967295,R=_+(I<<12&4294967295|I>>>20),I=C+(w^R&(_^w))+S[10]+4294925233&4294967295,C=R+(I<<17&4294967295|I>>>15),I=w+(_^C&(R^_))+S[11]+2304563134&4294967295,w=C+(I<<22&4294967295|I>>>10),I=_+(R^w&(C^R))+S[12]+1804603682&4294967295,_=w+(I<<7&4294967295|I>>>25),I=R+(C^_&(w^C))+S[13]+4254626195&4294967295,R=_+(I<<12&4294967295|I>>>20),I=C+(w^R&(_^w))+S[14]+2792965006&4294967295,C=R+(I<<17&4294967295|I>>>15),I=w+(_^C&(R^_))+S[15]+1236535329&4294967295,w=C+(I<<22&4294967295|I>>>10),I=_+(C^R&(w^C))+S[1]+4129170786&4294967295,_=w+(I<<5&4294967295|I>>>27),I=R+(w^C&(_^w))+S[6]+3225465664&4294967295,R=_+(I<<9&4294967295|I>>>23),I=C+(_^w&(R^_))+S[11]+643717713&4294967295,C=R+(I<<14&4294967295|I>>>18),I=w+(R^_&(C^R))+S[0]+3921069994&4294967295,w=C+(I<<20&4294967295|I>>>12),I=_+(C^R&(w^C))+S[5]+3593408605&4294967295,_=w+(I<<5&4294967295|I>>>27),I=R+(w^C&(_^w))+S[10]+38016083&4294967295,R=_+(I<<9&4294967295|I>>>23),I=C+(_^w&(R^_))+S[15]+3634488961&4294967295,C=R+(I<<14&4294967295|I>>>18),I=w+(R^_&(C^R))+S[4]+3889429448&4294967295,w=C+(I<<20&4294967295|I>>>12),I=_+(C^R&(w^C))+S[9]+568446438&4294967295,_=w+(I<<5&4294967295|I>>>27),I=R+(w^C&(_^w))+S[14]+3275163606&4294967295,R=_+(I<<9&4294967295|I>>>23),I=C+(_^w&(R^_))+S[3]+4107603335&4294967295,C=R+(I<<14&4294967295|I>>>18),I=w+(R^_&(C^R))+S[8]+1163531501&4294967295,w=C+(I<<20&4294967295|I>>>12),I=_+(C^R&(w^C))+S[13]+2850285829&4294967295,_=w+(I<<5&4294967295|I>>>27),I=R+(w^C&(_^w))+S[2]+4243563512&4294967295,R=_+(I<<9&4294967295|I>>>23),I=C+(_^w&(R^_))+S[7]+1735328473&4294967295,C=R+(I<<14&4294967295|I>>>18),I=w+(R^_&(C^R))+S[12]+2368359562&4294967295,w=C+(I<<20&4294967295|I>>>12),I=_+(w^C^R)+S[5]+4294588738&4294967295,_=w+(I<<4&4294967295|I>>>28),I=R+(_^w^C)+S[8]+2272392833&4294967295,R=_+(I<<11&4294967295|I>>>21),I=C+(R^_^w)+S[11]+1839030562&4294967295,C=R+(I<<16&4294967295|I>>>16),I=w+(C^R^_)+S[14]+4259657740&4294967295,w=C+(I<<23&4294967295|I>>>9),I=_+(w^C^R)+S[1]+2763975236&4294967295,_=w+(I<<4&4294967295|I>>>28),I=R+(_^w^C)+S[4]+1272893353&4294967295,R=_+(I<<11&4294967295|I>>>21),I=C+(R^_^w)+S[7]+4139469664&4294967295,C=R+(I<<16&4294967295|I>>>16),I=w+(C^R^_)+S[10]+3200236656&4294967295,w=C+(I<<23&4294967295|I>>>9),I=_+(w^C^R)+S[13]+681279174&4294967295,_=w+(I<<4&4294967295|I>>>28),I=R+(_^w^C)+S[0]+3936430074&4294967295,R=_+(I<<11&4294967295|I>>>21),I=C+(R^_^w)+S[3]+3572445317&4294967295,C=R+(I<<16&4294967295|I>>>16),I=w+(C^R^_)+S[6]+76029189&4294967295,w=C+(I<<23&4294967295|I>>>9),I=_+(w^C^R)+S[9]+3654602809&4294967295,_=w+(I<<4&4294967295|I>>>28),I=R+(_^w^C)+S[12]+3873151461&4294967295,R=_+(I<<11&4294967295|I>>>21),I=C+(R^_^w)+S[15]+530742520&4294967295,C=R+(I<<16&4294967295|I>>>16),I=w+(C^R^_)+S[2]+3299628645&4294967295,w=C+(I<<23&4294967295|I>>>9),I=_+(C^(w|~R))+S[0]+4096336452&4294967295,_=w+(I<<6&4294967295|I>>>26),I=R+(w^(_|~C))+S[7]+1126891415&4294967295,R=_+(I<<10&4294967295|I>>>22),I=C+(_^(R|~w))+S[14]+2878612391&4294967295,C=R+(I<<15&4294967295|I>>>17),I=w+(R^(C|~_))+S[5]+4237533241&4294967295,w=C+(I<<21&4294967295|I>>>11),I=_+(C^(w|~R))+S[12]+1700485571&4294967295,_=w+(I<<6&4294967295|I>>>26),I=R+(w^(_|~C))+S[3]+2399980690&4294967295,R=_+(I<<10&4294967295|I>>>22),I=C+(_^(R|~w))+S[10]+4293915773&4294967295,C=R+(I<<15&4294967295|I>>>17),I=w+(R^(C|~_))+S[1]+2240044497&4294967295,w=C+(I<<21&4294967295|I>>>11),I=_+(C^(w|~R))+S[8]+1873313359&4294967295,_=w+(I<<6&4294967295|I>>>26),I=R+(w^(_|~C))+S[15]+4264355552&4294967295,R=_+(I<<10&4294967295|I>>>22),I=C+(_^(R|~w))+S[6]+2734768916&4294967295,C=R+(I<<15&4294967295|I>>>17),I=w+(R^(C|~_))+S[13]+1309151649&4294967295,w=C+(I<<21&4294967295|I>>>11),I=_+(C^(w|~R))+S[4]+4149444226&4294967295,_=w+(I<<6&4294967295|I>>>26),I=R+(w^(_|~C))+S[11]+3174756917&4294967295,R=_+(I<<10&4294967295|I>>>22),I=C+(_^(R|~w))+S[2]+718787259&4294967295,C=R+(I<<15&4294967295|I>>>17),I=w+(R^(C|~_))+S[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(C+(I<<21&4294967295|I>>>11))&4294967295,T.g[2]=T.g[2]+C&4294967295,T.g[3]=T.g[3]+R&4294967295}r.prototype.u=function(T,_){_===void 0&&(_=T.length);for(var w=_-this.blockSize,S=this.B,C=this.h,R=0;R<_;){if(C==0)for(;R<=w;)i(this,T,R),R+=this.blockSize;if(typeof T=="string"){for(;R<_;)if(S[C++]=T.charCodeAt(R++),C==this.blockSize){i(this,S),C=0;break}}else for(;R<_;)if(S[C++]=T[R++],C==this.blockSize){i(this,S),C=0;break}}this.h=C,this.o+=_},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;var w=8*this.o;for(_=T.length-8;_<T.length;++_)T[_]=w&255,w/=256;for(this.u(T),T=Array(16),_=w=0;4>_;++_)for(var S=0;32>S;S+=8)T[w++]=this.g[_]>>>S&255;return T};function s(T,_){var w=l;return Object.prototype.hasOwnProperty.call(w,T)?w[T]:w[T]=_(T)}function o(T,_){this.h=_;for(var w=[],S=!0,C=T.length-1;0<=C;C--){var R=T[C]|0;S&&R==_||(w[C]=R,S=!1)}this.g=w}var l={};function u(T){return-128<=T&&128>T?s(T,function(_){return new o([_|0],0>_?-1:0)}):new o([T|0],0>T?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return m;if(0>T)return D(h(-T));for(var _=[],w=1,S=0;T>=w;S++)_[S]=T/w|0,w*=4294967296;return new o(_,0)}function p(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return D(p(T.substring(1),_));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(_,8)),S=m,C=0;C<T.length;C+=8){var R=Math.min(8,T.length-C),I=parseInt(T.substring(C,C+R),_);8>R?(R=h(Math.pow(_,R)),S=S.j(R).add(h(I))):(S=S.j(w),S=S.add(h(I)))}return S}var m=u(0),g=u(1),E=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-D(this).m();for(var T=0,_=1,w=0;w<this.g.length;w++){var S=this.i(w);T+=(0<=S?S:4294967296+S)*_,_*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(k(this))return"0";if(P(this))return"-"+D(this).toString(T);for(var _=h(Math.pow(T,6)),w=this,S="";;){var C=L(w,_).g;w=x(w,C.j(_));var R=((0<w.g.length?w.g[0]:w.h)>>>0).toString(T);if(w=C,k(w))return R+S;for(;6>R.length;)R="0"+R;S=R+S}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function k(T){if(T.h!=0)return!1;for(var _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function P(T){return T.h==-1}t.l=function(T){return T=x(this,T),P(T)?-1:k(T)?0:1};function D(T){for(var _=T.g.length,w=[],S=0;S<_;S++)w[S]=~T.g[S];return new o(w,~T.h).add(g)}t.abs=function(){return P(this)?D(this):this},t.add=function(T){for(var _=Math.max(this.g.length,T.g.length),w=[],S=0,C=0;C<=_;C++){var R=S+(this.i(C)&65535)+(T.i(C)&65535),I=(R>>>16)+(this.i(C)>>>16)+(T.i(C)>>>16);S=I>>>16,R&=65535,I&=65535,w[C]=I<<16|R}return new o(w,w[w.length-1]&-2147483648?-1:0)};function x(T,_){return T.add(D(_))}t.j=function(T){if(k(this)||k(T))return m;if(P(this))return P(T)?D(this).j(D(T)):D(D(this).j(T));if(P(T))return D(this.j(D(T)));if(0>this.l(E)&&0>T.l(E))return h(this.m()*T.m());for(var _=this.g.length+T.g.length,w=[],S=0;S<2*_;S++)w[S]=0;for(S=0;S<this.g.length;S++)for(var C=0;C<T.g.length;C++){var R=this.i(S)>>>16,I=this.i(S)&65535,Be=T.i(C)>>>16,Mt=T.i(C)&65535;w[2*S+2*C]+=I*Mt,v(w,2*S+2*C),w[2*S+2*C+1]+=R*Mt,v(w,2*S+2*C+1),w[2*S+2*C+1]+=I*Be,v(w,2*S+2*C+1),w[2*S+2*C+2]+=R*Be,v(w,2*S+2*C+2)}for(S=0;S<_;S++)w[S]=w[2*S+1]<<16|w[2*S];for(S=_;S<2*_;S++)w[S]=0;return new o(w,0)};function v(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function A(T,_){this.g=T,this.h=_}function L(T,_){if(k(_))throw Error("division by zero");if(k(T))return new A(m,m);if(P(T))return _=L(D(T),_),new A(D(_.g),D(_.h));if(P(_))return _=L(T,D(_)),new A(D(_.g),_.h);if(30<T.g.length){if(P(T)||P(_))throw Error("slowDivide_ only works with positive integers.");for(var w=g,S=_;0>=S.l(T);)w=$(w),S=$(S);var C=B(w,1),R=B(S,1);for(S=B(S,2),w=B(w,2);!k(S);){var I=R.add(S);0>=I.l(T)&&(C=C.add(w),R=I),S=B(S,1),w=B(w,1)}return _=x(T,C.j(_)),new A(C,_)}for(C=m;0<=T.l(_);){for(w=Math.max(1,Math.floor(T.m()/_.m())),S=Math.ceil(Math.log(w)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),R=h(w),I=R.j(_);P(I)||0<I.l(T);)w-=S,R=h(w),I=R.j(_);k(R)&&(R=g),C=C.add(R),T=x(T,I)}return new A(C,T)}t.A=function(T){return L(this,T).h},t.and=function(T){for(var _=Math.max(this.g.length,T.g.length),w=[],S=0;S<_;S++)w[S]=this.i(S)&T.i(S);return new o(w,this.h&T.h)},t.or=function(T){for(var _=Math.max(this.g.length,T.g.length),w=[],S=0;S<_;S++)w[S]=this.i(S)|T.i(S);return new o(w,this.h|T.h)},t.xor=function(T){for(var _=Math.max(this.g.length,T.g.length),w=[],S=0;S<_;S++)w[S]=this.i(S)^T.i(S);return new o(w,this.h^T.h)};function $(T){for(var _=T.g.length+1,w=[],S=0;S<_;S++)w[S]=T.i(S)<<1|T.i(S-1)>>>31;return new o(w,T.h)}function B(T,_){var w=_>>5;_%=32;for(var S=T.g.length-w,C=[],R=0;R<S;R++)C[R]=0<_?T.i(R+w)>>>_|T.i(R+w+1)<<32-_:T.i(R+w);return new o(C,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Zw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=p,mr=o}).apply(typeof Wg<"u"?Wg:typeof self<"u"?self:typeof window<"u"?window:{});var Fa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var e0,$s,t0,ol,Xh,n0,r0,i0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,f){return a==Array.prototype||a==Object.prototype||(a[c]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fa=="object"&&Fa];for(var c=0;c<a.length;++c){var f=a[c];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var f=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var b=a[y];if(!(b in f))break e;f=f[b]}a=a[a.length-1],y=f[a],c=c(y),c!=y&&c!=null&&e(f,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var f=0,y=!1,b={next:function(){if(!y&&f<a.length){var N=f++;return{value:c(N,a[N]),done:!1}}return y=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function p(a,c,f){return a.call.apply(a.bind,arguments)}function m(a,c,f){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,y),a.apply(c,b)}}return function(){return a.apply(c,arguments)}}function g(a,c,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:m,g.apply(null,arguments)}function E(a,c){var f=Array.prototype.slice.call(arguments,1);return function(){var y=f.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function k(a,c){function f(){}f.prototype=c.prototype,a.aa=c.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(y,b,N){for(var z=Array(arguments.length-2),me=2;me<arguments.length;me++)z[me-2]=arguments[me];return c.prototype[b].apply(y,z)}}function P(a){const c=a.length;if(0<c){const f=Array(c);for(let y=0;y<c;y++)f[y]=a[y];return f}return[]}function D(a,c){for(let f=1;f<arguments.length;f++){const y=arguments[f];if(u(y)){const b=a.length||0,N=y.length||0;a.length=b+N;for(let z=0;z<N;z++)a[b+z]=y[z]}else a.push(y)}}class x{constructor(c,f){this.i=c,this.j=f,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function v(a){return/^[\s\xa0]*$/.test(a)}function A(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function L(a){return L[" "](a),a}L[" "]=function(){};var $=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function B(a,c,f){for(const y in a)c.call(f,a[y],y,a)}function T(a,c){for(const f in a)c.call(void 0,a[f],f,a)}function _(a){const c={};for(const f in a)c[f]=a[f];return c}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,c){let f,y;for(let b=1;b<arguments.length;b++){y=arguments[b];for(f in y)a[f]=y[f];for(let N=0;N<w.length;N++)f=w[N],Object.prototype.hasOwnProperty.call(y,f)&&(a[f]=y[f])}}function C(a){var c=1;a=a.split(":");const f=[];for(;0<c&&a.length;)f.push(a.shift()),c--;return a.length&&f.push(a.join(":")),f}function R(a){l.setTimeout(()=>{throw a},0)}function I(){var a=G;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class Be{constructor(){this.h=this.g=null}add(c,f){const y=Mt.get();y.set(c,f),this.h?this.h.next=y:this.g=y,this.h=y}}var Mt=new x(()=>new _n,a=>a.reset());class _n{constructor(){this.next=this.g=this.h=null}set(c,f){this.h=c,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let F,O=!1,G=new Be,Q=()=>{const a=l.Promise.resolve(void 0);F=()=>{a.then(j)}};var j=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(f){R(f)}var c=Mt;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}O=!1};function X(){this.s=this.s,this.C=this.C}X.prototype.s=!1,X.prototype.ma=function(){this.s||(this.s=!0,this.N())},X.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ie(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}ie.prototype.h=function(){this.defaultPrevented=!0};var Ie=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,c),l.removeEventListener("test",f,c)}catch{}return a}();function ye(a,c){if(ie.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if($){e:{try{L(c.nodeName);var b=!0;break e}catch{}b=!1}b||(c=null)}}else f=="mouseover"?c=a.fromElement:f=="mouseout"&&(c=a.toElement);this.relatedTarget=c,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:le[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ye.aa.h.call(this)}}k(ye,ie);var le={2:"touch",3:"pen",4:"mouse"};ye.prototype.h=function(){ye.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var wt="closure_listenable_"+(1e6*Math.random()|0),ia=0;function $u(a,c,f,y,b){this.listener=a,this.proxy=null,this.src=c,this.type=f,this.capture=!!y,this.ha=b,this.key=++ia,this.da=this.fa=!1}function li(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function vn(a){this.src=a,this.g={},this.h=0}vn.prototype.add=function(a,c,f,y,b){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var z=Wu(a,c,y,b);return-1<z?(c=a[z],f||(c.fa=!1)):(c=new $u(c,this.src,N,!!y,b),c.fa=f,a.push(c)),c};function Hu(a,c){var f=c.type;if(f in a.g){var y=a.g[f],b=Array.prototype.indexOf.call(y,c,void 0),N;(N=0<=b)&&Array.prototype.splice.call(y,b,1),N&&(li(c),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Wu(a,c,f,y){for(var b=0;b<a.length;++b){var N=a[b];if(!N.da&&N.listener==c&&N.capture==!!f&&N.ha==y)return b}return-1}var qu="closure_lm_"+(1e6*Math.random()|0),Gu={};function ap(a,c,f,y,b){if(Array.isArray(c)){for(var N=0;N<c.length;N++)ap(a,c[N],f,y,b);return null}return f=cp(f),a&&a[wt]?a.K(c,f,h(y)?!!y.capture:!1,b):WE(a,c,f,!1,y,b)}function WE(a,c,f,y,b,N){if(!c)throw Error("Invalid event type");var z=h(b)?!!b.capture:!!b,me=Qu(a);if(me||(a[qu]=me=new vn(a)),f=me.add(c,f,y,z,N),f.proxy)return f;if(y=qE(),f.proxy=y,y.src=a,y.listener=f,a.addEventListener)Ie||(b=z),b===void 0&&(b=!1),a.addEventListener(c.toString(),y,b);else if(a.attachEvent)a.attachEvent(up(c.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return f}function qE(){function a(f){return c.call(a.src,a.listener,f)}const c=GE;return a}function lp(a,c,f,y,b){if(Array.isArray(c))for(var N=0;N<c.length;N++)lp(a,c[N],f,y,b);else y=h(y)?!!y.capture:!!y,f=cp(f),a&&a[wt]?(a=a.i,c=String(c).toString(),c in a.g&&(N=a.g[c],f=Wu(N,f,y,b),-1<f&&(li(N[f]),Array.prototype.splice.call(N,f,1),N.length==0&&(delete a.g[c],a.h--)))):a&&(a=Qu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Wu(c,f,y,b)),(f=-1<a?c[a]:null)&&Ku(f))}function Ku(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[wt])Hu(c.i,a);else{var f=a.type,y=a.proxy;c.removeEventListener?c.removeEventListener(f,y,a.capture):c.detachEvent?c.detachEvent(up(f),y):c.addListener&&c.removeListener&&c.removeListener(y),(f=Qu(c))?(Hu(f,a),f.h==0&&(f.src=null,c[qu]=null)):li(a)}}}function up(a){return a in Gu?Gu[a]:Gu[a]="on"+a}function GE(a,c){if(a.da)a=!0;else{c=new ye(c,this);var f=a.listener,y=a.ha||a.src;a.fa&&Ku(a),a=f.call(y,c)}return a}function Qu(a){return a=a[qu],a instanceof vn?a:null}var Yu="__closure_events_fn_"+(1e9*Math.random()>>>0);function cp(a){return typeof a=="function"?a:(a[Yu]||(a[Yu]=function(c){return a.handleEvent(c)}),a[Yu])}function tt(){X.call(this),this.i=new vn(this),this.M=this,this.F=null}k(tt,X),tt.prototype[wt]=!0,tt.prototype.removeEventListener=function(a,c,f,y){lp(this,a,c,f,y)};function dt(a,c){var f,y=a.F;if(y)for(f=[];y;y=y.F)f.push(y);if(a=a.M,y=c.type||c,typeof c=="string")c=new ie(c,a);else if(c instanceof ie)c.target=c.target||a;else{var b=c;c=new ie(y,a),S(c,b)}if(b=!0,f)for(var N=f.length-1;0<=N;N--){var z=c.g=f[N];b=sa(z,y,!0,c)&&b}if(z=c.g=a,b=sa(z,y,!0,c)&&b,b=sa(z,y,!1,c)&&b,f)for(N=0;N<f.length;N++)z=c.g=f[N],b=sa(z,y,!1,c)&&b}tt.prototype.N=function(){if(tt.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var f=a.g[c],y=0;y<f.length;y++)li(f[y]);delete a.g[c],a.h--}}this.F=null},tt.prototype.K=function(a,c,f,y){return this.i.add(String(a),c,!1,f,y)},tt.prototype.L=function(a,c,f,y){return this.i.add(String(a),c,!0,f,y)};function sa(a,c,f,y){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var b=!0,N=0;N<c.length;++N){var z=c[N];if(z&&!z.da&&z.capture==f){var me=z.listener,Ge=z.ha||z.src;z.fa&&Hu(a.i,z),b=me.call(Ge,y)!==!1&&b}}return b&&!y.defaultPrevented}function hp(a,c,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function dp(a){a.g=hp(()=>{a.g=null,a.i&&(a.i=!1,dp(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class KE extends X{constructor(c,f){super(),this.m=c,this.l=f,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:dp(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gs(a){X.call(this),this.h=a,this.g={}}k(gs,X);var fp=[];function pp(a){B(a.g,function(c,f){this.g.hasOwnProperty(f)&&Ku(c)},a),a.g={}}gs.prototype.N=function(){gs.aa.N.call(this),pp(this)},gs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xu=l.JSON.stringify,QE=l.JSON.parse,YE=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ju(){}Ju.prototype.h=null;function mp(a){return a.h||(a.h=a.i())}function gp(){}var ys={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Zu(){ie.call(this,"d")}k(Zu,ie);function ec(){ie.call(this,"c")}k(ec,ie);var Dr={},yp=null;function oa(){return yp=yp||new tt}Dr.La="serverreachability";function _p(a){ie.call(this,Dr.La,a)}k(_p,ie);function _s(a){const c=oa();dt(c,new _p(c))}Dr.STAT_EVENT="statevent";function vp(a,c){ie.call(this,Dr.STAT_EVENT,a),this.stat=c}k(vp,ie);function ft(a){const c=oa();dt(c,new vp(c,a))}Dr.Ma="timingevent";function wp(a,c){ie.call(this,Dr.Ma,a),this.size=c}k(wp,ie);function vs(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function ws(){this.g=!0}ws.prototype.xa=function(){this.g=!1};function XE(a,c,f,y,b,N){a.info(function(){if(a.g)if(N)for(var z="",me=N.split("&"),Ge=0;Ge<me.length;Ge++){var de=me[Ge].split("=");if(1<de.length){var nt=de[0];de=de[1];var rt=nt.split("_");z=2<=rt.length&&rt[1]=="type"?z+(nt+"="+de+"&"):z+(nt+"=redacted&")}}else z=null;else z=N;return"XMLHTTP REQ ("+y+") [attempt "+b+"]: "+c+`
`+f+`
`+z})}function JE(a,c,f,y,b,N,z){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+b+"]: "+c+`
`+f+`
`+N+" "+z})}function ui(a,c,f,y){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+eT(a,f)+(y?" "+y:"")})}function ZE(a,c){a.info(function(){return"TIMEOUT: "+c})}ws.prototype.info=function(){};function eT(a,c){if(!a.g)return c;if(!c)return null;try{var f=JSON.parse(c);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var y=f[a];if(!(2>y.length)){var b=y[1];if(Array.isArray(b)&&!(1>b.length)){var N=b[0];if(N!="noop"&&N!="stop"&&N!="close")for(var z=1;z<b.length;z++)b[z]=""}}}}return Xu(f)}catch{return c}}var aa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ep={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},tc;function la(){}k(la,Ju),la.prototype.g=function(){return new XMLHttpRequest},la.prototype.i=function(){return{}},tc=new la;function zn(a,c,f,y){this.j=a,this.i=c,this.l=f,this.R=y||1,this.U=new gs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Tp}function Tp(){this.i=null,this.g="",this.h=!1}var Ip={},nc={};function rc(a,c,f){a.L=1,a.v=da(wn(c)),a.m=f,a.P=!0,Sp(a,null)}function Sp(a,c){a.F=Date.now(),ua(a),a.A=wn(a.v);var f=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),jp(f.i,"t",y),a.C=0,f=a.j.J,a.h=new Tp,a.g=nm(a.j,f?c:null,!a.m),0<a.O&&(a.M=new KE(g(a.Y,a,a.g),a.O)),c=a.U,f=a.g,y=a.ca;var b="readystatechange";Array.isArray(b)||(b&&(fp[0]=b.toString()),b=fp);for(var N=0;N<b.length;N++){var z=ap(f,b[N],y||c.handleEvent,!1,c.h||c);if(!z)break;c.g[z.key]=z}c=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),_s(),XE(a.i,a.u,a.A,a.l,a.R,a.m)}zn.prototype.ca=function(a){a=a.target;const c=this.M;c&&En(a)==3?c.j():this.Y(a)},zn.prototype.Y=function(a){try{if(a==this.g)e:{const rt=En(this.g);var c=this.g.Ba();const di=this.g.Z();if(!(3>rt)&&(rt!=3||this.g&&(this.h.h||this.g.oa()||Wp(this.g)))){this.J||rt!=4||c==7||(c==8||0>=di?_s(3):_s(2)),ic(this);var f=this.g.Z();this.X=f;t:if(xp(this)){var y=Wp(this.g);a="";var b=y.length,N=En(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vr(this),Es(this);var z="";break t}this.h.i=new l.TextDecoder}for(c=0;c<b;c++)this.h.h=!0,a+=this.h.i.decode(y[c],{stream:!(N&&c==b-1)});y.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=f==200,JE(this.i,this.u,this.A,this.l,this.R,rt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var me,Ge=this.g;if((me=Ge.g?Ge.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(me)){var de=me;break t}}de=null}if(f=de)ui(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,sc(this,f);else{this.o=!1,this.s=3,ft(12),Vr(this),Es(this);break e}}if(this.P){f=!0;let qt;for(;!this.J&&this.C<z.length;)if(qt=tT(this,z),qt==nc){rt==4&&(this.s=4,ft(14),f=!1),ui(this.i,this.l,null,"[Incomplete Response]");break}else if(qt==Ip){this.s=4,ft(15),ui(this.i,this.l,z,"[Invalid Chunk]"),f=!1;break}else ui(this.i,this.l,qt,null),sc(this,qt);if(xp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),rt!=4||z.length!=0||this.h.h||(this.s=1,ft(16),f=!1),this.o=this.o&&f,!f)ui(this.i,this.l,z,"[Invalid Chunked Response]"),Vr(this),Es(this);else if(0<z.length&&!this.W){this.W=!0;var nt=this.j;nt.g==this&&nt.ba&&!nt.M&&(nt.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),hc(nt),nt.M=!0,ft(11))}}else ui(this.i,this.l,z,null),sc(this,z);rt==4&&Vr(this),this.o&&!this.J&&(rt==4?Jp(this.j,this):(this.o=!1,ua(this)))}else _T(this.g),f==400&&0<z.indexOf("Unknown SID")?(this.s=3,ft(12)):(this.s=0,ft(13)),Vr(this),Es(this)}}}catch{}finally{}};function xp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function tT(a,c){var f=a.C,y=c.indexOf(`
`,f);return y==-1?nc:(f=Number(c.substring(f,y)),isNaN(f)?Ip:(y+=1,y+f>c.length?nc:(c=c.slice(y,y+f),a.C=y+f,c)))}zn.prototype.cancel=function(){this.J=!0,Vr(this)};function ua(a){a.S=Date.now()+a.I,Ap(a,a.I)}function Ap(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=vs(g(a.ba,a),c)}function ic(a){a.B&&(l.clearTimeout(a.B),a.B=null)}zn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(ZE(this.i,this.A),this.L!=2&&(_s(),ft(17)),Vr(this),this.s=2,Es(this)):Ap(this,this.S-a)};function Es(a){a.j.G==0||a.J||Jp(a.j,a)}function Vr(a){ic(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,pp(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function sc(a,c){try{var f=a.j;if(f.G!=0&&(f.g==a||oc(f.h,a))){if(!a.K&&oc(f.h,a)&&f.G==3){try{var y=f.Da.g.parse(c)}catch{y=null}if(Array.isArray(y)&&y.length==3){var b=y;if(b[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)_a(f),ga(f);else break e;cc(f),ft(18)}}else f.za=b[1],0<f.za-f.T&&37500>b[2]&&f.F&&f.v==0&&!f.C&&(f.C=vs(g(f.Za,f),6e3));if(1>=Rp(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Or(f,11)}else if((a.K||f.g==a)&&_a(f),!v(c))for(b=f.Da.g.parse(c),c=0;c<b.length;c++){let de=b[c];if(f.T=de[0],de=de[1],f.G==2)if(de[0]=="c"){f.K=de[1],f.ia=de[2];const nt=de[3];nt!=null&&(f.la=nt,f.j.info("VER="+f.la));const rt=de[4];rt!=null&&(f.Aa=rt,f.j.info("SVER="+f.Aa));const di=de[5];di!=null&&typeof di=="number"&&0<di&&(y=1.5*di,f.L=y,f.j.info("backChannelRequestTimeoutMs_="+y)),y=f;const qt=a.g;if(qt){const wa=qt.g?qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(wa){var N=y.h;N.g||wa.indexOf("spdy")==-1&&wa.indexOf("quic")==-1&&wa.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(ac(N,N.h),N.h=null))}if(y.D){const dc=qt.g?qt.g.getResponseHeader("X-HTTP-Session-Id"):null;dc&&(y.ya=dc,_e(y.I,y.D,dc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),y=f;var z=a;if(y.qa=tm(y,y.J?y.ia:null,y.W),z.K){Pp(y.h,z);var me=z,Ge=y.L;Ge&&(me.I=Ge),me.B&&(ic(me),ua(me)),y.g=z}else Yp(y);0<f.i.length&&ya(f)}else de[0]!="stop"&&de[0]!="close"||Or(f,7);else f.G==3&&(de[0]=="stop"||de[0]=="close"?de[0]=="stop"?Or(f,7):uc(f):de[0]!="noop"&&f.l&&f.l.ta(de),f.v=0)}}_s(4)}catch{}}var nT=class{constructor(a,c){this.g=a,this.map=c}};function Cp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function kp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Rp(a){return a.h?1:a.g?a.g.size:0}function oc(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function ac(a,c){a.g?a.g.add(c):a.h=c}function Pp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Cp.prototype.cancel=function(){if(this.i=bp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function bp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const f of a.g.values())c=c.concat(f.D);return c}return P(a.i)}function rT(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],f=a.length,y=0;y<f;y++)c.push(a[y]);return c}c=[],f=0;for(y in a)c[f++]=a[y];return c}function iT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var f=0;f<a;f++)c.push(f);return c}c=[],f=0;for(const y in a)c[f++]=y;return c}}}function Np(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var f=iT(a),y=rT(a),b=y.length,N=0;N<b;N++)c.call(void 0,y[N],f&&f[N],a)}var Dp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sT(a,c){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var y=a[f].indexOf("="),b=null;if(0<=y){var N=a[f].substring(0,y);b=a[f].substring(y+1)}else N=a[f];c(N,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Lr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Lr){this.h=a.h,ca(this,a.j),this.o=a.o,this.g=a.g,ha(this,a.s),this.l=a.l;var c=a.i,f=new Ss;f.i=c.i,c.g&&(f.g=new Map(c.g),f.h=c.h),Vp(this,f),this.m=a.m}else a&&(c=String(a).match(Dp))?(this.h=!1,ca(this,c[1]||"",!0),this.o=Ts(c[2]||""),this.g=Ts(c[3]||"",!0),ha(this,c[4]),this.l=Ts(c[5]||"",!0),Vp(this,c[6]||"",!0),this.m=Ts(c[7]||"")):(this.h=!1,this.i=new Ss(null,this.h))}Lr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(Is(c,Lp,!0),":");var f=this.g;return(f||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Is(c,Lp,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Is(f,f.charAt(0)=="/"?lT:aT,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Is(f,cT)),a.join("")};function wn(a){return new Lr(a)}function ca(a,c,f){a.j=f?Ts(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function ha(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function Vp(a,c,f){c instanceof Ss?(a.i=c,hT(a.i,a.h)):(f||(c=Is(c,uT)),a.i=new Ss(c,a.h))}function _e(a,c,f){a.i.set(c,f)}function da(a){return _e(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ts(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Is(a,c,f){return typeof a=="string"?(a=encodeURI(a).replace(c,oT),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function oT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Lp=/[#\/\?@]/g,aT=/[#\?:]/g,lT=/[#\?]/g,uT=/[#\?@]/g,cT=/#/g;function Ss(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Bn(a){a.g||(a.g=new Map,a.h=0,a.i&&sT(a.i,function(c,f){a.add(decodeURIComponent(c.replace(/\+/g," ")),f)}))}t=Ss.prototype,t.add=function(a,c){Bn(this),this.i=null,a=ci(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(c),this.h+=1,this};function Op(a,c){Bn(a),c=ci(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Mp(a,c){return Bn(a),c=ci(a,c),a.g.has(c)}t.forEach=function(a,c){Bn(this),this.g.forEach(function(f,y){f.forEach(function(b){a.call(c,b,y,this)},this)},this)},t.na=function(){Bn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),f=[];for(let y=0;y<c.length;y++){const b=a[y];for(let N=0;N<b.length;N++)f.push(c[y])}return f},t.V=function(a){Bn(this);let c=[];if(typeof a=="string")Mp(this,a)&&(c=c.concat(this.g.get(ci(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)c=c.concat(a[f])}return c},t.set=function(a,c){return Bn(this),this.i=null,a=ci(this,a),Mp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function jp(a,c,f){Op(a,c),0<f.length&&(a.i=null,a.g.set(ci(a,c),P(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var f=0;f<c.length;f++){var y=c[f];const N=encodeURIComponent(String(y)),z=this.V(y);for(y=0;y<z.length;y++){var b=N;z[y]!==""&&(b+="="+encodeURIComponent(String(z[y]))),a.push(b)}}return this.i=a.join("&")};function ci(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function hT(a,c){c&&!a.j&&(Bn(a),a.i=null,a.g.forEach(function(f,y){var b=y.toLowerCase();y!=b&&(Op(this,y),jp(this,b,f))},a)),a.j=c}function dT(a,c){const f=new ws;if(l.Image){const y=new Image;y.onload=E($n,f,"TestLoadImage: loaded",!0,c,y),y.onerror=E($n,f,"TestLoadImage: error",!1,c,y),y.onabort=E($n,f,"TestLoadImage: abort",!1,c,y),y.ontimeout=E($n,f,"TestLoadImage: timeout",!1,c,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else c(!1)}function fT(a,c){const f=new ws,y=new AbortController,b=setTimeout(()=>{y.abort(),$n(f,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:y.signal}).then(N=>{clearTimeout(b),N.ok?$n(f,"TestPingServer: ok",!0,c):$n(f,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(b),$n(f,"TestPingServer: error",!1,c)})}function $n(a,c,f,y,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),y(f)}catch{}}function pT(){this.g=new YE}function mT(a,c,f){const y=f||"";try{Np(a,function(b,N){let z=b;h(b)&&(z=Xu(b)),c.push(y+N+"="+encodeURIComponent(z))})}catch(b){throw c.push(y+"type="+encodeURIComponent("_badmap")),b}}function fa(a){this.l=a.Ub||null,this.j=a.eb||!1}k(fa,Ju),fa.prototype.g=function(){return new pa(this.l,this.j)},fa.prototype.i=function(a){return function(){return a}}({});function pa(a,c){tt.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(pa,tt),t=pa.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,As(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,As(this)),this.g&&(this.readyState=3,As(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?xs(this):As(this),this.readyState==3&&Fp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,xs(this))},t.Qa=function(a){this.g&&(this.response=a,xs(this))},t.ga=function(){this.g&&xs(this)};function xs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,As(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var f=c.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=c.next();return a.join(`\r
`)};function As(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(pa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Up(a){let c="";return B(a,function(f,y){c+=y,c+=":",c+=f,c+=`\r
`}),c}function lc(a,c,f){e:{for(y in f){var y=!1;break e}y=!0}y||(f=Up(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):_e(a,c,f))}function ke(a){tt.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(ke,tt);var gT=/^https?$/i,yT=["POST","PUT"];t=ke.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,f,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():tc.g(),this.v=this.o?mp(this.o):mp(tc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(N){zp(this,N);return}if(a=f||"",f=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var b in y)f.set(b,y[b]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const N of y.keys())f.set(N,y.get(N));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(f.keys()).find(N=>N.toLowerCase()=="content-type"),b=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(yT,c,void 0))||y||b||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,z]of f)this.g.setRequestHeader(N,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hp(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){zp(this,N)}};function zp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,Bp(a),ma(a)}function Bp(a){a.A||(a.A=!0,dt(a,"complete"),dt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,dt(this,"complete"),dt(this,"abort"),ma(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ma(this,!0)),ke.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?$p(this):this.bb())},t.bb=function(){$p(this)};function $p(a){if(a.h&&typeof o<"u"&&(!a.v[1]||En(a)!=4||a.Z()!=2)){if(a.u&&En(a)==4)hp(a.Ea,0,a);else if(dt(a,"readystatechange"),En(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var f;if(!(f=c)){var y;if(y=z===0){var b=String(a.D).match(Dp)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),y=!gT.test(b?b.toLowerCase():"")}f=y}if(f)dt(a,"complete"),dt(a,"success");else{a.m=6;try{var N=2<En(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",Bp(a)}}finally{ma(a)}}}}function ma(a,c){if(a.g){Hp(a);const f=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||dt(a,"ready");try{f.onreadystatechange=y}catch{}}}function Hp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function En(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<En(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),QE(c)}};function Wp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function _T(a){const c={};a=(a.g&&2<=En(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(v(a[y]))continue;var f=C(a[y]);const b=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const N=c[b]||[];c[b]=N,N.push(f)}T(c,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Cs(a,c,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||c}function qp(a){this.Aa=0,this.i=[],this.j=new ws,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Cs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Cs("baseRetryDelayMs",5e3,a),this.cb=Cs("retryDelaySeedMs",1e4,a),this.Wa=Cs("forwardChannelMaxRetries",2,a),this.wa=Cs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Cp(a&&a.concurrentRequestLimit),this.Da=new pT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=qp.prototype,t.la=8,t.G=1,t.connect=function(a,c,f,y){ft(0),this.W=a,this.H=c||{},f&&y!==void 0&&(this.H.OSID=f,this.H.OAID=y),this.F=this.X,this.I=tm(this,null,this.W),ya(this)};function uc(a){if(Gp(a),a.G==3){var c=a.U++,f=wn(a.I);if(_e(f,"SID",a.K),_e(f,"RID",c),_e(f,"TYPE","terminate"),ks(a,f),c=new zn(a,a.j,c),c.L=2,c.v=da(wn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=c.v,f=!0),f||(c.g=nm(c.j,null),c.g.ea(c.v)),c.F=Date.now(),ua(c)}em(a)}function ga(a){a.g&&(hc(a),a.g.cancel(),a.g=null)}function Gp(a){ga(a),a.u&&(l.clearTimeout(a.u),a.u=null),_a(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ya(a){if(!kp(a.h)&&!a.s){a.s=!0;var c=a.Ga;F||Q(),O||(F(),O=!0),G.add(c,a),a.B=0}}function vT(a,c){return Rp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=vs(g(a.Ga,a,c),Zp(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const b=new zn(this,this.j,a);let N=this.o;if(this.S&&(N?(N=_(N),S(N,this.S)):N=this.S),this.m!==null||this.O||(b.H=N,N=null),this.P)e:{for(var c=0,f=0;f<this.i.length;f++){t:{var y=this.i[f];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(c+=y,4096<c){c=f;break e}if(c===4096||f===this.i.length-1){c=f+1;break e}}c=1e3}else c=1e3;c=Qp(this,b,c),f=wn(this.I),_e(f,"RID",a),_e(f,"CVER",22),this.D&&_e(f,"X-HTTP-Session-Id",this.D),ks(this,f),N&&(this.O?c="headers="+encodeURIComponent(String(Up(N)))+"&"+c:this.m&&lc(f,this.m,N)),ac(this.h,b),this.Ua&&_e(f,"TYPE","init"),this.P?(_e(f,"$req",c),_e(f,"SID","null"),b.T=!0,rc(b,f,null)):rc(b,f,c),this.G=2}}else this.G==3&&(a?Kp(this,a):this.i.length==0||kp(this.h)||Kp(this))};function Kp(a,c){var f;c?f=c.l:f=a.U++;const y=wn(a.I);_e(y,"SID",a.K),_e(y,"RID",f),_e(y,"AID",a.T),ks(a,y),a.m&&a.o&&lc(y,a.m,a.o),f=new zn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),c&&(a.i=c.D.concat(a.i)),c=Qp(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ac(a.h,f),rc(f,y,c)}function ks(a,c){a.H&&B(a.H,function(f,y){_e(c,y,f)}),a.l&&Np({},function(f,y){_e(c,y,f)})}function Qp(a,c,f){f=Math.min(a.i.length,f);var y=a.l?g(a.l.Na,a.l,a):null;e:{var b=a.i;let N=-1;for(;;){const z=["count="+f];N==-1?0<f?(N=b[0].g,z.push("ofs="+N)):N=0:z.push("ofs="+N);let me=!0;for(let Ge=0;Ge<f;Ge++){let de=b[Ge].g;const nt=b[Ge].map;if(de-=N,0>de)N=Math.max(0,b[Ge].g-100),me=!1;else try{mT(nt,z,"req"+de+"_")}catch{y&&y(nt)}}if(me){y=z.join("&");break e}}}return a=a.i.splice(0,f),c.D=a,y}function Yp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;F||Q(),O||(F(),O=!0),G.add(c,a),a.v=0}}function cc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=vs(g(a.Fa,a),Zp(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Xp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=vs(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ft(10),ga(this),Xp(this))};function hc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Xp(a){a.g=new zn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=wn(a.qa);_e(c,"RID","rpc"),_e(c,"SID",a.K),_e(c,"AID",a.T),_e(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&_e(c,"TO",a.ja),_e(c,"TYPE","xmlhttp"),ks(a,c),a.m&&a.o&&lc(c,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=da(wn(c)),f.m=null,f.P=!0,Sp(f,a)}t.Za=function(){this.C!=null&&(this.C=null,ga(this),cc(this),ft(19))};function _a(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Jp(a,c){var f=null;if(a.g==c){_a(a),hc(a),a.g=null;var y=2}else if(oc(a.h,c))f=c.D,Pp(a.h,c),y=1;else return;if(a.G!=0){if(c.o)if(y==1){f=c.m?c.m.length:0,c=Date.now()-c.F;var b=a.B;y=oa(),dt(y,new wp(y,f)),ya(a)}else Yp(a);else if(b=c.s,b==3||b==0&&0<c.X||!(y==1&&vT(a,c)||y==2&&cc(a)))switch(f&&0<f.length&&(c=a.h,c.i=c.i.concat(f)),b){case 1:Or(a,5);break;case 4:Or(a,10);break;case 3:Or(a,6);break;default:Or(a,2)}}}function Zp(a,c){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*c}function Or(a,c){if(a.j.info("Error code "+c),c==2){var f=g(a.fb,a),y=a.Xa;const b=!y;y=new Lr(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ca(y,"https"),da(y),b?dT(y.toString(),f):fT(y.toString(),f)}else ft(2);a.G=0,a.l&&a.l.sa(c),em(a),Gp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function em(a){if(a.G=0,a.ka=[],a.l){const c=bp(a.h);(c.length!=0||a.i.length!=0)&&(D(a.ka,c),D(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function tm(a,c,f){var y=f instanceof Lr?wn(f):new Lr(f);if(y.g!="")c&&(y.g=c+"."+y.g),ha(y,y.s);else{var b=l.location;y=b.protocol,c=c?c+"."+b.hostname:b.hostname,b=+b.port;var N=new Lr(null);y&&ca(N,y),c&&(N.g=c),b&&ha(N,b),f&&(N.l=f),y=N}return f=a.D,c=a.ya,f&&c&&_e(y,f,c),_e(y,"VER",a.la),ks(a,y),y}function nm(a,c,f){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new ke(new fa({eb:f})):new ke(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function rm(){}t=rm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function va(){}va.prototype.g=function(a,c){return new Ct(a,c)};function Ct(a,c){tt.call(this),this.g=new qp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!v(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!v(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new hi(this)}k(Ct,tt),Ct.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){uc(this.g)},Ct.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Xu(a),a=f);c.i.push(new nT(c.Ya++,a)),c.G==3&&ya(c)},Ct.prototype.N=function(){this.g.l=null,delete this.j,uc(this.g),delete this.g,Ct.aa.N.call(this)};function im(a){Zu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const f in c){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}k(im,Zu);function sm(){ec.call(this),this.status=1}k(sm,ec);function hi(a){this.g=a}k(hi,rm),hi.prototype.ua=function(){dt(this.g,"a")},hi.prototype.ta=function(a){dt(this.g,new im(a))},hi.prototype.sa=function(a){dt(this.g,new sm)},hi.prototype.ra=function(){dt(this.g,"b")},va.prototype.createWebChannel=va.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,i0=function(){return new va},r0=function(){return oa()},n0=Dr,Xh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},aa.NO_ERROR=0,aa.TIMEOUT=8,aa.HTTP_ERROR=6,ol=aa,Ep.COMPLETE="complete",t0=Ep,gp.EventType=ys,ys.OPEN="a",ys.CLOSE="b",ys.ERROR="c",ys.MESSAGE="d",tt.prototype.listen=tt.prototype.K,$s=gp,ke.prototype.listenOnce=ke.prototype.L,ke.prototype.getLastError=ke.prototype.Ka,ke.prototype.getLastErrorCode=ke.prototype.Ba,ke.prototype.getStatus=ke.prototype.Z,ke.prototype.getResponseJson=ke.prototype.Oa,ke.prototype.getResponseText=ke.prototype.oa,ke.prototype.send=ke.prototype.ea,ke.prototype.setWithCredentials=ke.prototype.Ha,e0=ke}).apply(typeof Fa<"u"?Fa:typeof self<"u"?self:typeof window<"u"?window:{});const qg="@firebase/firestore",Gg="4.9.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cs="12.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=new uf("@firebase/firestore");function mi(){return ti.logLevel}function W(t,...e){if(ti.logLevel<=se.DEBUG){const n=e.map(wf);ti.debug(`Firestore (${cs}): ${t}`,...n)}}function Mn(t,...e){if(ti.logLevel<=se.ERROR){const n=e.map(wf);ti.error(`Firestore (${cs}): ${t}`,...n)}}function Ji(t,...e){if(ti.logLevel<=se.WARN){const n=e.map(wf);ti.warn(`Firestore (${cs}): ${t}`,...n)}}function wf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,s0(t,r,n)}function s0(t,e,n){let r=`FIRESTORE (${cs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Mn(r),new Error(r)}function ce(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||s0(e,i,r)}function ne(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends Un{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class GC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class KC{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ce(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new dn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new dn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new dn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ce(typeof r.accessToken=="string",31837,{l:r}),new o0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string",2055,{h:e}),new at(e)}}class QC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=at.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class YC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new QC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Kg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ut(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ce(this.o===void 0,3512);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Kg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ce(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Kg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=JC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function Jh(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return qc(i)===qc(s)?oe(i,s):qc(i)?1:-1}return oe(t.length,e.length)}const ZC=55296,ek=57343;function qc(t){const e=t.charCodeAt(0);return e>=ZC&&e<=ek}function Zi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg="__name__";class on{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Y(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return on.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof on?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=on.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return oe(e.length,n.length)}static compareSegments(e,n){const r=on.isNumericId(e),i=on.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?on.extractNumericId(e).compare(on.extractNumericId(n)):Jh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return mr.fromString(e.substring(4,e.length-2))}}class pe extends on{construct(e,n,r){return new pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new pe(n)}static emptyPath(){return new pe([])}}const tk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends on{construct(e,n,r){return new Xe(e,n,r)}static isValidIdentifier(e){return tk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Qg}static keyField(){return new Xe([Qg])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new H(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new H(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(pe.fromString(e))}static fromName(e){return new K(pe.fromString(e).popFirst(5))}static empty(){return new K(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new pe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a0(t,e,n){if(!n)throw new H(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function nk(t,e,n,r){if(e===!0&&r===!0)throw new H(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Yg(t){if(!K.isDocumentKey(t))throw new H(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Xg(t){if(K.isDocumentKey(t))throw new H(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function l0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Au(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y(12329,{type:typeof t})}function gn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Au(t);throw new H(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ko(t,e){if(!l0(t))throw new H(V.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new H(V.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg=-62135596800,Zg=1e6;class we{static now(){return we.fromMillis(Date.now())}static fromDate(e){return we.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Zg);return new we(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Jg)throw new H(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Zg}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:we._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ko(e,we._jsonSchema))return new we(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Jg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}we._jsonSchemaVersion="firestore/timestamp/1.0",we._jsonSchema={type:Me("string",we._jsonSchemaVersion),seconds:Me("number"),nanoseconds:Me("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{static fromTimestamp(e){return new J(e)}static min(){return new J(new we(0,0))}static max(){return new J(new we(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=-1;function rk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new we(n+1,0):new we(n,r));return new wr(i,K.empty(),e)}function ik(t){return new wr(t.readTime,t.key,Po)}class wr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new wr(J.min(),K.empty(),Po)}static max(){return new wr(J.max(),K.empty(),Po)}}function sk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ak{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hs(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==ok)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(p=>{o[h]=p,++l,l===s&&r(o)},p=>i(p))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function lk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ds(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Cu.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf=-1;function Qo(t){return t==null}function Hl(t){return t===0&&1/t==-1/0}function uk(t){return typeof t=="number"&&Number.isInteger(t)&&!Hl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0="";function ck(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ey(e)),e=hk(t.get(n),e);return ey(e)}function hk(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case u0:n+="";break;default:n+=s}}return n}function ey(t){return t+u0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function br(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function c0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n){this.comparator=e,this.root=n||Qe.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ua(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ua(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ua(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ua(this.root,e,this.comparator,!0)}}class Ua{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Qe.RED,this.left=i??Qe.EMPTY,this.right=s??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Qe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Qe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Y(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Y(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Y(27949);return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw Y(57766)}get value(){throw Y(16141)}get color(){throw Y(16727)}get left(){throw Y(29726)}get right(){throw Y(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new Qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ny(this.data.getIterator())}getIteratorFrom(e){return new ny(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ze(this.comparator);return n.data=e,n}}class ny{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new bt([])}unionWith(e){let n=new ze(Xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Zi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new h0("Invalid base64 string: "+s):s}}(e);return new et(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const dk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Er(t){if(ce(!!t,39018),typeof t=="string"){let e=0;const n=dk.exec(t);if(ce(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Tr(t){return typeof t=="string"?et.fromBase64String(t):et.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0="server_timestamp",f0="__type__",p0="__previous_value__",m0="__local_write_time__";function If(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[f0])==null?void 0:r.stringValue)===d0}function ku(t){const e=t.mapValue.fields[p0];return If(e)?ku(e):e}function bo(t){const e=Er(t.mapValue.fields[m0].timestampValue);return new we(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e,n,r,i,s,o,l,u,h,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=p}}const Wl="(default)";class No{constructor(e,n){this.projectId=e,this.database=n||Wl}static empty(){return new No("","")}get isDefaultDatabase(){return this.database===Wl}isEqual(e){return e instanceof No&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0="__type__",pk="__max__",za={mapValue:{}},y0="__vector__",ql="value";function Ir(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?If(t)?4:gk(t)?9007199254740991:mk(t)?10:11:Y(28295,{value:t})}function yn(t,e){if(t===e)return!0;const n=Ir(t);if(n!==Ir(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return bo(t).isEqual(bo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Er(i.timestampValue),l=Er(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Tr(i.bytesValue).isEqual(Tr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return be(i.geoPointValue.latitude)===be(s.geoPointValue.latitude)&&be(i.geoPointValue.longitude)===be(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return be(i.integerValue)===be(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=be(i.doubleValue),l=be(s.doubleValue);return o===l?Hl(o)===Hl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Zi(t.arrayValue.values||[],e.arrayValue.values||[],yn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(ty(o)!==ty(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!yn(o[u],l[u])))return!1;return!0}(t,e);default:return Y(52216,{left:t})}}function Do(t,e){return(t.values||[]).find(n=>yn(n,e))!==void 0}function es(t,e){if(t===e)return 0;const n=Ir(t),r=Ir(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=be(s.integerValue||s.doubleValue),u=be(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return ry(t.timestampValue,e.timestampValue);case 4:return ry(bo(t),bo(e));case 5:return Jh(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Tr(s),u=Tr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const p=oe(l[h],u[h]);if(p!==0)return p}return oe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=oe(be(s.latitude),be(o.latitude));return l!==0?l:oe(be(s.longitude),be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return iy(t.arrayValue,e.arrayValue);case 10:return function(s,o){var g,E,k,P;const l=s.fields||{},u=o.fields||{},h=(g=l[ql])==null?void 0:g.arrayValue,p=(E=u[ql])==null?void 0:E.arrayValue,m=oe(((k=h==null?void 0:h.values)==null?void 0:k.length)||0,((P=p==null?void 0:p.values)==null?void 0:P.length)||0);return m!==0?m:iy(h,p)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===za.mapValue&&o===za.mapValue)return 0;if(s===za.mapValue)return 1;if(o===za.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},p=Object.keys(h);u.sort(),p.sort();for(let m=0;m<u.length&&m<p.length;++m){const g=Jh(u[m],p[m]);if(g!==0)return g;const E=es(l[u[m]],h[p[m]]);if(E!==0)return E}return oe(u.length,p.length)}(t.mapValue,e.mapValue);default:throw Y(23264,{he:n})}}function ry(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=Er(t),r=Er(e),i=oe(n.seconds,r.seconds);return i!==0?i:oe(n.nanos,r.nanos)}function iy(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=es(n[i],r[i]);if(s)return s}return oe(n.length,r.length)}function ts(t){return Zh(t)}function Zh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Er(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Tr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Zh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Zh(n.fields[o])}`;return i+"}"}(t.mapValue):Y(61005,{value:t})}function al(t){switch(Ir(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ku(t);return e?16+al(e):16;case 5:return 2*t.stringValue.length;case 6:return Tr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+al(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return br(r.fields,(s,o)=>{i+=s.length+al(o)}),i}(t.mapValue);default:throw Y(13486,{value:t})}}function sy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ed(t){return!!t&&"integerValue"in t}function Sf(t){return!!t&&"arrayValue"in t}function oy(t){return!!t&&"nullValue"in t}function ay(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ll(t){return!!t&&"mapValue"in t}function mk(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[g0])==null?void 0:r.stringValue)===y0}function io(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return br(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=io(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=io(t.arrayValue.values[n]);return e}return{...t}}function gk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===pk}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ll(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=io(n)}setAll(e){let n=Xe.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=io(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ll(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return yn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ll(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){br(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new mt(io(this.value))}}function _0(t){const e=[];return br(t.fields,(n,r)=>{const i=new Xe([n]);if(ll(r)){const s=_0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new We(e,0,J.min(),J.min(),J.min(),mt.empty(),0)}static newFoundDocument(e,n,r,i){return new We(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new We(e,2,n,J.min(),J.min(),mt.empty(),0)}static newUnknownDocument(e,n){return new We(e,3,n,J.min(),J.min(),mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof We&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new We(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,n){this.position=e,this.inclusive=n}}function ly(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=es(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function uy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!yn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,n="asc"){this.field=e,this.dir=n}}function yk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{}class Oe extends v0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new vk(e,n,r):n==="array-contains"?new Tk(e,r):n==="in"?new Ik(e,r):n==="not-in"?new Sk(e,r):n==="array-contains-any"?new xk(e,r):new Oe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new wk(e,r):new Ek(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(es(n,this.value)):n!==null&&Ir(this.value)===Ir(n)&&this.matchesComparison(es(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nn extends v0{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new nn(e,n)}matches(e){return w0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function w0(t){return t.op==="and"}function E0(t){return _k(t)&&w0(t)}function _k(t){for(const e of t.filters)if(e instanceof nn)return!1;return!0}function td(t){if(t instanceof Oe)return t.field.canonicalString()+t.op.toString()+ts(t.value);if(E0(t))return t.filters.map(e=>td(e)).join(",");{const e=t.filters.map(n=>td(n)).join(",");return`${t.op}(${e})`}}function T0(t,e){return t instanceof Oe?function(r,i){return i instanceof Oe&&r.op===i.op&&r.field.isEqual(i.field)&&yn(r.value,i.value)}(t,e):t instanceof nn?function(r,i){return i instanceof nn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&T0(o,i.filters[l]),!0):!1}(t,e):void Y(19439)}function I0(t){return t instanceof Oe?function(n){return`${n.field.canonicalString()} ${n.op} ${ts(n.value)}`}(t):t instanceof nn?function(n){return n.op.toString()+" {"+n.getFilters().map(I0).join(" ,")+"}"}(t):"Filter"}class vk extends Oe{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class wk extends Oe{constructor(e,n){super(e,"in",n),this.keys=S0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Ek extends Oe{constructor(e,n){super(e,"not-in",n),this.keys=S0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function S0(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class Tk extends Oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Sf(n)&&Do(n.arrayValue,this.value)}}class Ik extends Oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Do(this.value.arrayValue,n)}}class Sk extends Oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Do(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Do(this.value.arrayValue,n)}}class xk extends Oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Sf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Do(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function cy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Ak(t,e,n,r,i,s,o)}function xf(t){const e=ne(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>td(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Qo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ts(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ts(r)).join(",")),e.Te=n}return e.Te}function Af(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!yk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!T0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!uy(t.startAt,e.startAt)&&uy(t.endAt,e.endAt)}function nd(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Ck(t,e,n,r,i,s,o,l){return new Yo(t,e,n,r,i,s,o,l)}function Cf(t){return new Yo(t)}function hy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function x0(t){return t.collectionGroup!==null}function so(t){const e=ne(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ze(Xe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new Kl(s,r))}),n.has(Xe.keyField().canonicalString())||e.Ie.push(new Kl(Xe.keyField(),r))}return e.Ie}function fn(t){const e=ne(t);return e.Ee||(e.Ee=kk(e,so(t))),e.Ee}function kk(t,e){if(t.limitType==="F")return cy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Kl(i.field,s)});const n=t.endAt?new Gl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Gl(t.startAt.position,t.startAt.inclusive):null;return cy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function rd(t,e){const n=t.filters.concat([e]);return new Yo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function id(t,e,n){return new Yo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ru(t,e){return Af(fn(t),fn(e))&&t.limitType===e.limitType}function A0(t){return`${xf(fn(t))}|lt:${t.limitType}`}function gi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>I0(i)).join(", ")}]`),Qo(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ts(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ts(i)).join(",")),`Target(${r})`}(fn(t))}; limitType=${t.limitType})`}function Pu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of so(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=ly(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,so(r),i)||r.endAt&&!function(o,l,u){const h=ly(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,so(r),i))}(t,e)}function Rk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function C0(t){return(e,n)=>{let r=!1;for(const i of so(t)){const s=Pk(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Pk(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?es(u,h):Y(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){br(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return c0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bk=new Ce(K.comparator);function jn(){return bk}const k0=new Ce(K.comparator);function Hs(...t){let e=k0;for(const n of t)e=e.insert(n.key,n);return e}function R0(t){let e=k0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function $r(){return oo()}function P0(){return oo()}function oo(){return new oi(t=>t.toString(),(t,e)=>t.isEqual(e))}const Nk=new Ce(K.comparator),Dk=new ze(K.comparator);function ae(...t){let e=Dk;for(const n of t)e=e.add(n);return e}const Vk=new ze(oe);function Lk(){return Vk}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hl(e)?"-0":e}}function b0(t){return{integerValue:""+t}}function Ok(t,e){return uk(e)?b0(e):kf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(){this._=void 0}}function Mk(t,e,n){return t instanceof Ql?function(i,s){const o={fields:{[f0]:{stringValue:d0},[m0]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&If(s)&&(s=ku(s)),s&&(o.fields[p0]=s),{mapValue:o}}(n,e):t instanceof Vo?D0(t,e):t instanceof Lo?V0(t,e):function(i,s){const o=N0(i,s),l=dy(o)+dy(i.Ae);return ed(o)&&ed(i.Ae)?b0(l):kf(i.serializer,l)}(t,e)}function jk(t,e,n){return t instanceof Vo?D0(t,e):t instanceof Lo?V0(t,e):n}function N0(t,e){return t instanceof Yl?function(r){return ed(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ql extends bu{}class Vo extends bu{constructor(e){super(),this.elements=e}}function D0(t,e){const n=L0(e);for(const r of t.elements)n.some(i=>yn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Lo extends bu{constructor(e){super(),this.elements=e}}function V0(t,e){let n=L0(e);for(const r of t.elements)n=n.filter(i=>!yn(i,r));return{arrayValue:{values:n}}}class Yl extends bu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function dy(t){return be(t.integerValue||t.doubleValue)}function L0(t){return Sf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Fk(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Vo&&i instanceof Vo||r instanceof Lo&&i instanceof Lo?Zi(r.elements,i.elements,yn):r instanceof Yl&&i instanceof Yl?yn(r.Ae,i.Ae):r instanceof Ql&&i instanceof Ql}(t.transform,e.transform)}class Uk{constructor(e,n){this.version=e,this.transformResults=n}}class gt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new gt}static exists(e){return new gt(void 0,e)}static updateTime(e){return new gt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ul(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Nu{}function O0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Rf(t.key,gt.none()):new Xo(t.key,t.data,gt.none());{const n=t.data,r=mt.empty();let i=new ze(Xe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Nr(t.key,r,new bt(i.toArray()),gt.none())}}function zk(t,e,n){t instanceof Xo?function(i,s,o){const l=i.value.clone(),u=py(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Nr?function(i,s,o){if(!ul(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=py(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(M0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ao(t,e,n,r){return t instanceof Xo?function(s,o,l,u){if(!ul(s.precondition,o))return l;const h=s.value.clone(),p=my(s.fieldTransforms,u,o);return h.setAll(p),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Nr?function(s,o,l,u){if(!ul(s.precondition,o))return l;const h=my(s.fieldTransforms,u,o),p=o.data;return p.setAll(M0(s)),p.setAll(h),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return ul(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Bk(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=N0(r.transform,i||null);s!=null&&(n===null&&(n=mt.empty()),n.set(r.field,s))}return n||null}function fy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Zi(r,i,(s,o)=>Fk(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Xo extends Nu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Nr extends Nu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function M0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function py(t,e,n){const r=new Map;ce(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,jk(o,l,n[i]))}return r}function my(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Mk(s,o,e))}return r}class Rf extends Nu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class j0 extends Nu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&zk(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ao(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ao(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=P0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=O0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ae())}isEqual(e){return this.batchId===e.batchId&&Zi(this.mutations,e.mutations,(n,r)=>fy(n,r))&&Zi(this.baseMutations,e.baseMutations,(n,r)=>fy(n,r))}}class Pf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ce(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return Nk}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Pf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve,ue;function F0(t){switch(t){case V.OK:return Y(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return Y(15467,{code:t})}}function U0(t){if(t===void 0)return Mn("GRPC error has no .code"),V.UNKNOWN;switch(t){case Ve.OK:return V.OK;case Ve.CANCELLED:return V.CANCELLED;case Ve.UNKNOWN:return V.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return V.INTERNAL;case Ve.UNAVAILABLE:return V.UNAVAILABLE;case Ve.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Ve.NOT_FOUND:return V.NOT_FOUND;case Ve.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Ve.ABORTED:return V.ABORTED;case Ve.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Ve.DATA_LOSS:return V.DATA_LOSS;default:return Y(39323,{code:t})}}(ue=Ve||(Ve={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gk=new mr([4294967295,4294967295],0);function gy(t){const e=qk().encode(t),n=new Zw;return n.update(e),new Uint8Array(n.digest())}function yy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new mr([n,r],0),new mr([i,s],0)]}class bf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ws(`Invalid padding: ${n}`);if(r<0)throw new Ws(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ws(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ws(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=mr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(mr.fromNumber(r)));return i.compare(Gk)===1&&(i=new mr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=gy(e),[r,i]=yy(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new bf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=gy(e),[r,i]=yy(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ws extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Jo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Du(J.min(),i,new Ce(oe),jn(),ae())}}class Jo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Jo(r,n,ae(),ae(),ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class z0{constructor(e,n){this.targetId=e,this.Ce=n}}class B0{constructor(e,n,r=et.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class _y{constructor(){this.ve=0,this.Fe=vy(),this.Me=et.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ae(),n=ae(),r=ae();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y(38017,{changeType:s})}}),new Jo(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=vy()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ce(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Kk{constructor(e){this.Ge=e,this.ze=new Map,this.je=jn(),this.Je=Ba(),this.He=Ba(),this.Ye=new Ce(oe)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Y(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(nd(s))if(r===0){const o=new K(s.path);this.et(n,o,We.newNoDocument(o,J.min()))}else ce(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Tr(r).toUint8Array()}catch(u){if(u instanceof h0)return Ji("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new bf(o,i,s)}catch(u){return Ji(u instanceof Ws?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&nd(l.target)){const u=new K(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,We.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=ae();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Du(e,n,this.Ye,this.je,r);return this.je=jn(),this.Je=Ba(),this.He=Ba(),this.Ye=new Ce(oe),i}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new _y,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new ze(oe),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new ze(oe),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new _y),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Ba(){return new Ce(K.comparator)}function vy(){return new Ce(K.comparator)}const Qk={asc:"ASCENDING",desc:"DESCENDING"},Yk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Xk={and:"AND",or:"OR"};class Jk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function sd(t,e){return t.useProto3Json||Qo(e)?e:{value:e}}function Xl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Zk(t,e){return Xl(t,e.toTimestamp())}function Dt(t){return ce(!!t,49232),J.fromTimestamp(function(n){const r=Er(n);return new we(r.seconds,r.nanos)}(t))}function Nf(t,e){return od(t,e).canonicalString()}function od(t,e){const n=function(i){return new pe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function H0(t){const e=pe.fromString(t);return ce(Y0(e),10190,{key:e.toString()}),e}function Jl(t,e){return Nf(t.databaseId,e.path)}function lo(t,e){const n=H0(e);if(n.get(1)!==t.databaseId.projectId)throw new H(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(q0(n))}function W0(t,e){return Nf(t.databaseId,e)}function eR(t){const e=H0(t);return e.length===4?pe.emptyPath():q0(e)}function ad(t){return new pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function q0(t){return ce(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function wy(t,e,n){return{name:Jl(t,e),fields:n.value.mapValue.fields}}function tR(t,e){return"found"in e?function(r,i){ce(!!i.found,43571),i.found.name,i.found.updateTime;const s=lo(r,i.found.name),o=Dt(i.found.updateTime),l=i.found.createTime?Dt(i.found.createTime):J.min(),u=new mt({mapValue:{fields:i.found.fields}});return We.newFoundDocument(s,o,l,u)}(t,e):"missing"in e?function(r,i){ce(!!i.missing,3894),ce(!!i.readTime,22933);const s=lo(r,i.missing),o=Dt(i.readTime);return We.newNoDocument(s,o)}(t,e):Y(7234,{result:e})}function nR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Y(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,p){return h.useProto3Json?(ce(p===void 0||typeof p=="string",58123),et.fromBase64String(p||"")):(ce(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),et.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const p=h.code===void 0?V.UNKNOWN:U0(h.code);return new H(p,h.message||"")}(o);n=new B0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=lo(t,r.document.name),s=Dt(r.document.updateTime),o=r.document.createTime?Dt(r.document.createTime):J.min(),l=new mt({mapValue:{fields:r.document.fields}}),u=We.newFoundDocument(i,s,o,l),h=r.targetIds||[],p=r.removedTargetIds||[];n=new cl(h,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=lo(t,r.document),s=r.readTime?Dt(r.readTime):J.min(),o=We.newNoDocument(i,s),l=r.removedTargetIds||[];n=new cl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=lo(t,r.document),s=r.removedTargetIds||[];n=new cl([],s,i,null)}else{if(!("filter"in e))return Y(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Wk(i,s),l=r.targetId;n=new z0(l,o)}}return n}function G0(t,e){let n;if(e instanceof Xo)n={update:wy(t,e.key,e.value)};else if(e instanceof Rf)n={delete:Jl(t,e.key)};else if(e instanceof Nr)n={update:wy(t,e.key,e.data),updateMask:hR(e.fieldMask)};else{if(!(e instanceof j0))return Y(16599,{Vt:e.type});n={verify:Jl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Ql)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Vo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Lo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Yl)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw Y(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Zk(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y(27497)}(t,e.precondition)),n}function rR(t,e){return t&&t.length>0?(ce(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Dt(i.updateTime):Dt(s);return o.isEqual(J.min())&&(o=Dt(s)),new Uk(o,i.transformResults||[])}(n,e))):[]}function iR(t,e){return{documents:[W0(t,e.path)]}}function sR(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=W0(t,i);const s=function(h){if(h.length!==0)return Q0(nn.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(p=>function(g){return{field:yi(g.field),direction:lR(g.dir)}}(p))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=sd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:i}}function oR(t){let e=eR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ce(r===1,65062);const p=n.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];n.where&&(s=function(m){const g=K0(m);return g instanceof nn&&E0(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(k){return new Kl(_i(k.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,Qo(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,E=m.values||[];return new Gl(E,g)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const g=!m.before,E=m.values||[];return new Gl(E,g)}(n.endAt)),Ck(e,i,o,s,l,"F",u,h)}function aR(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function K0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=_i(n.unaryFilter.field);return Oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=_i(n.unaryFilter.field);return Oe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=_i(n.unaryFilter.field);return Oe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=_i(n.unaryFilter.field);return Oe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Y(61313);default:return Y(60726)}}(t):t.fieldFilter!==void 0?function(n){return Oe.create(_i(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Y(58110);default:return Y(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return nn.create(n.compositeFilter.filters.map(r=>K0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y(1026)}}(n.compositeFilter.op))}(t):Y(30097,{filter:t})}function lR(t){return Qk[t]}function uR(t){return Yk[t]}function cR(t){return Xk[t]}function yi(t){return{fieldPath:t.canonicalString()}}function _i(t){return Xe.fromServerFormat(t.fieldPath)}function Q0(t){return t instanceof Oe?function(n){if(n.op==="=="){if(ay(n.value))return{unaryFilter:{field:yi(n.field),op:"IS_NAN"}};if(oy(n.value))return{unaryFilter:{field:yi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ay(n.value))return{unaryFilter:{field:yi(n.field),op:"IS_NOT_NAN"}};if(oy(n.value))return{unaryFilter:{field:yi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yi(n.field),op:uR(n.op),value:n.value}}}(t):t instanceof nn?function(n){const r=n.getFilters().map(i=>Q0(i));return r.length===1?r[0]:{compositeFilter:{op:cR(n.op),filters:r}}}(t):Y(54877,{filter:t})}function hR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Y0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n,r,i,s=J.min(),o=J.min(),l=et.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new rr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e){this.yt=e}}function fR(t){const e=oR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?id(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(){this.Cn=new mR}addToCollectionParentIndex(e,n){return this.Cn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(wr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(wr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class mR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ze(pe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ze(pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},X0=41943040;class Et{static withCacheSize(e){return new Et(e,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Et.DEFAULT_COLLECTION_PERCENTILE=10,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Et.DEFAULT=new Et(X0,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Et.DISABLED=new Et(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new ns(0)}static cr(){return new ns(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty="LruGarbageCollector",gR=1048576;function Iy([t,e],[n,r]){const i=oe(t,n);return i===0?oe(e,r):i}class yR{constructor(e){this.Ir=e,this.buffer=new ze(Iy),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Iy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class _R{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){W(Ty,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ds(n)?W(Ty,"Ignoring IndexedDB error during garbage collection: ",n):await hs(n)}await this.Vr(3e5)})}}class vR{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(Cu.ce);const r=new yR(n);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Ey)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ey):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,i,s,o,l,u,h;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),mi()<=se.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-p}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-p}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function wR(t,e){return new vR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(){this.changes=new oi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,We.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ao(r.mutation,i,bt.empty(),we.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ae()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ae()){const i=$r();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Hs();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=$r();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ae()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=jn();const o=oo(),l=function(){return oo()}();return n.forEach((u,h)=>{const p=r.get(h.key);i.has(h.key)&&(p===void 0||p.mutation instanceof Nr)?s=s.insert(h.key,h):p!==void 0?(o.set(h.key,p.mutation.getFieldMask()),ao(p.mutation,h,p.mutation.getFieldMask(),we.now())):o.set(h.key,bt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,p)=>o.set(h,p)),n.forEach((h,p)=>l.set(h,new TR(p,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=oo();let i=new Ce((o,l)=>o-l),s=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let p=r.get(u)||bt.empty();p=l.applyToLocalView(h,p),r.set(u,p);const m=(i.get(l.batchId)||ae()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,p=u.value,m=P0();p.forEach(g=>{if(!s.has(g)){const E=O0(n.get(g),r.get(g));E!==null&&m.set(g,E),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):x0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve($r());let l=Po,u=s;return o.next(h=>M.forEach(h,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(p)?M.resolve():this.remoteDocumentCache.getEntry(e,p).next(g=>{u=u.insert(p,g)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,ae())).next(p=>({batchId:l,changes:R0(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=Hs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Hs();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const h=function(m,g){return new Yo(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(p=>{p.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const p=h.getKey();o.get(p)===null&&(o=o.insert(p,We.newInvalidDocument(p)))});let l=Hs();return o.forEach((u,h)=>{const p=s.get(u);p!==void 0&&ao(p.mutation,h,bt.empty(),we.now()),Pu(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return M.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Dt(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(i){return{name:i.name,query:fR(i.bundledQuery),readTime:Dt(i.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(){this.overlays=new Ce(K.comparator),this.qr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=$r();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=$r(),s=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ce((h,p)=>h-p);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let p=s.get(h.largestBatchId);p===null&&(p=$r(),s=s.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const l=$r(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,p)=>l.set(h,p)),!(l.size()>=i)););return M.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Hk(n,r));let s=this.qr.get(n);s===void 0&&(s=ae(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(){this.sessionToken=et.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(){this.Qr=new ze($e.$r),this.Ur=new ze($e.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new $e(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new $e(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new K(new pe([])),r=new $e(n,e),i=new $e(n,e+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new K(new pe([])),r=new $e(n,e),i=new $e(n,e+1);let s=ae();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new $e(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return K.comparator(e.key,n.key)||oe(e.Yr,n.Yr)}static Kr(e,n){return oe(e.Yr,n.Yr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new ze($e.$r)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $k(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new $e(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Tf:this.tr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new $e(n,0),i=new $e(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const l=this.Xr(o.Yr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ze(oe);return n.forEach(i=>{const s=new $e(i,0),o=new $e(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],l=>{r=r.add(l.Yr)})}),M.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new $e(new K(s),0);let l=new ze(oe);return this.Zr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.Yr)),!0)},o),M.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ce(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return M.forEach(n.mutations,i=>{const s=new $e(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new $e(n,0),i=this.Zr.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e){this.ri=e,this.docs=function(){return new Ce(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():We.newInvalidDocument(n))}getEntries(e,n){let r=jn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():We.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=jn();const o=n.path,l=new K(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:p}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||sk(ik(p),r)<=0||(i.has(p.key)||Pu(n,p))&&(s=s.insert(p.key,p.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y(9500)}ii(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new RR(this)}getSize(e){return M.resolve(this.size)}}class RR extends ER{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e){this.persistence=e,this.si=new oi(n=>xf(n),Af),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.oi=0,this._i=new Df,this.targetCount=0,this.ai=ns.ur()}forEachTarget(e,n){return this.si.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),M.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new ns(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Pr(n),M.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e,n){this.ui={},this.overlays={},this.ci=new Cu(0),this.li=!1,this.li=!0,this.hi=new AR,this.referenceDelegate=e(this),this.Pi=new PR(this),this.indexManager=new pR,this.remoteDocumentCache=function(i){return new kR(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new dR(n),this.Ii=new SR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new xR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new CR(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new bR(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return M.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class bR extends ak{constructor(e){super(),this.currentSequenceNumber=e}}class Vf{constructor(e){this.persistence=e,this.Ri=new Df,this.Vi=null}static mi(e){return new Vf(e)}get fi(){if(this.Vi)return this.Vi;throw Y(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.fi,r=>{const i=K.fromPath(r);return this.gi(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Zl{constructor(e,n){this.persistence=e,this.pi=new oi(r=>ck(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=wR(this,n)}static mi(e,n){return new Zl(e,n)}Ei(){}di(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return M.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?M.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,s.removeEntry(o,J.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),M.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=al(e.data.value)),n}br(e,n,r){return M.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return M.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=i}static As(e,n){let r=ae(),i=ae();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Lf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return fS()?8:lk(ht())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ys(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new NR;return this.Ss(e,n,o).next(l=>{if(s.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>s.result)}bs(e,n,r,i){return r.documentReadCount<this.fs?(mi()<=se.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",gi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),M.resolve()):(mi()<=se.DEBUG&&W("QueryEngine","Query:",gi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(mi()<=se.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",gi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,fn(n))):M.resolve())}ys(e,n){if(hy(n))return M.resolve(null);let r=fn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=id(n,null,"F"),r=fn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ae(...s);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ds(n,l);return this.Cs(n,h,o,u.readTime)?this.ys(e,id(n,null,"F")):this.vs(e,h,n,u)}))})))}ws(e,n,r,i){return hy(n)||i.isEqual(J.min())?M.resolve(null):this.ps.getDocuments(e,r).next(s=>{const o=this.Ds(n,s);return this.Cs(n,o,r,i)?M.resolve(null):(mi()<=se.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),gi(n)),this.vs(e,o,n,rk(i,Po)).next(l=>l))})}Ds(e,n){let r=new ze(C0(e));return n.forEach((i,s)=>{Pu(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return mi()<=se.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",gi(n)),this.ps.getDocumentsMatchingQuery(e,n,wr.min(),r)}vs(e,n,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of="LocalStore",VR=3e8;class LR{constructor(e,n,r,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new Ce(oe),this.xs=new oi(s=>xf(s),Af),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new IR(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function OR(t,e,n,r){return new LR(t,e,n,r)}async function Z0(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ae();for(const h of i){o.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}for(const h of s){l.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ls:h,removedBatchIds:o,addedBatchIds:l}))})})}function MR(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,h,p){const m=h.batch,g=m.keys();let E=M.resolve();return g.forEach(k=>{E=E.next(()=>p.getEntry(u,k)).next(P=>{const D=h.docVersions.get(k);ce(D!==null,48541),P.version.compareTo(D)<0&&(m.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),p.addEntry(P)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ae();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function eE(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function jR(t,e){const n=ne(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];e.targetChanges.forEach((p,m)=>{const g=i.get(m);if(!g)return;l.push(n.Pi.removeMatchingKeys(s,p.removedDocuments,m).next(()=>n.Pi.addMatchingKeys(s,p.addedDocuments,m)));let E=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?E=E.withResumeToken(et.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):p.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(p.resumeToken,r)),i=i.insert(m,E),function(P,D,x){return P.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=VR?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(g,E,p)&&l.push(n.Pi.updateTargetData(s,E))});let u=jn(),h=ae();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,p))}),l.push(FR(s,o,e.documentUpdates).next(p=>{u=p.ks,h=p.qs})),!r.isEqual(J.min())){const p=n.Pi.getLastRemoteSnapshotVersion(s).next(m=>n.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(p)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.Ms=i,s))}function FR(t,e,n){let r=ae(),i=ae();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=jn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W(Of,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{ks:o,qs:i}})}function UR(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Tf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function zR(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Pi.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.Pi.allocateTargetId(r).next(o=>(i=new rr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function ld(t,e,n){const r=ne(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ds(o))throw o;W(Of,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function Sy(t,e,n){const r=ne(t);let i=J.min(),s=ae();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,p){const m=ne(u),g=m.xs.get(p);return g!==void 0?M.resolve(m.Ms.get(g)):m.Pi.getTargetData(h,p)}(r,o,fn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:ae())).next(l=>(BR(r,Rk(e),l),{documents:l,Qs:s})))}function BR(t,e,n){let r=t.Os.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Os.set(e,r)}class xy{constructor(){this.activeTargetIds=Lk()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $R{constructor(){this.Mo=new xy,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new xy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay="ConnectivityMonitor";class Cy{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){W(Ay,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){W(Ay,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $a=null;function ud(){return $a===null?$a=function(){return 268435456+Math.round(2147483648*Math.random())}():$a++,"0x"+$a.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc="RestConnection",WR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class qR{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===Wl?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,n,r,i,s){const o=ud(),l=this.zo(e,n.toUriEncodedString());W(Gc,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,i,s);const{host:h}=new URL(l),p=as(h);return this.Jo(e,l,u,r,p).then(m=>(W(Gc,`Received RPC '${e}' ${o}: `,m),m),m=>{throw Ji(Gc,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}Ho(e,n,r,i,s,o){return this.Go(e,n,r,i,s)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+cs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,n){const r=WR[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot="WebChannelConnection";class KR extends qR{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const o=ud();return new Promise((l,u)=>{const h=new e0;h.setWithCredentials(!0),h.listenOnce(t0.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case ol.NO_ERROR:const m=h.getResponseJson();W(ot,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case ol.TIMEOUT:W(ot,`RPC '${e}' ${o} timed out`),u(new H(V.DEADLINE_EXCEEDED,"Request time out"));break;case ol.HTTP_ERROR:const g=h.getStatus();if(W(ot,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let E=h.getResponseJson();Array.isArray(E)&&(E=E[0]);const k=E==null?void 0:E.error;if(k&&k.status&&k.message){const P=function(x){const v=x.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(v)>=0?v:V.UNKNOWN}(k.status);u(new H(P,k.message))}else u(new H(V.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new H(V.UNAVAILABLE,"Connection failed."));break;default:Y(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{W(ot,`RPC '${e}' ${o} completed.`)}});const p=JSON.stringify(i);W(ot,`RPC '${e}' ${o} sending request:`,i),h.send(n,"POST",p,r,15)})}T_(e,n,r){const i=ud(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=i0(),l=r0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const p=s.join("");W(ot,`Creating RPC '${e}' stream ${i}: ${p}`,u);const m=o.createWebChannel(p,u);this.I_(m);let g=!1,E=!1;const k=new GR({Yo:D=>{E?W(ot,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(g||(W(ot,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),W(ot,`RPC '${e}' stream ${i} sending:`,D),m.send(D))},Zo:()=>m.close()}),P=(D,x,v)=>{D.listen(x,A=>{try{v(A)}catch(L){setTimeout(()=>{throw L},0)}})};return P(m,$s.EventType.OPEN,()=>{E||(W(ot,`RPC '${e}' stream ${i} transport opened.`),k.o_())}),P(m,$s.EventType.CLOSE,()=>{E||(E=!0,W(ot,`RPC '${e}' stream ${i} transport closed`),k.a_(),this.E_(m))}),P(m,$s.EventType.ERROR,D=>{E||(E=!0,Ji(ot,`RPC '${e}' stream ${i} transport errored. Name:`,D.name,"Message:",D.message),k.a_(new H(V.UNAVAILABLE,"The operation could not be completed")))}),P(m,$s.EventType.MESSAGE,D=>{var x;if(!E){const v=D.data[0];ce(!!v,16349);const A=v,L=(A==null?void 0:A.error)||((x=A[0])==null?void 0:x.error);if(L){W(ot,`RPC '${e}' stream ${i} received error:`,L);const $=L.status;let B=function(w){const S=Ve[w];if(S!==void 0)return U0(S)}($),T=L.message;B===void 0&&(B=V.INTERNAL,T="Unknown error status: "+$+" with message "+L.message),E=!0,k.a_(new H(B,T)),m.close()}else W(ot,`RPC '${e}' stream ${i} received:`,v),k.u_(v)}}),P(l,n0.STAT_EVENT,D=>{D.stat===Xh.PROXY?W(ot,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===Xh.NOPROXY&&W(ot,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.__()},0),k}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Kc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(t){return new Jk(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky="PersistentStream";class tE{constructor(e,n,r,i,s,o,l,u){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Mf(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Mn(n.toString()),Mn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new H(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return W(ky,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(W(ky,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class QR extends tE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=nR(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?Dt(o.readTime):J.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=ad(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=nd(u)?{documents:iR(s,u)}:{query:sR(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=$0(s,o.resumeToken);const h=sd(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=Xl(s,o.snapshotVersion.toTimestamp());const h=sd(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=aR(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=ad(this.serializer),n.removeTarget=e,this.q_(n)}}class YR extends tE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return ce(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ce(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ce(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=rR(e.writeResults,e.commitTime),r=Dt(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=ad(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>G0(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{}class JR extends XR{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new H(V.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(e,od(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(V.UNKNOWN,s.toString())})}Ho(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,od(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(V.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class ZR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Mn(n),this.aa=!1):W("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni="RemoteStore";class eP{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{ai(this)&&(W(ni,"Restarting streams for network reachability change."),await async function(u){const h=ne(u);h.Ea.add(4),await Zo(h),h.Ra.set("Unknown"),h.Ea.delete(4),await Lu(h)}(this))})}),this.Ra=new ZR(r,i)}}async function Lu(t){if(ai(t))for(const e of t.da)await e(!0)}async function Zo(t){for(const e of t.da)await e(!1)}function nE(t,e){const n=ne(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),zf(n)?Uf(n):fs(n).O_()&&Ff(n,e))}function jf(t,e){const n=ne(t),r=fs(n);n.Ia.delete(e),r.O_()&&rE(n,e),n.Ia.size===0&&(r.O_()?r.L_():ai(n)&&n.Ra.set("Unknown"))}function Ff(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}fs(t).Y_(e)}function rE(t,e){t.Va.Ue(e),fs(t).Z_(e)}function Uf(t){t.Va=new Kk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),fs(t).start(),t.Ra.ua()}function zf(t){return ai(t)&&!fs(t).x_()&&t.Ia.size>0}function ai(t){return ne(t).Ea.size===0}function iE(t){t.Va=void 0}async function tP(t){t.Ra.set("Online")}async function nP(t){t.Ia.forEach((e,n)=>{Ff(t,e)})}async function rP(t,e){iE(t),zf(t)?(t.Ra.ha(e),Uf(t)):t.Ra.set("Unknown")}async function iP(t,e,n){if(t.Ra.set("Online"),e instanceof B0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))}(t,e)}catch(r){W(ni,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await eu(t,r)}else if(e instanceof cl?t.Va.Ze(e):e instanceof z0?t.Va.st(e):t.Va.tt(e),!n.isEqual(J.min()))try{const r=await eE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Va.Tt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const p=s.Ia.get(h);p&&s.Ia.set(h,p.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const p=s.Ia.get(u);if(!p)return;s.Ia.set(u,p.withResumeToken(et.EMPTY_BYTE_STRING,p.snapshotVersion)),rE(s,u);const m=new rr(p.target,u,h,p.sequenceNumber);Ff(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W(ni,"Failed to raise snapshot:",r),await eu(t,r)}}async function eu(t,e,n){if(!ds(e))throw e;t.Ea.add(1),await Zo(t),t.Ra.set("Offline"),n||(n=()=>eE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W(ni,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Lu(t)})}function sE(t,e){return e().catch(n=>eu(t,n,e))}async function Ou(t){const e=ne(t),n=Sr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Tf;for(;sP(e);)try{const i=await UR(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,oP(e,i)}catch(i){await eu(e,i)}oE(e)&&aE(e)}function sP(t){return ai(t)&&t.Ta.length<10}function oP(t,e){t.Ta.push(e);const n=Sr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function oE(t){return ai(t)&&!Sr(t).x_()&&t.Ta.length>0}function aE(t){Sr(t).start()}async function aP(t){Sr(t).ra()}async function lP(t){const e=Sr(t);for(const n of t.Ta)e.ea(n.mutations)}async function uP(t,e,n){const r=t.Ta.shift(),i=Pf.from(r,e,n);await sE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ou(t)}async function cP(t,e){e&&Sr(t).X_&&await async function(r,i){if(function(o){return F0(o)&&o!==V.ABORTED}(i.code)){const s=r.Ta.shift();Sr(r).B_(),await sE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ou(r)}}(t,e),oE(t)&&aE(t)}async function Ry(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),W(ni,"RemoteStore received new credentials");const r=ai(n);n.Ea.add(3),await Zo(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Lu(n)}async function hP(t,e){const n=ne(t);e?(n.Ea.delete(2),await Lu(n)):e||(n.Ea.add(2),await Zo(n),n.Ra.set("Unknown"))}function fs(t){return t.ma||(t.ma=function(n,r,i){const s=ne(n);return s.sa(),new QR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:tP.bind(null,t),t_:nP.bind(null,t),r_:rP.bind(null,t),H_:iP.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),zf(t)?Uf(t):t.Ra.set("Unknown")):(await t.ma.stop(),iE(t))})),t.ma}function Sr(t){return t.fa||(t.fa=function(n,r,i){const s=ne(n);return s.sa(),new YR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:aP.bind(null,t),r_:cP.bind(null,t),ta:lP.bind(null,t),na:uP.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await Ou(t)):(await t.fa.stop(),t.Ta.length>0&&(W(ni,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Bf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $f(t,e){if(Mn("AsyncQueue",`${e}: ${t}`),ds(t))return new H(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{static emptySet(e){return new Bi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Hs(),this.sortedSet=new Ce(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Bi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Bi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(){this.ga=new Ce(K.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Y(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class rs{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new rs(e,n,Bi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ru(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class fP{constructor(){this.queries=by(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=ne(n),s=i.queries;i.queries=by(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new H(V.ABORTED,"Firestore shutting down"))}}function by(){return new oi(t=>A0(t),Ru)}async function lE(t,e){const n=ne(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new dP,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=$f(o,`Initialization of query '${gi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&Hf(n)}async function uE(t,e){const n=ne(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function pP(t,e){const n=ne(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&Hf(n)}function mP(t,e,n){const r=ne(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function Hf(t){t.Ca.forEach(e=>{e.next()})}var cd,Ny;(Ny=cd||(cd={})).Ma="default",Ny.Cache="cache";class cE{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new rs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=rs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==cd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e){this.key=e}}class dE{constructor(e){this.key=e}}class gP{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ae(),this.mutatedKeys=ae(),this.eu=C0(e),this.tu=new Bi(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Py,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,m)=>{const g=i.get(p),E=Pu(this.query,m)?m:null,k=!!g&&this.mutatedKeys.has(g.key),P=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let D=!1;g&&E?g.data.isEqual(E.data)?k!==P&&(r.track({type:3,doc:E}),D=!0):this.su(g,E)||(r.track({type:2,doc:E}),D=!0,(u&&this.eu(E,u)>0||h&&this.eu(E,h)<0)&&(l=!0)):!g&&E?(r.track({type:0,doc:E}),D=!0):g&&!E&&(r.track({type:1,doc:g}),D=!0,(u||h)&&(l=!0)),D&&(E?(o=o.add(E),s=P?s.add(p):s.delete(p)):(o=o.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{tu:o,iu:r,Cs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((p,m)=>function(E,k){const P=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y(20277,{Rt:D})}};return P(E)-P(k)}(p.type,m.type)||this.eu(p.doc,m.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Xa.size===0&&this.current&&!i?1:0,h=u!==this.Za;return this.Za=u,o.length!==0||h?{snapshot:new rs(this.query,e.tu,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Py,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ae(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new dE(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new hE(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=ae();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return rs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Wf="SyncEngine";class yP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class _P{constructor(e){this.key=e,this.hu=!1}}class vP{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new oi(l=>A0(l),Ru),this.Iu=new Map,this.Eu=new Set,this.du=new Ce(K.comparator),this.Au=new Map,this.Ru=new Df,this.Vu={},this.mu=new Map,this.fu=ns.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function wP(t,e,n=!0){const r=_E(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await fE(r,e,n,!0),i}async function EP(t,e){const n=_E(t);await fE(n,e,!0,!1)}async function fE(t,e,n,r){const i=await zR(t.localStore,fn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await TP(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&nE(t.remoteStore,i),l}async function TP(t,e,n,r,i){t.pu=(m,g,E)=>async function(P,D,x,v){let A=D.view.ru(x);A.Cs&&(A=await Sy(P.localStore,D.query,!1).then(({documents:T})=>D.view.ru(T,A)));const L=v&&v.targetChanges.get(D.targetId),$=v&&v.targetMismatches.get(D.targetId)!=null,B=D.view.applyChanges(A,P.isPrimaryClient,L,$);return Vy(P,D.targetId,B.au),B.snapshot}(t,m,g,E);const s=await Sy(t.localStore,e,!0),o=new gP(e,s.Qs),l=o.ru(s.documents),u=Jo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);Vy(t,n,h.au);const p=new yP(e,n,o);return t.Tu.set(e,p),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function IP(t,e,n){const r=ne(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!Ru(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ld(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&jf(r.remoteStore,i.targetId),hd(r,i.targetId)}).catch(hs)):(hd(r,i.targetId),await ld(r.localStore,i.targetId,!0))}async function SP(t,e){const n=ne(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),jf(n.remoteStore,r.targetId))}async function xP(t,e,n){const r=NP(t);try{const i=await function(o,l){const u=ne(o),h=we.now(),p=l.reduce((E,k)=>E.add(k.key),ae());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let k=jn(),P=ae();return u.Ns.getEntries(E,p).next(D=>{k=D,k.forEach((x,v)=>{v.isValidDocument()||(P=P.add(x))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,k)).next(D=>{m=D;const x=[];for(const v of l){const A=Bk(v,m.get(v.key).overlayedDocument);A!=null&&x.push(new Nr(v.key,A,_0(A.value.mapValue),gt.exists(!0)))}return u.mutationQueue.addMutationBatch(E,h,x,l)}).next(D=>{g=D;const x=D.applyToLocalDocumentSet(m,P);return u.documentOverlayCache.saveOverlays(E,D.batchId,x)})}).then(()=>({batchId:g.batchId,changes:R0(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Vu[o.currentUser.toKey()];h||(h=new Ce(oe)),h=h.insert(l,u),o.Vu[o.currentUser.toKey()]=h}(r,i.batchId,n),await ea(r,i.changes),await Ou(r.remoteStore)}catch(i){const s=$f(i,"Failed to persist write");n.reject(s)}}async function pE(t,e){const n=ne(t);try{const r=await jR(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?ce(o.hu,14607):i.removedDocuments.size>0&&(ce(o.hu,42227),o.hu=!1))}),await ea(n,r,e)}catch(r){await hs(r)}}function Dy(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ne(o);u.onlineState=l;let h=!1;u.queries.forEach((p,m)=>{for(const g of m.Sa)g.va(l)&&(h=!0)}),h&&Hf(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function AP(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Ce(K.comparator);o=o.insert(s,We.newNoDocument(s,J.min()));const l=ae().add(s),u=new Du(J.min(),new Map,new Ce(oe),o,l);await pE(r,u),r.du=r.du.remove(s),r.Au.delete(e),qf(r)}else await ld(r.localStore,e,!1).then(()=>hd(r,e,n)).catch(hs)}async function CP(t,e){const n=ne(t),r=e.batch.batchId;try{const i=await MR(n.localStore,e);gE(n,r,null),mE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ea(n,i)}catch(i){await hs(i)}}async function kP(t,e,n){const r=ne(t);try{const i=await function(o,l){const u=ne(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let p;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(ce(m!==null,37113),p=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p)).next(()=>u.localDocuments.getDocuments(h,p))})}(r.localStore,e);gE(r,e,n),mE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ea(r,i)}catch(i){await hs(i)}}function mE(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function gE(t,e,n){const r=ne(t);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function hd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||yE(t,r)})}function yE(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(jf(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),qf(t))}function Vy(t,e,n){for(const r of n)r instanceof hE?(t.Ru.addReference(r.key,e),RP(t,r)):r instanceof dE?(W(Wf,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||yE(t,r.key)):Y(19791,{wu:r})}function RP(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(W(Wf,"New document in limbo: "+n),t.Eu.add(r),qf(t))}function qf(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new K(pe.fromString(e)),r=t.fu.next();t.Au.set(r,new _P(n)),t.du=t.du.insert(n,r),nE(t.remoteStore,new rr(fn(Cf(n.path)),r,"TargetPurposeLimboResolution",Cu.ce))}}async function ea(t,e,n){const r=ne(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(h=>{var p;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(p=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=Lf.As(u.targetId,h);s.push(m)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,h){const p=ne(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>M.forEach(h,g=>M.forEach(g.Es,E=>p.persistence.referenceDelegate.addReference(m,g.targetId,E)).next(()=>M.forEach(g.ds,E=>p.persistence.referenceDelegate.removeReference(m,g.targetId,E)))))}catch(m){if(!ds(m))throw m;W(Of,"Failed to update sequence numbers: "+m)}for(const m of h){const g=m.targetId;if(!m.fromCache){const E=p.Ms.get(g),k=E.snapshotVersion,P=E.withLastLimboFreeSnapshotVersion(k);p.Ms=p.Ms.insert(g,P)}}}(r.localStore,s))}async function PP(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){W(Wf,"User change. New user:",e.toKey());const r=await Z0(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new H(V.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ea(n,r.Ls)}}function bP(t,e){const n=ne(t),r=n.Au.get(e);if(r&&r.hu)return ae().add(r.key);{let i=ae();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function _E(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=pE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=AP.bind(null,e),e.Pu.H_=pP.bind(null,e.eventManager),e.Pu.yu=mP.bind(null,e.eventManager),e}function NP(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=CP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=kP.bind(null,e),e}class tu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Vu(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return OR(this.persistence,new DR,e.initialUser,this.serializer)}Cu(e){return new J0(Vf.mi,this.serializer)}Du(e){return new $R}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}tu.provider={build:()=>new tu};class DP extends tu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ce(this.persistence.referenceDelegate instanceof Zl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new _R(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Et.withCacheSize(this.cacheSizeBytes):Et.DEFAULT;return new J0(r=>Zl.mi(r,n),this.serializer)}}class dd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Dy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=PP.bind(null,this.syncEngine),await hP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new fP}()}createDatastore(e){const n=Vu(e.databaseInfo.databaseId),r=function(s){return new KR(s)}(e.databaseInfo);return function(s,o,l,u){return new JR(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new eP(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Dy(this.syncEngine,n,0),function(){return Cy.v()?new Cy:new HR}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,p){const m=new vP(i,s,o,l,u,h);return p&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ne(i);W(ni,"RemoteStore shutting down."),s.Ea.add(5),await Zo(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}dd.provider={build:()=>new dd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Mn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new H(V.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=ne(i),l={documents:s.map(m=>Jl(o.serializer,m))},u=await o.Ho("BatchGetDocuments",o.serializer.databaseId,pe.emptyPath(),l,s.length),h=new Map;u.forEach(m=>{const g=tR(o.serializer,m);h.set(g.key.toString(),g)});const p=[];return s.forEach(m=>{const g=h.get(m.toString());ce(!!g,55234,{key:m}),p.push(g)}),p}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Rf(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=K.fromPath(r);this.mutations.push(new j0(i,this.precondition(i)))}),await async function(r,i){const s=ne(r),o={writes:i.map(l=>G0(s.serializer,l))};await s.Go("Commit",s.serializer.databaseId,pe.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw Y(50498,{Gu:e.constructor.name});n=J.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new H(V.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(J.min())?gt.exists(!1):gt.updateTime(n):gt.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(J.min()))throw new H(V.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return gt.updateTime(n)}return gt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.zu=r.maxAttempts,this.M_=new Mf(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Ju()}Ju(){this.M_.p_(async()=>{const e=new VP(this.datastore),n=this.Hu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Yu(i)}))}).catch(r=>{this.Yu(r)})})}Hu(e){try{const n=this.updateFunction(e);return!Qo(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Yu(e){this.zu>0&&this.Zu(e)?(this.zu-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ju(),Promise.resolve()))):this.deferred.reject(e)}Zu(e){if((e==null?void 0:e.name)==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!F0(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr="FirestoreClient";class OP{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=at.UNAUTHENTICATED,this.clientId=Ef.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{W(xr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W(xr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=$f(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Qc(t,e){t.asyncQueue.verifyOperationInProgress(),W(xr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Z0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ly(t,e){t.asyncQueue.verifyOperationInProgress();const n=await MP(t);W(xr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Ry(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Ry(e.remoteStore,i)),t._onlineComponents=e}async function MP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W(xr,"Using user provided OfflineComponentProvider");try{await Qc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ji("Error using user provided cache. Falling back to memory cache: "+n),await Qc(t,new tu)}}else W(xr,"Using default OfflineComponentProvider"),await Qc(t,new DP(void 0));return t._offlineComponents}async function Gf(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W(xr,"Using user provided OnlineComponentProvider"),await Ly(t,t._uninitializedComponentsProvider._online)):(W(xr,"Using default OnlineComponentProvider"),await Ly(t,new dd))),t._onlineComponents}function jP(t){return Gf(t).then(e=>e.syncEngine)}function FP(t){return Gf(t).then(e=>e.datastore)}async function wE(t){const e=await Gf(t),n=e.eventManager;return n.onListen=wP.bind(null,e.syncEngine),n.onUnlisten=IP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=EP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=SP.bind(null,e.syncEngine),n}function UP(t,e,n={}){const r=new dn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const p=new vE({next:g=>{p.Nu(),o.enqueueAndForget(()=>uE(s,m));const E=g.docs.has(l);!E&&g.fromCache?h.reject(new H(V.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&g.fromCache&&u&&u.source==="server"?h.reject(new H(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),m=new cE(Cf(l.path),p,{includeMetadataChanges:!0,qa:!0});return lE(s,m)}(await wE(t),t.asyncQueue,e,n,r)),r.promise}function zP(t,e,n={}){const r=new dn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const p=new vE({next:g=>{p.Nu(),o.enqueueAndForget(()=>uE(s,m)),g.fromCache&&u.source==="server"?h.reject(new H(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),m=new cE(l,p,{includeMetadataChanges:!0,qa:!0});return lE(s,m)}(await wE(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE="firestore.googleapis.com",My=!0;class jy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new H(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=TE,this.ssl=My}else this.host=e.host,this.ssl=e.ssl??My;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=X0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<gR)throw new H(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}nk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=EE(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Mu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new qC;switch(r.type){case"firstParty":return new YC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Oy.get(n);r&&(W("ComponentProvider","Removing Datastore"),Oy.delete(n),r.terminate())}(this),Promise.resolve()}}function BP(t,e,n,r={}){var h;t=gn(t,Mu);const i=as(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(hw(`https://${l}`),dw("Firestore",!0)),s.host!==TE&&s.host!==l&&Ji("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!Xr(u,o)&&(t._setSettings(u),r.mockUserToken)){let p,m;if(typeof r.mockUserToken=="string")p=r.mockUserToken,m=at.MOCK_USER;else{p=iS(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new H(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new at(g)}t._authCredentials=new GC(new o0(p,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ps(this.firestore,e,this._query)}}class Pe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pe(this.firestore,e,this._key)}toJSON(){return{type:Pe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ko(n,Pe._jsonSchema))return new Pe(e,r||null,new K(pe.fromString(n.referencePath)))}}Pe._jsonSchemaVersion="firestore/documentReference/1.0",Pe._jsonSchema={type:Me("string",Pe._jsonSchemaVersion),referencePath:Me("string")};class gr extends ps{constructor(e,n,r){super(e,n,Cf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pe(this.firestore,null,new K(e))}withConverter(e){return new gr(this.firestore,e,this._path)}}function Oo(t,e,...n){if(t=je(t),a0("collection","path",e),t instanceof Mu){const r=pe.fromString(e,...n);return Xg(r),new gr(t,null,r)}{if(!(t instanceof Pe||t instanceof gr))throw new H(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return Xg(r),new gr(t.firestore,null,r)}}function lt(t,e,...n){if(t=je(t),arguments.length===1&&(e=Ef.newId()),a0("doc","path",e),t instanceof Mu){const r=pe.fromString(e,...n);return Yg(r),new Pe(t,null,new K(r))}{if(!(t instanceof Pe||t instanceof gr))throw new H(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return Yg(r),new Pe(t.firestore,t instanceof gr?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy="AsyncQueue";class Uy{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Mf(this,"async_queue_retry"),this._c=()=>{const r=Kc();r&&W(Fy,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Kc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Kc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new dn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!ds(e))throw e;W(Fy,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Mn("INTERNAL UNHANDLED ERROR: ",zy(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=Bf.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&Y(47125,{Pc:zy(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function zy(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class ms extends Mu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Uy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Uy(e),this._firestoreClient=void 0,await e}}}function $P(t,e){const n=typeof t=="object"?t:gw(),r=typeof t=="string"?t:Wl,i=hf(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=nS("firestore");s&&BP(i,...s)}return i}function ju(t){if(t._terminated)throw new H(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||HP(t),t._firestoreClient}function HP(t){var r,i,s;const e=t._freezeSettings(),n=function(l,u,h,p){return new fk(l,u,h,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,EE(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new OP(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rt(et.fromBase64String(e))}catch(n){throw new H(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Rt(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Rt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ko(e,Rt._jsonSchema))return Rt.fromBase64String(e.bytes)}}Rt._jsonSchemaVersion="firestore/bytes/1.0",Rt._jsonSchema={type:Me("string",Rt._jsonSchemaVersion),bytes:Me("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:pn._jsonSchemaVersion}}static fromJSON(e){if(Ko(e,pn._jsonSchema))return new pn(e.latitude,e.longitude)}}pn._jsonSchemaVersion="firestore/geoPoint/1.0",pn._jsonSchema={type:Me("string",pn._jsonSchemaVersion),latitude:Me("number"),longitude:Me("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:mn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ko(e,mn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new mn(e.vectorValues);throw new H(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}mn._jsonSchemaVersion="firestore/vectorValue/1.0",mn._jsonSchema={type:Me("string",mn._jsonSchemaVersion),vectorValues:Me("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WP=/^__.*__$/;class qP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Nr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Xo(e,this.data,n,this.fieldTransforms)}}class IE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Nr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function SE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y(40011,{Ac:t})}}class Qf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Qf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return nu(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(SE(this.Ac)&&WP.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class GP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Vu(e)}Cc(e,n,r,i=!1){return new Qf({Ac:e,methodName:n,Dc:r,path:Xe.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Fu(t){const e=t._freezeSettings(),n=Vu(t._databaseId);return new GP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function xE(t,e,n,r,i,s={}){const o=t.Cc(s.merge||s.mergeFields?2:0,e,n,i);Yf("Data must be an object, but it was:",o,r);const l=kE(r,o);let u,h;if(s.merge)u=new bt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const p=[];for(const m of s.mergeFields){const g=fd(e,m,n);if(!o.contains(g))throw new H(V.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);PE(p,g)||p.push(g)}u=new bt(p),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new qP(new mt(l),u,h)}class Uu extends Kf{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Uu}}function AE(t,e,n,r){const i=t.Cc(1,e,n);Yf("Data must be an object, but it was:",i,r);const s=[],o=mt.empty();br(r,(u,h)=>{const p=Xf(e,u,n);h=je(h);const m=i.yc(p);if(h instanceof Uu)s.push(p);else{const g=na(h,m);g!=null&&(s.push(p),o.set(p,g))}});const l=new bt(s);return new IE(o,l,i.fieldTransforms)}function CE(t,e,n,r,i,s){const o=t.Cc(1,e,n),l=[fd(e,r,n)],u=[i];if(s.length%2!=0)throw new H(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(fd(e,s[g])),u.push(s[g+1]);const h=[],p=mt.empty();for(let g=l.length-1;g>=0;--g)if(!PE(h,l[g])){const E=l[g];let k=u[g];k=je(k);const P=o.yc(E);if(k instanceof Uu)h.push(E);else{const D=na(k,P);D!=null&&(h.push(E),p.set(E,D))}}const m=new bt(h);return new IE(p,m,o.fieldTransforms)}function KP(t,e,n,r=!1){return na(n,t.Cc(r?4:3,e))}function na(t,e){if(RE(t=je(t)))return Yf("Unsupported field value:",e,t),kE(t,e);if(t instanceof Kf)return function(r,i){if(!SE(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=na(l,i.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ok(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=we.fromDate(r);return{timestampValue:Xl(i.serializer,s)}}if(r instanceof we){const s=new we(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Xl(i.serializer,s)}}if(r instanceof pn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Rt)return{bytesValue:$0(i.serializer,r._byteString)};if(r instanceof Pe){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Nf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof mn)return function(o,l){return{mapValue:{fields:{[g0]:{stringValue:y0},[ql]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw l.Sc("VectorValues must only contain numeric values.");return kf(l.serializer,h)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${Au(r)}`)}(t,e)}function kE(t,e){const n={};return c0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):br(t,(r,i)=>{const s=na(i,e.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function RE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof we||t instanceof pn||t instanceof Rt||t instanceof Pe||t instanceof Kf||t instanceof mn)}function Yf(t,e,n){if(!RE(n)||!l0(n)){const r=Au(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function fd(t,e,n){if((e=je(e))instanceof ta)return e._internalPath;if(typeof e=="string")return Xf(t,e);throw nu("Field path arguments must be of type string or ",t,!1,void 0,n)}const QP=new RegExp("[~\\*/\\[\\]]");function Xf(t,e,n){if(e.search(QP)>=0)throw nu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ta(...e.split("."))._internalPath}catch{throw nu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function nu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new H(V.INVALID_ARGUMENT,l+t+u)}function PE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Pe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new YP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Jf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class YP extends ru{data(){return super.data()}}function Jf(t,e){return typeof e=="string"?Xf(t,e):e instanceof ta?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Zf{}class JP extends Zf{}function ep(t,e,...n){let r=[];e instanceof Zf&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof tp).length,l=s.filter(u=>u instanceof zu).length;if(o>1||o>0&&l>0)throw new H(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class zu extends JP{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new zu(e,n,r)}_apply(e){const n=this._parse(e);return bE(e._query,n),new ps(e.firestore,e.converter,rd(e._query,n))}_parse(e){const n=Fu(e.firestore);return function(s,o,l,u,h,p,m){let g;if(h.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new H(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){$y(m,p);const k=[];for(const P of m)k.push(By(u,s,P));g={arrayValue:{values:k}}}else g=By(u,s,m)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||$y(m,p),g=KP(l,o,m,p==="in"||p==="not-in");return Oe.create(h,p,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function iu(t,e,n){const r=e,i=Jf("where",t);return zu._create(i,r,n)}class tp extends Zf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new tp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:nn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)bE(o,u),o=rd(o,u)}(e._query,n),new ps(e.firestore,e.converter,rd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function By(t,e,n){if(typeof(n=je(n))=="string"){if(n==="")throw new H(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!x0(e)&&n.indexOf("/")!==-1)throw new H(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(pe.fromString(n));if(!K.isDocumentKey(r))throw new H(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return sy(t,new K(r))}if(n instanceof Pe)return sy(t,n._key);throw new H(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Au(n)}.`)}function $y(t,e){if(!Array.isArray(t)||t.length===0)throw new H(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function bE(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new H(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class NE{convertValue(e,n="none"){switch(Ir(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Tr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return br(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[ql].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>be(o.doubleValue));return new mn(n)}convertGeoPoint(e){return new pn(be(e.latitude),be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ku(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(bo(e));default:return null}}convertTimestamp(e){const n=Er(e);return new we(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=pe.fromString(e);ce(Y0(r),9688,{name:e});const i=new No(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||Mn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class ZP extends NE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Pe(this.firestore,null,n)}}class Ni{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yr extends ru{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new hl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Jf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new H(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=yr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}yr._jsonSchemaVersion="firestore/documentSnapshot/1.0",yr._jsonSchema={type:Me("string",yr._jsonSchemaVersion),bundleSource:Me("string","DocumentSnapshot"),bundleName:Me("string"),bundle:Me("string")};class hl extends yr{data(e={}){return super.data(e)}}class $i{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ni(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new hl(this._firestore,this._userDataWriter,r.key,r,new Ni(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new hl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ni(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new hl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ni(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,p=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:e2(l.type),doc:u,oldIndex:h,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new H(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=$i._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ef.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function e2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(t){t=gn(t,Pe);const e=gn(t.firestore,ms);return UP(ju(e),t._key).then(n=>t2(e,t,n))}$i._jsonSchemaVersion="firestore/querySnapshot/1.0",$i._jsonSchema={type:Me("string",$i._jsonSchemaVersion),bundleSource:Me("string","QuerySnapshot"),bundleName:Me("string"),bundle:Me("string")};class np extends NE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Pe(this.firestore,null,n)}}function Bu(t){t=gn(t,ps);const e=gn(t.firestore,ms),n=ju(e),r=new np(e);return XP(t._query),zP(n,t._query).then(i=>new $i(e,r,t,i))}function Hy(t,e,n){t=gn(t,Pe);const r=gn(t.firestore,ms),i=DE(t.converter,e,n);return VE(r,[xE(Fu(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,gt.none())])}function qn(t,e,n,...r){t=gn(t,Pe);const i=gn(t.firestore,ms),s=Fu(i);let o;return o=typeof(e=je(e))=="string"||e instanceof ta?CE(s,"updateDoc",t._key,e,n,r):AE(s,"updateDoc",t._key,e),VE(i,[o.toMutation(t._key,gt.exists(!0))])}function VE(t,e){return function(r,i){const s=new dn;return r.asyncQueue.enqueueAndForget(async()=>xP(await jP(r),i,s)),s.promise}(ju(t),e)}function t2(t,e,n){const r=n.docs.get(e._key),i=new np(t);return new yr(t,i,e._key,r,new Ni(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n2={maxAttempts:5};function qs(t,e){if((t=je(t)).firestore!==e)throw new H(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Fu(e)}get(e){const n=qs(e,this._firestore),r=new ZP(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return Y(24041);const s=i[0];if(s.isFoundDocument())return new ru(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new ru(this._firestore,r,n._key,null,n.converter);throw Y(18433,{doc:s})})}set(e,n,r){const i=qs(e,this._firestore),s=DE(i.converter,n,r),o=xE(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=qs(e,this._firestore);let o;return o=typeof(n=je(n))=="string"||n instanceof ta?CE(this._dataReader,"Transaction.update",s._key,n,r,i):AE(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=qs(e,this._firestore);return this._transaction.delete(n._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2 extends r2{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=qs(e,this._firestore),r=new np(this._firestore);return super.get(e).then(i=>new yr(this._firestore,r,n._key,i._document,new Ni(!1,!1),n.converter))}}function s2(t,e,n){t=gn(t,ms);const r={...n2,...n};return function(s){if(s.maxAttempts<1)throw new H(V.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,l){const u=new dn;return s.asyncQueue.enqueueAndForget(async()=>{const h=await FP(s);new LP(s.asyncQueue,h,l,o,u).ju()}),u.promise}(ju(t),i=>e(new i2(t,i)),r)}(function(e,n=!0){(function(i){cs=i})(ls),Xi(new Jr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new ms(new KC(r.getProvider("auth-internal")),new XC(o,r.getProvider("app-check-internal")),function(h,p){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new H(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new No(h.options.projectId,p)}(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),pr(qg,Gg,e),pr(qg,Gg,"esm2020")})();var o2="firebase",a2="12.2.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pr(o2,a2,"app");const l2={apiKey:"AIzaSyCJZEqXP_jdy2wFQBd7iB1TV_AwikgXkq4",authDomain:"habesha-cuts.firebaseapp.com",projectId:"habesha-cuts",storageBucket:"habesha-cuts.firebasestorage.app",messagingSenderId:"819909600217",appId:"1:819909600217:web:bf5c14f71ed7903cdc2fc8"},LE=mw(l2),Bt=HC(LE),Ne=$P(LE);class ra{constructor(e=0,n="Network Error"){this.status=e,this.text=n}}const u2=()=>{if(!(typeof localStorage>"u"))return{get:t=>Promise.resolve(localStorage.getItem(t)),set:(t,e)=>Promise.resolve(localStorage.setItem(t,e)),remove:t=>Promise.resolve(localStorage.removeItem(t))}},Ye={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:u2()},rp=t=>t?typeof t=="string"?{publicKey:t}:t.toString()==="[object Object]"?t:{}:{},c2=(t,e="https://api.emailjs.com")=>{if(!t)return;const n=rp(t);Ye.publicKey=n.publicKey,Ye.blockHeadless=n.blockHeadless,Ye.storageProvider=n.storageProvider,Ye.blockList=n.blockList,Ye.limitRate=n.limitRate,Ye.origin=n.origin||e},OE=async(t,e,n={})=>{const r=await fetch(Ye.origin+t,{method:"POST",headers:n,body:e}),i=await r.text(),s=new ra(r.status,i);if(r.ok)return s;throw s},ME=(t,e,n)=>{if(!t||typeof t!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n||typeof n!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},h2=t=>{if(t&&t.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},jE=t=>t.webdriver||!t.languages||t.languages.length===0,FE=()=>new ra(451,"Unavailable For Headless Browser"),d2=(t,e)=>{if(!Array.isArray(t))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},f2=t=>{var e;return!((e=t.list)!=null&&e.length)||!t.watchVariable},p2=(t,e)=>t instanceof FormData?t.get(e):t[e],UE=(t,e)=>{if(f2(t))return!1;d2(t.list,t.watchVariable);const n=p2(e,t.watchVariable);return typeof n!="string"?!1:t.list.includes(n)},zE=()=>new ra(403,"Forbidden"),m2=(t,e)=>{if(typeof t!="number"||t<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"},g2=async(t,e,n)=>{const r=Number(await n.get(t)||0);return e-Date.now()+r},BE=async(t,e,n)=>{if(!e.throttle||!n)return!1;m2(e.throttle,e.id);const r=e.id||t;return await g2(r,e.throttle,n)>0?!0:(await n.set(r,Date.now().toString()),!1)},$E=()=>new ra(429,"Too Many Requests"),y2=async(t,e,n,r)=>{const i=rp(r),s=i.publicKey||Ye.publicKey,o=i.blockHeadless||Ye.blockHeadless,l=i.storageProvider||Ye.storageProvider,u={...Ye.blockList,...i.blockList},h={...Ye.limitRate,...i.limitRate};return o&&jE(navigator)?Promise.reject(FE()):(ME(s,t,e),h2(n),n&&UE(u,n)?Promise.reject(zE()):await BE(location.pathname,h,l)?Promise.reject($E()):OE("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:s,service_id:t,template_id:e,template_params:n}),{"Content-type":"application/json"}))},_2=t=>{if(!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},v2=t=>typeof t=="string"?document.querySelector(t):t,w2=async(t,e,n,r)=>{const i=rp(r),s=i.publicKey||Ye.publicKey,o=i.blockHeadless||Ye.blockHeadless,l=Ye.storageProvider||i.storageProvider,u={...Ye.blockList,...i.blockList},h={...Ye.limitRate,...i.limitRate};if(o&&jE(navigator))return Promise.reject(FE());const p=v2(n);ME(s,t,e),_2(p);const m=new FormData(p);return UE(u,m)?Promise.reject(zE()):await BE(location.pathname,h,l)?Promise.reject($E()):(m.append("lib_version","4.4.1"),m.append("service_id",t),m.append("template_id",e),m.append("user_id",s),OE("/api/v1.0/email/send-form",m))},Wy={init:c2,send:y2,sendForm:w2,EmailJSResponseStatus:ra},ee={gold:"#D4AF37",dark:"#1a1a1a",white:"#ffffff",textLight:"#666666",textMid:"#444444",green:"#27ae60",greenBg:"#e8f8f5",red:"#e74c3c",redBg:"#fdf0ef"},E2=`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
  *{margin:0;padding:0;box-sizing:border-box;}
  body{font-family:'DM Sans',sans-serif;background:#faf9f6;color:#2C2C2C;}
  ::-webkit-scrollbar{width:6px;}::-webkit-scrollbar-thumb{background:#ddd;border-radius:3px;}
  .serif{font-family:'Playfair Display',serif;}

  .nav{display:flex;justify-content:space-between;align-items:center;padding:0 5%;height:68px;background:#fff;border-bottom:1px solid #f0ece0;position:sticky;top:0;z-index:100;box-shadow:0 2px 20px rgba(0,0,0,0.04);}
  .logo-text{font-family:'Playfair Display',serif;font-size:22px;font-weight:900;color:#2C2C2C;cursor:pointer;}
  .logo-text span{color:#D4AF37;}
  .nav-links{display:flex;align-items:center;gap:8px;}
  .nav-btn{background:none;border:none;cursor:pointer;padding:8px 14px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:500;color:#444;border-radius:8px;transition:all .2s;}
  .nav-btn:hover{background:#fcf8f0;color:#2C2C2C;}
  .nav-pill{background:#D4AF37;color:#fff;padding:9px 20px;border-radius:50px;font-size:14px;font-weight:600;cursor:pointer;border:none;font-family:'DM Sans',sans-serif;transition:all .2s;box-shadow:0 3px 12px rgba(212,175,55,0.35);}
  .nav-pill:hover{background:#b8962e;transform:translateY(-1px);box-shadow:0 5px 18px rgba(212,175,55,0.45);}

  .hero{background:#1a1a1a;padding:90px 5% 80px;position:relative;overflow:hidden;}
  .hero::before{content:'';position:absolute;top:-120px;right:-80px;width:500px;height:500px;border-radius:50%;border:60px solid rgba(212,175,55,0.07);pointer-events:none;}
  .hero::after{content:'';position:absolute;bottom:-100px;left:-60px;width:350px;height:350px;border-radius:50%;border:40px solid rgba(212,175,55,0.05);pointer-events:none;}
  .hero-inner{max-width:680px;position:relative;z-index:1;}
  .hero-eyebrow{display:inline-flex;align-items:center;gap:8px;background:rgba(212,175,55,0.15);color:#D4AF37;padding:6px 14px;border-radius:50px;font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;margin-bottom:24px;}
  .hero h1{font-family:'Playfair Display',serif;font-size:clamp(36px,5vw,58px);font-weight:900;color:#fff;line-height:1.1;margin-bottom:20px;}
  .hero h1 em{color:#D4AF37;font-style:normal;}
  .hero p{color:rgba(255,255,255,0.65);font-size:17px;line-height:1.7;max-width:500px;margin-bottom:36px;}
  .hero-search{display:flex;gap:10px;max-width:520px;}
  .hero-search select{flex:1;padding:14px 16px;border-radius:10px;border:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.08);color:#fff;font-size:14px;font-family:'DM Sans',sans-serif;outline:none;cursor:pointer;}
  .hero-search select option{background:#2C2C2C;color:#fff;}
  .hero-search select:focus{border-color:#D4AF37;}
  .search-cta{background:#D4AF37;color:#fff;border:none;padding:14px 28px;border-radius:10px;font-size:14px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;white-space:nowrap;transition:all .2s;box-shadow:0 4px 16px rgba(212,175,55,0.4);}
  .search-cta:hover{background:#b8962e;transform:translateY(-1px);}
  .hero-stats{display:flex;gap:32px;margin-top:48px;padding-top:40px;border-top:1px solid rgba(255,255,255,0.08);}
  .hero-stat span:first-child{display:block;font-family:'Playfair Display',serif;font-size:28px;font-weight:700;color:#fff;}
  .hero-stat span:last-child{font-size:13px;color:rgba(255,255,255,0.45);}

  .section{padding:70px 5%;}
  .section-label{font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#D4AF37;margin-bottom:10px;}
  .section-title{font-family:'Playfair Display',serif;font-size:32px;font-weight:700;color:#2C2C2C;margin-bottom:8px;}
  .section-sub{color:#666;font-size:15px;}
  .grid-3{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:24px;margin-top:40px;}

  .bcard{background:#fff;border-radius:16px;overflow:hidden;border:1px solid #f0ece0;transition:all .25s;cursor:pointer;}
  .bcard:hover{transform:translateY(-4px);box-shadow:0 16px 40px rgba(212,175,55,0.12);border-color:#e8dfa0;}
  .bcard-top{background:linear-gradient(135deg,#1a1a1a 0%,#3a3a3a 100%);padding:24px;display:flex;align-items:flex-start;gap:16px;}
  .avatar{width:64px;height:64px;border-radius:50%;border:3px solid #D4AF37;background:#3a3a3a;display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-size:22px;font-weight:700;color:#D4AF37;flex-shrink:0;}
  .bcard-name{font-family:'Playfair Display',serif;font-size:18px;font-weight:700;color:#fff;margin-bottom:3px;}
  .bcard-shop{color:#D4AF37;font-size:13px;font-weight:600;}
  .bcard-body{padding:20px;}
  .bcard-loc{display:flex;align-items:center;gap:5px;color:#666;font-size:13px;margin-bottom:14px;}
  .tags{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:18px;}
  .tag{background:#fcf8f0;color:#2C2C2C;padding:4px 10px;border-radius:50px;font-size:12px;font-weight:600;border:1px solid #f5e9b8;}
  .bcard-meta{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;}
  .rating{display:flex;align-items:center;gap:4px;font-size:13px;font-weight:600;color:#2C2C2C;}
  .price{font-size:13px;font-weight:700;color:#27ae60;background:#e8f8f5;padding:4px 10px;border-radius:6px;}
  .book-btn{width:100%;background:#1a1a1a;color:#fff;border:none;padding:12px;border-radius:10px;font-size:14px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .2s;}
  .book-btn:hover{background:#D4AF37;}

  .how-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:24px;margin-top:40px;}
  .how-card{background:#fff;padding:28px;border-radius:16px;border:1px solid #f0ece0;position:relative;}
  .how-num{width:36px;height:36px;background:#D4AF37;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-size:15px;font-weight:700;color:#fff;margin-bottom:16px;}
  .how-card h4{font-weight:600;font-size:16px;margin-bottom:8px;color:#2C2C2C;}
  .how-card p{font-size:14px;color:#666;line-height:1.6;}

  .barbers-hero{background:#1a1a1a;padding:80px 5%;text-align:center;}
  .barbers-hero h2{font-family:'Playfair Display',serif;font-size:42px;font-weight:900;color:#D4AF37;margin-bottom:16px;}
  .barbers-hero p{color:rgba(255,255,255,0.65);font-size:17px;max-width:560px;margin:0 auto 36px;}
  .feat-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:24px;margin-top:40px;}
  .feat-card{background:#fff;padding:30px;border-radius:16px;border-top:4px solid #D4AF37;box-shadow:0 4px 20px rgba(0,0,0,0.04);}
  .feat-icon{font-size:30px;margin-bottom:16px;}
  .feat-card h3{font-size:17px;font-weight:600;margin-bottom:10px;color:#2C2C2C;}
  .feat-card p{font-size:14px;color:#666;line-height:1.65;}

  .book-btn:hover{background:#D4AF37;}
  .ig-btn{display:flex;align-items:center;justify-content:center;gap:7px;width:100%;padding:10px;border-radius:10px;border:none;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:600;text-decoration:none;transition:all .2s;background:linear-gradient(135deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);color:#fff;margin-bottom:10px;}
.ig-btn:hover{opacity:0.88;transform:translateY(-1px);box-shadow:0 4px 16px rgba(220,39,67,0.35);}
.bcard-bio{font-size:13px;color:#666;line-height:1.55;margin-bottom:14px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}

  .auth-bg{min-height:calc(100vh - 68px);background:#fcf8f0;display:flex;align-items:center;justify-content:center;padding:40px 20px;}
  .auth-box{background:#fff;padding:44px;border-radius:20px;box-shadow:0 20px 60px rgba(0,0,0,0.07);width:100%;max-width:420px;}
  .auth-box h2{font-family:'Playfair Display',serif;font-size:28px;font-weight:700;color:#2C2C2C;margin-bottom:8px;}
  .auth-box .sub{color:#666;font-size:14px;margin-bottom:32px;}
  .tabs2{display:flex;background:#faf9f6;border-radius:10px;padding:4px;gap:4px;margin-bottom:28px;}
  .tab2{flex:1;text-align:center;padding:9px;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;transition:all .2s;border:none;background:none;font-family:'DM Sans',sans-serif;color:#666;}
  .tab2.active{background:#fff;color:#2C2C2C;box-shadow:0 2px 8px rgba(0,0,0,0.06);}
  .field{margin-bottom:18px;}
  .field label{display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:#2C2C2C;}
  .field input,.field select,.field textarea{width:100%;padding:12px 14px;border:1.5px solid #e8e8e8;border-radius:10px;font-size:14px;font-family:'DM Sans',sans-serif;outline:none;transition:border .2s;background:#fff;color:#2C2C2C;}
  .field input:focus,.field select:focus,.field textarea:focus{border-color:#D4AF37;}
  .field textarea{resize:vertical;min-height:80px;}
  .row2{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
  .submit-btn{width:100%;background:#D4AF37;color:#fff;border:none;padding:14px;border-radius:10px;font-size:16px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;margin-top:8px;transition:all .2s;box-shadow:0 4px 16px rgba(212,175,55,0.35);}
  .submit-btn:hover{background:#b8962e;}
  .submit-btn:disabled{background:#ccc;box-shadow:none;cursor:not-allowed;}
  .auth-toggle{text-align:center;margin-top:20px;font-size:13px;color:#666;}
  .auth-toggle button{background:none;border:none;color:#D4AF37;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:13px;}

  .booking-wrap{max-width:860px;margin:0 auto;padding:50px 5%;}
  .back-btn{display:flex;align-items:center;gap:6px;background:none;border:none;color:#666;font-size:14px;font-weight:500;cursor:pointer;font-family:'DM Sans',sans-serif;margin-bottom:20px;padding:8px 0;transition:color .2s;}
  .back-btn:hover{color:#D4AF37;}
  .booking-barber{display:flex;align-items:center;gap:16px;background:#fff;padding:20px 24px;border-radius:14px;border:1px solid #f0ece0;margin-bottom:28px;}
  .step-bar{display:flex;align-items:center;gap:0;margin-bottom:36px;}
  .step-item{display:flex;align-items:center;gap:8px;flex:1;}
  .step-circle{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0;transition:all .2s;}
  .step-circle.done{background:#27ae60;color:#fff;}
  .step-circle.active{background:#D4AF37;color:#fff;}
  .step-circle.todo{background:#eee;color:#666;}
  .step-label{font-size:13px;font-weight:600;color:#444;}
  .step-line{flex:1;height:2px;background:#eee;margin:0 4px;}
  .step-line.done{background:#D4AF37;}

  .service-list{display:grid;gap:10px;margin-bottom:28px;}
  .service-item{display:flex;align-items:center;justify-content:space-between;padding:16px 18px;border-radius:12px;border:2px solid #f0ece0;cursor:pointer;transition:all .2s;background:#fff;}
  .service-item:hover{border-color:#e8dfa0;}
  .service-item.selected{border-color:#D4AF37;background:#fcf8f0;}
  .service-name{font-weight:600;font-size:15px;}
  .service-detail{display:flex;gap:12px;align-items:center;}
  .service-dur{font-size:13px;color:#666;}
  .service-price{font-size:15px;font-weight:700;color:#2C2C2C;}

  .calendar-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:4px;margin-bottom:24px;}
  .cal-day-name{text-align:center;font-size:11px;font-weight:600;color:#666;padding:8px 0;letter-spacing:.05em;}
  .cal-day{text-align:center;padding:10px 4px;border-radius:10px;cursor:pointer;font-size:14px;font-weight:500;transition:all .2s;border:none;background:none;font-family:'DM Sans',sans-serif;color:#2C2C2C;}
  .cal-day:hover:not(.disabled){background:#fcf8f0;color:#2C2C2C;}
  .cal-day.selected{background:#D4AF37;color:#fff;font-weight:700;}
  .cal-day.disabled{color:#ccc;cursor:not-allowed;}
  .cal-day.today{border:2px solid #D4AF37;}
  .cal-nav{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;}
  .cal-nav button{background:none;border:1px solid #e8e8e8;width:36px;height:36px;border-radius:8px;cursor:pointer;font-size:16px;transition:all .2s;}
  .cal-nav button:hover{border-color:#D4AF37;color:#D4AF37;}
  .cal-nav h4{font-weight:600;font-size:16px;color:#2C2C2C;}

  .time-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(90px,1fr));gap:8px;margin-bottom:28px;}
  .time-slot{padding:10px 6px;border-radius:8px;border:1.5px solid #e8e8e8;cursor:pointer;text-align:center;font-size:13px;font-weight:600;transition:all .2s;background:#fff;}
  .time-slot:hover:not(.taken){border-color:#D4AF37;color:#D4AF37;}
  .time-slot.selected{background:#D4AF37;color:#fff;border-color:#D4AF37;}
  .time-slot.taken{background:#f5f5f5;color:#bbb;cursor:not-allowed;text-decoration:line-through;}

  .confirm-box{background:#fcf8f0;border-radius:16px;padding:28px;border:1px solid #f5e9b8;margin-bottom:24px;}
  .confirm-row{display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid #f5e9b8;font-size:14px;}
  .confirm-row:last-child{border-bottom:none;font-weight:700;font-size:16px;}
  .confirm-label{color:#666;}
  .confirm-val{font-weight:600;color:#2C2C2C;}

  .dash-layout{display:flex;min-height:calc(100vh - 68px);}
  .sidebar{width:240px;background:#fff;border-right:1px solid #f0ece0;padding:28px 0;flex-shrink:0;}
  .sidebar-user{padding:0 20px 24px;border-bottom:1px solid #f0ece0;margin-bottom:12px;}
  .sidebar-avatar{width:48px;height:48px;border-radius:50%;background:#D4AF37;display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-size:18px;font-weight:700;color:#fff;margin-bottom:12px;}
  .sidebar-name{font-weight:700;font-size:15px;color:#2C2C2C;}
  .sidebar-role{font-size:12px;color:#666;margin-top:2px;}
  .sidebar-item{display:flex;align-items:center;gap:10px;padding:12px 20px;cursor:pointer;font-size:14px;font-weight:500;color:#666;transition:all .2s;border-right:3px solid transparent;border:none;background:none;width:100%;text-align:left;font-family:'DM Sans',sans-serif;}
  .sidebar-item:hover{background:#faf9f6;color:#2C2C2C;}
  .sidebar-item.active{background:#fcf8f0;color:#D4AF37;border-right:3px solid #D4AF37;}
  .dash-main{flex:1;padding:36px 4%;overflow-y:auto;}
  .dash-title{font-family:'Playfair Display',serif;font-size:26px;font-weight:700;color:#2C2C2C;margin-bottom:6px;}
  .dash-sub{color:#666;font-size:14px;margin-bottom:28px;}
  .stats-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:16px;margin-bottom:28px;}
  .stat-card{background:#fff;padding:22px;border-radius:14px;border:1px solid #f0ece0;border-top:3px solid #D4AF37;}
  .stat-label{font-size:13px;color:#666;margin-bottom:8px;}
  .stat-num{font-family:'Playfair Display',serif;font-size:32px;font-weight:700;color:#2C2C2C;}
  .stat-change{font-size:12px;color:#27ae60;margin-top:4px;font-weight:600;}

  .appt-table{width:100%;border-collapse:collapse;background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.03);}
  .appt-table th{background:#faf9f6;padding:12px 16px;text-align:left;font-size:12px;font-weight:700;color:#666;letter-spacing:.05em;text-transform:uppercase;}
  .appt-table td{padding:14px 16px;border-bottom:1px solid #f5f5f5;font-size:14px;color:#2C2C2C;}
  .appt-table tr:last-child td{border-bottom:none;}
  .status-badge{padding:4px 10px;border-radius:50px;font-size:12px;font-weight:700;}
  .status-confirmed{background:#e8f8f5;color:#27ae60;}
  .status-pending{background:#fff8e1;color:#f59e0b;}
  .status-cancelled{background:#fdf0ef;color:#e74c3c;}
  .status-completed{background:#e8f8f5;color:#27ae60;}

  .avail-grid{display:grid;gap:10px;}
  .avail-row{display:flex;align-items:center;gap:12px;background:#fff;padding:16px 18px;border-radius:12px;border:1px solid #f0ece0;}
  .day-name{width:100px;font-weight:600;font-size:14px;color:#2C2C2C;}
  .toggle-switch{position:relative;width:44px;height:24px;flex-shrink:0;}
  .toggle-switch input{opacity:0;width:0;height:0;}
  .toggle-slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background:#ccc;transition:.3s;border-radius:24px;}
  .toggle-slider:before{position:absolute;content:"";height:18px;width:18px;left:3px;bottom:3px;background:white;transition:.3s;border-radius:50%;}
  input:checked + .toggle-slider{background:#D4AF37;}
  input:checked + .toggle-slider:before{transform:translateX(20px);}
  .time-range{display:flex;align-items:center;gap:8px;margin-left:auto;}
  .time-range input{padding:6px 10px;border:1.5px solid #e8e8e8;border-radius:8px;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;width:90px;}
  .time-range input:focus{border-color:#D4AF37;}
  .time-sep{font-size:12px;color:#666;}

  .success-wrap{text-align:center;padding:60px 20px;}
  .success-icon{width:80px;height:80px;background:#e8f8f5;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:36px;margin:0 auto 24px;}
  .success-wrap h2{font-family:'Playfair Display',serif;font-size:30px;font-weight:700;color:#2C2C2C;margin-bottom:12px;}
  .success-wrap p{color:#666;font-size:16px;max-width:400px;margin:0 auto 32px;}

  .toast{position:fixed;bottom:28px;right:28px;background:#2C2C2C;color:#fff;padding:14px 20px;border-radius:12px;font-size:14px;font-weight:500;z-index:9999;display:flex;align-items:center;gap:10px;box-shadow:0 8px 30px rgba(0,0,0,0.2);animation:slideup .3s ease;}
  @keyframes slideup{from{transform:translateY(20px);opacity:0;}to{transform:translateY(0);opacity:1;}}
  .toast-dot{width:8px;height:8px;background:#27ae60;border-radius:50%;flex-shrink:0;}
  .toast-dot.error{background:#e74c3c;}

  .spinner{display:inline-block;width:16px;height:16px;border:2px solid rgba(255,255,255,0.4);border-top-color:#fff;border-radius:50%;animation:spin .7s linear infinite;margin-right:8px;vertical-align:middle;}
  @keyframes spin{to{transform:rotate(360deg);}}

  .loading-screen{display:flex;align-items:center;justify-content:center;min-height:100vh;font-family:'Playfair Display',serif;font-size:20px;color:#D4AF37;}

  footer{background:#1a1a1a;color:rgba(255,255,255,0.45);text-align:center;padding:28px;font-size:13px;}
  footer span{color:#D4AF37;}

  @media(max-width:768px){
    .hero-search{flex-direction:column;}
    .hero-stats{gap:20px;flex-wrap:wrap;}
    .row2{grid-template-columns:1fr;}
    .dash-layout{flex-direction:column;}
    .sidebar{width:100%;border-right:none;border-bottom:1px solid #f0ece0;padding:12px 0;overflow-x:auto;}
    .sidebar-user{display:none;}
    .sidebar-item{padding:10px 14px;font-size:13px;border-right:none!important;border-bottom:3px solid transparent;white-space:nowrap;}
    .sidebar-item.active{border-right:none!important;border-bottom:3px solid #D4AF37;}
    .nav-links .nav-btn:not(:last-child){display:none;}
    .booking-wrap{padding:30px 4%;}
    .auth-box{padding:28px 20px;}
  }
`,ip=[{id:1,name:"Classic Haircut",duration:"30 min",price:30},{id:2,name:"Skin Fade",duration:"45 min",price:40},{id:3,name:"Beard Trim & Shape",duration:"20 min",price:20}],sp=[{day:"Monday",open:!0,start:"09:00",end:"18:00"},{day:"Tuesday",open:!0,start:"09:00",end:"18:00"},{day:"Wednesday",open:!0,start:"10:00",end:"17:00"},{day:"Thursday",open:!0,start:"09:00",end:"18:00"},{day:"Friday",open:!0,start:"09:00",end:"19:00"},{day:"Saturday",open:!0,start:"08:00",end:"16:00"},{day:"Sunday",open:!1,start:"10:00",end:"15:00"}],T2=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],I2=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],pi=["January","February","March","April","May","June","July","August","September","October","November","December"];function op(t=""){return t.split(" ").map(e=>e[0]).join("").slice(0,2).toUpperCase()}function HE({r:t=5}){const e=Math.floor(t);return d.jsxs("span",{className:"rating",children:["★".repeat(e),d.jsx("span",{style:{color:"#ccc"},children:"★".repeat(5-e)})," ",t]})}function kn(){return d.jsx("span",{className:"spinner"})}function S2({msg:t,type:e="success",onClose:n}){return te.useEffect(()=>{const r=setTimeout(n,3500);return()=>clearTimeout(r)},[n]),d.jsxs("div",{className:"toast",children:[d.jsx("div",{className:`toast-dot${e==="error"?" error":""}`}),t]})}function x2({setPage:t,user:e,setUser:n,setToast:r}){const i=async()=>{try{await DA(Bt),n(null),t("home"),r({msg:"Logged out successfully.",type:"success"})}catch{r({msg:"Logout failed. Please try again.",type:"error"})}};return d.jsxs("nav",{className:"nav",children:[d.jsxs("div",{className:"logo-text serif",onClick:()=>t("home"),children:["Habesha",d.jsx("span",{children:"Cuts"})]}),d.jsxs("div",{className:"nav-links",children:[d.jsx("button",{className:"nav-btn",onClick:()=>t("home"),children:"Find a Barber"}),d.jsx("button",{className:"nav-btn",onClick:()=>t("for-barbers"),children:"For Barbers"}),e?d.jsxs(d.Fragment,{children:[d.jsx("button",{className:"nav-btn",onClick:()=>t("dashboard"),children:"Dashboard"}),d.jsx("button",{className:"nav-btn",style:{color:ee.red},onClick:i,children:"Logout"})]}):d.jsx("button",{className:"nav-pill",onClick:()=>t("auth"),children:"Login / Sign Up"})]})]})}function A2({setPage:t,setSelectedBarber:e}){const[n,r]=te.useState("toronto"),[i,s]=te.useState([]),[o,l]=te.useState([]),[u,h]=te.useState(!0);te.useEffect(()=>{(async()=>{try{const E=(await Bu(Oo(Ne,"barbers"))).docs.map(k=>({id:k.id,...k.data()}));s(E),l(E.filter(k=>{var P;return((P=k.city)==null?void 0:P.toLowerCase())===n.toLowerCase()}))}catch(g){console.error("Error fetching barbers:",g)}finally{h(!1)}})()},[]);const p=()=>{l(n?i.filter(m=>{var g;return((g=m.city)==null?void 0:g.toLowerCase())===n.toLowerCase()}):i)};return d.jsxs(d.Fragment,{children:[d.jsx("header",{className:"hero",children:d.jsxs("div",{className:"hero-inner",children:[d.jsx("div",{className:"hero-eyebrow",children:"✦ Canada's #1 Habesha Barbershop Platform"}),d.jsxs("h1",{children:["Book top ",d.jsx("em",{children:"Habesha"})," barbers",d.jsx("br",{}),"across Canada."]}),d.jsx("p",{children:"Skip the wait. Find specialists in your hair texture, book instantly, and secure your spot in minutes."}),d.jsxs("div",{className:"hero-search",children:[d.jsxs("select",{value:n,onChange:m=>r(m.target.value),children:[d.jsx("option",{value:"",children:"All Cities"}),d.jsxs("optgroup",{label:"Ontario",children:[d.jsx("option",{value:"toronto",children:"Toronto"}),d.jsx("option",{value:"ottawa",children:"Ottawa"}),d.jsx("option",{value:"mississauga",children:"Mississauga"}),d.jsx("option",{value:"brampton",children:"Brampton"}),d.jsx("option",{value:"hamilton",children:"Hamilton"}),d.jsx("option",{value:"london",children:"London"}),d.jsx("option",{value:"kitchener",children:"Kitchener"})]}),d.jsxs("optgroup",{label:"Alberta",children:[d.jsx("option",{value:"calgary",children:"Calgary"}),d.jsx("option",{value:"edmonton",children:"Edmonton"})]}),d.jsxs("optgroup",{label:"British Columbia",children:[d.jsx("option",{value:"vancouver",children:"Vancouver"}),d.jsx("option",{value:"surrey",children:"Surrey"}),d.jsx("option",{value:"burnaby",children:"Burnaby"})]}),d.jsxs("optgroup",{label:"Quebec",children:[d.jsx("option",{value:"montreal",children:"Montreal"}),d.jsx("option",{value:"laval",children:"Laval"}),d.jsx("option",{value:"gatineau",children:"Gatineau"})]}),d.jsx("optgroup",{label:"Manitoba",children:d.jsx("option",{value:"winnipeg",children:"Winnipeg"})}),d.jsx("optgroup",{label:"Nova Scotia",children:d.jsx("option",{value:"halifax",children:"Halifax"})})]}),d.jsx("button",{className:"search-cta",onClick:p,children:"Search"})]}),d.jsxs("div",{className:"hero-stats",children:[d.jsxs("div",{className:"hero-stat",children:[d.jsx("span",{children:i.length||"—"}),d.jsx("span",{children:"Verified Barbers"})]}),d.jsxs("div",{className:"hero-stat",children:[d.jsx("span",{children:"18"}),d.jsx("span",{children:"Cities"})]}),d.jsxs("div",{className:"hero-stat",children:[d.jsx("span",{children:"4,800+"}),d.jsx("span",{children:"Bookings Made"})]})]})]})}),d.jsxs("section",{className:"section",style:{background:ee.white},children:[d.jsx("div",{className:"section-label",children:"How it works"}),d.jsx("div",{className:"section-title serif",children:"Simple. Fast. Effortless."}),d.jsx("div",{className:"how-grid",children:[{n:1,t:"Find Your Barber",d:"Browse verified Habesha barbers in your city, read reviews, and explore their specialty."},{n:2,t:"Pick a Service",d:"Choose from haircuts, fades, beard trims, loc care, and more — see pricing upfront."},{n:3,t:"Book Your Slot",d:"Select a date and time that works for you. Instant confirmation, no calls needed."},{n:4,t:"Show Up Fresh",d:"Walk in at your time, skip the wait, and leave looking your best."}].map(m=>d.jsxs("div",{className:"how-card",children:[d.jsx("div",{className:"how-num",children:m.n}),d.jsx("h4",{children:m.t}),d.jsx("p",{children:m.d})]},m.n))})]}),d.jsxs("section",{className:"section",children:[d.jsx("div",{className:"section-label",children:"Featured Barbers"}),d.jsx("div",{className:"section-title serif",children:"Top-rated talent near you."}),d.jsx("div",{className:"section-sub",children:"Discover specialists who know your hair."}),u?d.jsxs("div",{style:{textAlign:"center",padding:"60px 0",color:ee.textLight},children:[d.jsx(kn,{})," Loading barbers…"]}):o.length===0?d.jsxs("div",{style:{textAlign:"center",padding:"60px 20px",color:ee.textLight},children:[d.jsx("div",{style:{fontSize:40,marginBottom:16},children:"🔍"}),d.jsx("p",{children:"No barbers found in that city yet. More coming soon!"})]}):d.jsx("div",{className:"grid-3",children:o.map(m=>d.jsxs("div",{className:"bcard",children:[d.jsxs("div",{className:"bcard-top",children:[d.jsx("div",{className:"avatar",children:op(m.name)}),d.jsxs("div",{children:[d.jsxs("div",{className:"bcard-name",children:[m.name,m.rating>=4.9&&d.jsx("span",{style:{color:ee.gold,fontSize:13,marginLeft:6},children:"✓"})]}),d.jsx("div",{className:"bcard-shop",children:m.shop}),m.available===!1&&d.jsx("span",{style:{background:"rgba(231,76,60,0.2)",color:"#ff8b80",padding:"3px 8px",borderRadius:50,fontSize:11,fontWeight:700,marginTop:6,display:"inline-block"},children:"FULLY BOOKED"})]})]}),d.jsxs("div",{className:"bcard-body",children:[d.jsxs("div",{className:"bcard-loc",children:[m.bio&&d.jsx("div",{className:"bcard-bio",children:m.bio}),"📍 ",m.city?m.city.charAt(0).toUpperCase()+m.city.slice(1):"Canada"]}),m.bio&&d.jsx("div",{style:{fontSize:13,color:ee.textMid,marginBottom:12,display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"},children:m.bio}),d.jsx("div",{className:"tags",children:(m.tags||["Fade","Lineup"]).map(g=>d.jsx("span",{className:"tag",children:g},g))}),d.jsxs("div",{className:"bcard-meta",children:[d.jsx(HE,{r:m.rating||5}),d.jsxs("small",{style:{color:ee.textLight,fontSize:12},children:["(",m.reviews||0,")"]}),d.jsxs("span",{className:"price",children:["from $",m.price||30]})]}),m.instagram&&d.jsxs("a",{className:"ig-btn",href:`https://instagram.com/${m.instagram.replace(/^@/,"")}`,target:"_blank",rel:"noopener noreferrer",onClick:g=>g.stopPropagation(),children:[d.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),d.jsx("circle",{cx:"12",cy:"12",r:"4"}),d.jsx("circle",{cx:"17.5",cy:"6.5",r:"1",fill:"currentColor",stroke:"none"})]}),"View Portfolio on Instagram"]}),d.jsx("button",{className:"book-btn",disabled:m.available===!1,style:m.available===!1?{background:"#ccc",cursor:"not-allowed"}:{},onClick:()=>{m.available!==!1&&(e(m),t("booking"))},children:m.available!==!1?"Book Appointment":"Fully Booked"})]})]},m.id))})]}),d.jsx("footer",{children:d.jsxs("p",{children:["© 2026 ",d.jsx("span",{children:"HabeshaCuts"})," Canada. Built for the community."]})})]})}function C2({setPage:t}){return d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"barbers-hero",children:[d.jsx("div",{className:"hero-eyebrow",style:{display:"inline-flex",margin:"0 auto 24px",background:"rgba(212,175,55,0.15)",color:ee.gold,padding:"6px 14px",borderRadius:50,fontSize:12,fontWeight:600,letterSpacing:".08em",textTransform:"uppercase"},children:"For Barbers"}),d.jsxs("h2",{className:"serif",children:["Grow your clientele.",d.jsx("br",{}),"Streamline your schedule."]}),d.jsx("p",{children:"Join Canada's fastest-growing Habesha barbershop network. Fill your chair, automate bookings, and focus on what you do best."}),d.jsx("button",{className:"nav-pill",onClick:()=>t("auth"),children:"Join as a Barber"})]}),d.jsxs("section",{className:"section",style:{background:ee.white},children:[d.jsxs("div",{style:{textAlign:"center"},children:[d.jsx("div",{className:"section-label",children:"Why HabeshaCuts"}),d.jsx("div",{className:"section-title serif",children:"Everything you need to run your shop."})]}),d.jsx("div",{className:"feat-grid",children:[{icon:"📅",t:"Smart Booking System",d:"Clients book 24/7 without calling you. Your calendar stays up to date automatically. No more back-and-forth DMs."},{icon:"💰",t:"Transparent Earnings",d:"See your revenue, upcoming appointments, and top services at a glance on your personal dashboard."},{icon:"⭐",t:"Ratings & Reputation",d:"Verified reviews build your profile. The better you cut, the more clients find you organically."},{icon:"🔔",t:"Instant Notifications",d:"Get notified when a new booking drops, a client cancels, or it's time for your next appointment."},{icon:"✂️",t:"Manage Your Services",d:"List your services with custom pricing and duration. Clients know exactly what they're getting."},{icon:"📊",t:"Analytics Dashboard",d:"Track your busiest days, most popular services, and monthly growth trends — all in one clean view."}].map(e=>d.jsxs("div",{className:"feat-card",children:[d.jsx("div",{className:"feat-icon",children:e.icon}),d.jsx("h3",{children:e.t}),d.jsx("p",{children:e.d})]},e.t))})]}),d.jsxs("section",{className:"section",style:{background:ee.dark,textAlign:"center"},children:[d.jsx("div",{className:"section-title serif",style:{color:ee.white,marginBottom:12},children:"Ready to grow your business?"}),d.jsx("p",{style:{color:"rgba(255,255,255,0.55)",marginBottom:28,fontSize:15},children:"It's free to join. Set up your profile in under 5 minutes."}),d.jsx("button",{className:"nav-pill",onClick:()=>t("auth"),children:"Create Your Barber Profile →"})]}),d.jsx("footer",{children:d.jsxs("p",{children:["© 2026 ",d.jsx("span",{children:"HabeshaCuts"})," Canada. Built for the community."]})})]})}function k2({setUser:t,setPage:e,setToast:n}){const[r,i]=te.useState("login"),[s,o]=te.useState("client"),[l,u]=te.useState({name:"",email:"",password:"",shop:"",city:"toronto"}),[h,p]=te.useState(""),[m,g]=te.useState(!1),E=(P,D)=>u(x=>({...x,[P]:D})),k=async()=>{if(p(""),!l.email||!l.password){p("Please fill all required fields.");return}if(r==="signup"&&!l.name){p("Please enter your name.");return}if(r==="signup"&&l.password.length<6){p("Password must be at least 6 characters.");return}g(!0);try{let P={};if(r==="signup"){const D=await kA(Bt,l.email,l.password);P={name:l.name,email:l.email,role:s,shop:s==="barber"?l.shop:"",city:s==="barber"?l.city:"",createdAt:new Date},await Hy(lt(Ne,"users",D.user.uid),P),s==="barber"&&await Hy(lt(Ne,"barbers",D.user.uid),{name:l.name,email:l.email,shop:l.shop,city:l.city,rating:5,reviews:0,price:30,available:!0,tags:["Fade","Lineup"],services:ip,availability:sp})}else{const D=await RA(Bt,l.email,l.password),x=await su(lt(Ne,"users",D.user.uid));if(P=x.exists()?x.data():{name:"User",email:l.email,role:"client"},P.role==="barber"){const v=await su(lt(Ne,"barbers",D.user.uid));v.exists()&&(P={...P,...v.data()})}}t(P),e("dashboard"),n({msg:`Welcome${P.name?", "+P.name:""}! 👋`,type:"success"})}catch(P){p(P.message.replace("Firebase: ",""))}finally{g(!1)}};return d.jsx("div",{className:"auth-bg",children:d.jsxs("div",{className:"auth-box",children:[d.jsx("h2",{className:"serif",children:r==="login"?"Welcome back":"Join HabeshaCuts"}),d.jsx("p",{className:"sub",children:r==="login"?"Sign in to your account.":"Create your free account today."}),r==="signup"&&d.jsxs("div",{className:"tabs2",children:[d.jsx("button",{className:`tab2 ${s==="client"?"active":""}`,onClick:()=>o("client"),children:"I'm a Client"}),d.jsx("button",{className:`tab2 ${s==="barber"?"active":""}`,onClick:()=>o("barber"),children:"I'm a Barber"})]}),r==="signup"&&d.jsxs("div",{className:"field",children:[d.jsx("label",{children:"Full Name"}),d.jsx("input",{placeholder:"e.g. Yohannes Tesfaye",value:l.name,onChange:P=>E("name",P.target.value)})]}),d.jsxs("div",{className:"field",children:[d.jsx("label",{children:"Email Address"}),d.jsx("input",{type:"email",placeholder:"you@email.com",value:l.email,onChange:P=>E("email",P.target.value)})]}),d.jsxs("div",{className:"field",children:[d.jsx("label",{children:"Password"}),d.jsx("input",{type:"password",placeholder:"••••••••",value:l.password,onChange:P=>E("password",P.target.value)})]}),r==="signup"&&s==="barber"&&d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"field",children:[d.jsx("label",{children:"Shop / Studio Name"}),d.jsx("input",{placeholder:"e.g. Crown & Fade Studio",value:l.shop,onChange:P=>E("shop",P.target.value)})]}),d.jsxs("div",{className:"field",children:[d.jsx("label",{children:"Your City"}),d.jsxs("select",{value:l.city,onChange:P=>E("city",P.target.value),children:[d.jsx("option",{value:"toronto",children:"Toronto"}),d.jsx("option",{value:"ottawa",children:"Ottawa"}),d.jsx("option",{value:"calgary",children:"Calgary"}),d.jsx("option",{value:"vancouver",children:"Vancouver"}),d.jsx("option",{value:"montreal",children:"Montreal"}),d.jsx("option",{value:"edmonton",children:"Edmonton"}),d.jsx("option",{value:"winnipeg",children:"Winnipeg"}),d.jsx("option",{value:"halifax",children:"Halifax"})]})]})]}),h&&d.jsx("p",{style:{color:ee.red,fontSize:13,marginBottom:12,background:ee.redBg,padding:"10px 12px",borderRadius:8},children:h}),d.jsx("button",{className:"submit-btn",onClick:k,disabled:m,children:m?d.jsxs(d.Fragment,{children:[d.jsx(kn,{}),r==="login"?"Signing in…":"Creating account…"]}):r==="login"?"Sign In":"Create Account"}),d.jsx("div",{className:"auth-toggle",children:r==="login"?d.jsxs(d.Fragment,{children:["Don't have an account? ",d.jsx("button",{onClick:()=>{i("signup"),p("")},children:"Sign up free"})]}):d.jsxs(d.Fragment,{children:["Already have an account? ",d.jsx("button",{onClick:()=>{i("login"),p("")},children:"Sign in"})]})})]})})}function R2({barber:t,user:e,setPage:n,setToast:r}){const[i,s]=te.useState(1),[o,l]=te.useState(null),[u,h]=te.useState(null),[p,m]=te.useState(null),[g,E]=te.useState(""),[k,P]=te.useState(""),[D,x]=te.useState(""),[v,A]=te.useState(!1),[L,$]=te.useState([]),[B,T]=te.useState(!1),[_,w]=te.useState(!1),S=t.services&&t.services.length>0?t.services:ip,C=new Date;C.setHours(0,0,0,0);const[R,I]=te.useState({y:C.getFullYear(),m:C.getMonth()});te.useEffect(()=>{if(!u||!t)return;(async()=>{w(!0);const X=`${pi[R.m]} ${u}, ${R.y}`;try{const ie=ep(Oo(Ne,"bookings"),iu("barberName","==",t.name),iu("date","==",X)),Ie=await Bu(ie),ye=[];Ie.forEach(le=>{le.data().status!=="cancelled"&&ye.push(le.data().time)}),$(ye)}catch(ie){console.error("Error fetching slots:",ie)}finally{w(!1)}})()},[u,R,t]);const Be=(j,X)=>{const ie=new Date(j,X,1).getDay(),Ie=new Date(j,X+1,0).getDate(),ye=[];for(let le=0;le<ie;le++)ye.push(null);for(let le=1;le<=Ie;le++)ye.push(le);return ye},Mt=j=>new Date(R.y,R.m,j)<C,_n=async()=>{if(!e&&(!k||!D)){r({msg:"Please enter your name and email to proceed.",type:"error"});return}T(!0);const j=`${pi[R.m]} ${u}, ${R.y}`,X=`${t.id||t.name}_${j}_${p}`.replace(/[\s,]+/g,"_"),ie=lt(Ne,"slot_locks",X),Ie=lt(Oo(Ne,"bookings"));try{await s2(Ne,async le=>{const wt=await le.get(ie);if(wt.exists()&&wt.data().status!=="cancelled")throw new Error("SLOT_TAKEN");le.set(ie,{status:"pending",timestamp:new Date}),le.set(Ie,{clientId:Bt.currentUser?Bt.currentUser.uid:"guest",clientName:e?e.name:k,clientEmail:e?e.email:D,barberId:t.id||t.name,barberName:t.name,shop:t.shop,service:o.name,duration:o.duration,date:j,time:p,price:o.price,note:g,status:"pending",createdAt:new Date})});const ye={client_email:e?e.email:D,barber_email:t.email,client_name:e?e.name:k,barber_name:t.name,shop:t.shop,service:o.name,date:j,time:p};Wy.send("service_wkbyyhp","template_kopvvw9",ye,"0qUvmWtnSD4iGYmvt").catch(le=>console.warn("Client notification failed:",le)),Wy.send("service_wkbyyhp","template_kopvvw9",ye,"0qUvmWtnSD4iGYmvt").catch(le=>console.warn("Barber notification failed:",le)),A(!0),r({msg:"Appointment booked! 🎉",type:"success"})}catch(ye){ye.message==="SLOT_TAKEN"?(r({msg:"Sorry, this slot was just booked! Please select another.",type:"error"}),$(le=>[...le,p]),m(null),s(2)):r({msg:"Booking failed. Please try again.",type:"error"}),console.error("Booking transaction error:",ye)}finally{T(!1)}};if(v)return d.jsx("div",{className:"booking-wrap",children:d.jsxs("div",{className:"success-wrap",children:[d.jsx("div",{className:"success-icon",children:"✓"}),d.jsx("h2",{className:"serif",children:"You're booked!"}),d.jsxs("p",{children:["Your appointment with ",d.jsx("strong",{children:t.name})," at ",t.shop," is confirmed for"," ",d.jsxs("strong",{children:[pi[R.m]," ",u,", ",R.y," at ",p]}),". A confirmation email has been sent."]}),d.jsx("button",{className:"nav-pill",onClick:()=>n("home"),children:"Back to Home"})]})});const F=Be(R.y,R.m),O=["Service","Date & Time","Confirm"],Q=(()=>{if(!u)return[];const j=new Date(R.y,R.m,u),X=T2[j.getDay()],Ie=(t.availability||sp).find(vn=>vn.day===X);if(!Ie||!Ie.open)return[];const ye=[];let le=new Date(`2000-01-01T${Ie.start}:00`);const wt=new Date(`2000-01-01T${Ie.end}:00`),ia=new Date,$u=j.toDateString()===ia.toDateString(),li=ia.toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit"});for(;le<wt;){const vn=le.toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit"});(!$u||vn>li)&&ye.push(vn),le.setMinutes(le.getMinutes()+30)}return ye})();return d.jsxs("div",{className:"booking-wrap",children:[d.jsxs("button",{className:"back-btn",onClick:()=>i>1?s(i-1):n("home"),children:["← ",i>1?"Back":"All Barbers"]}),d.jsxs("div",{className:"booking-barber",children:[d.jsx("div",{className:"avatar",style:{width:52,height:52,fontSize:18},children:op(t.name)}),d.jsxs("div",{children:[d.jsx("div",{style:{fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:17},children:t.name}),d.jsx("div",{style:{color:ee.gold,fontSize:13,fontWeight:600},children:t.shop}),d.jsxs("div",{style:{color:ee.textLight,fontSize:13,marginTop:2},children:["📍 ",t.city?t.city.charAt(0).toUpperCase()+t.city.slice(1):"Canada"]}),t.bio&&d.jsxs("div",{style:{fontSize:13,color:ee.textMid,marginTop:6,fontStyle:"italic"},children:['"',t.bio,'"']}),t.instagram&&d.jsxs("div",{style:{fontSize:12,color:ee.gold,marginTop:4,fontWeight:600},children:["📷 ",t.instagram]})]}),d.jsx("div",{style:{marginLeft:"auto"},children:d.jsx(HE,{r:t.rating})})]}),d.jsx("div",{className:"step-bar",children:O.map((j,X)=>d.jsxs(OT.Fragment,{children:[d.jsxs("div",{className:"step-item",children:[d.jsx("div",{className:`step-circle ${X+1<i?"done":X+1===i?"active":"todo"}`,children:X+1<i?"✓":X+1}),d.jsx("span",{className:"step-label",children:j})]}),X<O.length-1&&d.jsx("div",{className:`step-line ${X+1<i?"done":""}`})]},j))}),i===1&&d.jsxs(d.Fragment,{children:[d.jsx("h3",{style:{fontFamily:"'Playfair Display',serif",fontSize:20,marginBottom:20},children:"Choose a Service"}),d.jsx("div",{className:"service-list",children:S.map(j=>d.jsxs("div",{className:`service-item ${(o==null?void 0:o.id)===j.id?"selected":""}`,onClick:()=>l(j),children:[d.jsxs("div",{children:[d.jsx("div",{className:"service-name",children:j.name}),d.jsxs("div",{className:"service-dur",children:["⏱ ",j.duration]})]}),d.jsxs("div",{className:"service-detail",children:[d.jsxs("span",{className:"service-price",children:["$",j.price]}),(o==null?void 0:o.id)===j.id&&d.jsx("span",{style:{color:ee.gold,fontSize:18},children:"✓"})]})]},j.id))}),d.jsx("button",{className:"submit-btn",disabled:!o,onClick:()=>s(2),children:"Continue →"})]}),i===2&&d.jsxs(d.Fragment,{children:[d.jsx("h3",{style:{fontFamily:"'Playfair Display',serif",fontSize:20,marginBottom:20},children:"Pick a Date & Time"}),d.jsxs("div",{style:{background:ee.white,borderRadius:16,padding:24,border:"1px solid #f0ece0",marginBottom:20},children:[d.jsxs("div",{className:"cal-nav",children:[d.jsx("button",{onClick:()=>{h(null),m(null),I(j=>j.m===0?{y:j.y-1,m:11}:{y:j.y,m:j.m-1})},children:"‹"}),d.jsxs("h4",{children:[pi[R.m]," ",R.y]}),d.jsx("button",{onClick:()=>{h(null),m(null),I(j=>j.m===11?{y:j.y+1,m:0}:{y:j.y,m:j.m+1})},children:"›"})]}),d.jsxs("div",{className:"calendar-grid",children:[I2.map(j=>d.jsx("div",{className:"cal-day-name",children:j},j)),F.map((j,X)=>{const ie=j&&new Date(R.y,R.m,j).toDateString()===C.toDateString();return d.jsx("button",{className:["cal-day",j&&u===j?"selected":"",j&&Mt(j)?"disabled":"",ie&&u!==j?"today":""].join(" ").trim(),disabled:!j||Mt(j),onClick:()=>{j&&!Mt(j)&&(h(j),m(null))},children:j||""},X)})]})]}),u&&d.jsxs(d.Fragment,{children:[d.jsxs("h4",{style:{marginBottom:14,fontSize:15,color:ee.textMid},children:["Available times on ",pi[R.m]," ",u,_&&d.jsxs(d.Fragment,{children:[" ",d.jsx(kn,{})]})]}),Q.length===0?d.jsx("div",{style:{padding:16,background:ee.redBg,color:ee.red,borderRadius:8,fontSize:14,fontWeight:600},children:"No available slots for this date. The barber may be closed or fully booked."}):d.jsx("div",{className:"time-grid",children:Q.map(j=>d.jsx("div",{className:["time-slot",L.includes(j)?"taken":"",p===j?"selected":""].join(" ").trim(),onClick:()=>!L.includes(j)&&m(j),children:j},j))})]}),d.jsx("button",{className:"submit-btn",disabled:!u||!p,onClick:()=>s(3),children:"Continue →"})]}),i===3&&d.jsxs(d.Fragment,{children:[d.jsx("h3",{style:{fontFamily:"'Playfair Display',serif",fontSize:20,marginBottom:20},children:"Confirm Your Appointment"}),d.jsx("div",{className:"confirm-box",children:[{l:"Barber",v:t.name},{l:"Shop",v:t.shop},{l:"Service",v:o==null?void 0:o.name},{l:"Duration",v:o==null?void 0:o.duration},{l:"Date",v:`${pi[R.m]} ${u}, ${R.y}`},{l:"Time",v:p},{l:"Total",v:`$${o==null?void 0:o.price}`}].map(j=>d.jsxs("div",{className:"confirm-row",children:[d.jsx("span",{className:"confirm-label",children:j.l}),d.jsx("span",{className:"confirm-val",children:j.v})]},j.l))}),d.jsxs("div",{className:"field",style:{marginBottom:24},children:[d.jsx("label",{children:"Special Requests / Notes (optional)"}),d.jsx("textarea",{placeholder:"e.g. Please use a guard 2 on the sides, taper the back…",value:g,onChange:j=>E(j.target.value)})]}),!e&&d.jsxs("div",{style:{background:"#fff",border:"1px solid #e8e8e8",borderRadius:12,padding:20,marginBottom:24},children:[d.jsx("h4",{style:{fontSize:15,marginBottom:12,color:ee.dark},children:"Your Details (Guest Booking)"}),d.jsxs("div",{className:"row2",children:[d.jsxs("div",{className:"field",style:{marginBottom:0},children:[d.jsx("label",{children:"Name"}),d.jsx("input",{value:k,onChange:j=>P(j.target.value),placeholder:"e.g. John Doe"})]}),d.jsxs("div",{className:"field",style:{marginBottom:0},children:[d.jsx("label",{children:"Email"}),d.jsx("input",{type:"email",value:D,onChange:j=>x(j.target.value),placeholder:"e.g. john@email.com"})]})]}),d.jsxs("div",{style:{marginTop:14,fontSize:13,color:"#92650a",background:"#fff8e1",padding:"8px 12px",borderRadius:8,border:"1px solid #f5e18a"},children:["💡 ",d.jsx("button",{style:{background:"none",border:"none",color:ee.gold,fontWeight:700,cursor:"pointer",fontSize:13},onClick:()=>n("auth"),children:"Sign in"})," to save your booking history and auto-fill details."]})]}),d.jsx("button",{className:"submit-btn",onClick:_n,disabled:B,children:B?d.jsxs(d.Fragment,{children:[d.jsx(kn,{}),"Confirming…"]}):"✓ Confirm Booking"})]})]})}function P2({user:t}){var g;const[e,n]=te.useState("upcoming"),[r,i]=te.useState([]),[s,o]=te.useState(!0),l=async()=>{if(!Bt.currentUser){o(!1);return}try{const E=ep(Oo(Ne,"bookings"),iu("clientId","==",Bt.currentUser.uid)),P=(await Bu(E)).docs.map(D=>({id:D.id,...D.data()}));P.sort((D,x)=>{var v,A;return(((v=x.createdAt)==null?void 0:v.seconds)||0)-(((A=D.createdAt)==null?void 0:A.seconds)||0)}),i(P)}catch(E){console.error("Error fetching bookings:",E)}finally{o(!1)}};te.useEffect(()=>{l()},[]);const u=async E=>{if(window.confirm("Cancel this appointment?"))try{await qn(lt(Ne,"bookings",E),{status:"cancelled"}),i(r.map(k=>k.id===E?{...k,status:"cancelled"}:k))}catch(k){console.error("Cancel error:",k)}},h=r.filter(E=>E.status==="pending"||E.status==="confirmed"),p=r.filter(E=>E.status==="completed"||E.status==="cancelled"),m=r.filter(E=>E.status==="confirmed"||E.status==="completed").reduce((E,k)=>E+Number(k.price||0),0);return d.jsxs("div",{className:"dash-main",children:[d.jsx("div",{className:"dash-title serif",children:"My Appointments"}),d.jsxs("div",{className:"dash-sub",children:["Welcome back, ",t.name,"."]}),s?d.jsxs("p",{style:{padding:"20px 0",color:ee.textLight},children:[d.jsx(kn,{})," Loading your history…"]}):d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"stats-row",children:[d.jsxs("div",{className:"stat-card",children:[d.jsx("div",{className:"stat-label",children:"Total Bookings"}),d.jsx("div",{className:"stat-num",children:r.length})]}),d.jsxs("div",{className:"stat-card",children:[d.jsx("div",{className:"stat-label",children:"Upcoming"}),d.jsx("div",{className:"stat-num",children:h.length})]}),d.jsxs("div",{className:"stat-card",children:[d.jsx("div",{className:"stat-label",children:"Total Spent"}),d.jsxs("div",{className:"stat-num",children:["$",m]})]}),d.jsxs("div",{className:"stat-card",children:[d.jsx("div",{className:"stat-label",children:"Recent Barber"}),d.jsx("div",{className:"stat-num",style:{fontSize:16,paddingTop:8},children:((g=r[0])==null?void 0:g.barberName)||"—"})]})]}),d.jsxs("div",{className:"tabs2",style:{maxWidth:280,marginBottom:24},children:[d.jsxs("button",{className:`tab2 ${e==="upcoming"?"active":""}`,onClick:()=>n("upcoming"),children:["Upcoming (",h.length,")"]}),d.jsxs("button",{className:`tab2 ${e==="past"?"active":""}`,onClick:()=>n("past"),children:["Past (",p.length,")"]})]}),d.jsx("div",{style:{overflowX:"auto"},children:d.jsxs("table",{className:"appt-table",children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"Barber"}),d.jsx("th",{children:"Service"}),d.jsx("th",{children:"Date"}),d.jsx("th",{children:"Time"}),d.jsx("th",{children:"Price"}),d.jsx("th",{children:"Status"}),d.jsx("th",{children:"Action"})]})}),d.jsx("tbody",{children:(e==="upcoming"?h:p).length===0?d.jsx("tr",{children:d.jsxs("td",{colSpan:"7",style:{textAlign:"center",padding:24,color:ee.textLight},children:["No ",e," appointments."]})}):(e==="upcoming"?h:p).map(E=>d.jsxs("tr",{children:[d.jsxs("td",{children:[d.jsx("strong",{children:E.barberName}),d.jsx("br",{}),d.jsx("span",{style:{color:ee.textLight,fontSize:12},children:E.shop})]}),d.jsx("td",{children:E.service}),d.jsx("td",{children:E.date}),d.jsx("td",{children:E.time}),d.jsx("td",{children:d.jsxs("strong",{children:["$",E.price]})}),d.jsx("td",{children:d.jsx("span",{className:`status-badge status-${E.status}`,children:E.status})}),d.jsx("td",{children:E.status==="pending"&&d.jsx("button",{onClick:()=>u(E.id),style:{background:ee.redBg,color:ee.red,border:"none",padding:"5px 12px",borderRadius:8,fontSize:12,cursor:"pointer",fontWeight:600},children:"Cancel"})})]},E.id))})]})})]})]})}function b2({user:t,setUser:e,tab:n,setTab:r}){const[i,s]=te.useState([]),[o,l]=te.useState(!0),[u,h]=te.useState(!1),[p,m]=te.useState(!1),[g,E]=te.useState(!1),[k,P]=te.useState(t.services&&t.services.length>0?t.services:ip),[D,x]=te.useState(t.availability||sp),[v,A]=te.useState({name:t.name||"",shop:t.shop||"",city:t.city||"",instagram:t.instagram||"",price:t.price||30,bio:t.bio||""});te.useEffect(()=>{if(!(t!=null&&t.name))return;(async()=>{try{const O=ep(Oo(Ne,"bookings"),iu("barberName","==",t.name)),Q=(await Bu(O)).docs.map(j=>({id:j.id,...j.data()}));Q.sort((j,X)=>{var ie,Ie;return(((ie=X.createdAt)==null?void 0:ie.seconds)||0)-(((Ie=j.createdAt)==null?void 0:Ie.seconds)||0)}),s(Q)}catch(O){console.error("Error fetching barber bookings:",O)}finally{l(!1)}})()},[t]);const L=async F=>{try{await qn(lt(Ne,"bookings",F),{status:"confirmed"}),s(i.map(O=>O.id===F?{...O,status:"confirmed"}:O))}catch(O){console.error("Accept error:",O)}},$=async F=>{if(window.confirm("Decline this appointment?"))try{await qn(lt(Ne,"bookings",F),{status:"cancelled"});try{const O=i.find(G=>G.id===F);if(O){const G=`${t.id||t.name}_${O.date}_${O.time}`.replace(/[\s,]+/g,"_");await qn(lt(Ne,"slot_locks",G),{status:"cancelled"})}}catch{}s(i.map(O=>O.id===F?{...O,status:"cancelled"}:O))}catch(O){console.error("Decline error:",O)}},B=async()=>{h(!0);try{await qn(lt(Ne,"barbers",Bt.currentUser.uid),{availability:D}),e(F=>({...F,availability:D})),alert("Availability saved! 💾 Clients will now only see these open hours.")}catch(F){console.error(F)}finally{h(!1)}},T=async()=>{m(!0);try{const F={name:v.name,shop:v.shop,city:v.city,instagram:v.instagram,price:Number(v.price),bio:v.bio};await qn(lt(Ne,"barbers",Bt.currentUser.uid),F),await qn(lt(Ne,"users",Bt.currentUser.uid),{name:F.name,shop:F.shop,city:F.city}),e(O=>({...O,...F})),alert("Profile updated! ✅ It is immediately visible to clients.")}catch(F){console.error(F),alert("Failed to update profile.")}finally{m(!1)}},_=(F,O,G)=>{P(Q=>Q.map(j=>j.id===F?{...j,[O]:G}:j))},w=()=>{P([...k,{id:Date.now(),name:"",duration:"30 min",price:30}])},S=F=>{P(O=>O.filter(G=>G.id!==F))},C=async()=>{E(!0);try{await qn(lt(Ne,"barbers",Bt.currentUser.uid),{services:k}),e(F=>({...F,services:k})),alert("Services updated! Clients will now see these options.")}catch(F){console.error(F),alert("Error saving services.")}finally{E(!1)}},R=F=>x(O=>O.map((G,Q)=>Q===F?{...G,open:!G.open}:G)),I=(F,O,G)=>x(Q=>Q.map((j,X)=>X===F?{...j,[O]:G}:j)),Be=i.filter(F=>F.status==="pending").length,_n=i.filter(F=>F.status==="confirmed").reduce((F,O)=>F+Number(O.price||0),0);return d.jsxs("div",{className:"dash-main",children:[d.jsx("div",{className:"dash-title serif",children:"Barber Dashboard"}),d.jsxs("div",{className:"dash-sub",children:["Welcome back, ",t.name," · ",t.shop||"Your Shop"]}),o?d.jsxs("p",{style:{padding:"20px 0",color:ee.textLight},children:[d.jsx(kn,{})," Loading dashboard…"]}):d.jsxs(d.Fragment,{children:[n==="overview"&&d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"stats-row",children:[d.jsxs("div",{className:"stat-card",children:[d.jsx("div",{className:"stat-label",children:"Total Bookings"}),d.jsx("div",{className:"stat-num",children:i.length}),d.jsx("div",{className:"stat-change",children:"All time"})]}),d.jsxs("div",{className:"stat-card",children:[d.jsx("div",{className:"stat-label",children:"Pending Review"}),d.jsx("div",{className:"stat-num",children:Be}),d.jsx("div",{className:"stat-change",style:{color:Be>0?ee.red:ee.green},children:Be>0?"Needs action":"All clear"})]}),d.jsxs("div",{className:"stat-card",children:[d.jsx("div",{className:"stat-label",children:"Confirmed Revenue"}),d.jsxs("div",{className:"stat-num",children:["$",_n]}),d.jsx("div",{className:"stat-change",children:"Estimated"})]}),d.jsxs("div",{className:"stat-card",children:[d.jsx("div",{className:"stat-label",children:"Avg Rating"}),d.jsxs("div",{className:"stat-num",children:["⭐ ",t.rating||"5.0"]})]})]}),d.jsx("h4",{style:{marginBottom:16,color:ee.textMid,fontSize:15},children:"Recent Bookings"}),d.jsx("div",{style:{overflowX:"auto"},children:d.jsxs("table",{className:"appt-table",children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"Client"}),d.jsx("th",{children:"Service"}),d.jsx("th",{children:"Date & Time"}),d.jsx("th",{children:"Price"}),d.jsx("th",{children:"Status"})]})}),d.jsx("tbody",{children:i.length===0?d.jsx("tr",{children:d.jsx("td",{colSpan:"5",style:{textAlign:"center",padding:24,color:ee.textLight},children:"No bookings yet. Share your profile to get started!"})}):i.slice(0,5).map(F=>d.jsxs("tr",{children:[d.jsxs("td",{children:[d.jsx("strong",{children:F.clientName||"Guest"}),d.jsx("div",{style:{fontSize:12,color:ee.textLight},children:F.clientEmail})]}),d.jsx("td",{children:F.service}),d.jsxs("td",{children:[F.date," · ",F.time]}),d.jsxs("td",{children:["$",F.price]}),d.jsx("td",{children:d.jsx("span",{className:`status-badge status-${F.status}`,children:F.status})})]},F.id))})]})})]}),n==="appointments"&&d.jsxs(d.Fragment,{children:[d.jsx("h4",{style:{marginBottom:16,color:ee.textMid,fontSize:15},children:"All Appointments"}),d.jsx("div",{style:{overflowX:"auto"},children:d.jsxs("table",{className:"appt-table",children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"Client"}),d.jsx("th",{children:"Service"}),d.jsx("th",{children:"Date"}),d.jsx("th",{children:"Time"}),d.jsx("th",{children:"Price"}),d.jsx("th",{children:"Status"}),d.jsx("th",{children:"Actions"})]})}),d.jsx("tbody",{children:i.length===0?d.jsx("tr",{children:d.jsx("td",{colSpan:"7",style:{textAlign:"center",padding:24,color:ee.textLight},children:"No appointments yet."})}):i.map(F=>d.jsxs("tr",{children:[d.jsxs("td",{children:[d.jsx("strong",{children:F.clientName||"Guest"}),d.jsx("div",{style:{fontSize:12,color:ee.textLight},children:F.clientEmail})]}),d.jsx("td",{children:F.service}),d.jsx("td",{children:F.date}),d.jsx("td",{children:F.time}),d.jsxs("td",{children:["$",F.price]}),d.jsx("td",{children:d.jsx("span",{className:`status-badge status-${F.status}`,children:F.status})}),d.jsx("td",{style:{display:"flex",gap:6},children:F.status==="pending"&&d.jsxs(d.Fragment,{children:[d.jsx("button",{onClick:()=>L(F.id),style:{background:ee.greenBg,color:ee.green,border:"none",padding:"5px 10px",borderRadius:8,fontSize:12,cursor:"pointer",fontWeight:600},children:"Accept"}),d.jsx("button",{onClick:()=>$(F.id),style:{background:ee.redBg,color:ee.red,border:"none",padding:"5px 10px",borderRadius:8,fontSize:12,cursor:"pointer",fontWeight:600},children:"Decline"})]})})]},F.id))})]})})]}),n==="availability"&&d.jsxs("div",{children:[d.jsxs("div",{style:{marginBottom:20},children:[d.jsx("h4",{style:{fontSize:16,marginBottom:6},children:"Set Your Weekly Hours"}),d.jsx("p",{style:{fontSize:14,color:ee.textLight},children:"Toggle days and set your open/close times."})]}),d.jsx("div",{className:"avail-grid",children:D.map((F,O)=>d.jsxs("div",{className:"avail-row",children:[d.jsx("div",{className:"day-name",children:F.day}),d.jsxs("label",{className:"toggle-switch",children:[d.jsx("input",{type:"checkbox",checked:F.open,onChange:()=>R(O)}),d.jsx("span",{className:"toggle-slider"})]}),F.open?d.jsxs("div",{className:"time-range",children:[d.jsx("input",{type:"time",value:F.start,onChange:G=>I(O,"start",G.target.value)}),d.jsx("span",{className:"time-sep",children:"to"}),d.jsx("input",{type:"time",value:F.end,onChange:G=>I(O,"end",G.target.value)})]}):d.jsx("span",{style:{marginLeft:"auto",color:ee.textLight,fontSize:13},children:"Closed"})]},F.day))}),d.jsx("button",{className:"submit-btn",style:{maxWidth:200,marginTop:24},onClick:B,disabled:u,children:u?d.jsxs(d.Fragment,{children:[d.jsx(kn,{}),"Saving…"]}):"Save Changes"})]}),n==="services"&&d.jsxs("div",{children:[d.jsxs("div",{style:{marginBottom:20},children:[d.jsx("h4",{style:{fontSize:16,marginBottom:6},children:"Your Services & Pricing"}),d.jsx("p",{style:{fontSize:14,color:ee.textLight},children:"Edit the services you provide, and their price/duration. Changes apply immediately to new bookings."})]}),d.jsx("div",{className:"service-list",children:k.map(F=>d.jsxs("div",{className:"service-item",style:{display:"flex",gap:10,alignItems:"center",cursor:"default",padding:"12px"},children:[d.jsx("div",{style:{flex:1},children:d.jsx("input",{value:F.name,onChange:O=>_(F.id,"name",O.target.value),placeholder:"Service Name",style:{padding:"8px",width:"100%",borderRadius:"8px",border:"1px solid #e8e8e8",fontFamily:"'DM Sans',sans-serif",fontSize:14}})}),d.jsx("div",{style:{width:"90px"},children:d.jsx("input",{value:F.duration,onChange:O=>_(F.id,"duration",O.target.value),placeholder:"e.g. 30 min",style:{padding:"8px",width:"100%",borderRadius:"8px",border:"1px solid #e8e8e8",fontFamily:"'DM Sans',sans-serif",fontSize:14}})}),d.jsx("div",{style:{width:"80px"},children:d.jsx("input",{type:"number",value:F.price,onChange:O=>_(F.id,"price",Number(O.target.value)),placeholder:"$ Price",style:{padding:"8px",width:"100%",borderRadius:"8px",border:"1px solid #e8e8e8",fontFamily:"'DM Sans',sans-serif",fontSize:14}})}),d.jsx("button",{onClick:()=>S(F.id),style:{color:ee.red,background:"none",border:"none",cursor:"pointer",fontWeight:"bold",padding:"0 8px",fontSize:18},children:"✕"})]},F.id))}),d.jsxs("div",{style:{display:"flex",gap:12,marginTop:16},children:[d.jsx("button",{className:"nav-pill",style:{fontSize:13},onClick:w,children:"+ Add Service"}),d.jsx("button",{className:"submit-btn",style:{margin:0,padding:"8px 16px",width:"auto",fontSize:13},onClick:C,disabled:g,children:g?d.jsxs(d.Fragment,{children:[d.jsx(kn,{}),"Saving..."]}):"Save Services"})]})]}),n==="profile"&&d.jsxs("div",{style:{maxWidth:440},children:[d.jsxs("div",{style:{marginBottom:20},children:[d.jsx("h4",{style:{fontSize:16,marginBottom:6},children:"Public Profile"}),d.jsx("p",{style:{fontSize:14,color:ee.textLight},children:"This is what clients see when browsing the directory."})]}),d.jsxs("div",{className:"field",children:[d.jsx("label",{children:"Your Full Name"}),d.jsx("input",{value:v.name,onChange:F=>A({...v,name:F.target.value})})]}),d.jsxs("div",{className:"field",children:[d.jsx("label",{children:"Shop / Studio Name"}),d.jsx("input",{value:v.shop,onChange:F=>A({...v,shop:F.target.value})})]}),d.jsxs("div",{className:"field",children:[d.jsx("label",{children:"City"}),d.jsxs("select",{value:v.city,onChange:F=>A({...v,city:F.target.value}),children:[d.jsx("option",{value:"toronto",children:"Toronto"}),d.jsx("option",{value:"ottawa",children:"Ottawa"}),d.jsx("option",{value:"calgary",children:"Calgary"}),d.jsx("option",{value:"vancouver",children:"Vancouver"}),d.jsx("option",{value:"montreal",children:"Montreal"}),d.jsx("option",{value:"edmonton",children:"Edmonton"}),d.jsx("option",{value:"winnipeg",children:"Winnipeg"}),d.jsx("option",{value:"halifax",children:"Halifax"})]})]}),d.jsxs("div",{className:"field",children:[d.jsx("label",{children:"Base / Starting Price ($)"}),d.jsx("input",{type:"number",min:"10",value:v.price,onChange:F=>A({...v,price:F.target.value})})]}),d.jsxs("div",{className:"field",children:[d.jsx("label",{children:"Bio (shown on your profile)"}),d.jsx("textarea",{placeholder:"Tell clients about your experience and specialty…",value:v.bio,onChange:F=>A({...v,bio:F.target.value})})]}),d.jsxs("div",{className:"field",children:[d.jsx("label",{children:"Instagram Handle"}),d.jsx("input",{placeholder:"@yourbarberpage",value:v.instagram,onChange:F=>A({...v,instagram:F.target.value})})]}),d.jsx("button",{className:"submit-btn",style:{marginTop:8},onClick:T,disabled:p,children:p?d.jsxs(d.Fragment,{children:[d.jsx(kn,{}),"Saving…"]}):"Save Profile"})]})]})]})}function N2({user:t,setUser:e,setPage:n}){const r=t.role==="barber",[i,s]=te.useState(r?"overview":"upcoming"),u=r?[{k:"overview",l:"📊 Overview"},{k:"appointments",l:"📅 Appointments"},{k:"availability",l:"🕐 Availability"},{k:"services",l:"✂️ Services"},{k:"profile",l:"⚙️ Profile"}]:[{k:"upcoming",l:"📅 Appointments"}];return d.jsxs("div",{className:"dash-layout",children:[d.jsxs("div",{className:"sidebar",children:[d.jsxs("div",{className:"sidebar-user",children:[d.jsx("div",{className:"sidebar-avatar",children:op(t.name)}),d.jsx("div",{className:"sidebar-name",children:t.name}),d.jsx("div",{className:"sidebar-role",children:r?`✂️ Barber · ${t.shop||"Your Shop"}`:"👤 Client"})]}),u.map(h=>d.jsx("button",{className:`sidebar-item ${i===h.k?"active":""}`,onClick:()=>s(h.k),children:h.l},h.k)),d.jsx("button",{className:"sidebar-item",style:{color:ee.red,marginTop:16},onClick:()=>n("home"),children:"← Back to Home"})]}),r?d.jsx(b2,{user:t,setUser:e,tab:i,setTab:s}):d.jsx(P2,{user:t})]})}function D2(){const[t,e]=te.useState("home"),[n,r]=te.useState(null),[i,s]=te.useState(null),[o,l]=te.useState(null),[u,h]=te.useState(!0);return te.useEffect(()=>{const p=NA(Bt,async m=>{if(m)try{const g=await su(lt(Ne,"users",m.uid));if(g.exists()){let E={id:m.uid,...g.data()};if(E.role==="barber"){const k=await su(lt(Ne,"barbers",m.uid));k.exists()&&(E={...E,...k.data()})}r(E)}else r(null)}catch{r(null)}else r(null);h(!1)});return()=>p()},[]),u?d.jsx("div",{className:"loading-screen",children:"HabeshaCuts…"}):d.jsxs(d.Fragment,{children:[d.jsx("style",{children:E2}),d.jsx(x2,{setPage:e,user:n,setUser:r,setToast:l}),t==="home"&&d.jsx(A2,{setPage:e,setSelectedBarber:s}),t==="for-barbers"&&d.jsx(C2,{setPage:e}),t==="auth"&&d.jsx(k2,{setUser:r,setPage:e,setToast:l}),t==="booking"&&i&&d.jsx(R2,{barber:i,user:n,setPage:e,setToast:l}),t==="dashboard"&&n&&d.jsx(N2,{user:n,setUser:r,setPage:e}),o&&d.jsx(S2,{msg:o.msg,type:o.type,onClose:()=>l(null)})]})}iw(document.getElementById("root")).render(d.jsx(te.StrictMode,{children:d.jsx(D2,{})}));
