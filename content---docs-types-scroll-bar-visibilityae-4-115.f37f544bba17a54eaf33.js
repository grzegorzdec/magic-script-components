(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{162:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return u}));t(0);var n=t(180);function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i={id:"scrollBarVisibility",title:"ScrollBarVisibility"},l=[{value:"ScrollBarVisibility options",id:"scrollbarvisibility-options",children:[]}],c={rightToc:l},p="wrapper";function u(e){var r=e.components,t=a(e,["components"]);return Object(n.b)(p,o({},c,t,{components:r,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"scrollbarvisibility-options"},"ScrollBarVisibility options"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"always"),Object(n.b)("li",{parentName:"ul"},"auto"),Object(n.b)("li",{parentName:"ul"},"off")))}u.isMDXComponent=!0},180:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return s}));var n=t(0),o=t.n(n),a=o.a.createContext({}),i=function(e){var r=o.a.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):Object.assign({},r,e)),t},l=function(e){var r=i(e.components);return o.a.createElement(a.Provider,{value:r},e.children)};var c="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},u=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===r.indexOf(n)&&(t[n]=e[n]);return t}(e,["components","mdxType","originalType","parentName"]),u=i(t),s=n,f=u[l+"."+s]||u[s]||p[s]||a;return t?o.a.createElement(f,Object.assign({},{ref:r},c,{components:t})):o.a.createElement(f,Object.assign({},{ref:r},c))}));function s(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);