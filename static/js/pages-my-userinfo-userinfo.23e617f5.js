(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-userinfo-userinfo"],{"44e9":function(t,e,n){"use strict";n.r(e);var i=n("d271"),r=n("e210");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);var c,o=n("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"4ec237a5",null,!1,i["a"],c);e["default"]=s.exports},"5e0e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{title:{type:String,default:"提示"}},data:function(){return{callback:!1}},methods:{show:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.callback=t,this.$refs.confirm.show()},cancel:function(){this.$refs.confirm.hide()},confirm:function(){var t=this;"function"===typeof this.callback&&this.callback((function(){t.cancel()}))}}};e.default=i},"6b8a":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={freePopup:n("b042").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("free-popup",{ref:"confirm",attrs:{center:!0,maskColor:!0,transformOrigin:"center center"}},[n("v-uni-view",{staticClass:"bg-white rounded",staticStyle:{width:"600rpx"}},[n("v-uni-view",{staticClass:"p-4 flex flex-column"},[n("v-uni-text",{staticClass:"font-md font-weight-bold mb-3"},[t._v(t._s(t.title))]),t._t("default")],2),n("v-uni-view",{staticClass:"border-top flex align-stretch",staticStyle:{height:"100rpx"}},[n("v-uni-view",{staticClass:"flex-1 border-right flex align-center justify-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"font-md text-muted"},[t._v("取消")])],1),n("v-uni-view",{staticClass:"flex-1 flex align-center justify-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"font-md main-text-color"},[t._v("确定")])],1)],1)],1)],1)},a=[]},"846a":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={freeNavBar:n("3e12").default,freeListItem:n("7474").default,freeAvater:n("44e9").default,tuiIcon:n("0010").default,freeConfirm:n("eb50").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page"},[n("free-nav-bar",{attrs:{title:"个人资料",showBack:!0,showRight:!1}}),n("free-list-item",{attrs:{title:"头像",showRight:!0,showLeftIcon:!1},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.update("avatar")}}},[n("free-avater",{attrs:{slot:"right",src:t.user.avatar},slot:"right"})],1),n("free-list-item",{attrs:{title:"手机号",showRight:!0,showLeftIcon:!1}},[n("v-uni-text",{staticClass:"font text-muted",attrs:{slot:"right"},slot:"right"},[t._v(t._s(t.user.phone))])],1),n("free-list-item",{attrs:{title:"昵称",showRight:!0,showLeftIcon:!1},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.update("nickname")}}},[n("v-uni-text",{staticClass:"font text-muted",attrs:{slot:"right"},slot:"right"},[t._v(t._s(t.user.nickname))])],1),n("free-list-item",{attrs:{title:"账号",showRight:!0,showLeftIcon:!1},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.update("username")}}},[n("v-uni-text",{staticClass:"font text-muted",attrs:{slot:"right"},slot:"right"},[t._v(t._s(t.user.username))])],1),n("free-list-item",{attrs:{title:"余额",showRight:!0,showLeftIcon:!1},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigate("my/balance/balance")}}},[n("v-uni-text",{staticClass:"font text-muted",attrs:{slot:"right"},slot:"right"},[t._v(t._s(t.user.balance))])],1),n("free-list-item",{attrs:{title:"二维码名片",showRight:!0,showLeftIcon:!1},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openCode.apply(void 0,arguments)}}},[n("tui-icon",{attrs:{slot:"right",name:"qrcode",size:20},slot:"right"})],1),n("free-confirm",{ref:"confirm",attrs:{title:t.confirmTitle}},[n("v-uni-input",{staticClass:"border-bottom font-md",attrs:{type:"text",placeholder:t.placeholder},model:{value:t.confirmText,callback:function(e){t.confirmText=e},expression:"confirmText"}})],1)],1)},a=[]},"9cc9":function(t,e,n){"use strict";n.r(e);var i=n("5e0e"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},bf62:function(t,e,n){"use strict";(function(t){var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var r=i(n("1da1")),a=i(n("5530")),c=n("e2b3"),o=n("d4f8"),s=n("26cb"),u={data:function(){return{confirmText:"",confirmType:""}},computed:(0,a.default)((0,a.default)({},(0,s.mapState)({user:function(t){return t.user.user}})),{},{confirmTitle:function(){return"username"==this.confirmType?"修改账号":"nickname"==this.confirmType?"修改昵称":"balance"==this.confirmType?"余额充值":"coin"==this.confirmType?"金币充值":void 0},placeholder:function(){return"username"==this.confirmType?"输入账号":"nickname"==this.confirmType?"输入昵称":"balance"==this.confirmType?"余额充值":"coin"==this.confirmType?"金币充值":void 0}}),methods:{update:function(e){var n=this,i=this;switch(this.confirmType=e,e){case"avatar":t.log("key:",e),uni.chooseImage({count:1,sizeType:["compressed"],success:function(e){return(0,r.default)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.log("chgAvatar res:",e),e.tempFiles.length&&(r=e.tempFiles[0],uni.showLoading({mask:!0}),t.log("pre uploadToOss"),(0,o.uploadToOss)({tempFile:r}).then((function(e){uni.hideLoading(),(0,c.edit)({avatar:e}).then((function(n){t.log("_res_:",n),i.$store.commit("updateUserKV",{k:"avatar",v:e}),uni.hideLoading()})).catch((function(e){t.log("_e_:",e),uni.hideLoading()}))})).catch((function(t){uni.showToast({title:"上传失败，请稍后再试",icon:"none"}),uni.hideLoading()})));case 2:case"end":return n.stop()}}),n)})))()}});break;case"nickname":this.$refs.confirm.show((function(t){if(!n.confirmText)return uni.showToast({title:"不能为空",icon:"none"});(0,c.edit)({nickname:n.confirmText}).then((function(t){i.$store.commit("updateUserKV",{k:"nickname",v:n.confirmText})})),t()}));break;case"username":this.$refs.confirm.show((function(t){if(!n.confirmText)return uni.showToast({title:"不能为空",icon:"none"});(0,c.edit)({username:n.confirmText}).then((function(t){n.$store.commit("updateUserKV",{k:"username",v:n.confirmText})})),t()}));break;default:this.confirmType=e,this.confirmText=this.user[e],this.$refs.confirm.show((function(t){if(""===n.confirmText)return uni.showToast({title:"不能为空",icon:"none"});t()}));break}},openCode:function(){uni.navigateTo({url:"../code/code?params="+encodeURIComponent(JSON.stringify({id:this.user.id,name:this.user.nickname||this.user.username,avatar:this.user.avatar}))+"&type=user"})}}};e.default=u}).call(this,n("5a52")["default"])},c0fa:function(t,e,n){"use strict";n.r(e);var i=n("bf62"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},c30f:function(t,e,n){"use strict";n.r(e);var i=n("846a"),r=n("c0fa");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);var c,o=n("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"945a8cec",null,!1,i["a"],c);e["default"]=s.exports},d271:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-image",{class:t.type,style:t.getStyle,attrs:{src:t.src?t.src:"/static/images/userpic.png",mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickEvent.apply(void 0,arguments)}}})},a=[]},dee2:function(t,e,n){"use strict";n("99af"),n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{size:{type:[String,Number],default:90},src:{type:String,default:""},type:{type:String,default:"rounded"},clickType:{type:String,default:"none"}},computed:{getStyle:function(){return"width: ".concat(this.size,"rpx;height: ").concat(this.size,"rpx;")}},methods:{clickEvent:function(){switch(this.clickType){case"navigate":uni.navigateTo({url:"/pages/mail/user-base/user-base"});break;default:this.$emit("click");break}}}};e.default=i},e210:function(t,e,n){"use strict";n.r(e);var i=n("dee2"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},eb50:function(t,e,n){"use strict";n.r(e);var i=n("6b8a"),r=n("9cc9");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);var c,o=n("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"0451b848",null,!1,i["a"],c);e["default"]=s.exports}}]);