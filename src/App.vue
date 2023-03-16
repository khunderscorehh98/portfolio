<template>
  <v-app class="darkBackground">
    <v-app-bar app dark style="background: transparent">
      <div v-for="nav in nav" :key="nav.id" class="marginSpacer">
        <v-btn text router-link :to="{ path: nav.dir }" class="marginSpacer">
          <v-icon> {{ nav.icon }} </v-icon>
          <span> {{ nav.title }} </span>
        </v-btn>
      </div>
      <div>
        <v-btn outlined text href="Haziq_Halidi_CV.pdf" rounded download>
          <v-icon>mdi-file-outline</v-icon>
          Download my CV
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-btn router-link to="/contact" text>
        <span class="mr-2">CONTACT ME</span>
        <v-icon>mdi-email-outline</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import navBrand from './assets/img/haziqHalidi.png'
export default {
  name: "App",
  components: {
    
  },
  data() {
    return {
      navBrand: navBrand,
      drawer: null,
      nav: [
        {
          id: 1,
          title: "Home",
          icon: "mdi-home-outline",
          dir: "/",
        },
        {
          id: 2,
          title: "Background",
          icon: "mdi-square-rounded-outline",
          dir: "/background",
        },
        {
          id: 3,
          title: "Skills",
          icon: "mdi-tools",
          dir: "/skills",
        },
      ],
    };
  },
  methods: {
    screenChange() {
      let a = window.screen.availHeight;
      let b = window.screen.availWidth;
      if( a < 706 || b < 1167) {
        return alert('Warning: Web is not optimized for this screen size yet')
      }
    },
  },
  beforeMount() {
    this.screenChange()
  }
};
</script>

<style scoped>
.darkBackground {
  background-color: black;
}
.marginSpacer {
  margin-left: 1%;
  margin-right: 1%;
}
</style>
