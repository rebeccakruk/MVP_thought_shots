<template>
    <div :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
        <v-card>
            <div>
                <h1>{{ title }}</h1>
                <h3>{{ description }}</h3>
            </div>
            <div>
                <h4>{{ question }}</h4>
                <li>{{ responseOption }}</li>
            </div>
        </v-card>
        <h2>PICKED ME!</h2>
    </div>
</template>

<script>
    export default {
        name: "PollSelect",
        props: {
                category: String,
                categoryName: String,
                createdAt: String,
                description: String,
                expiry: String,
                pollId: Number,
                pollOwner: String,
                title: String,
                question: String,
                questionId: Number,
                responseOption: String,
                responseOptionId: Number
        }
    }
</script>

<style scoped>

</style>