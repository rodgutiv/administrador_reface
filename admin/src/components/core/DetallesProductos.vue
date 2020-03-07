<template>
  <v-dialog v-model="dialog" persistent max-width="500">
    <v-card>
      <v-toolbar color="#003b94">
       <v-toolbar-title style="color:white;">Detalles {{ info.nombre }}</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-layout row>
        <v-flex xs10 offset-xs1 >
          <h4> Código: {{info.codigo}} </h4>
          <h4> Clave Interna: {{info.clave_interna}} </h4>
          <h4> Descripción: {{info.descripcion}} </h4>
          <h4> Autos: {{info.autos}} </h4>
          <h4> Categoría: {{info.categoria}} </h4>
          <h4> Subcategoría: {{info.tipo}} </h4>
          <h4> Marca: {{info.marca}} </h4>
          <h4> Precio: {{info.precio}} </h4>
          <h4> Stock: {{info.stock}} </h4>
          <h4> Promoción: {{info.id_promo}} </h4>
          <h4> Servicio Pesado: {{info.pesado}} </h4>
          <h4> Outlet: {{info.outlet}} </h4>
          <h4> Status: {{info.status}} </h4>
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
                     :src="`http://10.3.0.7:62/replace-sys/imagenes_productos/` + info.clave_interna + `/` + info.clave_interna + `-00` + n + `.jpg`"
                     :lazy-src="`http://10.3.0.7:62/replace-sys/imagenes_productos/` + info.clave_interna + `/` + info.clave_interna + `-00` + n + `.jpg`"
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
          color="green"
          small
          v-on:click="close()"
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
      close(){
        this.$emit('close',null)
      }
    }
}
</script>
