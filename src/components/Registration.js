import React from 'react';
import { Link } from 'react-router-dom';
import InfoTooltip from './InfoTooltip';

export default function Registration() {

  const [emailValue, setEmailValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("");

  const handleEmailValueChange = (e) => setEmailValue(e.target.value);
  const handlePasswordValueChange = (e) => setPasswordValue(e.target.value);

  return (
    <section className="authentication">
      <InfoTooltip isOpen={false} registrationSuccess={true} />
      <form name="registration-form" className="authentication__form">
        <h2 className="authentication__title">Sign up</h2>
        <input required type="email" placeholder="Email" name="email" id="registration-email" className="authentication__input" value={emailValue} onChange={handleEmailValueChange} />
        <input required type="password" placeholder="Password" name="password" id="registration-password" className="authentication__input" value={passwordValue} onChange={handlePasswordValueChange} />
        <button aria-label="Submit Form" type="submit" className="authentication__submit">Sign up</button>
        <Link to="/login" className="authentication__link">Already a member yet? Login in here!</Link>
      </form>
    </section>
  )
}