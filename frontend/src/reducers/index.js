import { combineReducers } from 'redux'
import quote from './getquote'
import gethome from './gethome'

const rootresucers =  combineReducers({
  quote,gethome
})

export default rootresucers