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
          title="Clientes"
          text="Datos de clientes registrados en la plataforma Reface"
        >
          <v-data-table
            :headers="headers"
            :items="items"
            :loading="ver"
            loading-text="Buscando... por favor, espere un momento."
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
              <td>{{ item.datos_personales.nombres }}</td>
              <td>{{ item.datos_personales.apellidos }}</td>
              <td>{{ item.datos_personales.username }}</td>
              <td>{{ item.datos_personales.telefono }}</td>
              <td>{{ item.status }}</td>
              <td class="text-xs-right">
                <Modaldetalles :nombres="item.datos_personales.nombres" :apellidos="item.datos_personales.apellidos" :email="item.datos_personales.email" :fecha="item.datos_personales.fecha_nacimiento" :telefono="item.datos_personales.telefono" :interior="item.domicilio.num_interior" :exterior="item.domicilio.num_exterior" :calle="item.domicilio.calle" :colonia="item.domicilio.colonia" :localidad="item.domicilio.localidad" :municipio="item.domicilio.municipio" :estado="item.domicilio.estado" :pais="item.domicilio.pais" :cp="item.domicilio.codigo_postal" :referencias="item.domicilio.referencias" :status="item.status" />
                <Modaleditar :id="item.id" :nombres="item.datos_personales.nombres" :apellidos="item.datos_personales.apellidos" :email="item.datos_personales.email" :username="item.datos_personales.username" :fecha="item.datos_personales.fecha_nacimiento" :telefono="item.datos_personales.telefono" :interior="item.domicilio.num_interior" :exterior="item.domicilio.num_exterior" :calle="item.domicilio.calle" :colonia="item.domicilio.colonia" :localidad="item.domicilio.localidad" :municipio="item.domicilio.municipio" :estado="item.domicilio.estado" :pais="item.domicilio.pais" :cp="item.domicilio.codigo_postal" :referencias="item.domicilio.referencias" :status="item.status" />
  <!--              <v-btn id="boton_prod" small color="primary" > Compras  </v-btn>        -->
                <Modaleliminar :nombres="item.datos_personales.nombres" :apellidos="item.datos_personales.apellidos" :id="item.id" :status="item.status" />
              </td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

//import toolbar from '@/components/Toolbar.vue'
import Modaldetalles from '@/components/core/Detalles.vue'
import Modaleditar from '@/components/core/Detalles111.vue'
import Modaleliminar from '@/components/core/Detalles2.vue'
import {api} from '@/api'
//import $ from 'jquery'
//import axios from 'axios'
export default {
    components:{
//    toolbar,
      Modaldetalles,
      Modaleliminar,
      Modaleditar
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
      ver:false,
      headers: [
        {
          text: 'Nombres',
          value: 'nombres'
        },
        {
          text: 'Apellidos',
          value: 'apellidos'
        },
        {
          text: 'Username',
          value: 'username'
        },
        {
          text: 'Telefono',
          value: 'telefono'
        },
        {
          text: 'Status',
          value: 'status'
        },
        {
          sortable: false,
          text: 'Acciones',
          value: 'acciones',
          align: 'right'
        }
      ]
    }
},
 methods: {
    datos(ide){

    },
    compras(ide){

    },
    eliminar(ide){

      api.get(`/ad-usuarios/delete-user/`+ide)
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
    api.get(`/ad-usuarios/all-users`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.items = response.data
      this.ver = true;
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
