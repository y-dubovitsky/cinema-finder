import style from './Header.module.css';

function Header() {
  return (
    <nav className={style.nav + " indigo"}>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">CinemaFinder</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="#">Sass</a></li>
          <li><a href="#">Components</a></li>
          <li><a href="#">JavaScript</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header;