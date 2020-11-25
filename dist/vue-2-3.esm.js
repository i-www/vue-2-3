import e from"vue";import{createApp as t,h as r}from"vue3";var n=Symbol();function i(e,t){e[n]||(e[n]=t,Object.defineProperty(e,"parentNode",{get:function(){return this[n]||this.parentElement}}))}var o=function(e,t){var r=e.splice(0);t.append.apply(t,r),r.forEach((function(e){e[n]=void 0}))};function s(e,t){if(this.frag){var r=this.frag.indexOf(t);r>-1&&this.frag.splice(r,0,e)}if(this[c]){var n=this[c].get(t);n&&(t=n[0])}t.before(e),i(e,this)}function a(e){if(this.frag){var t=this.frag.indexOf(e);t>-1&&this.frag.splice(t,1)}var r=this[c];if(r){var i=r.get(e);if(i)return o(i,e),r.delete(e),void(e[n]=void 0)}e.remove()}var c=Symbol(),u={insertBefore:s,removeChild:a},f=Symbol(),p={insertBefore:s,before:function(e){this.frag[0].before(e)},remove:function(){var e=this[f],t=this.frag,r=t.splice(0,t.length,e);r[0].before(this[f]),r.forEach((function(e){return e.remove()}))},removeChild:a,appendChild:function(e){var t=this.frag.length;this.frag[t-1].after(e);var r=this[f];this.frag[0]===r&&(this.frag.splice(0,1),r.remove()),i(e,this),this.frag.push(e)}},v={inserted:function(e){var t=Array.from(e.childNodes),r=e.parentNode,n=document.createComment("");e[f]=n,0===t.length&&t.push(n);var o=document.createDocumentFragment();o.append.apply(o,t),e.replaceWith(o),e.frag=t,function(e,t,r){e[c]||(e[c]=new Map,Object.assign(e,u)),e[c].set(t,r)}(r,e,t),i(e,r),t.forEach((function(t){return i(t,e)})),Object.defineProperty(e,"innerHTML",{set:function(t){var r=document.createElement("div");r.innerHTML=t;var n=e.frag.length;Array.from(r.childNodes).forEach((function(t){return e.appendChild(t)})),r.append.apply(r,e.frag.splice(0,n))},get:function(){return""}}),Object.assign(e,p)},unbind:function(e){o(e.frag,e),e[f].remove()}},d=function(){};function h(e){return{insertBefore:function(t,r){return e.parentNode.insertBefore(t,r||e)},removeAttribute:d,setAttribute:d}}var l=/-(\w)/g;var m={props:["parent","vnode"],created:function(){this.vue2App=void 0},mounted:function(){var t=this,r=this;this.vue2App=new e({beforeCreate:function(){this.$parent=r.parent},directives:{frag:v},render:function(e){return e("div",{directives:[{name:"frag"}]},[t.vnode()])},el:this.$el})},beforeUnmount:function(){this.vue2App.$destroy()},render:function(){return this.vue2App&&this.vue2App.$forceUpdate(),r("div")}};function g(e,t){for(var r=e;r;){if(r._provided&&r._provided[t])return r._provided[t];r=r.$parent}}var y={inheritAttrs:!1,provide:function(){return{}},mounted:function(){var e=this,n=this;this.v3app=t({render:function(){return r(e.$options.component,function(e){var t,r=e.$attrs,n=e.$listeners,i=e.$vnode.data,o=Object.assign({},r);for(var s in(i.class||i.staticClass)&&(o.class=[i.class,i.staticClass]),(i.style||i.staticStyle)&&(o.style=[i.style,i.staticStyle]),n)o[(t=s,"&"===t[0]&&(t=t.slice(1)+"Passive"),"~"===t[0]&&(t=t.slice(1)+"Once"),"!"===t[0]&&(t=t.slice(1)+"Capture"),"on"+(t[0].toUpperCase()+t.slice(1).replace(l,(function(e,t){return t?t.toUpperCase():""}))))]=n[s];return o}(e),function(e){var t={},n=function(n){t[n]=function(){return r(m,{parent:e,vnode:e.$scopedSlots[n]})}};for(var i in e.$scopedSlots)n(i);return t}(e))},mounted:function(){var e=this;n.v3forceUpdate=function(){return e.$forceUpdate()},n.v3=this._.subTree.component.proxy}}),this.v3app._context.provides=new Proxy({},{has:function(t,r){return g(e,r)},get:function(t,r){return g(e,r)},set:function(t,r,n){return e._provided[r]=n,!0}});var i=this.$el,o=this.v3app.mount(h(i));this.$el=o.$el,i.remove()},beforeDestroy:function(){this.v3app.unmount()},render:function(e){return this.v3forceUpdate&&this.v3forceUpdate(),e("div")}},$=function(e){var t=Object.create(y);return t.component=e,t};function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var O=/\B([A-Z])/g,A=/^on[A-Z]/,C=/(Once|Passive|Capture)$/,j={Once:"~",Passive:"&",Capture:"!"};var x={props:["parent","vnode"],mounted:function(){var e=this;this.vue3App=t({render:function(){return e.vnode()}}),this.vue3App._context.provides=this.parent._.provides;var r=this.$el;this.vue3App.mount(h(r)),r.remove()},destroyed:function(){this.vue3App.unmount()},render:function(e){return e("div")}};function P(e,t){var r={},n=function(n){r[n]=function(){return e(x,{attrs:{parent:t,vnode:t.$slots[n]}})}};for(var i in t.$slots)n(i);return r}var _={configurable:!0},U={created:function(){this.v2=void 0},mounted:function(){var t=this,r=this,n=this.$el;this.v2=new e({provide:function(){return new Proxy(r._.parent.provides,{getOwnPropertyDescriptor:function(e,t){if(t in e)return _}})},render:function(e){return e(r.$options.component,b({},function(e){var t={style:void 0,class:void 0,on:{},attrs:{},props:{}},r=t.on,n=t.attrs;for(var i in e)if(A.test(i)){var o=i.slice(2);if(C.test(o)){for(var s=void 0;s=o.match(C);)o=j[s[0]]+o.slice(0,-s[0].length);o=o.replace("!~","~!")}r[o=o.replace(O,"-$1").toLowerCase()]=e[i]}else"class"===i||"style"===i?t[i]=e[i]:n[i]=e[i];return t}(r.$attrs),{scopedSlots:P(e,r)}))},mounted:function(){for(var e,t,i=r._,o=i.vnode.el;i.vnode.el===o;)i.vnode.el=this.$el,i.parent&&(i=i.parent);e=n,t=this.$el.parentNode,Object.defineProperty(e,"parentNode",{get:function(){return this.parentElement||t}})},destroyed:function(){this.$el.replaceWith(n)},methods:{exposeProvided:function(e){return Object.assign(t._.provides,e)}},el:n})},beforeUnmount:function(){this.v2.$destroy()},render:function(){return this.v2&&this.v2.$forceUpdate(),r("div")}},w={created:function(){this.$root.exposeProvided(this._provided)}},S=function(e){var t=Object.create(e);t.mixins=[w].concat(e.mixins||[]);var r=Object.create(U);return r.component=t,r};export{$ as toVue2,S as toVue3};
