<template>
  <v-dialog v-model="dialog" max-width="500">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" small color="#003b94" dark> Reestablecer contraseña </v-btn>
    </template>
    <v-card>
      <v-form ref="form" v-on:submit.prevent="Pass()" lazy-validation>
        <v-toolbar color="#003b94">
         <v-toolbar-title style="color:white;">Reestablecer contraseña</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-layout row>
          <v-flex xs10 offset-xs1 >
          <h4> Ingrese contraseña antigua: </h4>
          <template />
            <v-text-field
              class="purple-input"
              label="Contraseña previa"
              name="contra_prev"
              type="password"
              :rules="rules"
            />
          <h4> Escriba nueva contraseña: </h4>
          <template />
            <v-text-field
              class="purple-input"
              label="Nueva contraseña"
              name="contra_nuev"
              type="password"
              :rules="rules"
            />
          <h4> Confirme la contraseña: </h4>
          <template />
            <v-text-field
              class="purple-input"
              label="Confirme contraseña"
              name="contra_conf"
              type="password"
              :rules="rules"
            />
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
            color="grey darken-1"
            flat="flat"
            type="submit"
            @click="dialog = false"
          >
            Aceptar
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import {api} from '@/api'
import $ from 'jquery'
var shajs = require('sha.js')

export default {
    name: 'Frame',
    props: {
    },
    data () {
      return {
        cant: 0,
        info:null,
        dialog: false,
        rules:[
          value => !!value || 'Required.',
          value => (value || '').length >= 5 || 'Min 5 characters'
        ]
      }
    },
    methods: {
       Pass(){
          var data = $(event.currentTarget).serializeArray();
          var pass1 = data[0].value;
          var pass2 = data[1].value;
          var pass3 = data[2].value;

          if( pass1=="" || pass2=="" || pass3=="" )
          {
            alert('Todos los campos son requeridos');
          }
          else
          {
            api.post(`/ad-usuarios/get-admin-pass`, data)
            .then(response => {
              // JSON responses are automatically parsed.
              console.log(response.data.success);
              if (!response.data.success)
              {
                alert('Contraseña previa invalida. Verifique de nuevo.');
              }
              else
              {
                if( pass2 != pass3 )
                {
                  alert('Las contraseñas no coinciden. Verifique de nuevo.');
                }
                else
                {
                  //metodo de update para meter la password
                  api.post(`/ad-usuarios/get-admin-pass/`+ pass1)
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
            })
            .catch(e => {
              this.errors.push(e)
            //  console.log("Error");
            //  console.log(e);
            })
          }
       }
    }
}
</script>
