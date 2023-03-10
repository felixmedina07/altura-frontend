"use strict";(self.webpackChunkaltura_frontend=self.webpackChunkaltura_frontend||[]).push([[85],{8085:function(H,n,e){e.r(n),e.d(n,{getCLS:function(){return N},getFCP:function(){return F},getFID:function(){return q},getINP:function(){return K},getLCP:function(){return Q},getTTFB:function(){return U},onCLS:function(){return N},onFCP:function(){return F},onFID:function(){return q},onINP:function(){return K},onLCP:function(){return Q},onTTFB:function(){return U}});function f(n,e){var t=w(),r="navigate";return 0<=i?r="back-forward-cache":t&&(r=document.prerendering||0<S()?"prerender":document.wasDiscarded?"restore":t.type.replace(/_/g,"-")),{name:n,value:void 0===e?-1:e,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}}function s(e,t,r,i){var o,a;return function(n){0<=t.value&&(n||i)&&((a=t.value-(o||0))||void 0===o)&&(o=t.value,t.delta=a,t.rating=(n=t.value)>r[1]?"poor":n>r[0]?"needs-improvement":"good",e(t))}}function d(n){requestAnimationFrame(function(){return requestAnimationFrame(function(){return n()})})}function l(e){function n(n){"pagehide"!==n.type&&"hidden"!==document.visibilityState||e(n)}addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)}function p(e){var t=!1;return function(n){t||(e(n),t=!0)}}function v(){return r<0&&(r=o(),P(),b(function(){setTimeout(function(){r=o(),P()},0)})),{get firstHiddenTime(){return r}}}function u(n,e){T||(T=e,E=n,t=new Date,h(removeEventListener),m())}function m(){var e;0<=E&&E<t-O&&(e={entryType:"first-input",name:T.type,target:T.target,cancelable:T.cancelable,startTime:T.timeStamp,processingStart:T.timeStamp+E},C.forEach(function(n){n(e)}),C=[])}function h(e){["mousedown","keydown","touchstart","pointerdown"].forEach(function(n){return e(n,_,k)})}function c(){return G()-J}function g(n){var e=B[B.length-1],t=x[n.interactionId];(t||B.length<10||n.duration>e.latency)&&(t?(t.entries.push(n),t.latency=Math.max(t.latency,n.duration)):(e={id:n.interactionId,latency:n.duration,entries:[n]},x[e.id]=e,B.push(e)),B.sort(function(n,e){return e.latency-n.latency}),B.splice(10).forEach(function(n){delete x[n.id]}))}function y(n){document.prerendering?A(function(){return y(n)}):"complete"!==document.readyState?addEventListener("load",function(){return y(n)},!0):setTimeout(n,0)}var T,E,t,C,L,i=-1,b=function(e){addEventListener("pageshow",function(n){n.persisted&&(i=n.timeStamp,e(n))},!0)},w=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},S=function(){var n=w();return n&&n.activationStart||0},I=function(n,e,t){try{var r;if(PerformanceObserver.supportedEntryTypes.includes(n))return(r=new PerformanceObserver(function(n){Promise.resolve().then(function(){e(n.getEntries())})})).observe(Object.assign({type:n,buffered:!0},t||{})),r}catch(n){}},r=-1,o=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},a=function(n){"hidden"===document.visibilityState&&-1<r&&(r="visibilitychange"===n.type?n.timeStamp:0,removeEventListener("visibilitychange",a,!0),removeEventListener("prerenderingchange",a,!0))},P=function(){addEventListener("visibilitychange",a,!0),addEventListener("prerenderingchange",a,!0)},A=function(n){document.prerendering?addEventListener("prerenderingchange",function(){return n()},!0):n()},F=function(a,u){u=u||{},A(function(){var e,t=[1800,3e3],r=v(),i=f("FCP"),o=I("paint",function(n){n.forEach(function(n){"first-contentful-paint"===n.name&&(o.disconnect(),n.startTime<r.firstHiddenTime)&&(i.value=Math.max(n.startTime-S(),0),i.entries.push(n),e(!0))})});o&&(e=s(a,i,t,u.reportAllChanges),b(function(n){i=f("FCP"),e=s(a,i,t,u.reportAllChanges),d(function(){i.value=performance.now()-n.timeStamp,e(!0)})}))})},N=function(u,c){c=c||{},F(p(function(){function n(n){n.forEach(function(n){var e,t;n.hadRecentInput||(e=o[0],t=o[o.length-1],i&&n.startTime-t.startTime<1e3&&n.startTime-e.startTime<5e3?(i+=n.value,o.push(n)):(i=n.value,o=[n]))}),i>r.value&&(r.value=i,r.entries=o,e())}var e,t=[.1,.25],r=f("CLS",0),i=0,o=[],a=I("layout-shift",n);a&&(e=s(u,r,t,c.reportAllChanges),l(function(){n(a.takeRecords()),e(!0)}),b(function(){r=f("CLS",i=0),e=s(u,r,t,c.reportAllChanges),d(function(){return e()})}),setTimeout(e,0))}))},k={passive:!0,capture:!0},O=new Date,_=function(n){var e,t,r,i;function o(){u(t,r),i()}function a(){i()}n.cancelable&&(e=(1e12<n.timeStamp?new Date:performance.now())-n.timeStamp,"pointerdown"==n.type?(t=e,r=n,i=function(){removeEventListener("pointerup",o,k),removeEventListener("pointercancel",a,k)},addEventListener("pointerup",o,k),addEventListener("pointercancel",a,k)):u(e,n))},q=function(u,c){c=c||{},A(function(){function n(n){n.forEach(i)}var e=[100,300],t=v(),r=f("FID"),i=function(n){n.startTime<t.firstHiddenTime&&(r.value=n.processingStart-n.startTime,r.entries.push(n),a(!0))},o=I("first-input",n),a=s(u,r,e,c.reportAllChanges);o&&l(p(function(){n(o.takeRecords()),o.disconnect()})),o&&b(function(){var n;r=f("FID"),a=s(u,r,e,c.reportAllChanges),C=[],E=-1,T=null,h(addEventListener),n=i,C.push(n),m()})})},j=0,M=1/0,D=0,z=function(n){n.forEach(function(n){n.interactionId&&(M=Math.min(M,n.interactionId),D=Math.max(D,n.interactionId),j=D?(D-M)/7+1:0)})},G=function(){return L?j:performance.interactionCount||0},J=0,B=[],x={},K=function(o,a){a=a||{},A(function(){var n=[200,500];"interactionCount"in performance||(L=L||I("event",z,{type:"event",buffered:!0,durationThreshold:0}));function e(n){n.forEach(function(e){e.interactionId&&g(e),"first-input"!==e.entryType||B.some(function(n){return n.entries.some(function(n){return e.duration===n.duration&&e.startTime===n.startTime})})||g(e)}),n=Math.min(B.length-1,Math.floor(c()/50)),(n=B[n])&&n.latency!==t.value&&(t.value=n.latency,t.entries=n.entries,i())}var t=f("INP"),r=I("event",e,{durationThreshold:a.durationThreshold||40}),i=s(o,t,n,a.reportAllChanges);r&&(r.observe({type:"first-input",buffered:!0}),l(function(){e(r.takeRecords()),t.value<0&&0<c()&&(t.value=0,t.entries=[]),i(!0)}),b(function(){B=[],J=G(),t=f("INP"),i=s(o,t,n,a.reportAllChanges)}))})},R={},Q=function(u,c){c=c||{},A(function(){function n(n){var e;(n=n[n.length-1])&&(e=Math.max(n.startTime-S(),0))<i.firstHiddenTime&&(o.value=e,o.entries=[n],t())}var t,e,r=[2500,4e3],i=v(),o=f("LCP"),a=I("largest-contentful-paint",n);a&&(t=s(u,o,r,c.reportAllChanges),e=p(function(){R[o.id]||(n(a.takeRecords()),a.disconnect(),R[o.id]=!0,t(!0))}),["keydown","click"].forEach(function(n){addEventListener(n,e,!0)}),l(e),b(function(n){o=f("LCP"),t=s(u,o,r,c.reportAllChanges),d(function(){o.value=performance.now()-n.timeStamp,R[o.id]=!0,t(!0)})}))})},U=function(t,r){r=r||{};var i=[800,1800],o=f("TTFB"),a=s(t,o,i,r.reportAllChanges);y(function(){var n,e=w();!e||(n=e.responseStart)<=0||n>performance.now()||(o.value=Math.max(n-S(),0),o.entries=[e],a(!0),b(function(){o=f("TTFB",0),(a=s(t,o,i,r.reportAllChanges))(!0)}))})}}}]);
//# sourceMappingURL=85.production.js.map