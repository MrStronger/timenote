// 对数组去重
import { unique } from '../../../tools/array'

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
    let newArray = unique(DATA)
    if (search === 'all') {
      // 去重操作
      
      dispatch(receiveInItData(newArray))
    } else {
      dispatch(receiveInItData(newArray))
    }
  }
    /* return fetch('https://www.easy-mock.com/mock/59476de18ac26d795f3d5afa/timeNote/stars/' + search)
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
      }) */
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
    dispatch(upDateData(DATA))
    /* return fetch('https://www.easy-mock.com/mock/59476de18ac26d795f3d5afa/timeNote/stars/' + search)
      .then(response => response.json())
      .then(response => {
        dispatch(upDateData(response.data))
      }) */
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

var DATA = [
  {
    img: 'https://eopa.bdstatic.com/daoshi/zuming.jpg',
    userName: '张同学',
    index: 0,
    id: 'cdsc',
    isFollow: true,
    edit_number: 234,
    star_number: 3432,
    like_number: 435,
    praise_number: 34,
    tags: ['技术大神, 学霸']
  },
  {
    img: 'https://eopa.bdstatic.com/daoshi%2Fvarsha.png',
    userName: '张同学',
    index: 2,
    id: 'sdcsd',
    isFollow: true,
    edit_number: 234,
    star_number: 3432,
    like_number: 435,
    praise_number: 34,
    tags: ['技术大神, 学霸']
  },
  {
    img: 'https://eopa.bdstatic.com/daoshi%2F%E5%98%89%E6%B1%9B%E5%A4%A7.jpg',
    userName: '张同学',
    index: 3,
    id: 'gbfgb',
    isFollow: true,
    edit_number: 234,
    star_number: 3432,
    like_number: 435,
    praise_number: 34,
    tags: ['技术大神, 学霸']
  },
  {
    img: 'https://eopa.bdstatic.com/daoshi/xiaolv.jpg',
    userName: '张同学',
    index: 4,
    id: 'vdsfv',
    isFollow: true,
    edit_number: 234,
    star_number: 3432,
    like_number: 435,
    praise_number: 34,
    tags: ['技术大神, 学霸']
  },
  {
    img: 'https://eopa.bdstatic.com/daoshi/zhanfang1.jpg',
    userName: '张同学',
    index: 5,
    id: 'bgfb',
    isFollow: true,
    edit_number: 234,
    star_number: 3432,
    like_number: 435,
    praise_number: 34,
    tags: ['技术大神, 学霸']
  },
  {
    img: 'https://eopa.bdstatic.com/daoshi%2F%E8%B6%85%E5%87%A1%E5%A4%A7.jpg',
    userName: '张同学',
    index: 6,
    id: 'tyjt',
    isFollow: true,
    edit_number: 234,
    star_number: 3432,
    like_number: 435,
    praise_number: 34,
    tags: ['技术大神, 学霸']
  },
  {
    img: 'https://eopa.bdstatic.com/daoshi/wangbing.jpg',
    userName: '张同学',
    index: 7,
    id: 'ewdwef',
    isFollow: true,
    edit_number: 234,
    star_number: 3432,
    like_number: 435,
    praise_number: 34,
    tags: ['技术大神, 学霸']
  },
  {
    img: 'https://eopa.bdstatic.com/daoshi/zuming.jpg',
    userName: '张同学',
    index: 8,
    id: 'rhrhrtht',
    isFollow: true,
    edit_number: 234,
    star_number: 3432,
    like_number: 435,
    praise_number: 34,
    tags: ['技术大神, 学霸']
  },
  {
    img: 'https://eopa.bdstatic.com/daoshi%2F%E5%BC%A0%E6%80%9D%E8%BF%9C%E5%B0%8F.jpeg',
    userName: '张同学',
    index: 9,
    id: 'ferfe',
    isFollow: true,
    edit_number: 234,
    star_number: 3432,
    like_number: 435,
    praise_number: 34,
    tags: ['技术大神, 学霸']
  },
  {
    img: 'https://eopa.bdstatic.com/daoshi/xh-big.jpg',
    userName: '张同学',
    index: 10,
    id: 'evsdvsd',
    isFollow: true,
    edit_number: 234,
    star_number: 3432,
    like_number: 435,
    praise_number: 34,
    tags: ['技术大神, 学霸']
  },
  {
    img: 'https://eopa.bdstatic.com/daoshi/sunwei.png',
    userName: '张同学',
    index: 11,
    id: 'sdva',
    isFollow: true,
    edit_number: 234,
    star_number: 3432,
    like_number: 435,
    praise_number: 34,
    tags: ['技术大神, 学霸']
  },
  {
    img: 'https://eopa.bdstatic.com/daoshi%2F%E5%A3%AB%E5%85%A8%E5%A4%A7.jpg',
    userName: '张同学',
    index: 12,
    id: 'fvdfb',
    isFollow: true,
    edit_number: 234,
    star_number: 3432,
    like_number: 435,
    praise_number: 34,
    tags: ['技术大神, 学霸']
  },
  {
    img: 'https://eopa.bdstatic.com/daoshi%2F%E5%91%A8%E6%95%8F%E5%A4%A7.jpeg',
    userName: '张同学',
    index: 13,
    id: 'sdcsdcsd',
    isFollow: true,
    edit_number: 234,
    star_number: 3432,
    like_number: 435,
    praise_number: 34,
    tags: ['技术大神, 学霸']
  },
  {
    img: 'https://eopa.bdstatic.com/daoshi%2F%E6%AE%BF%E6%96%8C%E5%A4%A7.jpg',
    userName: '张同学',
    index: 14,
    id: 'awdq',
    isFollow: true,
    edit_number: 234,
    star_number: 3432,
    like_number: 435,
    praise_number: 34,
    tags: ['技术大神, 学霸']
  },
  {
    img: 'https://eopa.bdstatic.com/daoshi%2F%E4%BB%98%E5%A8%9C%E5%A4%A7.jpg',
    userName: '张同学',
    index: 15,
    id: 'bgbf',
    isFollow: true,
    edit_number: 234,
    star_number: 3432,
    like_number: 435,
    praise_number: 34,
    tags: ['技术大神, 学霸']
  },
  {
    img: 'https://eopa.bdstatic.com/daoshi%2F%E5%BC%A0%E5%8D%93%E5%BD%AC%E5%A4%A7.jpg',
    userName: '张同学',
    index: 16,
    id: 'ytyt',
    isFollow: true,
    edit_number: 234,
    star_number: 3432,
    like_number: 435,
    praise_number: 34,
    tags: ['技术大神, 学霸']
  },
]