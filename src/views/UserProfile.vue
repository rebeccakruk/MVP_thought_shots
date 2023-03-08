<template>
    <div>
        <v-text-field :readonly="isEditing"></v-text-field>
            <v-btn @click="isEditing = !isEditing">
                <v-icon>mdi-pencil</v-icon>
            </v-btn>
                <v-btn @click="isEditing = true" color="primary" v-if="isEditing" text>Submit</v-btn>
        <div class="profileDiv" v-if="isEditing">
            <v-text-field v-model="userInfo.username" label="username"></v-text-field>
            <v-text-field v-model="userInfo.email" label="email"></v-text-field>
            <v-text-field v-model="userInfo.image" label="image"></v-text-field>
            <v-text-field v-model="userInfo.dob" label="dob"></v-text-field>
        <v-img :src="userInfo.image"></v-img>
        <h2>
            {{ userInfo.username }}
        </h2>
        {{ userInfo.email }}
        {{ userInfo.created_at }}
        </div>
        <div class="editDiv" v-if="isEditing">
        <UserEdit :username="userInfo.username" :email="userInfo.email" />
        </div>
    
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'
import UserEdit from '@/components/UserEdit.vue'

    export default {
        name: "UserProfile",
        components: {
            UserEdit
        },
        data() {
            return {
                userInfo : [],
                formData: {
                    email: "",
                    username: "",
                    password: "",
                    dob: Date,
                    image: "",
                },
                token: "",
                isEditing: false
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
        },
    }
</script>

<style scoped>

</style>

<!-- please work on frontend and backend in parallel
a state manager is a function
in additional helper file, valid when there's a need to kick the user to the main page, not logged in. -->

<!-- first do the testing through Postman, and it allows you to check if it's working properly -->