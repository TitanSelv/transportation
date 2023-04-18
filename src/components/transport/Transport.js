import "./style.css"
import bigbus from "./../../img/bus/1.png";
import mersbus from "./../../img/bus/2.png";
import hundaibus from "./../../img/bus/3.png";

const Transport = () => {
    return (
        <section className="transport">
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
                    <div className="transport__class">
                        <span>VIP транспорт</span>
                        <span>Минивены</span>
                        <span>Микроавтобусы</span>
                        <span>Автобусы</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Transport;