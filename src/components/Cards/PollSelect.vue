<template>
    <div>
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
                option: String,
        }
    }
</script>

<style scoped>

</style>