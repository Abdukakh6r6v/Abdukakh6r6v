import React, { useState } from "react";
import { Link } from "react-router-dom";

import FavIcon from "./Assets/FavIcon.png";
import MenuBurger from "./Assets/MenuBurger.png";
import Contact from "./Assets/Account.png";
import Basket from "./Assets/Basket.png";
import HeadAbout from "./Assets/HeadAbout.png";
import Health from "./Assets/Health.png";
import Production from "./Assets/Production.png";
import Quality from "./Assets/Quality.png";
const App = () => {
  return (
    <div>
      <div className="Container ">
        <nav className="Navbar">
          <div className="ToolbarOne">
            <a href="#" className="LinkMenu">
              <img src={MenuBurger} alt="menu" />
              меню
            </a>
            <a className="LinkNumber" href="tel:+7 495 118-38-37">
              +7 495 118-38-37
            </a>
          </div>
          <Link to="/App">
            <img className="FavIcon" src={FavIcon} alt="icon" />
          </Link>
          <div className="Toolbar">
            <Link className="LinkContact" to="/Contact">
              <img src={Contact} alt="#" />
            </Link>
            <Link className="LinkBasket" to="/Shopping">
              <button>
                <img src={Basket} alt="#" />
              </button>
            </Link>
          </div>
        </nav>
        <nav className="res-nav">
          <Link to="/App">
            <img className="FavIcon" src={FavIcon} alt="icon" />
          </Link>
          <a href="#" className="LinkMenu">
            <img src={MenuBurger} alt="menu" />
            меню
          </a>
          <a className="LinkNumber" href="tel:+7 495 118-38-37">
            +7 495 118-38-37
          </a>
          <div className="Toolbar">
            <Link className="LinkContact" to="/Contact">
              <img src={Contact} alt="#" />
            </Link>
            <Link className="LinkBasket" to="/Shopping">
              <button>
                <img src={Basket} alt="#" />
              </button>
            </Link>
          </div>
        </nav>
        <main className="MainAbout">
          <div className="HeadText">
            <h1>Salagup Maslo — больше, чем масло</h1>
          </div>
          <div className="NextText">
            <span>
              Это философия здоровой, красивой жизни с заботой и любовью к себе
              и близким. Это живой эликсир, которому радуется каждая клеточка
              организма.
            </span>
            <img
              className="Head-about-img"
              src={HeadAbout}
              alt="Head about img"
            />
          </div>
          <div className="Appearance-Two">
            <div className="HeadText">
              <h1>Salagup Maslo — больше, чем масло</h1>
              <span>
                Это философия здоровой, красивой жизни с заботой и любовью к
                себе и близким. Это живой эликсир, которому радуется каждая
                клеточка организма.
              </span>
            </div>
            <div className="NextText">
              <img
                className="Head-about-img"
                src={HeadAbout}
                alt="Head about img"
              />
            </div>
          </div>
        </main>

        <section className="CompactAbout">
          {[Health, Production, Quality].map((img, index) => (
            <div className="card--compact" key={index}>
              <img src={img} alt="Compact img" />
              <h4>
                {index === 0
                  ? "Забота о здоровье"
                  : index === 1
                  ? "Свое производсво"
                  : "Гарантия качества"}
              </h4>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default App;
