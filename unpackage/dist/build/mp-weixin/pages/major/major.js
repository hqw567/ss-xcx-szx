(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/major/major"],{"1dd0":function(t,n,e){},5490:function(t,n,e){"use strict";var a=e("1dd0"),i=e.n(a);i.a},"6eac":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("0002"),i=e("af24");function r(t){return c(t)||s(t)||u(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t,n){if(t){if("string"===typeof t)return l(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?l(t,n):void 0}}function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function c(t){if(Array.isArray(t))return l(t)}function l(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}var d=function(){e.e("components/list/MajorList").then(function(){return resolve(e("6699"))}.bind(null,e)).catch(e.oe)},f=function(){e.e("components/library/BtnSuspend").then(function(){return resolve(e("64f1"))}.bind(null,e)).catch(e.oe)},m={components:{MajorList:d,BtnSuspend:f},data:function(){return{listData:[],page:1,current:0,ttid:0,tabs:[{name:"全部",id:0},{name:"农林牧渔",id:29},{name:"环境安全",id:30},{name:"能源材料",id:31},{name:"装备制造",id:32},{name:"生物化工",id:33},{name:"轻纺食品",id:34},{name:"交通运输",id:35},{name:"电子信息",id:36},{name:"医药卫生",id:37},{name:"财经商贸",id:38},{name:"旅游服务",id:39},{name:"文化艺术",id:40},{name:"新闻传播",id:41},{name:"教育体育",id:42},{name:"公共管理",id:43},{name:"土木水利",id:44},{name:"公安司法",id:55}]}},onLoad:function(){},created:function(){var t=this;(0,a.getMajorList)().then((function(n){t.listData=n.data.rows}))},computed:{listDataFn:function(){return this.listData.map((function(t){return{title:t.title,titlepic:i.websiteUrl+t.titlepic,smalltext:t.smalltext.substring(0,33)+"...",id:t.id}}))}},methods:{getMajorListFn:function(){var t=this;(0,a.getMajorList)().then((function(n){var e=n.data;e.rows.map((function(t){return t.titlepic=i.websiteUrl+t.titlepic,t.smalltext=t.smalltext.substring(0,30)+"...",t})),t.listData=e.rows}))},changeTab:function(n){var e=this;this.page=1,this.ttid=this.tabs[n].id,(0,a.getMajorList)(this.ttid).then((function(t){e.listData=t.data.rows})),t.pageScrollTo({scrollTop:0})}},onReachBottom:function(){var n=this,e=++this.page;console.log(e),console.log(this.ttid),(0,a.getMajorList)(this.ttid,e).then((function(e){var a;e.data.rows.length>0?(a=n.listData).push.apply(a,r(e.data.rows)):t.showToast({title:"已没有更多了内容了!",icon:"none",duration:2e3})}))},onPullDownRefresh:function(){var n=this;(0,a.getMajorList)(this.ttid).then((function(e){n.listData=e.data.rows,t.stopPullDownRefresh()}))}};n.default=m}).call(this,e("543d")["default"])},"88b37":function(t,n,e){"use strict";e.r(n);var a=e("d158"),i=e("d06f");for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);e("5490");var o,u=e("f0c5"),s=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"a9881060",null,!1,a["a"],o);n["default"]=s.exports},a2e9:function(t,n,e){"use strict";(function(t){e("2b15");a(e("66fd"));var n=a(e("88b37"));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},d06f:function(t,n,e){"use strict";e.r(n);var a=e("6eac"),i=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=i.a},d158:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}));var a={vTabs:function(){return e.e("components/v-tabs/v-tabs").then(e.bind(null,"55d8"))}},i=function(){var t=this,n=t.$createElement;t._self._c},r=[]}},[["a2e9","common/runtime","common/vendor"]]]);