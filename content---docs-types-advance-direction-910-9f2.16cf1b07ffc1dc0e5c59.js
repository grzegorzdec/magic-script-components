/*! For license information please see content---docs-types-advance-direction-910-9f2.16cf1b07ffc1dc0e5c59.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{120:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return f}));r(181);var n=r(180);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c={id:"advanceDirection",title:"AdvanceDirection Type"},i=[{value:"Alignment Type options",id:"alignment-type-options",children:[]}],a={rightToc:i},l="wrapper";function f(e){var t=e.components,r=u(e,["components"]);return Object(n.b)(l,o({},a,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"alignment-type-options"},"Alignment Type options"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"down"),Object(n.b)("li",{parentName:"ul"},"left"),Object(n.b)("li",{parentName:"ul"},"right"),Object(n.b)("li",{parentName:"ul"},"up")))}f.isMDXComponent=!0},180:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return s}));var n=r(0),o=r.n(n),u=o.a.createContext({}),c=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},i=function(e){var t=c(e.components);return o.a.createElement(u.Provider,{value:t},e.children)};var a="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,u=e.originalType,i=e.parentName,a=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),f=c(r),s=n,p=f[i+"."+s]||f[s]||l[s]||u;return r?o.a.createElement(p,Object.assign({},{ref:t},a,{components:r})):o.a.createElement(p,Object.assign({},{ref:t},a))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var u=r.length,c=new Array(u);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[a]="string"==typeof e?e:n,c[1]=i;for(var s=2;s<u;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},181:function(e,t,r){"use strict";e.exports=r(182)},182:function(e,t,r){"use strict";var n=r(183),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.suspense_list"):60120,m=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder");var v="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t=e.message,r="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return e.message="Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function j(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||g}function w(){}function S(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||g}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw h(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=j.prototype;var _=S.prototype=new w;_.constructor=S,n(_,j.prototype),_.isPureReactComponent=!0;var k={current:null},x={suspense:null},E={current:null},C=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function $(e,t,r){var n=void 0,o={},c=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)C.call(t,n)&&!P.hasOwnProperty(n)&&(o[n]=t[n]);var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){for(var l=Array(a),f=0;f<a;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===o[n]&&(o[n]=a[n]);return{$$typeof:u,type:e,key:c,ref:i,props:o,_owner:E.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var T=/\/+/g,A=[];function N(e,t,r,n){if(A.length){var o=A.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function D(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>A.length&&A.push(e)}function I(e,t,r){return null==e?0:function e(t,r,n,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var a=!1;if(null===t)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case u:case c:a=!0}}if(a)return n(o,t,""===r?"."+M(t,0):r),1;if(a=0,r=""===r?".":r+":",Array.isArray(t))for(var l=0;l<t.length;l++){var f=r+M(i=t[l],l);a+=e(i,f,n,o)}else if(null===t||"object"!=typeof t?f=null:f="function"==typeof(f=v&&t[v]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),l=0;!(i=t.next()).done;)a+=e(i=i.value,f=r+M(i,l++),n,o);else if("object"===i)throw n=""+t,h(Error(31),"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return a}(e,"",t,r)}function M(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function q(e,t){e.func.call(e.context,t,e.count++)}function L(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?U(e,n,r,(function(e){return e})):null!=e&&(R(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(T,"$&/")+"/")+r)),n.push(e))}function U(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(T,"$&/")+"/"),I(e,L,t=N(t,u,n,o)),D(t)}function F(){var e=k.current;if(null===e)throw h(Error(321));return e}var V={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return U(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;I(e,q,t=N(null,null,t,r)),D(t)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var t=[];return U(e,t,null,(function(e){return e})),t},only:function(e){if(!R(e))throw h(Error(143));return e}},createRef:function(){return{current:null}},Component:j,PureComponent:S,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:b,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return F().useCallback(e,t)},useContext:function(e,t){return F().useContext(e,t)},useEffect:function(e,t){return F().useEffect(e,t)},useImperativeHandle:function(e,t,r){return F().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return F().useLayoutEffect(e,t)},useMemo:function(e,t){return F().useMemo(e,t)},useReducer:function(e,t,r){return F().useReducer(e,t,r)},useRef:function(e){return F().useRef(e)},useState:function(e){return F().useState(e)},Fragment:i,Profiler:l,StrictMode:a,Suspense:y,unstable_SuspenseList:d,createElement:$,cloneElement:function(e,t,r){if(null==e)throw h(Error(267),e);var o=void 0,c=n({},e.props),i=e.key,a=e.ref,l=e._owner;if(null!=t){void 0!==t.ref&&(a=t.ref,l=E.current),void 0!==t.key&&(i=""+t.key);var f=void 0;for(o in e.type&&e.type.defaultProps&&(f=e.type.defaultProps),t)C.call(t,o)&&!P.hasOwnProperty(o)&&(c[o]=void 0===t[o]&&void 0!==f?f[o]:t[o])}if(1===(o=arguments.length-2))c.children=r;else if(1<o){f=Array(o);for(var s=0;s<o;s++)f[s]=arguments[s+2];c.children=f}return{$$typeof:u,type:e.type,key:i,ref:a,props:c,_owner:l}},createFactory:function(e){var t=$.bind(null,e);return t.type=e,t},isValidElement:R,version:"16.9.0",unstable_withSuspenseConfig:function(e,t){var r=x.suspense;x.suspense=void 0===t?null:t;try{e()}finally{x.suspense=r}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:k,ReactCurrentBatchConfig:x,ReactCurrentOwner:E,IsSomeRendererActing:{current:!1},assign:n}},B={default:V},X=B&&V||B;e.exports=X.default||X},183:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,i,a=c(e),l=1;l<arguments.length;l++){for(var f in r=Object(arguments[l]))o.call(r,f)&&(a[f]=r[f]);if(n){i=n(r);for(var s=0;s<i.length;s++)u.call(r,i[s])&&(a[i[s]]=r[i[s]])}}return a}}}]);