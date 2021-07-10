import React, { useState } from 'react'
import TotalBar from '../components/TotalBar'
import CartCard from '../components/CartCard'
import { Container } from '@material-ui/core'
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
    // state,
    // setState,
    cateLabels,
    cateLabel,
    setCateLabel,
    price,
    setPrice,
    handleChange,
    count,
    setCount,
  } = props
  // const [product, setProduct] = useState({
  //   iId: '9999',
  //   pic: 'https://fakeimg.pl/125x125/',
  //   name: '範例咖啡豆',
  //   category: '',
  //   iPrice: 123,
  //   count: '',
  //   total: '',
  // })

  // //單價跟規格連動
  // const [cateLabel, setCateLabel] = useState(0)
  // const [price, setPrice] = useState(0)

  // const handleChange = (e) => {
  //   setCateLabel(e.target.value)
  //   setPrice(e.target.value)
  // }

  // const [count, setCount] = useState(1)

  return (
    <>
      <Container>
        <div className="cartBody">
          <section>
            <h2>我的購物車</h2>
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
            <CartCard
              step1={step1}
              setStep1={setStep1}
              // state={state}
              // setSetstate={setState}
              count={count}
              setCount={setCount}
              cateLabel={cateLabel}
              setCategory={setCateLabel}
              handleChange={handleChange}
              price={price}
              setPrice={setPrice}
              cateLabels={cateLabels}
            />
          </section>
        </div>
        <TotalBar />
        <div className="cartBody">
          <h3>猜你喜歡</h3>
          <div className="recommend-card">
            <img src="" alt="商品圖片" />
            <p>推薦商品</p>
            <span>NT$ 700</span>
            <button>購買</button>
          </div>
        </div>
      </Container>
    </>
  )
}
export default MyCartTest
