import React, { useState } from "react";
import { connect } from "react-redux";
//import { addUser } from '../../redux/actions/userActions.js';
import { createTest, editTest, removeTest } from '../../redux/actions/testActions';

import DropDown from "../../components/DropDown";
import styles from "./AddTest.module.scss";

function AddTest(props) {

  const [inputTitle, setInputTitle] = useState('');

  const inputChangeTitle = (e) => {
    setInputTitle(e.target.value);
  };

  const tests = props.tests;

 /* <ul>
        <li>
          вопрос 1
          <button href="/">редактировать вопрос</button>
          <button href="/">удалить вопрос</button>
        </li>
        <li>
          вопрос 2
          <button href="/">редактировать вопрос</button>
          <button href="/">удалить вопрос</button>
        </li>
        <li>
          вопрос 3
          <button href="/">редактировать вопрос</button>
          <button href="/">удалить вопрос</button>
        </li>
      </ul> */

  return (
    <div className="m1-5">
      <div className="my-3">
        <input
          className="mx-3 p-1 search-query"
          type="text"
          placeholder="Введи название теста"
          autoFocus=""
          value={inputTitle}
          onChange={inputChangeTitle}
        />
        <button 
          className="mx-2 btn btn-primary"
        >
          Сохранить заголовок
        </button>
      </div>
      
      <div className={styles.typeWrapper}>
        <div>
          <DropDown/>
        </div>
        <button className="my-3 mx-2 btn btn-primary">Добавить вопрос</button>
      </div>

      <ul className={styles.questions}>
        <li className={styles.question}>
          <h4>вопрос 1</h4>
          <button className="btn mx-2 bg-info text-white">редактировать вопрос</button>
          <button className="btn mx-2 bg-info text-white">удалить вопрос</button>
        </li>
        <li className={styles.question}>
          <h4>вопрос 2</h4>
          <button className="btn mx-2 bg-info text-white">редактировать вопрос</button>
          <button className="btn mx-2 bg-info text-white">удалить вопрос</button>
        </li>
        <li className={styles.question}>
          <h4>вопрос 3</h4>
          <button className="btn mx-2 bg-info text-white">редактировать вопрос</button>
          <button className="btn mx-2 bg-info text-white">удалить вопрос</button>
        </li>
      </ul>
      <div>
        <button className="mx-2 btn btn-primary">Сохранить изменения</button>
        <button className="mx-2 btn btn-primary">Удалить тест</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    tests: state.tests.tests,
    question: state.question.question
  }
};

const mapDispatchToProps = {
  createTest,
  editTest,
  removeTest,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTest);