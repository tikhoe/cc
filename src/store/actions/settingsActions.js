import { 
  MODAL_UPDATE,
  UPDATE_CURRENT_APP
} from './types';


export const modalUpdate = (payload) => dispatch => {
  dispatch({
    type: MODAL_UPDATE,
    payload
  })
};

export const updateDateCurrentApp = (payload) => dispatch => {
  dispatch({
    type: UPDATE_CURRENT_APP,
    payload
  })
};
