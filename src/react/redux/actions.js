import axios from 'axios'
import JWT from '../helpers/jwt_helper'

export const IS_AUTHED = 'IS_AUTHED';
export const IS_CLIENT_AUTHED = 'IS_CLIENT_AUTHED';
export const LOG_IN = 'LOG_IN';
export const CREATE_NEW_CLIENT = 'CREATE_NEW_CLIENT';
export const GET_CLIENT_PROFILE = 'GET_CLIENT_PROFILE';
export const REMOVE_CLIENT = 'REMOVE_CLIENT';
export const REMOVE_AUDIO = 'REMOVE_AUDIO';

const API = '/api/admin';

export function verifyAdmin(){
  const request = axios({
    url: `${API}/me`,
    method: 'GET',
    headers: {'Authorization': `Bearer ${JWT.fetch()}`}
  });
  return{
    type: IS_AUTHED,
    payload: request
  }
}

export function verifyClient(){
  const request = axios({
    url: `/api/client/me`,
    method: 'GET',
    headers: {'Authorization': `Bearer ${JWT.fetch()}`}
  });
  return{
    type: IS_CLIENT_AUTHED,
    payload: request
  }
}

export function userLogin(credentials, loginType){
  const request = axios.post(`/api/${loginType}/login`, credentials);
  return{
    type: LOG_IN,
    payload: request
  }
}

export function createNewClient(credentials){
  const request = axios.post(`${API}/register_client`, credentials);
  return{
    type: CREATE_NEW_CLIENT,
    payload: request
  }
}

export function getClientProfile(id){
  const request = axios.post(`${API}/get_client`, {id});
  return{
    type: GET_CLIENT_PROFILE,
    payload: request
  }
}

export function removeClient(id){
  const request = axios.delete(`${API}/delete_client/${id}`);
  return{
    type: REMOVE_CLIENT,
    payload: request
  }
}

export function removeAudio(id){
  const request = axios.delete(`${API}/delete_audio/${id}`);
  return{
    type: REMOVE_AUDIO,
    payload: request
  }
}