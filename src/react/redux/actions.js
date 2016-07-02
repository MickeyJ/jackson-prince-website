import axios from 'axios'
import JWT from '../helpers/jwt_helper'

export const IS_AUTHED = 'IS_AUTHED';
export const LOG_IN = 'LOG_IN';
export const CREATE_NEW_CLIENT = 'CREATE_NEW_CLIENT';
export const GET_CLIENT_PROFILE = 'GET_CLIENT_PROFILE';

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

export function adminLogin(credentials){
  const request = axios.post(`${API}/login`, credentials);
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
  const request = axios.post(`${API}/client`, {id});
  return{
    type: GET_CLIENT_PROFILE,
    payload: request
  }
}