import "./style.css"
import telegram from "./../../img/mini/telegram.png";
import whatsapp from "./../../img/mini/whatsapp.png";

const Contacts = () => {
  return (
    <section className="contacts">
      <div className="cantact_2">
        <div className="contacts__title">
          <h1 className="contacts__text">Наши контакты</h1>
        </div>
        <div className="phone_email">
          <span>+7 900 000 00 00</span>
          <span>safetoure@gmail.com</span>
        </div>
        <div className="social_networks">
          <span className="social_networks_text">Мы в социальных сетях:</span>
          <section className="icons">
            <a href="#" className="header__phone-item telegram">
              <img src={telegram} alt="telegram" />
            </a>
            <a href="#" className="header__phone-item whatsapp">
              <img src={whatsapp} alt="whatsapp" />
            </a>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Contacts;