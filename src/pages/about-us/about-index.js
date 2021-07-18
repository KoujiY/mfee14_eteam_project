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
    $(window).scroll(function () {
      let scrolltop = $(this).scrollTop() //console.log(scrolltop);
      let windowheight = $(window).height() //為可視範圍console.log(windowheight);
      let websideheight = $('body').height() //console.log(websideheight);
      let persent = Math.floor(
        (scrolltop / (websideheight - windowheight)) * 100
      )
      console.log(persent) //等於 scrolltop/scrolltop
      // if (persent >= 0) {
      //   $('nav').css(' position', 'fixed').css('z-index', '6')
      // }
      // if (persent >= 0) {
      //   $('nav').css('opacity', '1')
      // }
      if (persent >= 15) {
        $('nav').css('opacity', '0')
      } else {
        $('nav').css('transition', '0.5s').css('opacity', '1')
      }
    })
  }, [])

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
    $('.about-border-ck-bottom-1').on('click', () => {
      $('.about-border-ck-bottom-1').css('border-bottom', '#FF5554 solid 10px')
      $('.about-border-ck-bottom-2').css(
        'border-bottom',
        '#659de198 solid 10px'
      )
      $('.about-border-ck-bottom-3').css(
        'border-bottom',
        '#659de198 solid 10px'
      )
      $('.about-border-ck-bottom-4').css(
        'border-bottom',
        '#659de198 solid 10px'
      )
    })
    $('.about-border-ck-bottom-2').on('click', () => {
      $('.about-border-ck-bottom-1').css(
        'border-bottom',
        '#659de198 solid 10px'
      )
      $('.about-border-ck-bottom-2').css('border-bottom', '#FF5554 solid 10px')
      $('.about-border-ck-bottom-3').css(
        'border-bottom',
        '#659de198 solid 10px'
      )
      $('.about-border-ck-bottom-4').css(
        'border-bottom',
        '#659de198 solid 10px'
      )
    })
    $('.about-border-ck-bottom-3').on('click', () => {
      $('.about-border-ck-bottom-1').css(
        'border-bottom',
        '#659de198 solid 10px'
      )
      $('.about-border-ck-bottom-2').css(
        'border-bottom',
        '#659de198 solid 10px'
      )
      $('.about-border-ck-bottom-3').css('border-bottom', '#FF5554 solid 10px')
      $('.about-border-ck-bottom-4').css(
        'border-bottom',
        '#659de198 solid 10px'
      )
    })
    $('.about-border-ck-bottom-4').on('click', () => {
      $('.about-border-ck-bottom-1').css(
        'border-bottom',
        '#659de198 solid 10px'
      )
      $('.about-border-ck-bottom-2').css(
        'border-bottom',
        '#659de198 solid 10px'
      )
      $('.about-border-ck-bottom-3').css(
        'border-bottom',
        '#659de198 solid 10px'
      )
      $('.about-border-ck-bottom-4').css('border-bottom', '#FF5554 solid 10px')
    })
  }, [])

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
        <div className="ss">132132</div>
      </div>
    </>
  )
}

export default About
