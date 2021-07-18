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
  useEffect(() => {
    $('.about-border-ck-bottom-2').on('click', () => {
      $('.pic-block1').css('display', 'none')
      $('.pic-block2').css('display', 'block')
      $('.pic-block3').css('display', 'none')
      $('.pic-block4').css('display', 'none')
    })

    $('.about-border-ck-bottom-1').on('click', () => {
      $('.pic-block1').css('display', 'block')
      $('.pic-block2').css('display', 'none')
      $('.pic-block3').css('display', 'none')
      $('.pic-block4').css('display', 'none')
      $('.about-border-ck-bottom-2').css('border-bottom', 'red solid 10px')
    })

    $('.about-border-ck-bottom-3').on('click', () => {
      $('.pic-block1').css('display', 'none')
      $('.pic-block2').css('display', 'none')
      $('.pic-block3').css('display', 'block')
      $('.pic-block4').css('display', 'none')
    })
    $('.about-border-ck-bottom-4').on('click', () => {
      $('.pic-block1').css('display', 'none')
      $('.pic-block2').css('display', 'none')
      $('.pic-block3').css('display', 'none')
      $('.pic-block4').css('display', 'block')
    })
  }, [])
  useEffect(() => {
    $('.herro-section-top-group li').hover(() => {
      $(this)
        .css('.border-bottom', '#fcf5e9 solid 10px')
        .siblings()
        .css('border-bottom', 'solid 10px #659de198')
    })
  }, [])

  return (
    <>
      <div className="container-1">
        <div className="about-big-group ">
          <div className="herro-section-top-group ">
            <li className="about-titlebox about-border-ck-bottom-1">
              品牌簡介
            </li>
            <li className="about-titlebox about-border-ck-bottom-1">
              加入我們
            </li>
            <li className="about-titlebox about-border-ck-bottom-1">
              聯絡我們
            </li>
            <li className="about-titlebox about-border-ck-bottom-1">明天見</li>
          </div>
          <div className="herro-section-bottom-group">
            <div className="about-img-wrap ">
              <div className="carousel-pic pic-block1">
                <img src={herrosection1} alt="herrosection1" />
              </div>
              <div className="carousel-pic pic-block2">
                <img src={herrosection2} alt="herrosection2" />
              </div>
              <div className="carousel-pic pic-block3">
                <img src={herrosection3} alt="herrosection3" />
              </div>
              <div className="carousel-pic pic-block4">
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
