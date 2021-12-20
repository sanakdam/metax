import { combineReducers } from 'redux'

import listFollower from './listFollower'
import listFollowing from './listFollowing'

export default combineReducers({
  listFollower,
  listFollowing,
})
