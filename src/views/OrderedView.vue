<template>
    <div>
        <navbar/>

        <v-card class="my-5">
            <template>
            <v-card class="my-5">
                <h4 class="my-3">
                  Upload Excel
                </h4>
              
                <input class="mx-5" type="file" name="Upload Excel File"  @change="uploadfile" />
              
                <v-btn flat class="teal" @click="submit()">Submit</v-btn>

                <!--<h4>
                  Upload HS CODE
                </h4>
              
                <input class="my-3" type="file" name="Upload HS FILE"  @change="uploadfile2" />
              
                <v-btn flat class="teal" @click="submit2()">Submit</v-btn>-->


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

                    <td class="text-xs-right">{{ props.item.id }}</td>
                    <td class="text-xs-right">{{ props.item.PartNumber }}</td>
                    <td class="text-xs-right">{{ props.item.Material_description }}</td>
                    <td class="text-xs-right">{{ props.item.QTO }}</td>
                    <td class="text-xs-right">{{ props.item.Total_cost }}</td>
                    <td class="text-xs-right">{{ props.item.Cost }}</td>
                    <td class="text-xs-right">{{ props.item.GM_Order }}</td>
                    <td class="text-xs-right">{{ props.item.Hs_code }}</td>
                    
                   
                </template>
                </v-data-table>

                
            </v-card>
        </template>
            

        </v-card>

        
    </div>
</template>
<script>
import navbar from '../components/DashViews/NavBarTracking.vue'
import axios from 'axios'
export default {
    components:{
        navbar,
    },
    data () {
      return {
        search: '',
        file: null,
        file2:null,
        metaDataFile: null,
        tableData: [],
        tableHeader: [],
        headers: [
          { text: 'id', value: 'id' },

          {
            text: 'Part Number ()',
            align: 'start',
            filterable: false,
            value: 'PartNumber',
          },
          
          { text: 'MaterialDescription', value: 'Material_description' },
          { text: 'QTO', value: 'QTO' },
          { text: 'Total Cost', value: 'Total_cost' },
          { text: 'Cost', value: 'Cost' },
          { text: 'GM Order', value: 'GM_Order' },
          { text: 'HS_Code', value: 'Hs_code' },
        ],  
          
        desserts: [
          
        ],
        
      }
    },
    created(){
      axios.get("https://educationdb67.pythonanywhere.com/viewordered")
      .then(
        response => {
          this.desserts = response.data
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
         
          axios.post("https://educationdb67.pythonanywhere.com/ordered", fd)
            .then(response => {
            //console.log(response)
            window.location.reload()
          })
       },
       uploadfile2() {
         //this.file = event.target.files[0]
         this.file2 = event.target.files[0]
       },
       submit2() {
          //this.reg_no = localStorage.getItem('user')
          const fd = new FormData();
          fd.append('foo', 'bar')
          fd.append('file', this.file2)
         
          axios.post("https://educationdb67.pythonanywhere.com/uploadhscode", fd)
            .then(response => {
            //console.log(response)
            window.location.reload()
          })
       }
      },
    
}
</script>