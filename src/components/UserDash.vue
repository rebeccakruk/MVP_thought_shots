<!-- <template>
    <div @onload="$emit('getInfo')">
        <p>Welcome, {{ username }}</p>


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
            this.$emit('getInfo')
        },
    }

</script>

<style scoped>
.div {
    border: 3px, black;
    background-color: hotpink;
}
</style> -->