<template>
    <v-app :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }" :dark="darkTheme" id="inspire">
        <v-container >
                <UserDash v-for="user in userInfo" :getDash="getInfo()" :key="index" :username="user.username"/>
        </v-container>
    </v-app>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'
import router from '@/router';
import UserDash from './components/UserDash.vue';

    export default {
        name: "UserProfile",
        components: {
            UserDash
        },
        data() {
            return {
            showPassword: false,
            darkTheme: true,
                userInfo : [],
                formData: {
                    email: "",
                    username: "",
                    firstName: "",
                    lastName: "",
                    password: "",
                    dob: Date,
                    user_id: "",
                    createdAt: "",
                    token: "",
                },
                platformName: 'User Profile',
                toggleDisable1: false,
                toggleDisable2: false,
                toggleDisable3: false,
                toggleDisable4: false,
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
                    console.log(response.data)
                    for (let i = 0; i < this.userInfo.length; i++)
                    console.log(this.userInfo['username']);
                }).catch((error) => {
                    console.log(error);
                })
            },
            patchInfo() {
                console.log(this.token);
                axios.patch(
                    process.env.VUE_APP_BASE_DOMAIN + '/api/user',
                    this.userInfo, this.token
                ).then((response) => {
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
                })
                router.push('/')
            },
        },
        beforeMount () {
            this.token = cookies.get('token')
            this.$root.$on('getDash', this.getInfo)
        },
        mounted () {
            this.getInfo();
            console.log(this.userInfo.username);
            console.log('anybody home?');
            this.formData = this.email;
            this.formData = this.username;
            this.formData = this.password;
            this.formData = this.dob;
            this.formData = this.firstName;
            this.formData = this.lastName;
            this.formData = this.createdAt;
            this.formData = this.token;
        },
    }
</script>

<style scoped>

</style>

<!-- please work on frontend and backend in parallel
a state manager is a function
in additional helper file, valid when there's a need to kick the user to the main page, not logged in. -->
<!-- Spend some time while we're thinking about different features. Personas. Imaginary/potential user and how they would use the app -->
<!-- first do the testing through Postman, and it allows you to check if it's working properly -->