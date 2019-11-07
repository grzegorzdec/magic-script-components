(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{219:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return c}));n(58),n(31),n(22),n(23),n(59),n(0);var r=n(284);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i={id:"webView",title:"WebView"},b=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"action options: WebViewAction",id:"action-options-webviewaction",children:[]}]}],l={rightToc:b},o="wrapper";function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)(o,a({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"description"},"Description"),Object(r.b)("p",null,"WebView renders HTML, CSS, and JavaScript content in a prism. When you enable web inspectors in your app, use web inspector clients, such as Chrome DevTools, to debug the displayed WebView content."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("blockquote",null,Object(r.b)("table",{parentName:"blockquote"},Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",a({parentName:"tr"},{align:null}),"\u26a0\ufe0f Don't forget to include the ",Object(r.b)("inlineCode",{parentName:"th"},"WebView")," and ",Object(r.b)("inlineCode",{parentName:"th"},"Internet")," privileges in your ",Object(r.b)("inlineCode",{parentName:"th"},"manifest.xml")," file!"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},'<uses-privilege ml:name="WebView"/>'))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},'<uses-privilege ml:name="Internet"/>')))))),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"import React from \"react\";\n\nimport { View, WebView, Text } from \"magic-script-components\";\nexport default class MyApp extends React.Component {\n\n  render() {\n\n    return (\n      <View name='main-view' >\n        <Text text='WebView' textSize={0.05} localPosition={[0, 0.45, 0]} />\n        <WebView localPosition={[-0.4, 0.4, 0]} width={0.8} height={0.8} url={'http://google.com'}/>\n      </View>\n    );\n  }\n}\n")),Object(r.b)("h2",{id:"common-events"},Object(r.b)("a",a({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(r.b)("h2",{id:"common-properties"},Object(r.b)("a",a({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(r.b)("h2",{id:"create-properties"},"Create Properties"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",a({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",a({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",a({parentName:"tr"},{align:"center"}),"Default Value"),Object(r.b)("th",a({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"width"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"number"),Object(r.b)("td",a({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"0")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"The width of the WebView.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"height"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"number"),Object(r.b)("td",a({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"0")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"the width of the WebView.")))),Object(r.b)("h2",{id:"element-properties"},"Element Properties"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",a({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",a({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",a({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"url"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"Sets the URL to load in the WebView.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"action"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"Requests the specified action.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"scrollBy"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"vec2"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"Scrolls the WebView in the given direction. Enter an array of two numbers: ","[xPixels, yPixels]")))),Object(r.b)("h3",{id:"action-options-webviewaction"},"action options: ",Object(r.b)("a",a({parentName:"h3"},{href:"/docs/types/webViewAction"}),"WebViewAction")))}c.isMDXComponent=!0},284:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r),i=a.a.createContext({}),b=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=b(e.components);return a.a.createElement(i.Provider,{value:t},e.children)};var o="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),p=b(n),m=r,d=p[l+"."+m]||p[m]||c[m]||i;return n?a.a.createElement(d,Object.assign({},{ref:t},o,{components:n})):a.a.createElement(d,Object.assign({},{ref:t},o))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,b=new Array(i);b[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[o]="string"==typeof e?e:r,b[1]=l;for(var m=2;m<i;m++)b[m]=n[m];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);