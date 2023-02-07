(window.webpackJsonp=window.webpackJsonp||[]).push([[2,6],{355:function(t,e,r){"use strict";r.r(e);r(72);var n={name:"Alert",props:{message:{default:function(){return{}},type:Object}},data:function(){return{messages:[]}},watch:{message:function(){this.message.content&&this.addAlert()}},methods:{addAlert:function(){var t=this.message,style=t.style,e=t.icon,content=t.content;this.messages.push({style:style,icon:e,content:content}),this.removeAlert()},removeAlert:function(){var t=this;setTimeout((function(){t.messages.shift()}),6e3)}}},o=r(29),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",t._l(t.messages,(function(r,n){return e("div",{key:n,staticClass:"alert mb-6",class:"alert-".concat(r.style),attrs:{role:"alert"}},[e("p",{staticClass:"mb-0"},[e("i",{staticClass:"pe-1 fas",class:r.icon}),t._v(t._s(r.content))])])})),0)}),[],!1,null,null,null);e.default=component.exports},446:function(t,e,r){var content=r(491);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(46).default)("5a743b56",content,!0,{sourceMap:!1})},490:function(t,e,r){"use strict";r(446)},491:function(t,e,r){var n=r(45)(!1);n.push([t.i,".nav-tabs .nav-link.active[data-v-62e3539a]{margin-bottom:-1px;border-bottom:1px solid #000}",""]),t.exports=n},555:function(t,e,r){"use strict";r.r(e);r(20),r(162),r(36),r(55),r(122),r(23),r(57);var n=r(10),o=(r(54),r(118),r(91)),l=r(355),c={name:"UserEditInner",components:{ValidationObserver:o.a,ValidationProvider:o.b,Alert:l.default},props:{info:{default:function(){return{}},type:Object}},data:function(){return{user:{description:"",facebook_url:""},password:"",reset:{old_password:"",new_password:"",confirm_new_password:""},group:{individual_competition_id:1,position_id:1,email:""},individual_competitions:{},team_competition_positions:{},msg:{},modal:""}},watch:{info:{handler:function(){this.user.description=this.info.description?this.info.description:"",this.user.facebook_url=this.info.facebook_url?this.info.facebook_url:"",this.info.individual_competition&&("前端工程師"===this.info.individual_competition.name.split("/")[1]?this.group.individual_competition_id=2:this.group.individual_competition_id=1),this.info.team_competition&&("UI設計師"===this.info.team_competition.postition_name&&(this.group.position_id=1),"前端工程師"===this.info.team_competition.postition_name&&(this.group.position_id=2),"其他"===this.info.team_competition.postition_name&&(this.group.position_id=3))},deep:!0}},mounted:function(){this.getSignupGroup(),this.modal=new bootstrap.Modal(this.$refs.modal)},methods:{editUserInfo:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=t.$api.request,e.next=4,r.apiPutUsersInfo(t.user);case 4:t.$emit("edit"),t.msg={style:"success",icon:"fa-check-circle",content:"已更新成功！"},e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t.msg={style:"danger",icon:"fa-exclamation-triangle",content:e.t0.response.data.message||"更新失敗！"};case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},editPassword:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=t.$api.request,e.next=4,r.apiPutEditPassword(t.reset);case 4:t.msg={style:"success",icon:"fa-check-circle",content:"已更新成功！"},t.reset=t.$options.data().reset,t.$nextTick((function(){t.$refs.observer.reset()})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t.msg={style:"danger",icon:"fa-exclamation-triangle",content:e.t0.response.data.message||"更新失敗！"};case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},getSignupGroup:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=t.$api.request,e.next=4,r.apiGetData();case 4:n=e.sent,data=n.data,t.individual_competitions=data.individual_competitions,t.team_competition_positions=data.team_competition_positions,e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})))()},editIndividualGroup:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=t.$api.request,e.next=4,r.apiPutIndividualGroup({individual_competition_id:t.group.individual_competition_id});case 4:t.$emit("edit"),t.msg={style:"success",icon:"fa-check-circle",content:"已更新成功！"},e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t.msg={style:"danger",icon:"fa-exclamation-triangle",content:e.t0.response.data.message||"更新失敗！"};case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},editTeamGroup:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=t.$api.request,e.next=4,r.apiPutTeamGroup({postition_id:t.group.position_id});case 4:t.$emit("edit"),t.msg={style:"success",icon:"fa-check-circle",content:"已更新成功！"},e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t.msg={style:"danger",icon:"fa-exclamation-triangle",content:e.t0.response.data.message||"更新失敗！"};case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},addNewMember:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=t.$api.request,e.next=4,r.apiPutAddNewMember({email:t.group.email});case 4:t.$emit("edit"),t.modal.hide(),t.group.email="",t.msg={style:"success",icon:"fa-check-circle",content:"已新增成功！"},e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),t.modal.hide(),t.group.email="",t.msg={style:"danger",icon:"fa-exclamation-triangle",content:e.t0.response.data.message||"新增失敗！"};case 15:case"end":return e.stop()}}),e,null,[[0,10]])})))()}}},d=(r(490),r(29)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-md-6"},[e("Alert",{attrs:{message:t.msg}}),t._v(" "),e("h1",{staticClass:"fs-4 mb-5"},[t._v("編輯個人資料")]),t._v(" "),e("ul",{staticClass:"nav nav-tabs",attrs:{id:"myTab",role:"tablist"}},[t.info.team_competition?[e("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[e("button",{staticClass:"nav-link",class:{active:t.info.team_competition},attrs:{id:"teamProfile-tab","data-bs-toggle":"tab","data-bs-target":"#teamProfile",type:"button",role:"tab","aria-controls":"teamProfile","aria-selected":"true"}},[t._v("\n          修改團體資料\n        ")])])]:t._e(),t._v(" "),e("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[e("button",{staticClass:"nav-link",class:{active:!t.info.team_competition},attrs:{id:"profile-tab","data-bs-toggle":"tab","data-bs-target":"#profile",type:"button",role:"tab","aria-controls":"profile","aria-selected":"false"}},[t._v("\n        修改個人資料\n      ")])]),t._v(" "),t._m(0)],2),t._v(" "),e("div",{staticClass:"tab-content",attrs:{id:"myTabContent"}},[e("div",{staticClass:"tab-pane fade pt-5",class:{"show active":t.info.team_competition},attrs:{id:"teamProfile",role:"tabpanel","aria-labelledby":"teamProfile-tab"}},[e("ValidationObserver",[e("form",[t.info.team_competition?e("div",{staticClass:"mt-5"},[e("p",[t._v("團隊名稱："+t._s(t.info.team_competition.name))]),t._v(" "),t._l(t.info.team_competition.members,(function(r,n){return e("div",{key:"member"+n,staticClass:"mb-4"},[r.is_leader?e("div",[e("p",{staticClass:"mb-0"},[t._v("組長：")]),t._v(" "),r.nickname?e("p",{staticClass:"mb-0"},[e("a",{staticClass:"link-light",attrs:{target:"_blank",href:"/users/"+r.user_id}},[t._v("\n                    "+t._s(r.nickname)+" / "+t._s(r.postition_name)+"\n                  ")]),t._v(" "),e("span",{staticClass:"text-dark"},[t._v("(\n                    "+t._s(r.is_verify?"驗證成功":"尚未完成信箱驗證")+"\n                    )")])]):t._e()]):r.nickname?e("div",[e("p",{staticClass:"mb-0"},[t._v("組員：")]),t._v(" "),e("p",{staticClass:"mb-0"},[e("a",{staticClass:"link-primary",attrs:{target:"_blank",href:"/users/"+r.user_id}},[t._v("\n                    "+t._s(r.nickname)+" / "+t._s(r.postition_name)+"\n                  ")]),t._v(" "),e("span",{staticClass:"text-dark"},[t._v("(\n                    "+t._s(r.is_verify?"驗證成功":"尚未完成信箱驗證")+"\n                    )")])])]):e("div",[e("p",{staticClass:"mb-0"},[t._v("尚未註冊 F2E 系統的組員：")]),t._v(" "),e("p",{staticClass:"mb-0"},[t._v("\n                  "+t._s(r.email)+"\n                ")])])])}))],2):t._e(),t._v(" "),t.info.team_competition&&t.info.team_competition.is_leader?e("ValidationProvider",{attrs:{rules:"email"},scopedSlots:t._u([{key:"default",fn:function(r){var n=r.errors;return[e("div",{staticClass:"mb-4"},[e("label",{staticClass:"form-label",attrs:{for:"new_member"}},[t._v(" 新增組員 ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.group.email,expression:"group.email",modifiers:{trim:!0}}],staticClass:"form-control",class:{"is-invalid":n[0]},attrs:{id:"new_member",name:"新增組員",type:"email",placeholder:"請填寫欲增加新組員 email"},domProps:{value:t.group.email},on:{input:function(e){e.target.composing||t.$set(t.group,"email",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),e("small",{staticClass:"text-danger"},[t._v("新增後不得修改")]),t._v(" "),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(n[0]))])]),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#exampleModal"}},[t._v("\n              更新資料\n            ")])]}}],null,!1,2387824016)}):t._e()],1)])],1),t._v(" "),e("div",{staticClass:"tab-pane fade pt-5",class:{"show active":!t.info.team_competition},attrs:{id:"profile",role:"tabpanel","aria-labelledby":"profile-tab"}},[e("div",{staticClass:"mt-5"},[e("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(r){var n=r.invalid;return[e("form",{on:{submit:function(e){return e.preventDefault(),t.editUserInfo.apply(null,arguments)}}},[e("ValidationProvider",{attrs:{rules:"max:150"},scopedSlots:t._u([{key:"default",fn:function(r){var n=r.errors;return[e("div",{staticClass:"mb-4"},[e("label",{staticClass:"form-label",attrs:{for:"description"}},[t._v("個人簡介（限制 150 字）")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.user.description,expression:"user.description",modifiers:{trim:!0}}],staticClass:"form-control",class:{"is-invalid":n[0]},attrs:{id:"description",name:"個人簡介",rows:"3"},domProps:{value:t.user.description},on:{input:function(e){e.target.composing||t.$set(t.user,"description",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(n[0]))])])]}}],null,!0)}),t._v(" "),e("ValidationProvider",{attrs:{rules:{regex:new RegExp("(?:(?:http|https)://)?(?:www.)?facebook.com/\\w*")}},scopedSlots:t._u([{key:"default",fn:function(r){var n=r.errors;return[e("div",{staticClass:"mb-4"},[e("label",{staticClass:"form-label",attrs:{for:"fb_link"}},[t._v("Facebook 個人連結")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.user.facebook_url,expression:"user.facebook_url",modifiers:{trim:!0}}],staticClass:"form-control",class:{"is-invalid":n[0]},attrs:{id:"fb_link",name:"Facebook 個人連結",type:"text",placeholder:"https://www.facebook.com/"},domProps:{value:t.user.facebook_url},on:{input:function(e){e.target.composing||t.$set(t.user,"facebook_url",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(n[0]))])])]}}],null,!0)}),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:n}},[t._v("\n              更新資訊\n            ")])],1)]}}])})],1),t._v(" "),e("hr")]),t._v(" "),e("div",{staticClass:"tab-pane fade",attrs:{id:"resetPassword",role:"tabpanel","aria-labelledby":"reset_password-tab"}},[e("ValidationObserver",{ref:"observer",scopedSlots:t._u([{key:"default",fn:function(r){var n=r.invalid;return[e("form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.editPassword.apply(null,arguments)}}},[e("ValidationProvider",{attrs:{rules:"password"},scopedSlots:t._u([{key:"default",fn:function(r){var n=r.errors;return[e("div",{staticClass:"mb-4 pt-5"},[e("label",{staticClass:"form-label",attrs:{for:"old_password"}},[t._v("舊密碼")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.reset.old_password,expression:"reset.old_password",modifiers:{trim:!0}}],staticClass:"form-control",class:{"is-invalid":n[0]},attrs:{id:"old_password",name:"舊密碼",type:"password"},domProps:{value:t.reset.old_password},on:{input:function(e){e.target.composing||t.$set(t.reset,"old_password",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(n[0]))])])]}}],null,!0)}),t._v(" "),e("ValidationProvider",{attrs:{rules:"password",vid:"confirmation"},scopedSlots:t._u([{key:"default",fn:function(r){var n=r.errors;return[e("div",{staticClass:"mb-4"},[e("label",{staticClass:"form-label",attrs:{for:"password"}},[t._v("新密碼")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.reset.new_password,expression:"reset.new_password",modifiers:{trim:!0}}],staticClass:"form-control",class:{"is-invalid":n[0]},attrs:{id:"password",name:"密碼",type:"password"},domProps:{value:t.reset.new_password},on:{input:function(e){e.target.composing||t.$set(t.reset,"new_password",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(n[0]))])])]}}],null,!0)}),t._v(" "),e("ValidationProvider",{attrs:{rules:"required|confirmed:confirmation"},scopedSlots:t._u([{key:"default",fn:function(r){var n=r.errors;return[e("div",{staticClass:"mb-4"},[e("label",{staticClass:"form-label",attrs:{for:"confirm_password"}},[t._v("確認新密碼")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.reset.confirm_new_password,expression:"reset.confirm_new_password",modifiers:{trim:!0}}],staticClass:"form-control",class:{"is-invalid":n[0]},attrs:{id:"confirm_password",name:"確認密碼",type:"password"},domProps:{value:t.reset.confirm_new_password},on:{input:function(e){e.target.composing||t.$set(t.reset,"confirm_new_password",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(n[0]))])])]}}],null,!0)}),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{disabled:n}},[t._v("\n            更新密碼\n          ")])],1)]}}])})],1)]),t._v(" "),e("div",{ref:"modal",staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-body text-center text-dark"},[t._m(1),t._v(" "),e("p",[t._v("新增組員："+t._s(t.group.email))]),t._v(" "),e("div",[e("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-bs-dismiss":"modal"}},[t._v("\n              返回\n            ")]),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.addNewMember.apply(null,arguments)}}},[t._v("\n              確認送出\n            ")])])])])])])],1)}),[function(){var t=this._self._c;return t("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[t("button",{staticClass:"nav-link",attrs:{id:"resetPassword-tab","data-bs-toggle":"tab","data-bs-target":"#resetPassword",type:"button",role:"tab","aria-controls":"resetPassword","aria-selected":"false"}},[this._v("\n        變更密碼\n      ")])])},function(){var t=this._self._c;return t("p",[t("i",{staticClass:"fas fa-exclamation-triangle text-danger"}),this._v("新增後不得修改及刪除組員資料，請再次確認 email 是否正確\n          ")])}],!1,null,"62e3539a",null);e.default=component.exports;installComponents(component,{Alert:r(355).default})}}]);