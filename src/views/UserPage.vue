<template>
    <div>
        <UserLogin/>
        <UserLogout v-if="isLoggedIn()"/>
    </div>
</template>

<script>
import UserLogin from '@/components/UserLogin.vue';
import UserLogout from '@/components/UserLogout.vue';

import cookies from 'vue-cookies';
export default {
        name: "UserPage",
        components: {
            UserLogin,
            UserLogout,
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

</style>