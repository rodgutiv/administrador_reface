<template>
  <v-dialog v-model="dialog" max-width="500">   
    <v-card>
      <v-toolbar color="#003b94">
       <v-toolbar-title style="color:white;">Detalles {{ info.titulo }}</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-layout row>
        <v-flex xs10 offset-xs1 >
          <h4> Título </h4>
          <v-text-field
            class="purple-input"
            label="Titulo"
            name="titulo"
            :rules="rules"
            v-model="info.titulo"           
          />
          <h4> Categoría </h4>
          <v-text-field
            class="purple-input"
            label="Categoría"
            name="categoria"
            v-model="info.categoria"    
            :rules="rules"     
          />
          <h4> Fecha </h4>
          <v-dialog
          
            ref="dialog"
            v-model="modal"
            :return-value.sync="date"
            persistent
            width="290px"
          >            
            <v-text-field
              v-model="info.fecha"
              slot="activator"
              label="Picker in dialog"
              prepend-icon="mdi-account"
              readonly
            ></v-text-field>            
            <v-date-picker v-model="info.fecha" scrollable locale="es-MX">
              <v-btn text style="color:white!important" color="error" @click="modal = false">Cancel</v-btn>
              <v-spacer></v-spacer>
              <v-btn text color="success"  style="color:white!important" @click="$refs.dialog.save(info.fecha)">OK</v-btn>
            </v-date-picker>
          </v-dialog>
          <h4> Estatus </h4>
          <v-text-field
            class="purple-input"
            label="Estatus"
            name="status"
            readonly
            v-model="info.status"  
            :rules="rules"       
          />
          <h4> Contenido </h4>
          <v-textarea
              outline
              v-model="info.contenido"
              class="purple-input"
              label="Contenido"
              name="contenido"
              id="contenido"
              spellcheck="true"
              rows="15" 
              :rules="rules"            
            />
            <v-card>
              <v-container grid-list-sm fluid>
                <v-layout row wrap>
                  <v-flex
                    v-for="n in 1"
                    :key="n"
                    xs4
                    d-flex
                  >
                    <v-card flat tile class="d-flex">
                      <v-img
                        :src="info.ruta"
                        :lazy-src="info.ruta"
                        aspect-ratio="1"
                        class="grey lighten-2"
                      >
                        <template v-slot:placeholder>
                          <v-layout
                            fill-height
                            align-center
                            justify-center
                            ma-0
                          >
                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                          </v-layout>
                        </template>
                      </v-img>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
            <h4> Imágen Asociada: </h4>
            <input
              label="Imagen: "
              name="img1"
              id="img1"
              accept="image/*"
              type="file"
              :rules="rules"
            />
        </v-flex>
      </v-layout>
      <v-card-actions>
        <v-btn
         
          color="error"
          style="color:white!important" 
           @click="close(null)"
        >
          Cancelar
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          
          color="success"
          style="color:white!important" 
           @click="Update()"
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
    props: ['dialog','info'],
    data () {
      return {
        cant: 0,
        date:null,
        menu: false,
        modal: false,
        menu2: false,
        noticia:{
          titulo:null,
          categoria:null,
          estatus:null,
          fecha:null,
          contenido:null
        },
        rules: [
          value => !!value || 'Required.'
        ]
      }
    },
    methods:{
      close(datos){
        this.$emit('close',datos)
      },
      Update(){
        this.noticia.titulo = this.info.titulo
        this.noticia.categoria = this.info.categoria
        this.noticia.estatus = this.info.status
        this.noticia.fecha = this.info.fecha
        this.noticia.contenido = this.info.contenido
        console.log("noticia: ",this.noticia)
          api.post('/noticias/update-noticia', this.noticia)
          .then(response => {
            // JSON responses are automatically parsed.
  //           this.models = response.data;
              //alert('Actualización realizada con éxito');
              this.close(true)
              //window.location.replace("http://10.3.0.7:61/productos");
            //console.log(this.items);
          })
          .catch(e => {
            this.close(false)
  //           this.errors.push(e)
          //  console.log("Error");
            console.log(e);
          })
      }
    }
}
</script>
<style>
.v-btn{
  color: black!important;
}
</style>
