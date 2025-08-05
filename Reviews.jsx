import { useState, useEffect } from "react";
import SliderArrowLeft from "./Assets/ArrowLeft.png";
import SliderArrowRight from "./Assets/ArrowRight.png";
import { user5 } from "./Api";

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cart, setCart] = useState([]);

  const AddToCart = (product) => {
    const cartItem = {
      ...product,
      quantity: 1,
      size: null,
      cartId: Date.now() + Math.random(),
      addedAt: new Date().toISOString(),
    };

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

    const updatedCart = [...existingCart, cartItem];

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    console.log(`"${product.text}" korzinkaga qo'shildi!`);
    console.log("Korzinkaga qo'shildi:", cartItem);

    window.dispatchEvent(new Event("cartUpdated"));
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const Next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const Prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  return (
    <div className="Container">
      <div className="Reviews-Head-Text">
        <h1>Отзывы</h1>
      </div>

      <div className="Reviews-Slider-Section">
        <div
          className="Reviews-Slider-One-Page"
          style={{ display: currentIndex === 0 ? "flex" : "none" }}
        >
          <div className="Rewievs-Oil-About-Data">
            <h1>Евгения C.</h1>
            <span>08.12.2023</span>
          </div>
          <div className="Rewievs-Oil-About-NewSpaper">
            <p>
«Сыродавленное кедровое масло - моя находка! Удивительно насыщенный 
вкус и невероятно полезное. Я использую его в кулинарии, добавляя в 
салаты и блюда, и результат всегда превосходит ожидания. Оно не только 
придает блюдам уникальный аромат, но и способствует моему общему 
здоровью. Я чувствую прилив сил и энергии. Спасибо, что такой продукт 
доступен!»
            </p>
          </div>
          <div className="Appearance-Two-Rewievs">
            <div className="Rewievs-Oil-About-Data-Two">
              <h1>Олег В.</h1>
              <span>05.12.2023</span>
            </div>
            <div className="Rewievs-Oil-About-NewSpaper-Two">
              <p>
«Сыродавленное кедровое масло - моя находка! Удивительно насыщенный 
вкус и невероятно полезное. Я использую его в кулинарии, добавляя в 
салаты и блюда, и результат всегда превосходит ожидания. Оно не только 
придает блюдам уникальный аромат, но и способствует моему общему 
здоровью. Я чувствую прилив сил и энергии. Спасибо, что такой продукт 
доступен!»
              </p>
            </div>
          </div>
          <div className="Rewievs-Oil-Buy">
            {user5.map((value) => (
              <div className="Pressed-Oils-Before-Card" key={value.id}>
                <img
                  src={value.Avatar || "/placeholder.svg"}
                  alt={value.text}
                />
                <h4>{value.text}</h4>
                <span>{value.price} ₽</span>
                <button onClick={() => AddToCart(value)}>КУПИТЬ</button>
              </div>
            ))}
          </div>
        </div>
        <div
          className="Reviews-Slider-Two-Page"
          style={{ display: currentIndex === 1 ? "flex" : "none" }}
        >
          <div className="Rewievs-Oil-About-Data">
            <h1>Мария К.</h1>
            <span>28.11.2023</span>
          </div>
          <div className="Rewievs-Oil-About-NewSpaper">
            <p>
              «Покупаю это масло уже полгода! Качество стабильно высокое,
              доставка быстрая. Рекомендую всем друзьям...»
            </p>
          </div>
          <div className="Appearance-Two-Rewievs">
            <div className="Rewievs-Oil-About-Data-Two">
              <h1>Александр Н.</h1>
              <span>25.11.2023</span>
            </div>
            <div className="Rewievs-Oil-About-NewSpaper-Two">
              <p>
                «Отличный продукт для здорового питания! Масло холодного отжима
                действительно полезное и вкусное...»
              </p>
            </div>
          </div>
          <div className="Rewievs-Oil-Buy">
            {user5.map((value) => (
              <div className="Pressed-Oils-Before-Card" key={value.id}>
                <img
                  src={value.Avatar || "/placeholder.svg"}
                  alt={value.text}
                />
                <h4>{value.text}</h4>
                <span>{value.price} ₽</span>
                <button onClick={() => AddToCart(value)}>КУПИТЬ</button>
        </div>
            ))}
          </div>
        </div>

        <div
          className="Reviews-Slider-Three-Page"
          style={{ display: currentIndex === 2 ? "flex" : "none" }}
        >
          <div className="Rewievs-Oil-About-Data">
            <h1>Ирина Л.</h1>
            <span>20.11.2023</span>
          </div>
          <div className="Rewievs-Oil-About-NewSpaper">
            <p>
«Сыродавленное кедровое масло - моя находка! Удивительно насыщенный 
вкус и невероятно полезное. Я использую его в кулинарии, добавляя в 
салаты и блюда, и результат всегда превосходит ожидания. Оно не только 
придает блюдам уникальный аромат, но и способствует моему общему 
здоровью. Я чувствую прилив сил и энергии. Спасибо, что такой продукт 
доступен!»
            </p>
          </div>
          <div className="Appearance-Two-Rewievs">
            <div className="Rewievs-Oil-About-Data-Two">
              <h1>Сергей Т.</h1>
              <span>17.11.2023</span>
            </div>
            <div className="Rewievs-Oil-About-NewSpaper-Two">
              <p>
«Сыродавленное кедровое масло - моя находка! Удивительно насыщенный 
вкус и невероятно полезное. Я использую его в кулинарии, добавляя в 
салаты и блюда, и результат всегда превосходит ожидания. Оно не только 
придает блюдам уникальный аромат, но и способствует моему общему 
здоровью. Я чувствую прилив сил и энергии. Спасибо, что такой продукт 
доступен!»
              </p>
            </div>
          </div>
          <div className="Rewievs-Oil-Buy">
            {user5.map((value) => (
              <div className="Pressed-Oils-Before-Card" key={value.id}>
                <img
                  src={value.Avatar || "/placeholder.svg"}
                  alt={value.text}
                />
                <h4>{value.text}</h4>
                <span>{value.price} ₽</span>
                <button onClick={() => AddToCart(value)}>КУПИТЬ</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="Reviews-Slider-btn">
        <button onClick={Prev} className="Reviews-Slider-btn-Left">
          <img
            src={SliderArrowLeft || "/placeholder.svg"}
            alt="Previous review"
          />
        </button>
        <button onClick={Next} className="Reviews-Slider-btn-Right">
          <img src={SliderArrowRight || "/placeholder.svg"} alt="Next review" />
        </button>
      </div>
    </div>
  );
};

export default Reviews;
