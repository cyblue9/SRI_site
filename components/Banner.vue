<template>
  <div class="header">
    <div class="bg_opacity">
      <h1>
        <span class="initial">S</span>cience<br />
        <span class="initial">&ensp;R</span>esearch<br />
        <span class="initial">&ensp;&ensp;I</span>nstitution
      </h1>
    </div>
  </div>
</template>

<style lang="scss">
@import '~/assets/variables.scss';

.index .header {
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
}

@media screen and (max-width: 480px) {
  .index .header {
    background-image: url('../static/bg_img_480.jpg');
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .index .header {
    background-image: url('../static/bg_img_768.jpg');
  }
}
@media screen and (min-width: 1024px) {
  .index .header {
    background-image: url('../static/bg_img_1024.jpg');
  }
}

.index .bg_opacity {
  background-color: rgba(247, 247, 247, 0.1);
  height: 100%;
  text-align: center;
}

.index .header h1 {
  font-family: 'Roboto';
  font-weight: bold;
  padding-top: 30vh;

  color: $font-color1;
  display: inline-block;
  text-align: left;
  line-height: 1.2;
}

@media screen and (max-width: 480px) {
  .index .header h1 {
    font-size: 400%;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .index .header h1 {
    font-size: 700%;
  }
}
@media screen and (min-width: 1024px) {
  .index .header h1 {
    font-size: 500%;
  }
}

.index .initial {
  color: $accent;
}
</style>
