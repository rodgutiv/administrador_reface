(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b9d35"],{3530:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[a("v-layout",{attrs:{"justify-center":"",wrap:""}},[a("v-flex",{attrs:{xs12:"",md12:""}},[a("material-card",{attrs:{color:"green",title:"Perfil Administrador",text:"Ver/Editar datos de perfil"}},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.Update()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-container",{attrs:{"py-0":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Id",name:"id",value:t.items.id}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Nombre Completo",name:"nombre_completo",value:t.items.datos_personales.nombre_completo}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Username",name:"username",value:t.items.datos_personales.username}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Email",name:"email",value:t.items.datos_personales.email}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Password",type:"password",name:"password",value:t.items.datos_personales.password}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Fecha de Nacimiento",name:"fecha_nacimiento",value:t.items.datos_personales.fecha_nacimiento}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Telefono",name:"telefono",value:t.items.datos_personales.telefono}})],1),a("v-flex",{attrs:{xs12:"",md2:""}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Num Interior",name:"num_interior",value:t.items.domicilio.num_interior}})],1),a("v-flex",{attrs:{xs12:"",md2:""}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Num Exterior",name:"num_exterior",value:t.items.domicilio.num_exterior}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Calle",name:"calle",value:t.items.domicilio.calle}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Colonia",name:"colonia",value:t.items.domicilio.colonia}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Localidad",name:"localidad",value:t.items.domicilio.localidad}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Municipio",name:"municipio",value:t.items.domicilio.municipio}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Estado",name:"estado",value:t.items.domicilio.estado}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"País",name:"pais",value:t.items.domicilio.pais}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Código Postal",name:"codigo_postal",value:t.items.domicilio.codigo_postal}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-textarea",{staticClass:"purple-input",attrs:{label:"Referencias",name:"referencias",value:t.items.domicilio.referencias}})],1),a("v-flex",{attrs:{xs12:"","text-xs-right":""}},[a("v-btn",{staticClass:"mx-0 font-weight-light",attrs:{color:"success",type:"submit"},on:{click:function(e){t.dialog=!1}}},[t._v("\n                  Update Profile\n                ")])],1)],1)],1)],1)],1)],1)],1)],1)},l=[],i=(a("a481"),a("d722")),o=a("1157"),r=a.n(o),n={components:{},data:function(){return{escrito:"",info:null,rating:3,id:null,show:!1,rowsPerPageItems:[12,24,36],pagination:{rowsPerPage:12},items:[],errors:[],empty:[],content1:null,content2:null,dialog:!1,sub:null,sub2:null}},methods:{Update:function(){i["a"].post("/ad-usuarios/update-user",r()(event.currentTarget).serializeArray()).then(function(t){alert("Actualización realizada con éxito"),window.location.replace("http://192.168.0.190:61/admin")}).catch(function(t){console.log(t)})}},created:function(){var t=this;this.info=this.$route.params.info,null!=sessionStorage.getItem("dato")?this.escrito=sessionStorage.getItem("dato"):this.escrito="",i["a"].get("/ad-usuarios/all-users/0").then(function(e){t.items=e.data,console.log("los items son los siguientes:"),console.log(t.items),console.log("el nombre es el siguiente:"),console.log(t.items.datos_personales.nombre_completo)}).catch(function(e){t.errors.push(e)})}},u=n,m=a("2877"),d=Object(m["a"])(u,s,l,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0b9d35.3faef5ed.js.map