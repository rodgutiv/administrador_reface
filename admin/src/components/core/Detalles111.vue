<template>
  <v-dialog v-model="dialog" max-width="500">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" small color="#003b94" dark> Editar </v-btn>
    </template>
    <v-card>
      <v-form ref="form" v-model="valid" v-on:submit.prevent="Update()" lazy-validation>
        <v-toolbar color="#003b94">
         <v-toolbar-title style="color:white;">Editar {{ nombres }} {{ apellidos }}</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-layout row>
          <v-flex xs10 offset-xs1 >
          <h4> Clave Interna: </h4>
          <v-text-field
            class="purple-input"
            label="Id"
            disabled="true"
            name="id"
            :value="id"
          />
            <h4> Nombres: </h4>
            <template />
              <v-text-field
                class="purple-input"
                label="Nombres"
                name="nombres"
                :value="nombres"
                :rules="rules1"
              />
            <h4> Apellidos: </h4>
            <template />
              <v-text-field
                class="purple-input"
                label="Apellidos"
                name="apellidos"
                :value="apellidos"
                :rules="rules2"
              />
            <h4> Username: </h4>
            <template />
              <v-text-field
                class="purple-input"
                label="Username"
                name="username"
                :value="username"
                :rules="rules3"
              />
            <h4> Email: </h4>
            <template />
              <v-text-field
                label="Email"
                class="purple-input"
                name="email"
                :value="email"
                :rules="rules4"
              />
<!--
            <h4> Password: </h4>
            <v-text-field
              label="Password"
              type="password"
              class="purple-input"
              name="password"
              disabled="true"
              :value="password"
              />
-->
            <h4> Fecha de nacimiento: </h4>
            <template>
              <v-row justify="center" />
                <v-text-field
                  type="date"
                  label="Fecha de Nacimiento"
                  class="purple-input"
                  name="fecha_nacimiento"
                  :rules="rules11"
                  :value="fecha_nacimiento"
                  />
            </template>
            <h4> Telefono: </h4>
            <v-text-field
              label="Telefono"
              class="purple-input"
              name="telefono"
              :rules="rules8"
              :value="telefono"
              />

            <h4> Num Exterior: </h4>
            <v-text-field
              label="Num Exterior"
              class="purple-input"
              name="num_exterior"
              type="number"
              :rules="rules11"
              :value="num_exterior"
            />
            <h4> Num Interior: </h4>
            <v-text-field
              label="Num Interior"
              class="purple-input"
              name="num_interior"
              type="number"
              :rules="rules12"
              :value="num_interior"
            />
            <h4> Calle: </h4>
            <v-text-field
              label="Calle"
              class="purple-input"
              name="calle"
              :rules="rules5"
              :value="calle"
            />
            <h4> Colonia: </h4>
            <v-text-field
              label="Colonia"
              class="purple-input"
              name="colonia"
              :value="colonia"
              :rules="rules6"
            />
            <h4> Localidad: </h4>
            <v-text-field
              label="Localidad"
              class="purple-input"
              name="localidad"
              :value="localidad"
              :rules="rules9"
            />
            <h4> Municipio: </h4>
            <v-text-field
              label="Municipio"
              class="purple-input"
              name="municipio"
              :value="municipio"
              :rules="rules9"
              />
            <h4> Estado: </h4>
            <v-select
              label="Estado"
              class="purple-input"
              name="estado"
              :value="estado"
              :rules="rules9"
              outlined
              :items="items1"
              />
            <h4> Pais: </h4>
            <v-text-field
              label="País"
              class="purple-input"
              name="pais"
              :value="pais"
              :rules="rules9"
              />
            <h4> Código Postal: </h4>
            <v-text-field
              class="purple-input"
              label="Código Postal"
              name="codigo_postal"
              :value="codigo_postal"
              :rules="rules10"
              />
            <h4> Referencias: </h4>
            <template />
              <v-textarea
                class="purple-input"
                label="Referencias"
                name="referencias"
                :rules="rules6"
                :value="referencias"
              />
              <!--
            <h4> Status: </h4>
            <v-text-field
              class="purple-input"
              label="Status"
              name="status"
              disabled="true"
              :value="status"
            />
            -->
          </v-flex>
        </v-layout>
        <v-card-actions>
          

          <v-btn
            color="red darken-1"
            flat="flat"
            @click="dialog = false"
          >
            Cancelar
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            flat="flat"
            type="submit"
            @click="dialog = false"
          >
            Guardar Cambios
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import {api} from '@/api'
import $ from 'jquery'

export default {
    name: 'Frame',
    props: {
       id: String,
       nombres: String,
       apellidos: String,
       username: String,
       email: String,
       password: String,
       fecha_nacimiento: String,
       telefono: String,
       num_interior: String,
       num_exterior: String,
       calle: String,
       colonia: String,
       localidad: String,
       municipio: String,
       estado: String,
       pais: String,
       codigo_postal: String,
       referencias: String,
       status: String
    },
    data () {
      return {
        cant: 0,
        info:null,
        dialog: false,
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
            const pattern = /^[a-z0-9_-]{3,16}$/;
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
        ],
        items1: ["Aguascalientes","Baja California","Baja California Sur","Chihuahua","Chiapas", "Campeche", "Ciudad de Mexico", "Coahuila", "Colima", "Durango", "Guerrero", "Guanajuato", "Hidalgo", "Jalisco", "Michoacan", "Estado de Mexico", "Morelos", "Nayarit",  "Nuevo Leon", "Oaxaca", "Puebla",  "Quintana Roo", "Queretaro", "Sinaloa", "San Luis Potosi", "Sonora", "Tabasco", "Tlaxcala", "Tamaulipas", "Veracruz", "Yucatan", "Zacatecas"]
      }
    },
    methods: {
       Update(){
          var array =
                 api.post('/ad-usuarios/update-user', $(event.currentTarget).serializeArray())
                 .then(response => {
                   // JSON responses are automatically parsed.
        //           this.models = response.data;
                     alert('Actualización realizada con éxito');
                     window.location.replace("http://refacenet.org:61/productos");
                   //console.log(this.items);
                 })
                 .catch(e => {
        //           this.errors.push(e)
                 //  console.log("Error");
                   console.log(e);
                 })

      },
      Validation(){
        //Validar que los campos esten completos

        //validar que los campos cumplan con el formato
      }
    }
}
</script>
