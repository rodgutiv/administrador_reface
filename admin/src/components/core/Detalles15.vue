<template>
  <v-dialog v-model="dialog" max-width="500">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" small color="#003b94" dark> Añadir Promoción </v-btn>
    </template>
    <v-card>
      <v-form id="form" ref="form" v-model="valid" v-on:submit.prevent="Update()" enctype="multipart/form-data" lazy-validation>
        <v-toolbar color="#003b94">
          <v-toolbar-title>Nueva Promocion</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-layout row>
          <v-flex xs10 offset-xs1 >
            <h4> Identificador: </h4>
            <v-text-field
              class="purple-input"
              label="Id de promoción"
              name="id_promo"
            />
            <h4> Nombre: </h4>
            <v-text-field
              class="purple-input"
              label="Nombre"
              name="nombre"
            />
            <h4> Descripción: </h4>
            <v-text-field
              class="purple-input"
              label="Descripción"
              name="descripcion"
            />
            <h4> Descuento: </h4>
            <v-text-field
              class="purple-input"
              label="Descuento"
              name="descuento"
              type="number"
            />
            <h4> Imágen Asociada: </h4>
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
      id_promo: String,
      ruta: String,
      nombre: String,
      descripcion: String,
      descuento: Number,
      status: String
    },
    data () {
      return {
        cant: 0,
        info:null,
        dialog: false,
        mess: null
      }
    },
    methods: {
       Update(){

            var form = $('#form')[0];
            var data = new FormData(form);

            $.ajax({
                type: "POST",
                enctype: 'multipart/form-data',
                url: "http://localhost:3001/promociones/new-promocion",
                data: data,
                processData: false,
                contentType: false,
                cache: false,
                timeout: 600000,
                success: function (data) {
                    console.log("SUCCESS : ", data);
                  alert(this.mess);
                  window.location.replace("http://refacenet.org:61/promociones");
                },
                error: function (e) {
                    console.log("ERROR : ", e);
                }
            });
       }
    }
}
</script>
