(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/details/news"],{175:function(t,e,n){"use strict";(function(t,e){n(5);a(n(4));var i=a(n(176));function a(t){return t&&t.__esModule?t:{default:t}}t.__webpack_require_UNI_MP_PLUGIN__=n,e(i.default)}).call(this,n(1)["default"],n(1)["createPage"])},176:function(t,e,n){"use strict";n.r(e);var i=n(177),a=n(179);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n(181);var s,r=n(11),l=Object(r["default"])(a["default"],i["render"],i["staticRenderFns"],!1,null,"9b98510e",null,!1,i["components"],s);l.options.__file="pages/details/news.vue",e["default"]=l.exports},177:function(t,e,n){"use strict";n.r(e);var i=n(178);n.d(e,"render",(function(){return i["render"]})),n.d(e,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(e,"components",(function(){return i["components"]}))},178:function(t,e,n){"use strict";var i;n.r(e),n.d(e,"render",(function(){return a})),n.d(e,"staticRenderFns",(function(){return s})),n.d(e,"recyclableRender",(function(){return o})),n.d(e,"components",(function(){return i}));try{i={mpHtml:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/mp-html/components/mp-html/mp-html")]).then(n.bind(null,302))}}}catch(r){if(-1===r.message.indexOf("Cannot find module")||-1===r.message.indexOf(".vue"))throw r;console.error(r.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.newsDetailsData.title?t._f("formatNewsTime")(t.newsDetailsData.newstime):null),i=t.newsDetailsData.title?t._f("formatWriter")(t.newsDetailsData.writer):null,a=t.relatSchool.length?{"margin-top":0,"border-bottom":"1px solid #eee"}:null,o=t.relatMajor.length?{"margin-top":0,"border-bottom":"1px solid #eee"}:null,s=t.relatNews.length?{"margin-top":0,"border-bottom":"1px solid #eee"}:null;t.$mp.data=Object.assign({},{$root:{f0:n,f1:i,a0:a,a1:o,a2:s}})},o=!1,s=[];a._withStripped=!0},179:function(t,e,n){"use strict";n.r(e);var i=n(180),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},180:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(153),a=n(150),o=n(152),s=function(){n.e("components/library/DetailsSuspend").then(function(){return resolve(n(310))}.bind(null,n)).catch(n.oe)},r=function(){n.e("components/library/DetailsTit").then(function(){return resolve(n(317))}.bind(null,n)).catch(n.oe)},l=function(){n.e("components/library/DetailsSkeleton").then(function(){return resolve(n(324))}.bind(null,n)).catch(n.oe)},c=function(){Promise.all([n.e("common/vendor"),n.e("components/list/NewsList")]).then(function(){return resolve(n(274))}.bind(null,n)).catch(n.oe)},u=function(){n.e("components/list/SchoolList").then(function(){return resolve(n(288))}.bind(null,n)).catch(n.oe)},d=function(){n.e("components/list/MajorList").then(function(){return resolve(n(295))}.bind(null,n)).catch(n.oe)},f=function(){n.e("components/library/Icons").then(function(){return resolve(n(331))}.bind(null,n)).catch(n.oe)},h=null,m={components:{DetailsSuspend:s,DetailsTit:r,DetailsSkeleton:l,NewsList:c,SchoolList:u,MajorList:d,Icons:f},data:function(){return{id:"",requestTask:null,relatNews:[],relatMajor:[],relatSchool:[],newsDetailsData:{},html:"",disabled:null,appear:!1,like:0,like5:!1,isFavor:!1}},filters:{formatWriter:function(t){return t},formatNewsTime:function(t){return t.slice(5)}},onLoad:function(e){this.isFavor=getApp().globalData.isFavor,e.id?(this.id=e.id,this.requestTask=(0,i.getNewsDetails)(e.id)):t.switchTab({url:"/pages/home/home"})},onShow:function(){var e=this;0===Object.keys(this.newsDetailsData).length&&this.requestTask.then((function(n){e.newsDetailsData=n.data,e.like=Number(n.data.diggtop),e.html=n.data.newstext;e.$refs.article;t.setNavigationBarTitle({title:n.data.title}),e.setBdWebtate(),e.getSchoolListFn(),e.getMajorListFn(),e.getInformation()}))},onUnload:function(){h&&h.disconnect()},methods:{favorstatuschange:function(t){console.log(t),t.detail&&!0===t.detail.isFavor&&(this.disabled=!1,console.log(t.detail.isFavor))},setBdWebtate:function(){var t=this.newsDetailsData,e=[t.titlepic];-1===t.titlepic.indexOf(o.websiteUrl)&&t.titlepic&&(e=[o.websiteUrl+t.titlepic]),swan.setPageInfo({title:t.title+" - 上职校网",keywords:t.keyboard,description:t.smalltext,releaseDate:t.newstime,articleTitle:t.title+" - 上职校网",likes:t.istop+1,image:e})},getInformation:function(){var t=this;if(!this.relatNews.length){var e=this.newsDetailsData,n=e.keyboard,i=/,|，|、|\|/,o=n.split(i);e.tuijianydbt1.trim()&&o.push(e.tuijianydbt1.trim()),e.tuijianydbt2.trim()&&o.push(e.tuijianydbt2.trim()),e.tuijianydbt3.trim()&&o.push(e.tuijianydbt3.trim()),e.tuijianydbt4.trim()&&o.push(e.tuijianydbt4.trim()),e.tuijianydbt5.trim()&&o.push(e.tuijianydbt5.trim());var s=o.join(",");(0,a.getSearch)(s,1,9).then((function(e){var n=e.data.rows;n=n.filter((function(e){return e.id!==t.newsDetailsData.id})),t.relatNews=n}))}},getSchoolListFn:function(){var t=this,e=this.newsDetailsData.title;e=e&&e.slice(0,5),(0,a.getSearch)(e,1,8,"pt").then((function(e){t.relatSchool=e.data.rows}))},getMajorListFn:function(){var t=this,e=this.newsDetailsData.title,n=e.indexOf("专业");n>-1&&(e=e.slice(0,n)),e=e&&e.slice(0,5),(0,a.getSearch)(e,1,8,"pz").then((function(e){t.relatMajor=e.data.rows}))},setNewsLikeFn:function(){this.like5?t.showToast({title:"您已点赞5次啦",icon:"none"}):(this.like++,this.like===Number(this.newsDetailsData.diggtop)+5&&(this.like5=!0),(0,i.setNewsLike)(this.id).then())}},onShareAppMessage:function(t){"button"===t.from&&console.log(t.target);var e=getCurrentPages(),n=(e[e.length-1].route,e[e.length-1]["$page"].fullPath);return{title:this.newsDetailsData.title,path:n,imageUrl:o.websiteUrl+this.newsDetailsData.titlepic,content:this.newsDetailsData.smalltext,desc:this.newsDetailsData.smalltext}}};e.default=m}).call(this,n(1)["default"])},181:function(t,e,n){"use strict";n.r(e);var i=n(182),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},182:function(t,e,n){}},[[175,"common/runtime","common/vendor"]]]);