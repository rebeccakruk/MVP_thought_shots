<template>
    <div :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }" >
    <v-card
        tile
        >
        <v-list dense
        >
            <h4>Complete Poll</h4>
            <v-list-item-group
            color="primary"
            >
            {{this.pollInfo[0].title}}
            <!-- new question in the poll -->
            <v-list-item
                v-for="question in this.pollInfo" :key="question.questionId"  
                >
                <v-list-item-icon>
                <v-icon
                >
                {{ question.question }}
                </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    
                    <v-list-item
                    v-for="answer in question.answers"
                    :key="answer.answerId"
                    v-model="selected"
                    @click="add_selection(question.questionId, answer.answerId)"
                    >
                    {{ answer.responseOption }}
                </v-list-item>
                </v-list-item-content>
            </v-list-item>
            </v-list-item-group>
        </v-list>
<v-btn @click="submitPoll()" >Submit</v-btn>
        </v-card>
    </div>

</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';
    export default {
        name : "TakePoll",
        props: {
        pollInfo: Array,
        
        },
        data() {
            return {
                selected: [],
                responses: [],
                pollSubmission: [],
                userId: ""
            }
                },
                methods: {
                    add_selection(questionId, answerId) { 
                        this.response = {
                            answerId: answerId,
                            questionId: questionId,
                            userId: this.userId
                        }
                        this.responses.push(this.response)
                        
                        console.log(this.responses, 'response');
                        
                    },
    submitPoll() {
            this.pollSubmission = JSON.stringify(this.responses)
            console.log(this.pollSubmission);
            // let userId = cookies.get('userId')
            // userId = JSON.stringify(this.userId)
            // console.log(userId);
            axios.request({
                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/poll-response-user`,
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                    },
                data: {
                    "pollSubmission" : this.pollSubmission,
                    // "userId" : this.userId
                },
                
            }).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })
        },

                // post here
                // or emit here and manage the cart.
                // handle cart here
        },
        beforeMount () {
            this.userId = cookies.get('userId');
            console.log(this.userId);
        },
        mounted () {
            console.log(this.userId);
        }
    }
        
</script>

<style scoped>

</style>