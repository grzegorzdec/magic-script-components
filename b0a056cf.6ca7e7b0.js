(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{310:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return d}));var a=n(1),i=n(6),l=(n(418),n(412)),r=n(417),c={id:"listView",title:"ListView"},b={id:"components/listView",title:"ListView",description:"<PlatformTabs component='listview' />\u200b",source:"@site/../docs/components/ListView.md",permalink:"/docs/next/components/listView",version:"next",sidebar:"docs",previous:{title:"LinearLayout",permalink:"/docs/next/components/linearLayout"},next:{title:"ListViewItem",permalink:"/docs/next/components/listViewItem"}},o=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"itemAlignment",id:"itemalignment",children:[]},{value:"itemPadding",id:"itempadding",children:[]},{value:"cursorEdgeScrollMode options: CursorEdgeScrollMode",id:"cursoredgescrollmode-options-cursoredgescrollmode",children:[]},{value:"defaultItemAlignment options: Alignment",id:"defaultitemalignment-options-alignment",children:[]},{value:"orientation options: Orientation",id:"orientation-options-orientation",children:[]},{value:"scrollBarVisibility options: ScrollBarVisibility",id:"scrollbarvisibility-options-scrollbarvisibility",children:[]},{value:"itemAlignment.alignment options: Alignment",id:"itemalignmentalignment-options-alignment",children:[]}]},{value:"Events",id:"events",children:[]}],m={rightToc:o};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)(r.a,{component:"listview",mdxType:"PlatformTabs"}),"\u200b",Object(l.b)("h2",{id:"description"},"Description"),Object(l.b)("p",null,"The ListView is a scrollable, selectable list of items. It adds a background quad to the items, including padding. Items can be grouped in horizontal or vertical lists."),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import React from \"react\";\nimport {\n  ListView,\n  ListViewItem,\n  Text,\n  Image,\n  View,\n  RectLayout,\n  ScrollBar,\n  Scene,\n  Prism\n} from \"magic-script-components\";\n\nexport default class MyApp extends React.Component {\n  render() {\n    const contacts = [\n      { name: 'Lorem Ipsum    ', email: 'lorem@magicleap.com ', image: require('../../resources/contact1.jpg'), phone: '(555)-123-1234' },\n      { name: 'Little Kitten  ', email: 'kitten@magicleap.com', image: require('../../resources/contact2.jpg'), phone: '(555)-123-1234' },\n      { name: 'Lorem Ipsum 2  ', email: 'lorem@magicleap.com ', image: require('../../resources/contact1.jpg'), phone: '(555)-123-1234' },\n      { name: 'Little Kitten 2', email: 'kitten@magicleap.com', image: require('../../resources/contact2.jpg'), phone: '(555)-123-1234' },\n      { name: 'Lorem Ipsum 3  ', email: 'lorem@magicleap.com ', image: require('../../resources/contact1.jpg'), phone: '(555)-123-1234' },\n      { name: 'Little Kitten 3', email: 'kitten@magicleap.com', image: require('../../resources/contact2.jpg'), phone: '(555)-123-1234' }\n    ];\n\n    return (\n      <Scene>\n        <Prism size={[1, 1, 0.2]} >\n          <View name=\"main-view\" alignment={'center-center'}>\n            <ListView localPosition={[0, 0, 0]} width={0.7} height={0.5} defaultItemAlignment={'top-left'} defaultItemPadding={[0, 0, 0.01, 0]}>\n              <ScrollBar length={0.5} thumbSize={0.03} />\n              {contacts.map((contact, index) => (\n                <ListViewItem key={index}>\n                  <RectLayout width={0.35} contentAlignment={'top-left'}>\n                    <View>\n                      <Image localPosition={[0, 0, 0]} height={0.17} width={0.17} filePath={contact.image} />\n                      <Text localPosition={[0.2, 0.05, 0]} alignment={'center-left'} textSize={0.07} weight={\"bold\"} textColor={\"#85D834\"} >\n                        {contact.name}\n                      </Text>\n                      <Text localPosition={[0.2, 0, 0]} alignment={'center-left'} textSize={0.05} textColor={\"#e0e0e0\"} >\n                        {contact.email}\n                      </Text>\n                      <Text localPosition={[0.2, -0.05, 0]} alignment={'center-left'} textSize={0.05} textColor={\"#B5B5B5\"}>\n                        {contact.phone}\n                      </Text>\n                    </View>\n                  </RectLayout>\n                </ListViewItem>\n              ))}\n            </ListView>\n          </View>\n        </Prism>\n      </Scene>\n    );\n  }\n}\n")),Object(l.b)("h2",{id:"common-events"},Object(l.b)("a",Object(a.a)({parentName:"h2"},{href:"/docs/next/events/commonEvents"}),"Common Events")),Object(l.b)("h2",{id:"common-properties"},Object(l.b)("a",Object(a.a)({parentName:"h2"},{href:"/docs/next/types/properties"}),"Common Properties")),Object(l.b)("h2",{id:"create-properties"},"Create Properties"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default Value"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Required"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"width"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(l.b)("inlineCode",{parentName:"td"},"0")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"N"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The width of the list view. The default (",Object(l.b)("inlineCode",{parentName:"td"},"0"),") allows the list to grow as needed.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"height"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(l.b)("inlineCode",{parentName:"td"},"0")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"N"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The height of the list view. The default (",Object(l.b)("inlineCode",{parentName:"td"},"0"),") allows the list to grow as needed.")))),Object(l.b)("h2",{id:"element-properties"},"Element Properties"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default Value"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"cursorEdgeScrollMode"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"n/a"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the cursor edge scroll mode for this list view.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"defaultItemAlignment"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(l.b)("inlineCode",{parentName:"td"},"top-left")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the default item alignment within the list. Default item alignments are ",Object(l.b)("inlineCode",{parentName:"td"},"TOP_LEFT"),". This is set for any new items that are added that don't explicitly specify alignment. The alignment of each individual item can be set later if needed.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"defaultItemPadding"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"vec4"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(l.b)("inlineCode",{parentName:"td"},"[0.0, 0.0, 0.0, 0.0]")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the default padding of each item within the list, in scene units. The default is no padding (0,0,0,0). The padding order is: top, right, bottom, left. This is set for any new items that are added that don't explicitly specify padding. The padding of each individual item can be set later if needed.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"orientation"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(l.b)("inlineCode",{parentName:"td"},"vertical")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the orientation of this list view. The default orientation is ",Object(l.b)("inlineCode",{parentName:"td"},"Vertical"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"scrollBarVisibility"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(l.b)("inlineCode",{parentName:"td"},"always")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the visibility mode of the scrollbars attached.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"scrollingEnabled"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(l.b)("inlineCode",{parentName:"td"},"true")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets whether list view scrolling is enabled or not.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"scrollSpeed"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(l.b)("inlineCode",{parentName:"td"},"0.1")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the scroll speed in scene units per second.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"scrollValue"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(l.b)("inlineCode",{parentName:"td"},"0")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the scroll content position manually with a normalized value between 0 and 1.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"scrollToItem"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"n/a"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the index of the item you would like to scroll to.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"skipInvisibleItems"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Skips invisible items. Setting this value to ",Object(l.b)("inlineCode",{parentName:"td"},"true")," causes the layout to skip over any invisible items. The layout checks the visibility of each top-level item node added and, if invisible, along with inherited visibility, skips that node for layout.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"itemAlignment"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("em",{parentName:"td"},"object")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"n/a"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the item alignment at the specified index.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"itemPadding"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("em",{parentName:"td"},"object")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"n/a"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the item padding at the specified index.")))),Object(l.b)("h3",{id:"itemalignment"},"itemAlignment"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"[{\n    index: <number>,\n    alignment: <string>\n}]\n")),Object(l.b)("h3",{id:"itempadding"},"itemPadding"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"[{\n    index: <number>,\n    padding: <vec4>\n}]\n")),Object(l.b)("h3",{id:"cursoredgescrollmode-options-cursoredgescrollmode"},"cursorEdgeScrollMode options: ",Object(l.b)("a",Object(a.a)({parentName:"h3"},{href:"/docs/next/types/cursorEdgeScrollMode"}),"CursorEdgeScrollMode")),Object(l.b)("h3",{id:"defaultitemalignment-options-alignment"},"defaultItemAlignment options: ",Object(l.b)("a",Object(a.a)({parentName:"h3"},{href:"/docs/next/types/alignment"}),"Alignment")),Object(l.b)("h3",{id:"orientation-options-orientation"},"orientation options: ",Object(l.b)("a",Object(a.a)({parentName:"h3"},{href:"/docs/next/types/orientation"}),"Orientation")),Object(l.b)("h3",{id:"scrollbarvisibility-options-scrollbarvisibility"},"scrollBarVisibility options: ",Object(l.b)("a",Object(a.a)({parentName:"h3"},{href:"/docs/next/types/scrollBarVisibility"}),"ScrollBarVisibility")),Object(l.b)("h3",{id:"itemalignmentalignment-options-alignment"},"itemAlignment.alignment options: ",Object(l.b)("a",Object(a.a)({parentName:"h3"},{href:"/docs/next/types/alignment"}),"Alignment")),Object(l.b)("h2",{id:"events"},"Events"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"onScrollChanged")))}d.isMDXComponent=!0},417:function(e,t,n){"use strict";var a=n(0),i=n.n(a),l=n(414),r=n.n(l),c=n(93),b=n.n(c);const o=37,m=39;var d=function(e){const{block:t,children:n,defaultValue:l,values:c}=e,[d,s]=Object(a.useState)(l),p=[];return i.a.createElement("div",null,i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===d)[0]),i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:r()("tabs",{"tabs--block":t})},c.map(({value:e,label:t},n)=>i.a.createElement("li",{role:"tab",tabIndex:n,"aria-selected":d===e,className:r()("tab-item",b.a.tabItem,{"tab-item--active":d===e}),key:e,ref:e=>p.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case m:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case o:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(p,e.target,e),onFocus:()=>s(e),onClick:()=>s(e)},t))))};var s=function(e){return i.a.createElement("div",{style:{height:"420px"}},e.children)},p=n(415),j=n(416),O=n.n(j);t.a=function(e){const{component:t,extension:n}=e,a=e=>{return"gif"===n?i.a.createElement(O.a,{style:{maxHeight:"400px"},gif:Object(p.a)(`img/components/${t}/${e}.gif`),still:Object(p.a)(`img/components/${t}/${e}.png`)}):i.a.createElement("img",{style:{maxHeight:"400px"},src:Object(p.a)(`img/components/${t}/${e}.${n||"png"}`),alt:`${a=t,`<${a.length>0?a[0].toUpperCase()+a.slice(1):a}>`} on ${e}`});var a};return i.a.createElement("div",null,i.a.createElement(d,{defaultValue:"lumin",values:[{label:"Lumin",value:"lumin"},{label:"iOS",value:"ios"},{label:"Android",value:"android"}]},i.a.createElement(s,{value:"lumin"},a("lumin")),i.a.createElement(s,{value:"ios"},a("ios")),i.a.createElement(s,{value:"android"},a("android"))))}}}]);