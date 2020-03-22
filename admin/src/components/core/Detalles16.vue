<template>
  <v-dialog v-model="dialog" max-width="500">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" small color="#003b94" dark> Editar </v-btn>
    </template>
    <v-card>
      <v-form ref="form" v-model="valid" v-on:submit.prevent="Update()" lazy-validation>
        <v-toolbar color="#003b94">
         <v-toolbar-title style="color:white;">Editar Imagen</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-layout row>
          <v-flex xs10 offset-xs1 >
            <h4> Id: </h4>
            <v-text-field
              class="purple-input"
              label="Id"
              name="id"
              :value="id"
            />
            <h4> Nueva Posición: </h4>
            <v-text-field
              class="purple-input"
              label="Posición"
              name="num_index"
              type=number
              :value="num_index"
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
      num_index: String,
      id: String
    },
    data () {
      return {
        cant: 0,
        info:null,
        dialog: false
      }
    },
    methods: {
       Update(){
         api.post('/ad-index/update-index-carrusel', $(event.currentTarget).serializeArray())
         .then(response => {
           // JSON responses are automatically parsed.
//           this.models = response.data;
            if(response.data.success==true)
            {
             alert('Actualización realizada con éxito');
            }
            else
            {
              alert('Debes desvincular primero una imagen anterior al carrusel');
            }
             window.location.replace("http://10.3.0.7:61/index");
           //console.log(this.items);
         })
         .catch(e => {
//           this.errors.push(e)
         //  console.log("Error");
           console.log(e);
         })
       }
    }
}
</script>
