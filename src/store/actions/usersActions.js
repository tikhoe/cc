import axios from 'axios'

import { 
  FETCH_USERS,
  RESET_USER,
  UPDATE_USER
} from './types';

import { fireStore } from '../../firebase';
import { URLs, userDefault } from '../constants'

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
  fireStore
    .collection("/admin/iam/users")
    .add(payload)
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
    type: 'RESET_USER',
    payload: userDefault
  })
}

export const updateUser =  (payload) => dispatch => {
  console.log(payload);
  dispatch({
    type: 'UPDATE_USER',
    payload
  })
}

// export const fetchBranches = (organizationId) => dispatch => {
//   fireStore.collection('/system/content/branches/')
// 	.where('organizationId', '==', organizationId)
// 	.orderBy('name')
// 	.get()
// 	.then(snapshot => {
//     if ( !(snapshot.empty && snapshot.metadata.fromCache) ) {
//       dispatch({
//         type: FETCH_BRANCHES,
//         payload: snapshot.docs.map(doc => { return {...doc.data(), id: doc.id} })
//       })
//     } else {
//       console.log("error");
//     }
// 	})
// 	.catch( err => console.log(err) )
// }


