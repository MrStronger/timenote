import { SubmissionError } from 'redux-form'
import { browserHistory } from 'react-router'

import { START_REQUEST_REGISTER, RECEIEVE_REGISTER_SUCCESS, RECEIEVE_REGISTER_FAIL, start_request_register, recieve_register_success, recieve_register_fail} from '../../../../../store/auth'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function submit(values, dispatch) {
  //处理values
  dispatch(start_request_register())
  return sleep(1500).then( () => {
    //随便开个接口模仿注册
    fetch('http://127.0.0.1:4000/top/artists')
      .then(response => response.json())
      .then(response => {
        let profile = {
          img: 'hehe',
          link: 'www.baidu.com'
        }
        dispatch(recieve_register_success(profile))
        browserHistory.push('/')
      }).catch( err => {
        console.log(err);
        throw new SubmissionError({
          _error: '服务器错误'
        })
      })
    })
}

export default submit
