<template>
    <div class="text-right">
        <v-menu offset-y bottom left >
            <template v-slot:activator="{ on, attrs }">
            <v-btn
            v-bind="attrs"
            v-on="on"
            small
            elevation="0"
            >
            <v-icon color="primary">mdi-menu</v-icon>
        
            </v-btn>
        </template>
            <v-list>
                <v-list-item class="dropdown" @click="toggleOn = !toggleOn"
                v-for="(item, index) in items"
                :key="index"
                offset-y
                small
                >
                <v-list-item-title class="smaller" ><router-link class="text-decoration-none" :to="item.url">{{ item.title }}</router-link></v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</div>
</template>

<script>
import router from '@/router';
    export default {
        name: "DropDown",
        data() {
            return {
                darkTheme: true,
                items: [
                    { 
                        title: "edit profile",
                        url: '/editprofile',
                    },
                    {
                        title: "my polls",
                        url: "/ownerpoll"
                    },
                    { 
                        title: "logout",
                        url: "/logout"
                    },
                    // { 
                    //     title: "change password",
                    //     url: "/"
                    // },
            ]
            }
        },
        methods: {
            toggleOn() {
                this.toggleOn == !this.toggleOn
            },
            goToProfile() {
                router.push('/userprofile')
            },
            viewMyPolls(){
                router.push('/editpoll')
            },
            goToLogout() {
                router.push('/logout')
            },
            changePassword() {
                router.push('/')
            },
        },
    }

</script>

<style scoped>
.tipTop {
    height: 2em;
    padding-bottom: 0%;
}
.smaller {
    width: 6em;
    position: left;
    margin-top: 0%;
    margin-bottom: 0%;
}
.dropdown {
    height: 2.5em;
    font-size: smaller;
    text-decoration: none;
    
}
</style>