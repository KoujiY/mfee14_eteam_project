import React from 'react'
import styled from 'styled-components'
import './App.css'

//組件
import MyCartCheck from './pages/cart/components/MyCartCheck'
import AddressCheck from './pages/cart/components/AddressCheck'
import CreditCheck from './pages/cart/components/CreditCheck'
const DropDown = styled.div`
  display: none;
  height: 100px;
`

function App() {
  return (
    <>
            <div className="cartBody">
        <h3>感謝您的購買!</h3>
        <img alt="動畫" />
        <h4>訂單已成立並寄信通知， 馬上去看看我的單！</h4>
        <button>去看我的訂單</button>
        <button>回首頁</button>
      </div>
    </>
  )
}
export default App
