import { ActionTypes } from '../constants/action-types';

export const createTest = (tests) => {
  return {
    type: ActionTypes.CREATE_TEST,
    payload: tests,
  }
};

export const editTest = (test) => {
  return {
    type: ActionTypes.EDIT_TEST,
    payload: test,
  }
};

export const removeTest = (test) => {
  return {
    type: ActionTypes.REMOVE_TEST,
    payload: test,
  }
};
