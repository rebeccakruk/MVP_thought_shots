<template>
    <div class="text-center">
        <v-menu offset-y>
            <template v-slot:activator="">
            <v-btn
                color="primary"
                v-bind="attrs"
                v-on="on"
            >
            Profile
            </v-btn>
        </template>
        <v-list>
            <v-list-item
                v-for="(item, index) in items"
                :key="index"
            >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
        </v-menu>
    </div>
</template>

<script>
    export default {
        name: "DropDown.vue",
        data() {
            return {
                items: [
                    { title: "edit profile"},
                    { title: "polls"},
                    { title: "logout"},
            ],
        }
    }
}
</script>

<style scoped>

</style>