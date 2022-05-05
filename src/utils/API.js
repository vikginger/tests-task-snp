import { apiUrl } from './constants.js';

export const fetchRegistration = async userData => {
  const response = await fetch(`${apiUrl}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(userData),
  });
  return await response.json();
};

export const fetchSignIn = async userData => {
  const response = await fetch(`${apiUrl}/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(userData),
  });
  return await response.json();
};

export const fetchUser = async () => {
  const response = await fetch(`${apiUrl}/users/current`);
  return await response.json();
};

export const logOutUser = async () => {
  const response = await fetch(`${apiUrl}/logout`, {
    method: 'DELETE',
  });
  return await response.json();
};

export const fetchTests = async () => {
  const response = await fetch(`${apiUrl}/tests`);
  return await response.json();
};