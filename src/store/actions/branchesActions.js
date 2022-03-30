import axios from 'axios'
import { 
    FETCH_BRANCHES,
    LISTEN_BRANCHES,
    RESET_BRANCH,
    UPDATE_BRANCH,
    CREATE_BRANCH,
    DELETE_BRANCH,
} from './types';

import { fireStore } from '../../firebase';
import { URLs } from '../constants'

const { api, pubsub } = URLs

export const fetchBranches =  () => dispatch => {
  fireStore
    .collection("/system/content/branches/")
    .orderBy('name')
    .get()
    .then( snapshot => {
      if ( !(snapshot.empty && snapshot.metadata.fromCache) ) {
        dispatch({
          type: FETCH_BRANCHES,
          payload: snapshot.docs.map(doc => { return {...doc.data(), id: doc.id} })
        })
      }
    })
    .catch( err => console.log(err) )
}

export const addNewBranch =  (payload) => dispatch => {
  fireStore
    .collection("/system/content/branches/")
    .add(payload)
    .then(docRef => {
      console.log("Document written with ID: ", docRef.id);
      dispatch( resetBranch() )
    })
    .catch(error => {
      console.error("Error adding document: ", error);
    });
}

export const resetBranch =  () => dispatch => {
  dispatch({
    type: RESET_BRANCH
  })
}

export const updateBranch =  (payload) => dispatch => {
  console.log(payload);
  dispatch({
    type: UPDATE_BRANCH,
    payload
  })
}


