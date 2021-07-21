import React, { useState, useEffect } from 'react'

import { Link, withRouter } from 'react-router-dom'

import './usersTrack.css'

import UsersTitle from '../components/usersTitle'

function UsersTrack(props) {
  const [uTrack, setUtrack] = useState([])

  const [dataLoading, setDataLoading] = useState(false)

  async function getTrackToServer() {
    setDataLoading(true)

    const token = localStorage.getItem('token')
    const url = `${process.env.REACT_APP_USERSURL}/usersTrack/`

    // console.log(process.env.REACT_APP_USERSURL)

    const req = new Request(url, {
      method: 'post',
      body: JSON.stringify({ token }),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const res = await fetch(req)
    const data = await res.json()
    console.log('伺服器回傳資料:', data)

    setUtrack(data)
  }
  // 這裡刪除要等於是更新 users.FollowList 的欄位
  async function deleteTrackToServer(iId) {
    setDataLoading(true)

    const token = localStorage.getItem('token')
    const url = `${process.env.REACT_APP_USERSURL}/usersDeleteTrack/` + iId

    const req = new Request(url, {
      method: 'put',
      body: JSON.stringify({ token, iId }),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const res = await fetch(req)
    const data = await res.json()
    console.log('伺服器回傳資料:', data)

    setTimeout(() => {
      setDataLoading(false)
      if (data !== false) {
        setUtrack(data)
        alert('刪除完成')
        props.history.push('/usersTrack')
      } else {
        alert('刪除失敗')
        props.history.push('/usersTrack')
      }
    }, 1000)
  }
  useEffect(() => {
    if (localStorage.token) {
      getTrackToServer()
    } else {
      alert('請先行登入')
      props.history.push('/usersLogin')
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setDataLoading(false)
    }, 1000)
  }, [uTrack])

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
      <div className="usersTrackdiv">
        <div className="usersTrackTitle">
          <div>我的商品</div>
          <div>商品名稱</div>
          <div>規格</div>
          <div>需求量</div>
          <div>商品價格</div>
          <div>總價</div>
        </div>
        {uTrack.length &&
          uTrack.map((v, i) => {
            return (
              <div className="usersTrackText" key={i}>
                <div className="usersTrackPicture">
                  <img
                    src={`http://localhost:3000/img/users/newslide5.jpg`}
                    alt="123"
                  />
                </div>
                <div className="usersTrackName">{v.iName}</div>

                <div className="usersTrackSpec">{v.sName}</div>

                <div className="usersTrackQty">1</div>
                <div>
                  {/* <p className="usersTrackSpecialoffer">原價 1400</p> */}
                  <p>{v.iPrice}</p>
                </div>
                <div className="usersTrackTotal">{v.iPrice * 1}</div>
                <div className="usersTrackBtn">
                  <button
                    onClick={() => {
                      props.history.push('/usersLogin')
                    }}
                  >
                    加入購物車
                  </button>
                  <button
                    onClick={() => {
                      props.history.push('/usersLogin')
                    }}
                  >
                    購買
                  </button>
                </div>
                <div className="usersTrackIcon">
                  <Link
                    to=""
                    onClick={() => {
                      deleteTrackToServer(v.iId)
                    }}
                  >
                    X
                  </Link>
                </div>
              </div>
            )
          })}

        {/* <div className="usersTrackPage">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div> */}
      </div>
    </>
  )

  return (
    <>
      <UsersTitle />
      {dataLoading ? loading : display}
    </>
  )
}

export default withRouter(UsersTrack)
