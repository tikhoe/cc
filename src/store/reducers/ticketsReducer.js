import { 
  LISTEN_TICKETS_START,
  LISTEN_TICKETS_CREATE,
  LISTEN_TICKETS_UPDATE,
  LISTEN_TICKETS_DELETE,
  FETCH_TICKETS,
  UPDATE_ACTIVE_TICKET,
  UPDATE_ACTIVE_MANAGEMENT_TICKET,
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
  SAVE_LATEST_TICKET
} from '../actions/types';

const initialState = {
  activeTicketId: null,
  activeManagementTicketId: null,
  listenTicketsStart: 0,
  tickets: [],
  listenCallTicketsStart: 0,
  callTickets: [],
  listenTransferTicketsStart: 0,
  transferTickets: [],
  ticketsCount: 0,
  latestTicket: null
}

export default function reducerCase(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}