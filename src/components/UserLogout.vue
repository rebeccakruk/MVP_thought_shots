<template>
    <div>
        <v-form>
            <v-btn @click="logout()"><router-view to="/">Logout</router-view></v-btn>
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
            formData: {
                token: ""
            }
        }
    },
    methods: {
        login() {
            axios.delete(
                process.env.VUE_APP_BASE_DOMAIN + `/api/user-login`,
                this.formData
            ).then(() => {
            }).catch((error) => {
                console.log(error);
            })
        }
    }, 
    beforeMount() {
        this.token = cookies.get('token');
    },
}
</script>

<style scoped></style>