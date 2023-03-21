<template>
        <div :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }" :dark="darkTheme" id="inspire">
        <v-card
            class="overflow-y-auto"
            tile
            >
            <v-list dense
            >
                <h4>Edit Poll</h4>
                <v-list-item-group
                color="primary"
                >
                {{ pollInfo.title }}
                <!-- new question in the poll -->
                <v-list-item
                    v-for="question in pollInfo" :key="question.questionId"  
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
                        @click="ownerSelection(question.questionId, answer.answerId)"
                        >
                        {{ answer.responseOption }}
                    </v-list-item>
            
                    </v-list-item-content>
                </v-list-item>
                </v-list-item-group>
            </v-list>
            <v-btn @click="submitPoll">Submit Poll</v-btn>
            </v-card>
        </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "TakePoll",
    props: {
        pollInfo: Array,
    },
    data() {
        return {
            selected: "",

        }
    },
    methods: {
        ownerSelection(questionId, answerId) {
            console.log(answerId, 'answerId');
            this.answerBank.push({ answerId, questionId })
            console.log(questionId, 'questionId');
            console.log(this.selected, 'selected');
            console.log(this.answerBank, 'answerbank', this.answerBank);
        },
        submitEdits() {
            axios.post(
                process.env.VUE_APP_BASE_DOMAIN + '/api/user',
                this.answerBank
            ).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })
        },
        deletePoll() {
            axios.post(
                process.env.VUE_APP_BASE_DOMAIN + '/api/user',
                this.pollInfo.pollId
            ).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })
        // post here
        // or emit here and manage the cart.
        // handle cart here
    }}}
        
</script>

<style scoped>

</style>