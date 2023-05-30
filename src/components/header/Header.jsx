import "./style.css"
import logo from "./../../img/logo/логотип.svg";
import telegram from "./../../img/mini/telegram.png";
import whatsapp from "./../../img/mini/whatsapp.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Modal from "../../Modal/Modal";

const Header = () => {
    const [nav, setNav] = useState(false);
    const [modalActive, setModalActive] = useState(false)

    const [step, setStep] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    return (
        <div className="wrapper">
            <header className="header">
                <div className="header__top">
                    <div className="continer">
                        <a href="#" className="header__logo logo_mibile">
                            <img src={logo} alt="Logo" />
                        </a>
                        <div className={nav ? "header__top-inner active" : "header__top-inner"}>
                            <a href="#" className="header__logo logo">
                                <img src={logo} alt="Logo" />
                            </a>
                            <nav className="header__nav">
                                <ul className="header__nav-list">
                                    <li className="header__nav-item">
                                        <a className="header__nav-link" href="#servises_anchor">Наши услуги</a>
                                    </li>
                                    <li className="header__nav-item">
                                        <a className="header__nav-link" href="#about_us_anchor">О нас</a>
                                    </li>
                                    <li className="header__nav-item">
                                        <a className="header__nav-link" href="#transort_anchor">Наш транспорт</a>
                                    </li>
                                    <li className="header__nav-item">
                                        <a className="header__nav-link" href="#contacts_anchor">Контакты</a>
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
                                <a href="#" className="header__btn--box button" onClick={() => setModalActive(true)}>Оформить заявку</a>
                            </div>
                            <Modal active={modalActive} setActive={setModalActive}>
                                <form>
                                    <p>Имя</p>
                                    <p>{name}</p>
                                    <input type="text" value={name} onChange={event => setName(event.target.value)} />
                                    <p>Телефон</p>
                                    <p>{phone}</p>
                                    <input type="text" value={phone} onChange={event => setPhone(event.target.value)} />
                                    <p>Почта</p>
                                    <p>{email}</p>
                                    <input type="text" value={email} onChange={event => setEmail(event.target.value)} />
                                    <p>Сообщение</p>
                                    <p>{message}</p>
                                    <input type="text" value={message} onChange={event => setMessage(event.target.value)} />
                                    <input href="#" className="button" type="button" value="Заказать онлайн" />
                                </form>
                            </Modal>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}
export default Header;