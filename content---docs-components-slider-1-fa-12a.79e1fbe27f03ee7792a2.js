(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{264:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));n(58),n(31),n(22),n(23),n(59),n(0);var a=n(284);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={id:"slider",title:"Slider"},l=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[]}],o={rightToc:l},s="wrapper";function d(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(s,r({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"The Slider component places a slider into your prism. Use sliders to provide a visual reference to a specific range and the current value within that range, like a volume slider. Sliders can use either icons or labels. The default slider is white and uses 100% opacity for the active part of the slider. Sliders inherit the width from a parent component, such as ",Object(a.b)("inlineCode",{parentName:"p"},"RectLayout"),". If the slider does not have a parent, it is one meter wide unless otherwise constrained. The default minimum and maximum values in the range are ",Object(a.b)("inlineCode",{parentName:"p"},"0")," and ",Object(a.b)("inlineCode",{parentName:"p"},"1"),"."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),'import React from "react";\nimport { Text, Slider, Image, LinearLayout } from "magic-script-components";\n\nexport default class MyApp extends React.Component {\n  state = {\n    red: undefined,\n    green: undefined,\n    blue: undefined,\n    alpha: undefined\n  };\n\n  onRedChanged = eventData => this.setState({ red: eventData.Value });\n  onGreenChanged = eventData => this.setState({ green: eventData.Value });\n  onBlueChanged = eventData => this.setState({ blue: eventData.Value });\n  onAlphaChanged = eventData => this.setState({ alpha: eventData.Value });\n\n  _setInitialSliderValue = (sliderProps, currentValue, initialValue) => {\n    if (currentValue === undefined) {\n      sliderProps.value = initialValue;\n    }\n    return sliderProps;\n  };\n\n  render() {\n    const sliderProps = { width: 0.8, height: 0.02, min: 0, max: 1 };\n    const redProps = this._setInitialSliderValue(\n      { ...sliderProps },\n      this.state.red,\n      0.5\n    );\n    const greenProps = this._setInitialSliderValue(\n      { ...sliderProps },\n      this.state.green,\n      0.5\n    );\n    const blueProps = this._setInitialSliderValue(\n      { ...sliderProps },\n      this.state.blue,\n      0.5\n    );\n    const alphaProps = this._setInitialSliderValue(\n      { ...sliderProps },\n      this.state.alpha,\n      0.5\n    );\n\n    const color = [\n      this.state.red === undefined ? redProps.value : this.state.red,\n      this.state.green === undefined ? greenProps.value : this.state.green,\n      this.state.blue === undefined ? blueProps.value : this.state.blue,\n      this.state.alpha === undefined ? alphaProps.value : this.state.alpha\n    ];\n\n    return (\n      <LinearLayout\n        name="main-view"\n        orientation="vertical"\n        defaultItemAlignment="center-left"\n        defaultItemPadding={[0.012, 0.012, 0.012, 0.012]}\n        localPosition={[-0.45, 0.45, 0]}\n      >\n        <Image width={0.8} height={0.3} color={color} useFrame={true} />\n        <Text textSize={0.05} textColor={[1, 0, 0, 1]} text="Red" />\n        <Slider {...redProps} onSliderChanged={this.onRedChanged} />\n        <Text textSize={0.05} textColor={[0, 1, 0, 1]} text="Green" />\n        <Slider {...greenProps} onSliderChanged={this.onGreenChanged} />\n        <Text textSize={0.05} textColor={[0, 0, 1, 1]} text="Blue" />\n        <Slider {...blueProps} onSliderChanged={this.onBlueChanged} />\n        <Text textSize={0.05} text="Alpha" />\n        <Slider {...alphaProps} onSliderChanged={this.onAlphaChanged} />\n      </LinearLayout>\n    );\n  }\n}\n')),Object(a.b)("h2",{id:"common-events"},Object(a.b)("a",r({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(a.b)("h2",{id:"common-properties"},Object(a.b)("a",r({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(a.b)("h2",{id:"create-properties"},"Create Properties"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",r({parentName:"tr"},{align:"center"}),"Default Value"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"width"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The width of the slider.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"height"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"0"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The height of the slider.")))),Object(a.b)("h2",{id:"element-properties"},"Element Properties"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:"left"}),"Name"),Object(a.b)("th",r({parentName:"tr"},{align:"left"}),"Type"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"min"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the minimum slider value. This value is set only if it is less than the slider's maximum value. The default value is ",Object(a.b)("inlineCode",{parentName:"td"},"0"),".")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"max"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the maximum slider value. This value is set only if it is greater than the slider's minimum value. The default value is ",Object(a.b)("inlineCode",{parentName:"td"},"1"),".")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"value"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Sets the slider value. The value will be clamped within the current minimum and maximum range.")))))}d.isMDXComponent=!0},284:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c}));var a=n(0),r=n.n(a),i=r.a.createContext({}),l=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},o=function(e){var t=l(e.components);return r.a.createElement(i.Provider,{value:t},e.children)};var s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),p=l(n),c=a,u=p[o+"."+c]||p[c]||d[c]||i;return n?r.a.createElement(u,Object.assign({},{ref:t},s,{components:n})):r.a.createElement(u,Object.assign({},{ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);