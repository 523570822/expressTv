webpackJsonp([8,15],{479:function(e,t,o){function n(e){o(533)}var r=o(4)(o(528),o(535),n,"data-v-a7d2fb58",null);e.exports=r.exports},517:function(e,t,o){function n(e){o(655)}var r=o(4)(o(601),o(698),n,"data-v-3ebb3b14",null);e.exports=r.exports},525:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{imageList:[],imgName:"",visible:!1,uploadList:[]}},methods:{handleFormatError:function(e){this.$Notice.warning({title:"文件格式不正确",desc:e.name+" 的文件格式不正确，请选择jpg或png。"})},mounted:function(){console.info("mounted")},handleSuccess:function(e,t){console.info("-------handleSuccess------------"),console.info(e.filename),this.imageList.push(e.filename),console.info("----end---handleSuccess------------")},remove:function(e){this.imageList.splice(this.imageList,1)},handleBeforeUpload:function(){var e=this.imageList.length<1;return e||this.$Notice.warning({title:"只能上传一个文件."}),e}},mounted:function(){console.info("===mounted======")}}},526:function(e,t,o){var n=o(4)(o(525),o(527),null,null,null);e.exports=n.exports},527:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("Upload",{ref:"upload",attrs:{name:"logo",action:"api/uploadFile",accept:"image/gif, image/jpeg,image/*",format:["jpg","jpeg","png","gif"],"on-format-error":e.handleFormatError,"on-success":e.handleSuccess,"on-remove":e.remove,"before-upload":e.handleBeforeUpload}},[o("Button",{attrs:{icon:"ios-cloud-upload-outline"}},[e._v("Upload files")])],1)},staticRenderFns:[]}},528:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(526),r=o.n(n);t.default={name:"add-from",props:["todo"],components:{UploadFile:r.a},data:function(){return{id:"",ruleInline:{name:[{required:!0,message:"请填写用户名",trigger:"blur"}],weights:[{type:"integer",message:"不能为空，只能为数字",trigger:"blur"}]}}},methods:{handleSubmit:function(){var e=this;console.info("f到了"),this.loading=!0,this.todo.formItem.url=this.$refs.uploadFile.imageList,console.info(this.todo.formItem),this.$refs.addFromSub.validate(function(t){if(!t)return e.$Message.success("验证失败"),!1;e.$store.dispatch("AddCarousel",e.todo.formItem).then(function(t){console.info("成功回调"),0==t.data.code?(console.info(t.data),e.$Message.error("提交失败"),e.todo.modal12=!0,e.$emit("refreshFrom"),e.loading=!1):(console.info(t.data),e.$Message.success("提交成功"),e.todo.modal12=!1,e.$emit("refreshFrom"),e.loading=!1)}).catch(function(t){console.info(t),e.$message.error(t),e.loading=!1})})},cancel:function(){console.info("取消"),this.todo.modal12=!1}}}},531:function(e,t,o){t=e.exports=o(477)(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"addFrom.vue",sourceRoot:""}])},533:function(e,t,o){var n=o(531);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);o(478)("144be50e",n,!0)},535:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("Modal",{attrs:{"mask-closable":"false","mask-closable":!1,title:e.todo.titleN},model:{value:e.todo.modal12,callback:function(t){e.$set(e.todo,"modal12",t)},expression:"todo.modal12"}},[o("Form",{ref:"addFromSub",attrs:{model:e.todo.formItem,"label-width":80,rules:e.ruleInline}},[o("FormItem",{attrs:{label:"id",hidden:"true"}},[o("Input",{attrs:{placeholder:"id"},model:{value:e.todo.formItem.id,callback:function(t){e.$set(e.todo.formItem,"id",t)},expression:"todo.formItem.id"}})],1),e._v(" "),o("FormItem",{attrs:{label:"名称",prop:"name"}},[o("Input",{attrs:{placeholder:"轮播图名称"},model:{value:e.todo.formItem.name,callback:function(t){e.$set(e.todo.formItem,"name",t)},expression:"todo.formItem.name"}})],1),e._v(" "),o("FormItem",{attrs:{label:"图片上传"}},[o("upload-file",{ref:"uploadFile",attrs:{url:e.todo.formItem.url}})],1),e._v(" "),o("FormItem",{attrs:{label:"是否开启"}},[o("i-switch",{attrs:{"true-value":"1","false-value":"0",size:"large"},model:{value:e.todo.formItem.switch,callback:function(t){e.$set(e.todo.formItem,"switch",t)},expression:"todo.formItem.switch"}},[o("span",{attrs:{slot:"open"},slot:"open"},[e._v("On")]),e._v(" "),o("span",{attrs:{slot:"close"},slot:"close"},[e._v("Off")])])],1),e._v(" "),o("FormItem",{attrs:{label:"权重",prop:"weights"}},[o("Input",{attrs:{type:"text",placeholder:"显示的顺序",number:""},model:{value:e.todo.formItem.weights,callback:function(t){e.$set(e.todo.formItem,"weights",t)},expression:"todo.formItem.weights"}})],1),e._v(" "),o("FormItem",{attrs:{label:"说明"}},[o("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"简单说明以区分..."},model:{value:e.todo.formItem.description,callback:function(t){e.$set(e.todo.formItem,"description",t)},expression:"todo.formItem.description"}})],1),e._v(" "),o("FormItem",[o("Button",{attrs:{type:"primary"},on:{click:function(t){e.handleSubmit()}}},[e._v("Submit")]),e._v(" "),o("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(t){e.cancel()}}},[e._v("Cancel")])],1)],1),e._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"})],1)},staticRenderFns:[]}},601:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(183),r=o.n(n),a=o(479),i=o.n(a);o(18);t.default={name:"carouselMap",data:function(){var e=this;return{columns1:[{title:"序号",key:"id",width:60},{title:"属性",key:"type",width:60,render:function(e,t){var o="关闭",n="";return 1==t.row.switch?(o="开启",n="red"):t.row.switch,e("font",{domProps:{color:n,width:"80"},props:{}},o)}},{title:"名称",key:"name"},{title:"说明",key:"description"},{title:"略缩图",key:"url",render:function(e,t){return e("img",{domProps:{src:t.row.url,width:"80"},props:{}})}},{title:"顺序",key:"weights"},{title:"操作",key:"action",width:150,align:"center",render:function(t,o){return t("div",[t("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.addFrom.titleN="编辑",r()(e.addFrom.formItem,o.row);var t=[{showProgress:!1,status:"finished",name:"a42bdcc1178e62b4694c830f028db5c0",url:e.addFrom.formItem.url}];e.$set(e.addFrom.formItem,"defaultList",t),e.addFrom.modal12=!0,e.loading=!0}}},"编辑")])}}],data1:[],addFrom:{loading:!1,modal12:!1,titleN:"",id:"",formItem:{id:"",name:"",switch:0,url:"",weights:"",description:""}}}},created:function(){console.group("------created创建完毕状态------"),this.refresh()},methods:{show:function(e){this.addFrom.modal12=!0},remove:function(e){this.data1.splice(e,1)},add:function(){this.addFrom.titleN="增加",this.addFrom.modal12=!0},refresh:function(){var e=this;this.loading=!0,this.$store.dispatch("GetCarouserAll").then(function(t){console.info("成功回调"),e.data1=t.data,e.loading=!1}).catch(function(t){console.info(t),e.$message.error(t),e.loading=!1})}},components:{"add-from":i.a}}},621:function(e,t,o){t=e.exports=o(477)(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"familyCombo.vue",sourceRoot:""}])},655:function(e,t,o){var n=o(621);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);o(478)("87ea6a3c",n,!0)},698:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"animated fadeIn"},[o("div",[o("Button",{attrs:{type:"info"},on:{click:e.add}},[e._v(" 增加")]),e._v(" "),o("Button",{attrs:{icon:"md-refresh",shape:"circle"},on:{click:e.refresh}})],1),o("br"),e._v(" "),o("add-from",{ref:"addFrom",attrs:{todo:e.addFrom}}),e._v(" "),o("Table",{attrs:{columns:e.columns1,data:e.data1}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=8.c4a59db8ee79b72bb9c4.js.map