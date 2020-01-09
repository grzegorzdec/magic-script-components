(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(1),a=n(6),r=(n(0),n(172)),i={id:"rectLayout",title:"RectLayout"},c={id:"components/rectLayout",title:"RectLayout",description:"## Description",source:"@site/../docs/components/RectLayout.md",permalink:"/docs/components/rectLayout",sidebar:"docs",previous:{title:"Quad",permalink:"/docs/components/quad"},next:{title:"ScrollBar",permalink:"/docs/components/scrollBar"}},l=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"contentAlignment options: Alignment",id:"contentalignment-options-alignment",children:[]}]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"description"},"Description"),Object(r.b)("p",null,"The RectLayout component allows you to automatically layout content within a single rectangular plane with side padding and content alignment. It acts like a table cell when used in conjunction with other layout elements. When you do not specify the rectangle size, or use ",Object(r.b)("inlineCode",{parentName:"p"},"0"),", the rectangle grows to fit the content until it is clipped by the edges of the container. Non-uniform scaling is not recommended. By default, there is no padding and content is aligned to the top left. The padding order is top, right, bottom, left."),Object(r.b)("p",null,"The RectLayout sends events only when it is the immediate parent of a UI element. For example, if you have text in a RectLayout, both the text and the RectLayout send onHover events. If you have a text button inside the layout, the layout does not send an onHover event because the parent of the text is the button."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'import React from "react";\nimport { View, RectLayout, Content, Text } from "magic-script-components";\n\nexport default class MyApp extends React.Component {\n  render() {\n    return (\n      <View name="main-view">\n        <RectLayout\n          localPosition={[-0.4, 0.4, 0]}\n          width={0.8}\n          height={0.4}\n          padding={[0.1, 0.1, 0.1, 0.1]}\n          contentAlignment="bottom-left"\n        >\n          <Content>\n            <Text textSize={0.05} text="Top Message" />\n          </Content>\n        </RectLayout>\n        <RectLayout\n          localPosition={[-0.4, 0, 0]}\n          width={0.8}\n          height={0.4}\n          padding={[0.1, 0.1, 0.1, 0.1]}\n          contentAlignment="top-right"\n        >\n          <Content>\n            <Text textSize={0.05} text="Bottom Message" />\n          </Content>\n        </RectLayout>\n      </View>\n    );\n  }\n}\n')),Object(r.b)("h2",{id:"common-events"},Object(r.b)("a",Object(o.a)({parentName:"h2"},{href:"/docs/events/commonEvents"}),"Common Events")),Object(r.b)("h2",{id:"common-properties"},Object(r.b)("a",Object(o.a)({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(r.b)("h2",{id:"element-properties"},"Element Properties"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"contentAlignment"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Sets the content alignment within the rectangular area. The default content alignments are ",Object(r.b)("inlineCode",{parentName:"td"},"TOP_LEFT"),". When the size of the layout is set to zero in a dimension, it grows in that dimension to fit both the content and its padding, if any. When the size is set to greater than zero, the content might scale down to fit in the room left by the padding. In this case, content alignment is ignored.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"padding"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"vec4"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Sets the content padding for the four sides of the rectangular area, in scene units. The default is no padding (",Object(r.b)("inlineCode",{parentName:"td"},"0,0,0,0"),"). The padding order is: top, right, bottom, left. When the size of the layout is set to zero in a dimension, it grows in that dimension to fit both the content and its padding, if any. When the size is set to greater than zero, the content might scale down to fit in the room left by the padding. In this case, content alignment is ignored.")))),Object(r.b)("h3",{id:"contentalignment-options-alignment"},"contentAlignment options: ",Object(r.b)("a",Object(o.a)({parentName:"h3"},{href:"/docs/types/alignment"}),"Alignment")))}p.isMDXComponent=!0},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,b=d["".concat(i,".").concat(u)]||d[u]||m[u]||r;return n?a.a.createElement(b,c({ref:t},s,{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);