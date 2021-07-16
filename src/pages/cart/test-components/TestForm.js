
import React, { useState } from 'react'

import Steppers from '../components/Steppers'
import { cities, townships } from '../data/townships'

const cateLabels = [
  {
    value: 0,
    label: '200g',
    price: 200,
  },
  {
    value: 1,
    label: '500g',
    price: 400,
  },
  {
    value: 2,
    label: '1kg',
    price: 600,
  },
  {
    value: 3,
    label: '1.5kg',
    price: 800,
  },
]

const TestForm = () => {
  //分步驟為 3 step
  const [step1, setStep1] = useState([
    {
      iId: '9999',
      pic: 'https://fakeimg.pl/125x125/',
      name: '範例咖啡豆',
      category: '',
      iPrice: 123,
      iCount: 1,
      total: '',
    },
  ])

  const [step2, setStep2] = useState({
    error: '',
    country: '',
    city: -1,
    township: -1,
    street: '',
    choose: '宅配', //單選 value
    name: '',
    phone: '',
    email: '',
    to711city: '',
    to711Store: '',
  })

  const [step3, setStep3] = useState({
    creditName: '',
    creditNum: '',
    validity: '',
    ccv: '',
    payment: '',
    agree: false,
  })
  //欄位名
  // const [state, setState] = useState({
  //   products: [
  //     {
  //       iId: '9999',
  //       pic: 'https://fakeimg.pl/125x125/',
  //       name: '範例咖啡豆',
  //       category: '',
  //       iPrice: 123,
  //       iCount: 1,
  //       total: '',
  //     },
  //   ],
  //   address: {
  //     error: '',
  //     country: '',
  //     city: '',
  //     township: '',
  //     street: '',
  //     choose: '宅配', //單選 value
  //     name: '',
  //     phone: '',
  //     email: '',
  //   },
  //   credit: {
  //     creditName: '',
  //     creditNum: '',
  //     validity: '',
  //     securityCode: '',
  //     payment: false,
  //     agree: false,
  //   },
  // })

  //單價跟規格連動
  const [cateLabel, setCateLabel] = useState(0)
  const [price, setPrice] = useState(0)
  const [count, setCount] = useState(1)

  const [step2Errors, setStep2Errors] = useState({
    country: '',
    city: '',
    township: -1,
    street: -1,
    name: '',
    phone: '',
    email: '',
    to711city: '',
    to711Store: '',
  })

  const [step3Errors, setStep3Errors] = useState({
    creditName: '',
    creditNum: '',
    validity: '',
    ccv: '',
    payment: false,
  })

  //變更欄位內容(step1)
  const handleStep1Change = (e) => {
    const updatedStep1 = {
      ...step1,
      [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    }
    setStep1(updatedStep1)
  }

  //變更欄位內容(step3)
  const handleStep3Change = (e) => {
    const updatedStep3 = {
      ...step3,
      [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    }
    setStep3(updatedStep3)
  }

  const validEmail = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  )
  const validPhone = new RegExp(/09\d{2}-?\d{3}-?\d{3}$/i)
  const validCreditNum = new RegExp(/\b(?:\d{4}[ -]?){3}(?=\d{4}\b)/)

  //變更欄位內容(step2)
  const handleStep2Change = (e) => {
    const updatedStep2 = {
      ...step2,
      [e.target.name]:
        e.target.type === 'checkbox'
          ? e.target.checked
          : e.target.name === 'township' && e.target.type === 'option'
          ? +e.target.value && step2.city > -1
          : e.target.value,
    }

    setStep2(updatedStep2)
  }

  const handleErrors = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    let errors = Object.assign(step2Errors, step3Errors)
    switch (name) {
      case 'country':
        errors.country = value.length - 1 < 1 ? '至少填寫2字以上' : ''
        break
      // case 'city':
      //   errors.city  = -1 ? '請選擇縣市' : ''
      //   break
      // case 'township':
      //   errors.township = -1 ? '請選擇地區' : ''
      //   break
      case 'street':
        errors.street = value.length < 5 ? '地址必填，至少5字' : ''
        break
      case 'name':
        errors.name = value.length < 2 ? '姓名至少填寫2字以上' : ''
        break
      case 'phone':
        errors.phone = validPhone.test(value) ? '' : '請填正確手機號碼'
        break
      case 'email':
        errors.email = validEmail.test(value) ? '' : '請填正確信箱'
        break
      case 'payment':
        errors.payment = false ? '必選，快付錢' : ''
        break
      case 'creditName':
        errors.creditName = value.length < 2 ? '姓名至少填寫2字以上' : ''
        break
      case 'creditNum':
        errors.creditNum = validCreditNum.test(value) ? '' : '卡號必填'
        break
      case 'validity':
        errors.validity = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(value)
          ? ''
          : '有效日期必填'
        break
      case 'ccv':
        errors.ccv = /^\d{3}$/.test(value) ? '' : '安全碼必填'
        break

      default:
        break
    }
    setStep2Errors({ errors })
  }
  const { errors } = Object.assign(step2Errors, step3Errors)

  // const validateForm = (errors) => {
  //   let valid = true
  //   Object.values(errors).forEach((val) => val.length > 0 && (valid = false))
  //   return valid
  // }
  //表單送出
  const handleSubmit = (e) => {
    e.preventDefault()
    // if (validateForm(step2Errors.errors)) {
    //   console.info('Valid Form')
    // } else {
    //   console.error('Invalid Form')
    // }
    const data = new FormData(e.target)
  }

  const handleChange = (e) => {
    // const updatedFieldErrors = {
    //   ...fieldErrors,
    //   [e.target.name]: '',
    // }

    // setFieldErrors(updatedFieldErrors)
    setCateLabel(e.target.value)
  }

  // 有錯誤的訊息會觸發在這裡
  const handleInvalid = (e) => {
    e.preventDefault()

    const updatedStep2Errors = {
      ...step2Errors,
      [e.target.name]: () => {
        let temp = {}
        // temp.country = step2.country || step2.street ? '' : '必填，不得為空'
        temp.phone = RegExp(/^09\d{8}$/).test(step2.phone) ? '' : '請填手機號碼'
        temp.email = RegExp(/\S+@\S+\.\S+/).test(step2.email) ? '' : '請填信箱'

        setStep2Errors({
          ...temp,
        })
        return Object.values(temp).every((x) => x == '')
      },
    }
    // const updatedStep3Errors = {
    //   ...step3Errors,
    //   [e.target.name]: e.target.validationMessage,
    // }
    setStep2Errors(updatedStep2Errors)
  }

  return (
    <>
      <Steppers
        step1={step1}
        setStep1={setStep1}
        step2={step2}
        setStep2={setStep2}
        step3={step3}
        setStep3={setStep3}
        cateLabels={cateLabels}
        cateLabel={cateLabel}
        setCateLabel={setCateLabel}
        price={price}
        setPrice={setPrice}
        handleChange={handleChange}
        handleStep2Change={handleStep2Change}
        count={count}
        setCount={setCount}
        step2Errors={step2Errors}
        setStep2Errors={setStep2Errors}
        handleStep3Change={handleStep3Change}
        handleInvalid={handleInvalid}
        errors={errors}
        handleErrors={handleErrors}
        handleSubmit={handleSubmit}
      />
    </>
  )
}

export default TestForm
