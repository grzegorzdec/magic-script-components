/*! For license information please see content---docs-componentse-66-f8a.d72a2223f8cf3ce6bfab.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{180:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return p}));var r=n(0),a=n.n(r),l=a.a.createContext({}),o=function(t){var e=a.a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):Object.assign({},e,t)),n},c=function(t){var e=o(t.components);return a.a.createElement(l.Provider,{value:e},t.children)};var b="mdxType",i={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},u=Object(r.forwardRef)((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,b=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&-1===e.indexOf(r)&&(n[r]=t[r]);return n}(t,["components","mdxType","originalType","parentName"]),u=o(n),p=r,d=u[c+"."+p]||u[p]||i[p]||l;return n?a.a.createElement(d,Object.assign({},{ref:e},b,{components:n})):a.a.createElement(d,Object.assign({},{ref:e},b))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=u;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c[b]="string"==typeof t?t:r,o[1]=c;for(var p=2;p<l;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},181:function(t,e,n){"use strict";t.exports=n(182)},182:function(t,e,n){"use strict";var r=n(183),a="function"==typeof Symbol&&Symbol.for,l=a?Symbol.for("react.element"):60103,o=a?Symbol.for("react.portal"):60106,c=a?Symbol.for("react.fragment"):60107,b=a?Symbol.for("react.strict_mode"):60108,i=a?Symbol.for("react.profiler"):60114,u=a?Symbol.for("react.provider"):60109,p=a?Symbol.for("react.context"):60110,d=a?Symbol.for("react.forward_ref"):60112,m=a?Symbol.for("react.suspense"):60113,s=a?Symbol.for("react.suspense_list"):60120,f=a?Symbol.for("react.memo"):60115,O=a?Symbol.for("react.lazy"):60116;a&&Symbol.for("react.fundamental"),a&&Symbol.for("react.responder");var j="function"==typeof Symbol&&Symbol.iterator;function N(t){for(var e=t.message,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return t.message="Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",t}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function h(t,e,n){this.props=t,this.context=e,this.refs=y,this.updater=n||g}function v(){}function w(t,e,n){this.props=t,this.context=e,this.refs=y,this.updater=n||g}h.prototype.isReactComponent={},h.prototype.setState=function(t,e){if("object"!=typeof t&&"function"!=typeof t&&null!=t)throw N(Error(85));this.updater.enqueueSetState(this,t,e,"setState")},h.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},v.prototype=h.prototype;var S=w.prototype=new v;S.constructor=w,r(S,h.prototype),S.isPureReactComponent=!0;var P={current:null},k={suspense:null},C={current:null},x=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};function U(t,e,n){var r=void 0,a={},o=null,c=null;if(null!=e)for(r in void 0!==e.ref&&(c=e.ref),void 0!==e.key&&(o=""+e.key),e)x.call(e,r)&&!L.hasOwnProperty(r)&&(a[r]=e[r]);var b=arguments.length-2;if(1===b)a.children=n;else if(1<b){for(var i=Array(b),u=0;u<b;u++)i[u]=arguments[u+2];a.children=i}if(t&&t.defaultProps)for(r in b=t.defaultProps)void 0===a[r]&&(a[r]=b[r]);return{$$typeof:l,type:t,key:o,ref:c,props:a,_owner:C.current}}function _(t){return"object"==typeof t&&null!==t&&t.$$typeof===l}var E=/\/+/g,T=[];function R(t,e,n,r){if(T.length){var a=T.pop();return a.result=t,a.keyPrefix=e,a.func=n,a.context=r,a.count=0,a}return{result:t,keyPrefix:e,func:n,context:r,count:0}}function $(t){t.result=null,t.keyPrefix=null,t.func=null,t.context=null,t.count=0,10>T.length&&T.push(t)}function V(t,e,n){return null==t?0:function t(e,n,r,a){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var b=!1;if(null===e)b=!0;else switch(c){case"string":case"number":b=!0;break;case"object":switch(e.$$typeof){case l:case o:b=!0}}if(b)return r(a,e,""===n?"."+I(e,0):n),1;if(b=0,n=""===n?".":n+":",Array.isArray(e))for(var i=0;i<e.length;i++){var u=n+I(c=e[i],i);b+=t(c,u,r,a)}else if(null===e||"object"!=typeof e?u=null:u="function"==typeof(u=j&&e[j]||e["@@iterator"])?u:null,"function"==typeof u)for(e=u.call(e),i=0;!(c=e.next()).done;)b+=t(c=c.value,u=n+I(c,i++),r,a);else if("object"===c)throw r=""+e,N(Error(31),"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,"");return b}(t,"",e,n)}function I(t,e){return"object"==typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+(""+t).replace(/[=:]/g,(function(t){return e[t]}))}(t.key):e.toString(36)}function D(t,e){t.func.call(t.context,e,t.count++)}function A(t,e,n){var r=t.result,a=t.keyPrefix;t=t.func.call(t.context,e,t.count++),Array.isArray(t)?M(t,r,n,(function(t){return t})):null!=t&&(_(t)&&(t=function(t,e){return{$$typeof:l,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(t,a+(!t.key||e&&e.key===t.key?"":(""+t.key).replace(E,"$&/")+"/")+n)),r.push(t))}function M(t,e,n,r,a){var l="";null!=n&&(l=(""+n).replace(E,"$&/")+"/"),V(t,A,e=R(e,l,r,a)),$(e)}function B(){var t=P.current;if(null===t)throw N(Error(321));return t}var q={Children:{map:function(t,e,n){if(null==t)return t;var r=[];return M(t,r,null,e,n),r},forEach:function(t,e,n){if(null==t)return t;V(t,D,e=R(null,null,e,n)),$(e)},count:function(t){return V(t,(function(){return null}),null)},toArray:function(t){var e=[];return M(t,e,null,(function(t){return t})),e},only:function(t){if(!_(t))throw N(Error(143));return t}},createRef:function(){return{current:null}},Component:h,PureComponent:w,createContext:function(t,e){return void 0===e&&(e=null),(t={$$typeof:p,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:t},t.Consumer=t},forwardRef:function(t){return{$$typeof:d,render:t}},lazy:function(t){return{$$typeof:O,_ctor:t,_status:-1,_result:null}},memo:function(t,e){return{$$typeof:f,type:t,compare:void 0===e?null:e}},useCallback:function(t,e){return B().useCallback(t,e)},useContext:function(t,e){return B().useContext(t,e)},useEffect:function(t,e){return B().useEffect(t,e)},useImperativeHandle:function(t,e,n){return B().useImperativeHandle(t,e,n)},useDebugValue:function(){},useLayoutEffect:function(t,e){return B().useLayoutEffect(t,e)},useMemo:function(t,e){return B().useMemo(t,e)},useReducer:function(t,e,n){return B().useReducer(t,e,n)},useRef:function(t){return B().useRef(t)},useState:function(t){return B().useState(t)},Fragment:c,Profiler:i,StrictMode:b,Suspense:m,unstable_SuspenseList:s,createElement:U,cloneElement:function(t,e,n){if(null==t)throw N(Error(267),t);var a=void 0,o=r({},t.props),c=t.key,b=t.ref,i=t._owner;if(null!=e){void 0!==e.ref&&(b=e.ref,i=C.current),void 0!==e.key&&(c=""+e.key);var u=void 0;for(a in t.type&&t.type.defaultProps&&(u=t.type.defaultProps),e)x.call(e,a)&&!L.hasOwnProperty(a)&&(o[a]=void 0===e[a]&&void 0!==u?u[a]:e[a])}if(1===(a=arguments.length-2))o.children=n;else if(1<a){u=Array(a);for(var p=0;p<a;p++)u[p]=arguments[p+2];o.children=u}return{$$typeof:l,type:t.type,key:c,ref:b,props:o,_owner:i}},createFactory:function(t){var e=U.bind(null,t);return e.type=t,e},isValidElement:_,version:"16.9.0",unstable_withSuspenseConfig:function(t,e){var n=k.suspense;k.suspense=void 0===e?null:e;try{t()}finally{k.suspense=n}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:P,ReactCurrentBatchConfig:k,ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:r}},F={default:q},G=F&&q||F;t.exports=G.default||G},183:function(t,e,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;function o(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(t){r[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,c,b=o(t),i=1;i<arguments.length;i++){for(var u in n=Object(arguments[i]))a.call(n,u)&&(b[u]=n[u]);if(r){c=r(n);for(var p=0;p<c.length;p++)l.call(n,c[p])&&(b[c[p]]=n[c[p]])}}return b}},38:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return o})),n.d(e,"rightToc",(function(){return c})),n.d(e,"default",(function(){return u}));n(181);var r=n(180);function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o={id:"components",title:"MagicScript Components"},c=[],b={rightToc:c},i="wrapper";function u(t){var e=t.components,n=l(t,["components"]);return Object(r.b)(i,a({},b,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"This document and the framework are under active development !")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",a({parentName:"tr"},{align:null}),"Order"),Object(r.b)("th",a({parentName:"tr"},{align:null}),"Component"),Object(r.b)("th",a({parentName:"tr"},{align:null}),"Lumin RT",Object(r.b)("br",null),"native component"),Object(r.b)("th",a({parentName:"tr"},{align:null}),"Lumin OS"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"1"),Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("a",a({parentName:"td"},{href:"/docs/components/audio"}),"Audio")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"AudioNode"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"👍")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"2"),Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("a",a({parentName:"td"},{href:"/docs/components/button"}),"Button")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"UiButton"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"👍")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"3"),Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("a",a({parentName:"td"},{href:"/docs/components/circleConfirmation"}),"CircleConfirmation")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"UiCircleConfirmation"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"👍")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"4"),Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("a",a({parentName:"td"},{href:"/docs/components/colorPicker"}),"ColorPicker")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"UiColorPicker"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"👍")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"5"),Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("a",a({parentName:"td"},{href:"/docs/components/content"}),"Content")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"TransformNode"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"👍")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"6"),Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("a",a({parentName:"td"},{href:"/docs/components/datePicker"}),"DatePicker")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"UiDatePicker"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"👍")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"7"),Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("a",a({parentName:"td"},{href:"/docs/components/dialog"}),"Dialog")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"UiDialog"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"👍")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"8"),Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("a",a({parentName:"td"},{href:"/docs/components/dropdownList"}),"DropdownList")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"UiDropDownList"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"👍")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"9"),Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("a",a({parentName:"td"},{href:"/docs/components/dropdownListItem"}),"DropdownListItem")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"DropDownListItem"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"👍")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"10"),Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("a",a({parentName:"td"},{href:"/docs/components/gridLayout"}),"GridLayout")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"UiGridLayout"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"👍")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"11"),Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("a",a({parentName:"td"},{href:"/docs/components/image"}),"Image")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"UiImage"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"👍")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"12"),Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("a",a({parentName:"td"},{href:"/docs/components/light"}),"Light")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"LightNode"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"👍")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"13"),Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("a",a({parentName:"td"},{href:"/docs/components/line"}),"Line")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"LineNode"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"👍")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"14"),Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("a",a({parentName:"td"},{href:"/docs/components/linearLayout"}),"LinearLayout")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"UiLinearLayout"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"👍")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"15"),Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("a",a({parentName:"td"},{href:"/docs/components/listView"}),"ListView")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"UiListView"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"👍")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"16"),Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("a",a({parentName:"td"},{href:"/docs/components/listViewItem"}),"ListViewItem")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"UiListViewItem"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"👍")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"17"),Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("a",a({parentName:"td"},{href:"/docs/components/model"}),"Model")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"ModelNode"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"👍")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"18"),Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("a",a({parentName:"td"},{href:"/docs/components/pageView"}),"PageView")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"UiPageView"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"👍")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"19"),Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("a",a({parentName:"td"},{href:"/docs/components/panel"}),"Panel")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"UiPanel"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"👍")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"20"),Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("a",a({parentName:"td"},{href:"/docs/components/portalIcon"}),"PortalIcon")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"UiPortalIcon"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"👍")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"21"),Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("a",a({parentName:"td"},{href:"/docs/components/progressBar"}),"ProgressBar")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"UiProgressBar"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"👍")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"22"),Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("a",a({parentName:"td"},{href:"/docs/components/quad"}),"Quad")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"QuadNode"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"👍")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"23"),Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("a",a({parentName:"td"},{href:"/docs/components/rectLayout"}),"RectLayout")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"UiRectLayout"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"👍")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"24"),Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("a",a({parentName:"td"},{href:"/docs/components/scrollBar"}),"ScrollBar")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"UiScrollBar"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"👍")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"25"),Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("a",a({parentName:"td"},{href:"/docs/components/scrollView"}),"ScrollView")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"UiScrollView"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"👍")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"26"),Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("a",a({parentName:"td"},{href:"/docs/components/slider"}),"Slider")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"UiSlider"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"👍")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"27"),Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("a",a({parentName:"td"},{href:"/docs/components/spinner"}),"Spinner")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"UiLoadingSpinner"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"👍")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"28"),Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("a",a({parentName:"td"},{href:"/docs/components/tab"}),"Tab")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"UiTab"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"👍")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"29"),Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("a",a({parentName:"td"},{href:"/docs/components/text"}),"Text")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"UiText"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"👍")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"30"),Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("a",a({parentName:"td"},{href:"/docs/components/textEdit"}),"TextEdit")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"UiTextEdit"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"👍")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"31"),Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("a",a({parentName:"td"},{href:"/docs/components/timePicker"}),"TimePicker")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"UiTimePicker"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"👍")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"32"),Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("a",a({parentName:"td"},{href:"/docs/components/toggle"}),"Toggle")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"UiToggle"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"👍")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"33"),Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("a",a({parentName:"td"},{href:"/docs/components/toggleGroup"}),"ToggleGroup")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"UiToggleGroup"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"👍")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"34"),Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("a",a({parentName:"td"},{href:"/docs/components/video"}),"Video")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"VideoNode"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"👍")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"35"),Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("a",a({parentName:"td"},{href:"/docs/components/view"}),"View")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"UiGroup"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"👍")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"36"),Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("a",a({parentName:"td"},{href:"/docs/components/webView"}),"WebView")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"UiWebView"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"👍")))))}u.isMDXComponent=!0}}]);