<template>
  <v-dialog v-model="dialog" max-width="500">
    <v-card>
      <v-form id="form" ref="form"  v-on:submit.prevent="Update()" enctype="multipart/form-data" lazy-validation>
        <v-toolbar color="#003b94">
         <v-toolbar-title style="color:white;">Editar Promocion:  {{info.id_promo}}</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-layout row>
          <v-flex xs10 offset-xs1 >
            <h4> Identificador: {{info.id_promo}}</h4>
            <h4> Nombre: </h4>
            <v-text-field
              v-model="info.nombre"
              class="purple-input"
              label="Nombre"
              name="nombre"
            />
            <h4> Descripción: </h4>
            <v-text-field
            v-model="info.nombre"
              class="purple-input"
              label="Descripción"
              name="descripcion"
            />
            <h4> Descuento: </h4>
            <v-autocomplete
              v-model="info.descuento"
              :items="des"
              solo
              label="Buscar Descuento">
              
            </v-autocomplete>
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
          

          <v-btn
            color="red darken-1"
            flat="flat"
            @click="close(null)"
          >
            Cancelar
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            flat="flat"
            type="submit"
             @click="Update()"
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
    props: ['dialog','info'],
    data () {
      return {
        cant: 0,
        mess: null,
        des:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,
          31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,
          61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,
          91,92,93,94,95,96,97,98,99,100],
        descuento:null,
        promocion:{
            id_promo:null,
            nombre:null,
            descripcion:null,
            descuento:null,
            status:null
        }
      }
    },
    methods: {
      close(datos){
        this.$emit('close',datos)
      },
      Update(){
        this.promocion.id_promo = this.info.id_promo
        this.promocion.nombre = this.info.nombre
        this.promocion.descripcion = this.info.descripcion
        this.promocion.descuento = this.info.descuento
        this.promocion.status = this.info.status
        console.log("noticia: ",this.promocion)
          api.post('/promociones/update-promocion', this.promocion)
          .then(response => {
            // JSON responses are automatically parsed.
  //           this.models = response.data;
              //alert('Actualización realizada con éxito');
              this.close(true)
              //window.location.replace("http://10.3.0.7:61/productos");
            //console.log(this.items);
          })
          .catch(e => {
            this.close(false)
  //           this.errors.push(e)
          //  console.log("Error");
            console.log(e);
          })
      }
    }
}
</script>
