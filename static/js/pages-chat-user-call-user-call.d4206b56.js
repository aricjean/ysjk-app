(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-chat-user-call-user-call"],{"0fca":function(e,t,i){"use strict";var n=i("f62c"),o=i.n(n);o.a},"15c0":function(e,t,i){e.exports=i.p+"static/img/icon_speakers.800a77db.png"},"279c":function(e,t,i){"use strict";var n=i("970b");function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(t,"__esModule",{value:!0}),t.LiveTranscoding=t.Color=t.TranscodingUser=t.RtcImage=void 0;var a=function e(t,i){n(this,e),o(this,"width",void 0),o(this,"height",void 0),o(this,"videoBitrate",void 0),o(this,"videoFramerate",void 0),o(this,"lowLatency",void 0),o(this,"videoGop",void 0),o(this,"watermark",void 0),o(this,"backgroundImage",void 0),o(this,"audioSampleRate",void 0),o(this,"audioBitrate",void 0),o(this,"audioChannels",void 0),o(this,"audioCodecProfile",void 0),o(this,"videoCodecProfile",void 0),o(this,"backgroundColor",void 0),o(this,"userConfigExtraInfo",void 0),o(this,"transcodingUsers",void 0),i&&(this.width=i.width,this.height=i.height,this.videoBitrate=i.videoBitrate,this.videoFramerate=i.videoFramerate,this.lowLatency=i.lowLatency,this.videoGop=i.videoGop,this.watermark=i.watermark,this.backgroundImage=i.backgroundImage,this.audioSampleRate=i.audioSampleRate,this.audioBitrate=i.audioBitrate,this.audioChannels=i.audioChannels,this.audioCodecProfile=i.audioCodecProfile,this.videoCodecProfile=i.videoCodecProfile,this.backgroundColor=i.backgroundColor,this.userConfigExtraInfo=i.userConfigExtraInfo),this.transcodingUsers=t};t.LiveTranscoding=a;var r=function e(t,i){n(this,e),o(this,"uid",void 0),o(this,"x",void 0),o(this,"y",void 0),o(this,"width",void 0),o(this,"height",void 0),o(this,"zOrder",void 0),o(this,"alpha",void 0),o(this,"audioChannel",void 0),this.uid=t,i&&(this.x=i.x,this.y=i.y,this.width=i.width,this.height=i.height,this.zOrder=i.zOrder,this.alpha=i.alpha,this.audioChannel=i.audioChannel)};t.TranscodingUser=r;var s=function e(t,i,a){n(this,e),o(this,"red",void 0),o(this,"green",void 0),o(this,"blue",void 0),this.red=t,this.green=i,this.blue=a};t.Color=s;var c=function e(t,i){n(this,e),o(this,"url",void 0),o(this,"x",void 0),o(this,"y",void 0),o(this,"width",void 0),o(this,"height",void 0),this.url=t,i&&(this.x=i.x,this.y=i.y,this.width=i.width,this.height=i.height)};t.RtcImage=c},"2e64":function(e,t,i){e.exports=i.p+"static/img/icon_speaker.47b9863d.png"},"3c02":function(e,t,i){e.exports=i.p+"static/img/vi_in.fe0dd786.png"},4753:function(e,t,i){"use strict";var n=i("9810"),o=i.n(n);o.a},"58df":function(e,t,i){"use strict";i.r(t);var n=i("a51c"),o=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=o.a},"5a1b":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".content[data-v-52a3a83e]{background-color:#2f3041}.text[data-v-52a3a83e]{color:#fff;margin-top:20px}\n\n/* 提示 */.hint[data-v-52a3a83e]{position:fixed;align-items:center}.location-none[data-v-52a3a83e]{flex:1;position:absolute;top:0;bottom:0;right:0;justify-content:center;align-items:center}\n\n/* 用户标识 */.user-hint[data-v-52a3a83e]{position:absolute;bottom:0;left:0;background-color:#2f3041;opacity:.5;padding:4px 10px}.hint-text[data-v-52a3a83e]{color:#fff;opacity:1}.CanvasView[data-v-52a3a83e]{flex-wrap:wrap;flex-direction:row;padding:60px 0 0}\n\n/* 1个视频 */.video_local[data-v-52a3a83e]{flex:1}\n\n/* 4个视频 */.video_local_1[data-v-52a3a83e]{width:%?375?%;height:%?420?%}\n\n/* 相关操作 */.options[data-v-52a3a83e]{position:fixed;bottom:20px;padding:0 20px;width:100%;flex-direction:column;justify-content:space-between}.icon[data-v-52a3a83e]{\n\t/* background-color: #007AFF; */justify-content:center;align-items:center}.icon_img[data-v-52a3a83e]{width:60px;height:60px}.icon_text[data-v-52a3a83e]{color:#fff;margin:10px}\n\n/* 旁路推流 */.live[data-v-52a3a83e]{position:fixed;background-color:#000;opacity:.8;justify-content:center;align-items:center}.live-input[data-v-52a3a83e]{height:%?110?%;padding:0 26px;background-color:#2f3041;border-radius:6px;color:#fff;opacity:1;text-align:center}.live-options[data-v-52a3a83e]{flex-direction:column;padding:0 20px}",""]),e.exports=t},"81eb":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={warning:{8:"指定的 View 无效，使用视频功能时需要指定 view",16:"初始化视频功能失败。有可能是因视频资源被占用导致的。用户无法看到视频画面，但不影响语音通信",20:"请求处于待定状态。一般是由于某个模块还没准备好，请求被延迟处理",103:"没有可用的频道资源。可能是因为服务端没法分配频道资源",104:"查找频道超时。在加入频道时 SDK 先要查找指定的频道，出现该警告一般是因为网络太差，连接不到服务器",106:"打开频道超时。查找到指定频道后，SDK 接着打开该频道，超时一般是因为网络太差，连接不到服务器",107:"打开频道请求被服务器拒绝。服务器可能没有办法处理该请求或该请求是非法的",121:"TICKET 非法，打开频道失败",122:"尝试打开另一个服务器",701:"打开伴奏出错",1014:"音频设备模块：运行时播放设备出现警告",1016:"音频设备模块：运行时录音设备出现警告",1019:"音频设备模块：没有采集到有效的声音数据",1025:"音频播放或采集被系统事件（如来电）打扰",1033:"音频设备模块：录制设备被占用",1051:"音频设备模块：录音声音检查到啸叫"},errore:{0:"没有错误",1:"一般性的错误（没有明确归类的错误原因）",2:"API 调用了无效的参数。例如指定的频道名含有非法字符",3:"SDK 初始化失败",4:"SDK 当前状态不支持此操作",5:"调用被拒绝",6:"传入的缓冲区大小不足以存放返回的数据",7:"SDK 尚未初始化，就调用其 API。请确认在调用 API 之前已创建 RtcEngine 对象并完成初始化",8:"指定的 View 无效，使用视频功能时需要指定 View",9:"没有操作权限。请检查用户是否授予 app 音视频设备使用权限",10:"API 调用超时。有些 API 调用需要 SDK 返回结果，如果 SDK 处理时间过长，超过 10 秒没有返回，会出现此错误",11:"请求被取消",12:"调用频率太高",13:"SDK 内部绑定到网络 Socket 失败",14:"网络不可用",15:"没有网络缓冲区可用",16:"初始化视频功能失败。有可能是因视频资源被占用导致的。用户无法看到视频画面，但不影响语音通信",17:"加入频道被拒绝",18:"离开频道失败",19:"资源已被占用，不能重复使用",101:"不是有效的 APP ID。请更换有效的 APP ID 重新加入频道",102:"不是有效的频道名。请更换有效的频道名重新加入频道",110:"开启了 token 校验但没有输入 token",111:"网络连接中断",112:"网络连接丢失",113:"在调用 sendStreamMessage 时，用户不在频道内",114:"在调用 sendStreamMessage 时，发送的数据长度大于 1024 个字节",115:"在调用 sendStreamMessage 时，发送的数据码率超过限制（6KB/s）",116:"在调用 createDataStream 时，创建的数据通道过多（超过 5 个通道）",120:"解密失败，可能是用户加入频道用了不同的密码。请检查加入频道时的设置，或尝试重新加入频道",123:"此用户被服务器禁止",125:"水印文件路径错误",134:"无效的 User account",1001:"加载媒体引擎失败",1002:"启动媒体引擎开始通话失败。请尝试重新进入频道",1004:"启动视频渲染模块失败",1005:"音频设备模块：音频设备出现错误（未明确指明为何种错误）。请检查音频设备是否被其他应用占用，或者尝试重新进入频道",1006:"音频设备模块：使用 java 资源出现错误",1007:"音频设备模块：设置的采样频率出现错误",1008:"音频设备模块：初始化播放设备出现错误。请检查播放设备是否被其他应用占用，或者尝试重新进入频道",1009:"音频设备模块：启动播放设备出现错误。请检查播放设备是否正常，或者尝试重新进入频道",1010:"音频设备模块：停止播放设备出现错误",1011:"音频设备模块：初始化录音设备时出现错误。请检查录音设备是否正常，或者尝试重新进入频道",1012:"音频设备模块：启动录音设备出现错误。请检查录音设备是否正常，或者尝试重新进入频道",1013:"音频设备模块：停止录音设备出现错误",1015:"音频设备模块：运行时播放出现错误。请检查录音设备是否正常，或者尝试重新进入频道",1017:"音频设备模块：运行时录音错误。请检查录音设备是否正常，或者尝试重新进入频道",1018:"音频设备模块：录音失败",1022:"音频设备模块：初始化 Loopback 设备错误",1023:"音频设备模块：启动 Loopback 设备错误",1030:"音频路由：连接蓝牙通话失败，默认路由会被启用",1359:"音频设备模块：无录制设备。请检查是否有可用的录放音设备或者录放音设备是否已经被其他应用占用",1501:"视频设备模块：没有摄像头使用权限。请检查是否已经打开摄像头权限",1600:"视频设备模块：未知错误",1601:"视频设备模块：视频编码器初始化错误。该错误为严重错误，请尝试重新加入频道",1602:"视频设备模块：视频编码器错误。该错误为严重错误，请尝试重新加入频道"},live:{state:{0:"推流未开始或已结束",1:"正在连接 AR 推流服务器和 RTMP 服务器",2:"推流正在进行,成功推流后",3:"正在恢复推流",4:"推流失败"},error:{0:"推流成功",1:"参数无效，请检查输入参数是否正确。请确保调用 setLiveTranscoding ",2:"推流已加密，不能推流",3:"推流超时未成功，可重新推流",4:"推流服务器出现错误",5:"RTMP 服务器出现错误",6:"推流请求过于频繁",7:"单个主播的推流地址数目达到上线 10",8:"主播操作不属于自己的流，请检查 App 逻辑",9:"服务器未找到这个流",10:"推流地址格式有错误，请检查推流地址格式是否正确"}}},o=n;t.default=o},"89eb":function(e,t,i){"use strict";i.r(t);var n=i("ebc5"),o=i("58df");for(var a in o)"default"!==a&&function(e){i.d(t,e,(function(){return o[e]}))}(a);i("0fca");var r,s=i("f0c5"),c=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"23b6bd75",null,!1,n["a"],r);t["default"]=c.exports},9399:function(e,t,i){"use strict";(function(e){var n=i("4ea4");i("4de4"),i("c740"),i("d81d"),i("a434"),i("a9e3"),i("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("96cf");var o=n(i("1da1")),a=i("279c"),r=n(i("81eb")),s=uni.requireNativePlugin("AR-RtcModule"),c={location:null,remoteLits:[]},u={init:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(i){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return c=Object.assign(c,i),t.next=3,s.setCallBack((function(e){u.callBack(e)}));case 3:return t.next=5,s.create({appId:c.appid},(function(t){e.log("初始化实例 rtc",t)}));case 5:return t.next=7,s.setParameters({Cmd:"SetAudioAiNoise",Enable:1},(function(t){e.log("私人定制",t)}));case 7:case"end":return t.stop()}}),t)})));function i(e){return t.apply(this,arguments)}return i}(),callBack:function(t){switch(t.engineEvent){case"onWarning":uni.showToast({title:r.default.warning[t.warningCode]||"未知警告",icon:"none",duration:2e3});break;case"onError":uni.showToast({title:r.default.errore[t.errorCode]||"未知错误",icon:"none",duration:2e3});break;case"onJoinChannelSuccess":2!=c.roleChoices&&u.localVideo({channel:c.channelId+"",uid:c.uid+""});break;case"onUserJoined":uni.showToast({title:"用户"+t.uid+"加入频道",icon:"none",duration:2e3});break;case"onUserOffline":uni.showToast({title:"远端用户"+t.uid+"离开频道",icon:"none",duration:2e3}),uni.$emit("UserOffline",t),c.remoteLits.splice(c.remoteLits.findIndex((function(e){return e.peerid==t.uid})),1);break;case"onFirstRemoteVideoDecoded":e.log("已显示远端视频首帧回调",t),uni.$emit("peeridJoinChannel",t.uid);break;case"onRemoteVideoStateChanged":e.log("远端用户视频状态发生已变化回调",t),uni.$emit("VideoStateChanged",t);break;case"onRtmpStreamingStateChanged":uni.showToast({title:r.default.live.state[t.state]+r.default.live.error[t.errorCode],icon:"none",duration:2e3}),e.log("旁路推流状态",t);break}},setChannelProfile:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t,i){e.log("设置频道场景以及频道角色",c),s.setChannelProfile({profile:Number(c.scenario)},(function(e){0==e.code&&s.setClientRole({role:Number(c.roleChoices)},(function(e){t(e.code)}))}))}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));function i(){return t.apply(this,arguments)}return i}(),enableVideo:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.enableVideo((function(t){e.log("RTC 启用视频 enableVideo 方法调用",(0===t.code?"成功":"失败：")+t)}));case 2:case"end":return t.stop()}}),t)})));function i(){return t.apply(this,arguments)}return i}(),joinChannel:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u.setEnableSpeakerphone(!0);case 2:return t.next=4,s.joinChannel({token:c.token,channelId:c.channel,uid:c.uid},(function(t){e.log("RTC joinChannel 方法调用",(0===t.code?"成功":"失败：")+t)}));case 4:case"end":return t.stop()}}),t)})));function i(){return t.apply(this,arguments)}return i}(),setEnableSpeakerphone:function(t){s.setEnableSpeakerphone({enabled:t},(function(i){e.log("RTC 远端加入房间后设置"+(t?"开启":"关闭")+"扬声器播放",0===i.code?"成功":"失败："+i)}))},enableLocalAudio:function(t){s.enableLocalAudio({enabled:t},(function(i){e.log("RTC 音频"+(t?"开启":"关闭"),(0===i.code?"成功":"失败：")+i)}))},enableLocalVideo:function(t){s.enableLocalVideo({enabled:t},(function(i){e.log("RTC 视频"+(t?"开启":"关闭"),(0===i.code?"成功":"失败：")+i)}))},switchCamera:function(){s.switchCamera((function(t){e.log("RTC 摄像头前后 switchCamera 方法调用",0===t.code?"成功":"失败："+t)}))},toSpeech:function(){s.disableVideo((function(t){e.log("RTC 关闭视频模块 disableVideo 方法调用",0===t.code?"成功":"失败："+t)}))},localVideo:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.log("本地启用视频后",c),t.next=3,c.location.setupLocalVideo({renderMode:1,channelId:c.channel,uid:c.uid,mirrorMode:0},(function(t){e.log("渲染视频",t)}));case 3:return t.next=5,c.location.startPreview((function(t){e.log("本地预览",t)}));case 5:case"end":return t.stop()}}),t)})));function i(){return t.apply(this,arguments)}return i}(),remotenableVideo:function(t){e.log("远端加入房间后进行",c.remoteLits),e.log("远端加入房间后进行",t),c.remoteLits.map(function(){var i=(0,o.default)(regeneratorRuntime.mark((function i(n){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(n.peerid!=t.uid){i.next=6;break}return e.log("频道",c.channel),i.next=4,n.remote[0].setupRemoteVideo({uid:n.peerid,channelId:c.channel,renderMode:0,mirrorMode:0},(function(t){e.log("渲染远端视频",t)}));case 4:return i.next=6,n.remote[0].startPreview((function(t){e.log("远端本地预览",t)}));case 6:case"end":return i.stop()}}),i)})));return function(e){return i.apply(this,arguments)}}())},leave:function(){s.leaveChannel((function(t){e.log("调用离开频道 leaveChannel",t)}))},destroyRtc:function(){s.destroyRtc((function(t){e.log("销毁实例",t)}))},LiveTransco:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(i){var n,o,r=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=!(r.length>1&&void 0!==r[1])||r[1],o=[],e.log(c),2!=c.roleChoices&&o.push(new a.TranscodingUser(c.uid,{width:280,height:210,x:0,y:0})),c.remoteLits.map((function(e,t){var i=o.length>0?t+1:t;o.push(new a.TranscodingUser(e.peerid,{width:280,height:210,x:i%3*280,y:210*Math.floor(i/3)}))})),e.log(o),t.next=8,s.setLiveTranscoding({transcoding:new a.LiveTranscoding(o,{width:840,height:210*Math.ceil(o.length/3)})},(function(t){e.log(t)}));case 8:return t.next=10,s.addPublishStreamUrl({url:i,transcodingEnabled:n},(function(t){e.log("添加旁路推流",t)}));case 10:case"end":return t.stop()}}),t)})));function i(e){return t.apply(this,arguments)}return i}(),removePublishStreamUrl:function(t){s.removePublishStreamUrl({url:t},(function(t){e.log("取消旁路推流",t)}))}};uni.$on("CanvasView",(function(e){if(e.location)c=Object.assign(c,{location:e.location});else if(e.peerid&&e.remote){var t=c.remoteLits.filter((function(t){return t.peerid==e.peerid}));0==t.length&&(c.remoteLits.push(e),setTimeout((function(){u.remotenableVideo({uid:e.peerid})}),500))}}));var d=u;t.default=d}).call(this,i("5a52")["default"])},"970b":function(e,t){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}e.exports=i},9810:function(e,t,i){var n=i("5a1b");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=i("4f06").default;o("0d182ce9",n,!0,{sourceMap:!1,shadowMode:!1})},"9e56":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.loading[data-v-23b6bd75]{width:%?750?%;height:%?30?%;flex-direction:row;justify-content:center;align-items:center}.obj[data-v-23b6bd75]{width:%?30?%;height:%?30?%;border-radius:%?100?%}',""]),e.exports=t},"9ef0":function(e,t,i){"use strict";i.r(t);var n=i("fd2e"),o=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=o.a},"9f044":function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content",style:{width:e.windowWidth+"px",height:e.windowHeight+"px"}},[2==e.info.roleChoices&&0==e.peeridInfo.length?n("v-uni-view",{staticClass:"hint",style:{top:e.windowHeight/2-60+"px",width:e.windowWidth+"px"}},[n("myLoading"),n("v-uni-text",{staticClass:"text"},[e._v("暂无主播,请耐心等候主播加入")])],1):e._e(),n("v-uni-scroll-view",{staticClass:"CanvasView",style:{width:e.windowWidth+"px",height:e.windowHeight+"px",paddingTop:0==e.peeridInfo.length?"0px":"20px"},attrs:{"scroll-y":"true"}},[2!=e.info.roleChoices?n("v-uni-view",{class:e.peeridInfoStyle,staticStyle:{position:"relative"}},[n("v-uni-view",{staticStyle:{flex:"1"}},[n("AR-CanvasView",{ref:"location",staticStyle:{flex:"1"}})],1),n("v-uni-view",{staticClass:"location-none",style:{left:e.video?"-800px":"0px",backgroundColor:e.video?"":"#0A1621",opacity:e.video?"0":"1"}},[n("v-uni-image",{staticStyle:{width:"60px",height:"80px"},attrs:{src:i("eeb1"),mode:""}})],1),n("v-uni-view",{staticClass:"user-hint"},[n("v-uni-text",{staticClass:"hint-text"},[e._v(e._s(e.info.uid))])],1)],1):e._e(),e._l(e.peeridInfo,(function(t){return n("v-uni-view",{key:t.uid,class:e.peeridInfoStyle},[n("v-uni-view",{staticStyle:{flex:"1"}},[n("AR-CanvasView",{ref:"remote"+t.uid,refInFor:!0,staticStyle:{flex:"1"}})],1),n("v-uni-view",{staticClass:"location-none",style:{left:t.videoStatus?"-800px":"0px",backgroundColor:t.videoStatus?"":"#0A1621",opacity:t.videoStatus?"0":"1"}},[n("v-uni-image",{staticStyle:{width:"60px",height:"80px"},attrs:{src:i("eeb1"),mode:""}})],1),n("v-uni-view",{staticClass:"user-hint"},[n("v-uni-text",{staticClass:"hint-text"},[e._v(e._s(t.uid))])],1)],1)}))],2),n("v-uni-view",{staticClass:"options",style:{width:e.windowWidth+"px"}},[2!=e.info.roleChoices?n("v-uni-view",{staticStyle:{"flex-direction":"row","justify-content":"space-between","margin-bottom":"20px"}},[n("v-uni-view",{staticClass:"icon",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.videoFn.apply(void 0,arguments)}}},[e.video?n("v-uni-image",{staticClass:"icon_img",attrs:{src:i("c932")}}):n("v-uni-image",{staticClass:"icon_img",attrs:{src:i("3c02")}}),n("v-uni-text",{staticClass:"icon_text"},[e._v("视频")])],1),1==e.info.scenario?n("v-uni-view",{staticClass:"icon",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.pullFn.apply(void 0,arguments)}}},[n("v-uni-image",{staticStyle:{width:"70px",height:"70px"},attrs:{src:i("dc52"),mode:""}}),n("v-uni-text",{staticClass:"icon_text"},[e._v("推流")])],1):e._e(),n("v-uni-view",{staticClass:"icon",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cameraFn.apply(void 0,arguments)}}},[n("v-uni-image",{staticClass:"icon_img",attrs:{src:i("d844"),mode:""}}),n("v-uni-text",{staticClass:"icon_text"},[e._v("摄像"+e._s(e.camera?"前":"后"))])],1)],1):e._e(),n("v-uni-view",{style:{flexDirection:"row",justifyContent:2!=e.info.roleChoices?"space-between":"center"}},[2!=e.info.roleChoices?n("v-uni-view",{staticClass:"icon",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.audioFn.apply(void 0,arguments)}}},[e.audio?n("v-uni-image",{staticClass:"icon_img",attrs:{src:i("eb6c")}}):n("v-uni-image",{staticClass:"icon_img",attrs:{src:i("aec7")}}),n("v-uni-text",{staticClass:"icon_text"},[e._v("静音")])],1):e._e(),n("v-uni-view",{staticClass:"icon",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.closeFn.apply(void 0,arguments)}}},[n("v-uni-image",{staticClass:"icon_img",attrs:{src:i("dcff")}}),n("v-uni-text",{staticClass:"icon_text"},[e._v("挂断")])],1),2!=e.info.roleChoices?n("v-uni-view",{staticClass:"icon",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.speakerphoneFn.apply(void 0,arguments)}}},[e.Speakerphone?n("v-uni-image",{staticClass:"icon_img",attrs:{src:i("15c0")}}):n("v-uni-image",{staticClass:"icon_img",attrs:{src:i("2e64")}}),n("v-uni-text",{staticClass:"icon_text"},[e._v("扬声器")])],1):e._e()],1)],1),e.liveShow?n("v-uni-view",{staticClass:"live",style:{width:e.windowWidth+"px",height:e.windowHeight+"px"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.penetrateFn(t)}}},[n("v-uni-view",{staticClass:"live-options",style:{width:e.windowWidth+"px"}},[n("v-uni-text",{staticClass:"icon_text"},[e._v("注意：请确保当前使用的 appid 开通旁路推流服务，否则将推流失败")]),n("v-uni-input",{staticClass:"live-input",attrs:{type:"text",placeholder:"请输入推流地址"},model:{value:e.info.liveUrl,callback:function(t){e.$set(e.info,"liveUrl",t)},expression:"info.liveUrl"}}),n("v-uni-view",{staticStyle:{"justify-content":"space-around","flex-direction":"row","margin-top":"60px"}},[n("v-uni-button",{staticStyle:{width:"80px"},attrs:{type:"default"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.liveShow=!1}}},[e._v("取消")]),n("v-uni-button",{staticStyle:{width:"80px"},attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.liveTranscoFn.apply(void 0,arguments)}}},[e._v("确定")])],1)],1)],1):e._e()],1)},a=[]},a51c:function(e,t,i){"use strict";var n=i("4ea4");i("a9e3"),i("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(i("5530")),a=weex.requireModule("animation"),r={name:"my-loading",props:{color:{type:String,default:"#0081FF"},mt:{type:[String,Number],default:40}},created:function(){var e=this;setTimeout((function(){e.createAnimation()}),50),setInterval((function(){e.createAnimation()}),1100)},methods:{createAnimation:function(){var e=this;this.run(this.$refs.obj1),setTimeout((function(){e.run(e.$refs.obj2)}),300),setTimeout((function(){e.run(e.$refs.obj3)}),600)},transition:function(e,t,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return new Promise((function(r){a.transition(e,(0,o.default)({duration:i,delay:n,timingFunction:"linear",needLayout:!1},t),r)}))},run:function(e){var t=this;this.transition(e,{styles:{transform:"scale(0.5)"}},500,0).then((function(){t.transition(e,{styles:{transform:"scale(1)"}},500,0)}))}}};t.default=r},aec7:function(e,t,i){e.exports=i.p+"static/img/au_on.32b7df97.png"},c932:function(e,t,i){e.exports=i.p+"static/img/vi_on.3aa9947d.png"},d844:function(e,t,i){e.exports=i.p+"static/img/camera.4d2fcba8.png"},dc52:function(e,t){e.exports="data:image/png;base64,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"},dcff:function(e,t,i){e.exports=i.p+"static/img/over.d00616e7.png"},dfc8:function(e,t,i){"use strict";i.r(t);var n=i("9f044"),o=i("9ef0");for(var a in o)"default"!==a&&function(e){i.d(t,e,(function(){return o[e]}))}(a);i("4753");var r,s=i("f0c5"),c=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"52a3a83e",null,!1,n["a"],r);t["default"]=c.exports},eb6c:function(e,t,i){e.exports=i.p+"static/img/au_in.cd260b6b.png"},ebc5:function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"loading",style:"margin-top: "+e.mt+"rpx;"},[i("v-uni-view",{ref:"obj1",staticClass:"obj",style:"background-color: "+e.color+";"}),i("v-uni-view",{ref:"obj2",staticClass:"obj",style:"margin-left: 12rpx; margin-right: 12rpx; background-color: "+e.color+";"}),i("v-uni-view",{ref:"obj3",staticClass:"obj",style:"background-color: "+e.color+";"})],1)},a=[]},eeb1:function(e,t,i){e.exports=i.p+"static/img/icon_launch_logo.28b98a92.png"},f62c:function(e,t,i){var n=i("9e56");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=i("4f06").default;o("2528b764",n,!0,{sourceMap:!1,shadowMode:!1})},fd2e:function(e,t,i){"use strict";(function(e){var n=i("4ea4");i("4de4"),i("c740"),i("d81d"),i("a434"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("96cf");var o=n(i("1da1")),a=n(i("5530")),r=n(i("a2a0")),s=n(i("9399")),c=i("32ea"),u=n(i("89eb")),d=i("26cb"),l={components:{myLoading:u.default},data:function(){return{info:{appid:c.RTCConfig.appid,channel:"666666",token:c.RTCConfig.token,uid:0,scenario:0,roleChoices:1,liveUrl:c.RTCConfig.liveUrl},peeridInfo:[],peeridInfoStyle:"video_local",windowWidth:400,windowHeight:800,audio:!0,Speakerphone:!0,video:!0,camera:!0,liveShow:!1,liveState:!1}},computed:(0,a.default)({},(0,d.mapState)({message:function(e){return e.user.message},user:function(e){return e.user.user}})),watch:{peeridInfo:function(e){var t=2==this.info.roleChoices?e.length:e.length+1;this.peeridInfoStyle=t>1?"video_local_1":"video_local"}},created:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function i(){var n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,r.default.getWidthHeight();case 2:n=i.sent,t.windowWidth=n.windowWidth,t.windowHeight=n.windowHeight,uni.$on("peeridJoinChannel",(function(e){if(e){var i=t.peeridInfo.filter((function(t){return t.uid==e}));0==i.length&&(t.peeridInfo.push({uid:e,videoStatus:!0}),t.$nextTick((function(){uni.$emit("CanvasView",{remote:t.$refs["remote"+e],peerid:e})})))}})),uni.$on("UserOffline",(function(i){e.log("监测远端用户离开",i),i&&(t.peeridInfo.splice(t.peeridInfo.findIndex((function(e){return e.uid===i.uid})),1),t.liveState&&t.liveTranscoFn())})),uni.$on("VideoStateChanged",(function(e){e&&t.peeridInfo.map((function(t){t.uid==e.uid&&(5==e.reason&&0==e.state?t.videoStatus=!1:2==e.state&&0==e.reason&&(t.videoStatus=!0))}))}));case 8:case"end":return i.stop()}}),i)})))()},onLoad:function(e){if(e.info){uni.showLoading({title:"加载中,请稍后"});var t=JSON.parse(e.info);this.info=Object.assign(this.info,t),this.init()}},mounted:function(){2!=this.info.roleChoices&&uni.$emit("CanvasView",{location:this.$refs.location})},beforeDestroy:function(){uni.$off()},methods:{pullFn:function(){var t=this;uni.showActionSheet({itemList:["推流","停止推流"],success:function(i){i.tapIndex+1==1?t.liveShow=!0:t.removePublishStreamUrl(),e.log("选中了第"+(i.tapIndex+1)+"个按钮")},fail:function(t){e.log(t.errMsg)}})},removePublishStreamUrl:function(){this.liveState?(this.liveState=!1,s.default.removePublishStreamUrl(this.info.liveUrl)):uni.showToast({title:"请先推流",icon:"none",duration:2e3})},liveTranscoFn:function(){this.info.liveUrl?(this.liveShow=!1,this.liveState=!0,s.default.LiveTransco(this.info.liveUrl)):uni.showToast({title:"请输入推流地址",icon:"none",duration:2e3})},closeFn:function(){return(0,o.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.default.destroyRtc();case 2:uni.navigateBack({delta:1});case 3:case"end":return e.stop()}}),e)})))()},videoFn:function(){this.video=!this.video,s.default.enableLocalVideo(this.video)},cameraFn:function(){this.camera=!this.camera,s.default.switchCamera()},audioFn:function(){this.audio=!this.audio,s.default.enableLocalAudio(this.audio)},speakerphoneFn:function(){this.Speakerphone=!this.Speakerphone,s.default.setEnableSpeakerphone(this.Speakerphone)},init:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function i(){var n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,s.default.init(t.info);case 2:if(1!=t.info.scenario){i.next=7;break}return i.next=5,s.default.setChannelProfile();case 5:n=i.sent,e.log("直播场景下设置频道角色",0==n?"成功":"失败");case 7:return i.next=9,s.default.enableVideo();case 9:if(2!=t.info.roleChoices){i.next=12;break}return i.next=12,s.default.enableLocalVideo(!1);case 12:return i.next=14,s.default.joinChannel();case 14:uni.hideLoading();case 15:case"end":return i.stop()}}),i)})))()},penetrateFn:function(e){e.stopPropagation()}}};t.default=l}).call(this,i("5a52")["default"])}}]);