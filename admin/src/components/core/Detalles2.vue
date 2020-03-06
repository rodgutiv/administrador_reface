<template >
    <v-dialog v-if="validarBoton(status)" v-model="dialog" max-width="500">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" small color="error" dark> Eliminar </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="indigo">
         <v-toolbar-title style="color:white;" >Eliminar Usuario</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-layout row>
          <v-flex xs10 offset-xs1 >
            <v-card-text style="text-align:center">
              ¿Estás seguro de que deseas eliminar al usuario {{nombres}} {{apellidos}} del sistema?
            </v-card-text>
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
            @click="eliminar(id);dialog = false;"
          >
            Eliminar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-else v-model="dialog" max-width="500">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" small color="green" dark> Activar </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="indigo">
         <v-toolbar-title style="color:white;" >Activar Usuario</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-layout row>
          <v-flex xs10 offset-xs1 >
            <v-card-text style="text-align:center">
              ¿Estás seguro de que deseas reactivar al usuario {{nombres}} {{apellidos}} en el sistema?
            </v-card-text>
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
            @click="reactivar(id);dialog = false;"
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
    props: {
      id: String,
      nombres: String,
      apellidos: String,
      status: String
    },
    data () {
      return {
        cant: 0,
        info:null,
        dialog: false,
      }
    },
    methods: {
       eliminar(ide){
         api.post('/ad-usuarios/delete-user/'+ide)
         .then(response => {
           // JSON responses are automatically parsed.
//           this.models = response.data;
           //console.log(this.items);
           alert('Eliminación realizada con éxito');
           window.location.replace("http://refacenet.org:61/clientes");
         })
         .catch(e => {
//           this.errors.push(e)
         //  console.log("Error");
           console.log(e);
         })
       },
       reactivar(ide){
         api.post('/ad-usuarios/active-user/'+ide)
         .then(response => {
           // JSON responses are automatically parsed.
//           this.models = response.data;
           //console.log(this.items);
           alert('Activacion realizada con éxito');
           window.location.replace("http://refacenet.org:61/clientes");
         })
         .catch(e => {
//           this.errors.push(e)
         //  console.log("Error");
           console.log(e);
         })
       },
       validarBoton(status){
          if(status=="Activo")
            return true;
          else
            return false;
       }
    }
}
</script>
