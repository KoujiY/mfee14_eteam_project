/**
 * 1. 下拉式選單未完成: 預設值失敗、連棟失敗(找不到map屬性)
 * 2. input樣式
 * 3. error
 * 4. 運費連動
 * 5. 超取 fetch
 * 6. sql
 */

import React, { useState } from 'react'
import {
  FormGroup,
  RadioGroup,
  Radio,
  FormControlLabel,
  TextField,
  MenuItem,
  Container,
} from '@material-ui/core'
import styled from 'styled-components'
import { cities, townships } from '../data/townships'

// import './App.css'

//組件
import MyCartCheck from '../components/MyCartCheck'
import TotalBar from '../components/TotalBar'

const DropDown = styled.div`
  display: none;
`

function Address(props) {
  const {
    step2,
    setStep2,
    handleStep2Change,
    handleChange,
    step2Errors,
    setStep2Errors,
  } = props
  const [radio, setRadio] = useState('toHome')

  const [city, setCity] = useState(-1)
  const [township, setTownship] = useState(-1)
  const handleChoose = (e) => {
    setRadio(e.target.value)
  }

  // const [fieldErrors, setFieldErrors] = useState({
  //   agree: false,
  //   error: '',
  //   country: '',
  //   city: '',
  //   township: '',
  //   street: '',
  //   choose: '宅配', //單選 value
  //   name: '',
  //   phone: '',
  //   email: '',
  // })

  //表單送出
  const handleSubmit = (e) => {
    e.preventDefault()

    const data = new FormData(e.target)
  }

  // const handleChange = (e) => {
  //   const updatedFieldErrors = {
  //     ...fieldErrors,
  //     [e.target.name]: '',
  //   }

  //   setFieldErrors(updatedFieldErrors)
  // }

  // 有錯誤的訊息會觸發在這裡
  // const handleInvalid = (e) => {
  //   e.preventDefault()

  //   const updatedFieldErrors = {
  //     ...fieldErrors,
  //     [e.target.name]: e.target.validationMessage,
  //   }

  //   setFieldErrors(updatedFieldErrors)
  // }

  return (
    <>
      <div className="cartBody dropDown">
        <h2>我的購物車</h2>
        <svg alt="收合icon" onClick={() => {}}></svg>
        {/* <DropDown>
          <MyCartCheck />
        </DropDown> */}
      </div>
      <Container className="cartBody">
        <h2>收貨地址</h2>

        <FormGroup>
          <RadioGroup
            value={step2.choose}
            name="choose"
            onChange={handleChoose}
            row
          >
            <FormControlLabel
              value="宅配"
              control={<Radio defaultValue="宅配" size="small" />}
              label="宅配"
              labelPlacement="right"
              color="default"
              onChange={handleStep2Change}
              name="choose"
            />
            <FormControlLabel
              value="超商取貨"
              control={<Radio size="small" />}
              label="超商取貨"
              labelPlacement="right"
              color="default"
              size="small"
              onChange={handleStep2Change}
            />
          </RadioGroup>
          {step2.choose === '宅配' ? (
            <div className="toHome">
              <div className="inputName">
                <label for="country">國家</label>
                <TextField
                  input
                  type="text"
                  name="country"
                  defaultValue={step2.country}
                  onChange={handleStep2Change}
                  placeholder="請填國家名"
                  required
                ></TextField>
              </div>
              <div className="inputName">
                <label htmlFor="city">縣市名</label>
                <TextField
                  select
                  value={step2.city}
                  name="city"
                  onChange={handleStep2Change}
                >
                  <MenuItem value="-1">請選擇縣市</MenuItem>
                  {cities.map((value, index) => (
                    <MenuItem
                      type="option"
                      name="city"
                      key={index}
                      value={index}
                    >
                      {value === -1 ? '請選擇區域' : value}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div class="inputName">
                <label htmlFor="township">鄉鎮區</label>
                <TextField
                  select
                  value={step2.township}
                  name="township"
                  onChange={handleStep2Change}
                >
                  <MenuItem value="-1">選擇區域</MenuItem>
                  {step2.city > -1 &&
                    townships[step2.city].map((value, index) => (
                      <MenuItem key={index} value={index}>
                        {value}
                      </MenuItem>
                    ))}
                </TextField>
              </div>
              <div className="inputName">
                <label htmlFor="street">詳細地址</label>
                <TextField
                  type="text"
                  name="street"
                  defaultValue={step2.street}
                  onChange={handleStep2Change}
                  placeholder="請填街道名稱"
                  required
                ></TextField>
              </div>
              <input
                type="checkbox"
                name="agree"
                id="saveAddress"
                checked={step2.agree}
                onChange={handleStep2Change}
              />
              幫我記住地址，下次使用
            </div>
          ) : (
            <div className="to711">
              <div className="inputName">
                <label htmlFor="711city">縣市名</label>
                <select name="711city">
                  <option value="0">請選擇縣市</option>
                </select>
              </div>
              <div className="inputName">
                <label htmlFor="store">店名</label>
                <select name="store">
                  <option value="0">請選擇店名</option>
                </select>
              </div>
              <span>目前僅支持7-11超商店取，不便之處還請見諒</span>
            </div>
          )}

          <div>
            <div>
              運費
              <div>
                NT$
                {step2.choose === '宅配'
                  ? '80' + '滿千符合免運，宅配將24hr到貨'
                  : 60}
              </div>
            </div>
            {/* <span>滿千符合免運，宅配將24hr到貨</span> */}
          </div>
        </FormGroup>
        <FormGroup>
          <div className="contactInfo">
            <h4>聯絡方式</h4>
            <input type="checkbox" id="fillMemberInfo" />
            同會員資料
            <div>
              <label htmlFor="contactName">聯絡人姓名</label>
              <TextField
                type="text"
                placeholder="您的姓名"
                name="name"
                defaultValue={step2.name}
                onChange={handleStep2Change}
                required
              >
                <small>{step2Errors.name ? '請填入姓名' : ''}</small>
              </TextField>
            </div>
            <div>
              <label htmlFor="contactPhone">手機號碼</label>
              <TextField
                type="text"
                placeholder="0912-345-678"
                name="phone"
                pattern="09\d{2}\-?\d{3}\-?\d{3}"
                defaultValue={step2.phone}
                onChange={handleStep2Change}
                required
              ></TextField>
            </div>
            <div>
              <label htmlFor="contactEmail">聯絡信箱</label>
              <TextField
                type="email"
                placeholder="123@email.com"
                name="email"
                defaultValue={step2.email}
                onChange={handleStep2Change}
                pattern="/^\w ((-\w )|(\.\w ))*\@[A-Za-z0-9] ((\.|-)[A-Za-z0-9] )*\.[A-Za-z0-9] $/"
                required
              ></TextField>
            </div>
            <input type="checkbox" id="saveContacInfo" />
            幫我記住聯絡資訊，下次使用
            <input type="checkbox" id="saveEmailToSEO" />
            我想收到電子報，有優惠通知我。
          </div>
        </FormGroup>
      </Container>
      <TotalBar />
    </>
  )
}

export default Address
