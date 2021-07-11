import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import {
  makeStyles,
  withStyles,
  Stepper,
  SvgIcon,
  Step,
  StepLabel,
  StepConnector,
  Button,
  Typography,
} from '@material-ui/core'
import '../Cart.css'
import { useForm } from 'react-hook-form'

import IconCart from './IconCart'

//分頁切換
import MyCartTest from '../test-components/MyCartTest'
import Address from '../test-components/Address'
import CreditForm from '../test-components/CreditForm'
import FinalCheck from '../FinalCheck'
import Completed from '../Completed'

//流程圖連結線外觀設定
const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 95,
    margin: 'auto 0px',
    color: '#fcf5e9',
    fill: '#fcf5e9',
    maxWidth: '665px',
  },
  active: {
    '& $line': {
      backgroundColor: '#659de1',
      fill: '#659de1',
    },
  },
  completed: {
    '& $line': {
      backgroundColor: '#659de1',
      fill: '#659de1',
    },
  },
  line: {
    // width: '150px',
    height: 2,
    border: 0,
    backgroundColor: '#fcf5e9', //灰
    borderRadius: 1,
  },
})(StepConnector)

//icon 外觀設定:初始、當前、完成
const useColorlibStepIconStyles = makeStyles({
  root: {
    border: '2px solid #fcf5e9',
    margin: '60px auto 0px',
    zIndex: 1,
    width: '70px',
    height: '70px',
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fcf5e9',
    backgroundColor: '#ffffff',
  },
  active: {
    color: '#659de1', //icon填色
    border: '2px solid #659de1',
    fill: 'action',
    '& $label': {
      color: '#659de1',
    },
  },
  completed: {
    color: '#659de1',
    border: '2px solid #659de1',
    fill: '#659de1',
    label: {
      color: '#659de1',
    },
  },
})

//引入 svg icon圖
function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles()
  const { active, completed } = props

  const icons = {
    1: <IconCart />,
    2: (
      <SvgIcon alt="Address" viewBox="0 -31 512.00033 512">
        <path d="m128.621 134.599 222.768-95.506-92.24-37.893c-3.896-1.6-8.264-1.6-12.16 0l-221.545 91.013z" />
        <path d="m392.849 56.125-222.836 95.478 83.056 34.121 227.626-93.511z" />
        <path d="m237.069 213.746-90.147-37.033v70.118c0 8.836-7.164 16-16 16s-16-7.164-16-16v-83.264l-103.841-42.659v281.668c0 6.488 3.918 12.334 9.92 14.8l216.068 88.763z" />
        <path d="m269.069 213.746v292.393l216.068-88.763c6.002-2.465 9.92-8.312 9.92-14.8 0-10.766 0-269.883 0-281.668z" />
      </SvgIcon>
    ),
    3: (
      <SvgIcon alt="credit" viewBox="0 -31 512.00033 512">
        <g>
          <g>
            <path d="M426.6,68.3H51.2C22.9,68.3,0,91.2,0,119.5v34.1h477.8v-34.1C477.8,91.2,454.9,68.3,426.6,68.3z" />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M0,256v102.4c0,28.3,22.9,51.2,51.2,51.2h375.5c28.3,0,51.2-22.9,51.2-51.2V256H0z M392.5,324.2h-68.3
c-9.4,0-17.1-7.6-17.1-17.1s7.6-17.1,17.1-17.1h68.3c9.4,0,17.1,7.6,17.1,17.1S401.9,324.2,392.5,324.2z"
            />
          </g>
        </g>
        <g>
          <g>
            <rect y="187.7" width="477.9" height="34.1" />
          </g>
        </g>
      </SvgIcon>
    ),
    4: (
      <SvgIcon alt="checkedPage" viewBox="0 -31 512.00033 512">
        <g>
          <g>
            <path d="M426.6,68.3H51.2C22.9,68.3,0,91.2,0,119.5v34.1h477.8v-34.1C477.8,91.2,454.9,68.3,426.6,68.3z" />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M0,256v102.4c0,28.3,22.9,51.2,51.2,51.2h375.5c28.3,0,51.2-22.9,51.2-51.2V256H0z M392.5,324.2h-68.3
c-9.4,0-17.1-7.6-17.1-17.1s7.6-17.1,17.1-17.1h68.3c9.4,0,17.1,7.6,17.1,17.1S401.9,324.2,392.5,324.2z"
            />
          </g>
        </g>
        <g>
          <g>
            <rect y="187.7" width="477.9" height="34.1" />
          </g>
        </g>
      </SvgIcon>
    ),
  }

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  )
}

