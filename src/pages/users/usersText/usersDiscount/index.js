import React from 'react'

import { Link } from 'react-router-dom'

import './usersDiscount.css'

function UsersDiscount() {
  return (
    <>
      <div className="usersDiscountBgc">
        <p className="memberTextTitle">折扣碼資訊</p>

        <div className="memberConnect">
          <Link to="">未使用</Link>
          <Link to="">已使用</Link>
        </div>

        <div className="usersDiscountdiv">
          <div className="usersDiscountTitle">
            <div>折扣碼名稱</div>
            <div>折扣碼內容</div>
            <div>有效期限</div>
            <div>新增時間</div>
          </div>
          <div className="usersDiscountText">
            <div className="usersDiscountName">fjalkdjaskldjaksldjas</div>
            <div className="usersDiscountNumber">25%</div>
            <div className="usersDiscountExp">2025/10/25</div>
            <div className="usersDiscountAdd">2024/10/25</div>
          </div>
          <div className="usersDiscountText">
            <div className="usersDiscountName">fjalkdjaskldjaksldjas</div>
            <div className="usersDiscountNumber">25%</div>
            <div className="usersDiscountExp">2025/10/25</div>
            <div className="usersDiscountAdd">2024/10/25</div>
          </div>
          <div className="usersDiscountText">
            <div className="usersDiscountName">fjalkdjaskldjaksldjas</div>
            <div className="usersDiscountNumber">25%</div>
            <div className="usersDiscountExp">2025/10/25</div>
            <div className="usersDiscountAdd">2024/10/25</div>
          </div>
          <div className="usersDiscountText">
            <div className="usersDiscountName">fjalkdjaskldjaksldjas</div>
            <div className="usersDiscountNumber">25%</div>
            <div className="usersDiscountExp">2025/10/25</div>
            <div className="usersDiscountAdd">2024/10/25</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UsersDiscount
