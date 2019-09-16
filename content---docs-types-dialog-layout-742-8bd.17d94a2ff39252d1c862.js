(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{178:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return b}));var r=n(0),a=n.n(r),o=a.a.createContext({}),i=function(t){var e=a.a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):Object.assign({},e,t)),n},c=function(t){var e=i(t.components);return a.a.createElement(o.Provider,{value:e},t.children)};var l="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},u=Object(r.forwardRef)((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,l=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&-1===e.indexOf(r)&&(n[r]=t[r]);return n}(t,["components","mdxType","originalType","parentName"]),u=i(n),b=r,d=u[c+"."+b]||u[b]||p[b]||o;return n?a.a.createElement(d,Object.assign({},{ref:e},l,{components:n})):a.a.createElement(d,Object.assign({},{ref:e},l))}));function b(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c[l]="string"==typeof t?t:r,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return i})),n.d(e,"rightToc",(function(){return c})),n.d(e,"default",(function(){return u}));n(0);var r=n(178);function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i={id:"dialogLayout",title:"DialogLayout"},c=[{value:"Dialog Layout options",id:"dialog-layout-options",children:[]}],l={rightToc:c},p="wrapper";function u(t){var e=t.components,n=o(t,["components"]);return Object(r.b)(p,a({},l,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"dialog-layout-options"},"Dialog Layout options"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",a({parentName:"tr"},{align:"left"}),"Value"),Object(r.b)("th",a({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"standard")),Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"Standard layout with any action buttons at the bottom of the dialog content (default).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"wide")),Object(r.b)("td",a({parentName:"tr"},{align:"left"}))))))}u.isMDXComponent=!0}}]);