import React, { useState, useEffect } from 'react'
import $ from 'jquery'
import '.././index.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
// import { withRouter } from 'react-router-dom'
// import colorshlip from '../img/colorshlip.png'
// import phonetwosection from '../img/phone-twosection.jpg'
import longcolorship from '../img/long-colorship.png'
import phonethreesection from '../img/phone-threesection.jpg'

function Threesection() {
  const [users, setUsers] = useState([])
  const [general, setgeneral] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  async function getUsersFromServer() {
    // 開啟載入指示
    setDataLoading(true)
    // 連接的伺服器資料網址
    const url = 'http://localhost:7000/home/read'
    // 注意header資料格式要設定，伺服器才知道是json格式
    //request代表是要跟伺服器要求
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    //29.設定檔頭為json
    //27~33.先告訴伺服器說我等傳過來是json
    //37.用await等伺服器做fetch,fetch回來接收到response
    //39.解出這個json
    const response = await fetch(request)
    const data = await response.json()
    // const homedata = data[0] //data的第幾筆資料
    // // console.log(homedata)
    // 設定資料
    setUsers(data)
    // // console.log(setUsers(data))
    // console.log(data)
    // console.log(users)
  }

  //////////////一般商品
  async function generalServer() {
    // 開啟載入指示
    setDataLoading(true)

    // 連接的伺服器資料網址
    const url = 'http://localhost:7000/home/general'
    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    // console.log(data)
    setgeneral(data)
  }

  // // 一開始就會開始載入資料
  useEffect(() => {
    // taste()  //假如這是新增的async function taste()
    getUsersFromServer()
  }, [])
  // // 一開始就會開始載入資料
  useEffect(() => {
    generalServer()
  }, [])

  return (
    <>
      <div className="three-section">
        <div className="threepage-pic-bg"></div>
        <div className="phone-three-pic">
          <img src={phonethreesection} alt="phonethreesection" />
        </div>
        <div className="three-content">
          <div className="">
            <div className="threepic-big-text">在車水馬龍的都會中，</div>
            <div className="threepic-big-text">你渴求著片刻的喘息...</div>
          </div>
          <div className="threepic-small-text">
            我們將守著那寧靜的角落，將一抹芬芳贈與給你
          </div>
        </div>
        <div className=" newproduct-text">
          New product listing
          <div className="border-bottom-white"></div>
        </div>
        <div className="button-black fontsize-20">
          <Link to="#/"> ALL</Link>
        </div>
        {/* //////////phone點擊按鈕的card   /////////////////////////////////////// */}
        <div className="phone-threesection-click-card">
          <div className="box">
            <div className="box1">
              <div className="box1-pic">
                <img
                  src={`http://localhost:3000/img/index/newproduct/${
                    users.length > 0 && users[0].iImg
                  }`}
                  alt="123"
                />
              </div>
              <div className="item-1">
                <div className="item-2">
                  <div className="product-card-text1">
                    {users.length > 0 && users[0].iName}
                  </div>
                  <div>svg</div>
                </div>
                <div className="product-card-text2">
                  {users.length > 0 && users[0].iDiscr}
                </div>
                <div className="product-card-text3">
                  特價:{users.length > 0 && users[0].iPrice}元
                </div>
                <div className="card-button">
                  <a href="#/"> 購買</a>
                </div>
              </div>
            </div>
            <div className="box1">
              <div className="box1-pic">
                <img
                  src={`http://localhost:3000/img/index/newproduct/${
                    users.length > 0 && users[1].iImg
                  }`}
                  alt="123"
                />
              </div>
              <div className="item-1">
                <div className="item-2">
                  <div className="product-card-text1">
                    {users.length > 0 && users[1].iName}
                  </div>
                  <div>svg</div>
                </div>
                <div className="product-card-text2">
                  {users.length > 0 && users[1].iDiscr}
                </div>
                <div className="product-card-text3">
                  特價:{users.length > 0 && users[1].iPrice}元
                </div>
                <div className="card-button">
                  <a href="#/"> 購買</a>
                </div>
              </div>
            </div>
            <div className="box1">
              <div className="box1-pic">
                <img
                  src={`http://localhost:3000/img/index/newproduct/${
                    users.length > 0 && users[2].iImg
                  }`}
                  alt="123"
                />
              </div>
              <div className="item-1">
                <div className="item-2">
                  <div className="product-card-text1">
                    {users.length > 0 && users[2].iName}
                  </div>
                  <div>svg</div>
                </div>
                <div className="product-card-text2">
                  {users.length > 0 && users[2].iDiscr}
                </div>
                <div className="product-card-text3">
                  特價:{users.length > 0 && users[2].iPrice}元
                </div>
                <div className="card-button">
                  <a href="#/"> 購買</a>
                </div>
              </div>
            </div>
            <div className="box1">
              <div className="box1-pic">
                <img
                  src={`http://localhost:3000/img/index/newproduct/${
                    users.length > 0 && users[3].iImg
                  }`}
                  alt="123"
                />
              </div>
              <div className="item-1">
                <div className="item-2">
                  <div className="product-card-text1">
                    {users.length > 0 && users[3].iName}
                  </div>
                  <div>svg</div>
                </div>
                <div className="product-card-text2">
                  {users.length > 0 && users[3].iDiscr}
                </div>
                <div className="product-card-text3">
                  特價:{users.length > 0 && users[3].iPrice}元
                </div>
                <div className="card-button">
                  <a href="#/"> 購買</a>
                </div>
              </div>
            </div>
            <div className="box1">
              <div className="box1-pic">
                <img
                  src={`http://localhost:3000/img/index/newproduct/${
                    users.length > 0 && users[4].iImg
                  }`}
                  alt="123"
                />
              </div>
              <div className="item-1">
                <div className="item-2">
                  <div className="product-card-text1">
                    {users.length > 0 && users[4].iName}
                  </div>
                  <div>svg</div>
                </div>
                <div className="product-card-text2">
                  {users.length > 0 && users[4].iDiscr}
                </div>
                <div className="product-card-text3">
                  特價:{users.length > 0 && users[4].iPrice}元
                </div>
                <div className="card-button">
                  <Link to="#/"> 購買</Link>
                </div>
              </div>
            </div>
            <div className="box1">
              <div className="box1-pic">
                <img
                  src={`http://localhost:3000/img/index/newproduct/${
                    users.length > 0 && users[5].iImg
                  }`}
                  alt="123"
                />
              </div>
              <div className="item-1">
                <div className="item-2">
                  <div className="product-card-text1">
                    {users.length > 0 && users[5].iName}
                  </div>
                  <div>svg</div>
                </div>
                <div className="product-card-text2">
                  {users.length > 0 && users[5].iDiscr}
                </div>
                <div className="product-card-text3">
                  特價:{users.length > 0 && users[5].iPrice}元
                </div>
                <div className="card-button">
                  <Link to="#/"> 購買</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="button-click">
        <div className="button-box-left">
          <div className="button-icon">
            {/*?xml version="1.0" encoding="iso-8859-1"?*/}
            {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
            <svg
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
                  <path d="M101.682,256l308.636,256V0L101.682,256z M370.407,427.043L164.196,256L370.407,84.957V427.043z" />
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
        <div className="button-box-right">
          <div className="button-icon">
            {/*?xml version="1.0" encoding="iso-8859-1"?*/}
            {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
            <svg
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
                  <path d="M101.682,0v512l308.636-256L101.682,0z M141.593,84.957L347.804,256L141.593,427.043V84.957z" />
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
      <div className="four-rectangle"></div>
    </>
  )
}
//我的爸爸是app.js
//小孩
export default Threesection
