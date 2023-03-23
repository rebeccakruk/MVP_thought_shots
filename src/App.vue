<template>
     <v-app :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
      <v-app-bar 
     flat color="black" class="d-flex flex-row-reverse">
                              <v-btn v-if="!isLoggedIn()" @click="login()" small color="whitesmoke" class="text-decoration-none" >
                                      <router-link class="text-decoration-none" to="/userpage" >
                                          Login
                                          <v-icon class="text-decoration-none" append-icon-outer color="black">
                                              mdi-login-variant
                                          </v-icon>
                                      </router-link>
                              </v-btn>

                              <v-btn v-if="!isLoggedIn()" 
                                  @click="register()" small color="whitesmoke" class="text-decoration-none">
                                      <router-link class="text-decoration-none" to="/userpage">
                                          Sign up
                                      </router-link>
                              </v-btn>
                              <DropDown v-if="isLoggedIn()"/>
                            </v-app-bar>
                            <HeaderComp/>
        <v-main>
        <v-container fluid>
          <router-view/>
        </v-container >
      </v-main>
       <v-footer app>
        <FooterComp/>
       </v-footer>
    </v-app>
</template>

<script>
import { RouterView } from 'vue-router';
import cookies from 'vue-cookies';
import DropDown from '@/components/DropDown.vue';
import FooterComp from '@/components/DropDown.vue';
import HeaderComp from '@/components/HeaderComp.vue';

export default {
  name: 'App',
  components: {
    RouterView,
    HeaderComp,
    FooterComp,
    DropDown
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
    this.$root.$on('refresh')
  },
  data: () => ({
    //
  }),
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
v-app {
        background-color: black;
        color: whitesmoke;
        margin: 0%;
        padding: 0%
}
</style>
