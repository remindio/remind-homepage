import React from 'react'
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom'

import About from './About'
import App from './App'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/about" exact component={About} />
      </Switch>
    </Router>
  )
}