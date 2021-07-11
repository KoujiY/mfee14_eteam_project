import React from 'react'
import styled from 'styled-components'

//組件
import CartCard from './CartCard'

const CartFunc = styled.div`
  display: none;
`

function MyCartCheck(props) {
  return (
    <>
      <div className="cart-thead">
        <div className="cart-th">商品圖片</div>
        <div className="cart-th">商品名稱</div>
        <div className="cart-th">規格</div>
        <div className="cart-th">商品數量</div>
        <div className="cart-th">商品價格</div>
        <div className="cart-th">總價</div>
        <CartFunc>
          <div className="cart-th">操作</div>
        </CartFunc>
      </div>
      <CartCard />
    </>
  )
}
export default MyCartCheck
