(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[135],{3725:function(e,t,r){"use strict";r.d(t,{x:function(){return d}});var n=r(7294),a=r(3967),o=r.n(a),u=r(8426);let l={display:{type:"enum",values:["none","inline","inline-block","block"],default:void 0,responsive:!0}};var i=r(3843),s=r(134),f=r(6776);let d=n.forwardRef((e,t)=>{let{rest:r,...a}=(0,i.FY)(e),{rest:d,...c}=(0,s.F8)(r),{className:p,asChild:v,display:m=l.display.default,...y}=d,g=v?u.g7:"div";return n.createElement(g,{...y,ref:t,className:o()("rt-Box",p,(0,f.g)(m,"rt-r-display"),(0,s.yt)(c),(0,i.we)(a))})});d.displayName="Box"},5768:function(e,t,r){"use strict";r.d(t,{z:function(){return m}});var n=r(7294),a=r(3967),o=r.n(a),u=r(8426),l=r(8291),i=r(6679),s=r(269);let f={type:"enum",values:s.yT.radius.values,default:void 0},d={size:{type:"enum",values:["1","2","3","4"],default:"2",responsive:!0},variant:{type:"enum",values:["classic","solid","soft","surface","outline","ghost"],default:"solid"},color:l.m,highContrast:i.B,radius:f};var c=r(3843),p=r(6776);let v=n.forwardRef((e,t)=>{let{rest:r,...a}=(0,c.FY)(e),{className:l,asChild:i=!1,size:s=d.size.default,variant:f=d.variant.default,color:v=d.color.default,highContrast:m=d.highContrast.default,radius:y=d.radius.default,...g}=r,h=i?u.g7:"button";return n.createElement(h,{"data-disabled":g.disabled||void 0,"data-accent-color":v,"data-radius":y,...g,ref:t,className:o()("rt-reset","rt-BaseButton",l,(0,p.g)(s,"rt-r-size"),`rt-variant-${f}`,{"rt-high-contrast":m},(0,c.we)(a))})});v.displayName="BaseButton";let m=n.forwardRef((e,t)=>n.createElement(v,{...e,ref:t,className:o()("rt-Button",e.className)}));m.displayName="Button"},5877:function(e,t,r){"use strict";r.d(t,{k:function(){return d}});var n=r(7294),a=r(3967),o=r.n(a),u=r(8426);let l={display:{type:"enum",values:["none","inline-flex","flex"],default:"flex",responsive:!0},direction:{type:"enum",values:["row","column","row-reverse","column-reverse"],default:void 0,responsive:!0},align:{type:"enum",values:["start","center","end","baseline","stretch"],default:void 0,responsive:!0},justify:{type:"enum",values:["start","center","end","between"],default:"start",responsive:!0},wrap:{type:"enum",values:["nowrap","wrap","wrap-reverse"],default:void 0,responsive:!0},gap:{type:"enum",values:["0","1","2","3","4","5","6","7","8","9"],default:void 0,responsive:!0}};var i=r(3843),s=r(134),f=r(6776);let d=n.forwardRef((e,t)=>{let{rest:r,...a}=(0,i.FY)(e),{rest:d,...c}=(0,s.F8)(r),{className:p,asChild:v,display:m=l.display.default,direction:y=l.direction.default,align:g=l.align.default,justify:h=l.justify.default,wrap:b=l.wrap.default,gap:w=l.gap.default,...k}=d,x=v?u.g7:"div";return n.createElement(x,{...k,ref:t,className:o()("rt-Flex",p,(0,f.g)(m,"rt-r-display"),(0,f.g)(y,"rt-r-fd"),(0,f.g)(g,"rt-r-ai"),(0,f.g)(h,"rt-r-jc",{between:"space-between"}),(0,f.g)(b,"rt-r-fw"),(0,f.g)(w,"rt-r-gap"),(0,s.yt)(c),(0,i.we)(a))})});d.displayName="Flex"},8638:function(e,t,r){"use strict";r.d(t,{r:function(){return c}});var n=r(7294),a=r(3967),o=r.n(a),u=r(8426);let l=["0","1","2","3","4","5","6","7","8","9"],i={display:{type:"enum",values:["none","inline-grid","grid"],default:void 0,responsive:!0},columns:{type:"string",default:void 0,responsive:!0},rows:{type:"string",default:void 0,responsive:!0},flow:{type:"enum",values:["row","column","dense","row-dense","column-dense"],default:void 0,responsive:!0},align:{type:"enum",values:["start","center","end","baseline","stretch"],default:void 0,responsive:!0},justify:{type:"enum",values:["start","center","end","between"],default:void 0,responsive:!0},gap:{type:"enum",values:l,default:void 0,responsive:!0},gapX:{type:"enum",values:l,default:void 0,responsive:!0},gapY:{type:"enum",values:l,default:void 0,responsive:!0}};var s=r(3843),f=r(134),d=r(6776);function has_own_property_hasOwnProperty(e,t){return Object.prototype.hasOwnProperty.call(e,t)}let c=n.forwardRef((e,t)=>{let{rest:r,...a}=(0,s.FY)(e),{rest:l,...c}=(0,f.F8)(r),{className:p,asChild:v,display:m=i.display.default,columns:y=i.columns.default,rows:g=i.rows.default,flow:h=i.flow.default,align:b=i.align.default,justify:w=i.justify.default,gap:k=i.gap.default,gapX:x=i.gapX.default,gapY:_=i.gapY.default,style:P,...O}=l,j=v?u.g7:"div",C={...P};if("string"==typeof y&&(C={"--grid-template-columns-initial":parseGridValue(y),...C}),"string"==typeof g&&(C={"--grid-template-rows-initial":parseGridValue(g),...C}),(0,d.w)(y)){for(let e in y)if(has_own_property_hasOwnProperty(y,e)){let t=`--grid-template-columns-${e}`;C={[t]:parseGridValue(y[e]),...C}}}if((0,d.w)(g)){for(let e in g)if(has_own_property_hasOwnProperty(g,e)){let t=`--grid-template-rows-${e}`;C={[t]:parseGridValue(g[e]),...C}}}return n.createElement(j,{...O,ref:t,className:o()("rt-Grid",p,(0,d.g)(m,"rt-r-display"),(0,d.g)(h,"rt-r-gaf"),(0,d.g)(b,"rt-r-ai"),(0,d.g)(w,"rt-r-jc",{between:"space-between"}),(0,d.g)(k,"rt-r-gap"),(0,d.g)(x,"rt-r-cg"),(0,d.g)(_,"rt-r-rg"),(0,f.yt)(c),(0,s.we)(a)),style:Object.keys(C).length?C:void 0})});function parseGridValue(e){return(null==e?void 0:e.match(/^\d+$/))?`repeat(${e}, minmax(0, 1fr))`:e}c.displayName="Grid"},2627:function(e,t,r){"use strict";r.d(t,{r:function(){return s}});var n=r(7294),a=r(3967),o=r.n(a),u=r(6445),l=r(4778);let i={size:l.S.size,weight:l.S.weight,trim:l.S.trim,underline:{type:"enum",values:["auto","hover","always"],default:"auto"},color:l.S.color,highContrast:l.S.highContrast},s=n.forwardRef((e,t)=>{let{children:r,className:a,asChild:l=!1,underline:s=i.underline.default,...f}=e;return n.createElement(u.x,{...f,ref:t,asChild:!0,className:o()("rt-reset","rt-Link",a,`rt-underline-${s}`)},l?r:n.createElement("a",null,r))});s.displayName="Link"},6445:function(e,t,r){"use strict";r.d(t,{x:function(){return f}});var n=r(7294),a=r(3967),o=r.n(a),u=r(8426),l=r(4778),i=r(3843),s=r(6776);let f=n.forwardRef((e,t)=>{let{rest:r,...a}=(0,i.FY)(e),{children:f,className:d,asChild:c=!1,as:p="span",size:v=l.S.size.default,weight:m=l.S.weight.default,align:y=l.S.align.default,trim:g=l.S.trim.default,color:h=l.S.color.default,highContrast:b=l.S.highContrast.default,...w}=r;return n.createElement(u.g7,{"data-accent-color":h,...w,ref:t,className:o()("rt-Text",d,(0,s.g)(v,"rt-r-size"),(0,s.g)(m,"rt-r-weight"),(0,s.g)(y,"rt-r-ta"),(0,s.g)(g,"rt-r-lt"),{"rt-high-contrast":b},(0,i.we)(a))},c?f:n.createElement(p,null,f))});f.displayName="Text"},4778:function(e,t,r){"use strict";r.d(t,{S:function(){return o}});var n=r(8291),a=r(6679);let o={size:{type:"enum",values:["1","2","3","4","5","6","7","8","9"],default:void 0,responsive:!0},weight:{type:"enum",values:["light","regular","medium","bold"],default:void 0,responsive:!0},align:{type:"enum",values:["left","center","right"],default:void 0,responsive:!0},trim:{type:"enum",values:["normal","start","end","both"],default:void 0,responsive:!0},color:n.m,highContrast:a.B}},6776:function(e,t,r){"use strict";function withBreakpoints(e,t="",r){var n,a,o,u;let l=[];if("object"==typeof e){for(let o of Object.keys(e))if(o in e){let u=null===(n=e[o])||void 0===n?void 0:n.toString(),i=null==u?void 0:u.startsWith("-"),s=""===t?"":"-",f=i?`-${t}`:t,d=i?null==u?void 0:u.substring(1):u;if(void 0===d)continue;let c=null!==(a=null==r?void 0:r[d])&&void 0!==a?a:d,p="initial"===o?`${f}${s}${c}`:`${o}:${f}${s}${c}`;l.push(p)}}if("string"==typeof e){let n=e.startsWith("-"),a=""===t?"":"-",u=n?`-${t}`:t,i=n?e.substring(1):e,s=null!==(o=null==r?void 0:r[i])&&void 0!==o?o:i;l.push(`${u}${a}${s}`)}if("boolean"==typeof e){let n=""===t?"":"-",a=e.toString(),o=null!==(u=null==r?void 0:r[a])&&void 0!==u?u:a;l.push(`${t}${n}${o}`)}return l.join(" ")}function isBreakpointsObject(e){return"object"==typeof e}r.d(t,{g:function(){return withBreakpoints},w:function(){return isBreakpointsObject}})},8291:function(e,t,r){"use strict";r.d(t,{m:function(){return a}});var n=r(269);let a={type:"enum",values:n.yT.accentColor.values,default:void 0}},6679:function(e,t,r){"use strict";r.d(t,{B:function(){return n}});let n={type:"boolean",default:void 0}},134:function(e,t,r){"use strict";r.d(t,{F8:function(){return extractLayoutProps},yt:function(){return withLayoutProps}});var n=r(6776);let a=["0","1","2","3","4","5","6","7","8","9"];function extractPaddingProps(e){let{p:t=l.p.default,px:r=l.px.default,py:n=l.py.default,pt:a=l.pt.default,pr:o=l.pr.default,pb:u=l.pb.default,pl:i=l.pl.default,...s}=e;return{p:t,px:r,py:n,pt:a,pr:o,pb:u,pl:i,rest:s}}function withPaddingProps(e){return[(0,n.g)(e.p,"rt-r-p"),(0,n.g)(e.px,"rt-r-px"),(0,n.g)(e.py,"rt-r-py"),(0,n.g)(e.pt,"rt-r-pt"),(0,n.g)(e.pr,"rt-r-pr"),(0,n.g)(e.pb,"rt-r-pb"),(0,n.g)(e.pl,"rt-r-pl")].filter(Boolean).join(" ")}let o=["auto","0","50%","100%"],u=["auto","min-content","max-content","100%","0","1","2","3","4","5","6","7","8","9"],l={p:{type:"enum",values:a,default:void 0,responsive:!0},px:{type:"enum",values:a,default:void 0,responsive:!0},py:{type:"enum",values:a,default:void 0,responsive:!0},pt:{type:"enum",values:a,default:void 0,responsive:!0},pr:{type:"enum",values:a,default:void 0,responsive:!0},pb:{type:"enum",values:a,default:void 0,responsive:!0},pl:{type:"enum",values:a,default:void 0,responsive:!0},position:{type:"enum",values:["static","relative","absolute","fixed","sticky"],default:void 0,responsive:!0},inset:{type:"enum",values:o,default:void 0,responsive:!0},top:{type:"enum",values:o,default:void 0,responsive:!0},right:{type:"enum",values:o,default:void 0,responsive:!0},bottom:{type:"enum",values:o,default:void 0,responsive:!0},left:{type:"enum",values:o,default:void 0,responsive:!0},width:{type:"enum",values:u,default:void 0,responsive:!0},height:{type:"enum",values:u,default:void 0,responsive:!0},shrink:{type:"enum",values:["0","1"],default:void 0,responsive:!0},grow:{type:"enum",values:["0","1"],default:void 0,responsive:!0}};function extractLayoutProps(e){let{rest:t,...r}=extractPaddingProps(e),{position:n=l.position.default,width:a=l.width.default,height:o=l.height.default,inset:u=l.inset.default,top:i=l.top.default,bottom:s=l.bottom.default,left:f=l.left.default,right:d=l.right.default,shrink:c=l.shrink.default,grow:p=l.grow.default,...v}=t;return{...r,position:n,width:a,height:o,inset:u,top:i,bottom:s,left:f,right:d,shrink:c,grow:p,rest:v}}function withLayoutProps(e){return[withPaddingProps(e),(0,n.g)(e.position,"rt-r-position"),(0,n.g)(e.shrink,"rt-r-fs"),(0,n.g)(e.grow,"rt-r-fg"),(0,n.g)(e.width,"rt-r-w"),(0,n.g)(e.height,"rt-r-h"),(0,n.g)(e.inset,"rt-r-inset"),(0,n.g)(e.top,"rt-r-top"),(0,n.g)(e.bottom,"rt-r-bottom"),(0,n.g)(e.left,"rt-r-left"),(0,n.g)(e.right,"rt-r-right")].filter(Boolean).join(" ")}},3843:function(e,t,r){"use strict";r.d(t,{FY:function(){return extractMarginProps},we:function(){return withMarginProps}});var n=r(6776);let a=["auto","0","1","2","3","4","5","6","7","8","9","-1","-2","-3","-4","-5","-6","-7","-8","-9"],o={m:{type:"enum",values:a,default:void 0,responsive:!0},mx:{type:"enum",values:a,default:void 0,responsive:!0},my:{type:"enum",values:a,default:void 0,responsive:!0},mt:{type:"enum",values:a,default:void 0,responsive:!0},mr:{type:"enum",values:a,default:void 0,responsive:!0},mb:{type:"enum",values:a,default:void 0,responsive:!0},ml:{type:"enum",values:a,default:void 0,responsive:!0}};function extractMarginProps(e){let{m:t=o.m.default,mx:r=o.mx.default,my:n=o.my.default,mt:a=o.mt.default,mr:u=o.mr.default,mb:l=o.mb.default,ml:i=o.ml.default,...s}=e;return{m:t,mx:r,my:n,mt:a,mr:u,mb:l,ml:i,rest:s}}function withMarginProps(e){return[(0,n.g)(e.m,"rt-r-m"),(0,n.g)(e.mx,"rt-r-mx"),(0,n.g)(e.my,"rt-r-my"),(0,n.g)(e.mt,"rt-r-mt"),(0,n.g)(e.mr,"rt-r-mr"),(0,n.g)(e.mb,"rt-r-mb"),(0,n.g)(e.ml,"rt-r-ml")].filter(Boolean).join(" ")}},4297:function(e,t,r){"use strict";r.d(t,{Z:function(){return createLucideIcon}});var n=r(7294),a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let toKebabCase=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),createLucideIcon=(e,t)=>{let r=(0,n.forwardRef)(({color:r="currentColor",size:o=24,strokeWidth:u=2,absoluteStrokeWidth:l,className:i="",children:s,...f},d)=>(0,n.createElement)("svg",{ref:d,...a,width:o,height:o,stroke:r,strokeWidth:l?24*Number(u)/Number(o):u,className:["lucide",`lucide-${toKebabCase(e)}`,i].join(" "),...f},[...t.map(([e,t])=>(0,n.createElement)(e,t)),...Array.isArray(s)?s:[s]]));return r.displayName=`${e}`,r}},5283:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(4297);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,n.Z)("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]])},8483:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(4297);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,n.Z)("PhoneForwarded",[["polyline",{points:"18 2 22 6 18 10",key:"6vjanh"}],["line",{x1:"14",x2:"22",y1:"6",y2:"6",key:"1jsywh"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]])},5539:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(4297);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,n.Z)("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]])},7498:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return a},ACTION_NAVIGATE:function(){return o},ACTION_RESTORE:function(){return u},ACTION_SERVER_PATCH:function(){return l},ACTION_PREFETCH:function(){return i},ACTION_FAST_REFRESH:function(){return s},ACTION_SERVER_ACTION:function(){return f}});let a="refresh",o="navigate",u="restore",l="server-patch",i="prefetch",s="fast-refresh",f="server-action";(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30:function(e,t,r){"use strict";function getDomainLocale(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),r(2866),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5170:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return h}});let n=r(8754),a=n._(r(7294)),o=r(4450),u=r(2227),l=r(4364),i=r(109),s=r(3607),f=r(1823),d=r(9031),c=r(920),p=r(30),v=r(7192),m=r(7498),y=new Set;function prefetch(e,t,r,n,a,o){if(!o&&!(0,u.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let a=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,o=t+"%"+r+"%"+a;if(y.has(o))return;y.add(o)}let l=o?e.prefetch(t,a):e.prefetch(t,r,n);Promise.resolve(l).catch(e=>{})}function isModifiedEvent(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}function linkClicked(e,t,r,n,o,l,i,s,f,d){let{nodeName:c}=e.currentTarget,p="A"===c.toUpperCase();if(p&&(isModifiedEvent(e)||!f&&!(0,u.isLocalURL)(r)))return;e.preventDefault();let navigate=()=>{let e=null==i||i;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:l,locale:s,scroll:e}):t[o?"replace":"push"](n||r,{forceOptimisticNavigation:!d,scroll:e})};f?a.default.startTransition(navigate):navigate()}function formatStringOrUrl(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}let g=a.default.forwardRef(function(e,t){let r,n;let{href:u,as:l,children:y,prefetch:g=null,passHref:h,replace:b,shallow:w,scroll:k,locale:x,onClick:_,onMouseEnter:P,onTouchStart:O,legacyBehavior:j=!1,...C}=e;r=y,j&&("string"==typeof r||"number"==typeof r)&&(r=a.default.createElement("a",null,r));let E=a.default.useContext(f.RouterContext),M=a.default.useContext(d.AppRouterContext),N=null!=E?E:M,R=!E,S=!1!==g,L=null===g?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,{href:T,as:$}=a.default.useMemo(()=>{if(!E){let e=formatStringOrUrl(u);return{href:e,as:l?formatStringOrUrl(l):e}}let[e,t]=(0,o.resolveHref)(E,u,!0);return{href:e,as:l?(0,o.resolveHref)(E,l):t||e}},[E,u,l]),A=a.default.useRef(T),I=a.default.useRef($);j&&(n=a.default.Children.only(r));let B=j?n&&"object"==typeof n&&n.ref:t,[F,z,U]=(0,c.useIntersection)({rootMargin:"200px"}),V=a.default.useCallback(e=>{(I.current!==$||A.current!==T)&&(U(),I.current=$,A.current=T),F(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[$,B,T,U,F]);a.default.useEffect(()=>{N&&z&&S&&prefetch(N,T,$,{locale:x},{kind:L},R)},[$,T,z,x,S,null==E?void 0:E.locale,N,R,L]);let K={ref:V,onClick(e){j||"function"!=typeof _||_(e),j&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),N&&!e.defaultPrevented&&linkClicked(e,N,T,$,b,w,k,x,R,S)},onMouseEnter(e){j||"function"!=typeof P||P(e),j&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),N&&(S||!R)&&prefetch(N,T,$,{locale:x,priority:!0,bypassPrefetchedCheck:!0},{kind:L},R)},onTouchStart(e){j||"function"!=typeof O||O(e),j&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),N&&(S||!R)&&prefetch(N,T,$,{locale:x,priority:!0,bypassPrefetchedCheck:!0},{kind:L},R)}};if((0,i.isAbsoluteUrl)($))K.href=$;else if(!j||h||"a"===n.type&&!("href"in n.props)){let e=void 0!==x?x:null==E?void 0:E.locale,t=(null==E?void 0:E.isLocaleDomain)&&(0,p.getDomainLocale)($,e,null==E?void 0:E.locales,null==E?void 0:E.domainLocales);K.href=t||(0,v.addBasePath)((0,s.addLocale)($,e,null==E?void 0:E.defaultLocale))}return j?a.default.cloneElement(n,K):a.default.createElement("a",{...C,...K},r)}),h=g;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},920:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let n=r(7294),a=r(3436),o="function"==typeof IntersectionObserver,u=new Map,l=[];function createObserver(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=l.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=u.get(n)))return t;let a=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=a.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:o,elements:a},l.push(r),u.set(r,t),t}function observe(e,t,r){let{id:n,observer:a,elements:o}=createObserver(r);return o.set(e,t),a.observe(e),function(){if(o.delete(e),a.unobserve(e),0===o.size){a.disconnect(),u.delete(n);let e=l.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&l.splice(e,1)}}}function useIntersection(e){let{rootRef:t,rootMargin:r,disabled:u}=e,l=u||!o,[i,s]=(0,n.useState)(!1),f=(0,n.useRef)(null),d=(0,n.useCallback)(e=>{f.current=e},[]);(0,n.useEffect)(()=>{if(o){if(l||i)return;let e=f.current;if(e&&e.tagName){let n=observe(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!i){let e=(0,a.requestIdleCallback)(()=>s(!0));return()=>(0,a.cancelIdleCallback)(e)}},[l,r,t,i,f.current]);let c=(0,n.useCallback)(()=>{s(!1)},[]);return[d,i,c]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9008:function(e,t,r){e.exports=r(9201)},1664:function(e,t,r){e.exports=r(5170)}}]);