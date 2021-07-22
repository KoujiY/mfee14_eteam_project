/**
 * 1.單價隨規格連動未完成
 * 2.總價待修正變數值(setPrice), 商品數量加減沒有連動到 state中
 * 3.未連動資料庫(sql語法未完成)
 */
import React, { useState, useEffect } from 'react'
import {
  TextField,
  MenuItem,
  Container,
  makeStyles,
  Grid,
  Hidden,
} from '@material-ui/core'
import styled from 'styled-components'

//功能組件
// import CateSelect from './CateSelect'

const CartFunc = styled.div`
  display: block;
`

function CartCard(props) {
  const [dataLoading, setDataLoading] = useState(false)

  const {
    step1,
    setStep1,
    // state,
    // setState,
    price,
    setPrice,
    cateLabel,
    handleChange,
    count,
    setCount,
    cateLabels,
  } = props
  async function getCartFromServer() {
    // 開啟載入指示
    setDataLoading(true)

    // 連接的伺服器資料網址
    const url = 'http://localhost:7000/cart'
    // const url = Settings.host + '/users'

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const cart = await response.json()
    console.log(cart)
    // 設定資料
    setStep1(cart)
  }

  async function deletcUserFromServer(iId) {
    // 開啟載入指示
    setDataLoading(true)

    // 連接的伺服器資料網址
    const url = 'http://localhost:7000/cart/' + iId

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'DELETE',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
        credentials: 'same-origin',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)

    // 設定資料
    if (!data.iId) {
      const newStep1 = step1.filter((value, index) => {
        return value.id !== step1
      })

      setStep1(newStep1)
      alert('刪除完成')
    }
  }
  useEffect(() => {
    getCartFromServer()
  }, [])
  // 每次users資料有變動就會X秒後關掉載入指示
  // useEffect(() => {
  //   setTimeout(() => {
  //     setDataLoading(false)
  //   }, 1000)
  // }, [step1])

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: '150px',
    },
    image: {
      width: 125,
      height: 125,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    Grid: {},
  }))
  const classes = useStyles()
  return (
    <>
      <tbody className="cart-tbody">
        {step1.length <= 0 ? (
          <Container className="item-card">
            購物車沒有商品QQ
            <button>去選購</button>
          </Container>
        ) : (
          step1.map((v, i) => {
            v.name = step1[i].name
            v.pic = step1[i].pic
            v.iId = step1[i].iId
            v.iCount = step1[i].iCount
            v.iPrice = step1[i].iPrice
            v.total = v.iCount * v.iPrice
            return (
              <tr key={i} value={i}>
                {/* <Grid item xs className={classes.paper}> */}
                <td className="item-td">
                  {/* input id rwd作用 */}
                  <input
                    type="hidden"
                    key={i}
                    className="cartId"
                    value={v.iId}
                  />
                  <img src={v.pic} alt="商品圖片" className={classes.img} />
                </td>

                <td key={i} value={i}>
                  {v.name}
                </td>

                <td className="item-td">
                  <TextField
                    select
                    value={v.cateLabel}
                    key={i}
                    onChange={v.handleChange}
                  >
                    {cateLabels.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </td>

                <td className="item-td">
                  <button
                    type="button"
                    onClick={() => (v.iCount <= 1 ? 1 : setCount(v.iCount - 1))}
                  >
                    -
                  </button>
                  {v.iCount}
                  <button type="button" onClick={setCount(v.iCount - 1)}>
                    +
                  </button>
                </td>

                <td className="item-td">{v.iPrice}</td>

                <td className="item-td">{v.total}</td>

                <td colSpan="2" className="item-td">
                  <Hidden smDown>
                    <button className="outlineChoose" onClick={(e) => {}}>
                      下次再買
                    </button>
                  </Hidden>

                  <button
                    className="outlineChoose"
                    onClick={() => deletcUserFromServer(v.iId)}
                  >
                    X
                  </button>
                </td>
                {/* </Grid> */}
              </tr>
            )
          })
        )}
      </tbody>
    </>
  )
}
export default CartCard
