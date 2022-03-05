import React, { useState } from "react";

import SaveButton from '../../saveButton/SaveButton.js';

import "./FewOfList.css";

function FewOfList(props) {

  const [inputTitle, setInputTitle] = useState('');
  const [inputQuestion, setInputQuestion] = useState('');
  const [isChecked, setChecked] = useState(false);

  const inputChangeTitle = (e) => {
    setInputTitle(e.target.value);
  };

  const inputChangeQuestion = (e) => {
    setInputQuestion(e.target.value);
  };

  const checkboxChange = (e) => {
    setChecked(e.target.checked);
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
        <input
          type="checkbox"
          checked={isChecked}
          onChange={checkboxChange}
        />
        <div>вариант ответа 1</div>
      </li>
      <li>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={checkboxChange}
        />
        <div>вариант ответа 2</div>
      </li>
      <li>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={checkboxChange}
        />
        <div>вариант ответа 3</div>
      </li>
    </div>
  );
}

export default FewOfList;
