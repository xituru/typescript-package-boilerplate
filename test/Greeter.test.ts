import { Greeter } from '../src/index'

test('Greet Carl', () => {
  expect(Greeter('Carl')).toBe('Hello Carl!')
})
