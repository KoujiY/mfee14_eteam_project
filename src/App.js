import React from 'react'
import { BrowserRouter as  Router,Route } from 'react-router-dom'
import TestForm from './pages/cart/test-components/TestForm'
import Steppers from './pages/cart/components/Steppers'
function App() {
  return (
    <Router>
      <>
        <Route exact path="/cart">
          <TestForm />
        </Route>
      </>
    </Router>
  )
}
export default App
