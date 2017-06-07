//Constants  login register

export const START_REQUEST_LOGIN = 'START_REQUEST_LOGIN'
export const RECEIVE_LOGIN_SUCCESS = 'RECEIVE_LOGIN_SUCCESS'
export const RECEIVE_LOGIN_FAIL = 'RECEIVE_LOGIN_FAIL'

export const START_REQUEST_REGISTER = 'START_REQUEST_REGISTER'
export const RECEIEVE_REGISTER_FAIL = 'RECEIEVE_REGISTER_FAIL'
export const RECEIEVE_REGISTER_SUCCESS = 'RECEIEVE_REGISTER_SUCCESS'


//Actions

export function start_request_register() {
  return {
    type: START_REQUEST_REGISTER
  }
}

export function recieve_register_fail(msg){
  return {
    type: RECEIEVE_REGISTER_FAIL,
    msg: msg
  }
}

export function recieve_register_success(profile) {
  return {
    type: RECEIEVE_REGISTER_SUCCESS,
    profile: profile
  }
}

function start_request_login() {
  return {
    type: START_REQUEST_LOGIN
  }
}

function receieve_login_success(profile) {
  return {
    type: RECEIVE_LOGIN_SUCCESS,
    profile: profile
  }
}

function recieve_login_fail() {
  return {
    type: RECEIVE_LOGIN_FAIL
  }
}

//Action Creator

export function fetchLogin(user) {
  console.log(user);
}

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
    case RECEIEVE_REGISTER_SUCCESS:
      return { ...state, fetching: false, isAuth: true, profile: action.profile}
    case RECEIEVE_REGISTER_FAIL:
      return { ...state, fetching: false, isAuth: false, profile: {}}
    case START_REQUEST_LOGIN:
      return { ...state, fetching: true, isAuth: false, profile: {}}
    case RECEIVE_LOGIN_SUCCESS:
      return { ...state, fetching: false, isAuth: true, profile: action.profile}
    case RECEIVE_LOGIN_FAIL:
      return { ...state, fetching: false, isAuth: false, profile: {}}
    default:
      return state
  }
}
