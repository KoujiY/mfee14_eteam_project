import React from 'react'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Nav from './pages/nav'

import Index from './pages/index'

import Footer from './pages/footer'

function App() {
  return (
    //路由器
    <Router>
      <>
        <Switch>
          <Route exact path="/">
            <Nav />
            <Index />
            <Footer />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
