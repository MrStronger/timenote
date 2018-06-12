// Constants

const SAVING = 'SAVING'
const SAVE_SUCCESS = 'SAVE_SUCCESS'
const SAVE_FAILED = 'SAVE_FAILED'

const INITIAL_POST_ID = '-1'
const SAVINGID = '0'

// Actions

export function saving () {
  return {
    type: SAVING
  }
}

export function saved (postID) {
  return {
    type: SAVE_SUCCESS,
    payload: postID
  }
}

export function saveFailed (reason) {
  return {
    type: SAVE_FAILED,
    payload: reason
  }
}

const initialState = {
  currentState: SAVE_SUCCESS,
  currentPostID: INITIAL_POST_ID
}

// Reducer

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVING:
      return { ...state, currentState: action.type, currentPostID: state.currentPostID }
    case SAVE_SUCCESS:
      return { ...state, currentState: action.type, currentPostID: action.payload }
    case SAVE_FAILED:
      return { ...state, currentState: action.type, currentPostID: state.currentPostID }
    default:
      return state
  }
}
