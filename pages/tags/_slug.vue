<template>
  <div class="page">
    <div class="tags">
      <v-container class="spacing-playground px-12">
        <div class="page_title">
          <h1>"{{ tag.fields.name }}" tag</h1>
        </div>
        <template v-for="(post, i) in associatePosts(tag)">
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
                {{ getFirstBody($md.render(post.fields.postBody), 350) }}
              </div>
            </div>
          </v-row>
        </template>
      </v-container>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['setEyeCatch', 'posts']),
    ...mapGetters([
      'setEyeCatch',
      'draftChip',
      'linkTo',
      'associatePosts',
      'getDay',
      'getTime',
      'getFirstBody'
    ])
  },
  asyncData({ payload, params, error, store, env }) {
    const tag =
      payload || store.state.tags.find((tag) => tag.fields.name === params.slug)
    if (tag) {
      const relatedPosts = store.getters.associatePosts(tag)
      return { tag, relatedPosts }
    } else {
      error({ statusCode: 400 })
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/blog_post.scss';
</style>
