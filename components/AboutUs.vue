<template>
  <div class="aboutus">
    <h2>ABOUT US</h2>
    <div class="detail">
      私たちはサイエンス研究会（SRI）です。当会はコンピュータサイエンスを中心としながらも、科学技術全般に関する様々な活動を行っています。
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
  padding-top: 100px;
  text-align: center;
  color: $font-color1;
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

.index .aboutus h2::before {
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

.index .aboutus h2::after {
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
