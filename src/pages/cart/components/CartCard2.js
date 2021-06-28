import React from 'react'
import styled from 'styled-components'

const CartFunc = styled.div`
  display: none;
`

function CartCard2(props) {
  return (
    <>
      <div className="cart-tbody">
        <div className="item-card">
          <div>
            <input type="checkbox" className="cartId" />
            <img src="" alt="商品圖片" />
          </div>
          <div>阿拉比卡豆</div>
          <div>
            <select>
              <option></option>
            </select>
          </div>
          <div>
            <input value="12" />
          </div>
          <div>700</div>
          <div>8400</div>
          <CartFunc>
            <button className="outlineChoose">下次再買</button>
            <button onClick={() => {}}>
              <img src="" alt="iconDelete" />
            </button>
          </CartFunc>
        </div>
      </div>
    </>
  )
}
export default CartCard2
