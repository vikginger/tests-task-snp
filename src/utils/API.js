import axios from "axios";


const apiUrl = 'https://snp-tests.herokuapp.com/api/v1/';

export default axios.create({
  baseURL: "https://snp-tests.herokuapp.com/api/v1/",
  responseType: "json"
});

export const fetchRegistration = async userData => {
  const response = await fetch(`${apiUrl}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(userData),
  });
  return await response.json();
};




