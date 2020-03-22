<template>
  <v-dialog v-model="dialog" max-width="500">
    <v-card>
      <v-form ref="form"  v-on:submit.prevent="Update()" lazy-validation>
        <v-toolbar color="#003b94">
         <v-toolbar-title style="color:white;">Editar {{ info.nombre }}</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-layout row>
          <v-flex xs10 offset-xs1 >
          <h4> Clave Interna: </h4>
          <v-text-field
            class="purple-input"
            label="Clave"
            name="clave_interna"
            :value="info.clave_interna"
            :rules="rules1"
          />
            <h4> Código: </h4>
            <v-text-field
              class="purple-input"
              label="Código"
              name="codigo"
              :value="info.codigo"
              :rules="rules0"
            />
            <h4> Nombre: </h4>
            <v-text-field
              class="purple-input"
              label="Nombre"
              name="nombre"
              :value="info.nombre"
              :rules="rules2"
            />
            <h4> Descripción: </h4>
            <v-text-field
              class="purple-input"
              label="Descripción"
              name="descripcion"
              :value="info.descripcion"
              :rules="rules2"
            />
            <h4> Categoría: </h4>
            <v-text-field
              class="purple-input"
              label="Categoría"
              name="categoria"
              :value="info.categoria"
              :rules="rules2"
            />
            <h4> Subcategoría: </h4>
            <v-text-field
              class="purple-input"
              label="Subcategoría"
              name="tipo"
              :value="info.tipo"
              :rules="rules2"
            />
            <h4> Marca: </h4>
            <v-text-field
              class="purple-input"
              label="Marca"
              name="marca"
              :value="info.marca"
              :rules="rules2"
            />
            <h4> Autos: </h4>
            <v-text-field
              class="purple-input"
              label="Autos"
              name="autos"
              :value="info.autos"
            />
            <h4> Precio: </h4>
            <v-text-field
              class="purple-input"
              label="Precio"
              name="precio"
              :value="info.precio"
              type="number"
              step="0.01"
              min="0"
              :rules="rules0"
            />
            <h4> Stock: </h4>
            <v-text-field
              class="purple-input"
              label="Stock"
              name="stock"
              :value="info.stock"
              type="number"
              min="0"
              :rules="rules0"
            />

            <h4> Promoción: </h4>
            <v-select
              :items="items_promos"
              label="Promocion"
              :value="info.id_promo"
              name="id_promo"
              outlined
              :rules="rules0"
            ></v-select>
<!--
            <v-text-field
              class="purple-input"
              label="Id_promo"
              name="id_promo"
              :value="id_promo"
            />
-->
            <h4> Servicio Pesado: </h4>
            <v-select
              :items="items"
              label="Pesado"
              :value="info.pesado"
              name="pesado"
              outlined
              :rules="rules0"
            ></v-select>
<!--
            <v-text-field
              class="purple-input"
              label="Pesado"
              name="pesado"
              :value="pesado"
            />
-->
            <h4> Outlet: </h4>
            <v-select
              :items="items"
              label="Outlet"
              :value="info.outlet"
              name="outlet"
              outlined
              :rules="rules0"
            ></v-select>
<!--
            <v-text-field
              class="purple-input"
              label="Outlet"
              name="outlet"
              :value="outlet"
            />

            <h4> Status: </h4>
            <v-text-field
              class="purple-input"
              label="Status"
              name="status"
              :value="status"
            />
-->
          </v-flex>
        </v-layout>
        <v-card-actions>
          

          <v-btn
            color="red darken-1"
            flat="flat"
            @click="close(null)"
          >
            Cancelar
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            flat="flat"
            type="submit"
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
    props: ['dialog','info'],
    data () {
      return {
        cant: 0,
        items: ['Si','No'],
        items_promos: ["0"],
        rules0: [
          value => !!value || 'Required.',
        ],
        rules1: [
          value => !!value || 'Required.',
          value => (value || '').length <= 10 || 'Max 10 characters',
          value => {
            const pattern = /^([0-9]+[\s]*)+$/;
            return pattern.test(value) || 'Clave Interna invalida.'
          },
        ],
        rules2: [
          value => !!value || 'Required.',
          value => (value || '').length <= 200 || 'Max 200 characters',
          value => {
            const pattern = /^([A-ZÁÉÍÓÚ0-9]+[\s]*)+$/;
            return pattern.test(value) || 'Dato invalido.'
          },
        ]
      }
    },
    methods: {
      close(datos){
        this.$emit('close',datos)
      },
       Update(){
         api.post('/ad-productos/update-product', $(event.currentTarget).serializeArray())
         .then(response => {
           // JSON responses are automatically parsed.
//           this.models = response.data;
             alert('Actualización realizada con éxito');
             this.close(true)
             //window.location.replace("http://10.3.0.7:61/productos");
           //console.log(this.items);
         })
         .catch(e => {
//           this.errors.push(e)
         //  console.log("Error");
           console.log(e);
         })
       }
    },
    created() {
        //this.info = this.$route.params.info
        if(sessionStorage.getItem("dato")!=null){
          this.escrito=sessionStorage.getItem("dato")
        }else{
          this.escrito=''
        }
        api.get(`/promociones/all`)
        .then(response => {
          // JSON responses are automatically parsed.
          for(var i=0; i<response.data.length; i++)
            this.items_promos.push(response.data[i].id_promo);


//          this.items_promos = response.data
          console.log(this.items_promos);
        })
        .catch(e => {
          this.errors.push(e)
        //  console.log("Error");
        //  console.log(e);
        })
    }
}
</script>
