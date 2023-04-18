import "./style.css"
import logo from "./../../img/logo/логотип.svg";
import telegram from "./../../img/mini/telegram.png";
import whatsapp from "./../../img/mini/whatsapp.png";

const Header = () => {
    return (
        <div className="wrapper">
            <header className="header">
                <div className="header__top">
                    <div className="continer">
                        <div className="header__top-inner">
                            <a href="#" className="header__logo logo">
                                <img src={logo} alt="Logo" />
                            </a>
                            <nav className="header__nav">
                                <ul className="header__nav-list">
                                    <li className="header__nav-item">
                                        <a className="header__nav-link" href="#">Главная</a>
                                    </li>
                                    <li className="header__nav-item">
                                        <a className="header__nav-link" href="#">О нас</a>
                                    </li>
                                    <li className="header__nav-item">
                                        <a className="header__nav-link" href="#">Наш транспорт</a>
                                    </li>
                                    <li className="header__nav-item">
                                        <a className="header__nav-link" href="#">Контакты</a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="header__phone-nav">
                                <span>
                                    <a href="tel:+79000000000">+7 900 000 99 99</a>
                                </span>
                            </div>
                            <div className="header__phone-link">
                                <a href="#" className="header__phone-item telegram">
                                    <img src={telegram} alt="telegram" />
                                </a>
                                <a href="#" className="header__phone-item whatsapp">
                                    <img src={whatsapp} alt="whatsapp" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header__body">
                    <div className="continer">
                        <div className="header__body-inner">
                            <div className="header__title">
                                <h1>
                                    ПОЕЗДКИ ПО РОССИИ И МИРУ ИЗ КРАСНОДАРСКОГО КРАЯ
                                </h1>
                            </div>
                            <div className="button__box">
                                <a href="#" className="header__btn--box button">Оформить заявку</a>
                                <a href="#" className="header__btn--box button empty">Узнать детали</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}
export default Header;