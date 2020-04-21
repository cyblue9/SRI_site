<template>
  <div class="page">
    <div class="contact_us">
      <div class="page_title">
        <h1>CONTACT US</h1>
      </div>
      <v-container class="spacing-playground px-12">
        <v-text-field
          v-model="name"
          label="name"
          :rules="[rules.required]"
          outlined
          color="red"
        />
        <v-text-field
          v-model="email"
          label="email"
          :rules="[rules.required, rules.isValidEmail]"
          outlined
          color="red"
        />
        <v-textarea
          v-model="message"
          label="message"
          :rules="[rules.required]"
          outlined
          color="red"
          auto-grow
        />
        <v-text-field
          v-show="false"
          v-model="botfield"
          label="no-input"
          outlined
        />
        <div class="form_btn">
          <v-btn x-large color="red" class="white--text" @click="submit">
            Send
          </v-btn>
        </div>
        <p class="submit_result">{{ submitResult }}</p>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      botfield: '',
      submitResult: '',
      rules: {
        required: (value) => !!value || 'Required.',
        isValidEmail: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      }
    }
  },
  methods: {
    async submit() {
      if (
        this.rules.required(this.name) === 'Required.' ||
        this.rules.isValidEmail(this.email) === 'Invalid e-mail.' ||
        this.rules.required(this.message) === 'Required.'
      ) {
        this.submitResult = 'Input correctly'
        return
      }
      const params = new FormData()

      params.append('form-name', 'contact')
      params.append('name', this.name)
      params.append('email', this.email)
      params.append('message', this.message)
      params.append('bot-field', this.botfield)

      await this.$axios.$post(window.location.origin, params)

      this.submitResult = 'Thank you!'
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/variables.scss';

.page .contact_us .form_btn {
  text-align: center;
}

.submit_result {
  margin-top: 20px;
  font-size: 150%;
  font-weight: bold;
  text-align: center;
  color: $accent;
}
</style>
