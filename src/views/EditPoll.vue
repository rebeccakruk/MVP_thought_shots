<template>
    <div :class="{ 'pa-e': $vuetify.breakpoint.smAndUp }">
        <v-container>
            Poll ID # {{ $route.params.pollId }}
            <v-layout wrap>
                <v-btn color="info" @click="deletePoll()">
                                    Delete poll?
                                </v-btn>
                <v-flex sm12 md6 offset-md3>
                    <v-card elevation="4" light tag="section">
                        <v-card-title>
                            <h3 class="headline">
                                Edit {{ this.pollEditData[0].title }}
                            </h3>
                            <v-layout align-center justify-space-between>
                            </v-layout>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>
                            <v-form
                            v-for="edit in this.pollEditData" :key="edit.pollId"
                            >

                            <v-layout align-center justify-space-between>
                                            <v-text-field
                                                
                                                label="Title"
                                                v-model="edit.title"
                                                :disabled="!toggleDisable1"
                                            ></v-text-field>
                                                    <v-icon flat :color="toggleDisable1 ? 'primary' : ' '"
                                                @click="toggleDisable1 = !toggleDisable1">mdi-pencil</v-icon>
                            </v-layout>
                            <v-layout align-center justify-space-between>
                                            <v-text-field
                                                
                                                label="Description"
                                                v-model="edit.description"
                                                :disabled="!toggleDisable2"
                                            >{{ edit.description }}</v-text-field>
                                                    <v-icon flat :color="toggleDisable2 ? 'primary' : ' '"
                                                @click="toggleDisable2 = !toggleDisable2">mdi-pencil</v-icon>
                            </v-layout>
                            <v-layout align-center justify-space-between>
                                            <v-text-field
                                                label="question"
                                                v-model="edit.question"
                                                :disabled="!toggleDisable3"
                                            >{{ edit.question }}</v-text-field>
                                                    <v-icon flat :color="toggleDisable3 ? 'primary' : ' '"
                                                @click="toggleDisable3 = !toggleDisable3">mdi-pencil</v-icon>
                            </v-layout>
                            <v-layout align-center justify-space-between>
                                            <v-text-field
                                                label="Response Option"
                                                v-model="edit.responseOption"
                                                :disabled="!toggleDisable4"
                                            >{{ edit.responseOption }}</v-text-field>
                                                    <v-icon flat :color="toggleDisable4 ? 'primary' : ' '"
                                                @click="toggleDisable4 = !toggleDisable4">mdi-pencil</v-icon>
                            </v-layout>
                            </v-form>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions >
                        <v-spacer></v-spacer>
                        
                            <v-btn color="info" @click="patchPoll()">
                                Submit Change
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'
import router from '@/router';
    export default {
        name: "EditPoll",
        data() {
            return {
                patchInfo: [],
                pollEditData: {
                        category: "",
                        categoryName: "",
                        createdAt: "",
                        description: "",
                        expiry: "",
                        pollOwner: "",
                        title: "",
                        pollId: "",
                        questionId: "",
                        responseOption: "",
                        answerId: "",
                        token: ""
                },
            toggleDisable1: false,
            toggleDisable2: false,
            toggleDisable3: false,
            toggleDisable4: false,
            toggleClass: true
            }
        },
        methods: {
            getPoll() {
                axios.request({
                    url: `${process.env.VUE_APP_BASE_DOMAIN}/api/poll-owner`,
                    method: "GET",
                            params: {
                                pollId: this.$route.params.pollId,
                                "token": this.token
                                }
            }).then((response) => {
                this.pollEditData = response.data
                console.log(this.pollEditData[0].title);
            }).catch((error) => {
                console.log(error);
            })
        },
        patchPoll() {
            axios.patch(
                process.env.VUE_APP_BASE_DOMAIN + '/api/poll-owner',
                this.patchInfo
            ).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })
            router.push('/')
        },
        deletePoll() {
                axios.request({
                    url: `${process.env.VUE_APP_BASE_DOMAIN}/api/poll-owner`,
                    method: "DELETE",
                    data: {
                        pollId: this.$route.params.pollId,
                        "token": this.token
                    },
                }).then((response) => {
                    console.log(response)
                    router.push('/')
                }).catch((error) => {
                    console.log(error);
                })
            }
        },
        beforeMount () {
            this.token = cookies.get('token');
        },
        mounted () {
            this.getPoll();
        },
    }
</script>

<style scoped>

</style>