<template>
  <div class="page">
    <div class="posts">
      <v-container class="spacing-playground px-12">
        <template v-if="currentPost">
          <div class="page_title">
            <h1>{{ currentPost.fields.postTitle }}</h1>
          </div>
          <div class="post_date_author">
            {{ getDay(currentPost.fields.postDate) }}
            {{ getTime(currentPost.fields.postDate) }} by
            {{ currentPost.fields.postAuthor }}
          </div>
          <div class="post_body">
            <template>
              <div v-html="$md.render(currentPost.fields.postBody)"></div>
            </template>
          </div>
        </template>

        <template v-else>
          お探しの記事は見つかりませんでした。
        </template>

        <div class="pre_btn">
          <v-btn to="/blog" nuxt large color="red" class="white--text"
            >Back</v-btn
          >
        </div>
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
      'getDay',
      'getTime',
      'getFirstBody'
    ])
  },
  async asyncData({ payload, store, params, error }) {
    const currentPost =
      payload ||
      (await store.state.posts.find(
        (post) => post.fields.postSlug === params.slug
      ))

    if (currentPost) {
      return { currentPost }
    } else {
      return error({ statusCode: 400 })
    }
  }
}
</script>
<style lang="scss">
@import '~/assets/variables.scss';

.page .posts .post_date_author {
  text-align: right;
  color: $font-color2;
  font-size: 85%;
}

.page .posts .post_body {
  margin-top: 10px;
  margin-bottom: 20px;
  padding-top: 5px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

.page .posts .pre_btn {
  text-align: center;
}
</style>
