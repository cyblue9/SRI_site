<template>
  <div class="page">
    <div class="blog">
      <div class="page_title">
        <h1>BLOG</h1>
      </div>
      <v-container class="spacing-playground px-12">
        <template v-if="posts.length">
          <template v-for="(post, i) in posts">
            <v-row :key="i">
              <div class="post">
                <div class="post_date_author">
                  {{ getDay(post.fields.postDate) }}
                  {{ getTime(post.fields.postDate) }} by
                  {{ post.fields.postAuthor }}
                </div>
                <div class="post_title">
                  <nuxt-link v-bind:to="linkTo('posts', post)">
                    {{ post.fields.postTitle }}
                  </nuxt-link>
                </div>
                <template v-if="post.fields.postTag">
                  <v-chip
                    v-for="tag in post.fields.postTag"
                    :key="tag.sys.id"
                    :to="linkTo('tags', tag)"
                    small
                    label
                    outlined
                    class="ma-1"
                  >
                    <v-icon left size="18" color="#757575">
                      mdi-label
                    </v-icon>
                    <div class="tag_label">{{ tag.fields.name }}</div>
                  </v-chip>
                </template>
                <div class="card_body">
                  {{ getFirstBody($md.render(post.fields.postBody), 100) }}
                </div>
              </div>
            </v-row>
          </template>
        </template>
        <template v-else>
          投稿された記事はありません。
        </template>
      </v-container>
    </div>
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
      'linkTo',
      'getDay',
      'getTime',
      'getFirstBody'
    ])
  }
}
</script>

<style lang="scss">
@import '~/assets/variables.scss';

.page .blog .row {
  border-top: 1px solid #ccc;
  padding-top: 20px;
  padding-bottom: 10px;
}

.page .blog .post_date_author {
  font-size: 85%;
  color: $font-color2;
}

.page .blog .post_title {
  font-size: 200%;
  font-weight: 900;
}

.page .blog .post_title a:link,
.page .blog .post_title a:visited {
  color: $accent;
}

.page .blog .card_body {
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 120%;
  color: $font-color1;
  text-align: left;
  line-height: 1.5em;
}

.page .blog .tag_label {
  color: $font-color2;
}
</style>
