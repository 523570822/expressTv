webpackJsonp([31],{489:function(t,e,a){function n(t){a(666)}var o=a(4)(a(568),a(715),n,"data-v-f105ec10",null);t.exports=o.exports},568:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(18),o=this;n.default.component("button-counter",{data:function(){return{count:0}},template:'<button v-on:click="count++">You clicked me {{ count }} times.</button>'}),e.default={name:"mr",data:function(){return{columns1:[{title:"姓名",key:"name"},{title:"年龄",key:"age"},{title:"地址",key:"address"},{title:"操作",key:"action",width:150,align:"center",render:function(t,e){return t("div",[t("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){o.show(e.index)}}},"查看"),t("Button",{props:{type:"error",size:"small"},on:{click:function(){o.remove(e.index)}}},"删除")])}}],data1:[{name:"王小明",age:18,address:"北京市朝阳区芍药居"},{name:"张小刚",age:25,address:"北京市海淀区西二旗"},{name:"李小红",age:30,address:"上海市浦东新区世纪大道"},{name:"周小伟",age:26,address:"深圳市南山区深南大道"}],cityList:[{value:"New York",label:"New York"},{value:"London",label:"London"},{value:"Sydney",label:"Sydney"},{value:"Ottawa",label:"Ottawa"},{value:"Paris",label:"Paris"},{value:"Canberra",label:"Canberra"}]}},methods:{show:function(t){this.$Modal.info({title:"用户信息",content:"姓名："+this.data1[t].name+"<br>年龄："+this.data1[t].age+"<br>地址："+this.data1[t].address})},remove:function(t){this.data1.splice(t,1)}}}},633:function(t,e,a){e=t.exports=a(477)(!0),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"Information.vue",sourceRoot:""}])},666:function(t,e,a){var n=a(633);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(478)("1608abae",n,!0)},715:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"animated fadeIn"},[a("Row",[a("col",{attrs:{sm:24,md:24,lg:12}})]),t._v(" "),a("Table",{attrs:{columns:t.columns1,data:t.data1}}),t._v(" "),a("div",{attrs:{id:"components-demo"}},[a("button-counter")],1),t._v(" "),a("Select",[a("Option",{attrs:{value:"New York",label:"New York"}},[a("span",[t._v("New York")]),t._v(" "),a("span",{staticStyle:{float:"right",color:"#ccc"}},[t._v("America")])]),t._v(" "),a("Option",{attrs:{value:"London",label:"London"}},[a("span",[t._v("London")]),t._v(" "),a("span",{staticStyle:{float:"right",color:"#ccc"}},[t._v("U.K.")])]),t._v(" "),a("Option",{attrs:{value:"Sydney",label:"Sydney"}},[a("span",[t._v("Sydney")]),t._v(" "),a("span",{staticStyle:{float:"right",color:"#ccc"}},[t._v("Australian")])])],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=31.68ad82e63e2ebaa06901.js.map