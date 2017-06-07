//Constants

export const START_REQUEST_REGISTER = 'START_REQUEST_REGISTER'
export const RECIEVE_REGISTER_FAIL = 'RECIEVE_REGISTER_FAIL'
export const RECIEVE_REGISTER_SUCCESS = 'RECIEVE_REGISTER_SUCCESS'
export const SIGN_OUT = 'SIGN_OUT'

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

export function sign_out () {
  return {
    type: SIGN_OUT
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
  isAuth: true,
  profile: {
    link: '/',
    img: 'http://upload.jianshu.io/users/upload_avatars/1517038/de700590cd50.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96',
    userName: 'mofan',
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case START_REQUEST_REGISTER:
      return { ...state, fetching: true, isAuth: false, profile: {} }
    case RECIEVE_REGISTER_SUCCESS:
      return { ...state, fetching: false, isAuth: true, profile: action.profile }
    case RECIEVE_REGISTER_FAIL:
      return { ...state, fetching: false, isAuth: false, profile: {} }
    case SIGN_OUT:
      return { ...state, fetching: false, isAuth: false, profile: {} }
    default:
      return state
  }
}
