/*! For license information please see fa4a4326.e70bfb6d.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[303],{404:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(1),r=n(6),i=(n(0),n(412)),c=n(417),o={id:"spinner",title:"Spinner"},l={id:"version-3.0.0/components/spinner",title:"Spinner",description:"<PlatformTabs extension='gif' component='spinner' />\u200b",source:"@site/versioned_docs/version-3.0.0/components/Spinner.md",permalink:"/docs/3.0.0/components/spinner",version:"3.0.0",sidebar:"version-3.0.0/docs",previous:{title:"Slider",permalink:"/docs/3.0.0/components/slider"},next:{title:"Tab",permalink:"/docs/3.0.0/components/tab"}},p=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"type options: LoadingSpinnerType",id:"type-options-loadingspinnertype",children:[]}]}],b={rightToc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(c.a,{extension:"gif",component:"spinner",mdxType:"PlatformTabs"}),"\u200b",Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"The Spinner component shows the loading state using specific visual effects. There are two types of loading spinners (",Object(i.b)("inlineCode",{parentName:"p"},"sprite-animation"),", ",Object(i.b)("inlineCode",{parentName:"p"},"particle-package"),") with different effects."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'import React from "react";\nimport {\n  View,\n  Spinner,\n  Text,\n  LinearLayout,\n  Prism,\n  Scene\n} from "magic-script-components";\n\nexport default class MyApp extends React.Component {\n\n  render() {\n    return (\n      <Scene>\n        <Prism size={[1, 1, 0.2]} >\n          <View name="main-view" alignment={\'center-center\'}>\n            <LinearLayout alignment=\'center-center\' defaultItemAlignment=\'center-center\' defaultItemPadding={[0.05, 0, 0, 0]}>\n              <Spinner type="sprite-animation" height={0.25} determinate={false} />\n              <Text textSize={0.04} >Your content is loading...</Text>\n            </LinearLayout>\n          </View>\n        </Prism>\n      </Scene>\n    );\n  }\n}\n')),Object(i.b)("h2",{id:"common-events"},Object(i.b)("a",Object(a.a)({parentName:"h2"},{href:"/docs/3.0.0/events/commonEvents"}),"Common Events")),Object(i.b)("h2",{id:"common-properties"},Object(i.b)("a",Object(a.a)({parentName:"h2"},{href:"/docs/3.0.0/types/properties"}),"Common Properties")),Object(i.b)("h2",{id:"create-properties"},"Create Properties"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default Value"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Required"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Lumin"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Android"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IOS"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"type"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"n/a"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The loading spinner type (",Object(i.b)("inlineCode",{parentName:"td"},"sprite-animation")," or ",Object(i.b)("inlineCode",{parentName:"td"},"particle-package"),")."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"resourceId"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"0"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"N"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The resource ID."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"resourcePath"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"''"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"N"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The resource path in the resource (optional)."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"height"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"0")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"N"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The height of the loading spinner (optional)."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"determinate"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"false")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"N"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"If ",Object(i.b)("inlineCode",{parentName:"td"},"true"),", this creates a determinate loading spinner component using default settings."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d")))),Object(i.b)("h2",{id:"element-properties"},"Element Properties"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default Value"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Lumin"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Android"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"IOS"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"value"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"number"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"0")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets a normalized value between 0-1 for loading completeness, with ",Object(i.b)("inlineCode",{parentName:"td"},"0")," being no progress and ",Object(i.b)("inlineCode",{parentName:"td"},"1")," fully complete. This is used only when the loading spinner is determinate."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"size"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"vec2"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the loading spinner size. This affects the visual scale of all sprite-based loading spinners but has no affect on the visual scale of a particle-based spinner. Modify the particle files directly to adjust the particle effect size. This does affect, and should be used to adjust, the bounds of all loading spinners."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))))),Object(i.b)("h3",{id:"type-options-loadingspinnertype"},"type options: ",Object(i.b)("a",Object(a.a)({parentName:"h3"},{href:"/docs/3.0.0/types/loadingSpinnerType"}),"LoadingSpinnerType")))}s.isMDXComponent=!0},412:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},s=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),d=a,m=s["".concat(c,".").concat(d)]||s[d]||u[d]||i;return n?r.a.createElement(m,o({ref:t},p,{components:n})):r.a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var p=2;p<i;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},413:function(e,t,n){"use strict";var a=n(0),r=n(35);t.a=function(){return Object(a.useContext)(r.a)}},414:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var c=r.apply(null,a);c&&e.push(c)}else if("object"===i)for(var o in a)n.call(a,o)&&a[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},415:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(413);function r(e){const{siteConfig:t}=Object(a.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},416:function(e,t,n){var a;a=function(e,t){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=5)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";function a(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function r(e){var t=this.constructor.getDerivedStateFromProps(e,this.state);null!=t&&this.setState(t)}a.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0,e.exports=function(e){if(!e.prototype||!e.prototype.isReactComponent)throw new Error("Can only polyfill class components");if("function"==typeof e.getDerivedStateFromProps){if("function"==typeof e.prototype.componentWillMount)throw new Error("Cannot polyfill if componentWillMount already exists");if("function"==typeof e.prototype.componentWillReceiveProps)throw new Error("Cannot polyfill if componentWillReceiveProps already exists");e.prototype.componentWillMount=a,e.prototype.componentWillReceiveProps=r}return e}},function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a))e.push(r.apply(null,a));else if("object"===i)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?e.exports=r:void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(0),c=n.n(i),o=n(2),l=n.n(o),p=n(3),b=n.n(p);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n(4);var u=function(e){var t=e.gif,n=e.still,a=e.playing,i=e.toggle,c=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["gif","still","playing","toggle"]);return r.a.createElement("div",{className:b()("gif_player",{playing:a}),onClick:i},r.a.createElement("div",{className:"play_button"}),r.a.createElement("img",s({},c,{src:a?t||n:n||t})))};u.propTypes={gif:c.a.string,still:c.a.string,playing:c.a.bool,toggle:c.a.func};var d=u;function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var f=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).state={playing:Boolean(t.autoplay),providedGif:t.gif,providedStill:t.still,actualGif:t.gif,actualStill:t.still},n.updateId=-1,n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.getDerivedStateFromProps=function(e,t){var n=t.providedGif,a=e.gif,r=t.providedStill,i=e.still;return n===a&&r===i?null:{playing:!(!a||!e.autoplay||n===a)||t.playing,providedGif:a,providedStill:i,actualGif:a,actualStill:i||n!==a?i:t.actualStill}};var i=a.prototype;return i.componentDidMount=function(){var e=this;"function"==typeof this.props.pauseRef&&this.props.pauseRef((function(){return e.setState({playing:!1})})),this.updateImages()},i.componentDidUpdate=function(e,t){this.updateImages(t);var n=this.props.onTogglePlay;t.playing!==this.state.playing&&"function"==typeof n&&n(this.state.playing)},i.updateImages=function(e){var t=this;void 0===e&&(e={});var n=this.state,a=n.providedGif,r=n.providedStill;if(a&&!r&&a!==e.providedGif){var i=++this.updateId;!function(e,t){var n=new Image;"function"==typeof t&&(n.onload=function(){return t(n)},n.setAttribute("crossOrigin","anonymous")),n.src=e}(a,(function(e){if(t.updateId===i){var n=function(e){var t=document.createElement("canvas");return"function"!=typeof t.getContext?null:(t.width=e.width,t.height=e.height,t.getContext("2d").drawImage(e,0,0),t.toDataURL())}(e);n&&t.setState({actualStill:n})}}))}},i.toggle=function(){this.setState({playing:!this.state.playing})},i.render=function(){var e=this,t=this.props,n=(t.autoplay,t.pauseRef,t.onTogglePlay,function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(t,["autoplay","pauseRef","onTogglePlay"])),a=this.state,i=a.actualGif,c=a.actualStill,o=a.playing;return r.a.createElement(d,m({},n,{gif:i,still:c,playing:o,toggle:function(){return e.toggle()}}))},a}(r.a.Component);l()(f),f.propTypes={gif:c.a.string,still:c.a.string,autoplay:c.a.bool,pauseRef:c.a.func,onTogglePlay:c.a.func},t.default=f}]).default},e.exports=a(n(8),n(0))},417:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(414),c=n.n(i),o=n(93),l=n.n(o);const p=37,b=39;var s=function(e){const{block:t,children:n,defaultValue:i,values:o}=e,[s,u]=Object(a.useState)(i),d=[];return r.a.createElement("div",null,r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===s)[0]),r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",{"tabs--block":t})},o.map(({value:e,label:t},n)=>r.a.createElement("li",{role:"tab",tabIndex:n,"aria-selected":s===e,className:c()("tab-item",l.a.tabItem,{"tab-item--active":s===e}),key:e,ref:e=>d.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case b:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case p:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(d,e.target,e),onFocus:()=>u(e),onClick:()=>u(e)},t))))};var u=function(e){return r.a.createElement("div",{style:{height:"420px"}},e.children)},d=n(415),m=n(416),f=n.n(m);t.a=function(e){const{component:t,extension:n}=e,a=e=>{return"gif"===n?r.a.createElement(f.a,{style:{maxHeight:"400px"},gif:Object(d.a)(`img/components/${t}/${e}.gif`),still:Object(d.a)(`img/components/${t}/${e}.png`)}):r.a.createElement("img",{style:{maxHeight:"400px"},src:Object(d.a)(`img/components/${t}/${e}.${n||"png"}`),alt:`${a=t,`<${a.length>0?a[0].toUpperCase()+a.slice(1):a}>`} on ${e}`});var a};return r.a.createElement("div",null,r.a.createElement(s,{defaultValue:"lumin",values:[{label:"Lumin",value:"lumin"},{label:"iOS",value:"ios"},{label:"Android",value:"android"}]},r.a.createElement(u,{value:"lumin"},a("lumin")),r.a.createElement(u,{value:"ios"},a("ios")),r.a.createElement(u,{value:"android"},a("android"))))}}}]);