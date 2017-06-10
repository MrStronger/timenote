export const CHANGE_TO_REGISTER = 'CHANGE_TO_REGISTER'
export const CHANGE_TO_LOGIN = 'CHANGE_TO_LOGIN'

export function changeToRegister (option) {
  return {
    type: CHANGE_TO_REGISTER,
    option: option
  }
}

export function changeToLogin (option) {
  return {
    type: CHANGE_TO_LOGIN,
    option: option
  }
}

const initialState = {
  option: 'login'
}

export default function (state = initialState, action) {
  let { option } = state
  if (option === action.option) return state
  switch (action.type) {
    case CHANGE_TO_LOGIN:
      return { ...state, option: 'login' }
    case CHANGE_TO_REGISTER:
      return { ...state, option: 'register' }
    default:
      return state
  }
}
