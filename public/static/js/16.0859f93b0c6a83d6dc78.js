webpackJsonp([16],{515:function(t,o,a){function l(t){a(660)}var n=a(4)(a(594),a(707),l,null,null);t.exports=n.exports},594:function(t,o,a){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={data:function(){return{file:null,loadingStatus:!1,defaultList:[{name:"a42bdcc1178e62b4694c830f028db5c0",url:"https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar"},{name:"bc7521e033abdd1e92222d733590f104",url:"https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar"}],imgName:"",visible:!1,uploadList:[]}},methods:{handleUpload:function(t){return this.file=t,!1},upload:function(){var t=this;this.loadingStatus=!0,setTimeout(function(){t.file=null,t.loadingStatus=!1,t.$Message.success("上传成功")},1500)},handleView:function(t){this.imgName=t,this.visible=!0},handleRemove:function(t){var o=this.$refs.upload.fileList;this.$refs.upload.fileList.splice(o.indexOf(t),1)},handleSuccess:function(t,o){o.url="https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar",o.name="7eb99afb9d5f317c912f08b5212fd69a"},handleFormatError:function(t){this.$Notice.warning({title:"文件格式不正确",desc:"文件 "+t.name+" 格式不正确，请上传 jpg 或 png 格式的图片。"})},handleMaxSize:function(t){this.$Notice.warning({title:"超出文件大小限制",desc:"文件 "+t.name+" 太大，不能超过 2M。"})},handleBeforeUpload:function(){var t=this.uploadList.length<5;return t||this.$Notice.warning({title:"最多只能上传 5 张图片。"}),t}},mounted:function(){this.uploadList=this.$refs.upload.fileList}}},627:function(t,o,a){o=t.exports=a(477)(!0),o.push([t.i,".demo-upload-list{display:inline-block;width:60px;height:60px;text-align:center;line-height:60px;border:1px solid transparent;border-radius:4px;overflow:hidden;background:#fff;position:relative;box-shadow:0 1px 1px rgba(0,0,0,.2);margin-right:4px}.demo-upload-list img{width:100%;height:100%}.demo-upload-list-cover{display:none;position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.6)}.demo-upload-list:hover .demo-upload-list-cover{display:block}.demo-upload-list-cover i{color:#fff;font-size:20px;cursor:pointer;margin:0 2px}","",{version:3,sources:["D:/ziliao/vue-framework-wz/src/views/components/Upload.vue"],names:[],mappings:"AACA,kBACI,qBAAsB,AACtB,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,iBAAkB,AAClB,6BAA8B,AAC9B,kBAAmB,AACnB,gBAAiB,AACjB,gBAAiB,AACjB,kBAAmB,AACnB,oCAAqC,AACrC,gBAAkB,CACrB,AACD,sBACI,WAAY,AACZ,WAAa,CAChB,AACD,wBACI,aAAc,AACd,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,OAAQ,AACR,QAAS,AACT,yBAA2B,CAC9B,AACD,gDACI,aAAe,CAClB,AACD,0BACI,WAAY,AACZ,eAAgB,AAChB,eAAgB,AAChB,YAAc,CACjB",file:"Upload.vue",sourcesContent:["\n.demo-upload-list{\n    display: inline-block;\n    width: 60px;\n    height: 60px;\n    text-align: center;\n    line-height: 60px;\n    border: 1px solid transparent;\n    border-radius: 4px;\n    overflow: hidden;\n    background: #fff;\n    position: relative;\n    box-shadow: 0 1px 1px rgba(0,0,0,.2);\n    margin-right: 4px;\n}\n.demo-upload-list img{\n    width: 100%;\n    height: 100%;\n}\n.demo-upload-list-cover{\n    display: none;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(0,0,0,.6);\n}\n.demo-upload-list:hover .demo-upload-list-cover{\n    display: block;\n}\n.demo-upload-list-cover i{\n    color: #fff;\n    font-size: 20px;\n    cursor: pointer;\n    margin: 0 2px;\n}\n"],sourceRoot:""}])},660:function(t,o,a){var l=a(627);"string"==typeof l&&(l=[[t.i,l,""]]),l.locals&&(t.exports=l.locals);a(478)("7082a8d0",l,!0)},707:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",[a("Row",[a("Col",{attrs:{md:4}},[a("div",{staticClass:"doc-header"},[a("Upload",{attrs:{action:"//jsonplaceholder.typicode.com/posts/"}},[a("Button",{attrs:{type:"ghost",icon:"ios-cloud-upload-outline"}},[t._v("上传文件")])],1)],1),t._v(" "),a("div",{staticClass:"doc-content"},[a("h5",[t._v("自定义时间轴点")]),t._v(" "),a("p",[t._v("接受一个 slot 来自定义轴点的内容，比如一个图标。")])])]),t._v(" "),a("Col",{attrs:{md:8}},[a("div",{staticClass:"highlight",staticStyle:{background:"#f0f0f0"}},[a("pre",{staticStyle:{"line-height":"125%"}},[a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<template>")]),t._v("\r\n    "),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<Upload")]),t._v(" "),a("span",{staticStyle:{color:"#4070a0"}},[t._v('action="//jsonplaceholder.typicode.com/posts/"')]),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v(">")]),t._v("\r\n        "),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<Button")]),t._v(" "),a("span",{staticStyle:{color:"#4070a0"}},[t._v('type="ghost"')]),t._v(" "),a("span",{staticStyle:{color:"#4070a0"}},[t._v('icon="ios-cloud-upload-outline"')]),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v(">")]),t._v("上传文件"),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("</Button>")]),t._v("\r\n    "),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("</Upload>")]),t._v("\r\n"),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("</template>")]),t._v("\r\n"),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<script>")]),t._v("\r\n    export default {\r\n        \r\n    }\r\n"),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<\/script>")]),t._v("\r\n")])])])],1),t._v(" "),a("Row",[a("Col",{attrs:{md:4}},[a("div",{staticClass:"doc-header"},[a("Upload",{attrs:{multiple:"",action:"//jsonplaceholder.typicode.com/posts/"}},[a("Button",{attrs:{type:"ghost",icon:"ios-cloud-upload-outline"}},[t._v("上传文件")])],1)],1),t._v(" "),a("div",{staticClass:"doc-content"},[a("h5",[t._v("多选")]),t._v(" "),a("p",[t._v("设置属性 multiple，可以选择多个文件。")])])]),t._v(" "),a("Col",{attrs:{md:8}},[a("div",{staticClass:"highlight",staticStyle:{background:"#f0f0f0"}},[a("pre",{staticStyle:{"line-height":"125%"}},[a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<template>")]),t._v("\r\n    "),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<Upload")]),t._v("\r\n        "),a("span",{staticStyle:{color:"#4070a0"}},[t._v("multiple")]),t._v("\r\n        "),a("span",{staticStyle:{color:"#4070a0"}},[t._v('action="//jsonplaceholder.typicode.com/posts/"')]),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v(">")]),t._v("\r\n        "),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<Button")]),t._v(" "),a("span",{staticStyle:{color:"#4070a0"}},[t._v('type="ghost"')]),t._v(" "),a("span",{staticStyle:{color:"#4070a0"}},[t._v('icon="ios-cloud-upload-outline"')]),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v(">")]),t._v("上传文件"),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("</Button>")]),t._v("\r\n    "),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("</Upload>")]),t._v("\r\n"),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("</template>")]),t._v("\r\n"),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<script>")]),t._v("\r\n    export default {\r\n        \r\n    }\r\n"),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<\/script>")]),t._v("\r\n")])])])],1),t._v(" "),a("Row",[a("Col",{attrs:{md:4}},[a("div",{staticClass:"doc-header"},[a("div",[a("Upload",{attrs:{"before-upload":t.handleUpload,action:"//jsonplaceholder.typicode.com/posts/"}},[a("Button",{attrs:{type:"ghost",icon:"ios-cloud-upload-outline"}},[t._v("选择要上传文件的文件")])],1),t._v(" "),null!==t.file?a("div",[t._v("待上传文件："+t._s(t.file.name)+" "),a("Button",{attrs:{type:"text",loading:t.loadingStatus},on:{click:t.upload}},[t._v(t._s(t.loadingStatus?"上传中":"点击上传"))])],1):t._e()],1)]),t._v(" "),a("div",{staticClass:"doc-content"},[a("h5",[t._v("手动上传")]),t._v(" "),a("p",[t._v(" 绑定 before-upload，并返回false，可以阻止默认上传流程，手动控制文件上传。。")])])]),t._v(" "),a("Col",{attrs:{md:8}},[a("div",{staticClass:"highlight",staticStyle:{background:"#f0f0f0"}},[a("pre",{staticStyle:{"line-height":"125%"}},[a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<template>")]),t._v("\r\n    "),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<div>")]),t._v("\r\n        "),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<Upload")]),t._v("\r\n            "),a("span",{staticStyle:{color:"#4070a0"}},[t._v(':before-upload="handleUpload"')]),t._v("\r\n            "),a("span",{staticStyle:{color:"#4070a0"}},[t._v('action="//jsonplaceholder.typicode.com/posts/"')]),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v(">")]),t._v("\r\n            "),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<Button")]),t._v(" "),a("span",{staticStyle:{color:"#4070a0"}},[t._v('type="ghost"')]),t._v(" "),a("span",{staticStyle:{color:"#4070a0"}},[t._v('icon="ios-cloud-upload-outline"')]),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v(">")]),t._v("选择要上传文件的文件"),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("</Button>")]),t._v("\r\n        "),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("</Upload>")]),t._v("\r\n        "),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<div")]),t._v(" "),a("span",{staticStyle:{color:"#4070a0"}},[t._v('v-if="file !== null"')]),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v(">")]),t._v("待上传文件："),a("span",{},[t._v("{{")]),t._v(" file.name }} "),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<Button")]),t._v(" "),a("span",{staticStyle:{color:"#4070a0"}},[t._v('type="text"')]),t._v(" "),a("span",{},[t._v("@")]),a("span",{staticStyle:{color:"#4070a0"}},[t._v('click="upload"')]),t._v(" "),a("span",{staticStyle:{color:"#4070a0"}},[t._v(':loading="loadingStatus"')]),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v(">")]),a("span",{},[t._v("{{")]),t._v(" loadingStatus ? '上传中' : '点击上传' }}"),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("</Button></div>")]),t._v("\r\n    "),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("</div>")]),t._v("\r\n"),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("</template>")]),t._v("\r\n"),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<script>")]),t._v("\r\n    export default "),a("span",{},[t._v("{")]),t._v("\r\n        data () "),a("span",{},[t._v("{")]),t._v("\r\n            return "),a("span",{},[t._v("{")]),t._v("\r\n                file: null,\r\n                loadingStatus: false\r\n            }\r\n        },\r\n        methods: "),a("span",{},[t._v("{")]),t._v("\r\n            handleUpload (file) "),a("span",{},[t._v("{")]),t._v("\r\n                this.file = file;\r\n                return false;\r\n            },\r\n            upload () "),a("span",{},[t._v("{")]),t._v("\r\n                this.loadingStatus = true;\r\n                setTimeout(() => "),a("span",{},[t._v("{")]),t._v("\r\n                    this.file = null;\r\n                    this.loadingStatus = false;\r\n                    this.$"),a("span",{staticStyle:{color:"#bb60d5"}},[t._v("Message")]),t._v("."),a("span",{staticStyle:{color:"#bb60d5"}},[t._v("success")]),t._v("("),a("span",{staticStyle:{color:"#4070a0"}},[t._v("'上传成功'")]),t._v(")\r\n                }, 1500);\r\n            }\r\n        }\r\n    }\r\n"),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<\/script>")]),t._v("\r\n")])])])],1),t._v(" "),a("Row",[a("Col",{attrs:{md:4}},[a("div",{staticClass:"doc-header"},[a("Upload",{attrs:{multiple:"",type:"drag",action:"//jsonplaceholder.typicode.com/posts/"}},[a("div",{staticStyle:{padding:"20px 0"}},[a("Icon",{staticStyle:{color:"#3399ff"},attrs:{type:"ios-cloud-upload",size:"52"}}),t._v(" "),a("p",[t._v("点击或将文件拖拽到这里上传")])],1)])],1),t._v(" "),a("div",{staticClass:"doc-content"},[a("h5",[t._v("拖拽上传")]),t._v(" "),a("p",[t._v("设置属性 type 为 drag，可以拖拽上传。")])])]),t._v(" "),a("Col",{attrs:{md:8}},[a("div",{staticClass:"highlight",staticStyle:{background:"#f0f0f0"}},[a("pre",{staticStyle:{"line-height":"125%"}},[a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<template>")]),t._v("\r\n    "),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<Upload")]),t._v("\r\n        "),a("span",{},[t._v("multiple")]),t._v("\r\n        "),a("span",{staticStyle:{color:"#4070a0"}},[t._v('type="drag"')]),t._v("\r\n        "),a("span",{staticStyle:{color:"#4070a0"}},[t._v('action="//jsonplaceholder.typicode.com/posts/"')]),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v(">")]),t._v("\r\n        "),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<div")]),t._v(" "),a("span",{staticStyle:{color:"#4070a0"}},[t._v('style="padding: 20px 0"')]),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v(">")]),t._v("\r\n            "),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<Icon")]),t._v(" "),a("span",{staticStyle:{color:"#4070a0"}},[t._v('type="ios-cloud-upload"')]),t._v(" "),a("span",{staticStyle:{color:"#4070a0"}},[t._v('size="52"')]),t._v(" "),a("span",{staticStyle:{color:"#4070a0"}},[t._v('style="color: #3399ff"')]),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("></Icon>")]),t._v("\r\n            "),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<p>")]),t._v("点击或将文件拖拽到这里上传"),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("</p>")]),t._v("\r\n        "),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("</div>")]),t._v("\r\n    "),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("</Upload>")]),t._v("\r\n"),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("</template>")]),t._v("\r\n"),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<script>")]),t._v("\r\n    export default {\r\n        \r\n    }\r\n"),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<\/script>")]),t._v("\r\n")])])])],1),t._v(" "),a("Row",[a("Col",{attrs:{md:4}},[a("div",{staticClass:"doc-header"},[a("div",[t._l(t.uploadList,function(o){return a("div",{staticClass:"demo-upload-list"},["finished"===o.status?[a("img",{attrs:{src:o.url}}),t._v(" "),a("div",{staticClass:"demo-upload-list-cover"},[a("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(a){t.handleView(o.name)}}}),t._v(" "),a("Icon",{attrs:{type:"ios-trash-outline"},nativeOn:{click:function(a){t.handleRemove(o)}}})],1)]:[o.showProgress?a("Progress",{attrs:{percent:o.percentage,"hide-info":""}}):t._e()]],2)}),t._v(" "),a("Upload",{ref:"upload",staticStyle:{display:"inline-block",width:"58px"},attrs:{"show-upload-list":!1,"default-file-list":t.defaultList,"on-success":t.handleSuccess,format:["jpg","jpeg","png"],"max-size":2048,"on-format-error":t.handleFormatError,"on-exceeded-size":t.handleMaxSize,"before-upload":t.handleBeforeUpload,multiple:"",type:"drag",action:"//jsonplaceholder.typicode.com/posts/"}},[a("div",{staticStyle:{width:"58px",height:"58px","line-height":"58px"}},[a("Icon",{attrs:{type:"camera",size:"20"}})],1)]),t._v(" "),a("Modal",{attrs:{title:"查看图片"},model:{value:t.visible,callback:function(o){t.visible=o},expression:"visible"}},[t.visible?a("img",{staticStyle:{width:"100%"},attrs:{src:"https://o5wwk8baw.qnssl.com/"+t.imgName+"/large"}}):t._e()])],2)]),t._v(" "),a("div",{staticClass:"doc-content"},[a("h5",[t._v("自定义上传列表")]),t._v(" "),a("p",[t._v("可以自由控制上传列表，完成各种业务逻辑，示例是一个照片墙，可以查看大图和删除。")]),t._v(" "),a("p",[t._v("设置属性 show-upload-list 为 false，可以不显示默认的上传列表")]),t._v(" "),a("p",[t._v("设置属性 default-file-list 设置默认已上传的列表。 ")]),t._v(" "),a("p",[t._v("通过 on-success 等属性来控制完整的上传过程，详见API。")]),t._v(" "),a("p",[t._v("另外，可以通过丰富的配置，来定制上传需求，本例中包含了：")]),t._v(" "),a("p",[t._v("文件必须是 jpg 或 png 格式的图片。")]),t._v(" "),a("p",[t._v("最多上传5张图片。")]),t._v(" "),a("p",[t._v("每个文件大小不超过 2M。 ")])])]),t._v(" "),a("Col",{attrs:{md:8}},[a("div",{staticClass:"highlight",staticStyle:{background:"#f0f0f0"}},[a("pre",{staticStyle:{"line-height":"125%"}},[a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<template>")]),t._v("\r\n    "),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<div")]),t._v(" "),a("span",{staticStyle:{color:"#4070a0"}},[t._v('class="demo-upload-list"')]),t._v(" "),a("span",{staticStyle:{color:"#4070a0"}},[t._v('v-for="item in uploadList"')]),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v(">")]),t._v("\r\n        "),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<template")]),t._v(" "),a("span",{staticStyle:{color:"#4070a0"}},[t._v("v-if=\"item.status === 'finished'\"")]),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v(">")]),t._v("\r\n            "),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<img")]),t._v(" "),a("span",{staticStyle:{color:"#4070a0"}},[t._v(':src="item.url"')]),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v(">")]),t._v("\r\n            "),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<div")]),t._v(" "),a("span",{staticStyle:{color:"#4070a0"}},[t._v('class="demo-upload-list-cover"')]),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v(">")]),t._v("\r\n                "),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<Icon")]),t._v(" "),a("span",{staticStyle:{color:"#4070a0"}},[t._v('type="ios-eye-outline"')]),t._v(" "),a("span",{},[t._v("@")]),a("span",{staticStyle:{color:"#4070a0"}},[t._v('click.native="handleView(item.name)"')]),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("></Icon>")]),t._v("\r\n                "),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<Icon")]),t._v(" "),a("span",{staticStyle:{color:"#4070a0"}},[t._v('type="ios-trash-outline"')]),t._v(" "),a("span",{},[t._v("@")]),a("span",{staticStyle:{color:"#4070a0"}},[t._v('click.native="handleRemove(item)"')]),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("></Icon>")]),t._v("\r\n            "),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("</div>")]),t._v("\r\n        "),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("</template>")]),t._v("\r\n        "),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<template")]),t._v(" "),a("span",{},[t._v("v-else")]),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v(">")]),t._v("\r\n            "),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<Progress")]),t._v(" "),a("span",{staticStyle:{color:"#4070a0"}},[t._v('v-if="item.showProgress"')]),t._v(" "),a("span",{staticStyle:{color:"#4070a0"}},[t._v(':percent="item.percentage"')]),t._v(" "),a("span",{},[t._v("hide-info")]),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("></Progress>")]),t._v("\r\n        "),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("</template>")]),t._v("\r\n    "),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("</div>")]),t._v("\r\n    "),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<Upload")]),t._v("\r\n        "),a("span",{staticStyle:{color:"#4070a0"}},[t._v('ref="upload"')]),t._v("\r\n        "),a("span",{staticStyle:{color:"#4070a0"}},[t._v(':show-upload-list="false"')]),t._v("\r\n        "),a("span",{staticStyle:{color:"#4070a0"}},[t._v(':default-file-list="defaultList"')]),t._v("\r\n        "),a("span",{staticStyle:{color:"#4070a0"}},[t._v(':on-success="handleSuccess"')]),t._v("\r\n        "),a("span",{staticStyle:{color:"#4070a0"}},[t._v(":format=\"['jpg','jpeg','png']\"")]),t._v("\r\n        "),a("span",{staticStyle:{color:"#4070a0"}},[t._v(':max-size="2048"')]),t._v("\r\n        "),a("span",{staticStyle:{color:"#4070a0"}},[t._v(':on-format-error="handleFormatError"')]),t._v("\r\n        "),a("span",{staticStyle:{color:"#4070a0"}},[t._v(':on-exceeded-size="handleMaxSize"')]),t._v("\r\n        "),a("span",{staticStyle:{color:"#4070a0"}},[t._v(':before-upload="handleBeforeUpload"')]),t._v("\r\n        "),a("span",{},[t._v("multiple")]),t._v("\r\n        "),a("span",{staticStyle:{color:"#4070a0"}},[t._v('type="drag"')]),t._v("\r\n        "),a("span",{staticStyle:{color:"#4070a0"}},[t._v('action="//jsonplaceholder.typicode.com/posts/"')]),t._v("\r\n        "),a("span",{staticStyle:{color:"#4070a0"}},[t._v('style="display: inline-block;width:58px;"')]),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v(">")]),t._v("\r\n        "),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<div")]),t._v(" "),a("span",{staticStyle:{color:"#4070a0"}},[t._v('style="width: 58px;height:58px;line-height: 58px;"')]),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v(">")]),t._v("\r\n            "),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<Icon")]),t._v(" "),a("span",{staticStyle:{color:"#4070a0"}},[t._v('type="camera"')]),t._v(" "),a("span",{staticStyle:{color:"#4070a0"}},[t._v('size="20"')]),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("></Icon>")]),t._v("\r\n        "),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("</div>")]),t._v("\r\n    "),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("</Upload>")]),t._v("\r\n    "),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<Modal")]),t._v(" "),a("span",{staticStyle:{color:"#4070a0"}},[t._v('title="查看图片"')]),t._v(" "),a("span",{staticStyle:{color:"#4070a0"}},[t._v('v-model="visible"')]),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v(">")]),t._v("\r\n        "),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<img")]),t._v(" "),a("span",{staticStyle:{color:"#4070a0"}},[t._v(":src=\"'https://o5wwk8baw.qnssl.com/' + imgName + '/large'\"")]),t._v(" "),a("span",{staticStyle:{color:"#4070a0"}},[t._v('v-if="visible"')]),t._v(" "),a("span",{staticStyle:{color:"#4070a0"}},[t._v('style="width: 100%"')]),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v(">")]),t._v("\r\n    "),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("</Modal>")]),t._v("\r\n"),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("</template>")]),t._v("\r\n"),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<script>")]),t._v("\r\n    export default "),a("span",{},[t._v("{")]),t._v("\r\n        data () "),a("span",{},[t._v("{")]),t._v("\r\n            return "),a("span",{},[t._v("{")]),t._v("\r\n                defaultList: [\r\n                    "),a("span",{},[t._v("{")]),t._v("\r\n                        'name': 'a42bdcc1178e62b4694c830f028db5c0',\r\n                        'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'\r\n                    },\r\n                    "),a("span",{},[t._v("{")]),t._v("\r\n                        'name': 'bc7521e033abdd1e92222d733590f104',\r\n                        'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'\r\n                    }\r\n                ],\r\n                imgName: '',\r\n                visible: false,\r\n                uploadList: []\r\n            }\r\n        },\r\n        methods: "),a("span",{},[t._v("{")]),t._v("\r\n            handleView (name) "),a("span",{},[t._v("{")]),t._v("\r\n                this.imgName = name;\r\n                this.visible = true;\r\n            },\r\n            handleRemove (file) "),a("span",{},[t._v("{")]),t._v("\r\n                // 从 upload 实例删除数据\r\n                const fileList = this.$"),a("span",{staticStyle:{color:"#bb60d5"}},[t._v("refs")]),t._v("."),a("span",{staticStyle:{color:"#bb60d5"}},[t._v("upload")]),t._v("."),a("span",{staticStyle:{color:"#bb60d5"}},[t._v("fileList")]),t._v(";\r\n                this.$"),a("span",{staticStyle:{color:"#bb60d5"}},[t._v("refs")]),t._v("."),a("span",{staticStyle:{color:"#bb60d5"}},[t._v("upload")]),t._v("."),a("span",{staticStyle:{color:"#bb60d5"}},[t._v("fileList")]),t._v("."),a("span",{staticStyle:{color:"#bb60d5"}},[t._v("splice")]),t._v("("),a("span",{},[t._v("fileList.indexOf")]),t._v("("),a("span",{},[t._v("file")]),t._v("), "),a("span",{staticStyle:{color:"#40a070"}},[t._v("1")]),t._v(");\r\n            },\r\n            handleSuccess (res, file) "),a("span",{},[t._v("{")]),t._v("\r\n                // 因为上传过程为实例，这里模拟添加 url\r\n                file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';\r\n                file.name = '7eb99afb9d5f317c912f08b5212fd69a';\r\n            },\r\n            handleFormatError (file) "),a("span",{},[t._v("{")]),t._v("\r\n                this.$"),a("span",{staticStyle:{color:"#bb60d5"}},[t._v("Notice")]),t._v("."),a("span",{staticStyle:{color:"#bb60d5"}},[t._v("warning")]),t._v("("),a("span",{},[t._v("{")]),t._v("\r\n                    "),a("span",{},[t._v("title:")]),t._v(" "),a("span",{staticStyle:{color:"#4070a0"}},[t._v("'文件格式不正确'")]),t._v(",\r\n                    "),a("span",{},[t._v("desc:")]),t._v(" "),a("span",{staticStyle:{color:"#4070a0"}},[t._v("'文件 '")]),t._v(" "),a("span",{},[t._v("+")]),t._v(" "),a("span",{},[t._v("file.name")]),t._v(" "),a("span",{},[t._v("+")]),t._v(" "),a("span",{staticStyle:{color:"#4070a0"}},[t._v("' 格式不正确，请上传 jpg 或 png 格式的图片。'")]),t._v("\r\n                "),a("span",{},[t._v("}")]),t._v(");\r\n            },\r\n            handleMaxSize (file) "),a("span",{},[t._v("{")]),t._v("\r\n                this.$"),a("span",{staticStyle:{color:"#bb60d5"}},[t._v("Notice")]),t._v("."),a("span",{staticStyle:{color:"#bb60d5"}},[t._v("warning")]),t._v("("),a("span",{},[t._v("{")]),t._v("\r\n                    "),a("span",{},[t._v("title:")]),t._v(" "),a("span",{staticStyle:{color:"#4070a0"}},[t._v("'超出文件大小限制'")]),t._v(",\r\n                    "),a("span",{},[t._v("desc:")]),t._v(" "),a("span",{staticStyle:{color:"#4070a0"}},[t._v("'文件 '")]),t._v(" "),a("span",{},[t._v("+")]),t._v(" "),a("span",{},[t._v("file.name")]),t._v(" "),a("span",{},[t._v("+")]),t._v(" "),a("span",{staticStyle:{color:"#4070a0"}},[t._v("' 太大，不能超过 2M。'")]),t._v("\r\n                "),a("span",{},[t._v("}")]),t._v(");\r\n            },\r\n            handleBeforeUpload () "),a("span",{},[t._v("{")]),t._v("\r\n                const check = this.uploadList.length "),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("< 5")]),a("span",{},[t._v(";")]),t._v("\r\n                "),a("span",{},[t._v("if")]),t._v(" "),a("span",{},[t._v("(!check)")]),t._v(" "),a("span",{},[t._v("{")]),t._v("\r\n                    "),a("span",{},[t._v("this.")]),t._v("$"),a("span",{staticStyle:{color:"#bb60d5"}},[t._v("Notice")]),t._v("."),a("span",{staticStyle:{color:"#bb60d5"}},[t._v("warning")]),t._v("("),a("span",{},[t._v("{")]),t._v("\r\n                        "),a("span",{},[t._v("title:")]),t._v(" "),a("span",{staticStyle:{color:"#4070a0"}},[t._v("'最多只能上传 5 张图片。'")]),t._v("\r\n                    "),a("span",{},[t._v("}")]),t._v(")"),a("span",{},[t._v(";")]),t._v("\r\n                "),a("span",{},[t._v("}")]),t._v("\r\n                "),a("span",{},[t._v("return")]),t._v(" "),a("span",{},[t._v("check;")]),t._v("\r\n            "),a("span",{},[t._v("}")]),t._v("\r\n        "),a("span",{},[t._v("},")]),t._v("\r\n        "),a("span",{},[t._v("mounted")]),t._v(" "),a("span",{},[t._v("()")]),t._v(" "),a("span",{},[t._v("{")]),t._v("\r\n            "),a("span",{staticStyle:{color:"#4070a0"}},[t._v("this.uploadList =")]),t._v(" "),a("span",{staticStyle:{color:"#4070a0"}},[t._v("this.")]),t._v("$"),a("span",{staticStyle:{color:"#bb60d5"}},[t._v("refs")]),t._v("."),a("span",{staticStyle:{color:"#bb60d5"}},[t._v("upload")]),t._v("."),a("span",{staticStyle:{color:"#bb60d5"}},[t._v("fileList")]),a("span",{staticStyle:{color:"#4070a0"}},[t._v(";")]),t._v("\r\n        "),a("span",{},[t._v("}")]),t._v("\r\n    "),a("span",{},[t._v("}")]),t._v("\r\n"),a("span",{},[t._v("</script")]),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v(">")]),t._v("\r\n"),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("<style>")]),t._v("\r\n    .demo-upload-list"),a("span",{},[t._v("{")]),t._v("\r\n        display: inline-block;\r\n        width: 60px;\r\n        height: 60px;\r\n        text-align: center;\r\n        line-height: 60px;\r\n        border: 1px solid transparent;\r\n        border-radius: 4px;\r\n        overflow: hidden;\r\n        background: "),a("span",{staticStyle:{color:"#007020"}},[t._v("#")]),a("span",{staticStyle:{color:"#06287e"}},[t._v("fff")]),t._v(";\r\n        position: relative;\r\n        box-shadow: 0 1px 1px rgba(0,0,0,.2);\r\n        margin-right: 4px;\r\n    }\r\n    .demo-upload-list img"),a("span",{},[t._v("{")]),t._v("\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n    .demo-upload-list-cover"),a("span",{},[t._v("{")]),t._v("\r\n        display: none;\r\n        position: absolute;\r\n        top: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n        right: 0;\r\n        background: rgba(0,0,0,.6);\r\n    }\r\n    .demo-upload-list:hover .demo-upload-list-cover"),a("span",{},[t._v("{")]),t._v("\r\n        display: block;\r\n    }\r\n    .demo-upload-list-cover i"),a("span",{},[t._v("{")]),t._v("\r\n        color: "),a("span",{staticStyle:{color:"#007020"}},[t._v("#")]),a("span",{staticStyle:{color:"#06287e"}},[t._v("fff")]),t._v(";\r\n        font-size: 20px;\r\n        cursor: pointer;\r\n        margin: 0 2px;\r\n    }\r\n"),a("span",{staticStyle:{color:"#062873","font-weight":"bold"}},[t._v("</style>")]),t._v("\r\n")])])])],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=16.0859f93b0c6a83d6dc78.js.map