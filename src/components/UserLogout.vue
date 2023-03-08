<template>
    <div>
        <v-form>
            <v-btn @click="logout()"><router-view to="/"></router-view>Logout</v-btn>
        </v-form>
    </div>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies'
export default {
    name: "UserLogout",
    data() {
        return {
                token: "",
                userId: ""
        }
    },
    methods: {
        logout() {
            axios.delete(
                process.env.VUE_APP_BASE_DOMAIN + `/api/user-login`,
                this.token
            ).then(() => {
            }).catch((error) => {
                console.log(error);
            })
            cookies.remove('token')
            cookies.remove('userId')
        }
    }, 
    beforeMount() {
        this.token = cookies.get('token');
        this.userId = cookies.get('userId');
    },
    mounted () {
        console.log(this.token);
        console.log(this.userId);
    },
}
</script>

<style scoped></style>