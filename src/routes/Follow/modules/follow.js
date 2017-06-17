// ------------------------------------
// Constants
// ------------------------------------
export const CHANGE_FOLLOW = 'CHANGE_FOLLOW'
export const CHANGE_TOGGLE = 'CHANGE_TOGGLE'

// ------------------------------------
// Actions
// ------------------------------------
export function changeFollow (currentFollow) {
  return {
    type: CHANGE_FOLLOW,
    currentFollow
  }
}

export function changeToggle (currentToggle) {
  return {
    type: CHANGE_TOGGLE,
    currentToggle
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  currentFollow: 'vdf15v5df',
  currentToggle: 'new'
}
export default function counterReducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_FOLLOW : return { ...state, currentFollow:action.currentFollow, currentToggle:state.currentToggle }
    case CHANGE_TOGGLE : return { ...state, currentFollow:state.currentFollow, currentToggle:action.currentToggle }
    default : return state
  }
}
