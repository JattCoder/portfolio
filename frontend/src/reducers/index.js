import { combineReducers } from 'redux'
import quote from './getquote'
import uplike from './updateLike'

export default combineReducers({
  quote,uplike
})