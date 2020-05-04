(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{340:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return p}));var n=r(1),a=r(6),c=(r(0),r(412)),o={id:"quad",title:"Quad"},i={id:"version-3.0.0/components/quad",title:"Quad",description:"## Description",source:"@site/versioned_docs/version-3.0.0/components/Quad.md",permalink:"/docs/3.0.0/components/quad",version:"3.0.0",sidebar:"version-3.0.0/docs",previous:{title:"ProgressBar",permalink:"/docs/3.0.0/components/progressBar"},next:{title:"RectLayout",permalink:"/docs/3.0.0/components/rectLayout"}},b=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"viewMode options: ViewMode",id:"viewmode-options-viewmode",children:[]}]}],l={rightToc:b};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,"The Quad component renders a 2D rectangle in your scene and applies a texture to it. You can draw on this node or render stereoscopic images. By default, a quad node renders as a one meter square."),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"<Quad />\n")),Object(c.b)("h2",{id:"common-events"},Object(c.b)("a",Object(n.a)({parentName:"h2"},{href:"/docs/3.0.0/events/commonEvents"}),"Common Events")),Object(c.b)("h2",{id:"common-properties"},Object(c.b)("a",Object(n.a)({parentName:"h2"},{href:"/docs/3.0.0/types/properties"}),"Common Properties")),Object(c.b)("h2",{id:"create-properties"},"Create Properties"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default Value"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"renderResourceId"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"BigInt"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"n/a"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets the resource used when drawing the quad component (optional).")))),Object(c.b)("h2",{id:"element-properties"},"Element Properties"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default Value"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"texCoords"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"[vec2]"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets the texture coordinates of the node being rendered when the resource referenced in ",Object(c.b)("inlineCode",{parentName:"td"},"renderResourceId")," is a texture. If the render resource is not a texture, this has no effect.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"viewMode"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"full-area"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets the current ViewMode to the given value.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"size"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"vec2"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"[1, 1]"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets the custom size.")))),Object(c.b)("h3",{id:"viewmode-options-viewmode"},"viewMode options: ",Object(c.b)("a",Object(n.a)({parentName:"h3"},{href:"/docs/3.0.0/types/viewMode"}),"ViewMode")))}p.isMDXComponent=!0},412:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,m=d["".concat(o,".").concat(u)]||d[u]||s[u]||c;return r?a.a.createElement(m,i({ref:t},l,{components:r})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=u;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<c;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);