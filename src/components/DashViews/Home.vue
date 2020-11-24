<template>
    <div>

        <v-card
            
            class="mx-auto"
        >
            <v-container>
            <v-row dense>
                <v-col cols="12">
                    <v-card
                        color="#385F73"
                        class="ma-3"
                    >
                        <v-card-title class="headline">
                        INVENTORY CONTROL
                        </v-card-title>

                        <!--<v-card-subtitle class="mx-5">INVENTORY CONTROL</v-card-subtitle>-->

                        <v-card-actions>
                        <v-btn text @click="movetoinventorycontrol()"
                        color="primary">
                            View
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>

                <v-col
                v-for="(item, i) in items"
                :key="i"
                cols="12"
                >
                    <v-card
                        :color="item.color"
                        class="ma-3"
                    >
                        <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                            <v-card-title
                            class="headline"
                            v-text="item.title"
                            ></v-card-title>

                            <!--<v-card-subtitle class="mx-5" v-text="item.artist"></v-card-subtitle>-->

                            <v-card-actions>
                            <v-btn
                                v-if="item.artist === 'ORDERING, TRACKING AND COSTING ANALYSIS'"
                                @click="movetostocktracking()"
                                color="primary"
                                
                            >
                                <!--<v-icon>mdi-play</v-icon>-->
                                VIEW
                            </v-btn>

                            <v-btn
                                v-else
                                small
                                @click="movetowarehousing()"
                                color="primary"
                            >
                                VIEW
                            </v-btn>
                            </v-card-actions>
                        </div>

                        <v-avatar
                            class="ma-3"
                            size="125"
                            tile
                        >
                            <v-img :src="item.src"></v-img>
                        </v-avatar>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
            </v-container>
        </v-card>

    </div>
    
</template>

<script>

export default {

    data: () => ({
      items: [
        {
          color: '#1F7087',
          src: '',
          title: 'ORDERING, TRACKING AND COSTING ANALYSIS',
          artist: 'ORDERING, TRACKING AND COSTING ANALYSIS',
        },
        {
          color: '#952175',
          src: '',
          title: 'WAREHOUSING',
          artist: 'WAREHOUSING',
        },
      ],
    }),

    components:{
        
    },

    methods:{
        movetoinventorycontrol(){
            this.$router.push("/inventorycontrol");
        },
        movetostocktracking(){
            this.$router.push("/stocktracking");
        },
        movetowarehousing(){
            this.$router.push("/warehousing");
        },

    }
    
}
</script>