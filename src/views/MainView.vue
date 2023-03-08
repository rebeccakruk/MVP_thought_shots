<template>
    <div class="home">
        <h1>Thought-shots</h1>
            <nav>
                <router-view />
                <v-btn @click="login()"><router-link to="/login">Login</router-link></v-btn>
                <v-btn @click="logout()"><router-link to="/logout">Logout</router-link></v-btn>
                <v-btn @click="register()"><router-link to="/register">Sign up</router-link></v-btn>
                <v-btn @click="viewProfile()"><router-link to="/user">View / Edit Profile</router-link></v-btn>

            </nav>
    </div>
</template>

<script>


    export default {
    name: "MainView",
    components: {

        }
    }
</script>

<style scoped>

</style>