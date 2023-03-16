<template>
        <div>
            <v-text-field v-model="formData.firstName" label="first name" type="input" class="rounded-0" outlined></v-text-field>
            <v-text-field v-model="formData.lastName" label="last name" type="input" class="rounded-0" outlined></v-text-field>
            <v-text-field v-model="formData.username" label="username" type="input" class="rounded-0" outlined></v-text-field>
            <v-text-field v-model="formData.password" label="password" type="password" class="rounded-0" outlined></v-text-field>
            <v-text-field v-model="formData.email" label="email" type="email" class="rounded-0" outlined></v-text-field>
            <v-text-field v-model="formData.dob" hint="Why? We want to ensure the content accessed is age appropriate for users under 18." label="date of birth (mm-dd-yyyy)" type="date" class="rounded-0" outlined></v-text-field>
            <v-text-field v-model="formData.image" label="profile picture (optional)" type="img" class="rounded-0" outlined></v-text-field>
            <v-btn @click="register()">Register</v-btn>
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
                    formData: {
                    firstName: "",
                    lastName: "",
                    username: "",
                    password: "",
                    email: "",
                    dob: "",
                }
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