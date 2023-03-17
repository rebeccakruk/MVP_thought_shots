<template>
    <div>
        <!-- there will be a listing here of available polls and the option to participate in one -->
        <!-- this will be prettier than the categories. OR do the polls appear under the selection on the mainview. ... design categories -->
        <PollSelect />
        <!-- this is where the poll you've chosen will appear on a click -->
    </div>
</template>

<script>
import PollSelect from '@/components/Cards/PollSelect.vue';

    export default {
    name: "PollsView",
    components: { 
        PollSelect 
    }
}
</script>

<style scoped>

</style>

<!-- okay where are we 
    1 on main page, whether token or not, all polls appear
    (need a search function)
    so when they login, they're still on the 'home' page
    """USER"""
    click a poll, goes to pollsview.
    that will pull up the list of polls based on the selected category.
    can pull up a poll, which takes from PollSelect
    that will take you through the questions where you add your choices.
    you must be logged in to participate
    you'll see a status of the poll once you complete it
    you'll be able to see polls you've participated in.
    """OWNER"""
    log in -> menu comes up
    1 sees all polls by category
    clicks myPolls, goes to their page
    which will have polls by date (maybe sortable?)
    results, and status (published or not)
    edit polls
    create new poll
    under hamburger menu you can go to MyPolls
    instead of change password here we're going to put Create Poll
    both of those options will take you to the same page 'MyPolls'
    when creating a poll - you must complete it when made
    you can return to edit it after there are questions to edit
    you can invite people with a link (might need specific poll id there - a uuid?)
    you can delete polls


    ></div> -->