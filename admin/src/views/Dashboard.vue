<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >

    <v-layout wrap>
      <h1>Bienvenido al Administrador REFACE!</h1>
      <h2>Estadísticas de compra/venta por usuario y productos</h2>

      <v-flex
        md12
        sm12
        text-align="center"
      >
        <material-card
          color="rgb(21, 45, 91)"
          title="Compras por cliente"
          text="Cliente y monto de compra."
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
              <td>{{ item.nombre[0] }}</td>
              <td>{{ item._id }}</td>
              <td>{{ item.total }}</td>
              <td class="text-xs-right">{{ item.total_compra }}</td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>

      <v-flex
        md12
        sm12
        text-align="center"
      >
        <material-card
          color="rgb(21, 45, 91)"
          title="Ventas por producto"
          text="Productos y cantidades vendidas"
        >
          <v-data-table
            :headers="headers2"
            :items="items2"
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
              <td>{{ item._id }}</td>
              <td>{{ item.nombre[0] }}</td>
              <td class="text-xs-right">{{ item.cantidades }}</td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>



      <!--
      <v-flex
        md12
        sm12
        lg4
      >
        <material-chart-card
          :data="dailySalesChart.data"
          :options="dailySalesChart.options"
          color="rgb(21, 45, 91)"
          type="Line"
        >
          <h4 class="title font-weight-light">Ventas Recientes</h4>
          <p class="category d-inline-flex font-weight-light">

            <v-icon
              color="green"
              small
            >
              mdi-arrow-up
            </v-icon>
            <span class="green--text">55%</span>&nbsp;

            Monto de ventas de última semana
          </p>
       
          <template slot="actions">
            <v-icon
              class="mr-2"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">updated 4 minutes ago</span>
          </template>

        </material-chart-card>

      </v-flex>

      <v-flex
        md12
        sm12
        lg4
      >
        <material-chart-card
          :data="emailsSubscriptionChart.data"
          :options="emailsSubscriptionChart.options"
          :responsive-options="emailsSubscriptionChart.responsiveOptions"
          color="orange"
          type="Bar"
        >
          <h4 class="title font-weight-light">Ventas por cliente</h4>
          <p class="category d-inline-flex font-weight-light">Volumen de compras realizadas por clientes</p>

          <template slot="actions">
            <v-icon
              class="mr-2"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">updated 10 minutes ago</span>
          </template>

        </material-chart-card>
      </v-flex>
      <v-flex
        md12
        sm12
        lg4
      >
        <material-chart-card
          :data="dataCompletedTasksChart.data"
          :options="dataCompletedTasksChart.options"
          color="rgb(21, 45, 91)"
          type="Bar"
        >
          <h3 class="title font-weight-light">Productos más vendidos</h3>
          <p class="category d-inline-flex font-weight-light">Top 5 de productos más vendidos</p>

          <template slot="actions">
            <v-icon
              class="mr-2"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">campaign sent 26 minutes ago</span>
          </template>
        
        </material-chart-card>
      </v-flex>

      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-stats-card
          color="green"
          icon="mdi-store"
          title="Revenue"
          value="$34,245"
          sub-icon="mdi-calendar"
          sub-text="Last 24 Hours"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-stats-card
          color="orange"
          icon="mdi-content-copy"
          title="Used Space"
          value="49/50"
          small-value="GB"
          sub-icon="mdi-alert"
          sub-icon-color="error"
          sub-text="Get More Space..."
          sub-text-color="text-primary"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-stats-card
          color="red"
          icon="mdi-information-outline"
          title="Fixed Issues"
          value="75"
          sub-icon="mdi-tag"
          sub-text="Tracked from Github"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-stats-card
          color="info"
          icon="mdi-twitter"
          title="Followers"
          value="+245"
          sub-icon="mdi-update"
          sub-text="Just Updated"
        />
      </v-flex>
