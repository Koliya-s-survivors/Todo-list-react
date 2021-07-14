import { Component } from './baseComponent';

describe('Feature React class component ', () => {
  describe('Call render on changes props', () => {
    describe('Save params in props object', () => {
      it('positive scenario', () => {
        const result = 'a';
        const instanceComponent = new Component({ a: 'a' });
        expect(instanceComponent.props.a).toBe(result)
      })
    })
    describe('Render live circle when should be called', () => {
      it('positive scenario', () => {
        const result = 'a';
        const instanceComponent = new Component({ a: 'a' });
        
        const spy = jest.spyOn(instanceComponent,'render')
        instanceComponent.test()
        expect(spy).toHaveBeenCalled()
      })
    })
  })
})

