(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{375:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),i=(n(0),n(412)),l={id:"eventDataTypes",title:"Event Data Types"},o={id:"version-latest/events/eventDataTypes",title:"Event Data Types",description:"## Event data types and their properties",source:"@site/versioned_docs/version-latest/events/EventDataTypes.md",permalink:"/docs/events/eventDataTypes",version:"latest",sidebar:"version-latest/docs",previous:{title:"Component Events",permalink:"/docs/events/componentEvents"},next:{title:"Events Example",permalink:"/docs/events/eventsExample"}},c=[{value:"Event data types and their properties",id:"event-data-types-and-their-properties",children:[]}],b={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"event-data-types-and-their-properties"},"Event data types and their properties"),Object(i.b)("p",null,"ServerEvent extends EventData"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"PrismId"),Object(i.b)("li",{parentName:"ul"},"isInputEvent")),Object(i.b)("p",null,"InputEventData extends ServerEvent"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"DeviceId"),Object(i.b)("li",{parentName:"ul"},"EventSource"),Object(i.b)("li",{parentName:"ul"},"EventType")),Object(i.b)("p",null,"EyeTrackingEventData extends ServerEvent"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"EyeTrackingFixationConfidence"),Object(i.b)("li",{parentName:"ul"},"EyeTrackingFixationPosition"),Object(i.b)("li",{parentName:"ul"},"EyeTrackingLeftEyeBlinkState"),Object(i.b)("li",{parentName:"ul"},"EyeTrackingLeftEyeConfidence"),Object(i.b)("li",{parentName:"ul"},"EyeTrackingLeftEyePosition"),Object(i.b)("li",{parentName:"ul"},"EyeTrackingLeftEyeRotation"),Object(i.b)("li",{parentName:"ul"},"EyeTrackingRightEyeBlinkState"),Object(i.b)("li",{parentName:"ul"},"EyeTrackingRightEyeConfidence"),Object(i.b)("li",{parentName:"ul"},"EyeTrackingRightEyePosition"),Object(i.b)("li",{parentName:"ul"},"EyeTrackingRightEyeRotation"),Object(i.b)("li",{parentName:"ul"},"RemainingTimeAtUncomfortableDepth")),Object(i.b)("p",null,"NodeEventData extends EventData"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"AABB"),Object(i.b)("li",{parentName:"ul"},"AnchorPosition"),Object(i.b)("li",{parentName:"ul"},"ChildCount"),Object(i.b)("li",{parentName:"ul"},"CurrentPrismTransform"),Object(i.b)("li",{parentName:"ul"},"CurrentWorldTransform"),Object(i.b)("li",{parentName:"ul"},"CursorHoverState"),Object(i.b)("li",{parentName:"ul"},"LocalAABB"),Object(i.b)("li",{parentName:"ul"},"LocalTransform"),Object(i.b)("li",{parentName:"ul"},"Name"),Object(i.b)("li",{parentName:"ul"},"NodeId"),Object(i.b)("li",{parentName:"ul"},"ParentedBoneName"),Object(i.b)("li",{parentName:"ul"},"PrismId")),Object(i.b)("p",null,"TransformNodeEventData extends NodeEventData"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"LocalPosition"),Object(i.b)("li",{parentName:"ul"},"LocalRotation"),Object(i.b)("li",{parentName:"ul"},"LocalScale"),Object(i.b)("li",{parentName:"ul"},"PrismPosition"),Object(i.b)("li",{parentName:"ul"},"WorldPosition")),Object(i.b)("p",null,"UiEventData extends TransformNodeEventData (",Object(i.b)("strong",{parentName:"p"},"in development"),")"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Alignment"),Object(i.b)("li",{parentName:"ul"},"Enabled"),Object(i.b)("li",{parentName:"ul"},"EventPassThrough"),Object(i.b)("li",{parentName:"ul"},"EventSoundID"),Object(i.b)("li",{parentName:"ul"},"GravityWellEnabled"),Object(i.b)("li",{parentName:"ul"},"GravityWellProperties"),Object(i.b)("li",{parentName:"ul"},"RenderingLaye")))}p.isMDXComponent=!0},412:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,O=u["".concat(l,".").concat(m)]||u[m]||s[m]||i;return n?a.a.createElement(O,o({ref:t},b,{components:n})):a.a.createElement(O,o({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var b=2;b<i;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);