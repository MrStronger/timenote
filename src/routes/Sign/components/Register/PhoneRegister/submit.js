import { SubmissionError } from 'redux-form'
import { browserHistory } from 'react-router'

import { START_REQUEST_REGISTER, RECEIEVE_REGISTER_SUCCESS, RECEIEVE_REGISTER_FAIL, startRequestRegister, recieveRegisterSuccess, recieveRegisterFail } from '../../../../../store/auth'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function submit (values, dispatch) {
  // 处理values
  dispatch(startRequestRegister())
  return sleep(1500).then(() => {
    let profile = {
      link: '/',
      img: 'http://upload.jianshu.io/users/upload_avatars/1517038/de700590cd50.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96',
      userName: 'mofan',
    }
    dispatch(recieveRegisterSuccess(profile))
    browserHistory.push('/')
  }).catch(err => {
    console.log(err)
    throw new SubmissionError({
      _error: '服务器错误'
    })
  })
}

export default submit
