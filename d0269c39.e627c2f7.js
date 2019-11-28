(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{241:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return i})),a.d(e,"rightToc",(function(){return l})),a.d(e,"default",(function(){return c}));a(271),a(272),a(269),a(273),a(274),a(275);var n=a(270);function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}var i={id:"textEdit",title:"TextEdit"},l=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]},{value:"Aditional (optional) parameters for create step.",id:"aditional-optional-parameters-for-create-step",children:[{value:"fontDescription",id:"fontdescription",children:[]},{value:"AdvanceDirection options: AdvanceDirection",id:"advancedirection-options-advancedirection",children:[]},{value:"FlowDirection options: FlowDirection",id:"flowdirection-options-flowdirection",children:[]},{value:"Quality options: Quality",id:"quality-options-quality",children:[]}]},{value:"Element Properties",id:"element-properties",children:[{value:"fontParameters",id:"fontparameters",children:[]},{value:"style options: FontStyle",id:"style-options-fontstyle",children:[]},{value:"weight options: FontWeight",id:"weight-options-fontweight",children:[]},{value:"textAlignment options: HorizontalTextAlignment",id:"textalignment-options-horizontaltextalignment",children:[]},{value:"cursorEdgeScrollMode options: CursorEdgeScrollMode",id:"cursoredgescrollmode-options-cursoredgescrollmode",children:[]},{value:"scrollBarVisibility options: ScrollBarVisibility",id:"scrollbarvisibility-options-scrollbarvisibility",children:[]},{value:"textEntry options: TextEntryMode",id:"textentry-options-textentrymode",children:[]}]}],b={rightToc:l},o="wrapper";function c(t){var e=t.components,a=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,["components"]);return Object(n.b)(o,r({},b,a,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"description"},"Description"),Object(n.b)("p",null,"The TextEdit component creates an editable text box for text entry on a single or multiple lines. The last line includes a white underline to clearly delineate that the text box is editable. Include a UTF-8 compatible font in your project if you expect characters outside of the ISO Latin-1 character set."),Object(n.b)("h2",{id:"example"},"Example"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-javascript"}),'<TextEdit\n  charSpacing={0.02}\n  height={0.08}\n  lineSpacing={0.3}\n  localPosition={[-0.9, 0.5, 0]}\n  padding={[0.5, 0.3, 0.5, 0.3]}\n  text="Edit\xa0Me"\n  textAlignment="center"\n  textSize={0.03}\n  width={0.4}\n/>\n')),Object(n.b)("h2",{id:"common-events"},Object(n.b)("a",r({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(n.b)("h2",{id:"common-properties"},Object(n.b)("a",r({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(n.b)("h2",{id:"create-properties"},"Create Properties"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",r({parentName:"tr"},{align:"center"}),"Default Value"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"text"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The initial UTF-8 encoded text in the text box.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"width"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The width of the text edit area.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"height"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The height of the text edit area.")))),Object(n.b)("h2",{id:"aditional-optional-parameters-for-create-step"},"Aditional (optional) parameters for create step."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",r({parentName:"tr"},{align:"center"}),"Default Value"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"fontDescription"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"object")),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"A 2D font that is a font rendered onto a planar image (whatever the format), as opposed to a 3D model of the glyphs or other graphical representation.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"filePath"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The font file from which the glyphs are loaded. By default this is assumed to be a relative path from the executable file.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"absolutePath"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"boolean"),Object(n.b)("td",r({parentName:"tr"},{align:"center"}),Object(n.b)("inlineCode",{parentName:"td"},"false")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Flags that the ",Object(n.b)("inlineCode",{parentName:"td"},"filePath")," is an absolute path name, instead of a relative path.")))),Object(n.b)("h3",{id:"fontdescription"},"fontDescription"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"{\n    advanceDirection: <string>,\n    flowDirection: <string>,\n    tileSize: <number>,\n    quality: <string>,\n    minAlpha: <number>,\n}\n")),Object(n.b)("h3",{id:"advancedirection-options-advancedirection"},"AdvanceDirection options: ",Object(n.b)("a",r({parentName:"h3"},{href:"/docs/types/advanceDirection"}),"AdvanceDirection")),Object(n.b)("h3",{id:"flowdirection-options-flowdirection"},"FlowDirection options: ",Object(n.b)("a",r({parentName:"h3"},{href:"/docs/types/flowDirection"}),"FlowDirection")),Object(n.b)("h3",{id:"quality-options-quality"},"Quality options: ",Object(n.b)("a",r({parentName:"h3"},{href:"/docs/types/quality"}),"Quality")),Object(n.b)("h2",{id:"element-properties"},"Element Properties"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:"left"}),"Name"),Object(n.b)("th",r({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"charLimit"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"number"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Sets the maximum number of characters allowed in the text box.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"charSpacing"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"number"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Sets the additional character spacing that is applied between characters. Note that ",Object(n.b)("inlineCode",{parentName:"td"},"0")," is the default spacing.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"cursorEdgeScrollMode"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Sets the cursor edge scroll mode for this text box.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"style"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Sets the style of the Magic Leap font.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"weight"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Sets he weight (i.e., thickness) of the Magic Leap font.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"hint"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Sets the UTF-8 encoded text for hint text.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"hintColor"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"vec4"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Sets the text color of the hint.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"lineSpacing"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"number"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Sets the line spacing to adjust the distance between lines of text; e.g., use 1 for single-spaced text, 2 for double-spaced text. The default is 1.0.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"multiline"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"boolean"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Sets whether the text box is in multiline mode or not. The default is single line.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"password"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"boolean"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Sets whether the text box is in password mode or not.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"scrollBarVisibility"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Creates and shows the scrollbar in the vertical direction. If a scrollbar already exists, only its visibility is affected. This function also attaches the scrollbar to the ScrollView that manages it.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"scrolling"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"boolean"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Sets whether scrolling is enabled or not.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"scrollSpeed"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"number"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Sets the scroll speed in scene units per second.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"scrollValue"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"number"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Manually scrolls the ",Object(n.b)("inlineCode",{parentName:"td"},"textEdit")," content position using a normalized value between 0 and 1.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"selectedBegin"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"number"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The first index for text selection.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"selectedEnd"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"number"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"The last index for text selection.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"text"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Sets the UTF-8 encoded text.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"textAlignment"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Aligns the text to the left, center, or right or justifies it.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"textColor"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"vec4"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Sets the RGBA color of the rendered text.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"textEntry"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Sets the current text entry mode of the text box.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"textPadding"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"vec4"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Sets the padding around the text within the text edit area. This defaults to half the text size unless explicitly set. The padding order is: top, right, bottom, left.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"textSize"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"number"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Sets the text render size height in scene units.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"fontParams"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),Object(n.b)("em",{parentName:"td"},"object")),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Sets the font parameters, including syle, weight, pixel size, and tracking. This uses one of the default sets of Magic Leap font resources that support style and weight.")))),Object(n.b)("h3",{id:"fontparameters"},"fontParameters"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"{\n    style: string,\n    weight: string,\n    fontSize: number,\n    tracking: number,\n    allCaps: boolean\n}\n")),Object(n.b)("h3",{id:"style-options-fontstyle"},"style options: ",Object(n.b)("a",r({parentName:"h3"},{href:"/docs/types/fontStyle"}),"FontStyle")),Object(n.b)("h3",{id:"weight-options-fontweight"},"weight options: ",Object(n.b)("a",r({parentName:"h3"},{href:"/docs/types/fontWeight"}),"FontWeight")),Object(n.b)("h3",{id:"textalignment-options-horizontaltextalignment"},"textAlignment options: ",Object(n.b)("a",r({parentName:"h3"},{href:"/docs/types/horizontalTextAlignment"}),"HorizontalTextAlignment")),Object(n.b)("h3",{id:"cursoredgescrollmode-options-cursoredgescrollmode"},"cursorEdgeScrollMode options: ",Object(n.b)("a",r({parentName:"h3"},{href:"/docs/types/cursorEdgeScrollMode"}),"CursorEdgeScrollMode")),Object(n.b)("h3",{id:"scrollbarvisibility-options-scrollbarvisibility"},"scrollBarVisibility options: ",Object(n.b)("a",r({parentName:"h3"},{href:"/docs/types/scrollBarVisibility"}),"ScrollBarVisibility")),Object(n.b)("h3",{id:"textentry-options-textentrymode"},"textEntry options: ",Object(n.b)("a",r({parentName:"h3"},{href:"/docs/types/textEntryMode"}),"TextEntryMode")))}c.isMDXComponent=!0}}]);