(window.webpackJsonp=window.webpackJsonp||[]).push([[0,6],{355:function(t,e,r){"use strict";r.r(e);r(72);var o={name:"Alert",props:{message:{default:function(){return{}},type:Object}},data:function(){return{messages:[]}},watch:{message:function(){this.message.content&&this.addAlert()}},methods:{addAlert:function(){var t=this.message,style=t.style,e=t.icon,content=t.content;this.messages.push({style:style,icon:e,content:content}),this.removeAlert()},removeAlert:function(){var t=this;setTimeout((function(){t.messages.shift()}),6e3)}}},n=r(29),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",t._l(t.messages,(function(r,o){return e("div",{key:o,staticClass:"alert mb-6",class:"alert-".concat(r.style),attrs:{role:"alert"}},[e("p",{staticClass:"mb-0"},[e("i",{staticClass:"pe-1 fas",class:r.icon}),t._v(t._s(r.content))])])})),0)}),[],!1,null,null,null);e.default=component.exports},356:function(t,e,r){t.exports=r.p+"img/week1.8134a1f.png"},357:function(t,e,r){t.exports=r.p+"img/week2.1fad838.png"},358:function(t,e,r){t.exports=r.p+"img/week3.73b0e3c.png"},359:function(t,e,r){t.exports=r.p+"img/week4.71c10bb.png"},364:function(t,e,r){"use strict";var o=r(10);r(54),r(35),r(9),r(30),r(41),r(36),r(55),r(72);e.a={data:function(){return{worksId:0,worksData:{},worksTypes:{tags:[]},worksSubmit:{creative_commons_id:0,stage_id:0,tag_ids:[]},cacheImg:[],msg:{},stageList:[{id:1,name:"Week1 - The F2E 活動網站設計",status:!1,startTime:"",endTime:"",nowTime:""},{id:2,name:"Week2 - 今晚，我想來點點簽",status:!1,startTime:"",endTime:"",nowTime:""},{id:3,name:"Week3 - Scrum 新手村",status:!1,startTime:"",endTime:"",nowTime:""}],teamstageList:{frontend:[{id:1,name:"Week1 - The F2E 活動網站設計",status:!1,startTime:"",endTime:"",nowTime:""},{id:2,name:"Week2 - 今晚，我想來點點簽",status:!1,startTime:"",endTime:"",nowTime:""},{id:3,name:"Week3 - Scrum 新手村",status:!1,startTime:"",endTime:"",nowTime:""}],ui:[{id:1,name:"Week1 - The F2E 活動網站設計",status:!1,startTime:"",endTime:"",nowTime:""},{id:2,name:"Week2 - 今晚，我想來點點簽",status:!1,startTime:"",endTime:"",nowTime:""},{id:3,name:"Week3 - Scrum 新手村",status:!1,startTime:"",endTime:"",nowTime:""}]},worksInfo:{},stageListNum:[]}},mounted:function(){this.getWorks(),this.$route.params.id&&(this.worksId=this.$route.params.id,this.getWork(this.worksId))},computed:{postStatus:function(){var t=this,e=!1;return this.stageList.filter((function(e){return e.id===t.worksSubmit.stage_id})).forEach((function(t){t.nowTime>=t.endTime&&(e=!0)})),e}},methods:{getWork:function(t){var e=this;this.$axios.get("/v1/users/works/".concat(t)).then((function(t){e.worksInfo=t.data.works_info,e.worksInfo&&(e.worksSubmit.stage_id=e.worksInfo.stage_id,e.worksSubmit.online_url=e.worksInfo.online_url,e.worksInfo.file_url&&(e.worksSubmit.file_url=e.worksInfo.file_url),e.$set(e.worksSubmit,"tag_ids",e.worksInfo.tags.map((function(t){return t.id}))),e.worksInfo.ui_layout_online_url&&(e.worksSubmit.ui_layout_online_url=e.worksInfo.ui_layout_online_url),e.worksSubmit.creative_commons_id=e.worksInfo.creative_commons_id,e.worksSubmit.description=e.worksInfo.description,e.cacheImg=e.worksInfo.images)}))},getWorks:function(){var t=this;this.$axios.get("/v1/dropdowns/works").then((function(e){t.worksData=e.data.dropdowns,t.worksData.works_types.forEach((function(e){e.id===t.roleId&&(t.worksTypes=e)}))})).then((function(){t.worksData.stage_schedule.forEach((function(e){t.stageList.forEach((function(r){e.id===r.id&&t.roleId===e.works_types_id&&(r.startTime=new Date(e.start_time).getTime()/1e3,r.endTime=new Date(e.end_time).getTime()/1e3,r.nowTime=Math.floor(Date.now()/1e3))})),t.teamstageList.ui.forEach((function(r){e.id===r.id&&t.roleId===e.works_types_id&&(r.startTime=new Date(e.start_time).getTime()/1e3,r.endTime=new Date(e.end_time).getTime()/1e3,r.nowTime=Math.floor(Date.now()/1e3))})),t.teamstageList.frontend.forEach((function(r){e.id===r.id&&t.roleId===e.works_types_id&&(r.startTime=new Date(e.start_time).getTime()/1e3,r.endTime=new Date(e.end_time).getTime()/1e3,r.nowTime=Math.floor(Date.now()/1e3))}))}))})).then((function(){t.stageList.forEach((function(t){t.nowTime<=t.startTime&&(t.status=!0)})),t.teamstageList.ui.forEach((function(t){t.nowTime<=t.startTime&&(t.status=!0)})),t.teamstageList.frontend.forEach((function(t){t.nowTime<=t.startTime&&(t.status=!0)}))})).then((function(){t.getUserWorksList()}))},submitWork:function(t){var e=this,r="/v1/works/submit",n="post";if(this.worksSubmit.works_type_id=this.roleId,t&&(r="/v1/users/works/".concat(this.worksId),n="put",delete this.worksSubmit.stage_id,delete this.worksSubmit.works_type_id,delete this.uiImgList),(1===this.worksSubmit.works_type_id||3===this.worksSubmit.works_type_id)&&!this.uiImgList.length)return alert("你缺少上傳設計稿圖片唷！");this.$axios[n](r,this.worksSubmit).then(function(){var r=Object(o.a)(regeneratorRuntime.mark((function r(o){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(null===(n=e.uiImgList)||void 0===n||!n.length){r.next=3;break}return r.next=3,e.uploadImg(o.data.id);case 3:t&&(e.worksSubmit.stage_id=e.worksInfo.stage_id,e.worksSubmit.works_type_id=e.roleId),e.msg={style:"success",icon:"fa-check-circle",content:"投稿成功！"},setTimeout((function(){e.$router.push("/users/record")}),2e3);case 6:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()).catch((function(t){var r,o;e.msg={style:"danger",icon:"fa-exclamation-triangle",content:(null===(r=t.response)||void 0===r||null===(o=r.data)||void 0===o?void 0:o.message)||"投稿失敗！"}}))},getUserWorksList:function(){var t=this;this.$axios.get("/v1/users/works").then((function(e){var r=e.data.works_list;if(t.stageListId=r.map((function(t){return{works_type_id:t.works_type_id,stage:t.stage_id}})),t.stageListId.some((function(t){return 1===t.works_type_id||2===t.works_type_id}))){var o=t.stageListId.map((function(t){return t.stage}));t.stageList.forEach((function(t){var e=o.indexOf(t.id);t.id===o[e]&&(t.status=!0)}))}else{var n=t.stageListId.filter((function(e){return e.works_type_id===t.roleId}));if(!n.length)return;var l="ui";4===t.roleId&&(l="frontend"),t.teamstageList[l].forEach((function(t){var e=n.map((function(t){return t.stage})).indexOf(t.id);-1!==e&&t.id===n[e].stage&&(t.status=!0)}))}}))}}}},413:function(t,e,r){"use strict";var o=r(10);r(54),r(35),r(9),r(20),r(47),r(235),r(23),r(118),r(30);e.a={data:function(){return{coverImg:[],uiImgList:[],worksId:0}},mounted:function(){this.worksId=this.$route.params.id},computed:{defaultImg:function(){return 1===this.worksSubmit.stage_id?r(356):2===this.worksSubmit.stage_id?r(357):3===this.worksSubmit.stage_id?r(358):4===this.worksSubmit.stage_id?r(359):r(356)},coverUIImg:function(){var img=this.cacheImg.filter((function(t){return t.is_cover}))[0];return null==img?void 0:img.image_url}},methods:{uploadImg:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:o=e.uiImgList.length,i=0;case 2:if(!(i<o)){r.next=17;break}return r.prev=3,delete e.uiImgList[i].name,r.next=7,e.$axios.post("/v1/works/".concat(t,"/ui-image"),e.uiImgList[i]);case 7:e.worksId&&e.getWork(e.worksId),e.editStatus&&(e.uiImgList=e.$options.data().uiImgList),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(3),e.msg={style:"danger",icon:"fa-exclamation-triangle",content:r.t0.response.data.message||"圖片上傳失敗！"};case 14:i++,r.next=2;break;case 17:case"end":return r.stop()}}),r,null,[[3,11]])})))()},updateImg:function(t,e){var r=this,o="/v1/works/".concat(this.worksId,"/ui-image/").concat(e,"/cover"),n="put";t&&(o="/v1/works/".concat(this.worksId,"/ui-image/").concat(e),n="delete"),this.$axios[n](o).then((function(){r.getWork(r.worksId)})).catch((function(t){r.msg={style:"danger",icon:"fa-exclamation-triangle",content:t.response.data.message||"圖片上傳失敗！"}}))},readerImg:function(t){var e=this,r=t.target.files[0];if(r.size<3145728){var n=new FileReader;n.addEventListener("load",(function(data){var t=new Image;t.src=data.target.result,t.onload=Object(o.a)(regeneratorRuntime.mark((function o(){var image;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(1200!==Number(t.width)||628!==Number(t.height)){o.next=12;break}if(!(e.uiImgList.length+1>3)){o.next=4;break}return alert("圖片最多只能上傳3張。"),o.abrupt("return");case 4:if(image=data.target.result.split(",")[1],e.uiImgList.forEach((function(t){t.is_cover=!t.is_cover})),e.uiImgList.push({name:r.name,image:image,is_cover:!0}),!e.editStatus){o.next=10;break}return o.next=10,e.uploadImg(e.worksId);case 10:o.next=13;break;case 12:alert("圖片尺寸限制於固定尺寸寬 1200px、高 628px");case 13:case"end":return o.stop()}}),o)})))})),n.readAsDataURL(r)}else alert("圖片不得大於 3 MB")}}}},451:function(t,e,r){var content=r(502);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(46).default)("4c51a368",content,!0,{sourceMap:!1})},480:function(t,e,r){"use strict";r.r(e);r(9),r(41),r(35),r(20),r(47),r(56),r(73),r(75),r(36),r(55),r(241),r(235);var o=r(91),n=r(364),l=r(413),c={name:"CreateTeamUI",components:{ValidationObserver:o.a,ValidationProvider:o.b},mixins:[n.a,l.a],props:{nowRole:{default:"",type:String},roleId:{default:4,type:Number},editStatus:{default:!1,type:Boolean}}},d=(r(501),r(29)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-white py-5"},[e("Alert",{attrs:{message:t.msg}}),t._v(" "),e("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(r){var o=r.invalid;return[e("form",{staticClass:"row justify-content-center py-md-7",on:{submit:function(e){return e.preventDefault(),t.submitWork(t.editStatus)}}},[e("div",{staticClass:"col-md-4 order-md-0 order-1"},[e("h1",{staticClass:"fs-4 mb-4"},[t._v("投稿關卡 - "+t._s(t.nowRole))]),t._v(" "),e("ValidationProvider",{attrs:{rules:"excluded: 0"},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.errors;return[e("div",{staticClass:"mb-4"},[e("label",{staticClass:"form-label",attrs:{for:"weekLevel"}},[t._v("投稿關卡*")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.worksSubmit.stage_id,expression:"worksSubmit.stage_id"}],staticClass:"form-select mb-2",class:{"is-invalid":o[0]},attrs:{id:"weekLevel",name:"投稿關卡","aria-label":"投稿關卡下拉選單",disabled:t.editStatus||t.teamstageList.ui.every((function(t){return t.status}))},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.worksSubmit,"stage_id",e.target.multiple?r:r[0])}}},[e("option",{domProps:{value:0}},[t._v("請選擇要投稿的關卡")]),t._v(" "),t._l(t.teamstageList.ui,(function(r){return[!r.status||t.editStatus?e("option",{key:"stage".concat(r.id),domProps:{value:r.id}},[t._v(t._s(r.name))]):t._e()]}))],2),t._v(" "),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(o[0]))]),t._v(" "),e("p",[!t.editStatus&&t.postStatus?e("small",{staticClass:"text-danger"},[t._v("已超過投稿時間，此關卡為挑戰失敗")]):t._e()])])]}}],null,!0)}),t._v(" "),e("div",{staticClass:"mb-4"},[e("label",{staticClass:"form-label d-block",attrs:{for:"painter"}},[t._v("使用技術")]),t._v(" "),t._l(t.worksTypes.tags,(function(r){return e("label",{key:r.id,staticClass:"btn btn-sm px-0",attrs:{name:r.name}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.worksSubmit.tag_ids,expression:"worksSubmit.tag_ids"}],staticClass:"d-none",attrs:{id:"tag",type:"checkbox",name:"使用技術"},domProps:{value:r.id,checked:Array.isArray(t.worksSubmit.tag_ids)?t._i(t.worksSubmit.tag_ids,r.id)>-1:t.worksSubmit.tag_ids},on:{change:function(e){var o=t.worksSubmit.tag_ids,n=e.target,l=!!n.checked;if(Array.isArray(o)){var c=r.id,d=t._i(o,c);n.checked?d<0&&t.$set(t.worksSubmit,"tag_ids",o.concat([c])):d>-1&&t.$set(t.worksSubmit,"tag_ids",o.slice(0,d).concat(o.slice(d+1)))}else t.$set(t.worksSubmit,"tag_ids",l)}}}),t._v(" "),e("span",{staticClass:"badge border-transparent rounded-pill text-dark mb-1",class:{"bg-light":!t.worksSubmit.tag_ids.includes(r.id),"bg-primary":t.worksSubmit.tag_ids.includes(r.id)}},[t._v(t._s(r.name)+"\n            ")])])}))],2),t._v(" "),e("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.errors;return[e("div",{staticClass:"mb-4"},[e("label",{staticClass:"form-label",attrs:{for:"page_link"}},[t._v("線上標示文件*")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.worksSubmit.online_url,expression:"worksSubmit.online_url"}],staticClass:"form-control",class:{"is-invalid":o[0]},attrs:{id:"page_link",name:"線上標示文件",type:"text",placeholder:"https://xd.adobe.com/spec/..."},domProps:{value:t.worksSubmit.online_url},on:{input:function(e){e.target.composing||t.$set(t.worksSubmit,"online_url",e.target.value)}}}),t._v(" "),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(o[0]))])])]}}],null,!0)}),t._v(" "),e("div",{staticClass:"mb-4"},[e("label",{staticClass:"form-label",attrs:{for:"code_link"}},[t._v("線上觀看切版連結（CodePen 或 GitHub Pages）")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.worksSubmit.ui_layout_online_url,expression:"worksSubmit.ui_layout_online_url"}],staticClass:"form-control",attrs:{id:"code_link",type:"text",placeholder:"https://codepen.io/.."},domProps:{value:t.worksSubmit.ui_layout_online_url},on:{input:function(e){e.target.composing||t.$set(t.worksSubmit,"ui_layout_online_url",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"mb-4"},[e("label",{staticClass:"form-label",attrs:{for:"repo_link"}},[t._v("原始檔位置")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.worksSubmit.file_url,expression:"worksSubmit.file_url"}],staticClass:"form-control",attrs:{id:"repo_link",type:"text",placeholder:"https://drive.google.com/..."},domProps:{value:t.worksSubmit.file_url},on:{input:function(e){e.target.composing||t.$set(t.worksSubmit,"file_url",e.target.value)}}})]),t._v(" "),e("ValidationProvider",{attrs:{rules:"required|max:150"},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.errors;return[e("div",{staticClass:"mb-4"},[e("label",{staticClass:"form-label",attrs:{for:"description"}},[t._v("作品描述（限制 150 字）*")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.worksSubmit.description,expression:"worksSubmit.description"}],staticClass:"form-control",class:{"is-invalid":o[0]},attrs:{id:"description",name:"作品描述",rows:"3"},domProps:{value:t.worksSubmit.description},on:{input:function(e){e.target.composing||t.$set(t.worksSubmit,"description",e.target.value)}}}),t._v(" "),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(o[0]))])])]}}],null,!0)}),t._v(" "),e("ValidationProvider",{attrs:{rules:"excluded: 0"},scopedSlots:t._u([{key:"default",fn:function(r){var o=r.errors;return[e("div",{staticClass:"mb-5"},[e("label",{staticClass:"form-label",attrs:{for:"cc"}},[t._v("創用 CC*("),e("a",{attrs:{href:"http://creativecommons.tw/explore",target:"_blank"}},[t._v("版權說明")]),t._v(")")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.worksSubmit.creative_commons_id,expression:"worksSubmit.creative_commons_id"}],staticClass:"form-select",attrs:{id:"cc",name:"創用 CC","aria-label":"創用 CC 下拉選單"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.worksSubmit,"creative_commons_id",e.target.multiple?r:r[0])}}},[e("option",{domProps:{value:0}},[t._v("請選擇版權")]),t._v(" "),t._l(t.worksData.creative_commons,(function(r){return e("option",{key:r.id,domProps:{value:r.id}},[t._v(t._s(r.name))])}))],2),t._v(" "),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(o[0]))])])]}}],null,!0)}),t._v(" "),e("div",{staticClass:"d-grid"},[e("button",{staticClass:"btn text-white fs-4 py-4 btn-bg font-cubic",attrs:{type:"submit",disabled:o||!t.editStatus&&!t.uiImgList.length}},[t._v("\n            "+t._s(t.editStatus?"編輯投稿":"投稿")+"\n          ")])])],1),t._v(" "),e("div",{staticClass:"col-md-4 order-md-1 order-0"},[e("div",{staticClass:"mb-4"},[t.editStatus?[e("img",{staticClass:"img-fluid",attrs:{src:t.coverUIImg,alt:"設計稿圖片"}})]:[t.coverImg.length?e("img",{staticClass:"img-fluid",attrs:{src:"data:image/png;base64,".concat(t.coverImg),alt:"設計稿圖片"}}):e("img",{staticClass:"img-fluid",attrs:{src:t.defaultImg,alt:"設計稿圖片"}})]],2),t._v(" "),e("div",{staticClass:"mb-4"},[e("label",{staticClass:"form-label",attrs:{for:"formFile"}},[t._v(" 上傳設計稿圖片* ")]),t._v(" "),e("p",[e("small",{staticClass:"text-danger"},[t._v("至多三張，且需符合固定尺寸：寬 1200px、高 628px，限制大小 3\n              MB")])]),t._v(" "),t.editStatus?[t._l(t.cacheImg,(function(r,o){return e("div",{key:o,staticClass:"form-check mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:r.is_cover,expression:"item.is_cover"}],staticClass:"form-check-input",attrs:{id:"flexRadioDefault".concat(o),type:"radio",name:"flexRadioDefault"},domProps:{value:!0,checked:t._q(r.is_cover,!0)},on:{click:function(e){return t.updateImg(!1,r.id)},change:function(e){return t.$set(r,"is_cover",!0)}}}),t._v(" "),e("label",{staticClass:"form-check-label border d-flex align-items-center",attrs:{for:"flexRadioDefault".concat(o)}},[e("img",{staticClass:"img-fluid",attrs:{src:r.image_url,alt:r.name,width:"118"}}),t._v(" "),e("div",{staticClass:"px-2 py-4 d-flex justify-content-between w-100 text-truncate"},[e("p",{staticClass:"mb-0 text-truncate"},[t._v(t._s("設計稿圖片 ".concat(o+1)))]),t._v(" "),e("a",{staticClass:"link-muted",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.updateImg(!0,r.id)}}},[e("i",{staticClass:"far fa-times-circle"})])])]),t._v(" "),e("small",{staticClass:"text-primary"},[t._v("將此張圖片設定為封面")])])})),t._v(" "),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"custom-file-upload",attrs:{for:"upload"}},[e("i",{staticClass:"fas fa-plus-circle text-primary d-block"}),t._v(" 新增圖片\n              ")]),t._v(" "),e("input",{staticClass:"input",attrs:{id:"upload",type:"file"},on:{change:t.readerImg}})])]:[t._l(t.uiImgList,(function(r,o){return e("div",{key:o,staticClass:"form-check mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:r.is_cover,expression:"item.is_cover"}],staticClass:"form-check-input",attrs:{id:"flexRadioDefault".concat(o),type:"radio",name:"flexRadioDefault"},domProps:{value:!0,checked:t._q(r.is_cover,!0)},on:{click:function(e){t.coverImg=r.image},change:function(e){return t.$set(r,"is_cover",!0)}}}),t._v(" "),e("label",{staticClass:"form-check-label border d-flex align-items-center",attrs:{for:"flexRadioDefault".concat(o)}},[e("img",{staticClass:"img-fluid",attrs:{src:"data:image/png;base64,".concat(r.image),alt:r.name,width:"118"}}),t._v(" "),e("div",{staticClass:"px-2 py-4 d-flex justify-content-between w-100 text-truncate"},[e("p",{staticClass:"mb-0 text-truncate"},[t._v(t._s(r.name))]),t._v(" "),e("a",{staticClass:"link-muted",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.uiImgList.splice(o,1)}}},[e("i",{staticClass:"far fa-times-circle"})])])]),t._v(" "),e("small",{staticClass:"text-primary"},[t._v("將此張圖片設定為封面")])])})),t._v(" "),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"custom-file-upload",attrs:{for:"upload"}},[e("i",{staticClass:"fas fa-plus-circle text-primary d-block"}),t._v(" 新增圖片\n              ")]),t._v(" "),e("input",{staticClass:"input",attrs:{id:"upload",type:"file"},on:{change:t.readerImg}})])]],2)])])]}}])})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Alert:r(355).default})},501:function(t,e,r){"use strict";r(451)},502:function(t,e,r){var o=r(45)(!1);o.push([t.i,".input{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.custom-file-upload{border:1px dashed #fff;display:inline-block;width:100%;padding-top:8px;padding-bottom:8px;cursor:pointer;text-align:center}",""]),t.exports=o}}]);