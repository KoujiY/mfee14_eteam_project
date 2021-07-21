import React, { useState, useEffect } from 'react'

function SelectOrderBy(props) {
  const { uOrder, setUorder } = props

  return (
    <>
      <div className="userConsumptionOrderBy">
        <form></form>
        <label forhtml="">排序方式</label>
        <select
          value={uOrder}
          onChange={(e) => {
            setUorder(e.target.value)
          }}
        >
          <option value="1">請選擇</option>
          <option value="1">依購買日期早至晚</option>
          <option value="2">依購買日期晚至早</option>
          <option value="3">依商品單價低至高</option>
          <option value="4">依商品單價高至低</option>
        </select>
      </div>
      <p className="userConsumptionOrderByText">(依商品單價/購買日期排序)</p>
    </>
  )
}

export default SelectOrderBy
