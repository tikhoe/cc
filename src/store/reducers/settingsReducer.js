import {
  MODAL_UPDATE,
  UPDATE_CURRENT_APP
} from '../actions/types';

const initialState = {
    modal: {
        visible: 0,
        content: null,
        modalType: 1
    },
    currentApp:"admin"
    
};

export default function reducerCase(state = initialState, action) {
  switch (action.type) {

    case MODAL_UPDATE:
      return {
        ...state,
        modal: {
            visible: action.payload.visible,
            content: action.payload.content
        }
      };
    case UPDATE_CURRENT_APP:
      return {
        ...state,
        currentApp: action.payload.currentApp
      }
    default:
      return state;
  }
}