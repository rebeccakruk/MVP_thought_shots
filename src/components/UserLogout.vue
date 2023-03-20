<template>
    <div>
        <v-form>
            <v-card-actions>
            <router-view to="/"><v-btn @click="logout()">Logout</v-btn></router-view>
            </v-card-actions>
        </v-form>
    </div>
</template>

<script>
// import router from '@/router';
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
            this.$router.go('/')
        }
    }, 
    beforeMount() {
        this.token = cookies.get('token');
        this.userId = cookies.get('userId');
    }
}

</script>

<style scoped></style>