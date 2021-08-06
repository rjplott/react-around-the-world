const BASE_URL = 'https://api.around-jl.students.nomoreparties.site';

const checkResponse = (res) => {
  return res.ok
    ? res.json()
      : Promise.reject(`Error: ${res.status} - ${res.statusText}`);
  }

export const register = ({email, password}) => {
  return fetch(`${BASE_URL}/signup`, {
    'method': 'POST',
    'headers': {
      'Accept': 'applicaton/json',
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => checkResponse(res))
    .then((data) => {
      return data;
    })
}

export const authorize = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    'method': 'POST',
    'headers': {
      'Accept': 'applicaton/json',
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password })
  })
    .then((res) => checkResponse(res))
    .then((data) => {
      if (data.token) {
        localStorage.setItem('jwt', data.token);
        return data;
      } else {
        return;
      }
    });
}

export const validateToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      "Content-Type": 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
    .then((res) => checkResponse(res))
    .then((res) => res.data);
}