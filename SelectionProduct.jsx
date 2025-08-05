import React from "react";
import BenefitsImg from "./Assets/benefits-grid-img.png";
import BenefitsItem1 from "./Assets/benefitsitem1.png";
import BenefitsItem2 from "./Assets/benefitsitem2.png";
import BenefitsItem3 from "./Assets/benefitsitem3.png";
import BenefitsItem4 from "./Assets/benefitsitem4.png";
import BenefitsItem5 from "./Assets/benefitsitem5.png";
import BenefitsItem6 from "./Assets/benefitsitem6.png";


const SelectionProduct = () => {
  return (
    <div className="Container ">
      <section className="why-choose">
        <h1>Почему выбирают Salagup Maslo</h1>
      </section>
      <nav className="navigation-product">
        <a className="LinkOils" href="#">
          Масло
        </a>
        <a className="LinkEquipment" href="#">
          Оборудование
        </a>
      </nav>
      <section className="benefits-grid">
        <div className="benefits-grid-img">
          <img src={BenefitsImg} alt="Benefits img" />
        </div>
        <div className="benefits-grid-item1 items">
          <img src={BenefitsItem1} alt="#" />
          <h4>Отправка масла в день отжима</h4>
        </div>
        <div className="benefits-grid-item2 items">
          <img src={BenefitsItem2} alt="#" />
          <h4>Отжим из свежих семян и орешков</h4>
        </div>
        <div className="benefits-grid-item3 items">
          <img src={BenefitsItem3} alt="#" />
          <h4>Мы создали передовое оборудование</h4>
        </div>
        <div className="benefits-grid-item4 items">
          <img src={BenefitsItem4} alt="#" />
          <h4>Отжим без нагрева, доступа кислорода и контакта с металлом</h4>
        </div>
        <div className="benefits-grid-item5 items">
          <img src={BenefitsItem5} alt="#" />
          <h4>Собственная технология отжима</h4>
        </div>
        <div className="benefits-grid-item6 items">
          <img src={BenefitsItem6} alt="#" />
          <h4>У нас его много. Отжимаем быстро</h4>
        </div>
      </section>

      <section className="how-to-prepare">
        <h1>Salagup Maslo — это 100% ручной труд!</h1>
      </section>

      <section className="prepare-step-to-step">
        {[
          "засыпаем семена в сверхпрочный мешок",
          "укладываем мешок с семенами в бочонок",
          "отжимаем без нагрева, доступа кислорода и контакта с металлом при давлении 50-100 тонн",
          "упаковываем и в тот же день отправляем",
        ].map((text, i) => (
          <div className={`prepare-step${i + 1} prepares`} key={i}>
            <p>{i + 1}.</p>
            <h5>{text}</h5>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SelectionProduct;
