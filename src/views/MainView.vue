<template>
    <div class="home">
            <h1>Thought-shots</h1>
            <nav>
                <HeaderComp />
                <DropDown v-if="isLoggedIn()"/>
                <UserDash/>
                <!-- <UserDash v-for="(user, index) in userInfo" :key="index" :username="user"></UserDash> -->
                <PollsList/>
                <router-view />
            </nav>
            <FooterComp />
        </div>
</template>

<script>
import HeaderComp from '../components/HeaderComp.vue';
import DropDown from '../components/DropDown.vue';
// import UserProfile from '../components/UserProfile.vue';
import PollsList from '@/components/Cards/PollsList.vue';
import UserDash from '@/components/UserDash.vue';
import FooterComp from '../components/FooterComp.vue';
import cookies from 'vue-cookies';

    export default {
    name: "MainView",
    components: {
    HeaderComp,
    DropDown,
    PollsList,
    FooterComp,
    UserDash,
    // UserProfile
},
        methods: {
            isLoggedIn() {
            let user = cookies.get('token')
            if (user == null) {
                return false
            } else {
                return true
            }
        }
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