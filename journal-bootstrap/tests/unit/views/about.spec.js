import { shallowMount } from '@vue/test-utils'
import About from '@/views/About'

describe('Provas no About View', () => {
  test('deve renderizar o componente corretamente', () => {
    const wrapper = shallowMount(About)
    expect(wrapper.html()).toMatchSnapshot()
  })
})