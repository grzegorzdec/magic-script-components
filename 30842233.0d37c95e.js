(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(6),c=(n(418),n(412)),o=n(417),l={id:"colorPicker",title:"ColorPicker"},i={id:"components/colorPicker",title:"ColorPicker",description:"<PlatformTabs extension='gif' component='colorpicker' />\u200b",source:"@site/../docs/components/ColorPicker.md",permalink:"/docs/next/components/colorPicker",version:"next",sidebar:"docs",previous:{title:"CircleConfirmation",permalink:"/docs/next/components/circleConfirmation"},next:{title:"Content",permalink:"/docs/next/components/content"}},b=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[]},{value:"Component specific events",id:"component-specific-events",children:[]}],m={rightToc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)(o.a,{extension:"gif",component:"colorpicker",mdxType:"PlatformTabs"}),"\u200b",Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,"Dialog which allows the user to select color."),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\nimport { View, ColorPicker, Scene, Prism } from 'magic-script-components';\n\nexport default class MyApp extends React.Component {\n  onColorChanged = event => {\n    // event.Color\n    console.log('onColorChanged event received: ', event);\n  };\n\n  onColorConfirmed = event => {\n    // event.Color\n    console.log('onColorConfirmed event received: ', event);\n  };\n\n  onColorCanceled = event => {\n    // event.Color\n    console.log('onColorCanceled event received: ', event);\n  };\n\n  render() {\n    return (\n      <Scene>\n        <Prism size={[2, 2, 1]} >\n          <View name='main-view' alignment={'center-center'}>\n            <ColorPicker\n              height={0.15}\n              color={[1, 0.5, 1, 0.8]}\n              onColorChanged={this.onColorChanged}\n              onColorConfirmed={this.onColorConfirmed}\n              onColorCanceled={this.onColorCanceled} />\n          </View>\n        </Prism>\n      </Scene>\n    );\n  }\n}\n")),Object(c.b)("h2",{id:"common-events"},Object(c.b)("a",Object(a.a)({parentName:"h2"},{href:"/docs/next/events/commonEvents"}),"Common Events")),Object(c.b)("h2",{id:"common-properties"},Object(c.b)("a",Object(a.a)({parentName:"h2"},{href:"/docs/next/types/properties"}),"Common Properties")),Object(c.b)("h2",{id:"create-properties"},"Create Properties"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default Value"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Required"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Lumin Os"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IOS"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Android"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"color"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"[1.0, 1.0, 1.0, 1.0]"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"N"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The initial color for the color picker."),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"height"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"0"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"N"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optional height for the color picker."),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))))),Object(c.b)("h2",{id:"element-properties"},"Element Properties"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default Value"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"color"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"[1.0, 1.0, 1.0, 1.0]"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The initial color for the color picker.")))),Object(c.b)("h2",{id:"component-specific-events"},"Component specific events"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Event Field"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"onColorChanged"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("inlineCode",{parentName:"td"},"Color: string")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Notifiy when color in picker has changed")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"onColorConfirmed"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("inlineCode",{parentName:"td"},"Color: string")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Notify when user confirm selected color")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"onColorCanceled"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("inlineCode",{parentName:"td"},"Color: string")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Notify when user cancel selected color")))))}p.isMDXComponent=!0},417:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(414),o=n.n(c),l=n(93),i=n.n(l);const b=37,m=39;var p=function(e){const{block:t,children:n,defaultValue:c,values:l}=e,[p,d]=Object(a.useState)(c),s=[];return r.a.createElement("div",null,r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===p)[0]),r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:o()("tabs",{"tabs--block":t})},l.map(({value:e,label:t},n)=>r.a.createElement("li",{role:"tab",tabIndex:n,"aria-selected":p===e,className:o()("tab-item",i.a.tabItem,{"tab-item--active":p===e}),key:e,ref:e=>s.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case m:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case b:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(s,e.target,e),onFocus:()=>d(e),onClick:()=>d(e)},t))))};var d=function(e){return r.a.createElement("div",{style:{height:"420px"}},e.children)},s=n(415),O=n(416),j=n.n(O);t.a=function(e){const{component:t,extension:n}=e,a=e=>{return"gif"===n?r.a.createElement(j.a,{style:{maxHeight:"400px"},gif:Object(s.a)(`img/components/${t}/${e}.gif`),still:Object(s.a)(`img/components/${t}/${e}.png`)}):r.a.createElement("img",{style:{maxHeight:"400px"},src:Object(s.a)(`img/components/${t}/${e}.${n||"png"}`),alt:`${a=t,`<${a.length>0?a[0].toUpperCase()+a.slice(1):a}>`} on ${e}`});var a};return r.a.createElement("div",null,r.a.createElement(p,{defaultValue:"lumin",values:[{label:"Lumin",value:"lumin"},{label:"iOS",value:"ios"},{label:"Android",value:"android"}]},r.a.createElement(d,{value:"lumin"},a("lumin")),r.a.createElement(d,{value:"ios"},a("ios")),r.a.createElement(d,{value:"android"},a("android"))))}}}]);