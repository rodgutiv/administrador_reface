<template>
  <v-dialog v-model="dialog" max-width="500">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" small color="#003b94" dark> Detalles de noticia </v-btn>
    </template>
    <v-card>
      <v-toolbar color="#003b94">
        <v-toolbar-title>Detalles {{ titulo }}</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-layout row>
        <v-flex xs10 offset-xs1 >
          <h4> Título: {{titulo}} </h4>
          <h4> Categoría: {{categoría}} </h4>
          <h4> Fecha: {{fecha}} </h4>
          <h4> Status: {{status}} </h4>
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
                     :src="ruta"
                     :lazy-src="ruta"
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
         {{contenido}}
         <p/>
        </v-flex>
      </v-layout>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          flat
          @click="dialog = false"
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
    props: {
      ruta: String,
      categoria: String,
      titulo: String,
      contenido: String,
      fecha: String,
      status: String
    },
    data () {
      return {
        cant: 0,
        info:null,
        dialog: false
      }
    }
}
</script>
