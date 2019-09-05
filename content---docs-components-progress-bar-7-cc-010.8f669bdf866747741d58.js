(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{106:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",function(){return o}),r.d(t,"rightToc",function(){return b}),r.d(t,"default",function(){return p});r(0);var n=r(124);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o={id:"progressBar",title:"ProgressBar"},b=[{value:"Tag: <ProgressBar>",id:"tag-progressbar",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"progressColor",id:"progresscolor",children:[]}]}],i={rightToc:b},c="wrapper";function p(e){var t=e.components,r=l(e,["components"]);return Object(n.b)(c,a({},i,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"tag-progressbar"},"Tag: ",Object(n.b)("inlineCode",{parentName:"h2"},"<ProgressBar>")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("h4",a({parentName:"li"},{id:"lumin-runtime-native-component---uiprogressbar"}),"Lumin Runtime native component - UiProgressBar"))),Object(n.b)("h2",{id:"common-events"},Object(n.b)("a",a({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(n.b)("h2",{id:"common-properties"},Object(n.b)("a",a({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(n.b)("h2",{id:"create-properties"},"Create Properties"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",a({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",a({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",a({parentName:"tr"},{align:"center"}),"Default Value"),Object(n.b)("th",a({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",a({parentName:"tr"},{align:null}),"width"),Object(n.b)("td",a({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",a({parentName:"tr"},{align:"center"}),"n/a"),Object(n.b)("td",a({parentName:"tr"},{align:null}),"The width of the progress bar.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",a({parentName:"tr"},{align:null}),"height"),Object(n.b)("td",a({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",a({parentName:"tr"},{align:"center"}),"n/a"),Object(n.b)("td",a({parentName:"tr"},{align:null}),"The height of the progress bar, 0 for default.")))),Object(n.b)("h2",{id:"element-properties"},"Element Properties"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",a({parentName:"tr"},{align:"left"}),"Name"),Object(n.b)("th",a({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",a({parentName:"tr"},{align:"left"}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"min"),Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"number"),Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"Sets the progress bar min value. Default value for min is 0. This min value is set only if it is less than the progress bar's max value.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"max"),Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"number"),Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"Sets the progress bar max value. Default value for max is 1. This max value is set only if it is greater than the progress bar's min value.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"value"),Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"number"),Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"Sets the progress bar value. The value will be clamped within the current min and max range.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"progressColor"),Object(n.b)("td",a({parentName:"tr"},{align:"left"}),Object(n.b)("em",{parentName:"td"},"object")),Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"Sets the progress color.")))),Object(n.b)("h3",{id:"progresscolor"},"progressColor"),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"{\n    beginColor: <vec4>,\n    endColor: <vec4>\n}\n")))}p.isMDXComponent=!0},124:function(e,t,r){"use strict";r.d(t,"a",function(){return b}),r.d(t,"b",function(){return s});var n=r(0),a=r.n(n),l=a.a.createContext({}),o=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},b=function(e){var t=o(e.components);return a.a.createElement(l.Provider,{value:t},e.children)};var i="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(n.forwardRef)(function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),p=o(r),s=n,m=p[b+"."+s]||p[s]||c[s]||l;return r?a.a.createElement(m,Object.assign({},{ref:t},i,{components:r})):a.a.createElement(m,Object.assign({},{ref:t},i))});function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=p;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b[i]="string"==typeof e?e:n,o[1]=b;for(var s=2;s<l;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);