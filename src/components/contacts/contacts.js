import "./style_contact.css"
import telegram_contact from "./../../img/mini/telegram.png";
import whatsapp_contact from "./../../img/mini/whatsapp.png";

const Contacts = () => {
  return (
    <section className="contacts">
        <div className="contacts__title">
          <h1 className="contacts__text">Наши контакты</h1>
        </div>
        <div className="phone_email">
          <a href="#" className="phone">+7 900 000 00 00</a>
          <a href="#" className="email">safetoure@gmail.com</a>
        </div>
        <div className="social_networks">
          <p className="social_networks_text">Мы в социальных сетях:</p>
          <div className="icons_contact">
            <a href="#" className="telegram">
              <img src={telegram_contact} className="telegram_button" alt="telegram" />
            </a>
            <a href="#" className="whatsapp">
              <img src={whatsapp_contact} className="whatsapp_button" alt="whatsapp" />
            </a>
          </div>
        </div>
    </section>
  );
}

export default Contacts;