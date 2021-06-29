//CreditForm(unfinished)
import React, { useState } from 'react'
import styled from 'styled-components'
import './App.css'

//組件
import MyCartCheck from './pages/cart/components/MyCartCheck'
import AddressCheck from './pages/cart/components/AddressCheck'
import TotalBar from './pages/cart/components/TotalBar'

//styled components
// const DropDown = styled.div`
//   display: block;
// `

function App() {
  //定義欄位
  const [field, setField] = useState({
    creditName: '',
    creditNum: '',
    validity: '',
    securityCode: '',
    payment: false,
    agree: false,
  })
  const [fieldErrors, setFieldErrors] = useState({
    creditName: '',
    creditNum: '',
    validity: '',
    securityCode: '',
    payment: '',
    agree: '',
  })

  //處理欄位變動
  const handleFieldChange = (e) => {
    //更新欄位值
    const updatedFields = {
      ...field,
      [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    }
    setField(updatedFields)
  }

  //處理表單送出事件
  const handleSubmit = (e) => {
    // 阻擋表單送出預設行為
    e.preventDefault()

    //FormData
    const data = new FormData(e.target)

    //傳入伺服器 session
    // fetch('/api/form-submit-url', {
    //   method: 'POST',
    //   body: data,
    // })
  }

  //form 更動時觸發
  const handleChange = (e) => {
    //清空該欄位錯誤訊息
    const updatedFieldsErrors = {
      ...fieldErrors,
      [e.target.name]: '',
    }
    setFieldErrors(updatedFieldsErrors)
  }

  return (
    <>
      <div className="stepped">
        <img src="" alt="流程圖" />
      </div>
      <div className="cartBody dropDown">
        <h2>我的購物車</h2>
        <img alt="收合icon" onClick={() => {}}></img>
        {/* <DropDown> */}
        <MyCartCheck />
        {/* </DropDown> */}
      </div>
      <div className="cartBody dropDown">
        <h2>收貨地址</h2>
        <img alt="收合icon" onClick={() => {}}></img>
        {/* <DropDown> */}
        <AddressCheck />
        {/* </DropDown> */}
      </div>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <div className="cartBody">
          <h2>付款方式</h2>
          <div>
            <input type="radio" value="creditPay" name="payment" />
            信用卡
            <img alt="icon" />
            {/* <DropDown> */}
            <div>
              <label htmlFor="creditName">持卡人姓名</label>
              <input
                type="text"
                placeholder="您的姓名"
                name="creditName"
                value={field.creditName}
                onChange={handleFieldChange}
                required
              />
            </div>
            <div>
              <label htmlFor="creditNum">卡號</label>
              <input
                type="text"
                placeholder="****-****-****-****"
                name="creditNum"
                maxLength="16"
              />
            </div>
            <div>
              <label htmlFor="validity">有效期限</label>
              <input type="text" placeholder="MM/YY" name="validity" />
            </div>
            <div>
              <label htmlFor="securityCode">CCV</label>
              <input
                type="text"
                placeholder="123"
                name="securityCode"
                maxLength="3"
                minLength="3"
              />
            </div>
            <input type="checkbox" name="agree" />
            幫我記住聯絡資訊，下次使用
            <button>更新</button>
            {/* </DropDown> */}
          </div>
          <div>
            <input type="radio" value="mobilePay" name="payment" />
            行動支付
          </div>
          <div>
            <input type="radio" value="cashPay" name="payment" />
            貨到付款
          </div>
        </div>
      </form>
      <TotalBar></TotalBar>
    </>
  )
}

export default App
