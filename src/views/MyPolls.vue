<template>
<div id="app">
<v-app id="inspire">
    <v-card>
    <v-toolbar
        flat
        color="blue-grey"
        dark
    >
        <v-toolbar-title>Create a poll</v-toolbar-title>
    </v-toolbar>

    <v-card-text>

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

        <v-text-field
            filled
            label="expiry"
            v-model="pollCreateData.expiry"
            ></v-text-field>

            <v-text-field
                filled
                label="limits"
                v-model="pollCreateData.limits"
                ></v-text-field>

        <v-row>
                <v-col
                cols="12"
                sm="4"
                md="4"
                >
    <v-checkbox
                    label="public"
                    color="indigo darken-3"

                    hide-details
                    @change="changeValue(a)"
                    :disabled="selectedValue.length > 0 && selectedValue[0] != a"
                ></v-checkbox>
                <v-checkbox
                    label="private"
                    color="indigo darken-3"

                    hide-details
                        @change="changeValue(b)"
                    :disabled="selectedValue.length > 0 && selectedValue[0] != b"
                ></v-checkbox>
                <!-- <v-checkbox
                    label="anonymous"
                    color="indigo darken-3"
                    v-model="c"
                    hide-details
                    @change="changeValue(c)"
                    :disabled="selectedValue.length > 0 && selectedValue[0] != c"
                ></v-checkbox> -->
                </v-col>
                </v-row>
        </v-card-text>

    <v-divider></v-divider>

<v-card-actions text-decoration-none>
        <v-spacer></v-spacer>
        <v-btn @click="new_poll()"
        color="success"
        depressed
        submit
        >
        <router-link to="/addquestions">Next</router-link></v-btn>
        <!-- <v-btn
        color="primary"
        depressed
        >
        Save
        </v-btn> -->
    </v-card-actions>
    </v-card>
    </v-app>
</div>
</template>

<script>
import router from '@/router';
import axios from 'axios';
import cookies from 'vue-cookies';

    export default {
        name: "MyPolls",
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