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
              <a href="#">
                <img src={whatsapp} className="icons"/>
                <div className="icons_text">+7 (900) 000-00-00</div>
              </a>
            </div>
            <div className="contact">
              <a href="#">
              <img className="icons" src={mail}/>
              <div className="icons_text">safetoure@gmail.com</div>
              </a>
            </div>
            <div className="contact">
              <a href="#">
                <img className="icons" src={telegram}/>
                <div className="icons_text">@saferourekrd</div>
              </a>
            </div>
            <div className="contact">
              <a href="#">
                <img className="icons" src={inst}/>
                <div className="icons_text">@zakazavto_krd</div>
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>
  );
}

export default Footer;