(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/library/Concern"],{"48c4":function(t,n,a){"use strict";var e=a("fc95"),o=a.n(e);o.a},"4ce0":function(t,n,a){"use strict";a.r(n);var e=a("b986"),o=a.n(e);for(var r in e)"default"!==r&&function(t){a.d(n,t,(function(){return e[t]}))}(r);n["default"]=o.a},"66c8":function(t,n,a){"use strict";var e;a.d(n,"b",(function(){return o})),a.d(n,"c",(function(){return r})),a.d(n,"a",(function(){return e}));var o=function(){var t=this,n=t.$createElement;t._self._c},r=[]},"869b":function(t,n,a){"use strict";a.r(n);var e=a("66c8"),o=a("4ce0");for(var r in o)"default"!==r&&function(t){a.d(n,t,(function(){return o[t]}))}(r);a("48c4");var c,i=a("f0c5"),u=Object(i["a"])(o["default"],e["b"],e["c"],!1,null,"ec368d40",null,!1,e["a"],c);n["default"]=u.exports},b986:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{isFavor:!0}},props:{bottom:{type:String,default:"10px"},msg:{type:String,default:"关注上职校,掌握学校最新动态"}},created:function(){this.isFavor=getApp().globalData.isFavor},methods:{closeFn:function(){getApp().globalData.isFavor=!0,this.isFavor=!0},favorstatuschange:function(t){t.detail&&!0===t.detail.isFavor&&(getApp().globalData.isFavor=!0,this.isFavor=!0,console.log("关注状态：",t.detail.isFavor))}}};n.default=e},fc95:function(t,n,a){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/library/Concern-create-component',
    {
        'components/library/Concern-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('5486')['createComponent'](__webpack_require__("869b"))
        })
    },
    [['components/library/Concern-create-component']]
]);
