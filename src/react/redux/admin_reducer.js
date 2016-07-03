import {
  LOG_IN,
  IS_AUTHED,
  CREATE_NEW_CLIENT,
  GET_CLIENT_PROFILE,
  REMOVE_CLIENT,
  REMOVE_AUDIO
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
        clients: action.payload.data.clients,
        cred: action.payload.data.admin,
        token: action.payload.data.token,
        error: action.error
      };
    case CREATE_NEW_CLIENT:
      console.log(action.payload.data.client);
      return { ...state,
        clients: action.payload.data.clients,
        error: action.error
      };
    case GET_CLIENT_PROFILE:
      return { ...state,
        client: action.payload.data.client,
        error: action.error
      };
    case REMOVE_CLIENT:
      return { ...state,
        clients: state.clients.filter(x =>(
          x.client_id !== action.payload.data.client_id
        )),
        client: {},
        error: action.error
      };
    case REMOVE_AUDIO:
      return {...state,
        client: {...state.client,
          audio: state.client.audio.filter(x =>(
            x.audio_id != action.payload.data.audio[0].audio_id
          ))
        }
      };
    default:
      return state
  }
}