import React from 'react'
// import styled from 'styled-components'
import { cities, townships } from '../data/townships'
function AddressCheck(props) {
  const {
    step2,
    // setStep2,
    // handleStep2Change,
    // step2Errors,
    // register,
    // setStep2Errors,
  } = props
  return (
    <>
      {/* <div className="cartBody"> */}
      {/* <h2>收貨地址</h2> */}
      <div className="address">
      <div>{step2.choose}</div>
        {step2.country === -1 || step2.township === -1 ? (
          ''
        ) : (
          <p>
            {step2.country}
            {cities[step2.city]}
            {townships[step2.city][step2.township]}
            {step2.street}
          </p>
        )}
      </div>
      <div className="contactInfo">
        <div>聯絡方式</div>
        <div>
        <p>{step2.name}</p>
          <p>{step2.phone}</p>
          <p>{step2.email}</p>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}

export default AddressCheck
