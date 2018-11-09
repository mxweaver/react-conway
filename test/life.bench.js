import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Life from '../lib/life'
import pretty from 'pretty-time'

configure({
  adapter: new Adapter()
})

const life = mount(<Life running={false} />).instance()

function run (name, task) {
  const start = process.hrtime()
  task()
  const duration = process.hrtime(start)
  console.log(`#${name}: ${pretty(duration)}`)
}

run('tick', () => life.tick())
run('draw', () => life.draw())
run('seed', () => life.seed())
