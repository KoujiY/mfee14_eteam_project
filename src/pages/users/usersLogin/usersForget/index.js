import React from 'react'

import './usersForget.css'

function UsersForget() {
  return (
    <>
      <div className="usersforgetBgc">
        <p className="usersforgetHead">確認信箱</p>
        <div className="usersforgetInp">
          <label forHtml="e-mail">信箱</label>
          <input
            type="e-mail"
            id="e-mail"
            name="e-mail"
            placeholder="請輸入e-mail，我們將會寄送新密碼給您"
          />
        </div>
        <div className="usersforgetBtn">
          <button>送出</button>
        </div>
      </div>
    </>
  )
}

export default UsersForget
