"use client"

import { useEffect, useState } from "react"
import FavIcon from "./Assets/FavIcon.png"
import MenuBurger from "./Assets/MenuBurger.png"
import Contact from "./Assets/Account.png"
import Basket from "./Assets/Basket.png"
import Health from "./Assets/Health.png"
import Production from "./Assets/Production.png"
import Quality from "./Assets/Quality.png"
import { Link } from "react-router-dom"
import {
  OilsData1,
  OilsDataNext1,
  OilsData2,
  OilsDataNext2,
  OilsData3,
  OilsDataNext3,
  OilsData4,
  OilsDataNext4,
} from "./ApiEquipments"
import "./Other.css"
import Footer from "./Footer"

const Equipment = () => {
  const [PriceMore, SetPriceMore] = useState(true)
  const [Price2000, SetPrice2000] = useState(false)
  const [Price3000, SetPrice3000] = useState(false)
  const [Price4000, SetPrice4000] = useState(false)
  const [ShowMore, SetShowMore] = useState(false)
  const [cart, setCart] = useState([])
  const [cartCount, setCartCount] = useState(0)

  const AddToCart = (product) => {
    const cartItem = {
      ...product,
      quantity: 1,
      cartId: Date.now() + Math.random(),
      addedAt: new Date().toISOString(),
    }

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]")

    const updatedCart = [...existingCart, cartItem]

    localStorage.setItem("cart", JSON.stringify(updatedCart))
    setCart((prev) => [...prev, product])

    window.dispatchEvent(new Event("cartUpdated"))

    console.log(`"${product.text}" korzinkaga qo'shildi!`)
    console.log(`${product.text} корзинага қўшилди!`)
  }

  const updateCartCount = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]")
    const totalItems = storedCart.reduce((total, item) => total + (item.quantity || 1), 0)
    setCartCount(totalItems)
  }

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]")
    setCart(storedCart)
    updateCartCount()
  }, [])

  useEffect(() => {
    updateCartCount()
  }, [cart])

  useEffect(() => {
    const handleCartUpdate = () => {
      updateCartCount()
    }

    window.addEventListener("cartUpdated", handleCartUpdate)
    return () => window.removeEventListener("cartUpdated", handleCartUpdate)
  }, [])

  const OilsPriceChange = (e) => {
    const selected = e.target.value
    if (selected === "1000") {
      SetPriceMore(true)
      SetPrice2000(false)
      SetPrice3000(false)
      SetPrice4000(false)
    } else if (selected === "Price") {
      SetPriceMore(true)
      SetPrice2000(false)
      SetPrice3000(false)
      SetPrice4000(false)
    } else if (selected === "2000") {
      SetPriceMore(false)
      SetPrice2000(true)
      SetPrice3000(false)
      SetPrice4000(false)
    } else if (selected === "3000") {
      SetPriceMore(false)
      SetPrice2000(false)
      SetPrice3000(true)
      SetPrice4000(false)
    } else if (selected === "4000") {
      SetPriceMore(false)
      SetPrice2000(false)
      SetPrice3000(false)
      SetPrice4000(true)
    } else {
      alert("Код ошибки неверный👾")
    }
  }

  return (
    <div className="Container">
      <section className="Navigation-Section">
        <nav className="navbar">
          <a href="#" className="LinkMenu">
            <img src={MenuBurger || "/placeholder.svg"} alt="menu" />
            меню
          </a>
          <a className="LinkNumber" href="tel:+7 495 118-38-37">
            +7 495 118-38-37
          </a>
          <Link to="/App">
            <img className="FavIcon" src={FavIcon || "/placeholder.svg"} alt="icon" />
          </Link>
          <div className="Toolbar">
            <Link className="LinkContact" to="/Contact">
              <img src={Contact || "/placeholder.svg"} alt="#" />
            </Link>
            <Link className="LinkBasket" to="/Shopping">
              <button style={{ position: "relative" }}>
                <img src={Basket || "/placeholder.svg"} alt="#" />
                {cartCount > 0 && (
                  <span>
                    {cartCount}
                  </span>
                )}
              </button>
            </Link>
          </div>
        </nav>
        <nav className="Res-Nav">
          <Link to="/App">
            <img className="FavIcon" src={FavIcon || "/placeholder.svg"} alt="icon" />
          </Link>
          <a href="#" className="LinkMenu">
            <img src={MenuBurger || "/placeholder.svg"} alt="menu" />
            меню
          </a>
          <a className="LinkNumber" href="tel:+7 495 118-38-37">
            +7 495 118-38-37
          </a>
          <div className="Toolbar">
            <Link className="LinkContact" to="/Contact">
              <img src={Contact || "/placeholder.svg"} alt="#" />
            </Link>
            <Link className="LinkBasket" to="/Shopping">
              <button style={{ position: "relative" }}>
                <img src={Basket || "/placeholder.svg"} alt="#"/>
                {cartCount > 0 && (
                  <span>
                    {cartCount}
                  </span>
                )}
              </button>
            </Link>
          </div>
        </nav>
      </section>
      <main>
        <section className="CompactAbout--Next">
          <div className="Next--Card--Compact">
            <img src={Health || "/placeholder.svg"} alt="#" />
            <h4>Забота о здоровье</h4>
          </div>
          <div className="Next--Card--Compact">
            <img src={Production || "/placeholder.svg"} alt="#" />
            <h4>Свежее сырье</h4>
          </div>
          <div className="Next--Card--Compact">
            <img src={Quality || "/placeholder.svg"} alt="#" />
            <h4>Гарантия качества</h4>
          </div>
        </section>

        <section className="Filter-Oils">
          <div className="Filter-OnlyOils">
            <select name="Oils">
              <option value="Oils">Фильтр</option>
            </select>
          </div>
          <div className="Filter-OnlyPrice">
            <select name="Price" onChange={OilsPriceChange}>
              <option value="Price">Сортировать по цене</option>
              <option value="1000">1000 ₽</option>
              <option value="2000">2000 ₽</option>
              <option value="3000">3000 ₽</option>
              <option value="4000">4000 ₽</option>
            </select>
          </div>
        </section>

        {PriceMore && (
          <article className="Price-1000">
            <section className="Oils-First">
              {OilsData1.map((value) => (
                <div className="OilsPriceFull" key={value.id}>
                  <img src={value.avatar || "./Assets/PressMachine.png"} alt={value.text} />
                  <h4>{value.text}</h4>
                  <span>{value.price} ₽</span>
                  <button
                    onClick={() => AddToCart(value)}>
                    КУПИТЬ
                  </button>
                </div>
              ))}
            </section>
            {!ShowMore && (
            <section className="Section-ShowMore">
                <button className="ShowMore" onClick={() => SetShowMore(true)}>
                  Показать ещё...
                </button>
              </section>
            )}
            {ShowMore && (
              <section className="Oils-First-Show-More">
                {OilsDataNext1.map((value) => (
                  <div className="OilsPriceFull" key={value.id}>
                    <img src={value.avatar || "./Assets/PressMachine.png"} alt={value.text} />
                    <h4>{value.text}</h4>
                    <span>{value.price} ₽</span>
                    <button
                      onClick={() => AddToCart(value)}>
                      КУПИТЬ
                    </button>
                  </div>
                ))}
              </section>
            )}
          </article>
        )}

        {Price2000 && (
          <article className="Price-2000">
            <section className="Oils-Two">
              {OilsData2.map((value) => (
                <div className="OilsPriceFull" key={value.id}>
                  <img src={value.avatar || "./Assets/PressMachine.png"} alt={value.text} />
                  <h4>{value.text}</h4>
                  <span>{value.price} ₽</span>
                  <button
                    onClick={() => AddToCart(value)}>
                    КУПИТЬ
                  </button>
                </div>
              ))}
            </section>
            {!ShowMore && (
              <section>
                <button className="ShowMore" onClick={() => SetShowMore(true)}>
                  Показать ещё...
                </button>
              </section>
            )}
            {ShowMore && (
              <section className="Oils-Two-Show-More">
                {OilsDataNext2.map((value) => (
                  <div className="OilsPriceFull" key={value.id}>
                    <img src={value.avatar || "./Assets/PressMachine.png"} alt={value.text} />
                    <h4>{value.text}</h4>
                    <span>{value.price} ₽</span>
                    <button
                      onClick={() => AddToCart(value)}>
                      КУПИТЬ
                    </button>
                  </div>
                ))}
              </section>
            )}
          </article>
        )}

        {Price3000 && (
          <article className="Price-3000">
            <section className="Oils-Three">
              {OilsData3.map((value) => (
                <div className="OilsPriceFull" key={value.id}>
                  <img src={value.avatar || "./Assets/PressMachine.png"} alt={value.text} />
                  <h4>{value.text}</h4>
                  <span>{value.price} ₽</span>
                  <button
                    onClick={() => AddToCart(value)}>
                    КУПИТЬ
                  </button>
                </div>
              ))}
            </section>
            {!ShowMore && (
              <section>
                <button className="ShowMore" onClick={() => SetShowMore(true)}>
                  Показать ещё...
                </button>
              </section>
            )}
            {ShowMore && (
              <section className="Oils-Three-Show-More">
                {OilsDataNext3.map((value) => (
                  <div className="OilsPriceFull" key={value.id}>
                    <img src={value.avatar || "./Assets/PressMachine.png"} alt={value.text} />
                    <h4>{value.text}</h4>
                    <span>{value.price} ₽</span>
                    <button
                      onClick={() => AddToCart(value)}>
                      КУПИТЬ
                    </button>
                  </div>
                ))}
              </section>
            )}
          </article>
        )}

        {Price4000 && (
          <article className="Price-4000">
            <section className="Oils-Four">
              {OilsData4.map((value) => (
                <div className="OilsPriceFull" key={value.id}>
                  <img src={value.avatar || "./Assets/PressMachine.png"} alt={value.text} />
                  <h4>{value.text}</h4>
                  <span>{value.price} ₽</span>
                  <button
                    onClick={() => AddToCart(value)}>
                    КУПИТЬ
                  </button>
                </div>
              ))}
            </section>
            {!ShowMore && (
              <section>
                <button className="ShowMore" onClick={() => SetShowMore(true)}>
                  Показать ещё...
                </button>
              </section>
            )}
            {ShowMore && (
              <section className="Oils-Four-Show-More">
                {OilsDataNext4.map((value) => (
                  <div className="OilsPriceFull" key={value.id}>
                    <img src={value.avatar} alt={value.text} />
                    <h4>{value.text}</h4>
                    <span>{value.price} ₽</span>
                    <button onClick={() => AddToCart(value)}>
                      КУПИТЬ
                    </button>
                  </div>
                ))}
              </section>
            )}
          </article>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default Equipment


















































// import React, { useEffect, useState } from "react";
// import FavIcon from "./Assets/FavIcon.png";
// import MenuBurger from "./Assets/MenuBurger.png";
// import Contact from "./Assets/Account.png";
// import Basket from "./Assets/Basket.png";
// import Health from "./Assets/Health.png";
// import Production from "./Assets/Production.png";
// import Quality from "./Assets/Quality.png";
// import { Link } from "react-router-dom";
// import { OilsData1, OilsDataNext1, OilsData2, OilsDataNext2, OilsData3, OilsDataNext3, OilsData4, OilsDataNext4 } from "./ApiEquipments";
// import "./Other.css";
// import Footer from "./Footer";

// const Equipment = () => {
//   const [PriceMore, SetPriceMore] = useState(true)
//   const [Price2000, SetPrice2000] = useState(false)
//   const [Price3000, SetPrice3000] = useState(false)
//   const [Price4000, SetPrice4000] = useState(false)

//   const [ShowMore, SetShowMore] = useState(false);
//   const [cart, setCart] = useState([]);
//   const AddToCart = (product) => {
//     setCart((prev) => [...prev, item]);
//     console.log("Korzinkaga qo‘shildi:", product);
//       const cartItem = {
//     ...product,
//     quantity: 1,
//     cartId: Date.now() + Math.random(), // Unique ID
//     addedAt: new Date().toISOString(),
//   }

//   // Mavjud korzinkani olish
//   const existingCart = JSON.parse(localStorage.getItem("cart") || "[]")
  
//   // Yangi mahsulotni qo'shish
//   const updatedCart = [...existingCart, cartItem]
  
//   // Saqlash
//   localStorage.setItem("cart", JSON.stringify(updatedCart))
  
//   console.log(`"${product.text}" korzinkaga qo'shildi!`)

//   };

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart"));
//     if (storedCart) {
//       setCart(storedCart);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   const OilsPriceChange = (e) => {
//     const selected = e.target.value;
//     if (selected === "1000") {
//       SetPriceMore(true);
//       SetPrice2000(false)
//       SetPrice3000(false)
//       SetPrice4000(false)
//     }
//     else if (selected === "Price") {
//       SetPriceMore(true)
//       SetPrice2000(false)
//       SetPrice3000(false)
//       SetPrice4000(false)
//     }
//     else if (selected === "2000") {
//       SetPriceMore(false)
//       SetPrice2000(true)
//       SetPrice3000(false)
//       SetPrice4000(false)
//     }
//     else if (selected === "3000") {
//       SetPriceMore(false)
//       SetPrice2000(false)
//       SetPrice3000(true)
//       SetPrice4000(false)
//     }
//     else if (selected === "4000") {
//       SetPriceMore(false)
//       SetPrice2000(false)
//       SetPrice3000(false)
//       SetPrice4000(true)
//     }
//     else {
//       alert("Код ошибки неверный👾")
//     }
//   };

//   return (
//     <div className="Container">
//       <section className="Navigation-Section">
//         <nav className="navbar">
//           <a href="#" className="LinkMenu">
//             <img src={MenuBurger} alt="menu" />
//             меню
//           </a>
//           <a className="LinkNumber" href="tel:+7 495 118-38-37">
//             +7 495 118-38-37
//           </a>
//           <Link to="/App">
//             <img className="FavIcon" src={FavIcon} alt="icon" />
//           </Link>
//           <div className="Toolbar">
//             <Link className="LinkContact" to="/Contact">
//               <img src={Contact} alt="#" />
//             </Link>
//             <Link className="LinkBasket" to="/Shopping">
//               <button>
//                 <img src={Basket} alt="#" />
//               </button>
//             </Link>
//           </div>
//         </nav>
//         <nav className="Res-Nav">
//           <Link to="/App">
//             <img className="FavIcon" src={FavIcon} alt="icon" />
//           </Link>
//           <a href="#" className="LinkMenu">
//             <img src={MenuBurger} alt="menu" />
//             меню
//           </a>
//           <a className="LinkNumber" href="tel:+7 495 118-38-37">
//             +7 495 118-38-37
//           </a>
//           <div className="Toolbar">
//             <Link className="LinkContact" to="/Contact">
//               <img src={Contact} alt="#" />
//             </Link>
//             <Link className="LinkBasket" to="/Shopping">
//               <button>
//                 <img src={Basket} alt="#" />
//               </button>
//             </Link>
//           </div>
//         </nav>
//       </section>
//       <main>
//         <section className="CompactAbout--Next">
//           <div className="Next--Card--Compact">
//             <img src={Health} alt="#" />
//             <h4>Забота о здоровье</h4>
//           </div>
//           <div className="Next--Card--Compact">
//             <img src={Production} alt="#" />
//             <h4>Свежее сырье</h4>
//           </div>
//           <div className="Next--Card--Compact">
//             <img src={Quality} alt="#" />
//             <h4>Гарантия качества</h4>
//           </div>
//         </section>

//         <section className="Filter-Oils">
//           <div className="Filter-OnlyOils">
//             <select name="Oils">
//               <option value="Oils">Фильтр</option>
//             </select>
//           </div>
//           <div className="Filter-OnlyPrice">
//             <select name="Price" onChange={OilsPriceChange}>
//               <option value="Price">Сортировать по цене</option>
//               <option value="1000">1000 ₽</option>
//               <option value="2000">2000 ₽</option>
//               <option value="3000">3000 ₽</option>
//               <option value="4000">4000 ₽</option>
//             </select>
//           </div>
//         </section>

//         {PriceMore && (
//           <article className="Price-1000">
//             <section className="Oils-First">
//               {OilsData1.map((value) => (
//                 <div className="OilsPriceFull" key={value.id}>
//                   <img src={value.avatar} />
//                   <h4>{value.text}</h4>
//                   <span>{value.price} ₽</span>
//                   <button onClick={() => AddToCart(value)}>КУПИТЬ</button>
//                 </div>
//               ))}
//             </section>
//             {!ShowMore && (
//               <section className="Section-ShowMore">
//                 <button className="ShowMore" onClick={() => SetShowMore(true)}>Показать ещё...</button>
//               </section>
//             )}
//             {ShowMore && (
//               <section className="Oils-First-Show-More">
//                 {OilsDataNext1.map((value) => (
//                   <div className="OilsPriceFull" key={value.id}>
//                     <img src={value.avatar} />
//                     <h4>{value.text}</h4>
//                     <span>{value.price} ₽</span>
//                     <button onClick={() => AddToCart(value)}>КУПИТЬ</button>
//                   </div>
//                 ))}
//               </section>
//             )}
//           </article>
//         )}

//         {Price2000 && (
//           <article className="Price-2000">
//             <section className="Oils-Two">
//               {OilsData2.map((value) => (
//                 <div className="OilsPriceFull" key={value.id}>
//                   <img src={value.avatar} />
//                   <h4>{value.text}</h4>
//                   <span>{value.price} ₽</span>
//                   <button onClick={() => AddToCart(value)}>КУПИТЬ</button>
//                 </div>
//               ))}
//             </section>
//             {!ShowMore && (
//               <section>
//                 <button className="ShowMore" onClick={() => SetShowMore(true)}>Показать ещё...</button>
//               </section>
//             )}
//             {ShowMore && (
//               <section className="Oils-Two-Show-More">
//                 {OilsDataNext2.map((value) => (
//                   <div className="OilsPriceFull" key={value.id}>
//                     <img src={value.avatar} />
//                     <h4>{value.text}</h4>
//                     <span>{value.price} ₽</span>
//                     <button onClick={() => AddToCart(value)}>КУПИТЬ</button>
//                   </div>
//                 ))}
//               </section>
//             )}
//           </article>
//         )}

//         {Price3000 && (
//           <article className="Price-3000">
//             <section className="Oils-Three">
//               {OilsData3.map((value) => (
//                 <div className="OilsPriceFull" key={value.id}>
//                   <img src={value.avatar} />
//                   <h4>{value.text}</h4>
//                   <span>{value.price} ₽</span>
//                   <button onClick={() => AddToCart(value)}>КУПИТЬ</button>
//                 </div>
//               ))}
//             </section>
//             {!ShowMore && (
//               <section>
//                 <button className="ShowMore" onClick={() => SetShowMore(true)}>Показать ещё...</button>
//               </section>
//             )}
//             {ShowMore && (
//               <section className="Oils-Three-Show-More">
//                 {OilsDataNext3.map((value) => (
//                   <div className="OilsPriceFull" key={value.id}>
//                     <img src={value.avatar} />
//                     <h4>{value.text}</h4>
//                     <span>{value.price} ₽</span>
//                     <button onClick={() => AddToCart(value)}>КУПИТЬ</button>
//                   </div>
//                 ))}
//               </section>
//             )}
//           </article>
//         )}

//         {Price4000 && (
//           <article className="Price-4000">
//             <section className="Oils-Four">
//               {OilsData4.map((value) => (
//                 <div className="OilsPriceFull" key={value.id}>
//                   <img src={value.avatar} />
//                   <h4>{value.text}</h4>
//                   <span>{value.price} ₽</span>
//                   <button onClick={() => AddToCart(value)}>КУПИТЬ</button>
//                 </div>
//               ))}
//             </section>
//             {!ShowMore && (
//               <section>
//                 <button className="ShowMore" onClick={() => SetShowMore(true)}>Показать ещё...</button>
//               </section>
//             )}
//             {ShowMore && (
//               <section className="Oils-Four-Show-More">
//                 {OilsDataNext4.map((value) => (
//                   <div className="OilsPriceFull" key={value.id}>
//                     <img src={value.avatar} />
//                     <h4>{value.text}</h4>
//                     <span>{value.price} ₽</span>
//                     <button onClick={() => AddToCart(value)}>КУПИТЬ</button>
//                   </div>
//                 ))}
//               </section>
//             )}
//           </article>
//         )}
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Equipment;