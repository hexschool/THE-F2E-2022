(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{374:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n(121);var o=n(165),l=n(94);function h(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||Object(o.a)(t)||Object(l.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},380:function(t,e,n){t.exports=n.p+"img/F2E-1.4a31883.png"},381:function(t,e,n){t.exports=n.p+"img/F2E-2.a498c37.png"},382:function(t,e,n){t.exports=n.p+"img/F2E-3.321b165.png"},383:function(t,e,n){t.exports=n.p+"img/ike.8079ed5.png"},384:function(t,e,n){t.exports=n.p+"img/luca.e8f634d.png"},388:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABvCAYAAABhAadbAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN3SURBVHgB7d0xaBNRHMfxf1ttaDF4EBHapZkigq2Li4KSkEGHiplFaLLUoQWlbjrYya2Ck+gUobgqxkFccihYx+AiDYJXlQaHQKSQkiCN99qtee/wHdffRfv7wCHkeJR8kcvjvddUJFpF/+pFeKXF3tcIf35VIjYsBMXgYAwOxuBgDA52RMJZNrx+1jQgP70o46PH+17/3vwkNa9iGnbbv1pix9G9mEpOyYXMDe2AD/VVaW5t6G6lxfxey/7liaWwwe+Lpfz0wu6b3m9tfTUo+C2JyAn/Z8+eu6e9t775Pii46b26EiI4HylgDA7G4GAMDsbgYEMSTk/34nl/2lXMPZWo3H1+2jR7MHpw/bN2NhRG3Z+9rFQum27nZG+mYoX/w8EYHIzBwRgcjMHBGByMwcEYHIzBwRgcjMHBGBwsaItN7SdGtsUVxp2rb8RWVAtXf+GF6PdbXf8qmQYFBVebsWmJETBeGI7oN6zTQYP4SAFjcDAGB2NwMPWhWTTcM56iMp1gykxekv9J0Gmt2kZF2p1fultpMTd9qfY0e2Lpyc22HHYrr65IvfFOLOX4SAFjcDAGB2NwMAYHM85S8mcWJD+zqB2EWuOYXUpIMmV3OOz1w65sNXfkoLU7Ldnu9k8L1WmtsjtvGpYzLl6NJ5zYF49UbNvgKKqPuvZLJb8FjuMjBYzBwRgcjMHBwv4WW2TUh+JEZkR7LzGmH+N5nriuq723Vvst3e3+iVfq2JS/uHZR4hZ78InMsGTnjlqNUbFLpZLVmFP+SubSpP0eadT4SAFjcDAGB2NwMAYHY3AwBgdjcDAGB2NwMAYHi30tJQzHcSSbzdoMkZNjMzII/snghUJh97KxWd/x9zs7Ejc+UsAYHIzBwRgcjMHBYp+lNPzZQ8Uwe8jOjVofBHKfqZNX/Xua3bb1MfgDEXtwFUcXKKxGvQc56hYWHylgDA7G4GAMDjbQaynNH/YfqLpTV4NkoIO/fRz/YlPU+EgBY3AwBgdjcDAGB2NwMAYHY3AwBgdjcDAGB2NwMAYHY3AwBgdjcDAGB2NwMAYHY3AwBgdjcDAGB2NwMAYHY3AwBgdjcDAGB2NwMAYHU+fDtV9x+eXnx2vl6rzdNwiQDA+N1Px/Hhlue0Fjl2Xv2/N52V1VCcBHChiDgzE4GIODBf0Wm/p7v56QrVbQzT8Qaxd43WVzYQAAAABJRU5ErkJggg=="},389:function(t,e,n){t.exports=n.p+"img/shu.37c9ed5.png"},390:function(t,e,n){var content=n(439);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("64fc4b65",content,!0,{sourceMap:!1})},399:function(t,e,n){t.exports=n.p+"img/banner3.0f59185.svg"},438:function(t,e,n){"use strict";n(390)},439:function(t,e,n){var r=n(45)(!1);r.push([t.i,".d-custom-xxl-none[data-v-7c3d49a5]{display:block}@media (min-width:1921px){.d-custom-xxl-none[data-v-7c3d49a5]{display:none}}",""]),t.exports=r},481:function(t,e,n){"use strict";n.r(e);var r=n(374),o=(n(235),n(72),n(9),n(30),{name:"Banner",props:{inBanner:{type:Boolean,default:!0},total:{type:Number,default:0},user:{type:Number,default:0},team:{type:Number,default:0}},data:function(){return{imgLoadSuccess:!1,LucaAni:null,BlueAni:null,PurpleAni:null,DarkPurpleAni:null,bannerText:null,Image1:n(380),Image2:n(381),Image3:n(382)}},watch:{inBanner:function(t){this.LucaAni&&this.BlueAni&&this.PurpleAni&&this.DarkPurpleAni&&(t?(this.LucaAni.restart(),this.BlueAni.restart(),this.PurpleAni.restart(),this.DarkPurpleAni.restart()):(this.LucaAni.pause(),this.BlueAni.pause(),this.PurpleAni.pause(),this.DarkPurpleAni.pause()))}},mounted:function(){this.motionPath()},methods:{loadSuccess:function(){this.imgLoadSuccess=!0,this.boxRotation2(),this.callFunction(),this.$emit("init")},callFunction:function(){var t=this;this.bannerText=this.Image1;var i=0,e=[this.Image1,this.Image2,this.Image3];setInterval((function(){t.bannerText=e[i],++i===e.length&&(i=0)}),2e3)},motionPath:function(){var t=this.$gsap;t.to("#motionSVG",{scrollTrigger:{trigger:"#scrollDist",start:"top top",end:"+=200px",scrub:!0},duration:10,ease:"steps(40)",immediateRender:!0,motionPath:{path:"#motionPath",align:"#motionPath",alignOrigin:[.5,.5],autoRotate:90}}),t.to("#motionPath2",{strokeDashoffset:0,ease:"steps(40)",immediateRender:!0,scrollTrigger:{trigger:"#scrollDist",start:"top top",end:"+="+440/window.innerWidth*1e3,scrub:!0}})},boxRotation2:function(){var t=this.$gsap,path=document.querySelector(".infinity"),circle=document.querySelectorAll(".circle"),e={distance:0};t.to(e,5,{distance:path.getTotalLength(),repeat:-1,repeatDelay:3,duration:20,ease:"steps(10)",onUpdate:function(){var t=path.getPointAtLength(e.distance);Object(r.a)(circle).forEach((function(e,n){e.setAttribute("x",t.x),e.setAttribute("y",t.y+20*n)}))}});var n=document.querySelector(".luca-path"),o=document.querySelector(".luca"),l={distance:0};this.LucaAni=t.to(l,3,{distance:n.getTotalLength(),repeat:-1,yoyo:!0,ease:"none",yoyoEase:"none",onUpdate:function(){var t=n.getPointAtLength(l.distance);o.setAttribute("x",t.x),o.setAttribute("y",t.y)}});var h=document.querySelector(".blue-path"),c=document.querySelector(".blue"),d={distance:0};this.BlueAni=t.to(d,1,{distance:h.getTotalLength(),repeat:-1,duration:10,yoyo:!0,ease:"none",yoyoEase:"none",onUpdate:function(){var t=h.getPointAtLength(d.distance);c.setAttribute("x",t.x),c.setAttribute("y",t.y)}});var f=document.querySelector(".purple-path"),w=document.querySelector(".purple"),v={distance:0};this.PurpleAni=t.to(v,2,{distance:f.getTotalLength(),repeat:-1,duration:10,yoyo:!0,ease:"none",yoyoEase:"none",onUpdate:function(){var t=f.getPointAtLength(v.distance);w.setAttribute("x",t.x),w.setAttribute("y",t.y)}});var x=document.querySelector(".purpleDark-path"),A=document.querySelector(".purpleDark"),y={distance:0};this.DarkPurpleAni=t.to(y,4,{distance:x.getTotalLength(),repeat:-1,duration:10,yoyo:!0,ease:"none",yoyoEase:"none",onUpdate:function(){var t=x.getPointAtLength(y.distance);A.setAttribute("x",t.x),A.setAttribute("y",t.y)}})}}}),l=(n(438),n(29)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-black d-custom-xxl-none",attrs:{id:"scrollDist"}},[e("div",{staticClass:"position-relatvie"},[e("img",{staticClass:"img-fluid",attrs:{src:n(399),alt:"logo"},on:{load:t.loadSuccess}}),t._v(" "),e("div",{staticClass:"position-absolute",staticStyle:{left:"0",right:"0",top:"0"}},[e("svg",{attrs:{width:"100%",viewBox:"0 0 1900 990",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{style:{opacity:t.imgLoadSuccess?1:0}},[e("svg",{attrs:{x:"680",y:"150",width:"710",height:"250",viewBox:"0 0 710 250",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("image",{attrs:{href:t.bannerText,width:"710",height:"250"}})]),t._v(" "),e("text",{attrs:{x:"125.342",y:"490",fill:"#F8CC46","font-family":"'ZenDots'","font-size":"26px"}},[t._v("Total:")]),t._v(" "),e("text",{attrs:{x:"100.342",y:"630",fill:"#F8CC46","font-family":"'ZenDots'","font-size":"26px"}},[t._v("Personal:")]),t._v(" "),e("text",{attrs:{x:"125",y:"768",fill:"#79EAEE","font-family":"'ZenDots'","font-size":"26px"}},[t._v("Team:")]),t._v(" "),e("svg",{attrs:{x:"75",y:"520",height:"50",width:"200"}},[e("rect",{attrs:{x:"0",y:"0",width:"200",height:"50"}}),t._v(" "),e("text",{attrs:{x:"100",y:"25","dominant-baseline":"middle","text-anchor":"middle",fill:"white","font-family":"'ZenDots'","font-size":"26px"}},[t._v(t._s(t.total||0))])]),t._v(" "),e("svg",{attrs:{x:"75",y:"660",height:"50",width:"200"}},[e("rect",{attrs:{x:"0",y:"0",width:"200",height:"50"}}),t._v(" "),e("text",{attrs:{x:"100",y:"25","dominant-baseline":"middle","text-anchor":"middle",fill:"white","font-family":"'ZenDots'","font-size":"26px"}},[t._v(t._s(t.user||0))])]),t._v(" "),e("svg",{attrs:{x:"75",y:"800",height:"50",width:"200"}},[e("rect",{attrs:{x:"0",y:"0",width:"200",height:"50"}}),t._v(" "),e("text",{attrs:{x:"100",y:"25","dominant-baseline":"middle","text-anchor":"middle",fill:"white","font-family":"'ZenDots'","font-size":"26px"}},[t._v(t._s(t.team||0))])]),t._v(" "),e("path",{attrs:{id:"motionPath",d:"M 845 475 L 1215 475 L 1215 585 L 1185 585 L 945 585 L 945 917","stroke-dasharray":"8",fill:"none",stroke:"#F8CC46","stroke-width":"8","vector-effect":"non-scaling-stroke"}}),t._v(" "),e("path",{attrs:{id:"motionPath2",d:"M 845 475 L 1215 475 L 1215 585 L 1185 585 L 945 585 L 945 917",fill:"none",stroke:"black","stroke-width":"10","vector-effect":"non-scaling-stroke","stroke-dashoffset":"1200","stroke-dasharray":"1200"}}),t._v(" "),e("path",{staticClass:"infinity",attrs:{d:"M 275 50 L 275 235 H 255",fill:"none",stroke:"#F8CC46","vector-effect":"non-scaling-stroke","stroke-width":"0"}}),t._v(" "),e("g",[e("rect",{staticClass:"circle",attrs:{x:"275",y:"55",width:"20",height:"20",fill:"#79EAEE"}}),t._v(" "),e("rect",{staticClass:"circle",attrs:{x:"275",y:"75",width:"20",height:"20",fill:"#79EAEE"}}),t._v(" "),e("rect",{staticClass:"circle",attrs:{x:"275",y:"95",width:"20",height:"20",fill:"#79EAEE"}}),t._v(" "),e("rect",{staticClass:"circle",attrs:{x:"275",y:"115",width:"20",height:"20",fill:"#79EAEE"}})]),t._v(" "),e("svg",{staticClass:"luca",attrs:{x:"428",y:"385",width:"45",height:"60",viewBox:"0 0 45 60",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("image",{attrs:{href:n(384),width:"45",height:"60"}})]),t._v(" "),e("path",{staticClass:"luca-path",attrs:{d:"M 428 385 L 428 450 H 360 L 360 555",fill:"none",stroke:"#F8CC46","vector-effect":"non-scaling-stroke","stroke-width":"0"}}),t._v(" "),e("svg",{staticClass:"blue",attrs:{x:"1478",y:"454",width:"59",height:"63",viewBox:"0 0 59 63",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("image",{attrs:{href:n(383),width:"59",height:"63"}})]),t._v(" "),e("path",{staticClass:"blue-path",attrs:{d:"M 1477 454 L 1477 554",fill:"none",stroke:"#F8CC46","vector-effect":"non-scaling-stroke","stroke-width":"0"}}),t._v(" "),e("svg",{staticClass:"purple",attrs:{x:"1307",y:"672",width:"46",height:"56",viewBox:"0 0 46 56",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("image",{attrs:{href:n(388),width:"46",height:"56"}})]),t._v(" "),e("path",{staticClass:"purple-path",attrs:{d:"M 1307 672 L 1487 672",fill:"none",stroke:"#F8CC46","vector-effect":"non-scaling-stroke","stroke-width":"0"}}),t._v(" "),e("svg",{staticClass:"purpleDark",attrs:{x:"815",y:"779",width:"50",height:"58",viewBox:"0 0 50 58",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("image",{attrs:{href:n(389),width:"50",height:"58"}})]),t._v(" "),e("path",{staticClass:"purpleDark-path",attrs:{d:"M 815 779 L 415 779",fill:"none",stroke:"#F8CC46","vector-effect":"non-scaling-stroke","stroke-width":"0"}})]),t._v(" "),e("g",{attrs:{id:"motionSVG"}},[e("rect",{attrs:{x:"895",y:"470",width:"10",height:"10",fill:"#F8CC46"}}),t._v(" "),e("rect",{attrs:{x:"895",y:"480",width:"10",height:"10",fill:"#F8CC46"}}),t._v(" "),e("rect",{attrs:{x:"885",y:"470",width:"10",height:"10",fill:"#F8CC46"}}),t._v(" "),e("rect",{attrs:{x:"885",y:"480",width:"10",height:"10",fill:"#F8CC46"}}),t._v(" "),e("rect",{attrs:{x:"885",y:"490",width:"10",height:"10",fill:"#F8CC46"}}),t._v(" "),e("rect",{attrs:{x:"885",y:"460",width:"10",height:"10",fill:"#F8CC46"}}),t._v(" "),e("rect",{attrs:{x:"875",y:"470",width:"10",height:"10",fill:"#F8CC46"}}),t._v(" "),e("rect",{attrs:{x:"875",y:"480",width:"10",height:"10",fill:"#F8CC46"}}),t._v(" "),e("rect",{attrs:{x:"875",y:"490",width:"10",height:"10",fill:"#F8CC46"}}),t._v(" "),e("rect",{attrs:{x:"875",y:"460",width:"10",height:"10",fill:"#F8CC46"}}),t._v(" "),e("rect",{attrs:{x:"875",y:"450",width:"10",height:"10",fill:"#F8CC46"}}),t._v(" "),e("rect",{attrs:{x:"875",y:"500",width:"10",height:"10",fill:"#F8CC46"}}),t._v(" "),e("rect",{attrs:{x:"865",y:"470",width:"10",height:"10",fill:"#F8CC46"}}),t._v(" "),e("rect",{attrs:{x:"865",y:"480",width:"10",height:"10",fill:"#F8CC46"}}),t._v(" "),e("rect",{attrs:{x:"865",y:"490",width:"10",height:"10",fill:"#F8CC46"}}),t._v(" "),e("rect",{attrs:{x:"865",y:"460",width:"10",height:"10",fill:"#F8CC46"}}),t._v(" "),e("rect",{attrs:{x:"865",y:"450",width:"10",height:"10",fill:"#F8CC46"}}),t._v(" "),e("rect",{attrs:{x:"865",y:"500",width:"10",height:"10",fill:"#F8CC46"}}),t._v(" "),e("rect",{attrs:{x:"855",y:"470",width:"10",height:"10",fill:"#F8CC46"}}),t._v(" "),e("rect",{attrs:{x:"855",y:"480",width:"10",height:"10",fill:"#F8CC46"}}),t._v(" "),e("rect",{attrs:{x:"855",y:"490",width:"10",height:"10",fill:"#F8CC46"}}),t._v(" "),e("rect",{attrs:{x:"855",y:"460",width:"10",height:"10",fill:"#F8CC46"}}),t._v(" "),e("rect",{attrs:{x:"845",y:"470",width:"10",height:"10",fill:"#F8CC46"}}),t._v(" "),e("rect",{attrs:{x:"845",y:"480",width:"10",height:"10",fill:"#F8CC46"}})])])])])])}),[],!1,null,"7c3d49a5",null);e.default=component.exports}}]);