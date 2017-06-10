// Constants

// 切换注册方式
const REGISTER_BY_PHONE = 'REGISTER_BY_PHONE'
const REGISTER_BY_EMAIL = 'REGISTER_BY_EMAIL'

// 手机验证码区域

// Actions

export function registerByPhone () {
  return {
    type: REGISTER_BY_PHONE
  }
}

export function registerByEmail () {
  return {
    type: REGISTER_BY_EMAIL
  }
}

export function optionToRegister (option) {
  switch (option) {
    case 'phone':
      return registerByPhone()
    case 'email':
      return registerByEmail()
    default:
      break
  }
}

const initialState = {
  option: 'phone',

}

// Reducer

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTER_BY_PHONE:
      return { ...state, option: 'phone' }
    case REGISTER_BY_EMAIL:
      return { ...state, option: 'email' }
    default:
      return state
  }
}
