import "./style.css"
import whatsapp from "./../../img/contacts/whatsapp.png"
import mail from "./../../img/contacts/mail.png"
import telegram from "./../../img/contacts/telegram.png"
import inst from "./../../img/contacts/Instagram.svg"

const Footer = () => {
  return (
      <div className="footer">
        <div class="container">
          <div class="about__company">
            <span>SAFETOUR  - компания по перевозкам пасажиров в Краснодарском крае.</span>
          </div>
          <div class="footer_contacts">
            <div className="contact">
              <img src={whatsapp} className="icons"/>
              <a>+7 (900) 000-00-00</a>
            </div>
            <div className="contact">
              <img className="icons" src={mail}/>
              <a>safetoure@gmail.com</a>
            </div>
            <div className="contact">
              <img className="icons" src={telegram}/>
              <a>@saferourekrd</a>
            </div>
            <div className="contact">
              <img className="icons" src={inst}/>
              <a>@zakazavto_krd</a>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Footer;