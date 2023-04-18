import "./style.css"

const Whyblock = () => {
    return (
        <section className="main__why">
            <div className="continer">
                <div className="why__inner">
                    <div className="why__title">
                        <h1 className="why__text">Почему нас выбирают?</h1>
                        <img src="img/mini/like 1.png" alt="" />
                    </div>
                    <ul className="why__we">
                        <li className="why__we-item file">
                            <div className="why__we-content">
                                <h5 className="why__content-title">Надежность</h5>
                                <p className="why__content-text">Компания SAFETOURE имеет официальную лицензию на перевозки
                                    по России и миру.</p>
                            </div>
                        </li>
                        <li className="why__we-item shield">
                            <div className="why__we-content">
                                <h5 className="why__content-title">Опыт</h5>
                                <p className="why__content-text">Мы перевозим пассажиров более 20 лет и точно знаем как
                                    сделать поездку комфортной.</p>
                            </div>
                        </li>
                        <li className="why__we-item service">
                            <div className="why__we-content">
                                <h5 className="why__content-title">Технический контроль</h5>
                                <p className="why__content-text">Мы регулярно производим техосмотр по самым строгим
                                    требованиям.</p>
                            </div>
                        </li>
                        <li className="why__we-item prof">
                            <div className="why__we-content">
                                <h5 className="why__content-title">Сервис</h5>
                                <p className="why__content-text">Вы наслаждаетесь поездкой на удобном транспорте с опытными
                                    водителями.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}



export default Whyblock;