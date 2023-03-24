<template>
    <div id="app">
        <v-card>
            <h2>Poll ID # {{ $route.params.pollId }}</h2>
            <h2>{{ pollInfo.title }}</h2>
            <!-- <TakePoll v-for="question in pollInfo" :key="question.questionId" v-bind:pollInfo="question" :title="poll.title" :question="poll.question" :responseOption="poll.responseOption"/> -->
            <PollEdit v-if="isEditing" v-bind:pollInfo="pollInfo"/>
            <TakePoll v-bind:pollInfo="pollInfo"/>
            <v-btn @click="getQandAs">try it out!</v-btn>
        </v-card>
        
</div>
</template>
<script>
import TakePoll from '@/components/TakePoll.vue';
import PollEdit from '@/components/EditPoll.vue'
import axios from 'axios';
import cookies from 'vue-cookies';
    export default {
    name: "PollsPageView",
    components: {
    TakePoll,
    PollEdit
},
    data() {
        return {
            uniqueValue: {},
            pollInfo: [],
            isEditing: true
                // pollInfo:{
                //     title: "",
                //     responseId: [],
                //     responseOption: [],
                //     pollId: "",
                //     question: "",
                //     questionId: "",
                //     description: "",
                //     token: ""
                //     },
    }
},
    methods: {
    getQandAs() {
        axios.request({
            url: `${process.env.VUE_APP_BASE_DOMAIN}/api/poll-user`,
            method: "GET",
            params: {
                pollId: this.$route.params.pollId,
                "token" : this.token
            },
            }).then((response) => {
                this.pollInfo = response.data
                console.log(this.pollInfo);
            }).catch((error) => {
                console.log(error);
            })
            },
                beforeMount () {
                    this.token = cookies.get('token')
                    this.poll_id = cookies.get('pollId')
            },
        },mounted () {
            this.getQandAs();

    },
}
    
</script>

<style scoped>

</style>

<!-- okay where are we 
    1 on main page, whether token or not, all polls appear
    (need a search function)
    so when they login, they're still on the 'home' page
    """USER"""
    click a poll, goes to pollsview.
    that will pull up the list of polls based on the selected category.
    can pull up a poll, which takes from PollSelect
    that will take you through the questions where you add your choices.
    you must be logged in to participate
    you'll see a status of the poll once you complete it
    you'll be able to see polls you've participated in.
    """OWNER"""
    log in -> menu comes up
    1 sees all polls by category
    clicks myPolls, goes to their page
    which will have polls by date (maybe sortable?)
    results, and status (published or not)
    edit polls
    create new poll
    under hamburger menu you can go to MyPolls
    instead of change password here we're going to put Create Poll
    both of those options will take you to the same page 'MyPolls'
    when creating a poll - you must complete it when made
    you can return to edit it after there are questions to edit
    you can invite people with a link (might need specific poll id there - a uuid?)
    you can delete polls


    ></div> -->