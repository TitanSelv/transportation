import {Slider} from "../../slider/slider";
import "./style.css"
import one from "./../../img/Slider/1.png"
import two from "./../../img/Slider/2.png"
import three from "./../../img/Slider/3.png"
import four from "./../../img/Slider/4.png"
import five from "./../../img/Slider/5.png"

const SliderBlock = () => {
    return (
        <section className="sliderblock">
            <div className="continer">
                <div className="sliderblock__inner">
                    <div className="sliderblock__title">
                        <h5>Мы предоставляем транспорт на любое количество мест.<br /> Автобусы SAFE <span className="colorblue">TOURE</span> оснащены кондиционерами, розетками,  TV-DVD, багажными отделениями, ремнями безопасности и удобными сиденьями.</h5>
                    </div>
                    <div className="sliderblock__slider">
                        <Slider>
                            <img className="item item1" src={two} alt="" />
                            <img className="item item2" src={one} alt="" />
                            <img className="item item3" src={three} alt="" />
                            <img className="item item4" src={four} alt="" />
                            <img className="item item5" src={five} alt="" />
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SliderBlock;