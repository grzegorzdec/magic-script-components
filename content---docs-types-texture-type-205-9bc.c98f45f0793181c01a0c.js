(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",function(){return i}),n.d(t,"rightToc",function(){return c}),n.d(t,"default",function(){return u});n(0);var r=n(110);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={id:"textureType",title:"Texture Type"},c=[],l={rightToc:c},p="wrapper";function u(e){var t=e.components,n=o(e,["components"]);return Object(r.b)(p,a({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"texture-type-options"},"Texture Type options:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"albedo"),Object(r.b)("li",{parentName:"ul"},"normal"),Object(r.b)("li",{parentName:"ul"},"metallic"),Object(r.b)("li",{parentName:"ul"},"roughness"),Object(r.b)("li",{parentName:"ul"},"ambient"),Object(r.b)("li",{parentName:"ul"},"emissive"),Object(r.b)("li",{parentName:"ul"},"reflection"),Object(r.b)("li",{parentName:"ul"},"specular"),Object(r.b)("li",{parentName:"ul"},"brdf-lut"),Object(r.b)("li",{parentName:"ul"},"diff-env-map"),Object(r.b)("li",{parentName:"ul"},"spec-env-map")))}u.isMDXComponent=!0},110:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return b});var r=n(0),a=n.n(r),o=a.a.createContext({}),i=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=i(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)(function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),u=i(n),b=r,f=u[c+"."+b]||u[b]||p[b]||o;return n?a.a.createElement(f,Object.assign({},{ref:t},l,{components:n})):a.a.createElement(f,Object.assign({},{ref:t},l))});function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[l]="string"==typeof e?e:r,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);