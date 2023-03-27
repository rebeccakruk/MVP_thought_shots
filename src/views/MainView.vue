<template>
    <div class="black" :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
            <div max-height="20vh">
                <v-container v-if="!isLoggedIn()">
                    <v-divider></v-divider>
                    <h4>You must be logged in to create a poll.</h4>
                </v-container>
            </div>
            <nav>
                <router-view />
                <CreatePolls />
                <PollsList/>
            </nav>

    </div>
</template>

<script>
import CreatePolls from '../components/CreatePolls.vue';
import PollsList from '@/components/PollsList.vue';
import cookies from 'vue-cookies';

    export default {
    name: "MainView",
    components: {
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