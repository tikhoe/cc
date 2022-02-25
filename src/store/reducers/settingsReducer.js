import {
  MODAL_UPDATE
} from '../actions/types';

const initialState = {
    modal: {
        visible: 0,
        content: null,
        modalType: 1
    },
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
    default:
      return state;
  }
}