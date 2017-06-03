//Constants

export const START_REQUEST_REGISTER = 'START_REQUEST_REGISTER'
export const RECIEVE_REGISTER_FAIL = 'RECIEVE_REGISTER_FAIL'
export const RECIEVE_REGISTER_SUCCESS = 'RECIEVE_REGISTER_SUCCESS'


//Actions

export function start_request_register() {
  return {
    type: START_REQUEST_REGISTER
  }
}

export function recieve_register_fail(msg){
  return {
    type: RECIEVE_REGISTER_FAIL,
    msg: msg
  }
}

export function recieve_register_success(profile) {
  return {
    type: RECIEVE_REGISTER_SUCCESS,
    profile: profile
  }
}


//Action Creator

export function fetchRegister(user){
  return (dispatch, getState) => {
    let { fetching } = getState().auth
    if(fetching) return false
    }
}


const initialState = {
  fetching: false,
  isAuth: false,
  profile: {

  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case START_REQUEST_REGISTER:
      return { ...state, fetching: true, isAuth: false, profile: {}}
    case RECIEVE_REGISTER_SUCCESS:
      return { ...state, fetching: false, isAuth: true, profile: action.profile}
    case RECIEVE_REGISTER_FAIL:
      return { ...state, fetching: false, isAuth: false, profile: {}}
    default:
      return state
  }
}
