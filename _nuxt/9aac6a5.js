(window.webpackJsonp=window.webpackJsonp||[]).push([[30,6,10],{355:function(t,e,n){"use strict";n.r(e);n(72);var c={name:"Alert",props:{message:{default:function(){return{}},type:Object}},data:function(){return{messages:[]}},watch:{message:function(){this.message.content&&this.addAlert()}},methods:{addAlert:function(){var t=this.message,style=t.style,e=t.icon,content=t.content;this.messages.push({style:style,icon:e,content:content}),this.removeAlert()},removeAlert:function(){var t=this;setTimeout((function(){t.messages.shift()}),6e3)}}},l=n(29),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",t._l(t.messages,(function(n,c){return e("div",{key:c,staticClass:"alert mb-6",class:"alert-".concat(n.style),attrs:{role:"alert"}},[e("p",{staticClass:"mb-0"},[e("i",{staticClass:"pe-1 fas",class:n.icon}),t._v(t._s(n.content))])])})),0)}),[],!1,null,null,null);e.default=component.exports},367:function(t,e,n){var content=n(376);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("45285212",content,!0,{sourceMap:!1})},368:function(t,e,n){t.exports=n.p+"img/message_bg.521228c.png"},372:function(t,e,n){"use strict";n.r(e);var c={name:"Message"},l=(n(375),n(29)),component=Object(l.a)(c,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"d-flex justify-content-center align-items-center msg-bg"},[e("p",{staticClass:"px-4"},[t._v("已收到您的報名資訊，請前往信箱收取驗證信進行驗證，驗證完畢方為報名成功。")])]),t._v(" "),e("div",{staticClass:"d-flex"},[e("div",{staticClass:"mb-2"},[e("h1",{staticClass:"fs-4 font-cubic"},[t._v("在開賽前，還能做些什麼？")]),t._v(" "),e("ol",{staticClass:"list-unstyled"},[e("li",[t._v("\n          加入Discord 頻道 - TheF2E\n          "),e("ul",[e("li",[t._v("\n              還沒加入過六角頻道請點此：加入\n              "),e("a",{attrs:{href:"https://discord.gg/PM5Z4xCzQk",target:"_blank"}},[t._v("Discord 頻道 - TheF2E")])]),t._v(" "),e("li",[t._v("\n              已在六角 Discord 的請點此自助領取 TheF2E 頻道 ：加入\n              "),e("a",{attrs:{href:"https://discord.com/channels/801807326054055996/873050665159626792",target:"_blank"}},[t._v("TheF2E")])])])])])])])])}],!1,null,null,null);e.default=component.exports},375:function(t,e,n){"use strict";n(367)},376:function(t,e,n){var c=n(45),l=n(161),r=n(368),o=c(!1),d=l(r);o.push([t.i,".msg-bg{background-image:url("+d+");background-size:contain;background-position:50%;background-repeat:no-repeat;background-blend-mode:overlay;height:200px}",""]),t.exports=o},568:function(t,e,n){"use strict";n.r(e);var c=n(372),l=n(355),r={name:"PasswordMessage",components:{Message:c.default,Alert:l.default},data:function(){return{msg:{}}},mounted:function(){this.msg={style:"success",icon:"fa-check-circle",content:"重設密碼成功！"}}},o=n(29),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center my-7"},[e("div",{staticClass:"col-md-6"},[e("Alert",{attrs:{message:t.msg}}),t._v(" "),e("Message"),t._v(" "),e("nuxt-link",{staticClass:"link-primary text-end d-block text-decoration-none",attrs:{to:"/login"}},[t._v("返回登入頁面"),e("i",{staticClass:"fas fa-arrow-right ps-2"})])],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Alert:n(355).default,Message:n(372).default})}}]);