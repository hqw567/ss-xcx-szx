(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/search/search"],{4450:function(t,e,n){"use strict";n.r(e);var a=n("a108"),o=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=o.a},"559b":function(t,e,n){"use strict";n.r(e);var a=n("7995"),o=n("4450");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("5690");var i,c=n("f0c5"),s=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,"51c601d8",null,!1,a["a"],i);e["default"]=s.exports},5690:function(t,e,n){"use strict";var a=n("9c78"),o=n.n(a);o.a},7995:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var o=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.focusState=!1},t.e1=function(e){t.focusState=!0},t.e2=function(e){t.value=""})},r=[]},"9c78":function(t,e,n){},a108:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("bd40");function o(t){return s(t)||c(t)||i(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t,e){if(t){if("string"===typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}function c(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function s(t){if(Array.isArray(t))return u(t)}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}var l=function(){n.e("pages/search/components/HotSearch").then(function(){return resolve(n("2edd"))}.bind(null,n)).catch(n.oe)},h=function(){Promise.all([n.e("common/vendor"),n.e("components/list/NewsList")]).then(function(){return resolve(n("2130"))}.bind(null,n)).catch(n.oe)},f=function(){n.e("components/list/MajorList").then(function(){return resolve(n("7f65"))}.bind(null,n)).catch(n.oe)},d=function(){n.e("components/list/SchoolList").then(function(){return resolve(n("c991"))}.bind(null,n)).catch(n.oe)},b=function(){n.e("components/library/HDivider").then(function(){return resolve(n("49cb"))}.bind(null,n)).catch(n.oe)},m={data:function(){return{value:"",newsData:[],majorData:[],schoolData:[],page:1,isEmpty:!1,tbname:"news",keyboard:"",isSearch:!1,noContent:"",focusState:!0,HDividerText:"上职校网",isLoad:!1}},components:{NewsList:h,MajorList:f,SchoolList:d,HotSearch:l,HDivider:b},onLoad:function(t){t.tbname&&(this.tbname=t.tbname),t.keyboard&&(this.value=t.keyboard,this.getSearchFn())},methods:{toSearchFn:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"news";this.value=t,this.tbnameWwitch(e)},toChangeType:function(t){this.tbnameWwitch(t)},tbnameWwitch:function(t){this.tbname=t,this.isEmpty=!1,this.newsData=[],this.majorData=[],this.schoolData=[],this.page=1,this.HDividerText="上职校网",this.getSearchFn()},getSearchFn:function(){var e=this;if(t.pageScrollTo({scrollTop:0}),!this.value.trim())return this.isSearch=!1,void t.showToast({title:"请输入搜索内容",icon:"none",duration:2e3});(0,a.getSearch)(this.value,this.page,10,this.tbname).then((function(n){if(n.data.rows&&0===n.data.rows.length)return e.isEmpty=!0,e.isSearch=!1,void(e.noContent=e.value);e.isSearch=!0;var a=[];try{var r=t.getStorageSync("SEARCH_HISTORY");r&&(a=r)}catch(i){console.warn("searchHistory:",i)}a.push(e.value),t.setStorage({key:"SEARCH_HISTORY",data:o(new Set(a)),success:function(){console.log("success")}}),"news"===e.tbname?e.newsData=n.data.rows:"pz"===e.tbname?e.majorData=n.data.rows:e.schoolData=n.data.rows}))}},computed:{TipWordFn:function(){var t=this.tbname;return"news"===t?"资讯":"pt"===t?"学校":"专业"},searchTip:function(){var t=this.tbname,e=[];return"news"===t&&(e=[{tbname:"pt",label:"学校"},{tbname:"pz",label:"专业"}]),e="pt"===t?[{tbname:"news",label:"资讯"},{tbname:"pz",label:"专业"}]:[{tbname:"news",label:"资讯"},{tbname:"pt",label:"学校"}],'暂时没有关于<text style="color: crimson;">  '.concat(this.noContent,'  </text>\n\t\t\t的内容，请尝试搜索<text style="color: #0092ff;" @click="toChangeType(').concat(e[0].tbname,')">').concat(e[0].label,'</text>、<text style="color: #0092ff;" @click="toChangeType(').concat(e[1].tbname,')">').concat(e[1].label,"</text>试试，或者换个关键词搜索吧！")}},onReachBottom:function(){var e=this;if(this.isSearch&&"我可是有底线的哦"!==this.HDividerText){this.isLoad=!0;++this.page;(0,a.getSearch)(this.value,this.page,10,this.tbname).then((function(n){var a;if(e.isLoad=!1,"news"===e.tbname)n.data.rows.length>0?(a=e.newsData).push.apply(a,o(n.data.rows)):(e.HDividerText="我可是有底线的哦",t.showToast({title:"已没有更多了内容了!",icon:"none",duration:2e3}));else if("pz"===e.tbname){var r;if(e.majorData=n.data.rows,n.data.rows.length>0)(r=e.majorData).push.apply(r,o(n.data.rows));else e.HDividerText="我可是有底线的哦",t.showToast({title:"已没有更多了内容了!",icon:"none",duration:2e3})}else{var i;if(e.HDividerText="我可是有底线的哦",n.data.rows.length>0)(i=e.schoolData).push.apply(i,o(n.data.rows));else t.showToast({title:"已没有更多了内容了!",icon:"none",duration:2e3})}}))}}};e.default=m}).call(this,n("5486")["default"])},b39d:function(t,e,n){"use strict";(function(t,e){n("900c");o(n("66fd"));var a=o(n("559b"));function o(t){return t&&t.__esModule?t:{default:t}}t.__webpack_require_UNI_MP_PLUGIN__=n,e(a.default)}).call(this,n("5486")["default"],n("5486")["createPage"])}},[["b39d","common/runtime","common/vendor"]]]);