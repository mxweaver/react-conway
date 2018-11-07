import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import pretty from 'pretty-time'
import fs from 'fs'
import format from 'dateformat'
import Life from '../lib/life'

const NS_PER_SEC = BigInt(1e9);

configure({
  adapter: new Adapter()
})

function bToA(bigint) {
  return [Number(bigint / NS_PER_SEC), Number(bigint% NS_PER_SEC)]
}

const suiteStart = new Date()
const outputDir = `benchmarks/${format(suiteStart, 'yyyy-mm-dd_hh:mm:ss')}`
fs.mkdirSync(outputDir)

function run (name, task) {
  const testStart = new Date()
  const filename = `${outputDir}/${name}.csv`

  const file = fs.createWriteStream(filename)
  let min = 0n, max = 0n, n = 0n
  file.write('duration\n')

  while(new Date().getTime() - testStart.getTime() < 1000) {
    const start = process.hrtime.bigint()
    
    task()

    const duration = process.hrtime.bigint() - start

    if (n == 0 || duration < min) {
      min = duration
    }

    if (n == 0 || duration > max) {
      max = duration
    }

    n++

    file.write(`${duration}\n`)
  }

  file.end()

  console.log(`#${name}:`)
  console.log(`    n: ${n}`)
  console.log(`  min: ${pretty(bToA(min))}`)
  console.log(`  max: ${pretty(bToA(max))}`)
  console.log()
}

const life = mount(<Life running={false}/>).instance()

run('tick', () => life.tick())
run('draw', () => life.draw())
run('seed', () => life.seed())