import React, { useState, useRef } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import CoffeeIntroduceGlobal from './pages/coffee-introduce/coffee-introduce-global'
import CoffeeIntroduceTaiwan from './pages/coffee-introduce/coffee-introduce-taiwan'
import ShopMapIndex from './pages/shop-map/shop-map-index'
import APIpage from './pages/shop-map/shop-map-APIpage'
import PartnersIndex from './pages/partners/partners-index'
import PartnersMainPage from './pages/partners/partners-mainPage'
import PartnersEdit from './pages/partners/partners-edit'

function App() {
  const [nowPosi, setNowPosi] = useState({ lat: 0, lng: 0 })
  const [addrIndex, setAddrIndex] = useState('')
  const addrRef = useRef('')

  return (
    <Router>
      <>
        {/* LINK連結區塊，開發用 */}
        <Link to="/coffee-introduce/coffee-introduce-global">
          | coffee-introduce-global |
        </Link>
        <Link to="/coffee-introduce/coffee-introduce-taiwan">
          | coffee-introduce-taiwan |
        </Link>
        <Link to="/partners/partners-index">| partners-index |</Link>
        <Link to="/partners/partners-mainPage">| partners-mainPage |</Link>
        <Link to="/partners/partners-edit">| partners-edit |</Link>
        <Link to="/shop-map/shop-map-index">| shop-map-index |</Link>
        <hr />
        {/* 路由表 */}
        <Switch>
          <Route path="/coffee-introduce/coffee-introduce-global">
            <CoffeeIntroduceGlobal />
          </Route>
          <Route path="/coffee-introduce/coffee-introduce-taiwan">
            <CoffeeIntroduceTaiwan />
          </Route>
          <Route path="/partners/partners-index">
            <PartnersIndex />
          </Route>
          <Route path="/partners/partners-mainPage">
            <PartnersMainPage />
          </Route>
          <Route path="/partners/partners-edit">
            <PartnersEdit />
          </Route>
          <Route path="/shop-map/shop-map-APIpage">
            <APIpage
              addrRef={addrRef}
              nowPosi={nowPosi}
              addrIndex={addrIndex}
              setNowPosi={setNowPosi}
              setAddrIndex={setAddrIndex}
            />
          </Route>
          <Route path="/shop-map/shop-map-index">
            <ShopMapIndex
              addrRef={addrRef}
              nowPosi={nowPosi}
              setNowPosi={setNowPosi}
              setAddrIndex={setAddrIndex}
            />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
