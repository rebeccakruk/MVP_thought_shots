<template>
    <v-footer color="green" dark>
            <v-row justify="center" class="my-4 text-center">
                <v-col cols="12">
                    </v-col>
                <v-col cols="12">
                    <v-btn v-for="(social, index) in icons" :key="index" text dark :icon="social.icon" :shareUrl="social.url" @click="share()">
                        fsdfsdfsd
                    </v-btn>
                </v-col>
                <v-col cols="12" class="align-center">&copy; 2023 Thought-shots</v-col>
            </v-row>
        </v-footer>
</template>

<script>
export default {
    data: () => {
        return {
            icons: [
            {
            twitter: {
                icon: "mdi-twitter",
                hello: "hello?",
                color: "blue lighten-1",
                url: "https://www.thoughtshots.com",
                shareUrl:
                    "https://www.twitter.com/share?text={{shareMsg}}&url={{thisSite}}"
            },     facebook: {
                        icon: "mdi-facebook-box",
                        color: "blue darken-2",
                        url: "https://www.facebook.com",
                        shareUrl: "http://www.facebook.com/sharer/sharer.php?&quote={{shareMsg}}&u={{thisSite}}"
                    },
                }
            ],
        };
    },
    methods: {
        share() {
            
        }
    },
};
</script>

<script>
    export default {
        name: "FooterComp"
    }
</script>

<style scoped>
.div {
    background-color: bisque;
}
</style>