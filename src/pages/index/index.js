import React from 'react'
import './index.css'

import onepagepic from './img/herrosection.jpg'
import phoneherrosection from './img/phone-herrosection.jpg'
import colorshlip from './img/colorshlip.png'
import twosection from './img/twosection.jpg'
import phonetwosection from './img/phone-twosection.jpg'
import longcolorship from './img/long-colorship.png'
import productcard from './img/productcard.jpg'
import threesection from './img/threesection.jpg'

import phonethreesection from './img/phone-threesection.jpg'

function Index() {
  return (
    <>
      <div className="container">
        <div className="herro-section">
          <div className="onepage-pic">
            <img src={onepagepic} alt="onepage-pic" />
          </div>
          <div className="phone-onepage-pic">
            <img src={phoneherrosection} alt=" phone-herrosection" />
          </div>
          <div className="herro-text">
            <div>
              {/*?xml version="1.0" encoding="iso-8859-1"?*/}
              {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
              <svg
                className="nav-icon"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style={{ enableBackground: 'new 0 0 512 512' }}
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <polygon
                      points="447.894,263.57 275.989,435.474 275.989,0 236.011,0 236.011,435.474 64.106,263.57 35.838,291.838 256,512 
			476.162,291.838 		"
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
            <div className="d-flex-columm">
              <div>旅行‧寧靜‧生活</div>
              <div>Mercurius Coffee</div>
            </div>
          </div>
          <div className="onepage-rectangle" />
          <div className="herro-button-left">
            <a href="#/">尋找咖啡</a>
          </div>
          <div className="herro-button-right">
            <a href="#/">尋找店家</a>
          </div>
        </div>
        <div className="two-section">
          <div className="two-colorship">
            <img src={colorshlip} alt="colorship" />
          </div>
          <div className=" twopage-pic">
            <img src={twosection} alt="twosection" />
          </div>
          <div className=" phone-twopage-pic">
            <img src={phonetwosection} alt="phonetwosection" />
          </div>
          <div className="cardtwo">
            <div className="fontsize-34">我們相遇在世界的角落</div>
            <div className="mt-30">
              <div className="fontsize-34 px-15">在台灣再度重逢</div>
              <div className="fontsize-34 px-15">在你手中</div>
              <div className="fontsize-34 px-15">為你研磨最好的一品</div>
            </div>
            <div className="button-blue-left">
              <a href="#/">尋找咖啡</a>
            </div>
            <div className="button-blue-right">
              <a href="#/">尋找店家</a>
            </div>
          </div>
          <div className="twopage-rectangle" />
        </div>
        <div className="phone-long-colorship">
          <img src={longcolorship} alt="longcolorship" />
        </div>
        <div className="three-section">
          <div className="threepage-pic">
            <img src={threesection} alt="threesection" />
          </div>
          <div className="phone-three-pic">
            <img src={phonethreesection} alt="phonethreesection" />
          </div>
          <div className="three-content">
            <div className="fontsize60">
              <div className="py-15">在車水馬龍的都會中，</div>
              <div className="py-15">你渴求著片刻的喘息...</div>
            </div>
            <div className="fontsize16 py-15">
              我們將守著那寧靜的角落，將一抹芬芳贈與給你
            </div>
          </div>
          <div className=" fontsize-34 newproduct ">
            New product listing
            <div className="border-bottom-white"></div>
          </div>
          <div className="button-black fontsize-20">
            <a href="#/"> ALL</a>
            <div>
              <img src alt="" />
            </div>
          </div>
          <div className="box">
            <div className="box1">
              <div className="box1-pic">
                <img src={productcard} alt="productcard" />
              </div>
              <div className="item-1">
                <div className="item-2">
                  <div className="fontsize-20">精選咖啡豆</div>
                  <div>svg</div>
                </div>
                <div>
                  超好喝的超好喝的超好喝的超好喝的超好喝的超好喝的=超好喝的超好喝的超好喝的
                </div>
                <div className="card-button">
                  <a href="#/"> 購買</a>
                </div>
              </div>
            </div>
            <div className="box1">
              <div className="box1-pic">
                <img src={productcard} alt="productcard" />
              </div>
              <div className="item-1">
                <div className="item-2">
                  <div className="fontsize-20">精選咖啡豆</div>
                  <div>svg</div>
                </div>
                <div>
                  超好喝的超好喝的超好喝的超好喝的超好喝的超好喝的=超好喝的超好喝的超好喝的
                </div>
                <div className="card-button">
                  <a href="#/"> 購買</a>
                </div>
              </div>
            </div>
            <div className="box1">
              <div className="box1-pic">
                <img src={productcard} alt="productcard" />
              </div>
              <div className="item-1">
                <div className="item-2">
                  <div className="fontsize-20">精選咖啡豆</div>
                  <div>svg</div>
                </div>
                <div>
                  超好喝的超好喝的超好喝的超好喝的超好喝的超好喝的=超好喝的超好喝的超好喝的
                </div>
                <div className="card-button">
                  <a href="#/"> 購買</a>
                </div>
              </div>
            </div>
            <div className="box1">
              <div className="box1-pic">
                <img src={productcard} alt="productcard" />
              </div>
              <div className="item-1">
                <div className="item-2">
                  <div className="fontsize-20">精選咖啡豆</div>
                  <div>svg</div>
                </div>
                <div>
                  超好喝的超好喝的超好喝的超好喝的超好喝的超好喝的=超好喝的超好喝的超好喝的
                </div>
                <div className="card-button">
                  <a href="#/"> 購買</a>
                </div>
              </div>
            </div>
            <div className="box1">
              <div className="box1-pic">
                <img src={productcard} alt="productcard" />
              </div>
              <div className="item-1">
                <div className="item-2">
                  <div className="fontsize-20">精選咖啡豆</div>
                  <div>svg</div>
                </div>
                <div>
                  超好喝的超好喝的超好喝的超好喝的超好喝的超好喝的=超好喝的超好喝的超好喝的
                </div>
                <div className="card-button">
                  <a href="#/"> 購買</a>
                </div>
              </div>
            </div>
            <div className="box1">
              <div className="box1-pic">
                <img src={productcard} alt="productcard" />
              </div>
              <div className="item-1">
                <div className="item-2">
                  <div className="fontsize-20">精選咖啡豆</div>
                  <div>svg</div>
                </div>
                <div>
                  超好喝的超好喝的超好喝的超好喝的超好喝的超好喝的=超好喝的超好喝的超好喝的
                </div>
                <div className="card-button">
                  <a href="#/"> 購買</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="button03">
          <div>
            <button>左</button>
          </div>
          <div>
            <button>右</button>
          </div>
        </div>
        <div className="long-colorship">
          <img src={longcolorship} alt="longcolorship" />
        </div>

        <div className="chart-box">
          <div className="chartbox-icon ">
            {/*?xml version="1.0" encoding="iso-8859-1"?*/}
            {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 450.391 450.391"
              style={{ enableBackground: 'new 0 0 450.391 450.391' }}
              xmlSpace="preserve"
            >
              <g>
                <g>
                  <g>
                    <path
                      d="M143.673,350.322c-25.969,0-47.02,21.052-47.02,47.02c0,25.969,21.052,47.02,47.02,47.02
				c25.969,0,47.02-21.052,47.02-47.02C190.694,371.374,169.642,350.322,143.673,350.322z M143.673,423.465
				c-14.427,0-26.122-11.695-26.122-26.122c0-14.427,11.695-26.122,26.122-26.122c14.427,0,26.122,11.695,26.122,26.122
				C169.796,411.77,158.1,423.465,143.673,423.465z"
                    />
                    <path
                      d="M342.204,350.322c-25.969,0-47.02,21.052-47.02,47.02c0,25.969,21.052,47.02,47.02,47.02s47.02-21.052,47.02-47.02
				C389.224,371.374,368.173,350.322,342.204,350.322z M342.204,423.465c-14.427,0-26.122-11.695-26.122-26.122
				c0-14.427,11.695-26.122,26.122-26.122s26.122,11.695,26.122,26.122C368.327,411.77,356.631,423.465,342.204,423.465z"
                    />
                    <path
                      d="M448.261,76.037c-2.176-2.377-5.153-3.865-8.359-4.18L99.788,67.155L90.384,38.42
				C83.759,19.211,65.771,6.243,45.453,6.028H10.449C4.678,6.028,0,10.706,0,16.477s4.678,10.449,10.449,10.449h35.004
				c11.361,0.251,21.365,7.546,25.078,18.286l66.351,200.098l-5.224,12.016c-5.827,15.026-4.077,31.938,4.702,45.453
				c8.695,13.274,23.323,21.466,39.184,21.943h203.233c5.771,0,10.449-4.678,10.449-10.449c0-5.771-4.678-10.449-10.449-10.449
				H175.543c-8.957-0.224-17.202-4.936-21.943-12.539c-4.688-7.51-5.651-16.762-2.612-25.078l4.18-9.404l219.951-22.988
				c24.16-2.661,44.034-20.233,49.633-43.886l25.078-105.012C450.96,81.893,450.36,78.492,448.261,76.037z M404.376,185.228
				c-3.392,15.226-16.319,26.457-31.869,27.69l-217.339,22.465L106.58,88.053l320.261,4.702L404.376,185.228z"
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
          </div>
        </div>

        <div className="top-box">TOP</div>

        <div className="container-1">
          <div className="best-selling-group">
            <div className="fontsize-34 ">
              Best-selling goods
              <div className="border-bottom-blue"> </div>
            </div>
            <div className=" button-blue-bg fontsize-20">
              <a href="#/"> ALL </a>
              <div>
                <img src alt="" />
              </div>
            </div>
          </div>
          <div className="best-selling-item">
            <div className="box2">
              <div className="box2-group">
                <div className="box2-pic">
                  <img src={productcard} alt="productcard" />
                </div>
                <div className="item-1">
                  <div className="item-2">
                    <div className="fontsize-20">精選咖啡豆</div>
                    <div>svg</div>
                  </div>
                  <div>
                    超好喝的超好喝的超好喝的超好喝的超好喝的超好喝的=超好喝的超好喝的超好喝的
                  </div>
                  <div className="card-button">
                    <a href="#/"> 購買</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="box3">
              <div className="box2-pic">
                <img src={productcard} alt="productcard" />
              </div>
              <div className="item-1">
                <div className="item-2">
                  <div className="fontsize-20">精選咖啡豆</div>
                  <div>svg</div>
                </div>
                <div>
                  超好喝的超好喝的超好喝的超好喝的超好喝的超好喝的=超好喝的超好喝的超好喝的
                </div>
                <div className="card-button">
                  <a href="#/"> 購買</a>
                </div>
              </div>
            </div>
            <div className="box4">
              <div className="aaa">
                <div className="box2-pic">
                  <img src={productcard} alt="productcard" />
                </div>
                <div className="item-1">
                  <div className="item-2">
                    <div className="fontsize-20">精選咖啡豆</div>
                    <div>svg</div>
                  </div>
                  <div>
                    超好喝的超好喝的超好喝的超好喝的超好喝的超好喝的=超好喝的超好喝的超好喝的
                  </div>
                  <div className="card-button">
                    <a href="#/"> 購買</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="box5">
              <div className="aaa">
                <div className="box2-pic">
                  <img src={productcard} alt="productcard" />
                </div>
                <div className="item-1">
                  <div className="item-2">
                    <div className="fontsize-20">精選咖啡豆</div>
                    <div>svg</div>
                  </div>
                  <div>
                    超好喝的超好喝的超好喝的超好喝的超好喝的超好喝的=超好喝的超好喝的超好喝的
                  </div>
                  <div className="card-button">
                    <a href="#/"> 購買</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="four-rectangle" />
      </div>
    </>
  )
}
//我的爸爸是app.js
//小孩
export default Index
