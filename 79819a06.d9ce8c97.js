(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{196:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));n(271),n(272),n(269),n(273),n(274),n(275);var a=n(270);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={id:"video",title:"Video"},l=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"viewMode options:",id:"viewmode-options",children:[]},{value:"action options:",id:"action-options",children:[]}]},{value:"Video EventData",id:"video-eventdata",children:[{value:"VideoEventType values, XPos & YPos purpose:",id:"videoeventtype-values-xpos--ypos-purpose",children:[]}]}],o={rightToc:l},b="wrapper";function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(b,i({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"The Video component represents a simple 2D rectangle on which video resources can be played."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"import React from \"react\";\n\nimport { LinearLayout, Video, Button, Text } from \"magic-script-components\";\nexport default class MyApp extends React.Component {\n  state = {\n    playEnabled: false,\n    pauseEnabled: false,\n    stopEnabled: false,\n    status: 'Initializing',\n    action: undefined\n  }\n\n  onPlayHandler = (eventData) => {\n    this.setState({playEnabled: false, pauseEnabled: true, stopEnabled: true, action: 'start'});\n  }\n\n  onPauseHandler = (eventData) => {\n    this.setState({playEnabled: true, pauseEnabled: false, stopEnabled: true, action: 'pause'});\n  }\n\n  onStopHandler = (eventData) => {\n    this.setState({playEnabled: true, pauseEnabled: false, stopEnabled: false, action: 'stop'});\n  }\n\n  onEventHandler = (eventData) => {\n    console.log(`onEventHandler:`, eventData);\n\n    const videoEventType = eventData.VideoEventType;\n\n    if ( videoEventType === undefined\n      || videoEventType === this.state.status) {\n      return;\n    }\n\n    if (videoEventType === 'buffering-update') {\n      this.setState({status: videoEventType});\n    } else if (videoEventType === 'completion') {\n      this.setState({playEnabled: true, pauseEnabled: false, stopEnabled: false, status: videoEventType});\n    } else if (videoEventType === 'error') {\n      this.setState({status: videoEventType});\n      this.setState({playEnabled: false, pauseEnabled: false, stopEnabled: false, status: videoEventType});\n    } else if (videoEventType === 'info') {\n      this.setState({status: videoEventType});\n    } else if (videoEventType === 'prepared') {\n      this.setState({playEnabled: true, pauseEnabled: false, stopEnabled: false, status: videoEventType});\n    } else if (videoEventType === 'seek-complete') {\n      this.setState({status: videoEventType});\n    } else if (videoEventType === 'video-size-changed') {\n      this.setState({status: videoEventType});\n    } else {\n      this.setState({status: 'unknown'});\n    }\n  }\n\n  render() {\n    const videoProps = {\n      videoUri: 'http://url/to/the/video/file',\n      width: 1920,\n      height: 1080,\n      onEvent: this.onEventHandler,\n      localScale: [0.960, 0.540, 0]\n    }\n\n    if (this.state.action !== undefined) {\n      videoProps.action = this.state.action;\n    }\n\n    return (\n      <LinearLayout\n        key='top-layout'\n        name='main-view'\n        defaultItemAlignment=\"center-left\"\n        defaultItemPadding={[0.03, 0.03, 0.03, 0.03]}\n        localPosition={[-0.45, 0.45, 0]}\n        orientation='vertical'\n      >\n        <Video key='video' {...videoProps}/>\n        <LinearLayout\n          key='buttons-layout'\n          defaultItemAlignment=\"center-center\"\n          defaultItemPadding={[0.02, 0.02, 0.02, 0.02]}\n          orientation='horizontal'\n        >\n          <Button key='play'  type='icon' iconType=\"play\"  height={0.1}\n            enabled={this.state.playEnabled}  onClick={this.onPlayHandler} />\n          <Button key='pause' type='icon' iconType=\"pause\" height={0.1}\n            enabled={this.state.pauseEnabled} onClick={this.onPauseHandler}/>\n          <Button key='stop'  type='icon' iconType=\"stop\"  height={0.1}\n            enabled={this.state.stopEnabled}  onClick={this.onStopHandler} />\n        </LinearLayout>\n        <Text key='status' textSize={0.05} text={`Status: ${this.state.status}`}/>\n      </LinearLayout>\n    );\n  }\n}\n")),Object(a.b)("h2",{id:"common-events"},Object(a.b)("a",i({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(a.b)("h2",{id:"common-properties"},Object(a.b)("a",i({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(a.b)("h2",{id:"create-properties"},"Create Properties"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",i({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",i({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",i({parentName:"tr"},{align:"center"}),"Default Value"),Object(a.b)("th",i({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"width"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",i({parentName:"tr"},{align:"center"}),"512"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"The surface resolution width. Supported values are between 1 and 2048.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"height"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",i({parentName:"tr"},{align:"center"}),"512"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"The surface resolution height. Supported values are between 1 and 2048.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"videoPath"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",i({parentName:"tr"},{align:"center"}),"n/a"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"The path to the file to play. Preparation for playback begins synchronously after this property is set. The video is not ready to play until a ",Object(a.b)("inlineCode",{parentName:"td"},"VideoEvent")," of type VideoEventType 'prepared' is received.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"viewMode"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",i({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"full-area")),Object(a.b)("td",i({parentName:"tr"},{align:null}),"How the video is intended to be viewed within the video component. The ",Object(a.b)("inlineCode",{parentName:"td"},"full-area")," view mode renders video over the full area for both eyes (monoscopic). The ",Object(a.b)("inlineCode",{parentName:"td"},"left-right")," view mode renders video differently per eye (stereoscopic). The default view mode is ",Object(a.b)("inlineCode",{parentName:"td"},"full-area"),".")))),Object(a.b)("h2",{id:"element-properties"},"Element Properties"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",i({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",i({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",i({parentName:"tr"},{align:"center"}),"Default Value"),Object(a.b)("th",i({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"volume"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",i({parentName:"tr"},{align:"center"}),"1"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Sets the volume of the node. The volume range is 0.0 - 1.0.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"looping"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"boolean"),Object(a.b)("td",i({parentName:"tr"},{align:"center"}),"n/a"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Sets the looping mode of the player.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"timedTextPath"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",i({parentName:"tr"},{align:"center"}),"n/a"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Sets the timed text file.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"videoUri"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",i({parentName:"tr"},{align:"center"}),"n/a"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Sets the file URI to play. This is not implemented currently. Preparation for playback begins synchronously after this property is set. The video is not ready to play until a ",Object(a.b)("inlineCode",{parentName:"td"},"VideoEvent")," of type VideoEventType 'prepared' is received.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"seekTo"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",i({parentName:"tr"},{align:"center"}),"n/a"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Seeks to the specified time position.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"action"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",i({parentName:"tr"},{align:"center"}),"n/a"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Sets the current operation: ",Object(a.b)("inlineCode",{parentName:"td"},"start"),", ",Object(a.b)("inlineCode",{parentName:"td"},"stop"),", ",Object(a.b)("inlineCode",{parentName:"td"},"pause"))))),Object(a.b)("h3",{id:"viewmode-options"},"viewMode options:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"full-area"),Object(a.b)("li",{parentName:"ul"},"left-right")),Object(a.b)("h3",{id:"action-options"},"action options:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"pause"),Object(a.b)("li",{parentName:"ul"},"start"),Object(a.b)("li",{parentName:"ul"},"stop")),Object(a.b)("h2",{id:"video-eventdata"},"Video EventData"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",i({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",i({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",i({parentName:"tr"},{align:"left"}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"AffectedNodeId"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"BigInt"),Object(a.b)("td",i({parentName:"tr"},{align:"left"}),"The ID of the video that was affected.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"XPos"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",i({parentName:"tr"},{align:"left"}),"This is based on the event type.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"YPos"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",i({parentName:"tr"},{align:"left"}),"This is based on the event type.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"VideoEventType"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",i({parentName:"tr"},{align:"left"}),"This is the video event type.")))),Object(a.b)("h3",{id:"videoeventtype-values-xpos--ypos-purpose"},"VideoEventType values, XPos & YPos purpose:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"buffering-update"),":\nX is the buffering percent, Y is unused."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"completion")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"error"),":\nX is the type of fatal error, Y is the MediaError code."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"info"),":\nX is the info or warning code, Y is an info code that provides more details."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"prepared")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"seek-complete")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"video-size-changed"),":\nX is width, Y is height.")))}p.isMDXComponent=!0}}]);