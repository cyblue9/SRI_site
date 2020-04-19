<template>
  <div class="blog">
    <h2>BLOG</h2>
    <v-container>
      <v-row>
        <template v-for="(post, i) in newestPost">
          <v-col :key="i" cols="12" md="4">
            <v-card class="mx-auto" height="650px" outlined>
              <v-img
                class="white--text align-end"
                height="230px"
                v-bind:src="getImgUrl()"
              ></v-img>
              <v-card-title>
                <h3 class="card_title">
                  {{ post.fields.postTitle }}
                </h3>
              </v-card-title>
              <v-card-text>
                <div class="card_date">
                  {{ getDay(post.fields.postDate) }}
                  {{ getTime(post.fields.postDate) }}
                </div>
                <div class="card_body">
                  {{ getFirstBody($md.render(post.fields.postBody), 350) }}
                </div>
              </v-card-text>
              <v-card-actions>
                <div class="card_btn">
                  <v-btn
                    v-bind:to="`/posts/${post.fields.postSlug}`"
                    x-large
                    color="red"
                    class="white--text"
                  >
                    More
                  </v-btn>
                </div>
              </v-card-actions>
            </v-card>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState(['posts']),
    ...mapGetters([
      'setEyeCatch',
      'draftChip',
      'getDay',
      'getTime',
      'getFirstBody'
    ]),
    newestPost() {
      return this.posts.slice(0, 3)
    }
  },
  methods: {
    getImgUrl() {
      return (
        'https://source.unsplash.com/featured/?nature,water,town,city' +
        Math.random(1000)
      )
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/variables.scss';

.index .blog {
  padding-top: 100px;
  padding-bottom: 200px;
  text-align: center;
  color: $font-color1;
  background-color: white;
}

.index .blog .card_title {
  font-size: 160%;
  color: $font-color1;
  font-weight: 500;
  font-family: 'Roboto';
  margin-left: auto;
  margin-right: auto;
  height: 60px;
}

.index .blog .card_date {
  font-size: 130%;
  color: $font-color2;
  text-align: right;
  height: 40px;
}

.index .blog .card_body {
  padding-top: 10px;
  border-top: thin solid $accent;
  font-size: 130%;
  color: $font-color1;
  text-align: left;
  line-height: 1.5em;
  height: 190px;
  overflow: hidden;
}

.index .blog .card_btn {
  margin-right: auto;
  margin-left: auto;
}

.index .blog h2 {
  display: inline-block;
  position: relative;
}

.index .blog h2::before {
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

.index .blog h2::after {
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
