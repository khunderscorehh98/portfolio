<template>
  <div>
    <v-container
    style="margin-top: 3%"
    >
    <v-row
      no-gutter
      >
      <v-col style="padding-top: 10%">
        <h1
        class="fontWhite"
        >
          Hi, my name is <br>
          <span id="myName" class="text-h1">Haziq Halidi</span>
        </h1>
        <br>
        <p class="fontWhite text-body-1">
          Create, Develop, and Observe.
           Slogan for a web design business in <br>Brunei Darussalam.
        </p>
        <br>
        <v-row>
          <v-btn
          outlined
          dark
          router-link
          to="/background"
          >
          Get to Know me
          </v-btn>

          <v-btn
          text
          dark
          router-link
          to="/contact"
          >Contact Me
          </v-btn>
        </v-row>
      </v-col>
      <v-img
        :src="personalImage"
        max-width= "45%"
        ></v-img>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import personalImage from '../assets/img/web_image.png'
  export default {
    components:{
      
    },
    data() {
      return {
        personalImage: personalImage
      }
    }
  }
</script>

<style scoped>
.fontWhite{
  color: white
}
#myName{
  color: yellow;
}
</style>