<template>
  <v-container
    fill-height
    fluid
    grid-list-xl>
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        xs12
        md12
      >
        <material-card
          color="green"
          title="Perfil Administrador"
          text="Ver/Editar datos de perfil"
        >
          <v-form ref="form" v-model="valid" v-on:submit.prevent="Update()" lazy-validation>
            <v-container py-0>
              <v-layout wrap>

                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    class="purple-input"
                    label="Id"
                    disabled="true"
                    name="id"
                    :value="items.id"
                  />
                </v-flex>

                <v-flex
                  xs12
                  md4
                >
                  <template />
                    <v-text-field
                      class="purple-input"
                      label="Nombres"
                      name="nombres"
                      :value="items.datos_personales.nombres"
                      :rules="rules1"
                    />
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <template />
                    <v-text-field
                      class="purple-input"
                      label="Apellidos"
                      name="apellidos"
                      :value="items.datos_personales.apellidos"
                      :rules="rules2"
                    />
                </v-flex>

                <v-flex
                  xs12
                  md4
                >
                  <template />
                    <v-text-field
                      class="purple-input"
                      label="Username"
                      name="username"
                      :value="items.datos_personales.username"
                      :rules="rules3"
                    />
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <template />
                    <v-text-field
                      label="Email"
                      class="purple-input"
                      name="email"
                      :value="items.datos_personales.email"
                      :rules="rules4"
                    />
                </v-flex>
<!--
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    label="Password"
                    type="password"
                    class="purple-input"
                    name="password"
                    :value="items.datos_personales.password"
                    />
                </v-flex>
-->
                <v-flex
                  xs12
                  md4
                >
	                <template>
	                	<v-row justify="center" />
		                  <v-text-field
		                  	type="date"
		                    label="Fecha de Nacimiento"
		                    class="purple-input"
		                    name="fecha_nacimiento"
                        :rules="rules11"
		                    :value="items.datos_personales.fecha_nacimiento"
		                    />
                  </template>
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    label="Telefono"
                    class="purple-input"
                    name="telefono"
                    type="tel"
                    :rules="rules8"
                    :value="items.datos_personales.telefono"
                    />
                </v-flex>
                <v-flex
                  xs12
                  md2
                >
                  <v-text-field
                    label="Num Exterior"
                    class="purple-input"
                    name="num_exterior"
                    type="number"
                    :rules="rules11"
                    :value="items.domicilio.num_exterior"
                    />
                </v-flex>
                <v-flex
                  xs12
                  md2
                >
                  <v-text-field
                    label="Num Interior"
                    class="purple-input"
                    name="num_interior"
                    :rules="rules12"
                    :value="items.domicilio.num_interior"
                    />
                </v-flex>
	            <v-flex
	              xs12
	              md4
	            >
	                <template />
	                  <v-text-field
	                    label="Calle"
	                    class="purple-input"
	                    name="calle"
	                    :rules="rules5"
	                    :value="items.domicilio.calle"
	                    />
	            </v-flex>
                <v-flex
                  xs12
                  md4>
                  <v-text-field
                    label="Colonia"
                    class="purple-input"
                    name="colonia"
                    :value="items.domicilio.colonia"
                    :rules="rules6"
                    />
                </v-flex>
                <v-flex
                  xs12
                  md4>
                  <v-text-field
                    label="Localidad"
                    class="purple-input"
                    name="localidad"
                    :value="items.domicilio.localidad"
                    :rules="rules9"
                    />
                </v-flex>
                <v-flex
                  xs12
                  md4>
                  <v-text-field
                    label="Municipio"
                    class="purple-input"
                    name="municipio"
                    :value="items.domicilio.municipio"
                    :rules="rules9"
                    />
                </v-flex>
                <v-flex
                  xs12
                  md4>
                  <v-select
                    label="Estado"
                    class="purple-input"
                    name="estado"
                    :items="items1"
                    :value="items.domicilio.estado"
                    :rules="rules9"

                    outlined
                    />
                </v-flex>
                <v-flex
                  xs12
                  md4>
                  <v-text-field
                    label="País"
                    class="purple-input"
                    name="pais"
                    :value="items.domicilio.pais"
                    :rules="rules9"
                    />
                </v-flex>
                <v-flex
                  xs12
                  md4>
                  <v-text-field
                    class="purple-input"
                    label="Código Postal"
                    name="codigo_postal"
                    type="number"
                    :rules="rules10"
                    :value="items.domicilio.codigo_postal"
                    />
                </v-flex>
                <v-flex
                  xs12
                  text-xs-right
                >
                  <v-btn
                    class="mx-0 font-weight-light"
                    color="success"
                    type="submit"
                    @click="dialog = false"
                  >
                    Update Profile
                  </v-btn>

                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
              <Modalpassword />

        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import Modalpassword from '@/components/core/Detalles17.vue'

import {api} from '@/api'
import $ from 'jquery'

