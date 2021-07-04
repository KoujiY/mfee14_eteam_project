import React from 'react'

function RadioBox(props) {
  // 傳入的值至props內 並用物件列出來
  const { uGender, setUgender, value } = props
  return (
    <>
      <label>{value}</label>
      <input
        id="uGender"
        type="radio"
        value={value}
        checked={uGender === value}
        onChange={(e) => {
          setUgender(e.target.value)
        }}
      />
    </>
  )
}

export default RadioBox
