(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/library/DetailsSuspend"],{"588e":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=e("5729"),o={name:"DetailsSuspend",data:function(){return{}},props:{schoolName:{type:String,default:""},majorName:{type:String,default:""}},created:function(){},methods:{onPhone:function(){n.makePhoneCall({phoneNumber:u.phone,success:function(){console.log("拨打电话成功")},fail:function(){console.log("打电话失败了")}})}}};t.default=o}).call(this,e("5486")["default"])},7024:function(n,t,e){"use strict";e.r(t);var u=e("588e"),o=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,(function(){return u[n]}))}(a);t["default"]=o.a},"7f53":function(n,t,e){"use strict";e.r(t);var u=e("dd75"),o=e("7024");for(var a in o)"default"!==a&&function(n){e.d(t,n,(function(){return o[n]}))}(a);e("b9f1");var c,r=e("f0c5"),f=Object(r["a"])(o["default"],u["b"],u["c"],!1,null,"318bd790",null,!1,u["a"],c);t["default"]=f.exports},b9f1:function(n,t,e){"use strict";var u=e("e27c"),o=e.n(u);o.a},dd75:function(n,t,e){"use strict";var u;e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return u}));var o=function(){var n=this,t=n.$createElement;n._self._c},a=[]},e27c:function(n,t,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/library/DetailsSuspend-create-component',
    {
        'components/library/DetailsSuspend-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('5486')['createComponent'](__webpack_require__("7f53"))
        })
    },
    [['components/library/DetailsSuspend-create-component']]
]);
