(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/details/school"],{193:function(t,e,n){"use strict";(function(t){n(5);o(n(4));var e=o(n(194));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n(1)["createPage"])},194:function(t,e,n){"use strict";n.r(e);var o=n(195),r=n(197);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n(200);var a,s=n(11),c=Object(s["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,"15f5c41a",null,!1,o["components"],a);c.options.__file="pages/details/school.vue",e["default"]=c.exports},195:function(t,e,n){"use strict";n.r(e);var o=n(196);n.d(e,"render",(function(){return o["render"]})),n.d(e,"staticRenderFns",(function(){return o["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return o["recyclableRender"]})),n.d(e,"components",(function(){return o["components"]}))},196:function(t,e,n){"use strict";var o;n.r(e),n.d(e,"render",(function(){return r})),n.d(e,"staticRenderFns",(function(){return a})),n.d(e,"recyclableRender",(function(){return i})),n.d(e,"components",(function(){return o}));try{o={mpHtml:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/mp-html/components/mp-html/mp-html")]).then(n.bind(null,268))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var t=this,e=t.$createElement,n=(t._self._c,t.relatNews.length?{"margin-top":0,"border-bottom":"1px solid #eee"}:null),o=t.relatSchool.length?{"margin-top":0,"border-bottom":"1px solid #eee"}:null;t.$mp.data=Object.assign({},{$root:{a0:n,a1:o}})},i=!1,a=[];r._withStripped=!0},197:function(t,e,n){"use strict";n.r(e);var o=n(198),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=r.a},198:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(171),r=n(153),i=n(152),a=n(199);function s(t){return d(t)||u(t)||l(t)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t,e){if(t){if("string"===typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}function u(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function d(t){if(Array.isArray(t))return f(t)}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var h=function(){n.e("components/library/DetailsSuspend").then(function(){return resolve(n(276))}.bind(null,n)).catch(n.oe)},m=function(){n.e("components/library/DetailsSkeleton").then(function(){return resolve(n(290))}.bind(null,n)).catch(n.oe)},p=function(){n.e("components/library/DetailsTit").then(function(){return resolve(n(283))}.bind(null,n)).catch(n.oe)},g=function(){n.e("components/list/SchoolList").then(function(){return resolve(n(304))}.bind(null,n)).catch(n.oe)},b=function(){Promise.all([n.e("common/vendor"),n.e("components/list/NewsList")]).then(function(){return resolve(n(297))}.bind(null,n)).catch(n.oe)},v={data:function(){return{id:null,requestTask:null,schoolData:{},environmentData:"",contentData:"",zhaoshengzy:[],tags:[],relatSchool:[],relatNews:[]}},components:{DetailsSuspend:h,DetailsSkeleton:m,SchoolList:g,DetailsTit:p,NewsList:b},onLoad:function(e){e.id?(this.id=e.id,this.requestTask=(0,o.getSchoolDetails)(this.id)):t.switchTab({url:"/pages/home/home"})},onShow:function(){var e=this;0===Object.keys(this.schoolData).length&&this.requestTask.then((function(n){var r=n.data;if(r.pzid.trim()){var a=/,|，|、|\|/,c=r.pzid.split(a).join(",");(0,o.getzhaoshengzy)(c).then((function(t){e.zhaoshengzy=t.data.rows}))}-1===r.titlepic.indexOf(i.websiteUrl)&&(r.titlepic=i.websiteUrl+r.titlepic),e.contentData=r.newstext,e.environmentData=r.huanjing,e.schoolData=r,e.tags=[].concat(s(r.xuexiaoxingzhi.split("|")),s(r.pttags.split("|")),[r.xuexiaoleixing]).filter((function(t){return t.length>0})),t.setNavigationBarTitle({title:r.title}),e.setBdWebtate(),e.getSchoolListFn(),e.getSearchNewsFn()}))},methods:{setBdWebtate:function(){},getSchoolListFn:function(){var t=this;(0,o.getSchoolList)(this.schoolData.classid,1,8).then((function(e){var n=e.data.rows;n=n.filter((function(e){return e.id!==t.schoolData.id})),t.relatSchool=n.sort(a.randomsort)}))},getSearchNewsFn:function(){var t=this,e=this.schoolData.title;e=e.slice(0,5),(0,r.getSearch)(e,1,8).then((function(e){t.relatNews=e.data.rows}))}},computed:{zszyStyle:function(){return this.zhaoshengzy.length<5?{width:"44%"}:{}}},onShareAppMessage:function(t){"button"===t.from&&console.log(t.target);var e=getCurrentPages(),n=(e[e.length-1].route,e[e.length-1]["$page"].fullPath);return{title:this.schoolData.title,path:n,imageUrl:this.schoolData.titlepic,content:this.schoolData.smalltext,desc:this.schoolData.smalltext}}};e.default=v}).call(this,n(1)["default"])},200:function(t,e,n){"use strict";n.r(e);var o=n(201),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=r.a},201:function(t,e,n){}},[[193,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/details/school.js.map