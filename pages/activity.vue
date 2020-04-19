<template>
  <div class="page">
    <div class="activity">
      <div class="page_title">
        <h1>ACTIVITY</h1>
      </div>
      <v-container>
        <template v-for="(activitiy, i) in activities">
          <div class="one_activity" v-bind:key="i">
            <div class="activity_title" v-bind:key="i">
              <h2>{{ activitiy.title }}</h2>
            </div>
            <v-row>
              <template v-for="(card, j) in activitiy.cards">
                <v-col :key="j" cols="12" md="4">
                  <v-card class="mx-auto" height="385px" outlined>
                    <v-card-title>
                      <h2 class="card_title">
                        {{ card.title }}
                      </h2>
                    </v-card-title>
                    <v-card-text>
                      <div class="card_date">
                        {{ card.date }}
                      </div>
                      <div class="card_body">
                        {{ card.detail }}
                      </div>
                    </v-card-text>
                    <template v-if="card.more">
                      <v-card-actions>
                        <div class="more_btn">
                          <v-btn
                            v-bind:href="`${card.more}`"
                            x-large
                            color="red"
                            class="white--text"
                          >
                            BLOG
                          </v-btn>
                        </div>
                      </v-card-actions>
                    </template>
                  </v-card>
                </v-col>
              </template>
            </v-row>
          </div>
        </template>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    activities: {
      meetings: {
        title: '勉強会',
        cards: [
          {
            title: '競技プログラミング勉強会',
            date: '2020/4/18',
            detail: '初心者向けに競技プログラミングの勉強会をzoomで行いました。'
          },
          {
            title: 'CTF勉強会',
            date: '2020/3/28',
            detail: 'CTFの勉強会をzoomで行いました。'
          },
          {
            title: 'BIOSの仕組み(笠作講師)',
            date: '2020/1/20',
            detail:
              '笠作講師をお招きして、PCの電源を入れてからOSが起動する間での仕組みをワイガヤしました。'
          }
        ]
      },
      develops: {
        title: '制作活動',
        cards: [
          {
            title: 'SRI HP',
            date: '2020/4/19',
            detail: '当HPを作成しました。詳細はブログにて。',
            more: 'aaaaaaaa'
          }
        ]
      },
      writtings: {
        title: '執筆活動',
        cards: [
          {
            title: 'ABC予想　入門',
            date: '2222/2/22',
            detail: 'ABC予想が証明され200年が経過しました。おさらいしましょう。'
          }
        ]
      },
      contests: {
        title: 'コンテスト',
        cards: [
          {
            title: 'picoCTF',
            date: '2020/9 ~ 2020/10',
            detail: 'picoCTFに出場しました。'
          }
        ]
      }
    }
  })
}
</script>

<style lang="scss">
@import '~/assets/variables.scss';

.page .activity {
  padding-bottom: 120px;
}

.page .activity .activity_title {
  text-align: center;
}

.page .activity h2 {
  margin: auto;
  font-size: 220%;
  text-align: center;
  color: $font-color1;
}

.page .activity .one_activity {
  padding-bottom: 20px;
}

.page .activity .page_title {
  color: $font-color1;
}

.page .activity .card_title {
  font-size: 130%;
  color: $font-color1;
  font-weight: 500;
  font-family: 'Roboto';
  margin-left: auto;
  margin-right: auto;
  height: 60px;
}

.page .activity .card_date {
  font-size: 130%;
  color: $font-color2;
  text-align: right;
  height: 40px;
}

.page .activity .card_body {
  padding-top: 10px;
  border-top: thin solid $accent;
  font-size: 110%;
  color: $font-color1;
  text-align: left;
  line-height: 1.5em;
  border-top: thin solid $accent;
  height: 150px;
  overflow: hidden;
}

.page .activity .more_btn {
  margin-right: auto;
  margin-left: auto;
}

.page .activity .page_title h1::before {
  content: '';
  background-color: $accent;
  position: absolute;
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 100%;
  left: -30px;
  top: 25px;
}

.page .activity .page_title h1::after {
  content: '';
  background-color: $accent;
  position: absolute;
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 100%;
  right: -30px;
  top: 25px;
}
</style>
