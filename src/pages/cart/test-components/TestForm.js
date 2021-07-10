//cart-index

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
// import { CartInfo } from './CartInfo'
import { cities, townships } from '../data/townships'
import { MenuItem } from '@material-ui/core'

import Steppers from '../components/Steppers'
import MyCartTest from './MyCartTest'
import Address from '../Address'
import CreditForm from '../CreditForm'
import Completed from '../Completed'

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
  })

  const [step3, setStep3] = useState({
    creditName: '',
    creditNum: '',
    validity: '',
    securityCode: '',
    payment: false,
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
  const [count, setCount] = useState(+step1[0].iCount)

  const [step2Errors, setStep2Errors] = useState({
    address: {
      agree: false,
      error: '',
      country: '',
      city: '',
      township: '',
      street: '',
      name: '',
      phone: '',
      email: '',
    },
    credit: {
      creditName: '',
      creditNum: '',
      validity: '',
      securityCode: '',
      payment: false,
      agree: false,
    },
  })

  //變更欄位內容(step2)
  const handleStep2Change = (e) => {
    const updatedField = {
      ...step2,
      [e.target.name]:
        e.target.type === 'checkbox'
          ? e.target.checked
          : e.target.name === 'city' && e.target.type === 'option'
          ? e.target.name && step2.township === -1
          : e.target.name === 'township' && e.target.type === 'option'
          ? +e.option && step2.city > -1
          : e.target.value,
    }
    setStep2(updatedField)
  }

  //表單送出
  const handleSubmit = (e) => {
    e.preventDefault()

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

    const updatedFieldErrors = {
      ...step2Errors,
      [e.target.name]: e.target.validationMessage,
    }

    setStep2Errors(updatedFieldErrors)
  }

  const [formStep, setFormstep] = useState(0)
  // const { CartInfo } = props
  return (
    <>
      <Steppers
        step1={step1}
        setStep1={setStep1}
        step2={step2}
        setStep2={setStep2}
        step3={step3}
        setStep3={setStep3}
        // state={state}
        // setState={setState}
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
      />

      {/* <Address />
      <CreditForm />
      <Completed /> */}
    </>
  )
}

export default TestForm
