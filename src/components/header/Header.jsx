import "./style.css"
import logo from "./../../img/logo/логотип.svg";
import telegram from "./../../img/mini/telegram.png";
import whatsapp from "./../../img/mini/whatsapp.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {useState} from "react";

const Header = () => {
    const [nav, setNav] = useState(false);
    return (
        <div className="wrapper">
            <header className="header">
                <div className="header__top">
                    <div className="continer">
                        <a href="#" className="header__logo logo_mibile">
                            <img src={logo} alt="Logo" />
                        </a>
                        <div className={ nav ? "header__top-inner active" : "header__top-inner"}>
                            <a href="#" className="header__logo logo">
                                <img src={logo} alt="Logo" />
                            </a>
                            <nav className="header__nav">
                                <ul className="header__nav-list">
                                    <li className="header__nav-item">
                                        <a className="header__nav-link" href="#">Наши услуги</a>
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
                                    <a href="tel:+79000000000">+7 900 000 00 00</a>
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
                        <div onClick={() => setNav(!nav)} className="mobile_btn">
                            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
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
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}
export default Header;