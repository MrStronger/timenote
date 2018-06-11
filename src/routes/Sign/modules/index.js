import { combineReducers } from 'redux'

import registerOption from './register'
import signOption from './sign'

export default combineReducers({
  signOption: signOption,
  registerOption: registerOption,
})
