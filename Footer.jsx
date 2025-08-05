import React, { useState } from "react";
import ArrowLink from "./Assets/ArrowLink.png";
import FavIcon from "./Assets/FavIcon.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const [number, setNumber] = useState("");

  const NumberClick = () => {
    if (!number) {
      alert("Пожалуйста, заполните информацию !");
    } else console.log(number);
  };

  return (
    <div className="Container Footer-Background-Div">
      <div className="GetConsultation">
        <div className="GetConsultation-Comment">
          <h1>Получите консультацию</h1>
        </div>
        <div className="form-control">
          <input
            id="SendNumber"
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
          <label className="form-control-label">
            <span style={{ transitionDelay: "0ms" }}>В</span>
            <span style={{ transitionDelay: "50ms" }}>а</span>
            <span style={{ transitionDelay: "100ms" }}>ш</span>
            <span style={{ transitionDelay: "150ms" }}> </span>
            <span style={{ transitionDelay: "200ms" }}>т</span>
            <span style={{ transitionDelay: "250ms" }}>е</span>
            <span style={{ transitionDelay: "300ms" }}>л</span>
            <span style={{ transitionDelay: "350ms" }}>е</span>
            <span style={{ transitionDelay: "400ms" }}>ф</span>
            <span style={{ transitionDelay: "450ms" }}>о</span>
            <span style={{ transitionDelay: "500ms" }}>н</span>
          </label>
          <label
            htmlFor="SendNumber"
            className="SendNumber"
            onClick={NumberClick}
          >
            Отправить
            <img src={ArrowLink} alt="#" />
          </label>
        </div>
      </div>
      <div className="Footer-Navigation">
        <div className="Footer-Navigation-img">
          <img style={{ background: "transparent" }} src={FavIcon} alt="#" />
        </div>
        <nav className="Footer-Navigation-Passerby">
          <div className="Footer-Navigation-Passerby-Delivery-Contact">
            <Link className="Footer-Navigation-Passerby-Delivery" to={"#"}>
              Доставка и Оплата
            </Link>
            <Link className="Footer-Navigation-Passerby-Contact" to={"#"}>
              Контакты
            </Link>
          </div>
          <div className="Footer-Navigation-Passerby-AboutUs-Articles">
            <Link className="Footer-Navigation-Passerby-AboutUs" to={"#"}>
              О нас
            </Link>
            <Link className="Footer-Navigation-Passerby-Articles" to={"#"}>
              Статьи
            </Link>
          </div>
          <div className="Footer-Navigation-Passerby-Oils-OilPresses">
            <Link className="Footer-Navigation-Passerby-Oils" to={"#"}>
              Масла
            </Link>
            <Link className="Footer-Navigation-Passerby-OilPresses" to={"#"}>
              Маслопрессы
            </Link>
          </div>
          <div className="Footer-Navigation-Passerby-Telegram-WhatsApp">
            <Link className="Footer-Navigation-Passerby-Telegram" to={"#"}>
              Телеграм
            </Link>
            <Link className="Footer-Navigation-Passerby-WhatsApp" to={"#"}>
              whatsapp
            </Link>
          </div>
          <div className="Footer-Navigation-Passerby-Agenda">
            <Link className="Footer-Navigation-Passerby-Number" to={"#"}>
              +7 495 118-38-37
            </Link>
            <Link className="Footer-Navigation-Passerby-Daily" to={"#"}>
              Ежедневно 10:00 до 18:00
            </Link>
          </div>
        </nav>
      </div>
      <div className="Footer-CopyRight">
        <span className="CopyRight">
          <h1>© 2023. Salagupmaslo</h1>
        </span>
        <span className="Privary-Policy">
          <a href="https://trawaoil.ru/privacy">
            Политика конфиденциальности
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
