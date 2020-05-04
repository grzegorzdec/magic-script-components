(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{370:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(1),i=n(6),r=(n(418),n(412)),l=n(417),c={id:"timePicker",title:"TimePicker"},o={id:"components/timePicker",title:"TimePicker",description:"<PlatformTabs extension='gif' component='timepicker'/>\u200b",source:"@site/../docs/components/TimePicker.md",permalink:"/docs/next/components/timePicker",version:"next",sidebar:"docs",previous:{title:"TextEdit",permalink:"/docs/next/components/textEdit"},next:{title:"Toggle",permalink:"/docs/next/components/toggle"}},b=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[{value:"LabelSide values:",id:"labelside-values",children:[]}]},{value:"Element Properties",id:"element-properties",children:[]}],m={rightToc:b};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(l.a,{extension:"gif",component:"timepicker",mdxType:"PlatformTabs"}),"\u200b",Object(r.b)("h2",{id:"description"},"Description"),Object(r.b)("p",null,"The TimePicker component is a dialog that allows the user to select a time."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'import React from "react";\nimport { View, TimePicker, TextEdit, DatePicker, LinearLayout, Button, Scene, Prism } from "magic-script-components";\n\nexport default class MyApp extends React.Component {\n  constructor(props) {\n    super(props);\n\n    const date = new Date();\n    const startHour = date.getHours() + 1\n    const endHour = date.getHours() + 2\n\n    this.state = { startTime: startHour + ":00:00", endTime: endHour + ":00:00" };\n  }\n\n  onDateConfirmed = event => {\n    // event.Date, event.DateString\n    console.log("onDateConfirmed event received: ", event);\n  };\n\n  onTimeConfirmed = event => {\n    // event.Time, event.TimeString\n    console.log("onTimeConfirmed event received: ", event);\n  };\n\n  render() {\n    const { startTime, endTime } = this.state\n    return (\n      <Scene>\n        <Prism size={[1, 1, 0.2]} >\n          <LinearLayout\n            name="main-view"\n            localPosition={[0, 0, 0]}\n            alignment="center-center"\n            itemPadding={[\n              { index: 0, padding: [0, 0, 0.06, 0] },\n              { index: 2, padding: [0, 0, 0.04, 0] },\n              { index: 3, padding: [0, 0, 0.08, 0] },\n            ]}>\n            <TextEdit hint=\'Event Title\' height={0.075} textSize={0.07} width={0.7} />\n\n            <LinearLayout orientation="horizontal">\n              <DatePicker label="Starts" labelSide="left" showHint={false} onDateConfirmed={this.onDateConfirmed} />\n              <TimePicker labelSide="left" time={startTime} timeFormat={"HH:MM p"} showHint={false} onTimeConfirmed={this.onTimeConfirmed} />\n            </LinearLayout>\n\n            <LinearLayout orientation="horizontal">\n              <DatePicker label="Ends" labelSide="left" showHint={false} onDateConfirmed={this.onDateConfirmed} />\n              <TimePicker labelSide="left" time={endTime} timeFormat={"HH:MM p"} showHint={false} onTimeConfirmed={this.onTimeConfirmed} />\n            </LinearLayout>\n\n            <TextEdit hint=\'Add notes or comments\' multiline={true} height={0.15} textSize={0.05} width={0.7} />\n\n            <View>\n              <Button localPosition={[-0.2, 0, 0]} text="Accept" textSize={0.06} roundness={1} />\n              <Button localPosition={[0.2, 0, 0]} text="Reject" textSize={0.06} roundness={1} />\n            </View>\n          </LinearLayout>\n        </Prism>\n      </Scene>\n    );\n  }\n}\n')),Object(r.b)("h2",{id:"common-events"},Object(r.b)("a",Object(a.a)({parentName:"h2"},{href:"/docs/next/events/commonEvents"}),"Common Events")),Object(r.b)("h2",{id:"common-properties"},Object(r.b)("a",Object(a.a)({parentName:"h2"},{href:"/docs/next/types/properties"}),"Common Properties")),Object(r.b)("h2",{id:"create-properties"},"Create Properties"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default Value"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Required"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"label"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"n/a"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"N"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The text label that appears with the TimePicker.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"labelSide"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"top")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"N"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Side enum specifying whether the label appears on the side or top. Only ",Object(r.b)("inlineCode",{parentName:"td"},"top")," and ",Object(r.b)("inlineCode",{parentName:"td"},"left")," are currently supported.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"defaultTime"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"(current Time)"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"N"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The default time to set for the TimePicker.")))),Object(r.b)("h3",{id:"labelside-values"},"LabelSide values:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"bottom"),Object(r.b)("li",{parentName:"ul"},"left"),Object(r.b)("li",{parentName:"ul"},"right"),Object(r.b)("li",{parentName:"ul"},"top")),Object(r.b)("h2",{id:"element-properties"},"Element Properties"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default Value"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"color"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the TimePicker component's color. This doesn't affect the label.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"time"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"number"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the time. This ignores values that aren't in ",Object(r.b)("inlineCode",{parentName:"td"},"hh:mm:ss")," format.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"showHint"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"To show the selected Time eg. 12:30:00 or the format hint eg. hh:mm:ss. This will only have an affect when not currently focused. The full hint is always displayed on creation. Each field will continue to show the hint, eg. hh or mm or ss, until that field is focused. This can override that behavior and display the Time immediately if desired. The full Time will be shown when the user confirms a selected Time.")))))}s.isMDXComponent=!0},417:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(414),l=n.n(r),c=n(93),o=n.n(c);const b=37,m=39;var s=function(e){const{block:t,children:n,defaultValue:r,values:c}=e,[s,d]=Object(a.useState)(r),p=[];return i.a.createElement("div",null,i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===s)[0]),i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":t})},c.map(({value:e,label:t},n)=>i.a.createElement("li",{role:"tab",tabIndex:n,"aria-selected":s===e,className:l()("tab-item",o.a.tabItem,{"tab-item--active":s===e}),key:e,ref:e=>p.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case m:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case b:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(p,e.target,e),onFocus:()=>d(e),onClick:()=>d(e)},t))))};var d=function(e){return i.a.createElement("div",{style:{height:"420px"}},e.children)},p=n(415),u=n(416),O=n.n(u);t.a=function(e){const{component:t,extension:n}=e,a=e=>{return"gif"===n?i.a.createElement(O.a,{style:{maxHeight:"400px"},gif:Object(p.a)(`img/components/${t}/${e}.gif`),still:Object(p.a)(`img/components/${t}/${e}.png`)}):i.a.createElement("img",{style:{maxHeight:"400px"},src:Object(p.a)(`img/components/${t}/${e}.${n||"png"}`),alt:`${a=t,`<${a.length>0?a[0].toUpperCase()+a.slice(1):a}>`} on ${e}`});var a};return i.a.createElement("div",null,i.a.createElement(s,{defaultValue:"lumin",values:[{label:"Lumin",value:"lumin"},{label:"iOS",value:"ios"},{label:"Android",value:"android"}]},i.a.createElement(d,{value:"lumin"},a("lumin")),i.a.createElement(d,{value:"ios"},a("ios")),i.a.createElement(d,{value:"android"},a("android"))))}}}]);