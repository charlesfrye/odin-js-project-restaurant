(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,"* {\n  margin: 0px;\n  padding: 0px;\n}\n\n.div {\n  border: 2px dashed black;\n}\n\nbody {\n  background-color: maroon;\n  display: grid;\n  justify-items: center;\n}\n\n#container {\n  width: 50%;\n  height: 100vh;\n  display: grid;\n  justify-items: center;\n  grid-template-rows: 2rem 1fr;\n}\n\n.header {\n  font-weight: bolder;\n  font-size: large;\n  text-align: center;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  justify-content: space-between;\n}\n\n.navs {\n  display: grid;\n  grid-template-columns: repeat(3, 8rem);\n}\n\n.nav {\n  background-color: tomato;\n  border-top-left-radius: 10% 50%;\n  border-top-right-radius: 10% 50%;\n  padding: 0.1rem 0.25rem;\n  -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n      -khtml-user-select: none; /* Konqueror HTML */\n        -moz-user-select: none; /* Old versions of Firefox */\n        -ms-user-select: none; /* Internet Explorer/Edge */\n            user-select: none; /* Non-prefixed version, currently\n                                  supported by Chrome, Edge, Opera and Firefox */\n}\n\n.title {\n  text-align: right;\n  color: aliceblue;\n  opacity: 50%;\n  font-weight: lighter;\n  font-style: italic;\n}\n\n#page {\n  background-color: tomato;\n  width: 100%;\n  height: 100%;\n}\n\n#content {\n  margin: 0.5rem 3rem 0.5rem 3rem;\n  display: grid;\n  grid-template-columns: 1fr;\n}\n\nimg {\n  justify-self: center;\n}\n\n.inactive {\n  opacity: 65%;\n}\n\n.inactive:hover {\n  opacity: 75%;\n}\n\n.active:hover {\n  opacity: 100%;\n}\n",""]);const c=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],u=i[d]||0,l="".concat(d," ").concat(u);i[d]=u+1;var p=t(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:f,references:1})}a.push(l)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var s=r(e,o),d=0;d<i.length;d++){var u=t(i[d]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),i=t(569),a=t.n(i),c=t(565),s=t.n(c),d=t(216),u=t.n(d),l=t(589),p=t.n(l),m=t(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=u(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=document.getElementsByClassName("nav");function v(){const e=document.getElementById("content");for(;e.firstChild;)e.firstChild.remove()}function g(e){for(const e of h)e.classList.remove("active"),e.classList.add("inactive");e.classList.remove("inactive"),e.classList.add("active")}const y=t.p+"5614fcf99c70e7b113bb.png";function b(){const e=document.getElementById("content"),n=document.getElementById("home");v(),function(e){const n=document.createElement("h1");n.innerText="Good Restaurant",e.appendChild(n)}(e),function(e){const n=document.createElement("img");n.src=y,n.style="width:50%",e.appendChild(n)}(e),E(),g(n)}function E(e){const n=document.createElement("p");n.innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",content.appendChild(n)}function x(e){const n=new Map([["Garlic Bread","$9.99"],["Cheesy Garlic Bread","$19.99"],["Avocado Garlic Bread","$29.99"]]);for(const[e,t]of n){const n=document.createElement("p");n.innerText=`${e}: ${t}`,content.appendChild(n)}}function w(e){const n=document.createElement("p");n.innerText="Do not contact us, we are not a real restaurant.",content.appendChild(n)}document.addEventListener("DOMContentLoaded",(function(){document.getElementById("home").addEventListener("click",(()=>b())),b(),document.getElementById("menu").addEventListener("click",(()=>function(){const e=document.getElementById("content"),n=document.getElementById("menu");v(),function(e){const n=document.createElement("h1");n.innerText="Menu",e.appendChild(n)}(e),x(),g(n)}())),document.getElementById("contact").addEventListener("click",(()=>function(){const e=document.getElementById("content"),n=document.getElementById("contact");v(),function(e){const n=document.createElement("h1");n.innerText="Contact Us",e.appendChild(n)}(e),w(),g(n)}()))}))})()})();