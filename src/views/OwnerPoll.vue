<template>
<v-app>
        <UserPollsList/>
        
        <!-- <PollSelect/> -->
   </v-app>
</template>

<script>
import UserPollsList from '@/components/UserPollsList.vue';
// import PollSelect from '@/components/Cards/PollSelect.vue';
    export default {
        name: "OwnerPoll",
        components : {
            // PollSelect,
            UserPollsList
        }      
    }
</script>

<style scoped>

</style>