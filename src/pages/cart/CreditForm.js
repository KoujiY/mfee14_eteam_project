import React from 'react'
import styled from 'styled-components'
import './App.css'

//組件
import MyCartCheck from './pages/cart/components/MyCartCheck'
import AddressCheck from './components/AddressCheck'
import TotalBar from './pages/cart/components/TotalBar'

const DropDown = styled.div`
  display: none;
`

function CreditForm(props) {
  return (
    <>
      <div className="stepped">
        <img src="" alt="流程圖" />
      </div>
      <div className="cartBody dropDown">
        <h2>我的購物車</h2>
        <img alt="收合icon" onClick={() => {}}></img>
        <DropDown>
          {/* <MyCartCheck /> */}
        </DropDown>
      </div>
      <div className="cartBody dropDown">
        <h2>收貨地址</h2>
        <img alt="收合icon" onClick={() => {}}></img>
        <DropDown>
          <AddressCheck />
        </DropDown>
      </div>
      <div className="cartBody">
        <h2>付款方式</h2>
        <div>
          <input type="radio" />
          信用卡
          <img alt="icon" />
          <DropDown>
            <div>
              <label htmlFor="creditName">持卡人姓名</label>
              <input type="text" placeholder="您的姓名" name="creditName" />
            </div>
            <div>
              <label htmlFor="creditNum">卡號</label>
              <input
                type="text"
                placeholder="****-****-****-****"
                name="creditNum"
              />
            </div>
            <div>
              <label htmlFor="validity">有效期限</label>
              <input type="text" placeholder="MM/YY" name="validity" />
            </div>
            <div>
              <label htmlFor="securityCode">CCV</label>
              <input type="text" placeholder="123" name="securityCode" />
            </div>
            <input type="checkbox" id="saveContacInfo" />
            幫我記住聯絡資訊，下次使用
            <button>更新</button>
          </DropDown>
        </div>
        <div>
          <input type="radio" />
          行動支付
        </div>
        <div>
          <input type="radio" />
          貨到付款
        </div>
      </div>
      <TotalBar></TotalBar>
    </>
  )
}

export default CreditForm
