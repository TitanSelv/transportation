import "./style.css"
import children_transport from "./../../img/services/children.webp";
import vahti from "./../../img/services/vahti.webp";
import sport from "./../../img/services/sport.webp";
import corporate from "./../../img/services/corporate.webp";
import party from "./../../img/services/party.webp";
import between_city from "./../../img/services/between_city.webp";
import excursion from "./../../img/services/excursion.webp";
import wedding from "./../../img/services/wedding.webp";




const Services = () => {
  return (
    <section className="main__services">
      <p><a name="servises_anchor"></a></p>
      <div className="container">
        <div className="services__inner">
          <div className="services__title">
              <h1 className="services__text">Наши услуги</h1>
          </div>
          <ul className="services__set">
            <li className="services-item children">
              <div className="services-content">
                <img className="services__content-img" src={children_transport}></img>
                <p className="services__content-title">Перевозки детей</p>
              </div>
            </li>
            <li className="services-item vahti">
              <div className="services-content">
                <img className="services__content-img"  src={vahti}></img>
                <p className="services__content-title">Вахктовые перевозки</p>
              </div>
            </li>
            <li className="services-item sport">
              <div className="services-content">
                <img className="services__content-img" src={sport}></img>
                <p className="services__content-title">Трансфер спортсменов</p>
              </div>
            </li>
            <li className="services-item corporate">
              <div className="services-content">
                <img className="services__content-img" src={corporate}></img>
                <p className="services__content-title">Корпоративные поездки</p>
              </div>
            </li>

            <li className="services-item party">
              <div className="services-content">
                <img className="services__content-img" src={party}></img>
                <p className="services__content-title">Трансфер на праздники</p>
              </div>
            </li>
            <li className="services-item vahti">
              <div className="services-content">
                <img className="services__content-img"  src={between_city}></img>
                <p className="services__content-title">Междугородний трансфер</p>
              </div>
            </li>
            <li className="services-item sport">
              <div className="services-content">
                <img className="services__content-img" src={excursion}></img>
                <p className="services__content-title">Перевозки экскурсий</p>
              </div>
            </li>
            <li className="services-item corporate">
              <div className="services-content">
                <img className="services__content-img" src={wedding}></img>
                <p className="services__content-title">Транспорт на свадьбу</p>
              </div>
            </li>
          </ul>
          <div className="button_section">
            <input href="#" className="button" type="button" value="Заказать онлайн"/>
          </div>
        </div>
      </div>
    </section>
  );
}



export default Services;