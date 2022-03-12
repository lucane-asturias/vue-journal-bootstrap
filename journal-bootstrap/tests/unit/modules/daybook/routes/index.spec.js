import daybookRouter from '@/modules/daybook/router'

describe('Provas no modulo router de Daybook', () => {
  test('a rota deve ter esta configuracao abaixo', () => {
    expect(daybookRouter).toMatchObject({
      name: 'daybook',
      component: expect.any(Function),
      children: [
          {
              path: '',
              name: 'no-entry',
              component: expect.any(Function),
          },
          {
              path: ':id',
              name: 'entry',
              component: expect.any(Function),
              props: expect.any(Function)
          }
      ]
    })

  })

  test('deve de conter todos nomes dos componentes filhos', async () => {
    // expect( (await daybookRouter.children[0].component()).default.name).toBe('NoEntrySelected')
    // expect( (await daybookRouter.children[1].component()).default.name).toBe('EntryView')

    const promiseRoutes = []
    daybookRouter.children.forEach(child => promiseRoutes.push( child.component() ))
    const routes = (await Promise.all(promiseRoutes)).map(r => r.default.name)

    expect(routes).toContain('EntryView')
    expect(routes).toContain('NoEntrySelected')
  })

  test('deve de retornar o id de la rota', () => {
    const route = {
      params: {
        id: 'XYZ123'
      }
    }
    
    // expect(daybookRouter.children[1].props(route)).toEqual({ id: 'XYZ123' })
    const entryRoute = daybookRouter.children.find(route => route.name === 'entry')
    expect(entryRoute.props(route)).toEqual({ id: 'XYZ123' })
  })

})