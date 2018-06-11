import './main.scss'

const CELL_WIDTH = 5
const CELL_HEIGHT = CELL_WIDTH

const DEAD = 0
const ALIVE = 1

const KEY_ENTER = 13
const KEY_P = 80

window.onload = () => {
    const canvas = document.getElementById('canvas')
    canvas.width = document.body.clientWidth
    canvas.height = document.body.clientHeight

    const numCols = Math.ceil(canvas.width / CELL_WIDTH)
    const numRows = Math.ceil(canvas.height / CELL_HEIGHT)

    let environment = ([...new Array(numRows)]).map(() => [...new Array(numCols)])
    let nextEnvironment = ([...new Array(numRows)]).map(() => [...new Array(numCols)])
    let running = true

    let cursorRow = 0
    let cursorCol = 0

    if (!canvas.getContext) {
        console.error("browser does not support canvas context")
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

    canvas.addEventListener('mousedown', e => {
        drawing = true
        overlay[cursorRow][cursorCol] = ALIVE
    })

    canvas.addEventListener('mouseup', e => {
        drawing = false
    })

    canvas.addEventListener('mousemove', e => {
        cursorRow = Math.floor(e.clientY / CELL_HEIGHT)
        cursorCol = Math.floor(e.clientX / CELL_WIDTH)

        if (drawing) {
            overlay[cursorRow][cursorCol] = ALIVE
        }
    })

    document.addEventListener('keydown', e => {
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
    })

    canvas.addEventListener('mouseleave', e => {
        showCursor = false
    })

    const context = canvas.getContext('2d')

    let cycle = 0
    let averageComputeTime = 0
    let northRow, southRow, westCol, eastCol, neighbors, temp, i, j, startTime

    function draw () {
        startTime = performance.now()
        
        for (i = 0; i < numRows; i++) {
            for (j = 0; j < numCols; j++) {
                northRow = (numRows + i - 1) % numRows
                southRow = (numRows + i + 1) % numRows
                westCol = (numCols + j - 1) % numCols
                eastCol = (numCols + j + 1) % numCols

                neighbors = environment[northRow][westCol]
                    + environment[northRow][j]
                    + environment[northRow][eastCol]
                    + environment[i][westCol]
                    + environment[i][eastCol]
                    + environment[southRow][westCol]
                    + environment[southRow][j]
                    + environment[southRow][eastCol]

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
        for (i = 0; i < numRows; i++) {
            for (j = 0; j < numCols; j++) {
                if (environment[i][j] === ALIVE) {
                    context.fillStyle = 'white'
                    context.fillRect(j * CELL_WIDTH, i * CELL_HEIGHT, CELL_WIDTH, CELL_HEIGHT)
                } else {
                    context.fillStyle = 'black'
                    context.fillRect(j * CELL_WIDTH, i * CELL_HEIGHT, CELL_WIDTH, CELL_HEIGHT)        
                }

                // Dray overlay
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

        // console.log(Math.floor(performance.now() - startTime))

        if (running) {
            window.requestAnimationFrame(draw)
        }
    }
    
    window.requestAnimationFrame(draw)

}