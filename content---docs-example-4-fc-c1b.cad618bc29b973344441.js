(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{162:function(n,e,t){"use strict";t.d(e,"a",(function(){return c})),t.d(e,"b",(function(){return l}));var r=t(0),o=t.n(r),a=o.a.createContext({}),i=function(n){var e=o.a.useContext(a),t=e;return n&&(t="function"==typeof n?n(e):Object.assign({},e,n)),t},c=function(n){var e=i(n.components);return o.a.createElement(a.Provider,{value:e},n.children)};var p="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return o.a.createElement(o.a.Fragment,{},e)}},s=Object(r.forwardRef)((function(n,e){var t=n.components,r=n.mdxType,a=n.originalType,c=n.parentName,p=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&-1===e.indexOf(r)&&(t[r]=n[r]);return t}(n,["components","mdxType","originalType","parentName"]),s=i(t),l=r,f=s[c+"."+l]||s[l]||u[l]||a;return t?o.a.createElement(f,Object.assign({},{ref:e},p,{components:t})):o.a.createElement(f,Object.assign({},{ref:e},p))}));function l(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var a=t.length,i=new Array(a);i[0]=s;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=n,c[p]="string"==typeof n?n:r,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},40:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return i})),t.d(e,"rightToc",(function(){return c})),t.d(e,"default",(function(){return s}));t(0);var r=t(162);function o(){return(o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function a(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var i={id:"example",title:"Example"},c=[],p={rightToc:c},u="wrapper";function s(n){var e=n.components,t=a(n,["components"]);return Object(r.b)(u,o({},p,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Replace ",Object(r.b)("inlineCode",{parentName:"p"},"app.js")," content with this code for more interafctive use case:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-javascript"}),'import React from "react";\nimport { View, Text, Button } from "magic-script-components";\n\nexport default class MyApp extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { counter: props.counter };\n    this.onButtonClick = this.onButtonClick.bind(this);\n  }\n\n  onButtonClick(event) {\n    this.setState(state => ({ counter: state.counter + 1 }));\n  }\n\n  render() {\n    return (\n      <View name="main-view">\n        <Text\n          textSize={0.1}\n          textColor={[0.1, 1, 0.1, 0.84]}\n          localPosition={[0, 0.25, 0]}\n        >\n          {this.state.counter}\n        </Text>\n        <Button\n          width={0.25}\n          height={0.15}\n          roundness={0.5}\n          onClick={this.onButtonClick}\n        >\n          +\n        </Button>\n      </View>\n    );\n  }\n}\n')))}s.isMDXComponent=!0}}]);