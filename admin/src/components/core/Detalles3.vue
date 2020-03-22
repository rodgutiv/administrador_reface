<template>
  <v-dialog v-if="validarBoton(info.status)" v-model="dialog" max-width="500">
    <v-card>
      <v-toolbar dark color="indigo">
       <v-toolbar-title style="color:white;" >Eliminar Producto</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-layout row>
        <v-flex xs10 offset-xs1 >
          <v-card-text>
            ¿Estás seguro de que deseas eliminar el producto {{info.nombre}} del sistema?
          </v-card-text>
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
          @click="eliminar(info.clave_interna);"
        >
          Eliminar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-dialog v-else v-model="dialog" max-width="500">
    <v-card>
      <v-toolbar dark color="indigo">
       <v-toolbar-title style="color:white;" >Activar/Desactivar Producto</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-layout row>
        <v-flex xs10 offset-xs1 >
          <v-card-text style="text-align:center">
            ¿Estás seguro de que deseas reactivar el producto {{info.nombre}} del sistema?
          </v-card-text>
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
          @click="reactivar(info.clave_interna);"
        >
          Reactivar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import {api} from '@/api'
export default {
    name: 'Frame',
    props: ['dialog','info'],
    data () {
      return {
        cant: 0
      }
    },
    methods: {
      close(datos){
        this.$emit('close',datos)
      },
       eliminar(clave_interna){
         api.post('/ad-productos/delete-product/'+clave_interna)
         .then(response => {
           // JSON responses are automatically parsed.
//           this.models = response.data;
           //console.log(this.items);
           alert('Eliminación realizada con éxito');
           this.close(true)
           //window.location.replace("http://10.3.0.7:61/productos");
         })
         .catch(e => {
//           this.errors.push(e)
         //  console.log("Error");
           console.log(e);
         })
       },
       reactivar(clave_interna){
         api.post('/ad-productos/active-product/'+clave_interna)
         .then(response => {
           // JSON responses are automatically parsed.
//           this.models = response.data;
           //console.log(this.items);
           alert('Activacion realizada con éxito');
           this.close(true)
           //window.location.replace("http://10.3.0.7:61/productos");
         })
         .catch(e => {
//           this.errors.push(e)
         //  console.log("Error");
           console.log(e);
         })
       },
       validarBoton(status){
          if(status=="ACTIVO")
            return true;
          else
            return false;
       }
    }
}
</script>
