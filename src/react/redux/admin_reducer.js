import {
  LOG_IN,
  IS_AUTHED,
  CREATE_NEW_CLIENT,
  GET_CLIENT_PROFILE
} from './actions'

const INITIAL_STATE = { client: {}, clients: [], cred: {}, token: '', error: {} };

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case LOG_IN:
      return { ...state,
        clients: action.payload.data.clients,
        cred: action.payload.data.admin,
        token: action.payload.data.token,
        error: action.error
      };
    case IS_AUTHED:
      return { ...state,
        ...state.token,
        clients: action.payload.data.clients,
        cred: action.payload.data.admin,
        error: action.error
      };
    case CREATE_NEW_CLIENT:
      return { ...state,
        ...state.token,
        clients: action.payload.data.clients,
        error: action.error
      };
    case GET_CLIENT_PROFILE:
      return { ...state,
        ...state.token,
        client: action.payload.data.client,
        error: action.error
      };
    default:
      return state
  }
}