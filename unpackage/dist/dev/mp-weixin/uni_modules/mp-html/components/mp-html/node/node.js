(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/mp-html/components/mp-html/node/node"],{394:function(t,e,n){"use strict";n.r(e);var r=n(395),i=n(397);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n(399);var s,a=n(11),c=n(401),u=Object(a["default"])(i["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],s);"function"===typeof c["default"]&&Object(c["default"])(u),u.options.__file="uni_modules/mp-html/components/mp-html/node/node.vue",e["default"]=u.exports},395:function(t,e,n){"use strict";n.r(e);var r=n(396);n.d(e,"render",(function(){return r["render"]})),n.d(e,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(e,"components",(function(){return r["components"]}))},396:function(t,e,n){"use strict";var r;n.r(e),n.d(e,"render",(function(){return i})),n.d(e,"staticRenderFns",(function(){return s})),n.d(e,"recyclableRender",(function(){return o})),n.d(e,"components",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.childs,(function(e,n){var r=t.__get_orig(e),i="img"===e.name&&e.t?"<img class='_img' style='"+e.attrs.style+"' src='"+e.attrs.src+"'>":null;return{$orig:r,a0:i}})));t.$mp.data=Object.assign({},{$root:{l0:n}})},o=!1,s=[];i._withStripped=!0},397:function(t,e,n){"use strict";n.r(e);var r=n(398),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},398:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=function(){Promise.resolve().then(function(){return resolve(n(394))}.bind(null,n)).catch(n.oe)},i={name:"node",options:{virtualHost:!0},data:function(){return{ctrl:{},isiOS:t.getSystemInfoSync().system.includes("iOS")}},props:{name:String,attrs:{type:Object,default:function(){return{}}},childs:Array,opts:Array},components:{node:r},mounted:function(){var t=this;this.$nextTick((function(){for(t.root=t.$parent;"mp-html"!==t.root.$options.name;t.root=t.root.$parent);}))},beforeDestroy:function(){},methods:{toJSON:function(){return this},play:function(e){if(this.root.$emit("play"),this.root.pauseVideo){for(var n=!1,r=e.target.id,i=this.root._videos.length;i--;)this.root._videos[i].id===r?n=!0:this.root._videos[i].pause();if(!n){var o=t.createVideoContext(r,this);o.id=r,this.root.playbackRate&&o.playbackRate(this.root.playbackRate),this.root._videos.push(o)}}},imgTap:function(e){var n=this.childs[e.currentTarget.dataset.i];n.a?this.linkTap(n.a):n.attrs.ignore||(this.root.$emit("imgtap",n.attrs),this.root.previewImg&&t.previewImage({showmenu:this.root.showImgMenu,current:parseInt(n.attrs.i),urls:this.root.imgList}))},imgLongTap:function(t){},imgLoad:function(t){var e=t.currentTarget.dataset.i;this.childs[e].w?(this.opts[1]&&!this.ctrl[e]||-1===this.ctrl[e])&&this.$set(this.ctrl,e,1):this.$set(this.ctrl,e,t.detail.width),this.checkReady()},checkReady:function(){var t=this;this.root.lazyLoad||(this.root._unloadimgs-=1,this.root._unloadimgs||setTimeout((function(){t.root.getRect().then((function(e){t.root.$emit("ready",e)}))}),350))},linkTap:function(e){var n=e.currentTarget?this.childs[e.currentTarget.dataset.i]:{},r=n.attrs||e,i=r.href;this.root.$emit("linktap",Object.assign({innerText:this.root.getText(n.children||[])},r)),i&&("#"===i[0]?this.root.navigateTo(i.substring(1)).catch((function(){})):i.split("?")[0].includes("://")?this.root.copyLink&&t.setClipboardData({data:i,success:function(){return t.showToast({title:"链接已复制"})}}):t.navigateTo({url:i,fail:function(){t.switchTab({url:i,fail:function(){}})}}))},mediaError:function(t){var e=t.currentTarget.dataset.i,n=this.childs[e];if("video"===n.name||"audio"===n.name){var r=(this.ctrl[e]||0)+1;if(r>n.src.length&&(r=0),r<n.src.length)return void this.$set(this.ctrl,e,r)}else"img"===n.name&&(this.opts[2]&&this.$set(this.ctrl,e,-1),this.checkReady());this.root&&this.root.$emit("error",{source:n.name,attrs:n.attrs,errMsg:t.detail.errMsg})}}};e.default=i}).call(this,n(1)["default"])},399:function(t,e,n){"use strict";n.r(e);var r=n(400),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},400:function(t,e,n){},401:function(t,e,n){"use strict";n.r(e);var r=n(402);e["default"]=r["default"]},402:function(t,e,n){"use strict";n.r(e),e["default"]=function(t){t.options.wxsCallMethods||(t.options.wxsCallMethods=[])}}}]);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/mp-html/components/mp-html/node/node.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/mp-html/components/mp-html/node/node-create-component',
    {
        'uni_modules/mp-html/components/mp-html/node/node-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(394))
        })
    },
    [['uni_modules/mp-html/components/mp-html/node/node-create-component']]
]);
