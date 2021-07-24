import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

// 首頁、Nav、Footer、關於我們
import Nav from './pages/nav/nav-index'
import Index from './pages/index/index'
import Footer from './pages/footer/footer-index'
import About from './pages/about-us/about-index'

// 回到頂部功能
import ScrollToTop from './global_components/scrollTop'
    
// 購物車
import TestForm from './pages/cart/test-components/TestForm'
    
// 會員登入
import UsersLogin from './pages/login/usersLogin/usersLogin'
// 會員登出(功能)
import UsersLogout from './pages/login/usersLogout/usersLogout'
// 忘記密碼
import UsersForget from './pages/login/usersForget/usersForget'
// 會員註冊
import UsersRegister from './pages/users/usersRegister/usersRegister'
// 會員資料
import UsersText from './pages/users/usersText/usersText'
// 會員編輯
import UsersEdit from './pages/users/usersEdit/usersEdit'
// 會員消費紀錄
import UsersConsumption from './pages/users/usersConsumption/usersConsumption'
// 會員商品追蹤
import UsersTrack from './pages/users/usersTrack/usersTrack'
// 會員信用卡資訊
import UsersCreditCard from './pages/users/usersCreditCard/usersCreditCard'
// 會員信用卡(新增)
import UsersCreditCardAdd from './pages/users/usersCreditCardAdd/usersCreditCardAdd'
// 會員信用卡(修改))
import UsersCreditCardEdit from './pages/users/usersCreditCardEdit/usersCreditCardEdit'
// 會員折扣碼 尚未使用
import UsersDiscountCanUse from './pages/users/usersDiscountCanUse/usersDiscountCanUse'
// 會員折扣碼 已使用
import UsersDiscountNotCanUse from './pages/users/usersDiscountNotCanUse/usersDiscountNotCanUse'
// 留言板
import MessageText from './pages/message-board/messageText/messageText'
// 404畫面
import NotFoundPage from './pages/users/NotFoundPage'
// FormValidationTest
// import FormValidationTest from './pages/users/formValidationTest'
// 測試 上傳function component
import UploadFun from './pages/users/components/uploadFun'
// 測試驗證碼
import reCAPTCHATest from './pages/login/reCAPTCHA/reCAPTCHA'

function App() {
  return (
    // 路由器
    <Router>
      <Nav />
      <>
        {/* 連結 */}
        {/* <Link to="/">Users</Link>
        <br />
        <Link to="/usersLogin">UsersLogin</Link>
        <br />
        <Link to="/usersLogout">UsersLogout</Link>
        <br />
        <Link to="/usersForget">UsersForget</Link>
        <br />
        <Link to="/usersRegister">UsersRegister</Link>
        <br />
        <Link to="/usersText/">UsersText</Link>
        <br />
        <Link to="/usersEdit/">UsersEdit</Link>
        <br />
        <Link to="/usersConsumption">UsersConsumption</Link>
        <br />
        <Link to="/usersTrack">UsersTrack</Link>
        <br />
        <Link to="/usersCreditCard">UsersCreditCard</Link>
        <br />
        <Link to="/usersCreditCardAdd">UsersCreditCardAdd</Link>
        <br />
        <Link to="/usersCreditCardEdit">UsersCreditCardEdit</Link>
        <br />
        <Link to="/usersDiscountCanUse">UsersDiscountCanUse</Link>
        <br />
        <Link to="/usersDiscountNotCanUse">UsersDiscountNotCanUse</Link>
        <br />
        <Link to="/messageText">MessageText</Link> */}
        {/* <br />
        <Link to="/formValidationTest">FormValidationTest</Link> */}

        <ScrollToTop>
          <Switch>
            {/* 路由 */}
            <Route exact path="/cart">
              <TestForm />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/usersCreditCardAdd">
              <UsersCreditCardAdd />
            </Route>
            <Route path="/usersCreditCardEdit">
              <UsersCreditCardEdit />
            </Route>
            <Route path="/usersText">
              <UsersText />
            </Route>
            <Route path="/usersForget">
              <UsersForget />
            </Route>
            <Route path="/usersCreditCard">
              <UsersCreditCard />
            </Route>
            <Route path="/usersDiscountCanUse">
              <UsersDiscountCanUse />
            </Route>
            <Route path="/usersDiscountNotCanUse">
              <UsersDiscountNotCanUse />
            </Route>
            <Route path="/usersLogin">
              <UsersLogin />
            </Route>
            <Route path="/usersLogout">
              <UsersLogout />
            </Route>
            <Route path="/usersRegister">
              <UsersRegister />
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
            <Route path="/messageText">
              <MessageText />
            </Route>
            <Route path="/uploadFun">
              <UploadFun />
            </Route>
            <Route exact path="/">
              <Index />
            </Route>
            {/* 404頁面 */}
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </ScrollToTop>
      </>
      <Footer />
    </Router>
  )
}
export default App
