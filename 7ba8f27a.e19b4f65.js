(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{197:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return c}));n(271),n(272),n(269),n(273),n(274),n(275);var a=n(270);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={id:"dropdownList",title:"DropdownList"},l=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"selected",id:"selected",children:[]}]}],o={rightToc:l},b="wrapper";function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(b,r({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"DropDownList")," creates a vertical drop-down list box. Single or multiple items can be selected from a ",Object(a.b)("inlineCode",{parentName:"p"},"DropDownList"),". Drop-down lists can be flat or nested. When you create nested drop-down lists, only the parent list and the current list are visible at the same time. Drop-down lists that overflow are automatically styled to show that there are more selections."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),'import React from "react";\nimport { View, DropdownList, DropdownListItem } from "magic-script-components";\n\nexport default class MyApp extends React.Component {\n  state = { selectedId: undefined };\n\n  onSelection = eventData => {\n    console.log("Selected items:", eventData.SelectedItems);\n  };\n\n  render() {\n    const moons = [\n      "Europa",\n      "Ganymede",\n      "Io",\n      "Callisto",\n      "Valetudo",\n      "Amalthea"\n    ];\n\n    return (\n      <View name="main-view">\n        <DropdownList\n          text="Select Moon"\n          iconColor={[0.5, 1.0, 0.5, 0.8]}\n          onSelectionChanged={this.onSelection}\n        >\n          {moons.map((moon, index) => (\n            <DropdownListItem id={index} label={moon} />\n          ))}\n        </DropdownList>\n      </View>\n    );\n  }\n}\n')),Object(a.b)("h2",{id:"common-events"},Object(a.b)("a",r({parentName:"h2"},{href:"/docs/types/events"}),"Common Events")),Object(a.b)("h2",{id:"common-properties"},Object(a.b)("a",r({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(a.b)("h2",{id:"create-properties"},"Create Properties"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",r({parentName:"tr"},{align:"center"}),"Default Value"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),"text"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",r({parentName:"tr"},{align:"center"}),"n/a"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The UTF-8 encoded text to initially set the drop-down list label to.")))),Object(a.b)("h2",{id:"element-properties"},"Element Properties"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:"left"}),"Name"),Object(a.b)("th",r({parentName:"tr"},{align:"left"}),"Type"),Object(a.b)("th",r({parentName:"tr"},{align:"left"}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"iconSize"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Sets the button icon size in scene units.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"iconColor"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"vec4"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Sets the RGBA color of the button icon.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"listMaxHeight"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Sets the maximum height of a drop-down list. The default value (",Object(a.b)("inlineCode",{parentName:"td"},"0"),") indicates there is no limit and the list grows as long as it needs to. Setting a value greater than zero will set the maximum height such that if a list is larger than the maxiumum height, the list content scrolls.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"listTextSize"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Sets the size of the list text. If no size set, the list uses the same text size used in the drop-down list menu button itself. If no text is present on the menu button, the default text size is used.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"maxCharacterLimit"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"number"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Sets the maximum amount of characters to be used per list item label before adding '...'. The default character limit is ",Object(a.b)("inlineCode",{parentName:"td"},"0"),", which means there is no limit and the labels scale to the largest item.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"multiSelect"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"boolean"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Sets the multi-select mode of the drop-down list.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"showList"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"boolean"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Shows the drop-down list or not.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"selected"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),Object(a.b)("em",{parentName:"td"},"object")),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Sets the selected state of a ",Object(a.b)("inlineCode",{parentName:"td"},"DropDownListItem"),". This uses the ID set for a particular ",Object(a.b)("inlineCode",{parentName:"td"},"DropDownListItem"),", which should be unique. If the ID is not unique, the first item with that ID is set. State are updated upon closing and reopening the list when the list is visible.")))),Object(a.b)("h3",{id:"selected"},"selected"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"{\n    id: <number>,\n    selected: <boolean>\n}\n")))}c.isMDXComponent=!0}}]);