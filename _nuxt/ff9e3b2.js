(window.webpackJsonp=window.webpackJsonp||[]).push([[34,6],{355:function(t,e,n){"use strict";n.r(e);n(72);var r={name:"Alert",props:{message:{default:function(){return{}},type:Object}},data:function(){return{messages:[]}},watch:{message:function(){this.message.content&&this.addAlert()}},methods:{addAlert:function(){var t=this.message,style=t.style,e=t.icon,content=t.content;this.messages.push({style:style,icon:e,content:content}),this.removeAlert()},removeAlert:function(){var t=this;setTimeout((function(){t.messages.shift()}),6e3)}}},c=n(29),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",t._l(t.messages,(function(n,r){return e("div",{key:r,staticClass:"alert mb-6",class:"alert-".concat(n.style),attrs:{role:"alert"}},[e("p",{staticClass:"mb-0"},[e("i",{staticClass:"pe-1 fas",class:n.icon}),t._v(t._s(n.content))])])})),0)}),[],!1,null,null,null);e.default=component.exports},573:function(t,e,n){"use strict";n.r(e);var r=n(10),c=(n(54),n(91)),l=n(355),o={name:"Verify",components:{ValidationObserver:c.a,ValidationProvider:c.b,Alert:l.default},data:function(){return{user:{account:""},msg:{}}},methods:{sendVerifyCode:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.$api.request,e.next=4,n.apiPostSendVerifyCode(t.user);case 4:t.msg={style:"success",icon:"fa-check-circle",content:"發送成功！"},e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.msg={style:"danger",icon:"fa-exclamation-triangle",content:e.t0.response.data.message||"發送失敗！"};case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}},d=n(29),component=Object(d.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-white d-flex align-items-center"},[e("div",{staticClass:"container py-5"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-8 col-10"},[e("Alert",{attrs:{message:t.msg}})],1)]),t._v(" "),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-6 d-flex flex-column justify-content-center",staticStyle:{height:"calc(78vh)"}},[e("div",[e("h1",{staticClass:"fs-2 mb-5"},[t._v("Oops！驗證沒有成功嗎？")]),t._v(" "),e("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(n){var r=n.invalid;return[e("form",{on:{submit:function(e){return e.preventDefault(),t.sendVerifyCode.apply(null,arguments)}}},[e("ValidationProvider",{attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(n){var r=n.errors;return[e("div",{staticClass:"mb-4"},[e("label",{staticClass:"form-label",attrs:{for:"account"}},[t._v("請輸入您報名時的\n                    Email，我們將會為您寄送重新驗證信件")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.account,expression:"user.account"}],staticClass:"form-control",class:{"is-invalid":r[0]},attrs:{id:"account",name:"帳號",type:"email",placeholder:"name@example.com"},domProps:{value:t.user.account},on:{input:function(e){e.target.composing||t.$set(t.user,"account",e.target.value)}}}),t._v(" "),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(r[0]))])])]}}],null,!0)}),t._v(" "),e("div",{staticClass:"d-grid mt-7"},[e("button",{staticClass:"btn text-white fs-4 py-4 btn-bg font-cubic",attrs:{type:"submit",disabled:r}},[t._v("\n                  重發驗證信\n                ")])])],1)]}}])})],1)])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Alert:n(355).default})}}]);