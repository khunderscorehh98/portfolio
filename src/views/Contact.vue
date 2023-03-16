<template>
  <div>
    <v-container>
      <div style="padding-top: 10%">
        <v-row>
          <div style="padding: 3% 5%">
            <h1 class="fontWhite">Contact Information</h1>
            <p class="fontWhite">
              Fill up the form and I will be in your contact as soon as
              possible.
            </p>
            <br />
            <hr />
            <br />
            <div>
              <v-icon class="fontWhite"> mdi-phone </v-icon>
              <span class="fontWhite"> +673 8209664 </span>
            </div>
            <br />
            <div>
              <v-icon class="fontWhite"> mdi-email-outline </v-icon>
              <span class="fontWhite"> haziqimac@gmail.com </span>
            </div>
            <br />
            <div>
              <v-btn outlined class="fontWhite" href="https://wa.me/6738209664" target="_blank" block>
                <v-icon> mdi-whatsapp </v-icon>
                <span> Contact me through whatsapp! </span>
              </v-btn>
              <br />
              <v-btn outlined class="fontWhite" href="https://github.com/khunderscorehh98" target="_blank" block>
                <v-icon> mdi-github </v-icon>
                <span> See my Github! </span>
              </v-btn>
              <br />
            </div>
          </div>
          <v-col>
            <contactForm />
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import contactForm from "../components/contactForm.vue";
export default {
  components: {
    contactForm,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.fontWhite {
  color: white;
}
</style>