(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{110:function(e,t,a){"use strict";a.d(t,"a",function(){return o}),a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},o=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)};var i="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)(function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,i=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),u=b(a),m=n,p=u[o+"."+m]||u[m]||c[m]||l;return a?r.a.createElement(p,Object.assign({},{ref:t},i,{components:a})):r.a.createElement(p,Object.assign({},{ref:t},i))});function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[i]="string"==typeof e?e:n,b[1]=o;for(var m=2;m<l;m++)b[m]=a[m];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},72:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",function(){return b}),a.d(t,"rightToc",function(){return o}),a.d(t,"default",function(){return u});a(0);var n=a(110);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b={id:"model",title:"Model"},o=[{value:"Code Example",id:"code-example",children:[]},{value:"Tag: <Model>",id:"tag-model",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"animation",id:"animation",children:[]},{value:"texture",id:"texture",children:[]},{value:"defaultTextureSlot options: TextureType",id:"defaulttextureslot-options-texturetype",children:[]},{value:"texture.textureSlot options: TextureType",id:"texturetextureslot-options-texturetype",children:[]}]}],i={rightToc:o},c="wrapper";function u(e){var t=e.components,a=l(e,["components"]);return Object(n.b)(c,r({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"A MagicScript component for 3D model."),Object(n.b)("h2",{id:"code-example"},"Code Example"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-javascript"}),'<Model\n  modelPath={"resources/turkey4.fbx"}\n  materialPath={"resources/turkey.kmat"}\n  texturePaths={["resources/turkey_baseColor.png"]}\n  defaultTextureIndex={0}\n  defaultTextureSlot={"albedo"}\n  defaultMaterialName={"turkey_material"}\n  animation={{ name: "idle" }}\n  animationPauseState={false}\n  animationPlaybackSpeed={1.0}\n/>\n')),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"FBX file format is currently supported on ML1 only.")),Object(n.b)("h2",{id:"tag-model"},"Tag: ",Object(n.b)("inlineCode",{parentName:"h2"},"<Model>")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("h4",r({parentName:"li"},{id:"lumin-runtime-native-component---modelnode"}),"Lumin Runtime native component - ModelNode"))),Object(n.b)("h2",{id:"common-events"},Object(n.b)("a",r({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(n.b)("h2",{id:"common-properties"},Object(n.b)("a",r({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(n.b)("h2",{id:"create-properties"},"Create Properties"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",r({parentName:"tr"},{align:"center"}),"Default Value"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"modelPath"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"File name of the model resource to load. By default assumed to be a relative path from the executable file.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"materialPath"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"File name of the material resource to load. By default assumed to be a relative path from the executable file.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"importScale"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"1.0"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The scale that will be applied to this resource")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"texturePaths"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"[string]"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"An array of file names of the texture resources. By default assumed to be a relative path from the executable file.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"defaultTextureIndex"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Default index from the texturePaths.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"defaultTextureSlot"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Texture Slot, eg, Albedo, Normal, etc.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"defaultMaterialName"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Name of the material.")))),Object(n.b)("h2",{id:"element-properties"},"Element Properties"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"animationPauseState"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"boolean"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Sets the animation pause state for the current model node.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"animationPlaybackSpeed"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Set the playback speed for animations.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"animationTime"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Set the current time of the animation.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"modelResourceId"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Sets the id of the resource this node will draw. The id should refer to a ModelResource.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"animation"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"object")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Set the current animation by resource + name. Some animation resources can contain multiple animations, these are addressed by name. FBX models for example may contain 1-n animations.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"texture"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"object")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Sets the texture of a given material by the new texture ID. Material should be the one applied to the Model Node.")))),Object(n.b)("h3",{id:"animation"},"animation"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"{\n    resourceId: <number>,\n    name: <string>,\n    paused: <boolean>,\n    loops: <number>\n}\n")),Object(n.b)("h3",{id:"texture"},"texture"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"{\n    textureId: <number>,\n    textureSlot: <string>,\n    materialName: <string>\n}\n")),Object(n.b)("h3",{id:"defaulttextureslot-options-texturetype"},"defaultTextureSlot options: ",Object(n.b)("a",r({parentName:"h3"},{href:"/docs/types/textureType"}),"TextureType")),Object(n.b)("h3",{id:"texturetextureslot-options-texturetype"},"texture.textureSlot options: ",Object(n.b)("a",r({parentName:"h3"},{href:"/docs/types/textureType"}),"TextureType")))}u.isMDXComponent=!0}}]);