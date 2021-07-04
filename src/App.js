// 設定路由

import React from 'react'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import ScrollToTop from './global_components/scrollTop'

import Users from './pages/users'
// 會員登入
import UsersLogin from './pages/users/usersLogin'
// 忘記密碼
import UsersForget from './pages/users/usersLogin/usersForget'
// 會員註冊
import UsersRegister from './pages/users/usersRegister'
// 會員資料
import UsersText from './pages/users/usersText'
// 會員編輯
import UsersEdit from './pages/users/usersEdit'
// 會員消費紀錄
import UsersConsumption from './pages/users/usersConsumption'
// 會員商品追蹤
import UsersTrack from './pages/users/usersTrack'
// 會員信用卡資訊
import UsersCreaditCard from './pages/users/usersText/usersCreaditCard'
// 會員信用卡(新增)
import UsersCreaditCardAdd from './pages/users/usersText/usersCreaditCard/usersCreaditCardAdd'
// 會員信用卡(修改))
import UsersCreaditCardEdit from './pages/users/usersText/usersCreaditCard/usersCreaditCardEdit'
// 會員折扣碼
import UsersDiscount from './pages/users/usersText/usersDiscount'

function App() {
  return (
    // 路由器
    <Router>
      <>
        {/* 連結 */}
        <Link to="/">Users</Link>
        <br />
        <Link to="/usersLogin">UsersLogin</Link>
        <br />
        <Link to="/usersLogin/usersForget">UsersForget</Link>
        <br />
        <Link to="/usersRegister">UsersRegister</Link>
        <br />
        <Link to="/usersText">UsersText</Link>
        <br />
        <Link to="/usersEdit">UsersEdit</Link>
        <br />
        <Link to="/usersConsumption">UsersConsumption</Link>
        <br />
        <Link to="/usersTrack">UsersTrack</Link>
        <br />
        <Link to="/usersText/usersCreaditCard">UsersCreaditCard</Link>
        <br />
        <Link to="/usersText/usersCreaditCard/usersCreaditCardAdd">
          UsersCreaditCardAdd
        </Link>
        <br />
        <Link to="/usersText/usersCreaditCard/usersCreaditCardEdit">
          UsersCreaditCardEdit
        </Link>
        <br />
        <Link to="/usersText/usersDiscount">UsersDiscount</Link>

        <ScrollToTop>
          <Switch>
            {/* 路由 */}
            <Route path="/usersText/usersCreaditCard/usersCreaditCardAdd">
              <UsersCreaditCardAdd />
            </Route>
            <Route path="/usersText/usersCreaditCard/usersCreaditCardEdit">
              <UsersCreaditCardEdit />
            </Route>
            <Route path="/usersLogin/usersForget">
              <UsersForget />
            </Route>
            <Route path="/usersText/usersCreaditCard">
              <UsersCreaditCard />
            </Route>
            <Route path="/usersText/UsersDiscount">
              <UsersDiscount />
            </Route>
            <Route path="/usersLogin">
              <UsersLogin />
            </Route>
            <Route path="/usersRegister">
              <UsersRegister />
            </Route>
            <Route path="/usersText">
              <UsersText />
            </Route>
            <Route path="/usersEdit">
              <UsersEdit />
            </Route>
            <Route path="/usersConsumption">
              <UsersConsumption />
            </Route>
            <Route path="/usersTrack">
              <UsersTrack />
            </Route>
            <Route exact path="/">
              <Users />
            </Route>
          </Switch>
        </ScrollToTop>
      </>
    </Router>
  )
}

export default App
