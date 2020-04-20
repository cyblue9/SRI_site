<template>
  <div class="index">
    <header>
      <banner />
    </header>
    <main>
      <div class="index_section aboutus">
        <about-us />
      </div>
      <div class="index_section activity">
        <activity />
      </div>
      <div class="index_section blog">
        <blog />
      </div>
    </main>
  </div>
</template>

<script>
import Banner from '~/components/Banner.vue'
import AboutUs from '~/components/AboutUs.vue'
import Activity from '~/components/Activity.vue'
import Blog from '~/components/Blog.vue'

export default {
  components: {
    Banner,
    AboutUs,
    Activity,
    Blog
  }
}
</script>
<style lang="scss">
@import '~/assets/variables.scss';

.index h2 {
  font-weight: bold;
  font-size: 300%;
  font-family: 'Roboto';
  text-transform: uppercase;
  display: inline-block;
  position: relative;
}

.index h2::before {
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

.index h2::after {
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

.index_section {
  padding-top: 100px;
  padding-bottom: 100px;
  text-align: center;
  color: $font-color1;
}

.index .more_btn {
  margin-top: 20px;
}
</style>
