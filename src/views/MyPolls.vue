<template>
    <div>
        <h1>MINE POLLS</h1>
        {{ myStuff.MyPolls }}
    </div>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';

    export default {
        name: "MyPolls",
        data() {
            return {
                myStuff: {
                    pollId : "",
                    title: "",
                }
            }
        },
        methods: {
            myPolls() {
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
        beforeMount () {
            this.token = cookies.get('token');
        },
    }
</script>

<style scoped>

</style>