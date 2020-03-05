<template>
  <v-dialog v-model="dialog" max-width="1200">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" small color="#003b94" dark> Añadir Noticia </v-btn>
    </template>
    <v-card>
      <v-form id="form" ref="form" v-model="valid" v-on:submit.prevent="Update()" enctype="multipart/form-data" lazy-validation>
        <v-toolbar color="#003b94">
          <v-toolbar-title>Nueva Noticia</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-layout row>
          <v-flex xs10 offset-xs1 >
            <h4> Título: </h4>
            <v-text-field
              class="purple-input"
              label="Título"
              name="titulo"
              id="titulo"
              :rules="rules"
            />
            <h4> Categoría: </h4>
            <v-text-field
              class="purple-input"
              label="Categoría"
              name="categoria"
              id="categoria"
              :rules="rules"
            />
            <h4> Contenido: </h4>
            <v-textarea
              outline
              class="purple-input"
              label="Contenido"
              name="contenido"
              id="contenido"
              spellcheck="true"
              rows="15"
              :rules="rules"
            />
            <h4> Imágen Asociada: </h4>
            <input
              label="Imagen: "
              name="img1"
              id="img1"
              accept="image/*"
              type="file"
              :rules="rules"
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
        dialog: false,
        mess: null,
        rules: [
          value => !!value || 'Required.'
        ]
      }
    },
    methods: {
       Update(){

            var form = $('#form')[0];
            var data = new FormData(form);

            var check1 = document.getElementById("titulo").value;
            var check2 = document.getElementById("categoria").value;
            var check3 = document.getElementById("contenido").value;
            var check4 = document.getElementById("img1").value;

            console.log(check1);
            console.log(check2);
            console.log(check3);
            console.log(check4);

            if( check1=="" || check2=="" || check3=="" || check4=="")
            {
              alert("Necesita completar todos los campos");
            }
            else
            {
            $.ajax({
                type: "POST",
                enctype: 'multipart/form-data',
                url: "http://refacenet.org:61/noticias/new-noticia",
                data: data,
                processData: false,
                contentType: false,
                cache: false,
                timeout: 600000,
                success: function (data) {
                    console.log("SUCCESS : ", data);
                  alert("Noticia añadida exitosamente");
                  window.location.replace("http://refacenet.org:61/noticias");
                },
                error: function (e) {
                    console.log("ERROR : ", e);
                }
            });
            }
       }
    }
}
</script>
