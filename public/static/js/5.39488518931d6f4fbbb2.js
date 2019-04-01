webpackJsonp([5,13],{480:function(e,o,t){function n(e){t(532)}var r=t(4)(t(529),t(534),n,"data-v-050892b4",null);e.exports=r.exports},523:function(e,o,t){function n(e){t(651)}var r=t(4)(t(607),t(693),n,"data-v-1e6e97d8",null);e.exports=r.exports},525:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={data:function(){return{imageList:[],imgName:"",visible:!1,uploadList:[]}},methods:{handleFormatError:function(e){this.$Notice.warning({title:"文件格式不正确",desc:e.name+" 的文件格式不正确，请选择jpg或png。"})},mounted:function(){console.info("mounted")},handleSuccess:function(e,o){console.info("-------handleSuccess------------"),console.info(e.filename),this.imageList.push(e.filename),console.info("----end---handleSuccess------------")},remove:function(e){this.imageList.splice(this.imageList,1)},handleBeforeUpload:function(){var e=this.imageList.length<1;return e||this.$Notice.warning({title:"只能上传一个文件."}),e}},mounted:function(){console.info("===mounted======")}}},526:function(e,o,t){var n=t(4)(t(525),t(527),null,null,null);e.exports=n.exports},527:function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("Upload",{ref:"upload",attrs:{name:"logo",action:"api/uploadFile",accept:"image/gif, image/jpeg,image/*",format:["jpg","jpeg","png","gif"],"on-format-error":e.handleFormatError,"on-success":e.handleSuccess,"on-remove":e.remove,"before-upload":e.handleBeforeUpload}},[t("Button",{attrs:{icon:"ios-cloud-upload-outline"}},[e._v("Upload files")])],1)},staticRenderFns:[]}},529:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=t(526),r=t.n(n);o.default={name:"add-from",props:["todo"],components:{UploadFile:r.a},data:function(){return{id:"",ruleInline:{name:[{required:!0,message:"请填写用户名",trigger:"blur"}],weights:[{type:"integer",message:"不能为空，只能为数字",trigger:"blur"}]}}},methods:{handleSubmit:function(){var e=this;console.info("f到了"),this.loading=!0,console.info(this.todo.formItem),this.$refs.addFromSub.validate(function(o){if(!o)return e.$Message.success("验证失败"),!1;e.$store.dispatch("AddNavigation",e.todo.formItem).then(function(o){console.info("成功回调"),0==o.data.code?(console.info(o.data),e.$Message.error("提交失败"),e.todo.modal12=!0,e.$emit("refreshFrom"),e.loading=!1):(console.info(o.data),e.$Message.success("提交成功"),e.todo.modal12=!1,e.$emit("refreshFrom"),e.loading=!1)}).catch(function(o){console.info(o),e.$message.error(o),e.loading=!1})})},cancel:function(){console.info("取消"),this.todo.modal12=!1}}}},530:function(e,o,t){o=e.exports=t(477)(!0),o.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"addFrom.vue",sourceRoot:""}])},532:function(e,o,t){var n=t(530);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);t(478)("2e348404",n,!0)},534:function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("Modal",{attrs:{"mask-closable":"false","mask-closable":!1,title:e.todo.titleN},model:{value:e.todo.modal12,callback:function(o){e.$set(e.todo,"modal12",o)},expression:"todo.modal12"}},[t("Form",{ref:"addFromSub",attrs:{model:e.todo.formItem,"label-width":80,rules:e.ruleInline}},[t("FormItem",{attrs:{label:"id",hidden:"true"}},[t("Input",{attrs:{placeholder:"id"},model:{value:e.todo.formItem.id,callback:function(o){e.$set(e.todo.formItem,"id",o)},expression:"todo.formItem.id"}})],1),e._v(" "),t("FormItem",{attrs:{label:"名称",prop:"name"}},[t("Input",{attrs:{placeholder:"首页导航名称"},model:{value:e.todo.formItem.name,callback:function(o){e.$set(e.todo.formItem,"name",o)},expression:"todo.formItem.name"}})],1),e._v(" "),t("FormItem",{attrs:{label:"略缩图上传"}},[t("upload-file",{ref:"uploadFile",attrs:{url:e.todo.formItem.url}})],1),e._v(" "),t("FormItem",{attrs:{label:"详情图上传"}},[t("upload-file",{ref:"uploadFilex",attrs:{url:e.todo.formItem.urlx}})],1),e._v(" "),t("FormItem",{attrs:{label:"跳转链接"}},[t("Input",{attrs:{placeholder:"需要跳转的网页"},model:{value:e.todo.formItem.goot_url,callback:function(o){e.$set(e.todo.formItem,"goot_url",o)},expression:"todo.formItem.goot_url"}})],1),e._v(" "),t("FormItem",{attrs:{label:"是否开启"}},[t("i-switch",{attrs:{"true-value":"1","false-value":"0",size:"large"},model:{value:e.todo.formItem.switchsb,callback:function(o){e.$set(e.todo.formItem,"switchsb",o)},expression:"todo.formItem.switchsb"}},[t("span",{attrs:{slot:"open"},slot:"open"},[e._v("On")]),e._v(" "),t("span",{attrs:{slot:"close"},slot:"close"},[e._v("Off")])])],1),e._v(" "),t("FormItem",{attrs:{label:"首页位置",prop:"weights"}},[t("Input",{attrs:{type:"text",placeholder:"显示的顺序",number:""},model:{value:e.todo.formItem.weights,callback:function(o){e.$set(e.todo.formItem,"weights",o)},expression:"todo.formItem.weights"}})],1),e._v(" "),t("FormItem",{attrs:{label:"说明"}},[t("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"简单说明以区分..."},model:{value:e.todo.formItem.description,callback:function(o){e.$set(e.todo.formItem,"description",o)},expression:"todo.formItem.description"}})],1),e._v(" "),t("FormItem",[t("Button",{attrs:{type:"primary"},on:{click:function(o){e.handleSubmit()}}},[e._v("Submit")]),e._v(" "),t("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(o){e.cancel()}}},[e._v("Cancel")])],1)],1),e._v(" "),t("div",{attrs:{slot:"footer"},slot:"footer"})],1)},staticRenderFns:[]}},607:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=t(183),r=t.n(n),a=t(184),i=t.n(a),s=t(480),l=t.n(s);o.default={name:"navigation",data:function(){var e=this;return{modal1:!1,delete:"",columns1:[{title:"序号",key:"id",width:60},{title:"名称",key:"name"},{title:"位置",key:"weights"},{title:"说明",key:"description"},{title:"略缩图",key:"url",render:function(o,t){var n=void 0,r=t.row.url;null==r&&(r="");var a=r.split(",");if(a.length>0&&r.length>5)return n=e.GLOBAL.imageUrl+a[0],o("img",{domProps:{src:n,width:"80"},props:{}})}},{title:"详情图",key:"urlx",render:function(o,t){var n=void 0,r=t.row.urlx;null==r&&(r=""),null==r&&(r="");var a=r.split(",");if(a.length>0&&r.length>5)return n=e.GLOBAL.imageUrl+a[0],o("img",{domProps:{src:n,width:"80"},props:{}})}},{title:"操作",key:"action",width:150,align:"center",render:function(o,t){return o("div",[o("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.addFrom.titleN="编辑";var o=JSON.parse(i()(t.row));delete o._index,delete o._rowKey,console.info(o),e.addFrom.modal12=!0,e.loading=!0,r()(e.addFrom.formItem,o),e.$refs.addFrom.$refs.uploadFilex.$refs.upload.clearFiles(),e.$refs.addFrom.$refs.uploadFile.$refs.upload.clearFiles()}}},"编辑"),o("Button",{props:{type:"error",size:"small"},on:{click:function(){e.delete=t,e.modal1=!0}}},"删除")])}}],data1:[],addFrom:{loading:!1,modal12:!1,titleN:"",id:"",formItem:{id:"",name:"",url:"",urlx:"",weights:"",description:"",switchsb:"",goot_url:""}},loading:!1}},created:function(){console.group("------created创建完毕状态------"),this.refresh()},methods:{ok:function(){this.$Message.info("操作成功"),this.remove(this.delete)},cancel:function(){this.$Message.info("操作取消")},show:function(e){this.addFrom.modal12=!0},remove:function(e){var o=this;console.info(e.index),this.$store.dispatch("DeleteNavigation",e.row.id).then(function(t){console.info(t),console.info("成功回调刷新表数据"),o.loading=!1,o.data1.splice(e.index,1)}).catch(function(e){o.$message.error(e),o.loading=!1})},add:function(){this.$refs.addFrom.$refs.uploadFile.$refs.upload.clearFiles(),this.$refs.addFrom.$refs.uploadFile.imageList=[],this.$refs.addFrom.$refs.addFromSub.resetFields(),this.addFrom.titleN="增加",this.addFrom.modal12=!0},refresh:function(){var e=this;this.loading=!0,this.$store.dispatch("GetNavigation").then(function(o){console.info("成功回调"),e.data1=o.data,e.loading=!1}).catch(function(o){console.info(o),e.$message.error(o),e.loading=!1})}},components:{"add-from":l.a}}},617:function(e,o,t){o=e.exports=t(477)(!0),o.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"navigation.vue",sourceRoot:""}])},651:function(e,o,t){var n=t(617);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);t(478)("78ce2bc3",n,!0)},693:function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"animated fadeIn"},[t("div",[t("Button",{attrs:{type:"info"},on:{click:e.add}},[e._v(" 增加")]),e._v(" "),t("Button",{attrs:{icon:"md-refresh",shape:"circle"},on:{click:e.refresh}})],1),e._v(" "),t("br"),e._v(" "),t("add-from",{ref:"addFrom",attrs:{todo:e.addFrom},on:{refreshFrom:e.refresh}}),e._v(" "),t("Table",{attrs:{columns:e.columns1,data:e.data1}}),e._v(" "),t("Modal",{attrs:{title:"操作确认"},on:{"on-ok":e.ok,"on-cancel":e.cancel},model:{value:e.modal1,callback:function(o){e.modal1=o},expression:"modal1"}},[t("p",[e._v("是否继续操作")])])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=5.39488518931d6f4fbbb2.js.map