(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{180:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n),i=o.a.createContext({}),u=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},a=function(e){var t=u(e.components);return o.a.createElement(i.Provider,{value:t},e.children)};var c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),s=u(r),f=n,p=s[a+"."+f]||s[f]||l[f]||i;return r?o.a.createElement(p,Object.assign({},{ref:t},c,{components:r})):o.a.createElement(p,Object.assign({},{ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,u=new Array(i);u[0]=s;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[c]="string"==typeof e?e:n,u[1]=a;for(var f=2;f<i;f++)u[f]=r[f];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},181:function(e,t,r){"use strict";e.exports=r(182)},182:function(e,t,r){"use strict";var n=r(183),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,u=o?Symbol.for("react.portal"):60106,a=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.suspense_list"):60120,m=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder");var h="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t=e.message,r="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return e.message="Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function j(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||O}function w(){}function S(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||O}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw v(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=j.prototype;var x=S.prototype=new w;x.constructor=S,n(x,j.prototype),x.isPureReactComponent=!0;var E={current:null},_={suspense:null},C={current:null},k=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,r){var n=void 0,o={},u=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(u=""+t.key),t)k.call(t,n)&&!P.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var l=Array(c),s=0;s<c;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===o[n]&&(o[n]=c[n]);return{$$typeof:i,type:e,key:u,ref:a,props:o,_owner:C.current}}function $(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var R=/\/+/g,T=[];function L(e,t,r,n){if(T.length){var o=T.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function D(e,t,r){return null==e?0:function e(t,r,n,o){var a=typeof t;"undefined"!==a&&"boolean"!==a||(t=null);var c=!1;if(null===t)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case i:case u:c=!0}}if(c)return n(o,t,""===r?"."+I(t,0):r),1;if(c=0,r=""===r?".":r+":",Array.isArray(t))for(var l=0;l<t.length;l++){var s=r+I(a=t[l],l);c+=e(a,s,n,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=h&&t[h]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),l=0;!(a=t.next()).done;)c+=e(a=a.value,s=r+I(a,l++),n,o);else if("object"===a)throw n=""+t,v(Error(31),"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return c}(e,"",t,r)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?U(e,n,r,(function(e){return e})):null!=e&&($(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+r)),n.push(e))}function U(e,t,r,n,o){var i="";null!=r&&(i=(""+r).replace(R,"$&/")+"/"),D(e,q,t=L(t,i,n,o)),A(t)}function F(){var e=E.current;if(null===e)throw v(Error(321));return e}var V={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return U(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;D(e,M,t=L(null,null,t,r)),A(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return U(e,t,null,(function(e){return e})),t},only:function(e){if(!$(e))throw v(Error(143));return e}},createRef:function(){return{current:null}},Component:j,PureComponent:S,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:b,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return F().useCallback(e,t)},useContext:function(e,t){return F().useContext(e,t)},useEffect:function(e,t){return F().useEffect(e,t)},useImperativeHandle:function(e,t,r){return F().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return F().useLayoutEffect(e,t)},useMemo:function(e,t){return F().useMemo(e,t)},useReducer:function(e,t,r){return F().useReducer(e,t,r)},useRef:function(e){return F().useRef(e)},useState:function(e){return F().useState(e)},Fragment:a,Profiler:l,StrictMode:c,Suspense:y,unstable_SuspenseList:d,createElement:N,cloneElement:function(e,t,r){if(null==e)throw v(Error(267),e);var o=void 0,u=n({},e.props),a=e.key,c=e.ref,l=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,l=C.current),void 0!==t.key&&(a=""+t.key);var s=void 0;for(o in e.type&&e.type.defaultProps&&(s=e.type.defaultProps),t)k.call(t,o)&&!P.hasOwnProperty(o)&&(u[o]=void 0===t[o]&&void 0!==s?s[o]:t[o])}if(1===(o=arguments.length-2))u.children=r;else if(1<o){s=Array(o);for(var f=0;f<o;f++)s[f]=arguments[f+2];u.children=s}return{$$typeof:i,type:e.type,key:a,ref:c,props:u,_owner:l}},createFactory:function(e){var t=N.bind(null,e);return t.type=e,t},isValidElement:$,version:"16.9.0",unstable_withSuspenseConfig:function(e,t){var r=_.suspense;_.suspense=void 0===t?null:t;try{e()}finally{_.suspense=r}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:E,ReactCurrentBatchConfig:_,ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:n}},B={default:V},X=B&&V||B;e.exports=X.default||X},183:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function u(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,a,c=u(e),l=1;l<arguments.length;l++){for(var s in r=Object(arguments[l]))o.call(r,s)&&(c[s]=r[s]);if(n){a=n(r);for(var f=0;f<a.length;f++)i.call(r,a[f])&&(c[a[f]]=r[a[f]])}}return c}},68:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"rightToc",(function(){return a})),r.d(t,"default",(function(){return s}));r(181);var n=r(180);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u={id:"line",title:"Line"},a=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[]}],c={rightToc:a},l="wrapper";function s(e){var t=e.components,r=i(e,["components"]);return Object(n.b)(l,o({},c,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"description"},"Description"),Object(n.b)("p",null,"The Line component renders a colored line. The Line component creates lines as a series of line segments. Line follows the order in which the points are added, and must have at least two points. Line color is a multiplier to the vertex color. Create disconnected lines by adding line breaks to the Line."),Object(n.b)("h2",{id:"example"},"Example"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"<Line />\n")),Object(n.b)("h2",{id:"common-events"},Object(n.b)("a",o({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(n.b)("h2",{id:"common-properties"},Object(n.b)("a",o({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(n.b)("h2",{id:"element-properties"},"Element Properties"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",o({parentName:"tr"},{align:"left"}),"Name"),Object(n.b)("th",o({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"points"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"[vec3]"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Sets the points that describe this series of line segments. The line follows the order in which the points are added. No line can exist if there is less than two points.")))))}s.isMDXComponent=!0}}]);