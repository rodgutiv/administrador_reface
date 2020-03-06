<template>
  <v-dialog v-model="dialog" max-width="500">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" small color="#003b94" dark> Editar Crédito </v-btn>
    </template>
    <v-card>
      <v-form ref="form" v-model="valid" v-on:submit.prevent="Update()" lazy-validation>
        <v-toolbar color="#003b94">
         <v-toolbar-title style="color:white;">Actualizar Crédito</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-layout row>
          <v-flex xs10 offset-xs1 >
            <h4> Número de Tarjeta: </h4>
            <v-text-field
              class="purple-input"
              label="Número"
              name="numero"
              :value="items.numero"
            />
            <h4> Nombre del Titular: </h4>
            <v-text-field
              class="purple-input"
              label="Titular"
              name="nombre"
              :value="items.nombre"
            />
            <h4> Fecha de expiración: </h4>
            <v-text-field
              class="purple-input"
              label="Fecha"
              name="fecha"
              :value="items.fecha"
            />
            <h4> Digitos de seguridad: </h4>
            <v-text-field
              class="purple-input"
              label="Dígitos"
              name="digitos"
              :value="items.digitos"
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
    props: {},
    data () {
      return {
        cant: 0,
        info:null,
        dialog: false,
        items: []
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
        api.get(`/ad-compras/obtener-credito`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.items = response.data[0]
          console.log(this.items);
        })
        .catch(e => {
          this.errors.push(e)
        //  console.log("Error");
        //  console.log(e);
        })
    },
    methods: {
       Update(){
         api.post('/ad-compras/actualizar-credito', $(event.currentTarget).serializeArray())
         .then(response => {
           // JSON responses are automatically parsed.
//           this.models = response.data;
             alert('Actualización realizada con éxito');
             window.location.replace("http://refacenet.org:61/compras");
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
