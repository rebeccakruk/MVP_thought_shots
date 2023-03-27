<template>
    <div>

                <v-card
                            class="d-flex justify-center ma-4">
                                <router-link to="/"><img max-height="300" min-height="300" src="../assets/head_drawing.png"
                                    alt="logo">
                                </router-link>
                                <router-link to="/" style="text-decoration:none"><h1>Thought-shots.</h1></router-link>
                            </v-card>
                            <v-btn max-width="100" @click="logout()">Logout</v-btn>
        

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