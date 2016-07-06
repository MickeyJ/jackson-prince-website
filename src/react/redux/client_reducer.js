import {
  LOG_IN,
  IS_CLIENT_AUTHED,
} from './actions'

const INITIAL_STATE = { cred: {}, token: '', error: {} };

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case LOG_IN:
      return { ...state,
        cred: action.payload.data.client,
        token: action.payload.data.token,
        error: action.error
      };
    case IS_CLIENT_AUTHED:
      return { ...state,
        cred: action.payload.data.client,
        token: action.payload.data.token,
        error: action.error
      };
    default:
      return state
  }
}