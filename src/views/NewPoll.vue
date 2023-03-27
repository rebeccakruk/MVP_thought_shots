<template>
<div :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }" >
    <v-card>
    <v-toolbar
        flat
        color="black"
        outlined
        dark
    >
        <v-toolbar-title>Create a poll</v-toolbar-title>
    </v-toolbar>

    <v-card-text v-if="isLoggedIn()">

        <v-text-field
        filled
        label="Title"
        v-model="pollCreateData.title"
        ></v-text-field>

        <v-textarea
        filled
        label="Description"
        v-model="pollCreateData.description"
        ></v-textarea>

        </v-card-text>
        <div v-else justify-center><h3>You must be logged in to create a poll.</h3></div>

<v-card-actions text-decoration-none>
        <v-spacer></v-spacer>
            <v-btn 
                v-if="isLoggedIn()"
                @click="new_poll()"
                color="success"
                depressed
                submit
                >
                Next
            </v-btn>
           
    </v-card-actions>
    </v-card>
</div>
</template>

<script>
import router from '@/router';
import axios from 'axios';
import cookies from 'vue-cookies';

    export default {
        name: "NewPoll",
        data() {
            return {
                newPoll: [],
                token: "",
                pollCreateData: 
                    {
                    title : "",
                    description: "",
                    category: 8,
                    expiry: null,
                    invite: 0,
                    limits: null,
                    token: ""
            },
            selectedValue: [],
            a: 0,
            b: 1,        
            }
        },
        methods: {
            isLoggedIn() {
                let user = cookies.get('token')
                if (user == null) {
                    return false
                } else {
                    return true
                }
            },
            changeValue(data) {
                if (this.selectedValue.length == 0) {
                    this.selectedValue.push(data)
                    console.log(this.selectedValue);
                } else {
                    this.selectedValue = []
                }
            },
            new_poll() {
                    axios.post(
                        process.env.VUE_APP_BASE_DOMAIN + '/api/poll-owner',
                        this.pollCreateData,
                ).then((response) => {
                    this.newPoll = response.data.pollId
                    console.log(response)
                    cookies.set('newPoll', this.newPoll)
                    router.push('/addquestions')
                }).catch((error) => {
                    console.log(error);
        })
            }
        },
        beforeMount () {
            this.pollCreateData.token = cookies.get('token');
        },
    }

</script>

<style scoped>

</style>