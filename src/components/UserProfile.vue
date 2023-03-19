<template>
    <v-app class="userprofile" :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }" :dark="darkTheme" id="inspire">
    
<v-btn @click="toMyPolls()"><router-link to="/mypolls"></router-link></v-btn>
        <v-container>
        Welcome {{ userInfo.username }}
    </v-container>

    <v-container v-for="mine in minePolls" :key="mine.pollId" v-bind="mine" color="black">
        
        {{ mine.title }}
        {{ minePolls.category }}

    </v-container>
    
    </v-app>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'


    export default {
        name: "UserProfile",
        components: {
},
        data() {
            return {
            showPassword: false,
            darkTheme: true,
                userInfo : [],
                minePolls: [],
                    //     {
                    //         category: "",
                    //         categoryName: "",
                    //         createdAt: "",
                    //         description: "",
                    //         expiry: "",
                    //         pollId: Number,
                    //         pollOwner: "",
                    //         title: "",
                    //     },
                platformName: 'User Profile',
                toggleDisable1: false,
                toggleDisable2: false,
                toggleDisable3: false,
                toggleDisable4: false,
                toggleClass: true,
            }
        },
        methods: {
            getMyInfo() {
                let userToken = cookies.get('token')
                console.log(userToken);
                axios.request({
                    url: `${process.env.VUE_APP_BASE_DOMAIN}/api/user`,
                    method: "GET",
                    params: {
                        "token" : userToken
                    }
                }).then((response) => {
                    this.userInfo = response.data[0]
                    console.log(response.data)
                }).catch((error) => {
                    console.log(error);
                }).finally(() =>{
                    console.log('here we are. not logged in.');
                })
            },
            getMyPolls() {
                let userToken = cookies.get('token')
                console.log(userToken);
                axios.request({
                    url: `${process.env.VUE_APP_BASE_DOMAIN}/api/poll-owner`,
                    method: "GET",
                    params: {
                        "token": userToken
                    }
            }).then((response) => {
                this.minePolls = response.data
                console.log(response.data);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
                console.log('here we are. not logfgfdsgfdgged in.');
            })
        },
    
    },
        mounted () {
            this.getMyInfo();
            this.getMyPolls();
        }
    }

</script>

<style scoped>
.userprofile {
    max-height: 25em;
    border: 3px black;
    background-color: aqua;
}

</style>

<!-- please work on frontend and backend in parallel
a state manager is a function
in additional helper file, valid when there's a need to kick the user to the main page, not logged in. -->
<!-- Spend some time while we're thinking about different features. Personas. Imaginary/potential user and how they would use the app -->
<!-- first do the testing through Postman, and it allows you to check if it's working properly -->