-->
<!--
      <v-flex
        md12
        lg6
      >
        <material-card
          color="orange"
          title="Employee Stats"
          text="New employees on 15th September, 2016"
        >
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
                class="font-weight-light text-warning text--darken-3"
                v-text="header.text"
              />
            </template>
            <template
              slot="items"
              slot-scope="{ index, item }"
            >
              <td>{{ index + 1 }}</td>
              <td>{{ item.name }}</td>
              <td class="text-xs-right">{{ item.salary }}</td>
              <td class="text-xs-right">{{ item.country }}</td>
              <td class="text-xs-right">{{ item.city }}</td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
      <v-flex
        md12
        lg6
      >
        <material-card
          class="card-tabs"
          color="green">
          <v-flex
            slot="header"
          >
            <v-tabs
              v-model="tabs"
              color="transparent"
              slider-color="white"
            >
              <span
                class="subheading font-weight-light mr-3"
                style="align-self: center"
              >Tasks:</span>
              <v-tab class="mr-3">
                <v-icon class="mr-2">mdi-bug</v-icon>
                Bugs
              </v-tab>
              <v-tab class="mr-3">
                <v-icon class="mr-2">mdi-code-tags</v-icon>
                Website
              </v-tab>
              <v-tab>
                <v-icon class="mr-2">mdi-cloud</v-icon>
                Server
              </v-tab>
            </v-tabs>
          </v-flex>

          <v-tabs-items v-model="tabs">
            <v-tab-item
              v-for="n in 3"
              :key="n"
            >
              <v-list three-line>
                <v-list-tile @click="complete(0)">
                  <v-list-tile-action>
                    <v-checkbox
                      :value="list[0]"
                      color="green"
                    />
                  </v-list-tile-action>
                  <v-list-tile-title>
                    Sign contract for "What are conference organized afraid of?"
                  </v-list-tile-title>
                  <div class="d-flex">
                    <v-tooltip
                      top
                      content-class="top">
                      <v-btn
                        slot="activator"
                        class="v-btn--simple"
                        color="success"
                        icon
                      >
                        <v-icon color="primary">mdi-pencil</v-icon>
                      </v-btn>
                      <span>Edit</span>
                    </v-tooltip>
                    <v-tooltip
                      top
                      content-class="top">
                      <v-btn
                        slot="activator"
                        class="v-btn--simple"
                        color="danger"
                        icon
                      >
                        <v-icon color="error">mdi-close</v-icon>
                      </v-btn>
                      <span>Close</span>
                    </v-tooltip>

                  </div>
                </v-list-tile>
                <v-divider/>
                <v-list-tile @click="complete(1)">
                  <v-list-tile-action>
                    <v-checkbox
                      :value="list[1]"
                      color="success"
                    />
                  </v-list-tile-action>
                  <v-list-tile-title>
                    Lines From Great Russian Literature? Or E-mails From My Boss?
                  </v-list-tile-title>
                  <div class="d-flex">
                    <v-tooltip
                      top
                      content-class="top">
                      <v-btn
                        slot="activator"
                        class="v-btn--simple"
                        color="success"
                        icon
                      >
                        <v-icon color="primary">mdi-pencil</v-icon>
                      </v-btn>
                      <span>Edit</span>
                    </v-tooltip>

                    <v-tooltip
                      top
                      content-class="top">
                      <v-btn
                        slot="activator"
                        class="v-btn--simple"
                        color="danger"
                        icon>
                        <v-icon color="error">mdi-close</v-icon>
                      </v-btn>
                      <span>Close</span>
                    </v-tooltip>
                  </div>
                </v-list-tile>
                <v-divider/>
                <v-list-tile @click="complete(2)">
                  <v-list-tile-action>
                    <v-checkbox
                      :value="list[2]"
                      color="success"
                    />
                  </v-list-tile-action>
                  <v-list-tile-title>
                    Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                  </v-list-tile-title>
                  <div class="d-flex">
                    <v-tooltip
                      top
                      content-class="top">
                      <v-btn
                        slot="activator"
                        class="v-btn--simple"
                        color="success"
                        icon
                      >
                        <v-icon color="primary">mdi-pencil</v-icon>
                      </v-btn>
                      <span>Edit</span>
                    </v-tooltip>
                    <v-tooltip
                      top
                      content-class="top">
                      <v-btn
                        slot="activator"
                        class="v-btn--simple"
                        color="danger"
                        icon
                      >
                        <v-icon color="error">mdi-close</v-icon>
                      </v-btn>
                      <span>Close</span>
                    </v-tooltip>

                  </div>
                </v-list-tile>
              </v-list>
            </v-tab-item>
          </v-tabs-items>
        </material-card>
      </v-flex>
