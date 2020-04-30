<template>
  <div class="page">
    <div class="member">
      <div class="page_title">
        <h1>MEMBER</h1>
      </div>
      <v-container>
        <v-row>
          <template v-for="(card, n) in cards">
            <v-col :key="n" cols="12" md="4">
              <v-card class="mx-auto" height="430px" outlined>
                <div class="card_avatar">
                  <v-avatar size="196">
                    <img
                      v-bind:src="`${card.icon}`"
                      v-bind:alt="`${card.name}`"
                    />
                  </v-avatar>
                </div>
                <v-card-title>
                  <h2 class="card_title">
                    {{ card.name }}
                  </h2>
                </v-card-title>
                <v-card-text>
                  <div class="card_detail">
                    {{ card.intrest }}
                  </div>
                </v-card-text>
                <v-card-actions>
                  <span class="card_btn">
                    <v-btn
                      v-bind:href="`${card.more}`"
                      large
                      color="red"
                      class="white--text"
                    >
                      More
                    </v-btn>
                  </span>
                </v-card-actions>
              </v-card>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        icon: '/icons/chiba_yuya.jpeg',
        name: '千葉裕也',
        intrest:
          '#extempore #livecoding #lisp #os #assembly #cpu #大学講師 #oss #growth-hack #security',
        more: 'https://cyblue9.github.io/'
      },
      {
        icon: 'https://cdn.vuetifyjs.com/images/john.jpg',
        name: '総研太郎',
        intrest:
          '#ctf #security #flag #xss #csrf #hijack #7pay #vulnerabílity #wannacty',
        more: 'http'
      },
      {
        icon: 'https://cdn.vuetifyjs.com/images/john.jpg',
        name: '総研太郎',
        intrest:
          '#ctf #security #flag #xss #csrf #hijack #7pay #vulnerabílity #wannacty',
        more: 'http'
      },
      {
        icon: 'https://cdn.vuetifyjs.com/images/john.jpg',
        name: '総研太郎',
        intrest:
          '#ctf #security #flag #xss #csrf #hijack #7pay #vulnerabílity #wannacty',
        more: 'http'
      },
      {
        icon: 'https://cdn.vuetifyjs.com/images/john.jpg',
        name: '総研太郎',
        intrest:
          '#ctf #security #flag #xss #csrf #hijack #7pay #vulnerabílity #wannacty',
        more: 'http'
      },
      {
        icon: 'https://cdn.vuetifyjs.com/images/john.jpg',
        name: '総研太郎',
        intrest:
          '#ctf #security #flag #xss #csrf #hijack #7pay #vulnerabílity #wannacty',
        more: 'http'
      },
      {
        icon: 'https://cdn.vuetifyjs.com/images/john.jpg',
        name: '総研太郎',
        intrest:
          '#ctf #security #flag #xss #csrf #hijack #7pay #vulnerabílity #wannacty',
        more: 'http'
      },
      {
        icon: 'https://cdn.vuetifyjs.com/images/john.jpg',
        name: '総研太郎',
        intrest:
          '#ctf #security #flag #xss #csrf #hijack #7pay #vulnerabílity #wannacty',
        more: 'http'
      },
      {
        icon: 'https://cdn.vuetifyjs.com/images/john.jpg',
        name: '総研太郎',
        intrest:
          '#ctf #security #flag #xss #csrf #hijack #7pay #vulnerabílity #wannacty',
        more: 'http'
      }
    ]
  })
}
</script>

<style lang="scss">
@import '~/assets/variables.scss';

.page .member .card_avatar {
  margin-top: 5px;
  text-align: center;
}

.page .member .card_title {
  font-size: 160%;
  font-weight: normal;
  font-family: 'Roboto';
  margin-left: auto;
  margin-right: auto;
}

.page .member .card_detail {
  font-size: 130%;
  text-align: center;
  height: 60px;
}

.page .member .card_btn {
  margin-right: auto;
  margin-left: auto;
}
</style>
