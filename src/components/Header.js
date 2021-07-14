import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'
import React from 'react'

export default function Header({ isLoggedIn, isLoggingIn, onLogout, setIsLoggingIn, email }) {
  
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 550;
  const [isMobile, setIsMobile] = React.useState(width <= breakpoint)
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleLinkClick = () => {
    setIsLoggingIn(!isLoggingIn);
  }

  const handleIconClick = () => {
    setMenuOpen(!menuOpen);
  }

  const handleLogoutClick = () => {
    setMenuOpen(false);
    onLogout();
  }

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
      setIsMobile(window.innerWidth <= breakpoint);
    })
  }, [])

  if (isMobile) {
    return isLoggedIn ?          
      (
        <header className="header page__header">
          <div className={`header__menu header__menu_mobile ${menuOpen ? "" : "header__menu_closed"}`}>
            <p className="header__email">{email}</p>
            <Link className="header__link header__link_logout">Log out</Link>
          </div>
          <img src={logo} alt="Around the US's logo" className="header__logo" />
          <div className="header__menu-wrapper">
            <button
              aria-label="Toggle Menu"
              type="button"
              className={`header__menu-toggle header__menu-toggle_visible ${menuOpen ? "header__menu-toggle_icon_close" : "header__menu-toggle_icon_open"}`}
              onClick={handleIconClick}
            ></button>
          </div>
        </header>
        ) 
      :
      (
        <header className="header page__header">
          <img src={logo} alt="Around the US's logo" className="header__logo" />
          {isLoggingIn ?
            <Link onClick={handleLinkClick} to="/signup" className="header__link">Sign up</Link>
            :
            <Link onClick={handleLinkClick} to="/login" className="header__link">Log in</Link>}
        </header>
      )
    }

  return (
    <header className="header page__header">
      <img src={logo} alt="Around the US's logo" className="header__logo" />
      {
        isLoggedIn ?          
          (
            <div className="header__menu-wrapper">
              <div className="header__menu">
                <p className="header__email">{email}</p>
                <Link to="/login" className="header__link" onClick={handleLogoutClick}>Log out</Link>
              </div>
              <button
                aria-label="Toggle Menu"
                type="button"
                className="header__menu-toggle"
              ></button>
            </div>
        ) 
          :
          isLoggingIn ?
            <Link onClick={handleLinkClick} to="/signup" className="header__link">Sign up</Link>
            :
            <Link onClick={handleLinkClick} to="/login" className="header__link">Log in</Link>
      }
    </header>
  )
}