//判斷是否完成/當前頁面
ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
}

//全頁設定，有搭配 cart.css
const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0px auto',
    width: '80%',
    maxWidth: '1200px',
    backgroundColor: '#F9F9F9',
  },
  button: {
    marginLeft: theme.spacing(1),
    color: '#ffffff',
    backgroundColor: '#0065B4',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}))

//步驟名稱
function getSteps() {
  return ['我的購物車', '收貨地址', '付款方式', '確認訂單']
}

export default function Steppers(props) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ model: 'onChange' })
  //test:(拆解state成 3 step)

  const {
    step1,
    setStep1,
    step2,
    setStep2,
    step3,
    setStep3,
    cateLabels,
    cateLabel,
    setCateLabel,
    price,
    setPrice,
    handleChange,
    count,
    setCount,
    handleStep2Change,
    step2Errors,
    setStep2Errors,
    handleStep3Change,
  } = props

  //下一步分頁傳遞
  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <MyCartTest
            step1={step1}
            setStep1={setStep1}
            // state={state}
            // setState={setState}
            cateLabels={cateLabels}
            cateLabel={cateLabel}
            setCateLabel={setCateLabel}
            price={price}
            setPrice={setPrice}
            handleChange={handleChange}
            count={count}
            setCount={setCount}
          />
        )
      case 1:
        return (
          <Address
            step2={step2}
            setStep2={setStep2}
            handleStep2Change={handleStep2Change}
            step2Errors={step2Errors}
            setStep2Errors={setStep2Errors}
          />
        )
      case 2:
        return (
          <CreditForm
            step3={step3}
            setStep3={setStep3}
            handleStep3Change={handleStep3Change}
            register={register}
            errors={errors}
          />
        )
      case 3:
        return <FinalCheck />
      default:
        return <Completed /> // lOGIN驗證頁
    }
  }

  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const steps = getSteps()

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  //重設
  // const handleReset = () => {
  //   setActiveStep(0)
  // }

  return (
    <div className={classes.root}>
      <div>
        {activeStep === steps.length ? (
          <div>
            {/* 結帳完成頁 */}
            <Typography alternativeLabel className={classes.instructions}>
              <Completed />
            </Typography>
            {/* <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button> */}
          </div>
        ) : (
          <div>
            {/* 結帳流程圖 */}
            <Stepper
              alternativeLabel
              activeStep={activeStep}
              connector={<ColorlibConnector />}
              className={classes.root}
            >
              {/* onClick流程圖回上一頁還有 bug(不能跳回指定那頁，只能返回第一頁) */}
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel
                    alternativeLabel={true}
                    StepIconComponent={ColorlibStepIcon}
                    className={classes.root}
                    disabled={activeStep === 0}
                    onClick={activeStep === 0 ? 'disabled' : handleBack}
                  >
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
            <form onSubmit={handleSubmit}>
              {/* 購物車步驟內容 */}
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
              <input type="submit" />
            </form>
            <div>
              {/* <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                上一頁
              </Button> */}
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1
                  ? '結帳'
                  : activeStep < 2
                  ? '下一頁'
                  : '確認訂單'}
              </Button>
            </div>
          </div>
        )}
      </div>
      <pre>{JSON.stringify(step1, null, 2)}</pre>
      <pre>{JSON.stringify(step2, null, 2)}</pre>
      <pre>{JSON.stringify(step3, null, 2)}</pre>
    </div>
  )
}
