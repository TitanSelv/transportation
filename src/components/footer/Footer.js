import "./style.css"
import whatsapp from "./../../img/contacts/whatsapp.png"
import mail from "./../../img/contacts/mail.png"
import telegram from "./../../img/contacts/telegram.png"
import inst from "./../../img/contacts/Instagram.svg"

const Footer = () => {
  return (
      <div className="footer">
        <div className="footer_border">
        <div class="container">
          <div class="about__company">
            <p>SAFETOUR  - компания по перевозкам пасажиров в Краснодарском крае.</p>
          </div>
          <div class="footer_contacts">
            <div className="contact">
              <img src={whatsapp} className="icons"/>
              <a href="#">+7 (900) 000-00-00</a>
            </div>
            <div className="contact">
              <img className="icons" src={mail}/>
              <a href="#">safetoure@gmail.com</a>
            </div>
            <div className="contact">
              <img className="icons" src={telegram}/>
              <a href="#">@saferourekrd</a>
            </div>
            <div className="contact">
              <img className="icons" src={inst}/>
              <a href="#">@zakazavto_krd</a>
            </div>
          </div>
        </div>
        </div>
      </div>
  );
}

export default Footer;