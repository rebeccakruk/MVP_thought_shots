<template>
    <div class="home">
        <h1>Thought-shots</h1>
            <nav>
                <router-view />
                <v-btn @click="login()"><router-link to="/login">User Login</router-link></v-btn>
                <v-btn @click="signup()"><router-link to="/signUp">Sign Up</router-link></v-btn>
            </nav>
    </div>
</template>

<script>
    export default {
        name : "MainView"
    }
</script>

<style scoped>

</style>