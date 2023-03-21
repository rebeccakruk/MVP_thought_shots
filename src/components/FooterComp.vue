<template>
    <div color="green" dark>
            <v-row justify="center" class="my-4 text-center">
                <v-col cols="12">
                    Get started:</v-col>
                <v-col cols="12">
                    <v-btn v-for="icon in icons" :key="icon" text dark>
                        <v-icon>{{ icon }}</v-icon>
                    </v-btn>
                </v-col>
                <v-col cols="12" class="align-center">&copy; 2023 Thought-shots</v-col>
            </v-row>
        </div>
</template>

<script>
export default {
    data: () => {
        return {
            icons: [
                'mdi-facebook',
                'mdi-twitter',
                'mdi-instagram',
                'mdi-youtube',
            ],
        };
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