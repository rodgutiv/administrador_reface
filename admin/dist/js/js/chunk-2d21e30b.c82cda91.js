(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21e30b"],{d504:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[a("v-layout",{attrs:{"justify-center":"",wrap:""}},[a("v-flex",{attrs:{md12:""}},[a("material-card",{attrs:{color:"rgb(21, 45, 91)",title:"Index Carrusel",text:"Editor de imagenes de index"}},[a("v-data-table",{attrs:{headers:t.headers,items:t.items},scopedSlots:t._u([{key:"headerCell",fn:function(e){var s=e.header;return[a("span",{staticClass:"subheading font-weight-light text-success text--darken-3",domProps:{textContent:t._s(s.text)}})]}},{key:"items",fn:function(e){var s=e.item;return[a("td",[t._v(t._s(s.id))]),a("td",[t._v(t._s(s.num_index))]),a("td",[t._v(t._s(s.ruta))]),a("td",[t._v(t._s(s.status))]),a("td",{staticClass:"text-xs-right"},[a("Modaldetalles",{attrs:{ruta:s.ruta}}),a("Modaleditar",{attrs:{num_index:s.num_index,id:s.id}})],1)]}}])}),a("Modalalta")],1)],1)],1)],1)},n=[],i=a("e946"),r=a("5c90"),l=a("2b6d"),d=a("d722"),o=(a("1157"),{components:{Modaldetalles:i["default"],Modaleditar:r["default"],Modalalta:l["default"]},data:function(){return{escrito:"",info:null,rating:3,id:null,show:!1,rowsPerPageItems:[12,24,36],pagination:{rowsPerPage:12},items:[],errors:[],empty:[],content1:null,content2:null,dialog:!1,sub:null,sub2:null,headers:[{text:"Id",value:"id"},{text:"Numero Posicion",value:"num_index"},{text:"Ruta",value:"ruta"},{text:"Status",value:"status"},{sortable:!1,text:"Opciones",value:"opciones",align:"right"}]}},methods:{},created:function(){var t=this;this.info=this.$route.params.info,null!=sessionStorage.getItem("dato")?this.escrito=sessionStorage.getItem("dato"):this.escrito="",d["a"].get("/ad-index/all").then(function(e){t.items=e.data}).catch(function(e){t.errors.push(e)})}}),u=o,c=a("2877"),h=Object(c["a"])(u,s,n,!1,null,null,null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d21e30b.c82cda91.js.map