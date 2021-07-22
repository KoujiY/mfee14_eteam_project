import React from 'react'

//組件
import MyCartCheck from './components/MyCartCheck'
import AddressCheck from './components/AddressCheck'
import CreditCheck from './components/CreditCheck'

function FinalCheck(props) {
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
    step2,
    step3,
  } = props
  let itemTotal = step1
    .map((v, i) => {
      v.iPrice = step1[i].iPrice
      v.iCount = step1[i].iCount
      v.total = v.iPrice * v.iCount
      // console.log(v.total)
      return v.total
    })
    .reduce((a, b) => a + b)
  let discount = 1500 > itemTotal > 1000 ? '50' : itemTotal > 1500 ? '70' : '0'
  let shipping =
    step2.choose === '宅配' && itemTotal < 1000
      ? 80
      : step2.choose === '宅配' && itemTotal > 1000
      ? 0
      : 60

  return (
    <>
      <div className="cartBody dropDown">
        <h2>我的購物車</h2>
        <MyCartCheck
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
      </div>
      <div className="cartBody dropDown">
        <h2>收貨地址</h2>
        <AddressCheck step2={step2} />
      </div>
      <CreditCheck step3={step3} />
      <div className="cartBody">
        <div>
          <span>商品小計</span>
          <span>
            NT$
            {itemTotal}
          </span>
        </div>
        <div>
          <span>折扣減免</span>
          <span>-NT$ {discount}</span>
        </div>
        <div>
          <small>
            {1500 > itemTotal > 1000
              ? '(滿千折50)'
              : itemTotal > 1500
              ? '(滿1千5折70)'
              : ''}
          </small>
        </div>
        <div>
          <span>運費</span>
          <span>NT$ {shipping}</span>
          <small>
            {step2.choose === '宅配' && itemTotal > 1000 ? '(滿千免運)' : ''}
          </small>
        </div>
      </div>
    </>
  )
}
export default FinalCheck
