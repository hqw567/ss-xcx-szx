(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/list/MajorList"],{311:function(t,n,e){"use strict";e.r(n);var r=e(312),u=e(314);for(var i in u)"default"!==i&&function(t){e.d(n,t,(function(){return u[t]}))}(i);e(316);var o,c=e(11),a=Object(c["default"])(u["default"],r["render"],r["staticRenderFns"],!1,null,"843c2ebe",null,!1,r["components"],o);a.options.__file="components/list/MajorList.vue",n["default"]=a.exports},312:function(t,n,e){"use strict";e.r(n);var r=e(313);e.d(n,"render",(function(){return r["render"]})),e.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),e.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),e.d(n,"components",(function(){return r["components"]}))},313:function(t,n,e){"use strict";var r;e.r(n),e.d(n,"render",(function(){return u})),e.d(n,"staticRenderFns",(function(){return o})),e.d(n,"recyclableRender",(function(){return i})),e.d(n,"components",(function(){return r}));var u=function(){var t=this,n=t.$createElement;t._self._c},i=!1,o=[];u._withStripped=!0},314:function(t,n,e){"use strict";e.r(n);var r=e(315),u=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);n["default"]=u.a},315:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=e(152),u=function(){e.e("components/library/ListSkeleton").then(function(){return resolve(e(403))}.bind(null,e)).catch(e.oe)},i={props:{majorData:{type:Array,default:function(){return[]}},itemStyle:{type:Object,default:function(){}}},components:{ListSkeleton:u},computed:{majorDataFn:function(){return this.majorData.map((function(t){return{title:t.title,titlepic:r.websiteUrl+t.titlepic,smalltext:t.smalltext.substring(0,33)+"...",id:t.id}}))}}};n.default=i},316:function(t,n,e){"use strict";e.r(n);var r=e(317),u=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);n["default"]=u.a},317:function(t,n,e){}}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/list/MajorList.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/list/MajorList-create-component',
    {
        'components/list/MajorList-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(311))
        })
    },
    [['components/list/MajorList-create-component']]
]);