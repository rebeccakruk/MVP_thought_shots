<template>
    <div>
        <h2>Poll ID # {{ $route.params.pollId }}</h2>
        <p v-for="poll in polls" :key="poll.pollId">{{ poll.title }}</p>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        name : "SelectedPoll",
        data() {
            return {
                pollData: []
            }
        },
    methods: {
        getSelectedPoll() {
            axios.request({
                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/poll`,
                method: "GET",
                params: {
                    pollId: this.$route.params.pollId,
                    "token": userToken
                }
            }).then((response) => {
                this.minePolls = response.data
                console.log(response.data);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
                console.log('no polls here');
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