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
                <div class="post_body">
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
@import '~/assets/blog_post.scss';
</style>
