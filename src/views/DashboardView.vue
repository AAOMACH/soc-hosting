<template>
    <div>
        <navbar/>

        <v-layout row wrap class="my-5">
            <v-flex xs12 md12>
                <home/>
            </v-flex>
        </v-layout>
    </div>
    
</template>

<script>
import navbar from '../components/DashViews/NavBar.vue'
import home from '../components/DashViews/Home.vue'
export default {
    components:{
        navbar,
        home,
    }
    
}
</script>