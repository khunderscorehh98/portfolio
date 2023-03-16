<template>
  <div>
    <form @submit.prevent ref="contactForm">
      <v-text-field dark label="Name" outlined name="from_name"></v-text-field>

      <v-text-field
        dark
        label="Email Address"
        outlined
        name="email"></v-text-field>

      <v-text-field dark outlined label="Subject" name="subject"></v-text-field>

      <v-textarea
        dark
        outlined
        label="Enter your message here.." name="message">
      </v-textarea>

      <v-btn
        block
        dark
        style="background-color: transparent"
        type="submit" @click="submitForm()">SUBMIT</v-btn>
    </form>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";
export default {
  data() {
    return {};
  },
  methods: {
    submitForm() {
      emailjs
        .sendForm(
          "service_mvu10fq",
          "template_49p70fr",
          this.$refs.contactForm,
          "user_dRz5JxrPhS83AgsnZ1hPv"
        )
        .then(
            alert('Email has been sent!')
            );
    },
  },
};
</script>

<style lang="scss" scoped>
</style>