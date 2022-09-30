(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/list/MajorList"],{"01f3":function(t,n,e){"use strict";e.r(n);var r=e("f710"),u=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);n["default"]=u.a},"7f65":function(t,n,e){"use strict";e.r(n);var r=e("9be8"),u=e("01f3");for(var a in u)"default"!==a&&function(t){e.d(n,t,(function(){return u[t]}))}(a);e("a99b");var i,o=e("f0c5"),c=Object(o["a"])(u["default"],r["b"],r["c"],!1,null,"b7e6f28c",null,!1,r["a"],i);n["default"]=c.exports},"9be8":function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return r}));var u=function(){var t=this,n=t.$createElement;t._self._c},a=[]},a99b:function(t,n,e){"use strict";var r=e("d424"),u=e.n(r);u.a},d424:function(t,n,e){},f710:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=e("5729"),u=function(){e.e("components/library/ListSkeleton").then(function(){return resolve(e("ce58"))}.bind(null,e)).catch(e.oe)},a={props:{majorData:{type:Array,default:function(){return[]}},itemStyle:{type:Object,default:function(){}}},components:{ListSkeleton:u},computed:{majorDataFn:function(){return this.majorData.map((function(t){return{title:t.title,titlepic:r.websiteUrl+t.titlepic,smalltext:t.smalltext.substring(0,33)+"...",id:t.id}}))}}};n.default=a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/list/MajorList-create-component',
    {
        'components/list/MajorList-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('5486')['createComponent'](__webpack_require__("7f65"))
        })
    },
    [['components/list/MajorList-create-component']]
]);
