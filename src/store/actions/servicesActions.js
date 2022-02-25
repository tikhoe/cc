import axios from 'axios'
import socketIOClient from "socket.io-client";
import { 
  LISTEN_SERVICES_START,
  LISTEN_SERVICES_CREATE,
  LISTEN_SERVICES_UPDATE,
  LISTEN_SERVICES_DELETE,
  FETCH_SERVICES,
  STORE_SIGNIN_COUNTERID
} from './types';
import { URLs } from '../constants'

const { api, pubsub } = URLs
const socket = socketIOClient(api);


export const listenServices = () => dispatch => {
  let type = LISTEN_SERVICES_START, payload = {}
  dispatch({ type, payload })

  socket.on( "services-broadcast-updated", res => {
    if(res.new_val != null){
      if(res.old_val!=null){ 
        type = LISTEN_SERVICES_UPDATE
        payload = res.new_val
      } 
      else { 
        type = LISTEN_SERVICES_CREATE
        payload = res.new_val
      }
    } else {
      if(res.old_val!=null){ 
        type = LISTEN_SERVICES_DELETE 
        payload = res.old_val
      }
    }

    dispatch({
      type,
      payload
    })

  })
}

export const fetchServices = () => dispatch => {
  axios.get( api + '/services/' )
  .then(res =>
    dispatch({
      type: FETCH_SERVICES,
      payload: res.data
    })
  );
};

export const storeCounterId = (payload) => dispatch => {
  dispatch({
    type: STORE_SIGNIN_COUNTERID,
    payload
  })

};
