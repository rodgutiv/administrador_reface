<template>
  <v-dialog v-model="dialog" max-width="500">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" small color="#003b94" dark> Detalles </v-btn>
    </template>
    <v-card>
      <v-toolbar color="#003b94">
        <v-toolbar-title>Detalles {{ nombre }}</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-layout row>
        <v-flex xs10 offset-xs1 >
          <h4> Código: {{codigo}} </h4>
          <h4> Clave Interna: {{clave_interna}} </h4>
          <h4> Descripción: {{descripcion}} </h4>
          <h4> Autos: {{autos}} </h4>
          <h4> Categoría: {{categoria}} </h4>
          <h4> Subcategoría: {{tipo}} </h4>
          <h4> Marca: {{marca}} </h4>
          <h4> Precio: {{precio}} </h4>
          <h4> Stock: {{stock}} </h4>
          <h4> Promoción: {{id_promo}} </h4>
          <h4> Servicio Pesado: {{pesado}} </h4>
          <h4> Outlet: {{outlet}} </h4>
          <h4> Status: {{status}} </h4>
          <h4> Imágenes Asociadas: </h4>
          <v-card>
           <v-container grid-list-sm fluid>
             <v-layout row wrap>
               <v-flex
                 v-for="n in 3"
                 :key="n"
                 xs4
                 d-flex
               >
                 <v-card flat tile class="d-flex">
                   <v-img
                     :src="`/Users/macbookair/Documents/refacesys/replace-sys/admin-backend/app/public/imagenes_productos/` + clave_interna + `/` + clave_interna + `-00` + n + `.jpg`"
                     :lazy-src="`/Users/macbookair/Documents/refacesys/replace-sys/admin-backend/app/public/imagenes_productos/` + clave_interna + `/` + clave_interna + `-00` + n + `.jpg`"
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
          <!--               <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>  -->
                       </v-layout>
                     </template>
                   </v-img>
                 </v-card>
               </v-flex>
             </v-layout>
           </v-container>
         </v-card>
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
      nombre: String,
      codigo: String,
      clave_interna: String,
      descripcion: String,
      categoria: String,
      tipo: String,
      marca: String,
      precio: Number,
      autos: String,
      stock: Number,
      status: String,
      id_promo: String,
      pesado: String,
      outlet: String
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
