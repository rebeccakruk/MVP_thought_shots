<template>
    <v-app>
<div>
            <HeaderComp />
            <v-container v-if="!isLoggedIn()">
                Welcome to thought-shots! Please login or sign up to view the polls you've created or participated in.
            </v-container>
            <v-container v-if="!isLoggedIn()">
                You must be logged in to create a poll
            </v-container>
            <nav>
                <v-container v-if="isLoggedIn()">
                    <DropDown /> 
                    <UserProfile />
                    <CreatePolls />
                </v-container>
                <PollsList/>
                <router-view />
            </nav>
            <FooterComp />
        </div>
        </v-app>
</template>

<script>
import HeaderComp from '../components/HeaderComp.vue';
import DropDown from '../components/DropDown.vue';
import UserProfile from '../components/UserProfile.vue';
import CreatePolls from '../components/Cards/CreatePolls.vue';
import PollsList from '@/components/Cards/PollsList.vue';
import FooterComp from '../components/FooterComp.vue';
import cookies from 'vue-cookies';

    export default {
    name: "MainView",
    components: {
    HeaderComp,
    DropDown,
    UserProfile,
    PollsList,
    FooterComp,
    CreatePolls
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
        beforeMount () {
            this.isLoggedIn();
        },
        },
        mounted () {
            this.isLoggedIn();
        },
    }
</script>

<style scoped>
.noLogIn {
    border: black;
}
</style>