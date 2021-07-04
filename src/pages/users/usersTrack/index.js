import React from 'react'

import { Link } from 'react-router-dom'

import './usersTrack.css'

import UsersTitle from '../components/usersTitle'

function UsersTrack() {
  return (
    <>
      <UsersTitle />
      <div className="usersTrackdiv">
        <div className="usersTrackTitle">
          <div>我的商品</div>
          <div>商品名稱</div>
          <div>規格</div>
          <div>商品數量</div>
          <div>商品價格</div>
          <div>總價</div>
        </div>
        <div className="usersTrackText">
          <div className="usersTrackPicture">
            <img src="../img/images (2).jfif" alt="" />
          </div>
          <div className="usersTrackName">阿拉比卡豆</div>

          <div className="usersTrackSpec">200g</div>

          <div className="usersTrackQty">12</div>
          <div>
            <p className="usersTrackSpecialoffer">原價 1400</p>
            <p>700</p>
          </div>
          <div className="usersTrackTotal">8400</div>
          <div className="usersTrackBtn">
            <button>加入購物車</button>
            <button>購買</button>
          </div>
          <div className="usersTrackIcon">
            <Link to=""> X </Link>
          </div>
        </div>
        <div className="usersTrackText">
          <div className="usersTrackPicture">
            <img src="../img/images (2).jfif" alt="" />
          </div>
          <div className="usersTrackName">阿拉比卡豆</div>

          <div className="usersTrackSpec">200g</div>

          <div className="usersTrackQty">12</div>
          <div>
            <p className="usersTrackSpecialoffer">原價 1400</p>
            <p>700</p>
          </div>
          <div className="usersTrackTotal">8400</div>
          <div className="usersTrackBtn">
            <button>加入購物車</button>
            <button>加入購物車</button>
          </div>
          <div className="usersTrackIcon">
            <Link to=""> X </Link>
          </div>
        </div>
        <div className="usersTrackText">
          <div className="usersTrackPicture">
            <img src="../img/images (2).jfif" alt="" />
          </div>
          <div className="usersTrackName">阿拉比卡豆</div>

          <div className="usersTrackSpec">200g</div>

          <div className="usersTrackQty">12</div>
          <div>
            <p className="usersTrackSpecialoffer">原價 1400</p>
            <p>700</p>
          </div>
          <div className="usersTrackTotal">8400</div>
          <div className="usersTrackBtn">
            <button>加入購物車</button>
            <button>加入購物車</button>
          </div>
          <div className="usersTrackIcon">
            <Link to=""> X </Link>
          </div>
        </div>
        <div className="usersTrackText">
          <div className="usersTrackPicture">
            <img src="../img/images (2).jfif" alt="" />
          </div>
          <div className="usersTrackName">阿拉比卡豆</div>

          <div className="usersTrackSpec">200g</div>

          <div className="usersTrackQty">12</div>
          <div>
            <p className="usersTrackSpecialoffer">原價 1400</p>
            <p>700</p>
          </div>
          <div className="usersTrackTotal">8400</div>
          <div className="usersTrackBtn">
            <button>加入購物車</button>
            <button>加入購物車</button>
          </div>
          <div className="usersTrackIcon">
            <Link to=""> X </Link>
          </div>
        </div>
        <div className="usersTrackText">
          <div className="usersTrackPicture">
            <img src="../img/images (2).jfif" alt="" />
          </div>
          <div className="usersTrackName">阿拉比卡豆</div>

          <div className="usersTrackSpec">200g</div>

          <div className="usersTrackQty">12</div>
          <div>
            <p className="usersTrackSpecialoffer">原價 1400</p>
            <p>700</p>
          </div>
          <div className="usersTrackTotal">8400</div>
          <div className="usersTrackBtn">
            <button>加入購物車</button>
            <button>加入購物車</button>
          </div>
          <div className="usersTrackIcon">
            <Link to=""> X </Link>
          </div>
        </div>

        <div className="usersTrackPage">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
      </div>
    </>
  )
}

export default UsersTrack
