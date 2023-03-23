<template>
        <div :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }" class="pollList">
            <div class="public">
    <h3>Public Polls</h3><v-switch
        v-model="viewByCat"
        hide-details
        inset
        :label="`View all`"
    >
    </v-switch>
        </div>
        <v-container v-if="viewByCat" class="green lighten-5">
            <v-row>
                <v-col md="3">
                    <v-card :key="cat.category"
                        :catId="cat.category"
                        class="pa-2"
                        outlined
                        red
                        tile v-for="cat in myPolls.filter(({category}) => !uniqueValue[category] && (uniqueValue[category] = true))"
                        >
                            <router-link to="/takepoll">{{ cat.categoryName }}</router-link>
                    </v-card>
            </v-col>
            </v-row>
        </v-container>
        <v-container v-if="!viewByCat" class="blue lighten-5">
            <v-row>
                <v-col md="3">
                    <v-card :key="cat.category"
                        :catId="cat.category"
                        class="pa-2"
                        outlined
                        red
                        tile v-for="cat in myPolls.filter(({category}) => !uniqueValue[category] && (uniqueValue[category] = true))"
                        >
                            <router-link to="/mypolls">{{ cat.categoryName }}</router-link>
                    </v-card>
            </v-col>
            </v-row>
        </v-container>
    </div>

</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';
    export default {
        name: "PollsList",
        data() {
            return {
                uniqueValue: {},
                viewByCat: false,
                myPolls: [{
                    category: "",
                    categoryName: "",
                    createdAt: "",
                    description: "",
                    expiry: "",
                    pollId: Number,
                    pollOwner: "",
                    title: "",
                }]
        }
    },
    methods: {
        getPolls() {
            axios.request({
                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/poll`,
                method: "GET",
                params: {
                    "token": this.token
                }
            }).then((response) => {
                this.myPolls = response.data

            }).catch((error) => {
                console.log(error);
            })
        },
        seeAll() {
            axios.request({
                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/poll`,
                method: "GET",
                params: {
                    "categoryName" : this.categoryName
                }
            }).then((response) => {
                this.myPolls = response.data
            }).catch((error) => {
                console.log(error);
            })
                }
            },
            beforeMount() {
                this.token = cookies.get('token');
                        },
            mounted () {
            // this.getPolls();
            console.log(this.token);
            this.seeAll();
                    }
}

</script>

<style scoped>
.pollList {
    height: 30%;
    background-color: beige;
}
.public {
    color: black
}
</style>