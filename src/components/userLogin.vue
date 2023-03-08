<template>
    <div>
        <v-form>
        <v-text-field v-model="formData.username" label="Please enter your username" type="input" class="rounded-0" outlined></v-text-field>
        <v-text-field v-model="formData.password" label="Please enter your password" type="password" class="rounded-0" outlined></v-text-field>
        <v-btn @click="login()"><router-view to="/">Login</router-view></v-btn>
            </v-form>
    </div>
</template>

<script>
import router from '@/router';
import axios from 'axios';
import cookies from 'vue-cookies'
    export default {
        name: "userLogin",
        data() {
            return {
                formData: {
                    username: "",
                    password: ""
                }
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
                    router.push('/userprofile')
                }).catch((error) => {
                    console.log(error);
                })
            }
        },
    }
</script>

<style scoped>

</style>