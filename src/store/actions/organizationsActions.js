import axios from 'axios'
import dayjs from 'dayjs'
import { 
    FETCH_ORGANIZATIONS,
    LISTEN_ORGANIZATIONS,
    RESET_ORGANIZATION,
    UPDATE_ORGANIZATION_KEY_VALUE,
    UPDATE_ORGANIZATION_GET_OBJECT,
    CREATE_ORGANIZATION,
    DELETE_ORGANIZATION,
} from './types';

import { fireStore } from '../../firebase';
import { URLs } from '../constants'


const { api, pubsub } = URLs

export const listenOrganizations =  () => dispatch => {
  fireStore
  .collection('/organizations')
  .onSnapshot((snapshot) => {
    let organizations = snapshot.docs.map( doc => { return { ...doc.data(), id: doc.id } })
    organizations.sort((a, b) => ( a.name > b.name ) ? 1 : (( b.name > a.name ) ? -1 : 0 ))
    dispatch({
      type: LISTEN_ORGANIZATIONS,
      payload: organizations
    })
  })
}

export const fetchOrganizations =  () => dispatch => {
  fireStore
    .collection('/organizations')
    .orderBy('name')
    .get()
    .then( snapshot => {
      if ( !(snapshot.empty && snapshot.metadata.fromCache) ) {
        dispatch({
          type: FETCH_ORGANIZATIONS,
          payload: snapshot.docs.map(doc => { return {...doc.data(), id: doc.id} })
        })
      }
    })
    .catch( err => console.log(err) )  
}

export const addNewOrganization =  (payload) => dispatch => {

  const data = { ...payload }
  data.created = dayjs().unix()
  delete data.updateStatus

  fireStore
    .collection("/organizations")
    .add(data)
    .then(docRef => {
      console.log("Document written with ID: ", docRef.id);
      dispatch( resetOrganization() )
    })
    .catch(error => {
      console.error("Error adding document: ", error);
    });
}

export const updateOrganization =  (payload) => dispatch => {
  var finalPayload = { ...payload }
  delete finalPayload.updateStatus

  fireStore
    .collection("/organizations")
    .doc(payload.id)
    .update(finalPayload)
    .then(docRef => {
      console.log("Document updated with ID: ", payload.id);
      dispatch( resetOrganization() )
    })
    .catch(error => {
      console.error("Error adding document: ", error);
    });
}

export const deleteOrganization =  (id) => dispatch => {
  fireStore
    .collection("/organizations")
    .doc(id)
    .delete()
    .then(docRef => {
      console.log("Document delete");
    })
    .catch(error => {
      console.error("Error adding document: ", error);
    });
}

export const resetOrganization =  () => dispatch => {
  dispatch({
    type: RESET_ORGANIZATION
  })
}

export const updateOrganizationKeyValue =  (payload) => dispatch => {
  dispatch({
    type: UPDATE_ORGANIZATION_KEY_VALUE,
    payload
  })
}

export const updateOrganizationGetObject =  (payload) => dispatch => {
  console.log(payload);
  dispatch({
    type: UPDATE_ORGANIZATION_GET_OBJECT,
    payload
  })
}



