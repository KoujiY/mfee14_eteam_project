import React from 'react'
import TotalBar from './components/TotalBar'
import CartCard2 from './components/CartCard2'

function MyCart(props) {
  return (
    <>
      <div className="cartBody">
        <h2>我的購物車</h2>
        <form>
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
          <CartCard2 />
        </form>
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
    </>
  )
}
export default MyCart
