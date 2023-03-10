<template>
        <v-app :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }" :dark="darkTheme" id="inspire">
            <v-container>
                <v-layout wrap>
                    <v-flex sm12 md6 offset-md3>
                        <v-card elevation="4" light tag="section">
                            <v-card-title>
                                <v-layout align-center justify-space-between>
                                    <h3 class="headline">
                                        {{ userInfo.username }}
                                    </h3>

                </v-layout>
            
                </v-card-title>
                    <v-divider></v-divider>
                        <v-card-text>
                            
                            <v-form>
                                    <v-text-field 
                                                v-model="userInfo.email"
                                                :disabled="!toggleDisable1"
                                                label="email"
                                                :append-icon="!toggleDisable1 ? ' ' : 'mdi-pencil'"
                                                ></v-text-field>
                                <v-layout align-center justify-space-between>
                                        <v-btn
                                            class="ml-3"
                                            x-small
                                            :color="toggleDisable1 ? 'primary' : ''"
                                            :append-icon="!toggleDisable1 ? ' ' : 'mdi-pencil'"
                                            @click="toggleDisable1 = !toggleDisable1"
                                            >
                                            Edit email
                                        </v-btn>
                                            </v-layout>
                                                <v-text-field 
                                                    v-model="userInfo.lastName"
                                                    :disabled="!toggleDisable2"
                                                    label="last name"
                                                    :append-icon="!toggleDisable2 ? ' ' : 'mdi-pencil'"
                                                    ></v-text-field>
                                                    <v-layout align-center justify-space-between>
                                            <v-btn
                                                class="ml-3"
                                                x-small
                                                :color="toggleDisable2 ? 'primary' : ''"
                                                :append-icon="!toggleDisable2 ? ' ' : 'mdi-pencil'"
                                                @click="toggleDisable2 = !toggleDisable2"
                                                >
                                                Edit last name
                                            </v-btn>         
                                            </v-layout>
                                                    <v-text-field 
                                                    v-model="userInfo.image"
                                                    :disabled="!toggleDisabl3"
                                                    label="image"
                                                    :append-icon="!toggleDisable3 ? ' ' : 'mdi-pencil'"
                                                    ></v-text-field>
                                            <v-layout align-center justify-right>
                                                <v-btn
                                                class="ml-3"
                                                x-small
                                                :color="toggleDisable3 ? 'primary' : ''"
                                                @click="toggleDisable3 = !toggleDisable3"
                                                :append-icon="!toggleDisable3 ? ' ' : 'mdi-pencil'"
                                                >
                                                Change / Add profile image
                                            </v-btn>
                                                </v-layout>
                                                
                                </v-form>
                        </v-card-text>
                    <v-divider></v-divider>
                    </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-app>
</template>

<script>
import axios from 'axios'
    export default {
        name : "UserEdit",
        props: {
            "email" : String,
            "password" : undefined,
            "image" : String,
            "username" : String,
            "dob" : Date,
            data() {
                return {
                toggleDisable1: false,
                toggleDisable2: false,
                toggleDisable3: false,
                toggleDisable4: false,
                toggleClass: true,
                formData: {
                email: "",
                    username: "",
                        firstName: "",
                            lastName: "",
                                password: "",
                                    dob: Date,
                                        image: "",
                                            user_id: "",
                                                createdAt: "",
                                                    token: "",
                },
            }
        },
        methods: {
            editUser() {
                axios.patch((
                    process.env.VUE_APP_BASE_DOMAIN + '/api/user',
                    this.formData
                )).then((response) => {
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
                })
            }
        },  
        mounted () {
        this.formData = this.email;
        this.formData = this.username;
        this.formData = this.image;
        this.formData = this.password;
        this.formData = this.dob;
        this.formData = this.firstName;
        this.formData = this.lastName;
        this.formData = this.createdAt;
        this.formData = this.token;
        },
    }
}
</script>

<style scoped>

</style>
