(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{240:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return s}));n(271),n(272),n(269),n(273),n(274),n(275);var i=n(270);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var o={id:"gridLayout",title:"GridLayout"},r=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"defaultItemAlignment options: Alignment",id:"defaultitemalignment-options-alignment",children:[]},{value:"itemAlignment options: Alignment",id:"itemalignment-options-alignment",children:[]}]}],l={rightToc:r},d="wrapper";function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(i.b)(d,a({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"The GridLayout class automatically lays out elements in a grid with optional padding. The grid layout grows to accommodate additional items based on row and column settings. You can constrain the number of columns, rows, or both. If you constrain only one dimension, the other grows as needed. If the layout has an explicit width, then any items added to it shrinks to fit if they are larger than the width of the layout. All units are in meters, including padding."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",a({parentName:"pre"},{className:"language-javascript"}),'import React from "react";\nimport { View, GridLayout, Text } from "magic-script-components";\n\nexport default class MyApp extends React.Component {\n  render() {\n    const moons = [\n      "Europa",\n      "Ganymede",\n      "Io",\n      "Callisto",\n      "Valetudo",\n      "Amalthea",\n      "Metis",\n      "Ananke",\n      "Carme"\n    ];\n\n    return (\n      <View name="main-view">\n        <GridLayout\n          columns={3}\n          rows={3}\n          defaultItemAlignment="center-left"\n          defaultItemPadding={[0.01, 0.01, 0.01, 0.01]}\n          localPosition={[-0.25, 0.25, 0]}\n        >\n          {moons.map((moon, index) => (\n            <Text textSize={0.05} key={index} text={moon} />\n          ))}\n        </GridLayout>\n      </View>\n    );\n  }\n}\n')),Object(i.b)("h2",{id:"common-events"},Object(i.b)("a",a({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(i.b)("h2",{id:"common-properties"},Object(i.b)("a",a({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(i.b)("h2",{id:"element-properties"},"Element Properties"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",a({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",a({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",a({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",a({parentName:"tr"},{align:null}),"defaultItemAlignment"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"Sets the default item alignment within the grid. The default item alignments are ",Object(i.b)("inlineCode",{parentName:"td"},"TOP_LEFT"),". This is set for any new items that are added that don't explicitly specify alignment. The alignment of each individual item can be set later if needed. Note that for the right and the bottom alignments to be visible, the containing cell should be, respectively, wider and higher than its content.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",a({parentName:"tr"},{align:null}),"defaultItemPadding"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"vec4"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"Sets the default padding of each item within the grid, in scene units. The default is no padding (0,0,0,0). The padding order is: top, right, bottom, left. This is set for any new items that are added that don't explicitly specify padding. The padding of each individual item can be set later if needed. Note that padding in a dimension only works for items smaller in that dimension than the cell they are in. Large horizontal padding for an item also contributes to the width of the column the item is in. The same applies for large vertical padding in relation to the height of the row the item is in.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",a({parentName:"tr"},{align:null}),"itemAlignment"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"Sets the item alignment. Note that for the right and the bottom alignments to be visible, the containing cell should be, respectively, wider and higher than its content.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",a({parentName:"tr"},{align:null}),"itemPadding"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"vec4"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"Sets the item padding at the specified row and column position. Note that padding in a dimension only works for items smaller in that dimension than the cell they are in. Large horizontal padding for an item will also contribute to the width of the column the item is in. The same applies for large vertical padding in relation to the height of the row the item is in.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",a({parentName:"tr"},{align:null}),"skipInvisibleItems"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"boolean"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"Skips invisible items. Setting this value to ",Object(i.b)("inlineCode",{parentName:"td"},"true")," causes the layout to skip over any invisible items. The layout checks the visibility of each top-level item node added and, if invisible, along with inherited visibility, skips that node for layout. Using this setting affects the displayed grid layout by collapsing the location of invisible items in the grid while the remaining, visible items adjust to fill in those absent locations.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",a({parentName:"tr"},{align:null}),"columns"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"Sets the number of columns for the grid. The default value of ",Object(i.b)("inlineCode",{parentName:"td"},"0")," indicates the number of columns can grow to fit items as they are added. Setting the value above ",Object(i.b)("inlineCode",{parentName:"td"},"0")," locks the grid column dimension. If both rows and columns are set, columns take precedence. If neither rows or columns are set, the grid layout has one row and adds columns as needed. When the number of columns is set, the grid lays items in row-major order.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",a({parentName:"tr"},{align:null}),"rows"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"Sets the number of rows for the grid. The default value of ",Object(i.b)("inlineCode",{parentName:"td"},"0")," indicates the number of rows can grow to fit items as they are added. Setting the value above zero locks the grid row dimension. If both rows and columns are set, columns take precedence. If neither rows or columns are set, the grid layout has one row and adds columns as needed. When the number of rows is set (and columns is zero), the grid lays items in column-major order.")))),Object(i.b)("h3",{id:"defaultitemalignment-options-alignment"},"defaultItemAlignment options: ",Object(i.b)("a",a({parentName:"h3"},{href:"/docs/types/alignment"}),"Alignment")),Object(i.b)("h3",{id:"itemalignment-options-alignment"},"itemAlignment options: ",Object(i.b)("a",a({parentName:"h3"},{href:"/docs/types/alignment"}),"Alignment")))}s.isMDXComponent=!0}}]);