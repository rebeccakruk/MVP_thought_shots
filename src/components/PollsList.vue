<template>
    <div :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }" class="pollList">
        <v-card
            class="mx-auto"
            width="100%"
            tile
        >
        <v-list >
        <v-subheader>Polls</v-subheader>
        <v-list-item-group
            v-model="selectedItem"
            color="primary"
        >
            <v-list-item
            v-for="poll in allPolls"
            :key="poll.pollId"
            >
            <v-list-item-content>
                <router-link class="text-decoration-none"
                    :to="'/selectedpoll/' + poll.pollId"><v-list-item-title >{{ poll.title }}</v-list-item-title>
            </router-link>
            </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
        </v-list>
    </v-card>
    <!-- <v-switch
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
        </v-container> -->
        <!-- <v-container v-if="!viewByCat" class="blue lighten-5">
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
        </v-container> -->
    </div>

</template>

<script>
import axios from 'axios';
    export default {
        name: "PollsList",
        data() {
            return {
                selectedItem: [],
                allPolls: [
                    {
                    category: "",
                    categoryName: "",
                    createdAt: "",
                    description: "",
                    expiry: "",
                    pollId: Number,
                    pollOwner: "",
                    title: "",
                }
            ],

        }
    },
    methods: {
        getPolls() {
            axios.request({
                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/poll-public`,
                method: "GET"
            }).then((response) => {
                this.allPolls = response.data
            }).catch((error) => {
                console.log(error);
            })
        }
    },
        beforeMount() {
            this.getPolls();
        },
    }

</script>

<style scoped>
.pollList {
    height: 30%;
    background-color: beige;
}

</style>