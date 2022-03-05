import { ActionTypes } from '../constants/action-types';

const initialState = {
  tests: [
    {
      id: '1',
      title: 'test Title',
      questions: [
        {id: '1', title: 'вопрос с одним ответом', question_type: 'single', answer: 'ответик1'},
        {id: '2', title: 'вопрос с несколькими ответами', question_type: 'multiple', answer: 'ответик2'},
        {id: '3', title: 'вопрос с числовым ответом', question_type: 'number', answer: 'ответик3'},
      ]
    },
    {
      id: '2',
      title: 'заголовочек теста',
      questions: [
        {id: '1', title: 'вопрос с одним ответом', question_type: 'single', answer: 'ответик1'},
        {id: '2', title: 'вопрос с несколькими ответами', question_type: 'multiple', answer: 'ответик2'},
        {id: '3', title: 'вопрос с числовым ответом', question_type: 'number', answer: 'ответик3'},
      ]
    }
  ]
}

export const testReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.CREATE_TEST:
      return state;
    default:
      return state;
  }
}
