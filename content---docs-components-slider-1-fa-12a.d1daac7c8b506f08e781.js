(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{180:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n),i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},o=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)};var c="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),p=l(r),s=n,m=p[o+"."+s]||p[s]||b[s]||i;return r?a.a.createElement(m,Object.assign({},{ref:t},c,{components:r})):a.a.createElement(m,Object.assign({},{ref:t},c))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=p;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},94:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return p}));r(0);var n=r(180);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l={id:"slider",title:"Slider"},o=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[]}],c={rightToc:o},b="wrapper";function p(e){var t=e.components,r=i(e,["components"]);return Object(n.b)(b,a({},c,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"description"},"Description"),Object(n.b)("p",null,"The Slider class places a slider into your volume. Use sliders to provide a visual reference to a specific range and the current value within that range, like a volume slider. You can create two types of sliders: horizontal and radial. Horizontal sliders can use either icons or labels. Radial sliders must use icons. The default slider is white and uses 100% opacity for the active part of the slider. Sliders inherit the width from a parent node, such as RectLayout. If the slider does not have a parent, it is one meter wide unless otherwise constrained. The default minimum and maximum values in the range are 0 and 1."),Object(n.b)("h2",{id:"example"},"Example"),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"<Slider />\n")),Object(n.b)("h2",{id:"common-events"},Object(n.b)("a",a({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(n.b)("h2",{id:"common-properties"},Object(n.b)("a",a({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(n.b)("h2",{id:"create-properties"},"Create Properties"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",a({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",a({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",a({parentName:"tr"},{align:"center"}),"Default Value"),Object(n.b)("th",a({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",a({parentName:"tr"},{align:null}),"width"),Object(n.b)("td",a({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",a({parentName:"tr"},{align:"center"}),"n/a"),Object(n.b)("td",a({parentName:"tr"},{align:null}),"Width")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",a({parentName:"tr"},{align:null}),"height"),Object(n.b)("td",a({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",a({parentName:"tr"},{align:"center"}),"0"),Object(n.b)("td",a({parentName:"tr"},{align:null}),"Height")))),Object(n.b)("h2",{id:"element-properties"},"Element Properties"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",a({parentName:"tr"},{align:"left"}),"Name"),Object(n.b)("th",a({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",a({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"min"),Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"number"),Object(n.b)("td",a({parentName:"tr"},{align:null}),"Sets the min slider value. This min value is set only if it is less than the slider's max value.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"max"),Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"number"),Object(n.b)("td",a({parentName:"tr"},{align:null}),"Sets the slider min and max values. These values are set only if min is less than max. Default values for min and max are 0 and 1.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"value"),Object(n.b)("td",a({parentName:"tr"},{align:"left"}),"number"),Object(n.b)("td",a({parentName:"tr"},{align:null}),"Sets the slider value. The value will be clamped within the current min and max range.")))))}p.isMDXComponent=!0}}]);