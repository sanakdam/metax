/*! For license information please see home.04828dbf9f6ca4fcd012.js.LICENSE.txt */
(self.webpackChunkmetax=self.webpackChunkmetax||[]).push([[177],{2701:(e,r,t)=>{"use strict";t.d(r,{Z:()=>h});var n=t(7294),o=t(5697),i=t.n(o),a=t(9163),c=(0,a.iv)(["color:",";background:",";height:40px;border-radius:6px;:hover{color:",";background:",";}"],(function(e){return e.theme.color.black}),(function(e){return e.theme.color.white}),(function(e){return e.theme.color.white}),(function(e){return e.theme.color.black})),l=(0,a.iv)(["color:",";background:",";height:29px;border-radius:20px;:hover{color:",";background:",";}"],(function(e){return e.theme.color.white}),(function(e){return e.theme.color.black}),(function(e){return e.theme.color.black}),(function(e){return e.theme.color.white})),u=(0,a.iv)(["color:",";background:",";height:29px;border-radius:20px;:hover{color:",";background:",";}"],(function(e){return e.theme.color.black}),(function(e){return e.theme.color.white}),(function(e){return e.theme.color.white}),(function(e){return e.theme.color.black})),s=a.ZP.button.withConfig({componentId:"sc-12dzkwh-0"})(["",";",";font-size:14px;user-select:none;border:1px solid ",";padding:0 10px;box-sizing:border-box;width:100%;:focus,:active:focus{box-shadow:none;}"],(function(e){return e.variant}),(function(e){return e.theme.text.bold}),(function(e){return e.theme.color.white})),f=["children","loading","variant"];function p(){return p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},p.apply(this,arguments)}function d(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m={normal:c,outlined:l,contained:u},g=function(e){var r=e.children,t=e.loading,o=e.variant,i=d(e,f);return n.createElement(s,p({},i,{variant:m[o]}),t?"Loading..":r)};g.defaultProps={variant:"normal",loading:!1},g.propTypes={loading:i().bool,variant:i().oneOf(["normal","outlined","contained"]),children:i().string.isRequired};const h=g},641:(e,r,t)=>{"use strict";t.d(r,{Z:()=>p});var n=t(7294),o=t(5697),i=t.n(o),a=t(9163),c=a.ZP.div.withConfig({componentId:"sc-8lmt1m-0"})(["",";"],(function(e){return e.shimer&&"\n    background: ".concat(e.theme.color.shimer,";\n  ")})),l=a.ZP.img.attrs((function(e){return{src:e.src,alt:e.alt}})).withConfig({componentId:"sc-8lmt1m-1"})(["display:block;"]);function u(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(i.push(n.value),!r||i.length!==r);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return s(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return s(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var f=function(e){var r=e.className,t=e.source,o=e.alt,i=u(n.useState(!1),2),a=i[0],s=i[1],f=u(n.useState(!1),2),p=f[0],d=f[1],m=n.useMemo((function(){return t&&!a?t:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAQAAACTbf5ZAAAAiklEQVR42u3PMQEAAAwCoNm/9Cr4Cw3IjYmwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsHDrASUpAHnJhbktAAAAAElFTkSuQmCC"}),[t,a]),g=n.useMemo((function(){return!(t&&p&&!a)}),[t,p,a]),h=n.useCallback((function(){d(!!t)}),[t,d]),y=n.useCallback((function(){s(!0)}),[s]);return n.createElement(c,{shimer:g,className:r},n.createElement(l,{className:r,src:m,alt:o,onLoad:h,onError:y}))};f.defaultProps={alt:"Image"},f.propTypes={className:i().string,source:i().string,alt:i().string};const p=f},1490:(e,r,t)=>{"use strict";t.d(r,{Z:()=>o});var n=t(7563);const o={stringify:function(e){var r=function(e){var r=e;for(var t in r)null!==r[t]&&void 0!==r[t]&&""!==r[t]||delete r[t];return r}(e);return n.stringify(r)},parse:function(e){return n.parse(e)}}},8055:(e,r,t)=>{"use strict";function n(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return o(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}t.d(r,{Z:()=>i});const i=function(e){return n(Array(e).keys()).map((function(){return{id:"",name:"",username:"",avater:"",isFollowing:!1}}))}},8442:(e,r,t)=>{"use strict";t.d(r,{Z:()=>ce});var n=t(7294),o=t(5697),i=t.n(o),a=t(6974),c=t(8216);function l(e,r,t,n,o,i,a){try{var c=e[i](a),l=c.value}catch(e){return void t(e)}c.done?r(l):Promise.resolve(l).then(n,o)}var u=function(e,r){return fetch("https://avl-frontend-exam.herokuapp.com/api/users/friends?page=".concat(e,"&pageSize=").concat(r),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))},s=function(e,r){return e({type:"PROFILE_LIST_FOLLOWING_FAILURE",error:r})};const f=function(e,r){return function(){var t,n=(t=regeneratorRuntime.mark((function t(n){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"PROFILE_LIST_FOLLOWING_BEGIN"}),t.next=4,u(e,r);case 4:o=t.sent,n({type:"PROFILE_LIST_FOLLOWING_SUCCESS",payload:o.data||[],pages:o.totalPages||1}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),s(n,t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(e){l(i,n,o,a,c,"next",e)}function c(e){l(i,n,o,a,c,"throw",e)}a(void 0)}))});return function(e){return n.apply(this,arguments)}}()};function p(e,r,t,n,o,i,a){try{var c=e[i](a),l=c.value}catch(e){return void t(e)}c.done?r(l):Promise.resolve(l).then(n,o)}var d=function(e,r){return fetch("https://avl-frontend-exam.herokuapp.com/api/users/all?page=".concat(e,"&pageSize=").concat(r),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))},m=function(e,r){return e({type:"PROFILE_LIST_FOLLOWER_FAILURE",error:r})};const g=function(e,r){return function(){var t,n=(t=regeneratorRuntime.mark((function t(n){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"PROFILE_LIST_FOLLOWER_BEGIN"}),t.next=4,d(e,r);case 4:o=t.sent,n({type:"PROFILE_LIST_FOLLOWER_SUCCESS",payload:o.data||[],pages:o.totalPages||1}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),m(n,t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(e){p(i,n,o,a,c,"next",e)}function c(e){p(i,n,o,a,c,"throw",e)}a(void 0)}))});return function(e){return n.apply(this,arguments)}}()};var h=t(9163),y=t(1555),v=h.ZP.div.withConfig({componentId:"sc-1knibk-0"})(["display:grid;grid-template-columns:repeat(2,1fr);grid-gap:0;"]),b=h.ZP.div.withConfig({componentId:"sc-1knibk-1"})(["padding:32px 12px 12px 12px;display:flex;justify-content:center;border-bottom:2px solid ",";",";color:",";font-size:16px;cursor:pointer;user-select:none;",";"],(function(e){return e.theme.color.black}),(function(e){return e.theme.text.normal}),(function(e){return e.theme.color.greyLight}),(function(e){return e.active&&"\n    ".concat(e.theme.text.bold,";\n    border-bottom: 2px solid ").concat(e.theme.color.white,";\n    color: ").concat(e.theme.color.white,";\n  ")})),w=function(e){var r=e.current,t=e.value,o=e.name,i=e.onChange,a=n.useMemo((function(){return r===t}),[r,t]),c=n.useCallback((function(){r!==t&&i(t)}),[r,t,i]);return n.createElement(b,{active:a,onClick:c},o)};w.propTypes={current:i().string,value:i().string,name:i().string,onChange:i().func.isRequired};const x=w;var C=function(e){var r=e.current,t=e.items,o=e.onChange;return n.createElement(v,null,t.map((function(e,t){return n.createElement(x,{key:t,name:e.name,value:e.value,current:r,onChange:o})})))};C.propTypes={current:i().string,items:i().arrayOf(i().shape({name:i().string,value:i().string})).isRequired,onChange:i().func.isRequired};const k=C;var O=t(9313),E=(0,h.ZP)(y.Z).withConfig({componentId:"sc-9akh10-0"})(["height:calc(100vh - 70px);overflow:auto;"]),I=(0,h.ZP)(O.Z).withConfig({componentId:"sc-9akh10-1"})(["",";font-size:14px;color:",";"],(function(e){return e.theme.text.normal}),(function(e){return e.theme.color.white})),S=t(1490),j=t(8055),A=[{name:"Followers",value:"followers"},{name:"Following",value:"following"}];const L={items:A,get:function(e){var r=A.filter((function(r){return r.value===e}));return r.length>0?r[0].value:A[0].value}};var F=t(641),P=t(2701),Z=h.ZP.div.withConfig({componentId:"sc-1mk5ag7-0"})(["display:grid;grid-template-columns:auto 1fr auto;grid-gap:16px;padding:10px 16px;align-items:center;"]),R=(0,h.ZP)(F.Z).withConfig({componentId:"sc-1mk5ag7-1"})(["width:40px;height:40px;object-fit:cover;object-position:center;border:1px solid ",";border-radius:5px;"],(function(e){return e.theme.color.border})),N=h.ZP.div.withConfig({componentId:"sc-1mk5ag7-2"})(["display:grid;grid-template-columns:1fr;grid-gap:4px;"]),T=(0,h.ZP)(O.Z).withConfig({componentId:"sc-1mk5ag7-3"})(["",";color:",";font-size:16px;line-height:120%;"],(function(e){return e.theme.text.normal}),(function(e){return e.theme.color.white})),V=(0,h.ZP)(O.Z).withConfig({componentId:"sc-1mk5ag7-4"})(["",";color:",";font-size:14px;line-height:120%;"],(function(e){return e.theme.text.normal}),(function(e){return e.theme.color.greyLight})),$=function(e){var r=e.itemId,t=e.username,o=e.name,i=e.avatar,a=e.isFollowing,c=n.useMemo((function(){return t?"@".concat(t):""}),[t]),l=n.useMemo((function(){return r?a?n.createElement(P.Z,{variant:"contained"},"Following"):n.createElement(P.Z,{variant:"outlined"},"Follow"):null}),[r,a]);return n.createElement(Z,null,n.createElement(R,{source:i}),n.createElement(N,null,n.createElement(T,null,o),n.createElement(V,null,c)),l)};$.defaultProps={isFollowing:!1},$.propTypes={itemId:i().string,name:i().string,username:i().string,avatar:i().string,isFollowing:i().bool};const _=$;function U(){return U=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},U.apply(this,arguments)}function M(e,r){return M=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},M(e,r)}var z=new Map,q=new WeakMap,B=0,G=void 0;function W(e){return Object.keys(e).sort().filter((function(r){return void 0!==e[r]})).map((function(r){return r+"_"+("root"===r?(t=e.root)?(q.has(t)||(B+=1,q.set(t,B.toString())),q.get(t)):"0":e[r]);var t})).toString()}function D(e,r,t,n){if(void 0===t&&(t={}),void 0===n&&(n=G),void 0===window.IntersectionObserver&&void 0!==n){var o=e.getBoundingClientRect();return r(n,{isIntersecting:n,target:e,intersectionRatio:"number"==typeof t.threshold?t.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),function(){}}var i=function(e){var r=W(e),t=z.get(r);if(!t){var n,o=new Map,i=new IntersectionObserver((function(r){r.forEach((function(r){var t,i=r.isIntersecting&&n.some((function(e){return r.intersectionRatio>=e}));e.trackVisibility&&void 0===r.isVisible&&(r.isVisible=i),null==(t=o.get(r.target))||t.forEach((function(e){e(i,r)}))}))}),e);n=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),t={id:r,observer:i,elements:o},z.set(r,t)}return t}(t),a=i.id,c=i.observer,l=i.elements,u=l.get(e)||[];return l.has(e)||l.set(e,u),u.push(r),c.observe(e),function(){u.splice(u.indexOf(r),1),0===u.length&&(l.delete(e),c.unobserve(e)),0===l.size&&(c.disconnect(),z.delete(a))}}var H=["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function Q(e){return"function"!=typeof e.children}var K=function(e){var r,t;function o(r){var t;return(t=e.call(this,r)||this).node=null,t._unobserveCb=null,t.handleNode=function(e){t.node&&(t.unobserve(),e||t.props.triggerOnce||t.props.skip||t.setState({inView:!!t.props.initialInView,entry:void 0})),t.node=e||null,t.observeNode()},t.handleChange=function(e,r){e&&t.props.triggerOnce&&t.unobserve(),Q(t.props)||t.setState({inView:e,entry:r}),t.props.onChange&&t.props.onChange(e,r)},t.state={inView:!!r.initialInView,entry:void 0},t}t=e,(r=o).prototype=Object.create(t.prototype),r.prototype.constructor=r,M(r,t);var i=o.prototype;return i.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},i.componentWillUnmount=function(){this.unobserve(),this.node=null},i.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,r=e.threshold,t=e.root,n=e.rootMargin,o=e.trackVisibility,i=e.delay,a=e.fallbackInView;this._unobserveCb=D(this.node,this.handleChange,{threshold:r,root:t,rootMargin:n,trackVisibility:o,delay:i},a)}},i.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},i.render=function(){if(!Q(this.props)){var e=this.state,r=e.inView,t=e.entry;return this.props.children({inView:r,entry:t,ref:this.handleNode})}var o=this.props,i=o.children,a=o.as,c=o.tag,l=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(o,H);return n.createElement(a||c||"div",U({ref:this.handleNode},l),i)},o}(n.Component);function J(e){var r=void 0===e?{}:e,t=r.threshold,o=r.delay,i=r.trackVisibility,a=r.rootMargin,c=r.root,l=r.triggerOnce,u=r.skip,s=r.initialInView,f=r.fallbackInView,p=n.useRef(),d=n.useState({inView:!!s}),m=d[0],g=d[1],h=n.useCallback((function(e){void 0!==p.current&&(p.current(),p.current=void 0),u||e&&(p.current=D(e,(function(e,r){g({inView:e,entry:r}),r.isIntersecting&&l&&p.current&&(p.current(),p.current=void 0)}),{root:c,rootMargin:a,threshold:t,trackVisibility:i,delay:o},f))}),[Array.isArray(t)?t.toString():t,c,a,l,u,i,f,o]);(0,n.useEffect)((function(){p.current||!m.entry||l||u||g({inView:!!s})}));var y=[h,m.inView,m.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}function Y(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(i.push(n.value),!r||i.length!==r);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return X(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return X(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}K.displayName="InView",K.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};var ee=function(e){var r=e.nav,t=e.loading,o=e.onFollower,i=e.onFollowing,a=Y(J({threshold:.1}),2),c=a[0],l=a[1],u=Y(J({threshold:.1}),2),s=u[0],f=u[1];return n.useEffect((function(){l&&o(),f&&i()}),[l,f,o,i]),t?n.createElement(I,null,"Loading.."):"following"===r?n.createElement(I,{ref:s},"All Shown"):n.createElement(I,{ref:c},"All Shown")};ee.defaultProps={nav:"following"},ee.propTypes={loading:i().bool,nav:i().oneOf(["following","followers"]),onFollower:i().func.isRequired,onFollowing:i().func.isRequired};const re=ee;function te(e){return function(e){if(Array.isArray(e))return ie(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||oe(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ne(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(i.push(n.value),!r||i.length!==r);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}(e,r)||oe(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function oe(e,r){if(e){if("string"==typeof e)return ie(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ie(e,r):void 0}}function ie(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var ae=function(e){var r=e.following,t=e.follower,o=e.onSelectNav,i=e.dispatchListFollowing,c=e.dispatchListFollower,l=(0,a.TH)().search,u=S.Z.parse(l),s=ne(n.useState(1),2),f=s[0],p=s[1],d=ne(n.useState(1),2),m=d[0],g=d[1],h=ne(n.useState(1),2),v=h[0],b=h[1],w=ne(n.useState(1),2),x=w[0],C=w[1],O=ne(n.useState((0,j.Z)(15)),2),I=O[0],A=O[1],F=ne(n.useState((0,j.Z)(15)),2),P=F[0],Z=F[1],R=ne(n.useState((function(){return L.get(u.tab)})),2),N=R[0],T=R[1];n.useEffect((function(){c(v,15)}),[v,c]),n.useEffect((function(){i(f,15)}),[f,i]),n.useEffect((function(){if(!r.loading){if(1===f)return g(r.pages),void A(r.payload);g(r.pages),A((function(e){return[].concat(te(e),te(r.payload))}))}}),[A,r.loading,g]),n.useEffect((function(){if(!t.loading){if(1===v)return C(t.pages),void Z(t.payload);C(t.pages),Z((function(e){return[].concat(te(e),te(t.payload))}))}}),[Z,t.loading,C]);var V=n.useCallback((function(){m>f&&p((function(e){return e+1}))}),[m,f,p]),$=n.useCallback((function(){x>v&&b((function(e){return e+1}))}),[x,v,b]),U=n.useCallback((function(e){T(e),o(e)}),[T,o]),M=n.useMemo((function(){return"following"===N?I:P}),[I,P,N]),z=n.useMemo((function(){return r.loading||t.loading}),[r.loading,t.loading]);return n.createElement(n.Fragment,null,n.createElement(y.Z,{sm:"12"},n.createElement(k,{current:N,items:L.items,onChange:U})),n.createElement(E,{sm:"12 py-4"},M.map((function(e,r){return n.createElement(_,{key:r,itemId:e.id,name:e.name,username:e.username,avatar:e.avater,isFollowing:e.isFollowing})})),n.createElement(re,{nav:N,loading:z,onFollowing:V,onFollower:$})))};ae.propTypes={following:i().shape({payload:i().array,loading:i().bool,pages:i().number}),follower:i().shape({payload:i().array,loading:i().bool,pages:i().number}),onSelectNav:i().func.isRequired,dispatchListFollowing:i().func.isRequired,dispatchListFollower:i().func.isRequired};const ce=(0,c.$j)((function(e){return{following:{payload:e.profile.listFollowing.payload,loading:e.profile.listFollowing.loading,pages:e.profile.listFollowing.pages},follower:{payload:e.profile.listFollower.payload,loading:e.profile.listFollower.loading,pages:e.profile.listFollower.pages}}}),(function(e){return{dispatchListFollowing:function(r,t){return e(f(r,t))},dispatchListFollower:function(r,t){return e(g(r,t))}}}))(ae)},3767:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>M});var n=t(7294),o=t(6974),i=t(9163),a=t(5697),c=t.n(a),l=i.ZP.input.withConfig({componentId:"sc-1ls54rt-0"})(["",";padding:20px 18px;margin:0px;box-sizing:border-box;border-radius:6px;font-size:14px;background-color:transparent;border-width:3px;border-style:solid;border-color:",";color:",";caret-color:",";height:min-content;width:100%;:focus,:focus-visible{outline:0;border-color:",";}::placeholder{color:",";}"],(function(e){return e.theme.text.normal}),(function(e){return e.theme.color.grey}),(function(e){return e.theme.color.white}),(function(e){return e.theme.color.white}),(function(e){return e.theme.color.orange}),(function(e){return e.theme.color.greyDark})),u=["name","placeholder","value","onChange"];function s(){return s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s.apply(this,arguments)}function f(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=function(e){var r=e.name,t=e.placeholder,o=e.value,i=e.onChange,a=f(e,u),c=n.useCallback((function(e){i(r,e.target.value)}),[r,i]);return n.createElement(l,s({},a,{value:o,placeholder:t,onChange:c}))};p.defaultProps={value:"",placeholder:""},p.propTypes={value:c().string,name:c().string.isRequired,placeholder:c().string,onChange:c().func.isRequired};const d=p;var m=t(9313),g=(0,i.iv)(["width:100%;border-top:0.5px solid ",";"],(function(e){return e.theme.color.divider})),h=(0,i.iv)(["height:100%;border-right:0.5px solid ",";"],(function(e){return e.theme.color.divider})),y=i.ZP.div.withConfig({componentId:"sc-1vfiygh-0"})(["",""],(function(e){return e.vertical?h:g}));y.defaultProps={vertical:!1},y.propTypes={vertical:c().bool};const v=y;var b=(0,i.iv)(["appearance:none;width:24px;height:24px;background-color:",";border-radius:100%;border:6px solid ",";box-shadow:none;margin-top:-8px;cursor:pointer;"],(function(e){return e.theme.color.black}),(function(e){return e.theme.color.yellow})),w=i.ZP.input.withConfig({componentId:"sc-egff8x-0"})(["appearance:none;cursor:pointer;height:8px;margin:0;padding:0;border-radius:100%;background:transparent;:focus{outline:none;}::-webkit-slider-thumb{",";}::-moz-range-thumb{",";}::-ms-thumb{",";}::-webkit-slider-runnable-track{height:8px;background-color:",";border-radius:calc(8px / 2);}::-moz-range-track{background:linear-gradient(90deg,black 50%,red 50%);}"],b,b,b,(function(e){return e.theme.color.grey})),x=function(e){var r=e.name,t=e.max,o=e.value,i=e.onChange,a=n.useCallback((function(e){i(r,e.target.value)}),[r,i]);return n.createElement(w,{type:"range",max:t,min:1,value:o,onChange:a})};x.propTypes={value:c().any,name:c().string.isRequired,max:c().number.isRequired,onChange:c().func.isRequired};const C=x;var k=t(2701),O=i.ZP.div.withConfig({componentId:"sc-1ire6i-0"})(["display:grid;grid-template-columns:1fr 375px;grid-gap:0;@media screen and (max-width:768px){grid-template-columns:1fr;}"]),E=(0,i.ZP)(m.Z).withConfig({componentId:"sc-1ire6i-1"})(["",";color:",";font-size:24px;"],(function(e){return e.theme.text.normal}),(function(e){return e.theme.color.white})),I=i.ZP.span.withConfig({componentId:"sc-1ire6i-2"})([""]),S=(0,i.ZP)(m.Z).withConfig({componentId:"sc-1ire6i-3"})(["",";color:",";font-size:48px;"],(function(e){return e.theme.text.normal}),(function(e){return e.theme.color.white})),j=(0,i.ZP)(m.Z).withConfig({componentId:"sc-1ire6i-4"})(["",";color:",";font-size:16px;"],(function(e){return e.theme.text.normal}),(function(e){return e.theme.color.white})),A=i.ZP.div.withConfig({componentId:"sc-1ire6i-5"})(["background:",";padding:0;height:100vh;box-sizing:border-box;overflow:hidden;@media screen and (max-width:768px){display:none;}"],(function(e){return e.theme.color.black})),L=i.ZP.div.withConfig({componentId:"sc-1ire6i-6"})(["display:grid;grid-template-rows:auto 1fr;grid-gap:30px;padding:32px 0 87px 0;width:80%;margin:0 auto;@media screen and (max-width:768px){padding:0 20px 20px 20px;width:100%;}"]),F=i.ZP.div.withConfig({componentId:"sc-1ire6i-7"})(["display:grid;grid-template-columns:1fr;grid-gap:30px;"]),P=i.ZP.div.withConfig({componentId:"sc-1ire6i-8"})(["display:grid;align-items:flex-end;bottom:0;width:50%;@media screen and (max-width:768px){width:100%;}"]),Z=i.ZP.div.withConfig({componentId:"sc-1ire6i-9"})(["display:grid;grid-template-columns:1fr;grid-gap:20px;"]),R=t(1490),N=t(8442);function T(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function V(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?T(Object(t),!0).forEach((function(r){$(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function $(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(i.push(n.value),!r||i.length!==r);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return U(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return U(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}const M=function(){var e=(0,o.s0)(),r=_(n.useState({keyword:"",pageSize:1}),2),t=r[0],i=r[1],a=n.useCallback((function(r){e("/?tab=".concat(r),{replace:!0})}),[e]),c=n.useCallback((function(e,r){i((function(t){return V(V({},t),{},$({},e,r))}))}),[i]),l=n.useCallback((function(){var r=R.Z.stringify(t);e("/search?".concat(r))}),[t,R.Z,e]);return n.createElement(O,null,n.createElement(L,null,n.createElement(F,null,n.createElement(Z,null,n.createElement(E,null,"Search"),n.createElement(d,{placeholder:"Keyword",name:"keyword",value:t.keyword,onChange:c})),n.createElement(v,null),n.createElement(Z,null,n.createElement(E,null,"# of results per page"),n.createElement(I,null,n.createElement(S,null,t.pageSize," "),n.createElement(j,null,"results")),n.createElement(C,{max:50,name:"pageSize",value:t.pageSize,onChange:c})),n.createElement(v,null)),n.createElement(P,null,n.createElement(k.Z,{onClick:l},"SEARCH"))),n.createElement(A,null,n.createElement(N.Z,{onSelectNav:a})))}},4184:(e,r)=>{var t;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var i=typeof t;if("string"===i||"number"===i)e.push(t);else if(Array.isArray(t)){if(t.length){var a=o.apply(null,t);a&&e.push(a)}}else if("object"===i)if(t.toString===Object.prototype.toString)for(var c in t)n.call(t,c)&&t[c]&&e.push(c);else e.push(t.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(t=function(){return o}.apply(r,[]))||(e.exports=t)}()},4020:e=>{"use strict";var r="%[a-f0-9]{2}",t=new RegExp(r,"gi"),n=new RegExp("("+r+")+","gi");function o(e,r){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;r=r||1;var t=e.slice(0,r),n=e.slice(r);return Array.prototype.concat.call([],o(t),o(n))}function i(e){try{return decodeURIComponent(e)}catch(i){for(var r=e.match(t),n=1;n<r.length;n++)r=(e=o(r,n).join("")).match(t);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(r){return function(e){for(var r={"%FE%FF":"��","%FF%FE":"��"},t=n.exec(e);t;){try{r[t[0]]=decodeURIComponent(t[0])}catch(e){var o=i(t[0]);o!==t[0]&&(r[t[0]]=o)}t=n.exec(e)}r["%C2"]="�";for(var a=Object.keys(r),c=0;c<a.length;c++){var l=a[c];e=e.replace(new RegExp(l,"g"),r[l])}return e}(e)}}},2806:e=>{"use strict";e.exports=function(e,r){for(var t={},n=Object.keys(e),o=Array.isArray(r),i=0;i<n.length;i++){var a=n[i],c=e[a];(o?-1!==r.indexOf(a):r(a,c,e))&&(t[a]=c)}return t}},7563:(e,r,t)=>{"use strict";const n=t(610),o=t(4020),i=t(500),a=t(2806),c=Symbol("encodeFragmentIdentifier");function l(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function u(e,r){return r.encode?r.strict?n(e):encodeURIComponent(e):e}function s(e,r){return r.decode?o(e):e}function f(e){return Array.isArray(e)?e.sort():"object"==typeof e?f(Object.keys(e)).sort(((e,r)=>Number(e)-Number(r))).map((r=>e[r])):e}function p(e){const r=e.indexOf("#");return-1!==r&&(e=e.slice(0,r)),e}function d(e){const r=(e=p(e)).indexOf("?");return-1===r?"":e.slice(r+1)}function m(e,r){return r.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!r.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function g(e,r){l((r=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},r)).arrayFormatSeparator);const t=function(e){let r;switch(e.arrayFormat){case"index":return(e,t,n)=>{r=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),r?(void 0===n[e]&&(n[e]={}),n[e][r[1]]=t):n[e]=t};case"bracket":return(e,t,n)=>{r=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),r?void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=[t]:n[e]=t};case"comma":case"separator":return(r,t,n)=>{const o="string"==typeof t&&t.includes(e.arrayFormatSeparator),i="string"==typeof t&&!o&&s(t,e).includes(e.arrayFormatSeparator);t=i?s(t,e):t;const a=o||i?t.split(e.arrayFormatSeparator).map((r=>s(r,e))):null===t?t:s(t,e);n[r]=a};case"bracket-separator":return(r,t,n)=>{const o=/(\[\])$/.test(r);if(r=r.replace(/\[\]$/,""),!o)return void(n[r]=t?s(t,e):t);const i=null===t?[]:t.split(e.arrayFormatSeparator).map((r=>s(r,e)));void 0!==n[r]?n[r]=[].concat(n[r],i):n[r]=i};default:return(e,r,t)=>{void 0!==t[e]?t[e]=[].concat(t[e],r):t[e]=r}}}(r),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const o of e.split("&")){if(""===o)continue;let[e,a]=i(r.decode?o.replace(/\+/g," "):o,"=");a=void 0===a?null:["comma","separator","bracket-separator"].includes(r.arrayFormat)?a:s(a,r),t(s(e,r),a,n)}for(const e of Object.keys(n)){const t=n[e];if("object"==typeof t&&null!==t)for(const e of Object.keys(t))t[e]=m(t[e],r);else n[e]=m(t,r)}return!1===r.sort?n:(!0===r.sort?Object.keys(n).sort():Object.keys(n).sort(r.sort)).reduce(((e,r)=>{const t=n[r];return Boolean(t)&&"object"==typeof t&&!Array.isArray(t)?e[r]=f(t):e[r]=t,e}),Object.create(null))}r.extract=d,r.parse=g,r.stringify=(e,r)=>{if(!e)return"";l((r=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},r)).arrayFormatSeparator);const t=t=>r.skipNull&&null==e[t]||r.skipEmptyString&&""===e[t],n=function(e){switch(e.arrayFormat){case"index":return r=>(t,n)=>{const o=t.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:null===n?[...t,[u(r,e),"[",o,"]"].join("")]:[...t,[u(r,e),"[",u(o,e),"]=",u(n,e)].join("")]};case"bracket":return r=>(t,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:null===n?[...t,[u(r,e),"[]"].join("")]:[...t,[u(r,e),"[]=",u(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const r="bracket-separator"===e.arrayFormat?"[]=":"=";return t=>(n,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[u(t,e),r,u(o,e)].join("")]:[[n,u(o,e)].join(e.arrayFormatSeparator)])}default:return r=>(t,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:null===n?[...t,u(r,e)]:[...t,[u(r,e),"=",u(n,e)].join("")]}}(r),o={};for(const r of Object.keys(e))t(r)||(o[r]=e[r]);const i=Object.keys(o);return!1!==r.sort&&i.sort(r.sort),i.map((t=>{const o=e[t];return void 0===o?"":null===o?u(t,r):Array.isArray(o)?0===o.length&&"bracket-separator"===r.arrayFormat?u(t,r)+"[]":o.reduce(n(t),[]).join("&"):u(t,r)+"="+u(o,r)})).filter((e=>e.length>0)).join("&")},r.parseUrl=(e,r)=>{r=Object.assign({decode:!0},r);const[t,n]=i(e,"#");return Object.assign({url:t.split("?")[0]||"",query:g(d(e),r)},r&&r.parseFragmentIdentifier&&n?{fragmentIdentifier:s(n,r)}:{})},r.stringifyUrl=(e,t)=>{t=Object.assign({encode:!0,strict:!0,[c]:!0},t);const n=p(e.url).split("?")[0]||"",o=r.extract(e.url),i=r.parse(o,{sort:!1}),a=Object.assign(i,e.query);let l=r.stringify(a,t);l&&(l=`?${l}`);let s=function(e){let r="";const t=e.indexOf("#");return-1!==t&&(r=e.slice(t)),r}(e.url);return e.fragmentIdentifier&&(s=`#${t[c]?u(e.fragmentIdentifier,t):e.fragmentIdentifier}`),`${n}${l}${s}`},r.pick=(e,t,n)=>{n=Object.assign({parseFragmentIdentifier:!0,[c]:!1},n);const{url:o,query:i,fragmentIdentifier:l}=r.parseUrl(e,n);return r.stringifyUrl({url:o,query:a(i,t),fragmentIdentifier:l},n)},r.exclude=(e,t,n)=>{const o=Array.isArray(t)?e=>!t.includes(e):(e,r)=>!t(e,r);return r.pick(e,o,n)}},1555:(e,r,t)=>{"use strict";t.d(r,{Z:()=>s});var n=t(4184),o=t.n(n),i=t(7294),a=t(6792),c=t(5893);const l=["xxl","xl","lg","md","sm","xs"];const u=i.forwardRef(((e,r)=>{const[{className:t,...n},{as:i="div",bsPrefix:u,spans:s}]=function({as:e,bsPrefix:r,className:t,...n}){r=(0,a.vE)(r,"col");const i=[],c=[];return l.forEach((e=>{const t=n[e];let o,a,l;delete n[e],"object"==typeof t&&null!=t?({span:o,offset:a,order:l}=t):o=t;const u="xs"!==e?`-${e}`:"";o&&i.push(!0===o?`${r}${u}`:`${r}${u}-${o}`),null!=l&&c.push(`order${u}-${l}`),null!=a&&c.push(`offset${u}-${a}`)})),[{...n,className:o()(t,...i,...c)},{as:e,bsPrefix:r,spans:i}]}(e);return(0,c.jsx)(i,{...n,ref:r,className:o()(t,!s.length&&u)})}));u.displayName="Col";const s=u},6792:(e,r,t)=>{"use strict";t.d(r,{vE:()=>c});var n=t(7294);t(5893);const o=n.createContext({prefixes:{}}),{Consumer:i,Provider:a}=o;function c(e,r){const{prefixes:t}=(0,n.useContext)(o);return e||t[r]||r}},500:e=>{"use strict";e.exports=(e,r)=>{if("string"!=typeof e||"string"!=typeof r)throw new TypeError("Expected the arguments to be of type `string`");if(""===r)return[e];const t=e.indexOf(r);return-1===t?[e]:[e.slice(0,t),e.slice(t+r.length)]}},610:e=>{"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))}}]);