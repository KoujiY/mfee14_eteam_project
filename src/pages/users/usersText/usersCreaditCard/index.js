import React from 'react'

import { Link } from 'react-router-dom'

import './usersCreaditCard.css'

function UsersCreaditCard() {
  return (
    <>
      <div className="usersCreaditCardBgc">
        <p className="memberTextTitle">信用卡資訊</p>

        <div className="usersCreaditCarddiv">
          <div className="usersCreaditCardTitle">
            <div>持卡人(英文)</div>
            <div>卡號</div>
            <div>有效期限</div>
            <div>驗證碼</div>
          </div>
          <div className="usersCreaditCardText">
            <div className="usersCreaditCardName">WU-SI-HAI</div>
            <div className="usersCreaditCardNumber">1561-5611-6515-8888</div>
            <div className="usersCreaditCardExp">2025/10/25</div>
            <div className="usersCreaditCardPwd">768</div>
            <div className="usersCreaditCardBtn">
              <button>編輯</button>
            </div>
            <div className="usersCreaditCardIcon">
              <Link to=""> X </Link>
            </div>
          </div>
          <div className="usersCreaditCardText">
            <div className="usersCreaditCardName">WU-SI-HAI</div>
            <div className="usersCreaditCardNumber">1561-5611-6515-8888</div>
            <div className="usersCreaditCardExp">2025/10/25</div>
            <div className="usersCreaditCardPwd">768</div>
            <div className="usersCreaditCardBtn">
              <button>編輯</button>
            </div>
            <div className="usersCreaditCardIcon">
              <Link to=""> X </Link>
            </div>
          </div>
          <div className="usersCreaditCardText">
            <div className="usersCreaditCardName">WU-SI-HAI</div>
            <div className="usersCreaditCardNumber">1561-5611-6515-8888</div>
            <div className="usersCreaditCardExp">2025/10/25</div>
            <div className="usersCreaditCardPwd">768</div>
            <div className="usersCreaditCardBtn">
              <button>編輯</button>
            </div>
            <div className="usersCreaditCardIcon">
              <Link to=""> X </Link>
            </div>
          </div>
          <div className="usersCreaditCardBtnAdd">
            <button>新增</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default UsersCreaditCard
