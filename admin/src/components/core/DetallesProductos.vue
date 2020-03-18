<template>
  <v-dialog v-model="dialog" persistent max-width="500">
    <v-card>
      <v-toolbar color="#003b94">
       <v-toolbar-title style="color:white;">Detalles {{ info.nombre }}</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-layout row>
        <v-flex xs10 offset-xs1 >
          <h4> Código: {{info.codigo}} </h4>
          <h4> Clave Interna: {{info.clave_interna}} </h4>
          <h4> Descripción: {{info.descripcion}} </h4>
          <h4> Autos: {{escribirAutos(info.autos)}} </h4>
          <h4> Categoría: {{info.categoria}} </h4>
          <h4> Subcategoría: {{info.tipo}} </h4>
          <h4> Marca: {{info.marca}} </h4>
          <h4> Precio: {{info.precio}} </h4>
          <h4> Stock: {{info.stock}} </h4>
          <h4> Promoción: {{info.id_promo}} </h4>
          <h4> Servicio Pesado: {{info.pesado}} </h4>
          <h4> Outlet: {{info.outlet}} </h4>
          <h4> Status: {{info.status}} </h4>
          <h4> Imágenes Asociadas: </h4>
          <v-card>
           <v-container grid-list-sm fluid>
             <v-layout row wrap>
               <v-flex
                 v-for="n in 3"
                 :key="n"
                 xs4
                 d-flex
               >
                 <v-card flat tile class="d-flex">
                   <v-img
                     :src="`http://refacenet.org:62/replace-sys/imagenes_productos/` + info.clave_interna + `/` + info.clave_interna + `-00` + n + `.jpg`"
                     :lazy-src="`http://refacenet.org:62/replace-sys/imagenes_productos/` + info.clave_interna + `/` + info.clave_interna + `-00` + n + `.jpg`"
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
          <!--               <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>  -->
                       </v-layout>
                     </template>
                   </v-img>
                 </v-card>
               </v-flex>
             </v-layout>
           </v-container>
         </v-card>
        </v-flex>
      </v-layout>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="green"
          small
          v-on:click="close()"
        >
          Aceptar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
    name: 'Frame',
    props: ['dialog','info'],
    data () {
      return {
        cant: 0,
        automoviles: null
      }
    },
    methods:{
      close(){
        this.$emit('close',null)
      },
      insertarArmadoraCocheAnioMotor( armadora, coche, anio, motor, estructura )
      {
        var exists_armadora = 0;
        var exists_coche = 0;
        var exists_anio = 0;
        var exists_motor = 0;

        for(var a in estructura)
        {
            var armadora_actual = estructura[a].armadora;
            if( armadora_actual.nombre == armadora )
            {
            exists_armadora = 1;
            for(var b in armadora_actual.autos)
            {
                var auto_actual = armadora_actual.autos[b];
                if( auto_actual.nombre == coche )
                {

                exists_coche = 1;

                //Verifica si existe el anio del coche
                for(var c in auto_actual.anios)
                {
                    if( auto_actual.anios[c] == anio )
                    {
                    exists_anio = 1;
                    break;
                    }
                }

                if( exists_anio == 0 )
                {
                    estructura[a].armadora.autos[b].anios.push( anio );
                }
                exists_anio = 0;

                //Verifica si existe el motor del coche
                for(var d in auto_actual.motor)
                {
                    if( auto_actual.motor[d] == motor )
                    {
                    exists_motor = 1;
                    break;
                    }
                }

                if( exists_motor == 0 )
                {
                    estructura[a].armadora.autos[b].motor.push( motor );
                }
                exists_motor = 0;

                }
            }
            if ( exists_coche == 0 )
            {
                var pushed = {
        //            "autos" : {
                    "nombre" : coche,
                    "anios" : [anio],
                    "motor" : [motor]
        //            }
                }
                estructura[a].armadora.autos.push( pushed );
            }
            exists_coche = 0;
            }
        }

        if( exists_armadora == 0 )
        {
            var pushed = {
            "armadora" : {
                "nombre" : armadora,
                "autos" : [
                {
                    "nombre" : coche,
                    "anios" : [anio],
                    "motor" : [motor]
                }
                ]
            }
            }
            estructura.push( pushed );
        }
      },
      insertarArmadoraCocheAnio( armadora, coche, anio, estructura )
      {
        var exists_armadora = 0;
        var exists_coche = 0;
        var exists_anio = 0;

        for(var a in estructura)
        {
            var armadora_actual = estructura[a].armadora;
            if( armadora_actual.nombre == armadora )
            {
            exists_armadora = 1;
            for(var b in armadora_actual.autos)
            {
                var auto_actual = armadora_actual.autos[b];
                if( auto_actual.nombre == coche )
                {
                exists_coche = 1;

                for(var c in auto_actual.anios)
                {
                    if( auto_actual.anios[c] == anio )
                    {
                    exists_anio = 1;
                    break;
                    }
                }

                if( exists_anio == 0 )
                {
                    estructura[a].armadora.autos[b].anios.push(anio);
                }
                exists_anio = 0;

                }
            }
            if ( exists_coche == 0 )
            {
                var pushed = {
        //            "autos" : {
                    "nombre" : coche,
                    "anios" : [anio],
                    "motor" : []
        //            }
                }
                estructura[a].armadora.autos.push( pushed );
            }
            exists_coche = 0;
            }
        }

        if( exists_armadora == 0 )
        {
            var pushed = {
            "armadora" : {
                "nombre" : armadora,
                "autos" : [
                {
                    "nombre" : coche,
                    "anios" : [anio],
                    "motor" : []
                }
                ]
            }
            }
            estructura.push( pushed );
        }
      },
      insertarArmadoraCoche( armadora, coche, estructura )
      {
        var exists_armadora = 0;
        var exists_coche = 0;
        for(var a in estructura)
        {
            var armadora_actual = estructura[a].armadora;
            if( armadora_actual.nombre == armadora )
            {
            exists_armadora = 1;
            for(var b in armadora_actual.autos)
            {
                var auto_actual = armadora_actual.autos[b];
                if( auto_actual.nombre == coche )
                {
                exists_coche = 1;
                break;
                }
            }
            if ( exists_coche == 0 )
            {
                var pushed = {
        //            "autos" : {
                    "nombre" : coche,
                    "anios" : [],
                    "motor" : []
        //            }
                }
                estructura[a].armadora.autos.push( pushed );
            }
            exists_coche = 0;
            }
        }

        if( exists_armadora == 0 )
        {
            var pushed = {
            "armadora" : {
                "nombre" : armadora,
                "autos" : [
                {
                    "nombre" : coche,
                    "anios" : [],
                    "motor" : []
                }
                ]
            }
            }
            estructura.push( pushed );
        }
      },
      insertarArmadora( armadora, estructura )
      {
          console.log("Inserta unicamente armadora");
          var exists = 0;

          for( var a in estructura )
          {
              var armadora_actual = estructura[a].armadora;
              if( armadora_actual.nombre == armadora )
              {
              exists = 1;
              break;
              }
          }

          if( exists == 0 )
          {
              var pushed = {
              "armadora" : {
                  "nombre" : armadora,
                  "autos" : [
                  {
                      "nombre" : "",
                      "anios" : [],
                      "motor" : []
                  }
                  ]
              }
              }
              estructura.push( pushed );
          }

          //console.log("Estructura actual: ");
          //console.log(estructura);
          //console.log("Hecho");
      },
      descomponer(autos){
          var estructura = [];
          console.log(autos)
          var query = {
              "armadora" : {
                  "nombre" : " ",
                  "autos" : [
                  {
                      "nombre" : " ",
                      "anios" : [],
                      "motor" : []
                  }
                  ]
              }
          }
          //console.log('tercero')
          estructura.push(query);
          //console.log('cuarto')
          var cadena_temp = autos
          if(cadena_temp)
            var cadena = cadena_temp.toUpperCase();
          //console.log(cadena)
          if(cadena)
            var vehiculo_completo = cadena.split('#');
          //console.log('vehiculo_completo')
          //console.log(vehiculo_completo)
          if(vehiculo_completo)
            var contador_total_vehiculos = vehiculo_completo.length;
          //console.log('contador_total_vehiculos')
          //console.log(contador_total_vehiculos)
          if(contador_total_vehiculos > 1){
              for( var contador_while1 in vehiculo_completo)
              {
              var primer_paso_armadora = vehiculo_completo[contador_while1].split('&');
              var armadora = primer_paso_armadora[0];
              //console.log("armadora: ")
              //console.log(armadora)

              if( primer_paso_armadora.length > 1 )
              {
                  var primer_paso_carro = primer_paso_armadora[1];
                  //console.log("primer paso armadora: ")
                  //console.log(primer_paso_carro)
                  var segundo_paso_carro = primer_paso_carro.split(",");
                  var carro = segundo_paso_carro[0];
                  //console.log("carro: ")
                  //console.log(carro)

                  if( segundo_paso_carro.length > 1 )
                  {
                  //console.log("Consulta con litros y anios")

                  for( var contador_while2 in segundo_paso_carro)
                  {
                      if ( contador_while2 == 0 )
                      continue;

                      var anio = segundo_paso_carro[contador_while2];
                      //console.log(anio);

                      if( anio.includes("%") == true )
                      {
                      //console.log("Consulta con todo y todo")
                      var tercer_paso_carro = anio.split("%");
                      var anio_aux = tercer_paso_carro[0];
                      for( var contador_while3 in tercer_paso_carro)
                      {
                          if ( contador_while3 == 0 )
                          continue;

                          var motor = tercer_paso_carro[contador_while3];
                          //console.log(motor);

                          this.insertarArmadoraCocheAnioMotor( armadora, carro, anio_aux, motor, estructura )

                      }

                      }
                      else
                      {
                      this.insertarArmadoraCocheAnio( armadora, carro, anio, estructura );
                      }

                  }
                  }
                  else
                  {
                  this.insertarArmadoraCoche( armadora, carro, estructura );
                  }
              }
              else
              {
                  this.insertarArmadora( armadora, estructura );
              }
              }

          }else{
              if(vehiculo_completo)
                var primer_paso_armadora = vehiculo_completo[0].split('&');
              if(primer_paso_armadora)
              {
                var armadora = primer_paso_armadora[0];
                if( primer_paso_armadora.length > 1 )
                {

                    var primer_paso_carro = primer_paso_armadora[1];
                    var segundo_paso_carro = primer_paso_carro.split(",");
                    var carro = segundo_paso_carro[0];
                    //console.log("carro: ")
                    //console.log(carro)

                    if( segundo_paso_carro.length > 1 )
                    {
                    //console.log("Consulta con litros y anios")

                    for( var contador_while2 in segundo_paso_carro)
                    {
                        if ( contador_while2 == 0 )
                        continue;

                        var anio = segundo_paso_carro[contador_while2];
                        //console.log(anio);

                        if( anio.includes("%") == true )
                        {
                        //console.log("Consulta con todo y todo")
                        var tercer_paso_carro = anio.split("%");
                        var anio_aux = tercer_paso_carro[0];
                        for( var contador_while3 in tercer_paso_carro)
                        {

                            if ( contador_while3 == 0 )
                            continue;

                            var motor = tercer_paso_carro[contador_while3];
                            //console.log(motor);

                            this.insertarArmadoraCocheAnioMotor( armadora, carro, anio_aux, motor, estructura )

                        }

                        }
                        else
                        {
                            //alert('entro')
                        this.insertarArmadoraCocheAnio( armadora, carro, anio, estructura );
                        }

                    }
                    }
                    else
                    {
                    this.insertarArmadoraCoche( armadora, carro, estructura );
                    }
                }
                else
                {
                    this.insertarArmadora( armadora, estructura );
                }
              }
              //InsertarArmadora( vehiculo_completo, estructura );
          }
          //console.log('estructura')
          //alert(estructura[1])
          //estructura.splice(0, 1);
          return estructura;
      }
      ,
      escribirAutos(autos)
      {
        var coches;
        var estructura = this.descomponer(autos);
        console.log(estructura);
        for(var i=0;i < estructura.length; i++)
        {
          coches += estructura[i].armadora.nombre;
          for(var j=0;j < estructura[i].armadora.autos.length; j++)
          {
            coches += " " + estructura[i].armadora.autos[j].nombre;
            for(var k=0;k < estructura[i].armadora.autos[j].anios.length; k++)
            {
              coches += " " + estructura[i].armadora.autos[j].anios[k];
            }
            for(var k=0;k < estructura[i].armadora.autos[j].motor.length; k++)
            {
              coches += " " + estructura[i].armadora.autos[j].motor[k];
            }
          }
          coches += "\n";
        }
        return coches;
      }
    }
    ,
  created() {

  //this.automoviles = descomponer(info.autos);

  }
}
</script>
