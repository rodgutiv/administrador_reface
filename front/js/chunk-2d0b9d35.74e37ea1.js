(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b9d35"],{3530:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[a("v-layout",{attrs:{"justify-center":"",wrap:""}},[a("v-flex",{attrs:{xs12:"",md12:""}},[a("material-card",{attrs:{color:"green",title:"Perfil Administrador",text:"Ver/Editar datos de perfil"}},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.Update()}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-container",{attrs:{"py-0":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Id",disabled:"true",name:"id",value:e.items.id}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[void 0,a("v-text-field",{staticClass:"purple-input",attrs:{label:"Nombres",name:"nombres",value:e.items.datos_personales.nombres,rules:e.rules1}})],2),a("v-flex",{attrs:{xs12:"",md4:""}},[void 0,a("v-text-field",{staticClass:"purple-input",attrs:{label:"Apellidos",name:"apellidos",value:e.items.datos_personales.apellidos,rules:e.rules2}})],2),a("v-flex",{attrs:{xs12:"",md4:""}},[void 0,a("v-text-field",{staticClass:"purple-input",attrs:{label:"Username",name:"username",value:e.items.datos_personales.username,rules:e.rules3}})],2),a("v-flex",{attrs:{xs12:"",md4:""}},[void 0,a("v-text-field",{staticClass:"purple-input",attrs:{label:"Email",name:"email",value:e.items.datos_personales.email,rules:e.rules4}})],2),a("v-flex",{attrs:{xs12:"",md4:""}},[[a("v-row",{attrs:{justify:"center"}}),a("v-text-field",{staticClass:"purple-input",attrs:{type:"date",label:"Fecha de Nacimiento",name:"fecha_nacimiento",rules:e.rules11,value:e.items.datos_personales.fecha_nacimiento}})]],2),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Telefono",name:"telefono",type:"tel",rules:e.rules8,value:e.items.datos_personales.telefono}})],1),a("v-flex",{attrs:{xs12:"",md2:""}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Num Exterior",name:"num_exterior",type:"number",rules:e.rules11,value:e.items.domicilio.num_exterior}})],1),a("v-flex",{attrs:{xs12:"",md2:""}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Num Interior",name:"num_interior",type:"number",value:e.items.domicilio.num_interior}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[void 0,a("v-text-field",{staticClass:"purple-input",attrs:{label:"Calle",name:"calle",rules:e.rules5,value:e.items.domicilio.calle}})],2),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Colonia",name:"colonia",value:e.items.domicilio.colonia,rules:e.rules6}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Localidad",name:"localidad",value:e.items.domicilio.localidad,rules:e.rules9}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Municipio",name:"municipio",value:e.items.domicilio.municipio,rules:e.rules9}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Estado",name:"estado",value:e.items.domicilio.estado,rules:e.rules9}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"País",name:"pais",value:e.items.domicilio.pais,rules:e.rules9}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Código Postal",name:"codigo_postal",type:"number",rules:e.rules10,value:e.items.domicilio.codigo_postal}})],1),a("v-flex",{attrs:{xs12:"","text-xs-right":""}},[a("v-btn",{staticClass:"mx-0 font-weight-light",attrs:{color:"success",type:"submit"},on:{click:function(t){e.dialog=!1}}},[e._v("\n                    Update Profile\n                  ")])],1)],1)],1)],1)],1)],1)],1)],1)},l=[],r=(a("a481"),a("d722")),i=a("1157"),n=a.n(i),o={components:{},data:function(){return{escrito:"",info:null,rating:3,id:null,show:!1,rowsPerPageItems:[12,24,36],pagination:{rowsPerPage:12},items:[],errors:[],empty:[],content1:null,content2:null,dialog:!1,sub:null,sub2:null,rules1:[function(e){return!!e||"Required."},function(e){return(e||"").length<=50||"Max 50 characters"},function(e){var t=/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;return t.test(e)||"Nombre(s) invalido(s)."}],rules2:[function(e){return!!e||"Required."},function(e){return(e||"").length<=50||"Max 50 characters"},function(e){var t=/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;return t.test(e)||"Apellido(s) invalido(s)."}],rules3:[function(e){return!!e||"Required."},function(e){return(e||"").length<=50||"Max 50 characters"},function(e){var t=/^[a-z0-9_-]{3,51}$/;return t.test(e)||"Username invalido."}],rules4:[function(e){return!!e||"Required."},function(e){return(e||"").length<=50||"Max 50 characters"},function(e){var t=/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;return t.test(e)||"Email invalido."}],rules5:[function(e){return!!e||"Required."},function(e){return(e||"").length<=50||"Max 50 characters"},function(e){var t=/^([A-ZÁÉÍÓÚ0-9]{1}[a-zñáéíóú0-9]+[\s]*)+$/;return t.test(e)||"Calle invalida."}],rules6:[function(e){return!!e||"Required."},function(e){return(e||"").length<=100||"Max 100 characters"},function(e){var t=/^([A-ZÁÉÍÓÚ0-9]{1}[a-zñáéíóú0-9]+[\s]*)+$/;return t.test(e)||"Datos invalidos."}],rules8:[function(e){return!!e||"Required."},function(e){return(e||"").length<=10||"Max 10 characters"},function(e){var t=/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\.\/0-9]*$/;return t.test(e)||"Telefono invalido."}],rules9:[function(e){return!!e||"Required."},function(e){return(e||"").length<=100||"Max 100 characters"},function(e){var t=/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;return t.test(e)||"Datos invalidos."}],rules10:[function(e){return!!e||"Required."},function(e){return(e||"").length<=50||"Max 50 characters"},function(e){var t=/^[0-9]{5}$/;return t.test(e)||"CP invalido."}],rules11:[function(e){return!!e||"Required."}]}},methods:{Update:function(){var e=n()(event.currentTarget).serializeArray();console.log("Respuesta del update"),console.log(e);for(var t=!1,a=0;a<e.length;a++)""==e[a].value&7!=a&&(t=!0);1==t?alert("Necesitas completar todos los campos"):r["a"].post("/ad-usuarios/update-user",n()(event.currentTarget).serializeArray()).then(function(e){alert("Actualización realizada con éxito"),window.location.replace("http://10.3.0.7:61/admin")}).catch(function(e){console.log(e)})}},created:function(){var e=this;this.info=this.$route.params.info,null!=sessionStorage.getItem("dato")?this.escrito=sessionStorage.getItem("dato"):this.escrito="",r["a"].get("/ad-usuarios/all-users/0").then(function(t){e.items=t.data,console.log("los items son los siguientes:"),console.log(e.items),console.log("el nombre es el siguiente:"),console.log(e.items.datos_personales.nombres)}).catch(function(t){e.errors.push(t)})}},u=o,c=a("2877"),d=Object(c["a"])(u,s,l,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0b9d35.74e37ea1.js.map