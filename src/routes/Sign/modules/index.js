import { combineReducers } from 'redux'

import registerOption from './register'
import signOption from './sign'

export default  combineReducers({
  registerOption: registerOption,
  signOption: signOption
})
