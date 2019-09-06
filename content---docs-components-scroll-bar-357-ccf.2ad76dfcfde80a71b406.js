(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{134:function(e,t,r){"use strict";r.d(t,"a",function(){return i}),r.d(t,"b",function(){return m});var n=r(0),a=r.n(n),l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},i=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)};var c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},o=Object(n.forwardRef)(function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),o=b(r),m=n,u=o[i+"."+m]||o[m]||p[m]||l;return r?a.a.createElement(u,Object.assign({},{ref:t},c,{components:r})):a.a.createElement(u,Object.assign({},{ref:t},c))});function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,b=new Array(l);b[0]=o;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:n,b[1]=i;for(var m=2;m<l;m++)b[m]=r[m];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,r)}o.displayName="MDXCreateElement"},90:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",function(){return b}),r.d(t,"rightToc",function(){return i}),r.d(t,"default",function(){return o});r(0);var n=r(134);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b={id:"scrollBar",title:"ScrollBar"},i=[{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[]}],c={rightToc:i},p="wrapper";function o(e){var t=e.components,r=l(e,["components"]);return Object(n.b)(p,a({},c,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"example"},"Example"),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"<ScrollBar />\n")),Object(n.b)("h2",{id:"common-events"},Object(n.b)("a",a({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(n.b)("h2",{id:"common-properties"},Object(n.b)("a",a({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(n.b)("h2",{id:"create-properties"},"Create Properties"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",a({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",a({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",a({parentName:"tr"},{align:"center"}),"Default Value"),Object(n.b)("th",a({parentName:"tr"},{align:null}),"LRT Name"),Object(n.b)("th",a({parentName:"tr"},{align:null}),"LRT type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",a({parentName:"tr"},{align:null}),"width"),Object(n.b)("td",a({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",a({parentName:"tr"},{align:"center"}),"n/a"),Object(n.b)("td",a({parentName:"tr"},{align:null}),"Width"),Object(n.b)("td",a({parentName:"tr"},{align:null}),"number")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",a({parentName:"tr"},{align:null}),"height"),Object(n.b)("td",a({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",a({parentName:"tr"},{align:"center"}),"0"),Object(n.b)("td",a({parentName:"tr"},{align:null}),"Height"),Object(n.b)("td",a({parentName:"tr"},{align:null}),"number")))),Object(n.b)("h2",{id:"element-properties"},"Element Properties"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",a({parentName:"tr"},{align:"left"}),"Name"),Object(n.b)("th",a({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",a({parentName:"tr"},{align:"left"}),"LRT Name"),Object(n.b)("th",a({parentName:"tr"},{align:"left"}),"LRT type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"thumbSize"),Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"number"),Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"ThumbPosition"),Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"number")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"thumbPosition"),Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"number"),Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"ThumbSize"),Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"number")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"orientation"),Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"n/a"),Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"lumin.ui.Orientation")))))}o.isMDXComponent=!0}}]);