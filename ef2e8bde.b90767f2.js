(window.webpackJsonp=window.webpackJsonp||[]).push([[292],{393:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(1),r=a(6),b=(a(0),a(412)),c={id:"audio",title:"Audio"},i={id:"version-latest/components/audio",title:"Audio",description:"## Description",source:"@site/versioned_docs/version-latest/components/Audio.md",permalink:"/docs/components/audio",version:"latest",sidebar:"version-latest/docs",previous:{title:"Prism",permalink:"/docs/components/prism"},next:{title:"Button",permalink:"/docs/components/button"}},l=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Common Events",id:"common-events",children:[]},{value:"Common Properties",id:"common-properties",children:[]},{value:"Create Properties",id:"create-properties",children:[]},{value:"Element Properties",id:"element-properties",children:[{value:"spatialSoundDirection",id:"spatialsounddirection",children:[]},{value:"spatialSoundDirectSendLevels",id:"spatialsounddirectsendlevels",children:[]},{value:"spatialSoundDistance",id:"spatialsounddistance",children:[]},{value:"spatialSoundPosition",id:"spatialsoundposition",children:[]},{value:"spatialSoundRadiation",id:"spatialsoundradiation",children:[]},{value:"spatialSoundRoomSendLevels",id:"spatialsoundroomsendlevels",children:[]}]}],o={rightToc:l};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"description"},"Description"),Object(b.b)("p",null,"The Audio component allows you to play audio resources and 3D sound effects. It supports spatialization and basic controls - such as stop and start - using WAV, MP3, and OGG format files. ",Object(b.b)("em",{parentName:"p"},"Loaded file")," and ",Object(b.b)("em",{parentName:"p"},"Streamed file")," audio components require an audio resource, which is the audio file you want to play."),Object(b.b)("h2",{id:"example"},"Example"),Object(b.b)("blockquote",null,Object(b.b)("table",{parentName:"blockquote"},Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u26a0\ufe0f Don't forget to include the ",Object(b.b)("inlineCode",{parentName:"th"},"resources")," in your ",Object(b.b)("inlineCode",{parentName:"th"},"app.package")," file!"))),Object(b.b)("tbody",{parentName:"table"}))),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'import React from "react";\nimport { View, Audio,Scene, Prism  } from "magic-script-components";\n\nexport default class MyApp extends React.Component {\n  render() {\n    return (\n      <Prism size={[1.0, 1.0, 1.0]} >\n        <Scene>\n          <View name="main-view">\n            <Audio\n              fileName="resources/your-audio-file.mp3"\n              loadFile={true}\n              action="start"\n            />\n          </View>\n        </Scene>\n      </Prism>\n    );\n  }\n}\n')),Object(b.b)("h2",{id:"common-events"},Object(b.b)("a",Object(n.a)({parentName:"h2"},{href:"/docs/events/commonEvents"}),"Common Events")),Object(b.b)("h2",{id:"common-properties"},Object(b.b)("a",Object(n.a)({parentName:"h2"},{href:"/docs/types/properties"}),"Common Properties")),Object(b.b)("h2",{id:"create-properties"},"Create Properties"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default Value"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Lumin"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Android"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IOS"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"fileName"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"n/a"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Y"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"File name of the resource to load. By default this is assumed to be a relative path from the executable file."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"loadFile"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"N"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Loads the entire audio file in the memory. For large files sizes you may use the ",Object(b.b)("inlineCode",{parentName:"td"},"createStreamedFileAudioResource")," method instead."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"absolutePath"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"N"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flags that fileName as an absolute path name instead of a relative path."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"descriptor"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"-1")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"N"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional file descriptor that points to a resource."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"basePath"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"null")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"N"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If you are loading a resource from an absolute path, and that path is ",Object(b.b)("strong",{parentName:"td"},"not")," the current process path, set this field to the equivalent base path in the other client directory. This allows path relative dependencies to solve a fully qualified (absolute) path outside of the current process. This value defaults to the currently executing process root."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"autoDestroy"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"N"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If ",Object(b.b)("inlineCode",{parentName:"td"},"true"),", play the sound once and delete the node. If false the audio node will stay until the scenegraph is destroyed."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dynamicDecode"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"N"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If ",Object(b.b)("inlineCode",{parentName:"td"},"true"),", the file resource is compressed and is decoded when playing. If ",Object(b.b)("inlineCode",{parentName:"td"},"false"),", the file resource is uncompressed PCM data."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))),Object(b.b)("h2",{id:"element-properties"},"Element Properties"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default Value"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Lumin"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Android"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"IOS"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"action"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"n/a"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets the current operation: ",Object(b.b)("inlineCode",{parentName:"td"},"start"),", ",Object(b.b)("inlineCode",{parentName:"td"},"stop"),", ",Object(b.b)("inlineCode",{parentName:"td"},"pause"),", ",Object(b.b)("inlineCode",{parentName:"td"},"resume")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"soundLooping"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets audio playback to repeat mode. If enabled, audio plays from the start after reaching the end until disabled. When audio is created this is disabled by default."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"soundMute"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Mutes or unmutes the sound."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"soundPitch"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"1.0")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets the sound pitch. The range of the pitch is 0.5 to 2.0, with 0.5 being one octave down and 2.0 being one octave up."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"soundVolumeLinear"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"n/a"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets the audio volume. The range of the volume is 0 to 8, with 0 for silence, 1 for unity gain, and 8 for 8x gain."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"spatialSoundEnable"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enables or disables the capability for spatial sound. If enabled, ",Object(b.b)("inlineCode",{parentName:"td"},"spatialSoundPosition")," ",Object(b.b)("strong",{parentName:"td"},"must")," have a value for positional sound to be effective."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"streamedFileOffset"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"n/a"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets the starting point for playback of a streamed-file sound."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"spatialSoundDirection"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("em",{parentName:"td"},"object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"n/a"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets the sound direction of a given audio channel. This is effective only if spatial sound is enabled (",Object(b.b)("inlineCode",{parentName:"td"},"spatialSoundEnable"),") for an audio node. The direction is relative to the node's local orientation. By default the direction is the same as the parent node's orientation. If the audio file is already playing, the direction changes during playback when the sound direction is set."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"spatialSoundDirectSendLevels"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("em",{parentName:"td"},"object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"n/a"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets the direct send levels for one channel of a sound output. When 3D audio processing is enabled for a sound output (",Object(b.b)("inlineCode",{parentName:"td"},"spatialSoundEnabled"),") this property sets the send levels for the direct component of the sound, i.e., the audio mix for the part of the sound not affected by room acoustics. Multi-channel sounds require the direct send levels to be set individually for each channel by calling this function once for each channel. For mono sounds use ",Object(b.b)("inlineCode",{parentName:"td"},"channel = 0"),". For stereo sounds use ",Object(b.b)("inlineCode",{parentName:"td"},"channel = 0")," for left and ",Object(b.b)("inlineCode",{parentName:"td"},"channel = 1")," for right."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"spatialSoundDistance"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("em",{parentName:"td"},"object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"n/a"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets spatial sound distance parameters for a given channel."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"spatialSoundPosition"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("em",{parentName:"td"},"object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"n/a"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets the position of a given audio channel relative to the node's local position. This is effective only if spatial sound is enabled (",Object(b.b)("inlineCode",{parentName:"td"},"spatialSoundEnable"),") for an audio node. This changes the position even if the audio clip is already playing."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"spatialSoundRadiation"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("em",{parentName:"td"},"object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"n/a"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets spatial sound radiation parameters for a given channel."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"spatialSoundRoomSendLevels"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("em",{parentName:"td"},"object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"n/a"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets the room send levels for one channel of a sound output. When 3D audio processing is enabled for a sound output (",Object(b.b)("inlineCode",{parentName:"td"},"spatialSoundEnabled"),") this function sets the send levels for the room component of the sound, i.e., the audio mix for the part of the sound that is affected by room acoustics. Multi-channel sounds require the room send levels to be set individually for each channel by calling this function once for each channel. For mono sounds use ",Object(b.b)("inlineCode",{parentName:"td"},"channel = 0"),". For stereo sounds use ",Object(b.b)("inlineCode",{parentName:"td"},"channel = 0")," for left and ",Object(b.b)("inlineCode",{parentName:"td"},"channel = 1")," for right."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\ud83d\udc4d"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))),Object(b.b)("h3",{id:"spatialsounddirection"},"spatialSoundDirection"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"{\n    channel: number,\n    channelDirection: quat\n}\n")),Object(b.b)("h3",{id:"spatialsounddirectsendlevels"},"spatialSoundDirectSendLevels"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"{\n    channel: number,\n    gain: number,\n    gainHf: number,\n    gainLf: number,\n    gainMf: number\n}\n")),Object(b.b)("h3",{id:"spatialsounddistance"},"spatialSoundDistance"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"{\n    channel: number,\n    minDistance: number,\n    maxDistance: number,\n    rolloffFactor: number\n}\n")),Object(b.b)("h3",{id:"spatialsoundposition"},"spatialSoundPosition"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"{\n    channel: number,\n    channelPosition: vec3\n}\n")),Object(b.b)("h3",{id:"spatialsoundradiation"},"spatialSoundRadiation"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"{\n    channel: number,\n    innerAngle: number,\n    outerAngle: number,\n    outerGain: number,\n    outerGainHf: number\n}\n")),Object(b.b)("h3",{id:"spatialsoundroomsendlevels"},"spatialSoundRoomSendLevels"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"{\n    channel: number,\n    gain: number,\n    gainHf: number,\n    gainLf: number,\n    gainMf: number\n}\n")))}d.isMDXComponent=!0},412:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},p=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),p=d(a),j=n,s=p["".concat(c,".").concat(j)]||p[j]||O[j]||b;return a?r.a.createElement(s,i({ref:t},o,{components:a})):r.a.createElement(s,i({ref:t},o))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=j;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var o=2;o<b;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);