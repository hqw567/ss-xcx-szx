(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/list/NewsList"],{"044b":function(t,e,n){},"0b22":function(t,e,n){"use strict";var a=n("044b"),s=n.n(a);s.a},8639:function(t,e,n){"use strict";n.r(e);var a=n("8aa6"),s=n("9858");for(var r in s)"default"!==r&&function(t){n.d(e,t,(function(){return s[t]}))}(r);n("0b22");var i,c=n("f0c5"),l=Object(c["a"])(s["default"],a["b"],a["c"],!1,null,"a31428d4",null,!1,a["a"],i);e["default"]=l.exports},"8aa6":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var s=function(){var t=this,e=t.$createElement,n=(t._self._c,t.newsListFn&&t.newsListFn.length?t.__map(t.newsListFn,(function(e,n){var a=t.__get_orig(e),s=t._f("getDate")(e.newstime);return{$orig:a,f0:s}})):null);t.$mp.data=Object.assign({},{$root:{l0:n}})},r=[]},9858:function(t,e,n){"use strict";n.r(e);var a=n("abe6"),s=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=s.a},abe6:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n("fe53"),n("a6c1");var a=n("2121"),s=r(n("0ee3"));function r(t){return t&&t.__esModule?t:{default:t}}var i=function(){n.e("components/library/ListSkeleton").then(function(){return resolve(n("e023"))}.bind(null,n)).catch(n.oe)},c={name:"NewsList",data:function(){return{}},components:{ListSkeleton:i},props:["newsData","itemStyle"],created:function(){},computed:{newsListFn:function(){return this.newsData.map((function(t){for(var e,n,r=s.default,i=0;i<r.length;i++)if(r[i].classid==t.classid)if(n=r[i].classname,0==r[i].bclassid)e=r[i].classname;else for(var c=0;c<r.length;c++)r[c].classid==r[i].bclassid&&(e=r[c].classname);return t.titlepic&&(t.titlepic=a.websiteUrl+t.titlepic),{title:t.title,titlepic:t.titlepic,newstime:t.newstime,smalltext:t.smalltext,id:t.id,classname:n,classtopname:e}}))}},filters:{getDate:function(t){var e,n=t,a=Date.parse(n.replace(/-/g,"/")),s=(new Date).getTime(),r=s-a,i=6e4,c=60*i,l=24*c,u=7*l,o=30*l,f=365*l;return parseInt(r/f)>=1?e=n:parseInt(r/o)>=1?e=parseInt(r/o)+"月前":parseInt(r/u)>=1?e=parseInt(r/u)+"周前":parseInt(r/l)>=1?e=parseInt(r/l)+"天前":parseInt(r/c)>=1?e=parseInt(r/c)+"小时前":parseInt(r/i)>=1&&(e=parseInt(r/i)+"分钟前",parseInt(r/i)<=5&&(e="刚刚")),e}}};e.default=c}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/list/NewsList-create-component',
    {
        'components/list/NewsList-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('5486')['createComponent'](__webpack_require__("8639"))
        })
    },
    [['components/list/NewsList-create-component']]
]);
