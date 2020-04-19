<template>
  <div class="index">
    <header>
      <banner />
    </header>
    <main>
      <about-us />
      <activity />
      <blog />
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
<style>
.index h2 {
  font-weight: bold;
  font-size: 300%;
  font-family: 'Roboto';
  text-transform: uppercase;
  display: inline-block;
  position: relative;
}

.index .more_btn {
  margin-top: 20px;
}
</style>
