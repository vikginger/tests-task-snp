import Home from './containers/Home/Home.js';
import LoginForm from './containers/LoginForm/LoginForm.js';
import MainWindow from './containers/MainWindow.js';

import {HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, MAINWINDOW_ROUTE} from './utils/constants.js';

export const authRoutes = [
  {
    path: MAINWINDOW_ROUTE,
    Component: MainWindow
  },
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
