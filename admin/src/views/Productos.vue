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
          title="Productos"
          text="Listado de Productos y características"
        >
           <v-text-field outline label="Buscar" v-model="escrito">

          </v-text-field>
          <template
          >
            <!--<div>
              <v-autocomplete
                label="Busca producto por codigo o palabras clave."
                :items="items"
              ></v-autocomplete>
            </div>-->
          </template>
          <v-data-table
            :headers="headers"
            :items="items"
            :pagination.sync="pagination"
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
              <td>{{ item.codigo }}</td>
              <td>{{ item.clave_interna }}</td>
              <td>{{ item.nombre }}</td>
              <td>{{ item.tipo }}</td>
              <td>{{ item.marca }}</td>
              <td>{{ item.precio }}</td>
              <td>{{ item.id_promo }}</td>
              <td>{{ item.status }}</td>
              <td class="text-xs-right">
                <v-btn color="error" small v-on:click="eliminar(item)">Estatus</v-btn>
                <v-btn color="#003b94" small v-on:click="editar(item)">Editar</v-btn>
                <v-btn color="blue" small v-on:click="detalle(item)">Detalles</v-btn>
              </td>
            </template>
          </v-data-table>
            <Modalalta  />

        </material-card>
      </v-flex>
    </v-layout>
    <v-layout>
      <Modaleliminar :info="info2" :dialog="dialog3" @close="closeeliminar"/>
      <Modaleditar :info="info2" :dialog="dialog2" @close="closeeditar"/>
      <Modaldetalle  :info="info2" :dialog="dialog" @close="closedatos"/>
    </v-layout>
  </v-container>
</template>

<script>

//import toolbar from '@/components/Toolbar.vue'
import Modaldetalle from '@/components/core/DetallesProductos.vue'
import Modaleditar from '@/components/core/Detalles1.vue'
import Modaleliminar from '@/components/core/Detalles3.vue'
import Modalalta from '@/components/core/Detalles7.vue'
import Modalautos from '@/components/core/Detalles70.vue'
import {api} from '@/api'
//import $ from 'jquery'
//import axios from 'axios'
export default {
    components:{
//    toolbar,
      Modaleditar,
      Modaleliminar,
      Modalalta,
      Modaldetalle
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
      items2: [],
      errors: [],
      empty: [],
      content1:null,
      content2:null,
      dialog: false,
      dialog2: false,
      dialog3: false,
      sub:null,
      sub2:null,
      headers: [
        {
          text: 'Codigo',
          value: 'codigo'
        },
        {
          text: 'Clave',
          value: 'clave'
        },
        {
          text: 'Nombre',
          value: 'nombre'
        },
        {
          text: 'Tipo',
          value: 'tipo'
        },
        {
          text: 'Marca',
          value: 'marca'
        },
        {
          text: 'Precio',
          value: 'precio'
        },
        {
          text: 'Promoción',
          value: 'id_promo'
        },
        {
          text: 'Status',
          value: 'Status'
        },
        {
          sortable: false,
          text: 'Opciones',
          value: 'opciones',
          align: 'right'
        }
      ],
      buscar:null,
      info2:{nombre:'',clave_interna:''}
    }
},
  methods: {
    closedatos(){
      this.dialog = false;
    },
    closeeditar(res){
      if(res==true){
        this.dialog2 = false;
        this.productos()
      }else{
        this.dialog2 = false;
      }

    },
    closeeliminar(){
      this.dialog3 = false;
    },
    detalle(datos){
      this.info2=datos
      this.dialog=true
    },
    editar(datos){
      this.info2=datos
      this.dialog2=true
    },
    eliminar(datos){
      this.info2=datos
      this.dialog3=true
    },
    productos(){
      api.get(`/ad-productos/list`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.items = response.data
        console.log(this.items);
      })
      .catch(e => {
        this.errors.push(e)
      //  console.log("Error");
      //  console.log(e);
      })
    }
  },
created() {
    //alert(sessionStorage.getItem("dato"))
    //this.info = this.$route.params.info
    //alert("ejemplo "+this.info)
    //sessionStorage.setItem("content1","display:none")
    //sessionStorage.setItem("content2",null)
    //alert(this.content2)
    if(sessionStorage.getItem("dato")!=null){
      this.escrito=sessionStorage.getItem("dato")
    }else{
      this.escrito=''
    }
    this.productos()
}


}

</script>
