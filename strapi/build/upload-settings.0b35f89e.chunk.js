(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[695],{62031:(e,t,n)=>{"use strict";e.exports=n(59525)},59525:function(e,t,n){var r,a;e.exports=(r=n(67294),a=n(78384),function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=108)}({0:function(e,t,n){e.exports=n(17)()},1:function(e,t){e.exports=r},10:function(e,t,n){var r=n(23),a=n(24),o=n(20),i=n(25);e.exports=function(e,t){return r(e)||a(e,t)||o(e,t)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},108:function(e,t,n){"use strict";n.r(t),n.d(t,"Main",(function(){return v})),n.d(t,"SkipToContent",(function(){return _}));var r,a=n(5),o=n.n(a),i=n(6),s=n.n(i),u=n(3),l=n.n(u),c=n(1),d=n.n(c),f=n(0),p=n.n(f),m=n(2),g=n.n(m),b=["labelledBy"],h=g.a.main(r||(r=l()(["\n  // To prevent global outline on focus visible to force an outline when Main is focused\n  &:focus-visible {\n    outline: none;\n  }\n"]))),v=function(e){var t=e.labelledBy,n=s()(e,b),r=t||"main-content-title";return d.a.createElement(h,o()({"aria-labelledby":r,id:"main-content",tabIndex:-1},n))};v.defaultProps={labelledBy:void 0},v.propTypes={labelledBy:p.a.string};var y,x=n(4),O=g()(x.Box)(y||(y=l()(["\n  text-decoration: none;\n  position: absolute;\n  z-index: 9999;\n  left: -100%;\n  top: -100%;\n\n  &:focus {\n    left: ",";\n    top: ",";\n  }\n"])),(function(e){return e.theme.spaces[3]}),(function(e){return e.theme.spaces[3]})),_=function(e){var t=e.children;return d.a.createElement(O,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},t)};_.propTypes={children:p.a.node.isRequired}},13:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=n=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},17:function(e,t,n){"use strict";var r=n(18);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,o,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n}},18:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},19:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},2:function(e,t){e.exports=a},20:function(e,t,n){var r=n(19);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},22:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a},e.exports.default=e.exports,e.exports.__esModule=!0},23:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},24:function(e,t){e.exports=function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){s=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(s)throw a}}return o}},e.exports.default=e.exports,e.exports.__esModule=!0},25:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},3:function(e,t){e.exports=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},e.exports.default=e.exports,e.exports.__esModule=!0},4:function(e,t,n){"use strict";n.r(t),n.d(t,"Box",(function(){return f}));var r,a=n(3),o=n.n(a),i=n(0),s=n.n(i),u=n(2),l=n.n(u),c=n(7),d={color:!0},f=l.a.div.withConfig({shouldForwardProp:function(e,t){return!d[e]&&t(e)}})(r||(r=o()(["\n  // Font\n  font-size: ",";\n\n  // Colors\n  background: ",";\n  color: ",";\n\n  // Spaces\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  // Responsive hiding\n  ","\n  ","\n  \n\n  // Borders\n  border-radius: ",";\n  border-style: ",";\n  border-width: ",";\n  border-color: ",";\n  border: ",";\n\n  // Shadows\n  box-shadow: ",";\n\n  // Handlers\n  pointer-events: ",";\n  &:hover {\n    ","\n  }\n\n  // Display\n  display: ",";\n\n  // Position\n  position: ",";\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  z-index: ",";\n  overflow: ",";\n  cursor: ",";\n\n  // Size\n  width: ",";\n  max-width: ",";\n  min-width: ",";\n  height: ",";\n  max-height: ",";\n  min-height: ",";\n\n  // Animation\n  transition: ",";\n  transform: ",";\n  animation: ",";\n\n  //Flexbox children props\n  flex-shrink: ",";\n  flex-grow: ",";\n  flex-basis: ",";\n  flex: ",";\n\n  // Text\n  text-align: ",";\n  text-transform: ",";\n  line-height: ",";\n\n  // Cursor\n  cursor: ",";\n"])),(function(e){var t=e.fontSize;return e.theme.fontSizes[t]||t}),(function(e){var t=e.theme,n=e.background;return t.colors[n]}),(function(e){var t=e.theme,n=e.color;return t.colors[n]}),(function(e){var t=e.theme,n=e.padding;return Object(c.a)("padding",n,t)}),(function(e){var t=e.theme,n=e.paddingTop;return Object(c.a)("padding-top",n,t)}),(function(e){var t=e.theme,n=e.paddingRight;return Object(c.a)("padding-right",n,t)}),(function(e){var t=e.theme,n=e.paddingBottom;return Object(c.a)("padding-bottom",n,t)}),(function(e){var t=e.theme,n=e.paddingLeft;return Object(c.a)("padding-left",n,t)}),(function(e){var t=e.theme,n=e.marginLeft;return Object(c.a)("margin-left",n,t)}),(function(e){var t=e.theme,n=e.marginRight;return Object(c.a)("margin-right",n,t)}),(function(e){var t=e.theme,n=e.marginTop;return Object(c.a)("margin-top",n,t)}),(function(e){var t=e.theme,n=e.marginBottom;return Object(c.a)("margin-bottom",n,t)}),(function(e){var t=e.theme;return e.hiddenS?"".concat(t.mediaQueries.tablet," { display: none; }"):void 0}),(function(e){var t=e.theme;return e.hiddenXS?"".concat(t.mediaQueries.mobile," { display: none; }"):void 0}),(function(e){var t=e.theme,n=e.hasRadius,r=e.borderRadius;return n?t.borderRadius:r}),(function(e){return e.borderStyle}),(function(e){return e.borderWidth}),(function(e){var t=e.borderColor;return e.theme.colors[t]}),(function(e){var t=e.theme,n=e.borderColor,r=e.borderStyle,a=e.borderWidth;if(n&&!r&&!a)return"1px solid ".concat(t.colors[n])}),(function(e){var t=e.theme,n=e.shadow;return t.shadows[n]}),(function(e){return e.pointerEvents}),(function(e){var t=e._hover,n=e.theme;return t?t(n):void 0}),(function(e){return e.display}),(function(e){return e.position}),(function(e){var t=e.left;return e.theme.spaces[t]||t}),(function(e){var t=e.right;return e.theme.spaces[t]||t}),(function(e){var t=e.top;return e.theme.spaces[t]||t}),(function(e){var t=e.bottom;return e.theme.spaces[t]||t}),(function(e){return e.zIndex}),(function(e){return e.overflow}),(function(e){return e.cursor}),(function(e){var t=e.width;return e.theme.spaces[t]||t}),(function(e){var t=e.maxWidth;return e.theme.spaces[t]||t}),(function(e){var t=e.minWidth;return e.theme.spaces[t]||t}),(function(e){var t=e.height;return e.theme.spaces[t]||t}),(function(e){var t=e.maxHeight;return e.theme.spaces[t]||t}),(function(e){var t=e.minHeight;return e.theme.spaces[t]||t}),(function(e){return e.transition}),(function(e){return e.transform}),(function(e){return e.animation}),(function(e){return e.shrink}),(function(e){return e.grow}),(function(e){return e.basis}),(function(e){return e.flex}),(function(e){return e.textAlign}),(function(e){return e.textTransform}),(function(e){return e.lineHeight}),(function(e){return e.cursor}));f.displayName="Box",f.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},f.propTypes={_hover:s.a.func,background:s.a.string,basis:s.a.oneOfType([s.a.string,s.a.string]),borderColor:s.a.string,children:s.a.oneOfType([s.a.node,s.a.string]),color:s.a.string,flex:s.a.oneOfType([s.a.string,s.a.string]),grow:s.a.oneOfType([s.a.string,s.a.string]),hasRadius:s.a.bool,hiddenS:s.a.bool,hiddenXS:s.a.bool,padding:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingBottom:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingLeft:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingRight:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingTop:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),shadow:s.a.string,shrink:s.a.oneOfType([s.a.string,s.a.string])}},5:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},6:function(e,t,n){var r=n(22);e.exports=function(e,t){if(null==e)return{};var n,a,o=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o},e.exports.default=e.exports,e.exports.__esModule=!0},7:function(e,t,n){"use strict";var r=n(10),a=n.n(r),o=n(13),i=n.n(o);t.a=function(e,t,n){var r=t;if(Array.isArray(t)||"object"!==i()(t)||(r=[null==t?void 0:t.desktop,null==t?void 0:t.tablet,null==t?void 0:t.mobile]),void 0!==r){if(Array.isArray(r)){var o=r,s=a()(o,3),u=s[0],l=s[1],c=s[2],d="".concat(e,": ").concat(n.spaces[u],";");return void 0!==l&&(d+="".concat(n.mediaQueries.tablet,"{\n          ").concat(e,": ").concat(n.spaces[l],";\n        }")),void 0!==c&&(d+="".concat(n.mediaQueries.mobile,"{\n          ").concat(e,": ").concat(n.spaces[c],";\n        }")),d}var f=n.spaces[r]||r;return"".concat(e,": ").concat(f,";")}}}}))},87942:(e,t,n)=>{"use strict";var r=n(25108),a=n(95318),o=n(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.SettingsPage=void 0;var i=a(n(87757)),s=a(n(48926)),u=a(n(63038)),l=j(n(67294)),c=n(15482),d=n(97132),f=n(68547),p=a(n(84734)),m=n(5493),g=n(67826),b=n(47857),h=n(49425),v=n(19408),y=n(62031),x=n(9008),O=n(34626),_=n(78862),T=a(n(9669)),S=a(n(18446)),k=n(78763),E=a(n(56034)),M=j(n(18874)),w=a(n(68180));function C(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(C=function(e){return e?n:t})(e)}function j(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!==typeof e)return{default:e};var n=C(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=a?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}var D=function(){var e=(0,d.useIntl)().formatMessage,t=(0,f.useOverlayBlocker)(),n=t.lockApp,a=t.unlockApp,o=(0,f.useNotification)();(0,f.useFocusWhenNavigate)();var w=(0,l.useReducer)(M.default,M.initialState,E.default),C=(0,u.default)(w,2),j=C[0],D=j.initialData,P=j.isLoading,z=j.isSubmiting,I=j.modifiedData,R=C[1],A=(0,l.useRef)(!0);(0,l.useEffect)((function(){var e=T.default.CancelToken.source(),t=function(){var t=(0,s.default)(i.default.mark((function t(){var n,a;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.axiosInstance.get((0,k.getRequestUrl)("settings"),{cancelToken:e.token});case 3:n=t.sent,a=n.data.data,R({type:"GET_DATA_SUCCEEDED",data:a}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),r.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return A.current&&t(),function(){e.cancel("Operation canceled by the user."),A.current=!1}}),[]);var L=(0,S.default)(D,I),B=function(){var e=(0,s.default)(i.default.mark((function e(t){return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!L){e.next=3;break}return e.abrupt("return");case 3:return n(),R({type:"ON_SUBMIT"}),e.prev=5,e.next=8,k.axiosInstance.put((0,k.getRequestUrl)("settings"),I);case 8:R({type:"SUBMIT_SUCCEEDED"}),o({type:"success",message:{id:"notification.form.success.fields"}}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(5),r.error(e.t0),R({type:"ON_SUBMIT_ERROR"});case 16:a();case 17:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t){return e.apply(this,arguments)}}(),U=function(e){var t=e.target,n=t.name,r=t.value;R({type:"ON_CHANGE",keys:n,value:r})};return l.default.createElement(y.Main,{tabIndex:-1},l.default.createElement(c.Helmet,{title:e({id:(0,k.getTrad)("page.title"),defaultMessage:"Settings - Media Libray"})}),l.default.createElement("form",{onSubmit:B},l.default.createElement(_.HeaderLayout,{title:e({id:(0,k.getTrad)("settings.header.label"),defaultMessage:"Media Library"}),primaryAction:l.default.createElement(v.Button,{disabled:L,"data-testid":"save-button",loading:z,type:"submit",startIcon:l.default.createElement(p.default,null),size:"L"},e({id:"app.components.Button.save",defaultMessage:"Save"})),subtitle:e({id:(0,k.getTrad)("settings.sub-header.label"),defaultMessage:"Configure the settings for the Media Library"})}),l.default.createElement(_.ContentLayout,null,P?l.default.createElement(f.LoadingIndicatorPage,null):l.default.createElement(_.Layout,null,l.default.createElement(x.Stack,{size:12},l.default.createElement(m.Box,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},l.default.createElement(x.Stack,{size:4},l.default.createElement(g.Flex,null,l.default.createElement(h.Typography,{variant:"delta",as:"h2"},e({id:(0,k.getTrad)("settings.blockTitle"),defaultMessage:"Asset management"}))),l.default.createElement(O.Grid,{gap:6},l.default.createElement(O.GridItem,{col:6,s:12},l.default.createElement(b.ToggleInput,{"aria-label":"responsiveDimensions","data-testid":"responsiveDimensions",checked:I.responsiveDimensions,hint:e({id:(0,k.getTrad)("settings.form.responsiveDimensions.description"),defaultMessage:"Enabling this option will generate multiple formats (small, medium and large) of the uploaded asset."}),label:e({id:(0,k.getTrad)("settings.form.responsiveDimensions.label"),defaultMessage:"Responsive friendly upload"}),name:"responsiveDimensions",offLabel:e({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:e({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:function(e){U({target:{name:"responsiveDimensions",value:e.target.checked}})}})),l.default.createElement(O.GridItem,{col:6,s:12},l.default.createElement(b.ToggleInput,{"aria-label":"sizeOptimization","data-testid":"sizeOptimization",checked:I.sizeOptimization,hint:e({id:(0,k.getTrad)("settings.form.sizeOptimization.description"),defaultMessage:"Enabling this option will reduce the image size and slightly reduce its quality."}),label:e({id:(0,k.getTrad)("settings.form.sizeOptimization.label"),defaultMessage:"Size optimization"}),name:"sizeOptimization",offLabel:e({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:e({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:function(e){U({target:{name:"sizeOptimization",value:e.target.checked}})}})),l.default.createElement(O.GridItem,{col:6,s:12},l.default.createElement(b.ToggleInput,{"aria-label":"autoOrientation","data-testid":"autoOrientation",checked:I.autoOrientation,hint:e({id:(0,k.getTrad)("settings.form.autoOrientation.description"),defaultMessage:"Enabling this option will automatically rotate the image according to EXIF orientation tag."}),label:e({id:(0,k.getTrad)("settings.form.autoOrientation.label"),defaultMessage:"Auto orientation"}),name:"autoOrientation",offLabel:e({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:e({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:function(e){U({target:{name:"autoOrientation",value:e.target.checked}})}}))))))))))};t.SettingsPage=D;var P=function(){return l.default.createElement(f.CheckPagePermissions,{permissions:w.default.settings},l.default.createElement(D,null))};t.default=P},56034:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){return e};t.default=n},18874:(e,t,n)=>{"use strict";var r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.initialState=t.default=void 0;var a=r(n(319)),o=r(n(66312)),i=r(n(36968));t.initialState={isLoading:!0,isSubmiting:!1,initialData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1},modifiedData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1}};var s=function(e,t){return(0,o.default)(e,(function(n){switch(t.type){case"CANCEL_CHANGES":n.modifiedData=e.initialData;break;case"GET_DATA_SUCCEEDED":n.isLoading=!1,n.initialData=t.data,n.modifiedData=t.data;break;case"ON_CHANGE":(0,i.default)(n,["modifiedData"].concat((0,a.default)(t.keys.split("."))),t.value);break;case"ON_SUBMIT":n.isSubmiting=!0;break;case"SUBMIT_SUCCEEDED":n.initialData=e.modifiedData,n.isSubmiting=!1;break;case"ON_SUBMIT_ERROR":n.isSubmiting=!1;break;default:return e}}))};t.default=s}}]);