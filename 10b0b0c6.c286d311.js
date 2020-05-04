/*! For license information please see 10b0b0c6.c286d311.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(6),i=(n(0),n(412)),o=n(417),l={id:"datePicker",title:"DatePicker"},c={id:"version-3.0.0/components/datePicker",title:"DatePicker",description:"<PlatformTabs extension='gif' component='datepicker' />\u200b",source:"@site/versioned_docs/version-3.0.0/components/DatePicker.md",permalink:"/docs/3.0.0/components/datePicker",version:"3.0.0",sidebar:"version-3.0.0/docs",previous:{title:"Content",permalink:"/docs/3.0.0/components/content"},next:{title:"Dialog",permalink:"/docs/3.0.0/components/dialog"}},p=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[{value:"LabelSide values:",id:"labelside-values",children:[]}]},{value:"Element Properties",id:"element-properties",children:[]}],s={rightToc:p};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(o.a,{extension:"gif",component:"datepicker",mdxType:"PlatformTabs"}),"\u200b",Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"Dialog which allows the user to select date."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'import React from \'react\';\nimport { View, DatePicker, Scene, Prism } from \'magic-script-components\';\n\nexport default class MyApp extends React.Component {\n\n    onDateChanged = event => {\n        // event.Date, event.DateString\n        console.log("onDateChanged event received: ", event);\n    };\n\n    onDateConfirmed = event => {\n        // event.Date, event.DateString\n        console.log("onDateConfirmed event received: ", event);\n    };\n\n    render() {\n        return (\n            <Scene>\n                <Prism size={[1, 1, 0.2]} >\n                    <View name=\'main-view\' alignment={\'center-center\'} localPosition={[-0.25, 0, 0]}>\n                        <DatePicker\n                            label="Select Date"\n                            labelSide="left"\n                            color={[0.112, 0.655, 0.766, 1]}\n                            defaultDate="03/21/2019"\n                            showHint={false}\n                            height={0.3}\n                            yearMin={1990}\n                            yearMax={2020}\n                            onDateChanged={this.onDateChanged}\n                            onDateConfirmed={this.onDateConfirmed}\n                        />\n                    </View>\n                </Prism>\n            </Scene>\n        );\n    }\n}\n')),Object(i.b)("h2",{id:"common-events"},Object(i.b)("a",Object(a.a)({parentName:"h2"},{href:"/docs/3.0.0/events/commonEvents"}),"Common Events")),Object(i.b)("h2",{id:"common-properties"},Object(i.b)("a",Object(a.a)({parentName:"h2"},{href:"/docs/3.0.0/types/properties"}),"Common Properties")),Object(i.b)("h2",{id:"create-properties"},"Create Properties"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default Value"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Required"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"label"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"n/a"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"N"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The text label that appears with the date picker.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"labelSide"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"top")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"N"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Side enum specifying whether the label appears on the side or top. Only top and left are currently supported.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"defaultDate"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"(current DateTime)"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"N"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The default date to appear on the date picker instead of the placeholder strings.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yearMin"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"-1")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"N"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The minimum year available to choose from.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yearMax"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"-1")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"N"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The maximum year available to choose from.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"dateFormat"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"MM/DD/YYYY")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"N"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Format of date complies with ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://docs.magicscript.org/api_1.6.0/lumin.ui.DateFormat.html"}),"DateFormat"))))),Object(i.b)("h3",{id:"labelside-values"},"LabelSide values:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"bottom"),Object(i.b)("li",{parentName:"ul"},"left"),Object(i.b)("li",{parentName:"ul"},"right"),Object(i.b)("li",{parentName:"ul"},"top")),Object(i.b)("h2",{id:"element-properties"},"Element Properties"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default Value"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"color"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"vec4"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"N/A"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the DatePicker component's color. This does not affect the label.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"date"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"N/A"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the date manually. This only has an affect when not currently focused.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"showHint"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"false"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"To show the selected Date eg. 01/01/2019 or the format hint eg. MM/DD/YYYY. This will only have an affect when not currently focused. The full hint is always displayed on creation. Each field will continue to show the hint, ie MM or DD or YYYYY, until that field is focused. This can override that behavior and display the Date immediately if desired. The full Date will be shown when the user confirms a selected Date.")))))}b.isMDXComponent=!0},412:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?r.a.createElement(m,l({ref:t},p,{components:n})):r.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},413:function(e,t,n){"use strict";var a=n(0),r=n(35);t.a=function(){return Object(a.useContext)(r.a)}},414:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===i)for(var l in a)n.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},415:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(413);function r(e){const{siteConfig:t}=Object(a.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},416:function(e,t,n){var a;a=function(e,t){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=5)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";function a(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function r(e){var t=this.constructor.getDerivedStateFromProps(e,this.state);null!=t&&this.setState(t)}a.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0,e.exports=function(e){if(!e.prototype||!e.prototype.isReactComponent)throw new Error("Can only polyfill class components");if("function"==typeof e.getDerivedStateFromProps){if("function"==typeof e.prototype.componentWillMount)throw new Error("Cannot polyfill if componentWillMount already exists");if("function"==typeof e.prototype.componentWillReceiveProps)throw new Error("Cannot polyfill if componentWillReceiveProps already exists");e.prototype.componentWillMount=a,e.prototype.componentWillReceiveProps=r}return e}},function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a))e.push(r.apply(null,a));else if("object"===i)for(var o in a)n.call(a,o)&&a[o]&&e.push(o)}}return e.join(" ")}e.exports?e.exports=r:void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(0),o=n.n(i),l=n(2),c=n.n(l),p=n(3),s=n.n(p);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n(4);var u=function(e){var t=e.gif,n=e.still,a=e.playing,i=e.toggle,o=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["gif","still","playing","toggle"]);return r.a.createElement("div",{className:s()("gif_player",{playing:a}),onClick:i},r.a.createElement("div",{className:"play_button"}),r.a.createElement("img",b({},o,{src:a?t||n:n||t})))};u.propTypes={gif:o.a.string,still:o.a.string,playing:o.a.bool,toggle:o.a.func};var d=u;function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var f=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).state={playing:Boolean(t.autoplay),providedGif:t.gif,providedStill:t.still,actualGif:t.gif,actualStill:t.still},n.updateId=-1,n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.getDerivedStateFromProps=function(e,t){var n=t.providedGif,a=e.gif,r=t.providedStill,i=e.still;return n===a&&r===i?null:{playing:!(!a||!e.autoplay||n===a)||t.playing,providedGif:a,providedStill:i,actualGif:a,actualStill:i||n!==a?i:t.actualStill}};var i=a.prototype;return i.componentDidMount=function(){var e=this;"function"==typeof this.props.pauseRef&&this.props.pauseRef((function(){return e.setState({playing:!1})})),this.updateImages()},i.componentDidUpdate=function(e,t){this.updateImages(t);var n=this.props.onTogglePlay;t.playing!==this.state.playing&&"function"==typeof n&&n(this.state.playing)},i.updateImages=function(e){var t=this;void 0===e&&(e={});var n=this.state,a=n.providedGif,r=n.providedStill;if(a&&!r&&a!==e.providedGif){var i=++this.updateId;!function(e,t){var n=new Image;"function"==typeof t&&(n.onload=function(){return t(n)},n.setAttribute("crossOrigin","anonymous")),n.src=e}(a,(function(e){if(t.updateId===i){var n=function(e){var t=document.createElement("canvas");return"function"!=typeof t.getContext?null:(t.width=e.width,t.height=e.height,t.getContext("2d").drawImage(e,0,0),t.toDataURL())}(e);n&&t.setState({actualStill:n})}}))}},i.toggle=function(){this.setState({playing:!this.state.playing})},i.render=function(){var e=this,t=this.props,n=(t.autoplay,t.pauseRef,t.onTogglePlay,function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(t,["autoplay","pauseRef","onTogglePlay"])),a=this.state,i=a.actualGif,o=a.actualStill,l=a.playing;return r.a.createElement(d,m({},n,{gif:i,still:o,playing:l,toggle:function(){return e.toggle()}}))},a}(r.a.Component);c()(f),f.propTypes={gif:o.a.string,still:o.a.string,autoplay:o.a.bool,pauseRef:o.a.func,onTogglePlay:o.a.func},t.default=f}]).default},e.exports=a(n(8),n(0))},417:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(414),o=n.n(i),l=n(93),c=n.n(l);const p=37,s=39;var b=function(e){const{block:t,children:n,defaultValue:i,values:l}=e,[b,u]=Object(a.useState)(i),d=[];return r.a.createElement("div",null,r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===b)[0]),r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:o()("tabs",{"tabs--block":t})},l.map(({value:e,label:t},n)=>r.a.createElement("li",{role:"tab",tabIndex:n,"aria-selected":b===e,className:o()("tab-item",c.a.tabItem,{"tab-item--active":b===e}),key:e,ref:e=>d.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case s:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case p:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(d,e.target,e),onFocus:()=>u(e),onClick:()=>u(e)},t))))};var u=function(e){return r.a.createElement("div",{style:{height:"420px"}},e.children)},d=n(415),m=n(416),f=n.n(m);t.a=function(e){const{component:t,extension:n}=e,a=e=>{return"gif"===n?r.a.createElement(f.a,{style:{maxHeight:"400px"},gif:Object(d.a)(`img/components/${t}/${e}.gif`),still:Object(d.a)(`img/components/${t}/${e}.png`)}):r.a.createElement("img",{style:{maxHeight:"400px"},src:Object(d.a)(`img/components/${t}/${e}.${n||"png"}`),alt:`${a=t,`<${a.length>0?a[0].toUpperCase()+a.slice(1):a}>`} on ${e}`});var a};return r.a.createElement("div",null,r.a.createElement(b,{defaultValue:"lumin",values:[{label:"Lumin",value:"lumin"},{label:"iOS",value:"ios"},{label:"Android",value:"android"}]},r.a.createElement(u,{value:"lumin"},a("lumin")),r.a.createElement(u,{value:"ios"},a("ios")),r.a.createElement(u,{value:"android"},a("android"))))}}}]);