import React from 'react'
import { should } from 'chai'
import { configure, mount } from 'enzyme'
import adapter from 'enzyme-adapter-react-16'
import Life from '../lib/life'

configure({
  adapter: adapter()
})

should()

describe('Life', () => {
  it('should not explode', () => {
    mount(<Life running={false} />)
  })
})
