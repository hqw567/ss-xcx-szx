(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/list/MajorList"],{"09e6":function(t,n,e){"use strict";e.r(n);var r=e("70d4"),a=e("975a");for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);e("b13f");var i,o=e("f0c5"),c=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"1bb66ae6",null,!1,r["a"],i);n["default"]=c.exports},"56e3":function(t,n,e){},"70d4":function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return r}));var a=function(){var t=this,n=t.$createElement;t._self._c},u=[]},"975a":function(t,n,e){"use strict";e.r(n);var r=e("f5a3"),a=e.n(r);for(var u in r)"default"!==u&&function(t){e.d(n,t,(function(){return r[t]}))}(u);n["default"]=a.a},b13f:function(t,n,e){"use strict";var r=e("56e3"),a=e.n(r);a.a},f5a3:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=e("2121"),a=function(){e.e("components/library/ListSkeleton").then(function(){return resolve(e("e023"))}.bind(null,e)).catch(e.oe)},u={props:{majorData:{type:Array,default:function(){return[]}},itemStyle:{type:Object,default:function(){}}},components:{ListSkeleton:a},computed:{majorDataFn:function(){return this.majorData.map((function(t){return{title:t.title,titlepic:r.websiteUrl+t.titlepic,smalltext:t.smalltext.substring(0,33)+"...",id:t.id}}))}}};n.default=u}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/list/MajorList-create-component',
    {
        'components/list/MajorList-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('5486')['createComponent'](__webpack_require__("09e6"))
        })
    },
    [['components/list/MajorList-create-component']]
]);
