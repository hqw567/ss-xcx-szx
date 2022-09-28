(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/library/DetailsSuspend"],{"00db":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=e("af24"),u={name:"DetailsSuspend",data:function(){return{}},props:{schoolName:{type:String,default:""},majorName:{type:String,default:""}},created:function(){},methods:{onPhone:function(){n.makePhoneCall({phoneNumber:c.phone,success:function(){console.log("拨打电话成功")},fail:function(){console.log("打电话失败了")}})}}};t.default=u}).call(this,e("543d")["default"])},"18d7":function(n,t,e){},"89cc":function(n,t,e){"use strict";var c;e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return c}));var u=function(){var n=this,t=n.$createElement;n._self._c},o=[]},c3cf:function(n,t,e){"use strict";e.r(t);var c=e("00db"),u=e.n(c);for(var o in c)"default"!==o&&function(n){e.d(t,n,(function(){return c[n]}))}(o);t["default"]=u.a},d1fd:function(n,t,e){"use strict";var c=e("18d7"),u=e.n(c);u.a},f53b:function(n,t,e){"use strict";e.r(t);var c=e("89cc"),u=e("c3cf");for(var o in u)"default"!==o&&function(n){e.d(t,n,(function(){return u[n]}))}(o);e("d1fd");var a,r=e("f0c5"),f=Object(r["a"])(u["default"],c["b"],c["c"],!1,null,"14223b70",null,!1,c["a"],a);t["default"]=f.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/library/DetailsSuspend-create-component',
    {
        'components/library/DetailsSuspend-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("f53b"))
        })
    },
    [['components/library/DetailsSuspend-create-component']]
]);
