import { useRef, useState, useEffect } from "react"
import ArrowLeft from "./Assets/ArrowLeft.png"
import ArrowRight from "./Assets/ArrowRight.png"
import { users, users2 } from "./Api"
import ArrowLink from "./Assets/ArrowLink.png"
import { Link } from "react-router-dom"

const RawPressed = () => {
  const beforeRef = useRef(null)
  const afterRef = useRef(null)
  const [visible, setVisible] = useState("before")
  const [cart, setCart] = useState([])

  const handleAddToCart = (product) => {
    const cartItem = {
      ...product,
      quantity: 1,
      size: null,
      cartId: Date.now() + Math.random(),
      addedAt: new Date().toISOString(),
    }

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]")
    const updatedCart = [...existingCart, cartItem]

    setCart(updatedCart)
    localStorage.setItem("cart", JSON.stringify(updatedCart))

    alert(`"${product.text}" korzinkaga qo'shildi!`)
    console.log(`"${product.text}" korzinkaga qo'shildi!`, cartItem)
    window.dispatchEvent(new Event("cartUpdated"))
  }

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]")
    setCart(storedCart)
  }, [])

  const BeforePage = () => {
    setVisible("before")
  }

  const AfterPage = () => {
    setVisible("after")
  }

  return (
    <div className="Container">
      <div className="rawpressed-text-section">
        <h1>Сыродавленное Масло</h1>
        <span>
          <button onClick={BeforePage}>
            <img src={ArrowLeft || "/placeholder.svg"} alt="Previous" />
          </button>
          <button onClick={AfterPage}>
            <img src={ArrowRight || "/placeholder.svg"} alt="Next" />
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
              <img src={value.Avatar || "/placeholder.svg"} alt={value.text} />
              <h4>{value.text}</h4>
              <span>{value.price} ₽</span>
              <button
                onClick={() => handleAddToCart(value)} >
                КУПИТЬ
              </button>
            </div>
          )
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
              <img src={value.Avatar || "/placeholder.svg"} alt={value.text} />
              <h4>{value.text}</h4>
              <span>{value.price} ₽</span>
              <button
                onClick={() => handleAddToCart(value)}>
                КУПИТЬ
              </button>
            </div>
          )
        })}
      </section>

      <section className="Link-to-catalog">
        <Link to={"/Catalog"} className="LinkToCatalog">
          каталог
          <img src={ArrowLink || "/placeholder.svg"} alt="Go to catalog" />
        </Link>
      </section>
    </div>
  )
}

export default RawPressed