import React from 'react';
import { Link } from 'react-router-dom';

export default function Registration({onRegister}) {
  
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onRegister(email, password);
  }

  

  return (
      <section className="authentication">
      <form name="registration-form" className="authentication__form" onSubmit={handleFormSubmit}>
        <h2 className="authentication__title">Sign up</h2>
        <input required type="email" placeholder="Email" name="email" id="registration-email" className="authentication__input" value={email} onChange={handleEmailChange} />
        <input required type="password" placeholder="Password" name="password" id="registration-password" className="authentication__input" value={password} onChange={handlePasswordChange} />
        <button aria-label="Submit Form" type="submit" className="authentication__submit">Sign up</button>
        <Link to="/login" className="authentication__link">Already a member yet? Login in here!</Link>
      </form>
      </section>
  )
}