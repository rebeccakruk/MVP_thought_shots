<template>
            <div class="black" :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }" :dark="darkTheme" id="inspire">
        <v-container class="dark_grey">
                <v-layout wrap>
                    <v-flex sm12 md6 offset-md3>
                        <v-card class="dark" elevation="4" tag="section">
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
            <v-text-field 
                v-model="formData.firstName" 
                label="first name" 
                type="input" 
                class="rounded-0" 
                outlined
                required
                :error-messages="errorMessages"
                :rules="rules.required" >
            </v-text-field>
            <v-text-field
                v-model="formData.lastName"
                label="last name" 
                type="input" 
                class="rounded-0" 
                outlined 
                required
                :rules="rules.required">
            </v-text-field>
            <v-text-field 
                v-model="formData.username" 
                label="username" 
                type="input" 
                class="rounded-0" 
                outlined 
                required
                :rules="rules.required">
            </v-text-field>
            <v-text-field 
                v-model="formData.password" 
                label="password" 
                type="password" 
                class="rounded-0" 
                outlined 
                required
                :rules="rules.required">
            </v-text-field>
            <v-text-field 
                v-model="formData.email" 
                label="email" 
                type="email" 
                class="rounded-0" 
                outlined 
                required
                :rules="rules.required">
            </v-text-field>
                            </v-form>
                        </v-card-text>
                    <v-divider></v-divider>
                            <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
                                    Already have an account?
                                    <router-link style="text-decoration:none" to="/login">
                                        <v-btn
                                        color="black"
                                        :large="$vuetify.breakpoint.smAndUp"
                                        text>
                                            Login
                                        </v-btn>
                                    </router-link>
                        <v-spacer></v-spacer>
                                    <router-link style="text-decoration:none" color="success" to="/">
                                        <v-btn 
                                            color="yellow" 
                                            :large="$vuetify.breakpoint.smAndUp" 
                                            @click="register()">
                                            Register
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
            </v-container>
    </div>
</template>

<script>
import router from 'vue-router';
import axios from 'axios';
import cookies from 'vue-cookies';

export default {
    name: "UserSignup",
        data() {
            return {
                rules: {
                    required: value => !!value || 'Required.',
                    email: value => {
                            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                            return pattern.test(value) || 'Invalid e-mail.'
                    }
                },
                formData: {
                firstName: "",
                lastName: "",
                username: "",
                password: "",
                email: "",
                dob: ""
            },
            platformName: "Sign-up Form",
        }
    },
        methods: {
            register() {
                axios.post(
                    process.env.VUE_APP_BASE_DOMAIN + '/api/user',
                    this.formData,                        
                    ).then((response) => {
                        console.log(response);
                        let token = response.data.token
                        let id = response.data.userId
                        cookies.set('token', token)
                        cookies.set('userId', id)
                        this.$emit('refresh')
                        router.push('/ownerpoll')
                    }).catch((error) => {
                        console.log(error);
                    })
                }
            }
}

</script>

<style scoped>





</style>