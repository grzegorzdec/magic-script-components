(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{228:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return s}));n(58),n(31),n(22),n(23),n(59),n(0);var a=n(284);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={id:"gridLayout",title:"GridLayout"},o=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"defaultItemAlignment options: Alignment",id:"defaultitemalignment-options-alignment",children:[]},{value:"itemAlignment options: Alignment",id:"itemalignment-options-alignment",children:[]}]}],l={rightToc:o},d="wrapper";function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(d,i({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"The GridLayout class automatically lays out elements in a grid with optional padding. The grid layout grows to accommodate additional items based on row and column settings. You can constrain the number of columns, rows, or both. If you constrain only one dimension, the other grows as needed. If the layout has an explicit width, then any items added to it shrinks to fit if they are larger than the width of the layout. All units are in meters, including padding."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-javascript"}),'import React from "react";\nimport { View, GridLayout, Text } from "magic-script-components";\n\nexport default class MyApp extends React.Component {\n  render() {\n    const moons = [\n      "Europa",\n      "Ganymede",\n      "Io",\n      "Callisto",\n      "Valetudo",\n      "Amalthea",\n      "Metis",\n      "Ananke",\n      "Carme"\n    ];\n\n    return (\n      <View name="main-view">\n        <GridLayout\n          columns={3}\n          rows={3}\n          defaultItemAlignment="center-left"\n          defaultItemPadding={[0.01, 0.01, 0.01, 0.01]}\n          localPosition={[-0.25, 0.25, 0]}\n        >\n          {moons.map((moon, index) => (\n            <Text textSize={0.05} key={index} text={moon} />\n          ))}\n        </GridLayout>\n      </View>\n    );\n  }\n}\n')),Object(a.b)("h2",{id:"common-events"},Object(a.b)("a",i({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(a.b)("h2",{id:"common-properties"},Object(a.b)("a",i({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(a.b)("h2",{id:"element-properties"},"Element Properties"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",i({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",i({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",i({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"defaultItemAlignment"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Sets the default item alignment within the grid. The default item alignments are ",Object(a.b)("inlineCode",{parentName:"td"},"TOP_LEFT"),". This is set for any new items that are added that don't explicitly specify alignment. The alignment of each individual item can be set later if needed. Note that for the right and the bottom alignments to be visible, the containing cell should be, respectively, wider and higher than its content.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"defaultItemPadding"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"vec4"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Sets the default padding of each item within the grid, in scene units. The default is no padding (0,0,0,0). The padding order is: top, right, bottom, left. This is set for any new items that are added that don't explicitly specify padding. The padding of each individual item can be set later if needed. Note that padding in a dimension only works for items smaller in that dimension than the cell they are in. Large horizontal padding for an item also contributes to the width of the column the item is in. The same applies for large vertical padding in relation to the height of the row the item is in.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"itemAlignment"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Sets the item alignment. Note that for the right and the bottom alignments to be visible, the containing cell should be, respectively, wider and higher than its content.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"itemPadding"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"vec4"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Sets the item padding at the specified row and column position. Note that padding in a dimension only works for items smaller in that dimension than the cell they are in. Large horizontal padding for an item will also contribute to the width of the column the item is in. The same applies for large vertical padding in relation to the height of the row the item is in.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"skipInvisibleItems"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"boolean"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Skips invisible items. Setting this value to ",Object(a.b)("inlineCode",{parentName:"td"},"true")," causes the layout to skip over any invisible items. The layout checks the visibility of each top-level item node added and, if invisible, along with inherited visibility, skips that node for layout. Using this setting affects the displayed grid layout by collapsing the location of invisible items in the grid while the remaining, visible items adjust to fill in those absent locations.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"columns"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Sets the number of columns for the grid. The default value of ",Object(a.b)("inlineCode",{parentName:"td"},"0")," indicates the number of columns can grow to fit items as they are added. Setting the value above ",Object(a.b)("inlineCode",{parentName:"td"},"0")," locks the grid column dimension. If both rows and columns are set, columns take precedence. If neither rows or columns are set, the grid layout has one row and adds columns as needed. When the number of columns is set, the grid lays items in row-major order.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"rows"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Sets the number of rows for the grid. The default value of ",Object(a.b)("inlineCode",{parentName:"td"},"0")," indicates the number of rows can grow to fit items as they are added. Setting the value above zero locks the grid row dimension. If both rows and columns are set, columns take precedence. If neither rows or columns are set, the grid layout has one row and adds columns as needed. When the number of rows is set (and columns is zero), the grid lays items in column-major order.")))),Object(a.b)("h3",{id:"defaultitemalignment-options-alignment"},"defaultItemAlignment options: ",Object(a.b)("a",i({parentName:"h3"},{href:"/docs/types/alignment"}),"Alignment")),Object(a.b)("h3",{id:"itemalignment-options-alignment"},"itemAlignment options: ",Object(a.b)("a",i({parentName:"h3"},{href:"/docs/types/alignment"}),"Alignment")))}s.isMDXComponent=!0},284:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return c}));var a=n(0),i=n.n(a),r=i.a.createContext({}),o=function(e){var t=i.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=o(e.components);return i.a.createElement(r.Provider,{value:t},e.children)};var d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),m=o(n),c=a,p=m[l+"."+c]||m[c]||s[c]||r;return n?i.a.createElement(p,Object.assign({},{ref:t},d,{components:n})):i.a.createElement(p,Object.assign({},{ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);