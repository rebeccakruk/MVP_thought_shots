<template>
  <v-app>
        <v-main>
        <router-link to="/">Home</router-link>
        <router-view/>
      </v-main>
      </v-app>
</template>

<script>
import { RouterView } from 'vue-router';
export default {
  name: 'App',

  data: () => ({
    //
  }),
      components: { RouterView }
};
</script>
