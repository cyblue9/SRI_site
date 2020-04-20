<template>
  <div class="page">
    <div class="contact_us">
      <div class="page_title">
        <h1>CONTACT US</h1>
      </div>
      <v-container class="spacing-playground px-12">
        <form
          name="contact"
          netlify-honeypot="bot-field"
          action="thank-you"
          data-netlify="true"
          method="post"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p class="hidden" style="display: none;">
            <label>Don't fill this out: <input name="bot-field"/></label>
          </p>
          <p>
            <label>
              <v-text-field
                label="Name"
                single-line
                outlined
                :rules="[rules.required]"
                color="red"
              ></v-text-field
            ></label>
          </p>
          <p>
            <label>
              <v-text-field
                label="Email"
                single-line
                outlined
                v-model="email"
                :rules="[rules.required, rules.email]"
                color="red"
              ></v-text-field
            ></label>
          </p>
          <p>
            <label
              ><v-text-field
                label="Message"
                single-line
                outlined
                :rules="[rules.required]"
                height="250px"
                color="red"
              ></v-text-field
            ></label>
          </p>
          <div class="form_btn">
            <v-btn @click="submit" x-large color="red" class="white--text">
              Send
            </v-btn>
          </div>
        </form>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Preliminary report',
      email: '',
      rules: {
        required: (value) => !!value || 'Required.',
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/variables.scss';

.page .contact_us .form_btn {
  text-align: center;
}
</style>
