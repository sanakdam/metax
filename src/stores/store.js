import { combineReducers } from 'redux'

import search from './reducers/search'
import tag from './reducers/tag'
import profile from './reducers/profile'

export default combineReducers({
  tag,
  profile,
  search,
})
