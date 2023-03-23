<template>
    <div :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
        <h3></h3>
        <router-link text-decoration-none to="/mypolls"><v-btn small>Create a poll</v-btn></router-link>
        <!-- This will be for future use when categories are established. -->
        <!-- <v-container :key="cat.category"
                :catId="cat.category"
                class="pa-2"
                outlined
                tile v-for="cat in myPolls.filter(({ category }) => !uniqueValue[category] && (uniqueValue[category] = true))">
                <router-link text-decoration-none to="/mypolls"><v-btn small>{{ cat.categoryName }}</v-btn></router-link>
        </v-container> -->
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name : "CreatePolls",
    data() {
        return {
            uniqueValue: {},
            myPolls: [{
                category: "",
                categoryName: ""
            }]
        }
    },
    methods: {
            getCategories() {
                axios.request({
                        url: `${process.env.VUE_APP_BASE_DOMAIN}/api/poll`,
                        method: "GET",
                        params: {
                            "categoryName": this.categoryName
                        }
                }).then((response) => {
                    this.myPolls = response.data
                    console.log(response.data);
                }).catch((error) => {
                    console.log(error);
                })
            }
        },
            beforeMount () {
                this.token = this.cookies.get('token')
                    if (this.token == null) {
                        return false
                    }
                },
                mounted () {
                    this.getCategories();
        },
}

</script>

<style scoped>

</style>