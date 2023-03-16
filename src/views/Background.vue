<template>
    <div>
        <v-container>
            <div class="divConfig">
            <v-row>
                <v-img
                :src=myImg
                max-width="35%"
                class="borderRadius"
                ></v-img>
                <v-col>
                    <h1 class="fontWhite text-h1">
                        Background
                    </h1>
                    <br>
                    <h2 class="fontWhite">
                        Web Developer
                    </h2>
                    <p class="fontWhite">
                        A freelance web developer with an experienced with developing web application as an experience where I use <em style="color: yellow">JavaScript</em> for web application.
                    </p>
                    <hr>
                    <br>
                    <h2 class="fontWhite">
                        UI / UX Designer
                    </h2>
                    <p class="fontWhite">
                        Experienced in designing a web as well, along in designing the user experience while developing the web as well.
                    </p>
                    <br>
                    <h2 class="fontWhite text-h2">
                        Education
                    </h2>
                    <br>
                    <v-col v-for="colleges in college" :key="colleges.id">
                        <div>
                            <v-row class="fontWhite">
                                <p>
                                    <em>
                                        {{colleges.year}}
                                    </em>
                                </p>
                                <v-spacer></v-spacer>
                                <em>
                                    {{colleges.cert}}
                                </em>
                                <br>
                            </v-row>
                        </div>
                        <br>
                    </v-col>
                    <div class="fontWhite">
                        <p>
                            <em style="color: yellow">
                                Cosmopolitan College of Commerece and Technology
                            </em>
                        </p>
                    </div>
                </v-col>
            </v-row>
            </div>
        </v-container>
    </div>
</template>

<script>
import myImg from '../assets/img/graduate_photo.jpg'
    export default {
        data() {
            return {
                myImg: myImg,
                college: [
                    {
                        id: 1,
                        year: "2019 - 2021",
                        cert: "Higher National Diploma (Computing)"
                    },
                    {
                        id: 2,
                        year: "2018 - 2019",
                        cert: "National Diploma (Information Technology)"
                    }
                ]
            }
        }
    }
</script>

<style scoped>
.borderRadius{
    border-radius: 5%;
}
.divConfig{
    margin: 5%;
}
.fontWhite{
    color: white;
}
</style>