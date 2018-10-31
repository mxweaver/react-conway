import React, {
	Component
} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import c from './life.scss'

const DEAD = 0
const ALIVE = 1

const KEY_ENTER = 13
const KEY_P = 80

export default class Life extends Component {
	static propTypes = {
		className: PropTypes.string,
		scale: PropTypes.number
	}

	static defaultProps = {
		scale: 4
	}

	constructor(...params) {
		super(...params)
		this.display = React.createRef()
	}

	componentDidMount() {
		const canvas = this.display.current
		canvas.height = canvas.clientHeight
		canvas.width = canvas.clientWidth

		const CELL_HEIGHT = this.props.scale
		const CELL_WIDTH = this.props.scale

		const numCols = Math.ceil(canvas.width / CELL_WIDTH)
		const numRows = Math.ceil(canvas.height / CELL_HEIGHT)
		console.log(numRows, canvas.width)
		console.log(numCols, canvas.height)

		let environment = ([...new Array(numRows)]).map(() => [...new Array(numCols)])
		let nextEnvironment = ([...new Array(numRows)]).map(() => [...new Array(numCols)])
		let running = true

		let cursorRow = 0
		let cursorCol = 0

		if (!canvas.getContext) {
			// console.error("browser does not support canvas context")
		}

		environment = environment.map(row => {
			return [...row.map(() => {
				return Math.round(Math.random() * 2) === 0 ? DEAD : ALIVE
			})]
		})

		let overlay = ([...new Array(numRows)])
			.map(() => [...new Array(numCols)])
			.map(row => {
				return [...row.map(() => DEAD)]
			})

		let showCursor = false
		let drawing = false

		canvas.addEventListener('mouseover', e => {
			showCursor = true
			cursorRow = Math.floor(e.clientY / CELL_HEIGHT)
			cursorCol = Math.floor(e.clientX / CELL_WIDTH)
		})

		canvas.addEventListener('mousedown', () => {
			drawing = true
			overlay[cursorRow][cursorCol] = ALIVE
		})

		canvas.addEventListener('mouseup', () => {
			drawing = false
		})

		canvas.addEventListener('mousemove', e => {
			cursorRow = Math.floor(e.clientY / CELL_HEIGHT)
			cursorCol = Math.floor(e.clientX / CELL_WIDTH)

			if (drawing) {
				overlay[cursorRow][cursorCol] = ALIVE
			}
		})

		this.handleKeyDown = (e) => {
			if (e.keyCode === KEY_ENTER) {
				const numRows = overlay.length
				const numCols = overlay[0].length

				for (let i = 0; i < numRows; i++) {
					for (let j = 0; j < numCols; j++) {
						if (overlay[i][j] === ALIVE) {
							overlay[i][j] = DEAD
							environment[i][j] = ALIVE
						}
					}
				}
			} else if (e.keyCode === KEY_P) {
				running = !running

				if (running) {
					draw()
				}
			}
		}

		document.addEventListener('keydown', this.handleKeyDown)

		canvas.addEventListener('mouseleave', () => {
			showCursor = false
		})

		const context = canvas.getContext('2d')

		let northRow, southRow, westCol, eastCol, neighbors, temp

		function draw() {
			for (let i = 0; i < numRows; i++) {
				for (let j = 0; j < numCols; j++) {
					northRow = (numRows + i - 1) % numRows
					southRow = (numRows + i + 1) % numRows
					westCol = (numCols + j - 1) % numCols
					eastCol = (numCols + j + 1) % numCols

					neighbors = environment[northRow][westCol] +
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

			temp = environment
			environment = nextEnvironment
			nextEnvironment = temp

			// Draw environment
			for (let i = 0; i < numRows; i++) {
				for (let j = 0; j < numCols; j++) {
					if (environment[i][j] === ALIVE) {
						context.fillStyle = 'white'
						context.fillRect(j * CELL_WIDTH, i * CELL_HEIGHT, CELL_WIDTH, CELL_HEIGHT)
					} else {
						context.fillStyle = 'black'
						context.fillRect(j * CELL_WIDTH, i * CELL_HEIGHT, CELL_WIDTH, CELL_HEIGHT)
					}

					// Draw overlay
					if (overlay[i][j] === ALIVE) {
						context.fillStyle = 'red'
						context.fillRect(j * CELL_WIDTH, i * CELL_HEIGHT, CELL_WIDTH, CELL_HEIGHT)
					}
				}
			}

			// Draw cursor
			if (showCursor) {
				context.fillStyle = 'red'
				context.fillRect(cursorCol * CELL_WIDTH, cursorRow * CELL_HEIGHT, CELL_WIDTH, CELL_HEIGHT)
			}

			if (running) {
				window.requestAnimationFrame(draw)
			}
		}

		window.requestAnimationFrame(draw)
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyDown)
		this.handleKeyDown = undefined
	}

	render() {
		return <canvas
			ref={this.display}
			className={classnames(this.props.className, c.display)}
		/>
	}
}