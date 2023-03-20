<template>
    <div id="app">
        <h1>WHAT THE HECK REBECCA</h1>
        <h2>{{ this.question }}</h2>
        <v-app id="inspire"><v-app id="inspire">
        <div>
            <v-data-table
                :headers="headers"
                :items="desserts"
                class="elevation-1"
            >
            <template >
                <v-simple-checkbox
                    v-model="this.responseOption"
                    v-on="on"
            ></v-simple-checkbox>
            </template>
        </v-data-table>
        </div>
    </v-app>
        <!-- there will be a listing here of available polls and the option to participate in one -->
        <!-- this will be prettier than the categories. OR do the polls appear under the selection on the mainview. ... design categories -->
        <!-- <PollSelect v-for="question in poll" :key="question.id" :response="question.responseOptionId"/> -->
        <!-- <div v-for="question in data" :key="question.questionId" v-bind="question">
            <h4>{{ question }}</h4>
            <v-btn>{{ responseOption }}</v-btn>
        </div> -->
        <!-- <TakePoll v-for="poll in pollInfo" :key="poll.pollId" :title="poll.title" :responseOption="poll.responseOption" :question="poll.question"/>
                <v-container class="green lighten-5"> -->

        <v-data-table
        :headers="this.headers"
        class="elevation-1"
        >
                    {{ title }}
        <v-simple-checkbox
        v-model="responseOption"
        ></v-simple-checkbox>

        </v-data-table> 
            <v-row>
                <v-col md="3">
                    <v-card :key="question.questionId"
                        :questionId="question.questionId"
                        class="pa-2"
                        outlined
                        red
                        tile v-for="question in pollInfo.filter(({ questionId }) => !uniqueValue[questionId] && (uniqueValue[questionId] = true))"
                    >

                    <h3>{{ question.question }}</h3>
                    
                    <div v-for="option in data.filter(({questionId}) => !uniqueValue[questionId] && (uniqueValue[questionId] = true))" 
                        :key="option.questionId"
                        :responseId="option.responseId" 
                        >
                        <h4>{{ data.responseOption[0] }}</h4>
                    </div>
                
                    </v-card>
                </v-col>
            
                </v-row>
        <!-- <v-data-table v-for="ask in pollInfo.filter(({ questionId }) => !uniqueValue[questionId] && (uniqueValue[questionId] = true))" :key="ask.questionId" v-bind="ask">
        <h2>{{ ask.question }}</h2>
            
        </v-data-table>
        <v-data-table v-for="question in pollInfo" :key="question.questionId" :headers="question.headers"
        >
        <v-check-box
        v-model="headers.responseOption"></v-check-box> </v-data-table>  -->
        <div 
        v-for="option in data.filter(({ responseOptionId }) => !uniqueValue[responseOptionId] && (uniqueValue[responseOptionId] = true))"
        :key="option.responseOptionId" v-bind="option.questionId"><h3>{{ option.responseOption }}</h3></div>
    </v-app>
    </div>
    
    <!-- this is where the poll you've chosen will appear on a click -->
    
    <!-- </div> -->
</template>

<script>
// import PollSelect from '@/components/Cards/PollSelect.vue';
// import TakePoll from '@/components/TakePoll.vue';
import axios from 'axios';
import cookies from 'vue-cookies';
    export default {
    name: "PollsView",
    components: {
    // TakePoll
},
    data() {
        return {
            uniqueValue: {},
                headers: [
                    {
                        text: this.title,
                        align: 'start',
                        sortable: false,
                        value: this.responseId
                    },
                ],
                    responseOption: "",
                    pollId: "",
                    question: "",
                    responseId: "",
                    questionId: "",
                    description: "",
                    token: ""
    }
},
    methods: {
    getQandAs() {
        axios.request({
            url: `${process.env.VUE_APP_BASE_DOMAIN}/api/poll-user`,
            method: "GET",
            params: {
                "pollId": 92,
                "token" : this.token
            },
            }).then((response) => {
                console.log(response.data)
                this.pollInfo = response.data
            }).catch((error) => {
                console.log(error);
            })
    },
    beforeMount () {

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