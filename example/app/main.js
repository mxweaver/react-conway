import './main.scss'
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import qs from 'query-string'
import PropTypes from 'prop-types'
import c from './main.scss'
import Life from '../../lib/life'

function Content(props) {
    const { seed } = qs.parse(props.history.location.search)
    return <Life className={c.life} seed={seed}/>
}

Content.propTypes = {
    history: PropTypes.shape({
        location: PropTypes.shape({
            search: PropTypes.string
        }).isRequired
    }).isRequired
}

render(
    <Router>
        <Route component={Content}/>
    </Router>,
    document.getElementById('react-root')
)