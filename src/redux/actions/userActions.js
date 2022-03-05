import { ActionTypes } from '../constants/action-types';

export const addUser = (user) => ({
  type: ActionTypes.ADD_USER,
  payload: user,
});

export const getUser = (user) => ({
  type: ActionTypes.GET_USER,
  payload: user,
});
