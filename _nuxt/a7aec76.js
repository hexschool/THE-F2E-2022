(window.webpackJsonp=window.webpackJsonp||[]).push([[39,14],{379:function(t,e,r){var content=r(412);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(46).default)("423464d6",content,!0,{sourceMap:!1})},411:function(t,e,r){"use strict";r(379)},412:function(t,e,r){var n=r(45)(!1);n.push([t.i,'.avatar[data-v-68bd6024]{font-family:"Lato",sans-serif;width:128px;height:128px;display:block;position:relative;transition:border .15s ease-in}.avatar .edit-avatar[data-v-68bd6024]{background:var(--bs-white);width:40px;height:40px;border-radius:50%;right:0;display:flex;align-items:center;justify-content:center;text-decoration:none;cursor:pointer}.avatar .edit-avatar[data-v-68bd6024]:hover{background:var(--bs-gray-200)}.avatar img[data-v-68bd6024]{-o-object-fit:cover;object-fit:cover;border-radius:50%}.list-group-item[data-v-68bd6024]{background-color:transparent;border:0}.list-group-item.active[data-v-68bd6024],.list-group-item.nuxt-link-exact-active[data-v-68bd6024],.list-group-item[data-v-68bd6024]:hover{color:var(--bs-dark);background-color:var(--bs-gray-300)}.list-group-item.disabled[data-v-68bd6024]{cursor:not-allowed}.bg-gray-200[data-v-68bd6024]{background-color:var(--bs-gray-200)}',""]),t.exports=n},478:function(t,e,r){"use strict";r.r(e);r(23),r(74),r(20),r(36),r(55),r(235),r(9);var n={name:"PublicSideBar",props:{info:{default:function(){return{}},type:Object},week:{default:function(){return 0},type:Number},works:{default:function(){return[]},type:Array}},emits:["stageChange"],data:function(){return{user:{},nowWeek:0,worksList:[],menuList:[{id:1,title:"Week1 - The F2E 活動網站設計"},{id:2,title:"Week2 - 今晚，我想來點點簽"},{id:3,title:"Week3 - Scrum 新手村"}]}},computed:{defaultImage:function(){var t,e;return"個人組/前端工程師"===(null===(t=this.info.individual_competition)||void 0===t?void 0:t.name)?r(236):"個人組/UI設計師"===(null===(e=this.info.individual_competition)||void 0===e?void 0:e.name)?r(237):r(238)}},watch:{week:function(t){this.nowWeek=parseInt(t)}},mounted:function(){this.user=this.info,this.worksList=this.works,this.works.length>0&&(this.nowWeek=this.works[0].stage_id,this.$route.query.week&&(this.nowWeek=this.week))},methods:{checkStageHasData:function(t){return!this.worksList.some((function(e){return e.stage_id===t}))}}},o=(r(411),r(29)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"border py-6 px-6"},[e("div",{staticClass:"avatar mb-2 mx-auto"},[e("img",{staticClass:"w-100 h-100",attrs:{src:t.user.avatar||t.defaultImage,alt:"個人頭貼"}})]),t._v(" "),e("div",{staticClass:"text-center"},[e("p",{staticClass:"fw-bold mb-1"},[t._v(t._s(t.info.nickname||"姓名"))]),t._v(" "),t.info.individual_competition?e("p",{staticClass:"d-inline-block bg-white text-dark py-1 px-3 mb-2"},[t._v("\n        "+t._s(t.info.individual_competition.name.replace("/","｜"))+"\n      ")]):t._e(),t._v(" "),t.info.team_competition?e("p",{staticClass:"d-inline-block bg-white text-dark py-1 px-3 mb-2"},[t._v("\n        "+t._s(t.info.team_competition.name.replace("/","｜"))+"\n      ")]):t._e(),t._v(" "),t.info.medal_name?e("p",[e("img",{staticClass:"pe-1",attrs:{src:t.info.medal_image_url,alt:"徽章"}}),t._v("\n        "+t._s(t.info.medal_name)+"\n      ")]):t._e(),t._v(" "),e("hr"),t._v(" "),e("p",{staticClass:"text-start text-break"},[t._v(t._s(t.info.description))])]),t._v(" "),e("div",{staticClass:"list-group mb-5 mt-5 bg-white p-4 rounded-0"},t._l(t.menuList,(function(menu){return e("a",{key:"menuList_".concat(menu.id),staticClass:"list-group-item list-group-item-action p-4",class:{active:t.nowWeek===menu.id,disabled:t.checkStageHasData(menu.id)},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$emit("stageChange",menu.id)}}},[t._v(t._s(menu.title))])})),0),t._v(" "),t.info.facebook_url?e("a",{staticClass:"d-block text-center text-decoration-none",attrs:{href:t.info.facebook_url,target:"_blank"}},[e("i",{staticClass:"fab fa-facebook-square pe-1"}),t._v("Facebook")]):t._e()])])}),[],!1,null,"68bd6024",null);e.default=component.exports},582:function(t,e,r){"use strict";r.r(e);var n=r(10),o=(r(54),r(23),r(118),r(166),r(9),r(120),r(162),r(36),r(55),r(35),r(478)),c=r(556),d={name:"UserID",components:{PublicSideBar:o.default,Work:c.default},middleware:"routerAuth",meta:{requiresAuth:!1,close:!1},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,d,l,f,h,k,m,i,v,w,_,x;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=t.query,n=t.params,o=t.redirect,c=t.$axios,d=t.error,t.req,l=t.app,e.prev=1,f="",(f=l.$cookies.get("t_sInR5cCI6IkpXVCJ_token"))&&c.setHeader("Authorization","Bearer "+f),k="",m=(h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789").length,i=0;i<32;i+=1)k+=h.charAt(Math.floor(Math.random()*m));return e.next=12,c.get("/v1/users/".concat(n.id,"/info"),{headers:{Cookie:"xsrf-token=".concat(k),"xsrf-token":k}});case 12:return v=e.sent,{},_=0,x=0,v.data.works_list.length>0&&(r&&r.week&&r.type?(_=r.week,x=r.type):v.data.works_list.length>0?(_=v.data.works_list[0].stage_id,x=v.data.works_list[0].works_types_id):o("/works"),v.data.works_list.some((function(t){return t.stage_id===parseInt(_)&&t.works_types_id===parseInt(x)}))||o("/works")),w={title:"".concat(v.data.user_info.nickname," 的個人頁面 | The F2E 前端修練精神時光屋"),image:"https://firebasestorage.googleapis.com/v0/b/hexschool-courses.appspot.com/o/the-f2e-2022%2Fog-03.png?alt=media&token=52696f32-5ed8-4e82-823b-ffe1efcc5d57",description:v.data.user_info.description?v.data.user_info.description:""},e.abrupt("return",{headInfo:w,user:v.data.user_info,works:v.data.works_list,nowWeek:_,type:x});case 21:e.prev=21,e.t0=e.catch(1),d({statusCode:e.t0.response.status,message:e.t0.response.data.message,statusText:e.t0.response.statusText});case 24:case"end":return e.stop()}}),e,null,[[1,21]])})))()},data:function(){return{params:"",nowRole:"團體組",type:0,user:{},nowWeek:0}},head:function(){return{title:this.headInfo.title,meta:[{hid:"description",name:"description",content:this.headInfo.description},{hid:"og:image",property:"og:image",content:this.headInfo.image},{hid:"og:description",property:"og:description",content:this.headInfo.description},{hid:"og:title",property:"og:title",content:this.headInfo.title}]}},computed:{nowWorkData:function(){var t=this;return this.works.filter((function(e){return e.stage_id===parseInt(t.nowWeek)}))}},created:function(){this.params=this.$route.params.id},mounted:function(){this.getUserInfo(this.params)},methods:{getUserInfo:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n=e.$api.request,r.next=4,n.apiGetUserInfo(t);case 4:o=r.sent,data=o.data,e.user=data.user_info,e.works=data.works_list,r.next=12;break;case 10:r.prev=10,r.t0=r.catch(0);case 12:case"end":return r.stop()}}),r,null,[[0,10]])})))()},stageChange:function(t){this.nowWeek=t}}},l=r(29),component=Object(l.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-white"},[e("div",{staticClass:"container py-5"},[e("div",{staticClass:"row justify-content-center my-md-7"},[e("PublicSideBar",{attrs:{info:t.user,works:t.works,week:parseInt(t.nowWeek)},on:{stageChange:t.stageChange}}),t._v(" "),e("Work",{attrs:{info:t.user,"now-work":t.nowWorkData,week:parseInt(t.nowWeek),type:parseInt(t.type)}})],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);