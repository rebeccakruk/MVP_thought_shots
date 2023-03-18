<template>
    <div>
        <v-form>
            <v-btn @click="logout()"><router-view to="/"></router-view>Logout</v-btn>
        </v-form>
    </div>
</template>

<script>
import router from '@/router';
import axios from 'axios';
import cookies from 'vue-cookies'
export default {
    name: "UserLogout",

    methods: {
        logout() {
            axios.request({
                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/user-login`,
                method: "DELETE",
                data: {
                "token": this.token
            }
        }).then((response) => {
            console.log(response, 'logout successful');
            }).catch((error) => {
                console.log(error);
            })
            cookies.remove('token')
            cookies.remove('userId')
            cookies.remove('questionId')
            cookies.remove('newPoll')
            router.push('/')
        }
    }, 
    beforeMount() {
        this.token = cookies.get('token');
        this.userId = cookies.get('userId');
    }
}

</script>

<style scoped></style>