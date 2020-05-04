(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{345:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return p}));var o=n(1),a=n(6),i=(n(418),n(412)),r=n(417),c={id:"circleConfirmation",title:"CircleConfirmation"},l={id:"components/circleConfirmation",title:"CircleConfirmation",description:"<PlatformTabs extension='gif' component='circleconfirmation' />\u200b",source:"@site/../docs/components/CircleConfirmation.md",permalink:"/docs/next/components/circleConfirmation",version:"next",sidebar:"docs",previous:{title:"Button",permalink:"/docs/next/components/button"},next:{title:"ColorPicker",permalink:"/docs/next/components/colorPicker"}},m=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]}],s={rightToc:m};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(r.a,{extension:"gif",component:"circleconfirmation",mdxType:"PlatformTabs"}),"\u200b",Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"CircleConfirmation is the UI element intended to confirm powering off. The user moves the control knob using the touchpad of the Control. When the user makes a complete circle with the control knob, CircleConfirmation signals this to the client code. The client code can then power off upon confirmation receipt."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\nimport { View, CircleConfirmation, Scene, Prism } from 'magic-script-components';\n\nexport default class MyApp extends React.Component {\n    constructor(props) {\n        super(props);\n    }\n\n    onConfirmationCanceled = event => {\n        console.log(\"onConfirmationCanceled\");\n    };\n    onConfirmationUpdated = event => {\n        console.log(\"onConfirmationUpdated\");\n    };\n    onConfirmationCompleted = event => {\n        console.log(\"onConfirmationCompleted\");\n    };\n\n\n    render() {\n        return (\n            <Scene>\n                <Prism size={[2, 2, 1]} >\n                    <View name='main-view' alignment={'center-center'}>\n                        <CircleConfirmation\n                            onConfirmationCanceled={this.onConfirmationCanceled}\n                            onConfirmationCompleted={this.onConfirmationCompleted}\n                            onConfirmationUpdated={this.onConfirmationUpdated}\n                            radius={0.2}\n                        ></CircleConfirmation>\n                    </View>\n                </Prism>\n            </Scene>\n        );\n    }\n}\n")),Object(i.b)("h2",{id:"common-events"},Object(i.b)("a",Object(o.a)({parentName:"h2"},{href:"/docs/next/events/commonEvents"}),"Common Events")),Object(i.b)("h2",{id:"common-properties"},Object(i.b)("a",Object(o.a)({parentName:"h2"},{href:"/docs/next/types/properties"}),"Common Properties")),Object(i.b)("h2",{id:"create-properties"},"Create Properties"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(o.a)({parentName:"tr"},{align:"center"}),"Default Value"),Object(i.b)("th",Object(o.a)({parentName:"tr"},{align:"center"}),"Required"),Object(i.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"radius"),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:"center"}),"0.2"),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:"center"}),"N"),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"The radius of the circle the control knob travels to complete the confirmation. The default height is 0.1 (100mm). Setting the value to '0' sets the height to the default height.")))))}p.isMDXComponent=!0},417:function(e,t,n){"use strict";var o=n(0),a=n.n(o),i=n(414),r=n.n(i),c=n(93),l=n.n(c);const m=37,s=39;var p=function(e){const{block:t,children:n,defaultValue:i,values:c}=e,[p,b]=Object(o.useState)(i),d=[];return a.a.createElement("div",null,a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(n).filter(e=>e.props.value===p)[0]),a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:r()("tabs",{"tabs--block":t})},c.map(({value:e,label:t},n)=>a.a.createElement("li",{role:"tab",tabIndex:n,"aria-selected":p===e,className:r()("tab-item",l.a.tabItem,{"tab-item--active":p===e}),key:e,ref:e=>d.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case s:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case m:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(d,e.target,e),onFocus:()=>b(e),onClick:()=>b(e)},t))))};var b=function(e){return a.a.createElement("div",{style:{height:"420px"}},e.children)},d=n(415),u=n(416),f=n.n(u);t.a=function(e){const{component:t,extension:n}=e,o=e=>{return"gif"===n?a.a.createElement(f.a,{style:{maxHeight:"400px"},gif:Object(d.a)(`img/components/${t}/${e}.gif`),still:Object(d.a)(`img/components/${t}/${e}.png`)}):a.a.createElement("img",{style:{maxHeight:"400px"},src:Object(d.a)(`img/components/${t}/${e}.${n||"png"}`),alt:`${o=t,`<${o.length>0?o[0].toUpperCase()+o.slice(1):o}>`} on ${e}`});var o};return a.a.createElement("div",null,a.a.createElement(p,{defaultValue:"lumin",values:[{label:"Lumin",value:"lumin"},{label:"iOS",value:"ios"},{label:"Android",value:"android"}]},a.a.createElement(b,{value:"lumin"},o("lumin")),a.a.createElement(b,{value:"ios"},o("ios")),a.a.createElement(b,{value:"android"},o("android"))))}}}]);