import React, { useState } from "react";
import {Link} from 'react-router-dom';
import {LOGIN_ROUTE} from '../../utils/constants.js';

import styles from "./Home.module.scss";

function Home(props) {
  return (
    <div>
      <h1 className={styles.mainTitle }>Добро пожаловать на сайт с тестами</h1>
      <Link to={LOGIN_ROUTE}>Авторизация</Link>
    </div>
  );
}

export default Home;
