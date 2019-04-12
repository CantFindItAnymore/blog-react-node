import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../common/header/store'
import { reducer as essaysReducer } from '../common/essays/store'

export default combineReducers({
  headerReducer,
  essaysReducer
})
