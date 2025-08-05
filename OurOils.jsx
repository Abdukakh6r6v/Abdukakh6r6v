import React, { useState, useEffect } from "react";
import Health from "./Assets/Health.png";
import Production from "./Assets/Production.png";
import Quality from "./Assets/Quality.png";
import ProductDetails__image from "./Assets/product-details__image.png";
import bottle250 from "./Assets/bottle250.png";
import bottle100 from "./Assets/bottle100.png";
import Basket from "./Assets/BasketWhite.png";
import { Link } from "react-router-dom";

const OurOils = () => {
  const data = [
    { id: 1, name: "Масло Подсолнечное", price: 2650 },
  ];

  const [selectedSize, setSelectedSize] = useState("");

  const handleChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const addToCart = (product) => {
    if (!selectedSize) {
      console.log("Пожалуйста, выберите объем масла!");
      return;
    }

    const productWithSize = {
      ...product,
      size: selectedSize,
      quantity: 1,
      cartId: Date.now() + Math.random(),
      addedAt: new Date().toISOString(),
    };

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = [...existingCart, productWithSize];
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    console.log(`"${product.name}" (${selectedSize} мл) korzinkaga qo'shildi!`);
  };

  return (
    <div className="Container ">
      <div className="our-oils">
        <h1>Наши Масла</h1>
      </div>

      <section className="CompactAbout--next">
        <div className="next--card--compact">
          <img src={Health} alt="#" />
          <h4>Забота о здоровье</h4>
        </div>
        <div className="next--card--compact">
          <img src={Production} alt="#" />
          <h4>Свежее сырье</h4>
        </div>
        <div className="next--card--compact">
          <img src={Quality} alt="#" />
          <h4>Гарантия качества</h4>
        </div>
      </section>

      <section className="product-details">
        <div className="product-details__left">
          <h1>Масло Подсолнечное Сыродавленное</h1>
          <p>
            100% сыродавленное подсолнечное масло, отжатое на прессе без
            нагрева, контакта с кислородом и металлом.
          </p>
          <span className="product-details__left__span">
            <h4>Жирные кислоты:</h4>
            <p>
              Насыщенные жиры: пиноленовая омега-6, альфа-линоленовая омега-3,
              олеиновая, Ненасыщенные: пальмитиновая, стеариновая
            </p>
          </span>
          <span className="product-details__left__span">
            <h4>Минералы:</h4>
            <p>фосфор, цинк, железо, кальций, магний</p>
          </span>
          <span className="product-details__left__span">
            <h4>Витамины:</h4>
            <p>E</p>
          </span>
        </div>

        <div className="product-details__image">
          <img
            src={ProductDetails__image}
            alt="Product"
            className={
              selectedSize === "100"
                ? "product-img small"
                : "product-img normal"
            }
          />
        </div>

        <div className="product-details__right">
          <h4>Сбрызгивать овощи, тосты, готовые крем-супы и вторые блюда</h4>
          <h4>Для выпечки с необыкновенным ореховым вкусом</h4>
          <h4>Готовить соусы</h4>
          <h4>Сбрызгивать овощи, тосты, готовые крем-супы и вторые блюда</h4>
          <h4>Для заправки салатов и гарниров</h4>

          <div className="checkbox-to-product">
            <input
              type="radio"
              name="SelectedLitr"
              value="250"
              id="litr250"
              onChange={handleChange}
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
              onChange={handleChange}
            />
            <img src={bottle100} alt="100 ml" />
            <label htmlFor="litr100">
              100 <span>мл</span>
            </label>
          </div>

          <div className="BuyTheBottle">
            <span>2650 ₽</span>
            <button onClick={() => addToCart(data[0])}>
              <img src={Basket} alt="basket" />
              <Link to={"/ProductCardOils"} className="Link-To-ButTheBottle">
                КУПИТЬ
              </Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurOils;
