<template>
  <div>
    <h2>ABOUT US</h2>
    <div class="detail">
      私たちはサイエンス研究会（SRI）です。当会はコンピュータサイエンスを中心としながらも、科学技術全般に関する様々な活動を行っています。2020年3月に発足し、現在の会員は23名です。新規会員も随時募集しております。興味がある方は、CONTACT
      USページからメッセージを送って下さい！
    </div>
    <div class="more_btn">
      <v-btn to="/member" nuxt x-large color="red" class="white--text"
        >MORE</v-btn
      >
    </div>
  </div>
</template>

<style lang="scss">
@import '~/assets/variables.scss';

.index .aboutus {
  background-color: white;
  text-align: center;
}

.index .aboutus .detail {
  font-family: 'Noto+Sans+JP';
  font-size: 100%;
  padding-left: 10%;
  padding-right: 10%;
  text-align: left;
}

.index .aboutus .member_btn {
  font-size: 80%;
  margin-top: 15px;
  margin-right: auto;
  margin-left: auto;
}
</style>
