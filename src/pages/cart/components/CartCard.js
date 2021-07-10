/**
 * 1.單價隨規格連動未完成
 * 2.總價待修正變數值(setPrice), 商品數量加減沒有連動到 state中
 * 3.未連動資料庫(sql語法未完成)
 */
import React, { useState } from 'react'
import { TextField, MenuItem } from '@material-ui/core'
import styled from 'styled-components'

//功能組件
// import CateSelect from './CateSelect'

const CartFunc = styled.div`
  display: block;
`

function CartCard(props) {
  const {
    step1,
    setStep1,
    // state,
    // setState,
    price,
    setPrice,
    cateLabel,
    handleChange,
    count,
    setCount,
    cateLabels,
  } = props

  return (
    <>
      <div className="cart-tbody">
        <div className="item-card">
          <div>
            {/* input id rwd作用 */}
            <input type="hidden" className="cartId" value={step1[0].iId} />
            <img src={step1[0].pic} alt="商品圖片" />
          </div>
          <div>{step1[0].name}</div>
          <div>
            <TextField select value={cateLabel} onChange={handleChange}>
              {cateLabels.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <button
              type="button"
              onClick={() => (count <= 1 ? 1 : setCount(count - 1))}
            >
              -
            </button>
            <input
              type="text"
              value={count}
              onChange={count}
              min="1"
              max="10"
              maxLength="2"
            />
            {count}
            <button type="button" onClick={() => setCount(count + 1)}>
              +
            </button>
          </div>
          <div>{step1[0].iPrice}</div>
          <div>{step1[0].iPrice * count}</div>
          <CartFunc>
            <button className="outlineChoose" onClick={() => {}}>
              下次再買
            </button>
            <button onClick={() => {}}>
              <img src="" alt="iconDelete" />
            </button>
          </CartFunc>
        </div>
      </div>
    </>
  )
}
export default CartCard
