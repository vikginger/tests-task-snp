import Home from './containers/Home/Home.js';
import LoginForm from './containers/LoginForm/LoginForm.js';
import MainWindow from './containers/MainWindow/MainWindow.js';
import AddTest from './containers/AddTest/AddTest.js';

import {HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, MAINWINDOW_ROUTE, CONTROL_TESTS} from './utils/constants.js';

export const authRoutes = [
  {
    path: MAINWINDOW_ROUTE,
    Component: MainWindow
  },
  {
    path: CONTROL_TESTS,
    Component: AddTest
  }
]

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Component: Home
  },
  {
    path: LOGIN_ROUTE,
    Component: LoginForm
  },
  {
    path: REGISTRATION_ROUTE,
    Component: LoginForm
  },
]
