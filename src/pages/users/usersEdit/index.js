import React, { useState } from 'react'

import UsersTitle from '../components/usersTitle'

import './usersEdit.css'

import RadioBox from '../components/RadioBox'

function UsersEdit() {
  // input 初始值設定
  const [inputs, setInputs] = useState({
    uImg: '',
    uNickname: '',
    uHobby: '',
    uName: '',
    uTWId: '',
    uMail: '',
    uPhone: '',
    uBirth: '',
    uCountry: '',
    uCity: '',
    uTownship: '',
    uStreet: '',
    uDiscr: '',
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

  return (
    <>
      <UsersTitle />
      <div className="memberBg">
        <div className="memberText">
          <form action="" className="memberForm">
            <div className="memberLeft">
              <div className="memberInp">
                <input
                  id="uImg"
                  name="uImg"
                  type="file"
                  value={inputs.uImg}
                  onChange={onChangeForInput('uImg')}
                />
                <label forHtml="uImg">請上傳照片</label>
              </div>
              <div className="memberNote">
                <div className="memberNoteRad">
                  <label forHtml="uGender">性別</label>
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
                <div className="memberNoteInp">
                  <label forHtml="uNickname">暱稱</label>
                  <input
                    id="uNickname"
                    name="uNickname"
                    type="text"
                    placeholder="請輸入暱稱"
                    value={inputs.uNickname}
                    onChange={onChangeForInput('uNickname')}
                  />
                </div>
                <div className="memberNoteInp">
                  <label forHtml="uHobby">興趣</label>
                  <input
                    id="uHobby"
                    name="uHobby"
                    type="text"
                    placeholder="請輸入興趣"
                    value={inputs.uHobby}
                    onChange={onChangeForInput('uHobby')}
                  />
                </div>
              </div>
            </div>
            <div className="memberRight">
              <div className="memberInput">
                <label forHtml="uName">姓名</label>
                <input
                  id="uName"
                  name="uName"
                  type="text"
                  placeholder="請輸入姓名"
                  value={inputs.uName}
                  onChange={onChangeForInput('uName')}
                />
              </div>
              <div className="memberInput">
                <label forHtml="uTWId">身分證字號</label>
                <input
                  id="uTWId"
                  name="uTWId"
                  type="text"
                  placeholder="請輸入身分證字號"
                  value={inputs.uTWId}
                  onChange={onChangeForInput('uTWId')}
                />
              </div>
              <div className="memberInput">
                <label forHtml="uMail">e-mail</label>
                <input
                  id="uMail"
                  name="uMail"
                  type="mail"
                  placeholder="請輸入e-mail"
                  value={inputs.uMail}
                  onChange={onChangeForInput('uMail')}
                />
              </div>
              <div className="memberInput">
                <label forHtml="uPhone">電話</label>
                <input
                  id="uPhone"
                  name="uPhone"
                  type="text"
                  placeholder="請輸入電話"
                  value={inputs.uPhone}
                  onChange={onChangeForInput('uPhone')}
                />
              </div>
              <div className="memberInput">
                <label forHtml="uBirth">出生年月日</label>
                <input
                  id="uBirth"
                  name="uBirth"
                  type="date"
                  placeholder="請輸入出生年月日"
                  value={inputs.uBirth}
                  onChange={onChangeForInput('uBirth')}
                />
              </div>
              <div className="memberInputAddr">
                <label className="lab">地址</label>
              </div>
              <div className="memberInput">
                <label className="lab" forHtml="uCountry">
                  國家
                </label>
                <input
                  className="inp"
                  id="uCountry"
                  name="uCountry"
                  type="text"
                  placeholder="請輸入國家"
                  value={inputs.uCountry}
                  onChange={onChangeForInput('uCountry')}
                />
              </div>
              <div className="memberInput">
                <label className="lab" forHtml="uCity">
                  縣市
                </label>
                <input
                  className="inp"
                  id="uCity"
                  name="uCity"
                  type="text"
                  placeholder="請輸入縣市"
                  value={inputs.uCity}
                  onChange={onChangeForInput('uCity')}
                />
              </div>
              <div className="memberInput">
                <label className="lab" forHtml="uTownship">
                  鄉鎮/區
                </label>
                <input
                  className="inp"
                  id="uTownship"
                  name="uTownship"
                  type="text"
                  placeholder="請輸入鄉鎮/區"
                  value={inputs.uTownship}
                  onChange={onChangeForInput('uTownship')}
                />
              </div>
              <div className="memberInput">
                <label className="lab" forHtml="uStreet">
                  街道
                </label>
                <input
                  className="inp"
                  id="uStreet"
                  name="uStreet"
                  type="text"
                  placeholder="請輸入街道"
                  value={inputs.uStreet}
                  onChange={onChangeForInput('uStreet')}
                />
              </div>
              <div className="memberTextarea">
                <label forHtml="uDiscr">個人描述</label>
                <textarea
                  id="uDiscr"
                  name="uDiscr"
                  value={inputs.uDiscr}
                  onChange={onChangeForInput('uDiscr')}
                ></textarea>
              </div>

              <button type="submit" className="memberBtn">
                編輯完成
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default UsersEdit
