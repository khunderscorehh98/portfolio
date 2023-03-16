<template>
  <div>
    <v-container class="divConfig fontWhite">
      <h1 class="text-h1 fontWhite">Skills</h1>
      <div>
        <v-row>
          <v-col>
            <v-row v-for="list in list" :key="list.id" style="margin-top: 2%">
              <v-img
                :src="list.icon"
                max-width="12%"
                height="12%"
                style="border-radius: 20%"
              ></v-img>
              <v-col>
                <div style="margin-bottom: 3%">
                  <h2 class="text-h2">
                    {{ list.title }}
                  </h2>
                </div>
                <div style="margin-left: 1%">
                  <v-row>
                    <p>
                      {{ list.exp }}
                    </p>
                  </v-row>
                </div>
                <br>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import adobeIllustrator from "../assets/img/adbill.svg";
import javascriptIcon from "../assets/img/java.png";
import vueIcon from "../assets/img/vueEnlarge.png";
import figmaIcon from "../assets/img/figmaIcon.png";

export default {
  data() {
    return {
      list: [
        {
          id: 1,
          title: "JavaScript",
          icon: javascriptIcon,
          exp: "I enjoy using JavaScript, am familiar with the libraries and frameworks that are related to it, and can create effective code for web applications. I also have a strong desire to constantly get better.",
        },
        {
          id: 2,
          title: "VueJS",
          icon: vueIcon,
          exp: "I have expertise with Vue.js and am able to create scalable and effective web apps using its directives, components, and other features.",
        },
        {
          id: 3,
          title: "Figma",
          icon: figmaIcon,
          exp: "I am skilled with Figma and can use it to create user-friendly prototypes and user interfaces for web and mobile apps while staying current with design trends.",
        },
        {
          id: 4,
          title: "Adobe Illustrator",
          icon: adobeIllustrator,
          exp: "I am proficient in Adobe Illustrator and can utilize it to produce aesthetically appealing graphics, logos, and designs while adhering to the most recent design trends and industry standards for a variety of media.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.fontWhite {
  color: white;
}
.divConfig {
  margin-top: 1%;
  margin-left: 10%;
}
</style>