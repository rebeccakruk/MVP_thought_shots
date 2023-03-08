<template>
    <div class="home">
        <h1>Thought-shots</h1>
            <nav>
                <router-view />
                <UserProfile v-if="isLoggedIn()"/>
                <v-btn v-if="!isLoggedIn()" @click="login()"><router-link to="/login">Login</router-link></v-btn>
                <v-btn @click="logout()"><router-link to="/logout">Logout</router-link></v-btn>
                <v-btn v-if="!isLoggedIn()"  @click="register()"><router-link to="/register">Sign up</router-link></v-btn>

            </nav>
    </div>
</template>

<script>
import UserProfile from '../views/UserProfile.vue'
import cookies from 'vue-cookies'
    export default {
    name: "MainView",
    components: {
            UserProfile
        },
        methods: {
            isLoggedIn() {
            let user = cookies.get('token')
            if (user == null) {
                return false
            } else {
                return true
            }
        },
        },
        mounted () {
            this.isLoggedIn();
        },
    }
</script>

<style scoped>

</style>