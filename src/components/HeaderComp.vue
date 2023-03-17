<template>
    <div class="home">
    
        <nav>
        <router-view/>
                <h1>Thought-shots</h1>
        <v-layout align-center justify-right>
            <v-spacer>
                <v-btn v-if="!isLoggedIn()" @click="login()" small fixed right class="text-decoration-none" >
                        <router-link class="text-decoration-none" to="/login" black>Login<v-icon class="text-decoration-none" append-icon-outer color="black">mdi-login-variant</v-icon>
                        </router-link>
                </v-btn>

                <v-btn v-if="!isLoggedIn()"  @click="register()" small right class="text-decoration-none">
                    <router-link class="text-decoration-none" to="/register">Sign up</router-link>
                </v-btn>
            </v-spacer>
            </v-layout>
            </nav>
    </div>
</template>

<script>
import cookies from 'vue-cookies'

    export default {
    name: "MainView",
    components: {
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
    mounted() {
        this.isLoggedIn();
    },
}
</script>

<style scoped>
.div {
    background-color: aquamarine;
}
</style>

<!-- Would like to remind the importance of using debuggers. Can do both the front and the back. Your backend behaves as it would when you send a postman request. If something is not working and you need to figure it out.
Debugging is important and as projects get more complicated, debuggers are critial for pinpointing what sucks. The first step is to dtermine which part is failing. If front, can be before or after, or is the backend not processing the information correctly
or is it the DB that's not doing proper procedures. Or is it the front end not processing the information correctly and requires debugging. -->

<!-- related to vuetify. Vuetify has very useful tools that allow you to see examples of the code, with a link to the code pen to play around with it before copy pasting it to your own version. This will help to be able to determine what adding or removing stuff will do
 -->