import React from 'react'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Nav from './pages/nav/nav-index'
import Index from './pages/index/index'
import Footer from './pages/footer/footer-index'
// import Herrosection from './pages/index/components/Herrosection'

function App() {
  return (
    //路由器
    <>
      <Nav />
      <Router>
        <>
          <Switch>
            <Route exact path="/">
              <Index />
            </Route>
          </Switch>
        </>
        <Footer />
      </Router>
    </>
  )
}

export default App
