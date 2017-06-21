import { combineReducers } from 'redux'

import CardReducer from './cardCase'

export default combineReducers({
  CardData: CardReducer
})
