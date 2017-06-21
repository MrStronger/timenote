// 对数组去重
import { unique } from '../../../util/array'

export const SET_VISIBILITY_FILTERS = 'SET_VISIBILITY_FILTERS'
export const RECEIVE_INIT_DATA = 'UPDATE'
export const START_UPDATE = 'START_UPDATE'
export const UPDATE_DATA = 'UPDATE_DATA'

export const ADD_ATTENTION = 'ADD_ATTENTION'
export const CANCEL_ATTENTION = 'CANCEL_ATTENTION'

export function setVisibilityFilters (filter) {
  return {
    type: SET_VISIBILITY_FILTERS,
    filter: filter
  }
}

function addAttention (index) {
  return {
    type: ADD_ATTENTION,
    index: index
  }
}

function cancelAttention (index) {
  return {
    type: CANCEL_ATTENTION,
    index: index
  }
}

function receiveInItData (data) {
  return {
    type: RECEIVE_INIT_DATA,
    data: data
  }
}

function startUpdate () {
  return {
    type: START_UPDATE
  }
}

function upDateData (data) {
  return {
    type: UPDATE_DATA,
    data: data
  }
}

export function fetchInItData (field) {
  let { search, filter } = field
  return (dispatch) => {
    dispatch(setVisibilityFilters(filter))
    return fetch('https://www.easy-mock.com/mock/59476de18ac26d795f3d5afa/timeNote/stars/' + search)
      .then(response => response.json())
      .then(response => {
        if (search === 'all') {
          // 去重操作
          let newArray = unique(response.data)
          console.log(response.data)
          dispatch(receiveInItData(newArray))
        } else {
          dispatch(receiveInItData(response.data))
        }
      })
  }
}

export function fetchAddAttention (action) {
  let { index, id } = action
  return (dispatch) => {
    dispatch(addAttention(index))
    // 向后端发送请求return fetch('')
  }
}

export function fetchCancelAttention (action) {
  let { index, id } = action
  return (dispatch) => {
    dispatch(cancelAttention(index))
  }
}

export function fetchUpdate (search) {
  return (dispatch) => {
    dispatch(startUpdate())
    return fetch('https://www.easy-mock.com/mock/59476de18ac26d795f3d5afa/timeNote/stars/' + search)
      .then(response => response.json())
      .then(response => {
        dispatch(upDateData(response.data))
      })
  }
}

const initialState = {
  MenuOption: '',
  fetching: false,
  data: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTERS:
      return { ...state, MenuOption: action.filter, fetching: true, data: [] }
    case RECEIVE_INIT_DATA:
      return { ...state, data: action.data, fetching: false }
    case ADD_ATTENTION:
      return {
        ...state,
        data: [
          ...state.data.slice(0, action.index),
          Object.assign({}, state.data[action.index], {
            isFollow: true
          }),
          ...state.data.slice(action.index + 1)
        ]
      }
    case CANCEL_ATTENTION:
      return {
        ...state,
        data: [
          ...state.data.slice(0, action.index),
          Object.assign({}, state.data[action.index], {
            isFollow: false
          }),
          ...state.data.slice(action.index + 1)
        ]
      }
    case START_UPDATE:
      return {
        ...state,
        fetching: true
      }
    case UPDATE_DATA:
      return {
        ...state,
        data: [
          ...state.data,
          ...action.data
        ],
        fetching: false
      }
    default:
      return state
  }
}
