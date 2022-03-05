import { ActionTypes } from '../constants/action-types';

const initialState = {
  user: {
      login: 1,
      password: 2,
      is_admin: true,
      is_Auth: true,
  }
}

export const userReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.ADD_USER:
      return state;
    default:
      return state;
  }
}
