(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6393"],{7246:function(e,o,t){"use strict";t.r(o);var s=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[t("v-layout",{attrs:{"justify-center":"",wrap:""}},[t("v-flex",{attrs:{md12:""}},[t("material-card",{attrs:{color:"rgb(21, 45, 91)",title:"Clientes",text:"Datos de clientes registrados en la plataforma Reface"}},[t("v-data-table",{attrs:{headers:e.headers,items:e.items,loading:e.ver,"loading-text":"Buscando... por favor, espere un momento."},scopedSlots:e._u([{key:"headerCell",fn:function(o){var s=o.header;return[t("span",{staticClass:"subheading font-weight-light text-success text--darken-3",domProps:{textContent:e._s(s.text)}})]}},{key:"items",fn:function(o){var s=o.item;return[t("td",[e._v(e._s(s.datos_personales.nombres))]),t("td",[e._v(e._s(s.datos_personales.apellidos))]),t("td",[e._v(e._s(s.datos_personales.username))]),t("td",[e._v(e._s(s.datos_personales.telefono))]),t("td",[e._v(e._s(s.status))]),t("td",{staticClass:"text-xs-right"},[t("Modaldetalles",{attrs:{nombres:s.datos_personales.nombres,apellidos:s.datos_personales.apellidos,email:s.datos_personales.email,fecha:s.datos_personales.fecha_nacimiento,telefono:s.datos_personales.telefono,interior:s.domicilio.num_interior,exterior:s.domicilio.num_exterior,calle:s.domicilio.calle,colonia:s.domicilio.colonia,localidad:s.domicilio.localidad,municipio:s.domicilio.municipio,estado:s.domicilio.estado,pais:s.domicilio.pais,cp:s.domicilio.codigo_postal,referencias:s.domicilio.referencias,status:s.status}}),t("Modaleditar",{attrs:{id:s.id,nombres:s.datos_personales.nombres,apellidos:s.datos_personales.apellidos,email:s.datos_personales.email,username:s.datos_personales.username,fecha:s.datos_personales.fecha_nacimiento,telefono:s.datos_personales.telefono,interior:s.domicilio.num_interior,exterior:s.domicilio.num_exterior,calle:s.domicilio.calle,colonia:s.domicilio.colonia,localidad:s.domicilio.localidad,municipio:s.domicilio.municipio,estado:s.domicilio.estado,pais:s.domicilio.pais,cp:s.domicilio.codigo_postal,referencias:s.domicilio.referencias,status:s.status}}),t("Modaleliminar",{attrs:{nombres:s.datos_personales.nombres,apellidos:s.datos_personales.apellidos,id:s.id,status:s.status}})],1)]}}])})],1)],1)],1)],1)},a=[],i=t("451f"),l=t("9deb"),n=t("0fd0"),r=t("d722"),d={components:{Modaldetalles:i["default"],Modaleliminar:n["default"],Modaleditar:l["default"]},data:function(){return{escrito:"",info:null,rating:3,id:null,show:!1,rowsPerPageItems:[12,24,36],pagination:{rowsPerPage:12},items:[],errors:[],empty:[],content1:null,content2:null,dialog:!1,sub:null,sub2:null,ver:!1,headers:[{text:"Nombres",value:"nombres"},{text:"Apellidos",value:"apellidos"},{text:"Username",value:"username"},{text:"Telefono",value:"telefono"},{text:"Status",value:"status"},{sortable:!1,text:"Acciones",value:"acciones",align:"right"}]}},methods:{datos:function(e){},compras:function(e){},eliminar:function(e){var o=this;r["a"].get("/ad-usuarios/delete-user/"+e).then(function(e){o.items=e.data}).catch(function(e){o.errors.push(e)})}},created:function(){var e=this;this.info=this.$route.params.info,null!=sessionStorage.getItem("dato")?this.escrito=sessionStorage.getItem("dato"):this.escrito="",r["a"].get("/ad-usuarios/all-users").then(function(o){e.items=o.data,e.ver=!0}).catch(function(o){e.errors.push(o)})}},c=d,u=t("2877"),m=Object(u["a"])(c,s,a,!1,null,null,null);o["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0d6393.234bafea.js.map