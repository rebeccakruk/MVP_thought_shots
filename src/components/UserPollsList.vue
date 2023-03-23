<template>
    <div :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }" :dark="darkTheme" id="inspire">
        <v-container>
            Welcome {{ userInfo.username }}
        </v-container>

        <v-card
                class="overflow-y-auto"
                max-height="300"
                tile
                >
            <v-list dense
                >
            <h4>My Polls</h4>
                <v-list-item-group
                    v-model="minePolls.title"
                    color="primary"
                >
                    <v-list-item
                        v-for="mine in minePolls" :key="mine.pollId" v-bind:mine="mine"
                    >
                    <v-list-item-icon>
                        <v-icon v-text="mine.title"
                        v-model="selected"
                        @click="goToPoll(mine.pollId)"></v-icon>
                    </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="mine.description"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-card>

    </div>
</template>

<script>
import router from '@/router';
import axios from 'axios'
import cookies from 'vue-cookies'


    export default {
        name: "UserPollsList",
        components: {
},
        data() {
            return {
            showPassword: false,
            darkTheme: true,
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
                console.log('no polls here');
            })
        },
        goToPoll(pollId) {
            console.log(pollId, 'pollId');
            this.selected.push( pollId );
            this.selectedThisPole();
            console.log(this.selected, 'selected');
        },
        selectedThisPole() {
                this.poll_id = this.selected.pop()
                let userToken = cookies.get('token')
                console.log(userToken, this.poll_id);
                axios.request({
                    url: `${process.env.VUE_APP_BASE_DOMAIN}/api/poll-owner`,
                    method: "GET",
                    params: {
                        "token": userToken,
                        "pollId": this.poll_id
                    }
                }).then((response) => {
                    let pollId = response.data[0].pollId
                    pollId = cookies.set('pollId', pollId)
                    console.log(pollId, 'pollId');
                    router.push('/pollsView')
                }).catch((error) => {
                    console.log(error);
                }).finally(() => {
                    console.log('no polls here');
                })
        }
    
    },
        mounted () {
            this.getMyInfo();
            this.getMyPolls();
        }
    }

</script>

<style scoped>
.black {
    max-height: 5em;
    border: 3px black;
    background-color: aqua;
}

</style>

<!-- please work on frontend and backend in parallel
a state manager is a function
in additional helper file, valid when there's a need to kick the user to the main page, not logged in. -->
<!-- Spend some time while we're thinking about different features. Personas. Imaginary/potential user and how they would use the app -->
<!-- first do the testing through Postman, and it allows you to check if it's working properly -->