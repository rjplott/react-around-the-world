import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'

export default function Header({isLoggedIn, isLoggingIn}) {
  return (
    <header className="header page__header">
      <img src={logo} alt="Around the US's logo" className="header__logo" />
      {
        isLoggedIn ?
          
          (
          <div className="header__menu">
            <p className="header__email">test@test.com</p>
            <Link to="/login" className="header__link">Log out</Link>
          </div>
        )
          :
          isLoggingIn ?
            <Link to="/signup" className="header__link">Sign up</Link>
            :
            <Link to="/login" className="header__link">Log in</Link>
      }
    </header>
  )
}
