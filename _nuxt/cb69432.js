(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{397:function(t,e,n){t.exports=n.p+"img/team_ui.8f63729.png"},398:function(t,e,n){t.exports=n.p+"img/team_frontend.b0fde01.png"},557:function(t,e,n){"use strict";n.r(e);var r=n(10),c=(n(54),{mixins:[{data:function(){return{teamAuth:!1}},created:function(){this.getUserInfo()},methods:{getUserInfo:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.$api.request,e.next=4,n.apiGetUsersInfo();case 4:r=e.sent,data=r.data,data.user_info.team_competition.is_leader||t.$router.push("/users"),t.teamAuth=!0,e.next=13;break;case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])})))()}}}],middleware:"routerAuth",meta:{requiresAuth:!0,close:!0},methods:{goRouter:function(t,e){this.$localStorage.set("team",{id:t,status:e}),this.$router.push("/works/team/create")}}}),o=n(29),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container text-white py-5"},[e("div",{staticClass:"row justify-content-center my-md-7"},[e("h2",{staticClass:"fs-4 text-center mb-7"},[t._v("投稿關卡 - 團體組")]),t._v(" "),e("div",{staticClass:"col-md-4 col-lg-3 d-flex justify-content-center mb-5 mb-md-0"},[e("a",{staticClass:"text-decoration-none",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.goRouter(3,!1)}}},[e("img",{staticClass:"img-fluid mb-2",staticStyle:{height:"306px","object-fit":"contain"},attrs:{src:n(397),alt:""}}),t._v(" "),t._m(0)])]),t._v(" "),e("div",{staticClass:"col-md-4 col-lg-3 d-flex justify-content-center"},[e("a",{staticClass:"text-decoration-none",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.goRouter(4,!1)}}},[e("img",{staticClass:"img-fluid mb-2",staticStyle:{height:"306px","object-fit":"contain"},attrs:{src:n(398),alt:""}}),t._v(" "),t._m(1)])])])])}),[function(){var t=this._self._c;return t("h3",{staticClass:"fs-5 text-center"},[this._v("\n          投稿團體組 UI"),t("i",{staticClass:"fas fa-arrow-right ps-2"})])},function(){var t=this._self._c;return t("h3",{staticClass:"fs-5 text-center"},[this._v("\n          投稿團體組前端"),t("i",{staticClass:"fas fa-arrow-right ps-2"})])}],!1,null,null,null);e.default=component.exports}}]);