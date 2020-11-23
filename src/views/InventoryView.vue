<template>
<v-card class="my-3">
    <navbar/>
    <!--<template>
      <div class="container">
        <div class="large-12 medium-12 small-12 cell">
          <label>File
            <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
          </label>
            <button v-on:click="submitFile()">Submit</button>
        </div>
      </div>
    </template>-->
    <!--<template>
        <div>
          <md-field @change="previewFiles">
                <label>upload excel file</label>
                <md-file v-model="metaDataFile" @change="previewFiles" />
          </md-field>
        </div>
      </template>-->
    <v-card class="my-3">
        
        <template>
          <v-card  class="my-5">

            

            

          </v-card>

          <!--<input class="input mx-3" type="text" name="name" placeholder="File name" v-model="fileName" required>
          <input class="file-input mx-3" type="file" ref="file" name="file">-->

        </template>
        <template>
            <v-card class="my-5">
                <h4>
                  Upload Excel
                </h4>
              
                <input class="mx-3" type="file" name="Upload File"  @change="uploadfile" />
              
                <v-btn flat class="teal" @click="submit()">Submit</v-btn>
                <v-card-title>
                  
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
                </v-card-title>
                  
                <v-data-table
                :headers="headers"
                :items="desserts"
                :search="search"
                >
                <template v-slot:items="props">
                    <td class="text-xs-right">{{ props.item.PartNumber }}</td>
                    <td class="text-xs-right">{{ props.item.EnteredMatnr }}</td>
                    <td class="text-xs-right">{{ props.item.Ar_Material_Desc }}</td>
                    <td class="text-xs-right">{{ props.item.ProductHierachy }}</td>
                    <td class="text-xs-right">{{ props.item.MaterialType }}</td>
                    <td class="text-xs-right">{{ props.item.VehicleModel }}</td>
                    <td class="text-xs-right">{{ props.item.MaterialGrp }}</td>
                    <td class="text-xs-right">{{ props.item.Matl_Grp_Desc }}</td>
                    <td class="text-xs-right">{{ props.item.MS_OrderType }}</td>
                    <td class="text-xs-right">{{ props.item.StatusDescr }}</td>
                    <td class="text-xs-right">{{ props.item.ABC_Classification }}</td>
                    <td class="text-xs-right">{{ props.item.ATP }}</td>
                    <td class="text-xs-right">{{ props.item.Unrestricted }}</td>
                    <td class="text-xs-right">{{ props.item.Delivery }}</td>
                    <td class="text-xs-right">{{ props.item.ToBeDelv }}</td>
                    <td class="text-xs-right">{{ props.item.OCT_SoldQTY_PREVIOUS }}</td>
                    <td class="text-xs-right">{{ props.item.NOV_SoldQTY_PREVIOUS }}</td>
                    <td class="text-xs-right">{{ props.item.DEC_SoldQTY_PREVIOUS }}</td>
                    <td class="text-xs-right">{{ props.item.JAN_SoldQTY }}</td>
                    <td class="text-xs-right">{{ props.item.FEB_SoldQTY }}</td>
                    <td class="text-xs-right">{{ props.item.MAR_SoldQTY }}</td>
                    <td class="text-xs-right">{{ props.item.APR_SoldQTY }}</td>
                    <td class="text-xs-right">{{ props.item.MAY_SoldQTY }}</td>
                    <td class="text-xs-right">{{ props.item.JUN_SoldQTY }}</td>
                    <td class="text-xs-right">{{ props.item.JUL_SoldQTY }}</td>
                    <td class="text-xs-right">{{ props.item.AUG_SoldQTY }}</td>
                    <td class="text-xs-right">{{ props.item.SEP_SoldQTY }}</td>
                    <td class="text-xs-right">{{ props.item.OCT_SoldQTY }}</td>
                    <td class="text-xs-right">{{ props.item.SoldForLast3Months }}</td>
                    <td class="text-xs-right">{{ props.item.Sold_M_Recent3Months }}</td>
                    <td class="text-xs-right">{{ props.item.Hits }}</td>
                    <td class="text-xs-right">{{ props.item.Sold_M_ALL_12_Months }}</td>
                    <td class="text-xs-right">{{ props.item.Sold_M_HIGHEST }}</td>
                    <td class="text-xs-right">{{ props.item.NoOfMonthsForCurrentStock }}</td>
                    <td class="text-xs-right">{{ props.item.ComputedArithOrder}}</td>
                    <td class="text-xs-right">{{ props.item.QuantityToOrder_QTO }}</td>
                   
                </template>
                </v-data-table>
            </v-card>
        </template>
    </v-card>

