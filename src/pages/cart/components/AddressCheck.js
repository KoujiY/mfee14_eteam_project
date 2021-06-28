import React from 'react'
import styled from 'styled-components'

function AddressCheck(props) {
  return (
    <>
      {/* <div className="cartBody"> */}
      {/* <h2>收貨地址</h2> */}
      <div className="address">
        <div>宅配</div>
        <p>台北市松山區民生東路四段133號</p>
      </div>
      <div className="contactInfo">
        <div>聯絡方式</div>
        <div>
          <p>資策會</p>
          <p>0912345678</p>
          <p>goodbyeMyHappyHoliday@email.com</p>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}

export default AddressCheck
