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
          <v-text-field outline label="Buscar" v-model="escrito">
            
          </v-text-field>
          <v-data-table
            :headers="headers"
            :items="items"
            :search="escrito"
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
                
                <v-btn color="#003b94" small v-on:click="editar(item)">Editar</v-btn>
                <v-btn color="blue" small v-on:click="detalle(item)">Detalles</v-btn>
                <Modaleliminar :titulo="item.titulo" :status="item.status"/>
              </td>
            </template>
          </v-data-table>
            <Modalalta  />
            <Modaleditar :info="info2" :dialog="dialog2" @close="closeeditar"/>
            <Modaldetalles  :info="info2" :dialog="dialog" @close="closedatos"/>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

//import toolbar from '@/components/Toolbar.vue'
import Modaldetalles from '@/components/core/NoticiaDetalle.vue'
import Modaleditar from '@/components/core/NoticiaEdit.vue'
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
      Modalalta,
      Modaleditar
  },
  data () {
    return {
      escrito:'',
      info:null,
      dialog2:false,
      dialog:false,
      info2:{titulo:''},
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
   editar(datos){
      this.info2=datos
      this.dialog2=true
    },
    closeeditar(res){
      if(res==true){
        this.dialog2 = false;
        console.log('entro')
        this.noticias()
      }else{
        this.dialog2 = false;
        console.log('false')
      }

    },
    noticias(){
      console.log('noticas')
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
    },
    closedatos(){
      this.dialog = false;
    },
    detalle(datos){
      this.info2=datos
      this.dialog=true
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
    this.noticias()
}


}

</script>
