import React from 'react'
import styled from 'styled-components'
import './App.css'

//組件
import MyCartCheck from './pages/cart/components/MyCartCheck'
import TotalBar from './pages/cart/components/TotalBar'

const DropDown = styled.div`
  display: none;
`

function Address(props) {
  return (
    <>
      <div className="stepped">
        <img src="" alt="流程圖" />
      </div>
      <div className="cartBody dropDown">
        <h2>我的購物車</h2>
        <svg alt="收合icon" onClick={() => {}}></svg>
        <DropDown>
          <MyCartCheck />
        </DropDown>
      </div>
      <div className="cartBody">
        <h2>收貨地址</h2>
        <form>
          <div className="address">
            <input type="radio" value="宅配" id="toHome" />
            宅配
            <input type="radio" value="超商取貨" id="to711" />
            超商取貨
            <div class="toHome">
              <div className="inputName">
                <label>國家</label>
                <input type="text" placeholder="請填國家名" />
              </div>
              <div className="inputName">
                <label>縣市名</label>
                <select>
                  <option value="0">請選擇城市</option>
                </select>
              </div>
              <div className="inputName">
                <label>鄉鎮區</label>
                <select>
                  <option value="0">請選擇行政區</option>
                </select>
              </div>
              <div className="inputName">
                <label>詳細地址</label>
                <input type="text" placeholder="請填街道名稱" />
              </div>
              <input type="checkbox" id="saveAddress" />
              幫我記住地址，下次使用
            </div>
            <div className="to711">
              <div className="inputName">
                <label>縣市名</label>
                <select>
                  <option value="0">請選擇縣市</option>
                </select>
              </div>
              <div className="inputName">
                <lable>店名</lable>
                <select>
                  <option value="0">請選擇店名</option>
                </select>
              </div>
              <span>目前僅支持7-11超商店取，不便之處還請見諒</span>
            </div>
            <div>
              <h3>運費</h3>
              <h3>NT$ 0</h3>
              <span>滿千符合免運，宅配將24hr到貨</span>
            </div>
          </div>
          <div className="contactInfo">
            <h4>聯絡方式</h4>
            <input type="checkbox" id="fillMemberInfo" />
            同會員資料
            <div>
              <label htmlFor="contactName">聯絡人姓名</label>
              <input type="text" placeholder="您的姓名" name="contactName" />
            </div>
            <div>
              <label htmlFor="contactPhone">手機號碼</label>
              <input
                type="text"
                placeholder="0912-345-678"
                name="contactPhone"
              />
            </div>
            <div>
              <label htmlFor="contactEmail">聯絡信箱</label>
              <input
                type="email"
                placeholder="123@email.com"
                name="contactEmail"
              />
            </div>
            <input type="checkbox" id="saveContacInfo" />
            幫我記住聯絡資訊，下次使用
            <input type="checkbox" id="saveEmailToSEO" />
            我想收到電子報，有優惠通知我。
          </div>
          {/* 不確定form表單submit 隱藏寫法 */}
          <input type="hidden" />
        </form>
        <TotalBar />
      </div>
    </>
  )
}

export default Address
