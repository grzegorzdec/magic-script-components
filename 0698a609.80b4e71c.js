(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{172:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},s=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),u=a,d=s["".concat(c,".").concat(u)]||s[u]||m[u]||o;return n?r.a.createElement(d,i({ref:t},p,{components:n})):r.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(6),o=(n(0),n(172)),c={id:"tab",title:"Tab"},i={id:"components/tab",title:"Tab",description:"## Description",source:"@site/../docs/components/Tab.md",permalink:"/docs/components/tab",sidebar:"docs",previous:{title:"Spinner",permalink:"/docs/components/spinner"},next:{title:"Text",permalink:"/docs/components/text"}},l=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]},{value:"Eclipse Label Types",id:"eclipse-label-types",children:[]}],p={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"The tab component allows you to change a content view using button controls. You can organize an extensive amount of data in a compact form. Only one tab can be active at a time, and the active tab can be scrollable."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import React from \"react\";\nimport { LinearLayout, Tab, Text, PageView, Line, Content } from \"magic-script-components\";\n\nexport default class MyApp extends React.Component {\n  state = { activePage: 0 }\n\n  onHomeClicked = () => this.setState({ activePage: 0 })\n  onAboutClicked = () => this.setState({ activePage: 1 })\n  onContactClicked = () => this.setState({ activePage: 2 })\n\n  render() {\n    return (\n      <LinearLayout\n        name='top-layout'\n        orientation='vertical'\n        defaultItemAlignment=\"center-left\"\n      >\n        <Text textSize={0.05} text='Tabs' />\n        <LinearLayout\n          name='tab-page-layout'\n          defaultItemPadding={[0.01, 0.01, 0.01, 0.01]}\n          defaultItemAlignment=\"center-left\"\n          orientation='vertical'\n        >\n          <LinearLayout\n            name='tab-layout'\n            defaultItemAlignment=\"center-left\"\n            defaultItemPadding={[0.01, 0.02, 0.01, 0.02]}\n            orientation='horizontal'\n          >\n            <Tab text='Home' onClick={this.onHomeClicked}/>\n            <Tab text='About' onClick={this.onAboutClicked}/>\n            <Tab text='Contact' onClick={this.onContactClicked}/>\n          </LinearLayout>\n          <Line points={[\n              [-0.35, 0.2, 0],\n              [ 0.35, 0.2, 0]\n            ]}\n          />\n          <PageView visiblePage={this.state.activePage}>\n            <Content name=\"page-home\">\n              <Text textSize={0.05}>Welcome ...</Text>\n            </Content>\n            <Content name=\"page-about\">\n              <Text textSize={0.05}>About us ...</Text>\n            </Content>\n            <Content name=\"page-contact\">\n              <Text textSize={0.05}>Contact ...</Text>\n            </Content>\n          </PageView>\n        </LinearLayout>\n      </LinearLayout>\n    );\n  }\n}\n")),Object(o.b)("h2",{id:"common-events"},Object(o.b)("a",Object(a.a)({parentName:"h2"},{href:"/docs/events/commonEvents"}),"Common Events")),Object(o.b)("h2",{id:"common-properties"},Object(o.b)("a",Object(a.a)({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(o.b)("h2",{id:"create-properties"},"Create Properties"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default Value"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"text"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"n/a"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The UTF-8 encoded text to initially set the Eclipse label to.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"type"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"n/a"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The EclipseLabelType")))),Object(o.b)("h2",{id:"eclipse-label-types"},Object(o.b)("a",Object(a.a)({parentName:"h2"},{href:"/docs/types/eclipseLabelType"}),"Eclipse Label Types")))}b.isMDXComponent=!0}}]);