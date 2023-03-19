<template>
        <v-app :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }" :dark="darkTheme" id="inspire">
          <v-container>
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
                            <p>Create an account to create polls:</p>
                                <v-form>

            <v-text-field v-model="formData.firstName" label="first name" type="input" class="rounded-0" outlined></v-text-field>
            <v-text-field v-model="formData.lastName" label="last name" type="input" class="rounded-0" outlined></v-text-field>
            <v-text-field v-model="formData.username" label="username" type="input" class="rounded-0" outlined></v-text-field>
            <v-text-field v-model="formData.password" label="password" type="password" class="rounded-0" outlined></v-text-field>
            <v-text-field v-model="formData.email" label="email" type="email" class="rounded-0" outlined></v-text-field>
            <v-text-field v-model="formData.dob" hint="Why? We want to ensure the content accessed is age appropriate for users under 18." label="date of birth (mm-dd-yyyy)" type="date" class="rounded-0" outlined></v-text-field>
            <!-- <v-text-field v-model="formData.image" label="profile picture (optional)" type="img" class="rounded-0" outlined></v-text-field> -->
                             </v-form>
                        </v-card-text>
                    <v-divider></v-divider>
                            <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
                                    Already have an account?<v-btn color="info" text><router-view to="/login"></router-view>
                                    Login
                                    </v-btn>
                        <v-spacer></v-spacer>
                                    <v-btn color="success" :large="$vuetify.breakpoint.smAndUp" @click="register()">
                                        Register
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
import router from 'vue-router';
import axios from 'axios';
import cookies from 'vue-cookies';

    export default {
        name: "UserSignup",
            data() {
                return {
                    formData: {
                    firstName: "",
                    lastName: "",
                    username: "",
                    password: "",
                    email: "",
                    dob: ""
                },
                platformName: "Sign-up Form",
                darkTheme: true,
            }
        },
            methods: {
                register() {
                    axios.post(
                        process.env.VUE_APP_BASE_DOMAIN + '/api/user',
                        this.formData,                        
                        ).then((response) => {
                            let token = response.data.token
                            let id = response.data.userId
                            cookies.set('token', token)
                            cookies.set('userId', id)
                            router.push('/')
                        }).catch((error) => {
                            console.log(error);
                        })
                        console.log(this.formData.username, this.formData.userId)
                        this.$root.$emit(this.formData.username)
                    }
                }
    }
            
        </script>

<style scoped>

</style>