import React, { useState, useEffect } from 'react'
import './about.css'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import $ from 'jquery'
import herrosection1 from './img/about-carousel-pic1.jpg'
import herrosection2 from './img/about-carousel-pic2.jpg'
import herrosection3 from './img/about-carousel-pic3.jpg'
import herrosection4 from './img/about-carousel-pic4.jpg'

function About() {
  // useEffect(() => {
  //   $(window).scroll(function () {
  //     let scrolltop = $(this).scrollTop() //console.log(scrolltop);
  //     let windowheight = $(window).height() //為可視範圍console.log(windowheight);
  //     let websideheight = $('body').height() //console.log(websideheight);
  //     let persent = Math.floor(
  //       (scrolltop / (websideheight - windowheight)) * 100
  //     )
  //     console.log(persent) //等於 scrolltop/scrolltop
  //     if (persent >= 0) {
  //       $('nav').css('opacity', '1')
  //     }
  //   })
  // }, [])
  // useEffect(() => {}, [])

  return (
    <>
      <div className="container-1">
        <div className="about-big-group ">
          <div className="herro-section-top-group ">
            <div className="about-titlebox about-border-ck-bottom-1">
              品牌簡介
            </div>
            <div className="about-titlebox about-border-ck-bottom-2">
              加入我們
            </div>
            <div className="about-titlebox about-border-ck-bottom-3">
              聯絡我們
            </div>
            <div className="about-titlebox about-border-ck-bottom-4">
              明天見
            </div>
          </div>
          <div className="herro-section-bottom-group">
            <div className="about-img-wrap ">
              <div className="carousel-pic">
                <img src={herrosection1} alt="herrosection1" />
              </div>
              {/* <div className="carousel-pic">
                <img src={herrosection2} alt="herrosection2" />
              </div> */}
              <div className="carousel-pic">
                <img src={herrosection3} alt="herrosection3" />
              </div>
              <div className="carousel-pic">
                <img src={herrosection4} alt="herrosection4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
