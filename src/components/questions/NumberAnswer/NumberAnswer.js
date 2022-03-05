import React, { useState } from "react";

import SaveButton from '../../saveButton/SaveButton.js';

import "./NumberAnswer.css";

function NumberAnswer(props) {

  const [inputTitle, setInputTitle] = useState('');
  const [inputQuestion, setInputQuestion] = useState('');

  const inputChangeTitle = (e) => {
    setInputTitle(e.target.value);
  };

  const inputChangeQuestion = (e) => {
    setInputQuestion(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Введи название вопроса"
        autoFocus=""
        value={inputTitle}
        onChange={inputChangeTitle}
      />
      <SaveButton />
      <input
        type="text"
        placeholder="Введи вариант ответа"
        autoFocus=""
        value={inputQuestion}
        onChange={inputChangeQuestion}
      />
      <a href="/">Добавить вариант ответа</a>
      <li>
        <div>числовой ответ</div>
      </li>
    </div>
  );
}

export default NumberAnswer;
