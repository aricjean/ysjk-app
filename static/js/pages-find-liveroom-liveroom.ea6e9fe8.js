(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-find-liveroom-liveroom"],{"00d2":function(t,e){},"0885":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-scroll-view",{staticStyle:{width:"520rpx",height:"500rpx"},attrs:{"scroll-y":"true"}},t._l(t.gifts,(function(e,n){return i("cell",{key:n,ref:"item"+n,refInFor:!0,staticClass:"flex align-center px-3 pt-3",attrs:{"insert-animation":"default","delete-animation":"default"}},[i("v-uni-view",{staticClass:"flex rounded-circle",staticStyle:{width:"325rpx","background-image":"linear-gradient(to right, #BCABB1 , #65AAF0)"}},[i("v-uni-view",{staticClass:"p"},[i("v-uni-image",{staticClass:"rounded-circle",staticStyle:{width:"70rpx",height:"70rpx"},attrs:{src:e.avatar||t.defaultAvatar}})],1),i("v-uni-view",{staticClass:"flex-1 flex flex-column justify-center"},[i("v-uni-text",{staticClass:"text-white font"},[t._v(t._s(e.username))]),i("v-uni-text",{staticClass:"text-white font-sm"},[t._v("送"+t._s(e.gift_name))])],1),i("v-uni-view",{staticClass:"p"},[i("v-uni-image",{staticClass:"rounded-circle",staticStyle:{width:"70rpx",height:"70rpx"},attrs:{src:e.gift_image}})],1)],1),i("v-uni-text",{staticClass:"text-warning font-lg ml-1"},[t._v("X "+t._s(e.num))])],1)})),1)},s=[]},2968:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".page[data-v-55d63865]{flex:1}.btn[data-v-55d63865]{height:%?80?%;border-radius:%?100?%;background-color:hsla(0,0%,100%,.12);align-items:center;justify-content:center}.btn-icon[data-v-55d63865]{width:%?80?%;margin-right:%?20?%}",""]),t.exports=e},"300d":function(t,e,i){"use strict";i.r(e);var n=i("5d60"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},"30b61":function(t,e,i){"use strict";i.r(e);var n=i("0885"),a=i("a84c");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);var o,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"b3e67d16",null,!1,n["a"],o);e["default"]=c.exports},4349:function(t,e,i){"use strict";i.r(e);var n=i("9d5c"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},"59ac":function(t,e,i){"use strict";i.r(e);var n=i("8873"),a=i("4349");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);var o,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"1f758916",null,!1,n["a"],o);e["default"]=c.exports},"5d60":function(t,e,i){"use strict";(function(t){var n=i("4ea4");i("caad"),i("c975"),i("a434"),i("a9e3"),i("25eb"),i("2532"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("5530")),s=i("a4b7"),o=i("d4f8"),r=i("26cb"),c={data:function(){return{id:0,statusBarHeight:0,content:"",gifts:[],giftActiveId:0,mode:"SD",enableCamera:!0,position:"front",beauty:5,whiteness:5,windowHeight:0,context:null,modeList:[{type:"SD",desc:"标清"},{type:"HD",desc:"高清"},{type:"FHD",desc:"超清"}],popupType:"mode",btns:[{name:"翻转",icon:"",iconName:"exchange",event:"switchCamera"},{name:"画质",icon:"",iconName:"computer",event:"openPopup",params:"mode"},{name:"美颜",icon:"",iconName:"satisfied",event:"openPopup",params:"beauty"},{name:"美白",icon:"",iconName:"people",event:"openPopup",params:"whiteness"},{name:"播图",icon:"",iconName:"picture",event:"openPopup",params:"anchor_imgs"},{name:"更多",icon:"",iconName:"more-fill",event:"openPopup",params:"more"}],detail:null,anchorImgsData:{index:0,list:[]},list:[],isStart:!1,isPause:!1,isget:!1}},onLoad:function(e){var i=this,n=uni.getSystemInfoSync();if(i.statusBarHeight=n.statusBarHeight,i.windowHeight=n.windowHeight,e.options){var a=JSON.parse(e.options);i.mode=a.mode,i.position=a.position,i.beauty=a.beauty,i.whiteness=a.whiteness}t.log("e.id:",e.id);var s=0;try{s=Number.parseInt(e.id)}catch(e){t.log("_id e:",e)}if(s<1)return uni.showToast({title:"直播间参数错误",icon:"none"}),uni.navigateBack({delta:1});i.id=s},onReady:function(){var e=this;if(e.context=uni.createLivePusherContext("livePusher",e),t.log("self.context:",e.context),setTimeout((function(){e.startPreview()}),100),!e.id)return uni.navigateBack({delta:1});(0,s.findOneById)({id:e.id}).then((function(i){e.detail=i.data.data,t.log("self.detail:",e.detail),uni.$on("live",e.handleLiveEvent),e.anchorImgsData.list=e.detail.anchor_imgs,setTimeout((function(){e.start()}),100)}))},destroyed:function(){this.joinOrLeaveLive("leave"),uni.$off("live",this.handleLiveEvent)},onUnload:function(){this.context&&this.context.stop(),this.context=null},computed:(0,a.default)((0,a.default)({},(0,r.mapState)({user:function(t){return t.user.user},message:function(t){return t.user.message}})),{},{popupTitle:function(){var t={mode:"画质",beauty:"美颜",whiteness:"美白",more:"更多"};return t[this.popupType]},src:function(){return this.detail&&0!==this.detail.id&&this.detail.address&&this.detail.address.tl?this.detail.address.tl:""}}),onBackPress:function(){if(!this.isget)return this.back(),!0},onShow:function(){this.checkOnline()},methods:{checkOnline:function(){try{this.message.checkOnline()}catch(e){t.log(e)}},pauseOrPlay:function(){var t=this;if(!this.isPause)return uni.showModal({content:"是否要暂停推流？",success:function(e){e.cancel||t.pause()}});this.resume()},back:function(){var t=this;uni.showModal({content:"是否要退出直播间？",success:function(e){e.cancel||(t.stop(),t.isget=!0,uni.navigateBack({delta:1}),uni.showToast({title:"退出直播间成功",icon:"none"}))}})},start:function(){var e=this;t.log("开始推流 start"),e.context.start({success:function(){e.isStart=!0,t.log("直播开始推流 success "),(0,s.edit)({id:e.detail.id,status:1}).then((function(t){e.joinOrLeaveLive("join")})).catch((function(e){t.log(e)}))},fail:function(i){t.log("直播开始推流 fail e:",i,"self.src:",e.src),uni.showToast({title:"直播推流 失败",icon:"none"})}})},pause:function(){var t=this;this.context.pause({success:function(){t.isPause=!0,(0,s.edit)({id:t.detail.id,status:2})}})},resume:function(){var t=this;this.context.resume({success:function(){t.isPause=!1,(0,s.edit)({id:t.detail.id,status:1})}})},stop:function(){var t=this;this.context.stop({success:function(){t.isStart=!1,(0,s.edit)({id:t.detail.id,status:3})}})},handleLiveEvent:function(t){var e=t.data;if(t.live_id===this.id)switch(t.type){case"join":this.$refs.danmu.join({id:t.from_id,name:t.from_name,avatar:t.from_avatar}),this.detail.current_audience_ids.includes(t.from_id)||this.detail.current_audience_ids.push(t.from_id),this.detail.history_audience_ids.includes(t.from_id)||this.detail.history_audience_ids.push(t.from_id);break;case"leave":this.$refs.danmu.leave({id:t.from_id,name:t.from_name,avatar:t.from_avatar});var i=this.detail.current_audience_ids.indexOf(t.from_id);i>=0&&this.detail.current_audience_ids.splice(i,1);break;case"comment":this.$refs.danmu.send({id:t.from_id,name:t.from_name,content:t.content});break;case"gift":e.gift_image="$C.imageUrl"+e.gift_image,this.detail.coin+=e.gift_coin*e.num,this.$refs.gift.send(e);break;default:break}},joinOrLeaveLive:function(e){t.log("joinOrLeaveLive type:",e)},handleBottomEvent:function(t){"anchor_imgs"===t.params?this.openAnchorImgs():this[t.event](t.params)},chooseMode:function(t){this.mode=t.type,uni.showToast({title:"画质切换为"+t.desc,icon:"none"}),this.$refs.popup.close()},openPopup:function(t){this.popupType=t,this.$refs.popup.open()},closePopup:function(){this.$refs.popup.close()},switchCamera:function(){var t=this;this.context.switchCamera({success:function(e){t.position="back"===t.position?"front":"back"}})},startPreview:function(){},statechange:function(e){t.log("statechange:",e)},netstatus:function(e){t.log("netstatus:",e)},error:function(e){t.log("error:",e)},handleSliderChange:function(t){this[this.popupType]=t.detail.value},openAnchorImgs:function(){this.$refs.anchorImgs.open()},closeAnchorImgs:function(){this.$refs.anchorImgs.close()},anchorImgsIndexChg:function(e){try{this.anchorImgsData.index=e.detail.current}catch(i){t.log("anchorImgsIndexChg _e:",i)}},anchorImg:function(){var e=this,i=this;uni.chooseImage({count:1,success:function(n){if(n.tempFiles.length){var a=n.tempFiles[0];t.log("pre uploadToOss"),i.context.resume({success:function(){t.log("主播发送图片 resume success")}}),(0,o.uploadToOss)({tempFile:a}).then((function(i){var n=i;t.log("_url:",n),e.sendAnchorImg(n)})).catch((function(e){t.log(e)}))}}})},sendAnchorImg:function(e){var i=this;uni.showLoading({mask:!0}),(0,s.comment)({id:this.id,type:"anchor_img",content:e}).then((function(n){uni.hideLoading(),i.anchorImgsData.list.includes(e)||i.anchorImgsData.list.push(e);var a=i.anchorImgsData.list.indexOf(e);i.anchorImgsData.index=a,i.$refs.anchorImgs.open(),uni.showToast({title:"发送成功",icon:"none",duration:2e3,complete:function(){setTimeout((function(){uni.hideToast()}),1e3)}}),t.log(n)})).catch((function(t){uni.hideLoading()}))}}};e.default=c}).call(this,i("5a52")["default"])},"68c2":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var n={fGift:i("30b61").default,fDanmu:i("59ac").default,tuiIcon:i("0010").default,uniPopup:i("a196").default,freeDivider:i("8406").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page flex flex-1 flex-column"},[t.detail?[i("v-uni-view",{staticClass:"pt-2",staticStyle:{position:"fixed",left:"0",right:"0"},style:"top:"+t.statusBarHeight+"px"},[i("v-uni-view",{staticClass:"mt-2 px-2 flex flex-row justify-between align-center",staticStyle:{height:"80rpx"}},[i("v-uni-view",{staticClass:"flex flex-row justify-between rounded-circle pr-2",staticStyle:{"background-color":"rgba(0,0,0,0.1)"}},[i("v-uni-view",{staticClass:"p"},[i("v-uni-image",{staticClass:"rounded-circle",staticStyle:{width:"70rpx",height:"70rpx"},attrs:{src:t.user.avatar||"/static/tabbar/min.png"}})],1),i("v-uni-view",{staticClass:"flex-1 flex flex-column justify-center"},[i("v-uni-text",{staticClass:"text-white font"},[t._v(t._s(t.user.nickname||t.user.username))])],1),t._e()],2),(t.detail.status,t._e())],2),i("v-uni-view",{staticClass:"flex flex-column justify-start align-start",staticStyle:{width:"325rpx"}},[i("v-uni-text",{staticClass:"text-white rounded-circle px-2 ml-2 mt-1",staticStyle:{"background-color":"rgba(0,0,0,0.1)"}},[t._v("金币: "+t._s(t.detail.coin))]),i("v-uni-text",{staticClass:"text-white rounded-circle px-2 ml-2 mt-1",staticStyle:{"background-color":"rgba(0,0,0,0.1)"}},[t._v(t._s(t.detail.history_audience_ids.length)+"人看过")]),i("v-uni-text",{staticClass:"text-white rounded-circle px-2 ml-2 mt-1",staticStyle:{"background-color":"rgba(0,0,0,0.1)"}},[t._v(t._s(t.detail.current_audience_ids.length)+"人正在观看")])],1),i("f-gift",{ref:"gift"})],1),i("v-uni-view",{staticStyle:{position:"fixed",bottom:"120rpx",left:"0",right:"0"}},[i("f-danmu",{ref:"danmu"})],1),i("v-uni-view",{staticClass:"flex flex-column align-center justify-between",staticStyle:{position:"fixed",top:"180rpx",right:"0",width:"120rpx"}},t._l(t.btns,(function(e,n){return i("v-uni-view",{key:n,staticClass:"flex-1 flex flex-column align-center justify-center",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handleBottomEvent(e)}}},[i("tui-icon",{staticClass:"mb-1",attrs:{name:e.iconName,size:24}}),i("v-uni-text",{staticClass:"text-center text-white font"},[t._v(t._s(e.name))])],1)})),1),i("uni-popup",{ref:"popup",attrs:{type:"bottom"}},[i("v-uni-view",{staticClass:"bg-white"},[i("v-uni-view",{staticClass:"flex flex-row align-center justify-center border-bottom",staticStyle:{height:"90rpx"}},[i("v-uni-text",{staticClass:"text-center font-md"},[t._v(t._s(t.popupTitle))])],1),i("free-divider"),"mode"===t.popupType?i("v-uni-view",t._l(t.modeList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"flex flex-row align-center justify-center py-2",class:t.mode===e.type?"bg-main":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.chooseMode(e)}}},[i("v-uni-text",{staticClass:"font-md",class:t.mode===e.type?"text-light-black":""},[t._v(t._s(e.desc))])],1)})),1):"beauty"===t.popupType?i("v-uni-view",[i("v-uni-slider",{attrs:{min:0,max:9,step:1,value:t.beauty,"block-size":18,"show-value":!0},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSliderChange.apply(void 0,arguments)}}})],1):"whiteness"===t.popupType?i("v-uni-view",[i("v-uni-slider",{attrs:{min:0,max:9,step:1,value:t.whiteness,"block-size":18,"show-value":!0},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSliderChange.apply(void 0,arguments)}}})],1):i("v-uni-view",{staticClass:"flex flex-row flex-wrap"},[i("v-uni-view",{staticClass:"flex flex-column align-center justify-center",staticStyle:{width:"150rpx",height:"150rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pauseOrPlay.apply(void 0,arguments)}}},[i("tui-icon",{staticClass:"mb-1",attrs:{name:"offline"}}),i("v-uni-text",{staticClass:"text-center font"},[t._v(t._s(t.isPause?"继续":"暂停"))])],1),i("v-uni-view",{staticClass:"flex flex-column align-center justify-center",staticStyle:{width:"150rpx",height:"150rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[i("tui-icon",{staticClass:"mb-1",attrs:{name:"toleft"}}),i("v-uni-text",{staticClass:"text-center font"},[t._v("退出")])],1)],1),i("free-divider"),i("v-uni-view",{staticClass:"flex text-center justify-center",staticStyle:{height:"90rpx"},attrs:{"hover-class":"bg-light"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closePopup.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"font-md"},[t._v("取消")])],1)],1)],1),i("uni-popup",{ref:"anchorImgs",attrs:{type:"bottom"}},[i("v-uni-view",{staticClass:"bg-white",staticStyle:{width:"750rpx",height:"1000rpx"}},[i("v-uni-view",{staticClass:"flex flex-row justify-between align-center",staticStyle:{height:"100rpx"}},[i("v-uni-view",{staticClass:"flex flex-column align-center justify-center"},[i("v-uni-text",{staticClass:"text-main font-md ml-3"},[t._v("主播图片集")])],1),i("v-uni-view",{staticClass:"flex align-center justify-center  px-2 mr-3 rounded bg-success",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.anchorImg.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"font text-white"},[t._v("上传新图片")])],1),i("v-uni-view",{staticClass:"flex flex-column align-center justify-center",staticStyle:{width:"100rpx",height:"100rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeAnchorImgs.apply(void 0,arguments)}}},[i("tui-icon",{attrs:{name:"close",size:32}})],1)],1),i("v-uni-swiper",{staticClass:"border-bottom border-top",staticStyle:{height:"800rpx"},attrs:{"indicator-dots":!0,duration:500,current:t.anchorImgsData.index},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.anchorImgsIndexChg.apply(void 0,arguments)}}},[t._l(t.anchorImgsData.list,(function(t,e){return i("v-uni-swiper-item",{key:e,staticStyle:{height:"800rpx"}},[i("v-uni-image",{staticStyle:{width:"750rpx"},attrs:{src:t,mode:"widthFix"}})],1)})),0===t.anchorImgsData.list.length?i("v-uni-swiper-item",[i("v-uni-view",{staticClass:"flex flex-row justify-center align-center p-2"},[i("v-uni-text",[t._v("目前还没有图片")])],1)],1):t._e()],2),i("v-uni-view",{staticClass:"flex flex-row align-center justify-between p-2 border-top",staticStyle:{height:"100rpx"}},[t.anchorImgsData.list.length?[i("v-uni-view",{staticClass:"flex align-center justify-center py-1 px-2 mr-3 rounded bg-primary",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendAnchorImg(t.anchorImgsData.list[t.anchorImgsData.index])}}},[i("v-uni-text",{staticClass:"font text-white"},[t._v("发送当前图片")])],1)]:t._e()],2)],1)],1)]:t._e()],2)},s=[]},"715a":function(t,e,i){var n=i("2968");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("ea2c5102",n,!0,{sourceMap:!1,shadowMode:!1})},"76ba":function(t,e,i){"use strict";i.r(e);var n=i("00d2"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},8406:function(t,e,i){"use strict";i.r(e);var n=i("840b"),a=i("76ba");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);var o,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"d2edf0b6",null,!1,n["a"],o);e["default"]=c.exports},"840b":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticStyle:{height:"18rpx","background-color":"#EFEDE9"}})},s=[]},8873:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticStyle:{width:"540rpx",height:"100%"}},[t.joinData.flag?[i("v-uni-text",{staticClass:"pl-4 font text-warning"},[t._v(t._s(t.joinData.data.name)+": 进入了直播间")])]:t._e(),t.leaveData.flag?[i("v-uni-text",{staticClass:"pl-4 font text-warning"},[t._v(t._s(t.leaveData.data.name)+": 离开了直播间")])]:t._e(),i("v-uni-scroll-view",{staticClass:"pl-3",staticStyle:{width:"540rpx",height:"350rpx"},attrs:{"scroll-y":"true","scroll-with-animation":!0,"scroll-into-view":t.scrollInToView}},[t._l(t.list,(function(e,n){return[i("v-uni-view",{key:n+"_0",staticClass:"flex flex-row flex-wrap justify-start align-start rounded p-1 mb-1",staticStyle:{"background-color":"rgba(255,255,255,0.125)"},attrs:{id:"danmu"+e._id_}},["system"===e.type?[i("v-uni-text",{staticClass:"font-small text-info flex-1"},[t._v(t._s(e.content))])]:"join"===e.type?[i("v-uni-text",{staticClass:"font text-danger"},[t._v(t._s(e.name)+"：")]),i("v-uni-text",{staticClass:"font text-info flex-1"},[t._v("进入了直播间")])]:"leave"===e.type?[i("v-uni-text",{staticClass:"font text-danger"},[t._v(t._s(e.name)+"：")]),i("v-uni-text",{staticClass:"font text-info flex-1"},[t._v("离开了直播间")])]:[t._l(e.name,(function(e,n){return[i("v-uni-text",{key:n,staticClass:"font text-danger"},[t._v(t._s(e))])]})),i("v-uni-text",{staticClass:"font text-danger"},[t._v("：")]),t._l(e.contentArr,(function(e,n){return[i("v-uni-text",{key:n,staticClass:"font text-white"},[t._v(t._s(e))])]}))]],2)]}))],2)],2)},s=[]},"9d5c":function(t,e,i){"use strict";(function(t){i("a630"),i("3ca3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{scrollInToView:"",list:[{type:"system",id:0,_id_:1,name:"系统提示",content:"一生健康温馨提示，您需要遵循以下规则：\n\t\t\t\t\t1. 任何机构和个人不得通过映客平台对重大政治、军事、经济、社会、文化、体育等活动、事件的实况进行视音频直播。\n\t\t\t\t\t2. 严禁发表反党反政府的言论，或做出侮辱诋毁党和国家的行为。\n\t\t\t\t\t3. 严禁直接或间接传播淫秽、色情、挑逗性、大尺度内容。\n\t\t\t\t\t4. 严禁任何方式展示毒品、赌博打牌、枪支、管制刀具等。\n\t\t\t\t\t5. 严禁冒犯性、羞辱性、歧视性的语言和行为。\n\t\t\t\t\t6. 严禁进行任何形式广告宣传、恶意发布广告的行为。\n\t\t\t\t\t7. 禁止未成年人发起直播。"}],joinData:{flag:!1,data:{id:0,name:"",avatar:""}},leaveData:{flag:!1,data:{id:0,name:"",avatar:""}}}},mounted:function(){},methods:{send:function(e){var i=this;try{e["_id_"]=this.list.length,e.contentArr=Array.from(e.content),this.list.push(e),setTimeout((function(){i.toBottom()}),100)}catch(n){t.log(n)}},join:function(t){var e=this;this.joinData.data=t,this.joinData.flag=!0,setTimeout((function(){e.joinData.flag=!1}),2e3)},leave:function(t){var e=this;this.leaveData.data=t,this.leaveData.flag=!0,setTimeout((function(){e.leaveData.flag=!1}),2e3)},toBottom:function(){var e=this;setTimeout((function(){var i=e.list.length;if(i>0&&e.list[i-1])try{e.scrollInToView="danmu"+e.list[i-1]._id_}catch(n){t.log(n)}}),300),this.scrollInToView=""}}};e.default=n}).call(this,i("5a52")["default"])},a4b7:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.gift=e.comment=e.leaveLive=e.joinLive=e.liveCurrentUserList=e.edit=e.create=e.findOneById=e.list=void 0;var a=n(i("5c48")),s=function(t){return(0,a.default)({url:"/live/list",method:"POST",data:t})};e.list=s;var o=function(t){return(0,a.default)({url:"/live/findOneById",method:"POST",data:t})};e.findOneById=o;var r=function(t){return(0,a.default)({url:"/live/create",method:"POST",data:t})};e.create=r;var c=function(t){return(0,a.default)({url:"/live/edit",method:"POST",data:t})};e.edit=c;var u=function(t){return(0,a.default)({url:"/live/liveCurrentUserList",method:"POST",data:t})};e.liveCurrentUserList=u;var l=function(t){return(0,a.default)({url:"/live/joinLive",method:"POST",data:t})};e.joinLive=l;var f=function(t){return(0,a.default)({url:"/live/leaveLive",method:"POST",data:t})};e.leaveLive=f;var d=function(t){return(0,a.default)({url:"/live/comment",method:"POST",data:t})};e.comment=d;var v=function(t){return(0,a.default)({url:"/live/gift",method:"POST",data:t})};e.gift=v},a6af:function(t,e,i){"use strict";var n=i("715a"),a=i.n(n);a.a},a84c:function(t,e,i){"use strict";i.r(e);var n=i("e8d8"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},c622:function(t,e,i){"use strict";i.r(e);var n=i("68c2"),a=i("300d");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("a6af");var o,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"55d63865",null,!1,n["a"],o);e["default"]=c.exports},e8d8:function(t,e,i){"use strict";i("a434"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{defaultAvatar:"/static/tabbar/min.png",gifts:[]}},methods:{send:function(t){this.gifts.push(t),this.toBottom(),this.autoHide()},toBottom:function(){var t=this;this.$nextTick((function(){var e=t.gifts.length-1,i="item"+e;t.$refs[i]}))},autoHide:function(){var t=this;if(this.gifts.length)setTimeout((function(){t.gifts.splice(0,1)}),5e3)}}};e.default=n}}]);