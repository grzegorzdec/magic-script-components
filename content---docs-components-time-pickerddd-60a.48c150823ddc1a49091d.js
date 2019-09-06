(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{134:function(e,t,r){"use strict";r.d(t,"a",function(){return b}),r.d(t,"b",function(){return m});var n=r(0),a=r.n(n),l=a.a.createContext({}),i=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},b=function(e){var t=i(e.components);return a.a.createElement(l.Provider,{value:t},e.children)};var c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},o=Object(n.forwardRef)(function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),o=i(r),m=n,u=o[b+"."+m]||o[m]||p[m]||l;return r?a.a.createElement(u,Object.assign({},{ref:t},c,{components:r})):a.a.createElement(u,Object.assign({},{ref:t},c))});function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=o;var b={};for(var p in t)hasOwnProperty.call(t,p)&&(b[p]=t[p]);b.originalType=e,b[c]="string"==typeof e?e:n,i[1]=b;for(var m=2;m<l;m++)i[m]=r[m];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}o.displayName="MDXCreateElement"},96:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",function(){return i}),r.d(t,"rightToc",function(){return b}),r.d(t,"default",function(){return o});r(0);var n=r(134);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i={id:"timePicker",title:"TimePicker"},b=[{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[{value:"LabelSide values:",id:"labelside-values",children:[]}]},{value:"Element Properties",id:"element-properties",children:[]}],c={rightToc:b},p="wrapper";function o(e){var t=e.components,r=l(e,["components"]);return Object(n.b)(p,a({},c,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"example"},"Example"),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"<TimePicker />\n")),Object(n.b)("h2",{id:"common-events"},Object(n.b)("a",a({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(n.b)("h2",{id:"common-properties"},Object(n.b)("a",a({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(n.b)("h2",{id:"create-properties"},"Create Properties"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",a({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",a({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",a({parentName:"tr"},{align:"center"}),"Default Value"),Object(n.b)("th",a({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",a({parentName:"tr"},{align:null}),"label"),Object(n.b)("td",a({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",a({parentName:"tr"},{align:"center"}),"n/a"),Object(n.b)("td",a({parentName:"tr"},{align:null}),"The text label that appears with the TimePicker.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",a({parentName:"tr"},{align:null}),"labelSide"),Object(n.b)("td",a({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",a({parentName:"tr"},{align:"center"}),Object(n.b)("inlineCode",{parentName:"td"},"top")),Object(n.b)("td",a({parentName:"tr"},{align:null}),"Side enum specifying whether the label appears on the side or top. Only top and left currently supported.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",a({parentName:"tr"},{align:null}),"defaultTime"),Object(n.b)("td",a({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",a({parentName:"tr"},{align:"center"}),"(current Time)"),Object(n.b)("td",a({parentName:"tr"},{align:null}),"The default time to set for the TimePicker.")))),Object(n.b)("h3",{id:"labelside-values"},"LabelSide values:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"bottom"),Object(n.b)("li",{parentName:"ul"},"left"),Object(n.b)("li",{parentName:"ul"},"right"),Object(n.b)("li",{parentName:"ul"},"top")),Object(n.b)("h2",{id:"element-properties"},"Element Properties"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",a({parentName:"tr"},{align:"left"}),"Name"),Object(n.b)("th",a({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",a({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"color"),Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",a({parentName:"tr"},{align:null}),"Sets the TimePicker component's color, doesn't affect label.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"time"),Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"number"),Object(n.b)("td",a({parentName:"tr"},{align:null}),"The Time to set, will ignore values that aren't in the TimeFormat.")))),Object(n.b)("p",null,"*","The default time format is: ",Object(n.b)("inlineCode",{parentName:"p"},"hh:mm:ss")))}o.isMDXComponent=!0}}]);