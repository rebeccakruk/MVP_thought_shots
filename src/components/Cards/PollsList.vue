<template>
    <div>
        <h1>{{ myPolls.title }}</h1>
        
        {{ myPolls.description }}
        {{ myPolls.category }}
    </div>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';
    export default {
        name: "PollsList",
        props: {
            myPolls: {
                title: String,
                description: String
            }
        },
        data() {
            return {
                myPfolls: {
                    title: "",
                    description: "",
                    createdAt: "",
                    expiry: "",
                    pollId: "",
                    pollOwner: "",
                    category: ""
                },
                token: ""
            }
        },
            methods: {
                getPolls() {
                    axios.request({
                    url: `${process.env.VUE_APP_BASE_DOMAIN}/api/poll`,
                    method: "GET",
                    data: {
                        "token": this.token
                }
                }).then((response) => {
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
                })
        }
    },
    beforeMount() {
        this.token = cookies.get('token');
    },
    mounted () {
        this.getPolls();
    },
}
</script>

<style scoped>

</style>