(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/mp-html/components/mp-html/mp-html"],{"0244":function(t,e,n){"use strict";n.r(e);var o=n("0f4f"),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=i.a},"0c1d":function(t,e,n){"use strict";n.r(e);var o=n("8034"),i=n("0244");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("d7eb");var a,s=n("f0c5"),l=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);e["default"]=l.exports},"0f4f":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("51fd"));function i(t){return t&&t.__esModule?t:{default:t}}var r=function(){n.e("uni_modules/mp-html/components/mp-html/node/node").then(function(){return resolve(n("f4b5"))}.bind(null,n)).catch(n.oe)},a=[],s={name:"mp-html",data:function(){return{nodes:[]}},props:{containerStyle:{type:String,default:""},content:{type:String,default:""},copyLink:{type:[Boolean,String],default:!0},domain:String,errorImg:{type:String,default:""},lazyLoad:{type:[Boolean,String],default:!1},loadingImg:{type:String,default:""},pauseVideo:{type:[Boolean,String],default:!0},previewImg:{type:[Boolean,String],default:!0},scrollTable:[Boolean,String],selectable:[Boolean,String],setTitle:{type:[Boolean,String],default:!0},showImgMenu:{type:[Boolean,String],default:!0},tagStyle:Object,useAnchor:[Boolean,Number]},components:{node:r},watch:{content:function(t){this.setContent(t)}},created:function(){this.plugins=[];for(var t=a.length;t--;)this.plugins.push(new a[t](this))},mounted:function(){this.content&&!this.nodes.length&&this.setContent(this.content)},beforeDestroy:function(){this._hook("onDetached")},methods:{in:function(t,e,n){t&&e&&n&&(this._in={page:t,selector:e,scrollTop:n})},navigateTo:function(e,n){var o=this;return new Promise((function(i,r){if(o.useAnchor){n=n||parseInt(o.useAnchor)||0;var a=" ",s=t.createSelectorQuery().in(o._in?o._in.page:o).select((o._in?o._in.selector:"._root")+(e?"".concat(a,"#").concat(e):"")).boundingClientRect();o._in?s.select(o._in.selector).scrollOffset().select(o._in.selector).boundingClientRect():s.selectViewport().scrollOffset(),s.exec((function(e){if(e[0]){var a=e[1].scrollTop+e[0].top-(e[2]?e[2].top:0)+n;o._in?o._in.page[o._in.scrollTop]=a:t.pageScrollTo({scrollTop:a,duration:300}),i()}else r(Error("Label not found"))}))}else r(Error("Anchor is disabled"))}))},getText:function(t){var e="";return function t(n){for(var o=0;o<n.length;o++){var i=n[o];if("text"===i.type)e+=i.text.replace(/&amp;/g,"&");else if("br"===i.name)e+="\n";else{var r="p"===i.name||"div"===i.name||"tr"===i.name||"li"===i.name||"h"===i.name[0]&&i.name[1]>"0"&&i.name[1]<"7";r&&e&&"\n"!==e[e.length-1]&&(e+="\n"),i.children&&t(i.children),r&&"\n"!==e[e.length-1]?e+="\n":"td"!==i.name&&"th"!==i.name||(e+="\t")}}}(t||this.nodes),e},getRect:function(){var e=this;return new Promise((function(n,o){t.createSelectorQuery().in(e).select("#_root").boundingClientRect().exec((function(t){return t[0]?n(t[0]):o(Error("Root label not found"))}))}))},pauseMedia:function(){for(var t=(this._videos||[]).length;t--;)this._videos[t].pause()},setPlaybackRate:function(t){this.playbackRate=t;for(var e=(this._videos||[]).length;e--;)this._videos[e].playbackRate(t)},setContent:function(t,e){var n=this;e&&this.imgList||(this.imgList=[]);var i=new o.default(this).parse(t);if(this.$set(this,"nodes",e?(this.nodes||[]).concat(i):i),this._videos=[],this.$nextTick((function(){n._hook("onLoad"),n.$emit("load")})),this.lazyLoad||this.imgList._unloadimgs<this.imgList.length/2){var r,a=function t(e){e.height===r?n.$emit("ready",e):(r=e.height,setTimeout((function(){n.getRect().then(t)}),350))};this.getRect().then(a)}else this.imgList._unloadimgs||this.getRect((function(t){n.$emit("ready",t)}))},_hook:function(t){for(var e=a.length;e--;)this.plugins[e][t]&&this.plugins[e][t]()}}};e.default=s}).call(this,n("5486")["default"])},"6d88":function(t,e,n){},8034:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement;t._self._c},r=[]},d7eb:function(t,e,n){"use strict";var o=n("6d88"),i=n.n(o);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/mp-html/components/mp-html/mp-html-create-component',
    {
        'uni_modules/mp-html/components/mp-html/mp-html-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('5486')['createComponent'](__webpack_require__("0c1d"))
        })
    },
    [['uni_modules/mp-html/components/mp-html/mp-html-create-component']]
]);