/*! For license information please see content---docs-components-date-picker-348-e7c.aa892bd3d0fb98faed0b.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{180:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n),o=a.a.createContext({}),l=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},c=function(e){var t=l(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var i="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,s=p[c+"."+f]||p[f]||u[f]||o;return r?a.a.createElement(s,Object.assign({},{ref:t},i,{components:r})):a.a.createElement(s,Object.assign({},{ref:t},i))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[i]="string"==typeof e?e:n,l[1]=c;for(var f=2;f<o;f++)l[f]=r[f];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},181:function(e,t,r){"use strict";e.exports=r(182)},182:function(e,t,r){"use strict";var n=r(183),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,l=a?Symbol.for("react.portal"):60106,c=a?Symbol.for("react.fragment"):60107,i=a?Symbol.for("react.strict_mode"):60108,u=a?Symbol.for("react.profiler"):60114,p=a?Symbol.for("react.provider"):60109,f=a?Symbol.for("react.context"):60110,s=a?Symbol.for("react.forward_ref"):60112,b=a?Symbol.for("react.suspense"):60113,m=a?Symbol.for("react.suspense_list"):60120,d=a?Symbol.for("react.memo"):60115,y=a?Symbol.for("react.lazy"):60116;a&&Symbol.for("react.fundamental"),a&&Symbol.for("react.responder");var h="function"==typeof Symbol&&Symbol.iterator;function O(e){for(var t=e.message,r="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return e.message="Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function g(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||j}function N(){}function w(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||j}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw O(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},N.prototype=g.prototype;var S=w.prototype=new N;S.constructor=w,n(S,g.prototype),S.isPureReactComponent=!0;var x={current:null},k={suspense:null},C={current:null},P=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,r){var n=void 0,a={},l=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(l=""+t.key),t)P.call(t,n)&&!E.hasOwnProperty(n)&&(a[n]=t[n]);var i=arguments.length-2;if(1===i)a.children=r;else if(1<i){for(var u=Array(i),p=0;p<i;p++)u[p]=arguments[p+2];a.children=u}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===a[n]&&(a[n]=i[n]);return{$$typeof:o,type:e,key:l,ref:c,props:a,_owner:C.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var $=/\/+/g,R=[];function D(e,t,r,n){if(R.length){var a=R.pop();return a.result=e,a.keyPrefix=t,a.func=r,a.context=n,a.count=0,a}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function M(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function A(e,t,r){return null==e?0:function e(t,r,n,a){var c=typeof t;"undefined"!==c&&"boolean"!==c||(t=null);var i=!1;if(null===t)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case o:case l:i=!0}}if(i)return n(a,t,""===r?"."+I(t,0):r),1;if(i=0,r=""===r?".":r+":",Array.isArray(t))for(var u=0;u<t.length;u++){var p=r+I(c=t[u],u);i+=e(c,p,n,a)}else if(null===t||"object"!=typeof t?p=null:p="function"==typeof(p=h&&t[h]||t["@@iterator"])?p:null,"function"==typeof p)for(t=p.call(t),u=0;!(c=t.next()).done;)i+=e(c=c.value,p=r+I(c,u++),n,a);else if("object"===c)throw n=""+t,O(Error(31),"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return i}(e,"",t,r)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function L(e,t){e.func.call(e.context,t,e.count++)}function V(e,t,r){var n=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?q(e,n,r,(function(e){return e})):null!=e&&(T(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace($,"$&/")+"/")+r)),n.push(e))}function q(e,t,r,n,a){var o="";null!=r&&(o=(""+r).replace($,"$&/")+"/"),A(e,V,t=D(t,o,n,a)),M(t)}function U(){var e=x.current;if(null===e)throw O(Error(321));return e}var F={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return q(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;A(e,L,t=D(null,null,t,r)),M(t)},count:function(e){return A(e,(function(){return null}),null)},toArray:function(e){var t=[];return q(e,t,null,(function(e){return e})),t},only:function(e){if(!T(e))throw O(Error(143));return e}},createRef:function(){return{current:null}},Component:g,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:s,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return U().useCallback(e,t)},useContext:function(e,t){return U().useContext(e,t)},useEffect:function(e,t){return U().useEffect(e,t)},useImperativeHandle:function(e,t,r){return U().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return U().useLayoutEffect(e,t)},useMemo:function(e,t){return U().useMemo(e,t)},useReducer:function(e,t,r){return U().useReducer(e,t,r)},useRef:function(e){return U().useRef(e)},useState:function(e){return U().useState(e)},Fragment:c,Profiler:u,StrictMode:i,Suspense:b,unstable_SuspenseList:m,createElement:_,cloneElement:function(e,t,r){if(null==e)throw O(Error(267),e);var a=void 0,l=n({},e.props),c=e.key,i=e.ref,u=e._owner;if(null!=t){void 0!==t.ref&&(i=t.ref,u=C.current),void 0!==t.key&&(c=""+t.key);var p=void 0;for(a in e.type&&e.type.defaultProps&&(p=e.type.defaultProps),t)P.call(t,a)&&!E.hasOwnProperty(a)&&(l[a]=void 0===t[a]&&void 0!==p?p[a]:t[a])}if(1===(a=arguments.length-2))l.children=r;else if(1<a){p=Array(a);for(var f=0;f<a;f++)p[f]=arguments[f+2];l.children=p}return{$$typeof:o,type:e.type,key:c,ref:i,props:l,_owner:u}},createFactory:function(e){var t=_.bind(null,e);return t.type=e,t},isValidElement:T,version:"16.9.0",unstable_withSuspenseConfig:function(e,t){var r=k.suspense;k.suspense=void 0===t?null:t;try{e()}finally{k.suspense=r}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:x,ReactCurrentBatchConfig:k,ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:n}},B={default:F},X=B&&F||B;e.exports=X.default||X},183:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function l(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,c,i=l(e),u=1;u<arguments.length;u++){for(var p in r=Object(arguments[u]))a.call(r,p)&&(i[p]=r[p]);if(n){c=n(r);for(var f=0;f<c.length;f++)o.call(r,c[f])&&(i[c[f]]=r[c[f]])}}return i}},52:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));r(181);var n=r(180);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l={id:"datePicker",title:"DatePicker"},c=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[{value:"LabelSide values:",id:"labelside-values",children:[]}]},{value:"Element Properties",id:"element-properties",children:[]}],i={rightToc:c},u="wrapper";function p(e){var t=e.components,r=o(e,["components"]);return Object(n.b)(u,a({},i,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"description"},"Description"),Object(n.b)("p",null,"Dialog which allows the user to select date."),Object(n.b)("h2",{id:"example"},"Example"),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\nimport { View, DatePicker } from 'magic-script-components';\n\nexport default class MyApp extends React.Component {\n  render () {\n    return (\n      <View name='main-view'>\n        <DatePicker label='Pick Date' />\n      </View>\n    );\n  }\n}\n")),Object(n.b)("h2",{id:"common-events"},Object(n.b)("a",a({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(n.b)("h2",{id:"common-properties"},Object(n.b)("a",a({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(n.b)("h2",{id:"create-properties"},"Create Properties"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",a({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",a({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",a({parentName:"tr"},{align:"center"}),"Default Value"),Object(n.b)("th",a({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",a({parentName:"tr"},{align:null}),"label"),Object(n.b)("td",a({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",a({parentName:"tr"},{align:"center"}),"n/a"),Object(n.b)("td",a({parentName:"tr"},{align:null}),"The text label that appears with the date picker.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",a({parentName:"tr"},{align:null}),"labelSide"),Object(n.b)("td",a({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",a({parentName:"tr"},{align:"center"}),Object(n.b)("inlineCode",{parentName:"td"},"top")),Object(n.b)("td",a({parentName:"tr"},{align:null}),"Side enum specifying whether the label appears on the side or top. Only top and left are currently supported.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",a({parentName:"tr"},{align:null}),"defaultDate"),Object(n.b)("td",a({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",a({parentName:"tr"},{align:"center"}),"(current DateTime)"),Object(n.b)("td",a({parentName:"tr"},{align:null}),"The default date to appear on the date picker instead of the placeholder strings.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",a({parentName:"tr"},{align:null}),"yearMin"),Object(n.b)("td",a({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",a({parentName:"tr"},{align:"center"}),Object(n.b)("inlineCode",{parentName:"td"},"-1")),Object(n.b)("td",a({parentName:"tr"},{align:null}),"The minimum year available to choose from.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",a({parentName:"tr"},{align:null}),"yearMax"),Object(n.b)("td",a({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",a({parentName:"tr"},{align:"center"}),Object(n.b)("inlineCode",{parentName:"td"},"-1")),Object(n.b)("td",a({parentName:"tr"},{align:null}),"The maximum year available to choose from.")))),Object(n.b)("h3",{id:"labelside-values"},"LabelSide values:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"bottom"),Object(n.b)("li",{parentName:"ul"},"left"),Object(n.b)("li",{parentName:"ul"},"right"),Object(n.b)("li",{parentName:"ul"},"top")),Object(n.b)("h2",{id:"element-properties"},"Element Properties"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",a({parentName:"tr"},{align:"left"}),"Name"),Object(n.b)("th",a({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",a({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"color"),Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"vec4"),Object(n.b)("td",a({parentName:"tr"},{align:null}),"Sets the DatePicker component's color. This does not affect the label.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"date"),Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",a({parentName:"tr"},{align:null}),"Sets the date manually. This only has an affect when not currently focused.")))))}p.isMDXComponent=!0}}]);