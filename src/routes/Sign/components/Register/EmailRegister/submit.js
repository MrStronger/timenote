import { SubmissionError } from 'redux-form'
import { browserHistory } from 'react-router'

import { START_REQUEST_REGISTER, RECEIEVE_REGISTER_SUCCESS, RECEIEVE_REGISTER_FAIL, start_request_register, recieve_register_success, recieve_register_fail} from '../../../../../store/auth'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function submit(values, dispatch) {
  //从values中提取需要的信息
  dispatch(start_request_register())
  return sleep(1500).then( () => {

    let profile = {
      link: '/',
      img: 'http://upload.jianshu.io/users/upload_avatars/1517038/de700590cd50.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96',
      userName: 'mofan',
    }
    dispatch(recieve_register_success(profile))
    browserHistory.push('/')
  }).catch( err => {
    console.log(err);
    throw new SubmissionError({
      _error: '服务器错误'
    })
  })
}

export default submit
