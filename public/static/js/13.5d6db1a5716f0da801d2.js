webpackJsonp([13],{479:function(e,o,t){function n(e){t(531)}var a=t(4)(t(526),t(533),n,"data-v-a7d2fb58",null);e.exports=a.exports},523:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={data:function(){return{imageList:[],imgName:"",visible:!1,uploadList:[]}},methods:{handleFormatError:function(e){this.$Notice.warning({title:"文件格式不正确",desc:e.name+" 的文件格式不正确，请选择jpg或png。"})},mounted:function(){console.info("mounted")},handleSuccess:function(e,o){console.info("-------handleSuccess------------"),this.imageList.push(e.filename),console.info("----end---handleSuccess------------")},remove:function(e){this.imageList.splice(this.imageList,1)},handleBeforeUpload:function(){var e=this.imageList.length<1;return e||this.$Notice.warning({title:"只能上传一个文件."}),e}},mounted:function(){console.info("===mounted======")}}},524:function(e,o,t){var n=t(4)(t(523),t(525),null,null,null);e.exports=n.exports},525:function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("Upload",{ref:"upload",attrs:{name:"logo",action:"api/uploadFile",accept:"image/gif, image/jpeg,image/*",format:["jpg","jpeg","png","gif"],"on-format-error":e.handleFormatError,"on-success":e.handleSuccess,"on-remove":e.remove,"before-upload":e.handleBeforeUpload}},[t("Button",{attrs:{icon:"ios-cloud-upload-outline"}},[e._v("Upload files")])],1)},staticRenderFns:[]}},526:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=t(524),a=t.n(n);o.default={name:"add-from",props:["todo"],components:{UploadFile:a.a},data:function(){return{id:"",ruleInline:{name:[{required:!0,message:"请填写用户名",trigger:"blur"}],weights:[{type:"integer",message:"不能为空，只能为数字",trigger:"blur"}]}}},methods:{handleSubmit:function(){var e=this;console.info("f到了"),this.loading=!0,this.todo.formItem.url=this.$refs.uploadFile.imageList,console.info(this.todo.formItem),this.$refs.addFromSub.validate(function(o){if(!o)return e.$Message.success("验证失败"),!1;e.$store.dispatch("AddCarousel",e.todo.formItem).then(function(o){console.info("成功回调"),0==o.data.code?(console.info(o.data),e.$Message.error("提交失败"),e.todo.modal12=!0,e.$emit("refreshFrom"),e.loading=!1):(console.info(o.data),e.$Message.success("提交成功"),e.todo.modal12=!1,e.$emit("refreshFrom"),e.loading=!1)}).catch(function(o){console.info(o),e.$message.error(o),e.loading=!1})})},cancel:function(){console.info("取消"),this.todo.modal12=!1}}}},529:function(e,o,t){o=e.exports=t(477)(!0),o.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"addFrom.vue",sourceRoot:""}])},531:function(e,o,t){var n=t(529);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);t(478)("144be50e",n,!0)},533:function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("Modal",{attrs:{"mask-closable":"false","mask-closable":!1,title:e.todo.titleN},model:{value:e.todo.modal12,callback:function(o){e.$set(e.todo,"modal12",o)},expression:"todo.modal12"}},[t("Form",{ref:"addFromSub",attrs:{model:e.todo.formItem,"label-width":80,rules:e.ruleInline}},[t("FormItem",{attrs:{label:"id",hidden:"true"}},[t("Input",{attrs:{placeholder:"id"},model:{value:e.todo.formItem.id,callback:function(o){e.$set(e.todo.formItem,"id",o)},expression:"todo.formItem.id"}})],1),e._v(" "),t("FormItem",{attrs:{label:"名称",prop:"name"}},[t("Input",{attrs:{placeholder:"轮播图名称"},model:{value:e.todo.formItem.name,callback:function(o){e.$set(e.todo.formItem,"name",o)},expression:"todo.formItem.name"}})],1),e._v(" "),t("FormItem",{attrs:{label:"图片上传"}},[t("upload-file",{ref:"uploadFile",attrs:{url:e.todo.formItem.url}})],1),e._v(" "),t("FormItem",{attrs:{label:"是否开启"}},[t("i-switch",{attrs:{"true-value":"1","false-value":"0",size:"large"},model:{value:e.todo.formItem.switch,callback:function(o){e.$set(e.todo.formItem,"switch",o)},expression:"todo.formItem.switch"}},[t("span",{attrs:{slot:"open"},slot:"open"},[e._v("On")]),e._v(" "),t("span",{attrs:{slot:"close"},slot:"close"},[e._v("Off")])])],1),e._v(" "),t("FormItem",{attrs:{label:"权重",prop:"weights"}},[t("Input",{attrs:{type:"text",placeholder:"显示的顺序",number:""},model:{value:e.todo.formItem.weights,callback:function(o){e.$set(e.todo.formItem,"weights",o)},expression:"todo.formItem.weights"}})],1),e._v(" "),t("FormItem",{attrs:{label:"说明"}},[t("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"简单说明以区分..."},model:{value:e.todo.formItem.description,callback:function(o){e.$set(e.todo.formItem,"description",o)},expression:"todo.formItem.description"}})],1),e._v(" "),t("FormItem",[t("Button",{attrs:{type:"primary"},on:{click:function(o){e.handleSubmit()}}},[e._v("Submit")]),e._v(" "),t("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(o){e.cancel()}}},[e._v("Cancel")])],1)],1),e._v(" "),t("div",{attrs:{slot:"footer"},slot:"footer"})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=13.5d6db1a5716f0da801d2.js.map