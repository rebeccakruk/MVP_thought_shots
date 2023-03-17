<!-- <template>

                <v-app class="pollList" id="inspire">
        
            <v-container class="green lighten-5">
                <h3>participate in a poll</h3>
                <v-row>
                <v-col md="3">
                    <v-card @onload="$emit('getPolls')"
                        :key="cat.category"
                        :catId="cat.category"
                        class="pa-2"
                        outlined
                        red
                        tile v-for="cat in myPolls.filter(({ category }) => !uniqueValue[category] && (uniqueValue[category] = true))"

                    >
                    <router-link to="/mypolls">{{ cat.categoryName }}</router-link>
                
                    </v-card>
                </v-col>
            
                </v-row>
            </v-container>

        </v-app>

</template>

<script>

    export default {
    name: "MyPolls",
        props: {
            title: String,
            categoryName: String,
            description: String,
    },
        data() {
        return {
            uniqueValue: {},
                }
        }
    }
</script>

<style scoped>

</style> -->