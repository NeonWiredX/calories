(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{444:function(t,e,o){var content=o(446);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(6).default)("30bdb94c",content,!0,{sourceMap:!1})},445:function(t,e,o){"use strict";var n=o(444);o.n(n).a},446:function(t,e,o){(e=o(5)(!1)).push([t.i,".bottomMenu{display:block;width:100%;max-width:820px;margin:65px auto;justify-content:space-between}.bottomMenu__wrapper{display:flex;flex-direction:row;align-items:stretch;justify-content:space-between;margin-bottom:35px}.bottomMenu__wrapper:last-child{margin-bottom:0}.bottomMenu__item{list-style-type:none;margin-left:auto;margin-right:auto;cursor:pointer}.bottomMenu__item a{max-width:100px;display:flex;justify-content:center;align-items:center;border-radius:50%;border:8px solid #fff;padding:15px;transition:all .3s ease}.bottomMenu__item a.nuxt-link-exact-active,.bottomMenu__item a:focus,.bottomMenu__item a:hover{border-color:#fe5929}@media screen and (max-width:767px){.bottomMenu__item a{padding:10px;max-width:80px;border:6px solid #fff}}.bottomMenu__tab{width:100%;height:44px;margin-bottom:24px;justify-content:space-between;background:#f5f7f8;padding:3px;overflow:hidden}.bottomMenu__tab,.bottomMenu__tabBtn{display:flex;align-items:center;border-radius:10px}.bottomMenu__tabBtn{justify-content:center;width:100px;height:100%;transition:all .3s;background-color:transparent;font-weight:600}.bottomMenu__tabBtn.isActive{color:#fe805c;background-color:#fff;box-shadow:0 4px 20px rgba(0,0,0,.1)}.bottomMenu__promo{display:flex;flex-direction:column;width:100%}.bottomMenu__promoImg{height:170px;margin-bottom:10px}.bottomMenu__promoTitle{font-weight:600;margin-bottom:4px}.bottomMenu__promoText{max-height:40px;height:100%;color:#9da1a6;display:-webkit-box;-webkit-box-orient:vertical;text-overflow:ellipsis;-webkit-line-clamp:2;word-wrap:break-word;word-break:break-word;line-break:auto;-webkit-hyphens:manual;-ms-hyphens:manual;hyphens:manual;overflow:hidden}.bottomMenu__menuCaption{color:#9da1a6;margin-bottom:8px}.bottomMenu__menuItemCaption{color:#222;font-weight:600}.bottomMenu__menuItems{width:100%;display:flex;flex-direction:column;align-items:flex-start}.bottomMenu__menuItem{width:100%;display:flex;align-items:center;background-color:#fff;border-radius:10px;height:48px;padding:0 8px}.bottomMenu__menuItem.isActive{background-color:#f5f7f8}.bottomMenu__menuItem.isActive .sideBar__menuItemSvg{fill:#222}.bottomMenu__menuItem:hover{background-color:#f5f7f8}.bottomMenu__menuItem:hover .sideBar__menuItemSvg{fill:#222}.bottomMenu__menuCount{display:flex;align-items:center;justify-content:center;margin-left:auto;background-color:#fe805c;border-radius:10px;color:#fff;padding:5px 6px}.bottomMenu__menuItemSvg{width:16px;height:16px;fill:#9da1a6;margin-right:14px}.bottomMenu__btn{width:100%;margin-bottom:30px}.bottomMenu__affix{display:flex;flex-direction:column;align-items:flex-start;width:100%;max-width:260px}.bottomMenu__affix.affix-bottom,.bottomMenu__affix.affix-top{left:0!important}.bottomMenu__content{display:flex;flex-direction:column;align-items:flex-start;width:100%;background-color:#fff;border-radius:20px;padding:20px;margin-bottom:20px}.bottomMenu__content:last-child{margin-bottom:0}",""]),t.exports=e},447:function(t,e,o){"use strict";o(12);var n={name:"bottomMenu",props:{},data:function(){return{buttons:[{id:"index",name:"home",image:"img/home.png",imageActive:"img/homeA.png",link:"/"},{id:"list",name:"list",image:"img/list.png",imageActive:"img/listA.png",link:"/list"},{id:"add",name:"add",image:"img/add.png",imageActive:"img/addA.png",link:"/add"}]}},methods:{changeTab:function(t){this.$emit("change",this.filtered)}},computed:{curLink:function(){return $nuxt.$route.name}}},r=(o(445),o(2)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"menu bottomMenu"},[o("ul",{staticClass:"bottomMenu__wrapper"},t._l(t.buttons,(function(e,n){return o("li",{key:e.id+"__menu",staticClass:"bottomMenu__item"},[o("NuxtLink",{attrs:{to:e.link}},[o("button",{attrs:{type:"button"}},[e.id!==t.$nuxt.$route.name?[o("img",{attrs:{src:e.image,alt:e.id}})]:[o("img",{attrs:{src:e.imageActive,alt:e.id}})]],2)])],1)})),0)])}),[],!1,null,null,null);e.a=component.exports},450:function(t,e,o){var content=o(457);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(6).default)("6337297c",content,!0,{sourceMap:!1})},456:function(t,e,o){"use strict";var n=o(450);o.n(n).a},457:function(t,e,o){(e=o(5)(!1)).push([t.i,".title_list[data-v-082f4e76]{color:#fff;border-radius:10px;text-align:center}.list__summary[data-v-082f4e76]{width:100%;display:flex;background:#fff}.list__summary__table[data-v-082f4e76]{height:70px;width:100%}.list__summary__heading[data-v-082f4e76]{text-align:center;color:grey;height:40px;max-height:40px}.list__summary__item[data-v-082f4e76]{text-align:center;height:100%}.list__summary__item__wrapper[data-v-082f4e76]{height:40px;max-height:40px}.list__summary__main[data-v-082f4e76]{display:flex;flex-direction:column;height:calc(100vh - 360px);overflow-y:scroll}.list__summary__main__item[data-v-082f4e76]{width:100%;min-height:60px;border-radius:10px;background:#fff;margin-bottom:2px}",""]),t.exports=e},464:function(t,e,o){"use strict";o.r(e);var n={name:"list",components:{bottomMenu:o(447).a},computed:{getFoods:function(){return this.$store.getters["food/getFood"]},squirrels:function(){return 0===this.$store.getters["food/getFood"].length?0:this.$store.getters["food/getFood"].reduce((function(t,e){return t+ +e.squirrels/1e3*e.selectedWeight}),0)},fats:function(){return 0===this.$store.getters["food/getFood"].length?0:this.$store.getters["food/getFood"].reduce((function(t,e){return t+ +e.fats/1e3*e.selectedWeight}),0)},carbons:function(){return 0===this.$store.getters["food/getFood"].length?0:this.$store.getters["food/getFood"].reduce((function(t,e){return t+ +e.carbons/1e3*e.selectedWeight}),0)},calories:function(){return 0===this.$store.getters["food/getFood"].length?0:this.$store.getters["food/getFood"].reduce((function(t,e){return t+ +e.calories/1e3*e.selectedWeight}),0)}}},r=(o(456),o(2)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page",attrs:{id:"main"}},[o("div",{staticClass:"container"},[o("h2",{staticClass:"title_list"},[t._v("Дневник")]),t._v(" "),o("h3",{staticClass:"title_list"},[t._v("Общая характеристика")]),t._v(" "),o("div",{staticClass:"list__summary"},[o("table",{staticClass:"list__summary__table"},[t._m(0),t._v(" "),o("tr",[o("td",{staticClass:"list__summary__item__wrapper"},[o("div",{staticClass:"list__summary__item"},[t._v(t._s(t.squirrels))])]),t._v(" "),o("td",{staticClass:"list__summary__item__wrapper"},[o("div",{staticClass:"list__summary__item"},[t._v(t._s(t.fats))])]),t._v(" "),o("td",{staticClass:"list__summary__item__wrapper"},[o("div",{staticClass:"list__summary__item"},[t._v(t._s(t.carbons))])]),t._v(" "),o("td",{staticClass:"list__summary__item__wrapper"},[o("div",{staticClass:"list__summary__item"},[t._v(t._s(t.calories))])])])])]),t._v(" "),o("h3",{staticClass:"title_list"},[t._v("Список еды")]),t._v(" "),o("div",{staticClass:"list__summary__main"},t._l(t.getFoods,(function(e,n){return o("table",{staticClass:"list__summary__main__item"},[o("tr",[o("td",{staticClass:"list__summary__heading",attrs:{colspan:"4"}},[t._v(t._s(e.name)+", "+t._s(e.selectedWeight)+"г.")])]),t._v(" "),o("tr",[o("td",{staticClass:"list__summary__item"},[t._v(t._s(e.squirrels/1e3*e.selectedWeight))]),t._v(" "),o("td",{staticClass:"list__summary__item"},[t._v(t._s(e.fats/1e3*e.selectedWeight))]),t._v(" "),o("td",{staticClass:"list__summary__item"},[t._v(t._s(e.carbons/1e3*e.selectedWeight))]),t._v(" "),o("td",{staticClass:"list__summary__item"},[t._v(t._s(e.calories/1e3*e.selectedWeight))])])])})),0)]),t._v(" "),o("bottomMenu"),t._v(" "),o("scrollToTop",{attrs:{id:"#main"}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"list__summary__heading"},[this._v("Белки")]),this._v(" "),e("td",{staticClass:"list__summary__heading"},[this._v("Жиры")]),this._v(" "),e("td",{staticClass:"list__summary__heading"},[this._v("Углеводы")]),this._v(" "),e("td",{staticClass:"list__summary__heading"},[this._v("Калории")])])}],!1,null,"082f4e76",null);e.default=component.exports}}]);