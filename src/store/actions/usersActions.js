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
import { URLs, isDev } from '../constants'
const { api, devApi, pubsub } = URLs
axios.defaults.baseURL = !isDev ? api : devApi


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
  delete data.passwordStatus

  axios
    .post('/users/', data)
    .then( () => {
      dispatch( resetUser() )
    })
    .catch( err => {
      console.log(err);
    })
}

export const updateUser =  (payload) => dispatch => {
  var data = { ...payload }
  delete data.updateStatus
  delete data.passwordStatus

  axios
    .post('/users/update', data)
    .then( () => {
      dispatch( resetUser() )
    })
    .catch( err => {
      console.log(err);
    })
}

export const deleteUser =  (user) => dispatch => {
  const { id, mysqlId } = user
  const data = { id, mysqlId }

  axios
    .delete('/users/', { data })
    .then( () => {
      dispatch( resetUser() )
    })
    .catch( err => {
      console.log(err);
    })
}

export const resetUser =  () => dispatch => {
  dispatch({
    type: RESET_USER
  })
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