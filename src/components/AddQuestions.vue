<template>
    <v-app>
        <p>HI. This is where you add questions and options.</p>
    <div>
                                <h2>{{ newQuestion }}</h2>
                           
                            <div v-for="(option, index) in optionsList" :key="index" v-bind="option"><h3>{{ optionsList.option }}</h3></div>
                            <h4>{{ optionsList }}</h4>
                            </div>
        <v-card>
                <v-form>
                    <div v-if="newQuestion == ''">
                    <v-text-field
                            outline
                            label="question"
                            type="text"
                            v-model="formData.question">
                    </v-text-field>
        
                    <v-card-actions>
                        <v-btn
                            small
                            @click="addQuestion()" 
                            color="success"
                            >Add
                        </v-btn>
                    </v-card-actions>
    </div>
                        <v-text-field
                                outline
                                label="response option"
                                type="text"
                                v-model="formData.responseOption">               
                        </v-text-field>   
                
                    <v-card-actions>
                        <v-btn
                            small
                            @click="addOption()"
                            color="success"
                            >Add
                        </v-btn>
                    </v-card-actions>
                    
                    <v-btn
                        small
                        @click="nextQuestion()"
                        color="success"
                        >Next question?
                    </v-btn>

                    <v-btn
                        small
                        @click="closePoll()"
                        color="error"
                        >Poll complete
                    </v-btn>
                </v-form>
        </v-card>

    </v-app>
</template>

<script>
import router from '@/router';
import axios from 'axios';
import cookies from 'vue-cookies';


    export default {
        name : "AddQuestions",
        data() {
            return {
                formData: {
                    question: "",
                    token: "",
                    pollId: "",
                    questionId: "",
                    responseOption: "",
                },
                newQuestion: "",
                newOption: "",
                optionsList: []
        }
    },
        methods: {
                    isLogIn() {
            if (cookies.get('token')) {
                return true
            } else {
                return false
            }
        },
        addQuestion() {
                axios.post(
                    process.env.VUE_APP_BASE_DOMAIN + '/api/poll-questions',
                    this.formData
                ).then((response) => {
                    this.newQuestion = response.data.question
                    this.formData.questionId = response.data.questionId
                    console.log(this.newQuestion, this.formData.questionId)

                }).catch((error) => {
                    console.log(error);
                })
        },
        addOption() {
                axios.post(
                    process.env.VUE_APP_BASE_DOMAIN + '/api/poll-response',
                    this.formData
            ).then((response) => {
                console.log(response)
                this.newOption = response.data.responseOption
                this.optionsList.push(this.newOption)
            }).catch((error) => {
                console.log(error);
            })
        },
        nextQuestion() {
            this.formData.question = "";
            this.formData.questionId = "";
            this.formData.responseOption = "";
            this.newQuestion = "";
            this.newOption = "";
            this.optionsList = [];
        },
        closePoll() {
            this.formData = "";
            this.data = "";
            router.push('/')
        }
        },
        mounted () {
            this.formData.token = cookies.get('token');
            this.formData.pollId = cookies.get('newPoll');
        },
    }

</script>

<style scoped>

</style>