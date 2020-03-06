<template>
  <v-dialog v-model="dialog" max-width="500">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" small color="#003b94" dark> Detalles </v-btn>
    </template>
    <v-card>
      <v-toolbar dark color="indigo">
       <v-toolbar-title style="color:white;">Ver detalles de {{nombres}} {{apellidos}}</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-layout row>
        <v-flex xs10 offset-xs1 >
          <h4> Email: {{email}} </h4>
          <h4> Fecha de nacimiento: {{fecha}} </h4>
          <h4> Telefono: {{telefono}} </h4>
          <h4> Número interior: {{interior}} </h4>
          <h4> Número exterior: {{exterior}} </h4>
          <h4> Calle: {{calle}} </h4>
          <h4> Colonia: {{colonia}} </h4>
          <h4> Localidad: {{localidad}} </h4>
          <h4> Municipio: {{municipio}} </h4>
          <h4> Estado: {{estado}} </h4>
          <h4> País: {{pais}} </h4>
          <h4> Código Postal: {{cp}} </h4>
          <h4> Referencias: {{referencias}} </h4>
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
      nombres: String,
      apellidos: String,
      email: String,
      fecha: String,
      telefono: String,
      interior: String,
      exterior: String,
      calle: String,
      colonia: String,
      localidad: String,
      municipio: String,
      estado: String,
      pais: String,
      cp: String,
      referencias: String,
      status: String
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
<style>
  .toolbar__content {
    margin-left: 0px!important;
}

</style>
