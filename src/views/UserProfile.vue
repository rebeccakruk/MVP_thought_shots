<template>
    <v-app :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }" :dark="darkTheme" id="inspire">
        <v-container>
            <v-layout wrap>
                <v-flex sm12 md6 offset-md3>
                    <v-card elevation="4" light tag="section">
                        <v-card-title>
                            <v-layout align-center justify-space-between>
                                <h3 class="headline">
                                    {{ userInfo.username }}
                                </h3>

            </v-layout>
            
            </v-card-title>
                <v-divider></v-divider>
                    <v-card-text>
                        <v-layout align-center justify-space-between>
                        <p>View / Edit Profile:</p>
                                                    <v-btn
            class="ml-3"
            :color="toggleDisable ? 'primary' : ''"
            @click="toggleDisable = !toggleDisable"
            >
            Edit User Info
            </v-btn>
                                                    </v-layout>
                            <v-form>

                                <v-text-field 
                                            v-model="userInfo.username"
                                            :disabled="!toggleDisable"
                                            label="Username"
                                            :append-icon="!toggleDisable ? ' ' : 'mdi-pencil'"
                                            ></v-text-field>
                                <v-text-field 
                                            v-model="userInfo.email"
                                            :disabled="!toggleDisable"
                                            label="email"
                                            :append-icon="!toggleDisable ? ' ' : 'mdi-pencil'"
                                            ></v-text-field>

                                            <v-text-field 
                                                v-model="userInfo.dob"
                                                :disabled="!toggleDisable"
                                                label="Birthday YYYY-MM-DD"
                                                :append-icon="!toggleDisable ? ' ' : 'mdi-pencil'"
                                                ></v-text-field>

                                                <v-text-field 
                                                v-model="userInfo.image"
                                                :disabled="!toggleDisable"
                                                label="image"
                                                :append-icon="!toggleDisable ? ' ' : 'mdi-pencil'"
                                                ></v-text-field>
<!-- 
                                <v-text-field
                                            outline
                                            label="Birthday YYYY-MM-DD"
                                            :rules="[rules.required]"
                                            type="text"
                                            :append-icon="isEditing ? 'mdi-pencil'" 
                                            v-model="formData.username"></v-text-field>
                
                                <v-text-field
                                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                        :rules="[rules.required, rules.emailMatch]"
                                        :type="showPassword ? 'text' : 'password'"
                                        label="Password"
                                        @click:append="showPassword = !showPassword"
                                        outline
                                        hide-details
                                        v-model="formData.password"></v-text-field>    -->
                            </v-form>
                    </v-card-text>
                <v-divider></v-divider>
                        <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
                                <v-btn color="info" text>
                                    Forgot password?
                                </v-btn>
                    <v-spacer></v-spacer>
                                <v-btn color="info" :large="$vuetify.breakpoint.smAndUp" @click="patchInfo()"><router-view to="/"></router-view>
                                    Submit
                                </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
                    <v-flex sm12 md6 offset-md3>
                        <v-layout align-center justify-space-between>
                        </v-layout>
                </v-flex>
            </v-layout>
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
                rules: {
                    required: value => !!value || 'Required.',
                    emailMatch: () => ('The email and password you entered don\'t match')
            },
            showPassword: false,
            darkTheme: true,
                userInfo : [],
                formData: {
                    email: "",
                    username: "",
                    password: "",
                    dob: Date,
                    image: "",
                },
                token: "",
                isEditing: false,
                platformName: 'User Profile',
                toggleDisable: false,
                toggleClass: true
            }
        },
        methods: {
            getInfo() {
                axios.request({
                    url: `${process.env.VUE_APP_BASE_DOMAIN}/api/user`,
                    method: "GET",
                    params: {
                    "token" : this.token
                    }
            }).then((response) => {
                    this.userInfo = response.data[0]
                    console.log(response.data);
                }).catch((error) => {
                    console.log(error);
                })
            },
            patchInfo() {
                axios.patch(
                    process.env.VUE_APP_BASE_DOMAIN + '/api/user',
                    this.formData
                ).then((response) => {
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
                })
            }
        },
        beforeMount () {
            this.token = cookies.get('token');
        },
        mounted () {
            this.getInfo();
            this.formData = this.email;
            this.formData = this.username;
            this.formData = this.image;
            this.formData = this.password;
            this.formData = this.dob;
        },
    }
</script>

<style scoped>

</style>

<!-- please work on frontend and backend in parallel
a state manager is a function
in additional helper file, valid when there's a need to kick the user to the main page, not logged in. -->

<!-- first do the testing through Postman, and it allows you to check if it's working properly -->