</v-card>
    
</template>
<script>
import navbar from '../components/DashViews/NavBar.vue'
import axios from 'axios'
import UploadExcelComponent from '@/components/DashViews/index.vue'
import XLSX from 'xlsx'
export default {
    components:{
        navbar,
        UploadExcelComponent
    },
    data () {
      return {
        search: '',
        file: null,
        metaDataFile: null,
        tableData: [],
        tableHeader: [],
        headers: [
          {
            text: 'Part Number ()',
            align: 'start',
            filterable: false,
            value: 'PartNumber',
          },
          { text: 'EnteredMatnr', value: 'EnteredMatnr' },
          { text: 'Ar_Material_Desc', value: 'Ar_Material_Desc' },
          { text: 'ProductHierachy', value: 'ProductHierachy' },
          { text: 'MaterialType', value: 'MaterialType' },
          { text: 'VehicleModel', value: 'VehicleModel' },
          { text: 'MaterialGrp', value: 'MaterialGrp' },
          { text: 'Matl_Grp_Desc', value: 'Matl_Grp_Desc' },
          { text: 'MS_OrderType', value: 'MS_OrderType' },
          { text: 'StatusDescr', value: 'StatusDescr' },
          { text: 'ABC_Classification', value: 'ABC_Classification' },
          { text: 'ATP', value: 'ATP' },
          { text: 'Unrestricted', value: 'Unrestricted' },
          { text: 'Delivery', value: 'Delivery' },
          { text: 'ToBeDelv', value: 'ToBeDelv' },
          { text: "OCT_SoldQTY_PREVIOUS", value: 'OCT_SoldQTY_PREVIOUS'},
          { text: 'NOV_SoldQTY_PREVIOUS', value: 'NOV_SoldQTY_PREVIOUS' },
          { text: 'DEC_SoldQTY_PREVIOUS', value: 'DEC_SoldQTY_PREVIOUS' },
          { text: 'JAN_SoldQTY', value: 'JAN_SoldQTY' },
          { text: 'FEB_SoldQTY', value: 'FEB_SoldQTY' },
          { text: 'MAR_SoldQTY', value: 'MAR_SoldQTY' },
          { text: 'APR_SoldQTY', value: 'APR_SoldQTY' },
          { text: 'MAY_SoldQTY', value: 'MAY_SoldQTY' },
          { text: 'JUN_SoldQTY', value: 'JUN_SoldQTY' },
          { text: 'JUL_SoldQTY', value: 'JUL_SoldQTY' },
          { text: 'AUG_SoldQTY', value: 'AUG_SoldQTY' },
          { text: 'SEP_SoldQTY', value: 'SEP_SoldQTY' },
          { text: 'OCT_SoldQTY', value: 'OCT_SoldQTY' },
          { text: 'SoldForLast3Months', value: 'SoldForLast3Months' },
          { text: 'Sold_M_Recent3Months', value: 'Sold_M_Recent3Months' },
          { text: 'Hits', value: 'Hits' },
          { text: 'Sold_M_ALL_12_Months', value: 'Sold_M_ALL_12_Months' },
          { text: 'Sold_M_HIGHEST', value: 'Sold_M_HIGHEST' },
          { text: 'NoOfMonthsForCurrentStock', value: 'NoOfMonthsForCurrentStock' },
          { text: 'ComputedArithOrder', value: 'ComputedArithOrder' },
          { text: 'QuantityToOrder_QTO', value: 'QuantityToOrder_QTO' },
        ],
        desserts: [
          
        ],
        
      }
    },
    created() {
      axios.get("https://educationdb67.pythonanywhere.comviewinventory")
      .then(
        response => {
          this.desserts = response.data;
          console.log(this.desserts)
        }
      )
    },
    methods:{
       
       uploadfile() {
         //this.file = event.target.files[0]
         this.file = event.target.files[0]
       },
       submit() {
          //this.reg_no = localStorage.getItem('user')
          const fd = new FormData();
          fd.append('foo', 'bar')
          fd.append('file', this.file)
         
          axios.post("https://educationdb67.pythonanywhere.comaddinventory", fd)
            .then(response => {
            //console.log(response)
            window.location.reload()
          })
       }
      },
      
    
}
</script>