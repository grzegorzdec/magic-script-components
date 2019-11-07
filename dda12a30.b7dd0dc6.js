(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{205:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return c}));n(58),n(31),n(22),n(23),n(59),n(0);var a=n(284);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={id:"text",title:"Text"},l=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[{value:"style options: FontStyle",id:"style-options-fontstyle",children:[]},{value:"weight options: FontWeight",id:"weight-options-fontweight",children:[]}]},{value:"Element Properties",id:"element-properties",children:[{value:"boundsSize",id:"boundssize",children:[]},{value:"fontParams",id:"fontparams",children:[]},{value:"textAlignment options: HorizontalTextAlignment",id:"textalignment-options-horizontaltextalignment",children:[]}]}],o={rightToc:l},b="wrapper";function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(b,r({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"This is the base component of any static text element placed in your prism. These are single or multi-line text areas of UTF-8 encoded 2D text. Use them inside your prism as is, or call them from other components. Text cannot be modified by a user, but can be copied with the cursor."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),'import React from "react";\nimport { Text } from "magic-script-components";\n\nexport default class TextExample extends React.Component {\n  render() {\n    return (\n      <Text textSize={0.1} localPosition={[-0.3, 0, 0]}>\n        Text Example\n      </Text>\n    );\n  }\n}\n')),Object(a.b)("h2",{id:"common-events"},Object(a.b)("a",r({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(a.b)("h2",{id:"common-properties"},Object(a.b)("a",r({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(a.b)("h2",{id:"create-properties"},"Create Properties"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:"left"}),"Name"),Object(a.b)("th",r({parentName:"tr"},{align:"left"}),"Type"),Object(a.b)("th",r({parentName:"tr"},{align:"center"}),"Default Value"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"text"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The UTF-8 encoded text to initially set the text to.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"style"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"normal")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The style of the Magic Leap font.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"weight"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"regular")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The weight (i.e., thickness) of the Magic Leap font.")))),Object(a.b)("p",null,"If ",Object(a.b)("inlineCode",{parentName:"p"},"text")," is empty, the content of the ",Object(a.b)("inlineCode",{parentName:"p"},"<text>")," tag will be used as text."),Object(a.b)("h3",{id:"style-options-fontstyle"},"style options: ",Object(a.b)("a",r({parentName:"h3"},{href:"/docs/types/fontStyle"}),"FontStyle")),Object(a.b)("h3",{id:"weight-options-fontweight"},"weight options: ",Object(a.b)("a",r({parentName:"h3"},{href:"/docs/types/fontWeight"}),"FontWeight")),Object(a.b)("h2",{id:"element-properties"},"Element Properties"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:"left"}),"Name"),Object(a.b)("th",r({parentName:"tr"},{align:"left"}),"Type"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"allCaps"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"boolean"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Displays the text in all caps if ",Object(a.b)("inlineCode",{parentName:"td"},"true"),".")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"charSpacing"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the additional character spacing that is applied between characters. Note a spacing of ",Object(a.b)("inlineCode",{parentName:"td"},"0")," is the default spacing.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"lineSpacing"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the line spacing to adjust the distance between lines of text; e.g., use 1 for single-spaced text, 2 for double-spaced text. The default is 1.0.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"style"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the style of the Magic Leap font.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"weight"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the weight (i.e., thickness) of the Magic Leap font.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"text"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:null}),'Sets the UTF-8 encoded text. This call is ignored if there is a current localization key set. Set the localization key to an empty string, "", to unset it.')),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"textAlignment"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Aligns the text to the left, center, or right or justifies it.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"textColor"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"verc4"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the RGBA color of the rendered text.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"textSize"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the text render size height in scene units.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"boundsSize"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),Object(a.b)("em",{parentName:"td"},"object")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the text bounds size in scene units. The default value of ",Object(a.b)("inlineCode",{parentName:"td"},"0,0")," indicates there is no bounds and the text can grow and does not wrap or truncate. Setting the bounds greater than ",Object(a.b)("inlineCode",{parentName:"td"},"0")," in both X and Y will set the text bounds and cause the text to wrap or truncate within.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"fontParams"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),Object(a.b)("em",{parentName:"td"},"object")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the font parameters, including style, weight, pixel size, and tracking. This uses one of the default sets of Magic Leap font resources that support style and weight.")))),Object(a.b)("h3",{id:"boundssize"},"boundsSize"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"{\n    boundsSize: vec2,\n    wrap: boolean\n}\n")),Object(a.b)("h3",{id:"fontparams"},"fontParams"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"{\n    style: string,\n    weight: string,\n    fontSize: number,\n    tracking: number,\n    allCaps: boolean\n}\n")),Object(a.b)("h3",{id:"textalignment-options-horizontaltextalignment"},"textAlignment options: ",Object(a.b)("a",r({parentName:"h3"},{href:"/docs/types/horizontalTextAlignment"}),"HorizontalTextAlignment")))}c.isMDXComponent=!0},284:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a),i=r.a.createContext({}),l=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},o=function(e){var t=l(e.components);return r.a.createElement(i.Provider,{value:t},e.children)};var b="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),p=l(n),s=a,d=p[o+"."+s]||p[s]||c[s]||i;return n?r.a.createElement(d,Object.assign({},{ref:t},b,{components:n})):r.a.createElement(d,Object.assign({},{ref:t},b))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[b]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);