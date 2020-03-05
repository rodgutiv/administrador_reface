<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        md12
      >
        <material-card
          color="rgb(21, 45, 91)"
          title="Compras"
          text="Ordenes de compra realizadas"
        >
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
              <td>{{ item.id }}</td>
              <td>{{ item.datos_personales.nombre_completo }}</td>
              <td>{{ item.total_productos }}</td>
              <td>{{ item.total_venta }}</td>
              <td>{{ item.estado }}</td>
              <td class="text-xs-right">
                <Modalinfo :clave="item.id" :nombre="item.datos_personales.nombre_completo" :email="item.datos_personales.email" :telefono="item.datos_personales.telefono" :cp="item.datos_entrega.codigo_postal" :estado="item.datos_entrega.estado" :municipio="item.datos_entrega.municipio" :calle="item.datos_entrega.calle" :num_interior="item.datos_entrega.num_interior" :num_exterior="item.datos_entrega.num_exterior" :colonia="item.datos_entrega.colonia" :referencias="item.datos_entrega.referencias" :productos="item.total_productos" :total="item.total_venta" :status="item.estado" />
                <Modalcompras :id="item.id" :productos="item.total_productos" :precio="item.total_venta" />
                <Modalstatus :id="item.id" :status="item.estado" />
              </td>
            </template>
          </v-data-table>
          <Modaloxxo  />
          <Modaldebito  />
          <Modalcredito />
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

//import toolbar from '@/components/Toolbar.vue'
import Modalinfo from '@/components/core/Detalles4.vue'
import Modalcompras from '@/components/core/Detalles6.vue'
import Modalstatus from '@/components/core/Detalles5.vue'
import Modaloxxo from '@/components/core/Detalles8.vue'
import Modaldebito from '@/components/core/Detalles80.vue'
import Modalcredito from '@/components/core/Detalles800.vue'
import {api} from '@/api'
//import $ from 'jquery'
//import axios from 'axios'
export default {
    components:{
//    toolbar,
      Modalinfo,
      Modalcompras,
      Modalstatus,
      Modaloxxo,
      Modaldebito,
      Modalcredito
  },
  data () {
    return {
      escrito:'',
      info:null,
      rating: 3,
      id:null,
      show: false,
      rowsPerPageItems: [12, 24, 36],
      pagination: {
        rowsPerPage: 12
      },
      items: [],
      errors: [],
      empty: [],
      content1:null,
      content2:null,
      dialog: false,
      sub:null,
      sub2:null,
      headers: [
        {
          text: 'Clave',
          value: 'clave'
        },
        {
          text: 'Nombre',
          value: 'nombre'
        },
        {
          text: 'Productos',
          value: 'productos'
        },
        {
          text: 'Total',
          value: 'total'
        },
        {
          text: 'Status',
          value: 'status'
        },
        {
          sortable: false,
          text: 'Opciones',
          value: 'opciones',
          align: 'right'
        }
      ]
    }
},
 methods: {
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
    api.get(`/ad-compras/list-compras`)
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
