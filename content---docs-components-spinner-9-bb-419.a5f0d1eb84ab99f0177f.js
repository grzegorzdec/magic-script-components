/*! For license information please see content---docs-components-spinner-9-bb-419.a5f0d1eb84ab99f0177f.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{180:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r),o=a.a.createContext({}),i=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=i(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),p=i(n),s=r,f=p[l+"."+s]||p[s]||u[s]||o;return n?a.a.createElement(f,Object.assign({},{ref:t},c,{components:n})):a.a.createElement(f,Object.assign({},{ref:t},c))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},181:function(e,t,n){"use strict";e.exports=n(182)},182:function(e,t,n){"use strict";var r=n(183),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,i=a?Symbol.for("react.portal"):60106,l=a?Symbol.for("react.fragment"):60107,c=a?Symbol.for("react.strict_mode"):60108,u=a?Symbol.for("react.profiler"):60114,p=a?Symbol.for("react.provider"):60109,s=a?Symbol.for("react.context"):60110,f=a?Symbol.for("react.forward_ref"):60112,b=a?Symbol.for("react.suspense"):60113,d=a?Symbol.for("react.suspense_list"):60120,m=a?Symbol.for("react.memo"):60115,y=a?Symbol.for("react.lazy"):60116;a&&Symbol.for("react.fundamental"),a&&Symbol.for("react.responder");var h="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t=e.message,n="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return e.message="Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function v(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||O}function N(){}function w(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||O}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw g(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},N.prototype=v.prototype;var S=w.prototype=new N;S.constructor=w,r(S,v.prototype),S.isPureReactComponent=!0;var C={current:null},E={suspense:null},x={current:null},_=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var r=void 0,a={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)_.call(t,r)&&!P.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var u=Array(c),p=0;p<c;p++)u[p]=arguments[p+2];a.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:x.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var $=/\/+/g,R=[];function D(e,t,n,r){if(R.length){var a=R.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function A(e,t,n){return null==e?0:function e(t,n,r,a){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var c=!1;if(null===t)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case o:case i:c=!0}}if(c)return r(a,t,""===n?"."+L(t,0):n),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var u=0;u<t.length;u++){var p=n+L(l=t[u],u);c+=e(l,p,r,a)}else if(null===t||"object"!=typeof t?p=null:p="function"==typeof(p=h&&t[h]||t["@@iterator"])?p:null,"function"==typeof p)for(t=p.call(t),u=0;!(l=t.next()).done;)c+=e(l=l.value,p=n+L(l,u++),r,a);else if("object"===l)throw r=""+t,g(Error(31),"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return c}(e,"",t,n)}function L(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?U(e,r,n,(function(e){return e})):null!=e&&(T(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace($,"$&/")+"/")+n)),r.push(e))}function U(e,t,n,r,a){var o="";null!=n&&(o=(""+n).replace($,"$&/")+"/"),A(e,q,t=D(t,o,r,a)),I(t)}function z(){var e=C.current;if(null===e)throw g(Error(321));return e}var F={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return U(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;A(e,M,t=D(null,null,t,n)),I(t)},count:function(e){return A(e,(function(){return null}),null)},toArray:function(e){var t=[];return U(e,t,null,(function(e){return e})),t},only:function(e){if(!T(e))throw g(Error(143));return e}},createRef:function(){return{current:null}},Component:v,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:f,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return z().useCallback(e,t)},useContext:function(e,t){return z().useContext(e,t)},useEffect:function(e,t){return z().useEffect(e,t)},useImperativeHandle:function(e,t,n){return z().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return z().useLayoutEffect(e,t)},useMemo:function(e,t){return z().useMemo(e,t)},useReducer:function(e,t,n){return z().useReducer(e,t,n)},useRef:function(e){return z().useRef(e)},useState:function(e){return z().useState(e)},Fragment:l,Profiler:u,StrictMode:c,Suspense:b,unstable_SuspenseList:d,createElement:k,cloneElement:function(e,t,n){if(null==e)throw g(Error(267),e);var a=void 0,i=r({},e.props),l=e.key,c=e.ref,u=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,u=x.current),void 0!==t.key&&(l=""+t.key);var p=void 0;for(a in e.type&&e.type.defaultProps&&(p=e.type.defaultProps),t)_.call(t,a)&&!P.hasOwnProperty(a)&&(i[a]=void 0===t[a]&&void 0!==p?p[a]:t[a])}if(1===(a=arguments.length-2))i.children=n;else if(1<a){p=Array(a);for(var s=0;s<a;s++)p[s]=arguments[s+2];i.children=p}return{$$typeof:o,type:e.type,key:l,ref:c,props:i,_owner:u}},createFactory:function(e){var t=k.bind(null,e);return t.type=e,t},isValidElement:T,version:"16.9.0",unstable_withSuspenseConfig:function(e,t){var n=E.suspense;E.suspense=void 0===t?null:t;try{e()}finally{E.suspense=n}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:C,ReactCurrentBatchConfig:E,ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:r}},V={default:F},B=V&&F||V;e.exports=B.default||B},183:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,l,c=i(e),u=1;u<arguments.length;u++){for(var p in n=Object(arguments[u]))a.call(n,p)&&(c[p]=n[p]);if(r){l=r(n);for(var s=0;s<l.length;s++)o.call(n,l[s])&&(c[l[s]]=n[l[s]])}}return c}},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));n(181);var r=n(180);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={id:"spinner",title:"Spinner"},l=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"type options: LoadingSpinnerType",id:"type-options-loadingspinnertype",children:[]}]}],c={rightToc:l},u="wrapper";function p(e){var t=e.components,n=o(e,["components"]);return Object(r.b)(u,a({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"description"},"Description"),Object(r.b)("p",null,"The Spinner shows the loading state using specific visual effects. There are two types of loading spinners (",Object(r.b)("inlineCode",{parentName:"p"},"sprite-animation"),", ",Object(r.b)("inlineCode",{parentName:"p"},"particle-package"),") with different effects."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"<Spinner />\n")),Object(r.b)("h2",{id:"common-events"},Object(r.b)("a",a({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(r.b)("h2",{id:"common-properties"},Object(r.b)("a",a({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(r.b)("h2",{id:"create-properties"},"Create Properties"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",a({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",a({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",a({parentName:"tr"},{align:"center"}),"Default Value"),Object(r.b)("th",a({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"type"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",a({parentName:"tr"},{align:"center"}),"n/a"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"loading spinner type")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"resourceId"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"number"),Object(r.b)("td",a({parentName:"tr"},{align:"center"}),"0"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"The resource ID.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"resourcePath"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",a({parentName:"tr"},{align:"center"}),"''"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"The resource path in the resource (optional).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"height"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"number"),Object(r.b)("td",a({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"0")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"The height of the loading spinner (optional).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"determinate"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",a({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"If ",Object(r.b)("inlineCode",{parentName:"td"},"true")," creates a determinate loading Spinner element using default settings.")))),Object(r.b)("h2",{id:"element-properties"},"Element Properties"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",a({parentName:"tr"},{align:"left"}),"Name"),Object(r.b)("th",a({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",a({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"value"),Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"number"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"The normalized value between 0-1 for loading completeness, with 0 being no progress and 1 fully complete. Will have effect only if the loading spinner is determinate.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"size"),Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"vec2"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"Sets the loading Spinner size. This will affect the visual scale of all sprite based loading spinners but has no affect on the visual scale of a particle based spinner. Instead, modify the particle files directly to adjust the particle effect size. This does affect, and should be used to adjust, the bounds of all loading spinners.")))),Object(r.b)("h3",{id:"type-options-loadingspinnertype"},"type options: ",Object(r.b)("a",a({parentName:"h3"},{href:"/docs/types/loadingSpinnerType"}),"LoadingSpinnerType")))}p.isMDXComponent=!0}}]);