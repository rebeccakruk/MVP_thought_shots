<template>
    <v-app>
        <h3>Create a poll! Pick a category:</h3>
        <v-container :key="cat.category"
                :catId="cat.category"
                class="pa-2"
                outlined
                tile v-for="cat in myPolls.filter(({ category }) => !uniqueValue[category] && (uniqueValue[category] = true))">
                <v-btn small><router-link text-decoration-none to="/mypolls">{{ cat.categoryName }}</router-link></v-btn>
            </v-container>
    </v-app>
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
                console.log(this.token);
        },
    }
</script>

<style scoped>

</style>