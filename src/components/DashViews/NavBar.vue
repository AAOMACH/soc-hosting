<template>
    <nav>
       <v-toolbar style=" background-color: #1A237E;"  fixed>
           <!--<div>
               <v-avatar class="mx-2" size="50">
                   <img src="@/assets/img/logo.png" />
                </v-avatar>
           </div>-->
           
            <v-toolbar-title style="color:white;" >STOCK MANAGEMENT SYSTEM</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            
            <p></p>
            <p></p>
            <v-toolbar-items class="hidden-sm-and-down" >
                <v-layout  row >
                    <v-btn  flat small  class="white--text right" v-for="link in links" :key="link.text" router :to="link.route">
                        <span>{{link.text}}</span>
                    </v-btn>
                </v-layout>
            </v-toolbar-items>
            <!--<div v-if="designation == admin" class="my-3">
                
                <router-link to="/admindashboard" tag="button" flat small class="white--text right">Administrator</router-link>
            </div>-->
            <v-btn flat class="white--text right" @click=" logout()">
                <span style="color:#faee02;">SignOut</span>
                <v-icon>exit_to_app</v-icon>
            </v-btn>
       </v-toolbar>
       
    </nav>
    
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            links:[
                { text:'Dashboard', route:'/dashboard'},
                //{ text:'New Inventory', route:'/newinventory'},
                //{ text:'View Inventory', route:'/viewinventory'},
                //{ text:'Profile', route:'/profile'},

            ],
            //lengths:[],
            //projects:[],
            //token: localStorage.getItem('token'),
            //designation: localStorage.getItem('Designation'),
            //admin:"admin",
            //adminlink:[ 
            //    {text:'Administrator', route:'/admindashboard'},
            // ]
        }
    },
    methods:{
        logout() {
            this.$store.dispatch("logout").then(() => {
					this.$router.push("/");
        });
        
        },
        



      }
       
}
</script>

