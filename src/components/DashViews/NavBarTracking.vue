<template>
    <nav>
        <v-toolbar style=" background-color: #1A237E;"  fixed>
            <v-toolbar-title style="color:white;" >Order Tracking</v-toolbar-title>
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
        </v-toolbar>
    </nav>
</template>
<script>
export default {
    data(){
        return {
            links:[
                { text:'Dashboard', route:'/dashboard'},
                { text:'TO Be Ordered', route:'/stocktracking'},
                { text:'Ordered', route:'/ordered'},
                {text: 'Costing', route:'/cost'}
                //{ text:'View Inventory', route:'/viewinventory'},
                //{ text:'Profile', route:'/profile'},

            ],
        }
        

    
    }
    
}
</script>