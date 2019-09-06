(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{134:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return m});var a=n(0),r=n.n(a),o=r.a.createContext({}),l=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=l(e.components);return r.a.createElement(o.Provider,{value:t},e.children)};var b="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)(function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,d=p[i+"."+m]||p[m]||c[m]||o;return n?r.a.createElement(d,Object.assign({},{ref:t},b,{components:n})):r.a.createElement(d,Object.assign({},{ref:t},b))});function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[b]="string"==typeof e?e:a,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},52:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",function(){return l}),n.d(t,"rightToc",function(){return i}),n.d(t,"default",function(){return p});n(0);var a=n(134);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l={id:"dialog",title:"Dialog"},i=[{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[{value:"Dialog Type options:",id:"dialog-type-options",children:[]},{value:"Dialog Layout options:",id:"dialog-layout-options",children:[]}]},{value:"Element Properties",id:"element-properties",children:[{value:"buttonType options: ButtonType",id:"buttontype-options-buttontype",children:[]},{value:"cancelIcon / confirmIcon options: IconType",id:"cancelicon--confirmicon-options-icontype",children:[]}]}],b={rightToc:i},c="wrapper";function p(e){var t=e.components,n=o(e,["components"]);return Object(a.b)(c,r({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"<Dialog />\n")),Object(a.b)("h2",{id:"common-events"},Object(a.b)("a",r({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(a.b)("h2",{id:"common-properties"},Object(a.b)("a",r({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(a.b)("h2",{id:"create-properties"},"Create Properties"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",r({parentName:"tr"},{align:"center"}),"Default Value"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"title"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The dialog title text. Use an empty string to not show title.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"text"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The dialog message text. Use an empty string to not show message.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"type"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"dual-action"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The type of dialog.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"layout"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"standard"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The dialog layout preference.")))),Object(a.b)("h3",{id:"dialog-type-options"},"Dialog Type options:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"custom"),Object(a.b)("li",{parentName:"ul"},"timed"),Object(a.b)("li",{parentName:"ul"},"no-action"),Object(a.b)("li",{parentName:"ul"},"single-action"),Object(a.b)("li",{parentName:"ul"},"dual-action")),Object(a.b)("h3",{id:"dialog-layout-options"},"Dialog Layout options:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"standard"),Object(a.b)("li",{parentName:"ul"},"wide")),Object(a.b)("h2",{id:"element-properties"},"Element Properties"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:"left"}),"Name"),Object(a.b)("th",r({parentName:"tr"},{align:"left"}),"Type"),Object(a.b)("th",r({parentName:"tr"},{align:"left"}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"buttonType"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Sets the button type to use for the dialog.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"cancelText"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),'Sets the UTF-8 encoded Cancel button text, default is "Cancel".')),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"cancelIcon"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Sets the Confirm button icon.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"confirmText"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),'Sets the UTF-8 encoded Confirm button text, default is "Confirm".')),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"confirmIcon"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Sets the Confirm button icon.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"expireTime"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Sets the expiration time for the dialog in seconds. For modeless timed dialogs,and optionally for other dialogs, a timer can be set that will send out the onTimeExpired event when the dialog time expires. The dialog does not destroy itself and must be handled by the caller using the event.")))),Object(a.b)("h3",{id:"buttontype-options-buttontype"},"buttonType options: ",Object(a.b)("a",r({parentName:"h3"},{href:"/docs/types/buttonType"}),"ButtonType")),Object(a.b)("h3",{id:"cancelicon--confirmicon-options-icontype"},"cancelIcon / confirmIcon options: ",Object(a.b)("a",r({parentName:"h3"},{href:"/docs/types/iconType"}),"IconType")))}p.isMDXComponent=!0}}]);