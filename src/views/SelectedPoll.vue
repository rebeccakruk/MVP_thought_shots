<template>
    <div>
        <h2>Poll ID # {{ $route.params.pollId }}</h2>
        <TakePoll v-bind:pollInfo="pollInfo" />
    </div>
</template>

<script>
import TakePoll from '@/components/TakePoll.vue';
import axios from 'axios';
import cookies from 'vue-cookies';
    export default {
    name: "SelectedPoll",
    components: {
        TakePoll,
    },
    data() {
        return {
            pollInfo: [],
            token: "",
        }
    },
    methods: {
        // getSelectedPoll() {
        //     console.log(this.$route.params.pollId);
        //     axios.request({
        //         url: `${process.env.VUE_APP_BASE_DOMAIN}/api/poll-user`,
        //         method: "GET",
        //         params: {
        //             pollId: this.$route.params.pollId,
        //             token: this.token
        //         }
        //     }).then((response) => {
        //         this.pollData = response.data;
        //         console.log(response.data);
        //     }).catch((error) => {
        //         console.log(error);
        //     }).finally(() => {
        //         console.log("no polls here");
        //     });
            getQandAs() {
            axios.request({
                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/poll-user`,
                method: "GET",
                params: {
                    pollId: this.$route.params.pollId,
                    "token": this.token
                },
            }).then((response) => {
                this.pollInfo = response.data
                console.log(this.pollInfo);
            }).catch((error) => {
                console.log(error);
            })
        },
        beforeMount() {
            this.token = cookies.get('token')
            // this.poll_id = cookies.get('pollId')
        },
        mounted() {
        this.getQandAs();
    },

    }
}
</script>

<style scoped>

</style>