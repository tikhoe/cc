import axios from 'axios'
import socketIOClient from "socket.io-client";
import { 
  LISTEN_COUNTERS_START,
  LISTEN_COUNTERS_CREATE,
  LISTEN_COUNTERS_UPDATE,
  LISTEN_COUNTERS_DELETE,
  FETCH_COUNTERS,
  STORE_SIGNIN_COUNTERID
} from './types';
import { URLs } from '../constants'

const { api, pubsub } = URLs
const socket = socketIOClient(api);

export const listenCounters = () => dispatch => {
  let type = LISTEN_COUNTERS_START, payload = {}
  dispatch({ type, payload })

  socket.on("counters-broadcast-updated", res => {
    if(res.new_val != null){
      if(res.old_val!=null){ 
        type = LISTEN_COUNTERS_UPDATE
        payload = res.new_val
      } 
      else { 
        type = LISTEN_COUNTERS_CREATE
        payload = res.new_val
      }
    } else {
      if(res.old_val!=null){ 
        type = LISTEN_COUNTERS_DELETE 
        payload = res.old_val
      }
    }

    dispatch({
      type,
      payload
    })

  })
}

export const fetchCounters = () => dispatch => {
  axios.get(api + '/counters/')
  .then(res =>
    dispatch({
      type: FETCH_COUNTERS,
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
