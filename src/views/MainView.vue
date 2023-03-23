<template>
    <div class="black" :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }" id="inspire">
                        <!-- <v-btn v-if="!isLoggedIn()" @click="login()" small color="whitesmoke" class="text-decoration-none" >
                        <router-link class="text-decoration-none" to="/userpage" >
                                Login
                            <v-icon class="text-decoration-none" append-icon-outer color="black">
                                    mdi-login-variant
                            </v-icon>
                        </router-link>
                    </v-btn>

                    <v-btn v-if="!isLoggedIn()" 
                        @click="register()"
                        small 
                        color="whitesmoke" 
                        class="text-decoration-none">
                            <router-link
                                class="text-decoration-none" 
                                to="/userpage">
                                Sign up
                            </router-link>
                    </v-btn> -->        <HeaderComp/>
            <div max-height="20vh">
                <v-container v-if="!isLoggedIn()">
                    Welcome to thought-shots! Please login or sign up to view the polls you've created or participated in.
                </v-container>

                <v-container v-if="!isLoggedIn()">
                    You must be logged in to create a poll.
                </v-container>
            </div>
            <nav>
                <v-container v-if="isLoggedIn()">
                    <UserPollsList />
                    <CreatePolls />
                </v-container>
                <router-view />
                <PollsList/>
            </nav>

    </div>
</template>

<script>
import UserPollsList from '../components/UserPollsList.vue';
import CreatePolls from '../components/Cards/CreatePolls.vue';
import PollsList from '@/components/Cards/PollsList.vue';
import HeaderComp from '@/components/HeaderComp.vue';

import cookies from 'vue-cookies';

    export default {
    name: "MainView",
    components: {
        HeaderComp,
        UserPollsList,
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