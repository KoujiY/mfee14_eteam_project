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
  useEffect(() => {
    // $('.likeicon').on('click', () => {
    //   $('.about-border-ck-bottom-1').css(
    //   )
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
      <div className="likeicon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.43 84.31">
          <defs>
            <style
              dangerouslySetInnerHTML={{ __html: '.cls-1{fill:#ff5554;}' }}
            />
          </defs>
          <g id="圖層_2" data-name="圖層 2">
            <g id="圖層_1-2" data-name="圖層 1">
              <path
                className="cls-1"
                d="M47.71,84.31a2.77,2.77,0,0,1-1.84-.7l-.12-.1c-4.06-3.56-7.88-6.81-11.58-10C24.26,65.1,15.71,57.81,9.76,50.74,3.1,42.82,0,35.43,0,27.49A28.93,28.93,0,0,1,7,8.28,24.19,24.19,0,0,1,25.35,0c10,0,16.42,6,20,11a36.23,36.23,0,0,1,2.37,3.85A38.12,38.12,0,0,1,50.09,11C53.66,6,60,0,70.08,0A24.19,24.19,0,0,1,88.47,8.28a28.93,28.93,0,0,1,7,19.21c0,7.94-3.1,15.33-9.76,23.25-6,7.07-14.5,14.36-24.41,22.81-3.7,3.15-7.52,6.4-11.58,10l-.12.1A2.78,2.78,0,0,1,47.71,84.31ZM25.35,5.59A18.66,18.66,0,0,0,11.16,12,23.33,23.33,0,0,0,5.59,27.49c0,14.36,12.81,25.28,32.21,41.8C41,72,44.26,74.8,47.71,77.8c3.46-3,6.74-5.79,9.92-8.51C77,52.77,89.84,41.85,89.84,27.49A23.33,23.33,0,0,0,84.27,12,18.66,18.66,0,0,0,70.08,5.59c-7.67,0-12.62,4.72-15.43,8.69a33,33,0,0,0-4.28,8.51,2.79,2.79,0,0,1-5.31,0,33.35,33.35,0,0,0-4.28-8.51C38,10.31,33,5.59,25.35,5.59Z"
              />
            </g>
          </g>
        </svg>
      </div>
    </>
  )
}

export default About
