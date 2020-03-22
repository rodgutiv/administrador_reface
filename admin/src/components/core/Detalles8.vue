<template>
  <v-dialog v-model="dialog" max-width="500">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" small color="error" dark> Actualizar OXXO </v-btn>
    </template>
    <v-card>
      <v-form ref="form" v-model="valid" v-on:submit.prevent="Update()" lazy-validation>
        <v-toolbar dark color="indigo">
         <v-toolbar-title style="color:white;" >Actualizar referencia de OXXO</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-layout row>
          <v-flex xs10 offset-xs1 >
            <v-data-table
              :headers="headers"
              :items="items"
               hide-actions
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
                <td>{{ item.numero_referencia }}</td>
              </template>
            </v-data-table>
            <v-text-field
              class="purple-input"
              label="Nueva referencia: "
              name="referencia"
              id="referencia"
              :rules="rules10"
            />
          </v-flex>
        </v-layout>
        <v-card-actions>
          
          <v-btn
            color="red darken-1"
            flat="flat"
            @click="dialog = false"
          >
            Cancelar
          </v-btn>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            flat="flat"
            type="submit"
            @click="dialog = false"
          >
            Guardar Cambios
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>
<script>
import {api} from '@/api'
import $ from 'jquery'

export default {
    name: 'Frame',
    props: {
      numero_referencia: String
    },
    data () {
      return {
        cant: 0,
        info:null,
        dialog: false,
        headers: [
          {
            text: 'Referencia de OXXO actual',
            value: 'referencia',
            align: 'center',
            sortable: false
          }
        ],
        rules10: [
          value => !!value || 'Required.',
          value => (value || '').length == 16 || 'Only 16 characters',
          value => {
            const pattern = /^[0-9]{16}$/;
            return pattern.test(value) || 'Número de cuenta inválido'
          },
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
        api.get(`/ad-compras/obtener-referencia`)
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
    methods: {
       Update(){
//        var query = $(event.currentTarget).serializeArray();
        var query = $("#referencia").val();
        console.log(query)
        if(query.length != 16)
        {
          alert('El numero de referencia no cumple con las caracteristicas señaladas');
        }
        else
        {
          api.post('/ad-compras/actualizar-referencia/' + query)
          .then(response => {
            // JSON responses are automatically parsed.
  //           this.models = response.data;
            //console.log(this.items);
            alert('Actualización realizada con éxito');
            window.location.replace("http://10.3.0.7:61/compras");
          })
          .catch(e => {
  //           this.errors.push(e)
          //  console.log("Error");
            console.log(e);
          })
        }
       }
    }
}
</script>
