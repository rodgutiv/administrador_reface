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
          title="Noticias"
          text="Gestión de noticias"
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
              <td>{{ item.titulo }}</td>
              <td>{{ item.categoria }}</td>
              <td>{{ item.fecha }}</td>
              <td>{{ item.status }}</td>
              <td class="text-xs-right">
                <Modaldetalles :ruta="item.ruta" :categoria="item.categoria" :titulo="item.titulo" :contenido="item.contenido" :fecha="item.fecha" :status="item.status"/>
                <Modaleditar :ruta="item.ruta" :categoria="item.categoria" :titulo="item.titulo" :contenido="item.contenido" :fecha="item.fecha" :status="item.status"/>
                <Modaleliminar :titulo="item.titulo" :status="item.status"/>
              </td>
            </template>
          </v-data-table>
            <Modalalta  />

        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

//import toolbar from '@/components/Toolbar.vue'
import Modaldetalles from '@/components/core/Detalles9.vue'
import Modaleliminar from '@/components/core/Detalles11.vue'
import Modalalta from '@/components/core/Detalles12.vue'
import {api} from '@/api'
//import $ from 'jquery'
//import axios from 'axios'
export default {
    components:{
//    toolbar,
      Modaldetalles,
      Modaleliminar,
      Modalalta
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
          text: 'Título',
          value: 'titulo'
        },
        {
          text: 'Categoría',
          value: 'categoria'
        },
        {
          text: 'Fecha',
          value: 'fecha'
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
    api.get(`/noticias/all`)
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
