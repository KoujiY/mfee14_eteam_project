import React from 'react'

import { Link } from 'react-router-dom'

// import './usersEdit.css'

import styled from 'styled-components'

const MemberTextTitle = styled.p`
  color: #0065b4;
  font-size: 24px;
  font-family: Noto Sans TC;
  margin-top: 60px;
  text-align: center;
  margin-bottom: 60px;
`
const MemberConnect = styled.div`
  margin: 0 auto;
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: 1px solid #0065b4;
  margin-bottom: 60px;
`

function UsersTitle() {
  return (
    <>
      <MemberTextTitle>會員中心</MemberTextTitle>
      <MemberConnect>
        <Link to="./usersText">會員資料</Link>
        <Link to="./usersTrack">會員商品追蹤</Link>
        <Link to="./usersConsumption">會員消費紀錄</Link>
      </MemberConnect>
    </>
  )
}

export default UsersTitle
