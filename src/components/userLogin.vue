<template>
    <div class="black">
        <v-app-bar app>
            <v-layout wrap>
                <v-flex sm12 md6 offset-md3>
                    <v-card elevation="4" light tag="section">
                        <v-card-title>
                            <v-layout align-center justify-space-between>
                                <h3 class="headline">
                                    {{ platformName }}
                                </h3>
            </v-layout>
            
            </v-card-title>
                <v-divider></v-divider>
                    <v-card-text>
                        <p>Sign in with your username and password:</p>
                            <v-form>
                                <v-text-field
                                        outline
                                        label="Username"
                                        :rules="rules.required"
                                        type="text"
                                        v-model="formData.username">
                                </v-text-field>
                
                                <v-text-field
                                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                        :rules="rules.required"
                                        :type="showPassword ? 'text' : 'password'"
                                        label="Password"
                                        @click:append="showPassword = !showPassword"
                                        outline
                                        hide-details
                                        v-model="formData.password">
                                </v-text-field>   
                            </v-form>
                    </v-card-text>
                <v-divider></v-divider>
                        <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
                                <v-btn color="info" text>
                                    Forgot password?
                                </v-btn>
                    <v-spacer></v-spacer>
                                <router-link to="/">
                                    <v-btn color="info" :large="$vuetify.breakpoint.smAndUp" @click="login()">
                                        Login
                                    </v-btn>
                                </router-link>
                        </v-card-actions>
                    </v-card>
                </v-flex>
                    <v-flex sm12 md6 offset-md3>
                        <v-layout align-center justify-space-between>
                        </v-layout>
                </v-flex>
            </v-layout>

    </v-app-bar>
</div>
</template>

<script>
// import router from '@/router';
import axios from 'axios';
import cookies from 'vue-cookies'
    export default {
        name: "userLogin",
        data() {
            return {
                rules: {
                    required: value => !!value || 'Required.',
                    emailMatch: () => ('The email and password you entered don\'t match')
                },
                showPassword: false,
                platformName: 'Login Form',
                formData: {
                    username: "",
                    password: ""
                },
            }
        },
        methods: {
            login() {
                axios.post(
                    process.env.VUE_APP_BASE_DOMAIN + `/api/user-login`,
                    this.formData
                ).then((response) =>{
                    let token = response.data.token
                    let id = response.data.userId
                    cookies.set('token', token)
                    cookies.set('userId', id)
                }).catch((error) => {
                    console.log(error);
                })
            }
        },
    }
</script>

<style scoped>
.black {
    background-color: black;
    color: whitesmoke;
}
v-btn,
v-card {
        border-radius: 4px;
        }
v-card__title {
            text-transform: uppercase;
            }
</style>