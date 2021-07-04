import React from 'react'

import { Link } from 'react-router-dom'

import './usersText.css'

import UsersTitle from '../components/usersTitle'

import dodi from '../img/dodi.png'

function UsersText() {
  return (
    <>
      <UsersTitle />
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
          <Link to="./usersText/usersCreaditCard" className="usersTextBtn">
            信用卡登錄/刪除事項
          </Link>
          <Link to="./usersText/usersDiscount" className="usersTextBtn">
            折扣碼
          </Link>
        </div>
        <div className="memberTextC">
          <div>姓名</div>
          <div>身分證字號</div>
          <div>e-mail</div>
          <div>電話</div>
          <div>出生年月日</div>
          <div>地址</div>
          <div>個人描述</div>
          <Link to="./usersEdit" className="usersTextBtn">
            編輯
          </Link>
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
