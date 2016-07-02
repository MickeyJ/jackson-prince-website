import { combineReducers } from 'redux'

import AdminReducer from './admin_reducer'

export default combineReducers({
  admin: AdminReducer
});