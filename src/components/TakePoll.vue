<template>
    <div id="app">
      <v-app id="inspire">
        <v-container>
          <h3></h3>
        </v-container>
      </v-app>
    </div>
</template>

<script>
    export default {
        name : "TakePoll",
        props: {
                question: String,
                responseOption: String,
                title: String,

                responseOption: String
            },      
        }
</script>

<style scoped>

</style>