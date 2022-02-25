import axios from 'axios'
import socketIOClient from "socket.io-client";

import { 
  FETCH_ORGANIZATIONS,
  FETCH_BRANCHES,
  UPDATE_ORGANIZATION,
  UPDATE_ORGANIZATION_ID,
  UPDATE_BRANCH,
  UPDATE_BRANCH_ID,
  UPDATE_ENDPOINT_IDENTITY,
  UPDATE_SETUP_STATUS,
  FETCH_ENVRONMENT_CONTROL,

  LISTEN_AGENTS_START, 
  LISTEN_AGENTS_CREATE,
  LISTEN_AGENTS_UPDATE,
  LISTEN_AGENTS_DELETE, 
  FETCH_AGENTS,
  AUTHENTICATE_AGENT, 
  UNAUTHENTICATE_AGENT, 
  AUTHENTICATION_ERROR,
  SAVE_WINDOW_FOCUS
} from './types';

import { fireStore } from '../../firebase';
import { URLs } from '../constants'

const { api, pubsub } = URLs

const socket = socketIOClient(api);

export const fetchOrganizations =  () => dispatch => {
  fireStore.collection('/organizations')
  .get()
  .then(snapshot => {
    if ( !(snapshot.empty && snapshot.metadata.fromCache) ) {
      dispatch({
        type: FETCH_ORGANIZATIONS,
        payload: snapshot.docs.map(doc => { return {...doc.data(), id: doc.id} })
      })
    }
  })
  .catch( err => console.log(err) )
}

export const fetchBranches = (organizationId) => dispatch => {
  fireStore.collection('/system/content/branches/')
	.where('organizationId', '==', organizationId)
	.orderBy('name')
	.get()
	.then(snapshot => {
    if ( !(snapshot.empty && snapshot.metadata.fromCache) ) {
      dispatch({
        type: FETCH_BRANCHES,
        payload: snapshot.docs.map(doc => { return {...doc.data(), id: doc.id} })
      })
    } else {
      console.log("error");
    }
	})
	.catch( err => console.log(err) )
}

export const updateOrganizationId = (organizationId) => dispatch => {
  if(organizationId.length){
    dispatch({
      type: UPDATE_ORGANIZATION_ID,
      payload: organizationId
    })
    dispatch({
      type: UPDATE_ORGANIZATION,
      payload: organizationId
    })
  }
}

export const updateBranchId = (branchId) => dispatch => {
  if(branchId.length){
    dispatch({
      type: UPDATE_BRANCH_ID,
      payload: branchId
    })
    dispatch({
      type: UPDATE_BRANCH,
      payload: branchId
    })
  }
}

export const updateEndpointIdentity = (organizationId, branchId) => dispatch => {
  dispatch({
    type: UPDATE_ENDPOINT_IDENTITY,
    payload: { organizationId, branchId }
  })
}

export const updateSetupStatus = (status) => dispatch => {
  dispatch({
    type: UPDATE_SETUP_STATUS,
    payload: status
  })
}


export const fetchEnvironmentControl = (branchId) => dispatch => {
  fireStore
	  .collection('/apps/qm/environmentControl/')
	  .where('branchId', '==', branchId)
	  .onSnapshot(docSnapshot => {

      if ( !(docSnapshot.empty && docSnapshot.metadata.fromCache) ) {

        let type, payload
        if(docSnapshot.docs.length){
          type = FETCH_ENVRONMENT_CONTROL
          payload = docSnapshot.docs.map( doc => { return {...doc.data(), id: doc.id} })[0]
        }
        else {
          type = FETCH_ENVRONMENT_CONTROL
          payload = {}
        }

        dispatch({ type, payload })

		  }

	  }, err => {
		  console.log(`Encountered error: ${err}`);
	  });
}

export const listenAgents = () => dispatch => {
  let type = LISTEN_AGENTS_START, payload = {}
  dispatch({ type, payload })

  socket.on( "agents-broadcast-updated", res => {
    console.log("done");
    if(res.new_val != null){
      if(res.old_val!=null){ 
        type = LISTEN_AGENTS_UPDATE
        payload = res.new_val
      } 
      else { 
        type = LISTEN_AGENTS_CREATE
        payload = res.new_val
      }
    } else {
      if(res.old_val!=null){ 
        type = LISTEN_AGENTS_DELETE 
        payload = res.old_val
      }
    }

    dispatch({
      type,
      payload
    })

  })
}

export const fetchAgents = () => dispatch => {
  axios.get( api + '/agents/' )
  .then(res =>
    dispatch({
      type: FETCH_AGENTS,
      payload: res.data
    })
  )
}

export const authenticateAgent = authenticationData => dispatch => {
  axios.post( api + '/agents/authenticate', authenticationData )
  .then(res => {
    res = res.data
    const type = res.length
    ? AUTHENTICATE_AGENT
    : AUTHENTICATION_ERROR

    dispatch({
      type,
      payload: res
    })

  }
  )
  .catch(err=>console.log(err))
};

export const unauthenticateAgent = () => dispatch => {
  dispatch({
    type: UNAUTHENTICATE_AGENT,
    payload: {}
  })
}

export const saveWindowFocus = (status) => dispatch => {
  console.log("update");
  dispatch({
    type: SAVE_WINDOW_FOCUS,
    payload: status
  })
}
