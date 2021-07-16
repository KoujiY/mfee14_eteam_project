/**
 * 2. 3欄樣式、排版未完成
 * 3. 更新按鈕功能未完成
 * 4. 存取信用卡資料未完成(sql)
 *
 */
import {
  FormGroup,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  Accordion,
  AccordionDetails,
  Typography,
  AccordionSummary,
} from '@material-ui/core'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
// import './App.css'

//組件
// import MyCartCheck from './components/MyCartCheck'
import AddressCheck from '../components/AddressCheck'
import TotalBar from '../components/TotalBar'

//styled components
const CreditField = styled(FormGroup)`
  display: ${(props) => (props.primary ? 'block' : 'hidden')};
`
const validCreditNum = new RegExp(/\b(?:\d{4}[ -]?){3}(?=\d{4}\b)/)
function CreditForm(props) {
  const { step3, setStep3, handleStep3Change, register, errors, step2 } = props

  return (
    <>
      <div className="cartBody dropDown">
        <h2>我的購物車</h2>
        <img alt="收合icon" onClick={() => {}}></img>
        {/* <DropDown> */}
        {/* <MyCartCheck /> */}
        {/* </DropDown> */}
      </div>

      {/* <DropDown> */}
      <div className="cartBody dropDown">
        <Accordion>
          <AccordionSummary>
            <h2>收貨地址</h2>
          </AccordionSummary>
          <AccordionDetails>
            <AddressCheck step2={step2} />
          </AccordionDetails>
        </Accordion>

        {/* </DropDown> */}
      </div>

      <div className="cartBody">
        <h2>付款方式</h2>
        <RadioGroup
          value={step3.payment}
          name="payment"
          onChange={handleStep3Change}
        >
          <Accordion>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <FormControlLabel
                value="credit"
                name="payment"
                control={<Radio size="small" />}
                label="信用卡"
                labelPlacement="center"
                color="default"
                // size="small"
                onChange={handleStep3Change}
              />
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <div className="inputName">
                  <label htmlFor="creditName">持卡人姓名</label>
                  <TextField
                    type="text"
                    placeholder="您的姓名"
                    name="creditName"
                    defaultValue={step3.creditName}
                    onChange={handleStep3Change}
                    onBlur={step3.creditName.length < 2}
                    helperText={
                      step3.creditName.length > 0 && errors.creditName
                        ? errors.creditName
                        : ''
                    }
                    required
                  ></TextField>
                </div>
              </FormGroup>

              <div className="inputName">
                <label htmlFor="creditNum">卡號</label>
                <TextField
                  input
                  type="text"
                  placeholder="XXXX XXXX XXXX XXXX"
                  name="creditNum"
                  defaultValue={step3.creditNum}
                  onChange={handleStep3Change}
                  onBlur={!validCreditNum.test(step3.creditNum)}
                  helperText={
                    step3.creditNum.length > 0 && errors.creditNum
                      ? errors.creditNum
                      : ''
                  }
                  inputProps={{ maxLength: 16 }}
                ></TextField>
              </div>
              <div className="inputName">
                <label htmlFor="validity">有效期限</label>
                <TextField
                  type="text"
                  placeholder="MM/YY"
                  name="validity"
                  defaultValue={step3.validity}
                  onChange={handleStep3Change}
                  onBlur={
                    !/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(step3.validity)
                  }
                  helperText={
                    step3.validity.length > 0 && errors.validity
                      ? errors.validity
                      : ''
                  }
                ></TextField>
              </div>
              <div className="inputName">
                <label htmlFor="ccv">CCV</label>
                <TextField
                  input
                  type="text"
                  placeholder="123"
                  name="ccv"
                  maxLength="3"
                  minLength="3"
                  inputProps={{ pattern: /^\d{3}$/, maxLength: 3 }}
                  defaultValue={step3.ccv}
                  onChange={handleStep3Change}
                  onBlur={!/^\d{3}$/.test(step3.ccv)}
                  helperText={
                    step3.ccv.length > 0 && errors.ccv ? errors.ccv : ''
                  }
                ></TextField>
              </div>
              <div class="inputName">
                <input type="checkbox" name="agree" />
                幫我記住聯絡資訊，下次使用
                <button
                  type="button"
                  onClick={(e) => {
                    document.getElementsByClassName('changeText').innerHtml =
                      '**' + step3.creditNum.slice(11, 16)
                  }}
                >
                  更新
                </button>
              </div>
              <Typography></Typography>
            </AccordionDetails>
          </Accordion>

          <FormGroup>
            <FormControlLabel
              value="credit"
              name="payment"
              control={<Radio size="small" />}
              label="信用卡"
              labelPlacement="center"
              color="default"
              // size="small"
              onChange={handleStep3Change}
            />
            <div className="changeText"></div>
            <img alt="icon" />
          </FormGroup>
          {step3.payment !== '' && step3.payment === 'credit' ? (
            <CreditField type="primary" className="creditField">
              <div className="inputName">
                <label htmlFor="creditName">持卡人姓名</label>
                <TextField
                  type="text"
                  placeholder="您的姓名"
                  name="creditName"
                  defaultValue={step3.creditName}
                  onChange={handleStep3Change}
                  required
                >
                  {/* {errors.creditName && (
                    <small>{errors.creditName.message}</small>
                  )} */}
                </TextField>
              </div>
              <div className="inputName">
                <label htmlFor="creditNum">卡號</label>
                <TextField
                  type="text"
                  placeholder="****-****-****-****"
                  name="creditNum"
                  maxLength="16"
                  defaultValue={step3.creditNum}
                  onChange={handleStep3Change}
                ></TextField>
              </div>
              <div className="inputName">
                <label htmlFor="validity">有效期限</label>
                <TextField
                  type="text"
                  placeholder="MM/YY"
                  name="validity"
                  defaultValue={step3.validity}
                  onChange={handleStep3Change}
                ></TextField>
              </div>
              <div className="inputName">
                <label htmlFor="ccv">CCV</label>
                <TextField
                  input
                  type="text"
                  placeholder="123"
                  name="ccv"
                  maxLength="3"
                  minLength="3"
                  defaultValue={step3.ccv}
                  //驗證失敗
                  onChange={(e) =>
                    handleStep3Change(e) && step3.ccv.length === 3 ? (
                      step3.ccv
                    ) : (
                      <p>長度錯誤</p>
                    )
                  }
                ></TextField>
              </div>
              <div class="inputName">
                <input type="checkbox" name="agree" />
                幫我記住聯絡資訊，下次使用
                <button
                  type="button"
                  // onClick={(e) => {
                  //   document.getElementsByClassName('changeText').innerHtml =
                  //     '**' + step3.creditNum.slice(11, 16)
                  // }}
                >
                  更新
                </button>
              </div>
            </CreditField>
          ) : (
            ''
          )}
          <FormControlLabel
            value="行動支付"
            name="payment"
            control={<Radio size="small" />}
            label="行動支付"
            labelPlacement="center"
            color="default"
            // size="small"
            onChange={handleStep3Change}
          />
          <FormControlLabel
            value="貨到付款"
            name="payment"
            control={<Radio size="small" />}
            label="貨到付款"
            labelPlacement="center"
            color="default"
            // size="small"
            onChange={handleStep3Change}
          />
        </RadioGroup>
      </div>
      <TotalBar></TotalBar>
    </>
  )
}

export default CreditForm
