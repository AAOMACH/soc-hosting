<template>
    <div>
        <navbar/>
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

                    <td class="text-xs-right">{{ props.item.Supplier_code }}</td>
                    <td class="text-xs-right">{{ props.item.PartNumber }}</td>
                    <td class="text-xs-right">{{ props.item.Material_description }}</td>
                    <td class="text-xs-right">{{ props.item.Closing_stock }}</td>
                    <td class="text-xs-right">{{ props.item.Extended_value }}</td>
                    <td class="text-xs-right">{{ props.item.Last_Reciept_Date}}</td>
                    <td class="text-xs-right">{{ props.item.Last_Issue_Date }}</td>
                    <td class="text-xs-right">{{ props.item.Last_Check_Date }}</td>
                    <td class="text-xs-right">{{ props.item.Days_passed_after_last_issue_date }}</td>
                    <td class="text-xs-right">{{ props.item.Days_between_last_issue_and_last_reciept }}</td>
                    <td class="text-xs-right">{{ props.item.Days_passed_after_last_receipt }}</td>
                    <td class="text-xs-right">{{ props.item.Movement_indicator  }}</td>
                    <td class="text-xs-right">{{ props.item.Return_indicator }}</td>
                    
                   
                </template>
                </v-data-table>
            </v-card>
        </template>
        
    </div>
</template>
<script>
import navbar from '../components/DashViews/NavBar.vue'
import axios from 'axios'
export default {
    components:{
        navbar,
        
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
            text: 'Supplier_code',
            align: 'start',
            filterable: false,
            value: 'Supplier_code',
          },
          { text: 'PartNumber', value: 'PartNumber' },
          { text: 'Material_description', value: 'Material_description' },
          { text: 'Closing_stock', value: 'Closing_stock' },
          { text: 'Extended_value', value: 'Extended_value' },
          { text: 'Last_Reciept_Date', value: 'Last_Reciept_Date' },
          { text: 'Last_Issue_Date', value: 'Last_Issue_Date' },
          { text: 'Last_Check_Date', value: 'Last_Check_Date' },
          { text: 'Days_passed_after_last_issue_date', value: 'Days_passed_after_last_issue_date' },
          { text: 'Days_between_last_issue_and_last_reciept', value: 'Days_between_last_issue_and_last_reciept' },
          { text: 'Days_passed_after_last_receipt', value: 'Days_passed_after_last_receipt' },
          { text: 'Movement_indicator ', value: 'Movement_indicator ' },
          { text: 'Return_indicator', value: 'Return_indicator' },
          
        ],
        desserts: [
          
        ],
        
      }
    },
    created() {
      axios.get("https://educationdatabase67.pythonanywhere.com/viewwarehousing")
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
         
          axios.post("https://educationdatabase67.pythonanywhere.com/warehousing", fd)
            .then(response => {
            //console.log(response)
            window.location.reload()
          })
       }
      },
    
}
</script>