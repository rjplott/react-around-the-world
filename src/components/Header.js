import logo from '../images/logo.svg'

export default function Header() {
  return (
    <header className="header page__header">
      <img src={logo} alt="Around the US's logo" className="header__logo" />
    </header>
  )
}
