import { useState } from "react";

const Header = () => {
  if (typeof window !== 'undefined') {
    window.onscroll = function() {
      let scrolled = window.pageYOffset || document.documentElement.scrollTop; 
      if(scrolled !== 0){
        console.log(scrolled);
        setScrolled(true);
      }else{
        setScrolled(false);
      }
    }
   } 
  const [menuActive, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ClickOnMenu = () => {
    if (typeof window !== 'undefined') {
      if(window.innerWidth < 641){
        if (!menuActive) {
          setActive(true);
        }else{
          setActive(false);
        }
      }
      }
     } 
    return (
        <header className={menuActive ? "header--active" : "header" && scrolled ? "header--scrolled" : "header"} >
        <a className="header__logo-link" href="#welcome">
          <img className="header__logo" src="img/logo_1.png" alt='logo'/>
        </a>
        <ul className={ menuActive ? "nav--active" : "nav"}>
          <li className="nav__welcome">
           <a className="nav__link" href="#welcome" onClick={ClickOnMenu}>Главная</a>
          </li>
          <li className="nav__sightseens">
            <a className="nav__link" href="#sightseens" onClick={ClickOnMenu}>Достопримечательности</a>
          </li>
          <li className="nav__tours">
            <a className="nav__link" href="#tours" onClick={ClickOnMenu}>Туры</a>
            </li>
          <li className="nav__contacts">
            <a className="nav__link" href="#contacts" onClick={ClickOnMenu}>Контакты</a>
          </li>
        </ul>
        <div className="header__menu-burger"  onClick={ClickOnMenu}>
          <span className={menuActive ? "header__span-burger--open" : "header__span-burger"}></span>
        </div>
    </header>
    )
}

export default Header;
