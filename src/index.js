// 連結到DOM上
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'

// 原滑鼠樣式會不見
// import './home.scss'
// 滑鼠點擊樣式改變功能
// import Slider from '../src/global_components/Slider/index'
// import CustomCursor from '../src/global_components/CustomCursor/index'
// import CustomCursorManager from '../src/global_components/CustomCursor/context/manager'

ReactDOM.render(
  <React.StrictMode>
    {/* <CustomCursorManager> */}
    {/* <div className="page-wrapper"> */}
    {/* 跟滑鼠有關 */}
    {/* <CustomCursor /> */}
    <App />
    {/* 跟滑鼠、背景有關 */}
    {/* <Slider /> */}
    {/* </div> */}
    {/* </CustomCursorManager> */}
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
