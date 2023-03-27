<template>
    <div>
        <h2>Poll ID # {{ $route.params.pollId }}</h2><span>{{ this.pollInfo.title }}</span>
        <TakePoll v-bind:pollInfo="pollInfo" />
                    <!-- <TakePoll v-for="question in pollInfo" :key="question.questionId" v-bind:pollInfo="question" :title="poll.title" :question="poll.question" :responseOption="poll.responseOption"/> -->
    <v-btn @click="getQandAs()">See all polls</v-btn>
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
            user_id: ""
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
                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/poll-response-user`,
                method: "GET",
                params: {
                    pollId: this.$route.params.pollId,
                    "token": this.token
                },
            }).then((response) => {
                this.pollInfo = response.data
                console.log(this.pollInfo);
                console.log(response.data[0].answers[0].responseOption);
            }).catch((error) => {
                console.log(error);
            })
        },
        beforeMount() {
            this.token = cookies.get('token')
            this.user_id = cookies.get('userId')
        },
        mounted() {
        this.getQandAs();
        console.log(this.user_id);
        console.log(this.token);
    },

    }
}
</script>

<style scoped>

</style>