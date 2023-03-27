<template>
    <div :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
            <h2>Welcome {{ userInfo.username }}!</h2>
                <router-link class="text-decoration-none" to="/">Go to polls</router-link>
        <v-card 
            class="mx-auto"
            tile
            width="100%"
            >
                <v-list
                    two-line>
                        <v-subheader>
                            YOUR POLLS
                        </v-subheader>
                <v-list-item-group
                    v-model="selected"
                    >
                    <v-list-item v-for="mine in minePolls" 
                            :key="mine.pollId" 
                            v-bind:mine="mine">
                            <v-list-item-content>
                                <router-link class="text-decoration-none"
                                :to="'/editpoll/' + mine.pollId">
                                <v-list-item-title >{{ mine.title }}</v-list-item-title>
                            </router-link>
                            <v-list-item-subtitle 
                            v-text="mine.description">  
                        </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-card>
    </div>
</template>

<script>
// import router from '@/router';
import axios from 'axios'
import cookies from 'vue-cookies'


    export default {
        name: "UserPollsList",
        components: {

},
        data() {
            return {
                userInfo : [],
                minePolls: [],
                selected: [],
                pollEditInfo: [],
                platformName: 'User Profile',
                toggleDisable1: false,
                toggleDisable2: false,
                toggleDisable3: false,
                toggleDisable4: false,
                toggleClass: true,
                listPublic: false
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
                console.log('no owner polls');
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


</style>