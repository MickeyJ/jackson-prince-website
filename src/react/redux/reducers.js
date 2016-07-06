import { combineReducers } from 'redux'

import AdminReducer from './admin_reducer'
import ClientReducer from './client_reducer'

export default combineReducers({
  admin: AdminReducer,
  client: ClientReducer
});