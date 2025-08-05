import React, { useState, useRef } from "react";
import Footer from './Footer'
import FavIcon from "./Assets/FavIcon.png";
import MenuBurger from "./Assets/MenuBurger.png";
import Contact from "./Assets/Account.png";
import Basket from "./Assets/Basket.png";
import ProductBuyAppearance from "./Assets/OilsAvatar.png";
import bottle250 from "./Assets/bottle250.png";
import bottle100 from "./Assets/bottle100.png";
import BasketWhite from "./Assets/BasketWhite.png";
import Health from "./Assets/Health.png";
import Production from "./Assets/Production.png";
import Quality from "./Assets/Quality.png";
import ArrowLeft from "./Assets/ArrowLeft.png";
import ArrowRight from "./Assets/ArrowRight.png";
import { users, users2 } from "./Api";
import { Link } from "react-router-dom";
import "./Other.css";

const prices = {
  250: 2650,
  100: 1000,
};

const ProductCardOils = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(0);

  const getPrice = () => {
    if (!selectedSize || quantity < 1) return;
    return prices[selectedSize] * quantity;
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Пожалуйста, выберите объем масла!");
      return;
    }
    if (quantity < 1) {
      alert("Пожалуйста, выберите количество!");
      return;
    }
    const product = {
      size: selectedSize,
      quantity: quantity,
      price: getPrice(),
    };

    const prevCart = JSON.parse(localStorage.getItem("cart")) || [];

    const newCart = [...prevCart, product];
    localStorage.setItem("cart", JSON.stringify(newCart));
    console.log("Korzinkaga qo‘shildi:", product);
    console.log(
      `Korzinkaga qo‘shildi:\nHajmi: ${selectedSize} ml\nSoni: ${quantity} dona\nNarxi: ${getPrice()} ₽`
    );
    setQuantity(0);
    setSelectedSize("");
    
  };

  const Minus = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const Plus = () => {
    setQuantity((prev) => prev + 1);
  };

  const beforeRef = useRef(null);
  const afterRef = useRef(null);
  const [visible, setVisible] = useState("before");

  const [cart, setCart] = useState([]);

  const BeforePage = () => {
    setVisible("before");
  };

  const AfterPage = () => {
    setVisible("after");
  };

  const AddToCart = (item) => {
    setCart((prev) => [...prev, item]);
    console.log("Korzinkaga qo‘shildi:", item);
  };

  return (
    <div className="Container">
      <div className="Navigation-Section">
        <nav className="navbar">
          <a href="#" className="LinkMenu">
            <img src={MenuBurger} alt="menu" />
            меню
          </a>
          <a className="LinkNumber" href="tel:+7 495 118-38-37">
            +7 495 118-38-37
          </a>
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
        <nav className="Res-Nav">
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
      </div>
      <main>
        <section className="Header-Buy-Section">
          <div className="Buy-Product-Img">
            <h5>Главная • Масла • Кедровое масло</h5>
            <div className="Buy-Product-Appearance">
              <img
                src={ProductBuyAppearance}
                alt="Product"
                className={"ProductBuyAppearance"}
              />
            </div>
          </div>
          <div className="Buy-About-Us">
            <div className="About-Appearance">
              <h1>Масло Подсолнечное Сыродавленное</h1>
              <p>
                100% сыродавленное подсолнечное масло, отжатое на прессе без
                нагрева, контакта с кислородом и металлом.
              </p>
            </div>
            <div className="Buy-About">
              <div className="Buy-Price-Btn">
                <span className="Buy-Price-Span">2650 ₽</span>
                <div className="Buy-Selected-Size">
                  <input
                    type="radio"
                    name="SelectedLitr"
                    value="250"
                    id="litr250"
                    checked={selectedSize === "250"}
                    onChange={(e) => setSelectedSize(e.target.value)}
                  />
                  <img src={bottle250} alt="250 ml" />
                  <label htmlFor="litr250">
                    250 <span>мл</span>
                  </label>

                  <input
                    type="radio"
                    name="SelectedLitr"
                    value="100"
                    id="litr100"
                    checked={selectedSize === "100"}
                    onChange={(e) => setSelectedSize(e.target.value)}
                  />
                  <img src={bottle100} alt="100 ml" />
                  <label htmlFor="litr100">
                    100 <span>мл</span>
                  </label>
                </div>
                <div className="Buy-Additions-Oil">
                  <div className="Buy-Additions-btns">
                    <button type="button" onClick={Minus}>
                      -
                    </button>
                    <span className="span">{quantity}</span>
                    <button type="button" onClick={Plus}>
                      +
                    </button>
                  </div>
                  <div className="Buy-Additions-To-Shop">

                    
                    <button type="button" onClick={handleAddToCart}>
                      <img src={BasketWhite} alt="basket" />
                      КУПИТЬ
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="CompactAbout--Next">
          <div className="Next--Card--Compact">
            <img src={Health} alt="#" />
            <h4>Забота о здоровье</h4>
          </div>
          <div className="Next--Card--Compact">
            <img src={Production} alt="#" />
            <h4>Свежее сырье</h4>
          </div>
          <div className="Next--Card--Compact">
            <img src={Quality} alt="#" />
            <h4>Гарантия качества</h4>
          </div>
        </section>
        <section className="Comments-Oils">
          <div className="Comments Comments-Description">
            <h1>Описание</h1>
            <span>
              <p>
                Подсолнечное масло — самое популярное из растительных масел в
                нашей стране. Сыродавленное масло не имеет яркого запаха, зато
                обладает довольно выраженным и вместе с тем тонким вкусом
                подсолнечника. Оно содержит до 63% линолевой кислоты(Омега-6).
                Эта полиненасыщенная жирная кислота необходима для здоровья
                практически всех систем организма. Она способствует обмену
                веществ. Но синтезировать её самостоятельно организм не
                способен. Вот почему важно получать её с пищей. Живое
                подсолнечное масло также богато витамином Е – «витамином
                молодости». Один из мощнейших природных антиоксидантов, он
                защищает организм от воздействия свободных радикалов. Он играет
                значительную роль в процессах строительства мышечной ткани и
                улучшает состояние кожи. Фитостеролы, которые в процессе
                рафинации теряются, в подсолнечном масле прямого холодного
                отжима сохраняются полностью. Эти вещества обладают
                противоопухолевым действием. Доказано, что присутствующий в нём
                витамин F укрепляет нервную и сосудистую системы и помогает в
                заживлении различных повреждений тканей организма, как язв, так
                и поверхностных ран.
              </p>
            </span>
          </div>
          <div className="Comments Comments-InCooking">
            <h1>В кулинарии</h1>
            <span>
              <p>
                Оно подойдет практически ко всем блюдам русской кухни, особенно
                вкусно его сочетание с картофелем, квашеной капустой,
                винегретом.
              </p>
            </span>
          </div>
          <div className="Comments Comments-InCosmetology">
            <h1>В косметологии</h1>
            <span>
              <p>
                Подсолнечное масло активно применяется в косметологии так как
                идеально подходит для питания и увлажнения кожи. Можно обогащать
                им привычные средства для кожи. При этом следует добавлять
                несколько капель масла в разовую порцию крема. При сухой коже
                рекомендуется использовать подсолнечное сыродавленное масло в
                чистом виде. Можно использовать для питания и увлажнения
                локонов. Проводить массаж, масляные аппликации, обогащать
                готовые уходовые средства.
              </p>
            </span>
          </div>
          <div className="Comments Comments-Application-And-Dosage">
            <h1>Применение и дозировка </h1>
            <span>
              <p>
                Можно употреблять подсолнечное масло холодного отжима курсом, в
                качестве источника Омега-6, витамина Е и прочих полезных
                веществ. Взрослым рекомендуют принимать масло в течение 1
                месяца, по 1 ч.л. утром, во время еды.
              </p>
            </span>
          </div>
          <div className="Comments Comments-Contains">
            <h1>Содержит</h1>
            <span className="Comments-Contains-Span">
              <span className="Comments-Contains-Span-Fatty-Acids">
                <h1>Жирные кислоты</h1>
                <p>
                  Омега-3 (1%), Омега-6 (63%), Омега-9 (29%). Насыщенные жирные
                  кислоты (пальмитиновая, стеариновая и др) (13%).
                </p>
              </span>
              <span className="Comments-Contains-Span-Microelements">
                <h1>Микроэлементы</h1>
                <p>Лецитин, фитин, инулин, фосфор и пр.</p>
              </span>
              <span className="Comments-Contains-Span-Vitamins">
                <h1>Витамины </h1>
                <p>A,D, E, F, K.</p>
              </span>
              <span className="Comments-Contains-Span-Smoke-Point">
                <h1>Точка дымления</h1>
                <p> 107°C</p>
              </span>
            </span>
          </div>
        </section>
        <section className="We-Recommend-You-Try-It">
          <div className="rawpressed-text-section">
            <h1>Рекомендуем попробовать</h1>
            <span>
              <button onClick={BeforePage}>
                <img src={ArrowLeft} alt="#" />
              </button>
              <button onClick={AfterPage}>
                <img src={ArrowRight} alt="#" />
              </button>
            </span>
          </div>
          <section
            ref={beforeRef}
            className="raw-pressed-oils-before"
            style={{ display: visible === "before" ? "flex" : "none" }}
          >
            {users.map((value) => {
              return (
                <div className="Pressed-Oils-Before-Card" key={value.id}>
                  <img src={value.Avatar} />
                  <h4>{value.text}</h4>
                  <span>{value.price} ₽</span>
                  <button onClick={() => AddToCart(value)}>КУПИТЬ</button>
                </div>
              );
            })}
          </section>
          <section
            ref={afterRef}
            className="raw-pressed-oils-next"
            style={{ display: visible === "after" ? "flex" : "none" }}
          >
            {users2.map((value) => {
              return (
                <div className="Pressed-Oils-After-Card" key={value.id}>
                  <img src={value.Avatar} />
                  <h4>{value.text}</h4>
                  <span>{value.price} ₽</span>
                  <button onClick={() => AddToCart(value)}>КУПИТЬ</button>
                </div>
              );
            })}
          </section>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default ProductCardOils;