(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));n(0);var r=n(180);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o={id:"button",title:"Button"},b=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[]}],c={rightToc:b},i="wrapper";function p(e){var t=e.components,n=l(e,["components"]);return Object(r.b)(i,a({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"description"},"Description"),Object(r.b)("p",null,"Button represents a standard, clickable button that you can select and activate with the Control. You can set the label text and control the size and color of the button or use an icon. Button text uses the default system font, Lomino, and is white."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-javascript"}),'class MyApp extends React.Component {\n  buttonClickHandler = event => {\n    console.log("Hello from buttonClickHandler");\n  };\n\n  render() {\n    return (\n      <View>\n        <Button\n          height={0.1}\n          localPosition={[0.4, -0.2, 0]}\n          onClick={this.buttonClickHandler}\n          roundness={0.7}\n          textSize={0.03}\n          width={0.3}\n        >\n          Click Me\n        </Button>\n      </View>\n    );\n  }\n}\n')),Object(r.b)("h2",{id:"common-events"},Object(r.b)("a",a({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(r.b)("h2",{id:"common-properties"},Object(r.b)("a",a({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(r.b)("h2",{id:"create-properties"},"Create Properties"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",a({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",a({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",a({parentName:"tr"},{align:"center"}),"Default Value"),Object(r.b)("th",a({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"text"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",a({parentName:"tr"},{align:"center"}),"n/a"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"The UTF-8 encoded text to initially set the UiButton label to.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"width"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"number"),Object(r.b)("td",a({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"0")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"The width of the button, 0 for default.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"height"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"number"),Object(r.b)("td",a({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"0")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"The height of the button, 0 for default.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),"roundness"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"number"),Object(r.b)("td",a({parentName:"tr"},{align:"center"}),"1.0"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"The ratio of corner rounding (0-1). 1 ","[default]"," = fully rounded (circle, capsule), 0 = sharp corner.")))),Object(r.b)("h2",{id:"element-properties"},"Element Properties"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",a({parentName:"tr"},{align:"left"}),"Name"),Object(r.b)("th",a({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",a({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"iconColor"),Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"vec4"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"Sets the RGBA color of the button icon.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"iconSize"),Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"vec2"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"Sets the button icon size in scene units.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"text"),Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"string"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"Sets the UTF-8 encoded button text.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"textColor"),Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"vec4"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"Sets the RGBA color of the button text.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"textSize"),Object(r.b)("td",a({parentName:"tr"},{align:"left"}),"number"),Object(r.b)("td",a({parentName:"tr"},{align:null}),"Size of text.")))))}p.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r),l=a.a.createContext({}),o=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},b=function(e){var t=o(e.components);return a.a.createElement(l.Provider,{value:t},e.children)};var c="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,b=e.parentName,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),p=o(n),d=r,u=p[b+"."+d]||p[d]||i[d]||l;return n?a.a.createElement(u,Object.assign({},{ref:t},c,{components:n})):a.a.createElement(u,Object.assign({},{ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b[c]="string"==typeof e?e:r,o[1]=b;for(var d=2;d<l;d++)o[d]=n[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);