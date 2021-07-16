import React, { useState, useEffect } from 'react'
import $ from 'jquery'
import '.././index.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import colorshlip from '../img/colorshlip.png'
import phonetwosection from '../img/phone-twosection.jpg'
import longcolorship from '../img/long-colorship.png'

function Twosection() {
  return (
    <>
      <div className="two-section">
        <div className="two-colorship">
          <img src={colorshlip} alt="colorship" />
        </div>
        <div className=" twopage-pic">
          <div className="twopage-pic-bg"></div>
        </div>
        <div className=" phone-twopage-pic">
          <img src={phonetwosection} alt="phonetwosection" />
        </div>
        <div className="cardtwo">
          <div className="twopic-big-text">我們相遇在世界的角落</div>
          <div className="">
            <div className="twopic-big-text">在台灣再度重逢</div>
            <div className="twopic-big-text">在你手中</div>
            <div className="twopic-big-text">為你研磨最好的一品</div>
          </div>
          <div className="button-blue-left">
            <Link to="#/">尋找咖啡</Link>
          </div>
          <div className="button-blue-right">
            <Link to="#/">尋找店家</Link>
          </div>
        </div>
        <div className="twopage-rectangle"></div>
      </div>
      <div className="phone-long-colorship">
        <img src={longcolorship} alt="longcolorship" />
      </div>
    </>
  )
}
//我的爸爸是app.js
//小孩
export default Twosection
