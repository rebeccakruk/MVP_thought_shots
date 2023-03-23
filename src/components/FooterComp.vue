<template>
    <v-footer
        dark
        padless>
        <v-card
        class="flex"
        flat
        tile>
        <v-card-title class="green">
            <strong class="subheading">Share with your friends and collegues!</strong>
            <v-spacer></v-spacer>
            <v-btn v-for="icon in icons" 
                :key="icon"
                class="mx-4"
                dark
                icon
                tile>
                            <!-- These will be share icons when the website is ready for it's close-up. 
                        It will be a combination of this website's URL and the website I'm sharing on  -->
                            <v-icon size="24px">
                                {{ icon }}
                            </v-icon>
                        </v-btn>
        </v-card-title>
        <v-card-text class="py-2 white--text text-center">
            {{ new Date().getFullYear() }} - <strong>&copy; Thought-shots</strong>
        </v-card-text>
            </v-card>
    </v-footer>
</template>

<script>

export default {
    name: "FooterComp",
    data: () => {
        return {
            icons: [
                "mdi-facebook",
                "mdi-twitter",
                "mdi-instagram",
                "mdi-reddit",
            ],
            // "https://www.twitter.com/share?text="Check out this cool site!"}&url=mysite"
            // "http://www.facebook.com/sharer/sharer.php?&quote="Check out this cool site!"}&url=mysite"
            // "http://www.reddit.com/submit?url="Check out this cool site!"}&url=mysite" -- >
        };
    },
};
</script>

<style scoped>

</style>