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
    setStep2,
    handleStep2Change,
    step3,
  } = props
  return (
    <>
      <div className="cartBody dropDown">
        <h2>我的購物車</h2>
        <img alt="收合icon" onClick={() => {}}></img>
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
        <img alt="收合icon" onClick={() => {}}></img>
        <AddressCheck step2={step2} />
      </div>
      <CreditCheck step3={step3} />
      <div className="cartBody">
        <div>
          <span>商品小計</span>
          <span>NT$ 9600</span>
        </div>
        <div>
          <span>折扣減免</span>
          <span>-NT$ 50</span>
        </div>
        <div>
          <span>運費</span>
          <span>NT$ 0</span>
        </div>
        <div>
          <h3>
            總金額:
            <span>NT$ 1500</span>
          </h3>
        </div>
      </div>
      <button>結帳</button>
    </>
  )
}
export default FinalCheck
