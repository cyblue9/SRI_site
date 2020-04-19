import client from '~/plugins/contentful'

export const state = () => ({
  posts: [],
  tags: []
})

export const getters = {
  linkTo: () => (name, obj) => {
    if (name === 'tags') {
      return {
        name: `${name}-slug`,
        params: { slug: obj.fields.name }
      }
    }
    return { name: `${name}-slug`, params: { slug: obj.fields.postSlug } }
  },
  associatePosts: (state) => (currentTag) => {
    const posts = []
    for (let i = 0; i < state.posts.length; i++) {
      const post = state.posts[i]
      console.log(post)
      if (post.fields.postTag) {
        const tag = post.fields.postTag.find(
          (tag) => tag.sys.id === currentTag.sys.id
        )
        if (tag) posts.push(post)
      }
    }
    return posts
  },
  getDay: () => (date) => {
    return date.split('T')[0]
  },
  getTime: () => (date) => {
    return date.split('T')[1]
  },
  getFirstBody: () => (body, len) => {
    return body.replace(/<[A-Za-z0-9_/]*>/g, '').slice(0, len)
  }
}

export const mutations = {
  setPosts(state, payload) {
    state.posts = payload
  },
  setLinks(state, entries) {
    state.tags = []
    state.categories = []
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i]
      if (entry.sys.contentType.sys.id === 'tag') state.tags.push(entry)
      else if (entry.sys.contentType.sys.id === 'category')
        state.categories.push(entry)
    }
    state.categories.sort((a, b) => a.fields.sort - b.fields.sort)
  }
}

export const actions = {
  async getPosts({ commit }) {
    await client
      .getEntries({
        content_type: process.env.CTF_BLOG_POST_TYPE_ID,
        order: '-fields.postDate',
        include: 1
      })
      .then((res) => {
        commit('setLinks', res.includes.Entry)
        commit('setPosts', res.items)
      })
      .catch(console.error)
  }
}
