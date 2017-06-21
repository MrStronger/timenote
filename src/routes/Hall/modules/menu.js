// ------------------------------------
// Constants
// ------------------------------------

export const SET_VISIBILITY_FILTERS = 'SET_VISIBILITY_FILTERS'

export const visibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_MOST_CONTENTION: 'SHOW_MOST_ATTENTION',
  SHOW_MOST_PRAISE: 'SHOW_MOST_PRAISE'
}

// ------------------------------------
// Actions
// ------------------------------------

export function setVisibilityFilters (filter) {
  return {
    type: SET_VISIBILITY_FILTERS,
    filter
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = visibilityFilters.SHOW_ALL

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTERS:
      return action.filter
    default:
      return state
  }
}
