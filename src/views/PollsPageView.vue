<template>
    <div>
        <!-- there will be a listing here of available polls and the option to participate in one -->
        <!-- this will be prettier than the categories. OR do the polls appear under the selection on the mainview. ... design categories -->
        <!-- <PollSelect v-for="question in poll" :key="question.id" :response="question.responseOptionId"/> -->
        <!-- <div v-for="question in data" :key="question.questionId" v-bind="question">
            <h4>{{ question }}</h4>
            <v-btn>{{ responseOption }}</v-btn>
        </div> -->
        <h1>WHAT THE HECK REBECCA</h1>
                <v-container class="green lighten-5">
                <!-- <v-row>
                <v-col md="3">
                    <v-card :key="question.questionId"
                        :questionId="question.questionId"
                        class="pa-2"
                        outlined
                        red
                        tile v-for="question in poll.filter(({ questionId }) => !uniqueValue[questionId] && (uniqueValue[questionId] = true))"
                    >
                    
                    <h3>{{ question.question }}</h3>
                    
                    <div v-for="option in pollInfo.filter(({questionId}) => !uniqueValue[questionId] && (uniqueValue[questionId] = true))" 
                        :key="option.questionId"
                        :responseId="option.responseId" 
                        v-bind="pollInfo.questionId">
                        <h4>{{ responseOfption[0] }}</h4>
                    </div>
                
                    </v-card>
                </v-col>
            
                </v-row> -->
            </v-container>
        <div v-for="ask in pollInfo.filter(({ questionId }) => !uniqueValue[questionId] && (uniqueValue[questionId] = true))" :key="ask.questionId" v-bind="ask">
        <h2>{{ ask.question }}</h2>
        <!-- <div 
        v-for="option in pollInfo.filter(({ responseOptionId }) => !uniqueValue[responseOptionId] && (uniqueValue[responseOptionId] = true))"
        :key="option.responseOptionId" v-bind="pollInfo.questionId"><h3>{{ option.responseOption }}</h3></div>
    </div> -->
    </div>
        <!-- this is where the poll you've chosen will appear on a click -->
</div>
    <!-- </div> -->
</template>

<script>
// import PollSelect from '@/components/Cards/PollSelect.vue';
import axios from 'axios';
import cookies from 'vue-cookies';
    export default {
    name: "PollsView",
    components: { 
        // PollSelect 
    },
    data() {
        return {
            uniqueValue: {},
            pollInfo: [
                {
                category: "",
                categoryName: "",
                createdAt: "",
                description: "",
                expiry: "",
                pollId: 92,
                pollOwner: "",
                title: "",
                question: "",
                token: "",
                questionId: "",
                responseOption: "",
                responseOptionId: "",
            }
        ],
            token: "",
            opts: "",
            responses: []
    }
},
    methods: {
    getQandAs() {
        axios.request({
            url: `${process.env.VUE_APP_BASE_DOMAIN}/api/poll-user`,
            method: "GET",
            params: {
                // "token": this.pollInfo.token,
                "pollId": 92,
                "token" : this.token
            },
            }).then((response) => {
                this.pollInfo = response.data
                this.pollInfo.questionId = response.data.questionId
                this.opts = response.data.responseOption
                this.responses.push(this.responseOptionId)
                console.log(this.pollInfo.questionId);
            }).catch((error) => {
                console.log(error);
            })
    },
    beforeMount () {
        this.pollInfo.token = cookies.get('token');
    },
},mounted () {
    this.token = cookies.get('token')
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