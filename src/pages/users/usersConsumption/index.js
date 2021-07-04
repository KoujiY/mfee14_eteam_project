import React from 'react'

import './usersConsumption.css'

import UsersTitle from '../components/usersTitle'

function UsersConsumption() {
  return (
    <>
      <UsersTitle />
      <div className="userConsumptionF">
        <form action="">
          <div className="userConsumptionOrderBy">
            <label forHtml="">排序方式</label>
            <select name="" id="">
              <option value="">請選擇</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
          </div>
          <p className="userConsumptionOrderByText">(依價格/日期排序)</p>
        </form>

        <form action="">
          <div className="userConsumptionSearch">
            <label forHtml="">搜尋</label>
            <input type="search" />
          </div>
        </form>
      </div>
      <div className="UserConsumptiondiv">
        <div className="UserConsumptionFlex">
          <div>訂單編號</div>
          <div>我的商品</div>
          <div>商品名稱</div>
          <div>規格</div>
          <div>商品數量</div>
          <div>商品價格</div>
          <div>總價</div>
          <div>日期</div>
        </div>
        <div className="UserConsumptionText">
          <div className="UserConsumptionId">156156116515</div>
          <div className="UserConsumptionPicture">
            <img src="../img/images (2).jfif" alt="" />
          </div>
          <div className="UserConsumptionName">阿拉比卡豆</div>

          <div className="UserConsumptionSpec">200g</div>

          <div className="UserConsumptionQty">12</div>
          <div>
            <p className="UserConsumptionSpecialoffer">原價 1400</p>
            <p>700</p>
          </div>
          <div className="UserConsumptionTotal">8400</div>
          <div>2021/12/12</div>
        </div>
        <div className="UserConsumptionText">
          <div className="UserConsumptionId">156156116515</div>
          <div className="UserConsumptionPicture">
            <img src="../img/images (2).jfif" alt="" />
          </div>
          <div className="UserConsumptionName">阿拉比卡豆</div>

          <div className="UserConsumptionSpec">200g</div>

          <div className="UserConsumptionQty">12</div>
          <div>
            <p className="UserConsumptionSpecialoffer">原價 1400</p>
            <p>700</p>
          </div>
          <div className="UserConsumptionTotal">8400</div>
          <div>2021/12/12</div>
        </div>
        <div className="UserConsumptionText">
          <div className="UserConsumptionId">156156116515</div>
          <div className="UserConsumptionPicture">
            <img src="../img/images (2).jfif" alt="" />
          </div>
          <div className="UserConsumptionName">阿拉比卡豆</div>

          <div className="UserConsumptionSpec">200g</div>

          <div className="UserConsumptionQty">12</div>
          <div>
            <p className="UserConsumptionSpecialoffer">原價 1400</p>
            <p>700</p>
          </div>
          <div className="UserConsumptionTotal">8400</div>
          <div>2021/12/12</div>
        </div>
        <div className="UserConsumptionText">
          <div className="UserConsumptionId">156156116515</div>
          <div className="UserConsumptionPicture">
            <img src="../img/images (2).jfif" alt="" />
          </div>
          <div className="UserConsumptionName">阿拉比卡豆</div>

          <div className="UserConsumptionSpec">200g</div>

          <div className="UserConsumptionQty">12</div>
          <div>
            <p className="UserConsumptionSpecialoffer">原價 1400</p>
            <p>700</p>
          </div>
          <div className="UserConsumptionTotal">8400</div>
          <div>2021/12/12</div>
        </div>
        <div className="UserConsumptionText">
          <div className="UserConsumptionId">156156116515</div>
          <div className="UserConsumptionPicture">
            <img src="../img/images (2).jfif" alt="" />
          </div>
          <div className="UserConsumptionName">阿拉比卡豆</div>

          <div className="UserConsumptionSpec">200g</div>

          <div className="UserConsumptionQty">12</div>
          <div>
            <p className="UserConsumptionSpecialoffer">原價 1400</p>
            <p>700</p>
          </div>
          <div className="UserConsumptionTotal">8400</div>
          <div>2021/12/12</div>
        </div>
        <div className="UserConsumptionPage">
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

export default UsersConsumption
