<template>
    <div id="app">
      <v-app id="inspire">
      <v-card
      class="overflow-y-auto"
      max-height="300"
          tile
      >
          <v-list dense
          >
            <h4>Complete Poll</h4>
            <v-list-item-group
            color="primary"
            >
            {{ pollInfo.title }}
            <!-- new question in the poll -->
              <v-list-item
                v-for="question in pollInfo" :key="question.questionId"  
                >
                <v-list-item-icon>
                  <v-icon
                  >
                  {{ question.question }}
                  
                  </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item v-for="answer in question.answers" :key="answer.responseId"
                  @click="submitResponse(question.questionId, question.responseId)">{{ answer.responseOption }}</v-list-item>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-app>
    </div>
</template>

<script>
    export default {
        name : "TakePoll",
        props: {
          pollInfo: Array,
            // question: String,
            // title: String,
            // questionId: Number,
            // responseOption: Array,
            // responseId: Array,
            // responseOptfion: [
              // {
              // type: String
              // }
            // ],
          },
          data() {
            return {
              selectedOption: ""
            }
          },
            methods: {
              submitResponse(questionId, responseId) {
                // post here
                // or emit here and manage the cart. FUUUUUUUUUUUCKKKKKK
              }
            },
        }    
        
</script>

<style scoped>

</style>