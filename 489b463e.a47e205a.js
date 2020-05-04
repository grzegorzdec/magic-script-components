(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{193:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return g})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(6),o=(n(0),n(412)),l={id:"toggleGroup",title:"ToggleGroup"},g={id:"version-2.0.2/components/toggleGroup",title:"ToggleGroup",description:"## Description",source:"@site/versioned_docs/version-2.0.2/components/ToggleGroup.md",permalink:"/docs/2.0.2/components/toggleGroup",version:"2.0.2",sidebar:"version-2.0.2/docs",previous:{title:"Toggle",permalink:"/docs/2.0.2/components/toggle"},next:{title:"Video",permalink:"/docs/2.0.2/components/video"}},c=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[]}],i={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"ToggleGroup represents a group of standard, clickable toggles."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import React from \"react\";\nimport { GridLayout, LinearLayout, ToggleGroup, Toggle } from \"magic-script-components\";\nexport default class MyApp extends React.Component {\n  onChangedHandler = (eventData, message) => {\n    console.log(`Toggle: ${message}`);\n  };\n\n  render() {\n    return (\n      <GridLayout\n        name='main-view'\n        columns={2}\n        rows={2}\n        defaultItemAlignment=\"center-center\"\n        defaultItemPadding={[0.03, 0.03, 0.03, 0.03]}\n        // localPosition={[-0.35, 0.35, 0]}\n        alignment='center-center'\n      >\n        <ToggleGroup key='regular-toggles-group'>\n          <LinearLayout\n            key='regular-toggles'\n            defaultItemAlignment=\"center-right\"\n            defaultItemPadding={[0.01, 0.01, 0.01, 0.01]}\n          >\n            <Toggle key='TA' text=\"Toggle A\" onToggleChanged={(eventData) => this.onChangedHandler(eventData, 'TA')} />\n            <Toggle key='TB' text=\"Toggle B\" onToggleChanged={(eventData) => this.onChangedHandler(eventData, 'TB')} />\n            <Toggle key='TC' text=\"Toggle C\" onToggleChanged={(eventData) => this.onChangedHandler(eventData, 'TC')} />\n          </LinearLayout>\n        </ToggleGroup>\n        <ToggleGroup key='radio-toggles-group'>\n          <LinearLayout\n            key='radio-toggles'\n            defaultItemAlignment=\"center-right\"\n            defaultItemPadding={[0.01, 0.01, 0.01, 0.01]}\n          >\n            <Toggle key='RA' type='radio' text=\"Radio A\" onToggleChanged={(eventData) => this.onChangedHandler(eventData, 'RA')} />\n            <Toggle key='RB' type='radio' text=\"Radio B\" onToggleChanged={(eventData) => this.onChangedHandler(eventData, 'RB')} />\n            <Toggle key='RC' type='radio' text=\"Radio C\" onToggleChanged={(eventData) => this.onChangedHandler(eventData, 'RC')} />\n          </LinearLayout>\n        </ToggleGroup>\n        <ToggleGroup key='regular-toggles-multi-group' allowMultipleOn={true}>\n          <LinearLayout\n            key='regular-toggles-multi'\n            defaultItemAlignment=\"center-right\"\n            defaultItemPadding={[0.01, 0.01, 0.01, 0.01]}\n          >\n            <Toggle key='TMA' text=\"Toggle MA\" onToggleChanged={(eventData) => this.onChangedHandler(eventData, 'TMA')} />\n            <Toggle key='TMB' text=\"Toggle MB\" onToggleChanged={(eventData) => this.onChangedHandler(eventData, 'TMB')} />\n            <Toggle key='TMC' text=\"Toggle MC\" onToggleChanged={(eventData) => this.onChangedHandler(eventData, 'TMC')} />\n          </LinearLayout>\n        </ToggleGroup>\n        <ToggleGroup key='checkbox-toggles-group' allowMultipleOn={true}>\n          <LinearLayout\n            key='checkbox-toggles'\n            defaultItemAlignment=\"center-right\"\n            defaultItemPadding={[0.01, 0.01, 0.01, 0.01]}\n          >\n            <Toggle key='CA' type='checkbox' text=\"Checkbox A\" onToggleChanged={(eventData) => this.onChangedHandler(eventData, 'CA')} />\n            <Toggle key='CB' type='checkbox' text=\"Checkbox B\" onToggleChanged={(eventData) => this.onChangedHandler(eventData, 'CB')} />\n            <Toggle key='CC' type='checkbox' text=\"Checkbox C\" onToggleChanged={(eventData) => this.onChangedHandler(eventData, 'CC')} />\n          </LinearLayout>\n        </ToggleGroup>\n      </GridLayout>\n    );\n  }\n}\n\n")),Object(o.b)("h2",{id:"common-events"},Object(o.b)("a",Object(a.a)({parentName:"h2"},{href:"/docs/2.0.2/types/events"}),"Common Events")),Object(o.b)("h2",{id:"common-properties"},Object(o.b)("a",Object(a.a)({parentName:"h2"},{href:"/docs/2.0.2/types/properties"}),"Common Properties")),Object(o.b)("h2",{id:"create-properties"},"Create Properties"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default Value"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"allowMultipleOn"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"false")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The default does not allow multiple toggles ON.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"allowAllOff"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"false")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The default does not allow all toggles OFF.")))),Object(o.b)("h2",{id:"element-properties"},"Element Properties"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"allowMultipleOn"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Flags whether multiple toggles can be switched ON in the toggle group.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"allowAllOff"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Flags whether all toggles can be switched OFF in the toggle group.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"allTogglesOff"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Switches all toggles OFF regardless of whether all toggles can be switched off or not.")))))}b.isMDXComponent=!0},412:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),b=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):g({},t,{},e)),n},p=function(e){var t=b(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,s=p["".concat(l,".").concat(u)]||p[u]||d[u]||o;return n?r.a.createElement(s,g({ref:t},i,{components:n})):r.a.createElement(s,g({ref:t},i))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var g={};for(var c in t)hasOwnProperty.call(t,c)&&(g[c]=t[c]);g.originalType=e,g.mdxType="string"==typeof e?e:a,l[1]=g;for(var i=2;i<o;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);