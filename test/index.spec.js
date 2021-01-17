import { mount } from '@vue/test-utils'
import index from '@/store'
// import { Logo } from '@/components/Logo.vue'

// const localVue = mount()
// localVue.use(Vuex)

describe('store/index.js', () => {
  // const wrapper = mount(index)
  describe('getters', () => {
    describe('getFirstBody', () => {
      let wrapper
      beforeEach(() => {
        wrapper = mount(index)
      })
      console.log(wrapper)
      // console.log(index])
      test('statusがtodoのtodoが取得できること', () => {
        expect(index.getters.getFirstBody('<h1>aaaaaaaa</h1>', 5)).toBe('aaaaa')
      })
    })
  })
})
