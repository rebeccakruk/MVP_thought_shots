<template>
    <div class="home">
        <h1>Thought-shots</h1>
        <PollsList/>
    <h1>this is where we do the work</h1> 
            <nav>
                <router-view />
                <!-- <DropDown v-if="isLoggedIn()"/> -->
                <v-btn text-decoration="none" v-if="!isLoggedIn()" @click="login()" medium ><router-link to="/login">Login</router-link></v-btn>
                <v-btn v-if="!isLoggedIn()"  @click="register()" medium><router-link to="/register">Sign up</router-link></v-btn>
                <v-btn v-if="isLoggedIn()" @click="getInfo()" small><router-link to="/userprofile">View account info</router-link></v-btn>
                <v-btn v-if="isLoggedIn()" @click="logout()" small><router-link to="/logout">Logout</router-link></v-btn>
            </nav>
    </div>
</template>

<script>
// import DropDown from '../components/DropDown.vue';
import cookies from 'vue-cookies';
import PollsList from '@/components/Cards/PollsList.vue';

    export default {
    name: "MainView",
    components: {
            // DropDown,
            PollsList
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
.noUnderline {
    text-decoration: none;
}
</style>