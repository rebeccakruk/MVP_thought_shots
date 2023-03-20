<template>
    <div id="app">
      <v-app id="inspire">
        <div>
          <v-data-table
            :headers="headers"
            :items="question"
            class="elevation-1"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-simple-checkbox
                v-model="item.responseOption"
                v-bind="attrs"
                v-on="on"
            
              ></v-simple-checkbox>
            </template>
                    <!-- <template v-slot:item.coke="{ item }">
            <v-simple-checkbox
                v-model="item.coke"
                :click="disable"
            
            ></v-simple-checkbox>
            </template> -->
          </v-data-table>
        </div>
      </v-app>
    </div>
</template>

<script>
    export default {
        name : "TakePoll",
        props: {
            items: [
                {
                    question: String,
                    }
            ],
            headers: [
                {
                    title: String,
                    align: 'start',
                    sortable: false,
                    responseOption: String
            },
        ],
        }
    }
</script>

<style scoped>

</style>