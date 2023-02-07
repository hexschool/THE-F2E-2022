(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{400:function(t,e,r){"use strict";r.r(e);r(9),r(41),r(35),r(20),r(47),r(56),r(73),r(75),r(36),r(55);var o=r(10),n=(r(54),r(235),r(91)),l=r(364),d=r(355),c={name:"CreateFrontend",components:{ValidationObserver:n.a,ValidationProvider:n.b,Alert:d.default},mixins:[l.a],props:{nowRole:{default:"",type:String},roleId:{default:1,type:Number},editStatus:{default:!1,type:Boolean}},data:function(){return{works_list:[]}},computed:{filterWorks:function(){var t=this;return this.works_list.filter((function(e){return e.stage_id===t.worksSubmit.stage_id}))},defaultImg:function(){return 1===this.worksSubmit.stage_id?r(356):2===this.worksSubmit.stage_id?r(357):3===this.worksSubmit.stage_id?r(358):4===this.worksSubmit.stage_id?r(359):r(356)}},created:function(){this.getUsesData()},methods:{getUsesData:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=t.$api.request,e.next=4,r.apiGetUsesData();case 4:o=e.sent,data=o.data,t.works_list=data.works_list,e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}},m=r(29),component=Object(m.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("Alert",{attrs:{message:t.msg}}),t._v(" "),e("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(r){var o=r.invalid;return[e("form",{staticClass:"row justify-content-center py-md-7",on:{submit:function(e){return e.preventDefault(),t.submitWork(t.editStatus)}}},[e("div",{staticClass:"col-md-4 order-md-0 order-1"},[e("h1",{staticClass:"fs-4 mb-4"},[t._v("投稿關卡 - "+t._s(t.nowRole))]),t._v(" "),e("ValidationProvider",{attrs:{rules:"excluded: 0"},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.errors;return[e("div",{staticClass:"mb-4"},[e("label",{staticClass:"form-label",attrs:{for:"weekLevel"}},[t._v("投稿關卡*")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.worksSubmit.stage_id,expression:"worksSubmit.stage_id"}],staticClass:"form-select mb-2",class:{"is-invalid":o[0]},attrs:{id:"weekLevel",name:"投稿關卡","aria-label":"投稿關卡下拉選單",disabled:t.editStatus||t.stageList.every((function(t){return t.status}))},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.worksSubmit,"stage_id",e.target.multiple?r:r[0])}}},[e("option",{domProps:{value:0}},[t._v("請選擇要投稿的關卡")]),t._v(" "),t._l(t.stageList,(function(r){return[!r.status||t.editStatus?e("option",{key:"stage".concat(r.id),domProps:{value:r.id}},[t._v("\n                  "+t._s(r.name)+"\n                ")]):t._e()]}))],2),t._v(" "),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(o[0]))]),t._v(" "),e("p",[!t.editStatus&&t.postStatus?e("small",{staticClass:"text-danger"},[t._v("已超過投稿時間，此關卡為挑戰失敗")]):t._e()])])]}}],null,!0)}),t._v(" "),e("div",{staticClass:"mb-4"},[e("label",{staticClass:"form-label d-block",attrs:{for:"skills"}},[t._v("使用技術")]),t._v(" "),t._l(t.worksTypes.tags,(function(r){return e("label",{key:r.id,staticClass:"btn btn-sm px-0",attrs:{name:r.name}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.worksSubmit.tag_ids,expression:"worksSubmit.tag_ids"}],staticClass:"d-none",attrs:{id:"tag",type:"checkbox",name:"使用技術"},domProps:{value:r.id,checked:Array.isArray(t.worksSubmit.tag_ids)?t._i(t.worksSubmit.tag_ids,r.id)>-1:t.worksSubmit.tag_ids},on:{change:function(e){var o=t.worksSubmit.tag_ids,n=e.target,l=!!n.checked;if(Array.isArray(o)){var d=r.id,c=t._i(o,d);n.checked?c<0&&t.$set(t.worksSubmit,"tag_ids",o.concat([d])):c>-1&&t.$set(t.worksSubmit,"tag_ids",o.slice(0,c).concat(o.slice(c+1)))}else t.$set(t.worksSubmit,"tag_ids",l)}}}),t._v(" "),e("span",{staticClass:"badge border-transparent rounded-pill text-dark mb-1",class:{"bg-light":!t.worksSubmit.tag_ids.includes(r.id),"bg-primary":t.worksSubmit.tag_ids.includes(r.id)}},[t._v(t._s(r.name)+"\n            ")])])}))],2),t._v(" "),e("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.errors;return[e("div",{staticClass:"mb-4"},[e("label",{staticClass:"form-label",attrs:{for:"page_link"}},[t._v("線上觀看連結*")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.worksSubmit.online_url,expression:"worksSubmit.online_url"}],staticClass:"form-control",class:{"is-invalid":o[0]},attrs:{id:"page_link",name:"線上觀看連結",type:"text",placeholder:"https://codepen.io/..."},domProps:{value:t.worksSubmit.online_url},on:{input:function(e){e.target.composing||t.$set(t.worksSubmit,"online_url",e.target.value)}}}),t._v(" "),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(o[0]))])])]}}],null,!0)}),t._v(" "),e("div",{staticClass:"mb-4"},[e("label",{staticClass:"form-label",attrs:{for:"repo_link"}},[t._v("原始檔位置")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.worksSubmit.file_url,expression:"worksSubmit.file_url"}],staticClass:"form-control",attrs:{id:"repo_link",type:"text",placeholder:"https://drive.google.com/..."},domProps:{value:t.worksSubmit.file_url},on:{input:function(e){e.target.composing||t.$set(t.worksSubmit,"file_url",e.target.value)}}})]),t._v(" "),e("ValidationProvider",{attrs:{rules:"required|max:150"},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.errors;return[e("div",{staticClass:"mb-4"},[e("label",{staticClass:"form-label",attrs:{for:"description"}},[t._v("作品描述（限制 150 字）*")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.worksSubmit.description,expression:"worksSubmit.description"}],staticClass:"form-control",class:{"is-invalid":o[0]},attrs:{id:"description",name:"作品描述",rows:"3"},domProps:{value:t.worksSubmit.description},on:{input:function(e){e.target.composing||t.$set(t.worksSubmit,"description",e.target.value)}}}),t._v(" "),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(o[0]))])])]}}],null,!0)}),t._v(" "),e("ValidationProvider",{attrs:{rules:"excluded: 0"},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.errors;return[e("div",{staticClass:"mb-5"},[e("label",{staticClass:"form-label",attrs:{for:"cc"}},[t._v("\n              創用 CC*("),e("a",{attrs:{href:"http://creativecommons.tw/explore",target:"_blank"}},[t._v("版權說明")]),t._v(")\n            ")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.worksSubmit.creative_commons_id,expression:"worksSubmit.creative_commons_id"}],staticClass:"form-select",class:{"is-invalid":o[0]},attrs:{id:"cc",name:"創用 CC","aria-label":"創用 CC 下拉選單"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.worksSubmit,"creative_commons_id",e.target.multiple?r:r[0])}}},[e("option",{domProps:{value:0}},[t._v("請選擇版權")]),t._v(" "),t._l(t.worksData.creative_commons,(function(r){return e("option",{key:r.id,domProps:{value:r.id}},[t._v("\n                "+t._s(r.name)+"\n              ")])}))],2),t._v(" "),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(o[0]))])])]}}],null,!0)}),t._v(" "),e("div",{staticClass:"d-grid"},[e("button",{staticClass:"btn text-white fs-4 py-4 btn-bg font-cubicy",attrs:{type:"submit",disabled:o}},[t._v("\n            "+t._s(t.editStatus?"編輯投稿":"投稿")+"\n          ")])])],1),t._v(" "),e("div",{staticClass:"col-md-4 order-md-1 order-0"},[t._l(t.filterWorks,(function(r){return e("div",{key:r.id},[e("div",[t._l(r.images,(function(image){return e("div",{key:image.id,staticClass:"mb-4"},[image.is_cover?e("div",[e("img",{staticClass:"img-fluid",attrs:{src:image.image_url,alt:""}})]):t._e()])})),t._v(" "),e("p",{staticClass:"mb-1"},[t._v("採用設計稿")]),t._v(" "),e("p",[t._v("\n              已採用\n              "),e("a",{staticClass:"link-dark",attrs:{href:"/users/".concat(t.filterWorks[0].user_id),target:"_blank"}},[t._v(t._s(r.nickname)+" 的設計稿")])]),t._v(" "),e("small",{staticClass:"text-danger"},[t._v("投稿後無法更換採用的設計稿")])],2)])})),t._v(" "),t.filterWorks.length?t._e():e("div",[e("div",{staticClass:"mb-4"},[e("img",{staticClass:"img-fluid",attrs:{src:t.defaultImg,alt:""}})]),t._v(" "),e("p",[t._v("設計稿狀態"),e("small",{staticClass:"text-danger"})]),t._v(" "),e("p",{staticClass:"text-muted"},[t._v("未採用設計稿")]),t._v(" "),e("p",[e("small",{staticClass:"text-danger"},[e("i",{staticClass:"fas fa-exclamation-triangle"}),t._v(" 若有採用 UI\n              介面，請記得點擊採用，您的採用會是 UI 設計師的最大鼓勵！")])])])],2)])]}}])})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Alert:r(355).default})},585:function(t,e,r){"use strict";r.r(e);var o=r(479),n={components:{Frontend:r(400).default,UI:o.default},middleware:"routerAuth",meta:{requiresAuth:!0,close:!0},data:function(){return{userInfo:{individual_competition:{}},nowRole:"",userInfoName:"",roleId:0}},watch:{userInfoName:function(){"個人組/UI設計師"===this.userInfoName&&(this.nowRole="UI 設計師",this.roleId=1),"個人組/前端工程師"===this.userInfoName&&(this.nowRole="前端工程師",this.roleId=2)}},mounted:function(){this.userInfoName=window.sessionStorage.getItem("HbPeShUserVmYTyPe")}},l=r(29),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container text-white py-5"},["前端工程師"==t.nowRole?e("Frontend",{attrs:{"now-role":t.nowRole,"role-id":t.roleId}}):t._e(),t._v(" "),"UI 設計師"==t.nowRole?e("UI",{attrs:{"now-role":t.nowRole,"role-id":t.roleId}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);