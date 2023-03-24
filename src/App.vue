<template>
     <v-app :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }" >
      <v-tool-bar bottom class="black">
        <div v-if="!isLoggedIn()">
                    <v-btn small color="whitesmoke" class="text-decoration-none" >
                        <router-link class="text-decoration-none" to="/userpage" >
                                Login
                            <v-icon class="text-decoration-none" append-icon-outer color="black">
                                    mdi-login-variant
                            </v-icon>
                        </router-link>
                    </v-btn>

                    <v-btn 
                        small 
                        color="whitesmoke"
                        class="text-decoration-none">
                            <router-link
                                class="text-decoration-none"
                                to="/userpage">
                                Sign up
                            </router-link>
                    </v-btn>
                </div>
                <div v-else>
                    <DropDown/>
                </div>
            </v-tool-bar>
            <section height="20vh">
            <HeaderComp/>
            </section>
        <v-main>
        <v-container fluid>
          <router-view></router-view>
        </v-container >
      </v-main>
            <FooterComp/>

    </v-app>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
import DropDown from './components/DropDown.vue';
import FooterComp from './components/FooterComp.vue';
import cookies from 'vue-cookies';

export default {
  name: 'App',
components: {
    HeaderComp,
    DropDown,
    FooterComp
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
  data: () => ({
    //
  }),
    // },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');
</style>
<style scoped>
#app {
    background-color: black;
    margin: 0%;
    padding: 0%;
    color: whitesmoke;
    position: relative;
}
body, html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
}
body {
    background-color: black;
    color: whitesmoke;
}
.black {
    background-color: black;
}
</style>
