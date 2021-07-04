import React, { useState } from 'react'

import './usersCreaditCardEdit.css'

function UsersCreaditCardEdit() {
  const [inputs, setInputs] = useState({
    cName: '',
    cNum: '',
    cExp: '',
    cCCV: '',
  })
  const onChangeForInput = (InputName) => (e) => {
    setInputs((state) => ({
      ...state,
      [InputName]: e.target.value,
    }))
  }
  return (
    <>
      <div className="usersCreaditCardEditBgc">
        <p className="memberTextTitle">編輯信用卡</p>

        <div className="usersCreaditCardEditdiv">
          <div className="usersCreaditCardEditTitle">
            <div>持卡人(英文)</div>
            <div>卡號</div>
            <div>有效期限</div>
            <div>驗證碼</div>
          </div>
          <form action="">
            <div className="usersCreaditCardEditText">
              <div className="usersCreaditCardEditInp">
                <input
                  name="cName"
                  type="text"
                  placeholder="請輸入持卡人姓名(英文)"
                  value={inputs.cName}
                  onChange={onChangeForInput('cName')}
                />
              </div>
              <div className="usersCreaditCardEditInp">
                <input
                  name="cNum"
                  type="text"
                  placeholder="請輸入卡號"
                  value={inputs.cNum}
                  onChange={onChangeForInput('cNum')}
                />
              </div>
              <div className="usersCreaditCardEditInp">
                <input
                  name="cExp"
                  type="text"
                  placeholder="請輸入信用卡有效期限"
                  value={inputs.cExp}
                  onChange={onChangeForInput('cExp')}
                />
              </div>
              <div className="usersCreaditCardEditInp">
                <input
                  name="cCCV"
                  type="text"
                  placeholder="請輸入驗證碼"
                  value={inputs.cCCV}
                  onChange={onChangeForInput('cCCV')}
                />
              </div>
            </div>
            <div className="usersCreaditCardEditBtnAdd">
              <button type="submit">確認</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default UsersCreaditCardEdit
