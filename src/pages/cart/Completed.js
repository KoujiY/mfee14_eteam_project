import React from 'react'
import { Grid, Paper, makeStyles } from '@material-ui/core'
//組件
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(10),
    height: '100%',
    minHeight: '500PX',
    textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
  h3: {
    margin: '60px auto',
  },
  button: {
    margin: '30px 10px',
  },
}))
function Completed(props) {
  const classes = useStyles()
  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.paper}>
              <h3 className={classes.h3}>感謝您的購買!</h3>
              <h4>訂單已成立！</h4>
              <div className="success-checkmark">
                <div className="check-icon">
                  <span className="icon-line line-tip"></span>
                  <span className="icon-line line-long"></span>
                  <div className="icon-circle"></div>
                  <div className="icon-fix"></div>
                </div>
              </div>
              <div className={classes.h3}>
                {' '}
                <button className="outlineChoose">去看我的訂單</button>
                <button className="outlineChoose">回首頁</button>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
export default Completed
