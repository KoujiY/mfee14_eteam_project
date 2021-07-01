import React from 'react'

import { BrowserRouter as Link } from 'react-router-dom'

import './usersText.css'

import MemberTextTitle from './style.js'

import dodi from '../img/dodi.png'

function UsersText() {
  return (
    <>
      {/* <p className="memberTextTitle">會員中心</p> */}
      <MemberTextTitle>會員中心</MemberTextTitle>
      <div className="memberConnect">
        <Link to="">會員資料</Link>
        <Link to="">會員商品追蹤</Link>
        <Link to="">會員消費紀錄</Link>
      </div>
      <div className="memberTextOutput memberBg">
        <div className="memberTextL">
          <img src={dodi} alt="" />

          <div className="memberCard">
            <div className="memberCardL">
              <div className="">性別</div>
              <div className="">暱稱</div>
              <div className="">興趣</div>
            </div>
            <div className="memberCardR">
              <div className="">男</div>
              <div className="">平常心</div>
              <div className="">打籃球、跳舞、游泳</div>
            </div>
          </div>
          <button className="creditCard">信用卡登錄/刪除事項</button>
          <button className="discount">折扣碼</button>
        </div>
        <div className="memberTextC">
          <div>姓名</div>
          <div>身分證字號</div>
          <div>e-mail</div>
          <div>電話</div>
          <div>出生年月日</div>
          <div>地址</div>
          <div>個人描述</div>
          <button className="edit">編輯</button>
        </div>
        <div className="memberTextR">
          <div>王老白</div>
          <div>A111111111</div>
          <div>ssss@gmail.com</div>
          <div>0988888888</div>
          <div>1999/09/09</div>
          <div>中華民國台北市大安區 復興南路一段390號2樓</div>
          <div>沉默是一種語言，「說幹話不只是 狀態，更是一種心態！」</div>
        </div>
      </div>
    </>
  )
}

export default UsersText
