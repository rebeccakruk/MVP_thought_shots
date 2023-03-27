<template>
    <div :class="{ 'pa-e': $vuetify.breakpoint.smAndUp }">
        <v-container>
            Poll ID # {{ $route.params.pollId }}
            <v-layout wrap>
                <v-flex sm12 md6 offset-md3>
                    <v-card elevation="4" light tag="section">
                        <v-card-title>
                            <v-layout align-center justify-space-between>
                                <h3 class="headline">
                                    Edit {{ pollEditData.title }}
                                </h3>
                            </v-layout>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>
                            <v-form>

                            <v-layout align-center justify-space-between>
                                            <v-text-field
                                                filled
                                                label="Title"
                                                v-model="this.title"
                                                :disabled="!toggleDisable1"
                                            ></v-text-field>
                                                    <v-icon flat :color="toggleDisable1 ? 'primary' : ' '"
                                                @click="toggleDisable1 = !toggleDisable1">mdi-pencil</v-icon>
                            </v-layout>
                            <v-layout align-center justify-space-between>
                                            <v-text-area
                                                filled
                                                label="Description"
                                                v-model="pollEditData.description"
                                                :disabled="!toggleDisable2"
                                            ></v-text-area>
                                                    <v-icon flat :color="toggleDisable2 ? 'primary' : ' '"
                                                @click="toggleDisable2 = !toggleDisable2">mdi-pencil</v-icon>
                            </v-layout>
                            <v-layout align-center justify-space-between>
                                            <v-text-field
                                                filled
                                                label="Question"
                                                v-model="pollEditData.question"
                                                :disabled="!toggleDisable3"
                                            ></v-text-field>
                                                    <v-icon flat :color="toggleDisable3 ? 'primary' : ' '"
                                                @click="toggleDisable3 = !toggleDisable3">mdi-pencil</v-icon>
                            </v-layout>
                            <v-layout align-center justify-space-between>
                                            <v-text-field
                                                filled
                                                label="Response Option"
                                                v-model="pollEditData.responseOption"
                                                :disabled="!toggleDisable4"
                                            ></v-text-field>
                                                    <v-icon flat :color="toggleDisable4 ? 'primary' : ' '"
                                                @click="toggleDisable4 = !toggleDisable4">mdi-pencil</v-icon>
                            </v-layout>
                            </v-form>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
                        <v-spacer></v-spacer>
                        <router-view to="/">
                            <v-btn color="info" :large="$vuetify.breakpoint.smAndUp" @click="patchPoll">
                                Submit Change
                            </v-btn>
                        </router-view>
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
                        token: ""
                },
            toggleDisable1: false,
            toggleDisable2: false,
            toggleDisable3: false,
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
                console.log(response.data);
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
            router.push('/pollsView')
        }
        },
        beforeMount () {
            this.token = cookies.get('token');
        },
        mounted () {
            this.getPoll();
            this.pollEditData = this.categoryName;
            this.pollEditData = this.category;
            this.pollEditData = this.title;
            this.pollEditData = this.description;
            this.pollEditData = this.expiry;
            this.pollEditData - this.token;
            console.log(this.pollEditData);
        },
    }
</script>

<style scoped>

</style>