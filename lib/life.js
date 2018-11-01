import React, {
	Component
} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import debounce from 'debounce'
import c from './life.scss'

const ALIVE = 1

export default class Life extends Component {
	static propTypes = {
		className: PropTypes.string,
		scale: PropTypes.number,
		running: PropTypes.bool,
		framerate: PropTypes.number
	}

	static defaultProps = {
		scale: 4,
		running: true,
		framerate: 60
	}

	constructor(...params) {
		super(...params)
		this.display = React.createRef()
		this.draw = this.draw.bind(this)
		this.start = this.start.bind(this)
		this.flushInputBuffer = debounce(this.flushInputBuffer.bind(this), 1000)

		this.inputBuffer = []

		this.animationInterval = 1000 / this.props.framerate
		this.previousAnimationTimestamp = 0

		this.animationPhase = 0
	}

	tick() {
		const { environment, numRows, numCols } = this

		const mask = this.animationPhase === 0 ? 1 : 2
		const writeMask = this.animationPhase === 0 ? 2 : 1

		for (let i = 0; i < numRows; i++) {
			for (let j = 0; j < numCols; j++) {
				const northRow = (numRows + i - 1) % numRows
				const southRow = (numRows + i + 1) % numRows
				const westCol = (numCols + j - 1) % numCols
				const eastCol = (numCols + j + 1) % numCols

				const neighbors = 0 + 
					+ ((environment[northRow][westCol] & mask) >> this.animationPhase)
					+ ((environment[northRow][j] & mask) >> this.animationPhase)
					+ ((environment[northRow][eastCol] & mask) >> this.animationPhase)
					+ ((environment[i][westCol] & mask) >> this.animationPhase)
					+ ((environment[i][eastCol] & mask) >> this.animationPhase)
					+ ((environment[southRow][westCol] & mask) >> this.animationPhase)
					+ ((environment[southRow][j] & mask) >> this.animationPhase)
					+ ((environment[southRow][eastCol] & mask) >> this.animationPhase)

				const cell = environment[i][j]

				if ((cell & mask) >> this.animationPhase === 1) {
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

		this.animationPhase = this.animationPhase === 0 ? 1 : 0
	}

	draw() {
		const context = this.display.current.getContext('2d')
		const { scale } = this.props

		const mask = this.animationPhase === 0 ? 1 : 2

		// Draw environment
		for (let i = 0; i < this.numRows; i++) {
			for (let j = 0; j < this.numCols; j++) {
				if ((this.environment[i][j] && mask) >> this.animationPhase === 1) {
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
			context.fillRect(j * scale, i * scale, scale,scale)
		}

		// Draw cursor
		if (this.showCursor) {
			context.fillStyle = 'red'
			context.fillRect(this.cursorCol * scale, this.cursorRow * scale, scale, scale)
		}
	}

	start(timestamp) {
		if (timestamp - this.previousAnimationTimestamp >= this.animationInterval) {
			this.tick()
			this.draw()

			this.previousAnimationTimestamp = timestamp
		}

		if (this.props.running) {
			window.requestAnimationFrame(this.start)
		}
	}

	flushInputBuffer() {
		const writeMask = this.animationPhase === 0 ? 1 : 2

		for (const [i, j] of this.inputBuffer) {
			this.environment[i][j] = writeMask | this.environment[i][j]
		}

		this.inputBuffer = []
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

		this.showCursor = false
		this.drawing = false

		this.environment = this.environment.map(row => {
			return [...row.map(() => {
				return Math.round(Math.random() * 2) === 0 ? 0 : 3
			})]
		})
		this.tick()

		canvas.addEventListener('mouseover', e => {
			this.showCursor = true
			this.cursorRow = Math.floor(e.clientY / this.props.scale)
			this.cursorCol = Math.floor(e.clientX / this.props.scale)
		})

		canvas.addEventListener('mousedown', () => {
			this.drawing = true
			this.inputBuffer.push([this.cursorRow, this.cursorCol])
		})

		canvas.addEventListener('mousemove', e => {
			this.cursorRow = Math.floor(e.clientY / this.props.scale)
			this.cursorCol = Math.floor(e.clientX / this.props.scale)

			if (this.drawing) {
				this.inputBuffer.push([this.cursorRow, this.cursorCol])
			}
		})

		canvas.addEventListener('mouseup', () => {
			this.drawing = false
			this.flushInputBuffer()
		})

		canvas.addEventListener('mouseleave', () => {
			this.drawing = false
			this.showCursor = false
			this.flushInputBuffer()
		})

		window.requestAnimationFrame(this.start)
	}

	render() {
		return <canvas
			ref={this.display}
			className={classnames(this.props.className, c.display)}
		/>
	}
}