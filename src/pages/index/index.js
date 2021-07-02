import React from 'react'
import './index.css'

import onepagepic from './img/herrosection.jpg'
import phoneherrosection from './img/phone-herrosection.jpg'
import colorshlip from './img/colorshlip.png'
import twosection from './img/twosection.jpg'
import phonetwosection from './img/phone-twosection.jpg'

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
            <a href="#/">尋找咖啡</a>{' '}
          </div>
          <div className="herro-button-right">
            <a href="#/">尋找店家</a>{' '}
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
          <img src="./img/long-colorship.png" alt="no-pic" />
        </div>
        <div className="three-section">
          <div className="threepage-pic">
            <img src="./img/threesection.jpg" alt="no-pic" />
          </div>
          <div className="phone-three-pic">
            <img src="./img/phone-threesection.jpg" alt="" />
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
              <img src alt="" />{' '}
            </div>
          </div>
          <div className="box">
            <div className="box1">
              <div className="box1-pic">
                <img src="./img/productcard.jpg" alt="no-pic" />
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
                <img src="./img/productcard.jpg" alt="no-pic" />
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
                <img src="./img/productcard.jpg" alt="no-pic" />
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
                <img src="./img/productcard.jpg" alt="no-pic" />
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
                <img src="./img/productcard.jpg" alt="no-pic" />
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
                <img src="./img/productcard.jpg" alt="no-pic" />
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
          <img src="./img/long-colorship.png" alt="no-pic" />
        </div>
        <div className="container-1">
          <div className="best-selling-group">
            <div className="fontsize-34 ">
              Best-selling goods
              <div className="border-bottom-blue"> </div>
            </div>
            <div className=" button-blue-bg fontsize-20">
              <a href="#/"> ALL </a>
              <div>
                <img src alt="" />{' '}
              </div>
            </div>
          </div>
          <div className="best-selling-item">
            <div className="box2">
              <div className="box2-group">
                <div className="box2-pic">
                  <img src="./img/productcard.jpg" alt="" />
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
                <img src="./img/productcard.jpg" alt="" />
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
                  <img src="./img/productcard.jpg" alt="" />
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
                  <img src="./img/productcard.jpg" alt="" />
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
