import React, { useState, useEffect } from 'react'
import $ from 'jquery'
import '.././index.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

// import phoneherrosection from '../img/phone-herrosection.jpg'

function Foursection() {
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
      <div className="best-selling-group">
        <div className="Coffee products-text">
          Coffee products
          <div className="border-bottom-blue"> </div>
        </div>
        <div className=" button-blue-bg fontsize-20">
          <Link to="#/"> ALL </Link>
        </div>
      </div>
      <div className="best-selling-item">
        <div className="box2">
          <div className="box2-group">
            <div className="box2-pic">
              <img
                src={`http://localhost:3000/img/index/generalproduct/${
                  general.length > 0 && general[0].iImg
                }`}
                alt="123"
              />
            </div>
            <div className="item-1">
              <div className="item-2">
                <div className="product-card-text1">
                  {general.length > 0 && general[0].iName}
                </div>
                <div>svg</div>
              </div>
              <div className="product-card-text2">
                {general.length > 0 && general[0].iDiscr}
              </div>
              <div className="product-card-text3">
                特價:{general.length > 0 && general[0].iPrice}元
              </div>
              <div className="card-button">
                <Link to="#/"> 購買</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="box3">
          <div className="box2-pic">
            <img
              src={`http://localhost:3000/img/index/generalproduct/${
                general.length > 0 && general[1].iImg
              }`}
              alt="123"
            />
          </div>
          <div className="item-1">
            <div className="item-2">
              <div className="product-card-text1">
                {general.length > 0 && general[1].iName}
              </div>
              <div>svg</div>
            </div>
            <div className="product-card-text2">
              {general.length > 0 && general[1].iDiscr}
            </div>
            <div className="product-card-text3">
              特價:{general.length > 0 && general[1].iPrice}元
            </div>
            <div className="card-button">
              <Link to="#/"> 購買</Link>
            </div>
          </div>
        </div>
        <div className="box4">
          <div className="aaa">
            <div className="box2-pic">
              <img
                src={`http://localhost:3000/img/index/generalproduct/${
                  general.length > 0 && general[2].iImg
                }`}
                alt="123"
              />
            </div>
            <div className="item-1">
              <div className="item-2">
                <div className="product-card-text1">
                  {general.length > 0 && general[2].iName}
                </div>
                <div>svg</div>
              </div>
              <div className="product-card-text2">
                {general.length > 0 && general[2].iDiscr}
              </div>
              <div className="product-card-text3">
                特價:{general.length > 0 && general[1].iPrice}元
              </div>
              <div className="card-button">
                <Link to="#/"> 購買</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="box5">
          <div className="aaa">
            <div className="box2-pic">
              <img
                src={`http://localhost:3000/img/index/generalproduct/${
                  general.length > 0 && general[3].iImg
                }`}
                alt="123"
              />
            </div>
            <div className="item-1">
              <div className="item-2">
                <div className="product-card-text1">
                  {general.length > 0 && general[3].iName}
                </div>
                <div>svg</div>
              </div>
              <div className="product-card-text2">
                {general.length > 0 && general[3].iDiscr}
              </div>
              <div className="product-card-text3">
                特價:{general.length > 0 && general[3].iPrice}元
              </div>
              <div className="card-button">
                <a href="#/"> 購買</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Foursection
