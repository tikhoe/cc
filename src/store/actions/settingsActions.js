import { 
  MODAL_UPDATE
} from './types';


export const modalUpdate = (payload) => dispatch => {
  dispatch({
    type: MODAL_UPDATE,
    payload
  })
};
