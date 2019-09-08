(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{112:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return s}));t(0);var n=t(162);function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i={id:"view",title:"View"},c=[{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[]}],p={rightToc:c},l="wrapper";function s(e){var r=e.components,t=a(e,["components"]);return Object(n.b)(l,o({},p,t,{components:r,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"example"},"Example"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"<View />\n")),Object(n.b)("h2",{id:"common-events"},Object(n.b)("a",o({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(n.b)("h2",{id:"common-properties"},Object(n.b)("a",o({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(n.b)("h2",{id:"create-properties"},"Create Properties"),Object(n.b)("p",null,"N/A"),Object(n.b)("h2",{id:"element-properties"},"Element Properties"),Object(n.b)("p",null,"N/A"))}s.isMDXComponent=!0},162:function(e,r,t){"use strict";t.d(r,"a",(function(){return c})),t.d(r,"b",(function(){return u}));var n=t(0),o=t.n(n),a=o.a.createContext({}),i=function(e){var r=o.a.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):Object.assign({},r,e)),t},c=function(e){var r=i(e.components);return o.a.createElement(a.Provider,{value:r},e.children)};var p="mdxType",l={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},s=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===r.indexOf(n)&&(t[n]=e[n]);return t}(e,["components","mdxType","originalType","parentName"]),s=i(t),u=n,m=s[c+"."+u]||s[u]||l[u]||a;return t?o.a.createElement(m,Object.assign({},{ref:r},p,{components:t})):o.a.createElement(m,Object.assign({},{ref:r},p))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=s;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[p]="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);