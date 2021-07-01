// 設定路由

import React from 'react'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Users from './pages/users'

function App() {
  return (
    // 路由器
    <Router>
      <>
        <Switch>
          {/* 路由 */}
          <Route exact path="/">
            <Users />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
