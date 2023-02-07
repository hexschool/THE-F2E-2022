(window.webpackJsonp=window.webpackJsonp||[]).push([[48,6,16],{355:function(t,e,n){"use strict";n.r(e);n(72);var r={name:"Alert",props:{message:{default:function(){return{}},type:Object}},data:function(){return{messages:[]}},watch:{message:function(){this.message.content&&this.addAlert()}},methods:{addAlert:function(){var t=this.message,style=t.style,e=t.icon,content=t.content;this.messages.push({style:style,icon:e,content:content}),this.removeAlert()},removeAlert:function(){var t=this;setTimeout((function(){t.messages.shift()}),6e3)}}},o=n(29),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",t._l(t.messages,(function(n,r){return e("div",{key:r,staticClass:"alert mb-6",class:"alert-".concat(n.style),attrs:{role:"alert"}},[e("p",{staticClass:"mb-0"},[e("i",{staticClass:"pe-1 fas",class:n.icon}),t._v(t._s(n.content))])])})),0)}),[],!1,null,null,null);e.default=component.exports},356:function(t,e,n){t.exports=n.p+"img/week1.8134a1f.png"},357:function(t,e,n){t.exports=n.p+"img/week2.1fad838.png"},358:function(t,e,n){t.exports=n.p+"img/week3.73b0e3c.png"},359:function(t,e,n){t.exports=n.p+"img/week4.71c10bb.png"},363:function(t,e,n){var content=n(370);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("f73e7bbe",content,!0,{sourceMap:!1})},369:function(t,e,n){"use strict";n(363)},370:function(t,e,n){var r=n(45)(!1);r.push([t.i,".scrollBar[data-v-6c812d12]::-webkit-scrollbar{display:none}.overlay[data-v-6c812d12]{background:linear-gradient(180deg,transparent 49.31%,#000 93.06%);background-size:100%;background-position-y:bottom;background-repeat:no-repeat;height:185px}",""]),t.exports=r},373:function(t,e,n){"use strict";n.r(e);n(20),n(235),n(56),n(41),n(72);var r={name:"Card",props:{type:{type:String,default:""},worksList:{type:Array,default:function(){return[]}},userType:{type:Number,default:0},colNum:{type:Number,default:4}},data:function(){return{authStatus:!1}},created:function(){this.$cookies.get("t_sInR5cCI6IkpXVCJ_token")&&(this.authStatus=!0)},mounted:function(){var t=this;[].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map((function(t){return new bootstrap.Popover(t)})),"index"===this.type&&this.worksList.length>0&&setTimeout((function(){var element=document.querySelector("#gtm-work-view div");element&&(element.classList.contains("work-view-kdan")?t.$gtag("event","work-view-kdan"):element.classList.contains("work-view-titan")?t.$gtag("event","work-view-titan"):element.classList.contains("work-view-block-studio")&&t.$gtag("event","work-view-block-studio"))}),4e3)},methods:{renderName:function(t){return 1===t?"UI Design":2===t?"Frontend":3===t?"Team-UI":4===t?"Team-Frontend":"發生系統錯誤"},popperName:function(t){return 1===t?"UI 設計":2===t?"前端工程":3===t?"團體組 UI 設計":4===t?"團體組前端工程":"發生系統錯誤"},defaultImg:function(t){return 1===t?n(356):2===t?n(357):3===t?n(358):4===t?n(359):void 0},defaultAvaterImg:function(t){return n(1===t?237:2===t?236:238)},onlineName:function(t){return 1===t||3===t?"線上標示文件":2===t||4===t?"線上觀看連結":"發生系統錯誤"}}},o=(n(369),n(29)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},["index"===t.type?e("div",{staticClass:"work-view col-lg-4 col-md-6 mb-4",attrs:{id:"gtm-work-view"}}):t._e(),t._v(" "),t._l(t.worksList,(function(n){return e("div",{key:n.id,class:"col-lg-".concat(t.colNum," col-md-6 mb-4")},[e("div",{staticClass:"card h-100 py-3"},[e("div",{staticClass:"card-body d-flex flex-column"},[e("div",[e("nuxt-link",{staticClass:"h-100",attrs:{to:"/users/".concat(n.user_id),target:"_blank"}},[e("div",{staticClass:"position-relative"},[t._l(n.images,(function(n,r){return[n.is_cover?e("img",{key:"img".concat(r),staticClass:"img-fluid",attrs:{src:n.image_url,alt:"設計稿圖片"}}):t._e()]})),t._v(" "),n.images.length?t._e():e("img",{staticClass:"img-fluid",attrs:{src:t.defaultImg(n.stage_id),alt:"設計稿圖片"}}),t._v(" "),e("div",{staticClass:"overlay w-100 position-absolute bottom-0"},[t.authStatus?e("div",{staticClass:"d-flex align-items-center position-absolute bottom-0 end-0 pe-3 mb-2"},[e("span",{staticClass:"text-white text-decoration-none me-2 d-flex align-items-center"},[e("p",{staticClass:"text-white pe-1 mb-0"},[t._v(t._s(n.upvotes))]),t._v(" "),e("i",{staticClass:"fa-heart me-1 link-white fs-5",class:n.is_upvotes?"fas":"far"})]),t._v(" "),1===n.works_types_id&&2===t.userType?[e("span",{staticClass:"link-white text-decoration-none d-flex align-items-center"},[e("p",{staticClass:"text-white pe-1 mb-0"},[t._v(t._s(n.uses||0))]),t._v(" "),e("i",{staticClass:"far fa-bookmark link-white fs-5",class:n.is_use?"fas":"far"})])]:t._e()],2):t._e()])],2)]),t._v(" "),e("div",{staticClass:"d-flex"},[e("p",{staticClass:"border-start border-3 ps-1 mb-0",class:{"border-warning":1===n.works_types_id,"border-info":2===n.works_types_id,"border-primary":3===n.works_types_id||4===n.works_types_id}},[t._v("\n              Week"+t._s(n.stage_id)+"\n            ")]),t._v(" "),e("p",{staticClass:"ps-2 mb-0",class:{"text-warning":1===n.works_types_id,"text-info":2===n.works_types_id,"text-primary":3===n.works_types_id||4===n.works_types_id}},[t._v("\n              "+t._s(t.popperName(n.works_types_id))+"\n            ")])]),t._v(" "),e("nuxt-link",{staticClass:"d-flex align-items-center mb-2 link-white text-decoration-none",attrs:{to:"/users/".concat(n.user_id),target:"_blank"}},[1!==n.works_types_id||2!==n.works_types_id?e("p",{staticClass:"mb-0 text-truncate"},[t._v("\n              "+t._s(n.nickname)+"\n            ")]):e("p",{staticClass:"mb-0 mx-3"},[t._v(t._s(n.nickname))])])],1),t._v(" "),e("div",{staticClass:"d-flex flex-column",class:{"mt-auto":n.tags.length,"h-100":!n.tags.length}},[e("div",{class:{"mb-auto":!n.tags.length}},[e("div",{staticClass:"mb-2 pb-2 d-flex overflow-auto scrollBar",class:{"border-bottom":n.tags.length}},t._l(n.tags,(function(n){return e("div",{key:"tag".concat(n.id),staticClass:"me-1",attrs:{href:"#"}},[e("span",{staticClass:"badge rounded-pill bg-light text-dark"},[t._v(t._s(n.name))])])})),0)]),t._v(" "),e("div",[e("a",{staticClass:"btn btn-white",class:n.online_url?"":"disabled",attrs:{href:n.online_url,target:"_blank"}},[t._v(t._s(t.onlineName(n.works_types_id))),e("i",{staticClass:"fas fa-external-link-alt ps-2"})]),t._v(" "),e("a",{staticClass:"btn btn-white",class:n.file_url?"":"disabled btn-muted",attrs:{href:n.file_url,target:"_blank"}},[t._v("原始檔"),e("i",{staticClass:"fas fa-external-link-alt ps-2"})])])])])])])}))],2)}),[],!1,null,"6c812d12",null);e.default=component.exports},449:function(t,e,n){var content=n(498);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("7125a500",content,!0,{sourceMap:!1})},497:function(t,e,n){"use strict";n(449)},498:function(t,e,n){var r=n(45)(!1);r.push([t.i,".dropdown-height[data-v-46937d92]{max-height:300px;overflow:scroll}",""]),t.exports=r},584:function(t,e,n){"use strict";n.r(e);n(23),n(164),n(20);var r=n(10),o=(n(9),n(30),n(54),n(373)),c=n(355),l={name:"Works",components:{Card:o.default,Alert:c.default},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,l,d,v,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$api,r=t.error,e.prev=1,o=n.request,e.next=5,o.apiGetWorksDropdown();case 5:return c=e.sent,e.next=8,o.apiGetWorkGroupList();case 8:return l=e.sent,e.abrupt("return",{dropdowns:c.data.dropdowns,grouplist:l.data.works_group_list});case 12:e.prev=12,e.t0=e.catch(1),r({statusCode:(null===(d=e.t0.response)||void 0===d?void 0:d.status)||500,message:(null===(v=e.t0.response)||void 0===v?void 0:v.data.message)||{},statusText:(null===(h=e.t0.response)||void 0===h?void 0:h.statusText)||"伺服器發生錯誤。"});case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))()},data:function(){return{nowRole:"前端個人組",worksList:[],cacheSearch:[],search:{sortBy:0,worksTypeId:0,stageId:0,tagId:0},searchText:{sortBy:"",worksType:"",stage:"",tag:""},pagination:{total_page:0},userType:0,msg:{}}},computed:{worksTagsList:function(){var t=[];return this.dropdowns.works_types.forEach((function(e){"個人組-前端"===e.name&&t.push({id:e.id,name:"前端個人組",sorts:e.sorts,tags:e.tags}),"個人組-UI"===e.name&&t.push({id:e.id,name:"UI 設計個人組",sorts:e.sorts,tags:e.tags}),"團體組-UI"===e.name&&t.push({id:e.id,name:"團體組 UI",sorts:e.sorts,tags:e.tags}),"團體組-前端"===e.name&&t.push({id:e.id,name:"團體組 前端",sorts:e.sorts,tags:e.tags})})),t}},mounted:function(){this.getWorksList(),"個人組/前端工程師"===sessionStorage.getItem("HbPeShUserVmYTyPe")&&(this.userType=2)},methods:{getWorksList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.search.page=e;var n=this.searchUrl();this.$axios.get(n).then((function(e){t.worksList=e.data.works_list,t.pagination=e.data.pagination}))},defaultSearch:function(){this.search=this.$options.data().search,this.searchText.worksType="全部組別"},switchSearch:function(t,data){this.search.sortBy=0,this.search.stageId=0,this.search.tagId=0,this.search.worksTypeId=t,this.cacheSearch=data,this.searchText.worksType=data.name,this.searchText.stage="全部關卡",this.searchText.tag="全部Tags",this.searchText.sortBy="預設排序"},searchUrl:function(){var t=this.search,e=t.page,n=t.worksTypeId,r=t.stageId,o=t.tagId,c=t.sortBy,l="/v1/works/list?page=".concat(e);return n&&(l+="&works_type_id=".concat(n)),r&&(l+="&stage_id=".concat(r)),o&&(l+="&tag_id=".concat(o)),c&&(l+="&sort_by=".concat(c)),l},isUpvotes:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,c,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.id,o=t.status,c="post",o&&(c="delete"),n.prev=3,l=e.$api.request,n.next=7,l.apiIsUpvotes(c,r);case 7:e.getWorksList(e.search.page),n.next=12;break;case 10:n.prev=10,n.t0=n.catch(3);case 12:case"end":return n.stop()}}),n,null,[[3,10]])})))()},isUse:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,c,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.id,o=t.status,c="post",o&&(c="delete"),n.prev=3,l=e.$api.request,n.next=7,l.apiIsUse(c,r);case 7:e.getWorksList(e.search.page),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(3),window.scrollTo(0,0),e.msg={style:"danger",icon:"fa-exclamation-triangle",content:n.t0.response.data.message||"採用失敗"};case 14:case"end":return n.stop()}}),n,null,[[3,10]])})))()}}},d=l,v=(n(497),n(29)),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container text-white"},[e("Alert",{attrs:{message:t.msg}}),t._v(" "),e("div",{staticClass:"py-7"},[e("h1",{staticClass:"mb-4 fs-2"},[t._v("作品列表")]),t._v(" "),e("div",{staticClass:"row justify-content-end"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"d-flex justify-content-start justify-content-md-end flex-wrap"},[e("div",{staticClass:"dropdown"},[e("button",{staticClass:"btn bg-transparent border-0 text-white dropdown-toggle",attrs:{type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}},[t._v("\n              "+t._s(t.searchText.worksType||"組別")+"\n            ")]),t._v(" "),e("ul",{staticClass:"dropdown-menu"},[e("li",[e("button",{staticClass:"dropdown-item",class:0===t.search.worksTypeId?"active":"",attrs:{type:"button","aria-current":"true"},on:{click:t.defaultSearch}},[t._v("\n                  全部組別\n                  "),e("span",{staticClass:"badge rounded-pill",class:0!==t.search.worksTypeId?"bg-dark":"bg-white text-dark"},[t._v(t._s(t.grouplist.all)+"\n                  ")])])]),t._v(" "),t._l(t.worksTagsList,(function(n,r){return e("li",{key:r},[e("button",{staticClass:"dropdown-item",class:t.search.worksTypeId===n.id?"active":"",attrs:{type:"button"},on:{click:function(e){t.switchSearch(t.search.worksTypeId=n.id,n)}}},[t._v("\n                  "+t._s(n.name)+"\n                  "),e("span",{staticClass:"badge rounded-pill bg-dark",class:t.search.worksTypeId===n.id?"bg-white text-dark":"bg-dark"},[t._v(t._s(t.grouplist[n.id]))])])])}))],2)]),t._v(" "),e("div",{staticClass:"dropdown"},[e("button",{staticClass:"btn bg-transparent border-0 text-white dropdown-toggle",attrs:{type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}},[t._v("\n              "+t._s(t.searchText.stage||"關卡")+"\n            ")]),t._v(" "),e("ul",{staticClass:"dropdown-menu"},[e("li",[e("button",{staticClass:"dropdown-item",class:0===t.search.stageId?"active":"",attrs:{type:"button"},on:{click:function(e){t.search.stageId=0,t.searchText.stage="全部關卡"}}},[t._v("\n                  全部關卡\n                ")])]),t._v(" "),e("li",[e("button",{staticClass:"dropdown-item",class:1===t.search.stageId?"active":"",attrs:{type:"button"},on:{click:function(e){t.search.stageId=1,t.searchText.stage="Week1"}}},[t._v("\n                Week1 - The F2E 活動網站設計\n                ")])]),t._v(" "),e("li",[e("button",{staticClass:"dropdown-item",class:2===t.search.stageId?"active":"",attrs:{type:"button"},on:{click:function(e){t.search.stageId=2,t.searchText.stage="Week2"}}},[t._v("\n                Week2 - 今晚，我想來點點簽\n                ")])]),t._v(" "),e("li",[e("button",{staticClass:"dropdown-item",class:3===t.search.stageId?"active":"",attrs:{type:"button"},on:{click:function(e){t.search.stageId=3,t.searchText.stage="Week3"}}},[t._v("\n                Week3 - Scrum 新手村\n                ")])])])]),t._v(" "),t.search.worksTypeId?e("div",{staticClass:"d-flex"},[e("div",{staticClass:"dropdown"},[e("button",{staticClass:"btn bg-transparent border-0 text-white dropdown-toggle",attrs:{type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}},[t._v("\n                "+t._s(t.searchText.sortBy||"排序")+"\n              ")]),t._v(" "),e("ul",{staticClass:"dropdown-menu"},[e("li",[e("button",{staticClass:"dropdown-item",class:0===t.search.sortBy?"active":"",attrs:{type:"button"},on:{click:function(e){t.search.sortBy=0,t.searchText.sortBy="預設排序"}}},[t._v("\n                    預設排序\n                  ")])]),t._v(" "),t._l(t.cacheSearch.sorts,(function(n,r){return e("li",{key:r},[e("button",{staticClass:"dropdown-item",class:t.search.sortBy===n.name?"active":"",attrs:{type:"button"},on:{click:function(e){t.search.sortBy=n.name,t.searchText.sortBy=n.cht_name}}},[t._v("\n                    "+t._s(n.cht_name)+"\n                  ")])])}))],2)]),t._v(" "),e("div",{staticClass:"dropdown"},[e("button",{staticClass:"btn bg-transparent border-0 text-white dropdown-toggle",attrs:{type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}},[t._v("\n                "+t._s(t.searchText.tag||"Tags")+" \n              ")]),t._v(" "),e("ul",{staticClass:"dropdown-menu dropdown-height"},[e("li",[e("button",{staticClass:"dropdown-item",class:0===t.search.tagId?"active":"",attrs:{type:"button"},on:{click:function(e){t.search.tagId=0,t.searchText.tag="全部Tags"}}},[t._v("\n                    全部Tags\n                  ")])]),t._v(" "),t._l(t.cacheSearch.tags,(function(n){return e("li",{key:n.id},[e("button",{staticClass:"dropdown-item",class:t.search.tagId===n.id?"active":"",attrs:{type:"button"},on:{click:function(e){t.search.tagId=n.id,t.searchText.tag=n.name}}},[t._v("\n                    "+t._s(n.name)+"\n                  ")])])}))],2)])]):t._e(),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.getWorksList(1)}}},[t._v("\n            搜尋\n          ")]),t._v(" "),e("div",{attrs:{id:"gtmUse"}})])])]),t._v(" "),e("div",{staticClass:"mt-md-0 mt-3"},[t.worksList.length?e("div",[e("Card",{attrs:{type:"index","user-type":t.userType,"works-list":t.worksList},on:{isUpvotes:t.isUpvotes,isUse:t.isUse}}),t._v(" "),e("div",{staticClass:"d-flex justify-content-center"},[e("Paginate",{attrs:{"page-count":t.pagination.total_page,"click-handler":t.getWorksList,"prev-text":"&laquo;","next-text":"&raquo;","container-class":"pagination","page-class":"page-item","page-link-class":"page-link","prev-link-class":"page-link","next-link-class":"page-link"}})],1)],1):e("p",[t._v("暫時沒有作品內容")])])])],1)}),[],!1,null,"46937d92",null);e.default=component.exports;installComponents(component,{Alert:n(355).default})}}]);