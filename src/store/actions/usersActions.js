import axios from 'axios'
import dayjs from 'dayjs'
import { 
  FETCH_USERS,
  RESET_USER,
  UPDATE_USER,
  CREATE_USER,
  LISTEN_USERS,
  UPDATE_USER_KEY_VALUE,
  UPDATE_USER_GET_OBJECT,
} from './types';

import { fireStore } from '../../firebase';
import { URLs } from '../constants'

const { api, pubsub } = URLs

export const fetchUsers =  () => dispatch => {
  fireStore.collection('/admin/iam/users')
    .get()
    .then( snapshot => {
      if ( !(snapshot.empty && snapshot.metadata.fromCache) ) {
        dispatch({
          type: FETCH_USERS,
          payload: snapshot.docs.map(doc => { return {...doc.data(), id: doc.id} })
        })
      }
    })
    .catch( err => console.log(err) )
}

export const addNewUser =  (payload) => dispatch => {
  const data = { ...payload }
  data.created = dayjs().unix()
  delete data.updateStatus

  fireStore
    .collection("/admin/iam/users")
    .add(data)
    .then(docRef => {
      console.log("Document written with ID: ", docRef.id);
      dispatch( resetUser() )
    })
    .catch(error => {
      console.error("Error adding document: ", error);
    });
}

export const resetUser =  () => dispatch => {
  dispatch({
    type: RESET_USER
  })
}

export const listenUsers =  () => dispatch => {
  console.log('listenUsers');
  fireStore
  .collection('/admin/iam/users')
  .onSnapshot((snapshot) => {
    let users = snapshot.docs.map( doc => { return { ...doc.data(), id: doc.id } })
    console.log(users);
    users.sort((a, b) => ( a.name > b.name ) ? 1 : (( b.name > a.name ) ? -1 : 0 ))
    dispatch({
      type: LISTEN_USERS,
      payload: users
    })
  })
}
export const updateUser =  (payload) => dispatch => {
  var finalPayload = { ...payload }
  delete finalPayload.updateStatus

  fireStore
    .collection("/admin/iam/users")
    .doc(payload.id)
    .update(finalPayload)
    .then(docRef => {
      console.log("Document updated with ID: ", payload.id);
      dispatch( resetUser() )
    })
    .catch(error => {
      console.error("Error adding document: ", error);
    });
}
export const deleteUser =  (id) => dispatch => {
  fireStore
    .collection("/admin/iam/users")
    .doc(id)
    .delete()
    .then(docRef => {
      console.log("Document delete");
    })
    .catch(error => {
      console.error("Error adding document: ", error);
    });
}
export const updateUserKeyValue =  (payload) => dispatch => {
  dispatch({
    type: UPDATE_USER_KEY_VALUE,
    payload
  })
}

export const updateUserGetObject =  (payload) => dispatch => {
  console.log(payload);
  dispatch({
    type: UPDATE_USER_GET_OBJECT,
    payload
  })
}