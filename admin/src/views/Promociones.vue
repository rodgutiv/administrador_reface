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
          title="Promociones"
          text="Gestor de promociones"
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
              <td>{{ item.id_promo }}</td>
              <td>{{ item.nombre }}</td>
              <td>{{ item.descuento }} %</td>
              <td>{{ item.status }}</td>
              <td class="text-xs-right">
                <v-btn color="#003b94" small v-on:click="editar(item)">Editar</v-btn>
                <v-btn color="blue" small v-on:click="detalle(item)">Detalles</v-btn>
                <Modaleliminar :id_promo="item.id_promo" :nombre="item.nombre" :status="item.status" />
              </td>
            </template>
          </v-data-table>
            <Modalalta  />
             <Modaldetalles  :info="info2" :dialog="dialog" @close="closedatos"/>
            <Modaleditar :info="info2" :dialog="dialog2" @close="closeeditar"/>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

//import toolbar from '@/components/Toolbar.vue'
import Modaldetalles from '@/components/core/Detalles13.vue'
import Modaleliminar from '@/components/core/Detalles14.vue'
import Modalalta from '@/components/core/Detalles15.vue'
import Modaleditar from '@/components/core/PromocionEdit.vue'
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
      rating: 3,
      id:null,
      dialog2:false,
      dialog:false,
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
          text: 'Id de Promocion',
          value: 'id_promo'
        },
        {
          text: 'Nombre',
          value: 'nombre'
        },
        {
          text: 'Descuento',
          value: 'descuento'
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
      ],
      info2:{id_promo:''},
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
        this.promociones()
      }else{
        this.dialog2 = false;
        console.log('false')
      }

    },
    closedatos(){
      this.dialog = false;
    },
    detalle(datos){
      this.info2=datos
      this.dialog=true
    },
    promociones(){
      api.get(`/promociones/all`)
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
    this.promociones()
}


}

</script>
