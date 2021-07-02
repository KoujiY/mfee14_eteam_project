import React from 'react'
import './nav.css'

import Logo from './svg/LOGO.svg'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function Nav() {
  return (
    <>
      <div className="container">
        <div className="nav ">
          <div className="icon-s-none ">
            <a href="#/">
              {/*?xml version="1.0" encoding="iso-8859-1"?*/}
              {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
              <svg
                className="nav-icon"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 469.333 469.333"
                style={{ enableBackground: 'new 0 0 469.333 469.333' }}
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <g>
                      <path
                        d="M53.333,106.667H416c29.417,0,53.333-23.927,53.333-53.333S445.417,0,416,0H53.333C23.917,0,0,23.927,0,53.333
				S23.917,106.667,53.333,106.667z M53.333,21.333H416c17.646,0,32,14.354,32,32c0,17.646-14.354,32-32,32H53.333
				c-17.646,0-32-14.354-32-32C21.333,35.687,35.687,21.333,53.333,21.333z"
                      />
                      <path
                        d="M416,181.333H53.333C23.917,181.333,0,205.26,0,234.667S23.917,288,53.333,288H416c29.417,0,53.333-23.927,53.333-53.333
				S445.417,181.333,416,181.333z M416,266.667H53.333c-17.646,0-32-14.354-32-32s14.354-32,32-32H416c17.646,0,32,14.354,32,32
				S433.646,266.667,416,266.667z"
                      />
                      <path
                        d="M416,362.667H53.333C23.917,362.667,0,386.594,0,416s23.917,53.333,53.333,53.333H416
				c29.417,0,53.333-23.927,53.333-53.333S445.417,362.667,416,362.667z M416,448H53.333c-17.646,0-32-14.354-32-32
				c0-17.646,14.354-32,32-32H416c17.646,0,32,14.354,32,32C448,433.646,433.646,448,416,448z"
                      />
                    </g>
                  </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </a>
          </div>
          <div className="logo">
            <a href="#/">
              <img src={Logo} alt="Logo" />
            </a>
          </div>
          <div className="navbar">
            <li>
              <div className=" nav-three-gp">
                <a href="#/">
                  <div className="three-gp-flex">
                    <div className="nav-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 101.01 101"
                      >
                        <defs></defs>
                        <g id="圖層_2" data-name="圖層 2">
                          <g id="圖層_1-2" data-name="圖層 1">
                            <path
                              className="cls-1"
                              d="M63,27.66A12.53,12.53,0,1,0,50.5,40.18,12.52,12.52,0,0,0,63,27.66ZM41,27.66a9.56,9.56,0,1,1,9.55,9.56A9.56,9.56,0,0,1,41,27.66Z"
                            />
                            <path
                              className="cls-1"
                              d="M100.91,99,88.79,67.21a1.49,1.49,0,0,0-1.39-1H64.46l.42-.68c8.83-14.61,13.27-27.39,13.2-38a27.58,27.58,0,0,0-55.16,0c-.06,10.61,4.38,23.39,13.21,38l.42.68H13.61a1.48,1.48,0,0,0-1.39,1L.1,99A1.49,1.49,0,0,0,1,100.9a1.44,1.44,0,0,0,.54.1h98A1.49,1.49,0,0,0,101,99.52a1.62,1.62,0,0,0-.1-.54ZM26,27.66a24.55,24.55,0,1,1,49.09,0h0C75.18,48.73,55.48,74.72,50.5,81c-5-6.23-24.67-32.21-24.54-53.29ZM49.37,84.25a1.48,1.48,0,0,0,2.09.17,1.37,1.37,0,0,0,.17-.17A138.71,138.71,0,0,0,62.57,69H86.29l1.89,5.17L41.83,90.67,25.31,69.22H38.44a157.35,157.35,0,0,0,10.93,15ZM41.78,93.8h0l27.65-9.65L80.17,97.82H30.25ZM14.7,69.22h6.87L38.94,91.79,21.4,98H3.71ZM83.91,98l-11.53-15,16.86-6,8,21Z"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div>
                      <div>店家地圖</div>
                      <div>store map</div>
                    </div>
                  </div>
                </a>
              </div>
            </li>
            <li>
              <div className=" nav-three-gp">
                <a href="#/">
                  <div className="three-gp-flex">
                    <div className=" nav-icon-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 75.56 93"
                      >
                        <defs></defs>
                        <g id="圖層_2" data-name="圖層 2">
                          <g id="圖層_1-2" data-name="圖層 1">
                            <path
                              className="cls-1"
                              d="M71.94,8.36H67.42L66.17,2.3A2.91,2.91,0,0,0,63.33,0H12.23A2.89,2.89,0,0,0,9.4,2.3L8.14,8.36H3.62A3.62,3.62,0,0,0,0,12v6.75a2.89,2.89,0,0,0,2.89,2.89H5.4l1,7.07a3.49,3.49,0,0,0-.82.67,3.21,3.21,0,0,0-.74,2.54l6.72,47.23A3.2,3.2,0,0,0,14,81.78l1,6.72A5.26,5.26,0,0,0,20.09,93H55.47a5.25,5.25,0,0,0,5.18-4.5l1-6.72A3.22,3.22,0,0,0,64,79.13L70.73,31.9A3.22,3.22,0,0,0,70,29.36a3.3,3.3,0,0,0-.82-.67l1-7.07h2.5a2.89,2.89,0,0,0,2.89-2.89V12A3.61,3.61,0,0,0,71.94,8.36Zm-4,23L61.24,78.62a.46.46,0,0,1-.46.39h-13a1.41,1.41,0,0,0-1.41,1.2,1.37,1.37,0,0,0,1.36,1.53H58.66L57.78,88a2.52,2.52,0,0,1-2.48,2.14H20.11A2.5,2.5,0,0,1,17.64,88l-.89-6.21H41.34a1.39,1.39,0,0,0,1.4-1.2A1.36,1.36,0,0,0,41.39,79H14.63a.44.44,0,0,1-.45-.39L7.45,31.4A.47.47,0,0,1,7.56,31a.46.46,0,0,1,.32-.16H67.53a.44.44,0,0,1,.32.16A.47.47,0,0,1,68,31.4ZM8.07,21.62H67.35l-.95,6.72H9ZM72.84,18a.89.89,0,0,1-.9.89H3.62a.89.89,0,0,1-.9-.89V12a.89.89,0,0,1,.9-.89H15.76a1.39,1.39,0,0,0,1.4-1.19,1.36,1.36,0,0,0-1.35-1.53H11.05l1.13-5.5a.18.18,0,0,1,.17-.14H63.06a.18.18,0,0,1,.17.14l1.13,5.5H22.13a1.39,1.39,0,0,0-1.4,1.19,1.36,1.36,0,0,0,1.35,1.53H71.94a.89.89,0,0,1,.9.89Z"
                            />
                            <path
                              className="cls-1"
                              d="M48,43.78l0,0C43.4,39.27,35.14,40.2,29.5,45.85a16.41,16.41,0,0,0-4.84,9.49,10.53,10.53,0,0,0,2.78,9h0a10.16,10.16,0,0,0,7.33,2.87,13,13,0,0,0,1.63-.1,16.47,16.47,0,0,0,9.49-4.84C51.57,56.6,52.49,48.31,48,43.79Zm-20.6,11.9a13.79,13.79,0,0,1,4.07-7.91,13.36,13.36,0,0,1,9.17-4.15,8,8,0,0,1,3.86.93c-2.29,1.36-5.84,4-6.92,8-.94,3.45-6.05,7.26-8.85,9A8.21,8.21,0,0,1,27.36,55.68ZM44,60.33a13.82,13.82,0,0,1-7.9,4.07,8.48,8.48,0,0,1-5.29-.93c2.81-1.86,8.2-5.89,9.38-10.21,1-3.52,4.76-5.9,6.5-6.82C49.36,50,48.28,56,44,60.33Z"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div>
                      <div>咖啡介紹</div>
                      <div>store map</div>
                    </div>
                  </div>
                </a>
              </div>
            </li>
            <li>
              <div className=" nav-three-gp">
                <a href="#/">
                  <div className="three-gp-flex">
                    <div className="nav-icon-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 72.8 104"
                      >
                        <g id="圖層_2" data-name="圖層 2">
                          <g id="圖層_1-2" data-name="圖層 1">
                            <path
                              className="cls-1"
                              d="M71.52,23,65.87,11.72v-10A1.74,1.74,0,0,0,64.13,0H8.67A1.74,1.74,0,0,0,6.93,1.73v10L1.28,23A12.15,12.15,0,0,0,0,28.46v73.81A1.74,1.74,0,0,0,1.73,104H71.07a1.74,1.74,0,0,0,1.73-1.73V28.46A12.15,12.15,0,0,0,71.52,23ZM43.33,3.47H62.4V10.4H43.33ZM32.77,12.84a.66.66,0,0,0,0-.11,1.56,1.56,0,0,0,.11-.52s0,0,0-.07V3.47h6.94v8.25L34.21,23a12.28,12.28,0,0,0-1.28,5.43V41.6H26V28.46a8.68,8.68,0,0,1,.91-3.88l5.84-11.67S32.76,12.86,32.77,12.84ZM10.4,3.47H29.47V10.4H10.4Zm45.07,25v72.07h-52V28.46a8.68,8.68,0,0,1,.91-3.88L9.74,13.87H28.4L23.81,23a12.28,12.28,0,0,0-1.28,5.43V43.33a1.74,1.74,0,0,0,1.74,1.74h10.4a1.74,1.74,0,0,0,1.73-1.74V28.46a8.69,8.69,0,0,1,.92-3.88l5.35-10.71H61.33L56.75,23A12.15,12.15,0,0,0,55.47,28.46Zm13.86,72.07H58.93V28.46a8.82,8.82,0,0,1,.92-3.88L64.13,16l4.29,8.57a8.68,8.68,0,0,1,.91,3.88Z"
                            />
                            <path
                              className="cls-1"
                              d="M31.65,56.26a21.73,21.73,0,0,0-10.84,6.12,21.82,21.82,0,0,0-6.12,10.83,10.73,10.73,0,0,0,2.45,10A9.84,9.84,0,0,0,24.26,86a14.65,14.65,0,0,0,2.88-.29A21.78,21.78,0,0,0,38,79.54a21.77,21.77,0,0,0,6.11-10.83,10.68,10.68,0,0,0-2.44-10A10.67,10.67,0,0,0,31.65,56.26ZM18.09,73.91a18.32,18.32,0,0,1,5.17-9.07,18.37,18.37,0,0,1,9.08-5.18,11.44,11.44,0,0,1,2.18-.23,6.76,6.76,0,0,1,3.93,1.13A12.31,12.31,0,0,1,36,62.05a17.53,17.53,0,0,0-8.15,8.14A12.14,12.14,0,0,1,25.12,74a12.14,12.14,0,0,1-3.85,2.72,16.24,16.24,0,0,0-3,1.83A9.07,9.07,0,0,1,18.09,73.91ZM40.69,68a18.25,18.25,0,0,1-5.17,9.07,18.34,18.34,0,0,1-9.07,5.18,8,8,0,0,1-6.13-.89,12.32,12.32,0,0,1,2.48-1.5,15.68,15.68,0,0,0,4.76-3.39A15.56,15.56,0,0,0,31,71.72a14,14,0,0,1,6.57-6.56,16.24,16.24,0,0,0,3-1.83A9.06,9.06,0,0,1,40.69,68Z"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div>
                      <div>全部商品</div>
                      <div>store map</div>
                    </div>
                  </div>
                </a>
              </div>
            </li>
            <li>
              <div className=" nav-three-gp  d-play-none">
                <a href="#/">
                  <div className="three-gp-flex ">
                    <div className="nav-icon-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 137.07 102.79"
                      >
                        <defs />
                        <g id="圖層_2" data-name="圖層 2">
                          <g id="圖層_1-2" data-name="圖層 1">
                            <g id="Page-1">
                              <g
                                id="_018---Latte-Art"
                                data-name="018---Latte-Art"
                              >
                                <path
                                  id="Shape"
                                  className="cls-1"
                                  d="M57.1,102.79c17.34,0,31.05-5,40.75-15a47.83,47.83,0,0,0,5.57-7,25.6,25.6,0,0,1,6.23-2.23c.86-.2,1.78-.4,2.74-.6,9-1.92,22.62-4.82,24.46-18.31a20.84,20.84,0,0,0,.19-2.84s0,0,0-.08V46.25a12.77,12.77,0,0,0-5.14-10.9C127,31.79,119.85,31.86,114,33.28,111.37,14.65,86.87,0,57.1,0,25.62,0,0,16.4,0,36.55c0,.21,0,.42,0,.63C-.24,49.71,1.56,72.64,16.37,87.81c9.7,9.94,23.41,15,40.73,15ZM94.47,84.64c-8.8,9-21.41,13.6-37.47,13.6s-28.66-4.56-37.46-13.6C10.56,75.44,6.79,63,5.32,52.09c9.13,12.41,28.86,21,51.68,21s42.59-8.63,51.71-21.06c-1.46,10.84-5.23,23.36-14.23,32.58Zm37.74-25.43C130.8,69.52,120,71.82,111.32,73.68l-2.8.61c-.56.13-1.09.27-1.62.42a75.79,75.79,0,0,0,6.79-26c6.37-1.84,12.61-1.39,15.85,1.28,2.34,1.93,3.24,5,2.67,9.19Zm-3-20.16a8.31,8.31,0,0,1,3.25,7.2v.06c-4.87-4-12.18-4-18.36-2.52.09-2.11.11-4.07.09-5.84,6-1.65,11.76-1.27,15,1.11ZM57,4.59c28.74,0,52.13,14.14,52.45,31.58v.06l.27.1v.15c0,17.71-23.66,32.11-52.74,32.11-28.76,0-52.2-14.08-52.72-31.51V36.8l.27-.12v-.15C4.55,18.91,28.09,4.59,57,4.59Z"
                                />
                                <path
                                  id="Shape-2"
                                  data-name="Shape"
                                  className="cls-1"
                                  d="M12.65,46.55a2.28,2.28,0,1,0,3.69-2.69,12.52,12.52,0,0,1-2.74-7.31C13.6,25.76,32.16,13.7,57,13.7a65.67,65.67,0,0,1,28.32,5.94,2.28,2.28,0,0,0,2-4.11A69.94,69.94,0,0,0,57,9.14C28.31,9.14,9,23.3,9,36.55a16.91,16.91,0,0,0,3.62,10Z"
                                />
                                <path
                                  id="Shape-3"
                                  data-name="Shape"
                                  className="cls-1"
                                  d="M100.4,36.55c0,10.78-18.56,22.84-43.4,22.84a63.19,63.19,0,0,1-31.59-7.68,2.29,2.29,0,0,0-3.5,1.94,2.26,2.26,0,0,0,1.18,2A67.69,67.69,0,0,0,57,64c28.69,0,48-14.17,48-27.41a18.77,18.77,0,0,0-5.76-12.62,2.29,2.29,0,1,0-3.33,3.13A14.29,14.29,0,0,1,100.4,36.55Z"
                                />
                                <path
                                  id="Shape-4"
                                  data-name="Shape"
                                  className="cls-1"
                                  d="M56.89,54.75c15.2,0,27.14-6.91,27.3-15.75A2.35,2.35,0,0,0,82,36.55a2.27,2.27,0,0,0-2.37,2.27c0,5.79-9.17,10.73-20.48,11.32v-4.6c7.2-.53,12-3.44,13.28-5.58a2.2,2.2,0,0,0-.78-3,2.35,2.35,0,0,0-3.14.66A15.3,15.3,0,0,1,59.16,41V35.92c9-2.91,13.65-6.52,13.65-10.75,0-3.89-3.91-6.83-9.1-6.83A14.19,14.19,0,0,0,56.89,20a14.26,14.26,0,0,0-6.83-1.61c-5.19,0-9.1,2.94-9.1,6.83C41,29.4,45.59,33,54.61,35.92V41a15.47,15.47,0,0,1-9.34-3.31A2.28,2.28,0,1,0,41.33,40c1.24,2.14,6.09,5,13.28,5.58v4.6c-11.3-.59-20.46-5.53-20.48-11.31a2.28,2.28,0,0,0-4.55,0C29.58,47.75,41.58,54.75,56.89,54.75ZM45.58,25.13c0-.94,1.63-2.29,4.57-2.29a8.69,8.69,0,0,1,5.35,1.5,2.31,2.31,0,0,0,3,0,8.68,8.68,0,0,1,5.36-1.5c2.94,0,4.57,1.35,4.57,2.29,0,1.22-2.42,4-11.42,6.75C48,29.12,45.58,26.35,45.58,25.13Z"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div>
                      <div>關於我們</div>
                      <div>store map</div>
                    </div>
                  </div>
                </a>
              </div>
            </li>
          </div>
          <div className="loginbar">
            <a href="#/">
              <div className="three-gp-flex">
                <div className="nav-icon-4">
                  {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                  {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: 'new 0 0 512 512' }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <g>
                        <path
                          d="M437.02,330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521,243.251,404,198.548,404,148
			C404,66.393,337.607,0,256,0S108,66.393,108,148c0,50.548,25.479,95.251,64.262,121.962
			c-36.21,12.495-69.398,33.136-97.281,61.018C26.629,379.333,0,443.62,0,512h40c0-119.103,96.897-216,216-216s216,96.897,216,216
			h40C512,443.62,485.371,379.333,437.02,330.98z M256,256c-59.551,0-108-48.448-108-108S196.449,40,256,40
			c59.551,0,108,48.448,108,108S315.551,256,256,256z"
                        />
                      </g>
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>
                </div>
                <div>登入/註冊</div>
              </div>
            </a>
            <a href="#/">
              <div className="three-gp-flex">
                <div className="nav-icon-4">
                  {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                  {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 477.846 477.846"
                    style={{ enableBackground: 'new 0 0 477.846 477.846' }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <g>
                        <path
                          d="M472.847,226.846l-34.116-34.116L250.998,4.997c-6.664-6.663-17.468-6.663-24.132,0L39.132,192.73L4.999,226.864
                                        c-6.548,6.78-6.361,17.584,0.419,24.132c6.614,6.388,17.099,6.388,23.713,0l4.983-5.018v214.801
                                        c0,9.426,7.641,17.067,17.067,17.067h375.467c9.426,0,17.067-7.641,17.067-17.067V245.978l5,5.001
                                        c6.78,6.548,17.584,6.36,24.132-0.419C479.235,243.946,479.235,233.46,472.847,226.846z M290.115,443.713h-102.4V307.179h102.4
                                        V443.713z M409.581,443.713h-85.333v-153.6c0-9.426-7.641-17.067-17.067-17.067H170.648c-9.426,0-17.067,7.641-17.067,17.067
                                        v153.6H68.248V211.845L238.914,41.178l170.667,170.667V443.713z"
                        />
                      </g>
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>
                </div>
                <div>店家專區</div>
              </div>
            </a>
            <a href="#/">
              <div className="three-gp-flex">
                <div className="nav-icon-1">
                  {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                  {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 450.391 450.391"
                    style={{ enableBackground: 'new 0 0 450.391 450.391' }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <g>
                        <g>
                          <path
                            d="M143.673,350.322c-25.969,0-47.02,21.052-47.02,47.02c0,25.969,21.052,47.02,47.02,47.02
				c25.969,0,47.02-21.052,47.02-47.02C190.694,371.374,169.642,350.322,143.673,350.322z M143.673,423.465
				c-14.427,0-26.122-11.695-26.122-26.122c0-14.427,11.695-26.122,26.122-26.122c14.427,0,26.122,11.695,26.122,26.122
				C169.796,411.77,158.1,423.465,143.673,423.465z"
                          />
                          <path
                            d="M342.204,350.322c-25.969,0-47.02,21.052-47.02,47.02c0,25.969,21.052,47.02,47.02,47.02s47.02-21.052,47.02-47.02
				C389.224,371.374,368.173,350.322,342.204,350.322z M342.204,423.465c-14.427,0-26.122-11.695-26.122-26.122
				c0-14.427,11.695-26.122,26.122-26.122s26.122,11.695,26.122,26.122C368.327,411.77,356.631,423.465,342.204,423.465z"
                          />
                          <path
                            d="M448.261,76.037c-2.176-2.377-5.153-3.865-8.359-4.18L99.788,67.155L90.384,38.42
				C83.759,19.211,65.771,6.243,45.453,6.028H10.449C4.678,6.028,0,10.706,0,16.477s4.678,10.449,10.449,10.449h35.004
				c11.361,0.251,21.365,7.546,25.078,18.286l66.351,200.098l-5.224,12.016c-5.827,15.026-4.077,31.938,4.702,45.453
				c8.695,13.274,23.323,21.466,39.184,21.943h203.233c5.771,0,10.449-4.678,10.449-10.449c0-5.771-4.678-10.449-10.449-10.449
				H175.543c-8.957-0.224-17.202-4.936-21.943-12.539c-4.688-7.51-5.651-16.762-2.612-25.078l4.18-9.404l219.951-22.988
				c24.16-2.661,44.034-20.233,49.633-43.886l25.078-105.012C450.96,81.893,450.36,78.492,448.261,76.037z M404.376,185.228
				c-3.392,15.226-16.319,26.457-31.869,27.69l-217.339,22.465L106.58,88.053l320.261,4.702L404.376,185.228z"
                          />
                        </g>
                      </g>
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>
                </div>
              </div>
            </a>
          </div>
          <div className="icon-s-none ">
            <a href="#/">
              {/*?xml version="1.0" encoding="iso-8859-1"?*/}
              {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
              <svg
                className="nav-icon"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 450.391 450.391"
                style={{ enableBackground: 'new 0 0 450.391 450.391' }}
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <g>
                      <path
                        d="M143.673,350.322c-25.969,0-47.02,21.052-47.02,47.02c0,25.969,21.052,47.02,47.02,47.02
                                    c25.969,0,47.02-21.052,47.02-47.02C190.694,371.374,169.642,350.322,143.673,350.322z M143.673,423.465
                                    c-14.427,0-26.122-11.695-26.122-26.122c0-14.427,11.695-26.122,26.122-26.122c14.427,0,26.122,11.695,26.122,26.122
                                    C169.796,411.77,158.1,423.465,143.673,423.465z"
                      />
                      <path
                        d="M342.204,350.322c-25.969,0-47.02,21.052-47.02,47.02c0,25.969,21.052,47.02,47.02,47.02s47.02-21.052,47.02-47.02
                                    C389.224,371.374,368.173,350.322,342.204,350.322z M342.204,423.465c-14.427,0-26.122-11.695-26.122-26.122
                                    c0-14.427,11.695-26.122,26.122-26.122s26.122,11.695,26.122,26.122C368.327,411.77,356.631,423.465,342.204,423.465z"
                      />
                      <path
                        d="M448.261,76.037c-2.176-2.377-5.153-3.865-8.359-4.18L99.788,67.155L90.384,38.42
                                    C83.759,19.211,65.771,6.243,45.453,6.028H10.449C4.678,6.028,0,10.706,0,16.477s4.678,10.449,10.449,10.449h35.004
                                    c11.361,0.251,21.365,7.546,25.078,18.286l66.351,200.098l-5.224,12.016c-5.827,15.026-4.077,31.938,4.702,45.453
                                    c8.695,13.274,23.323,21.466,39.184,21.943h203.233c5.771,0,10.449-4.678,10.449-10.449c0-5.771-4.678-10.449-10.449-10.449
                                    H175.543c-8.957-0.224-17.202-4.936-21.943-12.539c-4.688-7.51-5.651-16.762-2.612-25.078l4.18-9.404l219.951-22.988
                                    c24.16-2.661,44.034-20.233,49.633-43.886l25.078-105.012C450.96,81.893,450.36,78.492,448.261,76.037z M404.376,185.228
                                    c-3.392,15.226-16.319,26.457-31.869,27.69l-217.339,22.465L106.58,88.053l320.261,4.702L404.376,185.228z"
                      />
                    </g>
                  </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
//我的爸爸是app.js
//小孩
export default Nav