(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{221:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return b}));n(271),n(272),n(269),n(273),n(274),n(275);var a=n(270);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={id:"pageView",title:"PageView"},o=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[]}],l={rightToc:o},p="wrapper";function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(p,r({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"The PageView component is used to switch between displaying individual page node hierarchies. Use the PageView component to toggle between individual page node hierarchies. By default, the width and height of the PageView is ",Object(a.b)("inlineCode",{parentName:"p"},"0")," to allow the page view to expand to fit the content. You can constrain one or both values. There is no padding for views by default. Unless otherwise set, all pages within the view are aligned to the top left."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),'import React from "react";\nimport { View, PageView, Content, Text, Toggle } from "magic-script-components";\n\nexport default class MyApp extends React.Component {\n  state = { pageIndex: 0 };\n\n  onSwitchHandler = eventData => {\n    this.setState({ pageIndex: eventData.On ? 1 : 0 });\n  };\n\n  render() {\n    return (\n      <View name="main-view">\n        <Toggle\n          localPosition={[0, 0.25, 0]}\n          text="Switch Page"\n          onToggleChanged={this.onSwitchHandler}\n        />\n        <PageView name="page-view" visiblePage={this.state.pageIndex}>\n          <Content name="page-0">\n            <Text textSize={0.1}>Page One</Text>\n          </Content>\n          <Content name="page-1">\n            <Text textSize={0.1}>Page Two</Text>\n          </Content>\n        </PageView>\n      </View>\n    );\n  }\n}\n')),Object(a.b)("h2",{id:"common-events"},Object(a.b)("a",r({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(a.b)("h2",{id:"common-properties"},Object(a.b)("a",r({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(a.b)("h2",{id:"create-properties"},"Create Properties"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",r({parentName:"tr"},{align:"center"}),"Default Value"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"width"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"0")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The width of the page view. The default (",Object(a.b)("inlineCode",{parentName:"td"},"0"),") allows the view to expand to fit the content.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"height"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"0")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The height of the page view. The default (",Object(a.b)("inlineCode",{parentName:"td"},"0"),") allows the view to expand to fit the content.")))),Object(a.b)("h2",{id:"element-properties"},"Element Properties"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"visiblePage"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The index (zero based) of the added pages")))))}b.isMDXComponent=!0}}]);