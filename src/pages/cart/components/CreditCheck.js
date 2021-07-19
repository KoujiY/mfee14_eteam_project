import React from 'react'

function CreditCheck(props) {
  const { step3 } = props
  return (
    <>
      <div className="cartBody">
        <h2>付款方式</h2>
        <h3>{step3.payment}</h3>
        <img alt="icon" />
        <h3>{step3.creditNum.slice(11, 16)}</h3>
      </div>
    </>
  )
}

export default CreditCheck
