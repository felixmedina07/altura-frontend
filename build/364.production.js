"use strict";(self.webpackChunkaltura_frontend=self.webpackChunkaltura_frontend||[]).push([[364],{1364:function(t,e,r){r.r(e);var i=r(7294),a=r(1821),n=r(1256),o=r(1508),c=r(9792),u=r(6051),s=r(5893);function E(t){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function k(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */k=function(){return a};var a={},t=Object.prototype,u=t.hasOwnProperty,s=Object.defineProperty||function(t,e,r){t[e]=r.value},e="function"==typeof Symbol?Symbol:{},n=e.iterator||"@@iterator",r=e.asyncIterator||"@@asyncIterator",o=e.toStringTag||"@@toStringTag";function i(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(t){i=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o,i,a,c,e=e&&e.prototype instanceof h?e:h,e=Object.create(e.prototype),n=new b(n||[]);return s(e,"_invoke",{value:(o=t,i=r,a=n,c="suspendedStart",function(t,e){if("executing"===c)throw new Error("Generator is already running");if("completed"===c){if("throw"===t)throw e;return j()}for(a.method=t,a.arg=e;;){var r=a.delegate;if(r){r=function t(e,r){var n=r.method,o=e.iterator[n];if(void 0===o)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=void 0,t(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;n=l(o,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,f;o=n.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,f):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}(r,a);if(r){if(r===f)continue;return r}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===c)throw c="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c="executing";r=l(o,i,a);if("normal"===r.type){if(c=a.done?"completed":"suspendedYield",r.arg===f)continue;return{value:r.arg,done:a.done}}"throw"===r.type&&(c="completed",a.method="throw",a.arg=r.arg)}})}),e}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}a.wrap=c;var f={};function h(){}function d(){}function p(){}var e={},y=(i(e,n,function(){return this}),Object.getPrototypeOf),y=y&&y(y(L([]))),g=(y&&y!==t&&u.call(y,n)&&(e=y),p.prototype=h.prototype=Object.create(e));function v(t){["next","throw","return"].forEach(function(e){i(t,e,function(t){return this._invoke(e,t)})})}function m(a,c){var e;s(this,"_invoke",{value:function(r,n){function t(){return new c(function(t,e){!function e(t,r,n,o){var i,t=l(a[t],a,r);if("throw"!==t.type)return(r=(i=t.arg).value)&&"object"==E(r)&&u.call(r,"__await")?c.resolve(r.__await).then(function(t){e("next",t,n,o)},function(t){e("throw",t,n,o)}):c.resolve(r).then(function(t){i.value=t,n(i)},function(t){return e("throw",t,n,o)});o(t.arg)}(r,n,t,e)})}return e=e?e.then(t,t):t()}})}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function w(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function b(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function L(e){if(e){var r,t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return r=-1,(t=function t(){for(;++r<e.length;)if(u.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t}).next=t}return{next:j}}function j(){return{value:void 0,done:!0}}return s(g,"constructor",{value:d.prototype=p,configurable:!0}),s(p,"constructor",{value:d,configurable:!0}),d.displayName=i(p,o,"GeneratorFunction"),a.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,i(t,o,"GeneratorFunction")),t.prototype=Object.create(g),t},a.awrap=function(t){return{__await:t}},v(m.prototype),i(m.prototype,r,function(){return this}),a.AsyncIterator=m,a.async=function(t,e,r,n,o){void 0===o&&(o=Promise);var i=new m(c(t,e,r,n),o);return a.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},v(g),i(g,o,"Generator"),i(g,n,function(){return this}),i(g,"toString",function(){return"[object Generator]"}),a.keys=function(t){var e,r=Object(t),n=[];for(e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=L,b.prototype={constructor:b,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!t)for(var e in this)"t"===e.charAt(0)&&u.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return i.type="throw",i.arg=r,n.next=t,e&&(n.method="next",n.arg=void 0),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=u.call(o,"catchLoc"),c=u.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&u.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}var i=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc?null:o)?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),w(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r,n,o=this.tryEntries[e];if(o.tryLoc===t)return"throw"===(r=o.completion).type&&(n=r.arg,w(o)),n}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},a}function l(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,s=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){s=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(t,e)||function(t,e){var r;if(t)return"string"==typeof t?h(t,e):"Map"===(r="Object"===(r=Object.prototype.toString.call(t).slice(8,-1))&&t.constructor?t.constructor.name:r)||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(t,e):void 0}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function d(t,e){return e=e||t.slice(0),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}t=r.hmd(t),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(t);function p(t){if(null==t)throw new TypeError("Cannot destructure "+t);var t=(0,i.useContext)(c.S).token,e=f((0,i.useState)([]),2),r=e[0],n=e[1],o=(0,u.Z)();return(0,i.useEffect)(function(){var t=function(){c=k().mark(function t(){var e;return k().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.getAllScore();case 2:e=t.sent,n(e);case 4:case"end":return t.stop()}},t)});var c,t=function(){var t=this,a=arguments;return new Promise(function(e,r){var n=c.apply(t,a);function o(t){l(n,e,r,o,i,"next",t)}function i(t){l(n,e,r,o,i,"throw",t)}o(void 0)})};return function(){return t.apply(this,arguments)}}(),e=(t(),setInterval(t,1e4));return function(){clearInterval(e)}},[]),(0,s.jsx)(a.A,{notFooter:!0,children:(0,s.jsx)(y,{component:"div",children:(0,s.jsxs)(g,{children:[(0,s.jsxs)(v,{children:[(0,s.jsx)(S,{children:(0,s.jsx)(G,{children:"Top Players"})}),(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-evenly"},children:[(0,s.jsx)(O,{children:"Name"}),(0,s.jsx)(O,{children:"Lvl"}),(0,s.jsx)(O,{children:"Score"}),(0,s.jsx)(O,{children:"Rank"})]}),(0,s.jsx)("div",{style:{position:"relative"},children:r.map(function(t,e){return(0,s.jsx)(L,{hover:e+1===10,children:(0,s.jsxs)(b,{hover:e+1===10,children:[(0,s.jsx)(O,{children:7<t.user.username.length?"".concat(t.user.username.match(/.{1,7}/g)[0],"..."):"".concat(t.user.username)}),(0,s.jsx)(O,{children:t.maxLevel}),(0,s.jsx)(O,{children:t.totalKills}),(0,s.jsx)(O,{children:e+1})]})})})})]}),(0,s.jsxs)(m,{children:[(0,s.jsxs)(_,{children:[(0,s.jsx)(w,{children:(0,s.jsx)(x,{children:"Launch Forces"})}),(0,s.jsx)(w,{children:(0,s.jsx)(x,{children:"Deck Builder"})}),(0,s.jsx)(w,{children:(0,s.jsx)(x,{children:"Select Deck"})})]}),(0,s.jsx)(j,{dangerouslySetInnerHTML:{__html:'<iframe class="iframe" src="/game?token='.concat(t,'" />')}})]})]})})})}var r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(t){return t},y=(0,n.ZP)(o.Z)({width:"100%",height:"100%",backgroundRepeat:"no-repeat",backgroundSize:"cover"}),g=(0,n.ZP)("div")(d(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  @media (min-width: 1440px) {\n    justify-content: space-evenly;\n  }\n\n  @media (max-width: 1024px) {\n    justify-content: space-between;\n  }\n"])),v=(0,n.ZP)("div")(d(["\n  background-repeat: no-repeat;\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: 1440px) {\n    background-image: url(",");\n    width: 350px;\n    height: 580px;\n  }\n  @media (max-width: 1024px) {\n    background-image: url(",");\n    margin-left: 10px;\n    width: 250px;\n    height: 410px;\n  }\n"]),"./image/Board2.png","./image/Board.png"),m=(0,n.ZP)("div")(d(["\n  background-image: url(",");\n  background-repeat: no-repeat;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  @media (max-width: 1024px) {\n    width: 735px;\n    margin-right: 15px;\n  }\n  @media (min-width: 1440px) {\n    width: 735px;\n    margin-right: 15px;\n  }\n"]),"./image/MenuGame.png"),x=(0,n.ZP)("p")(d(['\n  color: #ffffff;\n  font-family: "Genesis";\n  font-size: 15px;\n  font-weight: 500;\n  text-align: center;\n'])),w=(0,n.ZP)("div")(d(["\n  display: flex;\n  align-items: center;\n  align-self: center;\n  justify-content: center;\n  @media (max-width: 1024px) {\n    width: 138px;\n    &:hover {\n      background-image: url(",");\n      background-repeat: no-repeat;\n    }\n  }\n  @media (min-width: 1440px) {\n    width: 138px;\n    &:hover {\n      background-image: url(",");\n      background-repeat: no-repeat;\n    }\n  }\n"]),"./image/SELECTION.png","./image/SELECTION.png"),b=(0,n.ZP)("div")(function(t){t.hover;return"\n  display:flex;\n  flex-direction:row;\n  justify-content: space-between;\n"}),L=(0,n.ZP)("div")(function(t){t=t.hover;return"\n  width: 80%;\n  margin-left: 30px;\n  @media (max-width: 1024px) {\n    width: 100%;\n    justify-content: flex-start;\n    display: flex;\n    background: ".concat(t?"linear-gradient(270deg, rgba(26, 255, 222, 0.5) 0%, rgba(26, 255, 222, 0) 50.01%, rgba(26, 255, 222, 0.5) 100.01%)":"transparent",";\n  }\n  @media (min-width: 1440px) {\n    background: ").concat(t?"linear-gradient(270deg, rgba(26, 255, 222, 0.5) 0%, rgba(26, 255, 222, 0) 50.01%, rgba(26, 255, 222, 0.5) 100.01%)":"transparent",";\n  }\n")}),j=n.ZP.div(function(){return"\n  width:960px;\n  height:540px;\n"}),S=(0,n.ZP)("div")(d(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  @media (max-width: 1024px) {\n    padding-top: 1.5rem;\n  }\n  @media (min-width: 1440px) {\n    padding-top: 2.5rem;\n  }\n"])),G=(0,n.ZP)("p")(d(['\n  color: #ffffff;\n  font-family: "Genesis";\n  font-weight: 400;\n  @media (max-width: 1024px) {\n    font-size: 14px;\n  }\n  @media (min-width: 1440px) {\n    font-size: 19px;\n  }\n'])),O=(0,n.ZP)("p")(d(['\n  color: #ffffff;\n  font-family: "Genesis";\n  font-weight: 400;\n  width: 15%;\n  @media (max-width: 1024px) {\n    margin-top: 1.5px;\n    margin-bottom: 1.5px;\n    font-size: 9px;\n  }\n  @media (min-width: 1440px) {\n    margin-top: 1.5px;\n    margin-bottom: 1.5px;\n    font-size: 14px;\n  }\n'])),_=(0,n.ZP)("div")(d(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n"])),o=(r(p,"useContext{{ token }}\nuseState{[scores, setScore]([])}\nuseScore{score}\nuseEffect{}",function(){return[u.Z]}),p);e.default=o,(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(n.register(y,"Contain","/Users/cesarcontreras/altura-frontend/src/page/LaunchForces.js"),n.register(g,"Row","/Users/cesarcontreras/altura-frontend/src/page/LaunchForces.js"),n.register(v,"ColumnOne","/Users/cesarcontreras/altura-frontend/src/page/LaunchForces.js"),n.register(m,"ColumnTwo","/Users/cesarcontreras/altura-frontend/src/page/LaunchForces.js"),n.register(x,"TextMenuOptions","/Users/cesarcontreras/altura-frontend/src/page/LaunchForces.js"),n.register(w,"ContText","/Users/cesarcontreras/altura-frontend/src/page/LaunchForces.js"),n.register(b,"RowContentTextBoard","/Users/cesarcontreras/altura-frontend/src/page/LaunchForces.js"),n.register(L,"BackgroundContentGradient","/Users/cesarcontreras/altura-frontend/src/page/LaunchForces.js"),n.register(j,"GameContainer","/Users/cesarcontreras/altura-frontend/src/page/LaunchForces.js"),n.register(S,"RowContentTitleTextBoard","/Users/cesarcontreras/altura-frontend/src/page/LaunchForces.js"),n.register(G,"Text","/Users/cesarcontreras/altura-frontend/src/page/LaunchForces.js"),n.register(O,"TitleText","/Users/cesarcontreras/altura-frontend/src/page/LaunchForces.js"),n.register(_,"RowText","/Users/cesarcontreras/altura-frontend/src/page/LaunchForces.js"),n.register(p,"LaunchForces","/Users/cesarcontreras/altura-frontend/src/page/LaunchForces.js"),n.register(o,"default","/Users/cesarcontreras/altura-frontend/src/page/LaunchForces.js")),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&r(t)},6051:function(t,e,r){var n=r(7294),o=r(6585),i=r(9792);function E(t){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function k(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */k=function(){return a};var a={},t=Object.prototype,u=t.hasOwnProperty,s=Object.defineProperty||function(t,e,r){t[e]=r.value},e="function"==typeof Symbol?Symbol:{},n=e.iterator||"@@iterator",r=e.asyncIterator||"@@asyncIterator",o=e.toStringTag||"@@toStringTag";function i(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(t){i=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o,i,a,c,e=e&&e.prototype instanceof h?e:h,e=Object.create(e.prototype),n=new b(n||[]);return s(e,"_invoke",{value:(o=t,i=r,a=n,c="suspendedStart",function(t,e){if("executing"===c)throw new Error("Generator is already running");if("completed"===c){if("throw"===t)throw e;return j()}for(a.method=t,a.arg=e;;){var r=a.delegate;if(r){r=function t(e,r){var n=r.method,o=e.iterator[n];if(void 0===o)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=void 0,t(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;n=l(o,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,f;o=n.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,f):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}(r,a);if(r){if(r===f)continue;return r}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===c)throw c="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c="executing";r=l(o,i,a);if("normal"===r.type){if(c=a.done?"completed":"suspendedYield",r.arg===f)continue;return{value:r.arg,done:a.done}}"throw"===r.type&&(c="completed",a.method="throw",a.arg=r.arg)}})}),e}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}a.wrap=c;var f={};function h(){}function d(){}function p(){}var e={},y=(i(e,n,function(){return this}),Object.getPrototypeOf),y=y&&y(y(L([]))),g=(y&&y!==t&&u.call(y,n)&&(e=y),p.prototype=h.prototype=Object.create(e));function v(t){["next","throw","return"].forEach(function(e){i(t,e,function(t){return this._invoke(e,t)})})}function m(a,c){var e;s(this,"_invoke",{value:function(r,n){function t(){return new c(function(t,e){!function e(t,r,n,o){var i,t=l(a[t],a,r);if("throw"!==t.type)return(r=(i=t.arg).value)&&"object"==E(r)&&u.call(r,"__await")?c.resolve(r.__await).then(function(t){e("next",t,n,o)},function(t){e("throw",t,n,o)}):c.resolve(r).then(function(t){i.value=t,n(i)},function(t){return e("throw",t,n,o)});o(t.arg)}(r,n,t,e)})}return e=e?e.then(t,t):t()}})}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function w(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function b(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function L(e){if(e){var r,t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return r=-1,(t=function t(){for(;++r<e.length;)if(u.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t}).next=t}return{next:j}}function j(){return{value:void 0,done:!0}}return s(g,"constructor",{value:d.prototype=p,configurable:!0}),s(p,"constructor",{value:d,configurable:!0}),d.displayName=i(p,o,"GeneratorFunction"),a.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,i(t,o,"GeneratorFunction")),t.prototype=Object.create(g),t},a.awrap=function(t){return{__await:t}},v(m.prototype),i(m.prototype,r,function(){return this}),a.AsyncIterator=m,a.async=function(t,e,r,n,o){void 0===o&&(o=Promise);var i=new m(c(t,e,r,n),o);return a.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},v(g),i(g,o,"Generator"),i(g,n,function(){return this}),i(g,"toString",function(){return"[object Generator]"}),a.keys=function(t){var e,r=Object(t),n=[];for(e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=L,b.prototype={constructor:b,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!t)for(var e in this)"t"===e.charAt(0)&&u.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return i.type="throw",i.arg=r,n.next=t,e&&(n.method="next",n.arg=void 0),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=u.call(o,"catchLoc"),c=u.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&u.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}var i=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc?null:o)?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),w(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r,n,o=this.tryEntries[e];if(o.tryLoc===t)return"throw"===(r=o.completion).type&&(n=r.arg,w(o)),n}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},a}function u(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function a(c){return function(){var t=this,a=arguments;return new Promise(function(e,r){var n=c.apply(t,a);function o(t){u(n,e,r,o,i,"next",t)}function i(t){u(n,e,r,o,i,"throw",t)}o(void 0)})}}t=r.hmd(t),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(t);function c(){var e=(0,n.useContext)(i.S).token;return{getAllScore:(0,n.useCallback)(a(k().mark(function t(){return k().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)})),[e])}}var r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(t){return t},r=(r(c,"useContext{{ token }}\nuseCallback{getAllScore}"),c),s=(e.Z=r,function(){var e=a(k().mark(function t(e){var r;return k().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o.I,"/score/all"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});case 2:return r=t.sent,t.next=5,r.json();case 5:return r=t.sent,t.abrupt("return",r.score||[]);case 7:case"end":return t.stop()}},t)}));return function(t){return e.apply(this,arguments)}}());(e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(e.register(c,"useScore","/Users/cesarcontreras/altura-frontend/src/request/score.js"),e.register(s,"getScore","/Users/cesarcontreras/altura-frontend/src/request/score.js"),e.register(r,"default","/Users/cesarcontreras/altura-frontend/src/request/score.js")),(e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&e(t)}}]);
//# sourceMappingURL=364.production.js.map