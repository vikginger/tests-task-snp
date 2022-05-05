import React, { useEffect }from "react";
import { connect } from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import { addUser } from '../../redux/actions/userActions.js';
import { createTest, editTest, removeTest } from '../../redux/actions/testActions';

import { logOutUser, fetchTests } from '../../utils/API.js';
import {HOME_ROUTE} from '../../utils/constants.js';

import "./MainWindow.css";

function MainWindow(props) {

  const history = useHistory();
  const tests = props.tests;
  const user = props.user;

  useEffect(() => {
    const testss = fetchTests();
    console.log(testss);
  });

  const logOut = () => {
    const currentUser = {
      is_Auth: false,
    };
    props.addUser(currentUser);
    logOutUser();
    history.push(HOME_ROUTE);
  }

  return (
    <div className="my-5">
      <div className='filters'>

      </div>

      <button 
        className="mx-2 btn btn-primary"
        onClick={logOut}
      >
        Выйти
      </button>

      {user.is_admin &&
        <button 
          className="btn btn-primary"
        >
          Добавить тест
        </button>
      }

      <ul className="p-5">
      {tests.map((test, index) => (
        <li
          {...test}
          key={test.id + index}
          tests={props.tests}
          className="my-5 testItem"
        >
          <h4>{test.title}</h4>

          {user.is_admin &&
            <a 
              className="btn mx-2 bg-info text-white"
              href="/"
            >
              Редактировать тест
            </a>
          }

          <a 
            className="btn mx-2 bg-info text-white"
            href="/"
          >
            Пройти тест
          </a>

        </li>
      ))}
      </ul>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    tests: state.tests.tests
  }
};

const mapDispatchToProps = {
  createTest,
  editTest,
  removeTest,
  addUser
};

export default connect(mapStateToProps, mapDispatchToProps)(MainWindow);