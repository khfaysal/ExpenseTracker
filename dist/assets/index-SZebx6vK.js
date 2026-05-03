(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();var Wv={exports:{}},cc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bw=Symbol.for("react.transitional.element"),ww=Symbol.for("react.fragment");function tE(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:bw,type:e,key:i,ref:t!==void 0?t:null,props:n}}cc.Fragment=ww;cc.jsx=tE;cc.jsxs=tE;Wv.exports=cc;var x=Wv.exports,eE={exports:{}},Z={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hd=Symbol.for("react.transitional.element"),Iw=Symbol.for("react.portal"),Rw=Symbol.for("react.fragment"),Cw=Symbol.for("react.strict_mode"),Dw=Symbol.for("react.profiler"),Nw=Symbol.for("react.consumer"),Ow=Symbol.for("react.context"),Vw=Symbol.for("react.forward_ref"),Mw=Symbol.for("react.suspense"),Lw=Symbol.for("react.memo"),nE=Symbol.for("react.lazy"),Pw=Symbol.for("react.activity"),zp=Symbol.iterator;function Uw(e){return e===null||typeof e!="object"?null:(e=zp&&e[zp]||e["@@iterator"],typeof e=="function"?e:null)}var iE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sE=Object.assign,rE={};function Jr(e,t,n){this.props=e,this.context=t,this.refs=rE,this.updater=n||iE}Jr.prototype.isReactComponent={};Jr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Jr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function aE(){}aE.prototype=Jr.prototype;function Fd(e,t,n){this.props=e,this.context=t,this.refs=rE,this.updater=n||iE}var Gd=Fd.prototype=new aE;Gd.constructor=Fd;sE(Gd,Jr.prototype);Gd.isPureReactComponent=!0;var Bp=Array.isArray;function Ef(){}var It={H:null,A:null,T:null,S:null},oE=Object.prototype.hasOwnProperty;function Kd(e,t,n){var i=n.ref;return{$$typeof:Hd,type:e,key:t,ref:i!==void 0?i:null,props:n}}function kw(e,t){return Kd(e.type,t,e.props)}function Yd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hd}function xw(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var jp=/\/+/g;function _h(e,t){return typeof e=="object"&&e!==null&&e.key!=null?xw(""+e.key):t.toString(36)}function zw(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Ef,Ef):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function er(e,t,n,i,s){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(r){case"bigint":case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Hd:case Iw:a=!0;break;case nE:return a=e._init,er(a(e._payload),t,n,i,s)}}if(a)return s=s(e),a=i===""?"."+_h(e,0):i,Bp(s)?(n="",a!=null&&(n=a.replace(jp,"$&/")+"/"),er(s,t,n,"",function(h){return h})):s!=null&&(Yd(s)&&(s=kw(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(jp,"$&/")+"/")+a)),t.push(s)),1;a=0;var l=i===""?".":i+":";if(Bp(e))for(var u=0;u<e.length;u++)i=e[u],r=l+_h(i,u),a+=er(i,t,n,r,s);else if(u=Uw(e),typeof u=="function")for(e=u.call(e),u=0;!(i=e.next()).done;)i=i.value,r=l+_h(i,u++),a+=er(i,t,n,r,s);else if(r==="object"){if(typeof e.then=="function")return er(zw(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return a}function El(e,t,n){if(e==null)return e;var i=[],s=0;return er(e,i,"","",function(r){return t.call(n,r,s++)}),i}function Bw(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var qp=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},jw={map:El,forEach:function(e,t,n){El(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return El(e,function(){t++}),t},toArray:function(e){return El(e,function(t){return t})||[]},only:function(e){if(!Yd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Z.Activity=Pw;Z.Children=jw;Z.Component=Jr;Z.Fragment=Rw;Z.Profiler=Dw;Z.PureComponent=Fd;Z.StrictMode=Cw;Z.Suspense=Mw;Z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=It;Z.__COMPILER_RUNTIME={__proto__:null,c:function(e){return It.H.useMemoCache(e)}};Z.cache=function(e){return function(){return e.apply(null,arguments)}};Z.cacheSignal=function(){return null};Z.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=sE({},e.props),s=e.key;if(t!=null)for(r in t.key!==void 0&&(s=""+t.key),t)!oE.call(t,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&t.ref===void 0||(i[r]=t[r]);var r=arguments.length-2;if(r===1)i.children=n;else if(1<r){for(var a=Array(r),l=0;l<r;l++)a[l]=arguments[l+2];i.children=a}return Kd(e.type,s,i)};Z.createContext=function(e){return e={$$typeof:Ow,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:Nw,_context:e},e};Z.createElement=function(e,t,n){var i,s={},r=null;if(t!=null)for(i in t.key!==void 0&&(r=""+t.key),t)oE.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];s.children=l}if(e&&e.defaultProps)for(i in a=e.defaultProps,a)s[i]===void 0&&(s[i]=a[i]);return Kd(e,r,s)};Z.createRef=function(){return{current:null}};Z.forwardRef=function(e){return{$$typeof:Vw,render:e}};Z.isValidElement=Yd;Z.lazy=function(e){return{$$typeof:nE,_payload:{_status:-1,_result:e},_init:Bw}};Z.memo=function(e,t){return{$$typeof:Lw,type:e,compare:t===void 0?null:t}};Z.startTransition=function(e){var t=It.T,n={};It.T=n;try{var i=e(),s=It.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Ef,qp)}catch(r){qp(r)}finally{t!==null&&n.types!==null&&(t.types=n.types),It.T=t}};Z.unstable_useCacheRefresh=function(){return It.H.useCacheRefresh()};Z.use=function(e){return It.H.use(e)};Z.useActionState=function(e,t,n){return It.H.useActionState(e,t,n)};Z.useCallback=function(e,t){return It.H.useCallback(e,t)};Z.useContext=function(e){return It.H.useContext(e)};Z.useDebugValue=function(){};Z.useDeferredValue=function(e,t){return It.H.useDeferredValue(e,t)};Z.useEffect=function(e,t){return It.H.useEffect(e,t)};Z.useEffectEvent=function(e){return It.H.useEffectEvent(e)};Z.useId=function(){return It.H.useId()};Z.useImperativeHandle=function(e,t,n){return It.H.useImperativeHandle(e,t,n)};Z.useInsertionEffect=function(e,t){return It.H.useInsertionEffect(e,t)};Z.useLayoutEffect=function(e,t){return It.H.useLayoutEffect(e,t)};Z.useMemo=function(e,t){return It.H.useMemo(e,t)};Z.useOptimistic=function(e,t){return It.H.useOptimistic(e,t)};Z.useReducer=function(e,t,n){return It.H.useReducer(e,t,n)};Z.useRef=function(e){return It.H.useRef(e)};Z.useState=function(e){return It.H.useState(e)};Z.useSyncExternalStore=function(e,t,n){return It.H.useSyncExternalStore(e,t,n)};Z.useTransition=function(){return It.H.useTransition()};Z.version="19.2.5";eE.exports=Z;var Gt=eE.exports,lE={exports:{}},hc={},uE={exports:{}},cE={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,j){var G=N.length;N.push(j);t:for(;0<G;){var et=G-1>>>1,Tt=N[et];if(0<s(Tt,j))N[et]=j,N[G]=Tt,G=et;else break t}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var j=N[0],G=N.pop();if(G!==j){N[0]=G;t:for(var et=0,Tt=N.length,On=Tt>>>1;et<On;){var ss=2*(et+1)-1,Xs=N[ss],He=ss+1,ri=N[He];if(0>s(Xs,G))He<Tt&&0>s(ri,Xs)?(N[et]=ri,N[He]=G,et=He):(N[et]=Xs,N[ss]=G,et=ss);else if(He<Tt&&0>s(ri,G))N[et]=ri,N[He]=G,et=He;else break t}}return j}function s(N,j){var G=N.sortIndex-j.sortIndex;return G!==0?G:N.id-j.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var u=[],h=[],d=1,m=null,g=3,E=!1,D=!1,M=!1,k=!1,b=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function V(N){for(var j=n(h);j!==null;){if(j.callback===null)i(h);else if(j.startTime<=N)i(h),j.sortIndex=j.expirationTime,t(u,j);else break;j=n(h)}}function B(N){if(M=!1,V(N),!D)if(n(u)!==null)D=!0,F||(F=!0,R());else{var j=n(h);j!==null&&De(B,j.startTime-N)}}var F=!1,_=-1,y=5,v=-1;function S(){return k?!0:!(e.unstable_now()-v<y)}function w(){if(k=!1,F){var N=e.unstable_now();v=N;var j=!0;try{t:{D=!1,M&&(M=!1,T(_),_=-1),E=!0;var G=g;try{e:{for(V(N),m=n(u);m!==null&&!(m.expirationTime>N&&S());){var et=m.callback;if(typeof et=="function"){m.callback=null,g=m.priorityLevel;var Tt=et(m.expirationTime<=N);if(N=e.unstable_now(),typeof Tt=="function"){m.callback=Tt,V(N),j=!0;break e}m===n(u)&&i(u),V(N)}else i(u);m=n(u)}if(m!==null)j=!0;else{var On=n(h);On!==null&&De(B,On.startTime-N),j=!1}}break t}finally{m=null,g=G,E=!1}j=void 0}}finally{j?R():F=!1}}}var R;if(typeof I=="function")R=function(){I(w)};else if(typeof MessageChannel<"u"){var A=new MessageChannel,Ut=A.port2;A.port1.onmessage=w,R=function(){Ut.postMessage(null)}}else R=function(){b(w,0)};function De(N,j){_=b(function(){N(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_next=function(N){switch(g){case 1:case 2:case 3:var j=3;break;default:j=g}var G=g;g=j;try{return N()}finally{g=G}},e.unstable_requestPaint=function(){k=!0},e.unstable_runWithPriority=function(N,j){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var G=g;g=N;try{return j()}finally{g=G}},e.unstable_scheduleCallback=function(N,j,G){var et=e.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?et+G:et):G=et,N){case 1:var Tt=-1;break;case 2:Tt=250;break;case 5:Tt=1073741823;break;case 4:Tt=1e4;break;default:Tt=5e3}return Tt=G+Tt,N={id:d++,callback:j,priorityLevel:N,startTime:G,expirationTime:Tt,sortIndex:-1},G>et?(N.sortIndex=G,t(h,N),n(u)===null&&N===n(h)&&(M?(T(_),_=-1):M=!0,De(B,G-et))):(N.sortIndex=Tt,t(u,N),D||E||(D=!0,F||(F=!0,R()))),N},e.unstable_shouldYield=S,e.unstable_wrapCallback=function(N){var j=g;return function(){var G=g;g=j;try{return N.apply(this,arguments)}finally{g=G}}}})(cE);uE.exports=cE;var qw=uE.exports,hE={exports:{}},Ee={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hw=Gt;function fE(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function fi(){}var _e={d:{f:fi,r:function(){throw Error(fE(522))},D:fi,C:fi,L:fi,m:fi,X:fi,S:fi,M:fi},p:0,findDOMNode:null},Fw=Symbol.for("react.portal");function Gw(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fw,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var Ya=Hw.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function fc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Ee.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=_e;Ee.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(fE(299));return Gw(e,t,null,n)};Ee.flushSync=function(e){var t=Ya.T,n=_e.p;try{if(Ya.T=null,_e.p=2,e)return e()}finally{Ya.T=t,_e.p=n,_e.d.f()}};Ee.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,_e.d.C(e,t))};Ee.prefetchDNS=function(e){typeof e=="string"&&_e.d.D(e)};Ee.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=fc(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?_e.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:r}):n==="script"&&_e.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Ee.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=fc(t.as,t.crossOrigin);_e.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&_e.d.M(e)};Ee.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=fc(n,t.crossOrigin);_e.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Ee.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=fc(t.as,t.crossOrigin);_e.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else _e.d.m(e)};Ee.requestFormReset=function(e){_e.d.r(e)};Ee.unstable_batchedUpdates=function(e,t){return e(t)};Ee.useFormState=function(e,t,n){return Ya.H.useFormState(e,t,n)};Ee.useFormStatus=function(){return Ya.H.useHostTransitionStatus()};Ee.version="19.2.5";function dE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dE)}catch(e){console.error(e)}}dE(),hE.exports=Ee;var Kw=hE.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xt=qw,mE=Gt,Yw=Kw;function L(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function gE(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function pE(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function yE(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Hp(e){if(xo(e)!==e)throw Error(L(188))}function Qw(e){var t=e.alternate;if(!t){if(t=xo(e),t===null)throw Error(L(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var r=s.alternate;if(r===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===r.child){for(r=s.child;r;){if(r===n)return Hp(s),e;if(r===i)return Hp(s),t;r=r.sibling}throw Error(L(188))}if(n.return!==i.return)n=s,i=r;else{for(var a=!1,l=s.child;l;){if(l===n){a=!0,n=s,i=r;break}if(l===i){a=!0,i=s,n=r;break}l=l.sibling}if(!a){for(l=r.child;l;){if(l===n){a=!0,n=r,i=s;break}if(l===i){a=!0,i=r,n=s;break}l=l.sibling}if(!a)throw Error(L(189))}}if(n.alternate!==i)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?e:t}function _E(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=_E(e),t!==null)return t;e=e.sibling}return null}var Rt=Object.assign,Xw=Symbol.for("react.element"),Tl=Symbol.for("react.transitional.element"),Ua=Symbol.for("react.portal"),lr=Symbol.for("react.fragment"),vE=Symbol.for("react.strict_mode"),Tf=Symbol.for("react.profiler"),EE=Symbol.for("react.consumer"),Bn=Symbol.for("react.context"),Qd=Symbol.for("react.forward_ref"),Af=Symbol.for("react.suspense"),Sf=Symbol.for("react.suspense_list"),Xd=Symbol.for("react.memo"),mi=Symbol.for("react.lazy"),bf=Symbol.for("react.activity"),$w=Symbol.for("react.memo_cache_sentinel"),Fp=Symbol.iterator;function Ca(e){return e===null||typeof e!="object"?null:(e=Fp&&e[Fp]||e["@@iterator"],typeof e=="function"?e:null)}var Jw=Symbol.for("react.client.reference");function wf(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Jw?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case lr:return"Fragment";case Tf:return"Profiler";case vE:return"StrictMode";case Af:return"Suspense";case Sf:return"SuspenseList";case bf:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Ua:return"Portal";case Bn:return e.displayName||"Context";case EE:return(e._context.displayName||"Context")+".Consumer";case Qd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xd:return t=e.displayName||null,t!==null?t:wf(e.type)||"Memo";case mi:t=e._payload,e=e._init;try{return wf(e(t))}catch{}}return null}var ka=Array.isArray,X=mE.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ht=Yw.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,vs={pending:!1,data:null,method:null,action:null},If=[],ur=-1;function Dn(e){return{current:e}}function ee(e){0>ur||(e.current=If[ur],If[ur]=null,ur--)}function Et(e,t){ur++,If[ur]=e.current,e.current=t}var Tn=Dn(null),mo=Dn(null),Di=Dn(null),du=Dn(null);function mu(e,t){switch(Et(Di,t),Et(mo,e),Et(Tn,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?$y(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=$y(t),e=B0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ee(Tn),Et(Tn,e)}function Pr(){ee(Tn),ee(mo),ee(Di)}function Rf(e){e.memoizedState!==null&&Et(du,e);var t=Tn.current,n=B0(t,e.type);t!==n&&(Et(mo,e),Et(Tn,n))}function gu(e){mo.current===e&&(ee(Tn),ee(mo)),du.current===e&&(ee(du),wo._currentValue=vs)}var vh,Gp;function hs(e){if(vh===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);vh=t&&t[1]||"",Gp=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vh+e+Gp}var Eh=!1;function Th(e,t){if(!e||Eh)return"";Eh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var m=function(){throw Error()};if(Object.defineProperty(m.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(m,[])}catch(E){var g=E}Reflect.construct(e,[],m)}else{try{m.call()}catch(E){g=E}e.call(m.prototype)}}else{try{throw Error()}catch(E){g=E}(m=e())&&typeof m.catch=="function"&&m.catch(function(){})}}catch(E){if(E&&g&&typeof E.stack=="string")return[E.stack,g.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),a=r[0],l=r[1];if(a&&l){var u=a.split(`
`),h=l.split(`
`);for(s=i=0;i<u.length&&!u[i].includes("DetermineComponentFrameRoot");)i++;for(;s<h.length&&!h[s].includes("DetermineComponentFrameRoot");)s++;if(i===u.length||s===h.length)for(i=u.length-1,s=h.length-1;1<=i&&0<=s&&u[i]!==h[s];)s--;for(;1<=i&&0<=s;i--,s--)if(u[i]!==h[s]){if(i!==1||s!==1)do if(i--,s--,0>s||u[i]!==h[s]){var d=`
`+u[i].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=i&&0<=s);break}}}finally{Eh=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?hs(n):""}function Zw(e,t){switch(e.tag){case 26:case 27:case 5:return hs(e.type);case 16:return hs("Lazy");case 13:return e.child!==t&&t!==null?hs("Suspense Fallback"):hs("Suspense");case 19:return hs("SuspenseList");case 0:case 15:return Th(e.type,!1);case 11:return Th(e.type.render,!1);case 1:return Th(e.type,!0);case 31:return hs("Activity");default:return""}}function Kp(e){try{var t="",n=null;do t+=Zw(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Cf=Object.prototype.hasOwnProperty,$d=Xt.unstable_scheduleCallback,Ah=Xt.unstable_cancelCallback,Ww=Xt.unstable_shouldYield,tI=Xt.unstable_requestPaint,Ue=Xt.unstable_now,eI=Xt.unstable_getCurrentPriorityLevel,TE=Xt.unstable_ImmediatePriority,AE=Xt.unstable_UserBlockingPriority,pu=Xt.unstable_NormalPriority,nI=Xt.unstable_LowPriority,SE=Xt.unstable_IdlePriority,iI=Xt.log,sI=Xt.unstable_setDisableYieldValue,zo=null,ke=null;function Si(e){if(typeof iI=="function"&&sI(e),ke&&typeof ke.setStrictMode=="function")try{ke.setStrictMode(zo,e)}catch{}}var xe=Math.clz32?Math.clz32:oI,rI=Math.log,aI=Math.LN2;function oI(e){return e>>>=0,e===0?32:31-(rI(e)/aI|0)|0}var Al=256,Sl=262144,bl=4194304;function fs(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function dc(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,r=e.suspendedLanes,a=e.pingedLanes;e=e.warmLanes;var l=i&134217727;return l!==0?(i=l&~r,i!==0?s=fs(i):(a&=l,a!==0?s=fs(a):n||(n=l&~e,n!==0&&(s=fs(n))))):(l=i&~r,l!==0?s=fs(l):a!==0?s=fs(a):n||(n=i&~e,n!==0&&(s=fs(n)))),s===0?0:t!==0&&t!==s&&!(t&r)&&(r=s&-s,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:s}function Bo(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function lI(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bE(){var e=bl;return bl<<=1,!(bl&62914560)&&(bl=4194304),e}function Sh(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function jo(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function uI(e,t,n,i,s,r){var a=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var l=e.entanglements,u=e.expirationTimes,h=e.hiddenUpdates;for(n=a&~n;0<n;){var d=31-xe(n),m=1<<d;l[d]=0,u[d]=-1;var g=h[d];if(g!==null)for(h[d]=null,d=0;d<g.length;d++){var E=g[d];E!==null&&(E.lane&=-536870913)}n&=~m}i!==0&&wE(e,i,0),r!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=r&~(a&~t))}function wE(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-xe(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function IE(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-xe(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function RE(e,t){var n=t&-t;return n=n&42?1:Jd(n),n&(e.suspendedLanes|t)?0:n}function Jd(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Zd(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function CE(){var e=ht.p;return e!==0?e:(e=window.event,e===void 0?32:J0(e.type))}function Yp(e,t){var n=ht.p;try{return ht.p=e,t()}finally{ht.p=n}}var Wi=Math.random().toString(36).slice(2),se="__reactFiber$"+Wi,Re="__reactProps$"+Wi,Zr="__reactContainer$"+Wi,Df="__reactEvents$"+Wi,cI="__reactListeners$"+Wi,hI="__reactHandles$"+Wi,Qp="__reactResources$"+Wi,qo="__reactMarker$"+Wi;function Wd(e){delete e[se],delete e[Re],delete e[Df],delete e[cI],delete e[hI]}function cr(e){var t=e[se];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Zr]||n[se]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=e_(e);e!==null;){if(n=e[se])return n;e=e_(e)}return t}e=n,n=e.parentNode}return null}function Wr(e){if(e=e[se]||e[Zr]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function xa(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(L(33))}function Er(e){var t=e[Qp];return t||(t=e[Qp]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function te(e){e[qo]=!0}var DE=new Set,NE={};function xs(e,t){Ur(e,t),Ur(e+"Capture",t)}function Ur(e,t){for(NE[e]=t,e=0;e<t.length;e++)DE.add(t[e])}var fI=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xp={},$p={};function dI(e){return Cf.call($p,e)?!0:Cf.call(Xp,e)?!1:fI.test(e)?$p[e]=!0:(Xp[e]=!0,!1)}function ql(e,t,n){if(dI(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function wl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Vn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Ge(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function OE(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function mI(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,r=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(a){n=""+a,r.call(this,a)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Nf(e){if(!e._valueTracker){var t=OE(e)?"checked":"value";e._valueTracker=mI(e,t,""+e[t])}}function VE(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=OE(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function yu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var gI=/[\n"\\]/g;function Qe(e){return e.replace(gI,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Of(e,t,n,i,s,r,a,l){e.name="",a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"?e.type=a:e.removeAttribute("type"),t!=null?a==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ge(t)):e.value!==""+Ge(t)&&(e.value=""+Ge(t)):a!=="submit"&&a!=="reset"||e.removeAttribute("value"),t!=null?Vf(e,a,Ge(t)):n!=null?Vf(e,a,Ge(n)):i!=null&&e.removeAttribute("value"),s==null&&r!=null&&(e.defaultChecked=!!r),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.name=""+Ge(l):e.removeAttribute("name")}function ME(e,t,n,i,s,r,a,l){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Nf(e);return}n=n!=null?""+Ge(n):"",t=t!=null?""+Ge(t):n,l||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=l?e.checked:!!i,e.defaultChecked=!!i,a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.name=a),Nf(e)}function Vf(e,t,n){t==="number"&&yu(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Tr(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Ge(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function LE(e,t,n){if(t!=null&&(t=""+Ge(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ge(n):""}function PE(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(L(92));if(ka(i)){if(1<i.length)throw Error(L(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Ge(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Nf(e)}function kr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var pI=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jp(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||pI.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function UE(e,t,n){if(t!=null&&typeof t!="object")throw Error(L(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&Jp(e,s,i)}else for(var r in t)t.hasOwnProperty(r)&&Jp(e,r,t[r])}function tm(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yI=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_I=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Hl(e){return _I.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function jn(){}var Mf=null;function em(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hr=null,Ar=null;function Zp(e){var t=Wr(e);if(t&&(e=t.stateNode)){var n=e[Re]||null;t:switch(e=t.stateNode,t.type){case"input":if(Of(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Qe(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Re]||null;if(!s)throw Error(L(90));Of(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&VE(i)}break t;case"textarea":LE(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Tr(e,!!n.multiple,t,!1)}}}var bh=!1;function kE(e,t,n){if(bh)return e(t,n);bh=!0;try{var i=e(t);return i}finally{if(bh=!1,(hr!==null||Ar!==null)&&(wc(),hr&&(t=hr,e=Ar,Ar=hr=null,Zp(t),e)))for(t=0;t<e.length;t++)Zp(e[t])}}function go(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Re]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(L(231,t,typeof n));return n}var Xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lf=!1;if(Xn)try{var Da={};Object.defineProperty(Da,"passive",{get:function(){Lf=!0}}),window.addEventListener("test",Da,Da),window.removeEventListener("test",Da,Da)}catch{Lf=!1}var bi=null,nm=null,Fl=null;function xE(){if(Fl)return Fl;var e,t=nm,n=t.length,i,s="value"in bi?bi.value:bi.textContent,r=s.length;for(e=0;e<n&&t[e]===s[e];e++);var a=n-e;for(i=1;i<=a&&t[n-i]===s[r-i];i++);return Fl=s.slice(e,1<i?1-i:void 0)}function Gl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Il(){return!0}function Wp(){return!1}function Ce(e){function t(n,i,s,r,a){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=r,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(r):r[l]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Il:Wp,this.isPropagationStopped=Wp,this}return Rt(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Il)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Il)},persist:function(){},isPersistent:Il}),t}var zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mc=Ce(zs),Ho=Rt({},zs,{view:0,detail:0}),vI=Ce(Ho),wh,Ih,Na,gc=Rt({},Ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:im,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Na&&(Na&&e.type==="mousemove"?(wh=e.screenX-Na.screenX,Ih=e.screenY-Na.screenY):Ih=wh=0,Na=e),wh)},movementY:function(e){return"movementY"in e?e.movementY:Ih}}),ty=Ce(gc),EI=Rt({},gc,{dataTransfer:0}),TI=Ce(EI),AI=Rt({},Ho,{relatedTarget:0}),Rh=Ce(AI),SI=Rt({},zs,{animationName:0,elapsedTime:0,pseudoElement:0}),bI=Ce(SI),wI=Rt({},zs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),II=Ce(wI),RI=Rt({},zs,{data:0}),ey=Ce(RI),CI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},DI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},NI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function OI(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=NI[e])?!!t[e]:!1}function im(){return OI}var VI=Rt({},Ho,{key:function(e){if(e.key){var t=CI[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Gl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?DI[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:im,charCode:function(e){return e.type==="keypress"?Gl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),MI=Ce(VI),LI=Rt({},gc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ny=Ce(LI),PI=Rt({},Ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:im}),UI=Ce(PI),kI=Rt({},zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),xI=Ce(kI),zI=Rt({},gc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),BI=Ce(zI),jI=Rt({},zs,{newState:0,oldState:0}),qI=Ce(jI),HI=[9,13,27,32],sm=Xn&&"CompositionEvent"in window,Qa=null;Xn&&"documentMode"in document&&(Qa=document.documentMode);var FI=Xn&&"TextEvent"in window&&!Qa,zE=Xn&&(!sm||Qa&&8<Qa&&11>=Qa),iy=" ",sy=!1;function BE(e,t){switch(e){case"keyup":return HI.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jE(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fr=!1;function GI(e,t){switch(e){case"compositionend":return jE(t);case"keypress":return t.which!==32?null:(sy=!0,iy);case"textInput":return e=t.data,e===iy&&sy?null:e;default:return null}}function KI(e,t){if(fr)return e==="compositionend"||!sm&&BE(e,t)?(e=xE(),Fl=nm=bi=null,fr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zE&&t.locale!=="ko"?null:t.data;default:return null}}var YI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ry(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!YI[e.type]:t==="textarea"}function qE(e,t,n,i){hr?Ar?Ar.push(i):Ar=[i]:hr=i,t=Pu(t,"onChange"),0<t.length&&(n=new mc("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Xa=null,po=null;function QI(e){k0(e,0)}function pc(e){var t=xa(e);if(VE(t))return e}function ay(e,t){if(e==="change")return t}var HE=!1;if(Xn){var Ch;if(Xn){var Dh="oninput"in document;if(!Dh){var oy=document.createElement("div");oy.setAttribute("oninput","return;"),Dh=typeof oy.oninput=="function"}Ch=Dh}else Ch=!1;HE=Ch&&(!document.documentMode||9<document.documentMode)}function ly(){Xa&&(Xa.detachEvent("onpropertychange",FE),po=Xa=null)}function FE(e){if(e.propertyName==="value"&&pc(po)){var t=[];qE(t,po,e,em(e)),kE(QI,t)}}function XI(e,t,n){e==="focusin"?(ly(),Xa=t,po=n,Xa.attachEvent("onpropertychange",FE)):e==="focusout"&&ly()}function $I(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pc(po)}function JI(e,t){if(e==="click")return pc(t)}function ZI(e,t){if(e==="input"||e==="change")return pc(t)}function WI(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var je=typeof Object.is=="function"?Object.is:WI;function yo(e,t){if(je(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Cf.call(t,s)||!je(e[s],t[s]))return!1}return!0}function uy(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cy(e,t){var n=uy(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=uy(n)}}function GE(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?GE(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function KE(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=yu(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=yu(e.document)}return t}function rm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var tR=Xn&&"documentMode"in document&&11>=document.documentMode,dr=null,Pf=null,$a=null,Uf=!1;function hy(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Uf||dr==null||dr!==yu(i)||(i=dr,"selectionStart"in i&&rm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),$a&&yo($a,i)||($a=i,i=Pu(Pf,"onSelect"),0<i.length&&(t=new mc("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=dr)))}function cs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var mr={animationend:cs("Animation","AnimationEnd"),animationiteration:cs("Animation","AnimationIteration"),animationstart:cs("Animation","AnimationStart"),transitionrun:cs("Transition","TransitionRun"),transitionstart:cs("Transition","TransitionStart"),transitioncancel:cs("Transition","TransitionCancel"),transitionend:cs("Transition","TransitionEnd")},Nh={},YE={};Xn&&(YE=document.createElement("div").style,"AnimationEvent"in window||(delete mr.animationend.animation,delete mr.animationiteration.animation,delete mr.animationstart.animation),"TransitionEvent"in window||delete mr.transitionend.transition);function Bs(e){if(Nh[e])return Nh[e];if(!mr[e])return e;var t=mr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in YE)return Nh[e]=t[n];return e}var QE=Bs("animationend"),XE=Bs("animationiteration"),$E=Bs("animationstart"),eR=Bs("transitionrun"),nR=Bs("transitionstart"),iR=Bs("transitioncancel"),JE=Bs("transitionend"),ZE=new Map,kf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");kf.push("scrollEnd");function dn(e,t){ZE.set(e,t),xs(t,[e])}var _u=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Fe=[],gr=0,am=0;function yc(){for(var e=gr,t=am=gr=0;t<e;){var n=Fe[t];Fe[t++]=null;var i=Fe[t];Fe[t++]=null;var s=Fe[t];Fe[t++]=null;var r=Fe[t];if(Fe[t++]=null,i!==null&&s!==null){var a=i.pending;a===null?s.next=s:(s.next=a.next,a.next=s),i.pending=s}r!==0&&WE(n,s,r)}}function _c(e,t,n,i){Fe[gr++]=e,Fe[gr++]=t,Fe[gr++]=n,Fe[gr++]=i,am|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function om(e,t,n,i){return _c(e,t,n,i),vu(e)}function js(e,t){return _c(e,null,null,t),vu(e)}function WE(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,r=e.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(s=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,s&&t!==null&&(s=31-xe(n),e=r.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),r):null}function vu(e){if(50<ro)throw ro=0,sd=null,Error(L(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var pr={};function sR(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,t,n,i){return new sR(e,t,n,i)}function lm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gn(e,t){var n=e.alternate;return n===null?(n=Me(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function tT(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Kl(e,t,n,i,s,r){var a=0;if(i=e,typeof e=="function")lm(e)&&(a=1);else if(typeof e=="string")a=u1(e,n,Tn.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case bf:return e=Me(31,n,t,s),e.elementType=bf,e.lanes=r,e;case lr:return Es(n.children,s,r,t);case vE:a=8,s|=24;break;case Tf:return e=Me(12,n,t,s|2),e.elementType=Tf,e.lanes=r,e;case Af:return e=Me(13,n,t,s),e.elementType=Af,e.lanes=r,e;case Sf:return e=Me(19,n,t,s),e.elementType=Sf,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Bn:a=10;break t;case EE:a=9;break t;case Qd:a=11;break t;case Xd:a=14;break t;case mi:a=16,i=null;break t}a=29,n=Error(L(130,e===null?"null":typeof e,"")),i=null}return t=Me(a,n,t,s),t.elementType=e,t.type=i,t.lanes=r,t}function Es(e,t,n,i){return e=Me(7,e,i,t),e.lanes=n,e}function Oh(e,t,n){return e=Me(6,e,null,t),e.lanes=n,e}function eT(e){var t=Me(18,null,null,0);return t.stateNode=e,t}function Vh(e,t,n){return t=Me(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var fy=new WeakMap;function Xe(e,t){if(typeof e=="object"&&e!==null){var n=fy.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Kp(t)},fy.set(e,t),t)}return{value:e,source:t,stack:Kp(t)}}var yr=[],_r=0,Eu=null,_o=0,Ke=[],Ye=0,qi=null,_n=1,vn="";function kn(e,t){yr[_r++]=_o,yr[_r++]=Eu,Eu=e,_o=t}function nT(e,t,n){Ke[Ye++]=_n,Ke[Ye++]=vn,Ke[Ye++]=qi,qi=e;var i=_n;e=vn;var s=32-xe(i)-1;i&=~(1<<s),n+=1;var r=32-xe(t)+s;if(30<r){var a=s-s%5;r=(i&(1<<a)-1).toString(32),i>>=a,s-=a,_n=1<<32-xe(t)+s|n<<s|i,vn=r+e}else _n=1<<r|n<<s|i,vn=e}function um(e){e.return!==null&&(kn(e,1),nT(e,1,0))}function cm(e){for(;e===Eu;)Eu=yr[--_r],yr[_r]=null,_o=yr[--_r],yr[_r]=null;for(;e===qi;)qi=Ke[--Ye],Ke[Ye]=null,vn=Ke[--Ye],Ke[Ye]=null,_n=Ke[--Ye],Ke[Ye]=null}function iT(e,t){Ke[Ye++]=_n,Ke[Ye++]=vn,Ke[Ye++]=qi,_n=t.id,vn=t.overflow,qi=e}var re=null,bt=null,lt=!1,Ni=null,$e=!1,xf=Error(L(519));function Hi(e){var t=Error(L(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw vo(Xe(t,e)),xf}function dy(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[se]=e,t[Re]=i,n){case"dialog":nt("cancel",t),nt("close",t);break;case"iframe":case"object":case"embed":nt("load",t);break;case"video":case"audio":for(n=0;n<So.length;n++)nt(So[n],t);break;case"source":nt("error",t);break;case"img":case"image":case"link":nt("error",t),nt("load",t);break;case"details":nt("toggle",t);break;case"input":nt("invalid",t),ME(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":nt("invalid",t);break;case"textarea":nt("invalid",t),PE(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||z0(t.textContent,n)?(i.popover!=null&&(nt("beforetoggle",t),nt("toggle",t)),i.onScroll!=null&&nt("scroll",t),i.onScrollEnd!=null&&nt("scrollend",t),i.onClick!=null&&(t.onclick=jn),t=!0):t=!1,t||Hi(e,!0)}function my(e){for(re=e.return;re;)switch(re.tag){case 5:case 31:case 13:$e=!1;return;case 27:case 3:$e=!0;return;default:re=re.return}}function Ws(e){if(e!==re)return!1;if(!lt)return my(e),lt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||ud(e.type,e.memoizedProps)),n=!n),n&&bt&&Hi(e),my(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));bt=t_(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));bt=t_(e)}else t===27?(t=bt,ts(e.type)?(e=dd,dd=null,bt=e):bt=t):bt=re?tn(e.stateNode.nextSibling):null;return!0}function Is(){bt=re=null,lt=!1}function Mh(){var e=Ni;return e!==null&&(be===null?be=e:be.push.apply(be,e),Ni=null),e}function vo(e){Ni===null?Ni=[e]:Ni.push(e)}var zf=Dn(null),qs=null,qn=null;function pi(e,t,n){Et(zf,t._currentValue),t._currentValue=n}function Kn(e){e._currentValue=zf.current,ee(zf)}function Bf(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function jf(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var r=s.dependencies;if(r!==null){var a=s.child;r=r.firstContext;t:for(;r!==null;){var l=r;r=s;for(var u=0;u<t.length;u++)if(l.context===t[u]){r.lanes|=n,l=r.alternate,l!==null&&(l.lanes|=n),Bf(r.return,n,e),i||(a=null);break t}r=l.next}}else if(s.tag===18){if(a=s.return,a===null)throw Error(L(341));a.lanes|=n,r=a.alternate,r!==null&&(r.lanes|=n),Bf(a,n,e),a=null}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}}function ta(e,t,n,i){e=null;for(var s=t,r=!1;s!==null;){if(!r){if(s.flags&524288)r=!0;else if(s.flags&262144)break}if(s.tag===10){var a=s.alternate;if(a===null)throw Error(L(387));if(a=a.memoizedProps,a!==null){var l=s.type;je(s.pendingProps.value,a.value)||(e!==null?e.push(l):e=[l])}}else if(s===du.current){if(a=s.alternate,a===null)throw Error(L(387));a.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(wo):e=[wo])}s=s.return}e!==null&&jf(t,e,n,i),t.flags|=262144}function Tu(e){for(e=e.firstContext;e!==null;){if(!je(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Rs(e){qs=e,qn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function oe(e){return sT(qs,e)}function Rl(e,t){return qs===null&&Rs(e),sT(e,t)}function sT(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},qn===null){if(e===null)throw Error(L(308));qn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else qn=qn.next=t;return n}var rR=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},aR=Xt.unstable_scheduleCallback,oR=Xt.unstable_NormalPriority,Bt={$$typeof:Bn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hm(){return{controller:new rR,data:new Map,refCount:0}}function Fo(e){e.refCount--,e.refCount===0&&aR(oR,function(){e.controller.abort()})}var Ja=null,qf=0,xr=0,Sr=null;function lR(e,t){if(Ja===null){var n=Ja=[];qf=0,xr=Um(),Sr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return qf++,t.then(gy,gy),t}function gy(){if(--qf===0&&Ja!==null){Sr!==null&&(Sr.status="fulfilled");var e=Ja;Ja=null,xr=0,Sr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function uR(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var py=X.S;X.S=function(e,t){_0=Ue(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&lR(e,t),py!==null&&py(e,t)};var Ts=Dn(null);function fm(){var e=Ts.current;return e!==null?e:_t.pooledCache}function Yl(e,t){t===null?Et(Ts,Ts.current):Et(Ts,t.pool)}function rT(){var e=fm();return e===null?null:{parent:Bt._currentValue,pool:e}}var ea=Error(L(460)),dm=Error(L(474)),vc=Error(L(542)),Au={then:function(){}};function yy(e){return e=e.status,e==="fulfilled"||e==="rejected"}function aT(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(jn,jn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,vy(e),e;default:if(typeof t.status=="string")t.then(jn,jn);else{if(e=_t,e!==null&&100<e.shellSuspendCounter)throw Error(L(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,vy(e),e}throw As=t,ea}}function ds(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(As=n,ea):n}}var As=null;function _y(){if(As===null)throw Error(L(459));var e=As;return As=null,e}function vy(e){if(e===ea||e===vc)throw Error(L(483))}var br=null,Eo=0;function Cl(e){var t=Eo;return Eo+=1,br===null&&(br=[]),aT(br,e,t)}function Oa(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Dl(e,t){throw t.$$typeof===Xw?Error(L(525)):(e=Object.prototype.toString.call(t),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function oT(e){function t(b,T){if(e){var I=b.deletions;I===null?(b.deletions=[T],b.flags|=16):I.push(T)}}function n(b,T){if(!e)return null;for(;T!==null;)t(b,T),T=T.sibling;return null}function i(b){for(var T=new Map;b!==null;)b.key!==null?T.set(b.key,b):T.set(b.index,b),b=b.sibling;return T}function s(b,T){return b=Gn(b,T),b.index=0,b.sibling=null,b}function r(b,T,I){return b.index=I,e?(I=b.alternate,I!==null?(I=I.index,I<T?(b.flags|=67108866,T):I):(b.flags|=67108866,T)):(b.flags|=1048576,T)}function a(b){return e&&b.alternate===null&&(b.flags|=67108866),b}function l(b,T,I,V){return T===null||T.tag!==6?(T=Oh(I,b.mode,V),T.return=b,T):(T=s(T,I),T.return=b,T)}function u(b,T,I,V){var B=I.type;return B===lr?d(b,T,I.props.children,V,I.key):T!==null&&(T.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===mi&&ds(B)===T.type)?(T=s(T,I.props),Oa(T,I),T.return=b,T):(T=Kl(I.type,I.key,I.props,null,b.mode,V),Oa(T,I),T.return=b,T)}function h(b,T,I,V){return T===null||T.tag!==4||T.stateNode.containerInfo!==I.containerInfo||T.stateNode.implementation!==I.implementation?(T=Vh(I,b.mode,V),T.return=b,T):(T=s(T,I.children||[]),T.return=b,T)}function d(b,T,I,V,B){return T===null||T.tag!==7?(T=Es(I,b.mode,V,B),T.return=b,T):(T=s(T,I),T.return=b,T)}function m(b,T,I){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=Oh(""+T,b.mode,I),T.return=b,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Tl:return I=Kl(T.type,T.key,T.props,null,b.mode,I),Oa(I,T),I.return=b,I;case Ua:return T=Vh(T,b.mode,I),T.return=b,T;case mi:return T=ds(T),m(b,T,I)}if(ka(T)||Ca(T))return T=Es(T,b.mode,I,null),T.return=b,T;if(typeof T.then=="function")return m(b,Cl(T),I);if(T.$$typeof===Bn)return m(b,Rl(b,T),I);Dl(b,T)}return null}function g(b,T,I,V){var B=T!==null?T.key:null;if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return B!==null?null:l(b,T,""+I,V);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Tl:return I.key===B?u(b,T,I,V):null;case Ua:return I.key===B?h(b,T,I,V):null;case mi:return I=ds(I),g(b,T,I,V)}if(ka(I)||Ca(I))return B!==null?null:d(b,T,I,V,null);if(typeof I.then=="function")return g(b,T,Cl(I),V);if(I.$$typeof===Bn)return g(b,T,Rl(b,I),V);Dl(b,I)}return null}function E(b,T,I,V,B){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return b=b.get(I)||null,l(T,b,""+V,B);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Tl:return b=b.get(V.key===null?I:V.key)||null,u(T,b,V,B);case Ua:return b=b.get(V.key===null?I:V.key)||null,h(T,b,V,B);case mi:return V=ds(V),E(b,T,I,V,B)}if(ka(V)||Ca(V))return b=b.get(I)||null,d(T,b,V,B,null);if(typeof V.then=="function")return E(b,T,I,Cl(V),B);if(V.$$typeof===Bn)return E(b,T,I,Rl(T,V),B);Dl(T,V)}return null}function D(b,T,I,V){for(var B=null,F=null,_=T,y=T=0,v=null;_!==null&&y<I.length;y++){_.index>y?(v=_,_=null):v=_.sibling;var S=g(b,_,I[y],V);if(S===null){_===null&&(_=v);break}e&&_&&S.alternate===null&&t(b,_),T=r(S,T,y),F===null?B=S:F.sibling=S,F=S,_=v}if(y===I.length)return n(b,_),lt&&kn(b,y),B;if(_===null){for(;y<I.length;y++)_=m(b,I[y],V),_!==null&&(T=r(_,T,y),F===null?B=_:F.sibling=_,F=_);return lt&&kn(b,y),B}for(_=i(_);y<I.length;y++)v=E(_,b,y,I[y],V),v!==null&&(e&&v.alternate!==null&&_.delete(v.key===null?y:v.key),T=r(v,T,y),F===null?B=v:F.sibling=v,F=v);return e&&_.forEach(function(w){return t(b,w)}),lt&&kn(b,y),B}function M(b,T,I,V){if(I==null)throw Error(L(151));for(var B=null,F=null,_=T,y=T=0,v=null,S=I.next();_!==null&&!S.done;y++,S=I.next()){_.index>y?(v=_,_=null):v=_.sibling;var w=g(b,_,S.value,V);if(w===null){_===null&&(_=v);break}e&&_&&w.alternate===null&&t(b,_),T=r(w,T,y),F===null?B=w:F.sibling=w,F=w,_=v}if(S.done)return n(b,_),lt&&kn(b,y),B;if(_===null){for(;!S.done;y++,S=I.next())S=m(b,S.value,V),S!==null&&(T=r(S,T,y),F===null?B=S:F.sibling=S,F=S);return lt&&kn(b,y),B}for(_=i(_);!S.done;y++,S=I.next())S=E(_,b,y,S.value,V),S!==null&&(e&&S.alternate!==null&&_.delete(S.key===null?y:S.key),T=r(S,T,y),F===null?B=S:F.sibling=S,F=S);return e&&_.forEach(function(R){return t(b,R)}),lt&&kn(b,y),B}function k(b,T,I,V){if(typeof I=="object"&&I!==null&&I.type===lr&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case Tl:t:{for(var B=I.key;T!==null;){if(T.key===B){if(B=I.type,B===lr){if(T.tag===7){n(b,T.sibling),V=s(T,I.props.children),V.return=b,b=V;break t}}else if(T.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===mi&&ds(B)===T.type){n(b,T.sibling),V=s(T,I.props),Oa(V,I),V.return=b,b=V;break t}n(b,T);break}else t(b,T);T=T.sibling}I.type===lr?(V=Es(I.props.children,b.mode,V,I.key),V.return=b,b=V):(V=Kl(I.type,I.key,I.props,null,b.mode,V),Oa(V,I),V.return=b,b=V)}return a(b);case Ua:t:{for(B=I.key;T!==null;){if(T.key===B)if(T.tag===4&&T.stateNode.containerInfo===I.containerInfo&&T.stateNode.implementation===I.implementation){n(b,T.sibling),V=s(T,I.children||[]),V.return=b,b=V;break t}else{n(b,T);break}else t(b,T);T=T.sibling}V=Vh(I,b.mode,V),V.return=b,b=V}return a(b);case mi:return I=ds(I),k(b,T,I,V)}if(ka(I))return D(b,T,I,V);if(Ca(I)){if(B=Ca(I),typeof B!="function")throw Error(L(150));return I=B.call(I),M(b,T,I,V)}if(typeof I.then=="function")return k(b,T,Cl(I),V);if(I.$$typeof===Bn)return k(b,T,Rl(b,I),V);Dl(b,I)}return typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint"?(I=""+I,T!==null&&T.tag===6?(n(b,T.sibling),V=s(T,I),V.return=b,b=V):(n(b,T),V=Oh(I,b.mode,V),V.return=b,b=V),a(b)):n(b,T)}return function(b,T,I,V){try{Eo=0;var B=k(b,T,I,V);return br=null,B}catch(_){if(_===ea||_===vc)throw _;var F=Me(29,_,null,b.mode);return F.lanes=V,F.return=b,F}finally{}}}var Cs=oT(!0),lT=oT(!1),gi=!1;function mm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Oi(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Vi(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,ct&2){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=vu(e),WE(e,null,n),t}return _c(e,i,t,n),vu(e)}function Za(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,IE(e,n)}}function Lh(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var a={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?s=r=a:r=r.next=a,n=n.next}while(n!==null);r===null?s=r=t:r=r.next=t}else s=r=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ff=!1;function Wa(){if(Ff){var e=Sr;if(e!==null)throw e}}function to(e,t,n,i){Ff=!1;var s=e.updateQueue;gi=!1;var r=s.firstBaseUpdate,a=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,h=u.next;u.next=null,a===null?r=h:a.next=h,a=u;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=h:l.next=h,d.lastBaseUpdate=u))}if(r!==null){var m=s.baseState;a=0,d=h=u=null,l=r;do{var g=l.lane&-536870913,E=g!==l.lane;if(E?(ot&g)===g:(i&g)===g){g!==0&&g===xr&&(Ff=!0),d!==null&&(d=d.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});t:{var D=e,M=l;g=t;var k=n;switch(M.tag){case 1:if(D=M.payload,typeof D=="function"){m=D.call(k,m,g);break t}m=D;break t;case 3:D.flags=D.flags&-65537|128;case 0:if(D=M.payload,g=typeof D=="function"?D.call(k,m,g):D,g==null)break t;m=Rt({},m,g);break t;case 2:gi=!0}}g=l.callback,g!==null&&(e.flags|=64,E&&(e.flags|=8192),E=s.callbacks,E===null?s.callbacks=[g]:E.push(g))}else E={lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(h=d=E,u=m):d=d.next=E,a|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;E=l,l=E.next,E.next=null,s.lastBaseUpdate=E,s.shared.pending=null}}while(!0);d===null&&(u=m),s.baseState=u,s.firstBaseUpdate=h,s.lastBaseUpdate=d,r===null&&(s.shared.lanes=0),Gi|=a,e.lanes=a,e.memoizedState=m}}function uT(e,t){if(typeof e!="function")throw Error(L(191,e));e.call(t)}function cT(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)uT(n[e],t)}var zr=Dn(null),Su=Dn(0);function Ey(e,t){e=Wn,Et(Su,e),Et(zr,t),Wn=e|t.baseLanes}function Gf(){Et(Su,Wn),Et(zr,zr.current)}function gm(){Wn=Su.current,ee(zr),ee(Su)}var qe=Dn(null),We=null;function yi(e){var t=e.alternate;Et(Lt,Lt.current&1),Et(qe,e),We===null&&(t===null||zr.current!==null||t.memoizedState!==null)&&(We=e)}function Kf(e){Et(Lt,Lt.current),Et(qe,e),We===null&&(We=e)}function hT(e){e.tag===22?(Et(Lt,Lt.current),Et(qe,e),We===null&&(We=e)):_i()}function _i(){Et(Lt,Lt.current),Et(qe,qe.current)}function Ve(e){ee(qe),We===e&&(We=null),ee(Lt)}var Lt=Dn(0);function bu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||hd(n)||fd(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $n=0,W=null,pt=null,xt=null,wu=!1,wr=!1,Ds=!1,Iu=0,To=0,Ir=null,cR=0;function Ot(){throw Error(L(321))}function pm(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!je(e[n],t[n]))return!1;return!0}function ym(e,t,n,i,s,r){return $n=r,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,X.H=e===null||e.memoizedState===null?qT:Cm,Ds=!1,r=n(i,s),Ds=!1,wr&&(r=dT(t,n,i,s)),fT(e),r}function fT(e){X.H=Ao;var t=pt!==null&&pt.next!==null;if($n=0,xt=pt=W=null,wu=!1,To=0,Ir=null,t)throw Error(L(300));e===null||qt||(e=e.dependencies,e!==null&&Tu(e)&&(qt=!0))}function dT(e,t,n,i){W=e;var s=0;do{if(wr&&(Ir=null),To=0,wr=!1,25<=s)throw Error(L(301));if(s+=1,xt=pt=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}X.H=HT,r=t(n,i)}while(wr);return r}function hR(){var e=X.H,t=e.useState()[0];return t=typeof t.then=="function"?Go(t):t,e=e.useState()[0],(pt!==null?pt.memoizedState:null)!==e&&(W.flags|=1024),t}function _m(){var e=Iu!==0;return Iu=0,e}function vm(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Em(e){if(wu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}wu=!1}$n=0,xt=pt=W=null,wr=!1,To=Iu=0,Ir=null}function ye(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xt===null?W.memoizedState=xt=e:xt=xt.next=e,xt}function Pt(){if(pt===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=pt.next;var t=xt===null?W.memoizedState:xt.next;if(t!==null)xt=t,pt=e;else{if(e===null)throw W.alternate===null?Error(L(467)):Error(L(310));pt=e,e={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},xt===null?W.memoizedState=xt=e:xt=xt.next=e}return xt}function Ec(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Go(e){var t=To;return To+=1,Ir===null&&(Ir=[]),e=aT(Ir,e,t),t=W,(xt===null?t.memoizedState:xt.next)===null&&(t=t.alternate,X.H=t===null||t.memoizedState===null?qT:Cm),e}function Tc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Go(e);if(e.$$typeof===Bn)return oe(e)}throw Error(L(438,String(e)))}function Tm(e){var t=null,n=W.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=W.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Ec(),W.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=$w;return t.index++,n}function Jn(e,t){return typeof t=="function"?t(e):t}function Ql(e){var t=Pt();return Am(t,pt,e)}function Am(e,t,n){var i=e.queue;if(i===null)throw Error(L(311));i.lastRenderedReducer=n;var s=e.baseQueue,r=i.pending;if(r!==null){if(s!==null){var a=s.next;s.next=r.next,r.next=a}t.baseQueue=s=r,i.pending=null}if(r=e.baseState,s===null)e.memoizedState=r;else{t=s.next;var l=a=null,u=null,h=t,d=!1;do{var m=h.lane&-536870913;if(m!==h.lane?(ot&m)===m:($n&m)===m){var g=h.revertLane;if(g===0)u!==null&&(u=u.next={lane:0,revertLane:0,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),m===xr&&(d=!0);else if(($n&g)===g){h=h.next,g===xr&&(d=!0);continue}else m={lane:0,revertLane:h.revertLane,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},u===null?(l=u=m,a=r):u=u.next=m,W.lanes|=g,Gi|=g;m=h.action,Ds&&n(r,m),r=h.hasEagerState?h.eagerState:n(r,m)}else g={lane:m,revertLane:h.revertLane,gesture:h.gesture,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},u===null?(l=u=g,a=r):u=u.next=g,W.lanes|=m,Gi|=m;h=h.next}while(h!==null&&h!==t);if(u===null?a=r:u.next=l,!je(r,e.memoizedState)&&(qt=!0,d&&(n=Sr,n!==null)))throw n;e.memoizedState=r,e.baseState=a,e.baseQueue=u,i.lastRenderedState=r}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Ph(e){var t=Pt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,r=t.memoizedState;if(s!==null){n.pending=null;var a=s=s.next;do r=e(r,a.action),a=a.next;while(a!==s);je(r,t.memoizedState)||(qt=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,i]}function mT(e,t,n){var i=W,s=Pt(),r=lt;if(r){if(n===void 0)throw Error(L(407));n=n()}else n=t();var a=!je((pt||s).memoizedState,n);if(a&&(s.memoizedState=n,qt=!0),s=s.queue,Sm(yT.bind(null,i,s,e),[e]),s.getSnapshot!==t||a||xt!==null&&xt.memoizedState.tag&1){if(i.flags|=2048,Br(9,{destroy:void 0},pT.bind(null,i,s,n,t),null),_t===null)throw Error(L(349));r||$n&127||gT(i,t,n)}return n}function gT(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t=Ec(),W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function pT(e,t,n,i){t.value=n,t.getSnapshot=i,_T(t)&&vT(e)}function yT(e,t,n){return n(function(){_T(t)&&vT(e)})}function _T(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!je(e,n)}catch{return!0}}function vT(e){var t=js(e,2);t!==null&&Ie(t,e,2)}function Yf(e){var t=ye();if(typeof e=="function"){var n=e;if(e=n(),Ds){Si(!0);try{n()}finally{Si(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:e},t}function ET(e,t,n,i){return e.baseState=n,Am(e,pt,typeof i=="function"?i:Jn)}function fR(e,t,n,i,s){if(Sc(e))throw Error(L(485));if(e=t.action,e!==null){var r={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(a){r.listeners.push(a)}};X.T!==null?n(!0):r.isTransition=!1,i(r),n=t.pending,n===null?(r.next=t.pending=r,TT(t,r)):(r.next=n.next,t.pending=n.next=r)}}function TT(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var r=X.T,a={};X.T=a;try{var l=n(s,i),u=X.S;u!==null&&u(a,l),Ty(e,t,l)}catch(h){Qf(e,t,h)}finally{r!==null&&a.types!==null&&(r.types=a.types),X.T=r}}else try{r=n(s,i),Ty(e,t,r)}catch(h){Qf(e,t,h)}}function Ty(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Ay(e,t,i)},function(i){return Qf(e,t,i)}):Ay(e,t,n)}function Ay(e,t,n){t.status="fulfilled",t.value=n,AT(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,TT(e,n)))}function Qf(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,AT(t),t=t.next;while(t!==i)}e.action=null}function AT(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ST(e,t){return t}function Sy(e,t){if(lt){var n=_t.formState;if(n!==null){t:{var i=W;if(lt){if(bt){e:{for(var s=bt,r=$e;s.nodeType!==8;){if(!r){s=null;break e}if(s=tn(s.nextSibling),s===null){s=null;break e}}r=s.data,s=r==="F!"||r==="F"?s:null}if(s){bt=tn(s.nextSibling),i=s.data==="F!";break t}}Hi(i)}i=!1}i&&(t=n[0])}}return n=ye(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ST,lastRenderedState:t},n.queue=i,n=zT.bind(null,W,i),i.dispatch=n,i=Yf(!1),r=Rm.bind(null,W,!1,i.queue),i=ye(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=fR.bind(null,W,s,r,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function by(e){var t=Pt();return bT(t,pt,e)}function bT(e,t,n){if(t=Am(e,t,ST)[0],e=Ql(Jn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Go(t)}catch(a){throw a===ea?vc:a}else i=t;t=Pt();var s=t.queue,r=s.dispatch;return n!==t.memoizedState&&(W.flags|=2048,Br(9,{destroy:void 0},dR.bind(null,s,n),null)),[i,r,e]}function dR(e,t){e.action=t}function wy(e){var t=Pt(),n=pt;if(n!==null)return bT(t,n,e);Pt(),t=t.memoizedState,n=Pt();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Br(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=W.updateQueue,t===null&&(t=Ec(),W.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function wT(){return Pt().memoizedState}function Xl(e,t,n,i){var s=ye();W.flags|=e,s.memoizedState=Br(1|t,{destroy:void 0},n,i===void 0?null:i)}function Ac(e,t,n,i){var s=Pt();i=i===void 0?null:i;var r=s.memoizedState.inst;pt!==null&&i!==null&&pm(i,pt.memoizedState.deps)?s.memoizedState=Br(t,r,n,i):(W.flags|=e,s.memoizedState=Br(1|t,r,n,i))}function Iy(e,t){Xl(8390656,8,e,t)}function Sm(e,t){Ac(2048,8,e,t)}function mR(e){W.flags|=4;var t=W.updateQueue;if(t===null)t=Ec(),W.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function IT(e){var t=Pt().memoizedState;return mR({ref:t,nextImpl:e}),function(){if(ct&2)throw Error(L(440));return t.impl.apply(void 0,arguments)}}function RT(e,t){return Ac(4,2,e,t)}function CT(e,t){return Ac(4,4,e,t)}function DT(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function NT(e,t,n){n=n!=null?n.concat([e]):null,Ac(4,4,DT.bind(null,t,e),n)}function bm(){}function OT(e,t){var n=Pt();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&pm(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function VT(e,t){var n=Pt();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&pm(t,i[1]))return i[0];if(i=e(),Ds){Si(!0);try{e()}finally{Si(!1)}}return n.memoizedState=[i,t],i}function wm(e,t,n){return n===void 0||$n&1073741824&&!(ot&261930)?e.memoizedState=t:(e.memoizedState=n,e=E0(),W.lanes|=e,Gi|=e,n)}function MT(e,t,n,i){return je(n,t)?n:zr.current!==null?(e=wm(e,n,i),je(e,t)||(qt=!0),e):!($n&42)||$n&1073741824&&!(ot&261930)?(qt=!0,e.memoizedState=n):(e=E0(),W.lanes|=e,Gi|=e,t)}function LT(e,t,n,i,s){var r=ht.p;ht.p=r!==0&&8>r?r:8;var a=X.T,l={};X.T=l,Rm(e,!1,t,n);try{var u=s(),h=X.S;if(h!==null&&h(l,u),u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=uR(u,i);eo(e,t,d,ze(e))}else eo(e,t,i,ze(e))}catch(m){eo(e,t,{then:function(){},status:"rejected",reason:m},ze())}finally{ht.p=r,a!==null&&l.types!==null&&(a.types=l.types),X.T=a}}function gR(){}function Xf(e,t,n,i){if(e.tag!==5)throw Error(L(476));var s=PT(e).queue;LT(e,s,t,vs,n===null?gR:function(){return UT(e),n(i)})}function PT(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:vs,baseState:vs,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:vs},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function UT(e){var t=PT(e);t.next===null&&(t=e.alternate.memoizedState),eo(e,t.next.queue,{},ze())}function Im(){return oe(wo)}function kT(){return Pt().memoizedState}function xT(){return Pt().memoizedState}function pR(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=ze();e=Oi(n);var i=Vi(t,e,n);i!==null&&(Ie(i,t,n),Za(i,t,n)),t={cache:hm()},e.payload=t;return}t=t.return}}function yR(e,t,n){var i=ze();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Sc(e)?BT(t,n):(n=om(e,t,n,i),n!==null&&(Ie(n,e,i),jT(n,t,i)))}function zT(e,t,n){var i=ze();eo(e,t,n,i)}function eo(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sc(e))BT(t,s);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var a=t.lastRenderedState,l=r(a,n);if(s.hasEagerState=!0,s.eagerState=l,je(l,a))return _c(e,t,s,0),_t===null&&yc(),!1}catch{}finally{}if(n=om(e,t,s,i),n!==null)return Ie(n,e,i),jT(n,t,i),!0}return!1}function Rm(e,t,n,i){if(i={lane:2,revertLane:Um(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Sc(e)){if(t)throw Error(L(479))}else t=om(e,n,i,2),t!==null&&Ie(t,e,2)}function Sc(e){var t=e.alternate;return e===W||t!==null&&t===W}function BT(e,t){wr=wu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function jT(e,t,n){if(n&4194048){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,IE(e,n)}}var Ao={readContext:oe,use:Tc,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useLayoutEffect:Ot,useInsertionEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useSyncExternalStore:Ot,useId:Ot,useHostTransitionStatus:Ot,useFormState:Ot,useActionState:Ot,useOptimistic:Ot,useMemoCache:Ot,useCacheRefresh:Ot};Ao.useEffectEvent=Ot;var qT={readContext:oe,use:Tc,useCallback:function(e,t){return ye().memoizedState=[e,t===void 0?null:t],e},useContext:oe,useEffect:Iy,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Xl(4194308,4,DT.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xl(4194308,4,e,t)},useInsertionEffect:function(e,t){Xl(4,2,e,t)},useMemo:function(e,t){var n=ye();t=t===void 0?null:t;var i=e();if(Ds){Si(!0);try{e()}finally{Si(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=ye();if(n!==void 0){var s=n(t);if(Ds){Si(!0);try{n(t)}finally{Si(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=yR.bind(null,W,e),[i.memoizedState,e]},useRef:function(e){var t=ye();return e={current:e},t.memoizedState=e},useState:function(e){e=Yf(e);var t=e.queue,n=zT.bind(null,W,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:bm,useDeferredValue:function(e,t){var n=ye();return wm(n,e,t)},useTransition:function(){var e=Yf(!1);return e=LT.bind(null,W,e.queue,!0,!1),ye().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=W,s=ye();if(lt){if(n===void 0)throw Error(L(407));n=n()}else{if(n=t(),_t===null)throw Error(L(349));ot&127||gT(i,t,n)}s.memoizedState=n;var r={value:n,getSnapshot:t};return s.queue=r,Iy(yT.bind(null,i,r,e),[e]),i.flags|=2048,Br(9,{destroy:void 0},pT.bind(null,i,r,n,t),null),n},useId:function(){var e=ye(),t=_t.identifierPrefix;if(lt){var n=vn,i=_n;n=(i&~(1<<32-xe(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Iu++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=cR++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Im,useFormState:Sy,useActionState:Sy,useOptimistic:function(e){var t=ye();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Rm.bind(null,W,!0,n),n.dispatch=t,[e,t]},useMemoCache:Tm,useCacheRefresh:function(){return ye().memoizedState=pR.bind(null,W)},useEffectEvent:function(e){var t=ye(),n={impl:e};return t.memoizedState=n,function(){if(ct&2)throw Error(L(440));return n.impl.apply(void 0,arguments)}}},Cm={readContext:oe,use:Tc,useCallback:OT,useContext:oe,useEffect:Sm,useImperativeHandle:NT,useInsertionEffect:RT,useLayoutEffect:CT,useMemo:VT,useReducer:Ql,useRef:wT,useState:function(){return Ql(Jn)},useDebugValue:bm,useDeferredValue:function(e,t){var n=Pt();return MT(n,pt.memoizedState,e,t)},useTransition:function(){var e=Ql(Jn)[0],t=Pt().memoizedState;return[typeof e=="boolean"?e:Go(e),t]},useSyncExternalStore:mT,useId:kT,useHostTransitionStatus:Im,useFormState:by,useActionState:by,useOptimistic:function(e,t){var n=Pt();return ET(n,pt,e,t)},useMemoCache:Tm,useCacheRefresh:xT};Cm.useEffectEvent=IT;var HT={readContext:oe,use:Tc,useCallback:OT,useContext:oe,useEffect:Sm,useImperativeHandle:NT,useInsertionEffect:RT,useLayoutEffect:CT,useMemo:VT,useReducer:Ph,useRef:wT,useState:function(){return Ph(Jn)},useDebugValue:bm,useDeferredValue:function(e,t){var n=Pt();return pt===null?wm(n,e,t):MT(n,pt.memoizedState,e,t)},useTransition:function(){var e=Ph(Jn)[0],t=Pt().memoizedState;return[typeof e=="boolean"?e:Go(e),t]},useSyncExternalStore:mT,useId:kT,useHostTransitionStatus:Im,useFormState:wy,useActionState:wy,useOptimistic:function(e,t){var n=Pt();return pt!==null?ET(n,pt,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Tm,useCacheRefresh:xT};HT.useEffectEvent=IT;function Uh(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Rt({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var $f={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=ze(),s=Oi(i);s.payload=t,n!=null&&(s.callback=n),t=Vi(e,s,i),t!==null&&(Ie(t,e,i),Za(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=ze(),s=Oi(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Vi(e,s,i),t!==null&&(Ie(t,e,i),Za(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ze(),i=Oi(n);i.tag=2,t!=null&&(i.callback=t),t=Vi(e,i,n),t!==null&&(Ie(t,e,n),Za(t,e,n))}};function Ry(e,t,n,i,s,r,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,a):t.prototype&&t.prototype.isPureReactComponent?!yo(n,i)||!yo(s,r):!0}function Cy(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&$f.enqueueReplaceState(t,t.state,null)}function Ns(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Rt({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function FT(e){_u(e)}function GT(e){console.error(e)}function KT(e){_u(e)}function Ru(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Dy(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Jf(e,t,n){return n=Oi(n),n.tag=3,n.payload={element:null},n.callback=function(){Ru(e,t)},n}function YT(e){return e=Oi(e),e.tag=3,e}function QT(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var r=i.value;e.payload=function(){return s(r)},e.callback=function(){Dy(t,n,i)}}var a=n.stateNode;a!==null&&typeof a.componentDidCatch=="function"&&(e.callback=function(){Dy(t,n,i),typeof s!="function"&&(Mi===null?Mi=new Set([this]):Mi.add(this));var l=i.stack;this.componentDidCatch(i.value,{componentStack:l!==null?l:""})})}function _R(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&ta(t,n,s,!0),n=qe.current,n!==null){switch(n.tag){case 31:case 13:return We===null?Vu():n.alternate===null&&Vt===0&&(Vt=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===Au?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Yh(e,i,s)),!1;case 22:return n.flags|=65536,i===Au?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Yh(e,i,s)),!1}throw Error(L(435,n.tag))}return Yh(e,i,s),Vu(),!1}if(lt)return t=qe.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==xf&&(e=Error(L(422),{cause:i}),vo(Xe(e,n)))):(i!==xf&&(t=Error(L(423),{cause:i}),vo(Xe(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=Xe(i,n),s=Jf(e.stateNode,i,s),Lh(e,s),Vt!==4&&(Vt=2)),!1;var r=Error(L(520),{cause:i});if(r=Xe(r,n),so===null?so=[r]:so.push(r),Vt!==4&&(Vt=2),t===null)return!0;i=Xe(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=Jf(n.stateNode,i,e),Lh(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Mi===null||!Mi.has(r))))return n.flags|=65536,s&=-s,n.lanes|=s,s=YT(s),QT(s,e,n,i),Lh(n,s),!1}n=n.return}while(n!==null);return!1}var Dm=Error(L(461)),qt=!1;function ne(e,t,n,i){t.child=e===null?lT(t,null,n,i):Cs(t,e.child,n,i)}function Ny(e,t,n,i,s){n=n.render;var r=t.ref;if("ref"in i){var a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}else a=i;return Rs(t),i=ym(e,t,n,a,r,s),l=_m(),e!==null&&!qt?(vm(e,t,s),Zn(e,t,s)):(lt&&l&&um(t),t.flags|=1,ne(e,t,i,s),t.child)}function Oy(e,t,n,i,s){if(e===null){var r=n.type;return typeof r=="function"&&!lm(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,XT(e,t,r,i,s)):(e=Kl(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Nm(e,s)){var a=r.memoizedProps;if(n=n.compare,n=n!==null?n:yo,n(a,i)&&e.ref===t.ref)return Zn(e,t,s)}return t.flags|=1,e=Gn(r,i),e.ref=t.ref,e.return=t,t.child=e}function XT(e,t,n,i,s){if(e!==null){var r=e.memoizedProps;if(yo(r,i)&&e.ref===t.ref)if(qt=!1,t.pendingProps=i=r,Nm(e,s))e.flags&131072&&(qt=!0);else return t.lanes=e.lanes,Zn(e,t,s)}return Zf(e,t,n,i,s)}function $T(e,t,n,i){var s=i.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(t.flags&128){if(r=r!==null?r.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~r}else i=0,t.child=null;return Vy(e,t,r,n,i)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Yl(t,r!==null?r.cachePool:null),r!==null?Ey(t,r):Gf(),hT(t);else return i=t.lanes=536870912,Vy(e,t,r!==null?r.baseLanes|n:n,n,i)}else r!==null?(Yl(t,r.cachePool),Ey(t,r),_i(),t.memoizedState=null):(e!==null&&Yl(t,null),Gf(),_i());return ne(e,t,s,n),t.child}function za(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Vy(e,t,n,i,s){var r=fm();return r=r===null?null:{parent:Bt._currentValue,pool:r},t.memoizedState={baseLanes:n,cachePool:r},e!==null&&Yl(t,null),Gf(),hT(t),e!==null&&ta(e,t,i,!0),t.childLanes=s,null}function $l(e,t){return t=Cu({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function My(e,t,n){return Cs(t,e.child,null,n),e=$l(t,t.pendingProps),e.flags|=2,Ve(t),t.memoizedState=null,e}function vR(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(lt){if(i.mode==="hidden")return e=$l(t,i),t.lanes=536870912,za(null,e);if(Kf(t),(e=bt)?(e=q0(e,$e),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:qi!==null?{id:_n,overflow:vn}:null,retryLane:536870912,hydrationErrors:null},n=eT(e),n.return=t,t.child=n,re=t,bt=null)):e=null,e===null)throw Hi(t);return t.lanes=536870912,null}return $l(t,i)}var r=e.memoizedState;if(r!==null){var a=r.dehydrated;if(Kf(t),s)if(t.flags&256)t.flags&=-257,t=My(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(L(558));else if(qt||ta(e,t,n,!1),s=(n&e.childLanes)!==0,qt||s){if(i=_t,i!==null&&(a=RE(i,n),a!==0&&a!==r.retryLane))throw r.retryLane=a,js(e,a),Ie(i,e,a),Dm;Vu(),t=My(e,t,n)}else e=r.treeContext,bt=tn(a.nextSibling),re=t,lt=!0,Ni=null,$e=!1,e!==null&&iT(t,e),t=$l(t,i),t.flags|=4096;return t}return e=Gn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Jl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(L(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Zf(e,t,n,i,s){return Rs(t),n=ym(e,t,n,i,void 0,s),i=_m(),e!==null&&!qt?(vm(e,t,s),Zn(e,t,s)):(lt&&i&&um(t),t.flags|=1,ne(e,t,n,s),t.child)}function Ly(e,t,n,i,s,r){return Rs(t),t.updateQueue=null,n=dT(t,i,n,s),fT(e),i=_m(),e!==null&&!qt?(vm(e,t,r),Zn(e,t,r)):(lt&&i&&um(t),t.flags|=1,ne(e,t,n,r),t.child)}function Py(e,t,n,i,s){if(Rs(t),t.stateNode===null){var r=pr,a=n.contextType;typeof a=="object"&&a!==null&&(r=oe(a)),r=new n(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=$f,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},mm(t),a=n.contextType,r.context=typeof a=="object"&&a!==null?oe(a):pr,r.state=t.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(Uh(t,n,a,i),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(a=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),a!==r.state&&$f.enqueueReplaceState(r,r.state,null),to(t,i,r,s),Wa(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var l=t.memoizedProps,u=Ns(n,l);r.props=u;var h=r.context,d=n.contextType;a=pr,typeof d=="object"&&d!==null&&(a=oe(d));var m=n.getDerivedStateFromProps;d=typeof m=="function"||typeof r.getSnapshotBeforeUpdate=="function",l=t.pendingProps!==l,d||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(l||h!==a)&&Cy(t,r,i,a),gi=!1;var g=t.memoizedState;r.state=g,to(t,i,r,s),Wa(),h=t.memoizedState,l||g!==h||gi?(typeof m=="function"&&(Uh(t,n,m,i),h=t.memoizedState),(u=gi||Ry(t,n,u,i,g,h,a))?(d||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=h),r.props=i,r.state=h,r.context=a,i=u):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,Hf(e,t),a=t.memoizedProps,d=Ns(n,a),r.props=d,m=t.pendingProps,g=r.context,h=n.contextType,u=pr,typeof h=="object"&&h!==null&&(u=oe(h)),l=n.getDerivedStateFromProps,(h=typeof l=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(a!==m||g!==u)&&Cy(t,r,i,u),gi=!1,g=t.memoizedState,r.state=g,to(t,i,r,s),Wa();var E=t.memoizedState;a!==m||g!==E||gi||e!==null&&e.dependencies!==null&&Tu(e.dependencies)?(typeof l=="function"&&(Uh(t,n,l,i),E=t.memoizedState),(d=gi||Ry(t,n,d,i,g,E,u)||e!==null&&e.dependencies!==null&&Tu(e.dependencies))?(h||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,E,u),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,E,u)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=E),r.props=i,r.state=E,r.context=u,i=d):(typeof r.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,Jl(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=Cs(t,e.child,null,s),t.child=Cs(t,null,n,s)):ne(e,t,n,s),t.memoizedState=r.state,e=t.child):e=Zn(e,t,s),e}function Uy(e,t,n,i){return Is(),t.flags|=256,ne(e,t,n,i),t.child}var kh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xh(e){return{baseLanes:e,cachePool:rT()}}function zh(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Pe),e}function JT(e,t,n){var i=t.pendingProps,s=!1,r=(t.flags&128)!==0,a;if((a=r)||(a=e!==null&&e.memoizedState===null?!1:(Lt.current&2)!==0),a&&(s=!0,t.flags&=-129),a=(t.flags&32)!==0,t.flags&=-33,e===null){if(lt){if(s?yi(t):_i(),(e=bt)?(e=q0(e,$e),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:qi!==null?{id:_n,overflow:vn}:null,retryLane:536870912,hydrationErrors:null},n=eT(e),n.return=t,t.child=n,re=t,bt=null)):e=null,e===null)throw Hi(t);return fd(e)?t.lanes=32:t.lanes=536870912,null}var l=i.children;return i=i.fallback,s?(_i(),s=t.mode,l=Cu({mode:"hidden",children:l},s),i=Es(i,s,n,null),l.return=t,i.return=t,l.sibling=i,t.child=l,i=t.child,i.memoizedState=xh(n),i.childLanes=zh(e,a,n),t.memoizedState=kh,za(null,i)):(yi(t),Wf(t,l))}var u=e.memoizedState;if(u!==null&&(l=u.dehydrated,l!==null)){if(r)t.flags&256?(yi(t),t.flags&=-257,t=Bh(e,t,n)):t.memoizedState!==null?(_i(),t.child=e.child,t.flags|=128,t=null):(_i(),l=i.fallback,s=t.mode,i=Cu({mode:"visible",children:i.children},s),l=Es(l,s,n,null),l.flags|=2,i.return=t,l.return=t,i.sibling=l,t.child=i,Cs(t,e.child,null,n),i=t.child,i.memoizedState=xh(n),i.childLanes=zh(e,a,n),t.memoizedState=kh,t=za(null,i));else if(yi(t),fd(l)){if(a=l.nextSibling&&l.nextSibling.dataset,a)var h=a.dgst;a=h,i=Error(L(419)),i.stack="",i.digest=a,vo({value:i,source:null,stack:null}),t=Bh(e,t,n)}else if(qt||ta(e,t,n,!1),a=(n&e.childLanes)!==0,qt||a){if(a=_t,a!==null&&(i=RE(a,n),i!==0&&i!==u.retryLane))throw u.retryLane=i,js(e,i),Ie(a,e,i),Dm;hd(l)||Vu(),t=Bh(e,t,n)}else hd(l)?(t.flags|=192,t.child=e.child,t=null):(e=u.treeContext,bt=tn(l.nextSibling),re=t,lt=!0,Ni=null,$e=!1,e!==null&&iT(t,e),t=Wf(t,i.children),t.flags|=4096);return t}return s?(_i(),l=i.fallback,s=t.mode,u=e.child,h=u.sibling,i=Gn(u,{mode:"hidden",children:i.children}),i.subtreeFlags=u.subtreeFlags&65011712,h!==null?l=Gn(h,l):(l=Es(l,s,n,null),l.flags|=2),l.return=t,i.return=t,i.sibling=l,t.child=i,za(null,i),i=t.child,l=e.child.memoizedState,l===null?l=xh(n):(s=l.cachePool,s!==null?(u=Bt._currentValue,s=s.parent!==u?{parent:u,pool:u}:s):s=rT(),l={baseLanes:l.baseLanes|n,cachePool:s}),i.memoizedState=l,i.childLanes=zh(e,a,n),t.memoizedState=kh,za(e.child,i)):(yi(t),n=e.child,e=n.sibling,n=Gn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(a=t.deletions,a===null?(t.deletions=[e],t.flags|=16):a.push(e)),t.child=n,t.memoizedState=null,n)}function Wf(e,t){return t=Cu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Cu(e,t){return e=Me(22,e,null,t),e.lanes=0,e}function Bh(e,t,n){return Cs(t,e.child,null,n),e=Wf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ky(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Bf(e.return,t,n)}function jh(e,t,n,i,s,r){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:r}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=s,a.treeForkCount=r)}function ZT(e,t,n){var i=t.pendingProps,s=i.revealOrder,r=i.tail;i=i.children;var a=Lt.current,l=(a&2)!==0;if(l?(a=a&1|2,t.flags|=128):a&=1,Et(Lt,a),ne(e,t,i,n),i=lt?_o:0,!l&&e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ky(e,n,t);else if(e.tag===19)ky(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&bu(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),jh(t,!1,s,n,r,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&bu(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}jh(t,!0,n,null,r,i);break;case"together":jh(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function Zn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gi|=t.lanes,!(n&t.childLanes))if(e!==null){if(ta(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(L(153));if(t.child!==null){for(e=t.child,n=Gn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Gn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nm(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&Tu(e)))}function ER(e,t,n){switch(t.tag){case 3:mu(t,t.stateNode.containerInfo),pi(t,Bt,e.memoizedState.cache),Is();break;case 27:case 5:Rf(t);break;case 4:mu(t,t.stateNode.containerInfo);break;case 10:pi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Kf(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(yi(t),t.flags|=128,null):n&t.child.childLanes?JT(e,t,n):(yi(t),e=Zn(e,t,n),e!==null?e.sibling:null);yi(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(ta(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return ZT(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Et(Lt,Lt.current),i)break;return null;case 22:return t.lanes=0,$T(e,t,n,t.pendingProps);case 24:pi(t,Bt,e.memoizedState.cache)}return Zn(e,t,n)}function WT(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)qt=!0;else{if(!Nm(e,n)&&!(t.flags&128))return qt=!1,ER(e,t,n);qt=!!(e.flags&131072)}else qt=!1,lt&&t.flags&1048576&&nT(t,_o,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=ds(t.elementType),t.type=e,typeof e=="function")lm(e)?(i=Ns(e,i),t.tag=1,t=Py(null,t,e,i,n)):(t.tag=0,t=Zf(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===Qd){t.tag=11,t=Ny(null,t,e,i,n);break t}else if(s===Xd){t.tag=14,t=Oy(null,t,e,i,n);break t}}throw t=wf(e)||e,Error(L(306,t,""))}}return t;case 0:return Zf(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=Ns(i,t.pendingProps),Py(e,t,i,s,n);case 3:t:{if(mu(t,t.stateNode.containerInfo),e===null)throw Error(L(387));i=t.pendingProps;var r=t.memoizedState;s=r.element,Hf(e,t),to(t,i,null,n);var a=t.memoizedState;if(i=a.cache,pi(t,Bt,i),i!==r.cache&&jf(t,[Bt],n,!0),Wa(),i=a.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:a.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Uy(e,t,i,n);break t}else if(i!==s){s=Xe(Error(L(424)),t),vo(s),t=Uy(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(bt=tn(e.firstChild),re=t,lt=!0,Ni=null,$e=!0,n=lT(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Is(),i===s){t=Zn(e,t,n);break t}ne(e,t,i,n)}t=t.child}return t;case 26:return Jl(e,t),e===null?(n=i_(t.type,null,t.pendingProps,null))?t.memoizedState=n:lt||(n=t.type,e=t.pendingProps,i=Uu(Di.current).createElement(n),i[se]=t,i[Re]=e,le(i,n,e),te(i),t.stateNode=i):t.memoizedState=i_(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Rf(t),e===null&&lt&&(i=t.stateNode=H0(t.type,t.pendingProps,Di.current),re=t,$e=!0,s=bt,ts(t.type)?(dd=s,bt=tn(i.firstChild)):bt=s),ne(e,t,t.pendingProps.children,n),Jl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&lt&&((s=i=bt)&&(i=$R(i,t.type,t.pendingProps,$e),i!==null?(t.stateNode=i,re=t,bt=tn(i.firstChild),$e=!1,s=!0):s=!1),s||Hi(t)),Rf(t),s=t.type,r=t.pendingProps,a=e!==null?e.memoizedProps:null,i=r.children,ud(s,r)?i=null:a!==null&&ud(s,a)&&(t.flags|=32),t.memoizedState!==null&&(s=ym(e,t,hR,null,null,n),wo._currentValue=s),Jl(e,t),ne(e,t,i,n),t.child;case 6:return e===null&&lt&&((e=n=bt)&&(n=JR(n,t.pendingProps,$e),n!==null?(t.stateNode=n,re=t,bt=null,e=!0):e=!1),e||Hi(t)),null;case 13:return JT(e,t,n);case 4:return mu(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Cs(t,null,i,n):ne(e,t,i,n),t.child;case 11:return Ny(e,t,t.type,t.pendingProps,n);case 7:return ne(e,t,t.pendingProps,n),t.child;case 8:return ne(e,t,t.pendingProps.children,n),t.child;case 12:return ne(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,pi(t,t.type,i.value),ne(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,Rs(t),s=oe(s),i=i(s),t.flags|=1,ne(e,t,i,n),t.child;case 14:return Oy(e,t,t.type,t.pendingProps,n);case 15:return XT(e,t,t.type,t.pendingProps,n);case 19:return ZT(e,t,n);case 31:return vR(e,t,n);case 22:return $T(e,t,n,t.pendingProps);case 24:return Rs(t),i=oe(Bt),e===null?(s=fm(),s===null&&(s=_t,r=hm(),s.pooledCache=r,r.refCount++,r!==null&&(s.pooledCacheLanes|=n),s=r),t.memoizedState={parent:i,cache:s},mm(t),pi(t,Bt,s)):(e.lanes&n&&(Hf(e,t),to(t,null,null,n),Wa()),s=e.memoizedState,r=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),pi(t,Bt,i)):(i=r.cache,pi(t,Bt,i),i!==s.cache&&jf(t,[Bt],n,!0))),ne(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(L(156,t.tag))}function Mn(e){e.flags|=4}function qh(e,t,n,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(S0())e.flags|=8192;else throw As=Au,dm}else e.flags&=-16777217}function xy(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!K0(t))if(S0())e.flags|=8192;else throw As=Au,dm}function Nl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?bE():536870912,e.lanes|=t,jr|=t)}function Va(e,t){if(!lt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function St(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function TR(e,t,n){var i=t.pendingProps;switch(cm(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(t),null;case 1:return St(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Kn(Bt),Pr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ws(t)?Mn(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Mh())),St(t),null;case 26:var s=t.type,r=t.memoizedState;return e===null?(Mn(t),r!==null?(St(t),xy(t,r)):(St(t),qh(t,s,null,i,n))):r?r!==e.memoizedState?(Mn(t),St(t),xy(t,r)):(St(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Mn(t),St(t),qh(t,s,e,i,n)),null;case 27:if(gu(t),n=Di.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Mn(t);else{if(!i){if(t.stateNode===null)throw Error(L(166));return St(t),null}e=Tn.current,Ws(t)?dy(t):(e=H0(s,i,n),t.stateNode=e,Mn(t))}return St(t),null;case 5:if(gu(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Mn(t);else{if(!i){if(t.stateNode===null)throw Error(L(166));return St(t),null}if(r=Tn.current,Ws(t))dy(t);else{var a=Uu(Di.current);switch(r){case 1:r=a.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:r=a.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":r=a.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":r=a.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":r=a.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?a.createElement("select",{is:i.is}):a.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?a.createElement(s,{is:i.is}):a.createElement(s)}}r[se]=t,r[Re]=i;t:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=r;t:switch(le(r,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Mn(t)}}return St(t),qh(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Mn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(L(166));if(e=Di.current,Ws(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=re,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[se]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||z0(e.nodeValue,n)),e||Hi(t,!0)}else e=Uu(e).createTextNode(i),e[se]=t,t.stateNode=e}return St(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Ws(t),n!==null){if(e===null){if(!i)throw Error(L(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(557));e[se]=t}else Is(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;St(t),e=!1}else n=Mh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ve(t),t):(Ve(t),null);if(t.flags&128)throw Error(L(558))}return St(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Ws(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(L(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(L(317));s[se]=t}else Is(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;St(t),s=!1}else s=Mh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Ve(t),t):(Ve(t),null)}return Ve(t),t.flags&128?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Nl(t,t.updateQueue),St(t),null);case 4:return Pr(),e===null&&km(t.stateNode.containerInfo),St(t),null;case 10:return Kn(t.type),St(t),null;case 19:if(ee(Lt),i=t.memoizedState,i===null)return St(t),null;if(s=(t.flags&128)!==0,r=i.rendering,r===null)if(s)Va(i,!1);else{if(Vt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(r=bu(e),r!==null){for(t.flags|=128,Va(i,!1),e=r.updateQueue,t.updateQueue=e,Nl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)tT(n,e),n=n.sibling;return Et(Lt,Lt.current&1|2),lt&&kn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Ue()>Nu&&(t.flags|=128,s=!0,Va(i,!1),t.lanes=4194304)}else{if(!s)if(e=bu(r),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Nl(t,e),Va(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!lt)return St(t),null}else 2*Ue()-i.renderingStartTime>Nu&&n!==536870912&&(t.flags|=128,s=!0,Va(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ue(),e.sibling=null,n=Lt.current,Et(Lt,s?n&1|2:n&1),lt&&kn(t,i.treeForkCount),e):(St(t),null);case 22:case 23:return Ve(t),gm(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(St(t),t.subtreeFlags&6&&(t.flags|=8192)):St(t),n=t.updateQueue,n!==null&&Nl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&ee(Ts),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Kn(Bt),St(t),null;case 25:return null;case 30:return null}throw Error(L(156,t.tag))}function AR(e,t){switch(cm(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Kn(Bt),Pr(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return gu(t),null;case 31:if(t.memoizedState!==null){if(Ve(t),t.alternate===null)throw Error(L(340));Is()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ve(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(L(340));Is()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ee(Lt),null;case 4:return Pr(),null;case 10:return Kn(t.type),null;case 22:case 23:return Ve(t),gm(),e!==null&&ee(Ts),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Kn(Bt),null;case 25:return null;default:return null}}function t0(e,t){switch(cm(t),t.tag){case 3:Kn(Bt),Pr();break;case 26:case 27:case 5:gu(t);break;case 4:Pr();break;case 31:t.memoizedState!==null&&Ve(t);break;case 13:Ve(t);break;case 19:ee(Lt);break;case 10:Kn(t.type);break;case 22:case 23:Ve(t),gm(),e!==null&&ee(Ts);break;case 24:Kn(Bt)}}function Ko(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var r=n.create,a=n.inst;i=r(),a.destroy=i}n=n.next}while(n!==s)}}catch(l){mt(t,t.return,l)}}function Fi(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var r=s.next;i=r;do{if((i.tag&e)===e){var a=i.inst,l=a.destroy;if(l!==void 0){a.destroy=void 0,s=t;var u=n,h=l;try{h()}catch(d){mt(s,u,d)}}}i=i.next}while(i!==r)}}catch(d){mt(t,t.return,d)}}function e0(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{cT(t,n)}catch(i){mt(e,e.return,i)}}}function n0(e,t,n){n.props=Ns(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){mt(e,t,i)}}function no(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){mt(e,t,s)}}function En(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){mt(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){mt(e,t,s)}else n.current=null}function i0(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){mt(e,e.return,s)}}function Hh(e,t,n){try{var i=e.stateNode;FR(i,e.type,n,t),i[Re]=t}catch(s){mt(e,e.return,s)}}function s0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ts(e.type)||e.tag===4}function Fh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||s0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ts(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function td(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=jn));else if(i!==4&&(i===27&&ts(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(td(e,t,n),e=e.sibling;e!==null;)td(e,t,n),e=e.sibling}function Du(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&ts(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Du(e,t,n),e=e.sibling;e!==null;)Du(e,t,n),e=e.sibling}function r0(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);le(t,i,n),t[se]=e,t[Re]=n}catch(r){mt(e,e.return,r)}}var xn=!1,zt=!1,Gh=!1,zy=typeof WeakSet=="function"?WeakSet:Set,Wt=null;function SR(e,t){if(e=e.containerInfo,od=Bu,e=KE(e),rm(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break t}var a=0,l=-1,u=-1,h=0,d=0,m=e,g=null;e:for(;;){for(var E;m!==n||s!==0&&m.nodeType!==3||(l=a+s),m!==r||i!==0&&m.nodeType!==3||(u=a+i),m.nodeType===3&&(a+=m.nodeValue.length),(E=m.firstChild)!==null;)g=m,m=E;for(;;){if(m===e)break e;if(g===n&&++h===s&&(l=a),g===r&&++d===i&&(u=a),(E=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=E}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ld={focusedElem:e,selectionRange:n},Bu=!1,Wt=t;Wt!==null;)if(t=Wt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Wt=e;else for(;Wt!==null;){switch(t=Wt,r=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&r!==null){e=void 0,n=t,s=r.memoizedProps,r=r.memoizedState,i=n.stateNode;try{var D=Ns(n.type,s);e=i.getSnapshotBeforeUpdate(D,r),i.__reactInternalSnapshotBeforeUpdate=e}catch(M){mt(n,n.return,M)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)cd(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":cd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(L(163))}if(e=t.sibling,e!==null){e.return=t.return,Wt=e;break}Wt=t.return}}function a0(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Pn(e,n),i&4&&Ko(5,n);break;case 1:if(Pn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(a){mt(n,n.return,a)}else{var s=Ns(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(a){mt(n,n.return,a)}}i&64&&e0(n),i&512&&no(n,n.return);break;case 3:if(Pn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{cT(e,t)}catch(a){mt(n,n.return,a)}}break;case 27:t===null&&i&4&&r0(n);case 26:case 5:Pn(e,n),t===null&&i&4&&i0(n),i&512&&no(n,n.return);break;case 12:Pn(e,n);break;case 31:Pn(e,n),i&4&&u0(e,n);break;case 13:Pn(e,n),i&4&&c0(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=VR.bind(null,n),ZR(e,n))));break;case 22:if(i=n.memoizedState!==null||xn,!i){t=t!==null&&t.memoizedState!==null||zt,s=xn;var r=zt;xn=i,(zt=t)&&!r?Un(e,n,(n.subtreeFlags&8772)!==0):Pn(e,n),xn=s,zt=r}break;case 30:break;default:Pn(e,n)}}function o0(e){var t=e.alternate;t!==null&&(e.alternate=null,o0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Wd(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ct=null,Se=!1;function Ln(e,t,n){for(n=n.child;n!==null;)l0(e,t,n),n=n.sibling}function l0(e,t,n){if(ke&&typeof ke.onCommitFiberUnmount=="function")try{ke.onCommitFiberUnmount(zo,n)}catch{}switch(n.tag){case 26:zt||En(n,t),Ln(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:zt||En(n,t);var i=Ct,s=Se;ts(n.type)&&(Ct=n.stateNode,Se=!1),Ln(e,t,n),ao(n.stateNode),Ct=i,Se=s;break;case 5:zt||En(n,t);case 6:if(i=Ct,s=Se,Ct=null,Ln(e,t,n),Ct=i,Se=s,Ct!==null)if(Se)try{(Ct.nodeType===9?Ct.body:Ct.nodeName==="HTML"?Ct.ownerDocument.body:Ct).removeChild(n.stateNode)}catch(r){mt(n,t,r)}else try{Ct.removeChild(n.stateNode)}catch(r){mt(n,t,r)}break;case 18:Ct!==null&&(Se?(e=Ct,Zy(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Gr(e)):Zy(Ct,n.stateNode));break;case 4:i=Ct,s=Se,Ct=n.stateNode.containerInfo,Se=!0,Ln(e,t,n),Ct=i,Se=s;break;case 0:case 11:case 14:case 15:Fi(2,n,t),zt||Fi(4,n,t),Ln(e,t,n);break;case 1:zt||(En(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&n0(n,t,i)),Ln(e,t,n);break;case 21:Ln(e,t,n);break;case 22:zt=(i=zt)||n.memoizedState!==null,Ln(e,t,n),zt=i;break;default:Ln(e,t,n)}}function u0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Gr(e)}catch(n){mt(t,t.return,n)}}}function c0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Gr(e)}catch(n){mt(t,t.return,n)}}function bR(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new zy),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new zy),t;default:throw Error(L(435,e.tag))}}function Ol(e,t){var n=bR(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=MR.bind(null,e,i);i.then(s,s)}})}function Te(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],r=e,a=t,l=a;t:for(;l!==null;){switch(l.tag){case 27:if(ts(l.type)){Ct=l.stateNode,Se=!1;break t}break;case 5:Ct=l.stateNode,Se=!1;break t;case 3:case 4:Ct=l.stateNode.containerInfo,Se=!0;break t}l=l.return}if(Ct===null)throw Error(L(160));l0(r,a,s),Ct=null,Se=!1,r=s.alternate,r!==null&&(r.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)h0(t,e),t=t.sibling}var an=null;function h0(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Te(t,e),Ae(e),i&4&&(Fi(3,e,e.return),Ko(3,e),Fi(5,e,e.return));break;case 1:Te(t,e),Ae(e),i&512&&(zt||n===null||En(n,n.return)),i&64&&xn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=an;if(Te(t,e),Ae(e),i&512&&(zt||n===null||En(n,n.return)),i&4){var r=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;e:switch(i){case"title":r=s.getElementsByTagName("title")[0],(!r||r[qo]||r[se]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=s.createElement(i),s.head.insertBefore(r,s.querySelector("head > title"))),le(r,i,n),r[se]=e,te(r),i=r;break t;case"link":var a=r_("link","href",s).get(i+(n.href||""));if(a){for(var l=0;l<a.length;l++)if(r=a[l],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(l,1);break e}}r=s.createElement(i),le(r,i,n),s.head.appendChild(r);break;case"meta":if(a=r_("meta","content",s).get(i+(n.content||""))){for(l=0;l<a.length;l++)if(r=a[l],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(l,1);break e}}r=s.createElement(i),le(r,i,n),s.head.appendChild(r);break;default:throw Error(L(468,i))}r[se]=e,te(r),i=r}e.stateNode=i}else a_(s,e.type,e.stateNode);else e.stateNode=s_(s,i,e.memoizedProps);else r!==i?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,i===null?a_(s,e.type,e.stateNode):s_(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Hh(e,e.memoizedProps,n.memoizedProps)}break;case 27:Te(t,e),Ae(e),i&512&&(zt||n===null||En(n,n.return)),n!==null&&i&4&&Hh(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Te(t,e),Ae(e),i&512&&(zt||n===null||En(n,n.return)),e.flags&32){s=e.stateNode;try{kr(s,"")}catch(D){mt(e,e.return,D)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,Hh(e,s,n!==null?n.memoizedProps:s)),i&1024&&(Gh=!0);break;case 6:if(Te(t,e),Ae(e),i&4){if(e.stateNode===null)throw Error(L(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(D){mt(e,e.return,D)}}break;case 3:if(tu=null,s=an,an=ku(t.containerInfo),Te(t,e),an=s,Ae(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Gr(t.containerInfo)}catch(D){mt(e,e.return,D)}Gh&&(Gh=!1,f0(e));break;case 4:i=an,an=ku(e.stateNode.containerInfo),Te(t,e),Ae(e),an=i;break;case 12:Te(t,e),Ae(e);break;case 31:Te(t,e),Ae(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ol(e,i)));break;case 13:Te(t,e),Ae(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(bc=Ue()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ol(e,i)));break;case 22:s=e.memoizedState!==null;var u=n!==null&&n.memoizedState!==null,h=xn,d=zt;if(xn=h||s,zt=d||u,Te(t,e),zt=d,xn=h,Ae(e),i&8192)t:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||u||xn||zt||ms(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){u=n=t;try{if(r=u.stateNode,s)a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none";else{l=u.stateNode;var m=u.memoizedProps.style,g=m!=null&&m.hasOwnProperty("display")?m.display:null;l.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(D){mt(u,u.return,D)}}}else if(t.tag===6){if(n===null){u=t;try{u.stateNode.nodeValue=s?"":u.memoizedProps}catch(D){mt(u,u.return,D)}}}else if(t.tag===18){if(n===null){u=t;try{var E=u.stateNode;s?Wy(E,!0):Wy(u.stateNode,!1)}catch(D){mt(u,u.return,D)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Ol(e,n))));break;case 19:Te(t,e),Ae(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ol(e,i)));break;case 30:break;case 21:break;default:Te(t,e),Ae(e)}}function Ae(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(s0(i)){n=i;break}i=i.return}if(n==null)throw Error(L(160));switch(n.tag){case 27:var s=n.stateNode,r=Fh(e);Du(e,r,s);break;case 5:var a=n.stateNode;n.flags&32&&(kr(a,""),n.flags&=-33);var l=Fh(e);Du(e,l,a);break;case 3:case 4:var u=n.stateNode.containerInfo,h=Fh(e);td(e,h,u);break;default:throw Error(L(161))}}catch(d){mt(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function f0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;f0(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Pn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)a0(e,t.alternate,t),t=t.sibling}function ms(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Fi(4,t,t.return),ms(t);break;case 1:En(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&n0(t,t.return,n),ms(t);break;case 27:ao(t.stateNode);case 26:case 5:En(t,t.return),ms(t);break;case 22:t.memoizedState===null&&ms(t);break;case 30:ms(t);break;default:ms(t)}e=e.sibling}}function Un(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,r=t,a=r.flags;switch(r.tag){case 0:case 11:case 15:Un(s,r,n),Ko(4,r);break;case 1:if(Un(s,r,n),i=r,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(h){mt(i,i.return,h)}if(i=r,s=i.updateQueue,s!==null){var l=i.stateNode;try{var u=s.shared.hiddenCallbacks;if(u!==null)for(s.shared.hiddenCallbacks=null,s=0;s<u.length;s++)uT(u[s],l)}catch(h){mt(i,i.return,h)}}n&&a&64&&e0(r),no(r,r.return);break;case 27:r0(r);case 26:case 5:Un(s,r,n),n&&i===null&&a&4&&i0(r),no(r,r.return);break;case 12:Un(s,r,n);break;case 31:Un(s,r,n),n&&a&4&&u0(s,r);break;case 13:Un(s,r,n),n&&a&4&&c0(s,r);break;case 22:r.memoizedState===null&&Un(s,r,n),no(r,r.return);break;case 30:break;default:Un(s,r,n)}t=t.sibling}}function Om(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Fo(n))}function Vm(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Fo(e))}function rn(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)d0(e,t,n,i),t=t.sibling}function d0(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:rn(e,t,n,i),s&2048&&Ko(9,t);break;case 1:rn(e,t,n,i);break;case 3:rn(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Fo(e)));break;case 12:if(s&2048){rn(e,t,n,i),e=t.stateNode;try{var r=t.memoizedProps,a=r.id,l=r.onPostCommit;typeof l=="function"&&l(a,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(u){mt(t,t.return,u)}}else rn(e,t,n,i);break;case 31:rn(e,t,n,i);break;case 13:rn(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,a=t.alternate,t.memoizedState!==null?r._visibility&2?rn(e,t,n,i):io(e,t):r._visibility&2?rn(e,t,n,i):(r._visibility|=2,nr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&Om(a,t);break;case 24:rn(e,t,n,i),s&2048&&Vm(t.alternate,t);break;default:rn(e,t,n,i)}}function nr(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,a=t,l=n,u=i,h=a.flags;switch(a.tag){case 0:case 11:case 15:nr(r,a,l,u,s),Ko(8,a);break;case 23:break;case 22:var d=a.stateNode;a.memoizedState!==null?d._visibility&2?nr(r,a,l,u,s):io(r,a):(d._visibility|=2,nr(r,a,l,u,s)),s&&h&2048&&Om(a.alternate,a);break;case 24:nr(r,a,l,u,s),s&&h&2048&&Vm(a.alternate,a);break;default:nr(r,a,l,u,s)}t=t.sibling}}function io(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:io(n,i),s&2048&&Om(i.alternate,i);break;case 24:io(n,i),s&2048&&Vm(i.alternate,i);break;default:io(n,i)}t=t.sibling}}var Ba=8192;function tr(e,t,n){if(e.subtreeFlags&Ba)for(e=e.child;e!==null;)m0(e,t,n),e=e.sibling}function m0(e,t,n){switch(e.tag){case 26:tr(e,t,n),e.flags&Ba&&e.memoizedState!==null&&c1(n,an,e.memoizedState,e.memoizedProps);break;case 5:tr(e,t,n);break;case 3:case 4:var i=an;an=ku(e.stateNode.containerInfo),tr(e,t,n),an=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Ba,Ba=16777216,tr(e,t,n),Ba=i):tr(e,t,n));break;default:tr(e,t,n)}}function g0(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ma(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Wt=i,y0(i,e)}g0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)p0(e),e=e.sibling}function p0(e){switch(e.tag){case 0:case 11:case 15:Ma(e),e.flags&2048&&Fi(9,e,e.return);break;case 3:Ma(e);break;case 12:Ma(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Zl(e)):Ma(e);break;default:Ma(e)}}function Zl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Wt=i,y0(i,e)}g0(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Fi(8,t,t.return),Zl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Zl(t));break;default:Zl(t)}e=e.sibling}}function y0(e,t){for(;Wt!==null;){var n=Wt;switch(n.tag){case 0:case 11:case 15:Fi(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Fo(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Wt=i;else t:for(n=e;Wt!==null;){i=Wt;var s=i.sibling,r=i.return;if(o0(i),i===n){Wt=null;break t}if(s!==null){s.return=r,Wt=s;break t}Wt=r}}}var wR={getCacheForType:function(e){var t=oe(Bt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return oe(Bt).controller.signal}},IR=typeof WeakMap=="function"?WeakMap:Map,ct=0,_t=null,it=null,ot=0,dt=0,Oe=null,wi=!1,na=!1,Mm=!1,Wn=0,Vt=0,Gi=0,Ss=0,Lm=0,Pe=0,jr=0,so=null,be=null,ed=!1,bc=0,_0=0,Nu=1/0,Ou=null,Mi=null,Kt=0,Li=null,qr=null,Yn=0,nd=0,id=null,v0=null,ro=0,sd=null;function ze(){return ct&2&&ot!==0?ot&-ot:X.T!==null?Um():CE()}function E0(){if(Pe===0)if(!(ot&536870912)||lt){var e=Sl;Sl<<=1,!(Sl&3932160)&&(Sl=262144),Pe=e}else Pe=536870912;return e=qe.current,e!==null&&(e.flags|=32),Pe}function Ie(e,t,n){(e===_t&&(dt===2||dt===9)||e.cancelPendingCommit!==null)&&(Hr(e,0),Ii(e,ot,Pe,!1)),jo(e,n),(!(ct&2)||e!==_t)&&(e===_t&&(!(ct&2)&&(Ss|=n),Vt===4&&Ii(e,ot,Pe,!1)),Nn(e))}function T0(e,t,n){if(ct&6)throw Error(L(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Bo(e,t),s=i?DR(e,t):Kh(e,t,!0),r=i;do{if(s===0){na&&!i&&Ii(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!RR(n)){s=Kh(e,t,!1),r=!1;continue}if(s===2){if(r=t,e.errorRecoveryDisabledLanes&r)var a=0;else a=e.pendingLanes&-536870913,a=a!==0?a:a&536870912?536870912:0;if(a!==0){t=a;t:{var l=e;s=so;var u=l.current.memoizedState.isDehydrated;if(u&&(Hr(l,a).flags|=256),a=Kh(l,a,!1),a!==2){if(Mm&&!u){l.errorRecoveryDisabledLanes|=r,Ss|=r,s=4;break t}r=be,be=s,r!==null&&(be===null?be=r:be.push.apply(be,r))}s=a}if(r=!1,s!==2)continue}}if(s===1){Hr(e,0),Ii(e,t,0,!0);break}t:{switch(i=e,r=s,r){case 0:case 1:throw Error(L(345));case 4:if((t&4194048)!==t)break;case 6:Ii(i,t,Pe,!wi);break t;case 2:be=null;break;case 3:case 5:break;default:throw Error(L(329))}if((t&62914560)===t&&(s=bc+300-Ue(),10<s)){if(Ii(i,t,Pe,!wi),dc(i,0,!0)!==0)break t;Yn=t,i.timeoutHandle=j0(By.bind(null,i,n,be,Ou,ed,t,Pe,Ss,jr,wi,r,"Throttled",-0,0),s);break t}By(i,n,be,Ou,ed,t,Pe,Ss,jr,wi,r,null,-0,0)}}break}while(!0);Nn(e)}function By(e,t,n,i,s,r,a,l,u,h,d,m,g,E){if(e.timeoutHandle=-1,m=t.subtreeFlags,m&8192||(m&16785408)===16785408){m={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:jn},m0(t,r,m);var D=(r&62914560)===r?bc-Ue():(r&4194048)===r?_0-Ue():0;if(D=h1(m,D),D!==null){Yn=r,e.cancelPendingCommit=D(qy.bind(null,e,t,r,n,i,s,a,l,u,d,m,null,g,E)),Ii(e,r,a,!h);return}}qy(e,t,r,n,i,s,a,l,u)}function RR(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],r=s.getSnapshot;s=s.value;try{if(!je(r(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ii(e,t,n,i){t&=~Lm,t&=~Ss,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var r=31-xe(s),a=1<<r;i[r]=-1,s&=~a}n!==0&&wE(e,n,t)}function wc(){return ct&6?!0:(Yo(0),!1)}function Pm(){if(it!==null){if(dt===0)var e=it.return;else e=it,qn=qs=null,Em(e),br=null,Eo=0,e=it;for(;e!==null;)t0(e.alternate,e),e=e.return;it=null}}function Hr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,YR(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Yn=0,Pm(),_t=e,it=n=Gn(e.current,null),ot=t,dt=0,Oe=null,wi=!1,na=Bo(e,t),Mm=!1,jr=Pe=Lm=Ss=Gi=Vt=0,be=so=null,ed=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-xe(i),r=1<<s;t|=e[s],i&=~r}return Wn=t,yc(),n}function A0(e,t){W=null,X.H=Ao,t===ea||t===vc?(t=_y(),dt=3):t===dm?(t=_y(),dt=4):dt=t===Dm?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Oe=t,it===null&&(Vt=1,Ru(e,Xe(t,e.current)))}function S0(){var e=qe.current;return e===null?!0:(ot&4194048)===ot?We===null:(ot&62914560)===ot||ot&536870912?e===We:!1}function b0(){var e=X.H;return X.H=Ao,e===null?Ao:e}function w0(){var e=X.A;return X.A=wR,e}function Vu(){Vt=4,wi||(ot&4194048)!==ot&&qe.current!==null||(na=!0),!(Gi&134217727)&&!(Ss&134217727)||_t===null||Ii(_t,ot,Pe,!1)}function Kh(e,t,n){var i=ct;ct|=2;var s=b0(),r=w0();(_t!==e||ot!==t)&&(Ou=null,Hr(e,t)),t=!1;var a=Vt;t:do try{if(dt!==0&&it!==null){var l=it,u=Oe;switch(dt){case 8:Pm(),a=6;break t;case 3:case 2:case 9:case 6:qe.current===null&&(t=!0);var h=dt;if(dt=0,Oe=null,vr(e,l,u,h),n&&na){a=0;break t}break;default:h=dt,dt=0,Oe=null,vr(e,l,u,h)}}CR(),a=Vt;break}catch(d){A0(e,d)}while(!0);return t&&e.shellSuspendCounter++,qn=qs=null,ct=i,X.H=s,X.A=r,it===null&&(_t=null,ot=0,yc()),a}function CR(){for(;it!==null;)I0(it)}function DR(e,t){var n=ct;ct|=2;var i=b0(),s=w0();_t!==e||ot!==t?(Ou=null,Nu=Ue()+500,Hr(e,t)):na=Bo(e,t);t:do try{if(dt!==0&&it!==null){t=it;var r=Oe;e:switch(dt){case 1:dt=0,Oe=null,vr(e,t,r,1);break;case 2:case 9:if(yy(r)){dt=0,Oe=null,jy(t);break}t=function(){dt!==2&&dt!==9||_t!==e||(dt=7),Nn(e)},r.then(t,t);break t;case 3:dt=7;break t;case 4:dt=5;break t;case 7:yy(r)?(dt=0,Oe=null,jy(t)):(dt=0,Oe=null,vr(e,t,r,7));break;case 5:var a=null;switch(it.tag){case 26:a=it.memoizedState;case 5:case 27:var l=it;if(a?K0(a):l.stateNode.complete){dt=0,Oe=null;var u=l.sibling;if(u!==null)it=u;else{var h=l.return;h!==null?(it=h,Ic(h)):it=null}break e}}dt=0,Oe=null,vr(e,t,r,5);break;case 6:dt=0,Oe=null,vr(e,t,r,6);break;case 8:Pm(),Vt=6;break t;default:throw Error(L(462))}}NR();break}catch(d){A0(e,d)}while(!0);return qn=qs=null,X.H=i,X.A=s,ct=n,it!==null?0:(_t=null,ot=0,yc(),Vt)}function NR(){for(;it!==null&&!Ww();)I0(it)}function I0(e){var t=WT(e.alternate,e,Wn);e.memoizedProps=e.pendingProps,t===null?Ic(e):it=t}function jy(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Ly(n,t,t.pendingProps,t.type,void 0,ot);break;case 11:t=Ly(n,t,t.pendingProps,t.type.render,t.ref,ot);break;case 5:Em(t);default:t0(n,t),t=it=tT(t,Wn),t=WT(n,t,Wn)}e.memoizedProps=e.pendingProps,t===null?Ic(e):it=t}function vr(e,t,n,i){qn=qs=null,Em(t),br=null,Eo=0;var s=t.return;try{if(_R(e,s,t,n,ot)){Vt=1,Ru(e,Xe(n,e.current)),it=null;return}}catch(r){if(s!==null)throw it=s,r;Vt=1,Ru(e,Xe(n,e.current)),it=null;return}t.flags&32768?(lt||i===1?e=!0:na||ot&536870912?e=!1:(wi=e=!0,(i===2||i===9||i===3||i===6)&&(i=qe.current,i!==null&&i.tag===13&&(i.flags|=16384))),R0(t,e)):Ic(t)}function Ic(e){var t=e;do{if(t.flags&32768){R0(t,wi);return}e=t.return;var n=TR(t.alternate,t,Wn);if(n!==null){it=n;return}if(t=t.sibling,t!==null){it=t;return}it=t=e}while(t!==null);Vt===0&&(Vt=5)}function R0(e,t){do{var n=AR(e.alternate,e);if(n!==null){n.flags&=32767,it=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){it=e;return}it=e=n}while(e!==null);Vt=6,it=null}function qy(e,t,n,i,s,r,a,l,u){e.cancelPendingCommit=null;do Rc();while(Kt!==0);if(ct&6)throw Error(L(327));if(t!==null){if(t===e.current)throw Error(L(177));if(r=t.lanes|t.childLanes,r|=am,uI(e,n,r,a,l,u),e===_t&&(it=_t=null,ot=0),qr=t,Li=e,Yn=n,nd=r,id=s,v0=i,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,LR(pu,function(){return V0(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,t.subtreeFlags&13878||i){i=X.T,X.T=null,s=ht.p,ht.p=2,a=ct,ct|=4;try{SR(e,t,n)}finally{ct=a,ht.p=s,X.T=i}}Kt=1,C0(),D0(),N0()}}function C0(){if(Kt===1){Kt=0;var e=Li,t=qr,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=X.T,X.T=null;var i=ht.p;ht.p=2;var s=ct;ct|=4;try{h0(t,e);var r=ld,a=KE(e.containerInfo),l=r.focusedElem,u=r.selectionRange;if(a!==l&&l&&l.ownerDocument&&GE(l.ownerDocument.documentElement,l)){if(u!==null&&rm(l)){var h=u.start,d=u.end;if(d===void 0&&(d=h),"selectionStart"in l)l.selectionStart=h,l.selectionEnd=Math.min(d,l.value.length);else{var m=l.ownerDocument||document,g=m&&m.defaultView||window;if(g.getSelection){var E=g.getSelection(),D=l.textContent.length,M=Math.min(u.start,D),k=u.end===void 0?M:Math.min(u.end,D);!E.extend&&M>k&&(a=k,k=M,M=a);var b=cy(l,M),T=cy(l,k);if(b&&T&&(E.rangeCount!==1||E.anchorNode!==b.node||E.anchorOffset!==b.offset||E.focusNode!==T.node||E.focusOffset!==T.offset)){var I=m.createRange();I.setStart(b.node,b.offset),E.removeAllRanges(),M>k?(E.addRange(I),E.extend(T.node,T.offset)):(I.setEnd(T.node,T.offset),E.addRange(I))}}}}for(m=[],E=l;E=E.parentNode;)E.nodeType===1&&m.push({element:E,left:E.scrollLeft,top:E.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<m.length;l++){var V=m[l];V.element.scrollLeft=V.left,V.element.scrollTop=V.top}}Bu=!!od,ld=od=null}finally{ct=s,ht.p=i,X.T=n}}e.current=t,Kt=2}}function D0(){if(Kt===2){Kt=0;var e=Li,t=qr,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=X.T,X.T=null;var i=ht.p;ht.p=2;var s=ct;ct|=4;try{a0(e,t.alternate,t)}finally{ct=s,ht.p=i,X.T=n}}Kt=3}}function N0(){if(Kt===4||Kt===3){Kt=0,tI();var e=Li,t=qr,n=Yn,i=v0;t.subtreeFlags&10256||t.flags&10256?Kt=5:(Kt=0,qr=Li=null,O0(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(Mi=null),Zd(n),t=t.stateNode,ke&&typeof ke.onCommitFiberRoot=="function")try{ke.onCommitFiberRoot(zo,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=X.T,s=ht.p,ht.p=2,X.T=null;try{for(var r=e.onRecoverableError,a=0;a<i.length;a++){var l=i[a];r(l.value,{componentStack:l.stack})}}finally{X.T=t,ht.p=s}}Yn&3&&Rc(),Nn(e),s=e.pendingLanes,n&261930&&s&42?e===sd?ro++:(ro=0,sd=e):ro=0,Yo(0)}}function O0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Fo(t)))}function Rc(){return C0(),D0(),N0(),V0()}function V0(){if(Kt!==5)return!1;var e=Li,t=nd;nd=0;var n=Zd(Yn),i=X.T,s=ht.p;try{ht.p=32>n?32:n,X.T=null,n=id,id=null;var r=Li,a=Yn;if(Kt=0,qr=Li=null,Yn=0,ct&6)throw Error(L(331));var l=ct;if(ct|=4,p0(r.current),d0(r,r.current,a,n),ct=l,Yo(0,!1),ke&&typeof ke.onPostCommitFiberRoot=="function")try{ke.onPostCommitFiberRoot(zo,r)}catch{}return!0}finally{ht.p=s,X.T=i,O0(e,t)}}function Hy(e,t,n){t=Xe(n,t),t=Jf(e.stateNode,t,2),e=Vi(e,t,2),e!==null&&(jo(e,2),Nn(e))}function mt(e,t,n){if(e.tag===3)Hy(e,e,n);else for(;t!==null;){if(t.tag===3){Hy(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Mi===null||!Mi.has(i))){e=Xe(n,e),n=YT(2),i=Vi(t,n,2),i!==null&&(QT(n,i,t,e),jo(i,2),Nn(i));break}}t=t.return}}function Yh(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new IR;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(Mm=!0,s.add(n),e=OR.bind(null,e,t,n),t.then(e,e))}function OR(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,_t===e&&(ot&n)===n&&(Vt===4||Vt===3&&(ot&62914560)===ot&&300>Ue()-bc?!(ct&2)&&Hr(e,0):Lm|=n,jr===ot&&(jr=0)),Nn(e)}function M0(e,t){t===0&&(t=bE()),e=js(e,t),e!==null&&(jo(e,t),Nn(e))}function VR(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),M0(e,n)}function MR(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(L(314))}i!==null&&i.delete(t),M0(e,n)}function LR(e,t){return $d(e,t)}var Mu=null,ir=null,rd=!1,Lu=!1,Qh=!1,Ri=0;function Nn(e){e!==ir&&e.next===null&&(ir===null?Mu=ir=e:ir=ir.next=e),Lu=!0,rd||(rd=!0,UR())}function Yo(e,t){if(!Qh&&Lu){Qh=!0;do for(var n=!1,i=Mu;i!==null;){if(e!==0){var s=i.pendingLanes;if(s===0)var r=0;else{var a=i.suspendedLanes,l=i.pingedLanes;r=(1<<31-xe(42|e)+1)-1,r&=s&~(a&~l),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,Fy(i,r))}else r=ot,r=dc(i,i===_t?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(r&3)||Bo(i,r)||(n=!0,Fy(i,r));i=i.next}while(n);Qh=!1}}function PR(){L0()}function L0(){Lu=rd=!1;var e=0;Ri!==0&&KR()&&(e=Ri);for(var t=Ue(),n=null,i=Mu;i!==null;){var s=i.next,r=P0(i,t);r===0?(i.next=null,n===null?Mu=s:n.next=s,s===null&&(ir=n)):(n=i,(e!==0||r&3)&&(Lu=!0)),i=s}Kt!==0&&Kt!==5||Yo(e),Ri!==0&&(Ri=0)}function P0(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var a=31-xe(r),l=1<<a,u=s[a];u===-1?(!(l&n)||l&i)&&(s[a]=lI(l,t)):u<=t&&(e.expiredLanes|=l),r&=~l}if(t=_t,n=ot,n=dc(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(dt===2||dt===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Ah(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Bo(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Ah(i),Zd(n)){case 2:case 8:n=AE;break;case 32:n=pu;break;case 268435456:n=SE;break;default:n=pu}return i=U0.bind(null,e),n=$d(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Ah(i),e.callbackPriority=2,e.callbackNode=null,2}function U0(e,t){if(Kt!==0&&Kt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Rc()&&e.callbackNode!==n)return null;var i=ot;return i=dc(e,e===_t?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(T0(e,i,t),P0(e,Ue()),e.callbackNode!=null&&e.callbackNode===n?U0.bind(null,e):null)}function Fy(e,t){if(Rc())return null;T0(e,t,!0)}function UR(){QR(function(){ct&6?$d(TE,PR):L0()})}function Um(){if(Ri===0){var e=xr;e===0&&(e=Al,Al<<=1,!(Al&261888)&&(Al=256)),Ri=e}return Ri}function Gy(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Hl(""+e)}function Ky(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function kR(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var r=Gy((s[Re]||null).action),a=i.submitter;a&&(t=(t=a[Re]||null)?Gy(t.formAction):a.getAttribute("formAction"),t!==null&&(r=t,a=null));var l=new mc("action","action",null,i,s);e.push({event:l,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ri!==0){var u=a?Ky(s,a):new FormData(s);Xf(n,{pending:!0,data:u,method:s.method,action:r},null,u)}}else typeof r=="function"&&(l.preventDefault(),u=a?Ky(s,a):new FormData(s),Xf(n,{pending:!0,data:u,method:s.method,action:r},r,u))},currentTarget:s}]})}}for(var Xh=0;Xh<kf.length;Xh++){var $h=kf[Xh],xR=$h.toLowerCase(),zR=$h[0].toUpperCase()+$h.slice(1);dn(xR,"on"+zR)}dn(QE,"onAnimationEnd");dn(XE,"onAnimationIteration");dn($E,"onAnimationStart");dn("dblclick","onDoubleClick");dn("focusin","onFocus");dn("focusout","onBlur");dn(eR,"onTransitionRun");dn(nR,"onTransitionStart");dn(iR,"onTransitionCancel");dn(JE,"onTransitionEnd");Ur("onMouseEnter",["mouseout","mouseover"]);Ur("onMouseLeave",["mouseout","mouseover"]);Ur("onPointerEnter",["pointerout","pointerover"]);Ur("onPointerLeave",["pointerout","pointerover"]);xs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xs("onBeforeInput",["compositionend","keypress","textInput","paste"]);xs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),BR=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(So));function k0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var r=void 0;if(t)for(var a=i.length-1;0<=a;a--){var l=i[a],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==r&&s.isPropagationStopped())break t;r=l,s.currentTarget=h;try{r(s)}catch(d){_u(d)}s.currentTarget=null,r=u}else for(a=0;a<i.length;a++){if(l=i[a],u=l.instance,h=l.currentTarget,l=l.listener,u!==r&&s.isPropagationStopped())break t;r=l,s.currentTarget=h;try{r(s)}catch(d){_u(d)}s.currentTarget=null,r=u}}}}function nt(e,t){var n=t[Df];n===void 0&&(n=t[Df]=new Set);var i=e+"__bubble";n.has(i)||(x0(t,e,2,!1),n.add(i))}function Jh(e,t,n){var i=0;t&&(i|=4),x0(n,e,i,t)}var Vl="_reactListening"+Math.random().toString(36).slice(2);function km(e){if(!e[Vl]){e[Vl]=!0,DE.forEach(function(n){n!=="selectionchange"&&(BR.has(n)||Jh(n,!1,e),Jh(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vl]||(t[Vl]=!0,Jh("selectionchange",!1,t))}}function x0(e,t,n,i){switch(J0(t)){case 2:var s=m1;break;case 8:s=g1;break;default:s=jm}n=s.bind(null,t,n,e),s=void 0,!Lf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Zh(e,t,n,i,s){var r=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var l=i.stateNode.containerInfo;if(l===s)break;if(a===4)for(a=i.return;a!==null;){var u=a.tag;if((u===3||u===4)&&a.stateNode.containerInfo===s)return;a=a.return}for(;l!==null;){if(a=cr(l),a===null)return;if(u=a.tag,u===5||u===6||u===26||u===27){i=r=a;continue t}l=l.parentNode}}i=i.return}kE(function(){var h=r,d=em(n),m=[];t:{var g=ZE.get(e);if(g!==void 0){var E=mc,D=e;switch(e){case"keypress":if(Gl(n)===0)break t;case"keydown":case"keyup":E=MI;break;case"focusin":D="focus",E=Rh;break;case"focusout":D="blur",E=Rh;break;case"beforeblur":case"afterblur":E=Rh;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=ty;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=TI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=UI;break;case QE:case XE:case $E:E=bI;break;case JE:E=xI;break;case"scroll":case"scrollend":E=vI;break;case"wheel":E=BI;break;case"copy":case"cut":case"paste":E=II;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=ny;break;case"toggle":case"beforetoggle":E=qI}var M=(t&4)!==0,k=!M&&(e==="scroll"||e==="scrollend"),b=M?g!==null?g+"Capture":null:g;M=[];for(var T=h,I;T!==null;){var V=T;if(I=V.stateNode,V=V.tag,V!==5&&V!==26&&V!==27||I===null||b===null||(V=go(T,b),V!=null&&M.push(bo(T,V,I))),k)break;T=T.return}0<M.length&&(g=new E(g,D,null,n,d),m.push({event:g,listeners:M}))}}if(!(t&7)){t:{if(g=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",g&&n!==Mf&&(D=n.relatedTarget||n.fromElement)&&(cr(D)||D[Zr]))break t;if((E||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,E?(D=n.relatedTarget||n.toElement,E=h,D=D?cr(D):null,D!==null&&(k=xo(D),M=D.tag,D!==k||M!==5&&M!==27&&M!==6)&&(D=null)):(E=null,D=h),E!==D)){if(M=ty,V="onMouseLeave",b="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(M=ny,V="onPointerLeave",b="onPointerEnter",T="pointer"),k=E==null?g:xa(E),I=D==null?g:xa(D),g=new M(V,T+"leave",E,n,d),g.target=k,g.relatedTarget=I,V=null,cr(d)===h&&(M=new M(b,T+"enter",D,n,d),M.target=I,M.relatedTarget=k,V=M),k=V,E&&D)e:{for(M=jR,b=E,T=D,I=0,V=b;V;V=M(V))I++;V=0;for(var B=T;B;B=M(B))V++;for(;0<I-V;)b=M(b),I--;for(;0<V-I;)T=M(T),V--;for(;I--;){if(b===T||T!==null&&b===T.alternate){M=b;break e}b=M(b),T=M(T)}M=null}else M=null;E!==null&&Yy(m,g,E,M,!1),D!==null&&k!==null&&Yy(m,k,D,M,!0)}}t:{if(g=h?xa(h):window,E=g.nodeName&&g.nodeName.toLowerCase(),E==="select"||E==="input"&&g.type==="file")var F=ay;else if(ry(g))if(HE)F=ZI;else{F=$I;var _=XI}else E=g.nodeName,!E||E.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?h&&tm(h.elementType)&&(F=ay):F=JI;if(F&&(F=F(e,h))){qE(m,F,n,d);break t}_&&_(e,g,h),e==="focusout"&&h&&g.type==="number"&&h.memoizedProps.value!=null&&Vf(g,"number",g.value)}switch(_=h?xa(h):window,e){case"focusin":(ry(_)||_.contentEditable==="true")&&(dr=_,Pf=h,$a=null);break;case"focusout":$a=Pf=dr=null;break;case"mousedown":Uf=!0;break;case"contextmenu":case"mouseup":case"dragend":Uf=!1,hy(m,n,d);break;case"selectionchange":if(tR)break;case"keydown":case"keyup":hy(m,n,d)}var y;if(sm)t:{switch(e){case"compositionstart":var v="onCompositionStart";break t;case"compositionend":v="onCompositionEnd";break t;case"compositionupdate":v="onCompositionUpdate";break t}v=void 0}else fr?BE(e,n)&&(v="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(zE&&n.locale!=="ko"&&(fr||v!=="onCompositionStart"?v==="onCompositionEnd"&&fr&&(y=xE()):(bi=d,nm="value"in bi?bi.value:bi.textContent,fr=!0)),_=Pu(h,v),0<_.length&&(v=new ey(v,e,null,n,d),m.push({event:v,listeners:_}),y?v.data=y:(y=jE(n),y!==null&&(v.data=y)))),(y=FI?GI(e,n):KI(e,n))&&(v=Pu(h,"onBeforeInput"),0<v.length&&(_=new ey("onBeforeInput","beforeinput",null,n,d),m.push({event:_,listeners:v}),_.data=y)),kR(m,e,h,n,d)}k0(m,t)})}function bo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Pu(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,r=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||r===null||(s=go(e,n),s!=null&&i.unshift(bo(e,s,r)),s=go(e,t),s!=null&&i.push(bo(e,s,r))),e.tag===3)return i;e=e.return}return[]}function jR(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Yy(e,t,n,i,s){for(var r=t._reactName,a=[];n!==null&&n!==i;){var l=n,u=l.alternate,h=l.stateNode;if(l=l.tag,u!==null&&u===i)break;l!==5&&l!==26&&l!==27||h===null||(u=h,s?(h=go(n,r),h!=null&&a.unshift(bo(n,h,u))):s||(h=go(n,r),h!=null&&a.push(bo(n,h,u)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var qR=/\r\n?/g,HR=/\u0000|\uFFFD/g;function Qy(e){return(typeof e=="string"?e:""+e).replace(qR,`
`).replace(HR,"")}function z0(e,t){return t=Qy(t),Qy(e)===t}function gt(e,t,n,i,s,r){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||kr(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&kr(e,""+i);break;case"className":wl(e,"class",i);break;case"tabIndex":wl(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":wl(e,n,i);break;case"style":UE(e,i,r);break;case"data":if(t!=="object"){wl(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Hl(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&gt(e,t,"name",s.name,s,null),gt(e,t,"formEncType",s.formEncType,s,null),gt(e,t,"formMethod",s.formMethod,s,null),gt(e,t,"formTarget",s.formTarget,s,null)):(gt(e,t,"encType",s.encType,s,null),gt(e,t,"method",s.method,s,null),gt(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Hl(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=jn);break;case"onScroll":i!=null&&nt("scroll",e);break;case"onScrollEnd":i!=null&&nt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(L(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(L(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Hl(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":nt("beforetoggle",e),nt("toggle",e),ql(e,"popover",i);break;case"xlinkActuate":Vn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Vn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Vn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Vn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Vn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Vn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Vn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Vn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Vn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":ql(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=yI.get(n)||n,ql(e,n,i))}}function ad(e,t,n,i,s,r){switch(n){case"style":UE(e,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(L(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(L(60));e.innerHTML=n}}break;case"children":typeof i=="string"?kr(e,i):(typeof i=="number"||typeof i=="bigint")&&kr(e,""+i);break;case"onScroll":i!=null&&nt("scroll",e);break;case"onScrollEnd":i!=null&&nt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=jn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!NE.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),r=e[Re]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,s),typeof i=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):ql(e,n,i)}}}function le(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":nt("error",e),nt("load",e);var i=!1,s=!1,r;for(r in n)if(n.hasOwnProperty(r)){var a=n[r];if(a!=null)switch(r){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(L(137,t));default:gt(e,t,r,a,n,null)}}s&&gt(e,t,"srcSet",n.srcSet,n,null),i&&gt(e,t,"src",n.src,n,null);return;case"input":nt("invalid",e);var l=r=a=s=null,u=null,h=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(d!=null)switch(i){case"name":s=d;break;case"type":a=d;break;case"checked":u=d;break;case"defaultChecked":h=d;break;case"value":r=d;break;case"defaultValue":l=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(L(137,t));break;default:gt(e,t,i,d,n,null)}}ME(e,r,l,u,h,a,s,!1);return;case"select":nt("invalid",e),i=a=r=null;for(s in n)if(n.hasOwnProperty(s)&&(l=n[s],l!=null))switch(s){case"value":r=l;break;case"defaultValue":a=l;break;case"multiple":i=l;default:gt(e,t,s,l,n,null)}t=r,n=a,e.multiple=!!i,t!=null?Tr(e,!!i,t,!1):n!=null&&Tr(e,!!i,n,!0);return;case"textarea":nt("invalid",e),r=s=i=null;for(a in n)if(n.hasOwnProperty(a)&&(l=n[a],l!=null))switch(a){case"value":i=l;break;case"defaultValue":s=l;break;case"children":r=l;break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(L(91));break;default:gt(e,t,a,l,n,null)}PE(e,i,s,r);return;case"option":for(u in n)if(n.hasOwnProperty(u)&&(i=n[u],i!=null))switch(u){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:gt(e,t,u,i,n,null)}return;case"dialog":nt("beforetoggle",e),nt("toggle",e),nt("cancel",e),nt("close",e);break;case"iframe":case"object":nt("load",e);break;case"video":case"audio":for(i=0;i<So.length;i++)nt(So[i],e);break;case"image":nt("error",e),nt("load",e);break;case"details":nt("toggle",e);break;case"embed":case"source":case"link":nt("error",e),nt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in n)if(n.hasOwnProperty(h)&&(i=n[h],i!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(L(137,t));default:gt(e,t,h,i,n,null)}return;default:if(tm(t)){for(d in n)n.hasOwnProperty(d)&&(i=n[d],i!==void 0&&ad(e,t,d,i,n,void 0));return}}for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null&&gt(e,t,l,i,n,null))}function FR(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,r=null,a=null,l=null,u=null,h=null,d=null;for(E in n){var m=n[E];if(n.hasOwnProperty(E)&&m!=null)switch(E){case"checked":break;case"value":break;case"defaultValue":u=m;default:i.hasOwnProperty(E)||gt(e,t,E,null,i,m)}}for(var g in i){var E=i[g];if(m=n[g],i.hasOwnProperty(g)&&(E!=null||m!=null))switch(g){case"type":r=E;break;case"name":s=E;break;case"checked":h=E;break;case"defaultChecked":d=E;break;case"value":a=E;break;case"defaultValue":l=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(L(137,t));break;default:E!==m&&gt(e,t,g,E,i,m)}}Of(e,a,l,u,h,d,r,s);return;case"select":E=a=l=g=null;for(r in n)if(u=n[r],n.hasOwnProperty(r)&&u!=null)switch(r){case"value":break;case"multiple":E=u;default:i.hasOwnProperty(r)||gt(e,t,r,null,i,u)}for(s in i)if(r=i[s],u=n[s],i.hasOwnProperty(s)&&(r!=null||u!=null))switch(s){case"value":g=r;break;case"defaultValue":l=r;break;case"multiple":a=r;default:r!==u&&gt(e,t,s,r,i,u)}t=l,n=a,i=E,g!=null?Tr(e,!!n,g,!1):!!i!=!!n&&(t!=null?Tr(e,!!n,t,!0):Tr(e,!!n,n?[]:"",!1));return;case"textarea":E=g=null;for(l in n)if(s=n[l],n.hasOwnProperty(l)&&s!=null&&!i.hasOwnProperty(l))switch(l){case"value":break;case"children":break;default:gt(e,t,l,null,i,s)}for(a in i)if(s=i[a],r=n[a],i.hasOwnProperty(a)&&(s!=null||r!=null))switch(a){case"value":g=s;break;case"defaultValue":E=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(L(91));break;default:s!==r&&gt(e,t,a,s,i,r)}LE(e,g,E);return;case"option":for(var D in n)if(g=n[D],n.hasOwnProperty(D)&&g!=null&&!i.hasOwnProperty(D))switch(D){case"selected":e.selected=!1;break;default:gt(e,t,D,null,i,g)}for(u in i)if(g=i[u],E=n[u],i.hasOwnProperty(u)&&g!==E&&(g!=null||E!=null))switch(u){case"selected":e.selected=g&&typeof g!="function"&&typeof g!="symbol";break;default:gt(e,t,u,g,i,E)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var M in n)g=n[M],n.hasOwnProperty(M)&&g!=null&&!i.hasOwnProperty(M)&&gt(e,t,M,null,i,g);for(h in i)if(g=i[h],E=n[h],i.hasOwnProperty(h)&&g!==E&&(g!=null||E!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(L(137,t));break;default:gt(e,t,h,g,i,E)}return;default:if(tm(t)){for(var k in n)g=n[k],n.hasOwnProperty(k)&&g!==void 0&&!i.hasOwnProperty(k)&&ad(e,t,k,void 0,i,g);for(d in i)g=i[d],E=n[d],!i.hasOwnProperty(d)||g===E||g===void 0&&E===void 0||ad(e,t,d,g,i,E);return}}for(var b in n)g=n[b],n.hasOwnProperty(b)&&g!=null&&!i.hasOwnProperty(b)&&gt(e,t,b,null,i,g);for(m in i)g=i[m],E=n[m],!i.hasOwnProperty(m)||g===E||g==null&&E==null||gt(e,t,m,g,i,E)}function Xy(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function GR(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],r=s.transferSize,a=s.initiatorType,l=s.duration;if(r&&l&&Xy(a)){for(a=0,l=s.responseEnd,i+=1;i<n.length;i++){var u=n[i],h=u.startTime;if(h>l)break;var d=u.transferSize,m=u.initiatorType;d&&Xy(m)&&(u=u.responseEnd,a+=d*(u<l?1:(l-h)/(u-h)))}if(--i,t+=8*(r+a)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var od=null,ld=null;function Uu(e){return e.nodeType===9?e:e.ownerDocument}function $y(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function B0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ud(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wh=null;function KR(){var e=window.event;return e&&e.type==="popstate"?e===Wh?!1:(Wh=e,!0):(Wh=null,!1)}var j0=typeof setTimeout=="function"?setTimeout:void 0,YR=typeof clearTimeout=="function"?clearTimeout:void 0,Jy=typeof Promise=="function"?Promise:void 0,QR=typeof queueMicrotask=="function"?queueMicrotask:typeof Jy<"u"?function(e){return Jy.resolve(null).then(e).catch(XR)}:j0;function XR(e){setTimeout(function(){throw e})}function ts(e){return e==="head"}function Zy(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),Gr(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")ao(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,ao(n);for(var r=n.firstChild;r;){var a=r.nextSibling,l=r.nodeName;r[qo]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=a}}else n==="body"&&ao(e.ownerDocument.body);n=s}while(n);Gr(t)}function Wy(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function cd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":cd(n),Wd(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function $R(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[qo])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=tn(e.nextSibling),e===null)break}return null}function JR(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=tn(e.nextSibling),e===null))return null;return e}function q0(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=tn(e.nextSibling),e===null))return null;return e}function hd(e){return e.data==="$?"||e.data==="$~"}function fd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ZR(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function tn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var dd=null;function t_(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return tn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function e_(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function H0(e,t,n){switch(t=Uu(n),e){case"html":if(e=t.documentElement,!e)throw Error(L(452));return e;case"head":if(e=t.head,!e)throw Error(L(453));return e;case"body":if(e=t.body,!e)throw Error(L(454));return e;default:throw Error(L(451))}}function ao(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Wd(e)}var nn=new Map,n_=new Set;function ku(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var si=ht.d;ht.d={f:WR,r:t1,D:e1,C:n1,L:i1,m:s1,X:a1,S:r1,M:o1};function WR(){var e=si.f(),t=wc();return e||t}function t1(e){var t=Wr(e);t!==null&&t.tag===5&&t.type==="form"?UT(t):si.r(e)}var ia=typeof document>"u"?null:document;function F0(e,t,n){var i=ia;if(i&&typeof t=="string"&&t){var s=Qe(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),n_.has(s)||(n_.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),le(t,"link",e),te(t),i.head.appendChild(t)))}}function e1(e){si.D(e),F0("dns-prefetch",e,null)}function n1(e,t){si.C(e,t),F0("preconnect",e,t)}function i1(e,t,n){si.L(e,t,n);var i=ia;if(i&&e&&t){var s='link[rel="preload"][as="'+Qe(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+Qe(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+Qe(n.imageSizes)+'"]')):s+='[href="'+Qe(e)+'"]';var r=s;switch(t){case"style":r=Fr(e);break;case"script":r=sa(e)}nn.has(r)||(e=Rt({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),nn.set(r,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(Qo(r))||t==="script"&&i.querySelector(Xo(r))||(t=i.createElement("link"),le(t,"link",e),te(t),i.head.appendChild(t)))}}function s1(e,t){si.m(e,t);var n=ia;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+Qe(i)+'"][href="'+Qe(e)+'"]',r=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=sa(e)}if(!nn.has(r)&&(e=Rt({rel:"modulepreload",href:e},t),nn.set(r,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Xo(r)))return}i=n.createElement("link"),le(i,"link",e),te(i),n.head.appendChild(i)}}}function r1(e,t,n){si.S(e,t,n);var i=ia;if(i&&e){var s=Er(i).hoistableStyles,r=Fr(e);t=t||"default";var a=s.get(r);if(!a){var l={loading:0,preload:null};if(a=i.querySelector(Qo(r)))l.loading=5;else{e=Rt({rel:"stylesheet",href:e,"data-precedence":t},n),(n=nn.get(r))&&xm(e,n);var u=a=i.createElement("link");te(u),le(u,"link",e),u._p=new Promise(function(h,d){u.onload=h,u.onerror=d}),u.addEventListener("load",function(){l.loading|=1}),u.addEventListener("error",function(){l.loading|=2}),l.loading|=4,Wl(a,t,i)}a={type:"stylesheet",instance:a,count:1,state:l},s.set(r,a)}}}function a1(e,t){si.X(e,t);var n=ia;if(n&&e){var i=Er(n).hoistableScripts,s=sa(e),r=i.get(s);r||(r=n.querySelector(Xo(s)),r||(e=Rt({src:e,async:!0},t),(t=nn.get(s))&&zm(e,t),r=n.createElement("script"),te(r),le(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(s,r))}}function o1(e,t){si.M(e,t);var n=ia;if(n&&e){var i=Er(n).hoistableScripts,s=sa(e),r=i.get(s);r||(r=n.querySelector(Xo(s)),r||(e=Rt({src:e,async:!0,type:"module"},t),(t=nn.get(s))&&zm(e,t),r=n.createElement("script"),te(r),le(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(s,r))}}function i_(e,t,n,i){var s=(s=Di.current)?ku(s):null;if(!s)throw Error(L(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Fr(n.href),n=Er(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Fr(n.href);var r=Er(s).hoistableStyles,a=r.get(e);if(a||(s=s.ownerDocument||s,a={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,a),(r=s.querySelector(Qo(e)))&&!r._p&&(a.instance=r,a.state.loading=5),nn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},nn.set(e,n),r||l1(s,e,n,a.state))),t&&i===null)throw Error(L(528,""));return a}if(t&&i!==null)throw Error(L(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=sa(n),n=Er(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(L(444,e))}}function Fr(e){return'href="'+Qe(e)+'"'}function Qo(e){return'link[rel="stylesheet"]['+e+"]"}function G0(e){return Rt({},e,{"data-precedence":e.precedence,precedence:null})}function l1(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),le(t,"link",n),te(t),e.head.appendChild(t))}function sa(e){return'[src="'+Qe(e)+'"]'}function Xo(e){return"script[async]"+e}function s_(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Qe(n.href)+'"]');if(i)return t.instance=i,te(i),i;var s=Rt({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),te(i),le(i,"style",s),Wl(i,n.precedence,e),t.instance=i;case"stylesheet":s=Fr(n.href);var r=e.querySelector(Qo(s));if(r)return t.state.loading|=4,t.instance=r,te(r),r;i=G0(n),(s=nn.get(s))&&xm(i,s),r=(e.ownerDocument||e).createElement("link"),te(r);var a=r;return a._p=new Promise(function(l,u){a.onload=l,a.onerror=u}),le(r,"link",i),t.state.loading|=4,Wl(r,n.precedence,e),t.instance=r;case"script":return r=sa(n.src),(s=e.querySelector(Xo(r)))?(t.instance=s,te(s),s):(i=n,(s=nn.get(r))&&(i=Rt({},n),zm(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),te(s),le(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(L(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,Wl(i,n.precedence,e));return t.instance}function Wl(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,r=s,a=0;a<i.length;a++){var l=i[a];if(l.dataset.precedence===t)r=l;else if(r!==s)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function xm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function zm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var tu=null;function r_(e,t,n){if(tu===null){var i=new Map,s=tu=new Map;s.set(n,i)}else s=tu,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var r=n[s];if(!(r[qo]||r[se]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var a=r.getAttribute(t)||"";a=e+a;var l=i.get(a);l?l.push(r):i.set(a,[r])}}return i}function a_(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function u1(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function K0(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function c1(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var s=Fr(i.href),r=t.querySelector(Qo(s));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=xu.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=r,te(r);return}r=t.ownerDocument||t,i=G0(i),(s=nn.get(s))&&xm(i,s),r=r.createElement("link"),te(r);var a=r;a._p=new Promise(function(l,u){a.onload=l,a.onerror=u}),le(r,"link",i),n.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=xu.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var tf=0;function h1(e,t){return e.stylesheets&&e.count===0&&eu(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&eu(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&tf===0&&(tf=62500*GR());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&eu(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>tf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function xu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)eu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var zu=null;function eu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,zu=new Map,t.forEach(f1,e),zu=null,xu.call(e))}function f1(e,t){if(!(t.state.loading&4)){var n=zu.get(e);if(n)var i=n.get(null);else{n=new Map,zu.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<s.length;r++){var a=s[r];(a.nodeName==="LINK"||a.getAttribute("media")!=="not all")&&(n.set(a.dataset.precedence,a),i=a)}i&&n.set(null,i)}s=t.instance,a=s.getAttribute("data-precedence"),r=n.get(a)||i,r===i&&n.set(null,s),n.set(a,s),this.count++,i=xu.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),r?r.parentNode.insertBefore(s,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var wo={$$typeof:Bn,Provider:null,Consumer:null,_currentValue:vs,_currentValue2:vs,_threadCount:0};function d1(e,t,n,i,s,r,a,l,u){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Sh(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sh(0),this.hiddenUpdates=Sh(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=r,this.onRecoverableError=a,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function Y0(e,t,n,i,s,r,a,l,u,h,d,m){return e=new d1(e,t,n,a,u,h,d,m,l),t=1,r===!0&&(t|=24),r=Me(3,null,null,t),e.current=r,r.stateNode=e,t=hm(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:t},mm(r),e}function Q0(e){return e?(e=pr,e):pr}function X0(e,t,n,i,s,r){s=Q0(s),i.context===null?i.context=s:i.pendingContext=s,i=Oi(t),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=Vi(e,i,t),n!==null&&(Ie(n,e,t),Za(n,e,t))}function o_(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Bm(e,t){o_(e,t),(e=e.alternate)&&o_(e,t)}function $0(e){if(e.tag===13||e.tag===31){var t=js(e,67108864);t!==null&&Ie(t,e,67108864),Bm(e,67108864)}}function l_(e){if(e.tag===13||e.tag===31){var t=ze();t=Jd(t);var n=js(e,t);n!==null&&Ie(n,e,t),Bm(e,t)}}var Bu=!0;function m1(e,t,n,i){var s=X.T;X.T=null;var r=ht.p;try{ht.p=2,jm(e,t,n,i)}finally{ht.p=r,X.T=s}}function g1(e,t,n,i){var s=X.T;X.T=null;var r=ht.p;try{ht.p=8,jm(e,t,n,i)}finally{ht.p=r,X.T=s}}function jm(e,t,n,i){if(Bu){var s=md(i);if(s===null)Zh(e,t,i,ju,n),u_(e,i);else if(y1(s,e,t,n,i))i.stopPropagation();else if(u_(e,i),t&4&&-1<p1.indexOf(e)){for(;s!==null;){var r=Wr(s);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var a=fs(r.pendingLanes);if(a!==0){var l=r;for(l.pendingLanes|=2,l.entangledLanes|=2;a;){var u=1<<31-xe(a);l.entanglements[1]|=u,a&=~u}Nn(r),!(ct&6)&&(Nu=Ue()+500,Yo(0))}}break;case 31:case 13:l=js(r,2),l!==null&&Ie(l,r,2),wc(),Bm(r,2)}if(r=md(i),r===null&&Zh(e,t,i,ju,n),r===s)break;s=r}s!==null&&i.stopPropagation()}else Zh(e,t,i,null,n)}}function md(e){return e=em(e),qm(e)}var ju=null;function qm(e){if(ju=null,e=cr(e),e!==null){var t=xo(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=pE(t),e!==null)return e;e=null}else if(n===31){if(e=yE(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ju=e,null}function J0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(eI()){case TE:return 2;case AE:return 8;case pu:case nI:return 32;case SE:return 268435456;default:return 32}default:return 32}}var gd=!1,Pi=null,Ui=null,ki=null,Io=new Map,Ro=new Map,vi=[],p1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function u_(e,t){switch(e){case"focusin":case"focusout":Pi=null;break;case"dragenter":case"dragleave":Ui=null;break;case"mouseover":case"mouseout":ki=null;break;case"pointerover":case"pointerout":Io.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(t.pointerId)}}function La(e,t,n,i,s,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[s]},t!==null&&(t=Wr(t),t!==null&&$0(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function y1(e,t,n,i,s){switch(t){case"focusin":return Pi=La(Pi,e,t,n,i,s),!0;case"dragenter":return Ui=La(Ui,e,t,n,i,s),!0;case"mouseover":return ki=La(ki,e,t,n,i,s),!0;case"pointerover":var r=s.pointerId;return Io.set(r,La(Io.get(r)||null,e,t,n,i,s)),!0;case"gotpointercapture":return r=s.pointerId,Ro.set(r,La(Ro.get(r)||null,e,t,n,i,s)),!0}return!1}function Z0(e){var t=cr(e.target);if(t!==null){var n=xo(t);if(n!==null){if(t=n.tag,t===13){if(t=pE(n),t!==null){e.blockedOn=t,Yp(e.priority,function(){l_(n)});return}}else if(t===31){if(t=yE(n),t!==null){e.blockedOn=t,Yp(e.priority,function(){l_(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function nu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=md(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Mf=i,n.target.dispatchEvent(i),Mf=null}else return t=Wr(n),t!==null&&$0(t),e.blockedOn=n,!1;t.shift()}return!0}function c_(e,t,n){nu(e)&&n.delete(t)}function _1(){gd=!1,Pi!==null&&nu(Pi)&&(Pi=null),Ui!==null&&nu(Ui)&&(Ui=null),ki!==null&&nu(ki)&&(ki=null),Io.forEach(c_),Ro.forEach(c_)}function Ml(e,t){e.blockedOn===t&&(e.blockedOn=null,gd||(gd=!0,Xt.unstable_scheduleCallback(Xt.unstable_NormalPriority,_1)))}var Ll=null;function h_(e){Ll!==e&&(Ll=e,Xt.unstable_scheduleCallback(Xt.unstable_NormalPriority,function(){Ll===e&&(Ll=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(qm(i||n)===null)continue;break}var r=Wr(n);r!==null&&(e.splice(t,3),t-=3,Xf(r,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function Gr(e){function t(u){return Ml(u,e)}Pi!==null&&Ml(Pi,e),Ui!==null&&Ml(Ui,e),ki!==null&&Ml(ki,e),Io.forEach(t),Ro.forEach(t);for(var n=0;n<vi.length;n++){var i=vi[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<vi.length&&(n=vi[0],n.blockedOn===null);)Z0(n),n.blockedOn===null&&vi.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],r=n[i+1],a=s[Re]||null;if(typeof r=="function")a||h_(n);else if(a){var l=null;if(r&&r.hasAttribute("formAction")){if(s=r,a=r[Re]||null)l=a.formAction;else if(qm(s)!==null)continue}else l=a.action;typeof l=="function"?n[i+1]=l:(n.splice(i,3),i-=3),h_(n)}}}function W0(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(a){return s=a})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Hm(e){this._internalRoot=e}Cc.prototype.render=Hm.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(L(409));var n=t.current,i=ze();X0(n,i,e,t,null,null)};Cc.prototype.unmount=Hm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;X0(e.current,2,null,e,null,null),wc(),t[Zr]=null}};function Cc(e){this._internalRoot=e}Cc.prototype.unstable_scheduleHydration=function(e){if(e){var t=CE();e={blockedOn:null,target:e,priority:t};for(var n=0;n<vi.length&&t!==0&&t<vi[n].priority;n++);vi.splice(n,0,e),n===0&&Z0(e)}};var f_=mE.version;if(f_!=="19.2.5")throw Error(L(527,f_,"19.2.5"));ht.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=Qw(t),e=e!==null?_E(e):null,e=e===null?null:e.stateNode,e};var v1={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:X,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pl.isDisabled&&Pl.supportsFiber)try{zo=Pl.inject(v1),ke=Pl}catch{}}hc.createRoot=function(e,t){if(!gE(e))throw Error(L(299));var n=!1,i="",s=FT,r=GT,a=KT;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Y0(e,1,!1,null,null,n,i,null,s,r,a,W0),e[Zr]=t.current,km(e),new Hm(t)};hc.hydrateRoot=function(e,t,n){if(!gE(e))throw Error(L(299));var i=!1,s="",r=FT,a=GT,l=KT,u=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(a=n.onCaughtError),n.onRecoverableError!==void 0&&(l=n.onRecoverableError),n.formState!==void 0&&(u=n.formState)),t=Y0(e,1,!0,t,n??null,i,s,u,r,a,l,W0),t.context=Q0(null),n=t.current,i=ze(),i=Jd(i),s=Oi(i),s.callback=null,Vi(n,s,i),n=i,t.current.lanes=n,jo(t,n),Nn(t),e[Zr]=t.current,km(e),new Cc(t)};hc.version="19.2.5";function tA(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tA)}catch(e){console.error(e)}}tA(),lE.exports=hc;var E1=lE.exports;const T1=()=>{};var d_={};/**
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
 */const eA=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},A1=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=e[n++],a=e[n++],l=e[n++],u=((s&7)<<18|(r&63)<<12|(a&63)<<6|l&63)-65536;t[i++]=String.fromCharCode(55296+(u>>10)),t[i++]=String.fromCharCode(56320+(u&1023))}else{const r=e[n++],a=e[n++];t[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|a&63)}}return t.join("")},nA={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<e.length;s+=3){const r=e[s],a=s+1<e.length,l=a?e[s+1]:0,u=s+2<e.length,h=u?e[s+2]:0,d=r>>2,m=(r&3)<<4|l>>4;let g=(l&15)<<2|h>>6,E=h&63;u||(E=64,a||(g=64)),i.push(n[d],n[m],n[g],n[E])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(eA(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):A1(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<e.length;){const r=n[e.charAt(s++)],l=s<e.length?n[e.charAt(s)]:0;++s;const h=s<e.length?n[e.charAt(s)]:64;++s;const m=s<e.length?n[e.charAt(s)]:64;if(++s,r==null||l==null||h==null||m==null)throw new S1;const g=r<<2|l>>4;if(i.push(g),h!==64){const E=l<<4&240|h>>2;if(i.push(E),m!==64){const D=h<<6&192|m;i.push(D)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class S1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const b1=function(e){const t=eA(e);return nA.encodeByteArray(t,!0)},qu=function(e){return b1(e).replace(/\./g,"")},iA=function(e){try{return nA.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function w1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const I1=()=>w1().__FIREBASE_DEFAULTS__,R1=()=>{if(typeof process>"u"||typeof d_>"u")return;const e=d_.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},C1=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&iA(e[1]);return t&&JSON.parse(t)},Dc=()=>{try{return T1()||I1()||R1()||C1()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},sA=e=>{var t,n;return(n=(t=Dc())==null?void 0:t.emulatorHosts)==null?void 0:n[e]},D1=e=>{const t=sA(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),i]:[t.substring(0,n),i]},rA=()=>{var e;return(e=Dc())==null?void 0:e.config},aA=e=>{var t;return(t=Dc())==null?void 0:t[`_${e}`]};/**
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
 */class N1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}/**
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
 */function O1(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",s=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...e};return[qu(JSON.stringify(n)),qu(JSON.stringify(a)),""].join(".")}/**
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
 */function me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function V1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(me())}function M1(){var t;const e=(t=Dc())==null?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function L1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function oA(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function P1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function U1(){const e=me();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function k1(){return!M1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lA(){try{return typeof indexedDB=="object"}catch{return!1}}function uA(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;t(((r=s.error)==null?void 0:r.message)||"")}}catch(n){t(n)}})}function x1(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const z1="FirebaseError";class mn extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=z1,Object.setPrototypeOf(this,mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hs.prototype.create)}}class Hs{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},s=`${this.service}/${t}`,r=this.errors[t],a=r?B1(r,i):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new mn(s,l,i)}}function B1(e,t){return e.replace(j1,(n,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const j1=/\{\$([^}]+)}/g;function q1(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ki(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const r=e[s],a=t[s];if(m_(r)&&m_(a)){if(!Ki(r,a))return!1}else if(r!==a)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function m_(e){return e!==null&&typeof e=="object"}/**
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
 */function $o(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function ja(e){const t={};return e.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");t[decodeURIComponent(s)]=decodeURIComponent(r)}}),t}function qa(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function H1(e,t){const n=new F1(e,t);return n.subscribe.bind(n)}class F1{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,i){let s;if(t===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");G1(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:i},s.next===void 0&&(s.next=ef),s.error===void 0&&(s.error=ef),s.complete===void 0&&(s.complete=ef);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function G1(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function ef(){}/**
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
 */const K1=1e3,Y1=2,Q1=4*60*60*1e3,X1=.5;function g_(e,t=K1,n=Y1){const i=t*Math.pow(n,e),s=Math.round(X1*i*(Math.random()-.5)*2);return Math.min(Q1,i+s)}/**
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
 */function $t(e){return e&&e._delegate?e._delegate:e}/**
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
 */function Jo(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function cA(e){return(await fetch(e,{credentials:"include"})).ok}class hn{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const gs="[DEFAULT]";/**
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
 */class $1{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new N1;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(t==null?void 0:t.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Z1(t))try{this.getOrInitializeService({instanceIdentifier:gs})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(t=gs){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=gs){return this.instances.has(t)}getOptions(t=gs){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);i===l&&a.resolve(s)}return s}onInit(t,n){const i=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(i)??new Set;s.add(t),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&t(r,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:J1(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=gs){return this.component?this.component.multipleInstances?t:gs:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function J1(e){return e===gs?void 0:e}function Z1(e){return e.instantiationMode==="EAGER"}/**
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
 */class W1{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new $1(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var st;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(st||(st={}));const tC={debug:st.DEBUG,verbose:st.VERBOSE,info:st.INFO,warn:st.WARN,error:st.ERROR,silent:st.SILENT},eC=st.INFO,nC={[st.DEBUG]:"log",[st.VERBOSE]:"log",[st.INFO]:"info",[st.WARN]:"warn",[st.ERROR]:"error"},iC=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),s=nC[t];if(s)console[s](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Nc{constructor(t){this.name=t,this._logLevel=eC,this._logHandler=iC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in st))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?tC[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,st.DEBUG,...t),this._logHandler(this,st.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,st.VERBOSE,...t),this._logHandler(this,st.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,st.INFO,...t),this._logHandler(this,st.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,st.WARN,...t),this._logHandler(this,st.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,st.ERROR,...t),this._logHandler(this,st.ERROR,...t)}}const sC=(e,t)=>t.some(n=>e instanceof n);let p_,y_;function rC(){return p_||(p_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aC(){return y_||(y_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hA=new WeakMap,pd=new WeakMap,fA=new WeakMap,nf=new WeakMap,Fm=new WeakMap;function oC(e){const t=new Promise((n,i)=>{const s=()=>{e.removeEventListener("success",r),e.removeEventListener("error",a)},r=()=>{n(xi(e.result)),s()},a=()=>{i(e.error),s()};e.addEventListener("success",r),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&hA.set(n,e)}).catch(()=>{}),Fm.set(t,e),t}function lC(e){if(pd.has(e))return;const t=new Promise((n,i)=>{const s=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",a),e.removeEventListener("abort",a)},r=()=>{n(),s()},a=()=>{i(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",r),e.addEventListener("error",a),e.addEventListener("abort",a)});pd.set(e,t)}let yd={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return pd.get(e);if(t==="objectStoreNames")return e.objectStoreNames||fA.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xi(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function uC(e){yd=e(yd)}function cC(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(sf(this),t,...n);return fA.set(i,t.sort?t.sort():[t]),xi(i)}:aC().includes(e)?function(...t){return e.apply(sf(this),t),xi(hA.get(this))}:function(...t){return xi(e.apply(sf(this),t))}}function hC(e){return typeof e=="function"?cC(e):(e instanceof IDBTransaction&&lC(e),sC(e,rC())?new Proxy(e,yd):e)}function xi(e){if(e instanceof IDBRequest)return oC(e);if(nf.has(e))return nf.get(e);const t=hC(e);return t!==e&&(nf.set(e,t),Fm.set(t,e)),t}const sf=e=>Fm.get(e);function dA(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const a=indexedDB.open(e,t),l=xi(a);return i&&a.addEventListener("upgradeneeded",u=>{i(xi(a.result),u.oldVersion,u.newVersion,xi(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{r&&u.addEventListener("close",()=>r()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const fC=["get","getKey","getAll","getAllKeys","count"],dC=["put","add","delete","clear"],rf=new Map;function __(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(rf.get(t))return rf.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=dC.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||fC.includes(n)))return;const r=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let h=u.store;return i&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&u.done]))[0]};return rf.set(t,r),r}uC(e=>({...e,get:(t,n,i)=>__(t,n)||e.get(t,n,i),has:(t,n)=>!!__(t,n)||e.has(t,n)}));/**
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
 */class mC{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gC(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function gC(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const _d="@firebase/app",v_="0.14.11";/**
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
 */const ti=new Nc("@firebase/app"),pC="@firebase/app-compat",yC="@firebase/analytics-compat",_C="@firebase/analytics",vC="@firebase/app-check-compat",EC="@firebase/app-check",TC="@firebase/auth",AC="@firebase/auth-compat",SC="@firebase/database",bC="@firebase/data-connect",wC="@firebase/database-compat",IC="@firebase/functions",RC="@firebase/functions-compat",CC="@firebase/installations",DC="@firebase/installations-compat",NC="@firebase/messaging",OC="@firebase/messaging-compat",VC="@firebase/performance",MC="@firebase/performance-compat",LC="@firebase/remote-config",PC="@firebase/remote-config-compat",UC="@firebase/storage",kC="@firebase/storage-compat",xC="@firebase/firestore",zC="@firebase/ai",BC="@firebase/firestore-compat",jC="firebase",qC="12.12.0";/**
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
 */const vd="[DEFAULT]",HC={[_d]:"fire-core",[pC]:"fire-core-compat",[_C]:"fire-analytics",[yC]:"fire-analytics-compat",[EC]:"fire-app-check",[vC]:"fire-app-check-compat",[TC]:"fire-auth",[AC]:"fire-auth-compat",[SC]:"fire-rtdb",[bC]:"fire-data-connect",[wC]:"fire-rtdb-compat",[IC]:"fire-fn",[RC]:"fire-fn-compat",[CC]:"fire-iid",[DC]:"fire-iid-compat",[NC]:"fire-fcm",[OC]:"fire-fcm-compat",[VC]:"fire-perf",[MC]:"fire-perf-compat",[LC]:"fire-rc",[PC]:"fire-rc-compat",[UC]:"fire-gcs",[kC]:"fire-gcs-compat",[xC]:"fire-fst",[BC]:"fire-fst-compat",[zC]:"fire-vertex","fire-js":"fire-js",[jC]:"fire-js-all"};/**
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
 */const Hu=new Map,FC=new Map,Ed=new Map;function E_(e,t){try{e.container.addComponent(t)}catch(n){ti.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Rn(e){const t=e.name;if(Ed.has(t))return ti.debug(`There were multiple attempts to register component ${t}.`),!1;Ed.set(t,e);for(const n of Hu.values())E_(n,e);for(const n of FC.values())E_(n,e);return!0}function Fs(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Le(e){return e==null?!1:e.settings!==void 0}/**
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
 */const GC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zi=new Hs("app","Firebase",GC);/**
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
 */class KC{constructor(t,n,i){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw zi.create("app-deleted",{appName:this._name})}}/**
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
 */const ra=qC;function mA(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const i={name:vd,automaticDataCollectionEnabled:!0,...t},s=i.name;if(typeof s!="string"||!s)throw zi.create("bad-app-name",{appName:String(s)});if(n||(n=rA()),!n)throw zi.create("no-options");const r=Hu.get(s);if(r){if(Ki(n,r.options)&&Ki(i,r.config))return r;throw zi.create("duplicate-app",{appName:s})}const a=new W1(s);for(const u of Ed.values())a.addComponent(u);const l=new KC(n,i,a);return Hu.set(s,l),l}function Gm(e=vd){const t=Hu.get(e);if(!t&&e===vd&&rA())return mA();if(!t)throw zi.create("no-app",{appName:e});return t}function en(e,t,n){let i=HC[e]??e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),r=t.match(/\s|\//);if(s||r){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&a.push("and"),r&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ti.warn(a.join(" "));return}Rn(new hn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const YC="firebase-heartbeat-database",QC=1,Co="firebase-heartbeat-store";let af=null;function gA(){return af||(af=dA(YC,QC,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Co)}catch(n){console.warn(n)}}}}).catch(e=>{throw zi.create("idb-open",{originalErrorMessage:e.message})})),af}async function XC(e){try{const n=(await gA()).transaction(Co),i=await n.objectStore(Co).get(pA(e));return await n.done,i}catch(t){if(t instanceof mn)ti.warn(t.message);else{const n=zi.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ti.warn(n.message)}}}async function T_(e,t){try{const i=(await gA()).transaction(Co,"readwrite");await i.objectStore(Co).put(t,pA(e)),await i.done}catch(n){if(n instanceof mn)ti.warn(n.message);else{const i=zi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ti.warn(i.message)}}}function pA(e){return`${e.name}!${e.options.appId}`}/**
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
 */const $C=1024,JC=30;class ZC{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tD(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=A_();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(a=>a.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>JC){const a=eD(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){ti.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=A_(),{heartbeatsToSend:i,unsentEntries:s}=WC(this._heartbeatsCache.heartbeats),r=qu(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return ti.warn(n),""}}}function A_(){return new Date().toISOString().substring(0,10)}function WC(e,t=$C){const n=[];let i=e.slice();for(const s of e){const r=n.find(a=>a.agent===s.agent);if(r){if(r.dates.push(s.date),S_(n)>t){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),S_(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class tD{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lA()?uA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await XC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const i=await this.read();return T_(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const i=await this.read();return T_(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function S_(e){return qu(JSON.stringify({version:2,heartbeats:e})).length}function eD(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let i=1;i<e.length;i++)e[i].date<n&&(n=e[i].date,t=i);return t}/**
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
 */function nD(e){Rn(new hn("platform-logger",t=>new mC(t),"PRIVATE")),Rn(new hn("heartbeat",t=>new ZC(t),"PRIVATE")),en(_d,v_,e),en(_d,v_,"esm2020"),en("fire-js","")}nD("");var iD="firebase",sD="12.12.1";/**
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
 */en(iD,sD,"app");const yA="@firebase/installations",Km="0.6.21";/**
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
 */const _A=1e4,vA=`w:${Km}`,EA="FIS_v2",rD="https://firebaseinstallations.googleapis.com/v1",aD=60*60*1e3,oD="installations",lD="Installations";/**
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
 */const uD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Os=new Hs(oD,lD,uD);function TA(e){return e instanceof mn&&e.code.includes("request-failed")}/**
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
 */function AA({projectId:e}){return`${rD}/projects/${e}/installations`}function SA(e){return{token:e.token,requestStatus:2,expiresIn:hD(e.expiresIn),creationTime:Date.now()}}async function bA(e,t){const i=(await t.json()).error;return Os.create("request-failed",{requestName:e,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function wA({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function cD(e,{refreshToken:t}){const n=wA(e);return n.append("Authorization",fD(t)),n}async function IA(e){const t=await e();return t.status>=500&&t.status<600?e():t}function hD(e){return Number(e.replace("s","000"))}function fD(e){return`${EA} ${e}`}/**
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
 */async function dD({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=AA(e),s=wA(e),r=t.getImmediate({optional:!0});if(r){const h=await r.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={fid:n,authVersion:EA,appId:e.appId,sdkVersion:vA},l={method:"POST",headers:s,body:JSON.stringify(a)},u=await IA(()=>fetch(i,l));if(u.ok){const h=await u.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:SA(h.authToken)}}else throw await bA("Create Installation",u)}/**
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
 */function RA(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function mD(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const gD=/^[cdef][\w-]{21}$/,Td="";function pD(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=yD(e);return gD.test(n)?n:Td}catch{return Td}}function yD(e){return mD(e).substr(0,22)}/**
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
 */function Oc(e){return`${e.appName}!${e.appId}`}/**
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
 */const CA=new Map;function DA(e,t){const n=Oc(e);NA(n,t),_D(n,t)}function NA(e,t){const n=CA.get(e);if(n)for(const i of n)i(t)}function _D(e,t){const n=vD();n&&n.postMessage({key:e,fid:t}),ED()}let ps=null;function vD(){return!ps&&"BroadcastChannel"in self&&(ps=new BroadcastChannel("[Firebase] FID Change"),ps.onmessage=e=>{NA(e.data.key,e.data.fid)}),ps}function ED(){CA.size===0&&ps&&(ps.close(),ps=null)}/**
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
 */const TD="firebase-installations-database",AD=1,Vs="firebase-installations-store";let of=null;function Ym(){return of||(of=dA(TD,AD,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Vs)}}})),of}async function Fu(e,t){const n=Oc(e),s=(await Ym()).transaction(Vs,"readwrite"),r=s.objectStore(Vs),a=await r.get(n);return await r.put(t,n),await s.done,(!a||a.fid!==t.fid)&&DA(e,t.fid),t}async function OA(e){const t=Oc(e),i=(await Ym()).transaction(Vs,"readwrite");await i.objectStore(Vs).delete(t),await i.done}async function Vc(e,t){const n=Oc(e),s=(await Ym()).transaction(Vs,"readwrite"),r=s.objectStore(Vs),a=await r.get(n),l=t(a);return l===void 0?await r.delete(n):await r.put(l,n),await s.done,l&&(!a||a.fid!==l.fid)&&DA(e,l.fid),l}/**
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
 */async function Qm(e){let t;const n=await Vc(e.appConfig,i=>{const s=SD(i),r=bD(e,s);return t=r.registrationPromise,r.installationEntry});return n.fid===Td?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function SD(e){const t=e||{fid:pD(),registrationStatus:0};return VA(t)}function bD(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Os.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=wD(e,n);return{installationEntry:n,registrationPromise:i}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:ID(e)}:{installationEntry:t}}async function wD(e,t){try{const n=await dD(e,t);return Fu(e.appConfig,n)}catch(n){throw TA(n)&&n.customData.serverCode===409?await OA(e.appConfig):await Fu(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function ID(e){let t=await b_(e.appConfig);for(;t.registrationStatus===1;)await RA(100),t=await b_(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await Qm(e);return i||n}return t}function b_(e){return Vc(e,t=>{if(!t)throw Os.create("installation-not-found");return VA(t)})}function VA(e){return RD(e)?{fid:e.fid,registrationStatus:0}:e}function RD(e){return e.registrationStatus===1&&e.registrationTime+_A<Date.now()}/**
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
 */async function CD({appConfig:e,heartbeatServiceProvider:t},n){const i=DD(e,n),s=cD(e,n),r=t.getImmediate({optional:!0});if(r){const h=await r.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={installation:{sdkVersion:vA,appId:e.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},u=await IA(()=>fetch(i,l));if(u.ok){const h=await u.json();return SA(h)}else throw await bA("Generate Auth Token",u)}function DD(e,{fid:t}){return`${AA(e)}/${t}/authTokens:generate`}/**
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
 */async function Xm(e,t=!1){let n;const i=await Vc(e.appConfig,r=>{if(!MA(r))throw Os.create("not-registered");const a=r.authToken;if(!t&&VD(a))return r;if(a.requestStatus===1)return n=ND(e,t),r;{if(!navigator.onLine)throw Os.create("app-offline");const l=LD(r);return n=OD(e,l),l}});return n?await n:i.authToken}async function ND(e,t){let n=await w_(e.appConfig);for(;n.authToken.requestStatus===1;)await RA(100),n=await w_(e.appConfig);const i=n.authToken;return i.requestStatus===0?Xm(e,t):i}function w_(e){return Vc(e,t=>{if(!MA(t))throw Os.create("not-registered");const n=t.authToken;return PD(n)?{...t,authToken:{requestStatus:0}}:t})}async function OD(e,t){try{const n=await CD(e,t),i={...t,authToken:n};return await Fu(e.appConfig,i),n}catch(n){if(TA(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await OA(e.appConfig);else{const i={...t,authToken:{requestStatus:0}};await Fu(e.appConfig,i)}throw n}}function MA(e){return e!==void 0&&e.registrationStatus===2}function VD(e){return e.requestStatus===2&&!MD(e)}function MD(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+aD}function LD(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function PD(e){return e.requestStatus===1&&e.requestTime+_A<Date.now()}/**
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
 */async function UD(e){const t=e,{installationEntry:n,registrationPromise:i}=await Qm(t);return i?i.catch(console.error):Xm(t).catch(console.error),n.fid}/**
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
 */async function kD(e,t=!1){const n=e;return await xD(n),(await Xm(n,t)).token}async function xD(e){const{registrationPromise:t}=await Qm(e);t&&await t}/**
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
 */function zD(e){if(!e||!e.options)throw lf("App Configuration");if(!e.name)throw lf("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw lf(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function lf(e){return Os.create("missing-app-config-values",{valueName:e})}/**
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
 */const LA="installations",BD="installations-internal",jD=e=>{const t=e.getProvider("app").getImmediate(),n=zD(t),i=Fs(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},qD=e=>{const t=e.getProvider("app").getImmediate(),n=Fs(t,LA).getImmediate();return{getId:()=>UD(n),getToken:s=>kD(n,s)}};function HD(){Rn(new hn(LA,jD,"PUBLIC")),Rn(new hn(BD,qD,"PRIVATE"))}HD();en(yA,Km);en(yA,Km,"esm2020");/**
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
 */const Gu="analytics",FD="firebase_id",GD="origin",KD=60*1e3,YD="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",$m="https://www.googletagmanager.com/gtag/js";/**
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
 */const ve=new Nc("@firebase/analytics");/**
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
 */const QD={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Be=new Hs("analytics","Analytics",QD);/**
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
 */function XD(e){if(!e.startsWith($m)){const t=Be.create("invalid-gtag-resource",{gtagURL:e});return ve.warn(t.message),""}return e}function PA(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function $D(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function JD(e,t){const n=$D("firebase-js-sdk-policy",{createScriptURL:XD}),i=document.createElement("script"),s=`${$m}?l=${e}&id=${t}`;i.src=n?n==null?void 0:n.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function ZD(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function WD(e,t,n,i,s,r){const a=i[s];try{if(a)await t[a];else{const u=(await PA(n)).find(h=>h.measurementId===s);u&&await t[u.appId]}}catch(l){ve.error(l)}e("config",s,r)}async function t2(e,t,n,i,s){try{let r=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await PA(n);for(const u of a){const h=l.find(m=>m.measurementId===u),d=h&&t[h.appId];if(d)r.push(d);else{r=[];break}}}r.length===0&&(r=Object.values(t)),await Promise.all(r),e("event",i,s||{})}catch(r){ve.error(r)}}function e2(e,t,n,i){async function s(r,...a){try{if(r==="event"){const[l,u]=a;await t2(e,t,n,l,u)}else if(r==="config"){const[l,u]=a;await WD(e,t,n,i,l,u)}else if(r==="consent"){const[l,u]=a;e("consent",l,u)}else if(r==="get"){const[l,u,h]=a;e("get",l,u,h)}else if(r==="set"){const[l]=a;e("set",l)}else e(r,...a)}catch(l){ve.error(l)}}return s}function n2(e,t,n,i,s){let r=function(...a){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=e2(r,e,t,n),{gtagCore:r,wrappedGtag:window[s]}}function i2(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes($m)&&n.src.includes(e))return n;return null}/**
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
 */const s2=30,r2=1e3;class a2{constructor(t={},n=r2){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const UA=new a2;function o2(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function l2(e){var a;const{appId:t,apiKey:n}=e,i={method:"GET",headers:o2(n)},s=YD.replace("{app-id}",t),r=await fetch(s,i);if(r.status!==200&&r.status!==304){let l="";try{const u=await r.json();(a=u.error)!=null&&a.message&&(l=u.error.message)}catch{}throw Be.create("config-fetch-failed",{httpStatus:r.status,responseMessage:l})}return r.json()}async function u2(e,t=UA,n){const{appId:i,apiKey:s,measurementId:r}=e.options;if(!i)throw Be.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw Be.create("no-api-key")}const a=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new f2;return setTimeout(async()=>{l.abort()},KD),kA({appId:i,apiKey:s,measurementId:r},a,l,t)}async function kA(e,{throttleEndTimeMillis:t,backoffCount:n},i,s=UA){var l;const{appId:r,measurementId:a}=e;try{await c2(i,t)}catch(u){if(a)return ve.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:r,measurementId:a};throw u}try{const u=await l2(e);return s.deleteThrottleMetadata(r),u}catch(u){const h=u;if(!h2(h)){if(s.deleteThrottleMetadata(r),a)return ve.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:r,measurementId:a};throw u}const d=Number((l=h==null?void 0:h.customData)==null?void 0:l.httpStatus)===503?g_(n,s.intervalMillis,s2):g_(n,s.intervalMillis),m={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(r,m),ve.debug(`Calling attemptFetch again in ${d} millis`),kA(e,m,i,s)}}function c2(e,t){return new Promise((n,i)=>{const s=Math.max(t-Date.now(),0),r=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(r),i(Be.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function h2(e){if(!(e instanceof mn)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class f2{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function d2(e,t,n,i,s){if(s&&s.global){e("event",n,i);return}else{const r=await t,a={...i,send_to:r};e("event",n,a)}}async function m2(e,t,n,i){if(i&&i.global){const s={};for(const r of Object.keys(n))s[`user_properties.${r}`]=n[r];return e("set",s),Promise.resolve()}else{const s=await t;e("config",s,{update:!0,user_properties:n})}}/**
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
 */async function g2(){if(lA())try{await uA()}catch(e){return ve.warn(Be.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return ve.warn(Be.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function p2(e,t,n,i,s,r,a){const l=u2(e);l.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&ve.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>ve.error(g)),t.push(l);const u=g2().then(g=>{if(g)return i.getId()}),[h,d]=await Promise.all([l,u]);i2(r)||JD(r,h.measurementId),s("js",new Date);const m=(a==null?void 0:a.config)??{};return m[GD]="firebase",m.update=!0,d!=null&&(m[FD]=d),s("config",h.measurementId,m),h.measurementId}/**
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
 */class y2{constructor(t){this.app=t}_delete(){return delete Rr[this.app.options.appId],Promise.resolve()}}let Rr={},I_=[];const R_={};let uf="dataLayer",_2="gtag",C_,Jm,D_=!1;function v2(){const e=[];if(oA()&&e.push("This is a browser extension environment."),x1()||e.push("Cookies are not available."),e.length>0){const t=e.map((i,s)=>`(${s+1}) ${i}`).join(" "),n=Be.create("invalid-analytics-context",{errorInfo:t});ve.warn(n.message)}}function E2(e,t,n){v2();const i=e.options.appId;if(!i)throw Be.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)ve.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Be.create("no-api-key");if(Rr[i]!=null)throw Be.create("already-exists",{id:i});if(!D_){ZD(uf);const{wrappedGtag:r,gtagCore:a}=n2(Rr,I_,R_,uf,_2);Jm=r,C_=a,D_=!0}return Rr[i]=p2(e,I_,R_,t,C_,uf,n),new y2(e)}function T2(e=Gm()){e=$t(e);const t=Fs(e,Gu);return t.isInitialized()?t.getImmediate():A2(e)}function A2(e,t={}){const n=Fs(e,Gu);if(n.isInitialized()){const s=n.getImmediate();if(Ki(t,n.getOptions()))return s;throw Be.create("already-initialized")}return n.initialize({options:t})}function S2(e,t,n){e=$t(e),m2(Jm,Rr[e.app.options.appId],t,n).catch(i=>ve.error(i))}function b2(e,t,n,i){e=$t(e),d2(Jm,Rr[e.app.options.appId],t,n,i).catch(s=>ve.error(s))}const N_="@firebase/analytics",O_="0.10.21";function w2(){Rn(new hn(Gu,(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return E2(i,s,n)},"PUBLIC")),Rn(new hn("analytics-internal",e,"PRIVATE")),en(N_,O_),en(N_,O_,"esm2020");function e(t){try{const n=t.getProvider(Gu).getImmediate();return{logEvent:(i,s,r)=>b2(n,i,s,r),setUserProperties:(i,s)=>S2(n,i,s)}}catch(n){throw Be.create("interop-component-reg-failed",{reason:n})}}}w2();function xA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const I2=xA,zA=new Hs("auth","Firebase",xA());/**
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
 */const Ku=new Nc("@firebase/auth");function R2(e,...t){Ku.logLevel<=st.WARN&&Ku.warn(`Auth (${ra}): ${e}`,...t)}function iu(e,...t){Ku.logLevel<=st.ERROR&&Ku.error(`Auth (${ra}): ${e}`,...t)}/**
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
 */function sn(e,...t){throw Wm(e,...t)}function un(e,...t){return Wm(e,...t)}function Zm(e,t,n){const i={...I2(),[t]:n};return new Hs("auth","Firebase",i).create(t,{appName:e.name})}function Qn(e){return Zm(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function C2(e,t,n){const i=n;if(!(t instanceof i))throw i.name!==t.constructor.name&&sn(e,"argument-error"),Zm(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Wm(e,...t){if(typeof e!="string"){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return zA.create(e,...t)}function Y(e,t,...n){if(!e)throw Wm(t,...n)}function Hn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw iu(t),new Error(t)}function ei(e,t){e||Hn(t)}/**
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
 */function Ad(){var e;return typeof self<"u"&&((e=self.location)==null?void 0:e.href)||""}function D2(){return V_()==="http:"||V_()==="https:"}function V_(){var e;return typeof self<"u"&&((e=self.location)==null?void 0:e.protocol)||null}/**
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
 */function N2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(D2()||oA()||"connection"in navigator)?navigator.onLine:!0}function O2(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Zo{constructor(t,n){this.shortDelay=t,this.longDelay=n,ei(n>t,"Short delay should be less than long delay!"),this.isMobile=V1()||P1()}get(){return N2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function tg(e,t){ei(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class BA{static initialize(t,n,i){this.fetchImpl=t,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const V2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const M2=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],L2=new Zo(3e4,6e4);function es(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function ns(e,t,n,i,s={}){return jA(e,s,async()=>{let r={},a={};i&&(t==="GET"?a=i:r={body:JSON.stringify(i)});const l=$o({key:e.config.apiKey,...a}).slice(1),u=await e._getAdditionalHeaders();u["Content-Type"]="application/json",e.languageCode&&(u["X-Firebase-Locale"]=e.languageCode);const h={method:t,headers:u,...r};return L1()||(h.referrerPolicy="no-referrer"),e.emulatorConfig&&Jo(e.emulatorConfig.host)&&(h.credentials="include"),BA.fetch()(await qA(e,e.config.apiHost,n,l),h)})}async function jA(e,t,n){e._canInitEmulator=!1;const i={...V2,...t};try{const s=new U2(e),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await r.json();if("needConfirmation"in a)throw Ul(e,"account-exists-with-different-credential",a);if(r.ok&&!("errorMessage"in a))return a;{const l=r.ok?a.errorMessage:a.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ul(e,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Ul(e,"email-already-in-use",a);if(u==="USER_DISABLED")throw Ul(e,"user-disabled",a);const d=i[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Zm(e,d,h);sn(e,d)}}catch(s){if(s instanceof mn)throw s;sn(e,"network-request-failed",{message:String(s)})}}async function Wo(e,t,n,i,s={}){const r=await ns(e,t,n,i,s);return"mfaPendingCredential"in r&&sn(e,"multi-factor-auth-required",{_serverResponse:r}),r}async function qA(e,t,n,i){const s=`${t}${n}?${i}`,r=e,a=r.config.emulator?tg(e.config,s):`${e.config.apiScheme}://${s}`;return M2.includes(n)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(a).toString():a}function P2(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class U2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(un(this.auth,"network-request-failed")),L2.get())})}}function Ul(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=un(e,t,i);return s.customData._tokenResponse=n,s}function M_(e){return e!==void 0&&e.enterprise!==void 0}class k2{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return P2(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function x2(e,t){return ns(e,"GET","/v2/recaptchaConfig",es(e,t))}/**
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
 */async function z2(e,t){return ns(e,"POST","/v1/accounts:delete",t)}async function Yu(e,t){return ns(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function oo(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function B2(e,t=!1){const n=$t(e),i=await n.getIdToken(t),s=eg(i);Y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,a=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:oo(cf(s.auth_time)),issuedAtTime:oo(cf(s.iat)),expirationTime:oo(cf(s.exp)),signInProvider:a||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function cf(e){return Number(e)*1e3}function eg(e){const[t,n,i]=e.split(".");if(t===void 0||n===void 0||i===void 0)return iu("JWT malformed, contained fewer than 3 sections"),null;try{const s=iA(n);return s?JSON.parse(s):(iu("Failed to decode base64 JWT payload"),null)}catch(s){return iu("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function L_(e){const t=eg(e);return Y(t,"internal-error"),Y(typeof t.exp<"u","internal-error"),Y(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Do(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof mn&&j2(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function j2({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class q2{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Sd{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=oo(this.lastLoginAt),this.creationTime=oo(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Qu(e){var m;const t=e.auth,n=await e.getIdToken(),i=await Do(e,Yu(t,{idToken:n}));Y(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const r=(m=s.providerUserInfo)!=null&&m.length?HA(s.providerUserInfo):[],a=F2(e.providerData,r),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Sd(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(e,d)}async function H2(e){const t=$t(e);await Qu(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function F2(e,t){return[...e.filter(i=>!t.some(s=>s.providerId===i.providerId)),...t]}function HA(e){return e.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function G2(e,t){const n=await jA(e,{},async()=>{const i=$o({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:r}=e.config,a=await qA(e,s,"/v1/token",`key=${r}`),l=await e._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:i};return e.emulatorConfig&&Jo(e.emulatorConfig.host)&&(u.credentials="include"),BA.fetch()(a,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function K2(e,t){return ns(e,"POST","/v2/accounts:revokeToken",es(e,t))}/**
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
 */class Cr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Y(t.idToken,"internal-error"),Y(typeof t.idToken<"u","internal-error"),Y(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):L_(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){Y(t.length!==0,"internal-error");const n=L_(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await G2(t,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(t,n,i){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,a=new Cr;return i&&(Y(typeof i=="string","internal-error",{appName:t}),a.refreshToken=i),s&&(Y(typeof s=="string","internal-error",{appName:t}),a.accessToken=s),r&&(Y(typeof r=="number","internal-error",{appName:t}),a.expirationTime=r),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Cr,this.toJSON())}_performRefresh(){return Hn("not implemented")}}/**
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
 */function di(e,t){Y(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class on{constructor({uid:t,auth:n,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new q2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Sd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Do(this,this.stsTokenManager.getToken(this.auth,t));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return B2(this,t)}reload(){return H2(this)}_assign(t){this!==t&&(Y(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new on({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),n&&await Qu(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Le(this.auth.app))return Promise.reject(Qn(this.auth));const t=await this.getIdToken();return await Do(this,z2(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const i=n.displayName??void 0,s=n.email??void 0,r=n.phoneNumber??void 0,a=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:E,providerData:D,stsTokenManager:M}=n;Y(m&&M,t,"internal-error");const k=Cr.fromJSON(this.name,M);Y(typeof m=="string",t,"internal-error"),di(i,t.name),di(s,t.name),Y(typeof g=="boolean",t,"internal-error"),Y(typeof E=="boolean",t,"internal-error"),di(r,t.name),di(a,t.name),di(l,t.name),di(u,t.name),di(h,t.name),di(d,t.name);const b=new on({uid:m,auth:t,email:s,emailVerified:g,displayName:i,isAnonymous:E,photoURL:a,phoneNumber:r,tenantId:l,stsTokenManager:k,createdAt:h,lastLoginAt:d});return D&&Array.isArray(D)&&(b.providerData=D.map(T=>({...T}))),u&&(b._redirectEventId=u),b}static async _fromIdTokenResponse(t,n,i=!1){const s=new Cr;s.updateFromServerResponse(n);const r=new on({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:i});return await Qu(r),r}static async _fromGetAccountInfoResponse(t,n,i){const s=n.users[0];Y(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?HA(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),l=new Cr;l.updateFromIdToken(i);const u=new on({uid:s.localId,auth:t,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new Sd(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(u,h),u}}/**
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
 */const P_=new Map;function Fn(e){ei(e instanceof Function,"Expected a class definition");let t=P_.get(e);return t?(ei(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,P_.set(e,t),t)}/**
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
 */class FA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}FA.type="NONE";const U_=FA;/**
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
 */function su(e,t,n){return`firebase:${e}:${t}:${n}`}class Dr{constructor(t,n,i){this.persistence=t,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=su(this.userKey,s.apiKey,r),this.fullPersistenceKey=su("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Yu(this.auth,{idToken:t}).catch(()=>{});return n?on._fromGetAccountInfoResponse(this.auth,n,t):null}return on._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,i="authUser"){if(!n.length)return new Dr(Fn(U_),t,i);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let r=s[0]||Fn(U_);const a=su(i,t.config.apiKey,t.name);let l=null;for(const h of n)try{const d=await h._get(a);if(d){let m;if(typeof d=="string"){const g=await Yu(t,{idToken:d}).catch(()=>{});if(!g)break;m=await on._fromGetAccountInfoResponse(t,g,d)}else m=on._fromJSON(t,d);h!==r&&(l=m),r=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!r._shouldAllowMigration||!u.length?new Dr(r,t,i):(r=u[0],l&&await r._set(a,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==r)try{await h._remove(a)}catch{}})),new Dr(r,t,i))}}/**
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
 */function k_(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(QA(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(GA(t))return"Firefox";if(t.includes("silk/"))return"Silk";if($A(t))return"Blackberry";if(JA(t))return"Webos";if(KA(t))return"Safari";if((t.includes("chrome/")||YA(t))&&!t.includes("edge/"))return"Chrome";if(XA(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function GA(e=me()){return/firefox\//i.test(e)}function KA(e=me()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function YA(e=me()){return/crios\//i.test(e)}function QA(e=me()){return/iemobile/i.test(e)}function XA(e=me()){return/android/i.test(e)}function $A(e=me()){return/blackberry/i.test(e)}function JA(e=me()){return/webos/i.test(e)}function ng(e=me()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Y2(e=me()){var t;return ng(e)&&!!((t=window.navigator)!=null&&t.standalone)}function Q2(){return U1()&&document.documentMode===10}function ZA(e=me()){return ng(e)||XA(e)||JA(e)||$A(e)||/windows phone/i.test(e)||QA(e)}/**
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
 */function WA(e,t=[]){let n;switch(e){case"Browser":n=k_(me());break;case"Worker":n=`${k_(me())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ra}/${i}`}/**
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
 */class X2{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const i=r=>new Promise((a,l)=>{try{const u=t(r);a(u)}catch(u){l(u)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const i of this.queue)await i(t),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function $2(e,t={}){return ns(e,"GET","/v2/passwordPolicy",es(e,t))}/**
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
 */const J2=6;class Z2{constructor(t){var i;const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??J2,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=t.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=t.length>=i),s&&(n.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<t.length;s++)i=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(t,n,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=r))}}/**
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
 */class W2{constructor(t,n,i,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new x_(this),this.idTokenSubscription=new x_(this),this.beforeStateQueue=new X2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Fn(n)),this._initializationPromise=this.queue(async()=>{var i,s,r;if(!this._deleted&&(this.persistenceManager=await Dr.create(this,t),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Yu(this,{idToken:t}),i=await on._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var r;if(Le(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(r=this.redirectUser)==null?void 0:r._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(t);(!a||a===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Qu(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=O2()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Le(this.app))return Promise.reject(Qn(this));const n=t?$t(t):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&Y(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Le(this.app)?Promise.reject(Qn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Le(this.app)?Promise.reject(Qn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await $2(this),n=new Z2(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Hs("auth","Firebase",t())}onAuthStateChanged(t,n,i){return this.registerStateListener(this.authStateSubscription,t,n,i)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,i){return this.registerStateListener(this.idTokenSubscription,t,n,i)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const i=this.onAuthStateChanged(()=>{i(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await K2(this,i)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,n){const i=await this.getOrInitRedirectPersistenceManager(n);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Fn(t)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await Dr.create(this,[Fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===t?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(l,this,"internal-error"),l.then(()=>{a||r(this.currentUser)}),typeof n=="function"){const u=t.addObserver(n,i,s);return()=>{a=!0,u()}}else{const u=t.addObserver(n);return()=>{a=!0,u()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=WA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var n;if(Le(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return t!=null&&t.error&&R2(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function is(e){return $t(e)}class x_{constructor(t){this.auth=t,this.observer=null,this.addObserver=H1(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Mc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tN(e){Mc=e}function tS(e){return Mc.loadJS(e)}function eN(){return Mc.recaptchaEnterpriseScript}function nN(){return Mc.gapiScript}function iN(e){return`__${e}${Math.floor(Math.random()*1e6)}`}class sN{constructor(){this.enterprise=new rN}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class rN{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const aN="recaptcha-enterprise",eS="NO_RECAPTCHA";class oN{constructor(t){this.type=aN,this.auth=is(t)}async verify(t="verify",n=!1){async function i(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(a,l)=>{x2(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new k2(u);return r.tenantId==null?r._agentRecaptchaConfig=h:r._tenantRecaptchaConfigs[r.tenantId]=h,a(h.siteKey)}}).catch(u=>{l(u)})})}function s(r,a,l){const u=window.grecaptcha;M_(u)?u.enterprise.ready(()=>{u.enterprise.execute(r,{action:t}).then(h=>{a(h)}).catch(()=>{a(eS)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new sN().execute("siteKey",{action:"verify"}):new Promise((r,a)=>{i(this.auth).then(l=>{if(!n&&M_(window.grecaptcha))s(l,r,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=eN();u.length!==0&&(u+=l),tS(u).then(()=>{s(l,r,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function z_(e,t,n,i=!1,s=!1){const r=new oN(e);let a;if(s)a=eS;else try{a=await r.verify(n)}catch{a=await r.verify(n,!0)}const l={...t};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return i?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function bd(e,t,n,i,s){var r;if((r=e._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await z_(e,t,n,n==="getOobCode");return i(e,a)}else return i(e,t).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await z_(e,t,n,n==="getOobCode");return i(e,l)}else return Promise.reject(a)})}/**
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
 */function lN(e,t){const n=Fs(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(Ki(r,t??{}))return s;sn(s,"already-initialized")}return n.initialize({options:t})}function uN(e,t){const n=(t==null?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Fn);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,t==null?void 0:t.popupRedirectResolver)}function cN(e,t,n){const i=is(e);Y(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const s=!1,r=nS(t),{host:a,port:l}=hN(t),u=l===null?"":`:${l}`,h={url:`${r}//${a}${u}/`},d=Object.freeze({host:a,port:l,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){Y(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),Y(Ki(h,i.config.emulator)&&Ki(d,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=h,i.emulatorConfig=d,i.settings.appVerificationDisabledForTesting=!0,Jo(a)?cA(`${r}//${a}${u}`):fN()}function nS(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function hN(e){const t=nS(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:B_(i.substr(r.length+1))}}else{const[r,a]=i.split(":");return{host:r,port:B_(a)}}}function B_(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function fN(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class ig{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Hn("not implemented")}_getIdTokenResponse(t){return Hn("not implemented")}_linkToIdToken(t,n){return Hn("not implemented")}_getReauthenticationResolver(t){return Hn("not implemented")}}async function dN(e,t){return ns(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function mN(e,t){return Wo(e,"POST","/v1/accounts:signInWithPassword",es(e,t))}/**
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
 */async function gN(e,t){return Wo(e,"POST","/v1/accounts:signInWithEmailLink",es(e,t))}async function pN(e,t){return Wo(e,"POST","/v1/accounts:signInWithEmailLink",es(e,t))}/**
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
 */class No extends ig{constructor(t,n,i,s=null){super("password",i),this._email=t,this._password=n,this._tenantId=s}static _fromEmailAndPassword(t,n){return new No(t,n,"password")}static _fromEmailAndCode(t,n,i=null){return new No(t,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bd(t,n,"signInWithPassword",mN);case"emailLink":return gN(t,{email:this._email,oobCode:this._password});default:sn(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bd(t,i,"signUpPassword",dN);case"emailLink":return pN(t,{idToken:n,email:this._email,oobCode:this._password});default:sn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Nr(e,t){return Wo(e,"POST","/v1/accounts:signInWithIdp",es(e,t))}/**
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
 */const yN="http://localhost";class Ms extends ig{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Ms(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):sn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:s,...r}=n;if(!i||!s)return null;const a=new Ms(i,s);return a.idToken=r.idToken||void 0,a.accessToken=r.accessToken||void 0,a.secret=r.secret,a.nonce=r.nonce,a.pendingToken=r.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return Nr(t,n)}_linkToIdToken(t,n){const i=this.buildRequest();return i.idToken=n,Nr(t,i)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Nr(t,n)}buildRequest(){const t={requestUri:yN,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=$o(n)}return t}}/**
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
 */function _N(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vN(e){const t=ja(qa(e)).link,n=t?ja(qa(t)).deep_link_id:null,i=ja(qa(e)).deep_link_id;return(i?ja(qa(i)).link:null)||i||n||t||e}class sg{constructor(t){const n=ja(qa(t)),i=n.apiKey??null,s=n.oobCode??null,r=_N(n.mode??null);Y(i&&s&&r,"argument-error"),this.apiKey=i,this.operation=r,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(t){const n=vN(t);try{return new sg(n)}catch{return null}}}/**
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
 */class aa{constructor(){this.providerId=aa.PROVIDER_ID}static credential(t,n){return No._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const i=sg.parseLink(n);return Y(i,"argument-error"),No._fromEmailAndCode(t,i.code,i.tenantId)}}aa.PROVIDER_ID="password";aa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";aa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class rg{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class tl extends rg{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ei extends tl{constructor(){super("facebook.com")}static credential(t){return Ms._fromParams({providerId:Ei.PROVIDER_ID,signInMethod:Ei.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ei.credentialFromTaggedObject(t)}static credentialFromError(t){return Ei.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ei.credential(t.oauthAccessToken)}catch{return null}}}Ei.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ei.PROVIDER_ID="facebook.com";/**
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
 */class zn extends tl{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Ms._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return zn.credentialFromTaggedObject(t)}static credentialFromError(t){return zn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:i}=t;if(!n&&!i)return null;try{return zn.credential(n,i)}catch{return null}}}zn.GOOGLE_SIGN_IN_METHOD="google.com";zn.PROVIDER_ID="google.com";/**
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
 */class Ti extends tl{constructor(){super("github.com")}static credential(t){return Ms._fromParams({providerId:Ti.PROVIDER_ID,signInMethod:Ti.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ti.credentialFromTaggedObject(t)}static credentialFromError(t){return Ti.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ti.credential(t.oauthAccessToken)}catch{return null}}}Ti.GITHUB_SIGN_IN_METHOD="github.com";Ti.PROVIDER_ID="github.com";/**
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
 */class Ai extends tl{constructor(){super("twitter.com")}static credential(t,n){return Ms._fromParams({providerId:Ai.PROVIDER_ID,signInMethod:Ai.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ai.credentialFromTaggedObject(t)}static credentialFromError(t){return Ai.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=t;if(!n||!i)return null;try{return Ai.credential(n,i)}catch{return null}}}Ai.TWITTER_SIGN_IN_METHOD="twitter.com";Ai.PROVIDER_ID="twitter.com";/**
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
 */async function EN(e,t){return Wo(e,"POST","/v1/accounts:signUp",es(e,t))}/**
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
 */class Ls{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,i,s=!1){const r=await on._fromIdTokenResponse(t,i,s),a=j_(i);return new Ls({user:r,providerId:a,_tokenResponse:i,operationType:n})}static async _forOperation(t,n,i){await t._updateTokensIfNecessary(i,!0);const s=j_(i);return new Ls({user:t,providerId:s,_tokenResponse:i,operationType:n})}}function j_(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Xu extends mn{constructor(t,n,i,s){super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Xu.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,n,i,s){return new Xu(t,n,i,s)}}function iS(e,t,n,i){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Xu._fromErrorAndOperation(e,r,t,i):r})}async function TN(e,t,n=!1){const i=await Do(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ls._forOperation(e,"link",i)}/**
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
 */async function AN(e,t,n=!1){const{auth:i}=e;if(Le(i.app))return Promise.reject(Qn(i));const s="reauthenticate";try{const r=await Do(e,iS(i,s,t,e),n);Y(r.idToken,i,"internal-error");const a=eg(r.idToken);Y(a,i,"internal-error");const{sub:l}=a;return Y(e.uid===l,i,"user-mismatch"),Ls._forOperation(e,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&sn(i,"user-mismatch"),r}}/**
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
 */async function sS(e,t,n=!1){if(Le(e.app))return Promise.reject(Qn(e));const i="signIn",s=await iS(e,i,t),r=await Ls._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(r.user),r}async function SN(e,t){return sS(is(e),t)}/**
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
 */async function rS(e){const t=is(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function bN(e,t,n){if(Le(e.app))return Promise.reject(Qn(e));const i=is(e),a=await bd(i,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",EN).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&rS(e),u}),l=await Ls._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function wN(e,t,n){return Le(e.app)?Promise.reject(Qn(e)):SN($t(e),aa.credential(t,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&rS(e),i})}function IN(e,t,n,i){return $t(e).onIdTokenChanged(t,n,i)}function RN(e,t,n){return $t(e).beforeAuthStateChanged(t,n)}function CN(e,t,n,i){return $t(e).onAuthStateChanged(t,n,i)}function DN(e){return $t(e).signOut()}const $u="__sak";/**
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
 */class aS{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($u,"1"),this.storage.removeItem($u),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const NN=1e3,ON=10;class oS extends aS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ZA(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&t(n,s,i)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const i=t.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(i);!n&&this.localCache[i]===a||this.notifyListeners(i,a)},r=this.storage.getItem(i);Q2()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,ON):s()}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:i}),!0)})},NN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}oS.type="LOCAL";const VN=oS;/**
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
 */class lS extends aS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}lS.type="SESSION";const uS=lS;/**
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
 */function MN(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Lc{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const i=new Lc(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:i,eventType:s,data:r}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const l=Array.from(a).map(async h=>h(n.origin,r)),u=await MN(l);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:u})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lc.receivers=[];/**
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
 */function ag(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class LN{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,a;return new Promise((l,u)=>{const h=ag("",20);s.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},i);a={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(g.data.response);break;default:clearTimeout(d),clearTimeout(r),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function An(){return window}function PN(e){An().location.href=e}/**
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
 */function cS(){return typeof An().WorkerGlobalScope<"u"&&typeof An().importScripts=="function"}async function UN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kN(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)==null?void 0:e.controller)||null}function xN(){return cS()?self:null}/**
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
 */const hS="firebaseLocalStorageDb",zN=1,Ju="firebaseLocalStorage",fS="fbase_key";class el{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Pc(e,t){return e.transaction([Ju],t?"readwrite":"readonly").objectStore(Ju)}function BN(){const e=indexedDB.deleteDatabase(hS);return new el(e).toPromise()}function wd(){const e=indexedDB.open(hS,zN);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const i=e.result;try{i.createObjectStore(Ju,{keyPath:fS})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const i=e.result;i.objectStoreNames.contains(Ju)?t(i):(i.close(),await BN(),t(await wd()))})})}async function q_(e,t,n){const i=Pc(e,!0).put({[fS]:t,value:n});return new el(i).toPromise()}async function jN(e,t){const n=Pc(e,!1).get(t),i=await new el(n).toPromise();return i===void 0?null:i.value}function H_(e,t){const n=Pc(e,!0).delete(t);return new el(n).toPromise()}const qN=800,HN=3;class dS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wd(),this.db)}async _withRetries(t){let n=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(n++>HN)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lc._getInstance(xN()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var n,i;if(this.activeServiceWorker=await UN(),!this.activeServiceWorker)return;this.sender=new LN(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(n=t[0])!=null&&n.fulfilled&&(i=t[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||kN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await wd();return await q_(t,$u,"1"),await H_(t,$u),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>q_(i,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(i=>jN(i,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>H_(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const r=Pc(s,!1).getAll();return new el(r).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(t.length!==0)for(const{fbase_key:s,value:r}of t)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dS.type="LOCAL";const FN=dS;new Zo(3e4,6e4);/**
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
 */function mS(e,t){return t?Fn(t):(Y(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class og extends ig{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Nr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Nr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Nr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function GN(e){return sS(e.auth,new og(e),e.bypassAuthState)}function KN(e){const{auth:t,user:n}=e;return Y(n,t,"internal-error"),AN(n,new og(e),e.bypassAuthState)}async function YN(e){const{auth:t,user:n}=e;return Y(n,t,"internal-error"),TN(n,new og(e),e.bypassAuthState)}/**
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
 */class gS{constructor(t,n,i,s,r=!1){this.auth=t,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:a,type:l}=t;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return GN;case"linkViaPopup":case"linkViaRedirect":return YN;case"reauthViaPopup":case"reauthViaRedirect":return KN;default:sn(this.auth,"internal-error")}}resolve(t){ei(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ei(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const QN=new Zo(2e3,1e4);async function XN(e,t,n){if(Le(e.app))return Promise.reject(un(e,"operation-not-supported-in-this-environment"));const i=is(e);C2(e,t,rg);const s=mS(i,n);return new ys(i,"signInViaPopup",t,s).executeNotNull()}class ys extends gS{constructor(t,n,i,s,r){super(t,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,ys.currentPopupAction&&ys.currentPopupAction.cancel(),ys.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Y(t,this.auth,"internal-error"),t}async onExecution(){ei(this.filter.length===1,"Popup operations only handle one event");const t=ag();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ys.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,i;if((i=(n=this.authWindow)==null?void 0:n.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,QN.get())};t()}}ys.currentPopupAction=null;/**
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
 */const $N="pendingRedirect",ru=new Map;class JN extends gS{constructor(t,n,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let t=ru.get(this.auth._key());if(!t){try{const i=await ZN(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(n){t=()=>Promise.reject(n)}ru.set(this.auth._key(),t)}return this.bypassAuthState||ru.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ZN(e,t){const n=eO(t),i=tO(e);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function WN(e,t){ru.set(e._key(),t)}function tO(e){return Fn(e._redirectPersistence)}function eO(e){return su($N,e.config.apiKey,e.name)}async function nO(e,t,n=!1){if(Le(e.app))return Promise.reject(Qn(e));const i=is(e),s=mS(i,t),a=await new JN(i,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,t)),a}/**
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
 */const iO=10*60*1e3;class sO{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(n=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!rO(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var i;if(t.error&&!pS(t)){const s=((i=t.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";n.onError(un(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const i=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=iO&&this.cachedEventUids.clear(),this.cachedEventUids.has(F_(t))}saveEventToCache(t){this.cachedEventUids.add(F_(t)),this.lastProcessedEventTime=Date.now()}}function F_(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function pS({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function rO(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pS(e);default:return!1}}/**
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
 */async function aO(e,t={}){return ns(e,"GET","/v1/projects",t)}/**
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
 */const oO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lO=/^https?/;async function uO(e){if(e.config.emulator)return;const{authorizedDomains:t}=await aO(e);for(const n of t)try{if(cO(n))return}catch{}sn(e,"unauthorized-domain")}function cO(e){const t=Ad(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&i===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===i}if(!lO.test(n))return!1;if(oO.test(e))return i===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const hO=new Zo(3e4,6e4);function G_(){const e=An().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function fO(e){return new Promise((t,n)=>{var s,r,a;function i(){G_(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{G_(),n(un(e,"network-request-failed"))},timeout:hO.get()})}if((r=(s=An().gapi)==null?void 0:s.iframes)!=null&&r.Iframe)t(gapi.iframes.getContext());else if((a=An().gapi)!=null&&a.load)i();else{const l=iN("iframefcb");return An()[l]=()=>{gapi.load?i():n(un(e,"network-request-failed"))},tS(`${nN()}?onload=${l}`).catch(u=>n(u))}}).catch(t=>{throw au=null,t})}let au=null;function dO(e){return au=au||fO(e),au}/**
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
 */const mO=new Zo(5e3,15e3),gO="__/auth/iframe",pO="emulator/auth/iframe",yO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_O=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vO(e){const t=e.config;Y(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?tg(t,pO):`https://${e.config.authDomain}/${gO}`,i={apiKey:t.apiKey,appName:e.name,v:ra},s=_O.get(e.config.apiHost);s&&(i.eid=s);const r=e._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${$o(i).slice(1)}`}async function EO(e){const t=await dO(e),n=An().gapi;return Y(n,e,"internal-error"),t.open({where:document.body,url:vO(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yO,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const a=un(e,"network-request-failed"),l=An().setTimeout(()=>{r(a)},mO.get());function u(){An().clearTimeout(l),s(i)}i.ping(u).then(u,()=>{r(a)})}))}/**
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
 */const TO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},AO=500,SO=600,bO="_blank",wO="http://localhost";class K_{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function IO(e,t,n,i=AO,s=SO){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const u={...TO,width:i.toString(),height:s.toString(),top:r,left:a},h=me().toLowerCase();n&&(l=YA(h)?bO:n),GA(h)&&(t=t||wO,u.scrollbars="yes");const d=Object.entries(u).reduce((g,[E,D])=>`${g}${E}=${D},`,"");if(Y2(h)&&l!=="_self")return RO(t||"",l),new K_(null);const m=window.open(t||"",l,d);Y(m,e,"popup-blocked");try{m.focus()}catch{}return new K_(m)}function RO(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const CO="__/auth/handler",DO="emulator/auth/handler",NO=encodeURIComponent("fac");async function Y_(e,t,n,i,s,r){Y(e.config.authDomain,e,"auth-domain-config-required"),Y(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:ra,eventId:s};if(t instanceof rg){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",q1(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,m]of Object.entries({}))a[d]=m}if(t instanceof tl){const d=t.getScopes().filter(m=>m!=="");d.length>0&&(a.scopes=d.join(","))}e.tenantId&&(a.tid=e.tenantId);const l=a;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await e._getAppCheckToken(),h=u?`#${NO}=${encodeURIComponent(u)}`:"";return`${OO(e)}?${$o(l).slice(1)}${h}`}function OO({config:e}){return e.emulator?tg(e,DO):`https://${e.authDomain}/${CO}`}/**
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
 */const hf="webStorageSupport";class VO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=uS,this._completeRedirectFn=nO,this._overrideRedirectResult=WN}async _openPopup(t,n,i,s){var a;ei((a=this.eventManagers[t._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const r=await Y_(t,n,i,Ad(),s);return IO(t,r,ag())}async _openRedirect(t,n,i,s){await this._originValidation(t);const r=await Y_(t,n,i,Ad(),s);return PN(r),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(ei(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(t);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(t){const n=await EO(t),i=new sO(t);return n.register("authEvent",s=>(Y(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=n,i}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(hf,{type:hf},s=>{var a;const r=(a=s==null?void 0:s[0])==null?void 0:a[hf];r!==void 0&&n(!!r),sn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=uO(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return ZA()||KA()||ng()}}const MO=VO;var Q_="@firebase/auth",X_="1.13.0";/**
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
 */class LO{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(i=>{t((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function PO(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function UO(e){Rn(new hn("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),r=t.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=i.options;Y(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});const u={apiKey:a,authDomain:l,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:WA(e)},h=new W2(i,s,r,u);return uN(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,i)=>{t.getProvider("auth-internal").initialize()})),Rn(new hn("auth-internal",t=>{const n=is(t.getProvider("auth").getImmediate());return(i=>new LO(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),en(Q_,X_,PO(e)),en(Q_,X_,"esm2020")}/**
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
 */const kO=5*60,xO=aA("authIdTokenMaxAge")||kO;let $_=null;const zO=e=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>xO)return;const s=n==null?void 0:n.token;$_!==s&&($_=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function BO(e=Gm()){const t=Fs(e,"auth");if(t.isInitialized())return t.getImmediate();const n=lN(e,{popupRedirectResolver:MO,persistence:[FN,VN,uS]}),i=aA("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const a=zO(r.toString());RN(n,a,()=>a(n.currentUser)),IN(n,l=>a(l))}}const s=sA("auth");return s&&cN(n,`http://${s}`),n}function jO(){var e;return((e=document.getElementsByTagName("head"))==null?void 0:e[0])??document}tN({loadJS(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=s=>{const r=un("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",jO().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});UO("Browser");var J_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bi,yS;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(_,y){function v(){}v.prototype=y.prototype,_.F=y.prototype,_.prototype=new v,_.prototype.constructor=_,_.D=function(S,w,R){for(var A=Array(arguments.length-2),Ut=2;Ut<arguments.length;Ut++)A[Ut-2]=arguments[Ut];return y.prototype[w].apply(S,A)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(i,n),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(_,y,v){v||(v=0);const S=Array(16);if(typeof y=="string")for(var w=0;w<16;++w)S[w]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(w=0;w<16;++w)S[w]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=_.g[0],v=_.g[1],w=_.g[2];let R=_.g[3],A;A=y+(R^v&(w^R))+S[0]+3614090360&4294967295,y=v+(A<<7&4294967295|A>>>25),A=R+(w^y&(v^w))+S[1]+3905402710&4294967295,R=y+(A<<12&4294967295|A>>>20),A=w+(v^R&(y^v))+S[2]+606105819&4294967295,w=R+(A<<17&4294967295|A>>>15),A=v+(y^w&(R^y))+S[3]+3250441966&4294967295,v=w+(A<<22&4294967295|A>>>10),A=y+(R^v&(w^R))+S[4]+4118548399&4294967295,y=v+(A<<7&4294967295|A>>>25),A=R+(w^y&(v^w))+S[5]+1200080426&4294967295,R=y+(A<<12&4294967295|A>>>20),A=w+(v^R&(y^v))+S[6]+2821735955&4294967295,w=R+(A<<17&4294967295|A>>>15),A=v+(y^w&(R^y))+S[7]+4249261313&4294967295,v=w+(A<<22&4294967295|A>>>10),A=y+(R^v&(w^R))+S[8]+1770035416&4294967295,y=v+(A<<7&4294967295|A>>>25),A=R+(w^y&(v^w))+S[9]+2336552879&4294967295,R=y+(A<<12&4294967295|A>>>20),A=w+(v^R&(y^v))+S[10]+4294925233&4294967295,w=R+(A<<17&4294967295|A>>>15),A=v+(y^w&(R^y))+S[11]+2304563134&4294967295,v=w+(A<<22&4294967295|A>>>10),A=y+(R^v&(w^R))+S[12]+1804603682&4294967295,y=v+(A<<7&4294967295|A>>>25),A=R+(w^y&(v^w))+S[13]+4254626195&4294967295,R=y+(A<<12&4294967295|A>>>20),A=w+(v^R&(y^v))+S[14]+2792965006&4294967295,w=R+(A<<17&4294967295|A>>>15),A=v+(y^w&(R^y))+S[15]+1236535329&4294967295,v=w+(A<<22&4294967295|A>>>10),A=y+(w^R&(v^w))+S[1]+4129170786&4294967295,y=v+(A<<5&4294967295|A>>>27),A=R+(v^w&(y^v))+S[6]+3225465664&4294967295,R=y+(A<<9&4294967295|A>>>23),A=w+(y^v&(R^y))+S[11]+643717713&4294967295,w=R+(A<<14&4294967295|A>>>18),A=v+(R^y&(w^R))+S[0]+3921069994&4294967295,v=w+(A<<20&4294967295|A>>>12),A=y+(w^R&(v^w))+S[5]+3593408605&4294967295,y=v+(A<<5&4294967295|A>>>27),A=R+(v^w&(y^v))+S[10]+38016083&4294967295,R=y+(A<<9&4294967295|A>>>23),A=w+(y^v&(R^y))+S[15]+3634488961&4294967295,w=R+(A<<14&4294967295|A>>>18),A=v+(R^y&(w^R))+S[4]+3889429448&4294967295,v=w+(A<<20&4294967295|A>>>12),A=y+(w^R&(v^w))+S[9]+568446438&4294967295,y=v+(A<<5&4294967295|A>>>27),A=R+(v^w&(y^v))+S[14]+3275163606&4294967295,R=y+(A<<9&4294967295|A>>>23),A=w+(y^v&(R^y))+S[3]+4107603335&4294967295,w=R+(A<<14&4294967295|A>>>18),A=v+(R^y&(w^R))+S[8]+1163531501&4294967295,v=w+(A<<20&4294967295|A>>>12),A=y+(w^R&(v^w))+S[13]+2850285829&4294967295,y=v+(A<<5&4294967295|A>>>27),A=R+(v^w&(y^v))+S[2]+4243563512&4294967295,R=y+(A<<9&4294967295|A>>>23),A=w+(y^v&(R^y))+S[7]+1735328473&4294967295,w=R+(A<<14&4294967295|A>>>18),A=v+(R^y&(w^R))+S[12]+2368359562&4294967295,v=w+(A<<20&4294967295|A>>>12),A=y+(v^w^R)+S[5]+4294588738&4294967295,y=v+(A<<4&4294967295|A>>>28),A=R+(y^v^w)+S[8]+2272392833&4294967295,R=y+(A<<11&4294967295|A>>>21),A=w+(R^y^v)+S[11]+1839030562&4294967295,w=R+(A<<16&4294967295|A>>>16),A=v+(w^R^y)+S[14]+4259657740&4294967295,v=w+(A<<23&4294967295|A>>>9),A=y+(v^w^R)+S[1]+2763975236&4294967295,y=v+(A<<4&4294967295|A>>>28),A=R+(y^v^w)+S[4]+1272893353&4294967295,R=y+(A<<11&4294967295|A>>>21),A=w+(R^y^v)+S[7]+4139469664&4294967295,w=R+(A<<16&4294967295|A>>>16),A=v+(w^R^y)+S[10]+3200236656&4294967295,v=w+(A<<23&4294967295|A>>>9),A=y+(v^w^R)+S[13]+681279174&4294967295,y=v+(A<<4&4294967295|A>>>28),A=R+(y^v^w)+S[0]+3936430074&4294967295,R=y+(A<<11&4294967295|A>>>21),A=w+(R^y^v)+S[3]+3572445317&4294967295,w=R+(A<<16&4294967295|A>>>16),A=v+(w^R^y)+S[6]+76029189&4294967295,v=w+(A<<23&4294967295|A>>>9),A=y+(v^w^R)+S[9]+3654602809&4294967295,y=v+(A<<4&4294967295|A>>>28),A=R+(y^v^w)+S[12]+3873151461&4294967295,R=y+(A<<11&4294967295|A>>>21),A=w+(R^y^v)+S[15]+530742520&4294967295,w=R+(A<<16&4294967295|A>>>16),A=v+(w^R^y)+S[2]+3299628645&4294967295,v=w+(A<<23&4294967295|A>>>9),A=y+(w^(v|~R))+S[0]+4096336452&4294967295,y=v+(A<<6&4294967295|A>>>26),A=R+(v^(y|~w))+S[7]+1126891415&4294967295,R=y+(A<<10&4294967295|A>>>22),A=w+(y^(R|~v))+S[14]+2878612391&4294967295,w=R+(A<<15&4294967295|A>>>17),A=v+(R^(w|~y))+S[5]+4237533241&4294967295,v=w+(A<<21&4294967295|A>>>11),A=y+(w^(v|~R))+S[12]+1700485571&4294967295,y=v+(A<<6&4294967295|A>>>26),A=R+(v^(y|~w))+S[3]+2399980690&4294967295,R=y+(A<<10&4294967295|A>>>22),A=w+(y^(R|~v))+S[10]+4293915773&4294967295,w=R+(A<<15&4294967295|A>>>17),A=v+(R^(w|~y))+S[1]+2240044497&4294967295,v=w+(A<<21&4294967295|A>>>11),A=y+(w^(v|~R))+S[8]+1873313359&4294967295,y=v+(A<<6&4294967295|A>>>26),A=R+(v^(y|~w))+S[15]+4264355552&4294967295,R=y+(A<<10&4294967295|A>>>22),A=w+(y^(R|~v))+S[6]+2734768916&4294967295,w=R+(A<<15&4294967295|A>>>17),A=v+(R^(w|~y))+S[13]+1309151649&4294967295,v=w+(A<<21&4294967295|A>>>11),A=y+(w^(v|~R))+S[4]+4149444226&4294967295,y=v+(A<<6&4294967295|A>>>26),A=R+(v^(y|~w))+S[11]+3174756917&4294967295,R=y+(A<<10&4294967295|A>>>22),A=w+(y^(R|~v))+S[2]+718787259&4294967295,w=R+(A<<15&4294967295|A>>>17),A=v+(R^(w|~y))+S[9]+3951481745&4294967295,_.g[0]=_.g[0]+y&4294967295,_.g[1]=_.g[1]+(w+(A<<21&4294967295|A>>>11))&4294967295,_.g[2]=_.g[2]+w&4294967295,_.g[3]=_.g[3]+R&4294967295}i.prototype.v=function(_,y){y===void 0&&(y=_.length);const v=y-this.blockSize,S=this.C;let w=this.h,R=0;for(;R<y;){if(w==0)for(;R<=v;)s(this,_,R),R+=this.blockSize;if(typeof _=="string"){for(;R<y;)if(S[w++]=_.charCodeAt(R++),w==this.blockSize){s(this,S),w=0;break}}else for(;R<y;)if(S[w++]=_[R++],w==this.blockSize){s(this,S),w=0;break}}this.h=w,this.o+=y},i.prototype.A=function(){var _=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);_[0]=128;for(var y=1;y<_.length-8;++y)_[y]=0;y=this.o*8;for(var v=_.length-8;v<_.length;++v)_[v]=y&255,y/=256;for(this.v(_),_=Array(16),y=0,v=0;v<4;++v)for(let S=0;S<32;S+=8)_[y++]=this.g[v]>>>S&255;return _};function r(_,y){var v=l;return Object.prototype.hasOwnProperty.call(v,_)?v[_]:v[_]=y(_)}function a(_,y){this.h=y;const v=[];let S=!0;for(let w=_.length-1;w>=0;w--){const R=_[w]|0;S&&R==y||(v[w]=R,S=!1)}this.g=v}var l={};function u(_){return-128<=_&&_<128?r(_,function(y){return new a([y|0],y<0?-1:0)}):new a([_|0],_<0?-1:0)}function h(_){if(isNaN(_)||!isFinite(_))return m;if(_<0)return k(h(-_));const y=[];let v=1;for(let S=0;_>=v;S++)y[S]=_/v|0,v*=4294967296;return new a(y,0)}function d(_,y){if(_.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(_.charAt(0)=="-")return k(d(_.substring(1),y));if(_.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=h(Math.pow(y,8));let S=m;for(let R=0;R<_.length;R+=8){var w=Math.min(8,_.length-R);const A=parseInt(_.substring(R,R+w),y);w<8?(w=h(Math.pow(y,w)),S=S.j(w).add(h(A))):(S=S.j(v),S=S.add(h(A)))}return S}var m=u(0),g=u(1),E=u(16777216);e=a.prototype,e.m=function(){if(M(this))return-k(this).m();let _=0,y=1;for(let v=0;v<this.g.length;v++){const S=this.i(v);_+=(S>=0?S:4294967296+S)*y,y*=4294967296}return _},e.toString=function(_){if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(D(this))return"0";if(M(this))return"-"+k(this).toString(_);const y=h(Math.pow(_,6));var v=this;let S="";for(;;){const w=V(v,y).g;v=b(v,w.j(y));let R=((v.g.length>0?v.g[0]:v.h)>>>0).toString(_);if(v=w,D(v))return R+S;for(;R.length<6;)R="0"+R;S=R+S}},e.i=function(_){return _<0?0:_<this.g.length?this.g[_]:this.h};function D(_){if(_.h!=0)return!1;for(let y=0;y<_.g.length;y++)if(_.g[y]!=0)return!1;return!0}function M(_){return _.h==-1}e.l=function(_){return _=b(this,_),M(_)?-1:D(_)?0:1};function k(_){const y=_.g.length,v=[];for(let S=0;S<y;S++)v[S]=~_.g[S];return new a(v,~_.h).add(g)}e.abs=function(){return M(this)?k(this):this},e.add=function(_){const y=Math.max(this.g.length,_.g.length),v=[];let S=0;for(let w=0;w<=y;w++){let R=S+(this.i(w)&65535)+(_.i(w)&65535),A=(R>>>16)+(this.i(w)>>>16)+(_.i(w)>>>16);S=A>>>16,R&=65535,A&=65535,v[w]=A<<16|R}return new a(v,v[v.length-1]&-2147483648?-1:0)};function b(_,y){return _.add(k(y))}e.j=function(_){if(D(this)||D(_))return m;if(M(this))return M(_)?k(this).j(k(_)):k(k(this).j(_));if(M(_))return k(this.j(k(_)));if(this.l(E)<0&&_.l(E)<0)return h(this.m()*_.m());const y=this.g.length+_.g.length,v=[];for(var S=0;S<2*y;S++)v[S]=0;for(S=0;S<this.g.length;S++)for(let w=0;w<_.g.length;w++){const R=this.i(S)>>>16,A=this.i(S)&65535,Ut=_.i(w)>>>16,De=_.i(w)&65535;v[2*S+2*w]+=A*De,T(v,2*S+2*w),v[2*S+2*w+1]+=R*De,T(v,2*S+2*w+1),v[2*S+2*w+1]+=A*Ut,T(v,2*S+2*w+1),v[2*S+2*w+2]+=R*Ut,T(v,2*S+2*w+2)}for(_=0;_<y;_++)v[_]=v[2*_+1]<<16|v[2*_];for(_=y;_<2*y;_++)v[_]=0;return new a(v,0)};function T(_,y){for(;(_[y]&65535)!=_[y];)_[y+1]+=_[y]>>>16,_[y]&=65535,y++}function I(_,y){this.g=_,this.h=y}function V(_,y){if(D(y))throw Error("division by zero");if(D(_))return new I(m,m);if(M(_))return y=V(k(_),y),new I(k(y.g),k(y.h));if(M(y))return y=V(_,k(y)),new I(k(y.g),y.h);if(_.g.length>30){if(M(_)||M(y))throw Error("slowDivide_ only works with positive integers.");for(var v=g,S=y;S.l(_)<=0;)v=B(v),S=B(S);var w=F(v,1),R=F(S,1);for(S=F(S,2),v=F(v,2);!D(S);){var A=R.add(S);A.l(_)<=0&&(w=w.add(v),R=A),S=F(S,1),v=F(v,1)}return y=b(_,w.j(y)),new I(w,y)}for(w=m;_.l(y)>=0;){for(v=Math.max(1,Math.floor(_.m()/y.m())),S=Math.ceil(Math.log(v)/Math.LN2),S=S<=48?1:Math.pow(2,S-48),R=h(v),A=R.j(y);M(A)||A.l(_)>0;)v-=S,R=h(v),A=R.j(y);D(R)&&(R=g),w=w.add(R),_=b(_,A)}return new I(w,_)}e.B=function(_){return V(this,_).h},e.and=function(_){const y=Math.max(this.g.length,_.g.length),v=[];for(let S=0;S<y;S++)v[S]=this.i(S)&_.i(S);return new a(v,this.h&_.h)},e.or=function(_){const y=Math.max(this.g.length,_.g.length),v=[];for(let S=0;S<y;S++)v[S]=this.i(S)|_.i(S);return new a(v,this.h|_.h)},e.xor=function(_){const y=Math.max(this.g.length,_.g.length),v=[];for(let S=0;S<y;S++)v[S]=this.i(S)^_.i(S);return new a(v,this.h^_.h)};function B(_){const y=_.g.length+1,v=[];for(let S=0;S<y;S++)v[S]=_.i(S)<<1|_.i(S-1)>>>31;return new a(v,_.h)}function F(_,y){const v=y>>5;y%=32;const S=_.g.length-v,w=[];for(let R=0;R<S;R++)w[R]=y>0?_.i(R+v)>>>y|_.i(R+v+1)<<32-y:_.i(R+v);return new a(w,_.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,yS=i,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,Bi=a}).apply(typeof J_<"u"?J_:typeof self<"u"?self:typeof window<"u"?window:{});var kl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _S,Ha,vS,ou,Id,ES,TS,AS;(function(){var e,t=Object.defineProperty;function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof kl=="object"&&kl];for(var c=0;c<o.length;++c){var f=o[c];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var i=n(this);function s(o,c){if(c)t:{var f=i;o=o.split(".");for(var p=0;p<o.length-1;p++){var C=o[p];if(!(C in f))break t;f=f[C]}o=o[o.length-1],p=f[o],c=c(p),c!=p&&c!=null&&t(f,o,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(c){var f=[],p;for(p in c)Object.prototype.hasOwnProperty.call(c,p)&&f.push([p,c[p]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},a=this||self;function l(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function u(o,c,f){return o.call.apply(o.bind,arguments)}function h(o,c,f){return h=u,h.apply(null,arguments)}function d(o,c){var f=Array.prototype.slice.call(arguments,1);return function(){var p=f.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function m(o,c){function f(){}f.prototype=c.prototype,o.Z=c.prototype,o.prototype=new f,o.prototype.constructor=o,o.Ob=function(p,C,O){for(var z=Array(arguments.length-2),tt=2;tt<arguments.length;tt++)z[tt-2]=arguments[tt];return c.prototype[C].apply(p,z)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function E(o){const c=o.length;if(c>0){const f=Array(c);for(let p=0;p<c;p++)f[p]=o[p];return f}return[]}function D(o,c){for(let p=1;p<arguments.length;p++){const C=arguments[p];var f=typeof C;if(f=f!="object"?f:C?Array.isArray(C)?"array":f:"null",f=="array"||f=="object"&&typeof C.length=="number"){f=o.length||0;const O=C.length||0;o.length=f+O;for(let z=0;z<O;z++)o[f+z]=C[z]}else o.push(C)}}class M{constructor(c,f){this.i=c,this.j=f,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function k(o){a.setTimeout(()=>{throw o},0)}function b(){var o=_;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class T{constructor(){this.h=this.g=null}add(c,f){const p=I.get();p.set(c,f),this.h?this.h.next=p:this.g=p,this.h=p}}var I=new M(()=>new V,o=>o.reset());class V{constructor(){this.next=this.g=this.h=null}set(c,f){this.h=c,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let B,F=!1,_=new T,y=()=>{const o=Promise.resolve(void 0);B=()=>{o.then(v)}};function v(){for(var o;o=b();){try{o.h.call(o.g)}catch(f){k(f)}var c=I;c.j(o),c.h<100&&(c.h++,o.next=c.g,c.g=o)}F=!1}function S(){this.u=this.u,this.C=this.C}S.prototype.u=!1,S.prototype.dispose=function(){this.u||(this.u=!0,this.N())},S.prototype[Symbol.dispose]=function(){this.dispose()},S.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function w(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};a.addEventListener("test",f,c),a.removeEventListener("test",f,c)}catch{}return o}();function A(o){return/^[\s\xa0]*$/.test(o)}function Ut(o,c){w.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,c)}m(Ut,w),Ut.prototype.init=function(o,c){const f=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget,c||(f=="mouseover"?c=o.fromElement:f=="mouseout"&&(c=o.toElement)),this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Ut.Z.h.call(this)},Ut.prototype.h=function(){Ut.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var De="closure_listenable_"+(Math.random()*1e6|0),N=0;function j(o,c,f,p,C){this.listener=o,this.proxy=null,this.src=c,this.type=f,this.capture=!!p,this.ha=C,this.key=++N,this.da=this.fa=!1}function G(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function et(o,c,f){for(const p in o)c.call(f,o[p],p,o)}function Tt(o,c){for(const f in o)c.call(void 0,o[f],f,o)}function On(o){const c={};for(const f in o)c[f]=o[f];return c}const ss="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Xs(o,c){let f,p;for(let C=1;C<arguments.length;C++){p=arguments[C];for(f in p)o[f]=p[f];for(let O=0;O<ss.length;O++)f=ss[O],Object.prototype.hasOwnProperty.call(p,f)&&(o[f]=p[f])}}function He(o){this.src=o,this.g={},this.h=0}He.prototype.add=function(o,c,f,p,C){const O=o.toString();o=this.g[O],o||(o=this.g[O]=[],this.h++);const z=Xc(o,c,p,C);return z>-1?(c=o[z],f||(c.fa=!1)):(c=new j(c,this.src,O,!!p,C),c.fa=f,o.push(c)),c};function ri(o,c){const f=c.type;if(f in o.g){var p=o.g[f],C=Array.prototype.indexOf.call(p,c,void 0),O;(O=C>=0)&&Array.prototype.splice.call(p,C,1),O&&(G(c),o.g[f].length==0&&(delete o.g[f],o.h--))}}function Xc(o,c,f,p){for(let C=0;C<o.length;++C){const O=o[C];if(!O.da&&O.listener==c&&O.capture==!!f&&O.ha==p)return C}return-1}var $c="closure_lm_"+(Math.random()*1e6|0),Jc={};function jg(o,c,f,p,C){if(Array.isArray(c)){for(let O=0;O<c.length;O++)jg(o,c[O],f,p,C);return null}return f=Fg(f),o&&o[De]?o.J(c,f,l(p)?!!p.capture:!1,C):Xb(o,c,f,!1,p,C)}function Xb(o,c,f,p,C,O){if(!c)throw Error("Invalid event type");const z=l(C)?!!C.capture:!!C;let tt=Wc(o);if(tt||(o[$c]=tt=new He(o)),f=tt.add(c,f,p,z,O),f.proxy)return f;if(p=$b(),f.proxy=p,p.src=o,p.listener=f,o.addEventListener)R||(C=z),C===void 0&&(C=!1),o.addEventListener(c.toString(),p,C);else if(o.attachEvent)o.attachEvent(Hg(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return f}function $b(){function o(f){return c.call(o.src,o.listener,f)}const c=Jb;return o}function qg(o,c,f,p,C){if(Array.isArray(c))for(var O=0;O<c.length;O++)qg(o,c[O],f,p,C);else p=l(p)?!!p.capture:!!p,f=Fg(f),o&&o[De]?(o=o.i,O=String(c).toString(),O in o.g&&(c=o.g[O],f=Xc(c,f,p,C),f>-1&&(G(c[f]),Array.prototype.splice.call(c,f,1),c.length==0&&(delete o.g[O],o.h--)))):o&&(o=Wc(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Xc(c,f,p,C)),(f=o>-1?c[o]:null)&&Zc(f))}function Zc(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[De])ri(c.i,o);else{var f=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(f,p,o.capture):c.detachEvent?c.detachEvent(Hg(f),p):c.addListener&&c.removeListener&&c.removeListener(p),(f=Wc(c))?(ri(f,o),f.h==0&&(f.src=null,c[$c]=null)):G(o)}}}function Hg(o){return o in Jc?Jc[o]:Jc[o]="on"+o}function Jb(o,c){if(o.da)o=!0;else{c=new Ut(c,this);const f=o.listener,p=o.ha||o.src;o.fa&&Zc(o),o=f.call(p,c)}return o}function Wc(o){return o=o[$c],o instanceof He?o:null}var th="__closure_events_fn_"+(Math.random()*1e9>>>0);function Fg(o){return typeof o=="function"?o:(o[th]||(o[th]=function(c){return o.handleEvent(c)}),o[th])}function ce(){S.call(this),this.i=new He(this),this.M=this,this.G=null}m(ce,S),ce.prototype[De]=!0,ce.prototype.removeEventListener=function(o,c,f,p){qg(this,o,c,f,p)};function ge(o,c){var f,p=o.G;if(p)for(f=[];p;p=p.G)f.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new w(c,o);else if(c instanceof w)c.target=c.target||o;else{var C=c;c=new w(p,o),Xs(c,C)}C=!0;let O,z;if(f)for(z=f.length-1;z>=0;z--)O=c.g=f[z],C=ll(O,p,!0,c)&&C;if(O=c.g=o,C=ll(O,p,!0,c)&&C,C=ll(O,p,!1,c)&&C,f)for(z=0;z<f.length;z++)O=c.g=f[z],C=ll(O,p,!1,c)&&C}ce.prototype.N=function(){if(ce.Z.N.call(this),this.i){var o=this.i;for(const c in o.g){const f=o.g[c];for(let p=0;p<f.length;p++)G(f[p]);delete o.g[c],o.h--}}this.G=null},ce.prototype.J=function(o,c,f,p){return this.i.add(String(o),c,!1,f,p)},ce.prototype.K=function(o,c,f,p){return this.i.add(String(o),c,!0,f,p)};function ll(o,c,f,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();let C=!0;for(let O=0;O<c.length;++O){const z=c[O];if(z&&!z.da&&z.capture==f){const tt=z.listener,Ft=z.ha||z.src;z.fa&&ri(o.i,z),C=tt.call(Ft,p)!==!1&&C}}return C&&!p.defaultPrevented}function Zb(o,c){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(o,c||0)}function Gg(o){o.g=Zb(()=>{o.g=null,o.i&&(o.i=!1,Gg(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Wb extends S{constructor(c,f){super(),this.m=c,this.l=f,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Gg(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fa(o){S.call(this),this.h=o,this.g={}}m(fa,S);var Kg=[];function Yg(o){et(o.g,function(c,f){this.g.hasOwnProperty(f)&&Zc(c)},o),o.g={}}fa.prototype.N=function(){fa.Z.N.call(this),Yg(this)},fa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var eh=a.JSON.stringify,tw=a.JSON.parse,ew=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Qg(){}function Xg(){}var da={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function nh(){w.call(this,"d")}m(nh,w);function ih(){w.call(this,"c")}m(ih,w);var rs={},$g=null;function ul(){return $g=$g||new ce}rs.Ia="serverreachability";function Jg(o){w.call(this,rs.Ia,o)}m(Jg,w);function ma(o){const c=ul();ge(c,new Jg(c))}rs.STAT_EVENT="statevent";function Zg(o,c){w.call(this,rs.STAT_EVENT,o),this.stat=c}m(Zg,w);function pe(o){const c=ul();ge(c,new Zg(c,o))}rs.Ja="timingevent";function Wg(o,c){w.call(this,rs.Ja,o),this.size=c}m(Wg,w);function ga(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},c)}function pa(){this.g=!0}pa.prototype.ua=function(){this.g=!1};function nw(o,c,f,p,C,O){o.info(function(){if(o.g)if(O){var z="",tt=O.split("&");for(let yt=0;yt<tt.length;yt++){var Ft=tt[yt].split("=");if(Ft.length>1){const Jt=Ft[0];Ft=Ft[1];const pn=Jt.split("_");z=pn.length>=2&&pn[1]=="type"?z+(Jt+"="+Ft+"&"):z+(Jt+"=redacted&")}}}else z=null;else z=O;return"XMLHTTP REQ ("+p+") [attempt "+C+"]: "+c+`
`+f+`
`+z})}function iw(o,c,f,p,C,O,z){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+C+"]: "+c+`
`+f+`
`+O+" "+z})}function $s(o,c,f,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+rw(o,f)+(p?" "+p:"")})}function sw(o,c){o.info(function(){return"TIMEOUT: "+c})}pa.prototype.info=function(){};function rw(o,c){if(!o.g)return c;if(!c)return null;try{const O=JSON.parse(c);if(O){for(o=0;o<O.length;o++)if(Array.isArray(O[o])){var f=O[o];if(!(f.length<2)){var p=f[1];if(Array.isArray(p)&&!(p.length<1)){var C=p[0];if(C!="noop"&&C!="stop"&&C!="close")for(let z=1;z<p.length;z++)p[z]=""}}}}return eh(O)}catch{return c}}var cl={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},tp={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ep;function sh(){}m(sh,Qg),sh.prototype.g=function(){return new XMLHttpRequest},ep=new sh;function ya(o){return encodeURIComponent(String(o))}function aw(o){var c=1;o=o.split(":");const f=[];for(;c>0&&o.length;)f.push(o.shift()),c--;return o.length&&f.push(o.join(":")),f}function ai(o,c,f,p){this.j=o,this.i=c,this.l=f,this.S=p||1,this.V=new fa(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new np}function np(){this.i=null,this.g="",this.h=!1}var ip={},rh={};function ah(o,c,f){o.M=1,o.A=fl(gn(c)),o.u=f,o.R=!0,sp(o,null)}function sp(o,c){o.F=Date.now(),hl(o),o.B=gn(o.A);var f=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),yp(f.i,"t",p),o.C=0,f=o.j.L,o.h=new np,o.g=Pp(o.j,f?c:null,!o.u),o.P>0&&(o.O=new Wb(h(o.Y,o,o.g),o.P)),c=o.V,f=o.g,p=o.ba;var C="readystatechange";Array.isArray(C)||(C&&(Kg[0]=C.toString()),C=Kg);for(let O=0;O<C.length;O++){const z=jg(f,C[O],p||c.handleEvent,!1,c.h||c);if(!z)break;c.g[z.key]=z}c=o.J?On(o.J):{},o.u?(o.v||(o.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,c)):(o.v="GET",o.g.ea(o.B,o.v,null,c)),ma(),nw(o.i,o.v,o.B,o.l,o.S,o.u)}ai.prototype.ba=function(o){o=o.target;const c=this.O;c&&ui(o)==3?c.j():this.Y(o)},ai.prototype.Y=function(o){try{if(o==this.g)t:{const tt=ui(this.g),Ft=this.g.ya(),yt=this.g.ca();if(!(tt<3)&&(tt!=3||this.g&&(this.h.h||this.g.la()||bp(this.g)))){this.K||tt!=4||Ft==7||(Ft==8||yt<=0?ma(3):ma(2)),oh(this);var c=this.g.ca();this.X=c;var f=ow(this);if(this.o=c==200,iw(this.i,this.v,this.B,this.l,this.S,tt,c),this.o){if(this.U&&!this.L){e:{if(this.g){var p,C=this.g;if((p=C.g?C.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(p)){var O=p;break e}}O=null}if(o=O)$s(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,lh(this,o);else{this.o=!1,this.m=3,pe(12),as(this),_a(this);break t}}if(this.R){o=!0;let Jt;for(;!this.K&&this.C<f.length;)if(Jt=lw(this,f),Jt==rh){tt==4&&(this.m=4,pe(14),o=!1),$s(this.i,this.l,null,"[Incomplete Response]");break}else if(Jt==ip){this.m=4,pe(15),$s(this.i,this.l,f,"[Invalid Chunk]"),o=!1;break}else $s(this.i,this.l,Jt,null),lh(this,Jt);if(rp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),tt!=4||f.length!=0||this.h.h||(this.m=1,pe(16),o=!1),this.o=this.o&&o,!o)$s(this.i,this.l,f,"[Invalid Chunked Response]"),as(this),_a(this);else if(f.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),ph(z),z.P=!0,pe(11))}}else $s(this.i,this.l,f,null),lh(this,f);tt==4&&as(this),this.o&&!this.K&&(tt==4?Op(this.j,this):(this.o=!1,hl(this)))}else Aw(this.g),c==400&&f.indexOf("Unknown SID")>0?(this.m=3,pe(12)):(this.m=0,pe(13)),as(this),_a(this)}}}catch{}finally{}};function ow(o){if(!rp(o))return o.g.la();const c=bp(o.g);if(c==="")return"";let f="";const p=c.length,C=ui(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return as(o),_a(o),"";o.h.i=new a.TextDecoder}for(let O=0;O<p;O++)o.h.h=!0,f+=o.h.i.decode(c[O],{stream:!(C&&O==p-1)});return c.length=0,o.h.g+=f,o.C=0,o.h.g}function rp(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function lw(o,c){var f=o.C,p=c.indexOf(`
`,f);return p==-1?rh:(f=Number(c.substring(f,p)),isNaN(f)?ip:(p+=1,p+f>c.length?rh:(c=c.slice(p,p+f),o.C=p+f,c)))}ai.prototype.cancel=function(){this.K=!0,as(this)};function hl(o){o.T=Date.now()+o.H,ap(o,o.H)}function ap(o,c){if(o.D!=null)throw Error("WatchDog timer not null");o.D=ga(h(o.aa,o),c)}function oh(o){o.D&&(a.clearTimeout(o.D),o.D=null)}ai.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(sw(this.i,this.B),this.M!=2&&(ma(),pe(17)),as(this),this.m=2,_a(this)):ap(this,this.T-o)};function _a(o){o.j.I==0||o.K||Op(o.j,o)}function as(o){oh(o);var c=o.O;c&&typeof c.dispose=="function"&&c.dispose(),o.O=null,Yg(o.V),o.g&&(c=o.g,o.g=null,c.abort(),c.dispose())}function lh(o,c){try{var f=o.j;if(f.I!=0&&(f.g==o||uh(f.h,o))){if(!o.L&&uh(f.h,o)&&f.I==3){try{var p=f.Ba.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var C=p;if(C[0]==0){t:if(!f.v){if(f.g)if(f.g.F+3e3<o.F)yl(f),gl(f);else break t;gh(f),pe(18)}}else f.xa=C[1],0<f.xa-f.K&&C[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=ga(h(f.Va,f),6e3));up(f.h)<=1&&f.ta&&(f.ta=void 0)}else ls(f,11)}else if((o.L||f.g==o)&&yl(f),!A(c))for(C=f.Ba.g.parse(c),c=0;c<C.length;c++){let yt=C[c];const Jt=yt[0];if(!(Jt<=f.K))if(f.K=Jt,yt=yt[1],f.I==2)if(yt[0]=="c"){f.M=yt[1],f.ba=yt[2];const pn=yt[3];pn!=null&&(f.ka=pn,f.j.info("VER="+f.ka));const us=yt[4];us!=null&&(f.za=us,f.j.info("SVER="+f.za));const ci=yt[5];ci!=null&&typeof ci=="number"&&ci>0&&(p=1.5*ci,f.O=p,f.j.info("backChannelRequestTimeoutMs_="+p)),p=f;const hi=o.g;if(hi){const vl=hi.g?hi.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vl){var O=p.h;O.g||vl.indexOf("spdy")==-1&&vl.indexOf("quic")==-1&&vl.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(ch(O,O.h),O.h=null))}if(p.G){const yh=hi.g?hi.g.getResponseHeader("X-HTTP-Session-Id"):null;yh&&(p.wa=yh,At(p.J,p.G,yh))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-o.F,f.j.info("Handshake RTT: "+f.T+"ms")),p=f;var z=o;if(p.na=Lp(p,p.L?p.ba:null,p.W),z.L){cp(p.h,z);var tt=z,Ft=p.O;Ft&&(tt.H=Ft),tt.D&&(oh(tt),hl(tt)),p.g=z}else Dp(p);f.i.length>0&&pl(f)}else yt[0]!="stop"&&yt[0]!="close"||ls(f,7);else f.I==3&&(yt[0]=="stop"||yt[0]=="close"?yt[0]=="stop"?ls(f,7):mh(f):yt[0]!="noop"&&f.l&&f.l.qa(yt),f.A=0)}}ma(4)}catch{}}var uw=class{constructor(o,c){this.g=o,this.map=c}};function op(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function lp(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function up(o){return o.h?1:o.g?o.g.size:0}function uh(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function ch(o,c){o.g?o.g.add(c):o.h=c}function cp(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}op.prototype.cancel=function(){if(this.i=hp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function hp(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const f of o.g.values())c=c.concat(f.G);return c}return E(o.i)}var fp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cw(o,c){if(o){o=o.split("&");for(let f=0;f<o.length;f++){const p=o[f].indexOf("=");let C,O=null;p>=0?(C=o[f].substring(0,p),O=o[f].substring(p+1)):C=o[f],c(C,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function oi(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;o instanceof oi?(this.l=o.l,va(this,o.j),this.o=o.o,this.g=o.g,Ea(this,o.u),this.h=o.h,hh(this,_p(o.i)),this.m=o.m):o&&(c=String(o).match(fp))?(this.l=!1,va(this,c[1]||"",!0),this.o=Ta(c[2]||""),this.g=Ta(c[3]||"",!0),Ea(this,c[4]),this.h=Ta(c[5]||"",!0),hh(this,c[6]||"",!0),this.m=Ta(c[7]||"")):(this.l=!1,this.i=new Sa(null,this.l))}oi.prototype.toString=function(){const o=[];var c=this.j;c&&o.push(Aa(c,dp,!0),":");var f=this.g;return(f||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Aa(c,dp,!0),"@"),o.push(ya(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&o.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Aa(f,f.charAt(0)=="/"?dw:fw,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Aa(f,gw)),o.join("")},oi.prototype.resolve=function(o){const c=gn(this);let f=!!o.j;f?va(c,o.j):f=!!o.o,f?c.o=o.o:f=!!o.g,f?c.g=o.g:f=o.u!=null;var p=o.h;if(f)Ea(c,o.u);else if(f=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var C=c.h.lastIndexOf("/");C!=-1&&(p=c.h.slice(0,C+1)+p)}if(C=p,C==".."||C==".")p="";else if(C.indexOf("./")!=-1||C.indexOf("/.")!=-1){p=C.lastIndexOf("/",0)==0,C=C.split("/");const O=[];for(let z=0;z<C.length;){const tt=C[z++];tt=="."?p&&z==C.length&&O.push(""):tt==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),p&&z==C.length&&O.push("")):(O.push(tt),p=!0)}p=O.join("/")}else p=C}return f?c.h=p:f=o.i.toString()!=="",f?hh(c,_p(o.i)):f=!!o.m,f&&(c.m=o.m),c};function gn(o){return new oi(o)}function va(o,c,f){o.j=f?Ta(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Ea(o,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);o.u=c}else o.u=null}function hh(o,c,f){c instanceof Sa?(o.i=c,pw(o.i,o.l)):(f||(c=Aa(c,mw)),o.i=new Sa(c,o.l))}function At(o,c,f){o.i.set(c,f)}function fl(o){return At(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Ta(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Aa(o,c,f){return typeof o=="string"?(o=encodeURI(o).replace(c,hw),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function hw(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var dp=/[#\/\?@]/g,fw=/[#\?:]/g,dw=/[#\?]/g,mw=/[#\?@]/g,gw=/#/g;function Sa(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function os(o){o.g||(o.g=new Map,o.h=0,o.i&&cw(o.i,function(c,f){o.add(decodeURIComponent(c.replace(/\+/g," ")),f)}))}e=Sa.prototype,e.add=function(o,c){os(this),this.i=null,o=Js(this,o);let f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(c),this.h+=1,this};function mp(o,c){os(o),c=Js(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function gp(o,c){return os(o),c=Js(o,c),o.g.has(c)}e.forEach=function(o,c){os(this),this.g.forEach(function(f,p){f.forEach(function(C){o.call(c,C,p,this)},this)},this)};function pp(o,c){os(o);let f=[];if(typeof c=="string")gp(o,c)&&(f=f.concat(o.g.get(Js(o,c))));else for(o=Array.from(o.g.values()),c=0;c<o.length;c++)f=f.concat(o[c]);return f}e.set=function(o,c){return os(this),this.i=null,o=Js(this,o),gp(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},e.get=function(o,c){return o?(o=pp(this,o),o.length>0?String(o[0]):c):c};function yp(o,c,f){mp(o,c),f.length>0&&(o.i=null,o.g.set(Js(o,c),E(f)),o.h+=f.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(let p=0;p<c.length;p++){var f=c[p];const C=ya(f);f=pp(this,f);for(let O=0;O<f.length;O++){let z=C;f[O]!==""&&(z+="="+ya(f[O])),o.push(z)}}return this.i=o.join("&")};function _p(o){const c=new Sa;return c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),c}function Js(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function pw(o,c){c&&!o.j&&(os(o),o.i=null,o.g.forEach(function(f,p){const C=p.toLowerCase();p!=C&&(mp(this,p),yp(this,C,f))},o)),o.j=c}function yw(o,c){const f=new pa;if(a.Image){const p=new Image;p.onload=d(li,f,"TestLoadImage: loaded",!0,c,p),p.onerror=d(li,f,"TestLoadImage: error",!1,c,p),p.onabort=d(li,f,"TestLoadImage: abort",!1,c,p),p.ontimeout=d(li,f,"TestLoadImage: timeout",!1,c,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function _w(o,c){const f=new pa,p=new AbortController,C=setTimeout(()=>{p.abort(),li(f,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(O=>{clearTimeout(C),O.ok?li(f,"TestPingServer: ok",!0,c):li(f,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(C),li(f,"TestPingServer: error",!1,c)})}function li(o,c,f,p,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),p(f)}catch{}}function vw(){this.g=new ew}function fh(o){this.i=o.Sb||null,this.h=o.ab||!1}m(fh,Qg),fh.prototype.g=function(){return new dl(this.i,this.h)};function dl(o,c){ce.call(this),this.H=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(dl,ce),e=dl.prototype,e.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=c,this.readyState=1,wa(this)},e.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(c.body=o),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ba(this)),this.readyState=0},e.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,wa(this)),this.g&&(this.readyState=3,wa(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;vp(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function vp(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}e.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?ba(this):wa(this),this.readyState==3&&vp(this)}},e.Oa=function(o){this.g&&(this.response=this.responseText=o,ba(this))},e.Na=function(o){this.g&&(this.response=o,ba(this))},e.ga=function(){this.g&&ba(this)};function ba(o){o.readyState=4,o.l=null,o.j=null,o.B=null,wa(o)}e.setRequestHeader=function(o,c){this.A.append(o,c)},e.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var f=c.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=c.next();return o.join(`\r
`)};function wa(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(dl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ep(o){let c="";return et(o,function(f,p){c+=p,c+=":",c+=f,c+=`\r
`}),c}function dh(o,c,f){t:{for(p in f){var p=!1;break t}p=!0}p||(f=Ep(f),typeof o=="string"?f!=null&&ya(f):At(o,c,f))}function Nt(o){ce.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Nt,ce);var Ew=/^https?$/i,Tw=["POST","PUT"];e=Nt.prototype,e.Fa=function(o){this.H=o},e.ea=function(o,c,f,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ep.g(),this.g.onreadystatechange=g(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(O){Tp(this,O);return}if(o=f||"",f=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var C in p)f.set(C,p[C]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const O of p.keys())f.set(O,p.get(O));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),C=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Tw,c,void 0)>=0)||p||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,z]of f)this.g.setRequestHeader(O,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(O){Tp(this,O)}};function Tp(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.o=5,Ap(o),ml(o)}function Ap(o){o.A||(o.A=!0,ge(o,"complete"),ge(o,"error"))}e.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,ge(this,"complete"),ge(this,"abort"),ml(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ml(this,!0)),Nt.Z.N.call(this)},e.Ca=function(){this.u||(this.B||this.v||this.j?Sp(this):this.Xa())},e.Xa=function(){Sp(this)};function Sp(o){if(o.h&&typeof r<"u"){if(o.v&&ui(o)==4)setTimeout(o.Ca.bind(o),0);else if(ge(o,"readystatechange"),ui(o)==4){o.h=!1;try{const O=o.ca();t:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var f;if(!(f=c)){var p;if(p=O===0){let z=String(o.D).match(fp)[1]||null;!z&&a.self&&a.self.location&&(z=a.self.location.protocol.slice(0,-1)),p=!Ew.test(z?z.toLowerCase():"")}f=p}if(f)ge(o,"complete"),ge(o,"success");else{o.o=6;try{var C=ui(o)>2?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.ca()+"]",Ap(o)}}finally{ml(o)}}}}function ml(o,c){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const f=o.g;o.g=null,c||ge(o,"ready");try{f.onreadystatechange=null}catch{}}}e.isActive=function(){return!!this.g};function ui(o){return o.g?o.g.readyState:0}e.ca=function(){try{return ui(this)>2?this.g.status:-1}catch{return-1}},e.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.La=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),tw(c)}};function bp(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Aw(o){const c={};o=(o.g&&ui(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(A(o[p]))continue;var f=aw(o[p]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=c[C]||[];c[C]=O,O.push(f)}Tt(c,function(p){return p.join(", ")})}e.ya=function(){return this.o},e.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ia(o,c,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||c}function wp(o){this.za=0,this.i=[],this.j=new pa,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ia("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ia("baseRetryDelayMs",5e3,o),this.Za=Ia("retryDelaySeedMs",1e4,o),this.Ta=Ia("forwardChannelMaxRetries",2,o),this.va=Ia("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new op(o&&o.concurrentRequestLimit),this.Ba=new vw,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}e=wp.prototype,e.ka=8,e.I=1,e.connect=function(o,c,f,p){pe(0),this.W=o,this.H=c||{},f&&p!==void 0&&(this.H.OSID=f,this.H.OAID=p),this.F=this.X,this.J=Lp(this,null,this.W),pl(this)};function mh(o){if(Ip(o),o.I==3){var c=o.V++,f=gn(o.J);if(At(f,"SID",o.M),At(f,"RID",c),At(f,"TYPE","terminate"),Ra(o,f),c=new ai(o,o.j,c),c.M=2,c.A=fl(gn(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!f&&a.Image&&(new Image().src=c.A,f=!0),f||(c.g=Pp(c.j,null),c.g.ea(c.A)),c.F=Date.now(),hl(c)}Mp(o)}function gl(o){o.g&&(ph(o),o.g.cancel(),o.g=null)}function Ip(o){gl(o),o.v&&(a.clearTimeout(o.v),o.v=null),yl(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function pl(o){if(!lp(o.h)&&!o.m){o.m=!0;var c=o.Ea;B||y(),F||(B(),F=!0),_.add(c,o),o.D=0}}function Sw(o,c){return up(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=c.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=ga(h(o.Ea,o,c),Vp(o,o.D)),o.D++,!0)}e.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const C=new ai(this,this.j,o);let O=this.o;if(this.U&&(O?(O=On(O),Xs(O,this.U)):O=this.U),this.u!==null||this.R||(C.J=O,O=null),this.S)t:{for(var c=0,f=0;f<this.i.length;f++){e:{var p=this.i[f];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(c+=p,c>4096){c=f;break t}if(c===4096||f===this.i.length-1){c=f+1;break t}}c=1e3}else c=1e3;c=Cp(this,C,c),f=gn(this.J),At(f,"RID",o),At(f,"CVER",22),this.G&&At(f,"X-HTTP-Session-Id",this.G),Ra(this,f),O&&(this.R?c="headers="+ya(Ep(O))+"&"+c:this.u&&dh(f,this.u,O)),ch(this.h,C),this.Ra&&At(f,"TYPE","init"),this.S?(At(f,"$req",c),At(f,"SID","null"),C.U=!0,ah(C,f,null)):ah(C,f,c),this.I=2}}else this.I==3&&(o?Rp(this,o):this.i.length==0||lp(this.h)||Rp(this))};function Rp(o,c){var f;c?f=c.l:f=o.V++;const p=gn(o.J);At(p,"SID",o.M),At(p,"RID",f),At(p,"AID",o.K),Ra(o,p),o.u&&o.o&&dh(p,o.u,o.o),f=new ai(o,o.j,f,o.D+1),o.u===null&&(f.J=o.o),c&&(o.i=c.G.concat(o.i)),c=Cp(o,f,1e3),f.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),ch(o.h,f),ah(f,p,c)}function Ra(o,c){o.H&&et(o.H,function(f,p){At(c,p,f)}),o.l&&et({},function(f,p){At(c,p,f)})}function Cp(o,c,f){f=Math.min(o.i.length,f);const p=o.l?h(o.l.Ka,o.l,o):null;t:{var C=o.i;let tt=-1;for(;;){const Ft=["count="+f];tt==-1?f>0?(tt=C[0].g,Ft.push("ofs="+tt)):tt=0:Ft.push("ofs="+tt);let yt=!0;for(let Jt=0;Jt<f;Jt++){var O=C[Jt].g;const pn=C[Jt].map;if(O-=tt,O<0)tt=Math.max(0,C[Jt].g-100),yt=!1;else try{O="req"+O+"_"||"";try{var z=pn instanceof Map?pn:Object.entries(pn);for(const[us,ci]of z){let hi=ci;l(ci)&&(hi=eh(ci)),Ft.push(O+us+"="+encodeURIComponent(hi))}}catch(us){throw Ft.push(O+"type="+encodeURIComponent("_badmap")),us}}catch{p&&p(pn)}}if(yt){z=Ft.join("&");break t}}z=void 0}return o=o.i.splice(0,f),c.G=o,z}function Dp(o){if(!o.g&&!o.v){o.Y=1;var c=o.Da;B||y(),F||(B(),F=!0),_.add(c,o),o.A=0}}function gh(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=ga(h(o.Da,o),Vp(o,o.A)),o.A++,!0)}e.Da=function(){if(this.v=null,Np(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=ga(h(this.Wa,this),o)}},e.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,pe(10),gl(this),Np(this))};function ph(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Np(o){o.g=new ai(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var c=gn(o.na);At(c,"RID","rpc"),At(c,"SID",o.M),At(c,"AID",o.K),At(c,"CI",o.F?"0":"1"),!o.F&&o.ia&&At(c,"TO",o.ia),At(c,"TYPE","xmlhttp"),Ra(o,c),o.u&&o.o&&dh(c,o.u,o.o),o.O&&(o.g.H=o.O);var f=o.g;o=o.ba,f.M=1,f.A=fl(gn(c)),f.u=null,f.R=!0,sp(f,o)}e.Va=function(){this.C!=null&&(this.C=null,gl(this),gh(this),pe(19))};function yl(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Op(o,c){var f=null;if(o.g==c){yl(o),ph(o),o.g=null;var p=2}else if(uh(o.h,c))f=c.G,cp(o.h,c),p=1;else return;if(o.I!=0){if(c.o)if(p==1){f=c.u?c.u.length:0,c=Date.now()-c.F;var C=o.D;p=ul(),ge(p,new Wg(p,f)),pl(o)}else Dp(o);else if(C=c.m,C==3||C==0&&c.X>0||!(p==1&&Sw(o,c)||p==2&&gh(o)))switch(f&&f.length>0&&(c=o.h,c.i=c.i.concat(f)),C){case 1:ls(o,5);break;case 4:ls(o,10);break;case 3:ls(o,6);break;default:ls(o,2)}}}function Vp(o,c){let f=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(f*=2),f*c}function ls(o,c){if(o.j.info("Error code "+c),c==2){var f=h(o.bb,o),p=o.Ua;const C=!p;p=new oi(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||va(p,"https"),fl(p),C?yw(p.toString(),f):_w(p.toString(),f)}else pe(2);o.I=0,o.l&&o.l.pa(c),Mp(o),Ip(o)}e.bb=function(o){o?(this.j.info("Successfully pinged google.com"),pe(2)):(this.j.info("Failed to ping google.com"),pe(1))};function Mp(o){if(o.I=0,o.ja=[],o.l){const c=hp(o.h);(c.length!=0||o.i.length!=0)&&(D(o.ja,c),D(o.ja,o.i),o.h.i.length=0,E(o.i),o.i.length=0),o.l.oa()}}function Lp(o,c,f){var p=f instanceof oi?gn(f):new oi(f);if(p.g!="")c&&(p.g=c+"."+p.g),Ea(p,p.u);else{var C=a.location;p=C.protocol,c=c?c+"."+C.hostname:C.hostname,C=+C.port;const O=new oi(null);p&&va(O,p),c&&(O.g=c),C&&Ea(O,C),f&&(O.h=f),p=O}return f=o.G,c=o.wa,f&&c&&At(p,f,c),At(p,"VER",o.ka),Ra(o,p),p}function Pp(o,c,f){if(c&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Aa&&!o.ma?new Nt(new fh({ab:f})):new Nt(o.ma),c.Fa(o.L),c}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function Up(){}e=Up.prototype,e.ra=function(){},e.qa=function(){},e.pa=function(){},e.oa=function(){},e.isActive=function(){return!0},e.Ka=function(){};function _l(){}_l.prototype.g=function(o,c){return new Ne(o,c)};function Ne(o,c){ce.call(this),this.g=new wp(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(o?o["X-WebChannel-Client-Profile"]=c.sa:o={"X-WebChannel-Client-Profile":c.sa}),this.g.U=o,(o=c&&c.Qb)&&!A(o)&&(this.g.u=o),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!A(c)&&(this.g.G=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Zs(this)}m(Ne,ce),Ne.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ne.prototype.close=function(){mh(this.g)},Ne.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.v&&(f={},f.__data__=eh(o),o=f);c.i.push(new uw(c.Ya++,o)),c.I==3&&pl(c)},Ne.prototype.N=function(){this.g.l=null,delete this.j,mh(this.g),delete this.g,Ne.Z.N.call(this)};function kp(o){nh.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){t:{for(const f in c){o=f;break t}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}m(kp,nh);function xp(){ih.call(this),this.status=1}m(xp,ih);function Zs(o){this.g=o}m(Zs,Up),Zs.prototype.ra=function(){ge(this.g,"a")},Zs.prototype.qa=function(o){ge(this.g,new kp(o))},Zs.prototype.pa=function(o){ge(this.g,new xp)},Zs.prototype.oa=function(){ge(this.g,"b")},_l.prototype.createWebChannel=_l.prototype.g,Ne.prototype.send=Ne.prototype.o,Ne.prototype.open=Ne.prototype.m,Ne.prototype.close=Ne.prototype.close,AS=function(){return new _l},TS=function(){return ul()},ES=rs,Id={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},cl.NO_ERROR=0,cl.TIMEOUT=8,cl.HTTP_ERROR=6,ou=cl,tp.COMPLETE="complete",vS=tp,Xg.EventType=da,da.OPEN="a",da.CLOSE="b",da.ERROR="c",da.MESSAGE="d",ce.prototype.listen=ce.prototype.J,Ha=Xg,Nt.prototype.listenOnce=Nt.prototype.K,Nt.prototype.getLastError=Nt.prototype.Ha,Nt.prototype.getLastErrorCode=Nt.prototype.ya,Nt.prototype.getStatus=Nt.prototype.ca,Nt.prototype.getResponseJson=Nt.prototype.La,Nt.prototype.getResponseText=Nt.prototype.la,Nt.prototype.send=Nt.prototype.ea,Nt.prototype.setWithCredentials=Nt.prototype.Fa,_S=Nt}).apply(typeof kl<"u"?kl:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class fe{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}fe.UNAUTHENTICATED=new fe(null),fe.GOOGLE_CREDENTIALS=new fe("google-credentials-uid"),fe.FIRST_PARTY=new fe("first-party-uid"),fe.MOCK_USER=new fe("mock-user");/**
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
 */let oa="12.12.0";function qO(e){oa=e}/**
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
 */const Ps=new Nc("@firebase/firestore");function sr(){return Ps.logLevel}function q(e,...t){if(Ps.logLevel<=st.DEBUG){const n=t.map(lg);Ps.debug(`Firestore (${oa}): ${e}`,...n)}}function ni(e,...t){if(Ps.logLevel<=st.ERROR){const n=t.map(lg);Ps.error(`Firestore (${oa}): ${e}`,...n)}}function Us(e,...t){if(Ps.logLevel<=st.WARN){const n=t.map(lg);Ps.warn(`Firestore (${oa}): ${e}`,...n)}}function lg(e){if(typeof e=="string")return e;try{return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
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
 */function Q(e,t,n){let i="Unexpected state";typeof t=="string"?i=t:n=t,SS(e,i,n)}function SS(e,t,n){let i=`FIRESTORE (${oa}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(n!==void 0)try{i+=" CONTEXT: "+JSON.stringify(n)}catch{i+=" CONTEXT: "+n}throw ni(i),new Error(i)}function ft(e,t,n,i){let s="Unexpected state";typeof n=="string"?s=n:i=n,e||SS(t,s,i)}function J(e,t){return e}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends mn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class bs{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class bS{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class HO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(fe.UNAUTHENTICATED))}shutdown(){}}class FO{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class GO{constructor(t){this.t=t,this.currentUser=fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){ft(this.o===void 0,42304);let i=this.i;const s=u=>this.i!==i?(i=this.i,n(u)):Promise.resolve();let r=new bs;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new bs,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=r;t.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new bs)}},0),a()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==t?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ft(typeof i.accessToken=="string",31837,{l:i}),new bS(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return ft(t===null||typeof t=="string",2055,{h:t}),new fe(t)}}class KO{constructor(t,n,i){this.P=t,this.T=n,this.I=i,this.type="FirstParty",this.user=fe.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class YO{constructor(t,n,i){this.P=t,this.T=n,this.I=i}getToken(){return Promise.resolve(new KO(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable(()=>n(fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Z_{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class QO{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Le(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){ft(this.o===void 0,3512);const i=r=>{r.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const a=r.token!==this.m;return this.m=r.token,q("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>i(r))};const s=r=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?s(r):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Z_(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(ft(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Z_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function XO(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class ug{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=XO(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=t.charAt(s[r]%62))}return i}}function rt(e,t){return e<t?-1:e>t?1:0}function Rd(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const s=e.charAt(i),r=t.charAt(i);if(s!==r)return ff(s)===ff(r)?rt(s,r):ff(s)?1:-1}return rt(e.length,t.length)}const $O=55296,JO=57343;function ff(e){const t=e.charCodeAt(0);return t>=$O&&t<=JO}function Kr(e,t,n){return e.length===t.length&&e.every((i,s)=>n(i,t[s]))}/**
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
 */const W_="__name__";class yn{constructor(t,n,i){n===void 0?n=0:n>t.length&&Q(637,{offset:n,range:t.length}),i===void 0?i=t.length-n:i>t.length-n&&Q(1746,{length:i,range:t.length-n}),this.segments=t,this.offset=n,this.len=i}get length(){return this.len}isEqual(t){return yn.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof yn?t.forEach(i=>{n.push(i)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,i=this.limit();n<i;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const i=Math.min(t.length,n.length);for(let s=0;s<i;s++){const r=yn.compareSegments(t.get(s),n.get(s));if(r!==0)return r}return rt(t.length,n.length)}static compareSegments(t,n){const i=yn.isNumericId(t),s=yn.isNumericId(n);return i&&!s?-1:!i&&s?1:i&&s?yn.extractNumericId(t).compare(yn.extractNumericId(n)):Rd(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Bi.fromString(t.substring(4,t.length-2))}}class vt extends yn{construct(t,n,i){return new vt(t,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const i of t){if(i.indexOf("//")>=0)throw new H(P.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new vt(n)}static emptyPath(){return new vt([])}}const ZO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ae extends yn{construct(t,n,i){return new ae(t,n,i)}static isValidIdentifier(t){return ZO.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ae.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===W_}static keyField(){return new ae([W_])}static fromServerFormat(t){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new H(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new H(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(i+=l,s++):(r(),s++)}if(r(),a)throw new H(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ae(n)}static emptyPath(){return new ae([])}}/**
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
 */class K{constructor(t){this.path=t}static fromPath(t){return new K(vt.fromString(t))}static fromName(t){return new K(vt.fromString(t).popFirst(5))}static empty(){return new K(vt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&vt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return vt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new K(new vt(t.slice()))}}/**
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
 */function wS(e,t,n){if(!n)throw new H(P.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function WO(e,t,n,i){if(t===!0&&i===!0)throw new H(P.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function tv(e){if(!K.isDocumentKey(e))throw new H(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ev(e){if(K.isDocumentKey(e))throw new H(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function IS(e){return typeof e=="object"&&e!==null&&(Object.getPrototypeOf(e)===Object.prototype||Object.getPrototypeOf(e)===null)}function Uc(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Q(12329,{type:typeof e})}function Or(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new H(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Uc(e);throw new H(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */function Ht(e,t){const n={typeString:e};return t&&(n.value=t),n}function nl(e,t){if(!IS(e))throw new H(P.INVALID_ARGUMENT,"JSON must be an object");let n;for(const i in t)if(t[i]){const s=t[i].typeString,r="value"in t[i]?{value:t[i].value}:void 0;if(!(i in e)){n=`JSON missing required field: '${i}'`;break}const a=e[i];if(s&&typeof a!==s){n=`JSON field '${i}' must be a ${s}.`;break}if(r!==void 0&&a!==r.value){n=`Expected '${i}' field to equal '${r.value}'`;break}}if(n)throw new H(P.INVALID_ARGUMENT,n);return!0}/**
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
 */const nv=-62135596800,iv=1e6;class wt{static now(){return wt.fromMillis(Date.now())}static fromDate(t){return wt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),i=Math.floor((t-1e3*n)*iv);return new wt(n,i)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new H(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<nv)throw new H(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new H(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/iv}_compareTo(t){return this.seconds===t.seconds?rt(this.nanoseconds,t.nanoseconds):rt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:wt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(nl(t,wt._jsonSchema))return new wt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-nv;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}wt._jsonSchemaVersion="firestore/timestamp/1.0",wt._jsonSchema={type:Ht("string",wt._jsonSchemaVersion),seconds:Ht("number"),nanoseconds:Ht("number")};/**
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
 */class ${static fromTimestamp(t){return new $(t)}static min(){return new $(new wt(0,0))}static max(){return new $(new wt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Oo=-1;function tV(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,s=$.fromTimestamp(i===1e9?new wt(n+1,0):new wt(n,i));return new Yi(s,K.empty(),t)}function eV(e){return new Yi(e.readTime,e.key,Oo)}class Yi{constructor(t,n,i){this.readTime=t,this.documentKey=n,this.largestBatchId=i}static min(){return new Yi($.min(),K.empty(),Oo)}static max(){return new Yi($.max(),K.empty(),Oo)}}function nV(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=K.comparator(e.documentKey,t.documentKey),n!==0?n:rt(e.largestBatchId,t.largestBatchId))}/**
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
 */const iV="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sV{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function la(e){if(e.code!==P.FAILED_PRECONDITION||e.message!==iV)throw e;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class U{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&Q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new U((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):U.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):U.reject(n)}static resolve(t){return new U((n,i)=>{n(t)})}static reject(t){return new U((n,i)=>{i(t)})}static waitFor(t){return new U((n,i)=>{let s=0,r=0,a=!1;t.forEach(l=>{++s,l.next(()=>{++r,a&&r===s&&n()},u=>i(u))}),a=!0,r===s&&n()})}static or(t){let n=U.resolve(!1);for(const i of t)n=n.next(s=>s?U.resolve(s):i());return n}static forEach(t,n){const i=[];return t.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(t,n){return new U((i,s)=>{const r=t.length,a=new Array(r);let l=0;for(let u=0;u<r;u++){const h=u;n(t[h]).next(d=>{a[h]=d,++l,l===r&&i(a)},d=>s(d))}})}static doWhile(t,n){return new U((i,s)=>{const r=()=>{t()===!0?n().next(()=>{r()},s):i()};r()})}}function rV(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ua(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class kc{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>n.writeSequenceNumber(i))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}kc.ce=-1;/**
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
 */const cg=-1;function xc(e){return e==null}function Zu(e){return e===0&&1/e==-1/0}function aV(e){return typeof e=="number"&&Number.isInteger(e)&&!Zu(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */const RS="";function oV(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=sv(t)),t=lV(e.get(n),t);return sv(t)}function lV(e,t){let n=t;const i=e.length;for(let s=0;s<i;s++){const r=e.charAt(s);switch(r){case"\0":n+="";break;case RS:n+="";break;default:n+=r}}return n}function sv(e){return e+RS+""}/**
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
 */function rv(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Gs(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function CS(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class Dt{constructor(t,n){this.comparator=t,this.root=n||ie.EMPTY}insert(t,n){return new Dt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,ie.BLACK,null,null))}remove(t){return new Dt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ie.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(t){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,i)=>(t(n,i),!1))}toString(){const t=[];return this.inorderTraversal((n,i)=>(t.push(`${n}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new xl(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new xl(this.root,t,this.comparator,!1)}getReverseIterator(){return new xl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new xl(this.root,t,this.comparator,!0)}}class xl{constructor(t,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?i(t.key,n):1,n&&s&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ie{constructor(t,n,i,s,r){this.key=t,this.value=n,this.color=i??ie.RED,this.left=s??ie.EMPTY,this.right=r??ie.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,i,s,r){return new ie(t??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let s=this;const r=i(t,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(t,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ie.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let i,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return ie.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Q(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw Q(27949);return t+(this.isRed()?0:1)}}ie.EMPTY=null,ie.RED=!0,ie.BLACK=!1;ie.EMPTY=new class{constructor(){this.size=0}get key(){throw Q(57766)}get value(){throw Q(16141)}get color(){throw Q(16727)}get left(){throw Q(29726)}get right(){throw Q(36894)}copy(t,n,i,s,r){return this}insert(t,n,i){return new ie(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Qt{constructor(t){this.comparator=t,this.data=new Dt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,i)=>(t(n),!1))}forEachInRange(t,n){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new av(this.data.getIterator())}getIteratorFrom(t){return new av(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(i=>{n=n.add(i)}),n}isEqual(t){if(!(t instanceof Qt)||this.size!==t.size)return!1;const n=this.data.getIterator(),i=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Qt(this.comparator);return n.data=t,n}}class av{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ln{constructor(t){this.fields=t,t.sort(ae.comparator)}static empty(){return new ln([])}unionWith(t){let n=new Qt(ae.comparator);for(const i of this.fields)n=n.add(i);for(const i of t)n=n.add(i);return new ln(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Kr(this.fields,t.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class DS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ue{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new DS("Invalid base64 string: "+r):r}}(t);return new ue(n)}static fromUint8Array(t){const n=function(s){let r="";for(let a=0;a<s.length;++a)r+=String.fromCharCode(s[a]);return r}(t);return new ue(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return rt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ue.EMPTY_BYTE_STRING=new ue("");const uV=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qi(e){if(ft(!!e,39018),typeof e=="string"){let t=0;const n=uV.exec(e);if(ft(!!n,46558,{timestamp:e}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:Mt(e.seconds),nanos:Mt(e.nanos)}}function Mt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Xi(e){return typeof e=="string"?ue.fromBase64String(e):ue.fromUint8Array(e)}/**
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
 */const NS="server_timestamp",OS="__type__",VS="__previous_value__",MS="__local_write_time__";function hg(e){var n,i;return((i=(((n=e==null?void 0:e.mapValue)==null?void 0:n.fields)||{})[OS])==null?void 0:i.stringValue)===NS}function zc(e){const t=e.mapValue.fields[VS];return hg(t)?zc(t):t}function Vo(e){const t=Qi(e.mapValue.fields[MS].timestampValue);return new wt(t.seconds,t.nanos)}/**
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
 */class cV{constructor(t,n,i,s,r,a,l,u,h,d,m){this.databaseId=t,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=d,this.apiKey=m}}const Wu="(default)";class Mo{constructor(t,n){this.projectId=t,this.database=n||Wu}static empty(){return new Mo("","")}get isDefaultDatabase(){return this.database===Wu}isEqual(t){return t instanceof Mo&&t.projectId===this.projectId&&t.database===this.database}}function hV(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new H(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mo(e.options.projectId,t)}/**
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
 */const LS="__type__",fV="__max__",zl={mapValue:{}},PS="__vector__",tc="value";function $i(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?hg(e)?4:mV(e)?9007199254740991:dV(e)?10:11:Q(28295,{value:e})}function Cn(e,t){if(e===t)return!0;const n=$i(e);if(n!==$i(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Vo(e).isEqual(Vo(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const a=Qi(s.timestampValue),l=Qi(r.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return Xi(s.bytesValue).isEqual(Xi(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return Mt(s.geoPointValue.latitude)===Mt(r.geoPointValue.latitude)&&Mt(s.geoPointValue.longitude)===Mt(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Mt(s.integerValue)===Mt(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const a=Mt(s.doubleValue),l=Mt(r.doubleValue);return a===l?Zu(a)===Zu(l):isNaN(a)&&isNaN(l)}return!1}(e,t);case 9:return Kr(e.arrayValue.values||[],t.arrayValue.values||[],Cn);case 10:case 11:return function(s,r){const a=s.mapValue.fields||{},l=r.mapValue.fields||{};if(rv(a)!==rv(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Cn(a[u],l[u])))return!1;return!0}(e,t);default:return Q(52216,{left:e})}}function Lo(e,t){return(e.values||[]).find(n=>Cn(n,t))!==void 0}function Yr(e,t){if(e===t)return 0;const n=$i(e),i=$i(t);if(n!==i)return rt(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return rt(e.booleanValue,t.booleanValue);case 2:return function(r,a){const l=Mt(r.integerValue||r.doubleValue),u=Mt(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(e,t);case 3:return ov(e.timestampValue,t.timestampValue);case 4:return ov(Vo(e),Vo(t));case 5:return Rd(e.stringValue,t.stringValue);case 6:return function(r,a){const l=Xi(r),u=Xi(a);return l.compareTo(u)}(e.bytesValue,t.bytesValue);case 7:return function(r,a){const l=r.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const d=rt(l[h],u[h]);if(d!==0)return d}return rt(l.length,u.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,a){const l=rt(Mt(r.latitude),Mt(a.latitude));return l!==0?l:rt(Mt(r.longitude),Mt(a.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return lv(e.arrayValue,t.arrayValue);case 10:return function(r,a){var g,E,D,M;const l=r.fields||{},u=a.fields||{},h=(g=l[tc])==null?void 0:g.arrayValue,d=(E=u[tc])==null?void 0:E.arrayValue,m=rt(((D=h==null?void 0:h.values)==null?void 0:D.length)||0,((M=d==null?void 0:d.values)==null?void 0:M.length)||0);return m!==0?m:lv(h,d)}(e.mapValue,t.mapValue);case 11:return function(r,a){if(r===zl.mapValue&&a===zl.mapValue)return 0;if(r===zl.mapValue)return 1;if(a===zl.mapValue)return-1;const l=r.fields||{},u=Object.keys(l),h=a.fields||{},d=Object.keys(h);u.sort(),d.sort();for(let m=0;m<u.length&&m<d.length;++m){const g=Rd(u[m],d[m]);if(g!==0)return g;const E=Yr(l[u[m]],h[d[m]]);if(E!==0)return E}return rt(u.length,d.length)}(e.mapValue,t.mapValue);default:throw Q(23264,{he:n})}}function ov(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return rt(e,t);const n=Qi(e),i=Qi(t),s=rt(n.seconds,i.seconds);return s!==0?s:rt(n.nanos,i.nanos)}function lv(e,t){const n=e.values||[],i=t.values||[];for(let s=0;s<n.length&&s<i.length;++s){const r=Yr(n[s],i[s]);if(r)return r}return rt(n.length,i.length)}function Qr(e){return Cd(e)}function Cd(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const i=Qi(n);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Xi(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return K.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let i="[",s=!0;for(const r of n.values||[])s?s=!1:i+=",",i+=Cd(r);return i+"]"}(e.arrayValue):"mapValue"in e?function(n){const i=Object.keys(n.fields||{}).sort();let s="{",r=!0;for(const a of i)r?r=!1:s+=",",s+=`${a}:${Cd(n.fields[a])}`;return s+"}"}(e.mapValue):Q(61005,{value:e})}function lu(e){switch($i(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=zc(e);return t?16+lu(t):16;case 5:return 2*e.stringValue.length;case 6:return Xi(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((s,r)=>s+lu(r),0)}(e.arrayValue);case 10:case 11:return function(i){let s=0;return Gs(i.fields,(r,a)=>{s+=r.length+lu(a)}),s}(e.mapValue);default:throw Q(13486,{value:e})}}function uv(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Dd(e){return!!e&&"integerValue"in e}function fg(e){return!!e&&"arrayValue"in e}function cv(e){return!!e&&"nullValue"in e}function hv(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function uu(e){return!!e&&"mapValue"in e}function dV(e){var n,i;return((i=(((n=e==null?void 0:e.mapValue)==null?void 0:n.fields)||{})[LS])==null?void 0:i.stringValue)===PS}function lo(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:{...e.timestampValue}};if(e.mapValue){const t={mapValue:{fields:{}}};return Gs(e.mapValue.fields,(n,i)=>t.mapValue.fields[n]=lo(i)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=lo(e.arrayValue.values[n]);return t}return{...e}}function mV(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===fV}/**
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
 */class Je{constructor(t){this.value=t}static empty(){return new Je({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let i=0;i<t.length-1;++i)if(n=(n.mapValue.fields||{})[t.get(i)],!uu(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=lo(n)}setAll(t){let n=ae.emptyPath(),i={},s=[];t.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,i,s),i={},s=[],n=l.popLast()}a?i[l.lastSegment()]=lo(a):s.push(l.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(t){const n=this.field(t.popLast());uu(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Cn(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=n.mapValue.fields[t.get(i)];uu(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,i){Gs(n,(s,r)=>t[s]=r);for(const s of i)delete t[s]}clone(){return new Je(lo(this.value))}}function US(e){const t=[];return Gs(e.fields,(n,i)=>{const s=new ae([n]);if(uu(i)){const r=US(i.mapValue).fields;if(r.length===0)t.push(s);else for(const a of r)t.push(s.child(a))}else t.push(s)}),new ln(t)}/**
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
 */class de{constructor(t,n,i,s,r,a,l){this.key=t,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=a,this.documentState=l}static newInvalidDocument(t){return new de(t,0,$.min(),$.min(),$.min(),Je.empty(),0)}static newFoundDocument(t,n,i,s){return new de(t,1,n,$.min(),i,s,0)}static newNoDocument(t,n){return new de(t,2,n,$.min(),$.min(),Je.empty(),0)}static newUnknownDocument(t,n){return new de(t,3,n,$.min(),$.min(),Je.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Je.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Je.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof de&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new de(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ec{constructor(t,n){this.position=t,this.inclusive=n}}function fv(e,t,n){let i=0;for(let s=0;s<e.position.length;s++){const r=t[s],a=e.position[s];if(r.field.isKeyField()?i=K.comparator(K.fromName(a.referenceValue),n.key):i=Yr(a,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function dv(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Cn(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class nc{constructor(t,n="asc"){this.field=t,this.dir=n}}function gV(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class kS{}class jt extends kS{constructor(t,n,i){super(),this.field=t,this.op=n,this.value=i}static create(t,n,i){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,i):new yV(t,n,i):n==="array-contains"?new EV(t,i):n==="in"?new TV(t,i):n==="not-in"?new AV(t,i):n==="array-contains-any"?new SV(t,i):new jt(t,n,i)}static createKeyFieldInFilter(t,n,i){return n==="in"?new _V(t,i):new vV(t,i)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Yr(n,this.value)):n!==null&&$i(this.value)===$i(n)&&this.matchesComparison(Yr(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fn extends kS{constructor(t,n){super(),this.filters=t,this.op=n,this.Pe=null}static create(t,n){return new fn(t,n)}matches(t){return xS(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function xS(e){return e.op==="and"}function zS(e){return pV(e)&&xS(e)}function pV(e){for(const t of e.filters)if(t instanceof fn)return!1;return!0}function Nd(e){if(e instanceof jt)return e.field.canonicalString()+e.op.toString()+Qr(e.value);if(zS(e))return e.filters.map(t=>Nd(t)).join(",");{const t=e.filters.map(n=>Nd(n)).join(",");return`${e.op}(${t})`}}function BS(e,t){return e instanceof jt?function(i,s){return s instanceof jt&&i.op===s.op&&i.field.isEqual(s.field)&&Cn(i.value,s.value)}(e,t):e instanceof fn?function(i,s){return s instanceof fn&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((r,a,l)=>r&&BS(a,s.filters[l]),!0):!1}(e,t):void Q(19439)}function jS(e){return e instanceof jt?function(n){return`${n.field.canonicalString()} ${n.op} ${Qr(n.value)}`}(e):e instanceof fn?function(n){return n.op.toString()+" {"+n.getFilters().map(jS).join(" ,")+"}"}(e):"Filter"}class yV extends jt{constructor(t,n,i){super(t,n,i),this.key=K.fromName(i.referenceValue)}matches(t){const n=K.comparator(t.key,this.key);return this.matchesComparison(n)}}class _V extends jt{constructor(t,n){super(t,"in",n),this.keys=qS("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class vV extends jt{constructor(t,n){super(t,"not-in",n),this.keys=qS("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function qS(e,t){var n;return(((n=t.arrayValue)==null?void 0:n.values)||[]).map(i=>K.fromName(i.referenceValue))}class EV extends jt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return fg(n)&&Lo(n.arrayValue,this.value)}}class TV extends jt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Lo(this.value.arrayValue,n)}}class AV extends jt{constructor(t,n){super(t,"not-in",n)}matches(t){if(Lo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Lo(this.value.arrayValue,n)}}class SV extends jt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!fg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Lo(this.value.arrayValue,i))}}/**
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
 */class bV{constructor(t,n=null,i=[],s=[],r=null,a=null,l=null){this.path=t,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=a,this.endAt=l,this.Te=null}}function mv(e,t=null,n=[],i=[],s=null,r=null,a=null){return new bV(e,t,n,i,s,r,a)}function dg(e){const t=J(e);if(t.Te===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(i=>Nd(i)).join(","),n+="|ob:",n+=t.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),xc(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>Qr(i)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>Qr(i)).join(",")),t.Te=n}return t.Te}function mg(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!gV(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!BS(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!dv(e.startAt,t.startAt)&&dv(e.endAt,t.endAt)}function Od(e){return K.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class il{constructor(t,n=null,i=[],s=[],r=null,a="F",l=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=a,this.startAt=l,this.endAt=u,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function wV(e,t,n,i,s,r,a,l){return new il(e,t,n,i,s,r,a,l)}function gg(e){return new il(e)}function gv(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function IV(e){return K.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}function HS(e){return e.collectionGroup!==null}function uo(e){const t=J(e);if(t.Ee===null){t.Ee=[];const n=new Set;for(const r of t.explicitOrderBy)t.Ee.push(r),n.add(r.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Qt(ae.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(t).forEach(r=>{n.has(r.canonicalString())||r.isKeyField()||t.Ee.push(new nc(r,i))}),n.has(ae.keyField().canonicalString())||t.Ee.push(new nc(ae.keyField(),i))}return t.Ee}function Sn(e){const t=J(e);return t.Ie||(t.Ie=RV(t,uo(e))),t.Ie}function RV(e,t){if(e.limitType==="F")return mv(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const r=s.dir==="desc"?"asc":"desc";return new nc(s.field,r)});const n=e.endAt?new ec(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new ec(e.startAt.position,e.startAt.inclusive):null;return mv(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}}function Vd(e,t){const n=e.filters.concat([t]);return new il(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Md(e,t,n){return new il(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Bc(e,t){return mg(Sn(e),Sn(t))&&e.limitType===t.limitType}function FS(e){return`${dg(Sn(e))}|lt:${e.limitType}`}function rr(e){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(s=>jS(s)).join(", ")}]`),xc(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(s=>Qr(s)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(s=>Qr(s)).join(",")),`Target(${i})`}(Sn(e))}; limitType=${e.limitType})`}function jc(e,t){return t.isFoundDocument()&&function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):K.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)}(e,t)&&function(i,s){for(const r of uo(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(i,s){return!(i.startAt&&!function(a,l,u){const h=fv(a,l,u);return a.inclusive?h<=0:h<0}(i.startAt,uo(i),s)||i.endAt&&!function(a,l,u){const h=fv(a,l,u);return a.inclusive?h>=0:h>0}(i.endAt,uo(i),s))}(e,t)}function CV(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function GS(e){return(t,n)=>{let i=!1;for(const s of uo(e)){const r=DV(s,t,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function DV(e,t,n){const i=e.field.isKeyField()?K.comparator(t.key,n.key):function(r,a,l){const u=a.data.field(r),h=l.data.field(r);return u!==null&&h!==null?Yr(u,h):Q(42886)}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return Q(19790,{direction:e.dir})}}/**
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
 */class Ks{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return void(s[r]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Gs(this.inner,(n,i)=>{for(const[s,r]of i)t(s,r)})}isEmpty(){return CS(this.inner)}size(){return this.innerSize}}/**
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
 */const NV=new Dt(K.comparator);function ii(){return NV}const KS=new Dt(K.comparator);function Fa(...e){let t=KS;for(const n of e)t=t.insert(n.key,n);return t}function YS(e){let t=KS;return e.forEach((n,i)=>t=t.insert(n,i.overlayedDocument)),t}function _s(){return co()}function QS(){return co()}function co(){return new Ks(e=>e.toString(),(e,t)=>e.isEqual(t))}const OV=new Dt(K.comparator),VV=new Qt(K.comparator);function at(...e){let t=VV;for(const n of e)t=t.add(n);return t}const MV=new Qt(rt);function LV(){return MV}/**
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
 */function pg(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zu(t)?"-0":t}}function XS(e){return{integerValue:""+e}}function PV(e,t){return aV(t)?XS(t):pg(e,t)}/**
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
 */class qc{constructor(){this._=void 0}}function UV(e,t,n){return e instanceof ic?function(s,r){const a={fields:{[OS]:{stringValue:NS},[MS]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&hg(r)&&(r=zc(r)),r&&(a.fields[VS]=r),{mapValue:a}}(n,t):e instanceof Po?JS(e,t):e instanceof Uo?ZS(e,t):function(s,r){const a=$S(s,r),l=pv(a)+pv(s.Ae);return Dd(a)&&Dd(s.Ae)?XS(l):pg(s.serializer,l)}(e,t)}function kV(e,t,n){return e instanceof Po?JS(e,t):e instanceof Uo?ZS(e,t):n}function $S(e,t){return e instanceof sc?function(i){return Dd(i)||function(r){return!!r&&"doubleValue"in r}(i)}(t)?t:{integerValue:0}:null}class ic extends qc{}class Po extends qc{constructor(t){super(),this.elements=t}}function JS(e,t){const n=WS(t);for(const i of e.elements)n.some(s=>Cn(s,i))||n.push(i);return{arrayValue:{values:n}}}class Uo extends qc{constructor(t){super(),this.elements=t}}function ZS(e,t){let n=WS(t);for(const i of e.elements)n=n.filter(s=>!Cn(s,i));return{arrayValue:{values:n}}}class sc extends qc{constructor(t,n){super(),this.serializer=t,this.Ae=n}}function pv(e){return Mt(e.integerValue||e.doubleValue)}function WS(e){return fg(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function xV(e,t){return e.field.isEqual(t.field)&&function(i,s){return i instanceof Po&&s instanceof Po||i instanceof Uo&&s instanceof Uo?Kr(i.elements,s.elements,Cn):i instanceof sc&&s instanceof sc?Cn(i.Ae,s.Ae):i instanceof ic&&s instanceof ic}(e.transform,t.transform)}class zV{constructor(t,n){this.version=t,this.transformResults=n}}class bn{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new bn}static exists(t){return new bn(void 0,t)}static updateTime(t){return new bn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function cu(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Hc{}function tb(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new yg(e.key,bn.none()):new sl(e.key,e.data,bn.none());{const n=e.data,i=Je.empty();let s=new Qt(ae.comparator);for(let r of t.fields)if(!s.has(r)){let a=n.field(r);a===null&&r.length>1&&(r=r.popLast(),a=n.field(r)),a===null?i.delete(r):i.set(r,a),s=s.add(r)}return new Ys(e.key,i,new ln(s.toArray()),bn.none())}}function BV(e,t,n){e instanceof sl?function(s,r,a){const l=s.value.clone(),u=_v(s.fieldTransforms,r,a.transformResults);l.setAll(u),r.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(e,t,n):e instanceof Ys?function(s,r,a){if(!cu(s.precondition,r))return void r.convertToUnknownDocument(a.version);const l=_v(s.fieldTransforms,r,a.transformResults),u=r.data;u.setAll(eb(s)),u.setAll(l),r.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(e,t,n):function(s,r,a){r.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,n)}function ho(e,t,n,i){return e instanceof sl?function(r,a,l,u){if(!cu(r.precondition,a))return l;const h=r.value.clone(),d=vv(r.fieldTransforms,u,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(e,t,n,i):e instanceof Ys?function(r,a,l,u){if(!cu(r.precondition,a))return l;const h=vv(r.fieldTransforms,u,a),d=a.data;return d.setAll(eb(r)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(m=>m.field))}(e,t,n,i):function(r,a,l){return cu(r.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(e,t,n)}function jV(e,t){let n=null;for(const i of e.fieldTransforms){const s=t.data.field(i.field),r=$S(i.transform,s||null);r!=null&&(n===null&&(n=Je.empty()),n.set(i.field,r))}return n||null}function yv(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&Kr(i,s,(r,a)=>xV(r,a))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class sl extends Hc{constructor(t,n,i,s=[]){super(),this.key=t,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ys extends Hc{constructor(t,n,i,s,r=[]){super(),this.key=t,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function eb(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}}),t}function _v(e,t,n){const i=new Map;ft(e.length===n.length,32656,{Ve:n.length,de:e.length});for(let s=0;s<n.length;s++){const r=e[s],a=r.transform,l=t.data.field(r.field);i.set(r.field,kV(a,l,n[s]))}return i}function vv(e,t,n){const i=new Map;for(const s of e){const r=s.transform,a=n.data.field(s.field);i.set(s.field,UV(r,a,t))}return i}class yg extends Hc{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qV extends Hc{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class HV{constructor(t,n,i,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(t.key)&&BV(r,t,i[s])}}applyToLocalView(t,n){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(n=ho(i,t,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(n=ho(i,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const i=QS();return this.mutations.forEach(s=>{const r=t.get(s.key),a=r.overlayedDocument;let l=this.applyToLocalView(a,r.mutatedFields);l=n.has(s.key)?null:l;const u=tb(a,l);u!==null&&i.set(s.key,u),a.isValidDocument()||a.convertToNoDocument($.min())}),i}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),at())}isEqual(t){return this.batchId===t.batchId&&Kr(this.mutations,t.mutations,(n,i)=>yv(n,i))&&Kr(this.baseMutations,t.baseMutations,(n,i)=>yv(n,i))}}class _g{constructor(t,n,i,s){this.batch=t,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(t,n,i){ft(t.mutations.length===i.length,58842,{me:t.mutations.length,fe:i.length});let s=function(){return OV}();const r=t.mutations;for(let a=0;a<r.length;a++)s=s.insert(r[a].key,i[a].version);return new _g(t,n,i,s)}}/**
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
 */class FV{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class GV{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var kt,ut;function KV(e){switch(e){case P.OK:return Q(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return Q(15467,{code:e})}}function nb(e){if(e===void 0)return ni("GRPC error has no .code"),P.UNKNOWN;switch(e){case kt.OK:return P.OK;case kt.CANCELLED:return P.CANCELLED;case kt.UNKNOWN:return P.UNKNOWN;case kt.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case kt.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case kt.INTERNAL:return P.INTERNAL;case kt.UNAVAILABLE:return P.UNAVAILABLE;case kt.UNAUTHENTICATED:return P.UNAUTHENTICATED;case kt.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case kt.NOT_FOUND:return P.NOT_FOUND;case kt.ALREADY_EXISTS:return P.ALREADY_EXISTS;case kt.PERMISSION_DENIED:return P.PERMISSION_DENIED;case kt.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case kt.ABORTED:return P.ABORTED;case kt.OUT_OF_RANGE:return P.OUT_OF_RANGE;case kt.UNIMPLEMENTED:return P.UNIMPLEMENTED;case kt.DATA_LOSS:return P.DATA_LOSS;default:return Q(39323,{code:e})}}(ut=kt||(kt={}))[ut.OK=0]="OK",ut[ut.CANCELLED=1]="CANCELLED",ut[ut.UNKNOWN=2]="UNKNOWN",ut[ut.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ut[ut.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ut[ut.NOT_FOUND=5]="NOT_FOUND",ut[ut.ALREADY_EXISTS=6]="ALREADY_EXISTS",ut[ut.PERMISSION_DENIED=7]="PERMISSION_DENIED",ut[ut.UNAUTHENTICATED=16]="UNAUTHENTICATED",ut[ut.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ut[ut.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ut[ut.ABORTED=10]="ABORTED",ut[ut.OUT_OF_RANGE=11]="OUT_OF_RANGE",ut[ut.UNIMPLEMENTED=12]="UNIMPLEMENTED",ut[ut.INTERNAL=13]="INTERNAL",ut[ut.UNAVAILABLE=14]="UNAVAILABLE",ut[ut.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function YV(){return new TextEncoder}/**
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
 */const QV=new Bi([4294967295,4294967295],0);function Ev(e){const t=YV().encode(e),n=new yS;return n.update(t),new Uint8Array(n.digest())}function Tv(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),i=t.getUint32(4,!0),s=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new Bi([n,i],0),new Bi([s,r],0)]}class vg{constructor(t,n,i){if(this.bitmap=t,this.padding=n,this.hashCount=i,n<0||n>=8)throw new Ga(`Invalid padding: ${n}`);if(i<0)throw new Ga(`Invalid hash count: ${i}`);if(t.length>0&&this.hashCount===0)throw new Ga(`Invalid hash count: ${i}`);if(t.length===0&&n!==0)throw new Ga(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*t.length-n,this.pe=Bi.fromNumber(this.ge)}ye(t,n,i){let s=t.add(n.multiply(Bi.fromNumber(i)));return s.compare(QV)===1&&(s=new Bi([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const n=Ev(t),[i,s]=Tv(n);for(let r=0;r<this.hashCount;r++){const a=this.ye(i,s,r);if(!this.we(a))return!1}return!0}static create(t,n,i){const s=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),a=new vg(r,s,n);return i.forEach(l=>a.insert(l)),a}insert(t){if(this.ge===0)return;const n=Ev(t),[i,s]=Tv(n);for(let r=0;r<this.hashCount;r++){const a=this.ye(i,s,r);this.Se(a)}}Se(t){const n=Math.floor(t/8),i=t%8;this.bitmap[n]|=1<<i}}class Ga extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Fc{constructor(t,n,i,s,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n,i){const s=new Map;return s.set(t,rl.createSynthesizedTargetChangeForCurrentChange(t,n,i)),new Fc($.min(),s,new Dt(rt),ii(),at())}}class rl{constructor(t,n,i,s,r){this.resumeToken=t,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n,i){return new rl(i,n,at(),at(),at())}}/**
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
 */class hu{constructor(t,n,i,s){this.be=t,this.removedTargetIds=n,this.key=i,this.De=s}}class ib{constructor(t,n){this.targetId=t,this.Ce=n}}class sb{constructor(t,n,i=ue.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=i,this.cause=s}}class Av{constructor(){this.ve=0,this.Fe=Sv(),this.Me=ue.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=at(),n=at(),i=at();return this.Fe.forEach((s,r)=>{switch(r){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:Q(38017,{changeType:r})}}),new rl(this.Me,this.xe,t,n,i)}qe(){this.Oe=!1,this.Fe=Sv()}Ke(t,n){this.Oe=!0,this.Fe=this.Fe.insert(t,n)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,ft(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class XV{constructor(t){this.Ge=t,this.ze=new Map,this.je=ii(),this.Je=Bl(),this.He=Bl(),this.Ze=new Dt(rt)}Xe(t){for(const n of t.be)t.De&&t.De.isFoundDocument()?this.Ye(n,t.De):this.et(n,t.key,t.De);for(const n of t.removedTargetIds)this.et(n,t.key,t.De)}tt(t){this.forEachTarget(t,n=>{const i=this.nt(n);switch(t.state){case 0:this.rt(n)&&i.Le(t.resumeToken);break;case 1:i.We(),i.Ne||i.qe(),i.Le(t.resumeToken);break;case 2:i.We(),i.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(i.Qe(),i.Le(t.resumeToken));break;case 4:this.rt(n)&&(this.it(n),i.Le(t.resumeToken));break;default:Q(56790,{state:t.state})}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ze.forEach((i,s)=>{this.rt(s)&&n(s)})}st(t){const n=t.targetId,i=t.Ce.count,s=this.ot(n);if(s){const r=s.target;if(Od(r))if(i===0){const a=new K(r.path);this.et(n,a,de.newNoDocument(a,$.min()))}else ft(i===1,20013,{expectedCount:i});else{const a=this._t(n);if(a!==i){const l=this.ut(t),u=l?this.ct(l,t,a):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ut(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=n;let a,l;try{a=Xi(i).toUint8Array()}catch(u){if(u instanceof DS)return Us("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new vg(a,s,r)}catch(u){return Us(u instanceof Ga?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(t,n,i){return n.Ce.count===i-this.Pt(t,n.targetId)?0:2}Pt(t,n){const i=this.Ge.getRemoteKeysForTarget(n);let s=0;return i.forEach(r=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${r.path.canonicalString()}`;t.mightContain(l)||(this.et(n,r,null),s++)}),s}Tt(t){const n=new Map;this.ze.forEach((r,a)=>{const l=this.ot(a);if(l){if(r.current&&Od(l.target)){const u=new K(l.target.path);this.Et(u).has(a)||this.It(a,u)||this.et(a,u,de.newNoDocument(u,t))}r.Be&&(n.set(a,r.ke()),r.qe())}});let i=at();this.He.forEach((r,a)=>{let l=!0;a.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(i=i.add(r))}),this.je.forEach((r,a)=>a.setReadTime(t));const s=new Fc(t,n,this.Ze,this.je,i);return this.je=ii(),this.Je=Bl(),this.He=Bl(),this.Ze=new Dt(rt),s}Ye(t,n){if(!this.rt(t))return;const i=this.It(t,n.key)?2:0;this.nt(t).Ke(n.key,i),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(t)),this.He=this.He.insert(n.key,this.Rt(n.key).add(t))}et(t,n,i){if(!this.rt(t))return;const s=this.nt(t);this.It(t,n)?s.Ke(n,1):s.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(t)),this.He=this.He.insert(n,this.Rt(n).add(t)),i&&(this.je=this.je.insert(n,i))}removeTarget(t){this.ze.delete(t)}_t(t){const n=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let n=this.ze.get(t);return n||(n=new Av,this.ze.set(t,n)),n}Rt(t){let n=this.He.get(t);return n||(n=new Qt(rt),this.He=this.He.insert(t,n)),n}Et(t){let n=this.Je.get(t);return n||(n=new Qt(rt),this.Je=this.Je.insert(t,n)),n}rt(t){const n=this.ot(t)!==null;return n||q("WatchChangeAggregator","Detected inactive target",t),n}ot(t){const n=this.ze.get(t);return n&&n.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Av),this.Ge.getRemoteKeysForTarget(t).forEach(n=>{this.et(t,n,null)})}It(t,n){return this.Ge.getRemoteKeysForTarget(t).has(n)}}function Bl(){return new Dt(K.comparator)}function Sv(){return new Dt(K.comparator)}const $V={asc:"ASCENDING",desc:"DESCENDING"},JV={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ZV={and:"AND",or:"OR"};class WV{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Ld(e,t){return e.useProto3Json||xc(t)?t:{value:t}}function rc(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function rb(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function tM(e,t){return rc(e,t.toTimestamp())}function wn(e){return ft(!!e,49232),$.fromTimestamp(function(n){const i=Qi(n);return new wt(i.seconds,i.nanos)}(e))}function Eg(e,t){return Pd(e,t).canonicalString()}function Pd(e,t){const n=function(s){return new vt(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function ab(e){const t=vt.fromString(e);return ft(hb(t),10190,{key:t.toString()}),t}function Ud(e,t){return Eg(e.databaseId,t.path)}function df(e,t){const n=ab(t);if(n.get(1)!==e.databaseId.projectId)throw new H(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new H(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new K(lb(n))}function ob(e,t){return Eg(e.databaseId,t)}function eM(e){const t=ab(e);return t.length===4?vt.emptyPath():lb(t)}function kd(e){return new vt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function lb(e){return ft(e.length>4&&e.get(4)==="documents",29091,{key:e.toString()}),e.popFirst(5)}function bv(e,t,n){return{name:Ud(e,t),fields:n.value.mapValue.fields}}function nM(e,t){let n;if("targetChange"in t){t.targetChange;const i=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Q(39313,{state:h})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],r=function(h,d){return h.useProto3Json?(ft(d===void 0||typeof d=="string",58123),ue.fromBase64String(d||"")):(ft(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),ue.fromUint8Array(d||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(h){const d=h.code===void 0?P.UNKNOWN:nb(h.code);return new H(d,h.message||"")}(a);n=new sb(i,s,r,l||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const s=df(e,i.document.name),r=wn(i.document.updateTime),a=i.document.createTime?wn(i.document.createTime):$.min(),l=new Je({mapValue:{fields:i.document.fields}}),u=de.newFoundDocument(s,r,a,l),h=i.targetIds||[],d=i.removedTargetIds||[];n=new hu(h,d,u.key,u)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const s=df(e,i.document),r=i.readTime?wn(i.readTime):$.min(),a=de.newNoDocument(s,r),l=i.removedTargetIds||[];n=new hu([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const s=df(e,i.document),r=i.removedTargetIds||[];n=new hu([],r,s,null)}else{if(!("filter"in t))return Q(11601,{Vt:t});{t.filter;const i=t.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,a=new GV(s,r),l=i.targetId;n=new ib(l,a)}}return n}function iM(e,t){let n;if(t instanceof sl)n={update:bv(e,t.key,t.value)};else if(t instanceof yg)n={delete:Ud(e,t.key)};else if(t instanceof Ys)n={update:bv(e,t.key,t.data),updateMask:fM(t.fieldMask)};else{if(!(t instanceof qV))return Q(16599,{dt:t.type});n={verify:Ud(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(i=>function(r,a){const l=a.transform;if(l instanceof ic)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Po)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Uo)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof sc)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw Q(20930,{transform:a.transform})}(0,i))),t.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:tM(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Q(27497)}(e,t.precondition)),n}function sM(e,t){return e&&e.length>0?(ft(t!==void 0,14353),e.map(n=>function(s,r){let a=s.updateTime?wn(s.updateTime):wn(r);return a.isEqual($.min())&&(a=wn(r)),new zV(a,s.transformResults||[])}(n,t))):[]}function rM(e,t){return{documents:[ob(e,t.path)]}}function aM(e,t){const n={structuredQuery:{}},i=t.path;let s;t.collectionGroup!==null?(s=i,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=ob(e,s);const r=function(h){if(h.length!==0)return cb(fn.create(h,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const a=function(h){if(h.length!==0)return h.map(d=>function(g){return{field:ar(g.field),direction:uM(g.dir)}}(d))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const l=Ld(e,t.limit);return l!==null&&(n.structuredQuery.limit=l),t.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{ft:n,parent:s}}function oM(e){let t=eM(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){ft(i===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:t=t.child(d.collectionId)}let r=[];n.where&&(r=function(m){const g=ub(m);return g instanceof fn&&zS(g)?g.getFilters():[g]}(n.where));let a=[];n.orderBy&&(a=function(m){return m.map(g=>function(D){return new nc(or(D.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,xc(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,E=m.values||[];return new ec(E,g)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const g=!m.before,E=m.values||[];return new ec(E,g)}(n.endAt)),wV(t,s,a,r,l,"F",u,h)}function lM(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q(28987,{purpose:s})}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function ub(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=or(n.unaryFilter.field);return jt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=or(n.unaryFilter.field);return jt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=or(n.unaryFilter.field);return jt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=or(n.unaryFilter.field);return jt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Q(61313);default:return Q(60726)}}(e):e.fieldFilter!==void 0?function(n){return jt.create(or(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Q(58110);default:return Q(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return fn.create(n.compositeFilter.filters.map(i=>ub(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Q(1026)}}(n.compositeFilter.op))}(e):Q(30097,{filter:e})}function uM(e){return $V[e]}function cM(e){return JV[e]}function hM(e){return ZV[e]}function ar(e){return{fieldPath:e.canonicalString()}}function or(e){return ae.fromServerFormat(e.fieldPath)}function cb(e){return e instanceof jt?function(n){if(n.op==="=="){if(hv(n.value))return{unaryFilter:{field:ar(n.field),op:"IS_NAN"}};if(cv(n.value))return{unaryFilter:{field:ar(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(hv(n.value))return{unaryFilter:{field:ar(n.field),op:"IS_NOT_NAN"}};if(cv(n.value))return{unaryFilter:{field:ar(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ar(n.field),op:cM(n.op),value:n.value}}}(e):e instanceof fn?function(n){const i=n.getFilters().map(s=>cb(s));return i.length===1?i[0]:{compositeFilter:{op:hM(n.op),filters:i}}}(e):Q(54877,{filter:e})}function fM(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function hb(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}function fb(e){return!!e&&typeof e._toProto=="function"&&e._protoValueType==="ProtoValue"}/**
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
 */class Ci{constructor(t,n,i,s,r=$.min(),a=$.min(),l=ue.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(t){return new Ci(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Ci(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ci(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ci(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class dM{constructor(t){this.yt=t}}function mM(e){const t=oM({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Md(t,t.limit,"L"):t}/**
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
 */class gM{constructor(){this.bn=new pM}addToCollectionParentIndex(t,n){return this.bn.add(n),U.resolve()}getCollectionParents(t,n){return U.resolve(this.bn.getEntries(n))}addFieldIndex(t,n){return U.resolve()}deleteFieldIndex(t,n){return U.resolve()}deleteAllFieldIndexes(t){return U.resolve()}createTargetIndexes(t,n){return U.resolve()}getDocumentsMatchingTarget(t,n){return U.resolve(null)}getIndexType(t,n){return U.resolve(0)}getFieldIndexes(t,n){return U.resolve([])}getNextCollectionGroupToUpdate(t){return U.resolve(null)}getMinOffset(t,n){return U.resolve(Yi.min())}getMinOffsetFromCollectionGroup(t,n){return U.resolve(Yi.min())}updateCollectionGroup(t,n,i){return U.resolve()}updateIndexEntries(t,n){return U.resolve()}}class pM{constructor(){this.index={}}add(t){const n=t.lastSegment(),i=t.popLast(),s=this.index[n]||new Qt(vt.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(t){const n=t.lastSegment(),i=t.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(t){return(this.index[t]||new Qt(vt.comparator)).toArray()}}/**
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
 */const wv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},db=41943040;class we{static withCacheSize(t){return new we(t,we.DEFAULT_COLLECTION_PERCENTILE,we.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,i){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=i}}/**
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
 */we.DEFAULT_COLLECTION_PERCENTILE=10,we.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,we.DEFAULT=new we(db,we.DEFAULT_COLLECTION_PERCENTILE,we.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),we.DISABLED=new we(-1,0,0);/**
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
 */class Xr{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new Xr(0)}static ar(){return new Xr(-1)}}/**
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
 */const Iv="LruGarbageCollector",yM=1048576;function Rv([e,t],[n,i]){const s=rt(e,n);return s===0?rt(t,i):s}class _M{constructor(t){this.Pr=t,this.buffer=new Qt(Rv),this.Tr=0}Er(){return++this.Tr}Ir(t){const n=[t,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const i=this.buffer.last();Rv(n,i)<0&&(this.buffer=this.buffer.delete(i).add(n))}}get maxValue(){return this.buffer.last()[0]}}class vM{constructor(t,n,i){this.garbageCollector=t,this.asyncQueue=n,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){q(Iv,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ua(n)?q(Iv,"Ignoring IndexedDB error during garbage collection: ",n):await la(n)}await this.Ar(3e5)})}}class EM{constructor(t,n){this.Vr=t,this.params=n}calculateTargetCount(t,n){return this.Vr.dr(t).next(i=>Math.floor(n/100*i))}nthSequenceNumber(t,n){if(n===0)return U.resolve(kc.ce);const i=new _M(n);return this.Vr.forEachTarget(t,s=>i.Ir(s.sequenceNumber)).next(()=>this.Vr.mr(t,s=>i.Ir(s))).next(()=>i.maxValue)}removeTargets(t,n,i){return this.Vr.removeTargets(t,n,i)}removeOrphanedDocuments(t,n){return this.Vr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),U.resolve(wv)):this.getCacheSize(t).next(i=>i<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),wv):this.gr(t,n))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,n){let i,s,r,a,l,u,h;const d=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(t,s))).next(m=>(i=m,l=Date.now(),this.removeTargets(t,i,n))).next(m=>(r=m,u=Date.now(),this.removeOrphanedDocuments(t,i))).next(m=>(h=Date.now(),sr()<=st.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${r} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-d}ms`),U.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:m})))}}function TM(e,t){return new EM(e,t)}/**
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
 */class AM{constructor(){this.changes=new Ks(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,de.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?U.resolve(i):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class SM{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class bM{constructor(t,n,i,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,n){let i=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(i!==null&&ho(i.mutation,s,ln.empty(),wt.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.getLocalViewOfDocuments(t,i,at()).next(()=>i))}getLocalViewOfDocuments(t,n,i=at()){const s=_s();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,i).next(r=>{let a=Fa();return r.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(t,n){const i=_s();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,at()))}populateOverlays(t,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(t,s).next(r=>{r.forEach((a,l)=>{n.set(a,l)})})}computeViews(t,n,i,s){let r=ii();const a=co(),l=function(){return co()}();return n.forEach((u,h)=>{const d=i.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Ys)?r=r.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),ho(d.mutation,h,d.mutation.getFieldMask(),wt.now())):a.set(h.key,ln.empty())}),this.recalculateAndSaveOverlays(t,r).next(u=>(u.forEach((h,d)=>a.set(h,d)),n.forEach((h,d)=>l.set(h,new SM(d,a.get(h)??null))),l))}recalculateAndSaveOverlays(t,n){const i=co();let s=new Dt((a,l)=>a-l),r=at();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let d=i.get(u)||ln.empty();d=l.applyToLocalView(h,d),i.set(u,d);const m=(s.get(l.batchId)||at()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,d=u.value,m=QS();d.forEach(g=>{if(!r.has(g)){const E=tb(n.get(g),i.get(g));E!==null&&m.set(g,E),r=r.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(t,h,m))}return U.waitFor(a)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,n,i,s){return IV(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):HS(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,i,s):this.getDocumentsMatchingCollectionQuery(t,n,i,s)}getNextDocuments(t,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,i,s).next(r=>{const a=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,i.largestBatchId,s-r.size):U.resolve(_s());let l=Oo,u=r;return a.next(h=>U.forEach(h,(d,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),r.get(d)?U.resolve():this.remoteDocumentCache.getEntry(t,d).next(g=>{u=u.insert(d,g)}))).next(()=>this.populateOverlays(t,h,r)).next(()=>this.computeViews(t,u,h,at())).next(d=>({batchId:l,changes:YS(d)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new K(n)).next(i=>{let s=Fa();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,i,s){const r=n.collectionGroup;let a=Fa();return this.indexManager.getCollectionParents(t,r).next(l=>U.forEach(l,u=>{const h=function(m,g){return new il(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(r));return this.getDocumentsMatchingCollectionQuery(t,h,i,s).next(d=>{d.forEach((m,g)=>{a=a.insert(m,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,n,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,i.largestBatchId).next(a=>(r=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,i,r,s))).next(a=>{r.forEach((u,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,de.newInvalidDocument(d)))});let l=Fa();return a.forEach((u,h)=>{const d=r.get(u);d!==void 0&&ho(d.mutation,h,ln.empty(),wt.now()),jc(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class wM{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,n){return U.resolve(this.Nr.get(n))}saveBundleMetadata(t,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:wn(s.createTime)}}(n)),U.resolve()}getNamedQuery(t,n){return U.resolve(this.Br.get(n))}saveNamedQuery(t,n){return this.Br.set(n.name,function(s){return{name:s.name,query:mM(s.bundledQuery),readTime:wn(s.readTime)}}(n)),U.resolve()}}/**
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
 */class IM{constructor(){this.overlays=new Dt(K.comparator),this.Lr=new Map}getOverlay(t,n){return U.resolve(this.overlays.get(n))}getOverlays(t,n){const i=_s();return U.forEach(n,s=>this.getOverlay(t,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(t,n,i){return i.forEach((s,r)=>{this.St(t,n,r)}),U.resolve()}removeOverlaysForBatchId(t,n,i){const s=this.Lr.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.Lr.delete(i)),U.resolve()}getOverlaysForCollection(t,n,i){const s=_s(),r=n.length+1,a=new K(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===r&&u.largestBatchId>i&&s.set(u.getKey(),u)}return U.resolve(s)}getOverlaysForCollectionGroup(t,n,i,s){let r=new Dt((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>i){let d=r.get(h.largestBatchId);d===null&&(d=_s(),r=r.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=_s(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return U.resolve(l)}St(t,n,i){const s=this.overlays.get(i.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(i.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(i.key,new FV(n,i));let r=this.Lr.get(n);r===void 0&&(r=at(),this.Lr.set(n,r)),this.Lr.set(n,r.add(i.key))}}/**
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
 */class RM{constructor(){this.sessionToken=ue.EMPTY_BYTE_STRING}getSessionToken(t){return U.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,U.resolve()}}/**
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
 */class Tg{constructor(){this.kr=new Qt(Zt.qr),this.Kr=new Qt(Zt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,n){const i=new Zt(t,n);this.kr=this.kr.add(i),this.Kr=this.Kr.add(i)}$r(t,n){t.forEach(i=>this.addReference(i,n))}removeReference(t,n){this.Wr(new Zt(t,n))}Qr(t,n){t.forEach(i=>this.removeReference(i,n))}Gr(t){const n=new K(new vt([])),i=new Zt(n,t),s=new Zt(n,t+1),r=[];return this.Kr.forEachInRange([i,s],a=>{this.Wr(a),r.push(a.key)}),r}zr(){this.kr.forEach(t=>this.Wr(t))}Wr(t){this.kr=this.kr.delete(t),this.Kr=this.Kr.delete(t)}jr(t){const n=new K(new vt([])),i=new Zt(n,t),s=new Zt(n,t+1);let r=at();return this.Kr.forEachInRange([i,s],a=>{r=r.add(a.key)}),r}containsKey(t){const n=new Zt(t,0),i=this.kr.firstAfterOrEqual(n);return i!==null&&t.isEqual(i.key)}}class Zt{constructor(t,n){this.key=t,this.Jr=n}static qr(t,n){return K.comparator(t.key,n.key)||rt(t.Jr,n.Jr)}static Ur(t,n){return rt(t.Jr,n.Jr)||K.comparator(t.key,n.key)}}/**
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
 */class CM{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Qt(Zt.qr)}checkEmpty(t){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,i,s){const r=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new HV(r,n,i,s);this.mutationQueue.push(a);for(const l of s)this.Hr=this.Hr.add(new Zt(l.key,r)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return U.resolve(a)}lookupMutationBatch(t,n){return U.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(t,n){const i=n+1,s=this.Xr(i),r=s<0?0:s;return U.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?cg:this.Yn-1)}getAllMutationBatches(t){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const i=new Zt(n,0),s=new Zt(n,Number.POSITIVE_INFINITY),r=[];return this.Hr.forEachInRange([i,s],a=>{const l=this.Zr(a.Jr);r.push(l)}),U.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let i=new Qt(rt);return n.forEach(s=>{const r=new Zt(s,0),a=new Zt(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([r,a],l=>{i=i.add(l.Jr)})}),U.resolve(this.Yr(i))}getAllMutationBatchesAffectingQuery(t,n){const i=n.path,s=i.length+1;let r=i;K.isDocumentKey(r)||(r=r.child(""));const a=new Zt(new K(r),0);let l=new Qt(rt);return this.Hr.forEachWhile(u=>{const h=u.key.path;return!!i.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.Jr)),!0)},a),U.resolve(this.Yr(l))}Yr(t){const n=[];return t.forEach(i=>{const s=this.Zr(i);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){ft(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Hr;return U.forEach(n.mutations,s=>{const r=new Zt(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Hr=i})}nr(t){}containsKey(t,n){const i=new Zt(n,0),s=this.Hr.firstAfterOrEqual(i);return U.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,U.resolve()}ei(t,n){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const n=this.Xr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class DM{constructor(t){this.ti=t,this.docs=function(){return new Dt(K.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,a=this.ti(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:a}),this.size+=a-r,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const i=this.docs.get(n);return U.resolve(i?i.document.mutableCopy():de.newInvalidDocument(n))}getEntries(t,n){let i=ii();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():de.newInvalidDocument(s))}),U.resolve(i)}getDocumentsMatchingQuery(t,n,i,s){let r=ii();const a=n.path,l=new K(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:d}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||nV(eV(d),i)<=0||(s.has(d.key)||jc(n,d))&&(r=r.insert(d.key,d.mutableCopy()))}return U.resolve(r)}getAllFromCollectionGroup(t,n,i,s){Q(9500)}ni(t,n){return U.forEach(this.docs,i=>n(i))}newChangeBuffer(t){return new NM(this)}getSize(t){return U.resolve(this.size)}}class NM extends AM{constructor(t){super(),this.Mr=t}applyChanges(t){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(t,s)):this.Mr.removeEntry(i)}),U.waitFor(n)}getFromCache(t,n){return this.Mr.getEntry(t,n)}getAllFromCache(t,n){return this.Mr.getEntries(t,n)}}/**
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
 */class OM{constructor(t){this.persistence=t,this.ri=new Ks(n=>dg(n),mg),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.ii=0,this.si=new Tg,this.targetCount=0,this.oi=Xr._r()}forEachTarget(t,n){return this.ri.forEach((i,s)=>n(s)),U.resolve()}getLastRemoteSnapshotVersion(t){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return U.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(t,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.ii&&(this.ii=n),U.resolve()}lr(t){this.ri.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.oi=new Xr(n),this.highestTargetId=n),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,n){return this.lr(n),this.targetCount+=1,U.resolve()}updateTargetData(t,n){return this.lr(n),U.resolve()}removeTargetData(t,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(t,n,i){let s=0;const r=[];return this.ri.forEach((a,l)=>{l.sequenceNumber<=n&&i.get(l.targetId)===null&&(this.ri.delete(a),r.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),U.waitFor(r).next(()=>s)}getTargetCount(t){return U.resolve(this.targetCount)}getTargetData(t,n){const i=this.ri.get(n)||null;return U.resolve(i)}addMatchingKeys(t,n,i){return this.si.$r(n,i),U.resolve()}removeMatchingKeys(t,n,i){this.si.Qr(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(a=>{r.push(s.markPotentiallyOrphaned(t,a))}),U.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.si.Gr(n),U.resolve()}getMatchingKeysForTargetId(t,n){const i=this.si.jr(n);return U.resolve(i)}containsKey(t,n){return U.resolve(this.si.containsKey(n))}}/**
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
 */class mb{constructor(t,n){this._i={},this.overlays={},this.ai=new kc(0),this.ui=!1,this.ui=!0,this.ci=new RM,this.referenceDelegate=t(this),this.li=new OM(this),this.indexManager=new gM,this.remoteDocumentCache=function(s){return new DM(s)}(i=>this.referenceDelegate.hi(i)),this.serializer=new dM(n),this.Pi=new wM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new IM,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let i=this._i[t.toKey()];return i||(i=new CM(n,this.referenceDelegate),this._i[t.toKey()]=i),i}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,n,i){q("MemoryPersistence","Starting transaction:",t);const s=new VM(this.ai.next());return this.referenceDelegate.Ti(),i(s).next(r=>this.referenceDelegate.Ei(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Ii(t,n){return U.or(Object.values(this._i).map(i=>()=>i.containsKey(t,n)))}}class VM extends sV{constructor(t){super(),this.currentSequenceNumber=t}}class Ag{constructor(t){this.persistence=t,this.Ri=new Tg,this.Ai=null}static Vi(t){return new Ag(t)}get di(){if(this.Ai)return this.Ai;throw Q(60996)}addReference(t,n,i){return this.Ri.addReference(i,n),this.di.delete(i.toString()),U.resolve()}removeReference(t,n,i){return this.Ri.removeReference(i,n),this.di.add(i.toString()),U.resolve()}markPotentiallyOrphaned(t,n){return this.di.add(n.toString()),U.resolve()}removeTarget(t,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(r=>this.di.add(r.toString()))}).next(()=>i.removeTargetData(t,n))}Ti(){this.Ai=new Set}Ei(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.di,i=>{const s=K.fromPath(i);return this.mi(t,s).next(r=>{r||n.removeEntry(s,$.min())})}).next(()=>(this.Ai=null,n.apply(t)))}updateLimboDocument(t,n){return this.mi(t,n).next(i=>{i?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(t){return 0}mi(t,n){return U.or([()=>U.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ii(t,n)])}}class ac{constructor(t,n){this.persistence=t,this.fi=new Ks(i=>oV(i.path),(i,s)=>i.isEqual(s)),this.garbageCollector=TM(this,n)}static Vi(t,n){return new ac(t,n)}Ti(){}Ei(t){return U.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}dr(t){const n=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next(i=>n.next(s=>i+s))}pr(t){let n=0;return this.mr(t,i=>{n++}).next(()=>n)}mr(t,n){return U.forEach(this.fi,(i,s)=>this.wr(t,i,s).next(r=>r?U.resolve():n(s)))}removeTargets(t,n,i){return this.persistence.getTargetCache().removeTargets(t,n,i)}removeOrphanedDocuments(t,n){let i=0;const s=this.persistence.getRemoteDocumentCache(),r=s.newChangeBuffer();return s.ni(t,a=>this.wr(t,a,n).next(l=>{l||(i++,r.removeEntry(a,$.min()))})).next(()=>r.apply(t)).next(()=>i)}markPotentiallyOrphaned(t,n){return this.fi.set(n,t.currentSequenceNumber),U.resolve()}removeTarget(t,n){const i=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,i)}addReference(t,n,i){return this.fi.set(i,t.currentSequenceNumber),U.resolve()}removeReference(t,n,i){return this.fi.set(i,t.currentSequenceNumber),U.resolve()}updateLimboDocument(t,n){return this.fi.set(n,t.currentSequenceNumber),U.resolve()}hi(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=lu(t.data.value)),n}wr(t,n,i){return U.or([()=>this.persistence.Ii(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const s=this.fi.get(n);return U.resolve(s!==void 0&&s>i)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Sg{constructor(t,n,i,s){this.targetId=t,this.fromCache=n,this.Ts=i,this.Es=s}static Is(t,n){let i=at(),s=at();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Sg(t,n.fromCache,i,s)}}/**
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
 */class MM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class LM{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return k1()?8:rV(me())>0?6:4}()}initialize(t,n){this.fs=t,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(t,n,i,s){const r={result:null};return this.gs(t,n).next(a=>{r.result=a}).next(()=>{if(!r.result)return this.ps(t,n,s,i).next(a=>{r.result=a})}).next(()=>{if(r.result)return;const a=new MM;return this.ys(t,n,a).next(l=>{if(r.result=l,this.As)return this.ws(t,n,a,l.size)})}).next(()=>r.result)}ws(t,n,i,s){return i.documentReadCount<this.Vs?(sr()<=st.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",rr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),U.resolve()):(sr()<=st.DEBUG&&q("QueryEngine","Query:",rr(n),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.ds*s?(sr()<=st.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",rr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Sn(n))):U.resolve())}gs(t,n){if(gv(n))return U.resolve(null);let i=Sn(n);return this.indexManager.getIndexType(t,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Md(n,null,"F"),i=Sn(n)),this.indexManager.getDocumentsMatchingTarget(t,i).next(r=>{const a=at(...r);return this.fs.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,i).next(u=>{const h=this.Ss(n,l);return this.bs(n,h,a,u.readTime)?this.gs(t,Md(n,null,"F")):this.Ds(t,h,n,u)}))})))}ps(t,n,i,s){return gv(n)||s.isEqual($.min())?U.resolve(null):this.fs.getDocuments(t,i).next(r=>{const a=this.Ss(n,r);return this.bs(n,a,i,s)?U.resolve(null):(sr()<=st.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),rr(n)),this.Ds(t,a,n,tV(s,Oo)).next(l=>l))})}Ss(t,n){let i=new Qt(GS(t));return n.forEach((s,r)=>{jc(t,r)&&(i=i.add(r))}),i}bs(t,n,i,s){if(t.limit===null)return!1;if(i.size!==n.size)return!0;const r=t.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}ys(t,n,i){return sr()<=st.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",rr(n)),this.fs.getDocumentsMatchingQuery(t,n,Yi.min(),i)}Ds(t,n,i,s){return this.fs.getDocumentsMatchingQuery(t,i,s).next(r=>(n.forEach(a=>{r=r.insert(a.key,a)}),r))}}/**
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
 */const bg="LocalStore",PM=3e8;class UM{constructor(t,n,i,s){this.persistence=t,this.Cs=n,this.serializer=s,this.vs=new Dt(rt),this.Fs=new Ks(r=>dg(r),mg),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(i)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new bM(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.vs))}}function kM(e,t,n,i){return new UM(e,t,n,i)}async function gb(e,t){const n=J(e);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.Os(t),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const a=[],l=[];let u=at();for(const h of s){a.push(h.batchId);for(const d of h.mutations)u=u.add(d.key)}for(const h of r){l.push(h.batchId);for(const d of h.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(i,u).next(h=>({Ns:h,removedBatchIds:a,addedBatchIds:l}))})})}function xM(e,t){const n=J(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=t.batch.keys(),r=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,d){const m=h.batch,g=m.keys();let E=U.resolve();return g.forEach(D=>{E=E.next(()=>d.getEntry(u,D)).next(M=>{const k=h.docVersions.get(D);ft(k!==null,48541),M.version.compareTo(k)<0&&(m.applyToRemoteDocument(M,h),M.isValidDocument()&&(M.setReadTime(h.commitVersion),d.addEntry(M)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,i,t,r).next(()=>r.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(l){let u=at();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(t))).next(()=>n.localDocuments.getDocuments(i,s))})}function pb(e){const t=J(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.li.getLastRemoteSnapshotVersion(n))}function zM(e,t){const n=J(e),i=t.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const a=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const l=[];t.targetChanges.forEach((d,m)=>{const g=s.get(m);if(!g)return;l.push(n.li.removeMatchingKeys(r,d.removedDocuments,m).next(()=>n.li.addMatchingKeys(r,d.addedDocuments,m)));let E=g.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.get(m)!==null?E=E.withResumeToken(ue.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):d.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(d.resumeToken,i)),s=s.insert(m,E),function(M,k,b){return M.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=PM?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(g,E,d)&&l.push(n.li.updateTargetData(r,E))});let u=ii(),h=at();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(r,d))}),l.push(BM(r,a,t.documentUpdates).next(d=>{u=d.Bs,h=d.Ls})),!i.isEqual($.min())){const d=n.li.getLastRemoteSnapshotVersion(r).next(m=>n.li.setTargetsMetadata(r,r.currentSequenceNumber,i));l.push(d)}return U.waitFor(l).next(()=>a.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,u,h)).next(()=>u)}).then(r=>(n.vs=s,r))}function BM(e,t,n){let i=at(),s=at();return n.forEach(r=>i=i.add(r)),t.getEntries(e,i).next(r=>{let a=ii();return n.forEach((l,u)=>{const h=r.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual($.min())?(t.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(u),a=a.insert(l,u)):q(bg,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Bs:a,Ls:s}})}function jM(e,t){const n=J(e);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=cg),n.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}function qM(e,t){const n=J(e);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.li.getTargetData(i,t).next(r=>r?(s=r,U.resolve(s)):n.li.allocateTargetId(i).next(a=>(s=new Ci(t,a,"TargetPurposeListen",i.currentSequenceNumber),n.li.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.vs.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(i.targetId,i),n.Fs.set(t,i.targetId)),i})}async function xd(e,t,n){const i=J(e),s=i.vs.get(t),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,a=>i.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!ua(a))throw a;q(bg,`Failed to update sequence numbers for target ${t}: ${a}`)}i.vs=i.vs.remove(t),i.Fs.delete(s.target)}function Cv(e,t,n){const i=J(e);let s=$.min(),r=at();return i.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,d){const m=J(u),g=m.Fs.get(d);return g!==void 0?U.resolve(m.vs.get(g)):m.li.getTargetData(h,d)}(i,a,Sn(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,i.li.getMatchingKeysForTargetId(a,l.targetId).next(u=>{r=u})}).next(()=>i.Cs.getDocumentsMatchingQuery(a,t,n?s:$.min(),n?r:at())).next(l=>(HM(i,CV(t),l),{documents:l,ks:r})))}function HM(e,t,n){let i=e.Ms.get(t)||$.min();n.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),e.Ms.set(t,i)}class Dv{constructor(){this.activeTargetIds=LV()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class FM{constructor(){this.vo=new Dv,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,i){}addLocalQueryTarget(t,n=!0){return n&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,n,i){this.Fo[t]=n}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new Dv,Promise.resolve()}handleUserChange(t,n,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class GM{Mo(t){}shutdown(){}}/**
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
 */const Nv="ConnectivityMonitor";class Ov{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){q(Nv,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){q(Nv,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let jl=null;function zd(){return jl===null?jl=function(){return 268435456+Math.round(2147483648*Math.random())}():jl++,"0x"+jl.toString(16)}/**
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
 */const mf="RestConnection",KM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class YM{get qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+t.host,this.Uo=`projects/${i}/databases/${s}`,this.$o=this.databaseId.database===Wu?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Wo(t,n,i,s,r){const a=zd(),l=this.Qo(t,n.toUriEncodedString());q(mf,`Sending RPC '${t}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,r);const{host:h}=new URL(l),d=Jo(h);return this.zo(t,l,u,i,d).then(m=>(q(mf,`Received RPC '${t}' ${a}: `,m),m),m=>{throw Us(mf,`RPC '${t}' ${a} failed with error: `,m,"url: ",l,"request:",i),m})}jo(t,n,i,s,r,a){return this.Wo(t,n,i,s,r)}Go(t,n,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+oa}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,r)=>t[r]=s),i&&i.headers.forEach((s,r)=>t[r]=s)}Qo(t,n){const i=KM[t];let s=`${this.Ko}/v1/${n}:${i}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class QM{constructor(t){this.Jo=t.Jo,this.Ho=t.Ho}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Ho()}send(t){this.Jo(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
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
 */const he="WebChannelConnection",Pa=(e,t,n)=>{e.listen(t,i=>{try{n(i)}catch(s){setTimeout(()=>{throw s},0)}})};class Vr extends YM{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!Vr.c_){const t=TS();Pa(t,ES.STAT_EVENT,n=>{n.stat===Id.PROXY?q(he,"STAT_EVENT: detected buffering proxy"):n.stat===Id.NOPROXY&&q(he,"STAT_EVENT: detected no buffering proxy")}),Vr.c_=!0}}zo(t,n,i,s,r){const a=zd();return new Promise((l,u)=>{const h=new _S;h.setWithCredentials(!0),h.listenOnce(vS.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case ou.NO_ERROR:const m=h.getResponseJson();q(he,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(m)),l(m);break;case ou.TIMEOUT:q(he,`RPC '${t}' ${a} timed out`),u(new H(P.DEADLINE_EXCEEDED,"Request time out"));break;case ou.HTTP_ERROR:const g=h.getStatus();if(q(he,`RPC '${t}' ${a} failed with status:`,g,"response text:",h.getResponseText()),g>0){let E=h.getResponseJson();Array.isArray(E)&&(E=E[0]);const D=E==null?void 0:E.error;if(D&&D.status&&D.message){const M=function(b){const T=b.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(T)>=0?T:P.UNKNOWN}(D.status);u(new H(M,D.message))}else u(new H(P.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new H(P.UNAVAILABLE,"Connection failed."));break;default:Q(9055,{l_:t,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{q(he,`RPC '${t}' ${a} completed.`)}});const d=JSON.stringify(s);q(he,`RPC '${t}' ${a} sending request:`,s),h.send(n,"POST",d,i,15)})}T_(t,n,i){const s=zd(),r=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,i),l.encodeInitMessageHeaders=!0;const h=r.join("");q(he,`Creating RPC '${t}' stream ${s}: ${h}`,l);const d=a.createWebChannel(h,l);this.E_(d);let m=!1,g=!1;const E=new QM({Jo:D=>{g?q(he,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(m||(q(he,`Opening RPC '${t}' stream ${s} transport.`),d.open(),m=!0),q(he,`RPC '${t}' stream ${s} sending:`,D),d.send(D))},Ho:()=>d.close()});return Pa(d,Ha.EventType.OPEN,()=>{g||(q(he,`RPC '${t}' stream ${s} transport opened.`),E.i_())}),Pa(d,Ha.EventType.CLOSE,()=>{g||(g=!0,q(he,`RPC '${t}' stream ${s} transport closed`),E.o_(),this.I_(d))}),Pa(d,Ha.EventType.ERROR,D=>{g||(g=!0,Us(he,`RPC '${t}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),E.o_(new H(P.UNAVAILABLE,"The operation could not be completed")))}),Pa(d,Ha.EventType.MESSAGE,D=>{var M;if(!g){const k=D.data[0];ft(!!k,16349);const b=k,T=(b==null?void 0:b.error)||((M=b[0])==null?void 0:M.error);if(T){q(he,`RPC '${t}' stream ${s} received error:`,T);const I=T.status;let V=function(_){const y=kt[_];if(y!==void 0)return nb(y)}(I),B=T.message;I==="NOT_FOUND"&&B.includes("database")&&B.includes("does not exist")&&B.includes(this.databaseId.database)&&Us(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),V===void 0&&(V=P.INTERNAL,B="Unknown error status: "+I+" with message "+T.message),g=!0,E.o_(new H(V,B)),d.close()}else q(he,`RPC '${t}' stream ${s} received:`,k),E.__(k)}}),Vr.u_(),setTimeout(()=>{E.s_()},0),E}terminate(){this.a_.forEach(t=>t.close()),this.a_=[]}E_(t){this.a_.push(t)}I_(t){this.a_=this.a_.filter(n=>n===t)}Go(t,n,i){super.Go(t,n,i),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return AS()}}/**
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
 */function XM(e){return new Vr(e)}function gf(){return typeof document<"u"?document:null}/**
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
 */function Gc(e){return new WV(e,!0)}/**
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
 */Vr.c_=!1;class yb{constructor(t,n,i=1e3,s=1.5,r=6e4){this.Ci=t,this.timerId=n,this.R_=i,this.A_=s,this.V_=r,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const n=Math.floor(this.d_+this.y_()),i=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-i);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),t())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const Vv="PersistentStream";class _b{constructor(t,n,i,s,r,a,l,u){this.Ci=t,this.S_=i,this.b_=s,this.connection=r,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new yb(t,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.K_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():n&&n.code===P.RESOURCE_EXHAUSTED?(ni(n.toString()),ni("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(n)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.D_===n&&this.G_(i,s)},i=>{t(()=>{const s=new H(P.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(s)})})}G_(t,n){const i=this.Q_(this.D_);this.stream=this.j_(t,n),this.stream.Zo(()=>{i(()=>this.listener.Zo())}),this.stream.Yo(()=>{i(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{i(()=>this.z_(s))}),this.stream.onMessage(s=>{i(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return q(Vv,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return n=>{this.Ci.enqueueAndForget(()=>this.D_===t?n():(q(Vv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $M extends _b{constructor(t,n,i,s,r,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,a),this.serializer=r}j_(t,n){return this.connection.T_("Listen",t,n)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const n=nM(this.serializer,t),i=function(r){if(!("targetChange"in r))return $.min();const a=r.targetChange;return a.targetIds&&a.targetIds.length?$.min():a.readTime?wn(a.readTime):$.min()}(t);return this.listener.H_(n,i)}Z_(t){const n={};n.database=kd(this.serializer),n.addTarget=function(r,a){let l;const u=a.target;if(l=Od(u)?{documents:rM(r,u)}:{query:aM(r,u).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=rb(r,a.resumeToken);const h=Ld(r,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo($.min())>0){l.readTime=rc(r,a.snapshotVersion.toTimestamp());const h=Ld(r,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,t);const i=lM(this.serializer,t);i&&(n.labels=i),this.q_(n)}X_(t){const n={};n.database=kd(this.serializer),n.removeTarget=t,this.q_(n)}}class JM extends _b{constructor(t,n,i,s,r,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,a),this.serializer=r}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,n){return this.connection.T_("Write",t,n)}J_(t){return ft(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,ft(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){ft(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const n=sM(t.writeResults,t.commitTime),i=wn(t.commitTime);return this.listener.na(i,n)}ra(){const t={};t.database=kd(this.serializer),this.q_(t)}ea(t){const n={streamToken:this.lastStreamToken,writes:t.map(i=>iM(this.serializer,i))};this.q_(n)}}/**
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
 */class ZM{}class WM extends ZM{constructor(t,n,i,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new H(P.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,n,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,a])=>this.connection.Wo(t,Pd(n,i),s,r,a)).catch(r=>{throw r.name==="FirebaseError"?(r.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new H(P.UNKNOWN,r.toString())})}jo(t,n,i,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.jo(t,Pd(n,i),s,a,l,r)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new H(P.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function t4(e,t,n,i){return new WM(e,t,n,i)}class e4{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ni(n),this.aa=!1):q("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ks="RemoteStore";class n4{constructor(t,n,i,s,r){this.localStore=t,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=r,this.Aa.Mo(a=>{i.enqueueAndForget(async()=>{Qs(this)&&(q(ks,"Restarting streams for network reachability change."),await async function(u){const h=J(u);h.Ia.add(4),await al(h),h.Va.set("Unknown"),h.Ia.delete(4),await Kc(h)}(this))})}),this.Va=new e4(i,s)}}async function Kc(e){if(Qs(e))for(const t of e.Ra)await t(!0)}async function al(e){for(const t of e.Ra)await t(!1)}function vb(e,t){const n=J(e);n.Ea.has(t.targetId)||(n.Ea.set(t.targetId,t),Cg(n)?Rg(n):ca(n).O_()&&Ig(n,t))}function wg(e,t){const n=J(e),i=ca(n);n.Ea.delete(t),i.O_()&&Eb(n,t),n.Ea.size===0&&(i.O_()?i.L_():Qs(n)&&n.Va.set("Unknown"))}function Ig(e,t){if(e.da.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo($.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}ca(e).Z_(t)}function Eb(e,t){e.da.$e(t),ca(e).X_(t)}function Rg(e){e.da=new XV({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),At:t=>e.Ea.get(t)||null,ht:()=>e.datastore.serializer.databaseId}),ca(e).start(),e.Va.ua()}function Cg(e){return Qs(e)&&!ca(e).x_()&&e.Ea.size>0}function Qs(e){return J(e).Ia.size===0}function Tb(e){e.da=void 0}async function i4(e){e.Va.set("Online")}async function s4(e){e.Ea.forEach((t,n)=>{Ig(e,t)})}async function r4(e,t){Tb(e),Cg(e)?(e.Va.ha(t),Rg(e)):e.Va.set("Unknown")}async function a4(e,t,n){if(e.Va.set("Online"),t instanceof sb&&t.state===2&&t.cause)try{await async function(s,r){const a=r.cause;for(const l of r.targetIds)s.Ea.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ea.delete(l),s.da.removeTarget(l))}(e,t)}catch(i){q(ks,"Failed to remove targets %s: %s ",t.targetIds.join(","),i),await oc(e,i)}else if(t instanceof hu?e.da.Xe(t):t instanceof ib?e.da.st(t):e.da.tt(t),!n.isEqual($.min()))try{const i=await pb(e.localStore);n.compareTo(i)>=0&&await function(r,a){const l=r.da.Tt(a);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const d=r.Ea.get(h);d&&r.Ea.set(h,d.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,h)=>{const d=r.Ea.get(u);if(!d)return;r.Ea.set(u,d.withResumeToken(ue.EMPTY_BYTE_STRING,d.snapshotVersion)),Eb(r,u);const m=new Ci(d.target,u,h,d.sequenceNumber);Ig(r,m)}),r.remoteSyncer.applyRemoteEvent(l)}(e,n)}catch(i){q(ks,"Failed to raise snapshot:",i),await oc(e,i)}}async function oc(e,t,n){if(!ua(t))throw t;e.Ia.add(1),await al(e),e.Va.set("Offline"),n||(n=()=>pb(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{q(ks,"Retrying IndexedDB access"),await n(),e.Ia.delete(1),await Kc(e)})}function Ab(e,t){return t().catch(n=>oc(e,n,t))}async function Yc(e){const t=J(e),n=Ji(t);let i=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:cg;for(;o4(t);)try{const s=await jM(t.localStore,i);if(s===null){t.Ta.length===0&&n.L_();break}i=s.batchId,l4(t,s)}catch(s){await oc(t,s)}Sb(t)&&bb(t)}function o4(e){return Qs(e)&&e.Ta.length<10}function l4(e,t){e.Ta.push(t);const n=Ji(e);n.O_()&&n.Y_&&n.ea(t.mutations)}function Sb(e){return Qs(e)&&!Ji(e).x_()&&e.Ta.length>0}function bb(e){Ji(e).start()}async function u4(e){Ji(e).ra()}async function c4(e){const t=Ji(e);for(const n of e.Ta)t.ea(n.mutations)}async function h4(e,t,n){const i=e.Ta.shift(),s=_g.from(i,t,n);await Ab(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await Yc(e)}async function f4(e,t){t&&Ji(e).Y_&&await async function(i,s){if(function(a){return KV(a)&&a!==P.ABORTED}(s.code)){const r=i.Ta.shift();Ji(i).B_(),await Ab(i,()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Yc(i)}}(e,t),Sb(e)&&bb(e)}async function Mv(e,t){const n=J(e);n.asyncQueue.verifyOperationInProgress(),q(ks,"RemoteStore received new credentials");const i=Qs(n);n.Ia.add(3),await al(n),i&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ia.delete(3),await Kc(n)}async function d4(e,t){const n=J(e);t?(n.Ia.delete(2),await Kc(n)):t||(n.Ia.add(2),await al(n),n.Va.set("Unknown"))}function ca(e){return e.ma||(e.ma=function(n,i,s){const r=J(n);return r.sa(),new $M(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(e.datastore,e.asyncQueue,{Zo:i4.bind(null,e),Yo:s4.bind(null,e),t_:r4.bind(null,e),H_:a4.bind(null,e)}),e.Ra.push(async t=>{t?(e.ma.B_(),Cg(e)?Rg(e):e.Va.set("Unknown")):(await e.ma.stop(),Tb(e))})),e.ma}function Ji(e){return e.fa||(e.fa=function(n,i,s){const r=J(n);return r.sa(),new JM(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(e.datastore,e.asyncQueue,{Zo:()=>Promise.resolve(),Yo:u4.bind(null,e),t_:f4.bind(null,e),ta:c4.bind(null,e),na:h4.bind(null,e)}),e.Ra.push(async t=>{t?(e.fa.B_(),await Yc(e)):(await e.fa.stop(),e.Ta.length>0&&(q(ks,`Stopping write stream with ${e.Ta.length} pending writes`),e.Ta=[]))})),e.fa}/**
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
 */class Dg{constructor(t,n,i,s,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new bs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,i,s,r){const a=Date.now()+i,l=new Dg(t,n,a,s,r);return l.start(i),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ng(e,t){if(ni("AsyncQueue",`${t}: ${e}`),ua(e))return new H(P.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class Mr{static emptySet(t){return new Mr(t.comparator)}constructor(t){this.comparator=t?(n,i)=>t(n,i)||K.comparator(n.key,i.key):(n,i)=>K.comparator(n.key,i.key),this.keyedMap=Fa(),this.sortedSet=new Dt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,i)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Mr)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const i=new Mr;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=n,i}}/**
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
 */class Lv{constructor(){this.ga=new Dt(K.comparator)}track(t){const n=t.doc.key,i=this.ga.get(n);i?t.type!==0&&i.type===3?this.ga=this.ga.insert(n,t):t.type===3&&i.type!==1?this.ga=this.ga.insert(n,{type:i.type,doc:t.doc}):t.type===2&&i.type===2?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):t.type===2&&i.type===0?this.ga=this.ga.insert(n,{type:0,doc:t.doc}):t.type===1&&i.type===0?this.ga=this.ga.remove(n):t.type===1&&i.type===2?this.ga=this.ga.insert(n,{type:1,doc:i.doc}):t.type===0&&i.type===1?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):Q(63341,{Vt:t,pa:i}):this.ga=this.ga.insert(n,t)}ya(){const t=[];return this.ga.inorderTraversal((n,i)=>{t.push(i)}),t}}class $r{constructor(t,n,i,s,r,a,l,u,h){this.query=t,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(t,n,i,s,r){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new $r(t,n,Mr.emptySet(n),a,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Bc(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,i=t.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
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
 */class m4{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class g4{constructor(){this.queries=Pv(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,i){const s=J(n),r=s.queries;s.queries=Pv(),r.forEach((a,l)=>{for(const u of l.Sa)u.onError(i)})})(this,new H(P.ABORTED,"Firestore shutting down"))}}function Pv(){return new Ks(e=>FS(e),Bc)}async function p4(e,t){const n=J(e);let i=3;const s=t.query;let r=n.queries.get(s);r?!r.ba()&&t.Da()&&(i=2):(r=new m4,i=t.Da()?0:1);try{switch(i){case 0:r.wa=await n.onListen(s,!0);break;case 1:r.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const l=Ng(a,`Initialization of query '${rr(t.query)}' failed`);return void t.onError(l)}n.queries.set(s,r),r.Sa.push(t),t.va(n.onlineState),r.wa&&t.Fa(r.wa)&&Og(n)}async function y4(e,t){const n=J(e),i=t.query;let s=3;const r=n.queries.get(i);if(r){const a=r.Sa.indexOf(t);a>=0&&(r.Sa.splice(a,1),r.Sa.length===0?s=t.Da()?0:1:!r.ba()&&t.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function _4(e,t){const n=J(e);let i=!1;for(const s of t){const r=s.query,a=n.queries.get(r);if(a){for(const l of a.Sa)l.Fa(s)&&(i=!0);a.wa=s}}i&&Og(n)}function v4(e,t,n){const i=J(e),s=i.queries.get(t);if(s)for(const r of s.Sa)r.onError(n);i.queries.delete(t)}function Og(e){e.Ca.forEach(t=>{t.next()})}var Bd,Uv;(Uv=Bd||(Bd={})).Ma="default",Uv.Cache="cache";class E4{constructor(t,n,i){this.query=t,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(t){if(!this.options.includeMetadataChanges){const i=[];for(const s of t.docChanges)s.type!==3&&i.push(s);t=new $r(t.query,t.docs,t.oldDocs,i,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),n=!0):this.La(t,this.onlineState)&&(this.ka(t),n=!0),this.Na=t,n}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),n=!0),n}La(t,n){if(!t.fromCache||!this.Da())return!0;const i=n!=="Offline";return(!this.options.qa||!i)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(t){t=$r.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Bd.Cache}}/**
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
 */class wb{constructor(t){this.key=t}}class Ib{constructor(t){this.key=t}}class T4{constructor(t,n){this.query=t,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=at(),this.mutatedKeys=at(),this.eu=GS(t),this.tu=new Mr(this.eu)}get nu(){return this.Za}ru(t,n){const i=n?n.iu:new Lv,s=n?n.tu:this.tu;let r=n?n.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((d,m)=>{const g=s.get(d),E=jc(this.query,m)?m:null,D=!!g&&this.mutatedKeys.has(g.key),M=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let k=!1;g&&E?g.data.isEqual(E.data)?D!==M&&(i.track({type:3,doc:E}),k=!0):this.su(g,E)||(i.track({type:2,doc:E}),k=!0,(u&&this.eu(E,u)>0||h&&this.eu(E,h)<0)&&(l=!0)):!g&&E?(i.track({type:0,doc:E}),k=!0):g&&!E&&(i.track({type:1,doc:g}),k=!0,(u||h)&&(l=!0)),k&&(E?(a=a.add(E),r=M?r.add(d):r.delete(d)):(a=a.delete(d),r=r.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),r=r.delete(d.key),i.track({type:1,doc:d})}return{tu:a,iu:i,bs:l,mutatedKeys:r}}su(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,i,s){const r=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort((d,m)=>function(E,D){const M=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q(20277,{Vt:k})}};return M(E)-M(D)}(d.type,m.type)||this.eu(d.doc,m.doc)),this.ou(i),s=s??!1;const l=n&&!s?this._u():[],u=this.Ya.size===0&&this.current&&!s?1:0,h=u!==this.Xa;return this.Xa=u,a.length!==0||h?{snapshot:new $r(this.query,t.tu,r,a,t.mutatedKeys,u===0,h,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Lv,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(t){return!this.Za.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Ya;this.Ya=at(),this.tu.forEach(i=>{this.uu(i.key)&&(this.Ya=this.Ya.add(i.key))});const n=[];return t.forEach(i=>{this.Ya.has(i)||n.push(new Ib(i))}),this.Ya.forEach(i=>{t.has(i)||n.push(new wb(i))}),n}cu(t){this.Za=t.ks,this.Ya=at();const n=this.ru(t.documents);return this.applyChanges(n,!0)}lu(){return $r.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Vg="SyncEngine";class A4{constructor(t,n,i){this.query=t,this.targetId=n,this.view=i}}class S4{constructor(t){this.key=t,this.hu=!1}}class b4{constructor(t,n,i,s,r,a){this.localStore=t,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Ks(l=>FS(l),Bc),this.Eu=new Map,this.Iu=new Set,this.Ru=new Dt(K.comparator),this.Au=new Map,this.Vu=new Tg,this.du={},this.mu=new Map,this.fu=Xr.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function w4(e,t,n=!0){const i=Vb(e);let s;const r=i.Tu.get(t);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.lu()):s=await Rb(i,t,n,!0),s}async function I4(e,t){const n=Vb(e);await Rb(n,t,!0,!1)}async function Rb(e,t,n,i){const s=await qM(e.localStore,Sn(t)),r=s.targetId,a=e.sharedClientState.addLocalQueryTarget(r,n);let l;return i&&(l=await R4(e,t,r,a==="current",s.resumeToken)),e.isPrimaryClient&&n&&vb(e.remoteStore,s),l}async function R4(e,t,n,i,s){e.pu=(m,g,E)=>async function(M,k,b,T){let I=k.view.ru(b);I.bs&&(I=await Cv(M.localStore,k.query,!1).then(({documents:_})=>k.view.ru(_,I)));const V=T&&T.targetChanges.get(k.targetId),B=T&&T.targetMismatches.get(k.targetId)!=null,F=k.view.applyChanges(I,M.isPrimaryClient,V,B);return xv(M,k.targetId,F.au),F.snapshot}(e,m,g,E);const r=await Cv(e.localStore,t,!0),a=new T4(t,r.ks),l=a.ru(r.documents),u=rl.createSynthesizedTargetChangeForCurrentChange(n,i&&e.onlineState!=="Offline",s),h=a.applyChanges(l,e.isPrimaryClient,u);xv(e,n,h.au);const d=new A4(t,n,a);return e.Tu.set(t,d),e.Eu.has(n)?e.Eu.get(n).push(t):e.Eu.set(n,[t]),h.snapshot}async function C4(e,t,n){const i=J(e),s=i.Tu.get(t),r=i.Eu.get(s.targetId);if(r.length>1)return i.Eu.set(s.targetId,r.filter(a=>!Bc(a,t))),void i.Tu.delete(t);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await xd(i.localStore,s.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(s.targetId),n&&wg(i.remoteStore,s.targetId),jd(i,s.targetId)}).catch(la)):(jd(i,s.targetId),await xd(i.localStore,s.targetId,!0))}async function D4(e,t){const n=J(e),i=n.Tu.get(t),s=n.Eu.get(i.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),wg(n.remoteStore,i.targetId))}async function N4(e,t,n){const i=k4(e);try{const s=await function(a,l){const u=J(a),h=wt.now(),d=l.reduce((E,D)=>E.add(D.key),at());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let D=ii(),M=at();return u.xs.getEntries(E,d).next(k=>{D=k,D.forEach((b,T)=>{T.isValidDocument()||(M=M.add(b))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,D)).next(k=>{m=k;const b=[];for(const T of l){const I=jV(T,m.get(T.key).overlayedDocument);I!=null&&b.push(new Ys(T.key,I,US(I.value.mapValue),bn.exists(!0)))}return u.mutationQueue.addMutationBatch(E,h,b,l)}).next(k=>{g=k;const b=k.applyToLocalDocumentSet(m,M);return u.documentOverlayCache.saveOverlays(E,k.batchId,b)})}).then(()=>({batchId:g.batchId,changes:YS(m)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),function(a,l,u){let h=a.du[a.currentUser.toKey()];h||(h=new Dt(rt)),h=h.insert(l,u),a.du[a.currentUser.toKey()]=h}(i,s.batchId,n),await ol(i,s.changes),await Yc(i.remoteStore)}catch(s){const r=Ng(s,"Failed to persist write");n.reject(r)}}async function Cb(e,t){const n=J(e);try{const i=await zM(n.localStore,t);t.targetChanges.forEach((s,r)=>{const a=n.Au.get(r);a&&(ft(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?ft(a.hu,14607):s.removedDocuments.size>0&&(ft(a.hu,42227),a.hu=!1))}),await ol(n,i,t)}catch(i){await la(i)}}function kv(e,t,n){const i=J(e);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.Tu.forEach((r,a)=>{const l=a.view.va(t);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=J(a);u.onlineState=l;let h=!1;u.queries.forEach((d,m)=>{for(const g of m.Sa)g.va(l)&&(h=!0)}),h&&Og(u)}(i.eventManager,t),s.length&&i.Pu.H_(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function O4(e,t,n){const i=J(e);i.sharedClientState.updateQueryState(t,"rejected",n);const s=i.Au.get(t),r=s&&s.key;if(r){let a=new Dt(K.comparator);a=a.insert(r,de.newNoDocument(r,$.min()));const l=at().add(r),u=new Fc($.min(),new Map,new Dt(rt),a,l);await Cb(i,u),i.Ru=i.Ru.remove(r),i.Au.delete(t),Mg(i)}else await xd(i.localStore,t,!1).then(()=>jd(i,t,n)).catch(la)}async function V4(e,t){const n=J(e),i=t.batch.batchId;try{const s=await xM(n.localStore,t);Nb(n,i,null),Db(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await ol(n,s)}catch(s){await la(s)}}async function M4(e,t,n){const i=J(e);try{const s=await function(a,l){const u=J(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(ft(m!==null,37113),d=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>u.localDocuments.getDocuments(h,d))})}(i.localStore,t);Nb(i,t,n),Db(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await ol(i,s)}catch(s){await la(s)}}function Db(e,t){(e.mu.get(t)||[]).forEach(n=>{n.resolve()}),e.mu.delete(t)}function Nb(e,t,n){const i=J(e);let s=i.du[i.currentUser.toKey()];if(s){const r=s.get(t);r&&(n?r.reject(n):r.resolve(),s=s.remove(t)),i.du[i.currentUser.toKey()]=s}}function jd(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e.Eu.get(t))e.Tu.delete(i),n&&e.Pu.yu(i,n);e.Eu.delete(t),e.isPrimaryClient&&e.Vu.Gr(t).forEach(i=>{e.Vu.containsKey(i)||Ob(e,i)})}function Ob(e,t){e.Iu.delete(t.path.canonicalString());const n=e.Ru.get(t);n!==null&&(wg(e.remoteStore,n),e.Ru=e.Ru.remove(t),e.Au.delete(n),Mg(e))}function xv(e,t,n){for(const i of n)i instanceof wb?(e.Vu.addReference(i.key,t),L4(e,i)):i instanceof Ib?(q(Vg,"Document no longer in limbo: "+i.key),e.Vu.removeReference(i.key,t),e.Vu.containsKey(i.key)||Ob(e,i.key)):Q(19791,{wu:i})}function L4(e,t){const n=t.key,i=n.path.canonicalString();e.Ru.get(n)||e.Iu.has(i)||(q(Vg,"New document in limbo: "+n),e.Iu.add(i),Mg(e))}function Mg(e){for(;e.Iu.size>0&&e.Ru.size<e.maxConcurrentLimboResolutions;){const t=e.Iu.values().next().value;e.Iu.delete(t);const n=new K(vt.fromString(t)),i=e.fu.next();e.Au.set(i,new S4(n)),e.Ru=e.Ru.insert(n,i),vb(e.remoteStore,new Ci(Sn(gg(n.path)),i,"TargetPurposeLimboResolution",kc.ce))}}async function ol(e,t,n){const i=J(e),s=[],r=[],a=[];i.Tu.isEmpty()||(i.Tu.forEach((l,u)=>{a.push(i.pu(u,t,n).then(h=>{var d;if((h||n)&&i.isPrimaryClient){const m=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;i.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){s.push(h);const m=Sg.Is(u.targetId,h);r.push(m)}}))}),await Promise.all(a),i.Pu.H_(s),await async function(u,h){const d=J(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>U.forEach(h,g=>U.forEach(g.Ts,E=>d.persistence.referenceDelegate.addReference(m,g.targetId,E)).next(()=>U.forEach(g.Es,E=>d.persistence.referenceDelegate.removeReference(m,g.targetId,E)))))}catch(m){if(!ua(m))throw m;q(bg,"Failed to update sequence numbers: "+m)}for(const m of h){const g=m.targetId;if(!m.fromCache){const E=d.vs.get(g),D=E.snapshotVersion,M=E.withLastLimboFreeSnapshotVersion(D);d.vs=d.vs.insert(g,M)}}}(i.localStore,r))}async function P4(e,t){const n=J(e);if(!n.currentUser.isEqual(t)){q(Vg,"User change. New user:",t.toKey());const i=await gb(n.localStore,t);n.currentUser=t,function(r,a){r.mu.forEach(l=>{l.forEach(u=>{u.reject(new H(P.CANCELLED,a))})}),r.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await ol(n,i.Ns)}}function U4(e,t){const n=J(e),i=n.Au.get(t);if(i&&i.hu)return at().add(i.key);{let s=at();const r=n.Eu.get(t);if(!r)return s;for(const a of r){const l=n.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function Vb(e){const t=J(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Cb.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=U4.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=O4.bind(null,t),t.Pu.H_=_4.bind(null,t.eventManager),t.Pu.yu=v4.bind(null,t.eventManager),t}function k4(e){const t=J(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=V4.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=M4.bind(null,t),t}class lc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Gc(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,n){return null}Mu(t,n){return null}vu(t){return kM(this.persistence,new LM,t.initialUser,this.serializer)}Cu(t){return new mb(Ag.Vi,this.serializer)}Du(t){return new FM}async terminate(){var t,n;(t=this.gcScheduler)==null||t.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}lc.provider={build:()=>new lc};class x4 extends lc{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,n){ft(this.persistence.referenceDelegate instanceof ac,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new vM(i,t.asyncQueue,n)}Cu(t){const n=this.cacheSizeBytes!==void 0?we.withCacheSize(this.cacheSizeBytes):we.DEFAULT;return new mb(i=>ac.Vi(i,n),this.serializer)}}class qd{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>kv(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=P4.bind(null,this.syncEngine),await d4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new g4}()}createDatastore(t){const n=Gc(t.databaseInfo.databaseId),i=XM(t.databaseInfo);return t4(t.authCredentials,t.appCheckCredentials,i,n)}createRemoteStore(t){return function(i,s,r,a,l){return new n4(i,s,r,a,l)}(this.localStore,this.datastore,t.asyncQueue,n=>kv(this.syncEngine,n,0),function(){return Ov.v()?new Ov:new GM}())}createSyncEngine(t,n){return function(s,r,a,l,u,h,d){const m=new b4(s,r,a,l,u,h);return d&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(s){const r=J(s);q(ks,"RemoteStore shutting down."),r.Ia.add(5),await al(r),r.Aa.shutdown(),r.Va.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(n=this.eventManager)==null||n.terminate()}}qd.provider={build:()=>new qd};/**
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
 */class z4{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):ni("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */const Zi="FirestoreClient";class B4{constructor(t,n,i,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=i,this._databaseInfo=s,this.user=fe.UNAUTHENTICATED,this.clientId=ug.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(i,async a=>{q(Zi,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(i,a=>(q(Zi,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new bs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const i=Ng(n,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function pf(e,t){e.asyncQueue.verifyOperationInProgress(),q(Zi,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener(async s=>{i.isEqual(s)||(await gb(t.localStore,s),i=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function zv(e,t){e.asyncQueue.verifyOperationInProgress();const n=await j4(e);q(Zi,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(i=>Mv(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>Mv(t.remoteStore,s)),e._onlineComponents=t}async function j4(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){q(Zi,"Using user provided OfflineComponentProvider");try{await pf(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Us("Error using user provided cache. Falling back to memory cache: "+n),await pf(e,new lc)}}else q(Zi,"Using default OfflineComponentProvider"),await pf(e,new x4(void 0));return e._offlineComponents}async function Mb(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(q(Zi,"Using user provided OnlineComponentProvider"),await zv(e,e._uninitializedComponentsProvider._online)):(q(Zi,"Using default OnlineComponentProvider"),await zv(e,new qd))),e._onlineComponents}function q4(e){return Mb(e).then(t=>t.syncEngine)}async function Bv(e){const t=await Mb(e),n=t.eventManager;return n.onListen=w4.bind(null,t.syncEngine),n.onUnlisten=C4.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=I4.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=D4.bind(null,t.syncEngine),n}function H4(e,t,n,i){const s=new z4(i),r=new E4(t,s,n);return e.asyncQueue.enqueueAndForget(async()=>p4(await Bv(e),r)),()=>{s.Nu(),e.asyncQueue.enqueueAndForget(async()=>y4(await Bv(e),r))}}function F4(e,t){const n=new bs;return e.asyncQueue.enqueueAndForget(async()=>N4(await q4(e),t,n)),n.promise}/**
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
 */function Lb(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const G4="ComponentProvider",jv=new Map;function K4(e,t,n,i,s){return new cV(e,t,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Lb(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,i)}/**
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
 */const Pb="firestore.googleapis.com",qv=!0;class Hv{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new H(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Pb,this.ssl=qv}else this.host=t.host,this.ssl=t.ssl??qv;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=db;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<yM)throw new H(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}WO("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Lb(t.experimentalLongPollingOptions??{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new H(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new H(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new H(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Qc{constructor(t,n,i,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new H(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hv(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new HO;switch(i.type){case"firstParty":return new YO(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new H(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=jv.get(n);i&&(q(G4,"Removing Datastore"),jv.delete(n),i.terminate())}(this),Promise.resolve()}}function Y4(e,t,n,i={}){var h;e=Or(e,Qc);const s=Jo(t),r=e._getSettings(),a={...r,emulatorOptions:e._getEmulatorOptions()},l=`${t}:${n}`;s&&cA(`https://${l}`),r.host!==Pb&&r.host!==l&&Us("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...r,host:l,ssl:s,emulatorOptions:i};if(!Ki(u,a)&&(e._setSettings(u),i.mockUserToken)){let d,m;if(typeof i.mockUserToken=="string")d=i.mockUserToken,m=fe.MOCK_USER;else{d=O1(i.mockUserToken,(h=e._app)==null?void 0:h.options.projectId);const g=i.mockUserToken.sub||i.mockUserToken.user_id;if(!g)throw new H(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new fe(g)}e._authCredentials=new FO(new bS(d,m))}}/**
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
 */class ha{constructor(t,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new ha(this.firestore,t,this._query)}}class Yt{constructor(t,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ji(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Yt(this.firestore,t,this._key)}toJSON(){return{type:Yt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,i){if(nl(n,Yt._jsonSchema))return new Yt(t,i||null,new K(vt.fromString(n.referencePath)))}}Yt._jsonSchemaVersion="firestore/documentReference/1.0",Yt._jsonSchema={type:Ht("string",Yt._jsonSchemaVersion),referencePath:Ht("string")};class ji extends ha{constructor(t,n,i){super(t,n,gg(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Yt(this.firestore,null,new K(t))}withConverter(t){return new ji(this.firestore,t,this._path)}}function Fv(e,t,...n){if(e=$t(e),wS("collection","path",t),e instanceof Qc){const i=vt.fromString(t,...n);return ev(i),new ji(e,null,i)}{if(!(e instanceof Yt||e instanceof ji))throw new H(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(vt.fromString(t,...n));return ev(i),new ji(e.firestore,null,i)}}function Ub(e,t,...n){if(e=$t(e),arguments.length===1&&(t=ug.newId()),wS("doc","path",t),e instanceof Qc){const i=vt.fromString(t,...n);return tv(i),new Yt(e,null,new K(i))}{if(!(e instanceof Yt||e instanceof ji))throw new H(P.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(vt.fromString(t,...n));return tv(i),new Yt(e.firestore,e instanceof ji?e.converter:null,new K(i))}}/**
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
 */const Gv="AsyncQueue";class Kv{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new yb(this,"async_queue_retry"),this._c=()=>{const i=gf();i&&q(Gv,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=t;const n=gf();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const n=gf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const n=new bs;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Yu.push(t),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!ua(t))throw t;q(Gv,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const n=this.ac.then(()=>(this.rc=!0,t().catch(i=>{throw this.nc=i,this.rc=!1,ni("INTERNAL UNHANDLED ERROR: ",Yv(i)),i}).then(i=>(this.rc=!1,i))));return this.ac=n,n}enqueueAfterDelay(t,n,i){this.uc(),this.oc.indexOf(t)>-1&&(n=0);const s=Dg.createAndSchedule(this,t,n,i,r=>this.hc(r));return this.tc.push(s),s}uc(){this.nc&&Q(47125,{Pc:Yv(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ec(t){for(const n of this.tc)if(n.timerId===t)return!0;return!1}Ic(t){return this.Tc().then(()=>{this.tc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tc()})}Rc(t){this.oc.push(t)}hc(t){const n=this.tc.indexOf(t);this.tc.splice(n,1)}}function Yv(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+`
`+e.stack),t}class ko extends Qc{constructor(t,n,i,s){super(t,n,i,s),this.type="firestore",this._queue=new Kv,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Kv(t),this._firestoreClient=void 0,await t}}}function Q4(e,t){const n=typeof e=="object"?e:Gm(),i=typeof e=="string"?e:Wu,s=Fs(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=D1("firestore");r&&Y4(s,...r)}return s}function kb(e){if(e._terminated)throw new H(P.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||X4(e),e._firestoreClient}function X4(e){var i,s,r,a;const t=e._freezeSettings(),n=K4(e._databaseId,((i=e._app)==null?void 0:i.options.appId)||"",e._persistenceKey,(s=e._app)==null?void 0:s.options.apiKey,t);e._componentsProvider||(r=t.localCache)!=null&&r._offlineComponentProvider&&((a=t.localCache)!=null&&a._onlineComponentProvider)&&(e._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),e._firestoreClient=new B4(e._authCredentials,e._appCheckCredentials,e._queue,n,e._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(e._componentsProvider))}/**
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
 */class Ze{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ze(ue.fromBase64String(t))}catch(n){throw new H(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Ze(ue.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Ze._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(nl(t,Ze._jsonSchema))return Ze.fromBase64String(t.bytes)}}Ze._jsonSchemaVersion="firestore/bytes/1.0",Ze._jsonSchema={type:Ht("string",Ze._jsonSchemaVersion),bytes:Ht("string")};/**
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
 */class xb{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new H(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ae(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class zb{constructor(t){this._methodName=t}}/**
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
 */class In{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new H(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new H(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return rt(this._lat,t._lat)||rt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:In._jsonSchemaVersion}}static fromJSON(t){if(nl(t,In._jsonSchema))return new In(t.latitude,t.longitude)}}In._jsonSchemaVersion="firestore/geoPoint/1.0",In._jsonSchema={type:Ht("string",In._jsonSchemaVersion),latitude:Ht("number"),longitude:Ht("number")};/**
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
 */class cn{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(i,s){if(i.length!==s.length)return!1;for(let r=0;r<i.length;++r)if(i[r]!==s[r])return!1;return!0}(this._values,t._values)}toJSON(){return{type:cn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(nl(t,cn._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(n=>typeof n=="number"))return new cn(t.vectorValues);throw new H(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}cn._jsonSchemaVersion="firestore/vectorValue/1.0",cn._jsonSchema={type:Ht("string",cn._jsonSchemaVersion),vectorValues:Ht("object")};/**
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
 */const $4=/^__.*__$/;class J4{constructor(t,n,i){this.data=t,this.fieldMask=n,this.fieldTransforms=i}toMutation(t,n){return this.fieldMask!==null?new Ys(t,this.data,this.fieldMask,n,this.fieldTransforms):new sl(t,this.data,n,this.fieldTransforms)}}function Bb(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q(40011,{dataSource:e})}}class Lg{constructor(t,n,i,s,r,a){this.settings=t,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Ac(),this.fieldTransforms=r||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(t){return new Lg({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(t){var s;const n=(s=this.path)==null?void 0:s.child(t),i=this.i({path:n,arrayElement:!1});return i.mc(t),i}fc(t){var s;const n=(s=this.path)==null?void 0:s.child(t),i=this.i({path:n,arrayElement:!1});return i.Ac(),i}gc(t){return this.i({path:void 0,arrayElement:!0})}yc(t){return uc(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.mc(this.path.get(t))}mc(t){if(t.length===0)throw this.yc("Document fields must not be empty");if(Bb(this.dataSource)&&$4.test(t))throw this.yc('Document fields cannot begin and end with "__"')}}class Z4{constructor(t,n,i){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=i||Gc(t)}I(t,n,i,s=!1){return new Lg({dataSource:t,methodName:n,targetDoc:i,path:ae.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jb(e){const t=e._freezeSettings(),n=Gc(e._databaseId);return new Z4(e._databaseId,!!t.ignoreUndefinedProperties,n)}function W4(e,t,n,i,s,r={}){const a=e.I(r.merge||r.mergeFields?2:0,t,n,s);Fb("Data must be an object, but it was:",a,i);const l=qb(i,a);let u,h;if(r.merge)u=new ln(a.fieldMask),h=a.fieldTransforms;else if(r.mergeFields){const d=[];for(const m of r.mergeFields){const g=Ug(t,m,n);if(!a.contains(g))throw new H(P.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);iL(d,g)||d.push(g)}u=new ln(d),h=a.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=a.fieldTransforms;return new J4(new Je(l),u,h)}function tL(e,t,n,i=!1){return Pg(n,e.I(i?4:3,t))}function Pg(e,t){if(Hb(e=$t(e)))return Fb("Unsupported field value:",t,e),qb(e,t);if(e instanceof zb)return function(i,s){if(!Bb(s.dataSource))throw s.yc(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.yc(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.yc("Nested arrays are not supported");return function(i,s){const r=[];let a=0;for(const l of i){let u=Pg(l,s.gc(a));u==null&&(u={nullValue:"NULL_VALUE"}),r.push(u),a++}return{arrayValue:{values:r}}}(e,t)}return function(i,s){if((i=$t(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return PV(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=wt.fromDate(i);return{timestampValue:rc(s.serializer,r)}}if(i instanceof wt){const r=new wt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:rc(s.serializer,r)}}if(i instanceof In)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Ze)return{bytesValue:rb(s.serializer,i._byteString)};if(i instanceof Yt){const r=s.databaseId,a=i.firestore._databaseId;if(!a.isEqual(r))throw s.yc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Eg(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof cn)return function(a,l){const u=a instanceof cn?a.toArray():a;return{mapValue:{fields:{[LS]:{stringValue:PS},[tc]:{arrayValue:{values:u.map(d=>{if(typeof d!="number")throw l.yc("VectorValues must only contain numeric values.");return pg(l.serializer,d)})}}}}}}(i,s);if(fb(i))return i._toProto(s.serializer);throw s.yc(`Unsupported field value: ${Uc(i)}`)}(e,t)}function qb(e,t){const n={};return CS(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Gs(e,(i,s)=>{const r=Pg(s,t.dc(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function Hb(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof wt||e instanceof In||e instanceof Ze||e instanceof Yt||e instanceof zb||e instanceof cn||fb(e))}function Fb(e,t,n){if(!Hb(n)||!IS(n)){const i=Uc(n);throw i==="an object"?t.yc(e+" a custom object"):t.yc(e+" "+i)}}function Ug(e,t,n){if((t=$t(t))instanceof xb)return t._internalPath;if(typeof t=="string")return nL(e,t);throw uc("Field path arguments must be of type string or ",e,!1,void 0,n)}const eL=new RegExp("[~\\*/\\[\\]]");function nL(e,t,n){if(t.search(eL)>=0)throw uc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new xb(...t.split("."))._internalPath}catch{throw uc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function uc(e,t,n,i,s){const r=i&&!i.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(r||a)&&(u+=" (found",r&&(u+=` in field ${i}`),a&&(u+=` in document ${s}`),u+=")"),new H(P.INVALID_ARGUMENT,l+e+u)}function iL(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class sL{convertValue(t,n="none"){switch($i(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Mt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Xi(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw Q(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const i={};return Gs(t,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertVectorValue(t){var i,s,r;const n=(r=(s=(i=t.fields)==null?void 0:i[tc].arrayValue)==null?void 0:s.values)==null?void 0:r.map(a=>Mt(a.doubleValue));return new cn(n)}convertGeoPoint(t){return new In(Mt(t.latitude),Mt(t.longitude))}convertArray(t,n){return(t.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(t,n){switch(n){case"previous":const i=zc(t);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Vo(t));default:return null}}convertTimestamp(t){const n=Qi(t);return new wt(n.seconds,n.nanos)}convertDocumentKey(t,n){const i=vt.fromString(t);ft(hb(i),9688,{name:t});const s=new Mo(i.get(1),i.get(3)),r=new K(i.popFirst(5));return s.isEqual(n)||ni(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */class Gb extends sL{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ze(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Yt(this.firestore,null,n)}}const Qv="@firebase/firestore",Xv="4.14.0";/**
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
 */function $v(e){return function(n,i){if(typeof n!="object"||n===null)return!1;const s=n;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1}(e,["next","error","complete"])}/**
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
 */class Kb{constructor(t,n,i,s,r){this._firestore=t,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new rL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const n=this._document.data.field(Ug("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class rL extends Kb{data(){return super.data()}}/**
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
 */function aL(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new H(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kg{}class oL extends kg{}function lL(e,t,...n){let i=[];t instanceof kg&&i.push(t),i=i.concat(n),function(r){const a=r.filter(u=>u instanceof zg).length,l=r.filter(u=>u instanceof xg).length;if(a>1||a>0&&l>0)throw new H(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const s of i)e=s._apply(e);return e}class xg extends oL{constructor(t,n,i){super(),this._field=t,this._op=n,this._value=i,this.type="where"}static _create(t,n,i){return new xg(t,n,i)}_apply(t){const n=this._parse(t);return Yb(t._query,n),new ha(t.firestore,t.converter,Vd(t._query,n))}_parse(t){const n=jb(t.firestore);return function(r,a,l,u,h,d,m){let g;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new H(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Zv(m,d);const D=[];for(const M of m)D.push(Jv(u,r,M));g={arrayValue:{values:D}}}else g=Jv(u,r,m)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Zv(m,d),g=tL(l,a,m,d==="in"||d==="not-in");return jt.create(h,d,g)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class zg extends kg{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new zg(t,n)}_parse(t){const n=this._queryConstraints.map(i=>i._parse(t)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:fn.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(s,r){let a=s;const l=r.getFlattenedFilters();for(const u of l)Yb(a,u),a=Vd(a,u)}(t._query,n),new ha(t.firestore,t.converter,Vd(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Jv(e,t,n){if(typeof(n=$t(n))=="string"){if(n==="")throw new H(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!HS(t)&&n.indexOf("/")!==-1)throw new H(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=t.path.child(vt.fromString(n));if(!K.isDocumentKey(i))throw new H(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return uv(e,new K(i))}if(n instanceof Yt)return uv(e,n._key);throw new H(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Uc(n)}.`)}function Zv(e,t){if(!Array.isArray(e)||e.length===0)throw new H(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Yb(e,t){const n=function(s,r){for(const a of s)for(const l of a.getFlattenedFilters())if(r.indexOf(l.op)>=0)return l.op;return null}(e.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new H(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new H(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function uL(e,t,n){let i;return i=e?e.toFirestore(t):t,i}class Ka{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ws extends Kb{constructor(t,n,i,s,r,a){super(t,n,i,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new fu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const i=this._document.data.field(Ug("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new H(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,n={};return n.type=ws._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ws._jsonSchemaVersion="firestore/documentSnapshot/1.0",ws._jsonSchema={type:Ht("string",ws._jsonSchemaVersion),bundleSource:Ht("string","DocumentSnapshot"),bundleName:Ht("string"),bundle:Ht("string")};class fu extends ws{data(t={}){return super.data(t)}}class Lr{constructor(t,n,i,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ka(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(i=>{t.call(n,new fu(this._firestore,this._userDataWriter,i.key,i,new Ka(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const u=new fu(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ka(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>r||l.type!==3).map(l=>{const u=new fu(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ka(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:cL(l.type),doc:u,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new H(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Lr._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=ug.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],i=[],s=[];return this.docs.forEach(r=>{r._document!==null&&(n.push(r._document),i.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),s.push(r.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function cL(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q(61501,{type:e})}}/**
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
 */Lr._jsonSchemaVersion="firestore/querySnapshot/1.0",Lr._jsonSchema={type:Ht("string",Lr._jsonSchemaVersion),bundleSource:Ht("string","QuerySnapshot"),bundleName:Ht("string"),bundle:Ht("string")};function hL(e){return Qb(Or(e.firestore,ko),[new yg(e._key,bn.none())])}function fL(e,t){const n=Or(e.firestore,ko),i=Ub(e),s=uL(e.converter,t),r=jb(e.firestore);return Qb(n,[W4(r,"addDoc",i._key,s,e.converter!==null,{}).toMutation(i._key,bn.exists(!1))]).then(()=>i)}function dL(e,...t){var h,d,m;e=$t(e);let n={includeMetadataChanges:!1,source:"default"},i=0;typeof t[i]!="object"||$v(t[i])||(n=t[i++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if($v(t[i])){const g=t[i];t[i]=(h=g.next)==null?void 0:h.bind(g),t[i+1]=(d=g.error)==null?void 0:d.bind(g),t[i+2]=(m=g.complete)==null?void 0:m.bind(g)}let r,a,l;if(e instanceof Yt)a=Or(e.firestore,ko),l=gg(e._key.path),r={next:g=>{t[i]&&t[i](mL(a,e,g))},error:t[i+1],complete:t[i+2]};else{const g=Or(e,ha);a=Or(g.firestore,ko),l=g._query;const E=new Gb(a);r={next:D=>{t[i]&&t[i](new Lr(a,E,g,D))},error:t[i+1],complete:t[i+2]},aL(e._query)}const u=kb(a);return H4(u,l,s,r)}function Qb(e,t){const n=kb(e);return F4(n,t)}function mL(e,t,n){const i=n.docs.get(t._key),s=new Gb(e);return new ws(e,s,t._key,i,new Ka(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){qO(ra),Rn(new hn("firestore",(i,{instanceIdentifier:s,options:r})=>{const a=i.getProvider("app").getImmediate(),l=new ko(new GO(i.getProvider("auth-internal")),new QO(a,i.getProvider("app-check-internal")),hV(a,s),a);return r={useFetchStreams:n,...r},l._setSettings(r),l},"PUBLIC").setMultipleInstances(!0)),en(Qv,Xv,t),en(Qv,Xv,"esm2020")})();const gL={apiKey:"AIzaSyD8nux0wF2Os-fxVtzEMPPLADxrpO5tAoE",authDomain:"spendo-ac49c.firebaseapp.com",projectId:"spendo-ac49c",storageBucket:"spendo-ac49c.firebasestorage.app",messagingSenderId:"577386385763",appId:"1:577386385763:web:37e48b81ebad899ca3c356",measurementId:"G-23HGFVEGSD"},Bg=mA(gL);T2(Bg);const fo=BO(Bg),pL=new zn,yf=Q4(Bg);function yL({isOpen:e,onClose:t,defaultIsLogin:n=!0}){const[i,s]=Gt.useState(n),[r,a]=Gt.useState(""),[l,u]=Gt.useState(""),[h,d]=Gt.useState(""),[m,g]=Gt.useState(!1);if(!e)return null;const E=async M=>{M.preventDefault(),d(""),g(!0);try{i?await wN(fo,r,l):await bN(fo,r,l),t()}catch(k){console.error(k);const b=k.code?k.code.replace("auth/","").replace(/-/g," "):k.message;d(b)}finally{g(!1)}},D=async()=>{d(""),g(!0);try{await XN(fo,pL),t()}catch(M){console.error(M);const k=M.code?M.code.replace("auth/","").replace(/-/g," "):M.message;d(k)}finally{g(!1)}};return x.jsx("div",{className:"modal-overlay",onClick:t,children:x.jsxs("div",{className:"modal-content",onClick:M=>M.stopPropagation(),children:[x.jsx("button",{className:"modal-close",onClick:t,children:"✕"}),x.jsx("h2",{children:i?"Welcome Back":"Create Account"}),x.jsx("p",{className:"modal-subtitle",children:i?"Login to sync your expenses.":"Sign up to backup your data."}),h&&x.jsx("div",{className:"modal-error",children:h}),x.jsxs("form",{onSubmit:E,className:"auth-form",children:[x.jsxs("div",{className:"input-group",children:[x.jsx("label",{children:"Email"}),x.jsx("input",{type:"email",required:!0,value:r,onChange:M=>a(M.target.value),placeholder:"you@example.com"})]}),x.jsxs("div",{className:"input-group",children:[x.jsx("label",{children:"Password"}),x.jsx("input",{type:"password",required:!0,value:l,onChange:M=>u(M.target.value),placeholder:"••••••••",minLength:"6"})]}),x.jsx("button",{type:"submit",className:"auth-submit-btn",disabled:m,children:m?"Processing...":i?"Login":"Sign Up"})]}),x.jsx("div",{className:"modal-divider",children:x.jsx("span",{children:"OR"})}),x.jsxs("button",{className:"google-btn",onClick:D,disabled:m,children:[x.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",alt:"Google logo"}),"Continue with Google"]}),x.jsxs("p",{className:"modal-toggle-text",children:[i?"Don't have an account? ":"Already have an account? ",x.jsx("span",{className:"toggle-link",onClick:()=>{s(!i),d("")},children:i?"Sign up":"Login"})]})]})})}const _f=["snacks","meal","transportation","others"],vf={snacks:"🍿",meal:"🍽️",transportation:"🚌",others:"📦"};function _L(){return new Date().toISOString().split("T")[0]}function vL(){const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}`}function EL(e){return new Date(e+"T00:00:00").toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}function TL(e){return new Date(e+"T00:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric"})}function AL(){try{const e=localStorage.getItem("spendo_expenses");return e?JSON.parse(e):[]}catch{return[]}}function SL(e){localStorage.setItem("spendo_expenses",JSON.stringify(e))}function bL(){const[e,t]=Gt.useState([]),[n,i]=Gt.useState({snacks:"",meal:"",transportation:"",others:""}),[s,r]=Gt.useState(""),[a,l]=Gt.useState("daily"),[u,h]=Gt.useState(null),[d,m]=Gt.useState(!1),[g,E]=Gt.useState(!0),[D,M]=Gt.useState(!0),k=_L(),b=vL();Gt.useEffect(()=>{const N=CN(fo,j=>{h(j),M(!1),j||t(AL())});return()=>N()},[]),Gt.useEffect(()=>{if(!u)return;const N=lL(Fv(yf,"users",u.uid,"expenses")),j=dL(N,G=>{const et=G.docs.map(Tt=>({docId:Tt.id,...Tt.data()}));et.sort((Tt,On)=>On.id-Tt.id),t(et)});return()=>j()},[u]),Gt.useEffect(()=>{!D&&!u&&SL(e)},[e,u,D]);const T=async N=>{const j=parseFloat(n[N]);if(!j||j<=0)return;const G={id:Date.now(),date:k,category:N,amount:j,...N==="others"&&s.trim()?{label:s.trim()}:{}};if(u)try{await fL(Fv(yf,"users",u.uid,"expenses"),G)}catch(et){console.error("Error adding document:",et)}else t(et=>[G,...et]);i(et=>({...et,[N]:""})),N==="others"&&r("")},I=(N,j)=>{i(G=>({...G,[N]:j}))},V=(N,j)=>{N.key==="Enter"&&T(j)},B=async N=>{if(u)try{await hL(Ub(yf,"users",u.uid,"expenses",N.docId))}catch(j){console.error("Error deleting document:",j)}else t(j=>j.filter(G=>G.id!==N.id))},F=()=>{DN(fo)},_=N=>{E(N==="login"),m(!0)},y=e.filter(N=>N.date===k),v=y.reduce((N,j)=>N+j.amount,0),S=e.filter(N=>N.date.startsWith(b)),w=S.reduce((N,j)=>N+j.amount,0),R=_f.reduce((N,j)=>(N[j]=S.filter(G=>G.category===j).reduce((G,et)=>G+et.amount,0),N),{}),A=Math.max(...Object.values(R),1),Ut={};S.forEach(N=>{Ut[N.date]=(Ut[N.date]||0)+N.amount});const De=Object.entries(Ut).map(([N,j])=>({date:N,total:j})).sort((N,j)=>j.date.localeCompare(N.date));return x.jsxs(x.Fragment,{children:[x.jsx(yL,{isOpen:d,onClose:()=>m(!1),defaultIsLogin:g}),x.jsxs("header",{className:"app-header",children:[x.jsxs("div",{className:"header-left",children:[x.jsx("div",{className:"app-logo",children:"Spendo"}),x.jsxs("div",{className:"app-date",children:[x.jsx("span",{className:"date-icon",children:"📅"}),EL(k)]})]}),x.jsx("div",{className:"auth-buttons",children:!D&&u?x.jsxs("div",{className:"user-profile",children:[x.jsx("span",{className:"user-email",children:u.email||u.displayName}),x.jsx("button",{className:"auth-btn logout-btn",onClick:F,children:"Logout"})]}):D?null:x.jsxs(x.Fragment,{children:[x.jsx("button",{className:"auth-btn login-btn",onClick:()=>_("login"),children:"Login"}),x.jsx("button",{className:"auth-btn signup-btn",onClick:()=>_("signup"),children:"Sign Up"})]})})]}),x.jsxs("div",{className:"tabs",children:[x.jsx("button",{id:"tab-daily",className:`tab-btn ${a==="daily"?"active":""}`,onClick:()=>l("daily"),children:"Today"}),x.jsx("button",{id:"tab-monthly",className:`tab-btn ${a==="monthly"?"active":""}`,onClick:()=>l("monthly"),children:"Monthly"})]}),a==="daily"&&x.jsxs(x.Fragment,{children:[x.jsx("div",{className:"category-inputs",children:_f.map(N=>x.jsxs("div",{className:`cat-input-card ${N}`,children:[x.jsxs("div",{className:"cat-input-header",children:[x.jsx("span",{className:"cat-input-icon",children:vf[N]}),x.jsx("span",{className:"cat-input-name",children:N.charAt(0).toUpperCase()+N.slice(1)})]}),N==="others"&&x.jsx("input",{id:"others-label",className:"others-label-input",type:"text",placeholder:"What for?",value:s,onChange:j=>r(j.target.value)}),x.jsxs("div",{className:"cat-input-row",children:[x.jsx("input",{id:`amount-${N}`,className:"amount-input",type:"number",placeholder:"BDT",value:n[N],onChange:j=>I(N,j.target.value),onKeyDown:j=>V(j,N),min:"0"}),x.jsx("button",{id:`add-${N}`,className:`cat-add-btn ${N}`,onClick:()=>T(N),children:"Add"})]})]},N))}),x.jsxs("div",{className:"total-card",children:[x.jsx("div",{className:"label",children:"Today's Total"}),x.jsxs("div",{className:"amount",children:[v.toLocaleString(),x.jsx("span",{className:"currency",children:"BDT"})]})]}),x.jsxs("div",{className:"expense-list",children:[x.jsx("h2",{children:"📋 Today's Expenses"}),y.length===0?x.jsxs("div",{className:"empty-state",children:[x.jsx("div",{className:"empty-icon",children:"💸"}),x.jsx("p",{children:"No expenses yet today."}),x.jsx("p",{children:"Add your first entry above!"})]}):y.map(N=>x.jsxs("div",{className:"expense-item",children:[x.jsxs("span",{className:`cat-badge ${N.category}`,children:[vf[N.category]," ",N.label||N.category]}),x.jsxs("span",{className:"expense-amount",children:[N.amount.toLocaleString(),x.jsx("span",{className:"currency",children:"BDT"})]}),x.jsx("button",{className:"delete-btn",onClick:()=>B(N),"aria-label":`Delete ${N.category} expense`,children:"✕"})]},N.id))]})]}),a==="monthly"&&x.jsx("div",{className:"monthly-summary",children:S.length===0?x.jsxs("div",{className:"no-monthly-data",children:[x.jsx("div",{className:"empty-icon",children:"📊"}),x.jsx("p",{children:"No expenses recorded this month yet."})]}):x.jsxs(x.Fragment,{children:[x.jsxs("div",{className:"monthly-total",children:[x.jsx("div",{className:"label",children:new Date().toLocaleDateString("en-US",{month:"long",year:"numeric"})}),x.jsxs("div",{className:"amount",children:[w.toLocaleString(),x.jsx("span",{className:"currency",children:" BDT"})]})]}),x.jsxs("div",{className:"breakdown-card",children:[x.jsx("h3",{children:"Category Breakdown"}),_f.map(N=>x.jsxs("div",{children:[x.jsxs("div",{className:"breakdown-item",children:[x.jsxs("div",{className:"breakdown-left",children:[x.jsx("span",{className:`breakdown-dot ${N}`}),x.jsxs("span",{className:"breakdown-cat",children:[vf[N]," ",N]})]}),x.jsxs("span",{className:"breakdown-amount",children:[R[N].toLocaleString(),x.jsx("span",{className:"currency",children:"BDT"})]})]}),x.jsx("div",{className:"breakdown-bar-container",children:x.jsx("div",{className:`breakdown-bar ${N}`,style:{width:`${R[N]/A*100}%`}})})]},N))]}),x.jsxs("div",{className:"daily-history",children:[x.jsx("h3",{children:"Daily Totals"}),De.map(N=>x.jsxs("div",{className:"daily-row",children:[x.jsx("span",{className:"daily-row-date",children:TL(N.date)}),x.jsxs("span",{className:"daily-row-amount",children:[N.total.toLocaleString(),x.jsx("span",{className:"currency",children:"BDT"})]})]},N.date))]})]})})]})}E1.createRoot(document.getElementById("root")).render(x.jsx(Gt.StrictMode,{children:x.jsx(bL,{})}));
