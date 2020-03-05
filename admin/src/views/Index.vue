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
          title="Index Carrusel"
          text="Editor de imagenes de index"
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
              <td>{{ item.num_index }}</td>
              <td>{{ item.ruta }}</td>
              <td>{{ item.status }}</td>
              <td class="text-xs-right">
                <Modaldetalles :ruta="item.ruta" />
                <Modaleditar :num_index="item.num_index" :id="item.id" />
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
import Modaldetalles from '@/components/core/Detalles130.vue'
import Modaleditar from '@/components/core/Detalles16.vue'
import Modalalta from '@/components/core/Detalles120.vue'

import {api} from '@/api'
import $ from 'jquery'
//import axios from 'axios'
export default {
    components:{
//    toolbar,
      Modaldetalles,
      Modaleditar,
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
          text: 'Id',
          value: 'id'
        },
        {
          text: 'Numero Posicion',
          value: 'num_index'
        },
        {
          text: 'Ruta',
          value: 'ruta'
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
    api.get(`/ad-index/all`)
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
