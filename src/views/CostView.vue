<template>
    <div>
        <navbar/>
        <v-spacer></v-spacer>
        <v-card min-height="50">

        </v-card>
        
        <v-card class="ma-5">
            <v-text-field
            class="ma-3"
            label="Air Freight"
            v-model="air"
            ></v-text-field>
            <v-text-field
            class="ma-3"
            label="Shipping Cost"
            v-model="shipping"
          ></v-text-field>
          <v-text-field
            class="ma-3"
            label="Insurance"
            v-model="Insurance"
          ></v-text-field>
          <v-text-field
            class="ma-3"
            label="Exchange Rate"
            v-model="erate"
          ></v-text-field>
          <v-text-field
            class="ma-3"
            label="Other Cost"
            v-model="other"
          ></v-text-field>
          <v-select
          class="ma-3"
          :items="items"
          label="Rate Option"
          v-model="rateoption"
            ></v-select>

            <v-btn
            class="ma-2"
            :loading="loading4"
            :disabled="loading4"
            color="info"
            @click="submit()"
            >
            Save
            <template v-slot:loader>
                <span class="custom-loader">
                <v-icon light>mdi-cached</v-icon>
                </span>
            </template>
            </v-btn>

        </v-card>

            <template>
                <v-card class="ma-5">
                    
                    <v-card-title>
                    
                    <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                        class="my-3"
                    ></v-text-field>
                    </v-card-title>
                    
                    <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :search="search"
                    >
                    <template v-slot:items="props">

                        <td class="text-xs-right">{{ props.item.FOB }}</td>
                        <td class="text-xs-right">{{ props.item.Air_Freight_charge }}</td>
                        <td class="text-xs-right">{{ props.item.Shipping_Agency_Fee }}</td>
                        <td class="text-xs-right">{{ props.item.CI}}</td>
                        <td class="text-xs-right">{{ props.item.CIF }}</td>
                        <td class="text-xs-right">{{ props.item.Exchange_Rate }}</td>
                        <td class="text-xs-right">{{ props.item.Other_Charges }}</td>
                        <td class="text-xs-right">{{ props.item.IMP_Duty }}</td>
                        <td class="text-xs-right">{{ props.item.Infrastructure_levy }}</td>
                        <td class="text-xs-right">{{ props.item.Withholding_tax }}</td>
                        <td class="text-xs-right">{{ props.item.Total }}</td>
                        <td class="text-xs-right">{{ props.item.LCF }}</td>
                        
                        
                    
                    </template>
                    </v-data-table>
                </v-card>
            </template>
        
    </div>
</template>
<script>
import navbar from '../components/DashViews/NavBarTracking.vue'
import axios from 'axios'
export default {
    components:{
        navbar,
    },
    data(){
        return {
            items: ['0.1', '0.2'],
            air:0.0,
            shipping:0.0,
            erate:0.0,
            Insurance:0.0,
            other:0.0,
            rateoption:"",
            headers: [
            { text: 'FOB', value: 'FOB' },

            {
                text: 'Air_Freight_charge',
                align: 'start',
                filterable: false,
                value: 'Air_Freight_charge',
            },
            
            { text: 'Shipping_Agency_Fee', value: 'Shipping_Agency_Fee' },
            { text: 'CI', value: 'CI' },
            { text: 'CIF', value: 'CIF' },
            { text: 'Exchange_Rate', value: 'Exchange_Rate' },
            { text: 'Other_Charges', value: 'Other_Charges' },
            { text: 'IMP_Duty', value: 'IMP_Duty' },
            { text: 'Infrastructure_levy', value: 'Infrastructure_levy' },
            { text: 'Withholding_tax', value: 'Withholding_tax' },
            { text: 'VAT', value: 'VAT' },
            { text: 'Total', value: 'Total' },
            { text: 'LCF', value: 'LCF' },
            
            
            ],  
            desserts: [
            
            ],


        }
    },
    created(){
        axios.get("https://educationdatabase67.pythonanywhere.com/viewcost")
        .then(
            reponse => {
                this.desserts = reponse.data
            }
        )
    },
    methods: {
        submit(){
            axios.post("https://educationdatabase67.pythonanywhere.com/ordercalc",{
                "air":this.air,"shipping":this.shipping,"insurance":this.insurance,
                "erate":this.erate,"other":this.other,"rateoption":this.rateoption
            })
        }
    },
}
</script>