import "./style.css"
import bigbus from "./../../img/bus/1.png";
import mersbus from "./../../img/bus/2.png";
import hundaibus from "./../../img/bus/3.png";

const Transport = () => {
    return (
        <section className="transport">
            <p><a name="transort_anchor"></a></p>
            <div className="continer">
                <div className="transport__inner">
                    <div className="transport__title">
                        <h1 className="transport__text">Наш транспорт</h1>
                    </div>
                    <div className="transport__img">
                        <img className="image1" src={bigbus} alt="big" />
                        <img className="image2" src={mersbus} alt="mers" />
                        <img className="image3" src={hundaibus} alt="hundai" />
                    </div>
                    <ul className="transport__class">
                        <li>VIP транспорт</li>
                        <li>Минивены</li>
                        <li>Микроавтобусы</li>
                        <li>Автобусы</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Transport;