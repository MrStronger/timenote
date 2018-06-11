// ------------------------------------
// Constants
// ------------------------------------
export const CHANGE_TOGGLE = 'CHANGE_TOGGLE'

// ------------------------------------
// Actions
// ------------------------------------

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
  currentToggle: 'new'
}
export default function toggleReducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_TOGGLE : return { ...state, currentToggle:action.currentToggle }
    default : return state
  }
}
