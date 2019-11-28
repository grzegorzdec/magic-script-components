(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{253:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return o}));a(271),a(272),a(269),a(273),a(274),a(275);var n=a(270);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var b={id:"image",title:"Image"},l=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[{value:"icon options: IconType",id:"icon-options-icontype",children:[]}]},{value:"Element Properties",id:"element-properties",children:[]}],i={rightToc:l},c="wrapper";function o(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(c,r({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"description"},"Description"),Object(n.b)("p",null,"The Image component displays a 2D image from an image file."),Object(n.b)("h2",{id:"example"},"Example"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-javascript"}),'import React from "react";\nimport { View, Image, Button } from "magic-script-components";\n\nexport default class MyApp extends React.Component {\n  state = { index: 1 };\n\n  onNextClick = eventData => {\n    this.setState(state => ({ index: state.index < 4 ? state.index + 1 : 1 }));\n  };\n\n  render() {\n    const path = `res/DemoPicture${this.state.index}.jpg`;\n\n    return (\n      <View>\n        <Image\n          filePath={path}\n          height={0.25}\n          width={0.5}\n          localPosition={[0.1, 0.1, 0]}\n        />\n        <Button\n          localPosition={[0.12, -0.15, 0]}\n          width={0.25}\n          height={0.1}\n          roundness={0.5}\n          type="icon"\n          iconType="arrow-right"\n          onClick={this.onNextClick}\n        />\n      </View>\n    );\n  }\n}\n')),Object(n.b)("h2",{id:"common-events"},Object(n.b)("a",r({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(n.b)("h2",{id:"common-properties"},Object(n.b)("a",r({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(n.b)("h2",{id:"create-properties"},"Create Properties"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Image offers 3 constructors accepting different property sets.")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",r({parentName:"tr"},{align:"center"}),"Default Value"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"filePath"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The path to the file to render for the image.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"width"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The width of the image.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"height"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The height of the image.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"absolutePath"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"boolean"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),Object(n.b)("inlineCode",{parentName:"td"},"false")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Flag that pngFile is an absolute path name, instead of a relative path.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"useFrame"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"boolean"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),Object(n.b)("inlineCode",{parentName:"td"},"false")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Specifies whether the image should have a frame.")))),Object(n.b)("hr",null),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",r({parentName:"tr"},{align:"center"}),"Default Value"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"resourceId"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"BigInt"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The resource ID to render for the image.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"width"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The width of the image.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"height"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The height of the image.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"useFrame"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"boolean"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),Object(n.b)("inlineCode",{parentName:"td"},"false")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Specifies whether the image should have a frame.")))),Object(n.b)("hr",null),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",r({parentName:"tr"},{align:"center"}),"Default Value"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"icon"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The SystemIcon type for the image.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"height"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The height of the image.")))),Object(n.b)("h3",{id:"icon-options-icontype"},"icon options: ",Object(n.b)("a",r({parentName:"h3"},{href:"/docs/types/iconType"}),"IconType")),Object(n.b)("h2",{id:"element-properties"},"Element Properties"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:"left"}),"Name"),Object(n.b)("th",r({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"color"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"vec4"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Sets a color to modulate the image.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"textCoords"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"[vec2]"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Sets the texture coordinates used by the image. The texture coordinates must be a list of four coordinates representing the UV coordinates of the four corners.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"opaque"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"boolean"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Sets the opacity state of the image.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"ui"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"boolean"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Sets whether the image is rendered on UI Layer.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"imageFrameResource"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"BigInt"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Sets the model resource used for the image frame. Note: Frame models are expected to be one meter high, one meter wide, and centered at the origin.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"renderResource"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"BigInt"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Sets the render resource used for the image.")))))}o.isMDXComponent=!0}}]);