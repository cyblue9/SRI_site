<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-toolbar-title v-text="title" />
      <v-col class="text-right">
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          class="my-2"
        >
          {{ link }}
        </v-btn>
      </v-col>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer absolute app>
      <v-col class="text-center">
        <span>&copy; {{ new Date().getFullYear() }} - SRI</span>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [],
      links: ['HOME', 'About Us', 'Blog', 'Contact Us'],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'SRI'
    }
  }
}
</script>
