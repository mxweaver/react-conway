import React, {
	Component
} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import debounce from 'debounce'
import c from './life.scss'

const DEAD = 0
const ALIVE = 1

export default class Life extends Component {
	static propTypes = {
		className: PropTypes.string,
		scale: PropTypes.number,
		running: PropTypes.bool
	}

	static defaultProps = {
		scale: 10,
		running: true
	}

	constructor(...params) {
		super(...params)
		this.display = React.createRef()
		this.draw = this.draw.bind(this)
		this.start = this.start.bind(this)
		this.flushInputBuffer = debounce(this.flushInputBuffer.bind(this), 1500)
	}

	tick() {
		const { environment, nextEnvironment, numRows, numCols } = this

		for (let i = 0; i < numRows; i++) {
			for (let j = 0; j < numCols; j++) {
				const northRow = (numRows + i - 1) % numRows
				const southRow = (numRows + i + 1) % numRows
				const westCol = (numCols + j - 1) % numCols
				const eastCol = (numCols + j + 1) % numCols

				const neighbors = environment[northRow][westCol] +
					environment[northRow][j] +
					environment[northRow][eastCol] +
					environment[i][westCol] +
					environment[i][eastCol] +
					environment[southRow][westCol] +
					environment[southRow][j] +
					environment[southRow][eastCol]

				if (environment[i][j] === ALIVE) {
					if (neighbors !== 3 && neighbors !== 2) {
						nextEnvironment[i][j] = DEAD
					} else {
						nextEnvironment[i][j] = environment[i][j]
					}
				} else if (neighbors === 3) {
					nextEnvironment[i][j] = ALIVE
				} else {
					nextEnvironment[i][j] = environment[i][j]
				}
			}
		}

		const temp = environment
		this.environment = nextEnvironment
		this.nextEnvironment = temp
	}

	draw() {
		const context = this.display.current.getContext('2d')
		const { scale } = this.props

		// Draw environment
		for (let i = 0; i < this.numRows; i++) {
			for (let j = 0; j < this.numCols; j++) {
				if (this.environment[i][j] === ALIVE) {
					context.fillStyle = 'white'
					context.fillRect(j * scale, i * scale, scale, scale)
				} else {
					context.fillStyle = 'black'
					context.fillRect(j * scale, i * scale, scale, scale)
				}

				// Draw overlay
				if (this.overlay[i][j] === ALIVE) {
					context.fillStyle = 'red'
					context.fillRect(j * scale, i * scale, scale, scale)
				}
			}
		}

		// Draw cursor
		if (this.showCursor) {
			context.fillStyle = 'red'
			context.fillRect(this.cursorCol * scale, this.cursorRow * scale, scale, scale)
		}
	}

	start() {
		this.tick()
		this.draw()

		if (this.props.running) {
			window.requestAnimationFrame(this.start)
		}
	}

	flushInputBuffer() {
		for (let i = 0; i < this.numRows; i++) {
			for (let j = 0; j < this.numCols; j++) {
				if (this.overlay[i][j] === ALIVE) {
					this.overlay[i][j] = DEAD
					this.environment[i][j] = ALIVE
				}
			}
		}
	}

	componentDidMount() {
		const canvas = this.display.current
		canvas.height = canvas.clientHeight
		canvas.width = canvas.clientWidth

		this.numCols = Math.ceil(canvas.width / this.props.scale)
		this.numRows = Math.ceil(canvas.height / this.props.scale)

		this.environment = ([...new Array(this.numRows)]).map(() => [...new Array(this.numCols)])
		this.nextEnvironment = ([...new Array(this.numRows)]).map(() => [...new Array(this.numCols)])

		this.cursorRow = 0
		this.cursorCol = 0

		this.showCursor = false
		this.drawing = false

		this.environment = this.environment.map(row => {
			return [...row.map(() => {
				return Math.round(Math.random() * 2) === 0 ? DEAD : ALIVE
			})]
		})

		this.overlay = ([...new Array(this.numRows)])
			.map(() => [...new Array(this.numCols)])
			.map(row => {
				return [...row.map(() => DEAD)]
			})

		canvas.addEventListener('mouseover', e => {
			this.showCursor = true
			this.cursorRow = Math.floor(e.clientY / this.props.scale)
			this.cursorCol = Math.floor(e.clientX / this.props.scale)
		})

		canvas.addEventListener('mousedown', () => {
			this.drawing = true
			this.overlay[this.cursorRow][this.cursorCol] = ALIVE
		})

		canvas.addEventListener('mousemove', e => {
			this.cursorRow = Math.floor(e.clientY / this.props.scale)
			this.cursorCol = Math.floor(e.clientX / this.props.scale)

			if (this.drawing) {
				this.overlay[this.cursorRow][this.cursorCol] = ALIVE
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