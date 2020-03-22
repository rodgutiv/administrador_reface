<template>
  <v-dialog v-model="dialog" max-width="500">   
    <v-card>
      <v-toolbar color="#003b94">
       <v-toolbar-title style="color:white;">Detalles {{ info.titulo }}</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-layout row>
        <v-flex xs10 offset-xs1 >
          <h4> Título: {{info.titulo}} </h4>
          <h4> Categoría: {{info.categoria}} </h4>
          <h4> Fecha: {{info.fecha}} </h4>
          <h4> Status: {{info.status}} </h4>
          <h4> Imágen Asociada: </h4>
          <v-card>
           <v-container grid-list-sm fluid>
             <v-layout row wrap>
               <v-flex
                 v-for="n in 1"
                 :key="n"
                 xs4
                 d-flex
               >
                 <v-card flat tile class="d-flex">
                   <v-img
                     :src="info.ruta"
                     :lazy-src="info.ruta"
                     aspect-ratio="1"
                     class="grey lighten-2"
                   >
                     <template v-slot:placeholder>
                       <v-layout
                         fill-height
                         align-center
                         justify-center
                         ma-0
                       >
                         <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                       </v-layout>
                     </template>
                   </v-img>
                 </v-card>
               </v-flex>
             </v-layout>
           </v-container>
         </v-card>
         <h4>Contenido: </h4>
         <br/>
         <p>
         {{info.contenido}}
         <p/>
        </v-flex>
      </v-layout>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          flat
           @click="close(null)"
        >
          Aceptar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
    name: 'Frame',
    props: ['dialog','info'],
    data () {
      return {
        cant: 0
      }
    },
    methods:{
      close(datos){
        this.$emit('close',datos)
      }
    }
}
</script>
