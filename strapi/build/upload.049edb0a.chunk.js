(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[3650],{85104:(ee,ne,m)=>{"use strict";ee.exports=m(74879)},74879:function(ee,ne,m){(function(i,Z){ee.exports=Z(m(67294),m(78384),m(39711),m(43257))})(this,function(i,Z,u,E){return function(e){var s={};function n(a){if(s[a])return s[a].exports;var o=s[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=s,n.d=function(a,o,f){n.o(a,o)||Object.defineProperty(a,o,{enumerable:!0,get:f})},n.r=function(a){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},n.t=function(a,o){if(1&o&&(a=n(a)),8&o||4&o&&typeof a=="object"&&a&&a.__esModule)return a;var f=Object.create(null);if(n.r(f),Object.defineProperty(f,"default",{enumerable:!0,value:a}),2&o&&typeof a!="string")for(var l in a)n.d(f,l,function(x){return a[x]}.bind(null,l));return f},n.n=function(a){var o=a&&a.__esModule?function(){return a.default}:function(){return a};return n.d(o,"a",o),o},n.o=function(a,o){return Object.prototype.hasOwnProperty.call(a,o)},n.p="",n(n.s=115)}({0:function(e,s,n){e.exports=n(19)()},1:function(e,s){e.exports=i},10:function(e,s,n){var a=n(25),o=n(26),f=n(22),l=n(27);e.exports=function(x,O){return a(x)||o(x,O)||f(x,O)||l()},e.exports.default=e.exports,e.exports.__esModule=!0},115:function(e,s,n){"use strict";n.r(s),n.d(s,"Link",function(){return re});var a,o,f=n(5),l=n.n(f),x=n(4),O=n.n(x),T=n(3),y=n.n(T),H=n(1),p=n.n(H),z=n(0),L=n.n(z),I=n(2),r=n.n(I),c=n(83),t=n.n(c),d=n(37),b=n(8),Q=n(6),X=n(16),ie=["href","to","children","disabled","startIcon","endIcon"],se=r.a.a(a||(a=y()([`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: `,`;
  svg path {
    fill: `,`;
  }
  svg {
    font-size: `,`rem;
  }
  &:hover,
  &:active {
    color: `,`;
  }
  `,`;
`])),function(D){return D.disabled?"none":void 0},function(D){var A=D.disabled,G=D.theme;return A?G.colors.neutral600:G.colors.primary600},.625,function(D){return D.theme.colors.primary800},X.a),le=r()(Q.Box)(o||(o=y()([`
  display: flex;
`]))),re=function(D){var A=D.href,G=D.to,be=D.children,Y=D.disabled,te=D.startIcon,pe=D.endIcon,xe=O()(D,ie),Oe=A?"_blank":void 0,ue=A?"noreferrer noopener":void 0;return p.a.createElement(se,l()({as:G&&!Y?d.NavLink:"a",target:Oe,rel:ue,to:Y?void 0:G,href:Y?"#":A,disabled:Y},xe),te&&p.a.createElement(le,{as:"span","aria-hidden":!0,paddingRight:2},te),p.a.createElement(b.Typography,{variant:"pi",textColor:Y?"neutral600":"primary600"},be),pe&&!A&&p.a.createElement(le,{as:"span","aria-hidden":!0,paddingLeft:2},pe),A&&p.a.createElement(le,{as:"span","aria-hidden":!0,paddingLeft:2},p.a.createElement(t.a,null)))};re.displayName="Link",re.defaultProps={href:void 0,to:void 0,disabled:!1},re.propTypes={children:L.a.node.isRequired,disabled:L.a.bool,endIcon:L.a.element,href:function(D){if(!D.disabled&&!D.to&&!D.href)return new Error("href must be defined")},startIcon:L.a.element,to:function(D){if(!D.disabled&&!D.href&&!D.to)return new Error("to must be defined")}}},13:function(e,s){function n(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(e.exports=n=function(o){return typeof o},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=n=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},e.exports.default=e.exports,e.exports.__esModule=!0),n(a)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},16:function(e,s,n){"use strict";n.d(s,"b",function(){return a}),n.d(s,"c",function(){return o}),n.d(s,"a",function(){return f});var a=function(l){return function(x){var O=x.theme,T=x.size;return O.sizes[l][T]}},o=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"&";return function(x){var O=x.theme,T=x.hasError;return`
      outline: none;
      box-shadow: 0;
      transition-property: border-color, box-shadow, fill;
      transition-duration: 0.2s;

      `.concat(l,`:focus-within {
        border: 1px solid `).concat(T?O.colors.danger600:O.colors.primary600,`;
        box-shadow: `).concat(T?O.colors.danger600:O.colors.primary600,` 0px 0px 0px 2px;
      }
    `)}},f=function(l){var x=l.theme;return`
  position: relative;
  outline: none;
  
  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;
    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid `.concat(x.colors.primary600,`;
    }
  }
`)}},19:function(e,s,n){"use strict";var a=n(20);function o(){}function f(){}f.resetWarningCache=o,e.exports=function(){function l(T,y,H,p,z,L){if(L!==a){var I=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw I.name="Invariant Violation",I}}function x(){return l}l.isRequired=l;var O={array:l,bool:l,func:l,number:l,object:l,string:l,symbol:l,any:l,arrayOf:x,element:l,elementType:l,instanceOf:x,node:l,objectOf:x,oneOf:x,oneOfType:x,shape:x,exact:x,checkPropTypes:f,resetWarningCache:o};return O.PropTypes=O,O}},2:function(e,s){e.exports=Z},20:function(e,s,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(e,s){e.exports=function(n,a){(a==null||a>n.length)&&(a=n.length);for(var o=0,f=new Array(a);o<a;o++)f[o]=n[o];return f},e.exports.default=e.exports,e.exports.__esModule=!0},22:function(e,s,n){var a=n(21);e.exports=function(o,f){if(o){if(typeof o=="string")return a(o,f);var l=Object.prototype.toString.call(o).slice(8,-1);return l==="Object"&&o.constructor&&(l=o.constructor.name),l==="Map"||l==="Set"?Array.from(o):l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?a(o,f):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},24:function(e,s){e.exports=function(n,a){if(n==null)return{};var o,f,l={},x=Object.keys(n);for(f=0;f<x.length;f++)o=x[f],a.indexOf(o)>=0||(l[o]=n[o]);return l},e.exports.default=e.exports,e.exports.__esModule=!0},25:function(e,s){e.exports=function(n){if(Array.isArray(n))return n},e.exports.default=e.exports,e.exports.__esModule=!0},26:function(e,s){e.exports=function(n,a){var o=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(o!=null){var f,l,x=[],O=!0,T=!1;try{for(o=o.call(n);!(O=(f=o.next()).done)&&(x.push(f.value),!a||x.length!==a);O=!0);}catch(y){T=!0,l=y}finally{try{O||o.return==null||o.return()}finally{if(T)throw l}}return x}},e.exports.default=e.exports,e.exports.__esModule=!0},27:function(e,s){e.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},e.exports.default=e.exports,e.exports.__esModule=!0},3:function(e,s){e.exports=function(n,a){return a||(a=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(a)}}))},e.exports.default=e.exports,e.exports.__esModule=!0},37:function(e,s){e.exports=u},4:function(e,s,n){var a=n(24);e.exports=function(o,f){if(o==null)return{};var l,x,O=a(o,f);if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(o);for(x=0;x<T.length;x++)l=T[x],f.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(o,l)&&(O[l]=o[l])}return O},e.exports.default=e.exports,e.exports.__esModule=!0},5:function(e,s){function n(){return e.exports=n=Object.assign||function(a){for(var o=1;o<arguments.length;o++){var f=arguments[o];for(var l in f)Object.prototype.hasOwnProperty.call(f,l)&&(a[l]=f[l])}return a},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},6:function(e,s,n){"use strict";n.r(s),n.d(s,"Box",function(){return c});var a,o=n(3),f=n.n(o),l=n(2),x=n.n(l),O=n(7),T=n(1),y=n.n(T),H=n(0),p=n.n(H),z=function(t){return y.a.createElement("div",t)},L={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},I={_hover:p.a.func,background:p.a.string,basis:p.a.oneOfType([p.a.string,p.a.string]),borderColor:p.a.string,children:p.a.oneOfType([p.a.node,p.a.string]),color:p.a.string,flex:p.a.oneOfType([p.a.string,p.a.string]),grow:p.a.oneOfType([p.a.string,p.a.string]),hasRadius:p.a.bool,hiddenS:p.a.bool,hiddenXS:p.a.bool,padding:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),paddingBottom:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),paddingLeft:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),paddingRight:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),paddingTop:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),shadow:p.a.string,shrink:p.a.oneOfType([p.a.string,p.a.string])};z.defaultProps=L,z.propTypes=I;var r={color:!0},c=x.a.div.withConfig({shouldForwardProp:function(t,d){return!r[t]&&d(t)}})(a||(a=f()([`
  // Font
  font-size: `,`;

  // Colors
  background: `,`;
  color: `,`;

  // Spaces
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  // Responsive hiding
  `,`
  `,`
  

  // Borders
  border-radius: `,`;
  border-style: `,`;
  border-width: `,`;
  border-color: `,`;
  border: `,`;

  // Shadows
  box-shadow: `,`;

  // Handlers
  pointer-events: `,`;
  &:hover {
    `,`
  }

  // Display
  display: `,`;

  // Position
  position: `,`;
  left: `,`;
  right: `,`;
  top: `,`;
  bottom: `,`;
  z-index: `,`;
  overflow: `,`;
  cursor: `,`;

  // Size
  width: `,`;
  max-width: `,`;
  min-width: `,`;
  height: `,`;
  max-height: `,`;
  min-height: `,`;

  // Animation
  transition: `,`;
  transform: `,`;
  animation: `,`;

  //Flexbox children props
  flex-shrink: `,`;
  flex-grow: `,`;
  flex-basis: `,`;
  flex: `,`;

  // Text
  text-align: `,`;
  text-transform: `,`;
  line-height: `,`;

  // Cursor
  cursor: `,`;
`])),function(t){var d=t.fontSize;return t.theme.fontSizes[d]||d},function(t){var d=t.theme,b=t.background;return d.colors[b]},function(t){var d=t.theme,b=t.color;return d.colors[b]},function(t){var d=t.theme,b=t.padding;return Object(O.a)("padding",b,d)},function(t){var d=t.theme,b=t.paddingTop;return Object(O.a)("padding-top",b,d)},function(t){var d=t.theme,b=t.paddingRight;return Object(O.a)("padding-right",b,d)},function(t){var d=t.theme,b=t.paddingBottom;return Object(O.a)("padding-bottom",b,d)},function(t){var d=t.theme,b=t.paddingLeft;return Object(O.a)("padding-left",b,d)},function(t){var d=t.theme,b=t.marginLeft;return Object(O.a)("margin-left",b,d)},function(t){var d=t.theme,b=t.marginRight;return Object(O.a)("margin-right",b,d)},function(t){var d=t.theme,b=t.marginTop;return Object(O.a)("margin-top",b,d)},function(t){var d=t.theme,b=t.marginBottom;return Object(O.a)("margin-bottom",b,d)},function(t){var d=t.theme;return t.hiddenS?"".concat(d.mediaQueries.tablet," { display: none; }"):void 0},function(t){var d=t.theme;return t.hiddenXS?"".concat(d.mediaQueries.mobile," { display: none; }"):void 0},function(t){var d=t.theme,b=t.hasRadius,Q=t.borderRadius;return b?d.borderRadius:Q},function(t){return t.borderStyle},function(t){return t.borderWidth},function(t){var d=t.borderColor;return t.theme.colors[d]},function(t){var d=t.theme,b=t.borderColor,Q=t.borderStyle,X=t.borderWidth;if(b&&!Q&&!X)return"1px solid ".concat(d.colors[b])},function(t){var d=t.theme,b=t.shadow;return d.shadows[b]},function(t){return t.pointerEvents},function(t){var d=t._hover,b=t.theme;return d?d(b):void 0},function(t){return t.display},function(t){return t.position},function(t){var d=t.left;return t.theme.spaces[d]||d},function(t){var d=t.right;return t.theme.spaces[d]||d},function(t){var d=t.top;return t.theme.spaces[d]||d},function(t){var d=t.bottom;return t.theme.spaces[d]||d},function(t){return t.zIndex},function(t){return t.overflow},function(t){return t.cursor},function(t){var d=t.width;return t.theme.spaces[d]||d},function(t){var d=t.maxWidth;return t.theme.spaces[d]||d},function(t){var d=t.minWidth;return t.theme.spaces[d]||d},function(t){var d=t.height;return t.theme.spaces[d]||d},function(t){var d=t.maxHeight;return t.theme.spaces[d]||d},function(t){var d=t.minHeight;return t.theme.spaces[d]||d},function(t){return t.transition},function(t){return t.transform},function(t){return t.animation},function(t){return t.shrink},function(t){return t.grow},function(t){return t.basis},function(t){return t.flex},function(t){return t.textAlign},function(t){return t.textTransform},function(t){return t.lineHeight},function(t){return t.cursor});c.defaultProps=L,c.propTypes=I},7:function(e,s,n){"use strict";var a=n(10),o=n.n(a),f=n(13),l=n.n(f);s.a=function(x,O,T){var y=O;if(Array.isArray(O)||l()(O)!=="object"||(y=[O==null?void 0:O.desktop,O==null?void 0:O.tablet,O==null?void 0:O.mobile]),y!==void 0){if(Array.isArray(y)){var H=y,p=o()(H,3),z=p[0],L=p[1],I=p[2],r="".concat(x,": ").concat(T.spaces[z],";");return L!==void 0&&(r+="".concat(T.mediaQueries.tablet,`{
          `).concat(x,": ").concat(T.spaces[L],`;
        }`)),I!==void 0&&(r+="".concat(T.mediaQueries.mobile,`{
          `).concat(x,": ").concat(T.spaces[I],`;
        }`)),r}var c=T.spaces[y]||y;return"".concat(x,": ").concat(c,";")}}},8:function(e,s,n){"use strict";n.r(s),n.d(s,"Typography",function(){return c});var a,o=n(3),f=n.n(o),l=n(2),x=n.n(l),O=["alpha","beta","delta","epsilon","omega","pi","sigma"],T=n(1),y=n.n(T),H=n(0),p=n.n(H),z=function(t){return y.a.createElement("div",t)},L={ellipsis:!1,fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},I={ellipsis:p.a.bool,fontSize:p.a.oneOfType([p.a.number,p.a.string]),fontWeight:p.a.string,lineHeight:p.a.oneOfType([p.a.number,p.a.string]),textColor:p.a.string,textTransform:p.a.string,variant:p.a.oneOf(O)};z.defaultProps=L,z.propTypes=I;var r={fontSize:!0,fontWeight:!0},c=x.a.span.withConfig({shouldForwardProp:function(t,d){return!r[t]&&d(t)}})(a||(a=f()([`
  font-weight: `,`;
  font-size: `,`;
  line-height: `,`;
  color: `,`;
  text-transform: `,`;
  `,`
  `,`
`])),function(t){var d=t.theme,b=t.fontWeight;return d.fontWeights[b]},function(t){var d=t.theme,b=t.fontSize;return d.fontSizes[b]},function(t){var d=t.theme,b=t.lineHeight;return d.lineHeights[b]},function(t){var d=t.theme,b=t.textColor;return d.colors[b||"neutral800"]},function(t){return t.textTransform},function(t){return t.ellipsis&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `},function(t){var d=t.variant,b=t.theme;switch(d){case"alpha":return`
        font-weight: `.concat(b.fontWeights.bold,`;
        font-size: `).concat(b.fontSizes[5],`;
        line-height: `).concat(b.lineHeights[2],`;
      `);case"beta":return`
        font-weight: `.concat(b.fontWeights.bold,`;
        font-size: `).concat(b.fontSizes[4],`;
        line-height: `).concat(b.lineHeights[1],`;
      `);case"delta":return`
        font-weight: `.concat(b.fontWeights.semiBold,`;
        font-size: `).concat(b.fontSizes[3],`;
        line-height: `).concat(b.lineHeights[2],`;
      `);case"epsilon":return`
        font-size: `.concat(b.fontSizes[3],`;
        line-height: `).concat(b.lineHeights[6],`;
      `);case"omega":return`
        font-size: `.concat(b.fontSizes[2],`;
        line-height: `).concat(b.lineHeights[4],`;
      `);case"pi":return`
        font-size: `.concat(b.fontSizes[1],`;
        line-height: `).concat(b.lineHeights[3],`;
      `);case"sigma":return`
        font-weight: `.concat(b.fontWeights.bold,`;
        font-size: `).concat(b.fontSizes[0],`;
        line-height: `).concat(b.lineHeights[5],`;
        text-transform: uppercase;
      `);default:return`
        font-size: `.concat(b.fontSizes[2],`;
      `)}});c.defaultProps=L,c.propTypes=I},83:function(e,s){e.exports=E}})})},62031:(ee,ne,m)=>{"use strict";ee.exports=m(59525)},59525:function(ee,ne,m){(function(i,Z){ee.exports=Z(m(67294),m(78384))})(this,function(i,Z){return function(u){var E={};function e(s){if(E[s])return E[s].exports;var n=E[s]={i:s,l:!1,exports:{}};return u[s].call(n.exports,n,n.exports,e),n.l=!0,n.exports}return e.m=u,e.c=E,e.d=function(s,n,a){e.o(s,n)||Object.defineProperty(s,n,{enumerable:!0,get:a})},e.r=function(s){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},e.t=function(s,n){if(1&n&&(s=e(s)),8&n||4&n&&typeof s=="object"&&s&&s.__esModule)return s;var a=Object.create(null);if(e.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:s}),2&n&&typeof s!="string")for(var o in s)e.d(a,o,function(f){return s[f]}.bind(null,o));return a},e.n=function(s){var n=s&&s.__esModule?function(){return s.default}:function(){return s};return e.d(n,"a",n),n},e.o=function(s,n){return Object.prototype.hasOwnProperty.call(s,n)},e.p="",e(e.s=110)}({0:function(u,E,e){u.exports=e(19)()},1:function(u,E){u.exports=i},10:function(u,E,e){var s=e(25),n=e(26),a=e(22),o=e(27);u.exports=function(f,l){return s(f)||n(f,l)||a(f,l)||o()},u.exports.default=u.exports,u.exports.__esModule=!0},110:function(u,E,e){"use strict";e.r(E),e.d(E,"Main",function(){return r}),e.d(E,"SkipToContent",function(){return b});var s,n=e(5),a=e.n(n),o=e(4),f=e.n(o),l=e(3),x=e.n(l),O=e(1),T=e.n(O),y=e(0),H=e.n(y),p=e(2),z=e.n(p),L=["labelledBy"],I=z.a.main(s||(s=x()([`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`]))),r=function(Q){var X=Q.labelledBy,ie=f()(Q,L),se=X||"main-content-title";return T.a.createElement(I,a()({"aria-labelledby":se,id:"main-content",tabIndex:-1},ie))};r.defaultProps={labelledBy:void 0},r.propTypes={labelledBy:H.a.string};var c,t=e(6),d=z()(t.Box)(c||(c=x()([`
  text-decoration: none;
  position: absolute;
  z-index: 9999;
  left: -100%;
  top: -100%;

  &:focus {
    left: `,`;
    top: `,`;
  }
`])),function(Q){return Q.theme.spaces[3]},function(Q){return Q.theme.spaces[3]}),b=function(Q){var X=Q.children;return T.a.createElement(d,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},X)};b.propTypes={children:H.a.node.isRequired}},13:function(u,E){function e(s){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(u.exports=e=function(n){return typeof n},u.exports.default=u.exports,u.exports.__esModule=!0):(u.exports=e=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},u.exports.default=u.exports,u.exports.__esModule=!0),e(s)}u.exports=e,u.exports.default=u.exports,u.exports.__esModule=!0},19:function(u,E,e){"use strict";var s=e(20);function n(){}function a(){}a.resetWarningCache=n,u.exports=function(){function o(x,O,T,y,H,p){if(p!==s){var z=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw z.name="Invariant Violation",z}}function f(){return o}o.isRequired=o;var l={array:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:f,element:o,elementType:o,instanceOf:f,node:o,objectOf:f,oneOf:f,oneOfType:f,shape:f,exact:f,checkPropTypes:a,resetWarningCache:n};return l.PropTypes=l,l}},2:function(u,E){u.exports=Z},20:function(u,E,e){"use strict";u.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(u,E){u.exports=function(e,s){(s==null||s>e.length)&&(s=e.length);for(var n=0,a=new Array(s);n<s;n++)a[n]=e[n];return a},u.exports.default=u.exports,u.exports.__esModule=!0},22:function(u,E,e){var s=e(21);u.exports=function(n,a){if(n){if(typeof n=="string")return s(n,a);var o=Object.prototype.toString.call(n).slice(8,-1);return o==="Object"&&n.constructor&&(o=n.constructor.name),o==="Map"||o==="Set"?Array.from(n):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?s(n,a):void 0}},u.exports.default=u.exports,u.exports.__esModule=!0},24:function(u,E){u.exports=function(e,s){if(e==null)return{};var n,a,o={},f=Object.keys(e);for(a=0;a<f.length;a++)n=f[a],s.indexOf(n)>=0||(o[n]=e[n]);return o},u.exports.default=u.exports,u.exports.__esModule=!0},25:function(u,E){u.exports=function(e){if(Array.isArray(e))return e},u.exports.default=u.exports,u.exports.__esModule=!0},26:function(u,E){u.exports=function(e,s){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a,o,f=[],l=!0,x=!1;try{for(n=n.call(e);!(l=(a=n.next()).done)&&(f.push(a.value),!s||f.length!==s);l=!0);}catch(O){x=!0,o=O}finally{try{l||n.return==null||n.return()}finally{if(x)throw o}}return f}},u.exports.default=u.exports,u.exports.__esModule=!0},27:function(u,E){u.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},u.exports.default=u.exports,u.exports.__esModule=!0},3:function(u,E){u.exports=function(e,s){return s||(s=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(s)}}))},u.exports.default=u.exports,u.exports.__esModule=!0},4:function(u,E,e){var s=e(24);u.exports=function(n,a){if(n==null)return{};var o,f,l=s(n,a);if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(n);for(f=0;f<x.length;f++)o=x[f],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(l[o]=n[o])}return l},u.exports.default=u.exports,u.exports.__esModule=!0},5:function(u,E){function e(){return u.exports=e=Object.assign||function(s){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(s[o]=a[o])}return s},u.exports.default=u.exports,u.exports.__esModule=!0,e.apply(this,arguments)}u.exports=e,u.exports.default=u.exports,u.exports.__esModule=!0},6:function(u,E,e){"use strict";e.r(E),e.d(E,"Box",function(){return I});var s,n=e(3),a=e.n(n),o=e(2),f=e.n(o),l=e(7),x=e(1),O=e.n(x),T=e(0),y=e.n(T),H=function(r){return O.a.createElement("div",r)},p={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},z={_hover:y.a.func,background:y.a.string,basis:y.a.oneOfType([y.a.string,y.a.string]),borderColor:y.a.string,children:y.a.oneOfType([y.a.node,y.a.string]),color:y.a.string,flex:y.a.oneOfType([y.a.string,y.a.string]),grow:y.a.oneOfType([y.a.string,y.a.string]),hasRadius:y.a.bool,hiddenS:y.a.bool,hiddenXS:y.a.bool,padding:y.a.oneOfType([y.a.number,y.a.arrayOf(y.a.number)]),paddingBottom:y.a.oneOfType([y.a.number,y.a.arrayOf(y.a.number)]),paddingLeft:y.a.oneOfType([y.a.number,y.a.arrayOf(y.a.number)]),paddingRight:y.a.oneOfType([y.a.number,y.a.arrayOf(y.a.number)]),paddingTop:y.a.oneOfType([y.a.number,y.a.arrayOf(y.a.number)]),shadow:y.a.string,shrink:y.a.oneOfType([y.a.string,y.a.string])};H.defaultProps=p,H.propTypes=z;var L={color:!0},I=f.a.div.withConfig({shouldForwardProp:function(r,c){return!L[r]&&c(r)}})(s||(s=a()([`
  // Font
  font-size: `,`;

  // Colors
  background: `,`;
  color: `,`;

  // Spaces
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  // Responsive hiding
  `,`
  `,`
  

  // Borders
  border-radius: `,`;
  border-style: `,`;
  border-width: `,`;
  border-color: `,`;
  border: `,`;

  // Shadows
  box-shadow: `,`;

  // Handlers
  pointer-events: `,`;
  &:hover {
    `,`
  }

  // Display
  display: `,`;

  // Position
  position: `,`;
  left: `,`;
  right: `,`;
  top: `,`;
  bottom: `,`;
  z-index: `,`;
  overflow: `,`;
  cursor: `,`;

  // Size
  width: `,`;
  max-width: `,`;
  min-width: `,`;
  height: `,`;
  max-height: `,`;
  min-height: `,`;

  // Animation
  transition: `,`;
  transform: `,`;
  animation: `,`;

  //Flexbox children props
  flex-shrink: `,`;
  flex-grow: `,`;
  flex-basis: `,`;
  flex: `,`;

  // Text
  text-align: `,`;
  text-transform: `,`;
  line-height: `,`;

  // Cursor
  cursor: `,`;
`])),function(r){var c=r.fontSize;return r.theme.fontSizes[c]||c},function(r){var c=r.theme,t=r.background;return c.colors[t]},function(r){var c=r.theme,t=r.color;return c.colors[t]},function(r){var c=r.theme,t=r.padding;return Object(l.a)("padding",t,c)},function(r){var c=r.theme,t=r.paddingTop;return Object(l.a)("padding-top",t,c)},function(r){var c=r.theme,t=r.paddingRight;return Object(l.a)("padding-right",t,c)},function(r){var c=r.theme,t=r.paddingBottom;return Object(l.a)("padding-bottom",t,c)},function(r){var c=r.theme,t=r.paddingLeft;return Object(l.a)("padding-left",t,c)},function(r){var c=r.theme,t=r.marginLeft;return Object(l.a)("margin-left",t,c)},function(r){var c=r.theme,t=r.marginRight;return Object(l.a)("margin-right",t,c)},function(r){var c=r.theme,t=r.marginTop;return Object(l.a)("margin-top",t,c)},function(r){var c=r.theme,t=r.marginBottom;return Object(l.a)("margin-bottom",t,c)},function(r){var c=r.theme;return r.hiddenS?"".concat(c.mediaQueries.tablet," { display: none; }"):void 0},function(r){var c=r.theme;return r.hiddenXS?"".concat(c.mediaQueries.mobile," { display: none; }"):void 0},function(r){var c=r.theme,t=r.hasRadius,d=r.borderRadius;return t?c.borderRadius:d},function(r){return r.borderStyle},function(r){return r.borderWidth},function(r){var c=r.borderColor;return r.theme.colors[c]},function(r){var c=r.theme,t=r.borderColor,d=r.borderStyle,b=r.borderWidth;if(t&&!d&&!b)return"1px solid ".concat(c.colors[t])},function(r){var c=r.theme,t=r.shadow;return c.shadows[t]},function(r){return r.pointerEvents},function(r){var c=r._hover,t=r.theme;return c?c(t):void 0},function(r){return r.display},function(r){return r.position},function(r){var c=r.left;return r.theme.spaces[c]||c},function(r){var c=r.right;return r.theme.spaces[c]||c},function(r){var c=r.top;return r.theme.spaces[c]||c},function(r){var c=r.bottom;return r.theme.spaces[c]||c},function(r){return r.zIndex},function(r){return r.overflow},function(r){return r.cursor},function(r){var c=r.width;return r.theme.spaces[c]||c},function(r){var c=r.maxWidth;return r.theme.spaces[c]||c},function(r){var c=r.minWidth;return r.theme.spaces[c]||c},function(r){var c=r.height;return r.theme.spaces[c]||c},function(r){var c=r.maxHeight;return r.theme.spaces[c]||c},function(r){var c=r.minHeight;return r.theme.spaces[c]||c},function(r){return r.transition},function(r){return r.transform},function(r){return r.animation},function(r){return r.shrink},function(r){return r.grow},function(r){return r.basis},function(r){return r.flex},function(r){return r.textAlign},function(r){return r.textTransform},function(r){return r.lineHeight},function(r){return r.cursor});I.defaultProps=p,I.propTypes=z},7:function(u,E,e){"use strict";var s=e(10),n=e.n(s),a=e(13),o=e.n(a);E.a=function(f,l,x){var O=l;if(Array.isArray(l)||o()(l)!=="object"||(O=[l==null?void 0:l.desktop,l==null?void 0:l.tablet,l==null?void 0:l.mobile]),O!==void 0){if(Array.isArray(O)){var T=O,y=n()(T,3),H=y[0],p=y[1],z=y[2],L="".concat(f,": ").concat(x.spaces[H],";");return p!==void 0&&(L+="".concat(x.mediaQueries.tablet,`{
          `).concat(f,": ").concat(x.spaces[p],`;
        }`)),z!==void 0&&(L+="".concat(x.mediaQueries.mobile,`{
          `).concat(f,": ").concat(x.spaces[z],`;
        }`)),L}var I=x.spaces[O]||O;return"".concat(f,": ").concat(I,";")}}}})})},11665:(ee,ne,m)=>{"use strict";m.r(ne),m.d(ne,{default:()=>$t});var i=m(67294),Z=m(15482),u=m(97132),E=m(68547),e=m(33407),s=m(78384),n=m(49656),a=m(80129),o=m(78862),f=m(62031),l=m(19408),x=m(80768),O=m.n(x),T=m(5493),y=m(14276),H=m(59522),p=m(26851),z=m(30741),L=m(49425),I=m(34626),r=m(67826),c=m(19352),t=m.n(c),d=m(33012),b=m(78971),Q=m(63509),X=m(6277),ie=m(9383),se=m(27954),le=m(73817),re=m(44466),D=m(45697),A=m.n(D);const G=({pagination:h})=>i.createElement(T.Box,{paddingTop:6},i.createElement(r.Flex,{alignItems:"flex-end",justifyContent:"space-between"},i.createElement(E.PageSizeURLQuery,null),i.createElement(E.PaginationURLQuery,{pagination:h})));G.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},G.propTypes={pagination:A().shape({page:A().number,pageCount:A().number,pageSize:A().number,total:A().number})};var be=m(31817),Y=m(23724),te=m(55994),pe=(h,g,v)=>new Promise((S,C)=>{var F=M=>{try{P(v.next(M))}catch(j){C(j)}},B=M=>{try{P(v.throw(M))}catch(j){C(j)}},P=M=>M.done?S(M.value):Promise.resolve(M.value).then(F,B);P((v=v.apply(h,g)).next())});const xe=(h,{enabled:g=!0})=>{const v=(0,E.useNotification)(),S=(0,e.IF)("folders"),C=()=>pe(void 0,null,function*(){try{const{data:M}=yield e.be.get(`${S}/${h}?populate=parent`);return M.data}catch(M){throw v({type:"warning",message:{id:(0,e.OB)("notification.warning.404"),defaultMessage:"Not found"}}),M}}),{data:F,error:B,isLoading:P}=(0,Y.useQuery)([te.Z,"folder",h],C,{retry:!1,enabled:g,staleTime:0,cacheTime:0});return{data:F,error:B,isLoading:P}};var Oe=m(70088),ue=m(9008),k=m(49826),et=m(15537),tt=m(18568),nt=m.n(tt),rt=m(2967),ot=(h,g,v)=>new Promise((S,C)=>{var F=M=>{try{P(v.next(M))}catch(j){C(j)}},B=M=>{try{P(v.throw(M))}catch(j){C(j)}},P=M=>M.done?S(M.value):Promise.resolve(M.value).then(F,B);P((v=v.apply(h,g)).next())});const Fe=({selected:h,onSuccess:g})=>{const{formatMessage:v}=(0,u.useIntl)(),[S,C]=(0,i.useState)(!1),{isLoading:F,remove:B}=(0,rt.K)(),P=()=>ot(void 0,null,function*(){yield B(h),g()});return i.createElement(i.Fragment,null,i.createElement(l.Button,{variant:"danger-light",size:"S",startIcon:i.createElement(nt(),null),onClick:()=>C(!0)},v({id:"global.delete",defaultMessage:"Delete"})),i.createElement(E.ConfirmDialog,{isConfirmButtonLoading:F,isOpen:S,onToggleDialog:()=>C(!1),onConfirm:P}))};Fe.propTypes={selected:A().arrayOf(k.pw,k.nx).isRequired,onSuccess:A().func.isRequired};var at=m(55874),it=m.n(at),st=m(80831),lt=m(41609),ut=m.n(lt),dt=m(40064),oe=m(75146),ct=m(91767),ft=Object.defineProperty,pt=Object.defineProperties,mt=Object.getOwnPropertyDescriptors,we=Object.getOwnPropertySymbols,gt=Object.prototype.hasOwnProperty,vt=Object.prototype.propertyIsEnumerable,Ae=(h,g,v)=>g in h?ft(h,g,{enumerable:!0,configurable:!0,writable:!0,value:v}):h[g]=v,Re=(h,g)=>{for(var v in g||(g={}))gt.call(g,v)&&Ae(h,v,g[v]);if(we)for(var v of we(g))vt.call(g,v)&&Ae(h,v,g[v]);return h},Ie=(h,g)=>pt(h,mt(g));const ht=()=>{const h=(0,E.useNotification)(),g=(0,Y.useQueryClient)(),v=(0,e.IF)("actions/bulk-move"),S=({destinationFolderId:B,filesAndFolders:P})=>{const M=P.reduce((j,N)=>{const{id:U,type:R}=N,$=R==="asset"?"fileIds":"folderIds";return j[$]||(j[$]=[]),j[$].push(U),j},{});return e.be.post(v,Ie(Re({},M),{destinationFolderId:B}))},C=(0,Y.useMutation)(S,{onSuccess:B=>{var P;const{data:{data:M}}=B;((P=M==null?void 0:M.files)==null?void 0:P.length)>0&&(g.refetchQueries([te.Z,"assets"],{active:!0}),g.refetchQueries([te.Z,"asset-count"],{active:!0})),g.refetchQueries([te.Z,"folders"],{active:!0}),h({type:"success",message:{id:(0,e.OB)("modal.move.success-label"),defaultMessage:"Elements have been moved successfully."}})}}),F=(B,P)=>C.mutateAsync({destinationFolderId:B,filesAndFolders:P});return Ie(Re({},C),{move:F})};var yt=m(76434),bt=m(20796),xt=(h,g,v)=>new Promise((S,C)=>{var F=M=>{try{P(v.next(M))}catch(j){C(j)}},B=M=>{try{P(v.throw(M))}catch(j){C(j)}},P=M=>M.done?S(M.value):Promise.resolve(M.value).then(F,B);P((v=v.apply(h,g)).next())});const Ee=({onClose:h,selected:g,currentFolder:v})=>{const{formatMessage:S}=(0,u.useIntl)(),{data:C,isLoading:F}=(0,bt.v)(),{move:B}=ht();if(!C)return null;const P=(N,U)=>xt(void 0,[N,U],function*(R,{setErrors:$}){try{yield B(R.destination.value,g),h()}catch(ve){const W=(0,E.getAPIInnerErrors)(ve,{getTrad:e.OB}),fe=Object.entries(W).reduce((K,[V,Pe])=>(K[V||"destination"]=Pe.defaultMessage,K),{});ut()(fe)||$(fe)}}),M=()=>{h()};if(F)return i.createElement(oe.ModalLayout,{onClose:M,labelledBy:"title"},i.createElement(oe.ModalBody,null,i.createElement(r.Flex,{justifyContent:"center",paddingTop:4,paddingBottom:4},i.createElement(dt.Loader,null,S({id:(0,e.OB)("list.asset.load"),defaultMessage:"Content is loading."})))));const j={destination:{value:(v==null?void 0:v.id)||"",label:(v==null?void 0:v.name)||C[0].label}};return i.createElement(oe.ModalLayout,{onClose:M,labelledBy:"title"},i.createElement(st.Formik,{validateOnChange:!1,onSubmit:P,initialValues:j},({values:N,errors:U,setFieldValue:R})=>i.createElement(E.Form,{noValidate:!0},i.createElement(oe.ModalHeader,null,i.createElement(L.Typography,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title"},S({id:(0,e.OB)("modal.folder.move.title"),defaultMessage:"Move elements to"}))),i.createElement(oe.ModalBody,null,i.createElement(I.Grid,{gap:4},i.createElement(I.GridItem,{xs:12,col:12},i.createElement(ue.Stack,{spacing:1},i.createElement(ct.FieldLabel,{htmlFor:"folder-destination"},S({id:(0,e.OB)("form.input.label.folder-location"),defaultMessage:"Location"})),i.createElement(yt.Z,{options:C,onChange:$=>{R("destination",$)},defaultValue:N.destination,name:"destination",menuPortalTarget:document.querySelector("body"),inputId:"folder-destination",error:U==null?void 0:U.destination,ariaErrorMessage:"destination-error"}),U.destination&&i.createElement(L.Typography,{variant:"pi",as:"p",id:"folder-destination-error",textColor:"danger600"},U.destination))))),i.createElement(oe.ModalFooter,{startActions:i.createElement(l.Button,{onClick:M,variant:"tertiary",name:"cancel"},S({id:"cancel",defaultMessage:"Cancel"})),endActions:i.createElement(l.Button,{type:"submit",loading:F},S({id:"modal.folder.move.submit",defaultMessage:"Move"}))}))))};Ee.defaultProps={currentFolder:void 0},Ee.propTypes={onClose:A().func.isRequired,currentFolder:k.nx,selected:A().arrayOf(k.nx,k.pw).isRequired};const Se=({selected:h,onSuccess:g,currentFolder:v})=>{const{formatMessage:S}=(0,u.useIntl)(),[C,F]=(0,i.useState)(!1),B=()=>{F(!1),g()};return i.createElement(i.Fragment,null,i.createElement(l.Button,{variant:"secondary",size:"S",startIcon:i.createElement(it(),null),onClick:()=>F(!0)},S({id:"global.move",defaultMessage:"Move"})),C&&i.createElement(Ee,{currentFolder:v,onClose:B,selected:h}))};Se.defaultProps={currentFolder:void 0},Se.propTypes={onSuccess:A().func.isRequired,currentFolder:k.nx,selected:A().arrayOf(k.pw,k.nx).isRequired};const Me=({selected:h,onSuccess:g,currentFolder:v})=>{const{formatMessage:S}=(0,u.useIntl)();return i.createElement(ue.Stack,{horizontal:!0,spacing:2,paddingBottom:5},i.createElement(L.Typography,{variant:"epsilon",textColor:"neutral600"},S({id:(0,et.Z)("list.assets.selected"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}} selected"},{numberFolders:h.filter(({type:C})=>C==="folder").length,numberAssets:h.filter(({type:C})=>C==="asset").length})),i.createElement(Fe,{selected:h,onSuccess:g}),i.createElement(Se,{currentFolder:v,selected:h,onSuccess:g}))};Me.defaultProps={currentFolder:void 0},Me.propTypes={onSuccess:A().func.isRequired,currentFolder:k.nx,selected:A().arrayOf(k.pw,k.nx).isRequired};var me=m(98101),Ot=m(23980),Et=m.n(Ot),St=m(51386),Mt=m(45219),ze=m(97581);const Tt=()=>{var h;const g=(0,i.useRef)(null),[v,S]=(0,i.useState)(!1),{formatMessage:C}=(0,u.useIntl)(),{trackUsage:F}=(0,E.useTracking)(),[{query:B},P]=(0,E.useQueryParams)(),M=((h=B==null?void 0:B.filters)==null?void 0:h.$and)||[],j=()=>S(R=>!R),N=R=>{P({filters:{$and:R},page:1})},U=R=>{F("didFilterMediaLibraryElements",{location:"content-manager",filter:Object.keys(R[R.length-1])[0]}),P({filters:{$and:R},page:1})};return i.createElement(i.Fragment,null,i.createElement(l.Button,{variant:"tertiary",ref:g,startIcon:i.createElement(Et(),null),onClick:j,size:"S"},C({id:"app.utils.filters",defaultMessage:"Filters"})),v&&i.createElement(Mt.Z,{displayedFilters:ze.Z,filters:M,onSubmit:U,onToggle:j,source:g}),i.createElement(St.Z,{appliedFilters:M,filtersSchema:ze.Z,onRemoveFilter:N}))};var Pt=m(85104),Ct=m(68717),Bt=m.n(Ct),jt=Object.defineProperty,Lt=Object.defineProperties,Ft=Object.getOwnPropertyDescriptors,De=Object.getOwnPropertySymbols,wt=Object.prototype.hasOwnProperty,At=Object.prototype.propertyIsEnumerable,He=(h,g,v)=>g in h?jt(h,g,{enumerable:!0,configurable:!0,writable:!0,value:v}):h[g]=v,Rt=(h,g)=>{for(var v in g||(g={}))wt.call(g,v)&&He(h,v,g[v]);if(De)for(var v of De(g))At.call(g,v)&&He(h,v,g[v]);return h},It=(h,g)=>Lt(h,Ft(g));const Te=({canCreate:h,onToggleEditFolderDialog:g,onToggleUploadAssetDialog:v,folder:S,assetCount:C,folderCount:F})=>{var B,P,M;const{formatMessage:j}=(0,u.useIntl)(),{pathname:N}=(0,n.useLocation)(),[{query:U}]=(0,E.useQueryParams)(),R=It(Rt({},U),{folder:(P=(B=S==null?void 0:S.parent)==null?void 0:B.id)!=null?P:void 0}),$=((M=S==null?void 0:S.name)==null?void 0:M.length)>30?`${S.name.slice(0,30)}...`:S==null?void 0:S.name;return i.createElement(o.HeaderLayout,{title:`${j({id:(0,e.OB)("plugin.name"),defaultMessage:"Media Library"})}${$?` - ${$}`:""}`,subtitle:j({id:(0,e.OB)("header.content.assets"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}}"},{numberAssets:C,numberFolders:F}),navigationAction:S&&i.createElement(Pt.Link,{startIcon:i.createElement(Bt(),null),to:`${N}?${(0,a.stringify)(R,{encode:!1})}`},j({id:(0,e.OB)("header.actions.folder-level-up"),defaultMessage:"Back"})),primaryAction:h&&i.createElement(ue.Stack,{horizontal:!0,spacing:2},i.createElement(l.Button,{startIcon:i.createElement(O(),null),variant:"secondary",onClick:g},j({id:(0,e.OB)("header.actions.add-folder"),defaultMessage:"Add new folder"})),i.createElement(l.Button,{startIcon:i.createElement(O(),null),onClick:v},j({id:(0,e.OB)("header.actions.add-assets"),defaultMessage:"Add new assets"})))})};Te.defaultProps={folder:null},Te.propTypes={assetCount:A().number.isRequired,canCreate:A().bool.isRequired,folder:k.nx,folderCount:A().number.isRequired,onToggleEditFolderDialog:A().func.isRequired,onToggleUploadAssetDialog:A().func.isRequired};var zt=Object.defineProperty,Dt=Object.defineProperties,Ht=Object.getOwnPropertyDescriptors,ge=Object.getOwnPropertySymbols,We=Object.prototype.hasOwnProperty,Qe=Object.prototype.propertyIsEnumerable,Ue=(h,g,v)=>g in h?zt(h,g,{enumerable:!0,configurable:!0,writable:!0,value:v}):h[g]=v,de=(h,g)=>{for(var v in g||(g={}))We.call(g,v)&&Ue(h,v,g[v]);if(ge)for(var v of ge(g))Qe.call(g,v)&&Ue(h,v,g[v]);return h},ce=(h,g)=>Dt(h,Ht(g)),Wt=(h,g)=>{var v={};for(var S in h)We.call(h,S)&&g.indexOf(S)<0&&(v[S]=h[S]);if(h!=null&&ge)for(var S of ge(h))g.indexOf(S)<0&&Qe.call(h,S)&&(v[S]=h[S]);return v};const Qt=(0,s.default)(T.Box)`
  height: ${32/16}rem;
  display: flex;
  align-items: center;
`,$e=(0,s.default)(L.Typography)`
  max-width: 100%;
`,Ut=()=>{var h,g,v,S;const{push:C}=(0,n.useHistory)(),{canRead:F,canCreate:B,canUpdate:P,canCopyLink:M,canDownload:j,isLoading:N}=(0,be.y)(),U=(0,i.useRef)(),{formatMessage:R}=(0,u.useIntl)(),{pathname:$}=(0,n.useLocation)(),{trackUsage:ve}=(0,E.useTracking)(),[{query:W},fe]=(0,E.useQueryParams)(),K=Boolean(W._q||W.filters),{data:V,isLoading:Pe,errors:kt}=(0,le.L)({skipWhen:!F,query:W}),{data:he,isLoading:Nt,errors:Vt}=(0,re.j)({enabled:F&&((h=V==null?void 0:V.pagination)==null?void 0:h.page)===1&&!(0,e.rV)(W),query:W}),{data:ke,isLoading:Zt,error:Ne}=xe(W==null?void 0:W.folder,{enabled:F&&!!(W!=null&&W.folder)});((g=Ne==null?void 0:Ne.response)==null?void 0:g.status)===404&&C($);const J=(he==null?void 0:he.length)||0,ye=V==null?void 0:V.results,q=(v=ye==null?void 0:ye.length)!=null?v:0,Ve=Zt||Nt||N||Pe,[Xt,Gt]=(0,i.useState)(!1),[Yt,Ze]=(0,i.useState)(!1),[Xe,Ge]=(0,i.useState)(void 0),[Ce,Ye]=(0,i.useState)(void 0),[_,{selectOne:Be,selectAll:Ke}]=(0,E.useSelectionState)(["type","id"],[]),je=()=>Gt(w=>!w),Je=({created:w=!1}={})=>{w&&(W==null?void 0:W.page)!=="1"&&fe(ce(de({},W),{page:1})),Ze(ae=>!ae)},Kt=w=>{ve("didSortMediaLibraryElements",{location:"upload",sort:w}),fe({sort:w})},Jt=w=>{Ye(w),Ze(!0)},qt=w=>{Ye(null),Je(w),U.current&&U.current.focus()};return(0,E.useFocusWhenNavigate)(),i.createElement(o.Layout,null,i.createElement(f.Main,{"aria-busy":Ve},i.createElement(Te,{assetCount:q,folderCount:J,canCreate:B,onToggleEditFolderDialog:Je,onToggleUploadAssetDialog:je,folder:ke}),i.createElement(o.ActionLayout,{startActions:i.createElement(i.Fragment,null,P&&(q>0||J>0)&&i.createElement(Qt,{paddingLeft:2,paddingRight:2,background:"neutral0",hasRadius:!0,borderColor:"neutral200"},i.createElement(H.BaseCheckbox,{"aria-label":R({id:(0,e.OB)("bulk.select.label"),defaultMessage:"Select all folders & assets"}),indeterminate:(_==null?void 0:_.length)>0&&(_==null?void 0:_.length)!==q+J,value:(q>0||J>0)&&_.length===q+J,onChange:w=>{w.target.checked&&ve("didSelectAllMediaLibraryElements"),Ke([...ye.map(ae=>ce(de({},ae),{type:"asset"})),...he.map(ae=>ce(de({},ae),{type:"folder"}))])}})),F&&i.createElement(se.Z,{onChangeSort:Kt}),F&&i.createElement(Tt,null)),endActions:i.createElement(E.SearchURLQuery,{label:R({id:(0,e.OB)("search.label"),defaultMessage:"Search for an asset"}),trackedEvent:"didSearchMediaLibraryElements",trackedEventDetails:{location:"upload"}})}),i.createElement(o.ContentLayout,null,_.length>0&&i.createElement(Me,{currentFolder:ke,selected:_,onSuccess:Ke}),Ve&&i.createElement(E.LoadingIndicatorPage,null),(kt||Vt)&&i.createElement(E.AnErrorOccurred,null),J===0&&q===0&&i.createElement(Oe.i,{action:B&&!K&&i.createElement(l.Button,{variant:"secondary",startIcon:i.createElement(O(),null),onClick:je},R({id:(0,e.OB)("header.actions.add-assets"),defaultMessage:"Add new assets"})),content:R(K?{id:(0,e.OB)("list.assets-empty.title-withSearch"),defaultMessage:"There are no elements with the applied filters"}:B?{id:(0,e.OB)("list.assets.empty"),defaultMessage:"Upload your first assets..."}:{id:(0,e.OB)("list.assets.empty.no-permissions"),defaultMessage:"The asset list is empty"})}),F?i.createElement(i.Fragment,null,J>0&&i.createElement(ie.$,{title:(K&&q>0||!K)&&R({id:(0,e.OB)("list.folders.title"),defaultMessage:"Folders"})||""},he.map(w=>{const _t=!!_.filter(({type:Le})=>Le==="folder").find(Le=>Le.id===w.id),qe=W,{_q:nn}=qe,en=Wt(qe,["_q"]),_e=`${$}?${(0,a.stringify)(ce(de({},en),{folder:w.id}))}`;return i.createElement(I.GridItem,{col:3,key:`folder-${w.id}`},i.createElement(me.Ac,{ref:Ce&&w.id===Ce.id?U:void 0,ariaLabel:w.name,id:`folder-${w.id}`,to:_e,startAction:Be&&i.createElement(me.MM,{"data-testid":`folder-checkbox-${w.id}`,value:_t,onChange:()=>Be(ce(de({},w),{type:"folder"}))}),cardActions:i.createElement(z.IconButton,{icon:i.createElement(t(),null),"aria-label":R({id:(0,e.OB)("list.folder.edit"),defaultMessage:"Edit folder"}),onClick:()=>Jt(w)})},i.createElement(me.Bu,null,i.createElement(me.u6,{to:_e},i.createElement(r.Flex,{as:"h2",direction:"column",alignItems:"start",maxWidth:"100%"},i.createElement($e,{fontWeight:"semiBold",ellipsis:!0},w.name,i.createElement(p.VisuallyHidden,null,":")),i.createElement($e,{as:"span",textColor:"neutral600",variant:"pi",ellipsis:!0},R({id:(0,e.OB)("list.folder.subtitle"),defaultMessage:"{folderCount, plural, =0 {# folder} one {# folder} other {# folders}}, {filesCount, plural, =0 {# asset} one {# asset} other {# assets}}"},{folderCount:w.children.count,filesCount:w.files.count})))))))})),q>0&&J>0&&i.createElement(T.Box,{paddingTop:6,paddingBottom:4},i.createElement(y.Divider,null)),q>0&&i.createElement(i.Fragment,null,i.createElement(X.l,{assets:ye,onEditAsset:Ge,onSelectAsset:Be,selectedAssets:_.filter(({type:w})=>w==="asset"),title:(!K||K&&J>0)&&((S=V==null?void 0:V.pagination)==null?void 0:S.page)===1&&R({id:(0,e.OB)("list.assets.title"),defaultMessage:"Assets"})||""}),(V==null?void 0:V.pagination)&&i.createElement(G,{pagination:V.pagination}))):i.createElement(E.NoPermissions,null))),Xt&&i.createElement(d.x,{onClose:je,trackedLocation:"upload",folderId:W==null?void 0:W.folder}),Yt&&i.createElement(b.f,{onClose:qt,folder:Ce,parentFolderId:W==null?void 0:W.folder,location:"upload"}),Xe&&i.createElement(Q.s,{onClose:()=>Ge(void 0),asset:Xe,canUpdate:P,canCopyLink:M,canDownload:j,trackedLocation:"upload"}))},$t=()=>{const[{rawQuery:h},g]=(0,E.useQueryParams)(),{formatMessage:v}=(0,u.useIntl)(),S=v({id:(0,e.OB)("plugin.name"),defaultMessage:"Media Library"});return(0,i.useEffect)(()=>{h||g({sort:"updatedAt:DESC",page:1,pageSize:10})},[h,g]),h?i.createElement(i.Fragment,null,i.createElement(Z.Helmet,{title:S}),i.createElement(Ut,null)):null}}}]);
