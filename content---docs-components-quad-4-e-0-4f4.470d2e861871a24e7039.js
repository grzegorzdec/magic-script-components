/*! For license information please see content---docs-components-quad-4-e-0-4f4.470d2e861871a24e7039.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{180:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return s}));var n=r(0),o=r.n(n),a=o.a.createContext({}),u=function(e){var t=o.a.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},c=function(e){var t=u(e.components);return o.a.createElement(a.Provider,{value:t},e.children)};var i="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),f=u(r),s=n,p=f[c+"."+s]||f[s]||l[s]||a;return r?o.a.createElement(p,Object.assign({},{ref:t},i,{components:r})):o.a.createElement(p,Object.assign({},{ref:t},i))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,u=new Array(a);u[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[i]="string"==typeof e?e:n,u[1]=c;for(var s=2;s<a;s++)u[s]=r[s];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},181:function(e,t,r){"use strict";e.exports=r(182)},182:function(e,t,r){"use strict";var n=r(183),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,u=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.suspense_list"):60120,m=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder");var h="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t=e.message,r="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return e.message="Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function g(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||O}function w(){}function N(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||O}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw v(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=g.prototype;var S=N.prototype=new w;S.constructor=N,n(S,g.prototype),S.isPureReactComponent=!0;var x={current:null},C={suspense:null},E={current:null},_=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,r){var n=void 0,o={},u=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(u=""+t.key),t)_.call(t,n)&&!P.hasOwnProperty(n)&&(o[n]=t[n]);var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){for(var l=Array(i),f=0;f<i;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:a,type:e,key:u,ref:c,props:o,_owner:E.current}}function $(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var R=/\/+/g,T=[];function M(e,t,r,n){if(T.length){var o=T.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function D(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function I(e,t,r){return null==e?0:function e(t,r,n,o){var c=typeof t;"undefined"!==c&&"boolean"!==c||(t=null);var i=!1;if(null===t)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case a:case u:i=!0}}if(i)return n(o,t,""===r?"."+q(t,0):r),1;if(i=0,r=""===r?".":r+":",Array.isArray(t))for(var l=0;l<t.length;l++){var f=r+q(c=t[l],l);i+=e(c,f,n,o)}else if(null===t||"object"!=typeof t?f=null:f="function"==typeof(f=h&&t[h]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),l=0;!(c=t.next()).done;)i+=e(c=c.value,f=r+q(c,l++),n,o);else if("object"===c)throw n=""+t,v(Error(31),"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return i}(e,"",t,r)}function q(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function V(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?L(e,n,r,(function(e){return e})):null!=e&&($(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+r)),n.push(e))}function L(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace(R,"$&/")+"/"),I(e,V,t=M(t,a,n,o)),D(t)}function U(){var e=x.current;if(null===e)throw v(Error(321));return e}var F={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return L(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;I(e,A,t=M(null,null,t,r)),D(t)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var t=[];return L(e,t,null,(function(e){return e})),t},only:function(e){if(!$(e))throw v(Error(143));return e}},createRef:function(){return{current:null}},Component:g,PureComponent:N,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return U().useCallback(e,t)},useContext:function(e,t){return U().useContext(e,t)},useEffect:function(e,t){return U().useEffect(e,t)},useImperativeHandle:function(e,t,r){return U().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return U().useLayoutEffect(e,t)},useMemo:function(e,t){return U().useMemo(e,t)},useReducer:function(e,t,r){return U().useReducer(e,t,r)},useRef:function(e){return U().useRef(e)},useState:function(e){return U().useState(e)},Fragment:c,Profiler:l,StrictMode:i,Suspense:d,unstable_SuspenseList:b,createElement:k,cloneElement:function(e,t,r){if(null==e)throw v(Error(267),e);var o=void 0,u=n({},e.props),c=e.key,i=e.ref,l=e._owner;if(null!=t){void 0!==t.ref&&(i=t.ref,l=E.current),void 0!==t.key&&(c=""+t.key);var f=void 0;for(o in e.type&&e.type.defaultProps&&(f=e.type.defaultProps),t)_.call(t,o)&&!P.hasOwnProperty(o)&&(u[o]=void 0===t[o]&&void 0!==f?f[o]:t[o])}if(1===(o=arguments.length-2))u.children=r;else if(1<o){f=Array(o);for(var s=0;s<o;s++)f[s]=arguments[s+2];u.children=f}return{$$typeof:a,type:e.type,key:c,ref:i,props:u,_owner:l}},createFactory:function(e){var t=k.bind(null,e);return t.type=e,t},isValidElement:$,version:"16.9.0",unstable_withSuspenseConfig:function(e,t){var r=C.suspense;C.suspense=void 0===t?null:t;try{e()}finally{C.suspense=r}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:x,ReactCurrentBatchConfig:C,ReactCurrentOwner:E,IsSomeRendererActing:{current:!1},assign:n}},B={default:F},z=B&&F||B;e.exports=z.default||z},183:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function u(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,c,i=u(e),l=1;l<arguments.length;l++){for(var f in r=Object(arguments[l]))o.call(r,f)&&(i[f]=r[f]);if(n){c=n(r);for(var s=0;s<c.length;s++)a.call(r,c[s])&&(i[c[s]]=r[c[s]])}}return i}},86:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return f}));r(181);var n=r(180);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u={id:"quad",title:"Quad"},c=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"viewMode options: ViewMode",id:"viewmode-options-viewmode",children:[]}]}],i={rightToc:c},l="wrapper";function f(e){var t=e.components,r=a(e,["components"]);return Object(n.b)(l,o({},i,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"description"},"Description"),Object(n.b)("p",null,"The Quad component renders a 2D rectangle in your scene and applies a texture to it. You can draw on this node or render stereoscopic images. By default, a quad node renders as a one meter square."),Object(n.b)("h2",{id:"example"},"Example"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"<Quad />\n")),Object(n.b)("h2",{id:"common-events"},Object(n.b)("a",o({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(n.b)("h2",{id:"common-properties"},Object(n.b)("a",o({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(n.b)("h2",{id:"create-properties"},"Create Properties"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",o({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",o({parentName:"tr"},{align:"center"}),"Default Value"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"renderResourceId"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"BigInt"),Object(n.b)("td",o({parentName:"tr"},{align:"center"}),"n/a"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Sets the resource used when drawing the quad component (optional).")))),Object(n.b)("h2",{id:"element-properties"},"Element Properties"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",o({parentName:"tr"},{align:"left"}),"Name"),Object(n.b)("th",o({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",o({parentName:"tr"},{align:"left"}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"texCoords"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"[vec2]"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"Sets the texture coordinates of the node being rendered when the resource referenced in ",Object(n.b)("inlineCode",{parentName:"td"},"renderResourceId")," is a texture. If the render resource is not a texture, this has no effect.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"viewMode"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"Sets the current ViewMode to the given value.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"size"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"vec2"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"Sets the custom size, which is one by default: ","[1, 1]",".")))),Object(n.b)("h3",{id:"viewmode-options-viewmode"},"viewMode options: ",Object(n.b)("a",o({parentName:"h3"},{href:"/docs/types/viewMode"}),"ViewMode")))}f.isMDXComponent=!0}}]);