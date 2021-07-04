import React, { useState } from 'react'

import './usersCreaditCardAdd.css'

function UsersCreaditCardAdd() {
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
      <div className="usersCreaditCardAddBgc">
        <p className="memberTextTitle">新增信用卡</p>

        <div className="usersCreaditCardAdddiv">
          <div className="usersCreaditCardAddTitle">
            <div>持卡人(英文)</div>
            <div>卡號</div>
            <div>有效期限</div>
            <div>驗證碼</div>
          </div>
          <form action="">
            <div className="usersCreaditCardAddText">
              <div className="usersCreaditCardAddInp">
                <input
                  name="cName"
                  type="text"
                  placeholder="請輸入持卡人姓名(英文)"
                  value={inputs.cName}
                  onChange={onChangeForInput('cName')}
                />
              </div>
              <div className="usersCreaditCardAddInp">
                <input
                  name="cNum"
                  type="text"
                  placeholder="請輸入卡號"
                  value={inputs.cNum}
                  onChange={onChangeForInput('cNum')}
                />
              </div>
              <div className="usersCreaditCardAddInp">
                <input
                  name="cExp"
                  type="text"
                  placeholder="請輸入信用卡有效期限"
                  value={inputs.cExp}
                  onChange={onChangeForInput('cExp')}
                />
              </div>
              <div className="usersCreaditCardAddInp">
                <input
                  name="cCCV"
                  type="text"
                  placeholder="請輸入驗證碼"
                  value={inputs.cCCV}
                  onChange={onChangeForInput('cCCV')}
                />
              </div>
            </div>
            <div className="usersCreaditCardAddBtnAdd">
              <button type="submit">確認</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default UsersCreaditCardAdd
