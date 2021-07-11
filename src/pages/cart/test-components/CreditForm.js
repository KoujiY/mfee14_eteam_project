/**
 * 1. 信用卡區顯示條件未完成
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
import styled from 'styled-components'
// import './App.css'

//組件
// import MyCartCheck from './components/MyCartCheck'
// import AddressCheck from './components/AddressCheck'
import TotalBar from '../components/TotalBar'

//styled components
const CreditField = styled(FormGroup)`
  display: ${(props) => (props.primary ? 'block' : 'hidden')};
`

function CreditForm(props) {
  const { step3, setStep3, handleStep3Change } = props

  return (
    <>
      <div className="cartBody dropDown">
        <h2>我的購物車</h2>
        <img alt="收合icon" onClick={() => {}}></img>
        {/* <DropDown> */}
        {/* <MyCartCheck /> */}
        {/* </DropDown> */}
      </div>
      <div className="cartBody dropDown">
        <h2>收貨地址</h2>
        <img alt="收合icon" onClick={() => {}}></img>
        {/* <DropDown> */}
        {/* <AddressCheck /> */}
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
              <Typography className="changeInner">Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <div className="inputName">
                  <label htmlFor="creditName">持卡人姓名</label>
                  <TextField
                    type="text"
                    placeholder="您的姓名"
                    name="creditName"
                    valdefaultValueue={step3.creditName}
                    onChange={handleStep3Change}
                    required
                  ></TextField>
                </div>
              </FormGroup>

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
                  onChange={handleStep3Change}
                ></TextField>
              </div>
              <div class="inputName">
                <input type="checkbox" name="agree" />
                幫我記住聯絡資訊，下次使用
                <button type="button" onClick={() => {
                    document.getElementsByClassName('changeInner').innerHtml = '**'+step3.creditNum.slice(11,16)
                }}>
                  更新
                </button>
              </div>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
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
                  valdefaultValueue={step3.creditName}
                  onChange={handleStep3Change}
                  required
                ></TextField>
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
                  onChange={handleStep3Change}
                ></TextField>
              </div>
              <div class="inputName">
                <input type="checkbox" name="agree" />
                幫我記住聯絡資訊，下次使用
                <button type="button" onClick={() => {}}>
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
