(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-setting-setting"],{"00d2":function(t,e){},"12c0":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={freeNavBar:n("3e12").default,freeDivider:n("8406").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page"},[n("free-nav-bar",{attrs:{title:"我的设置",showBack:!0,showRight:!1}}),n("free-divider"),n("v-uni-view",{staticClass:"py-3 flex align-center justify-center bg-white",attrs:{"hover-class":"bg-light"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.logout.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"font-md text-primary"},[t._v("退出登录")])],1)],1)},r=[]},"30b6":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".free-animated[data-v-5d164cc7]{\n}.z-index[data-v-5d164cc7]{\nz-index:9999\n}",""]),t.exports=e},3295:function(t,e,n){"use strict";n.r(e);var i=n("8b96"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"3e12":function(t,e,n){"use strict";n.r(e);var i=n("e89c"),a=n("3295");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var o,u=n("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"e87c832e",null,!1,i["a"],o);e["default"]=c.exports},5081:function(t,e,n){var i=n("30b6");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("4bc387e9",i,!0,{sourceMap:!1,shadowMode:!1})},"54e5":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.status?n("div",{staticStyle:{"z-index":"9999",overflow:"hidden"}},[t.mask?n("v-uni-view",{staticClass:"position-fixed top-0 left-0 right-0 bottom-0 z-index",style:t.getMaskColor,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hide.apply(void 0,arguments)}}}):t._e(),n("div",{ref:"popup",staticClass:"position-fixed free-animated z-index",class:t.getBodyClass,style:t.getBodyStyle},[t._t("default")],2)],1):t._e()},r=[]},5633:function(t,e,n){"use strict";n.r(e);var i=n("8f8b"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"735ea":function(t,e,n){"use strict";var i=n("5081"),a=n.n(i);a.a},"76ba":function(t,e,n){"use strict";n.r(e);var i=n("00d2"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},8406:function(t,e,n){"use strict";n.r(e);var i=n("840b"),a=n("76ba");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var o,u=n("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"d2edf0b6",null,!1,i["a"],o);e["default"]=c.exports},"840b":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticStyle:{height:"18rpx","background-color":"#EFEDE9"}})},r=[]},8729:function(t,e,n){"use strict";n.r(e);var i=n("bb7d"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"8b96":function(t,e,n){"use strict";n("99af"),n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={components:{},props:{showBack:{type:Boolean,default:!1},backEvent:{type:Boolean,default:!0},title:{type:[String,Boolean],default:!1},fixed:{type:Boolean,default:!0},noreadnum:{type:[Number,String],default:0},bgColor:{type:String,default:"bg-light"},showRight:{type:Boolean,default:!0}},data:function(){return{statusBarHeight:0,navBarHeight:0,menus:[{name:"发起群聊",event:"navigateTo",path:"/pages/mail/mail/mail?type=createGroup",icon:"",iconName:"message-fill"},{name:"添加好友",event:"navigateTo",path:"/pages/common/search/search",icon:"",iconName:"friendadd-fill"},{name:"收付款",event:"",icon:"",iconName:"bankcard"},{name:"帮助与反馈",event:"",icon:"",iconName:"feedback"}]}},mounted:function(){this.navBarHeight=this.statusBarHeight+uni.upx2px(90)},computed:{fixedStyle:function(){return"height:".concat(this.navBarHeight,"px")},getTitle:function(){var t=this.noreadnum>0?"("+this.noreadnum+")":"";return this.title+t},getClass:function(){var t=this.fixed?"fixed-top":"";return"".concat(t," ").concat(this.bgColor)}},methods:{openExtend:function(){this.$refs.extend.show(uni.upx2px(415),uni.upx2px(150))},back:function(){if(this.backEvent)return uni.navigateBack({delta:1});this.$emit("back")},search:function(){uni.navigateTo({url:"/pages/common/search/search"})},clickEvent:function(t){switch(this.$refs.extend.hide(),t.event){case"navigateTo":uni.navigateTo({url:t.path});break;default:uni.showToast({title:"待实现",icon:"none"});break}}}};e.default=i},"8f8b":function(t,e,n){"use strict";n("99af"),n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{maskColor:{type:Boolean,default:!1},mask:{type:Boolean,default:!0},center:{type:Boolean,default:!1},bottom:{type:Boolean,default:!1},bodyWidth:{type:Number,default:0},bodyHeight:{type:Number,default:0},bodyBgColor:{type:String,default:"bg-white"},transformOrigin:{type:String,default:"left top"},tabbarHeight:{type:Number,default:0}},data:function(){return{status:!1,x:-1,y:1,maxX:0,maxY:0}},mounted:function(){try{var t=uni.getSystemInfoSync();this.maxX=t.windowWidth-uni.upx2px(this.bodyWidth),this.maxY=t.windowHeight-uni.upx2px(this.bodyHeight)-uni.upx2px(this.tabbarHeight)}catch(e){}},computed:{getMaskColor:function(){var t=this.maskColor?.5:0;return"background-color: rgba(0,0,0,".concat(t,");")},getBodyClass:function(){if(this.center)return"left-0 right-0 bottom-0 top-0 flex align-center justify-center";var t=this.bottom?"left-0 right-0 bottom-0":"rounded border";return"".concat(this.bodyBgColor," ").concat(t)},getBodyStyle:function(){var t=this.x>-1?"left:".concat(this.x,"px;"):"",e=this.y>-1?"top:".concat(this.y,"px;"):"";return t+e}},methods:{show:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;this.status||(this.x=t>this.maxX?this.maxX:t,this.y=e>this.maxY?this.maxY:e,this.status=!0)},hide:function(){this.$emit("hide"),this.status=!1}}};e.default=i},a1d2:function(t,e,n){"use strict";n.r(e);var i=n("12c0"),a=n("8729");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var o,u=n("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"5cfd2d12",null,!1,i["a"],o);e["default"]=c.exports},a3c3:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{icon:{type:String,default:""},name:{type:String,default:"more"}}};e.default=i},b042:function(t,e,n){"use strict";n.r(e);var i=n("54e5"),a=n("5633");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("735ea");var o,u=n("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"5d164cc7",null,!1,i["a"],o);e["default"]=c.exports},b060:function(t,e,n){"use strict";n.r(e);var i=n("e256"),a=n("d324");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var o,u=n("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"7bc4b030",null,!1,i["a"],o);e["default"]=c.exports},bb7d:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},methods:{logout:function(){this.$store.dispatch("logout")}}};e.default=i},d324:function(t,e,n){"use strict";n.r(e);var i=n("a3c3"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},e256:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={tuiIcon:n("0010").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"flex align-center justify-center",staticStyle:{height:"90rpx",width:"90rpx"},attrs:{"hover-class":"bg-hover-light"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$emit("click")}}},[n("tui-icon",{attrs:{name:t.name,size:20}})],1)},r=[]},e89c:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={freeIconButton:n("b060").default,freePopup:n("b042").default,tuiIcon:n("0010").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{class:t.getClass},[n("v-uni-view",{style:"height:"+t.statusBarHeight+"px"}),n("v-uni-view",{staticClass:"w-100 flex align-center justify-between",staticStyle:{height:"90rpx"}},[n("v-uni-view",{staticClass:"flex align-center"},[t.showBack?n("free-icon-button",{attrs:{icon:"",name:"arrowleft"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}}):t._e(),t._t("default",[t.title?n("v-uni-text",{staticClass:"font-md ml-3"},[t._v(t._s(t.getTitle))]):t._e()])],2),t.showRight?n("v-uni-view",{staticClass:"flex align-center"},[t._t("right",[n("free-icon-button",{attrs:{icon:"",name:"search"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)}}}),n("free-icon-button",{attrs:{icon:"",name:"add"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openExtend.apply(void 0,arguments)}}})])],2):t._e()],1)],1),t.fixed?n("v-uni-view",{style:t.fixedStyle}):t._e(),t.showRight?n("free-popup",{ref:"extend",attrs:{bodyWidth:320,bodyHeight:525,bodyBgColor:"bg-dark",transformOrigin:"right top"}},[n("v-uni-view",{staticClass:"flex flex-column",staticStyle:{width:"320rpx",height:"525rpx"}},t._l(t.menus,(function(e,i){return n("v-uni-view",{key:i,staticClass:"flex-1 flex align-center",attrs:{"hover-class":"bg-hover-dark"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clickEvent(e)}}},[n("tui-icon",{staticClass:"pl-3 pr-2 font-md text-white",attrs:{name:e.iconName,size:24}}),n("v-uni-text",{staticClass:"font-md text-white"},[t._v(t._s(e.name))])],1)})),1)],1):t._e()],1)},r=[]}}]);