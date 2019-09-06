(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{134:function(e,t,r){"use strict";r.d(t,"a",function(){return c}),r.d(t,"b",function(){return m});var n=r(0),a=r.n(n),o=a.a.createContext({}),l=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},c=function(e){var t=l(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var i="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)(function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,u=b[c+"."+m]||b[m]||p[m]||o;return r?a.a.createElement(u,Object.assign({},{ref:t},i,{components:r})):a.a.createElement(u,Object.assign({},{ref:t},i))});function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[i]="string"==typeof e?e:n,l[1]=c;for(var m=2;m<o;m++)l[m]=r[m];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},44:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",function(){return l}),r.d(t,"rightToc",function(){return c}),r.d(t,"default",function(){return b});r(0);var n=r(134);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l={id:"colorPicker",title:"ColorPicker"},c=[{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[]}],i={rightToc:c},p="wrapper";function b(e){var t=e.components,r=o(e,["components"]);return Object(n.b)(p,a({},i,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"example"},"Example"),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"<ColorPicker />\n")),Object(n.b)("h2",{id:"common-events"},Object(n.b)("a",a({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(n.b)("h2",{id:"common-properties"},Object(n.b)("a",a({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(n.b)("h2",{id:"create-properties"},"Create Properties"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",a({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",a({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",a({parentName:"tr"},{align:"center"}),"Default Value"),Object(n.b)("th",a({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",a({parentName:"tr"},{align:null}),"color"),Object(n.b)("td",a({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",a({parentName:"tr"},{align:"center"}),"[1.0, 1.0, 1.0, 1.0]"),Object(n.b)("td",a({parentName:"tr"},{align:null}),"The initial color for the color picker.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",a({parentName:"tr"},{align:null}),"height"),Object(n.b)("td",a({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",a({parentName:"tr"},{align:"center"}),"0"),Object(n.b)("td",a({parentName:"tr"},{align:null}),"Optional height for the color picker.")))),Object(n.b)("h2",{id:"element-properties"},"Element Properties"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",a({parentName:"tr"},{align:"left"}),"Name"),Object(n.b)("th",a({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",a({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"color"),Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",a({parentName:"tr"},{align:null}),"The initial color for the color picker.")))))}b.isMDXComponent=!0}}]);