import { SubmissionError } from 'redux-form'
import { browserHistory } from 'react-router'

import { startRequestRegister, recieveRegisterSuccess } from '../../../../../store/auth'

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function submit (values, dispatch) {
  // 处理values
  debugger
  dispatch(startRequestRegister())
  return fetch('/back/index.php?s=/index/user/register', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  }).then(res => {
    if (res.status >= 200 && res.status < 300) {
      return res.json()
    }
  }).then((data) => {
    debugger
    if (data.code === -1) {
      alert(data.msg || '账号或密码错误')
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
