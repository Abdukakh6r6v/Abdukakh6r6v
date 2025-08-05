"use client"

import { useState, useEffect } from "react"
import SliderArrowLeft from "./Assets/ArrowLeft.png"
import SliderArrowRight from "./Assets/ArrowRight.png"
import { users3, users4 } from "./Api"

const Additions = () => {
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
    console.log("Korzinkaga qo'shildi:", cartItem)

    window.dispatchEvent(new Event("cartUpdated"))
  }

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]")
    setCart(storedCart)
  }, [])

  return (
    <div className="Container Container-Additions">
      <div className="Additions-True-Repson">
        <div className="Additions-Head-Text">
          <h1>Дополнения</h1>
        </div>
        <div className="Additions-Sliders-True">
          <button
            className="Addition-Slider-Arrow-Left"
            onClick={() => setVisible("before")}>
            <img src={SliderArrowLeft || "/placeholder.svg"} alt="←" />
          </button>
          <button
            className="Addition-Slider-Arrow-Right"
            onClick={() => setVisible("after")}>
            <img src={SliderArrowRight || "/placeholder.svg"} alt="→" />
          </button>
        </div>
      </div>

      {visible === "before" && (
        <div className="Oil-Raw-PressedAlmond">
          {users3.map((value) => (
            <div className="Oil-Raw-PressedAlmond-Card" key={value.id}>
              <img src={value.Avatar || "/placeholder.svg"} alt={value.text} />
              <h4>{value.text}</h4>
              <span>{value.price} ₽</span>
              <button
                onClick={() => handleAddToCart(value)}>
                КУПИТЬ
              </button>
            </div>
          ))}
        </div>
      )}

      {visible === "after" && (
        <div className="Oil-Raw-PressedAlmond-Next">
          {users4.map((value) => (
            <div className="Oil-Raw-PressedAlmond-Next-Card" key={value.id}>
              <img src={value.Avatar || "/placeholder.svg"} alt={value.text} />
              <h4>{value.text}</h4>
              <span>{value.price} ₽</span>
              <button
                onClick={() => handleAddToCart(value)} >
                КУПИТЬ
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="Additions-Sliders">
        <button
          className="Addition-Slider-Arrow-Left"
          onClick={() => setVisible("before")}>
          <img src={SliderArrowLeft || "/placeholder.svg"} alt="←" />
        </button>
        <button
          className="Addition-Slider-Arrow-Right"
          onClick={() => setVisible("after")}>
          <img src={SliderArrowRight || "/placeholder.svg"} alt="→" />
        </button>
      </div>
    </div>
  )
}

export default Additions
