// ------------------------------------
// Constants
// ------------------------------------
const CHANGE_TO_REGISTER = 'CHANGE_TO_REGISTER'
const CHANGE_TO_LOGIN = 'CHANGE_TO_LOGIN'

// ------------------------------------
// Actions
// ------------------------------------

export function change_to_register(option) {
  return {
    type: CHANGE_TO_REGISTER,
    option: option
  }
}

export function change_to_login(option) {
  return {
    type: CHANGE_TO_LOGIN,
    option: option
  }
}



// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  option: 'login',
}


export default function(state = initialState, action) {
  let {option} = state
  if(option == action.option) return state
  switch (action.type) {
    case CHANGE_TO_REGISTER:
      return { ...state, option: 'register'}
    case CHANGE_TO_LOGIN:
      return { ...state, option: 'login'}
    default:
      return state
  }
}
