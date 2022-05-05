import React from "react";
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';

import { addUser } from './redux/actions/userActions.js';

import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import {authRoutes, publicRoutes} from './routes.js'
import {HOME_ROUTE} from './utils/constants.js';
import './App.scss';

function App(props) {

  const user = props.user;

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          {user.user.is_Auth && authRoutes.map(({path, Component}) =>
            <Route key={path} path={path} component={Component} exact />
          )}
          {publicRoutes.map(({path, Component}) =>
            <Route key={path} path={path} component={Component} exact />
          )}
          <Redirect to={HOME_ROUTE} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = {
  addUser
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
