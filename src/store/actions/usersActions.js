import axios from 'axios'
import dayjs from 'dayjs'
import { toast } from "react-toastify";
import { 
  FETCH_USERS,
  RESET_USER,
  UPDATE_USER,
  CREATE_USER,
  LISTEN_USERS,
  UPDATE_USER_KEY_VALUE,
  UPDATE_USER_GET_OBJECT,
  UPDATE_USER_PASSWORD_GET_OBJECT
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
  const toastId = dayjs().unix()
  toast.info("Adding user", { toastId, autoClose: false });


  const data = { ...payload }
  data.created = dayjs().unix()
  delete data.updateStatus
  delete data.passwordStatus

  // agentStatus === 0 resets
  data.branchId = !data.agentStatus ? '' : data.branchId
  data.services = !data.agentStatus ? [] : data.services
  
  axios
    .post('/users/', data)
    .then( () => {
      dispatch( resetUser() )
      toast.dismiss(toastId);
      toast.success("User was succesfully added");
    })
    .catch( err => {
      console.log(err);
      toast.warn("Error adding user");
    })
}

export const updateUser =  (payload) => dispatch => {
  const toastId = dayjs().unix()
  toast.info("Updating user", { toastId, autoClose: false });

  var data = { ...payload }
  delete data.updateStatus
  delete data.passwordStatus
  delete data.password

  // agentStatus === 0 resets
  data.branchId = !data.agentStatus ? '' : data.branchId
  data.services = !data.agentStatus ? [] : data.services

  axios
    .patch('/users/', data)
    .then( () => {
      dispatch( resetUser() )
      toast.dismiss(toastId);
      toast.success("User was succesfully updated");
    })
    .catch( err => {
      console.log(err);
      toast.warn("Error updating user");
    })
}

export const updatePassword =  (payload) => dispatch => {
  const toastId = dayjs().unix()
  toast.info("Updating password", { toastId, autoClose: false });
  const { id, mysqlId, password } = payload
  var data = { id, mysqlId, password }

  axios
    .patch('/users/password', data)
    .then( () => {
      dispatch( resetUser() )
      toast.dismiss(toastId);
      toast.success("Password was succesfully updated");
    })
    .catch( err => {
      console.log(err);
      toast.warn("Error updating password");
    })
}

export const deleteUser =  (user) => dispatch => {
  const toastId = dayjs().unix()
  toast.info("Deleting user", { toastId, autoClose: false });

  const { id, mysqlId } = user
  const data = { id, mysqlId }

  axios
    .delete('/users/', { data })
    .then( () => {
      dispatch( resetUser() )
      toast.dismiss(toastId);
      toast.success("User was succesfully deleted");
    })
    .catch( err => {
      console.log(err);
      toast.warn("Error deleting user");
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

export const updateUserGetObject =  (payload, passwordStatus) => dispatch => {
  const type = passwordStatus ? UPDATE_USER_PASSWORD_GET_OBJECT : UPDATE_USER_GET_OBJECT
  console.log(payload);
  dispatch({
    type,
    payload
  })
}
