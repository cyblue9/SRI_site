<template>
  <v-app id="app">
    <v-app-bar fixed app>
      <router-link to="/">
        <v-toolbar-title>SRI</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <template v-for="menu in menus">
          <v-btn
            :key="menu.id"
            v-bind:to="`${menu.link}`"
            nuxt
            tile
            text
            color="blue-grey darken-2"
          >
            {{ menu.title }}
          </v-btn>
        </template>
      </v-toolbar-items>

      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = true"
        color="blue-grey darken-2"
      >
      </v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary right>
      <v-list nav dense rounded>
        <v-list-item-group v-model="group" active-class="text--accent-4">
          <template v-for="menu in menus">
            <v-list-item :key="menu.id" v-bind:to="`${menu.link}`">
              <v-list-item-icon>
                <v-icon color="blue-grey darken-2">{{ menu.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title
                v-text="menu.title"
                color="text--red"
              ></v-list-item-title>
            </v-list-item>
          </template>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <nuxt />
    <v-footer absolute app color="#f7f7f7">
      <v-col class="text-center" color="blue-grey darken-2">
        <span class="copyright"
          >&copy; {{ new Date().getFullYear() }} - SRI Made with
          <v-icon color="#F44336" size="20px">mdi-heart</v-icon>
          by Yuya Chiba (@cyblue9)</span
        >
      </v-col>
      <a href="https://github.com/cyblue9/SRI_site">
        <v-icon color="#F44336" size="30px">mdi-github</v-icon>
      </a>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      absolute: true,
      menus: [
        { title: 'Member', icon: 'mdi-account-group', link: '/member' },
        { title: 'Activity', icon: 'mdi-laptop', link: '/activity' },
        { title: 'Blog', icon: 'mdi-post-outline', link: '/blog' },
        { title: 'Contact Us', icon: 'mdi-email', link: '/contact' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false
    }
  },

  methods: {
    menuItems() {
      return this.menu
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/variables.scss';

#app .v-toolbar__title {
  color: $font-color1;
}

.copyright {
  color: #455a64;
}

.v-list-item__title {
  color: #455a64;
}

.v-btn:hover:before,
.v-btn:focus:before {
  color: $accent;
  background-color: $accent;
}
</style>
