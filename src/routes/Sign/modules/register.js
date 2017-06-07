// Constants

//切换注册方式
const REGISTER_BY_PHONE = 'REGISTER_BY_PHONE'
const REGISTER_BY_EMAIL = 'REGISTER_BY_EMAIL'
const REQUEST_VERIFY_CODE = 'REQUEST_VERIFY_CODE'

//手机验证码区域


//Actions

function register_by_phone() {
  return {
    type: REGISTER_BY_PHONE
  }
}

function register_by_email() {
  return {
    type: REGISTER_BY_EMAIL
  }
}

export function option_to_register(option) {
  switch (option) {
    case 'phone':
      return register_by_phone()
      break;
    case 'email':
      return register_by_email()
      break;
    default:
      break
  }
}

const initialState = {
  option: 'phone',
  error: {
    isGet: false,
    info: ''
  },
  verify_code: {
    count: 60,

  }
}


//Reducer

export default function(state = initialState, action) {
  switch (action.type) {
    case REGISTER_BY_PHONE:
      return { ...state, option: 'phone'}
    case REGISTER_BY_EMAIL:
      return { ...state, option: 'email'}
    default:
      return state
  }
}
