import React, { Component } from 'react'
import classnames from 'classnames'
import debounce from 'debounce'
import seedrandom from 'seedrandom'
import c from './life.scss'

interface Props {
  scale: number
  running: boolean
  framerate: number
  seed?: string,
  className?: string
}

interface State {
  animationPhase: number
  iteration: number,
  previousAnimationTimestamp: number,
  showCursor: boolean
}

export default class Life extends Component<Props, State> {
  static defaultProps: Partial<Props> = {
    scale: 4,
    running: true,
    framerate: 60
  }

  display = React.createRef<HTMLCanvasElement>()
  inputBuffer: number[][] = []
  animationInterval: number
  environment: number[][]
  numRows: number
  numCols: number
  cursorCol?: number
  cursorRow?: number
  drawing = false

  state: State = {
    animationPhase: 0,
    iteration: 0,
    previousAnimationTimestamp: 0,
    showCursor: false
  }

  constructor(props: Props) {
    super(props)
    this.draw = this.draw.bind(this)
    this.start = this.start.bind(this)

    this.flushInputBuffer = debounce(this.flushInputBuffer.bind(this), 1000)
    this.animationInterval = 1000 / this.props.framerate
  }

  tick(timestamp: number) {
    const { environment, numRows, numCols } = this
    const { animationPhase } = this.state

    const mask = animationPhase === 0 ? 1 : 2
    const writeMask = animationPhase === 0 ? 2 : 1

    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        const northRow = (numRows + i - 1) % numRows
        const southRow = (numRows + i + 1) % numRows
        const westCol = (numCols + j - 1) % numCols
        const eastCol = (numCols + j + 1) % numCols

        const neighbors = 0 +
          +((environment[northRow][westCol] & mask) >> animationPhase) +
          ((environment[northRow][j] & mask) >> animationPhase) +
          ((environment[northRow][eastCol] & mask) >> animationPhase) +
          ((environment[i][westCol] & mask) >> animationPhase) +
          ((environment[i][eastCol] & mask) >> animationPhase) +
          ((environment[southRow][westCol] & mask) >> animationPhase) +
          ((environment[southRow][j] & mask) >> animationPhase) +
          ((environment[southRow][eastCol] & mask) >> animationPhase)

        const cell = environment[i][j]

        if ((cell & mask) >> animationPhase === 1) {
          if (neighbors === 3 || neighbors === 2) {
            environment[i][j] = writeMask | cell
          } else {
            environment[i][j] = mask & cell
          }
        } else if (neighbors === 3) {
          environment[i][j] = writeMask | cell
        } else {
          environment[i][j] = mask & cell
        }
      }
    }

    this.setState({
      animationPhase: animationPhase === 0 ? 1 : 0,
      iteration: this.state.iteration + 1,
      previousAnimationTimestamp: timestamp
    })
  }

  draw() {
    const context = this.display.current.getContext('2d')
    const { scale } = this.props
    const { animationPhase } = this.state

    const mask = animationPhase === 0 ? 1 : 2

    // Draw environment
    for (let i = 0; i < this.numRows; i++) {
      for (let j = 0; j < this.numCols; j++) {
        if ((this.environment[i][j] && mask) >> animationPhase === 1) {
          context.fillStyle = 'white'
          context.fillRect(j * scale, i * scale, scale, scale)
        } else {
          context.fillStyle = 'black'
          context.fillRect(j * scale, i * scale, scale, scale)
        }
      }
    }

    // Draw input buffer
    context.fillStyle = 'red'
    for (const [i, j] of this.inputBuffer) {
      context.fillRect(j * scale, i * scale, scale, scale)
    }

    // Draw cursor
    if (this.state.showCursor) {
      context.fillStyle = 'red'
      context.fillRect(this.cursorCol * scale, this.cursorRow * scale, scale, scale)
    }
  }

  start(timestamp: number) {
    if (timestamp - this.state.previousAnimationTimestamp >= this.animationInterval) {
      this.tick(timestamp)
    }

    if (this.props.running) {
      window.requestAnimationFrame(this.start)
    }
  }

  flushInputBuffer() {
    const writeMask = this.state.animationPhase === 0 ? 1 : 2

    for (const [i, j] of this.inputBuffer) {
      this.environment[i][j] = writeMask | this.environment[i][j]
    }

    this.inputBuffer = []
  }

  seed() {
    const random = seedrandom(this.props.seed)
    this.environment = this.environment.map(row => {
      return [...row.map(() => {
        return Math.round(random() * 2) === 0 ? 0 : 3
      })]
    })
  }

  componentDidMount() {
    const canvas = this.display.current
    canvas.height = canvas.clientHeight
    canvas.width = canvas.clientWidth

    this.numCols = Math.ceil(canvas.width / this.props.scale)
    this.numRows = Math.ceil(canvas.height / this.props.scale)

    this.environment = ([...new Array(this.numRows)]).map(() => [...new Array(this.numCols)])

    this.cursorRow = 0
    this.cursorCol = 0

    this.drawing = false

    this.seed()
    this.tick(0)

    window.requestAnimationFrame(this.start)
  }

  handleMouseOver = (e: React.MouseEvent<HTMLCanvasElement>) => {
    this.cursorRow = Math.floor(e.nativeEvent.offsetY / this.props.scale)
    this.cursorCol = Math.floor(e.nativeEvent.offsetX / this.props.scale)
    this.setState({
      showCursor: true
    })
  }

  handleMouseDown = () => {
    this.drawing = true
    this.inputBuffer.push([this.cursorRow, this.cursorCol])
  }

  handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    this.cursorRow = Math.floor(e.nativeEvent.offsetY / this.props.scale)
    this.cursorCol = Math.floor(e.nativeEvent.offsetX / this.props.scale)

    if (this.drawing) {
      this.inputBuffer.push([this.cursorRow, this.cursorCol])
    }
  }

  handleMouseUp = () => {
    this.drawing = false
    this.flushInputBuffer()
  }

  handleMouseLeave = () => {
    this.drawing = false
    this.flushInputBuffer()
    this.setState({
      showCursor: false
    })
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevState.iteration !== this.state.iteration) {
      this.draw()
    }
  }

  render() {
    return <canvas
      ref={this.display}
      className={classnames(this.props.className, c.display)}
      onMouseOver={this.handleMouseOver}
      onMouseDown={this.handleMouseDown}
      onMouseMove={this.handleMouseMove}
      onMouseUp={this.handleMouseUp}
      onMouseLeave={this.handleMouseLeave}
    />
  }
}
