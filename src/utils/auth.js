const BASE_URL = 'https://register.nomoreparties.co';

export const register = ({email, password}) => {
  return fetch(`${BASE_URL}/signup`, {
    'method': 'POST',
    'headers': {
      'Accept': 'applicaton/json',
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      try {
        if (response.status === 201) {
          return response.json();
        }
      } catch (e) {
        return (e);
      }
    })
    .then((data) => {
      return data;
    })
  .catch((err) => console.log(err));
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
    .then((response) => response.json())
    .then((data) => {
      if (data.token) {
        localStorage.setItem('jwt', data.token);
        return data;
      } else {
        return;
      }
    })
    .catch((err) => console.log(err));
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
    .then((res) => res.json())
    .then((res) => res.data)
    .catch((err) => console.log(err));
}