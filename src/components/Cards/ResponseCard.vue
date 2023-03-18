<template>
    <div>
        response
        <v-card>
            <div>
                <h2>{{ question }}</h2>
            </div>
                <v-text-field
                                                type="text"
                                                label="response option"
                                                outline

                                                v-model="responseOption">
                                        </v-text-field>   
                                            <v-card-actions>
                                        <v-btn @click="addToCbank()">Add</v-btn>
                                        </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import cookies from 'vue-cookies';
    export default {
        name: "ResponseCard",
        props: {
            "question": String,
            "questionId": Number
        },
        data() {
            return {
                responseOption: ""
            }
        },
        methods: {
            addToCbank() {
                this.$emit('addToCBank', this.questionId)
                this.responseOption = cookies.set('response')
            }
        },
        mounted () {
            this.formData.question = this.question;
            this.formData.questionId = this.questionId;
        },
    }
</script>

<style scoped>

</style>