import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from 'react-router-dom';
import {LOGIN_ROUTE, REGISTRATION_ROUTE, MAINWINDOW_ROUTE} from '../../utils/constants.js';
import { fetchRegistration } from '../../utils/API.js';
//import CancelButton from '../../components/cancelButton/CancelButton.js';

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

  const onSubmit = (data) => {
    console.log(data);
    //fetchRegistration(data);
    //history.push(MAINWINDOW_ROUTE);
    reset();
  };

  return (
    <div>
      <h1>{isLogin ? 'Авторизация' : 'Регистрация'}</h1>
      <form 
        className='loginForm'
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className='inputForm'>
          Логин
          <input
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
          <label className='inputForm'>
            Вы администратор?
            <input
              type="checkbox"
              {...register("is_admin")}
            />
          </label>
        }

        <input
          type="submit"
          value={isLogin ? 'Войти' : 'Зарегистрироваться'}
          disabled={!isValid}
        />
       
        {isLogin ?
          <div>
           Нет аккаунта?
           <Link to={REGISTRATION_ROUTE}>Зарегистрируйся!</Link>
          </div>
        :
          <div>
           Есть аккаунт?
           <Link to={LOGIN_ROUTE}>Войдите!</Link>
          </div>
        }
      </form>
    </div>
  );
}

export default LoginForm;
