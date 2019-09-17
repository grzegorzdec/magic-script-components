(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{102:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return p}));r(181);var n=r(180);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l={id:"timePicker",title:"TimePicker"},i=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[{value:"LabelSide values:",id:"labelside-values",children:[]}]},{value:"Element Properties",id:"element-properties",children:[]}],u={rightToc:i},c="wrapper";function p(e){var t=e.components,r=a(e,["components"]);return Object(n.b)(c,o({},u,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"description"},"Description"),Object(n.b)("p",null,"Dialog which allows the user to select time."),Object(n.b)("h2",{id:"example"},"Example"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"<TimePicker />\n")),Object(n.b)("h2",{id:"common-events"},Object(n.b)("a",o({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(n.b)("h2",{id:"common-properties"},Object(n.b)("a",o({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(n.b)("h2",{id:"create-properties"},"Create Properties"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",o({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",o({parentName:"tr"},{align:"center"}),"Default Value"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"label"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",o({parentName:"tr"},{align:"center"}),"n/a"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"The text label that appears with the TimePicker.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"labelSide"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",o({parentName:"tr"},{align:"center"}),Object(n.b)("inlineCode",{parentName:"td"},"top")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Side enum specifying whether the label appears on the side or top. Only top and left currently supported.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"defaultTime"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",o({parentName:"tr"},{align:"center"}),"(current Time)"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"The default time to set for the TimePicker.")))),Object(n.b)("h3",{id:"labelside-values"},"LabelSide values:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"bottom"),Object(n.b)("li",{parentName:"ul"},"left"),Object(n.b)("li",{parentName:"ul"},"right"),Object(n.b)("li",{parentName:"ul"},"top")),Object(n.b)("h2",{id:"element-properties"},"Element Properties"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",o({parentName:"tr"},{align:"left"}),"Name"),Object(n.b)("th",o({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"color"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Sets the TimePicker component's color, doesn't affect label.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"time"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"number"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"The Time to set, will ignore values that aren't in the TimeFormat.")))),Object(n.b)("p",null,"*","The default time format is: ",Object(n.b)("inlineCode",{parentName:"p"},"hh:mm:ss")))}p.isMDXComponent=!0},180:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n),a=o.a.createContext({}),l=function(e){var t=o.a.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},i=function(e){var t=l(e.components);return o.a.createElement(a.Provider,{value:t},e.children)};var u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,s=p[i+"."+f]||p[f]||c[f]||a;return r?o.a.createElement(s,Object.assign({},{ref:t},u,{components:r})):o.a.createElement(s,Object.assign({},{ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var f=2;f<a;f++)l[f]=r[f];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},181:function(e,t,r){"use strict";e.exports=r(182)},182:function(e,t,r){"use strict";var n=r(183),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,l=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,p=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,m=o?Symbol.for("react.suspense_list"):60120,d=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder");var h="function"==typeof Symbol&&Symbol.iterator;function O(e){for(var t=e.message,r="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return e.message="Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function g(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||j}function N(){}function w(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||j}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw O(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},N.prototype=g.prototype;var S=w.prototype=new N;S.constructor=w,n(S,g.prototype),S.isPureReactComponent=!0;var P={current:null},k={suspense:null},C={current:null},E=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,r){var n=void 0,o={},l=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(l=""+t.key),t)E.call(t,n)&&!x.hasOwnProperty(n)&&(o[n]=t[n]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var c=Array(u),p=0;p<u;p++)c[p]=arguments[p+2];o.children=c}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===o[n]&&(o[n]=u[n]);return{$$typeof:a,type:e,key:l,ref:i,props:o,_owner:C.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var $=/\/+/g,R=[];function D(e,t,r,n){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function I(e,t,r){return null==e?0:function e(t,r,n,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var u=!1;if(null===t)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case a:case l:u=!0}}if(u)return n(o,t,""===r?"."+L(t,0):r),1;if(u=0,r=""===r?".":r+":",Array.isArray(t))for(var c=0;c<t.length;c++){var p=r+L(i=t[c],c);u+=e(i,p,n,o)}else if(null===t||"object"!=typeof t?p=null:p="function"==typeof(p=h&&t[h]||t["@@iterator"])?p:null,"function"==typeof p)for(t=p.call(t),c=0;!(i=t.next()).done;)u+=e(i=i.value,p=r+L(i,c++),n,o);else if("object"===i)throw n=""+t,O(Error(31),"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return u}(e,"",t,r)}function L(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?F(e,n,r,(function(e){return e})):null!=e&&(T(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace($,"$&/")+"/")+r)),n.push(e))}function F(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace($,"$&/")+"/"),I(e,q,t=D(t,a,n,o)),A(t)}function U(){var e=P.current;if(null===e)throw O(Error(321));return e}var V={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return F(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;I(e,M,t=D(null,null,t,r)),A(t)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var t=[];return F(e,t,null,(function(e){return e})),t},only:function(e){if(!T(e))throw O(Error(143));return e}},createRef:function(){return{current:null}},Component:g,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:s,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return U().useCallback(e,t)},useContext:function(e,t){return U().useContext(e,t)},useEffect:function(e,t){return U().useEffect(e,t)},useImperativeHandle:function(e,t,r){return U().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return U().useLayoutEffect(e,t)},useMemo:function(e,t){return U().useMemo(e,t)},useReducer:function(e,t,r){return U().useReducer(e,t,r)},useRef:function(e){return U().useRef(e)},useState:function(e){return U().useState(e)},Fragment:i,Profiler:c,StrictMode:u,Suspense:b,unstable_SuspenseList:m,createElement:_,cloneElement:function(e,t,r){if(null==e)throw O(Error(267),e);var o=void 0,l=n({},e.props),i=e.key,u=e.ref,c=e._owner;if(null!=t){void 0!==t.ref&&(u=t.ref,c=C.current),void 0!==t.key&&(i=""+t.key);var p=void 0;for(o in e.type&&e.type.defaultProps&&(p=e.type.defaultProps),t)E.call(t,o)&&!x.hasOwnProperty(o)&&(l[o]=void 0===t[o]&&void 0!==p?p[o]:t[o])}if(1===(o=arguments.length-2))l.children=r;else if(1<o){p=Array(o);for(var f=0;f<o;f++)p[f]=arguments[f+2];l.children=p}return{$$typeof:a,type:e.type,key:i,ref:u,props:l,_owner:c}},createFactory:function(e){var t=_.bind(null,e);return t.type=e,t},isValidElement:T,version:"16.9.0",unstable_withSuspenseConfig:function(e,t){var r=k.suspense;k.suspense=void 0===t?null:t;try{e()}finally{k.suspense=r}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:P,ReactCurrentBatchConfig:k,ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:n}},B={default:V},X=B&&V||B;e.exports=X.default||X},183:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function l(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,i,u=l(e),c=1;c<arguments.length;c++){for(var p in r=Object(arguments[c]))o.call(r,p)&&(u[p]=r[p]);if(n){i=n(r);for(var f=0;f<i.length;f++)a.call(r,i[f])&&(u[i[f]]=r[i[f]])}}return u}}}]);