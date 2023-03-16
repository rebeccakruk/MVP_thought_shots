<template>
    <div @onload="$emit('getDash')">
        <p>Welcome, {{ username }}</p>
        <p>{{ noLogin }} </p>

    </div>
</template>

<script>
    export default {
        name : "UserDash",
        props: {
            username: String,
            },
        data() {
            return {
                noLogin: "Welcome! You do not currently have any polls. Please register or sign in to create or access your polls."
            }
        },
        mounted () {
            this.$root.$emit('getDash', this.username);
        },
    }

</script>

<style scoped>
.div {
    background-color: pink;
}
</style>