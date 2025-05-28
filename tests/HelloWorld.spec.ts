import { describe, it, expect } from 'vitest'
import { parse } from 'date-fns'

describe('HelloWorld', () => {
  console.log(parse('02/11/2014', 'MM/dd/yyyy', new Date()))
  it('is true truthy', () => {
    expect(true).toBeTruthy()
  })
})
