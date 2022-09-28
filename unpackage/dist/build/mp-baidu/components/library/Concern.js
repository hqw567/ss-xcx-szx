(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/library/Concern"],{"3b6c":function(t,a,n){"use strict";n.r(a);var e=n("ad7d"),o=n("d4ed");for(var r in o)"default"!==r&&function(t){n.d(a,t,(function(){return o[t]}))}(r);n("8cab");var i,u=n("f0c5"),c=Object(u["a"])(o["default"],e["b"],e["c"],!1,null,"500d3802",null,!1,e["a"],i);a["default"]=c.exports},5781:function(t,a,n){},"8cab":function(t,a,n){"use strict";var e=n("5781"),o=n.n(e);o.a},ad7d:function(t,a,n){"use strict";var e;n.d(a,"b",(function(){return o})),n.d(a,"c",(function(){return r})),n.d(a,"a",(function(){return e}));var o=function(){var t=this,a=t.$createElement;t._self._c},r=[]},d4ed:function(t,a,n){"use strict";n.r(a);var e=n("ea9c"),o=n.n(e);for(var r in e)"default"!==r&&function(t){n.d(a,t,(function(){return e[t]}))}(r);a["default"]=o.a},ea9c:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{isFavor:!0}},props:{bottom:{type:String,default:"10px"},msg:{type:String,default:"关注上职校,掌握学校最新动态"}},created:function(){this.isFavor=getApp().globalData.isFavor},methods:{closeFn:function(){getApp().globalData.isFavor=!0,this.isFavor=!0},favorstatuschange:function(t){t.detail&&!0===t.detail.isFavor&&(getApp().globalData.isFavor=!0,this.isFavor=!0,console.log("关注状态：",t.detail.isFavor))}}};a.default=e}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/library/Concern-create-component',
    {
        'components/library/Concern-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('5486')['createComponent'](__webpack_require__("3b6c"))
        })
    },
    [['components/library/Concern-create-component']]
]);
