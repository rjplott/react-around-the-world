import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {

  const [emailValue, setEmailValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("");

  const handleEmailValueChange = (e) => setEmailValue(e.target.value);
  const handlePasswordValueChange = (e) => setPasswordValue(e.target.value);

  return (
    <section className="authentication">
      <form name="login-form" className="authentication__form">
        <h2 className="authentication__title">Log in</h2>
        <input required type="email" placeholder="Email" name="email" id="login-email" className="authentication__input" value={emailValue} onChange={handleEmailValueChange} />
        <input required type="password" placeholder="Password" name="password" id="login-password" className="authentication__input" value={passwordValue} onChange={handlePasswordValueChange} />
        <button aria-label="Submit Form" type="submit" className="authentication__submit">Log in</button>
        <Link to="/register" className="authentication__link">Not a member yet? Sign up here!</Link>
      </form>
    </section>
  )
}