(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news/news"],{"259e":function(t,e,n){"use strict";var r=n("283c"),i=n.n(r);i.a},"283c":function(t,e,n){},"2ea1":function(t,e,n){"use strict";n.r(e);var r=n("a88f"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},"39e1":function(t,e,n){"use strict";(function(t,e){n("504e");i(n("66fd"));var r=i(n("8343"));function i(t){return t&&t.__esModule?t:{default:t}}t.__webpack_require_UNI_MP_PLUGIN__=n,e(r.default)}).call(this,n("5486")["default"],n("5486")["createPage"])},8343:function(t,e,n){"use strict";n.r(e);var r=n("a321"),i=n("2ea1");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("259e");var o,l=n("f0c5"),s=Object(l["a"])(i["default"],r["b"],r["c"],!1,null,"eeb46fc6",null,!1,r["a"],o);e["default"]=s.exports},a321:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var r={vTabs:function(){return n.e("components/v-tabs/v-tabs").then(n.bind(null,"52fd"))}},i=function(){var t=this,e=t.$createElement;t._self._c},a=[]},a88f:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n("a6c1");var r=n("fe53"),i=a(n("0ee3"));function a(t){return t&&t.__esModule?t:{default:t}}function o(t){return c(t)||s(t)||d(t)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function c(t){if(Array.isArray(t))return f(t)}function u(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=d(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){l=!0,a=t},f:function(){try{o||null==n.return||n.return()}finally{if(l)throw a}}}}function d(t,e){if(t){if("string"===typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var b=function(){Promise.all([n.e("common/vendor"),n.e("components/list/NewsList")]).then(function(){return resolve(n("8639"))}.bind(null,n)).catch(n.oe)},h=function(){n.e("components/library/BtnSuspend").then(function(){return resolve(n("8110"))}.bind(null,n)).catch(n.oe)},v=function(){n.e("components/library/Concern").then(function(){return resolve(n("3b6c"))}.bind(null,n)).catch(n.oe)},p=function(){n.e("components/library/NavigationBarList").then(function(){return resolve(n("84e6"))}.bind(null,n)).catch(n.oe)},m=function(){n.e("components/library/HDivider").then(function(){return resolve(n("9bfb"))}.bind(null,n)).catch(n.oe)},w={components:{NewsList:b,BtnSuspend:h,Concern:v,NavigationBarList:p,HDivider:m},data:function(){return{newsData:[],page:1,currentIndex:0,currentClassId:0,childrenIndex:0,HDividerText:"上职校网",isLoad:!1,navigationBarTitleText:"中职资讯",tabs:[{id:0,label:"全部"},{id:4,label:"择校攻略"},{id:9,label:"选专业攻略"},{id:10,label:"地方资讯",children:[{id:10,label:"全部"},{id:41,label:"湖南"},{id:27,label:"长沙"},{id:28,label:"株洲"},{id:29,label:"湘潭"},{id:30,label:"衡阳"},{id:31,label:"邵阳"},{id:32,label:"岳阳"},{id:33,label:"常德"},{id:34,label:"张家界"},{id:35,label:"益阳"},{id:36,label:"郴州"},{id:37,label:"永州"},{id:38,label:"怀化"},{id:39,label:"娄底"},{id:40,label:"湘西"}]},{id:11,label:"职校百科"},{id:12,label:"政策解读"}]}},onShow:function(){this.setBdWebtate()},onLoad:function(t){var e=this;t.classid?(this.tabs.forEach((function(n,r){n.id==t.classid&&(e.currentIndex=r)})),this.clickTab(this.currentIndex)):(0,r.getNewsList)().then((function(t){e.newsData=t.data.rows}))},methods:{clickTab:function(e){var n=this;this.page=1,this.HDividerText="上职校网",this.currentClassId=this.tabs[e].id,this.childrenIndex=0,(0,r.getNewsList)(this.currentClassId).then((function(t){n.newsData=t.data.rows})),t.pageScrollTo({scrollTop:0})},childrenClickTab:function(e){var n=this;this.page=1,this.currentClassId=this.tabs[3].children[e].id,(0,r.getNewsList)(this.currentClassId).then((function(t){n.newsData=t.data.rows})),t.pageScrollTo({scrollTop:0})},setBdWebtate:function(){swan.setPageInfo({title:"湖南中职中专信息资讯_职高技校相关新闻 - 上职校网",keywords:"中职信息资讯,技校相关新闻",description:"本栏目发布湖南地区各个地级市、县中职学校的相关信息资讯和新闻，涵盖了中专、职高职中、技工学校、五年制大专等地域类行业信息。",articleTitle:"湖南中职中专信息资讯_职高技校相关新闻 - 上职校网"});var t,e=u(i.default);try{for(e.s();!(t=e.n()).done;){var n=t.value;if(n.classid==this.currentClassId){swan.setPageInfo({title:n.bname+" - 上职校网",keywords:n.classpagekey,description:n.intro,articleTitle:n.bname+" - 上职校网",image:["https://www.shangzhixiao.com/module/images/cont/logo.png"]});break}}}catch(r){e.e(r)}finally{e.f()}}},onReachBottom:function(){var e=this;if("我可是有底线的哦"!==this.HDividerText){var n=++this.page;this.isLoad=!0,(0,r.getNewsList)(this.currentClassId,n).then((function(n){var r;(e.isLoad=!1,n.data.rows.length>0)?(r=e.newsData).push.apply(r,o(n.data.rows)):(e.HDividerText="我可是有底线的哦",t.showToast({title:"已没有更多了内容了!",icon:"none",duration:2e3}))}))}},onPullDownRefresh:function(){var e=this;(0,r.getNewsList)(this.currentClassId).then((function(n){e.newsData=n.data.rows,t.stopPullDownRefresh()}))}};e.default=w}).call(this,n("5486")["default"])}},[["39e1","common/runtime","common/vendor"]]]);