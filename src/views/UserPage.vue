<template>
    <div>
        <UserLogin/>
        <UserLogout/>
    </div>
</template>

<script>
import UserLogin from '@/components/UserLogin.vue';
import UserLogout from '@/components/UserLogout.vue';
export default {
        name: "UserPage",
        components: {
            UserLogin,
            UserLogout
        },
    }
</script>

<style scoped>

</style>