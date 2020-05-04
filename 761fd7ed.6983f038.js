(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{237:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(1),o=n(6),i=(n(0),n(412)),a={id:"line",title:"Line"},c={id:"version-2.0.2/components/line",title:"Line",description:"## Description",source:"@site/versioned_docs/version-2.0.2/components/Line.md",permalink:"/docs/2.0.2/components/line",version:"2.0.2",sidebar:"version-2.0.2/docs",previous:{title:"Light",permalink:"/docs/2.0.2/components/light"},next:{title:"LinearLayout",permalink:"/docs/2.0.2/components/linearLayout"}},p=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[]}],l={rightToc:p};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"The Line component renders a colored line. The Line component creates lines as a series of line segments. Line follows the order in which the points are added, and must have at least two points. Line color is a multiplier to the vertex color. Create disconnected lines by adding line breaks to the Line."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'import React from "react";\nimport { View, Line } from "magic-script-components";\n\nexport default class MyApp extends React.Component {\n  render() {\n    const points = [\n      [-0.35, -0.35, -0.2],\n      [0.35, 0.35, 0.2],\n      [-0.35, -0.35, 0.2],\n      [-0.35, 0.35, -0.2],\n      [0.35, -0.35, 0.2],\n      [-0.35, -0.35, -0.2]\n    ];\n\n    return (\n      <View name="main-view">\n        <Line points={points} color={[0.5, 1.0, 0.25, 0.8]} />\n      </View>\n    );\n  }\n}\n')),Object(i.b)("h2",{id:"common-events"},Object(i.b)("a",Object(r.a)({parentName:"h2"},{href:"/docs/2.0.2/types/events"}),"Common Events")),Object(i.b)("h2",{id:"common-properties"},Object(i.b)("a",Object(r.a)({parentName:"h2"},{href:"/docs/2.0.2/types/properties"}),"Common Properties")),Object(i.b)("h2",{id:"element-properties"},"Element Properties"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"points"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"[vec3]"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Sets the points that describe this series of line segments. The line follows the order in which the points are added. No line can exist if there is less than two points.")))))}s.isMDXComponent=!0},412:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},m=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,u=m["".concat(a,".").concat(d)]||m[d]||b[d]||i;return n?o.a.createElement(u,c({ref:t},l,{components:n})):o.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);