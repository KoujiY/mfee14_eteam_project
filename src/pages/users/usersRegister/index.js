import React, { useState } from 'react'

import { withRouter } from 'react-router-dom'

import RadioBox from '../components/RadioBox'

import './usersRegister.css'

function UsersRegister(props) {
  // 初始載入指示為關閉狀態
  const [dataLoading, setDataLoading] = useState(false)
  // input 初始值設定
  const [inputs, setInputs] = useState({
    uAcco: '',
    uPwd: '',
    uMail: '',
    uPhone: '',
    uName: '',
    uTWId: '',
    uBirth: '',
    uCountry: '',
    uCity: '',
    uTownship: '',
    uStreet: '',
  })
  // radio
  const [uGender, setUgender] = useState('')
  // closesure
  const onChangeForInput = (InputName) => (e) => {
    setInputs((state) => ({
      ...state,
      [InputName]: e.target.value,
    }))
  }
  async function addUserToSever() {
    // 開啟載入指示
    setDataLoading(true)
    const newData = { ...inputs, uGender }
    // 連接的伺服器資料網址
    const url = 'http://localhost:7000/users/add/'
    // 注意資料格式要設定，伺服器才知道是json格式
    const req = new Request(url, {
      method: 'POST',
      body: JSON.stringify(newData),
      // cross origin 傳送 cookie
      // credentials: 'include',
      // 預先告訴伺服器  等等要傳的資料為json 格式
      headers: new Headers({
        Accept: 'appliction/json',
        'Content-Type': 'appliction/json',
      }),
    })
    console.log(JSON.stringify(newData))
    const res = await fetch(req)
    const data = await res.json()

    console.log('伺服器回傳資料:', data)

    setTimeout(() => {
      // 關閉指示器
      setDataLoading(false)
      alert('新增成功')
      props.history.push('../usersText/index')
    }, 1000)
  }
  // loading 圖示
  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  const display = (
    <>
      <div className="registerTotal">
        <p className="registerTitle">填寫基本資訊</p>
        <p className="registerTitle1">帳戶資訊</p>
        <div className="inputLeft">
          <div className="registerInput">
            <label forhtml="uAcco">帳號</label>
            {/*  每一個輸入框一定要加名稱，和定義的欄位狀態值最好一樣 */}
            <input
              id="uAcco"
              name="uAcco"
              type="text"
              placeholder="請輸入帳號"
              // value = 物件.key
              value={inputs.uAcco}
              onChange={onChangeForInput('uAcco')}
            />
          </div>
          <div className="registerInput">
            <label forhtml="uPwd">密碼</label>
            <input
              id="uPwd"
              name="uPwd"
              type="text"
              placeholder="請輸入密碼"
              value={inputs.uPwd}
              onChange={onChangeForInput('uPwd')}
            />
          </div>
          <div className="registerInput">
            <label forhtml="uMail">e-mail</label>
            <input
              id="uMail"
              name="uMail"
              type="mail"
              placeholder="請輸入e-mail"
              value={inputs.uMail}
              onChange={onChangeForInput('uMail')}
            />
          </div>
          <div className="registerInput">
            <label forhtml="uPhone">電話</label>
            <input
              id="uPhone"
              name="uPhone"
              type="text"
              placeholder="請輸入電話"
              value={inputs.uPhone}
              onChange={onChangeForInput('uPhone')}
            />
          </div>
        </div>
        <p className="registerTitle1">聯絡人資訊</p>
        <div className="inputLeft">
          <div className="registerInput">
            <label forhtml="uName">姓名</label>
            <input
              id="uName"
              name="uName"
              type="text"
              placeholder="請輸入姓名"
              value={inputs.uName}
              onChange={onChangeForInput('uName')}
            />
          </div>
          <div className="registerRadio">
            <label forhtml="uGender">性別</label>
            {/* <input
                className="rad"
                id="uGender"
                type="radio"
                name="uGender"
                value="男"
                checked={uGender === '男'}
                onchange={(e) => {
                  setUgender(e.target.value)
                }}
              />
              男
              <input
                className="rad"
                id="uGender"
                type="radio"
                name="uGender"
                value="女"
                checked={uGender === '女'}
                onchange={(e) => {
                  setUgender(e.target.value)
                }}
              />
              女 */}

            {/* 用一個陣列來一次產出選項按鈕群組 */}
            {['男', '女'].map((v, i) => {
              return (
                <RadioBox
                  key={i}
                  value={v}
                  uGender={uGender}
                  setUgender={setUgender}
                />
              )
            })}
          </div>
          <div className="registerInput">
            <label forhtml="uTWId">身分證字號</label>
            <input
              id="uTWId"
              name="uTWId"
              type="text"
              placeholder="請輸入身分證字號"
              value={inputs.uTWId}
              onChange={onChangeForInput('uTWId')}
            />
          </div>
          <div className="registerInput">
            <label forhtml="uBirth">出生年月日</label>
            <input
              id="uBirth"
              name="uBirth"
              type="date"
              placeholder="請輸入出生年月日"
              value={inputs.uBirth}
              onChange={onChangeForInput('uBirth')}
            />
          </div>
          <div className="registerInput">
            <label>地址</label>
          </div>
          <div className="registerInput">
            <label forhtml="uCountry">國家</label>
            <input
              id="uCountry"
              name="uCountry"
              type="text"
              placeholder="請輸入國家"
              value={inputs.uCountry}
              onChange={onChangeForInput('uCountry')}
            />
          </div>
          <div className="registerInput">
            <label forhtml="uCity">縣市</label>
            <input
              id="uCity"
              name="uCity"
              type="text"
              placeholder="請輸入縣市"
              value={inputs.uCity}
              onChange={onChangeForInput('uCity')}
            />
          </div>
          <div className="registerInput">
            <label forhtml="uTownship">鄉鎮/區</label>
            <input
              id="uTownship"
              name="uTownship"
              type="text"
              placeholder="請輸入鄉鎮/區"
              value={inputs.uTownship}
              onChange={onChangeForInput('uTownship')}
            />
          </div>
          <div className="registerInput">
            <label forhtml="uStreet">街道</label>
            <input
              id="uStreet"
              name="uStreet"
              type="text"
              placeholder="請輸入街道"
              value={inputs.uStreet}
              onChange={onChangeForInput('uStreet')}
            />
          </div>
          <div className="registerCheck">
            <input type="checkbox" id="chk" className="chk" />
            <label forhtml="chk">我同意相關聲明事項</label>
          </div>
          <button
            onClick={() => {
              addUserToSever()
            }}
            className="registerBtn"
          >
            送出
          </button>
        </div>

        <div className=""></div>
      </div>
    </>
  )

  return <>{dataLoading ? loading : display}</>
}

export default withRouter(UsersRegister)
