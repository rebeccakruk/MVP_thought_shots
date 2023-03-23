<template>
    <div :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
        <div v-if="!isLoggedIn()">
                            <v-card class="mx-auto" color="black"
                        ><v-row justify="center" class="my-4 text-center">
                            <router-link to="/"><v-img aspect-ratio max-width="267" src="../assets/logo_mvp.png"
                                alt="logo"></v-img>
                            </router-link>
                            <router-link to="/" style="text-decoration:none"><h1>Thought-shots. <h3>Find out what they (really) think.</h3></h1></router-link></v-row>
                            </v-card>
    </div>
    <div class="black" v-else>
                    <v-card color="black"
                        :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }" max-width="400"
                            class="mx-auto">
                            <router-link class="black" max-width="400" max-height="200" to="/"><v-img src="../assets/banner.png"
                                alt="logo"></v-img>
                            </router-link>
                            <router-link class="black" max-width="400" to="/" style="text-decoration:none"><h1>Thought-shots.</h1></router-link>
                            
                    </v-card>
    </div>
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

h1 {
    font-family: 'Special Elite', cursive;
    background-color: black;
    font-size: 2.75em;
    color: lightgray;
    width: "100%"
}
h3 {
    font-family: 'Special Elite' cursive;
    font-size: 1.5rem;
    background-color: black;
    color: lightgray;
}
</style>

<!-- Would like to remind the importance of using debuggers. Can do both the front and the back. Your backend behaves as it would when you send a postman request. If something is not working and you need to figure it out.
Debugging is important and as projects get more complicated, debuggers are critial for pinpointing what sucks. The first step is to dtermine which part is failing. If front, can be before or after, or is the backend not processing the information correctly
or is it the DB that's not doing proper procedures. Or is it the front end not processing the information correctly and requires debugging. -->

<!-- related to vuetify. Vuetify has very useful tools that allow you to see examples of the code, with a link to the code pen to play around with it before copy pasting it to your own version. This will help to be able to determine what adding or removing stuff will do
 -->