-->
    </v-layout>

  </v-container>
</template>

<script>
import {api} from '@/api'
export default {
  data () {
    return {
      dailySalesChart: {
        data: {
          labels: ['LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB', 'DOM'],
          series: [
            [5000, 8000, 10000, 9000, 7500, 1850, 3800]
          ]
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 15000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      dataCompletedTasksChart: {
        data: {
          labels: ['Bujía', 'Sensor', 'Balata', 'Suspension', 'Resorte'],
          series: [
            [230, 750, 450, 300, 280, 240, 200, 190]
          ]
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      emailsSubscriptionChart: {
        data: {
          labels: [],
          series: []
        },
        options: {
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
          }
        },
        responsiveOptions: [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0]
              }
            }
          }]
        ]
      },
      headers: [
        {
          sortable: false,
          text: 'Cliente',
          value: 'nombre'
        },
        {
          sortable: false,
          text: 'Email',
          value: '_id'
        },
        {
          text: 'Total',
          value: 'total',
          align: 'right'
        }
      ],
      headers2: [
        {
          sortable: false,
          text: 'Clave de producto',
          value: '_id'
        },
        {
          sortable: false,
          text: 'Nombre',
          value: 'nombre'
        },
        {
          text: 'Cantidad de productos vendidos',
          value: 'cantidades',
          align: 'right'
        }
      ],
      items: [],
      items2: [],
      tabs: 0,
      list: {
        0: false,
        1: false,
        2: false
      }
    }
  },
  methods: {
    complete (index) {
      this.list[index] = !this.list[index]
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

      api.get(`/ad-compras/mejores-compradores`)
      .then(response => {
//        JSON responses are automatically parsed.
//        this.emailsSubscriptionChart.data.labels = response.data.nombre;
//        this.emailsSubscriptionChart.data.series = response.data.total_compra;
//        for(var i=0; i<response.data.length; i++)
//        {
//        nombres[i] = response.data[0].nombre[0];
//        console.log(this.emailsSubscriptionChart.data.labels);
//        }
//        console.log(response.data.length);
//        console.log(response.data);

          console.log(response.data)
          this.items = response.data;

      })
      .catch(e => {
//      this.errors.push(e)
        console.log("Error");
//      console.log(e);
      });

      api.get(`/ad-compras/productos-mas-vendidos`)
      .then(response => {
//        JSON responses are automatically parsed.
//        this.emailsSubscriptionChart.data.labels = response.data.nombre;
//        for(var i=0; i<response.data.length; i++ )
//        {
//          this.emailsSubscriptionChart.data.labels[i] = response.data[i].nombre
//          data.labels[i] = response.data[i].nombre
//          this.emailsSubscriptionChart.data.labels.push(response.data[i].nombre);
//          console.log("array: " + this.emailsSubscriptionChart.data.labels)
//          console.log(response.data[i].nombre)
//        }
//        this.emailsSubscriptionChart.data.series = response.data.total_compra;
//        console.log(response.data.nombre);
//        console.log(this.emailsSubscriptionChart.data.labels);

          console.log(response.data)
          this.items2 = response.data;

      })
      .catch(e => {
//      this.errors.push(e)
        console.log("Error");
//      console.log(e);
      });
  }
}
</script>
