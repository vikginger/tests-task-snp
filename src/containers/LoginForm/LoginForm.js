import React, { useRef } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from 'react-router-dom';

import { addUser } from '../../redux/actions/userActions.js';

import {LOGIN_ROUTE, REGISTRATION_ROUTE, MAINWINDOW_ROUTE} from '../../utils/constants.js';
import { fetchRegistration, fetchSignIn, fetchUser } from '../../utils/API.js';

import "./LoginForm.css";

function LoginForm(props) {
  const location = useLocation();
  const history = useHistory();
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isValid },
    reset,
    watch,
   } = useForm({ mode: "onBlur" });

  const password = useRef({});
  password.current = watch("password", "");

  const isLogin = location.pathname === LOGIN_ROUTE;

  const onSubmit = async (data) => {
    const currentUser = {
      ...data,
      is_Auth: true,
    };
    if (!isLogin) {
      const userData =  await fetchRegistration(data);
      if (userData.id) {
        reset();
        props.addUser(currentUser);
        history.push(MAINWINDOW_ROUTE);
      } else {
        alert("Username or password is invalid");
      };
    } else {
      const userData =  await fetchSignIn(data);
      if (userData.id) {
        reset();
        props.addUser(currentUser);
        history.push(MAINWINDOW_ROUTE);
      //  const currUserData = await fetchUser();
      //  props.addUser(currentUser);
       // console.log(currUserData);
     //   history.push(MAINWINDOW_ROUTE);
      } else {
        alert("Username or password is invalid");
      };
    };
  };

  return (
    <div className="p-3">
      <h1 className="my-3">{isLogin ? 'Авторизация' : 'Регистрация'}</h1>
      <form 
        className='loginForm form-search'
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className='inputForm'>
          Логин
          <input
            className="mx-3 p-1 search-query"
            type="text"
            {...register("username", { 
              required: "Поле обязательно к заполнению"
            }
            )}
            placeholder="Введите логин"
          />
        </label>
        <div className='errorForm'>{errors?.username && <p>{errors?.username?.message}</p>}</div>

        <label className='inputForm'>
          Пароль
          <input
            className="mx-3 p-1 search-query"
            type="password"
            {...register("password", { 
              required: "Поле обязательно к заполнению",
              minLength: {
                value: 6,
                message: "Пароль должен содержать минимум 6 символов"
              }
            }
            )}
            placeholder="Введите пароль"
          />
        </label>
        <div className='errorForm'>{errors?.password && <p>{errors?.password?.message}</p>}</div>

        {!isLogin &&
          <label className='inputForm'>
            Подтвердите пароль
            <input
              className="mx-3 p-1 search-query"
              type="password"
              {...register("password_confirmation", { 
                validate: value => value === password.current || "Пароли не совпадают"
              })}
              placeholder="Введите пароль еще раз"
            />
          </label>
        }
        <div className='errorForm'>{errors?.password_confirmation && <p>{errors?.password_confirmation?.message}</p>}</div>

        {!isLogin &&
          <label className='inputForm mx-2'>
            Вы администратор?
            <input
              className="mx-3"
              type="checkbox"
              {...register("is_admin")}
            />
          </label>
        }

        <input
          className="btn btn-primary"
          type="submit"
          value={isLogin ? 'Войти' : 'Зарегистрироваться'}
          disabled={!isValid}
        />
       
        {isLogin ?
          <div className="my-5">
           Нет аккаунта?
           <Link className="mx-2 btn btn-primary" to={REGISTRATION_ROUTE}>Зарегистрируйся!</Link>
          </div>
        :
          <div className="my-5">
           Есть аккаунт?
           <Link className="mx-2 btn btn-primary" to={LOGIN_ROUTE}>Войдите!</Link>
          </div>
        }
      </form>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);