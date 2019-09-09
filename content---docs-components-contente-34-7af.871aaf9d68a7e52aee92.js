(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{174:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r),o=a.a.createContext({}),c=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=c(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var i="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),m=c(n),b=r,u=m[l+"."+b]||m[b]||p[b]||o;return n?a.a.createElement(u,Object.assign({},{ref:t},i,{components:n})):a.a.createElement(u,Object.assign({},{ref:t},i))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[i]="string"==typeof e?e:r,c[1]=l;for(var b=2;b<o;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return m}));n(0);var r=n(174);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c={id:"content",title:"Content"},l=[{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]}],i={rightToc:l},p="wrapper";function m(e){var t=e.components,n=o(e,["components"]);return Object(r.b)(p,a({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("p",null,"Some components need to wrap their children in ",Object(r.b)("inlineCode",{parentName:"p"},"<content>")," tag."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"<ScrollView>\n  <ScrollBar />\n  <Content>\n    <Text>Message Box</Text>\n    <Button>Submit</Button>\n  </Content>\n</ScrollView>\n")),Object(r.b)("h2",{id:"common-events"},Object(r.b)("a",a({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(r.b)("h2",{id:"common-properties"},Object(r.b)("a",a({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(r.b)("h2",{id:"create-properties"},"Create Properties"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",a({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",a({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",a({parentName:"tr"},{align:"center"}),"Default Value"),Object(r.b)("th",a({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"localTransform"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"mat4"),Object(r.b)("td",a({parentName:"tr"},{align:"center"}),"1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"The local transform of the new node. Use glm::mat4() for the identity matrix.")))))}m.isMDXComponent=!0}}]);