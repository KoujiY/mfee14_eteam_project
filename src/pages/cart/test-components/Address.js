/**
 * 1. 下拉式選單未完成: township重置預設值(-1)失敗
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
  Grid,
  Typography,
  FormControl,
} from '@material-ui/core'
import styled from 'styled-components'
import { cities, townships } from '../data/townships'
import '../Cart.css'

import { useForm } from 'react-hook-form'
//組件
import MyCartCheck from '../components/MyCartCheck'

function Address(props) {
  const {
    step1,
    step2,
    setStep2,
    handleStep2Change,
    step2Errors,
    register,
    setStep2Errors,
    errors,
    handleErrors,
    cateLabels,
    cateLabel,
    setCateLabel,
    price,
    setPrice,
    handleChange,
    count,
    setCount,
  } = props
  const [city, setCity] = useState(-1)
  const [township, setTownship] = useState(step2.township)

  const validPhone = new RegExp(/^09\d{8}$/)
  const validEmail = new RegExp(/\S+@\S+\.\S+/)

  // const { register } = useForm({ model: 'onChange' })

  return (
    <>
      <div className="cartBody dropDown">
        <Typography variant="subtitle1">
          <h2>我的購物車</h2>
        </Typography>
        <svg alt="收合icon" onClick={() => {}}></svg>
        {/* <DropDown> */}
        <MyCartCheck
          step1={step1}
          count={count}
          setCount={setCount}
          cateLabel={cateLabel}
          setCategory={setCateLabel}
          handleChange={handleChange}
          price={price}
          setPrice={setPrice}
          cateLabels={cateLabels}
        />
        {/* </DropDown> */}
      </div>
      <Container className="cartBody">
        <h2>收貨地址</h2>
        <Grid className="formBody">
          <FormGroup item className="addressPart">
            <RadioGroup
              value={step2.choose}
              name="choose"
              onChange={handleStep2Change}
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
                    placeholder="請填國家名"
                    type="text"
                    name="country"
                    defaultValue={step2.country}
                    onChange={handleStep2Change}
                    onBlur={!step2.country}
                    helperText={
                      step2.country.length > 0 && errors.country ? (
                        <span>{errors.country}</span>
                      ) : (
                        ''
                      )
                    }
                    required
                  />
                  {/* {console.log(step2Errors.country)} */}
                  {console.log('errors', errors)}
                </div>
                <div className="inputName">
                  <label htmlFor="city">縣市名</label>
                  <TextField
                    select
                    value={step2.city}
                    name="city"
                    onChange={handleStep2Change}
                    onBlur={step2.city === -1}
                    // helperText={
                    //   errors.city === -1 ? <span>{errors.city}</span> : ''
                    // }
                  >
                    {console.log(errors)}
                    {/* {console.log(errors.city)} */}
                    <MenuItem value="-1" option>
                      <em>請選擇縣市</em>
                    </MenuItem>
                    {cities.map((value, index) => (
                      <MenuItem
                        type="option"
                        name="city"
                        key={index}
                        value={index}
                      >
                        {value}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div class="inputName">
                  <label htmlFor="township">鄉鎮區</label>
                  <TextField
                    select
                    defaultValue={step2.township}
                    name="township"
                    onChange={handleStep2Change}
                    helperText={step2.township === -1 ? '必填' : ''}
                  >
                    <MenuItem value="-1">
                      <em>選擇區域</em>
                    </MenuItem>
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
                    // error={!step2.street}
                    onBlur={!step2.street}
                    placeholder="請填街道名稱"
                    helperText={
                      step2.street.length > 0 && errors.street ? (
                        <span>{errors.street}</span>
                      ) : (
                        ''
                      )
                    }
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
                  <label htmlFor="to711city">縣市名</label>
                  <select name="to711city">
                    <option value="0">請選擇縣市</option>
                  </select>
                </div>
                <div className="inputName">
                  <label htmlFor="to711Store">店名</label>
                  <select name="to711Store">
                    <option value="0">請選擇店名</option>
                  </select>
                </div>
                <small>目前僅支持7-11超商店取，不便之處還請見諒</small>
              </div>
            )}

            <div className="formContext">
              <div>運費</div>
              <div>NT$ {step2.choose === '宅配' ? '80' : 60}</div>
            </div>
            {step2.choose === '宅配' ? <small>滿千符合免運資格</small> : ''}
          </FormGroup>
          <div className="line"></div>
          <FormGroup item className="addressPart">
            <div className="contactInfo">
              <h4>聯絡方式</h4>
              <div class="inputName">
                <input
                  type="checkbox"
                  id="fillMemberInfo"
                  className="inputName"
                  onClick={() => {}}
                />
                同會員資料
              </div>
              <div className="inputName">
                <label htmlFor="contactName">聯絡人姓名</label>
                <TextField
                  type="text"
                  placeholder="您的姓名"
                  name="name"
                  defaultValue={step2.name}
                  onChange={handleStep2Change}
                  onBlur={step2.name.length < 2}
                  helperText={
                    step2.name.length > 0 && errors.name ? (
                      <span>{errors.name}</span>
                    ) : (
                      ''
                    )
                  }
                  required
                ></TextField>
              </div>
              <div className="inputName">
                <label htmlFor="contactPhone">手機號碼</label>
                <TextField
                  input
                  type="text"
                  placeholder="0912-345-678"
                  name="phone"
                  defaultValue={step2.phone}
                  onChange={handleStep2Change}
                  onBlur={!validPhone.test(step2.phone)}
                  helperText={
                    step2.phone.length > 0 && errors.phone ? (
                      <span>{errors.phone}</span>
                    ) : (
                      ''
                    )
                  }
                ></TextField>
              </div>
              <div className="inputName">
                <label htmlFor="contactEmail">聯絡信箱</label>
                <TextField
                  type="email"
                  placeholder="123@email.com"
                  name="email"
                  defaultValue={step2.email}
                  onChange={handleStep2Change}
                  required
                  onBlur={!validEmail.test(step2.email)}
                  helperText={
                    step2.email.length > 0 && errors.email ? (
                      <span>{errors.email}</span>
                    ) : (
                      ''
                    )
                  }
                ></TextField>
              </div>
              <input type="checkbox" id="saveContacInfo" />
              幫我記住聯絡資訊，下次使用
              <br />
              <input type="checkbox" id="saveEmailToSEO" />
              我想收到電子報，有優惠通知我。
            </div>
          </FormGroup>
        </Grid>
      </Container>
    </>
  )
}

export default Address
