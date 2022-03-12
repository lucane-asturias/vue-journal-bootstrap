import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home'

describe('Provas no Home View', () => {
  test('deve renderizar o componente corretamente', () => {
    const wrapper = shallowMount(Home)
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('deve redirecionar a no-entry ao clicar no botao', () => {
    const mockRouter = {
      push: jest.fn()
    }

    const wrapper = shallowMount(Home, {
      global: {
        mocks: {
          $router: mockRouter
        }
      }
    })

    wrapper.find('button').trigger('click')

    expect(mockRouter.push).toHaveBeenCalled()
    expect(mockRouter.push).toHaveBeenCalledWith({ name: 'no-entry' })

  })
})