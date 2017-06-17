// import { SubmissionError } from 'redux-form'
import { browserHistory } from 'react-router'

import { START_REQUEST_LOGIN, RECEIVE_LOGIN_SUCCESS, RECEIVE_LOGIN_FAIL, startRequestLogin, receieveLoginSuccess, receieveLoginFail } from '../../../../store/auth'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function submit (values, dispatch) {
  // 处理values
  return sleep(1000).then(() => {
    let profile = {
      user_id: 'dssdvsvd',
      link: '/',
      img: 'http://upload.jianshu.io/users/upload_avatars/1517038/de700590cd50.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96',
      userName: 'mofan',
    }
    dispatch(receieveLoginSuccess(profile))
    browserHistory.push('/')
  }).catch(error => {
    console.log(error)
    dispatch(receieveLoginFail())
  })
}

export default submit
