<template>
  <v-dialog v-model="dialog" max-width="500">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" small color="#003b94" dark> Editar noticia</v-btn>
    </template>
    <v-card>
      <v-form ref="form" v-model="valid" v-on:submit.prevent="Update()" lazy-validation>
        <v-toolbar color="#003b94">
          <v-toolbar-title>Editar noticia {{ titulo }}</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-layout row>
          <v-flex xs10 offset-xs1 >
            <h4> Título: </h4>
            <v-text-field
              class="purple-input"
              label="Título"
              name="titulo"
              :value="titulo"
            />
            <h4> Categoría: </h4>
            <v-text-field
              class="purple-input"
              label="Categoría"
              name="categoria"
              :value="categoria"
            />
            <h4> Contenido: </h4>
            <v-text-field
              class="purple-input"
              label="Contenido"
              name="contenido"
              :value="contenido"
            />
            <h4> Imagen Asociada: </h4>
            <input
              label="Imagen: "
              name="img1"
              accept="image/*"
              type="file"
            />
          </v-flex>
        </v-layout>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialog = false"
          >
            Cancelar
          </v-btn>

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
      ruta: String,
      titulo: String,
      categoria: String,
      contenido: String,
      descripcion: String,
      status: String
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
         api.post('/noticias/update-noticia', $(event.currentTarget).serializeArray())
         .then(response => {
           // JSON responses are automatically parsed.
//           this.models = response.data;
             alert('Actualización realizada con éxito');
             window.location.replace("http://refacenet.org:61/noticias");
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
