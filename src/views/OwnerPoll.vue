<template>
    <div :class="{ 'pa-e': $vuetify.breakpoint.smAndUp }">
        <h2> {{ $route.params.pollId }}</h2>
        <UserPollsList/>
      
        <v-btn @click="edit()">Edit</v-btn>
        <EditPoll/>
        
    </div>
</template>

<script>
import router from '@/router';
import UserPollsList from '@/components/UserPollsList.vue';
import EditPoll from '@/views/EditPoll.vue';
    export default {
        name: "OwnerPoll",
        components : {
            UserPollsList,
            EditPoll
    },
methods: {
    edit() {
        router.push('/editpoll/' + this.UserPollsList.pollId)
        console.log(this.UserPollsList.pollId);
    }
},
mounted () {
    
},
    }
</script>

<style scoped>

</style>