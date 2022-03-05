import { ActionTypes } from '../constants/action-types';

export const createQuestion = (question) => {
  return {
    type: ActionTypes.CREATE_QUESTION,
    payload: question,
  }
};

export const editQuestion = (question) => {
  return {
    type: ActionTypes.EDIT_QUESTION,
    payload: question,
  }
};

export const removeQuestion = (question) => {
  return {
    type: ActionTypes.REMOVE_QUESTION,
    payload: question,
  }
};
