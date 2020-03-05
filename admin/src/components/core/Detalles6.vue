<template>
  <v-dialog v-model="dialog" max-width="500">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" small color="#003b94" dark> Detalles </v-btn>
    </template>
    <v-card>
      <v-toolbar dark color="indigo">
        <v-toolbar-title >Ver detalles de compra {{id}}</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-layout row>
        <v-flex xs10 offset-xs1 >
          <v-data-table
            :headers="headers"
            :items="items"
          >
            <template
              slot="headerCell"
              slot-scope="{ header }"
            >
              <span
                class="subheading font-weight-light text-success text--darken-3"
                v-text="header.text"
              />
            </template>
            <template
              slot="items"
              slot-scope="{ item }"
            >
              <td>{{ item.nombre }}</td>
              <td>{{ item.cantidades }}</td>
              <td>$ {{ item.precio }} m.n.</td>
              <td>$ {{ item.total }} m.n.</td>
            </template>
          </v-data-table>
              <h4> Número de productos: {{productos}} </h4>
              <h4> Total pedido: $ {{precio}} m.n.</h4>
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
import {api} from '@/api'
export default {
    name: 'Frame',
    props: {
      id: String,
      productos: Number,
      precio: Number,
      nombre: String,
      cantidades: Number,
      precio: Number,
      total: Number,
      fecha: Date
    },
    data () {
      return {
        cant: 0,
        info:null,
        dialog: false,
        headers: [
          {
            text: 'Nombre',
            value: 'nombre'
          },
          {
            text: 'Cantidades',
            value: 'cantidades'
          },
          {
            text: 'Precio',
            value: 'precio'
          },
          {
            text: 'Total',
            value: 'total',
            align: 'right'
          }
        ]
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
        api.get(`/ad-compras/compras-data/`+this.id)
        .then(response => {
          // JSON responses are automatically parsed.
          this.items = response.data
          //console.log(this.items);
        })
        .catch(e => {
          this.errors.push(e)
        //  console.log("Error");
        //  console.log(e);
        })
    }
}
</script>
