import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import qs from 'query-string'
import c from './main.scss'
import Life from '../../lib/life'

interface Props {
  history: {
    location: {
      search: string
    }
  }
}

class Content extends Component<Props> {
  render() {
    const { seed } = qs.parse(this.props.history.location.search)
    return <Life className={c.life} seed={seed} />
  }
}

render(
  <Router>
    <Route component={Content} />
  </Router>,
  document.getElementById('react-root')
)
