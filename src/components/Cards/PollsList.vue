<template>
        <v-app class="pollList" id="inspire">
    
        <v-container class="green lighten-5">
            <v-row>
            <v-col md="3">
                <v-card v-for="cat in myPolls.filter(({category}) => !uniqueValue[category] && (uniqueValue[category] = true))"
                    :key="cat.category"
                    :catId="cat.category"
                class="pa-2"
                outlined
                tile
                >
                <router-link to="/">{{ cat.categoryName }}</router-link>
                
                </v-card>
            </v-col>
            
            </v-row>
        </v-container>

    </v-app>

</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';
    export default {
        name: "PollsList",
        data() {
            return {
                uniqueValue: {},
                myPolls: [{
                    category: "",
                    categoryName: "",
                    createdAt: "",
                    description: "",
                    expiry: "",
                    pollId: Number,
                    pollOwner: "",
                    title: "",
                }]
        }
    },

            methods: {
                getPolls() {
                    axios.request({
                        url: `${process.env.VUE_APP_BASE_DOMAIN}/api/poll`,
                        method: "GET",
                        params: {
                            "token": this.token
                        }
                    }).then((response) => {
                        this.myPolls = response.data

                    }).catch((error) => {
                        console.log(error);
                    })
                },
                seeAll() {
                    axios.request({
                        url: `${process.env.VUE_APP_BASE_DOMAIN}/api/poll`,
                        method: "GET"
            }).then((response) => {
                this.myPolls = response.data
            }).catch((error) => {
                console.log(error);
            })
                }
            },
            beforeMount() {
                this.token = cookies.get('token');
                        },
            mounted () {
            this.getPolls();
            console.log(this.token);
                    }
}

    
</script>

<style scoped>
.pollList {
    height: 30%;
    background-color: beige;
}
</style>


<!-- ten minutes talking about theoretical stuff, 20 minute coding exercise
object oriented paradigm

-->