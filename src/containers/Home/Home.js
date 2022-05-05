import React from "react";
import {Link} from 'react-router-dom';
import {LOGIN_ROUTE} from '../../utils/constants.js';

import styles from "./Home.module.scss";
import bg from '../../assets/test-bg.jpeg';

function Home(props) {
  return (
    <div className="p-5">
      <h1 className={styles.mainTitle}>Добро пожаловать на сайт с тестами</h1>
      <Link className={styles.mainLink} to={LOGIN_ROUTE}>Авторизация</Link>
      <img src={bg} alt="background"/>
    </div>
  );
}

export default Home;
