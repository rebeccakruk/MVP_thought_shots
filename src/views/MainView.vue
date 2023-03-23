<template>
    <div class="black" :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
            <div max-height="20vh">
                <v-container v-if="!isLoggedIn()">
                    <v-divider></v-divider>
                    <h4>You must be logged in to create a poll.</h4>
                </v-container>
            </div>
            <nav>
                <v-container v-if="isLoggedIn()">
                    <!-- <UserPollsList /> -->
                </v-container>
                <router-view />
                <CreatePolls />
                <PollsList/>
            </nav>

    </div>
</template>

<script>
// import UserPollsList from '../components/UserPollsList.vue';
import CreatePolls from '../components/Cards/CreatePolls.vue';
import PollsList from '@/components/Cards/PollsList.vue';
// import HeaderComp from '@/components/HeaderComp.vue';

import cookies from 'vue-cookies';

    export default {
    name: "MainView",
    components: {
        // HeaderComp,
        // UserPollsList,
        PollsList,
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
.black {
    background-color: black;
    color: whitesmoke;
}
</style>