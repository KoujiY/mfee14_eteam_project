import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import './usersLogin.css'

const UsersForget = './usersLogin/usersForget'

function UsersLogin(props) {
  const [uAcco, setUacco] = useState('')
  const [uPwd, setUpwd] = useState('')

  return (
    <>
      <div className="logintitle">
        <p>登入頁面</p>
      </div>
      <div className="loginRow">
        <div className="logindiv">
          <form action="">
            <p className="loginText">登入到您的帳戶</p>
            <p className="loginText">請輸入您的帳號和密碼</p>
            <div className="uAcco">
              <label forHtml="uAcco">帳號</label>
              <input
                className="inp"
                id="uAcco"
                name="uAcco"
                type="text"
                placeholder="請輸入帳號"
                value={uAcco}
                onChange={(e) => {
                  setUacco(e.target.value)
                }}
              />
            </div>
            <div className="uPwd">
              <label forHtml="uPwd">密碼</label>
              <input
                className="inp"
                id="uPwd"
                name="uPwd"
                type="password"
                placeholder="請輸入密碼"
                value={uPwd}
                onChange={(e) => {
                  setUpwd(e.target.value)
                }}
              />
            </div>
            <div className="chk">
              <input type="checkbox" name="cheakbox" id="chk" />
              <label forHtml="chk">保持登入</label>
            </div>
            <div className="logfor">
              <button className="btnBlue btn1" type="submit">
                登入
              </button>
              <div className="forget">
                <Link to={UsersForget}>忘記密碼?</Link>
              </div>
            </div>
          </form>
          <p className="loginOr">Or sign with</p>
          <button className="btnBlue btn2">Facebook</button>
          <button className="btng btn2">Line</button>
        </div>
        <div className="borderCenter"></div>
        <div className="register">
          <p>創建一個帳戶</p>
          <ul>
            <li>「說幹話不只是狀態，更是一種心態！」</li>
            <li>「說幹話不只是狀態，更是一種心態！」</li>
            <li>「說幹話不只是狀態，更是一種心態！」</li>
            <li>「說幹話不只是狀態，更是一種心態！」</li>
            <li>「說幹話不只是狀態，更是一種心態！」</li>
          </ul>
          <Link to="./usersRegister" className="btnBlue btn3">
            創建一個帳戶
          </Link>
        </div>
      </div>
    </>
  )
}

export default UsersLogin
