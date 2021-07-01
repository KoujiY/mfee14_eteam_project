import React from 'react'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Index from './pages/index'

function App() {
  return (
    //路由器
    <Router>
      <>
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
