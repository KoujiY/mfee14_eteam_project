import React, { useState, useEffect } from 'react'

import CartCard from '../components/CartCard'
import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
  Hidden,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  typography: {
    padding: theme.spacing(2),
  },
}))
function MyCartTest(props) {
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

  // 後端相關function：加入或更新購物車
  async function getCartData(iId, cartQty) {
    // 連接的伺服器資料網址
    // const url = 'http://localhost:7000/cart/session?iId=${iId}&cartQty=${cartQty}'
    const url = 'http://localhost:7000/cart/session?iId=1&cartQty=1'

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      credentials: 'include',
      method: 'GET', //GET不能接body
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log('伺服器回傳的json資料by read', data)
    setStep1(data.cart)
    console.log(step1)
  }

  useEffect(() => {
    getCartData()
  }, [])
  console.log(step1)

  const classes = useStyles()
  return (
    <>
      <div className="cartBody">
        <Grid container xs={12} className={classes.root}>
          <Grid item xs={12}>
            <table>
              <Hidden xsDown>
                <Paper xs={6} elevation={0}>
                  <Typography>
                    <h2>我的購物車</h2>
                  </Typography>

                  {/* <thead className="cart-thead">
                    <th className="cart-th">商品圖片</th>
                    <th className="cart-th">商品名稱</th>
                    <th className="cart-th">規格</th>
                    <th className="cart-th">商品數量</th>
                    <th className="cart-th">商品價格</th>
                    <th className="cart-th">總價</th>
                    <th className="cart-th" colSpan="2"></th>
                  </thead> */}
                  <div className="cart-thead">
            <div className="cart-th">商品圖片</div>
            <div className="cart-th">商品名稱</div>
            <div className="cart-th">規格</div>
            <div className="cart-th">商品數量</div>
            <div className="cart-th">商品價格</div>
            <div className="cart-th">總價</div>
            <div className="cart-th"> </div>
            <div> </div>
          </div>
                </Paper>
              </Hidden>
              {/* <Paper Paper xs={6} elevation={0}> */}
                <tbody>
                  <CartCard
                    step1={step1}
                    setStep1={setStep1}
                    count={count}
                    setCount={setCount}
                    cateLabel={cateLabel}
                    setCategory={setCateLabel}
                    handleChange={handleChange}
                    price={price}
                    setPrice={setPrice}
                    cateLabels={cateLabels}
                    getCartData={getCartData}
                  />
                </tbody>
              {/* </Paper> */}
            </table>
          </Grid>
        </Grid>
      </div>
      <div className="cartBody itemRecom">
        <h3>猜你喜歡</h3>
        <div className="recommend-card">
          <img src="" alt="商品圖片" />
          <p>推薦商品</p>
          <span>NT$ 700</span>
          <button type="button" onClick={() => getCartData()}>
            購買
          </button>
        </div>
      </div>
    </>
  )
}
export default MyCartTest
