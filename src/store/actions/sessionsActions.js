import axios from 'axios'
import socketIOClient from "socket.io-client";

import { 
  LISTEN_SESSIONS_START,
  LISTEN_SESSIONS_UPDATE,
  LISTEN_SESSIONS_CREATE,
  LISTEN_SESSIONS_DELETE,
  FETCH_SESSIONS,
  CREATE_SESSION,
  CREATE_SESSION_LOG
} from './types';
import { URLs } from '../constants'

const { api, pubsub } = URLs
const socket = socketIOClient(api);

export const listenSessions = () => dispatch => {
  let type = LISTEN_SESSIONS_START, payload = {}
  dispatch({ type, payload })

  socket.on("sessions-broadcast-updated", res => {
    if(res.new_val != null){
      if(res.old_val!=null){ 
        type = LISTEN_SESSIONS_UPDATE
        payload = res.new_val
      } 
      else { 
        type = LISTEN_SESSIONS_CREATE
        payload = res.new_val
      }
    } else {
      if(res.old_val!=null){ 
        type = LISTEN_SESSIONS_DELETE 
        payload = res.old_val
      }
    }

    dispatch({
      type,
      payload
    })

  })
}

export const fetchSessions = () => dispatch => {
  axios.get( api + '/sessions/')
  .then(res =>
    dispatch({
      type: FETCH_SESSIONS,
      payload: res.data
    })
  );
};

export const createSession = (sessionData) => dispatch => {
  axios.patch( api + '/sessions/', sessionData)
  .then(res => 
    dispatch({
      type: CREATE_SESSION,
      payload: {}
    })
  )
};

export const createSessionLog = (sessionData) => dispatch => {
  axios.post( api + '/session-logs/', sessionData)
  .then(res => {
    dispatch({
      type: CREATE_SESSION_LOG,
      payload: {}
    })
  }

  )
};
