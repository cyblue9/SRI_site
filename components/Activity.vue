<template>
  <div class="activity">
    <h2>ACTIVITY</h2>
    <v-container>
      <v-row>
        <template v-for="(card, n) in cards">
          <v-col :key="n" cols="12" md="6">
            <v-card class="mx-auto" height="450px" outlined>
              <v-img
                class="white--text align-end"
                height="230px"
                v-bind:src="`${card.image}`"
                v-bind:alt="`${card.title}`"
              >
              </v-img>

              <v-card-title>
                <h3 class="card_title">
                  {{ card.title }}
                </h3>
              </v-card-title>
              <v-card-text>
                <div class="card_detail">
                  {{ card.detail }}
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </template>
      </v-row>
      <div class="more_btn">
        <v-btn to="/activity" x-large color="red" class="white--text">
          More
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        image: '/activity1.jpg',
        title: '勉強会',
        detail: '外部講師をお招きして、ワイワイガヤガヤ勉強会を行います。'
      },
      {
        image: '/activity2.jpg',
        title: '製作活動',
        detail: '最新技術を用いた製作活動を行います。'
      },
      {
        image: '/activity3.jpg',
        title: '執筆活動',
        detail: '論文などの執筆を行います。'
      },
      {
        image: '/activity4.jpg',
        title: 'コンテスト',
        detail: 'CTFや競技プログラミングに参加します。勉強会も行います。'
      }
    ]
  })
}
</script>

<style lang="scss">
@import '~/assets/variables.scss';

.index .activity {
  margin-top: 100px;
  padding-bottom: 100px;
  padding-top: 100px;
  text-align: center;
  color: $font-color1;
  background-color: $bg-color1;
}

.index .activity .card_title {
  font-size: 160%;
  color: $font-color1;
  font-weight: 500;
  font-family: 'Roboto';
  margin-left: auto;
  margin-right: auto;
}

.index .activity .card_detail {
  font-size: 130%;
  color: $font-color2;
  text-align: left;
  height: 40px;
}

.index .activity .more_btn {
  margin-right: auto;
  margin-left: auto;
}

.index .activity h2::before {
  content: '';
  background-color: $accent;
  position: absolute;
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 100%;
  left: -30px;
  top: 30px;
}

.index .activity h2::after {
  content: '';
  background-color: $accent;
  position: absolute;
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 100%;
  right: -30px;
  top: 30px;
}
</style>
