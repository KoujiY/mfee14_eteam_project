import React, { useState, useEffect } from 'react'
import './nav.css'
import Logo from './svg/LOGO.svg'
import $ from 'jquery'
import { withRouter } from 'react-router-dom'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function Nav() {
  return (
    <>
      <nav>
        <div className="navbar1">
          <div className="logo1">
            <a href="#/">codinglab</a>
          </div>
          <div className="nav-links1">
            <ul className="links1">
              <li>
                <a href="#/">店家地圖</a>
              </li>
              <li>
                <a href="#/">咖啡介紹</a>
              </li>
              <li>
                <a href="#/">全部商品</a>
              </li>
              <li>
                <a href="#/">關於我們</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
