import { SubmissionError } from 'redux-form'
import { browserHistory } from 'react-router'

import { START_REQUEST_LOGIN, RECEIVE_LOGIN_SUCCESS, RECEIVE_LOGIN_FAIL, start_request_login, receieve_login_success, receieve_login_fail} from '../../../../store/auth'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function submit(values, dispatch) {
  //处理values
  return sleep(1000).then( () => {
    let profile = {
      link: '/',
      img: 'http://upload.jianshu.io/users/upload_avatars/1517038/de700590cd50.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96',
      userName: 'mofan',
    }
    dispatch(receieve_login_success(profile))
    browserHistory.push('/')
  }).catch( error => {
    console.log(error);
    dispatch(receieve_login_fail())
  })
}

export default submit
