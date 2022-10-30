"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const te=require("react"),pr=s=>s&&typeof s=="object"&&"default"in s?s:{default:s},Pe=pr(te),xe=s=>{const{className:u,style:d,classList:v=[]}=s,b=[u,...v].join(" "),y=Object.assign({},d);return{className:b,style:y}},mr=s=>[...s].join(" ").replaceAll("  "," ").replace(/\s+$/g,""),gr="_button_w0crc_1",_r="_small_w0crc_46",br="_medium_w0crc_51",yr="_large_w0crc_56",hr="_outlined_w0crc_61",Er="_contained_w0crc_66",Rr="_pill_w0crc_70",Tr="_loading_w0crc_75",wr="_preloader_w0crc_79",Cr="_disabled_w0crc_90",x={button:gr,small:_r,medium:br,large:yr,outlined:hr,contained:Er,pill:Rr,loading:Tr,preloader:wr,disabled:Cr},ke=({variant:s="default",size:u="medium",pill:d,loading:v,disabled:b,...y})=>{const{className:T,style:h}=xe({...y});return{className:mr([x.button,x[u],x[s],d&&x.pill,v&&x.loading,b&&x.disabled,T]),style:Object.assign({},h),preloaderClassName:x.preloader}};var z={exports:{}},I={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oe;function Sr(){if(Oe)return I;Oe=1;var s=Pe.default,u=Symbol.for("react.element"),d=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,b=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function T(h,p,O){var m,R={},w=null,k=null;O!==void 0&&(w=""+O),p.key!==void 0&&(w=""+p.key),p.ref!==void 0&&(k=p.ref);for(m in p)v.call(p,m)&&!y.hasOwnProperty(m)&&(R[m]=p[m]);if(h&&h.defaultProps)for(m in p=h.defaultProps,p)R[m]===void 0&&(R[m]=p[m]);return{$$typeof:u,type:h,key:w,ref:k,props:R,_owner:b.current}}return I.Fragment=d,I.jsx=T,I.jsxs=T,I}var M={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var je;function Or(){return je||(je=1,process.env.NODE_ENV!=="production"&&function(){var s=Pe.default,u=Symbol.for("react.element"),d=Symbol.for("react.portal"),v=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),k=Symbol.for("react.offscreen"),Y=Symbol.iterator,J="@@iterator";function Fe(e){if(e===null||typeof e!="object")return null;var r=Y&&e[Y]||e[J];return typeof r=="function"?r:null}var N=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function g(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];Ae("error",e,t)}}function Ae(e,r,t){{var n=N.ReactDebugCurrentFrame,i=n.getStackAddendum();i!==""&&(r+="%s",t=t.concat([i]));var l=t.map(function(o){return String(o)});l.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,l)}}var $e=!1,Ie=!1,Me=!1,We=!1,Ye=!1,ne;ne=Symbol.for("react.module.reference");function Le(e){return!!(typeof e=="string"||typeof e=="function"||e===v||e===y||Ye||e===b||e===O||e===m||We||e===k||$e||Ie||Me||typeof e=="object"&&e!==null&&(e.$$typeof===w||e.$$typeof===R||e.$$typeof===T||e.$$typeof===h||e.$$typeof===p||e.$$typeof===ne||e.getModuleId!==void 0))}function Ve(e,r,t){var n=e.displayName;if(n)return n;var i=r.displayName||r.name||"";return i!==""?t+"("+i+")":t}function ae(e){return e.displayName||"Context"}function C(e){if(e==null)return null;if(typeof e.tag=="number"&&g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case v:return"Fragment";case d:return"Portal";case y:return"Profiler";case b:return"StrictMode";case O:return"Suspense";case m:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case h:var r=e;return ae(r)+".Consumer";case T:var t=e;return ae(t._context)+".Provider";case p:return Ve(e,e.render,"ForwardRef");case R:var n=e.displayName||null;return n!==null?n:C(e.type)||"Memo";case w:{var i=e,l=i._payload,o=i._init;try{return C(o(l))}catch{return null}}}return null}var P=Object.assign,A=0,oe,ie,se,le,ue,ce,fe;function de(){}de.__reactDisabledLog=!0;function Be(){{if(A===0){oe=console.log,ie=console.info,se=console.warn,le=console.error,ue=console.group,ce=console.groupCollapsed,fe=console.groupEnd;var e={configurable:!0,enumerable:!0,value:de,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}A++}}function Ue(){{if(A--,A===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:P({},e,{value:oe}),info:P({},e,{value:ie}),warn:P({},e,{value:se}),error:P({},e,{value:le}),group:P({},e,{value:ue}),groupCollapsed:P({},e,{value:ce}),groupEnd:P({},e,{value:fe})})}A<0&&g("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var G=N.ReactCurrentDispatcher,K;function L(e,r,t){{if(K===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);K=n&&n[1]||""}return`
`+K+e}}var H=!1,V;{var qe=typeof WeakMap=="function"?WeakMap:Map;V=new qe}function ve(e,r){if(!e||H)return"";{var t=V.get(e);if(t!==void 0)return t}var n;H=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var l;l=G.current,G.current=null,Be();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(S){n=S}Reflect.construct(e,[],o)}else{try{o.call()}catch(S){n=S}e.call(o.prototype)}}else{try{throw Error()}catch(S){n=S}e()}}catch(S){if(S&&n&&typeof S.stack=="string"){for(var a=S.stack.split(`
`),_=n.stack.split(`
`),c=a.length-1,f=_.length-1;c>=1&&f>=0&&a[c]!==_[f];)f--;for(;c>=1&&f>=0;c--,f--)if(a[c]!==_[f]){if(c!==1||f!==1)do if(c--,f--,f<0||a[c]!==_[f]){var E=`
`+a[c].replace(" at new "," at ");return e.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",e.displayName)),typeof e=="function"&&V.set(e,E),E}while(c>=1&&f>=0);break}}}finally{H=!1,G.current=l,Ue(),Error.prepareStackTrace=i}var F=e?e.displayName||e.name:"",Se=F?L(F):"";return typeof e=="function"&&V.set(e,Se),Se}function ze(e,r,t){return ve(e,!1)}function Je(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function B(e,r,t){if(e==null)return"";if(typeof e=="function")return ve(e,Je(e));if(typeof e=="string")return L(e);switch(e){case O:return L("Suspense");case m:return L("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case p:return ze(e.render);case R:return B(e.type,r,t);case w:{var n=e,i=n._payload,l=n._init;try{return B(l(i),r,t)}catch{}}}return""}var U=Object.prototype.hasOwnProperty,pe={},me=N.ReactDebugCurrentFrame;function q(e){if(e){var r=e._owner,t=B(e.type,e._source,r?r.type:null);me.setExtraStackFrame(t)}else me.setExtraStackFrame(null)}function Ge(e,r,t,n,i){{var l=Function.call.bind(U);for(var o in e)if(l(e,o)){var a=void 0;try{if(typeof e[o]!="function"){var _=Error((n||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw _.name="Invariant Violation",_}a=e[o](r,o,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(c){a=c}a&&!(a instanceof Error)&&(q(i),g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,o,typeof a),q(null)),a instanceof Error&&!(a.message in pe)&&(pe[a.message]=!0,q(i),g("Failed %s type: %s",t,a.message),q(null))}}}var Ke=Array.isArray;function X(e){return Ke(e)}function He(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function Xe(e){try{return ge(e),!1}catch{return!0}}function ge(e){return""+e}function _e(e){if(Xe(e))return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",He(e)),ge(e)}var $=N.ReactCurrentOwner,Ze={key:!0,ref:!0,__self:!0,__source:!0},be,ye,Z;Z={};function Qe(e){if(U.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function er(e){if(U.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function rr(e,r){if(typeof e.ref=="string"&&$.current&&r&&$.current.stateNode!==r){var t=C($.current.type);Z[t]||(g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',C($.current.type),e.ref),Z[t]=!0)}}function tr(e,r){{var t=function(){be||(be=!0,g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function nr(e,r){{var t=function(){ye||(ye=!0,g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var ar=function(e,r,t,n,i,l,o){var a={$$typeof:u,type:e,key:r,ref:t,props:o,_owner:l};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function or(e,r,t,n,i){{var l,o={},a=null,_=null;t!==void 0&&(_e(t),a=""+t),er(r)&&(_e(r.key),a=""+r.key),Qe(r)&&(_=r.ref,rr(r,i));for(l in r)U.call(r,l)&&!Ze.hasOwnProperty(l)&&(o[l]=r[l]);if(e&&e.defaultProps){var c=e.defaultProps;for(l in c)o[l]===void 0&&(o[l]=c[l])}if(a||_){var f=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&tr(o,f),_&&nr(o,f)}return ar(e,a,_,i,n,$.current,o)}}var Q=N.ReactCurrentOwner,he=N.ReactDebugCurrentFrame;function D(e){if(e){var r=e._owner,t=B(e.type,e._source,r?r.type:null);he.setExtraStackFrame(t)}else he.setExtraStackFrame(null)}var ee;ee=!1;function re(e){return typeof e=="object"&&e!==null&&e.$$typeof===u}function Ee(){{if(Q.current){var e=C(Q.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function ir(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var Re={};function sr(e){{var r=Ee();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Te(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=sr(r);if(Re[t])return;Re[t]=!0;var n="";e&&e._owner&&e._owner!==Q.current&&(n=" It was passed a child from "+C(e._owner.type)+"."),D(e),g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),D(null)}}function we(e,r){{if(typeof e!="object")return;if(X(e))for(var t=0;t<e.length;t++){var n=e[t];re(n)&&Te(n,r)}else if(re(e))e._store&&(e._store.validated=!0);else if(e){var i=Fe(e);if(typeof i=="function"&&i!==e.entries)for(var l=i.call(e),o;!(o=l.next()).done;)re(o.value)&&Te(o.value,r)}}}function lr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===p||r.$$typeof===R))t=r.propTypes;else return;if(t){var n=C(r);Ge(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!ee){ee=!0;var i=C(r);g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function ur(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){D(e),g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),D(null);break}}e.ref!==null&&(D(e),g("Invalid attribute `ref` supplied to `React.Fragment`."),D(null))}}function Ce(e,r,t,n,i,l){{var o=Le(e);if(!o){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var _=ir(i);_?a+=_:a+=Ee();var c;e===null?c="null":X(e)?c="array":e!==void 0&&e.$$typeof===u?(c="<"+(C(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):c=typeof e,g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",c,a)}var f=or(e,r,t,i,l);if(f==null)return f;if(o){var E=r.children;if(E!==void 0)if(n)if(X(E)){for(var F=0;F<E.length;F++)we(E[F],e);Object.freeze&&Object.freeze(E)}else g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else we(E,e)}return e===v?ur(f):lr(f),f}}function cr(e,r,t){return Ce(e,r,t,!0)}function fr(e,r,t){return Ce(e,r,t,!1)}var dr=fr,vr=cr;M.Fragment=v,M.jsx=dr,M.jsxs=vr}()),M}(function(s){process.env.NODE_ENV==="production"?s.exports=Sr():s.exports=Or()})(z);const jr=z.exports.Fragment,j=z.exports.jsx,W=z.exports.jsxs,Pr=s=>{const{size:u=16,color:d="currentColor",...v}=s;return W("svg",{xmlns:"http://www.w3.org/2000/svg",height:u,width:u*4,viewBox:"0 0 120 30",fill:d,...v,children:[W("circle",{cx:"15",cy:"15",r:"15",children:[j("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),j("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]}),W("circle",{cx:"60",cy:"15",r:"9",fillOpacity:"0.3",children:[j("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),j("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]}),W("circle",{cx:"105",cy:"15",r:"15",children:[j("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),j("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]})]})},Ne=({children:s,startIcon:u,endIcon:d,loading:v,preloaderClassName:b})=>({children:W(jr,{children:[u&&u,s,d&&d,v&&j("span",{className:b,children:j(Pr,{size:10})})]})}),xr=s=>{const{children:u,className:d,style:v,variant:b,size:y,pill:T,loading:h,startIcon:p,endIcon:O,disabled:m,...R}=s,{className:w,style:k,preloaderClassName:Y}=ke({className:d,style:v,variant:b,size:y,pill:T,loading:h,disabled:m}),{children:J}=Ne({children:u,startIcon:p,endIcon:O,loading:h,preloaderClassName:Y});return te.createElement("button",{className:w,style:k,disabled:m,["aria-disabled"]:m,...R},J)},kr="_tag_uwjou_1",Nr={tag:kr},De=({...s})=>{const{className:u,style:d}=xe({...s});return{className:[Nr.tag,u].join(" "),style:Object.assign({},d)}},Dr=({})=>({}),Fr=s=>{const{children:u,className:d,style:v}=s,{className:b,style:y}=De({className:d,style:v});return te.createElement("span",{className:b,style:y},u)};exports.Button=xr;exports.Tag=Fr;exports.useButton=Ne;exports.useButtonStyles=ke;exports.useTag=Dr;exports.useTagStyles=De;
(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.id="@iogart-ds-boilerplate/components",e.appendChild(document.createTextNode('._button_w0crc_1{margin:0;padding:.5rem 1rem;display:inline-flex;align-items:center;justify-content:center;flex-direction:row;flex-wrap:nowrap;gap:.5rem;box-sizing:border-box;appearance:button;font-family:Inter,Avenir,Helvetica,Arial,sans-serif;font-weight:600;border:1px solid transparent;background-color:transparent;border-radius:.25rem;cursor:pointer;vertical-align:middle}._button_w0crc_1:before{content:"";position:absolute;top:0;left:0;background-color:transparent;transition:background-color .125s ease-in-out 0s}._button_w0crc_1:not(:disabled):hover{position:relative;overflow:hidden}._button_w0crc_1:not(:disabled):hover:before{width:100%;height:100%;display:block;background-color:#19191912}._button_w0crc_1+._button_w0crc_1{margin-left:.35rem}._button_w0crc_1._small_w0crc_46{min-height:34px;font-size:.825rem;line-height:1.05}._button_w0crc_1._medium_w0crc_51{min-height:40px;font-size:1rem;line-height:1.15}._button_w0crc_1._large_w0crc_56{min-height:46px;font-size:1.105rem;line-height:1.25}._button_w0crc_1._outlined_w0crc_61{border-width:1px;border-style:solid;border-color:#191919bf}._button_w0crc_1._contained_w0crc_66{color:#fafafa;background-color:#191919}._button_w0crc_1._pill_w0crc_70{padding-left:1.25rem;padding-right:1.25rem;border-radius:5rem}._button_w0crc_1._loading_w0crc_75{position:relative;overflow:hidden}._button_w0crc_1._loading_w0crc_75 ._preloader_w0crc_79{width:100%;height:100%;display:flex;align-items:center;justify-content:center;position:absolute;top:0;left:0;background-color:#c8c8c880}._button_w0crc_1._disabled_w0crc_90{opacity:.5}._tag_uwjou_1{margin:0;padding:0;display:inline-flex}')),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
//# sourceMappingURL=index.js.map
