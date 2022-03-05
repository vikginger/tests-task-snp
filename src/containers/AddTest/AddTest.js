import React, { useState } from "react";
import SaveButton from '../../components/saveButton/SaveButton.js';

import "./AddTest.css";

function AddTest(props) {

  const [inputTitle, setInputTitle] = useState('');

  const inputChangeTitle = (e) => {
    setInputTitle(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Введи название теста"
        autoFocus=""
        value={inputTitle}
        onChange={inputChangeTitle}
      />
      <SaveButton />
      <a href="/">Добавить вопрос</a>
      <ul>
        <li>
          вопрос 1
          <a href="/">редактировать вопрос</a>
          <a href="/">удалить вопрос</a>
        </li>
        <li>
          вопрос 2
          <a href="/">редактировать вопрос</a>
          <a href="/">удалить вопрос</a>
        </li>
        <li>
          вопрос 3
          <a href="/">редактировать вопрос</a>
          <a href="/">удалить вопрос</a>
        </li>
      </ul>
    </div>
  );
}

export default AddTest;
