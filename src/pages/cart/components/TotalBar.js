import React from 'react'

function TotalBar(props) {
  return (
    <>
      <div className="cartBody totalBar">
        <div>
          <p>總金額:</p>
          <div>
            <p>NT$ 1500</p>
            <a href="#/">回去再購買</a>
            <button>下一頁</button>
          </div>
        </div>
        <div>
          <label>折扣碼</label>
          <select type="text" placeholder="請輸入折扣碼" />
        </div>
      </div>
    </>
  )
}

export default TotalBar
