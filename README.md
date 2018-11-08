# react-conway

[![npm](https://img.shields.io/npm/v/react-conway.svg)](https://www.npmjs.com/package/react-conway) [![Maintainability](https://api.codeclimate.com/v1/badges/36ef2a746b94a3af995a/maintainability)](https://codeclimate.com/github/mayavera/react-conway/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/36ef2a746b94a3af995a/test_coverage)](https://codeclimate.com/github/mayavera/react-conway/test_coverage)

## [Demo](http://mayavera.github.io/react-conway)

## Usage

```js
import React from 'react'
import { render } from 'react-dom'
import Life from '../../lib/life'

render(
    <Life
        className="life" { // will get passed on to the rendered canvas }
        seed="asura"     { // determines the initial state }
        scale="2"        { // determines the width and height of each cell }
        running={true}   { // pretty self-explanatory... }
        framerate={60}   { // sets the game loop frequency (60 iterations each second)}
    />,
    document.getElementById('react-root')
)
```

Check out [`/example`](example) to see it in action!

## Properties

### `className: string`

When set, it will be appended to the list of class names on the display element.

### `seed: string`

When set, this value will determine the initial state of the simulation. Otherwise, the initial state will be random.

### `scale: number = 4`

The ratio of pixels to cell. For instance, when `scale` is set to 4, each cell will be 4 pixels wide and 4 pixels tall.

### `running: bool = true`

When set to true, the simulation will progress.

### `framerate: number = 60`

Determines how many frames should be drawn in one second. Most screens these days are running at 60fps, so there's usually no need to change it. If you're expecting to run the simulation on low-power devices, you may want to set a lower framerate.
