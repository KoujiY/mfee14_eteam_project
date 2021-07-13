import React, { useState, useEffect } from 'react'
import './nav.css'
import Logo from './svg/LOGO.svg'
import $ from 'jquery'
import { withRouter } from 'react-router-dom'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function Nav() {
  useEffect(() => {
    let menuOpenBtn = document.querySelector('.navbar .bx-menu')
    let closeOpenBtn = document.querySelector('.nav-links .bx-x')
    let navLinks = document.querySelector('.nav-links')
    menuOpenBtn.addEventListener('click', () => {
      navLinks.style.left = '0'
    })
    closeOpenBtn.addEventListener('click', () => {
      navLinks.style.left = '-100%'
    })
    let htmlcssArrow = document.querySelector('.htmlcss-arrow')
    htmlcssArrow.addEventListener('click', () => {
      navLinks.classList.toggle('show1')
    })
    let jsarrow = document.querySelector('.js-arrow')
    jsarrow.addEventListener('click', () => {
      navLinks.classList.toggle('show2')
    })
    let allArrow = document.querySelector('.all-arrow')
    allArrow.addEventListener('click', () => {
      navLinks.classList.toggle('show3')
    })
  }, [])

  useEffect(() => {
    $(window).scroll(function () {
      let scrolltop = $(this).scrollTop() //console.log(scrolltop);
      let windowheight = $(window).height() //為可視範圍console.log(windowheight);
      let websideheight = $('body').height() //console.log(websideheight);
      let persent = Math.floor(
        (scrolltop / (websideheight - windowheight)) * 100
      )
      console.log(persent) //等於 scrolltop/scrolltop
      if (persent >= 15) {
        $('nav').css('opacity', '0')
      } else {
        $('nav').css('transition', '0.5s').css('opacity', '1')
      }
    })
  }, [])
  return (
    <>
      <nav>
        <div className="navbar">
          {/*?xml version="1.0" encoding="iso-8859-1"?*/}
          {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
          <svg
            className="bx bx-menu phone-nav-icon "
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 469.333 469.333"
            style={{ enableBackground: 'new 0 0 469.333 469.333' }}
            xmlSpace="preserve"
          >
            <g>
              <g>
                <g>
                  <path
                    d="M53.333,106.667H416c29.417,0,53.333-23.927,53.333-53.333S445.417,0,416,0H53.333C23.917,0,0,23.927,0,53.333
				S23.917,106.667,53.333,106.667z M53.333,21.333H416c17.646,0,32,14.354,32,32c0,17.646-14.354,32-32,32H53.333
				c-17.646,0-32-14.354-32-32C21.333,35.687,35.687,21.333,53.333,21.333z"
                  />
                  <path
                    d="M416,181.333H53.333C23.917,181.333,0,205.26,0,234.667S23.917,288,53.333,288H416c29.417,0,53.333-23.927,53.333-53.333
				S445.417,181.333,416,181.333z M416,266.667H53.333c-17.646,0-32-14.354-32-32s14.354-32,32-32H416c17.646,0,32,14.354,32,32
				S433.646,266.667,416,266.667z"
                  />
                  <path
                    d="M416,362.667H53.333C23.917,362.667,0,386.594,0,416s23.917,53.333,53.333,53.333H416
				c29.417,0,53.333-23.927,53.333-53.333S445.417,362.667,416,362.667z M416,448H53.333c-17.646,0-32-14.354-32-32
				c0-17.646,14.354-32,32-32H416c17.646,0,32,14.354,32,32C448,433.646,433.646,448,416,448z"
                  />
                </g>
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>

          <div className="logo">
            <a href="#/">codinglab</a>
          </div>
          <div className="nav-links">
            <div className="sidebar-logo">
              <span className="logo_name">CodeLab</span>
              {/*?xml version="1.0" encoding="iso-8859-1"?*/}
              {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
              <svg
                className="bx bx-x phone-nav-x"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 496.096 496.096"
                style={{ enableBackground: 'new 0 0 496.096 496.096' }}
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M259.41,247.998L493.754,13.654c3.123-3.124,3.123-8.188,0-11.312c-3.124-3.123-8.188-3.123-11.312,0L248.098,236.686
			L13.754,2.342C10.576-0.727,5.512-0.639,2.442,2.539c-2.994,3.1-2.994,8.015,0,11.115l234.344,234.344L2.442,482.342
			c-3.178,3.07-3.266,8.134-0.196,11.312s8.134,3.266,11.312,0.196c0.067-0.064,0.132-0.13,0.196-0.196L248.098,259.31
			l234.344,234.344c3.178,3.07,8.242,2.982,11.312-0.196c2.995-3.1,2.995-8.016,0-11.116L259.41,247.998z"
                    />
                  </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </div>
            <ul className="links">
              <li>
                <a href="#/">店家地圖</a>
                {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                <svg
                  className="nav-icon-4 bx bxs-chevron-down arrow htmlcss-arrow"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 490.688 490.688"
                  style={{ enableBackground: 'new 0 0 490.688 490.688' }}
                  xmlSpace="preserve"
                >
                  <path
                    style={{ fill: '#FFC107' }}
                    d="M472.328,120.529L245.213,347.665L18.098,120.529c-4.237-4.093-10.99-3.975-15.083,0.262
	c-3.992,4.134-3.992,10.687,0,14.82l234.667,234.667c4.165,4.164,10.917,4.164,15.083,0l234.667-234.667
	c4.237-4.093,4.354-10.845,0.262-15.083c-4.093-4.237-10.845-4.354-15.083-0.262c-0.089,0.086-0.176,0.173-0.262,0.262
	L472.328,120.529z"
                  />
                  <path
                    d="M245.213,373.415c-2.831,0.005-5.548-1.115-7.552-3.115L2.994,135.633c-4.093-4.237-3.975-10.99,0.262-15.083
	c4.134-3.992,10.687-3.992,14.82,0l227.136,227.115l227.115-227.136c4.093-4.237,10.845-4.354,15.083-0.262
	c4.237,4.093,4.354,10.845,0.262,15.083c-0.086,0.089-0.173,0.176-0.262,0.262L252.744,370.279
	C250.748,372.281,248.039,373.408,245.213,373.415z"
                  />
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>

                <ul className="htmlCss-sub-menu sub-menu">
                  <li>
                    <a href="#/">店家畫面</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#/">咖啡介紹</a>
                {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                <svg
                  className="nav-icon-4 bx bxs-chevron-down arrow js-arrow"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 490.688 490.688"
                  style={{ enableBackground: 'new 0 0 490.688 490.688' }}
                  xmlSpace="preserve"
                >
                  <path
                    style={{ fill: '#FFC107' }}
                    d="M472.328,120.529L245.213,347.665L18.098,120.529c-4.237-4.093-10.99-3.975-15.083,0.262
	c-3.992,4.134-3.992,10.687,0,14.82l234.667,234.667c4.165,4.164,10.917,4.164,15.083,0l234.667-234.667
	c4.237-4.093,4.354-10.845,0.262-15.083c-4.093-4.237-10.845-4.354-15.083-0.262c-0.089,0.086-0.176,0.173-0.262,0.262
	L472.328,120.529z"
                  />
                  <path
                    d="M245.213,373.415c-2.831,0.005-5.548-1.115-7.552-3.115L2.994,135.633c-4.093-4.237-3.975-10.99,0.262-15.083
	c4.134-3.992,10.687-3.992,14.82,0l227.136,227.115l227.115-227.136c4.093-4.237,10.845-4.354,15.083-0.262
	c4.237,4.093,4.354,10.845,0.262,15.083c-0.086,0.089-0.173,0.176-0.262,0.262L252.744,370.279
	C250.748,372.281,248.039,373.408,245.213,373.415z"
                  />
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>

                <ul className="js-sub-menu sub-menu">
                  <li>
                    <a href="#/">地球儀動態展示選擇</a>
                  </li>
                  <li>
                    <a href="#/">台灣地圖展示選擇</a>
                  </li>
                  <li>
                    <a href="#/">地球儀動態展示選擇</a>
                  </li>
                  <li>
                    <a href="#/">屬性標籤分類選擇</a>
                  </li>
                  <li>
                    <a href="#/">產地/產品介紹</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#/">全部商品</a>
                {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                <svg
                  className="nav-icon-4 bx bxs-chevron-down arrow all-arrow"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 490.688 490.688"
                  style={{ enableBackground: 'new 0 0 490.688 490.688' }}
                  xmlSpace="preserve"
                >
                  <path
                    style={{ fill: '#FFC107' }}
                    d="M472.328,120.529L245.213,347.665L18.098,120.529c-4.237-4.093-10.99-3.975-15.083,0.262
	c-3.992,4.134-3.992,10.687,0,14.82l234.667,234.667c4.165,4.164,10.917,4.164,15.083,0l234.667-234.667
	c4.237-4.093,4.354-10.845,0.262-15.083c-4.093-4.237-10.845-4.354-15.083-0.262c-0.089,0.086-0.176,0.173-0.262,0.262
	L472.328,120.529z"
                  />
                  <path
                    d="M245.213,373.415c-2.831,0.005-5.548-1.115-7.552-3.115L2.994,135.633c-4.093-4.237-3.975-10.99,0.262-15.083
	c4.134-3.992,10.687-3.992,14.82,0l227.136,227.115l227.115-227.136c4.093-4.237,10.845-4.354,15.083-0.262
	c4.237,4.093,4.354,10.845,0.262,15.083c-0.086,0.089-0.173,0.176-0.262,0.262L252.744,370.279
	C250.748,372.281,248.039,373.408,245.213,373.415z"
                  />
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>

                <ul className="all-sub-menu sub-menu">
                  <li>
                    <a href="#/">咖啡</a>
                  </li>
                  <li>
                    <a href="#/">器材</a>
                  </li>
                  <li>
                    <a href="#/">甜點</a>
                  </li>
                  <li>
                    <a href="#/">品牌周邊</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#/">關於我們</a>
              </li>
            </ul>
          </div>
          <div className="d-flex">
            <div>登入/註冊</div>
            <div>店家專區</div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
