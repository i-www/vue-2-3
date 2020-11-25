!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue"),require("vue3")):"function"==typeof define&&define.amd?define(["exports","vue","vue3"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).vue23={},e.Vue,e.Vue3)}(this,(function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=r(t),o=Symbol();function s(e,t){e[o]||(e[o]=t,Object.defineProperty(e,"parentNode",{get:function(){return this[o]||this.parentElement}}))}var a=function(e,t){var n=e.splice(0);t.append.apply(t,n),n.forEach((function(e){e[o]=void 0}))};function u(e,t){if(this.frag){var n=this.frag.indexOf(t);n>-1&&this.frag.splice(n,0,e)}if(this[f]){var r=this[f].get(t);r&&(t=r[0])}t.before(e),s(e,this)}function c(e){if(this.frag){var t=this.frag.indexOf(e);t>-1&&this.frag.splice(t,1)}var n=this[f];if(n){var r=n.get(e);if(r)return a(r,e),n.delete(e),void(e[o]=void 0)}e.remove()}var f=Symbol(),d={insertBefore:u,removeChild:c},p=Symbol(),v={insertBefore:u,before:function(e){this.frag[0].before(e)},remove:function(){var e=this[p],t=this.frag,n=t.splice(0,t.length,e);n[0].before(this[p]),n.forEach((function(e){return e.remove()}))},removeChild:c,appendChild:function(e){var t=this.frag.length;this.frag[t-1].after(e);var n=this[p];this.frag[0]===n&&(this.frag.splice(0,1),n.remove()),s(e,this),this.frag.push(e)}},l={inserted:function(e){var t=Array.from(e.childNodes),n=e.parentNode,r=document.createComment("");e[p]=r,0===t.length&&t.push(r);var i=document.createDocumentFragment();i.append.apply(i,t),e.replaceWith(i),e.frag=t,function(e,t,n){e[f]||(e[f]=new Map,Object.assign(e,d)),e[f].set(t,n)}(n,e,t),s(e,n),t.forEach((function(t){return s(t,e)})),Object.defineProperty(e,"innerHTML",{set:function(t){var n=document.createElement("div");n.innerHTML=t;var r=e.frag.length;Array.from(n.childNodes).forEach((function(t){return e.appendChild(t)})),n.append.apply(n,e.frag.splice(0,r))},get:function(){return""}}),Object.assign(e,v)},unbind:function(e){a(e.frag,e),e[p].remove()}},h=function(){};function m(e){return{insertBefore:function(t,n){return e.parentNode.insertBefore(t,n||e)},removeAttribute:h,setAttribute:h}}var g=Symbol("vue-2-3"),b=/-(\w)/g;var y={props:["parent","vnode"],created:function(){this.state=i.default.observable({vnode:null})},mounted:function(){var e=this,t=this;this.vue2App=new i.default({beforeCreate:function(){this.$parent=t.parent},directives:{frag:l},render:function(t){return t("div",{directives:[{name:"frag"}]},[e.state.vnode()])}}),this.vue2App.$mount(this.$el)},beforeUnmount:function(){this.vue2App.$destroy()},render:function(){return this.state.vnode=this.vnode,n.h("div")}};function $(e,t){for(var n=e;n;){if(n._provided&&n._provided[t])return n._provided[t];n=n.$parent}}var O={inheritAttrs:!1,created:function(){this[g]=n.shallowReactive({attrs:null,slots:null})},provide:function(){return{}},mounted:function(){var e=this,t=this;this.v3app=n.createApp({render:function(){return n.h(e.$options.component,e[g].attrs,e[g].slots)},mounted:function(){t.v3=this._.subTree.component.proxy}}),this.v3app._context.provides=new Proxy({},{has:function(t,n){return $(e,n)},get:function(t,n){return $(e,n)},set:function(t,n,r){return e._provided[n]=r,!0}});var r=this.$el,i=this.v3app.mount(m(r));this.$el=i.$el,r.remove()},beforeDestroy:function(){this.v3app.unmount()},render:function(e){return this[g].attrs=function(e){var t,n=e.$attrs,r=e.$listeners,i=e.$vnode.data,o=Object.assign({},n);for(var s in(i.class||i.staticClass)&&(o.class=[i.class,i.staticClass]),(i.style||i.staticStyle)&&(o.style=[i.style,i.staticStyle]),r)o[(t=s,"&"===t[0]&&(t=t.slice(1)+"Passive"),"~"===t[0]&&(t=t.slice(1)+"Once"),"!"===t[0]&&(t=t.slice(1)+"Capture"),"on"+(t[0].toUpperCase()+t.slice(1).replace(b,(function(e,t){return t?t.toUpperCase():""}))))]=r[s];return o}(this),this[g].slots=function(e){var t={},r=function(r){t[r]=function(){return n.h(y,{parent:e,vnode:e.$scopedSlots[r]})}};for(var i in e.$scopedSlots)r(i);return t}(this),e("div")}};function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var A=/\B([A-Z])/g,j=/^on[A-Z]/,x=/(Once|Passive|Capture)$/,C={Once:"~",Passive:"&",Capture:"!"};var P={props:["parent","vnode"],created:function(){this.state=n.shallowReactive({vnode:null})},mounted:function(){var e=this;this.vue3App=n.createApp({render:function(){return e.state.vnode()}}),this.vue3App._context.provides=this.parent._.provides;var t=this.$el;this.vue3App.mount(m(t)),t.remove()},destroyed:function(){this.vue3App.unmount()},render:function(e){return this.state.vnode=this.vnode,e("div")}};function w(e,t){var n={},r=function(r){n[r]=function(){return e(P,{attrs:{parent:t,vnode:t.$slots[r]}})}};for(var i in t.$slots)r(i);return n}var S={configurable:!0},E={created:function(){this._[g]=i.default.observable({data:null,slots:null})},mounted:function(){var e=this,t=this,n=this.$el;this.v2=new i.default({provide:function(){return new Proxy(e._.parent.provides,{getOwnPropertyDescriptor:function(e,t){if(t in e)return S}})},render:function(t){return t(e.$options.component,_({},e._[g].data,{scopedSlots:w(t,e)}))},mounted:function(){for(var e,r,i=t._,o=i.vnode.el;i.vnode.el===o;)i.vnode.el=this.$el,i.parent&&(i=i.parent);e=n,r=this.$el.parentNode,Object.defineProperty(e,"parentNode",{get:function(){return this.parentElement||r}})},destroyed:function(){this.$el.replaceWith(n)},methods:{exposeProvided:function(t){return Object.assign(e._.provides,t)}},el:n})},beforeUnmount:function(){this.v2.$destroy()},render:function(){var e=function(e){var t={style:void 0,class:void 0,on:{},attrs:{}},n=t.on,r=t.attrs;for(var i in e)if(j.test(i)){var o=i.slice(2);if(x.test(o)){for(var s=void 0;s=o.match(x);)o=C[s[0]]+o.slice(0,-s[0].length);o=o.replace("!~","~!")}n[o=o.replace(A,"-$1").toLowerCase()]=e[i]}else"class"===i||"style"===i?t[i]=e[i]:r[i]=e[i];return t}(this.$attrs);return this._[g].data=e,this._[g].slots=this.$slots,n.h("div")}},N={created:function(){this.$root.exposeProvided(this._provided)}};e.toVue2=function(e){var t=Object.create(O);return t.component=e,t},e.toVue3=function(e){var t=Object.create(e);t.mixins=[N].concat(e.mixins||[]);var n=Object.create(E);return n.component=t,n},Object.defineProperty(e,"__esModule",{value:!0})}));
