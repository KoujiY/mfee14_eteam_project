import React from 'react'

//組件
import MyCartCheck from './pages/cart/components/MyCartCheck'
import AddressCheck from './pages/cart/components/AddressCheck'
import CreditCheck from './pages/cart/components/CreditCheck'

function FinalCheck(props) {
  return (
    <>
      <div className="stepped">
        <img src="" alt="流程圖" />
      </div>
      <div className="cartBody dropDown">
        <h2>我的購物車</h2>
        <img alt="收合icon" onClick={() => {}}></img>
        <MyCartCheck />
      </div>
      <div className="cartBody dropDown">
        <h2>收貨地址</h2>
        <img alt="收合icon" onClick={() => {}}></img>
        <AddressCheck />
      </div>
      <CreditCheck />
      <div className="cartBody">
        <div>
          <span>商品小計</span>
          <span>NT$ 9600</span>
        </div>
        <div>
          <span>折扣減免</span>
          <span>-NT$ 50</span>
        </div>
        <div>
          <span>運費</span>
          <span>NT$ 0</span>
        </div>
        <div>
          <h3>
            總金額:
            <span>NT$ 1500</span>
          </h3>
        </div>
      </div>
      <button>結帳</button>
    </>
  )
}
export default FinalCheck
