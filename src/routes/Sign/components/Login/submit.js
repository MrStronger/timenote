// import { SubmissionError } from 'redux-form'
import { browserHistory } from 'react-router'

import { START_REQUEST_LOGIN, RECEIVE_LOGIN_SUCCESS, RECEIVE_LOGIN_FAIL, startRequestLogin, receieveLoginSuccess, receieveLoginFail } from '../../../../store/auth'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function submit (values, dispatch) {
  // 处理values
  debugger
  dispatch(startRequestLogin())
  return fetch('/index.php?s=/index/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  }).then((profile) => {
    dispatch(receieveLoginSuccess(profile))
    browserHistory.push('/')
  }).catch(error => {
    console.log(error)
    dispatch(receieveLoginFail())
  })
}

export default submit
