import axios from 'axios'

import { 
  LISTEN_SERVICES,
} from './types';
import { URLs } from '../constants'
import { fireStore } from '../../firebase';

const { api, pubsub } = URLs


export const listenServices =  () => dispatch => {
  console.log("listenServices");
  fireStore
  .collection('/apps/qm/services')
  .onSnapshot((snapshot) => {
    let data = snapshot.docs.map( doc => { return { ...doc.data(), id: doc.id } })
    data.sort((a, b) => ( a.name > b.name ) ? 1 : (( b.name > a.name ) ? -1 : 0 ))
    dispatch({
      type: LISTEN_SERVICES,
      payload: data
    })
  })
}
