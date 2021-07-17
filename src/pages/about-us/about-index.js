import React, { useState, useEffect } from 'react'
import './about.css'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import $ from 'jquery'

function About() {
  useEffect(() => {
    $(window).scroll(function () {
      let scrolltop = $(this).scrollTop() //console.log(scrolltop);
      let windowheight = $(window).height() //為可視範圍console.log(windowheight);
      let websideheight = $('body').height() //console.log(websideheight);
      let persent = Math.floor(
        (scrolltop / (websideheight - windowheight)) * 100
      )
      console.log(persent) //等於 scrolltop/scrolltop
      if (persent >= 0) {
        $('nav').css('opacity', '1')
      }
    })
  }, [])

  return (
    <>
      <div className="container-1">
        <div className="about-content-group">
          <div className="about-titlebox about-box-title1">品牌簡介</div>
          <div className="about-titlebox about-box-title2">加入我們</div>
          <div className="about-titlebox about-box-title3">聯絡我們</div>
          <div className="about-titlebox about-box-title4">明天見</div>
        </div>
      </div>
    </>
  )
}

export default About
