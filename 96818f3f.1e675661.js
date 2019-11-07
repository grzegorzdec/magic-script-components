(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{171:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return c}));n(58),n(31),n(22),n(23),n(59),n(0);var a=n(284);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={id:"light",title:"Light"},o=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"type options: LightType",id:"type-options-lighttype",children:[]},{value:"useHeadPose",id:"useheadpose",children:[]}]}],l={rightToc:o},s="wrapper";function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(s,r({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"The Light component creates a light in your scene. The default light system supports one directional light, poised on the Headpose camera. This cannot be used in conjunction with other lights. Any light you add to the prism disables the default light. All light nodes default to a white color, but can be modified to use a different light color. Light intensity controls how bright the light is, which ranges from 0 to 1.0. All lights can optionally cast shadows."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),'import React from "react";\nimport { View, Light, Model, Slider } from "magic-script-components";\n\nexport default class MyApp extends React.Component {\n  state = {\n    range: 0\n  };\n\n  onRangeChangeHandler = eventData => {\n    this.setState({ range: eventData.Value });\n  };\n\n  render() {\n    return (\n      <View name="main-view">\n        <Light\n          localPosition={[0, 1, 0]}\n          type="point"\n          color={[0.1, 0.5, 1]}\n          range={this.state.range}\n        />\n        <Slider\n          localPosition={[0, 0.35, 0]}\n          width={0.8}\n          min={0}\n          max={5}\n          onSliderChanged={this.onRangeChangeHandler}\n        />\n        <Model\n          localPosition={[-0.35, -0.25, 0]}\n          localScale={[0.3, 0.3, 0.3]}\n          modelPath={"res/path/to/your/model"}\n          shader="diffuse-normal-spec"\n        />\n        <Model\n          localPosition={[0.35, -0.25, 0]}\n          localScale={[0.3, 0.3, 0.3]}\n          modelPath={"res/path/to/your/model"}\n          shader="pbr"\n        />\n      </View>\n    );\n  }\n}\n')),Object(a.b)("h2",{id:"common-events"},Object(a.b)("a",r({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(a.b)("h2",{id:"common-properties"},Object(a.b)("a",r({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(a.b)("h2",{id:"element-properties"},"Element Properties"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:"left"}),"Name"),Object(a.b)("th",r({parentName:"tr"},{align:"left"}),"Type"),Object(a.b)("th",r({parentName:"tr"},{align:"left"}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"color"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"vec4"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Sets the light color.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"intensity"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Sets the light intensity.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"range"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Sets the light range.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"spotAngle"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Sets the light spot angle (ignored if this is not a spot light).")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"type"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Sets the light type.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"castsShadows"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"boolean"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Attempts to set the light's shadow casting status. Currently the system supports only one shadow casting light. In landscape mode this light is created by the system and shared by all apps. In immersive mode, the developer is responsible for setting the shadow casting light. Only directional lights can cast shadows. If this function fails, the reason for the failure appears in the log.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"useHeadPose"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),Object(a.b)("em",{parentName:"td"},"object")),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Sets the headpose status of the light. Calling this function and setting ",Object(a.b)("inlineCode",{parentName:"td"},"on")," to ",Object(a.b)("inlineCode",{parentName:"td"},"true")," results in the light using the headpose world transform as its own transform.")))),Object(a.b)("h3",{id:"type-options-lighttype"},"type options: ",Object(a.b)("a",r({parentName:"h3"},{href:"/docs/types/lightType"}),"LightType")),Object(a.b)("h3",{id:"useheadpose"},"useHeadPose"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"on"),Object(a.b)("li",{parentName:"ul"},"offset")))}c.isMDXComponent=!0},284:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a),i=r.a.createContext({}),o=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=o(e.components);return r.a.createElement(i.Provider,{value:t},e.children)};var s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),p=o(n),b=a,d=p[l+"."+b]||p[b]||c[b]||i;return n?r.a.createElement(d,Object.assign({},{ref:t},s,{components:n})):r.a.createElement(d,Object.assign({},{ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);