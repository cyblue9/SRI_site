<template>
  <div class="page">
    <div class="slug">
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
          <v-btn to="/blog" nuxt x-larg color="red" class="white--text"
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

.page .slug {
  padding-bottom: 120px;
  height: auto !important;
}

@media screen and (max-width: 480px) {
  .page .slug {
    min-height: 700px;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .page .slug {
    min-height: 920px;
  }
}
@media screen and (min-width: 1024px) {
  .page .slug {
    min-height: 500px;
  }
}

.page .slug .page_title {
  color: $font-color1;
}

.page .slug .post_date_author {
  text-align: right;
  color: $font-color2;
  font-size: 85%;
}

.page .slug .post_body {
  margin-top: 10px;
  margin-bottom: 20px;
  padding-top: 5px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

.page .slug .pre_btn {
  text-align: center;
}

.page .slug .page_title ::before {
  content: '';
  background-color: $accent;
  position: absolute;
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 100%;
  left: -30px;
  top: 25px;
}

.page .slug .page_title ::after {
  content: '';
  background-color: $accent;
  position: absolute;
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 100%;
  right: -30px;
  top: 25px;
}
</style>
