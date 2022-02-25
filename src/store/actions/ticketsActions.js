import axios from 'axios'
import socketIOClient from "socket.io-client";
import { 
  LISTEN_TICKETS_START,
  LISTEN_TICKETS_CREATE,
  LISTEN_TICKETS_UPDATE,
  LISTEN_TICKETS_DELETE,
  FETCH_TICKETS,
  UPDATE_ACTIVE_TICKET,
  CALL_TICKET,
  COMPLETE_TICKET,
  TRANSFER_TICKET,
  NO_SHOW_TICKET,
  LISTEN_CALL_TICKETS_SYNC_START,
  LISTEN_CALL_TICKETS_SYNC_CREATE,
  LISTEN_TRANSFER_TICKETS_SYNC_START,
  LISTEN_TRANSFER_TICKETS_SYNC_CREATE,
  FETCH_CALL_TICKETS,
  FETCH_TRANSFER_TICKETS,
  INCREASE_TICKET_COUNT,
  SAVE_LATEST_TICKET,
  UPDATE_ACTIVE_MANAGEMENT_TICKET,
} from './types';
import { URLs } from '../constants'

const { api, pubsub } = URLs
const socket = socketIOClient(api);


export const listenTickets = () => dispatch => {
  let type = LISTEN_TICKETS_START, payload = {}
  dispatch({ type, payload })

  socket.on( "tickets-broadcast-updated", res => {
    console.log("New ticket here", res);
    if(res.new_val != null){
      if(res.old_val!=null){ 

        dispatch({
          type: LISTEN_TICKETS_UPDATE,
          payload: res.new_val
        })

      } 
      else { 

        dispatch({
          type: LISTEN_TICKETS_CREATE,
          payload: res.new_val
        })
        dispatch({
          type: INCREASE_TICKET_COUNT,
          payload: res.new_val
        })
        dispatch({
          type: SAVE_LATEST_TICKET,
          payload: res.new_val
        })

      }
    } else {
      if(res.old_val!=null){ 

        dispatch({
          type: LISTEN_TICKETS_DELETE,
          payload: res.old_val
        })

      }
    }

  })

}

export const fetchTickets = () => dispatch => {
  console.log('THE API', api);
  axios.get( api + '/tickets/' )
  .then(res =>
    dispatch({
      type: FETCH_TICKETS,
      payload: res.data
    })
  )
  .catch(err => console.log(err) )
};

export const callTicket = payload => dispatch => {
  dispatch({
    type: UPDATE_ACTIVE_TICKET,
    payload: payload.msg.ticket
  })
  axios.post( pubsub, payload )
  .then(res =>
    dispatch({
      type: CALL_TICKET,
      payload: res.data
    })
  )
  .catch(err => console.log(err) )
};

export const completeTicket = payload => dispatch => {
  dispatch({
    type: UPDATE_ACTIVE_TICKET,
    payload: {
      ticket: {
        id: null
      }
    }
  })
  axios.post(pubsub, payload)
  .then(res => {
      dispatch({
        type: COMPLETE_TICKET,
        payload: res.data
      })
    }
  )
  .catch(err => console.log(err) )
};

export const noShowTicket = payload => dispatch => {
  dispatch({
    type: UPDATE_ACTIVE_TICKET,
    payload: {
      ticket: {
        id: null
      }
    }
  })
  axios.post(pubsub, payload)
  .then(res => {
      dispatch({
        type: NO_SHOW_TICKET,
        payload: res.data
      })
    }
  )
  .catch(err => console.log(err) )
};

export const transferTicket = payload => dispatch => {
  dispatch({
    type: UPDATE_ACTIVE_TICKET,
    payload: {
      ticket: { id: null }
    }
  })
  axios.post( pubsub, payload )
  .then(res => {
      dispatch({
        type: TRANSFER_TICKET,
        payload: res.data
      })
    }
  )
  .catch(err => console.log(err) )
};


export const listenCallTickets = () => dispatch => {
  dispatch({ type: LISTEN_CALL_TICKETS_SYNC_START, payload: {} })
  socket.on("callTickets-broadcast-updated", res => {
    dispatch({
      type: LISTEN_CALL_TICKETS_SYNC_CREATE,
      payload: res.new_val
    })
  })
}

export const fetchCallTickets = () => dispatch => {
  axios.get( api + '/call-tickets/' )
  .then(res =>
    dispatch({
      type: FETCH_CALL_TICKETS,
      payload: res.data
    })
  )
  .catch(err => console.log(err) )
};


export const listenTransferTickets = () => dispatch => {
  dispatch({ type: LISTEN_TRANSFER_TICKETS_SYNC_START, payload: {} })
  socket.on( "callTickets-broadcast-updated", res => {
    dispatch({
      type: LISTEN_TRANSFER_TICKETS_SYNC_CREATE,
      payload: res.new_val
    })
  })
}

export const fetchTransferTickets = () => dispatch => {
  axios.get( api + '/transfer-tickets/' )
  .then(res =>
    dispatch({
      type: FETCH_TRANSFER_TICKETS,
      payload: res.data
    })
  )
  .catch(err => console.log(err) )
};

export const resetLatestTicket = () => dispatch => {
  dispatch({
    type: SAVE_LATEST_TICKET,
    payload: null
  })
};

export const updateActiveManagementTicketId = (payload) => dispatch => {
  dispatch({
    type: UPDATE_ACTIVE_MANAGEMENT_TICKET,
    payload
  })
};