(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{uSsP:function(t,e,r){"use strict";r.r(e),r.d(e,"createGesture",function(){return d});var i,n=function(){function t(t){this.doc=t,this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set,this.capturedId=null}return t.prototype.createGesture=function(t){return new s(this,this.newID(),t.name,t.priority?t.priority:0,!!t.disableScroll)},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new o(this.newID(),this,t.disable,!!t.disableScroll)},t.prototype.start=function(t,e,r){return this.canStart(t)?(this.requestedStart.set(e,r),!0):(this.requestedStart.delete(e),!1)},t.prototype.capture=function(t,e,r){if(!this.start(t,e,r))return!1;var i=this.requestedStart,n=-1e4;if(i.forEach(function(t){n=Math.max(n,t)}),n===r){this.capturedId=e,i.clear();var s=new CustomEvent("ionGestureCaptured",{detail:t});return this.doc.body.dispatchEvent(s),!0}return i.delete(e),!1},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId&&t===this.capturedId&&(this.capturedId=null)},t.prototype.disableGesture=function(t,e){var r=this.disabledGestures.get(t);r||(r=new Set,this.disabledGestures.set(t,r)),r.add(e)},t.prototype.enableGesture=function(t,e){var r=this.disabledGestures.get(t);r&&r.delete(e)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t)},t.prototype.canStart=function(t){return!this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return!!this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var e=this.disabledGestures.get(t);return!!(e&&e.size>0)},t.prototype.newID=function(){return this.gestureId++,this.gestureId},t}(),s=function(){function t(t,e,r,i,n){this.id=e,this.name=r,this.priority=i,this.disableScroll=n,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),o=function(){function t(t,e,r,i){this.id=t,this.disable=r,this.disableScroll=i,this.ctrl=e}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.disableGesture(e[t],this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.enableGesture(e[t],this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),a=new n(document);function c(t,e,r,n){var s,o,a=function(t){if(void 0===i)try{var e=Object.defineProperty({},"passive",{get:function(){i=!0}});t.addEventListener("optsTest",function(){},e)}catch(t){i=!1}return!!i}(t)?{capture:!!n.capture,passive:!!n.passive}:!!n.capture;return t.__zone_symbol__addEventListener?(s="__zone_symbol__addEventListener",o="__zone_symbol__removeEventListener"):(s="addEventListener",o="removeEventListener"),t[s](e,r,a),function(){t[o](e,r,a)}}var u=2e3;function l(t){return t instanceof Document?t:t.ownerDocument}function d(t){var e=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),r=e.canStart,i=e.onWillStart,n=e.onStart,s=e.onEnd,o=e.notCaptured,d=e.onMove,v=e.threshold,b=e.queue,y={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},S=function(t,e,r,i,n){var s,o,a,d,h,p,f,v=0;function b(i){v=Date.now()+u,e(i)&&(!o&&r&&(o=c(t,"touchmove",r,n)),a||(a=c(t,"touchend",S,n)),d||(d=c(t,"touchcancel",S,n)))}function y(i){v>Date.now()||e(i)&&(!p&&r&&(p=c(l(t),"mousemove",r,n)),f||(f=c(l(t),"mouseup",m,n)))}function S(t){w(),i&&i(t)}function m(t){X(),i&&i(t)}function w(){o&&o(),a&&a(),d&&d(),o=a=d=void 0}function X(){p&&p(),f&&f(),p=f=void 0}function g(){w(),X()}function Y(e){e?(s&&s(),h&&h(),s=h=void 0,g()):(s||(s=c(t,"touchstart",b,n)),h||(h=c(t,"mousedown",y,n)))}return{setDisabled:Y,stop:g,destroy:function(){Y(!0),i=r=e=void 0}}}(e.el,function(t){var e=f(t);return!(g||!Y)&&(p(t,y),y.startX=y.currentX,y.startY=y.currentY,y.startTimeStamp=y.timeStamp=e,y.velocityX=y.velocityY=y.deltaX=y.deltaY=0,y.event=t,(!r||!1!==r(y))&&(w.release(),!!w.start()&&(g=!0,0===v?_():(m.start(y.startX,y.startY),!0))))},function(t){X?!D&&Y&&(D=!0,h(y,t),b.write(G)):(h(y,t),m.detect(y.currentX,y.currentY)&&(m.isGesture()&&_()||(E(),S.stop(),o&&o(y))))},function(t){var e=X,r=Y;E(),r&&(h(y,t),e?s&&s(y):o&&o(y))},{capture:!1}),m=function(t,e,r){var i=r*(Math.PI/180),n="x"===t,s=Math.cos(i),o=e*e,a=0,c=0,u=!1,l=0;return{start:function(t,e){a=t,c=e,l=0,u=!0},detect:function(t,e){if(!u)return!1;var r=t-a,i=e-c,d=r*r+i*i;if(d<o)return!1;var h=Math.sqrt(d),p=(n?r:i)/h;return l=p>s?1:p<-s?-1:0,u=!1,!0},isGesture:function(){return 0!==l},getDirection:function(){return l}}}(e.direction,e.threshold,e.maxAngle),w=a.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),X=!1,g=!1,Y=!0,D=!1;function G(){X&&(D=!1,d&&d(y))}function _(){return!(w&&!w.capture()||(X=!0,Y=!1,y.startX=y.currentX,y.startY=y.currentY,y.startTimeStamp=y.timeStamp,i?i(y).then(I):I(),0))}function I(){n&&n(y),Y=!0}function E(){X=!1,g=!1,D=!1,Y=!0,w.release()}return{setDisabled:function(t){S.setDisabled(t)},destroy:function(){w.destroy(),S.destroy()}}}function h(t,e){var r=t.currentX,i=t.currentY,n=t.timeStamp;p(e,t);var s=t.currentX,o=t.currentY,a=(t.timeStamp=f(e))-n;if(a>0&&a<100){var c=(o-i)/a;t.velocityX=(s-r)/a*.7+.3*t.velocityX,t.velocityY=.7*c+.3*t.velocityY}t.deltaX=s-t.startX,t.deltaY=o-t.startY,t.event=e}function p(t,e){var r=0,i=0;if(t){var n=t.changedTouches;if(n&&n.length>0){var s=n[0];r=s.clientX,i=s.clientY}else void 0!==t.pageX&&(r=t.pageX,i=t.pageY)}e.currentX=r,e.currentY=i}function f(t){return t.timeStamp||Date.now()}}}]);