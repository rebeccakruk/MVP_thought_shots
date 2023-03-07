<template>
    <div>
    <v-btn @click="login()"><router-link to="/login">User Login</router-link></v-btn>
    </div>
</template>

<script>
import axios from 'axios';
// import cookies from 'vue-cookies'
    export default {
        name: "userLogin",
        data() {
            return {
                username: "",
                password: ""
            }
        },
        methods: {
            login() {
                axios.request({
                    url: `${process.env.VUE_APP_BASE_DOMAIN}/api/user`,
                    method: `POST`,
                    data: {
                        username: this.username,
                        password: this.password
                    }
                }).then((response) =>{
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
                })
            }
        },
    }
</script>

<style scoped>

</style>