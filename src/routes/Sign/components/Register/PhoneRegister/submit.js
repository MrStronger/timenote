import { SubmissionError } from 'redux-form'
import { browserHistory } from 'react-router'

import { START_REQUEST_REGISTER, RECEIEVE_REGISTER_SUCCESS, RECEIEVE_REGISTER_FAIL, startRequestRegister, recieveRegisterSuccess, recieveRegisterFail } from '../../../../../store/auth'

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function submit (values, dispatch) {
  // 处理values
  debugger
  dispatch(startRequestRegister())
  return fetch('/back/index.php?s=/index/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  }).then((data) => {
    if (data.code === -1) {
      alert('密码错误')
    } else if (data.code === 0) {
      dispatch(recieveRegisterSuccess(data.msg))
      browserHistory.push('/')
    }
  }).catch(err => {
    console.log(err)
    throw new SubmissionError({
      _error: '服务器错误'
    })
  })
}

export default submit
