import React, { useState } from 'react'
import TotalBar from '../components/TotalBar'
import CartCard from '../components/CartCard'
import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
  Hidden,
} from '@material-ui/core'
// let products = {
//   iId: '',
//   pic: 'https://fakeimg.pl/250x100/',
//   name: '',
//   category: '',
//   price: '123',
//   count: 1,
//   total: '',
// }
//種類設定
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

                  <thead className="cart-thead">
                    <th className="cart-th">商品圖片</th>
                    <th className="cart-th">商品名稱</th>
                    <th className="cart-th">規格</th>
                    <th className="cart-th">商品數量</th>
                    <th className="cart-th">商品價格</th>
                    <th className="cart-th">總價</th>
                    <th className="cart-th" colSpan="2"></th>
                  </thead>
                  {/* <div className="cart-thead">
            <div className="cart-th">商品圖片</div>
            <div className="cart-th">商品名稱</div>
            <div className="cart-th">規格</div>
            <div className="cart-th">商品數量</div>
            <div className="cart-th">商品價格</div>
            <div className="cart-th">總價</div>
            <div className="cart-th"> </div>
            <div> </div>
          </div> */}
                </Paper>
              </Hidden>
              <Paper elevation={0}>
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
                  />
                </tbody>
              </Paper>
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
          <button>購買</button>
        </div>
      </div>
    </>
  )
}
export default MyCartTest
