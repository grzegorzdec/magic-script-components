/*! For license information please see 0.8f1b8156e6b522477e47.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{285:function(e,t,n){"use strict";var a=n(0),r=n(62);t.a=function(){return Object(a.useContext)(r.a)}},287:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(300);var a=n(285);function r(e){var t=(Object(a.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},288:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var c=typeof a;if("string"===c||"number"===c)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===c)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},289:function(e,t,n){"use strict";n(58);var a=n(0),r=n.n(a),c=n(40);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i=/^\/(?!\/)/;t.a=function(e){var t,n=e.to,l=e.href,s=n||l,u=i.test(s),d=!1,f="undefined"!=typeof window&&"IntersectionObserver"in window;return Object(a.useEffect)((function(){return!f&&u&&window.docusaurus.prefetch(s),function(){f&&t&&t.disconnect()}}),[s,f,u]),s&&u?r.a.createElement(c.b,o({},e,{onMouseEnter:function(){d||(window.docusaurus.preload(s),d=!0)},innerRef:function(e){var n,a;f&&e&&u&&(n=e,a=function(){window.docusaurus.prefetch(s)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),a())}))}))).observe(n))},to:s})):r.a.createElement("a",o({},e,{href:s}))}},300:function(e,t,n){"use strict";var a=n(9),r=n(24),c=n(94),o="".startsWith;a(a.P+a.F*n(95)("startsWith"),"String",{startsWith:function(e){var t=c(this,e,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return o?o.call(t,a,n):t.slice(n,n+a.length)===a}})},301:function(e,t,n){"use strict";n(58);var a=n(0),r=n.n(a),c=n(288),o=n.n(c),i=n(289),l=n(285),s=n(287);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function d(e){var t=e.item,n=Object(s.a)(t.to);return r.a.createElement(i.a,u({className:"footer__link-item"},t,t.href?{target:"_blank",rel:"noopener noreferrer",href:t.href}:{to:n}),t.label)}t.a=function(){var e=Object(l.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,n=(void 0===t?{}:t).footer,a=n||{},c=a.copyright,i=a.links,u=void 0===i?[]:i,f=a.logo,h=void 0===f?{}:f,p=Object(s.a)(h.src);return n?r.a.createElement("footer",{className:o()("footer",{"footer--dark":"dark"===n.style})},r.a.createElement("div",{className:"container"},u&&u.length>0&&r.a.createElement("div",{className:"row footer__links"},u.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e){return r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(d,{item:e}))}))):null)}))),(h||c)&&r.a.createElement("div",{className:"text--center"},h&&h.src&&r.a.createElement("div",{className:"margin-bottom--sm"},r.a.createElement("img",{className:"footer__logo",alt:h.alt,src:p})),c))):null}},302:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(324),o=n.n(c);function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){u(e,t,n[t])}))}return e}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?m(e):t}var b=[];t.a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){var n=function(n){function a(){var e,t;i(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return u(m(m(t=v(this,(e=h(a)).call.apply(e,[this].concat(r))))),"state",{scriptsLoaded:!1,scriptsLoadedSuccessfully:!1}),u(m(m(t)),"_isMounted",!1),u(m(m(t)),"loadScripts",(function(e){var n=e.filter((function(e){return!b.includes(e)})).map((function(e){return t.loadScript(e)})),a=!0;Promise.all(n).catch((function(){a=!1})).then((function(){t._isMounted&&t.setState({scriptsLoaded:!0,scriptsLoadedSuccessfully:a})}))})),u(m(m(t)),"loadScript",(function(e){b.push(e);var t=document.createElement("script");t.src=e,t.async=!0;var n=new Promise((function(n,a){t.addEventListener("load",(function(){return n(e)})),t.addEventListener("error",(function(e){return a(e)}))})).catch((function(n){var a=b.indexOf(e);throw a>=0&&b.splice(a,1),t.remove(),n}));return document.body.appendChild(t),n})),t}return f(a,n),s(a,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.loadScripts(t)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var t=d({},this.props,this.state);return r.a.createElement(e,t)}}]),a}(r.a.Component);return o()(n,e)}}},305:function(e,t,n){"use strict";n(58);var a=n(0),r=n.n(a),c=n(318),o=n.n(c),i=n(289),l=n(61),s=n(285),u=n(287),d=n(288),f=n.n(d),h=n(62),p=(n(322),function(e){var t=Object(a.useState)(!0),c=t[0],o=t[1],i=Object(a.useRef)(null),l=Object(a.useContext)(h.a);Object(a.useEffect)((function(){var e=l.siteConfig,t=(void 0===e?{}:e).themeConfig.algolia;"undefined"!=typeof window?n.e(147).then(n.t.bind(null,379,7)).then((function(e){(0,e.default)({appId:t.appId,apiKey:t.apiKey,indexName:t.indexName,inputSelector:"#search_input_react",algoliaOptions:t.algoliaOptions})})):(console.warn("Search has failed to load and now is being disabled"),o(!1))}),[]);var s=Object(a.useCallback)((function(){e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return Object(a.useEffect)((function(){e.isSearchBarExpanded&&i.current.focus()}),[e.isSearchBarExpanded]),c?r.a.createElement(a.Fragment,null,r.a.createElement("span",{role:"button",className:f()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:s,onKeyDown:s,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:f()({"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onBlur:s,ref:i})):null}),m=n(323),v=n.n(m);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function g(e){var t=Object(u.a)(e.to);return r.a.createElement(i.a,b({className:"navbar__item navbar__link"},e,e.href?{target:"_blank",rel:"noopener noreferrer",href:e.href}:{activeClassName:"navbar__link--active",to:t}),e.label)}var y=function(){return r.a.createElement("span",{className:f()(v.a.toggle,v.a.moon)})},k=function(){return r.a.createElement("span",{className:f()(v.a.toggle,v.a.sun)})};t.a=function(){var e=Object(s.a)(),t=Object(a.useState)(!1),n=t[0],c=t[1],d=Object(a.useState)(!1),h=d[0],m=d[1],_="undefined"!=typeof document?document.querySelector("html").getAttribute("data-theme"):"",E=Object(a.useState)(_),O=E[0],w=E[1],j=e.siteConfig,N=void 0===j?{}:j,C=N.baseUrl,S=N.themeConfig,x=void 0===S?{}:S,P=x.algolia,T=x.navbar,M=void 0===T?{}:T,B=M.title,L=M.logo,F=void 0===L?{}:L,I=M.links,X=void 0===I?[]:I,D=Object(a.useCallback)((function(){c(!0)}),[c]),A=Object(a.useCallback)((function(){c(!1)}),[c]);Object(a.useEffect)((function(){try{var e=localStorage.getItem("theme");w(e)}catch(t){console.error(t)}}),[]);var R=function(e){var t=e.target.checked?"dark":"";w(t);try{localStorage.setItem("theme",t)}catch(n){console.error(n)}},W=Object(u.a)(F.src);return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement("html",{lang:"en","data-theme":O})),r.a.createElement("nav",{className:f()("navbar","navbar--light","navbar--fixed-top",{"navbar--sidebar-show":n})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:D,onKeyDown:D},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(i.a,{className:"navbar__brand",to:C},null!=F&&r.a.createElement("img",{className:"navbar__logo",src:W,alt:F.alt}),null!=B&&r.a.createElement("strong",{className:h?v.a.hideLogoText:""},B)),X.filter((function(e){return"right"!==e.position})).map((function(e,t){return r.a.createElement(g,b({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},X.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(g,b({},e,{key:t}))})),r.a.createElement(o.a,{className:v.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:"dark"===O,onChange:R,icons:{checked:r.a.createElement(y,null),unchecked:r.a.createElement(k,null)}}),P&&r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement(p,{handleSearchBarToggle:m,isSearchBarExpanded:h})))),r.a.createElement("div",{role:"presentation",className:"navbar__sidebar__backdrop",onClick:function(){c(!1)}}),r.a.createElement("div",{className:"navbar__sidebar"},r.a.createElement("div",{className:"navbar__sidebar__brand"},r.a.createElement(i.a,{className:"navbar__brand",onClick:A,to:C},null!=F&&r.a.createElement("img",{className:"navbar__logo",src:W,alt:F.alt}),null!=B&&r.a.createElement("strong",null,B)),n&&r.a.createElement(o.a,{"aria-label":"Dark mode toggle in sidebar",checked:"dark"===O,onChange:R,icons:{checked:r.a.createElement(y,null),unchecked:r.a.createElement(k,null)}})),r.a.createElement("div",{className:"navbar__sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},X.map((function(e,t){return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(g,b({className:"menu__link"},e,{onClick:A})))}))))))))}},318:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(0),o=f(c),i=f(n(288)),l=f(n(17)),s=f(n(319)),u=f(n(320)),d=n(321);function f(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=(t.icons,function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["className","icons"])),c=(0,i.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",a({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:o.default.createElement(s.default,null),unchecked:o.default.createElement(u.default,null)}},h.propTypes={checked:l.default.bool,disabled:l.default.bool,defaultChecked:l.default.bool,onChange:l.default.func,onFocus:l.default.func,onBlur:l.default.func,className:l.default.string,name:l.default.string,value:l.default.string,id:l.default.string,"aria-labelledby":l.default.string,"aria-label":l.default.string,icons:l.default.oneOfType([l.default.bool,l.default.shape({checked:l.default.node,unchecked:l.default.node})])}},319:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),c=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},320:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),c=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},321:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var a=e.pageX;if(void 0!==a)return{x:a,y:e.pageY}}return{x:0,y:0}}},322:function(e,t,n){},323:function(e,t,n){e.exports={displayOnlyInLargeViewport:"displayOnlyInLargeViewport_1gtM",toggle:"toggle_16vC",moon:"moon_1N64",sun:"sun_3CZP",hideLogoText:"hideLogoText_1pX_"}},324:function(e,t,n){"use strict";var a={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c=Object.defineProperty,o=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,u=s&&s(Object);e.exports=function e(t,n,d){if("string"!=typeof n){if(u){var f=s(n);f&&f!==u&&e(t,f,d)}var h=o(n);i&&(h=h.concat(i(n)));for(var p=0;p<h.length;++p){var m=h[p];if(!(a[m]||r[m]||d&&d[m])){var v=l(n,m);try{c(t,m,v)}catch(b){}}}return t}return t}}}]);