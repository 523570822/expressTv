webpackJsonp([32],{488:function(a,t,e){function s(a){e(655)}var i=e(4)(e(567),e(699),s,"data-v-6aa0a5fc",null);a.exports=i.exports},567:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e(91),i=e.n(s),n=e(93),o=e.n(n),A=e(92),r=e.n(A),d=e(94),c=e.n(d),l=e(185),f=e.n(l);t.default={components:{DashChartCount:i.a,DashChartVisitor:o.a,DashChartLarge:r.a,VueCalendar:c.a,TodoList:f.a},name:"dashboard",data:function(){return{value1:0,value2:0,value3:0,speed:1e4}},methods:{test_logout:function(){var a=this;this.$store.dispatch("LogOut").then(function(){a.$router.push({path:"/login"})}).catch(function(t){a.$message.error(t)})}},mounted:function(){this.$store.getters.token}}},622:function(a,t,e){t=a.exports=e(477)(!0),t.push([a.i,".state-overview[data-v-6aa0a5fc]{color:#fff}.state-overview .ivu-col[data-v-6aa0a5fc]{margin-bottom:20px}.state-overview .state-value .value[data-v-6aa0a5fc]{font-size:24px;font-weight:700;margin-bottom:5px}.state-overview .state-value .title[data-v-6aa0a5fc]{font-size:14px}.state-value[data-v-6aa0a5fc]{width:60%;display:inline-block}.symbol[data-v-6aa0a5fc]{width:35%;display:inline-block}.state-overview .panel[data-v-6aa0a5fc]{border-radius:4px;padding:25px 20px}.panel.purple[data-v-6aa0a5fc]{background:#6a8abe;box-shadow:0 5px 0 #5f7cab}.panel.red[data-v-6aa0a5fc]{background-color:#fc8675;box-shadow:0 5px 0 #e27869}.panel.blue[data-v-6aa0a5fc]{background:#5ab6df;box-shadow:0 5px 0 #51a3c8}.panel.green[data-v-6aa0a5fc]{background:#4acacb;box-shadow:0 5px 0 #42b5b6}.dash_income_chart[data-v-6aa0a5fc]{float:left}.ivu-row[data-v-6aa0a5fc]{margin-bottom:20px!important}.dash_income[data-v-6aa0a5fc]{border-radius:4px;background-color:#fff;height:80px;padding:15px}.staff_name[data-v-6aa0a5fc]{font-weight:900;font-size:16px}.staff_progress[data-v-6aa0a5fc]{margin-left:10px;width:90%}.staff_progress p[data-v-6aa0a5fc]{margin:0}.staff_list[data-v-6aa0a5fc]{border-radius:4px;margin-top:0;height:90px;display:flex;align-items:center}.animated[data-v-6aa0a5fc]{background-color:#eff0f4}li[data-v-6aa0a5fc]{margin-bottom:11px;margin-left:10px;margin-right:10px}.num[data-v-6aa0a5fc]{font-weight:700}.time[data-v-6aa0a5fc]{font-size:14px;font-weight:700}.content[data-v-6aa0a5fc]{padding-left:5px}.dashboard_feature[data-v-6aa0a5fc]{text-align:center}.demo-carousel[data-v-6aa0a5fc]{height:600px;line-height:200px;text-align:center;color:#fff;font-size:20px;background:#506b9e}.demo-carousel img[data-v-6aa0a5fc]{height:100%;width:100%}h3[data-v-6aa0a5fc],h4[data-v-6aa0a5fc],h5[data-v-6aa0a5fc]{margin:12px}h3[data-v-6aa0a5fc]{margin-bottom:20px}p[data-v-6aa0a5fc]{margin:12px}.row-margin-top[data-v-6aa0a5fc]{margin-top:30px}.state-info[data-v-6aa0a5fc]{position:absolute;right:15px;top:20px;margin-bottom:30px}.state-info .panel[data-v-6aa0a5fc]{margin-bottom:20px;float:right;margin-left:15px}.panel[data-v-6aa0a5fc]{background-color:#fff;border:1px solid transparent;border-radius:4px;-webkit-box-shadow:0 1px 1px rgba(0,0,0,.05);box-shadow:0 1px 1px rgba(0,0,0,.05)}.panel-body[data-v-6aa0a5fc]{padding:15px}.state-info .panel .summary[data-v-6aa0a5fc]{float:left;margin-right:20px}.state-info .panel .summary span[data-v-6aa0a5fc]{color:#49586e;font-size:13px;font-weight:400;text-transform:uppercase;margin-bottom:10px}.state-info .panel .summary h3.red-txt[data-v-6aa0a5fc]{color:#fc8675}.state-info .panel .summary h3.green-txt[data-v-6aa0a5fc]{color:#65cea7}.state-info .panel .summary h3[data-v-6aa0a5fc]{font-size:200%;font-weight:700;line-height:20px;margin:0}.page-heading h3[data-v-6aa0a5fc]{color:#49586e;font-size:25px;font-size:11%;font-weight:400;margin:10px 0}.chart-bar[data-v-6aa0a5fc]{float:right;margin-top:5px}.chart-bar img[data-v-6aa0a5fc]{display:inline-block;width:68px;height:45px;vertical-align:top}@media screen and (max-width:767px){.state-info[data-v-6aa0a5fc]{position:static;width:100%;margin-top:15px}.state-info .panel[data-v-6aa0a5fc]{width:100%}}.panel.blue-box[data-v-6aa0a5fc]{background:none repeat scroll 0 0 #5ab5de;box-shadow:0 5px 0 #51a3c7;color:#fff}.twt-info h3[data-v-6aa0a5fc]{font-family:Open Sans,sans-serif;font-size:16px;font-weight:900;margin:10px 0 30px;text-align:center}.twt-info p[data-v-6aa0a5fc]{font-size:18px;line-height:25px;font-style:italic;margin:0 0 20px;text-align:center}.twt-info p a[data-v-6aa0a5fc]{color:#98fdf4}.media[data-v-6aa0a5fc]:first-child{margin-top:0}.media.usr-info>.pull-left[data-v-6aa0a5fc]{margin-right:20px;margin-top:10px}.media>.pull-left[data-v-6aa0a5fc]{margin-right:10px}.pull-left[data-v-6aa0a5fc]{float:left;float:left!important}.custom-trq-footer[data-v-6aa0a5fc]{background:none repeat scroll 0 0 #4eb6b7!important;box-shadow:0 5px 0 #46a3a4;color:#fff;border-top:none}.panel-footer[data-v-6aa0a5fc]{padding:10px 15px;background-color:#f5f5f5;border-top:1px solid #ddd;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.usr-info .thumb[data-v-6aa0a5fc]{width:80px;height:80px;border-radius:50%;-webkit-border-radius:50%}.usr-info img[data-v-6aa0a5fc]{vertical-align:middle}.usr-info h4[data-v-6aa0a5fc]{color:#658585;margin-bottom:0}.media-heading[data-v-6aa0a5fc]{margin:0 0 5px}.usr-info .media-body span[data-v-6aa0a5fc]{color:#ea755c;font-size:12px;margin-bottom:20px;display:inline-block}.usr-info .media-body p[data-v-6aa0a5fc]{color:#b6bcbc}ul.user-states[data-v-6aa0a5fc]{list-style-type:none;padding:20px 0}ul.user-states li[data-v-6aa0a5fc]{text-align:center;float:left;width:33%;font-size:18px;margin:0}","",{version:3,sources:["D:/ziliao/vue-framework-wz/src/views/Dashboard2.vue"],names:[],mappings:"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",file:"Dashboard2.vue",sourcesContent:["\n.state-overview[data-v-6aa0a5fc]{color:#fff\n}\n.state-overview .ivu-col[data-v-6aa0a5fc]{margin-bottom:20px\n}\n.state-overview .state-value .value[data-v-6aa0a5fc]{font-size:24px;font-weight:700;margin-bottom:5px\n}\n.state-overview .state-value .title[data-v-6aa0a5fc]{font-size:14px\n}\n.state-value[data-v-6aa0a5fc]{width:60%;display:inline-block\n}\n.symbol[data-v-6aa0a5fc]{width:35%;display:inline-block\n}\n.state-overview .panel[data-v-6aa0a5fc]{border-radius:4px;padding:25px 20px\n}\n.panel.purple[data-v-6aa0a5fc]{background:#6a8abe;box-shadow:0 5px 0 #5f7cab\n}\n.panel.red[data-v-6aa0a5fc]{background-color:#fc8675;box-shadow:0 5px 0 #e27869\n}\n.panel.blue[data-v-6aa0a5fc]{background:#5ab6df;box-shadow:0 5px 0 #51a3c8\n}\n.panel.green[data-v-6aa0a5fc]{background:#4acacb;box-shadow:0 5px 0 #42b5b6\n}\n.dash_income_chart[data-v-6aa0a5fc]{float:left\n}\n.ivu-row[data-v-6aa0a5fc]{margin-bottom:20px!important\n}\n.dash_income[data-v-6aa0a5fc]{border-radius:4px;background-color:#fff;height:80px;padding:15px\n}\n.staff_name[data-v-6aa0a5fc]{font-weight:900;font-size:16px\n}\n.staff_progress[data-v-6aa0a5fc]{margin-left:10px;width:90%\n}\n.staff_progress p[data-v-6aa0a5fc]{margin:0\n}\n.staff_list[data-v-6aa0a5fc]{border-radius:4px;margin-top:0;height:90px;display:flex;align-items:center\n}\n.animated[data-v-6aa0a5fc]{background-color:#eff0f4\n}\nli[data-v-6aa0a5fc]{margin-bottom:11px;margin-left:10px;margin-right:10px\n}\n.num[data-v-6aa0a5fc]{font-weight:700\n}\n.time[data-v-6aa0a5fc]{font-size:14px;font-weight:700\n}\n.content[data-v-6aa0a5fc]{padding-left:5px\n}\n.dashboard_feature[data-v-6aa0a5fc]{text-align:center\n}\n.demo-carousel[data-v-6aa0a5fc]{height:600px;line-height:200px;text-align:center;color:#fff;font-size:20px;background:#506b9e\n}\n.demo-carousel img[data-v-6aa0a5fc]{height:100%;width:100%\n}\nh3[data-v-6aa0a5fc],h4[data-v-6aa0a5fc],h5[data-v-6aa0a5fc]{margin:12px\n}\nh3[data-v-6aa0a5fc]{margin-bottom:20px\n}\np[data-v-6aa0a5fc]{margin:12px\n}\n.row-margin-top[data-v-6aa0a5fc]{margin-top:30px\n}\n.state-info[data-v-6aa0a5fc]{position:absolute;right:15px;top:20px;margin-bottom:30px\n}\n.state-info .panel[data-v-6aa0a5fc]{margin-bottom:20px;float:right;margin-left:15px\n}\n.panel[data-v-6aa0a5fc]{background-color:#fff;border:1px solid transparent;border-radius:4px;-webkit-box-shadow:0 1px 1px rgba(0,0,0,.05);box-shadow:0 1px 1px rgba(0,0,0,.05)\n}\n.panel-body[data-v-6aa0a5fc]{padding:15px\n}\n.state-info .panel .summary[data-v-6aa0a5fc]{float:left;margin-right:20px\n}\n.state-info .panel .summary span[data-v-6aa0a5fc]{color:#49586e;font-size:13px;font-weight:400;text-transform:uppercase;margin-bottom:10px\n}\n.state-info .panel .summary h3.red-txt[data-v-6aa0a5fc]{color:#fc8675\n}\n.state-info .panel .summary h3.green-txt[data-v-6aa0a5fc]{color:#65cea7\n}\n.state-info .panel .summary h3[data-v-6aa0a5fc]{font-size:200%;font-weight:700;line-height:20px;margin:0\n}\n.page-heading h3[data-v-6aa0a5fc]{color:#49586e;font-size:25px;font-size:11%;font-weight:400;margin:10px 0\n}\n.chart-bar[data-v-6aa0a5fc]{float:right;margin-top:5px\n}\n.chart-bar img[data-v-6aa0a5fc]{display:inline-block;width:68px;height:45px;vertical-align:top\n}\n@media screen and (max-width:767px){\n.state-info[data-v-6aa0a5fc]{position:static;width:100%;margin-top:15px\n}\n.state-info .panel[data-v-6aa0a5fc]{width:100%\n}\n}\n.panel.blue-box[data-v-6aa0a5fc]{background:none repeat scroll 0 0 #5ab5de;box-shadow:0 5px 0 #51a3c7;color:#fff\n}\n.twt-info h3[data-v-6aa0a5fc]{font-family:'Open Sans',sans-serif;font-size:16px;font-weight:900;margin:10px 0 30px 0;text-align:center\n}\n.twt-info p[data-v-6aa0a5fc]{font-size:18px;line-height:25px;font-style:italic;margin:0 0 20px 0;text-align:center\n}\n.twt-info p a[data-v-6aa0a5fc]{color:#98fdf4\n}\n.media[data-v-6aa0a5fc]:first-child{margin-top:0\n}\n.media.usr-info>.pull-left[data-v-6aa0a5fc]{margin-right:20px;margin-top:10px\n}\n.media>.pull-left[data-v-6aa0a5fc]{margin-right:10px\n}\n.pull-left[data-v-6aa0a5fc]{float:left\n}\n.pull-left[data-v-6aa0a5fc]{float:left!important\n}\n.custom-trq-footer[data-v-6aa0a5fc]{background:none repeat scroll 0 0 #4eb6b7!important;box-shadow:0 5px 0 #46a3a4;color:#fff;border-top:none\n}\n.panel-footer[data-v-6aa0a5fc]{padding:10px 15px;background-color:#f5f5f5;border-top:1px solid #ddd;border-bottom-right-radius:3px;border-bottom-left-radius:3px\n}\n.usr-info .thumb[data-v-6aa0a5fc]{width:80px;height:80px;border-radius:50%;-webkit-border-radius:50%\n}\n.usr-info img[data-v-6aa0a5fc]{vertical-align:middle\n}\n.usr-info h4[data-v-6aa0a5fc]{color:#658585;margin-bottom:0\n}\n.media-heading[data-v-6aa0a5fc]{margin:0 0 5px\n}\n.usr-info .media-body span[data-v-6aa0a5fc]{color:#ea755c;font-size:12px;margin-bottom:20px;display:inline-block\n}\n.usr-info .media-body p[data-v-6aa0a5fc]{color:#b6bcbc\n}\nul.user-states[data-v-6aa0a5fc]{list-style-type:none;padding:20px 0\n}\nul.user-states li[data-v-6aa0a5fc]{text-align:center;float:left;width:33%;font-size:18px;margin:0\n}\r\n"],sourceRoot:""}])},655:function(a,t,e){var s=e(622);"string"==typeof s&&(s=[[a.i,s,""]]),s.locals&&(a.exports=s.locals);e(478)("eccb02fa",s,!0)},699:function(a,t){a.exports={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"animated fadeIn"},[e("Row",[e("Col",{attrs:{sm:24,md:8}},[e("h3",[a._v("👍WZ后台管理框架👍")]),a._v(" "),e("h5",[e("a",{attrs:{href:"https://github.com/herozhou/vue-framework-wz",target:"_blank"}},[a._v("github地址（喜欢就点个start呗）")])])]),a._v(" "),e("div",{staticClass:"state-info"},[e("section",{staticClass:"panel"},[e("div",{staticClass:"panel-body"},[e("div",{staticClass:"summary"},[e("span",[a._v("yearly  income")]),a._v(" "),e("h3",{staticClass:"green-txt"},[a._v("$ 45,600")])]),a._v(" "),e("div",{staticClass:"chart-bar",attrs:{id:"expense"}},[e("img",{attrs:{src:"static/img/greenincome.png"}})])])]),a._v(" "),e("section",{staticClass:"panel"},[e("div",{staticClass:"panel-body"},[e("div",{staticClass:"summary"},[e("span",[a._v("yearly expense")]),a._v(" "),e("h3",{staticClass:"red-txt"},[a._v("$ 45,600")])]),a._v(" "),e("div",{staticClass:"chart-bar",attrs:{id:"income"}},[e("img",{attrs:{src:"static/img/redincome.png"}})])])])])],1),a._v(" "),e("Row",{staticStyle:{"margin-top":"45px"},attrs:{gutter:16}},[e("Col",{attrs:{xs:24,sm:12,md:12,lg:12}},[e("div",{staticClass:"state-overview"},[e("Col",{attrs:{span:"12"}},[e("div",{staticClass:"panel purple"},[e("div",{staticClass:"symbol"},[e("Icon",{attrs:{type:"clipboard",size:"50",color:"white"}})],1),a._v(" "),e("div",{staticClass:"state-value"},[e("div",{staticClass:"value"},[a._v("\n                            230\n                        ")]),a._v(" "),e("div",{staticClass:"title"},[a._v("\n                          New Order\n                        ")])])])]),a._v(" "),e("Col",{attrs:{span:"12"}},[e("div",{staticClass:"panel red"},[e("div",{staticClass:"symbol"},[e("Icon",{attrs:{type:"pricetags",size:"50",color:"white"}})],1),a._v(" "),e("div",{staticClass:"state-value"},[e("div",{staticClass:"value"},[a._v("\n                            3490\n                        ")]),a._v(" "),e("div",{staticClass:"title"},[a._v("\n                            Copy Sold\n                        ")])])])])],1),a._v(" "),e("div",{staticClass:"state-overview"},[e("Col",{attrs:{span:"12"}},[e("div",{staticClass:"panel blue"},[e("div",{staticClass:"symbol"},[e("Icon",{attrs:{type:"cash",size:"50",color:"white"}})],1),a._v(" "),e("div",{staticClass:"state-value"},[e("div",{staticClass:"value"},[a._v("\n                          22014\n                        ")]),a._v(" "),e("div",{staticClass:"title"},[a._v("\n                           Total Revenue\n                        ")])])])]),a._v(" "),e("Col",{attrs:{span:"12"}},[e("div",{staticClass:"panel green"},[e("div",{staticClass:"symbol"},[e("Icon",{attrs:{type:"eye",size:"50",color:"white"}})],1),a._v(" "),e("div",{staticClass:"state-value"},[e("div",{staticClass:"value"},[a._v("\n                            390\n                        ")]),a._v(" "),e("div",{staticClass:"title"},[a._v("\n                             Unique Visitors\n                        ")])])])])],1)]),a._v(" "),e("Col",{attrs:{xs:24,sm:12,md:12,lg:12}},[e("dash-chart-visitor")],1)],1),a._v(" "),e("Row",{attrs:{gutter:16}},[e("Col",{attrs:{xs:24,sm:12,md:16,lg:16}},[e("dash-chart-large")],1),a._v(" "),e("Col",{attrs:{xs:24,sm:12,md:8,lg:8}},[e("div",{staticStyle:{"background-color":"white"}},[e("ul",[e("li",[e("div",{staticClass:"staff_list"},[e("div",{staticClass:"staff_avatar"},[e("Avatar",{attrs:{src:"../static/img/user1.png",size:"large"}})],1),a._v(" "),e("div",{staticClass:"staff_progress"},[e("p",[e("span",{staticClass:"staff_name"},[a._v(" Jhon James ")]),e("span",[a._v(" - Project Lead")])]),a._v(" "),e("Progress",{attrs:{percent:85,"stroke-width":8,status:"active"}})],1)]),a._v(" "),e("hr",{staticStyle:{height:"1px",border:"none","border-top":"1px dashed #0066CC"}})]),a._v(" "),e("li",[e("div",{staticClass:"staff_list"},[e("div",{staticClass:"staff_avatar"},[e("Avatar",{attrs:{src:"http://www.jq22.com/demo/AdminEx-141217204554/images/photos/user2.png",size:"large"}})],1),a._v(" "),e("div",{staticClass:"staff_progress"},[e("p",[e("span",{staticClass:"staff_name"},[a._v(" Jhon James ")]),e("span",[a._v(" - Project Lead")])]),a._v(" "),e("Progress",{attrs:{percent:90,"stroke-width":8,status:"success"}})],1)]),a._v(" "),e("hr",{staticStyle:{height:"1px",border:"none","border-top":"1px dashed #0066CC"}})]),a._v(" "),e("li",[e("div",{staticClass:"staff_list"},[e("div",{staticClass:"staff_avatar"},[e("Avatar",{attrs:{src:"http://www.jq22.com/demo/AdminEx-141217204554/images/photos/user3.png",size:"large"}})],1),a._v(" "),e("div",{staticClass:"staff_progress"},[e("p",[e("span",{staticClass:"staff_name"},[a._v(" Hoffman Doe ")]),e("span",[a._v(" - Support")])]),a._v(" "),e("Progress",{attrs:{percent:10,"stroke-width":8,status:"wrong"}})],1)]),a._v(" "),e("hr",{staticStyle:{height:"1px",border:"none","border-top":"1px dashed #0066CC"}})]),a._v(" "),e("li",[e("div",{staticClass:"staff_list"},[e("div",{staticClass:"staff_avatar"},[e("Avatar",{attrs:{src:"http://www.jq22.com/demo/AdminEx-141217204554/images/photos/user4.png",size:"large"}})],1),a._v(" "),e("div",{staticClass:"staff_progress"},[e("p",[e("span",{staticClass:"staff_name"},[a._v(" Jane Doe  ")]),e("span",[a._v(" - Marketing")])]),a._v(" "),e("Progress",{attrs:{percent:60,"stroke-width":8}})],1)])])])])])],1),a._v(" "),e("Row",{attrs:{gutter:16}},[e("Col",{attrs:{xs:12,sm:12,md:8,lg:8}},[e("vue-calendar")],1),a._v(" "),e("Col",{attrs:{xs:12,sm:12,md:9,lg:9}},[e("todo-list")],1),a._v(" "),e("Col",{attrs:{xs:24,sm:24,md:7,lg:7}},[e("div",{staticClass:"panel blue-box twt-info"},[e("div",{staticClass:"panel-body"},[e("h3",[a._v("19 Februay 2014")]),a._v(" "),e("p",[a._v("AdminEx is new model of admin\n                            dashboard "),e("a",{attrs:{href:"#"}},[a._v("http://t.co/3laCVziTw4")]),a._v("\n                            4 days ago by John Doe")])])]),a._v(" "),e("div",{staticClass:"panel",staticStyle:{"margin-top":"30px"}},[e("div",{staticClass:"panel-body"},[e("div",{staticClass:"media usr-info"},[e("a",{staticClass:"pull-left",attrs:{href:"#"}},[e("img",{staticClass:"thumb",attrs:{src:"http://www.jq22.com/demo/AdminEx-141217204554/images/photos/user2.png",alt:""}})]),a._v(" "),e("div",{staticClass:"media-body"},[e("h4",{staticClass:"media-heading"},[a._v("Mila Watson")]),a._v(" "),e("span",[a._v("Senior UI Designer")]),a._v(" "),e("p",[a._v("I use to design websites and applications for the web.")])])])]),a._v(" "),e("div",{staticClass:"panel-footer custom-trq-footer"},[e("ul",{staticClass:"user-states"},[e("li",[e("Icon",{attrs:{type:"heart",size:"25"}}),a._v("\n                                     127\n                                ")],1),a._v(" "),e("li",[e("Icon",{attrs:{type:"eye",size:"25"}}),a._v("\n                                     853\n                                ")],1),a._v(" "),e("li",[e("Icon",{attrs:{type:"person-add",size:"25"}}),a._v("\n                                   311\n                                ")],1)])])])])],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=32.1c17791064e1d60c2903.js.map