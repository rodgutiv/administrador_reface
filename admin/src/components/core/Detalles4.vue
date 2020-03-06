<template>
  <v-dialog v-model="dialog" max-width="500">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" small color="#003b94" dark> Info </v-btn>
    </template>
    <v-card>
      <v-toolbar dark color="indigo">
       <v-toolbar-title style="color:white;" >Información de compra {{clave}}</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-layout row>
        <v-flex xs10 offset-xs1 >
          <h4> Clave de compra: {{clave}} </h4>
          <h4> Cliente: {{nombres}} {{apellidos}} </h4>
          <h4> Email: {{email}} </h4>
          <h4> Telefono: {{telefono}} </h4>
          <h4> Número interior: {{num_interior}} </h4>
          <h4> Número exterior: {{num_exterior}} </h4>
          <h4> Calle: {{calle}} </h4>
          <h4> Colonia: {{colonia}} </h4>
          <h4> Municipio: {{municipio}} </h4>
          <h4> Estado: {{estado}} </h4>
          <h4> Código Postal: {{cp}} </h4>
          <h4> Referencias: {{referencias}} </h4>
          <h4> Número de productos: {{productos}} </h4>
          <h4> Total: $ {{total}} m.n.</h4>
          <h4> Status: {{status}} </h4>
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
      clave: String,
      nombres: String,
      apellidos: String,
      email: String,
      telefono: String,
      num_interior: String,
      num_exterior: String,
      calle: String,
      colonia: String,
      municipio: String,
      estado: String,
      cp: String,
      referencias: String,
      productos: String,
      total: Number,
      status: Number
    },
    data () {
      return {
        cant: 0,
        info:null,
        dialog: false,
      }
    }
}
</script>
