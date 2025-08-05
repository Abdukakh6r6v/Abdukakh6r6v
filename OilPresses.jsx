import React, { useRef, useState } from "react";
import ItemFace from "./Assets/ItemFace.png";
import play1 from "./Assets/play1.png";
import SliderArrowLeft from "./Assets/ArrowLeft.png";
import SliderArrowRight from "./Assets/ArrowRight.png";
import PressMachine from "./Assets/PressMachine.png";
import MachinePrint from "./Assets/MachinePrint.png";
import ArrowLeft from "./Assets/ArrowLink.png";
import { Link } from "react-router-dom";


const OilPresses = () => {
  const beforeRef = useRef(null);
  const afterRef = useRef(null);
  const [visible, setVisible] = useState("before");
  const BeforePage = () => {
    setVisible("before");
  };

  const AfterPage = () => {
    setVisible("after");
  };

  return (
    <div className="Container">
      <div className="OilPresses-Text">
        <h1>Маслопрессы</h1>
      </div>
      <section className="Oil-Presses-Items">
        <div className="Oil-Presses-Item">
          <img src={ItemFace} alt="#" />
          <h4>Подходит для женщин</h4>
        </div>
        <div className="Oil-Presses-Item">
          <img src={ItemFace} alt="#" />
          <h4>Пожизненная гарантия</h4>
        </div>
        <div className="Oil-Presses-Item">
          <img src={ItemFace} alt="#" />
          <h4>Возможность открыть своё дело</h4>
        </div>
      </section>
      <section className="PlayedVideo">
        <img src={play1} alt="#" />
      </section>
      <section className="Press-Moduls">
        {visible === "before" && (
          <div className="Presses-Machine-One">
            <div className="Press-About-Text">
              <span className="About-Text-Head">
                <h1>Пресс 50 Тонн Модульный</h1>
                <img src={MachinePrint} alt="#" />
              </span>
              <span className="About-Text-Bottom">
                <p>
                  Разборная, модульная рама позволяет легко транспортировать
                  пресс и усовершенствовать его по желанию устройством, которое
                  исключает подъём бочки во время работы на прессе.
                </p>
              </span>
            </div>
            <div className="Press-Machine-Equipment">
              <h3>комплектация:</h3>
              <ul>
                <li>Разборная рама</li>
                <li>Деревянные накладки с логотипом</li>
                <li>Гидроцилиндр однопоточный</li>
                <li>Маслостанция однопоточная</li>
                <li>Масло для станции</li>
                <li>Бочонок 3 литра 50 тонн</li>
                <li>3 полиамидных мешка</li>
                <li>Выпрессовочное устройство</li>
                <li>Сырьё для первого отжима</li>
                <li>Ключи для сборки</li>
                <li>
                  Шарнирные опоры для прочной установки пресса даже в неровных
                  местах
                </li>
              </ul>
            </div>
            <div className="Press-Machine-BuySection">
              <img src={PressMachine} alt="#" />
              <span>
                <button>200 000 ₽</button>
                <Link className="PressMachine-BuySeticon-Link">
                  Подробнее
                  <img src={ArrowLeft} alt="#" />
                </Link>
              </span>
            </div>
          </div>
        )}
        {visible === "after" && (
          <div className="Presses-Machine-Two">
            <div className="Press-About-Text">
              <span className="About-Text-Head">
                <h1>Пресс 55 Тонн Модульный</h1>
                <img src={MachinePrint} alt="#" />
              </span>
              <span className="About-Text-Bottom">
                <p>
                  Разборная, модульная рама позволяет легко транспортировать
                  пресс и усовершенствовать его по желанию устройством, которое
                  исключает подъём бочки во время работы на прессе.
                </p>
              </span>
            </div>
            <div className="Press-Machine-Equipment">
              <h3>комплектация:</h3>
              <ul>
                <li>Разборная рама</li>
                <li>Деревянные накладки с логотипом</li>
                <li>Гидроцилиндр однопоточный</li>
                <li>Маслостанция однопоточная</li>
                <li>Масло для станции</li>
                <li>Бочонок 3 литра 50 тонн</li>
                <li>3 полиамидных мешка</li>
                <li>Выпрессовочное устройство</li>
                <li>Сырьё для первого отжима</li>
                <li>Ключи для сборки</li>
                <li>
                  Шарнирные опоры для прочной установки пресса даже в неровных
                  местах
                </li>
              </ul>
            </div>
            <div className="Press-Machine-BuySection">
              <img src={PressMachine} alt="#" className="Press-Machine-TwoImg"/>
              <span>
                <button>300 000 ₽</button>
                <Link className="PressMachine-BuySeticon-Link">
                  Подробнее
                  <img src={ArrowLeft} alt="#" />
                </Link>
              </span>
            </div>
          </div>
        )}
        <div className="Slider-Presses-Machine">
          <button className="Slider-Arrow-Left" onClick={BeforePage}>
            <img src={SliderArrowLeft} alt="#" />
          </button>
          <button className="Slider-Arrow-Right" onClick={AfterPage}>
            <img src={SliderArrowRight} alt="#" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default OilPresses;