export default {
    components:{
//    toolbar,
//      Modaldetalles,
        Modalpassword
  },
  data () {
    return {
      escrito:'',
      info:null,
      rating: 3,
      id:null,
      show: false,
      rowsPerPageItems: [12, 24, 36],
      pagination: {
        rowsPerPage: 12
      },
      items1: ["Aguascalientes","Baja California","Baja California Sur","Chihuahua","Chiapas", "Campeche", "Ciudad de Mexico", "Coahuila", "Colima", "Durango", "Guerrero", "Guanajuato", "Hidalgo", "Jalisco", "Michoacan", "Estado de Mexico", "Morelos", "Nayarit",  "Nuevo Leon", "Oaxaca", "Puebla",  "Quintana Roo", "Queretaro", "Sinaloa", "San Luis Potosi", "Sonora", "Tabasco", "Tlaxcala", "Tamaulipas", "Veracruz", "Yucatan", "Zacatecas"],
      items:null,
      errors: [],
      empty: [],
      content1:null,
      content2:null,
      dialog: false,
      sub:null,
      sub2:null,
      rules1: [
        value => !!value || 'Required.',
        value => (value || '').length <= 50 || 'Max 50 characters',
        value => {
          const pattern = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
          return pattern.test(value) || 'Nombre(s) invalido(s).'
        },
      ],
      rules2: [
        value => !!value || 'Required.',
        value => (value || '').length <= 50 || 'Max 50 characters',
        value => {
          const pattern = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
          return pattern.test(value) || 'Apellido(s) invalido(s).'
        },
      ],
      rules3: [
        value => !!value || 'Required.',
        value => (value || '').length <= 50 || 'Max 50 characters',
        value => {
          const pattern = /^[a-z0-9_-]{3,51}$/;
          return pattern.test(value) || 'Username invalido.'
        },
      ],
      rules4: [
        value => !!value || 'Required.',
        value => (value || '').length <= 50 || 'Max 50 characters',
        value => {
          const pattern = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
          return pattern.test(value) || 'Email invalido.'
        },
      ],
      rules5: [
        value => !!value || 'Required.',
        value => (value || '').length <= 50 || 'Max 50 characters',
        value => {
          const pattern = /^([A-ZÁÉÍÓÚ0-9]{1}[a-zñáéíóú0-9]+[\s]*)+$/;
          return pattern.test(value) || 'Calle invalida.'
        },
      ],
      rules6: [
        value => !!value || 'Required.',
        value => (value || '').length <= 100 || 'Max 100 characters',
        value => {
          const pattern = /^([A-ZÁÉÍÓÚ0-9]{1}[a-zñáéíóú0-9]+[\s]*)+$/;
          return pattern.test(value) || 'Datos invalidos.'
        },
      ],
      rules8: [
        value => !!value || 'Required.',
        value => (value || '').length <= 10 || 'Max 10 characters',
        value => {
          const pattern = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
          return pattern.test(value) || 'Telefono invalido.'
        },
      ],
      rules9: [
        value => !!value || 'Required.',
        value => (value || '').length <= 100 || 'Max 100 characters',
        value => {
          const pattern = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
          return pattern.test(value) || 'Datos invalidos.'
        },
      ],
      rules10: [
        value => !!value || 'Required.',
        value => (value || '').length <= 50 || 'Max 50 characters',
        value => {
          const pattern = /^[0-9]{5}$/;
          return pattern.test(value) || 'CP invalido.'
        },
      ],
      rules11:[
        value => !!value || 'Required.'
      ],
      rules12:[
        value => !!value || 'Required.',
        value => (value || '').length <= 5 || 'Max 5 characters',
        value => {
          const pattern = /^[0-9A-Za-z]*$/;
          return pattern.test(value) || 'Numero interior invalido.'
        },
      ]
    }
},
 methods: {
     Update(){
       var resp = $(event.currentTarget).serializeArray();
//       console.log("Respuesta del update");
//       console.log(resp);
       var fail=false;
       for(var i=0; i < resp.length; i++)
       {
//       console.log(resp[i].value);
//       console.log(fail);
        if(i!=7)
        {
          if (resp[i].value=="")
            fail=true;
        }
       }
       if(fail==true)
       {
          alert('Necesitas completar todos los campos');
       }
       else
       {
           api.post('/ad-usuarios/update-admin', $(event.currentTarget).serializeArray())
           .then(response => {
             // JSON responses are automatically parsed.
        //           this.models = response.data;
               alert('Actualización realizada con éxito');
               window.location.replace("http://refacenet.org:61/admin");
             //console.log(this.items);
           })
           .catch(e => {
        //           this.errors.push(e)
           //  console.log("Error");
             console.log(e);
           })
       }
     }
 },
created() {
    //alert(sessionStorage.getItem("dato"))
    this.info = this.$route.params.info
    //alert("ejemplo "+this.info)
    //sessionStorage.setItem("content1","display:none")
    //sessionStorage.setItem("content2",null)
    //alert(this.content2)
    if(sessionStorage.getItem("dato")!=null){
      this.escrito=sessionStorage.getItem("dato")
    }else{
      this.escrito=''
    }
    api.get(`/ad-usuarios/all-users/0`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.items = response.data
      console.log("los items son los siguientes:")
      console.log(this.items);
      console.log("el nombre es el siguiente:")
      console.log(this.items.datos_personales.nombres);
    })
    .catch(e => {
      this.errors.push(e)
    //  console.log("Error");
    //  console.log(e);
    })
}


}

</script>
