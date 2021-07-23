import React from 'react'
import styled from 'styled-components'
import { TextField, MenuItem, Container, Grid, Hidden } from '@material-ui/core'

//組件
import CartCard from './CartCard'

const CartFunc = styled.div`
  display: none;
`

function MyCartCheck(props) {
  const {
    step1,
    setStep1,
    cateLabels,
    cateLabel,
    setCateLabel,
    price,
    setPrice,
    handleChange,
    count,
    setCount,
  } = props
  // const cateLabels = [
  //   {
  //     value: 0,
  //     label: '200g',
  //     price: 200,
  //   },
  //   {
  //     value: 1,
  //     label: '500g',
  //     price: 400,
  //   },
  //   {
  //     value: 2,
  //     label: '1kg',
  //     price: 600,
  //   },
  //   {
  //     value: 3,
  //     label: '1.5kg',
  //     price: 800,
  //   },
  // ]
  return (
    <>
      <Hidden xsDown>
        <Container>
          <div className="cart-thead">
            <div className="cart-th">商品圖片</div>
            <div className="cart-th">商品名稱</div>
            <div className="cart-th">規格</div>
            <div className="cart-th">商品數量</div>
            <div className="cart-th">商品價格</div>
            <div className="cart-th">總價</div>
          </div>
        </Container>
      </Hidden>

      <Container className="item-card  ">
        {step1.map((v, i) => {
          v.iId = step1[i].iId
          v.iName = step1[i].iName
          v.iImg = step1[i].iImg
          v.sName = step1[i].sName
          v.cartQty = step1[i].cartQty
          v.sPrice = step1[i].sPrice
          v.total = v.cartQty * v.sPrice
          return (
            <Grid
              item
              key={i}
              value={i}
              style={{
                width:'95%',
                display: 'flex',
                // alignSelf:'center',
                justifyContent: 'space-between',
              }}
            >
              <div className="item-td">
                {/* input id rwd作用 */}
                <input type="hidden" key={i} className="cartId" value={v.iId} />
                <img src={v.iImg} alt="商品圖片" />
              </div>
              <div key={i} value={i}>
                {v.iName}
              </div>
              <div className="item-td">
                {/* <TextField
                    select
                    value={v.cateLabel}
                    key={i}
                    onChange={v.handleChange}
                  >
                    {cateLabels.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField> */}
                {v.sName}
              </div>
              <td className="item-td">{v.cartQty}</td>
              <td className="item-td">NT$ {v.sPrice}</td>
              <td className="item-td">NT$ {v.total}</td>
              {/* <td colSpan="2" className="item-td">
                  <button className="outlineChoose" onClick={(e) => {}}>
                    下次再買
                  </button>
                  <button className="outlineChoose">X</button>
                </td> */}
            </Grid>
          )
        })}
      </Container>
    </>
  )
}
export default MyCartCheck
