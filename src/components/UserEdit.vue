<template>
    <div :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }" >
        <v-container>
            <v-layout wrap>
                <v-flex sm12 md6 offset-md3>
                    <v-card elevation="4" light tag="section">
                        <v-card-title>
                            <v-layout align-center justify-space-between>
                                <h3 class="headline">
                                    Welcome {{ userInfo.username }}!
                                </h3>
                            </v-layout>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>
                            <v-layout align-center justify-space-between>
                                <p>Member since {{ userInfo.createdAt }}</p>
                            </v-layout>
                            <v-form>
                                <v-layout align-center justify-space-between>
                                    <v-text-field v-model="userInfo.email" :disabled="!toggleDisable1"
                                        label="email"></v-text-field>
                                    <v-icon flat :color="toggleDisable1 ? 'primary' : ' '"
                                        @click="toggleDisable1 = !toggleDisable1">mdi-pencil</v-icon>
                                </v-layout>
                                <v-layout align-center justify-space-between>
                                    <v-text-field v-model="userInfo.firstName" :disabled="!toggleDisable2"
                                        label="first name"></v-text-field>
                                    <v-icon flat :color="toggleDisable2 ? 'primary' : ' '"
                                        @click="toggleDisable2 = !toggleDisable2">mdi-pencil</v-icon>
                                </v-layout>
                                <v-layout align-center justify-space-between>
                                    <v-text-field v-model="userInfo.lastName" :disabled="!toggleDisable3"
                                        label="last name"></v-text-field>
                                    <v-icon flat :color="toggleDisable3 ? 'primary' : ' '"
                                        @click="toggleDisable3 = !toggleDisable3">mdi-pencil</v-icon>
                            
                                </v-layout>
                                <v-card-actions>
                                
                                <v-spacer></v-spacer>
                              
                                    <v-btn color="success" @click="patchInfo()">
                                        <h1>SUBMIT</h1> 
                                    </v-btn>
                          
                            </v-card-actions>
                            </v-form>
                        </v-card-text>
                            <v-divider></v-divider>
                    </v-card>
                    </v-flex>
                    <v-flex sm12 md6 offset-md3>
                        <v-layout align-center justify-space-between>
                        </v-layout>
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
    name: "UserEdit",
    data() {
        return {
            showPassword: false,
            userInfo: [],
            formData: {
                email: "",
                username: "",
                firstName: "",
                lastName: "",
                password: "",
                user_id: "",
                createdAt: "",
                token: "",
            },
            toggleDisable1: false,
            toggleDisable2: false,
            toggleDisable3: false,
            toggleClass: true
        }
    },
    methods: {
        getInfo() {
            axios.request({
                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/user`,
                method: "GET",
                params: {
                    "token": this.token
                }
            }).then((response) => {
                this.userInfo = response.data[0]
                console.log(response.data);

            }).catch((error) => {
                console.log(error);
            })
        },
        patchInfo() {
            console.log(this.token);
            axios.patch(
                process.env.VUE_APP_BASE_DOMAIN + '/api/user',
                this.userInfo, this.token
            ).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })
            router.push('/')
        },
    },
    beforeMount() {
        this.token = cookies.get('token');
    },
    mounted() {
        this.getInfo();
        console.log(this.userInfo.username);
    },
}
</script>

<style scoped>

</style>
