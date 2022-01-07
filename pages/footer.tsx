const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-menu">
          <h3 className="footer-menu__title">Меню</h3>
          <ul className="nav">
            <li className="nav__welcome">
             <a className="nav__link" href="#welcome">Главная</a>
            </li>
            <li className="nav__sightseens">
              <a className="nav__link" href="#sightseens">Достопримечательности</a>
            </li>
            <li className="nav__tours">
              <a className="nav__link" href="#tours">Туры</a>
              </li>
            <li className="nav__contacts">
              <a className="nav__link" href="#contacts">Контакты</a>
            </li>
          </ul>
        </div>
        <div className="footer__contacts">
          <h3 className="footer__contacts-title">Контакты</h3>
          <p className="footer__address">655019, Республика Хакасия, г. Абакан, пр. Ленина, д. 67 Справочная служба: 8 (3902) 22-53-35, факс: 8 (3902) 24-30-71</p>
          <p className="footer__email">Электронная почта: kancler@vskhakasia.ru</p>
        </div>
        <h4 className="footer__copyright">Официальный сайт Агенства Туризма Республики Хакасия  ©  2021</h4>
    </footer>
    )
}
export default Footer;
