(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21b888"],{bfd2:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[a("v-layout",{attrs:{"justify-center":"",wrap:""}},[a("v-flex",{attrs:{md12:""}},[a("material-card",{attrs:{color:"rgb(21, 45, 91)",title:"Compras",text:"Ordenes de compra realizadas"}},[a("v-data-table",{attrs:{headers:t.headers,items:t.items},scopedSlots:t._u([{key:"headerCell",fn:function(e){var o=e.header;return[a("span",{staticClass:"subheading font-weight-light text-success text--darken-3",domProps:{textContent:t._s(o.text)}})]}},{key:"items",fn:function(e){var o=e.item;return[a("td",[t._v(t._s(o.id))]),a("td",[t._v(t._s(o.datos_personales.nombre_completo))]),a("td",[t._v(t._s(o.total_productos))]),a("td",[t._v(t._s(o.total_venta))]),a("td",[t._v(t._s(o.estado))]),a("td",{staticClass:"text-xs-right"},[a("Modalinfo",{attrs:{clave:o.id,nombre:o.datos_personales.nombre_completo,email:o.datos_personales.email,telefono:o.datos_personales.telefono,cp:o.datos_entrega.codigo_postal,estado:o.datos_entrega.estado,municipio:o.datos_entrega.municipio,calle:o.datos_entrega.calle,num_interior:o.datos_entrega.num_interior,num_exterior:o.datos_entrega.num_exterior,colonia:o.datos_entrega.colonia,referencias:o.datos_entrega.referencias,productos:o.total_productos,total:o.total_venta,status:o.estado}}),a("Modalcompras",{attrs:{id:o.id,productos:o.total_productos,precio:o.total_venta}}),a("Modalstatus",{attrs:{id:o.id,status:o.estado}})],1)]}}])}),a("Modaloxxo"),a("Modaldebito"),a("Modalcredito")],1)],1)],1)],1)},s=[],r=a("2056"),n=a("5c34"),l=a("ca68"),d=a("5806"),i=a("c2fc"),c=a("3ccb"),u=a("d722"),p={components:{Modalinfo:r["default"],Modalcompras:n["default"],Modalstatus:l["default"],Modaloxxo:d["default"],Modaldebito:i["default"],Modalcredito:c["default"]},data:function(){return{escrito:"",info:null,rating:3,id:null,show:!1,rowsPerPageItems:[12,24,36],pagination:{rowsPerPage:12},items:[],errors:[],empty:[],content1:null,content2:null,dialog:!1,sub:null,sub2:null,headers:[{text:"Clave",value:"clave"},{text:"Nombre",value:"nombre"},{text:"Productos",value:"productos"},{text:"Total",value:"total"},{text:"Status",value:"status"},{sortable:!1,text:"Opciones",value:"opciones",align:"right"}]}},methods:{},created:function(){var t=this;this.info=this.$route.params.info,null!=sessionStorage.getItem("dato")?this.escrito=sessionStorage.getItem("dato"):this.escrito="",u["a"].get("/ad-compras/list-compras").then(function(e){t.items=e.data}).catch(function(e){t.errors.push(e)})}},_=p,m=a("2877"),f=Object(m["a"])(_,o,s,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d21b888.cbb61e97.js.map