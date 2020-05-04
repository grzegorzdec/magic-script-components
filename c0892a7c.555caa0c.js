/*! For license information please see c0892a7c.555caa0c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{330:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return i})),n.d(e,"metadata",(function(){return c})),n.d(e,"rightToc",(function(){return b})),n.d(e,"default",(function(){return u}));var a=n(1),r=n(6),o=(n(0),n(412)),l=n(417),i={id:"button",title:"Button"},c={id:"version-3.0.0/components/button",title:"Button",description:"<PlatformTabs component='button' />\u200b",source:"@site/versioned_docs/version-3.0.0/components/Button.md",permalink:"/docs/3.0.0/components/button",version:"3.0.0",sidebar:"version-3.0.0/docs",previous:{title:"Audio",permalink:"/docs/3.0.0/components/audio"},next:{title:"CircleConfirmation",permalink:"/docs/3.0.0/components/circleConfirmation"}},b=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events:",id:"common-events",children:[]},{value:"Create Properties",id:"create-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"buttonType",id:"buttontype",children:[]},{value:"labelSide",id:"labelside",children:[]}]}],p={rightToc:b};function u(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)(l.a,{component:"button",mdxType:"PlatformTabs"}),"\u200b",Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"\u200b\nButton represents a standard, clickable button that you can select and activate with the Control. You can set the label text and control the size and color of the button or use an icon. Button text uses the default system font, Lomino, and is white.\n\u200b"),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"\u200b"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\nimport { View, Button, Prism, Scene } from 'magic-script-components';\n\nexport default class MyApp extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  buttonClickHandler = event => {\n    console.log('Hello from buttonClickHandler');\n  };\n\n  render() {\n    return (\n      <Scene>\n        <Prism size={[1, 1, 0.2]} >\n          <View>\n            <Button\n              localPosition={[0, 0.25, 0]}\n              height={0.1}\n              onClick={this.buttonClickHandler}\n              roundness={0}\n              textSize={0.05}\n              width={0.3}\n            >Square</Button>\n\n            <Button\n              height={0.1}\n              onClick={this.buttonClickHandler}\n              roundness={1}\n              textSize={0.05}\n              width={0.3}\n            >Rounded</Button>\n\n            <Button\n              localPosition={[0, -0.25, 0]}\n              height={0.1}\n              onClick={this.buttonClickHandler}\n              roundness={0.5}\n              textColor={\"yellow\"}\n              textSize={0.05}\n              width={0.3}\n            >Yellow</Button>\n          </View>\n        </Prism>\n      </Scene>\n    );\n  }\n}\n")),Object(o.b)("div",null,Object(o.b)("h2",{id:"common-events"},"Common Events:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"onActivate"),Object(o.b)("li",{parentName:"ul"},"onPressed"),Object(o.b)("li",{parentName:"ul"},"onLongPress"),Object(o.b)("li",{parentName:"ul"},"onRelease"),Object(o.b)("li",{parentName:"ul"},"onHoverEnter"),Object(o.b)("li",{parentName:"ul"},"onHoverExit"),Object(o.b)("li",{parentName:"ul"},"onHoverMove"),Object(o.b)("li",{parentName:"ul"},"onEnabled"),Object(o.b)("li",{parentName:"ul"},"onDisabled"),Object(o.b)("li",{parentName:"ul"},"onFocusGained"),Object(o.b)("li",{parentName:"ul"},"onFocusLost"),Object(o.b)("li",{parentName:"ul"},"onFocusInput"),Object(o.b)("li",{parentName:"ul"},"onUpdate"),Object(o.b)("li",{parentName:"ul"},"onDeleted"),Object(o.b)("li",{parentName:"ul"},"onEvent"),Object(o.b)("li",{parentName:"ul"},"onUpdateLoop"))),Object(o.b)("p",null,"\u200b"),Object(o.b)("p",null,"\u200b"),Object(o.b)("h2",{id:"create-properties"},"Create Properties"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default Value"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Required"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"text"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"n/a"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"N"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The UTF-8 encoded text to set the initial value of the button label.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"width"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"0")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"N"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The width of the button, 0 for default.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"height"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"0")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"N"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The height of the button, 0 for default.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"roundness"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"1.0"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"N"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The ratio of corner rounding (0-1). Use ",Object(o.b)("inlineCode",{parentName:"td"},"1")," for a fully rounded button, such as a circle or capsule. Use ",Object(o.b)("inlineCode",{parentName:"td"},"0")," for a sharp corner.")))),Object(o.b)("p",null,"\u200b"),Object(o.b)("h2",{id:"element-properties"},"Element Properties"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default Value"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"iconColor"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"vec4"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"[0.75, 0.75, 0.75, 1.00]"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the RGBA color of the button icon.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"iconSize"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"vec2"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"[0.04, 0.04]"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the button icon size in scene units.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"text"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"n/a"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the UTF-8 encoded button text.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"textColor"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"vec4"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"[0.75, 0.75, 0.75, 1.00]"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the RGBA color of the button text.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"textSize"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"number"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"0.0167"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the text size.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"buttonType"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"n/a"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the type of button")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"labelSide"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"n/a"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets the position of label when ",Object(o.b)("inlineCode",{parentName:"td"},"buttonType")," is set to ",Object(o.b)("inlineCode",{parentName:"td"},"icon-with-label"))))),Object(o.b)("h3",{id:"buttontype"},"buttonType"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"icon"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"shows only icon")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"icon-with-label"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"shows icon and additional label when focused")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"text"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"shows only text")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"text-with-icon"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"shows text with icon")))),Object(o.b)("h3",{id:"labelside"},"labelSide"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"left"),Object(o.b)("li",{parentName:"ul"},"top"),Object(o.b)("li",{parentName:"ul"},"right"),Object(o.b)("li",{parentName:"ul"},"bottom")))}u.isMDXComponent=!0},412:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var b=r.a.createContext({}),p=function(t){var e=r.a.useContext(b),n=e;return t&&(n="function"==typeof t?t(e):i({},e,{},t)),n},u=function(t){var e=p(t.components);return r.a.createElement(b.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},d=Object(a.forwardRef)((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,b=c(t,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||s[d]||o;return n?r.a.createElement(m,i({ref:e},b,{components:n})):r.a.createElement(m,i({ref:e},b))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var b=2;b<o;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},413:function(t,e,n){"use strict";var a=n(0),r=n(35);e.a=function(){return Object(a.useContext)(r.a)}},414:function(t,e,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var a=arguments[e];if(a){var o=typeof a;if("string"===o||"number"===o)t.push(a);else if(Array.isArray(a)&&a.length){var l=r.apply(null,a);l&&t.push(l)}else if("object"===o)for(var i in a)n.call(a,i)&&a[i]&&t.push(i)}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(a=function(){return r}.apply(e,[]))||(t.exports=a)}()},415:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(413);function r(t){const{siteConfig:e}=Object(a.a)(),{baseUrl:n="/"}=e||{};if(!t)return t;return/^(https?:|\/\/)/.test(t)?t:t.startsWith("/")?n+t.slice(1):n+t}},416:function(t,e,n){var a;a=function(t,e){return function(t){var e={};function n(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=5)}([function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e,n){"use strict";function a(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=t&&this.setState(t)}function r(t){var e=this.constructor.getDerivedStateFromProps(t,this.state);null!=e&&this.setState(e)}a.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0,t.exports=function(t){if(!t.prototype||!t.prototype.isReactComponent)throw new Error("Can only polyfill class components");if("function"==typeof t.getDerivedStateFromProps){if("function"==typeof t.prototype.componentWillMount)throw new Error("Cannot polyfill if componentWillMount already exists");if("function"==typeof t.prototype.componentWillReceiveProps)throw new Error("Cannot polyfill if componentWillReceiveProps already exists");t.prototype.componentWillMount=a,t.prototype.componentWillReceiveProps=r}return t}},function(t,e,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var a=arguments[e];if(a){var o=typeof a;if("string"===o||"number"===o)t.push(a);else if(Array.isArray(a))t.push(r.apply(null,a));else if("object"===o)for(var l in a)n.call(a,l)&&a[l]&&t.push(l)}}return t.join(" ")}t.exports?t.exports=r:void 0===(a=function(){return r}.apply(e,[]))||(t.exports=a)}()},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),o=n(0),l=n.n(o),i=n(2),c=n.n(i),b=n(3),p=n.n(b);function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}n(4);var s=function(t){var e=t.gif,n=t.still,a=t.playing,o=t.toggle,l=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,["gif","still","playing","toggle"]);return r.a.createElement("div",{className:p()("gif_player",{playing:a}),onClick:o},r.a.createElement("div",{className:"play_button"}),r.a.createElement("img",u({},l,{src:a?e||n:n||e})))};s.propTypes={gif:l.a.string,still:l.a.string,playing:l.a.bool,toggle:l.a.func};var d=s;function m(){return(m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}var f=function(t){var e,n;function a(e){var n;return(n=t.call(this,e)||this).state={playing:Boolean(e.autoplay),providedGif:e.gif,providedStill:e.still,actualGif:e.gif,actualStill:e.still},n.updateId=-1,n}n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.getDerivedStateFromProps=function(t,e){var n=e.providedGif,a=t.gif,r=e.providedStill,o=t.still;return n===a&&r===o?null:{playing:!(!a||!t.autoplay||n===a)||e.playing,providedGif:a,providedStill:o,actualGif:a,actualStill:o||n!==a?o:e.actualStill}};var o=a.prototype;return o.componentDidMount=function(){var t=this;"function"==typeof this.props.pauseRef&&this.props.pauseRef((function(){return t.setState({playing:!1})})),this.updateImages()},o.componentDidUpdate=function(t,e){this.updateImages(e);var n=this.props.onTogglePlay;e.playing!==this.state.playing&&"function"==typeof n&&n(this.state.playing)},o.updateImages=function(t){var e=this;void 0===t&&(t={});var n=this.state,a=n.providedGif,r=n.providedStill;if(a&&!r&&a!==t.providedGif){var o=++this.updateId;!function(t,e){var n=new Image;"function"==typeof e&&(n.onload=function(){return e(n)},n.setAttribute("crossOrigin","anonymous")),n.src=t}(a,(function(t){if(e.updateId===o){var n=function(t){var e=document.createElement("canvas");return"function"!=typeof e.getContext?null:(e.width=t.width,e.height=t.height,e.getContext("2d").drawImage(t,0,0),e.toDataURL())}(t);n&&e.setState({actualStill:n})}}))}},o.toggle=function(){this.setState({playing:!this.state.playing})},o.render=function(){var t=this,e=this.props,n=(e.autoplay,e.pauseRef,e.onTogglePlay,function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(e,["autoplay","pauseRef","onTogglePlay"])),a=this.state,o=a.actualGif,l=a.actualStill,i=a.playing;return r.a.createElement(d,m({},n,{gif:o,still:l,playing:i,toggle:function(){return t.toggle()}}))},a}(r.a.Component);c()(f),f.propTypes={gif:l.a.string,still:l.a.string,autoplay:l.a.bool,pauseRef:l.a.func,onTogglePlay:l.a.func},e.default=f}]).default},t.exports=a(n(8),n(0))},417:function(t,e,n){"use strict";var a=n(0),r=n.n(a),o=n(414),l=n.n(o),i=n(93),c=n.n(i);const b=37,p=39;var u=function(t){const{block:e,children:n,defaultValue:o,values:i}=t,[u,s]=Object(a.useState)(o),d=[];return r.a.createElement("div",null,r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(t=>t.props.value===u)[0]),r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":e})},i.map(({value:t,label:e},n)=>r.a.createElement("li",{role:"tab",tabIndex:n,"aria-selected":u===t,className:l()("tab-item",c.a.tabItem,{"tab-item--active":u===t}),key:t,ref:t=>d.push(t),onKeyDown:t=>((t,e,n)=>{switch(n.keyCode){case p:((t,e)=>{const n=t.indexOf(e)+1;t[n]?t[n].focus():t[0].focus()})(t,e);break;case b:((t,e)=>{const n=t.indexOf(e)-1;t[n]?t[n].focus():t[t.length-1].focus()})(t,e)}})(d,t.target,t),onFocus:()=>s(t),onClick:()=>s(t)},e))))};var s=function(t){return r.a.createElement("div",{style:{height:"420px"}},t.children)},d=n(415),m=n(416),f=n.n(m);e.a=function(t){const{component:e,extension:n}=t,a=t=>{return"gif"===n?r.a.createElement(f.a,{style:{maxHeight:"400px"},gif:Object(d.a)(`img/components/${e}/${t}.gif`),still:Object(d.a)(`img/components/${e}/${t}.png`)}):r.a.createElement("img",{style:{maxHeight:"400px"},src:Object(d.a)(`img/components/${e}/${t}.${n||"png"}`),alt:`${a=e,`<${a.length>0?a[0].toUpperCase()+a.slice(1):a}>`} on ${t}`});var a};return r.a.createElement("div",null,r.a.createElement(u,{defaultValue:"lumin",values:[{label:"Lumin",value:"lumin"},{label:"iOS",value:"ios"},{label:"Android",value:"android"}]},r.a.createElement(s,{value:"lumin"},a("lumin")),r.a.createElement(s,{value:"ios"},a("ios")),r.a.createElement(s,{value:"android"},a("android"))))}}}]);