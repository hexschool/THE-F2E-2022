(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{356:function(t,e,n){t.exports=n.p+"img/week1.8134a1f.png"},357:function(t,e,n){t.exports=n.p+"img/week2.1fad838.png"},358:function(t,e,n){t.exports=n.p+"img/week3.73b0e3c.png"},359:function(t,e,n){t.exports=n.p+"img/week4.71c10bb.png"},363:function(t,e,n){var content=n(370);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("f73e7bbe",content,!0,{sourceMap:!1})},369:function(t,e,n){"use strict";n(363)},370:function(t,e,n){var r=n(45)(!1);r.push([t.i,".scrollBar[data-v-6c812d12]::-webkit-scrollbar{display:none}.overlay[data-v-6c812d12]{background:linear-gradient(180deg,transparent 49.31%,#000 93.06%);background-size:100%;background-position-y:bottom;background-repeat:no-repeat;height:185px}",""]),t.exports=r},373:function(t,e,n){"use strict";n.r(e);n(20),n(235),n(56),n(41),n(72);var r={name:"Card",props:{type:{type:String,default:""},worksList:{type:Array,default:function(){return[]}},userType:{type:Number,default:0},colNum:{type:Number,default:4}},data:function(){return{authStatus:!1}},created:function(){this.$cookies.get("t_sInR5cCI6IkpXVCJ_token")&&(this.authStatus=!0)},mounted:function(){var t=this;[].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map((function(t){return new bootstrap.Popover(t)})),"index"===this.type&&this.worksList.length>0&&setTimeout((function(){var element=document.querySelector("#gtm-work-view div");element&&(element.classList.contains("work-view-kdan")?t.$gtag("event","work-view-kdan"):element.classList.contains("work-view-titan")?t.$gtag("event","work-view-titan"):element.classList.contains("work-view-block-studio")&&t.$gtag("event","work-view-block-studio"))}),4e3)},methods:{renderName:function(t){return 1===t?"UI Design":2===t?"Frontend":3===t?"Team-UI":4===t?"Team-Frontend":"發生系統錯誤"},popperName:function(t){return 1===t?"UI 設計":2===t?"前端工程":3===t?"團體組 UI 設計":4===t?"團體組前端工程":"發生系統錯誤"},defaultImg:function(t){return 1===t?n(356):2===t?n(357):3===t?n(358):4===t?n(359):void 0},defaultAvaterImg:function(t){return n(1===t?237:2===t?236:238)},onlineName:function(t){return 1===t||3===t?"線上標示文件":2===t||4===t?"線上觀看連結":"發生系統錯誤"}}},o=(n(369),n(29)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},["index"===t.type?e("div",{staticClass:"work-view col-lg-4 col-md-6 mb-4",attrs:{id:"gtm-work-view"}}):t._e(),t._v(" "),t._l(t.worksList,(function(n){return e("div",{key:n.id,class:"col-lg-".concat(t.colNum," col-md-6 mb-4")},[e("div",{staticClass:"card h-100 py-3"},[e("div",{staticClass:"card-body d-flex flex-column"},[e("div",[e("nuxt-link",{staticClass:"h-100",attrs:{to:"/users/".concat(n.user_id),target:"_blank"}},[e("div",{staticClass:"position-relative"},[t._l(n.images,(function(n,r){return[n.is_cover?e("img",{key:"img".concat(r),staticClass:"img-fluid",attrs:{src:n.image_url,alt:"設計稿圖片"}}):t._e()]})),t._v(" "),n.images.length?t._e():e("img",{staticClass:"img-fluid",attrs:{src:t.defaultImg(n.stage_id),alt:"設計稿圖片"}}),t._v(" "),e("div",{staticClass:"overlay w-100 position-absolute bottom-0"},[t.authStatus?e("div",{staticClass:"d-flex align-items-center position-absolute bottom-0 end-0 pe-3 mb-2"},[e("span",{staticClass:"text-white text-decoration-none me-2 d-flex align-items-center"},[e("p",{staticClass:"text-white pe-1 mb-0"},[t._v(t._s(n.upvotes))]),t._v(" "),e("i",{staticClass:"fa-heart me-1 link-white fs-5",class:n.is_upvotes?"fas":"far"})]),t._v(" "),1===n.works_types_id&&2===t.userType?[e("span",{staticClass:"link-white text-decoration-none d-flex align-items-center"},[e("p",{staticClass:"text-white pe-1 mb-0"},[t._v(t._s(n.uses||0))]),t._v(" "),e("i",{staticClass:"far fa-bookmark link-white fs-5",class:n.is_use?"fas":"far"})])]:t._e()],2):t._e()])],2)]),t._v(" "),e("div",{staticClass:"d-flex"},[e("p",{staticClass:"border-start border-3 ps-1 mb-0",class:{"border-warning":1===n.works_types_id,"border-info":2===n.works_types_id,"border-primary":3===n.works_types_id||4===n.works_types_id}},[t._v("\n              Week"+t._s(n.stage_id)+"\n            ")]),t._v(" "),e("p",{staticClass:"ps-2 mb-0",class:{"text-warning":1===n.works_types_id,"text-info":2===n.works_types_id,"text-primary":3===n.works_types_id||4===n.works_types_id}},[t._v("\n              "+t._s(t.popperName(n.works_types_id))+"\n            ")])]),t._v(" "),e("nuxt-link",{staticClass:"d-flex align-items-center mb-2 link-white text-decoration-none",attrs:{to:"/users/".concat(n.user_id),target:"_blank"}},[1!==n.works_types_id||2!==n.works_types_id?e("p",{staticClass:"mb-0 text-truncate"},[t._v("\n              "+t._s(n.nickname)+"\n            ")]):e("p",{staticClass:"mb-0 mx-3"},[t._v(t._s(n.nickname))])])],1),t._v(" "),e("div",{staticClass:"d-flex flex-column",class:{"mt-auto":n.tags.length,"h-100":!n.tags.length}},[e("div",{class:{"mb-auto":!n.tags.length}},[e("div",{staticClass:"mb-2 pb-2 d-flex overflow-auto scrollBar",class:{"border-bottom":n.tags.length}},t._l(n.tags,(function(n){return e("div",{key:"tag".concat(n.id),staticClass:"me-1",attrs:{href:"#"}},[e("span",{staticClass:"badge rounded-pill bg-light text-dark"},[t._v(t._s(n.name))])])})),0)]),t._v(" "),e("div",[e("a",{staticClass:"btn btn-white",class:n.online_url?"":"disabled",attrs:{href:n.online_url,target:"_blank"}},[t._v(t._s(t.onlineName(n.works_types_id))),e("i",{staticClass:"fas fa-external-link-alt ps-2"})]),t._v(" "),e("a",{staticClass:"btn btn-white",class:n.file_url?"":"disabled btn-muted",attrs:{href:n.file_url,target:"_blank"}},[t._v("原始檔"),e("i",{staticClass:"fas fa-external-link-alt ps-2"})])])])])])])}))],2)}),[],!1,null,"6c812d12",null);e.default=component.exports}}]);