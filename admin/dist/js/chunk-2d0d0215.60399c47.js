(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d0215"],{6753:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[a("v-layout",{attrs:{"justify-center":"",wrap:""}},[a("v-flex",{attrs:{md12:""}},[a("material-card",{attrs:{color:"rgb(21, 45, 91)",title:"Productos",text:"Listado de Productos y características"}},[[a("div",[a("v-autocomplete",{attrs:{label:"Busca producto por codigo o palabras clave.",items:t.items}})],1)],a("v-data-table",{attrs:{headers:t.headers,items:t.items},scopedSlots:t._u([{key:"headerCell",fn:function(e){var o=e.header;return[a("span",{staticClass:"subheading font-weight-light text-success text--darken-3",domProps:{textContent:t._s(o.text)}})]}},{key:"items",fn:function(e){var o=e.item;return[a("td",[t._v(t._s(o.codigo))]),a("td",[t._v(t._s(o.clave_interna))]),a("td",[t._v(t._s(o.nombre))]),a("td",[t._v(t._s(o.tipo))]),a("td",[t._v(t._s(o.marca))]),a("td",[t._v(t._s(o.precio))]),a("td",[t._v(t._s(o.id_promo))]),a("td",[t._v(t._s(o.status))]),a("td",{staticClass:"text-xs-right"},[a("Modaldetalles",{attrs:{nombre:o.nombre,codigo:o.codigo,clave_interna:o.clave_interna,descripcion:o.descripcion,categoria:o.categoria,tipo:o.tipo,marca:o.marca,precio:o.precio,autos:o.autos,stock:o.stock,status:o.status,id_promo:o.id_promo,pesado:o.pesado,outlet:o.outlet}}),a("Modaleditar",{attrs:{nombre:o.nombre,codigo:o.codigo,clave_interna:o.clave_interna,descripcion:o.descripcion,categoria:o.categoria,tipo:o.tipo,marca:o.marca,precio:o.precio,autos:o.autos,stock:o.stock,status:o.status,id_promo:o.id_promo,pesado:o.pesado,outlet:o.outlet}}),a("Modaleliminar",{attrs:{nombre:o.nombre,clave_interna:o.clave_interna,status:o.status}})],1)]}}])}),a("Modalalta")],2)],1)],1)],1)},s=[],r=a("09fe"),i=a("cbcd"),c=a("c197"),n=a("30f8"),l=a("d722"),d={components:{Modaldetalles:r["default"],Modaleditar:i["default"],Modaleliminar:c["default"],Modalalta:n["default"]},data:function(){return{escrito:"",info:null,rating:3,id:null,show:!1,rowsPerPageItems:[12,24,36],pagination:{rowsPerPage:12},items:[],items2:[],errors:[],empty:[],content1:null,content2:null,dialog:!1,sub:null,sub2:null,headers:[{text:"Codigo",value:"codigo"},{text:"Clave",value:"clave"},{text:"Nombre",value:"nombre"},{text:"Tipo",value:"tipo"},{text:"Marca",value:"marca"},{text:"Precio",value:"precio"},{text:"Promoción",value:"id_promo"},{text:"Status",value:"Status"},{sortable:!1,text:"Opciones",value:"opciones",align:"right"}]}},methods:{},created:function(){var t=this;this.info=this.$route.params.info,null!=sessionStorage.getItem("dato")?this.escrito=sessionStorage.getItem("dato"):this.escrito="",l["a"].get("/ad-productos/list").then(function(e){t.items=e.data,console.log(t.items)}).catch(function(e){t.errors.push(e)})}},u=d,p=a("2877"),m=Object(p["a"])(u,o,s,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0d0215.60399c47.js.map