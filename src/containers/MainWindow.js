import React from "react";
import { connect } from "react-redux";
import { createTest, editTest, removeTest } from '../redux/actions/testActions';
import NumberAnswer from '../components/questions/NumberAnswer/NumberAnswer.js';
//import "./LoginForm.css";

function MainWindow(props) {

  const tests = props.tests;

  return (
    <div>
      <div className='filters'>

      </div>
      <a href="/">Выйти</a>
      <a href="/">Добавить тест</a>

      <ul>
      {tests.map((test, index) => (
        <li
          {...test}
          key={test.id + index}
          tests={props.tests}
        >
          <h4>{test.title}</h4>
          <a href="/">редактировать тест</a>
          <a href="/">пройти тест</a>
        </li>
      ))}
      </ul>

    </div>
  );
}

const mapStateToProps = state => {
  return {
    tests: state.tests.tests
  }
};

const mapDispatchToProps = {
  createTest,
  editTest,
  removeTest
};

export default connect(mapStateToProps, mapDispatchToProps)(MainWindow);