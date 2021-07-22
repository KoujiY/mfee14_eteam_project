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

      <tbody className="cart-tbody">
        {step1.length < 0 ? (
          <Grid item className="item-card">
            購物車沒有商品QQ
            <button>去選購</button>
          </Grid>
        ) : (
          step1.map((v, i) => {
            v.iId = step1[i].iId
            v.name = step1[i].name
            v.pic = step1[i].pic
            v.category = step1[i].category
            v.iCount = step1[i].iCount
            v.iPrice = step1[i].iPrice
            v.total = v.iCount * v.iPrice
            return (
              <Grid item xs={12}>
                <tr key={i} value={i}>
                  <td className="item-td">
                    {/* input id rwd作用 */}
                    <input
                      type="hidden"
                      key={i}
                      className="cartId"
                      value={v.iId}
                    />
                    <img src={v.pic} alt="商品圖片" />
                  </td>
                  <td key={i} value={i}>
                    {v.name}
                  </td>
                  <td className="item-td">
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
                    {v.category}
                  </td>
                  <td className="item-td">{v.iCount}</td>
                  <td className="item-td">{v.iPrice}</td>
                  <td className="item-td">{v.total}</td>
                  {/* <td colSpan="2" className="item-td">
                  <button className="outlineChoose" onClick={(e) => {}}>
                    下次再買
                  </button>
                  <button className="outlineChoose">X</button>
                </td> */}
                </tr>
              </Grid>
            )
          })
        )}
      </tbody>
    </>
  )
}
export default MyCartCheck
