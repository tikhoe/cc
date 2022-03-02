import { FETCH_ORGANIZATIONS,
         FETCH_USERS
       } from '../actions/types';
import { fireStore } from "../../firebase";

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
  export const fetchUsers =  () => dispatch => {
    fireStore.collection('/users')
    .get()
    .then(snapshot => {
      if ( !(snapshot.empty && snapshot.metadata.fromCache) ) {
        dispatch({
          type: FETCH_USERS,
          payload: snapshot.docs.map(doc => { return {...doc.data(), id: doc.id} })
        })
      }
    })
    .catch( err => console.log(err) )
  }