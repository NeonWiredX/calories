(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{436:function(t,e,n){var content=n(438);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("30bdb94c",content,!0,{sourceMap:!1})},437:function(t,e,n){"use strict";var r=n(436);n.n(r).a},438:function(t,e,n){(e=n(5)(!1)).push([t.i,".bottomMenu{display:block;width:100%;max-width:820px;margin:0 auto;justify-content:space-between}.bottomMenu__wrapper{display:flex;flex-direction:row;align-items:stretch;justify-content:space-between;margin-bottom:35px}.bottomMenu__wrapper:last-child{margin-bottom:0}.bottomMenu__item{width:100px;list-style-type:none;margin-left:auto;margin-right:auto;padding:0 5px}.bottomMenu__tab{width:100%;height:44px;margin-bottom:24px;justify-content:space-between;background:#f5f7f8;padding:3px;overflow:hidden}.bottomMenu__tab,.bottomMenu__tabBtn{display:flex;align-items:center;border-radius:10px}.bottomMenu__tabBtn{justify-content:center;width:100px;height:100%;transition:all .3s;background-color:transparent;font-weight:600}.bottomMenu__tabBtn.isActive{color:#fe805c;background-color:#fff;box-shadow:0 4px 20px rgba(0,0,0,.1)}.bottomMenu__promo{display:flex;flex-direction:column;width:100%}.bottomMenu__promoImg{height:170px;margin-bottom:10px}.bottomMenu__promoTitle{font-weight:600;margin-bottom:4px}.bottomMenu__promoText{max-height:40px;height:100%;color:#9da1a6;display:-webkit-box;-webkit-box-orient:vertical;text-overflow:ellipsis;-webkit-line-clamp:2;word-wrap:break-word;word-break:break-word;line-break:auto;-webkit-hyphens:manual;-ms-hyphens:manual;hyphens:manual;overflow:hidden}.bottomMenu__menuCaption{color:#9da1a6;margin-bottom:8px}.bottomMenu__menuItemCaption{color:#222;font-weight:600}.bottomMenu__menuItems{width:100%;display:flex;flex-direction:column;align-items:flex-start}.bottomMenu__menuItem{width:100%;display:flex;align-items:center;background-color:#fff;border-radius:10px;height:48px;padding:0 8px}.bottomMenu__menuItem.isActive{background-color:#f5f7f8}.bottomMenu__menuItem.isActive .sideBar__menuItemSvg{fill:#222}.bottomMenu__menuItem:hover{background-color:#f5f7f8}.bottomMenu__menuItem:hover .sideBar__menuItemSvg{fill:#222}.bottomMenu__menuCount{display:flex;align-items:center;justify-content:center;margin-left:auto;background-color:#fe805c;border-radius:10px;color:#fff;padding:5px 6px}.bottomMenu__menuItemSvg{width:16px;height:16px;fill:#9da1a6;margin-right:14px}.bottomMenu__btn{width:100%;margin-bottom:30px}.bottomMenu__affix{display:flex;flex-direction:column;align-items:flex-start;width:100%;max-width:260px}.bottomMenu__affix.affix-bottom,.bottomMenu__affix.affix-top{left:0!important}.bottomMenu__content{display:flex;flex-direction:column;align-items:flex-start;width:100%;background-color:#fff;border-radius:20px;padding:20px;margin-bottom:20px}.bottomMenu__content:last-child{margin-bottom:0}",""]),t.exports=e},439:function(t,e,n){"use strict";n(12);var r={name:"bottomMenu",props:{},data:function(){return{buttons:[{id:"index",name:"home",image:"img/home.png",imageActive:"img/homeA.png",link:"/"},{id:"list",name:"list",image:"img/list.png",imageActive:"img/listA.png",link:"/list"},{id:"add",name:"add",image:"img/add.png",imageActive:"img/addA.png",link:"/add"}]}},methods:{changeTab:function(t){this.$emit("change",this.filtered)}},computed:{curLink:function(){return $nuxt.$route.name}}},o=(n(437),n(2)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu bottomMenu"},[n("ul",{staticClass:"bottomMenu__wrapper"},t._l(t.buttons,(function(e,r){return n("li",{key:e.id+"__menu",staticClass:"bottomMenu__item"},[n("NuxtLink",{attrs:{to:e.link}},[n("button",{attrs:{type:"button"}},[e.id!==t.$nuxt.$route.name?[n("img",{attrs:{src:e.image,alt:e.id}})]:[n("img",{attrs:{src:e.imageActive,alt:e.id}})]],2)])],1)})),0)])}),[],!1,null,null,null);e.a=component.exports},443:function(t,e,n){var content=n(453);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("e2c38242",content,!0,{sourceMap:!1})},450:function(t,e){t.exports={port:4992,host:"0.0.0.0",baseURL:"http://ya.ru"}},451:function(t,e,n){t.exports=n(454).default},452:function(t,e,n){"use strict";var r=n(443);n.n(r).a},453:function(t,e,n){(e=n(5)(!1)).push([t.i,".radial-progress-container{position:relative}.radial-progress-inner{top:0;right:0;bottom:0;left:0;position:absolute;border-radius:50%;margin:0 auto;display:flex;flex-direction:column;align-items:center;justify-content:center}",""]),t.exports=e},454:function(t,e,n){"use strict";n.r(e);n(300);var r={props:{diameter:{type:Number,required:!1,default:200},totalSteps:{type:Number,required:!0,default:10},completedSteps:{type:Number,required:!0,default:0},startColor:{type:String,required:!1,default:"#bbff42"},stopColor:{type:String,required:!1,default:"#429321"},strokeWidth:{type:Number,required:!1,default:10},innerStrokeWidth:{type:Number,required:!1,default:10},strokeLinecap:{type:String,required:!1,default:"round"},animateSpeed:{type:Number,required:!1,default:1e3},innerStrokeColor:{type:String,required:!1,default:"#323232"},fps:{type:Number,required:!1,default:60},timingFunc:{type:String,required:!1,default:"linear"},isClockwise:{type:Boolean,required:!1,default:!0}},data:function(){return{gradient:{fx:.99,fy:.5,cx:.5,cy:.5,r:.65},gradientAnimation:null,currentAngle:0,strokeDashoffset:0}},computed:{radius:function(){return this.diameter/2},circumference:function(){return Math.PI*this.innerCircleDiameter},stepSize:function(){return 0===this.totalSteps?0:100/this.totalSteps},finishedPercentage:function(){return this.stepSize*this.completedSteps},circleSlice:function(){return 2*Math.PI/this.totalSteps},animateSlice:function(){return this.circleSlice/this.totalPoints},innerCircleDiameter:function(){return this.diameter-2*this.innerStrokeWidth},innerCircleRadius:function(){return this.innerCircleDiameter/2},totalPoints:function(){return this.animateSpeed/this.animationIncrements},animationIncrements:function(){return 1e3/this.fps},hasGradient:function(){return this.startColor!==this.stopColor},containerStyle:function(){return{height:"".concat(this.diameter,"px"),width:"".concat(this.diameter,"px")}},progressStyle:function(){return{height:"".concat(this.diameter,"px"),width:"".concat(this.diameter,"px"),strokeWidth:"".concat(this.strokeWidth,"px"),strokeDashoffset:this.strokeDashoffset,transition:"stroke-dashoffset ".concat(this.animateSpeed,"ms ").concat(this.timingFunc)}},strokeStyle:function(){return{height:"".concat(this.diameter,"px"),width:"".concat(this.diameter,"px"),strokeWidth:"".concat(this.innerStrokeWidth,"px")}},innerCircleStyle:function(){return{width:"".concat(this.innerCircleDiameter,"px")}}},methods:{getStopPointsOfCircle:function(t){for(var e=[],i=0;i<t;i++){var n=this.circleSlice*i;e.push(this.getPointOfCircle(n))}return e},getPointOfCircle:function(t){return{x:.5+.5*Math.cos(t),y:.5+.5*Math.sin(t)}},gotoPoint:function(){var t=this.getPointOfCircle(this.currentAngle);t.x&&t.y&&(this.gradient.fx=t.x,this.gradient.fy=t.y)},direction:function(){return this.isClockwise?1:-1},changeProgress:function(t){var e=this,n=t.isAnimate,r=void 0===n||n;if(this.strokeDashoffset=(100-this.finishedPercentage)/100*this.circumference*this.direction(),this.gradientAnimation&&clearInterval(this.gradientAnimation),r){var o=(this.completedSteps-1)*this.circleSlice,i=(this.currentAngle-o)/this.animateSlice,c=Math.abs(i-this.totalPoints)/this.totalPoints,l=i<this.totalPoints;this.gradientAnimation=setInterval((function(){l&&i>=e.totalPoints||!l&&i<e.totalPoints?clearInterval(e.gradientAnimation):(e.currentAngle=o+e.animateSlice*i,e.gotoPoint(),i+=l?c:-c)}),this.animationIncrements)}else this.gotoNextStep()},gotoNextStep:function(){this.currentAngle=this.completedSteps*this.circleSlice,this.gotoPoint()}},watch:{totalSteps:function(){this.changeProgress({isAnimate:!0})},completedSteps:function(){this.changeProgress({isAnimate:!0})},diameter:function(){this.changeProgress({isAnimate:!0})},strokeWidth:function(){this.changeProgress({isAnimate:!0})}},created:function(){this.changeProgress({isAnimate:!1})}},o=(n(452),n(2)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"radial-progress-container",style:t.containerStyle},[n("div",{staticClass:"radial-progress-inner",style:t.innerCircleStyle},[t._t("default")],2),t._v(" "),n("svg",{staticClass:"radial-progress-bar",attrs:{width:t.diameter,height:t.diameter,version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[n("defs",[n("radialGradient",{attrs:{id:"radial-gradient"+t._uid,fx:t.gradient.fx,fy:t.gradient.fy,cx:t.gradient.cx,cy:t.gradient.cy,r:t.gradient.r}},[n("stop",{attrs:{offset:"30%","stop-color":t.startColor}}),t._v(" "),n("stop",{attrs:{offset:"100%","stop-color":t.stopColor}})],1)],1),t._v(" "),n("circle",{style:t.strokeStyle,attrs:{r:t.innerCircleRadius,cx:t.radius,cy:t.radius,fill:"transparent",stroke:t.innerStrokeColor,"stroke-dasharray":t.circumference,"stroke-dashoffset":"0","stroke-linecap":t.strokeLinecap}}),t._v(" "),n("circle",{style:t.progressStyle,attrs:{transform:"rotate(270, "+t.radius+","+t.radius+")",r:t.innerCircleRadius,cx:t.radius,cy:t.radius,fill:"transparent",stroke:"url(#radial-gradient"+t._uid+")","stroke-dasharray":t.circumference,"stroke-dashoffset":t.circumference,"stroke-linecap":t.strokeLinecap}})])])}),[],!1,null,null,null);e.default=component.exports},457:function(t,e,n){"use strict";n.r(e);n(14);var r=n(4),o=(n(114),n(450),n(439)),main=n(451),c=n.n(main),l={name:"index",components:{bottomMenu:o.a,RadialProgressBar:c.a},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.store,t.redirect,t.params,t.app,t.$axios,t.query,e.abrupt("return",{});case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{watchId:null,steps:0}},mounted:function(){var t=this;navigator.permissions.query({name:"geolocation"}).then((function(e){("granted"==e.state||"prompt"==e.state)&&(t.watchId=navigator.geolocation.watchPosition(this.gotPosition,this.errorGeo,{enableHighAccuracy:!0,timeout:1e4,maximumAge:2e4}))}))},computed:{getCalories:function(){return.0736*this.steps},getNeededCalories:function(){return this.$store.getters["food/getCalories"]}},methods:{gotPosition:function(t){this.steps+=t.coords.speed/.762},widthProgress:function(){var t;return null==window?400:null===(t=document.querySelector("#page__content"))||void 0===t?void 0:t.offsetWidth},errorGeo:function(t){1==t.code?alert("User denied geolocation."):2==t.code?alert("Position unavailable."):3==t.code?alert("Timeout expired."):alert("ERROR:"+t.message)}},head:function(){return{title:"Calories",meta:[{hid:"description",name:"description",content:""},{name:"og:type",content:"website"}]}}},d=n(2),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page",attrs:{id:"main"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"page__content",attrs:{id:"page__content"}},[n("div",{staticStyle:{display:"flex",width:"100%",height:"100%","align-items":"center","justify-content":"center"}},[[n("radial-progress-bar",{attrs:{diameter:400,"completed-steps":t.steps,"total-steps":t.getNeededSteps}},[n("p",[t._v("Пройдено шагов: "+t._s(t.totalSteps))]),t._v(" "),n("p",[t._v("Потрачено калорий: "+t._s(t.getCalories))])])]],2)])]),t._v(" "),n("bottomMenu"),t._v(" "),n("scrollToTop",{attrs:{id:"#main"}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);