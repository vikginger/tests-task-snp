import { ActionTypes } from '../constants/action-types';

const initialState = {
  user: {
      login: 1,
      password: 2,
      is_admin: true,
      is_Auth: true,
  }
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_USER:
      const currentUser = action.payload;
      return {
        ...state,
        user: currentUser
      };
    default:
      return state;
  }
}