import { ActionTypes } from '../constants/action-types';

const initialState = {
  question: [
  
  ]
}

export const questionReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.CREATE_QUESTION:
      return state;
    default:
      return state;
  }
}
