import axios from 'axios'
import socketIOClient from "socket.io-client";
import { 
  LISTEN_CUSTOMERS_START,
  LISTEN_CUSTOMERS_CREATE,
  LISTEN_CUSTOMERS_UPDATE,
  LISTEN_CUSTOMERS_DELETE,
  FETCH_CUSTOMERS
} from './types';
import { URLs } from '../constants'

const { api, pubsub } = URLs
const socket = socketIOClient(api);


export const listenCustomers = () => dispatch => {
  let type = LISTEN_CUSTOMERS_START, payload = {}
  dispatch({ type, payload })

  socket.on( "customers-broadcast-updated", res => {
    if(res.new_val != null){
      if(res.old_val!=null){ 
        type = LISTEN_CUSTOMERS_UPDATE
        payload = res.new_val
      } 
      else { 
        type = LISTEN_CUSTOMERS_CREATE
        payload = res.new_val
      }
    } else {
      if(res.old_val!=null){ 
        type = LISTEN_CUSTOMERS_DELETE 
        payload = res.old_val
      }
    }

    dispatch({
      type,
      payload
    })

  })
}

export const fetchCustomers = () => dispatch => {
  axios.get( api + '/customers/' )
  .then(res =>
    dispatch({
      type: FETCH_CUSTOMERS,
      payload: res.data
    })
  );
};