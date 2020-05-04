/*! For license information please see e344c770.09af9940.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[276],{377:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return f}));var r=n(1),o=n(6),c=(n(418),n(412)),a={id:"content",title:"Content"},i={id:"components/content",title:"Content",description:"## Description",source:"@site/../docs/components/Content.md",permalink:"/docs/next/components/content",version:"next",sidebar:"docs",previous:{title:"ColorPicker",permalink:"/docs/next/components/colorPicker"},next:{title:"DatePicker",permalink:"/docs/next/components/datePicker"}},u=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]}],l={rightToc:u};function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,"The root component for a group of components. An example of a parent component is ",Object(c.b)("inlineCode",{parentName:"p"},"ScrollView"),"."),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\nimport { View, ScrollView, Content, Text, Scene, Prism } from 'magic-script-components';\n\nexport default class MyApp extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    const aabb = {\n      min: [-0.1, -0.3, -0.1],\n      max: [0.15, 0.3, 0.1]\n    };\n\n    return (\n      <Scene>\n        <Prism size={[2, 2, 1]} >\n          <View name='main-view' alignment={'center-center'}>\n            <ScrollView scrollBounds={aabb}>\n              <Content>\n                {Array(10).fill(0).map((value, index) => <Text key={index} localPosition={[0, -0.1 * index, 0]} text={`Item ${index + 1}`} textSize={0.08} />)}\n              </Content>\n            </ScrollView>\n          </View>\n        </Prism>\n      </Scene>\n    );\n  }\n}\n")),Object(c.b)("h2",{id:"common-events"},Object(c.b)("a",Object(r.a)({parentName:"h2"},{href:"/docs/next/events/commonEvents"}),"Common Events")),Object(c.b)("h2",{id:"common-properties"},Object(c.b)("a",Object(r.a)({parentName:"h2"},{href:"/docs/next/types/properties"}),"Common Properties")),Object(c.b)("h2",{id:"create-properties"},"Create Properties"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Default Value"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"localTransform"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"mat4"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The local transform of the new node. Use glm::mat4() for the identity matrix.")))))}f.isMDXComponent=!0},412:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),f=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=f(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=f(n),m=r,b=p["".concat(a,".").concat(m)]||p[m]||s[m]||c;return n?o.a.createElement(b,i({ref:t},l,{components:n})):o.a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<c;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},418:function(e,t,n){"use strict";e.exports=n(419)},419:function(e,t,n){"use strict";var r=n(420),o="function"==typeof Symbol&&Symbol.for,c=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.forward_ref"):60112,m=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.suspense_list"):60120,y=o?Symbol.for("react.memo"):60115,d=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder");var v="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t=e.message,n="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return e.message="Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function g(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||O}function w(){}function x(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||O}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw h(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=g.prototype;var S=x.prototype=new w;S.constructor=x,r(S,g.prototype),S.isPureReactComponent=!0;var P={current:null},C={suspense:null},k={current:null},E=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,n){var r=void 0,o={},a=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)E.call(t,r)&&!_.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var l=Array(u),f=0;f<u;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===o[r]&&(o[r]=u[r]);return{$$typeof:c,type:e,key:a,ref:i,props:o,_owner:k.current}}function $(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var R=/\/+/g,T=[];function D(e,t,n,r){if(T.length){var o=T.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function V(e,t,n){return null==e?0:function e(t,n,r,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var u=!1;if(null===t)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case c:case a:u=!0}}if(u)return r(o,t,""===n?"."+I(t,0):n),1;if(u=0,n=""===n?".":n+":",Array.isArray(t))for(var l=0;l<t.length;l++){var f=n+I(i=t[l],l);u+=e(i,f,r,o)}else if(null===t||"object"!=typeof t?f=null:f="function"==typeof(f=v&&t[v]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),l=0;!(i=t.next()).done;)u+=e(i=i.value,f=n+I(i,l++),r,o);else if("object"===i)throw r=""+t,h(Error(31),"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return u}(e,"",t,n)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?q(e,r,n,(function(e){return e})):null!=e&&($(e)&&(e=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+n)),r.push(e))}function q(e,t,n,r,o){var c="";null!=n&&(c=(""+n).replace(R,"$&/")+"/"),V(e,U,t=D(t,c,r,o)),A(t)}function L(){var e=P.current;if(null===e)throw h(Error(321));return e}var F={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return q(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;V(e,M,t=D(null,null,t,n)),A(t)},count:function(e){return V(e,(function(){return null}),null)},toArray:function(e){var t=[];return q(e,t,null,(function(e){return e})),t},only:function(e){if(!$(e))throw h(Error(143));return e}},createRef:function(){return{current:null}},Component:g,PureComponent:x,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:s,render:e}},lazy:function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return L().useCallback(e,t)},useContext:function(e,t){return L().useContext(e,t)},useEffect:function(e,t){return L().useEffect(e,t)},useImperativeHandle:function(e,t,n){return L().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return L().useLayoutEffect(e,t)},useMemo:function(e,t){return L().useMemo(e,t)},useReducer:function(e,t,n){return L().useReducer(e,t,n)},useRef:function(e){return L().useRef(e)},useState:function(e){return L().useState(e)},Fragment:i,Profiler:l,StrictMode:u,Suspense:m,unstable_SuspenseList:b,createElement:N,cloneElement:function(e,t,n){if(null==e)throw h(Error(267),e);var o=void 0,a=r({},e.props),i=e.key,u=e.ref,l=e._owner;if(null!=t){void 0!==t.ref&&(u=t.ref,l=k.current),void 0!==t.key&&(i=""+t.key);var f=void 0;for(o in e.type&&e.type.defaultProps&&(f=e.type.defaultProps),t)E.call(t,o)&&!_.hasOwnProperty(o)&&(a[o]=void 0===t[o]&&void 0!==f?f[o]:t[o])}if(1===(o=arguments.length-2))a.children=n;else if(1<o){f=Array(o);for(var p=0;p<o;p++)f[p]=arguments[p+2];a.children=f}return{$$typeof:c,type:e.type,key:i,ref:u,props:a,_owner:l}},createFactory:function(e){var t=N.bind(null,e);return t.type=e,t},isValidElement:$,version:"16.9.0",unstable_withSuspenseConfig:function(e,t){var n=C.suspense;C.suspense=void 0===t?null:t;try{e()}finally{C.suspense=n}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:P,ReactCurrentBatchConfig:C,ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:r}},z={default:F},B=z&&F||z;e.exports=B.default||B},420:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,i,u=a(e),l=1;l<arguments.length;l++){for(var f in n=Object(arguments[l]))o.call(n,f)&&(u[f]=n[f]);if(r){i=r(n);for(var p=0;p<i.length;p++)c.call(n,i[p])&&(u[i[p]]=n[i[p]])}}return u}}}]);