import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as auth from '../utils/auth';

export default function Login({onLogin}) {

  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  const history = useHistory();

  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    auth.authorize({ email, password })
      .then((data) => {
        if (data.token) {
          onLogin(email);
          history.push('/');
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <section className="authentication">
      <form name="login-form" className="authentication__form" onSubmit={handleFormSubmit}>
        <h2 className="authentication__title">Log in</h2>
        <input required type="email" placeholder="Email" name="email" id="login-email" className="authentication__input" value={email} onChange={handleEmailChange} />
        <input required type="password" placeholder="Password" name="password" id="login-password" className="authentication__input" value={password} onChange={handlePasswordChange} />
        <button aria-label="Submit Form" type="submit" className="authentication__submit">Log in</button>
        <Link to="/signup" className="authentication__link">Not a member yet? Sign up here!</Link>
      </form>
    </section>
  )
}