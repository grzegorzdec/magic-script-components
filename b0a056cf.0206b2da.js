(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{226:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return d}));n(271),n(272),n(269),n(273),n(274),n(275);var i=n(270);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var l={id:"listView",title:"ListView"},r=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"itemAlignment",id:"itemalignment",children:[]},{value:"itemPadding",id:"itempadding",children:[]},{value:"cursorEdgeScrollMode options: CursorEdgeScrollMode",id:"cursoredgescrollmode-options-cursoredgescrollmode",children:[]},{value:"defaultItemAlignment options: Alignment",id:"defaultitemalignment-options-alignment",children:[]},{value:"orientation options: Orientation",id:"orientation-options-orientation",children:[]},{value:"scrollBarVisibility options: ScrollBarVisibility",id:"scrollbarvisibility-options-scrollbarvisibility",children:[]},{value:"itemAlignment.alignment options: Alignment",id:"itemalignmentalignment-options-alignment",children:[]}]},{value:"Events",id:"events",children:[]}],o={rightToc:r},b="wrapper";function d(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(i.b)(b,a({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"The ListView is a scrollable, selectable list of items. It adds a background quad to the items, including padding. Items can be grouped in horizontal or vertical lists."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",a({parentName:"pre"},{className:"language-javascript"}),'import React from "react";\nimport {\n  ScrollBar,\n  ListView,\n  ListViewItem,\n  Text\n} from "magic-script-components";\n\nexport default class MyApp extends React.Component {\n  render() {\n    const moons = [\n      "Europa",\n      "Ganymede",\n      "Io",\n      "Callisto",\n      "Valetudo",\n      "Amalthea",\n      "Metis",\n      "Ananke",\n      "Carme"\n    ];\n\n    return (\n      <ListView localPosition={[-0.15, 0.25, 0]} width={0.5} height={0.5}>\n        <ScrollBar width={0.5} thumbSize={0.03} />\n        {moons.map((moon, index) => (\n          <ListViewItem>\n            <Text key={index} textSize={0.1}>\n              {moon}\n            </Text>\n          </ListViewItem>\n        ))}\n      </ListView>\n    );\n  }\n}\n')),Object(i.b)("h2",{id:"common-events"},Object(i.b)("a",a({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(i.b)("h2",{id:"common-properties"},Object(i.b)("a",a({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(i.b)("h2",{id:"create-properties"},"Create Properties"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",a({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",a({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",a({parentName:"tr"},{align:"center"}),"Default Value"),Object(i.b)("th",a({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",a({parentName:"tr"},{align:null}),"width"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",a({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"0")),Object(i.b)("td",a({parentName:"tr"},{align:null}),"The width of the list view. The default (",Object(i.b)("inlineCode",{parentName:"td"},"0"),") allows the list to grow as needed.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",a({parentName:"tr"},{align:null}),"height"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",a({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"0")),Object(i.b)("td",a({parentName:"tr"},{align:null}),"The height of the list view. The default (",Object(i.b)("inlineCode",{parentName:"td"},"0"),") allows the list to grow as needed.")))),Object(i.b)("h2",{id:"element-properties"},"Element Properties"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",a({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",a({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",a({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",a({parentName:"tr"},{align:null}),"cursorEdgeScrollMode"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"Sets the cursor edge scroll mode for this list view.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",a({parentName:"tr"},{align:null}),"defaultItemAlignment"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"Sets the default item alignment within the list. Default item alignments are ",Object(i.b)("inlineCode",{parentName:"td"},"TOP_LEFT"),". This is set for any new items that are added that don't explicitly specify alignment. The alignment of each individual item can be set later if needed.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",a({parentName:"tr"},{align:null}),"defaultItemPadding"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"vec4"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"Sets the default padding of each item within the list, in scene units. The default is no padding (0,0,0,0). The padding order is: top, right, bottom, left. This is set for any new items that are added that don't explicitly specify padding. The padding of each individual item can be set later if needed.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",a({parentName:"tr"},{align:null}),"orientation"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"Sets the orientation of this list view. The default orientation is ",Object(i.b)("inlineCode",{parentName:"td"},"Vertical"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",a({parentName:"tr"},{align:null}),"scrollBarVisibility"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"Sets the visibility mode of the scrollbars attached.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",a({parentName:"tr"},{align:null}),"scrollingEnabled"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"boolean"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"Sets whether list view scrolling is enabled or not.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",a({parentName:"tr"},{align:null}),"scrollSpeed"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"Sets the scroll speed in scene units per second.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",a({parentName:"tr"},{align:null}),"scrollValue"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"Sets the scroll content position manually with a normalized value between 0 and 1.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",a({parentName:"tr"},{align:null}),"scrollToItem"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"Sets the index of the item you would like to scroll to.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",a({parentName:"tr"},{align:null}),"skipInvisibleItems"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"boolean"),Object(i.b)("td",a({parentName:"tr"},{align:null}),"Skips invisible items. Setting this value to ",Object(i.b)("inlineCode",{parentName:"td"},"true")," causes the layout to skip over any invisible items. The layout checks the visibility of each top-level item node added and, if invisible, along with inherited visibility, skips that node for layout.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",a({parentName:"tr"},{align:null}),"itemAlignment"),Object(i.b)("td",a({parentName:"tr"},{align:null}),Object(i.b)("em",{parentName:"td"},"object")),Object(i.b)("td",a({parentName:"tr"},{align:null}),"Sets the item alignment at the specified index.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",a({parentName:"tr"},{align:null}),"itemPadding"),Object(i.b)("td",a({parentName:"tr"},{align:null}),Object(i.b)("em",{parentName:"td"},"object")),Object(i.b)("td",a({parentName:"tr"},{align:null}),"Sets the item padding at the specified index.")))),Object(i.b)("h3",{id:"itemalignment"},"itemAlignment"),Object(i.b)("pre",null,Object(i.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"{\n    index: <number>,\n    alignment: <string>\n}\n")),Object(i.b)("h3",{id:"itempadding"},"itemPadding"),Object(i.b)("pre",null,Object(i.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"{\n    index: <number>,\n    padding: <vec4>\n}\n")),Object(i.b)("h3",{id:"cursoredgescrollmode-options-cursoredgescrollmode"},"cursorEdgeScrollMode options: ",Object(i.b)("a",a({parentName:"h3"},{href:"/docs/types/cursorEdgeScrollMode"}),"CursorEdgeScrollMode")),Object(i.b)("h3",{id:"defaultitemalignment-options-alignment"},"defaultItemAlignment options: ",Object(i.b)("a",a({parentName:"h3"},{href:"/docs/types/alignment"}),"Alignment")),Object(i.b)("h3",{id:"orientation-options-orientation"},"orientation options: ",Object(i.b)("a",a({parentName:"h3"},{href:"/docs/types/orientation"}),"Orientation")),Object(i.b)("h3",{id:"scrollbarvisibility-options-scrollbarvisibility"},"scrollBarVisibility options: ",Object(i.b)("a",a({parentName:"h3"},{href:"/docs/types/scrollBarVisibility"}),"ScrollBarVisibility")),Object(i.b)("h3",{id:"itemalignmentalignment-options-alignment"},"itemAlignment.alignment options: ",Object(i.b)("a",a({parentName:"h3"},{href:"/docs/types/alignment"}),"Alignment")),Object(i.b)("h2",{id:"events"},"Events"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"onScrollChanged")))}d.isMDXComponent=!0}}]);