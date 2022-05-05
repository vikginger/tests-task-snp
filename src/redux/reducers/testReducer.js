import { ActionTypes } from '../constants/action-types';

const initialState = {
  tests: [
    {
      id: '1',
      date: 1651656225240,
      title: 'О погоде',
      questions: [
        {id: '1', title: 'откуда падает снег?', question_type: 'single', answer: 'из облаков', answers: ['из облаков', 'из космоса', 'из призраков']},
        {id: '2', title: 'в какие времена года люди ездят на дачу чаще всего?', question_type: 'multiple', answer: ['весна', 'лето', 'осень'], answers: ['весна', 'лето', 'осень', 'зима']},
        {id: '3', title: 'какой абсолютный минимум температуры встречался в Твери?', question_type: 'number', answer: -43.8, answers: [-62.4, -43.8, -57.6, -48.9]},
      ]
    },
    {
      id: '2',
      date: 1651656225240,
      title: 'Заголовочек теста',
      questions: [
        {id: '1', title: 'вопрос с одним ответом', question_type: 'single', answer: 'ответик1', answers:[]},
        {id: '2', title: 'вопрос с несколькими ответами', question_type: 'multiple', answer: 'ответик2', answers:[]},
        {id: '3', title: 'вопрос с числовым ответом', question_type: 'number', answer: 'ответик3', answers:[]},
      ]
    },
    {
      id: '2',
      date: 1651656225240,
      title: 'Тест на тип личности',
      questions: [
        {id: '1', title: 'вопрос с одним ответом', question_type: 'single', answer: 'ответик1', answers:[]},
        {id: '2', title: 'вопрос с несколькими ответами', question_type: 'multiple', answer: 'ответик2', answers:[]},
        {id: '3', title: 'вопрос с числовым ответом', question_type: 'number', answer: 'ответик3', answers:[]},
      ]
    }
  ]
}

export const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_TEST:
      const test = action.payload;
      const tests = [...state.tests, test];
      return {
        ...state,
        tests: tests
      };
    default:
      return state;
  }
}
