<template>
  <div class="page">
    <script src="https://unpkg.com/vue"></script>
    <script src="https://unpkg.com/jquery"></script>
    <div class="ctf">
      <div class="page_title">
        <h1>CTF</h1>
      </div>
      <v-container class="spacing-playground px-12">
        <p>
          Question:
          サイエンス(SRI)研究会では、主に4つの活動をしています。「勉強会」、「製作活動」、「執筆活動」、あと１つは何でしょう？
        </p>
        <v-text-field v-model="input" label="answer" outlined color="red" />
        <div class="form_btn">
          <v-btn x-large color="red" class="white--text" @click="submit">
            Answer
          </v-btn>
        </div>
        <div class="result" v-html="output"></div>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      output: '',
      submitResult: ''
    }
  },
  methods: {
    async submit() {
      if (this.input === '') return
      if (this.input === 'コンテスト') {
        this.output = '"' + this.input + '" is Correct!'
        return
      }
      if (this.input.match(/<script>.*alert\(.*\).*<\/script>/)) {
        try {
          await eval(this.input.replace(/<\/?script>/g, '')) // eslint-disable-line
          this.output = 'flag{XSS_XSS_Xmass_XSS}'
          return
        } catch (e) {
          console.log(this.input)
        }
      }
      // const escapeInput = this.input.replace(/</g, '&lt')
      this.output = '"' + this.input + '" is Incorrect...'
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/variables.scss';

.page .ctf .form_btn {
  text-align: center;
}

.page .ctf .result {
  margin-top: 40px;
  font-size: 150%;
  font-weight: bold;
  text-align: center;
  color: rebeccapurple;
}

.page .ctf .result {
  text-align: center;
}
</style>
