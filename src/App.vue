<template>
     <v-app :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }" :dark="darkTheme" id="inspire">
      <v-app-bar app class="black">
    <v-btn v-if="!isLoggedIn()" @click="goToLogin()" small color="whitesmoke" class="text-decoration-none" >
                        <router-link class="text-decoration-none" to="/userpage" >
                                Login
                            <v-icon class="text-decoration-none" append-icon-outer color="black">
                                    mdi-login-variant
                            </v-icon>
                        </router-link>
                    </v-btn>

                    <v-btn v-if="!isLoggedIn()" 
                        @click="goToRegister()"
                        small 
                        color="whitesmoke" 
                        class="text-decoration-none">
                            <router-link
                                class="text-decoration-none" 
                                to="/userpage">
                                Sign up
                            </router-link>
                    </v-btn>
      </v-app-bar>
      <v-container>
        <HeaderComp/>
      </v-container>
  
        <v-main>
        <v-container>
          <router-view></router-view>
        </v-container >
      </v-main>
       <v-footer color="green" dark app>
<FooterComp/>
       </v-footer>
    </v-app>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
import FooterComp from './components/FooterComp.vue';
import cookies from 'vue-cookies';
import router from './router';
export default {
  name: 'App',
components: {
    HeaderComp,
    FooterComp
},
  data: () => ({
    //
  }),
    methods: {
        isLoggedIn() {
            let user = cookies.get('token')
            if (user == null) {
                return false
            } else {
                return true

            }
        },
        beforeMount() {
            this.isLoggedIn();
        },
        goToLogin() {
            router.push('/userpage')
        },
        goToRegister() {
            router.push('/userpage')
        }
    },
    mounted() {
        this.isLoggedIn();
    },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');
</style>
<style scoped>

.black {
    background-color: black;
    color: whitesmoke;
}
</style>
