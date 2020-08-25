import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Routes
import Web from './components/routes/Web'

const App = () => {
  return (
    <Router>
      <Route exact component={Web} />
    </Router>
  )
}

export default App