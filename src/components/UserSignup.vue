<template>
        <div>
            <v-text-field v-model="formData.username" label="Please enter your username" type="input" class="rounded-0" outlined></v-text-field>
            <v-text-field v-model="formData.password" label="Please enter your password" type="password" class="rounded-0" outlined></v-text-field>
            <v-text-field v-model="formData.email" label="Please enter your email" type="email" class="rounded-0" outlined></v-text-field>
            <v-text-field v-model="formData.dob" label="Please enter your date of birth (YYYY-MM-DD)" type="date" class="rounded-0" outlined></v-text-field>
            <v-text-field v-model="formData.image" label="profile picture (optional)" type="img" class="rounded-0" outlined></v-text-field>
            <v-btn @click="register()"><router-view to="/">Register</router-view></v-btn>
        </div>
</template>

<script>
import router from '@/router';
import axios from 'axios';
import cookies from 'vue-cookies';

    export default {
        name: "UserSignup",
            data() {
                return {
                    formData: {
                    username: "",
                    password: "",
                    email: "",
                    dob: Date,
                    image: {
                        type: String
                    }
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
                            router.push('/userprofile')
                        }).catch((error) => {
                            console.log(error);
                        })
                    }
                }    
            }
</script>

<style scoped>

</style>