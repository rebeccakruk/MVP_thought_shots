<template>
    <div>
        <section v-for="qa in pollDetails" :key="qa.questionId">
            <v-btn @click="submitPoll()">Submit Responses</v-btn>
        </section>
    </div>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';
    export default {
        name: "AnswerBank",
        props: {
            pollInfo: Array
        },
        data() {
            return {
                poll: [],
                pollDetails: []
            }
        },
        methods: {
            getQandAs() {
                this.bank
            }
        },
        mounted () {
            this.bank = cookies.get('userSelection');
            for (let qa of this.pollDetails) {
                console.log(qa);
                this.getQandAs();
            }
        },
    }
</script>

<style scoped>

</style>