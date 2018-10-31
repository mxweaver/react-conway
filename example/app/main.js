import './main.scss'
import React from 'react'
import { render } from 'react-dom'
import c from './main.scss'
import Life from '../../lib/life'

render(
    <Life className={c.life}/>,
    document.getElementById('react-root')
)