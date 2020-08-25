import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Components
import Home from '../app/Home'
import About from '../app/About'
import User from '../app/User'

const Web = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/user' component={User} />
    </Switch>
  )
}

export default Web
