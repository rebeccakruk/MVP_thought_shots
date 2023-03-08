<template>
    <div>
        <v-text-field v-model="userInfo.username" label="username"></v-text-field>
        <v-text-field v-model="userInfo.email" label="email"></v-text-field>
        <v-text-field v-model="userInfo.image" label="image"></v-text-field>
        <v-text-field v-model="userInfo.dob" label="dob"></v-text-field>
        <v-btn @click="editUser">Submit</v-btn>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name : "UserEdit",
        props: {
            "email" : String,
            "password" : undefined,
            "image" : String,
            "username" : String,
            "dob" : Date
        },
        methods: {
            editUser() {
                axios.patch((
                    process.env.VUE_APP_BASE_DOMAIN + '/api/user',
                    this.formData
                )).then((response) => {
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
                })
            }
        },  
        mounted () {
            this.formData.username = this.username;
            this.formData.email = this.email;
            this.formData.image = this.image;
            this.formData.dob = this.dob;
        },
    }
</script>

<style scoped>

</style>
