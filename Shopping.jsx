import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import loading from "./Loader";

export default function Shopping() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  // Handle window resize for responsive styles
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        setCart(JSON.parse(storedCart));
      } catch (error) {
        console.error("Korzinka ma'lumotlarini yuklashda xatolik:", error);
        setCart([]);
      }
    }
    setLoading(false);
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    if (!loading) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, loading]);

  const removeFromCart = (cartId) => {
    setCart((prevCart) => prevCart.filter((item) => item.cartId !== cartId));
  };

  const updateQuantity = (cartId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(cartId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.cartId === cartId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Корзина пуста!");
      return;
    }
    const orderSummary = `
      Заказ оформлен!
      Товаров: ${getTotalItems()}
      Сумма: ${getTotalPrice().toLocaleString()} ₽
      Спасибо за покупку!
    `;
    alert(orderSummary);
    clearCart();
  };
    
  const styles = {
    container: {
      padding: windowWidth <= 575 ? "10px" : windowWidth <= 991 ? "15px" : "20px",
      display: "flex",
      flexDirection: "column",
      gap: windowWidth <= 991 ? "2rem" : "3rem",
      backgroundColor: "#fffaf4",
      minHeight: "100vh",
      fontFamily: "'Montserrat', sans-serif",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: windowWidth <= 767 ? "flex-start" : "center",
      gap: windowWidth <= 767 ? "1.5rem" : "2rem",
      marginBottom: "2rem",
      flexWrap: "wrap",
    },
    title: {
      fontFamily: "'Arsenal', serif",
      fontSize: windowWidth <= 575 ? "clamp(20px, 3.5vw, 28px)" : windowWidth <= 991 ? "clamp(24px, 4vw, 36px)" : "clamp(30px, 5vw, 48px)",
      fontWeight: "400",
      color: "#463830",
      margin: 0,
      background: "none",
    },
    backButton: {
      padding: "12px 25px",
      border: "2px solid #91765e",
      borderRadius: "30px",
      backgroundColor: "transparent",
      fontFamily: "'Montserrat', sans-serif",
      fontSize: windowWidth <= 575 ? "14px" : "16px",
      fontWeight: "400",
      color: "#463830",
      cursor: "pointer",
      transition: "all 0.3s ease",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      textDecoration: "none",
      background: "none",
    },
    emptyCart: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "2rem",
      padding: windowWidth <= 575 ? "2rem 1rem" : "4rem 2rem",
      textAlign: "center",
    },
    emptyIcon: {
      width: windowWidth <= 575 ? "80px" : "120px",
      height: windowWidth <= 575 ? "80px" : "120px",
      backgroundColor: "#f7ebe2",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "1rem",
    },
    emptyTitle: {
      fontFamily: "'Arsenal', serif",
      fontSize: windowWidth <= 575 ? "24px" : "32px",
      fontWeight: "400",
      color: "#463830",
      margin: "0 0 1rem 0",
      background: "none",
    },
    emptyText: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: windowWidth <= 575 ? "14px" : "16px",
      fontWeight: "400",
      color: "#463830",
      margin: "0 0 2rem 0",
      maxWidth: windowWidth <= 575 ? "300px" : "400px",
      background: "none",
    },
    cartItem: {
      backgroundColor: "white",
      border: "2px solid #91765e",
      borderRadius: "20px",
      padding: windowWidth <= 575 ? "1rem" : windowWidth <= 991 ? "1.5rem" : "2rem",
      display: "flex",
      alignItems: windowWidth <= 767 ? "flex-start" : "center",
      gap: windowWidth <= 991 ? "1.5rem" : "2rem",
      marginBottom: "1rem",
      transition: "transform 0.3s ease",
      flexWrap: "wrap",
    },
    itemImage: {
      width: windowWidth <= 575 ? "60px" : windowWidth <= 991 ? "80px" : "100px",
      height: windowWidth <= 575 ? "60px" : windowWidth <= 991 ? "80px" : "100px",
      borderRadius: "15px",
      backgroundColor: "#f7ebe2",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    },
    itemImageImg: {
      width: "60%",
      height: "auto",
      backgroundColor: "transparent",
      background: "none",
    },
    itemDetails: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      minWidth: windowWidth <= 575 ? "100%" : windowWidth <= 991 ? "180px" : "200px",
    },
    itemTitle: {
      fontFamily: "'Arsenal', serif",
      fontSize: windowWidth <= 575 ? "18px" : "20px",
      fontWeight: "400",
      color: "#463830",
      margin: "0 0 0.5rem 0",
      background: "none",
    },
    itemSize: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "14px",
      fontWeight: "400",
      color: "#91765e",
      margin: 0,
      background: "none",
    },
    itemPrice: {
      fontFamily: "'Arsenal', serif",
      fontSize: windowWidth <= 575 ? "16px" : "18px",
      fontWeight: "400",
      color: "#463830",
      margin: 0,
      background: "none",
    },
    quantityControls: {
      display: "flex",
      alignItems: "center",
      border: "2px solid #91765e",
      borderRadius: "25px",
      overflow: "hidden",
      width: windowWidth <= 767 ? "100%" : "auto",
      justifyContent: windowWidth <= 767 ? "space-between" : "center",
    },
    quantityButton: {
      width: windowWidth <= 767 ? "50px" : "40px",
      height: "40px",
      border: "none",
      backgroundColor: "transparent",
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "20px",
      fontWeight: "400",
      color: "#463830",
      cursor: "pointer",
      background: "none",
    },
    quantityButtonDisabled: {
      color: "#91765e",
      cursor: "not-allowed",
      background: "none",
    },
    quantityDisplay: {
      width: windowWidth <= 767 ? "auto" : "50px",
      flex: windowWidth <= 767 ? 1 : "initial",
      textAlign: "center",
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "16px",
      fontWeight: "400",
      color: "#463830",
      borderLeft: "1px solid #91765e",
      borderRight: "1px solid #91765e",
      padding: "8px 0",
      background: "none",
    },
    itemTotal: {
      display: "flex",
      flexDirection: "column",
      alignItems: windowWidth <= 767 ? "flex-start" : "flex-end",
      gap: "1rem",
      width: windowWidth <= 767 ? "100%" : "auto",
    },
    totalPrice: {
      fontFamily: "'Arsenal', serif",
      fontSize: "22px",
      fontWeight: "400",
      color: "#463830",
      margin: 0,
      background: "none",
    },
    removeButton: {
      padding: "8px 16px",
      border: "2px solid #e74c3c",
      borderRadius: "20px",
      backgroundColor: "transparent",
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "14px",
      fontWeight: "400",
      color: "#e74c3c",
      cursor: "pointer",
      background: "none",
    },
    summary: {
      backgroundColor: "white",
      border: "2px solid #91765e",
      borderRadius: "20px",
      padding: windowWidth <= 575 ? "1rem" : windowWidth <= 991 ? "1.5rem" : "2rem",
      marginTop: "2rem",
    },
    summaryTitle: {
      fontFamily: "'Arsenal', serif",
      fontSize: windowWidth <= 575 ? "20px" : "24px",
      fontWeight: "400",
      color: "#463830",
      margin: "0 0 1.5rem 0",
      textAlign: "center",
      background: "none",
    },
    summaryRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 0",
      borderBottom: "1px solid #91765e61",
    },
    summaryLabel: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "16px",
      fontWeight: "400",
      color: "#463830",
      background: "none",
    },
    summaryValue: {
      fontFamily: "'Arsenal', serif",
      fontSize: "18px",
      fontWeight: "400",
      color: "#463830",
      background: "none",
    },
    checkoutButton: {
      padding: windowWidth <= 575 ? "12px 30px" : "16px 40px",
      border: "none",
      borderRadius: "30px",
      backgroundColor: "#2b3d2e",
      fontFamily: "'Montserrat', sans-serif",
      fontSize: windowWidth <= 575 ? "16px" : "18px",
      fontWeight: "400",
      color: "white",
      cursor: "pointer",
      width: "100%",
      marginTop: "1rem",
      background: "#2b3d2e",
    },
    clearButton: {
      marginTop: "1rem",
      padding: windowWidth <= 575 ? "10px 25px" : "12px 30px",
      border: "2px solid #e74c3c",
      borderRadius: "25px",
      backgroundColor: "transparent",
      fontFamily: "'Montserrat', sans-serif",
      fontSize: windowWidth <= 575 ? "14px" : "16px",
      fontWeight: "400",
      color: "#e74c3c",
      cursor: "pointer",
      width: "100%",
      background: "none",
    },
  };

  if (loading) {
    return <div style={styles.container}><loading/></div>;
  }

  if (cart.length === 0) {
    return (
      <div style={styles.container}>
        <div style={styles.emptyCart}>
          <div style={styles.emptyIcon}>🛒</div>
          <h2 style={styles.emptyTitle}>Корзина пуста</h2>
          <p style={styles.emptyText}>
            Добавьте товары в корзину, чтобы оформить заказ
          </p>
          <Link to="/" style={styles.backButton}>
            ← Вернуться к покупкам
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Корзина ({getTotalItems()} товаров)</h1>
        <Link to="/" style={styles.backButton}>
          ← Назад
        </Link>
      </div>
      <div>
        {cart.map((item) => (
          <div key={item.cartId} style={styles.cartItem}>
            <div style={styles.itemImage}>
              <img src={item.image || "/placeholder.svg"} alt={item.text} style={styles.itemImageImg} />
            </div>
            <div style={styles.itemDetails}>
              <h3 style={styles.itemTitle}>{item.text}</h3>
              {item.size && <p style={styles.itemSize}>Объем: {item.size} мл</p>}
              <p style={styles.itemPrice}>{item.price.toLocaleString()} ₽</p>
            </div>
            <div style={styles.itemTotal}>
              <div style={styles.quantityControls}>
                <button
                  style={{
                    ...styles.quantityButton,
                    ...(item.quantity <= 1 ? styles.quantityButtonDisabled : {}),
                  }}
                  onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  −
                </button>
                <span style={styles.quantityDisplay}>{item.quantity}</span>
                <button
                  style={styles.quantityButton}
                  onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <p style={styles.totalPrice}>
                {(item.price * item.quantity).toLocaleString()} ₽
              </p>
              <button
                style={styles.removeButton}
                onClick={() => removeFromCart(item.cartId)}
              >
                🗑 Удалить
              </button>
            </div>
          </div>
        ))}
      </div>
      <div style={styles.summary}>
        <h2 style={styles.summaryTitle}>Итого заказа</h2>
        <div style={styles.summaryRow}>
          <span style={styles.summaryLabel}>Товары ({getTotalItems()}):</span>
          <span style={styles.summaryValue}>
            {getTotalPrice().toLocaleString()} ₽
          </span>
        </div>
        <div style={styles.summaryRow}>
          <span style={styles.summaryLabel}>Доставка:</span>
          <span style={styles.summaryValue}>Бесплатно</span>
        </div>
        <div style={styles.summaryRow}>
          <span style={styles.summaryLabel}>Итого:</span>
          <span style={styles.summaryValue}>
            {getTotalPrice().toLocaleString()} ₽
          </span>
        </div>
        <button style={styles.checkoutButton} onClick={handleCheckout}>
          🛒 Оформить заказ
        </button>
        <button style={styles.clearButton} onClick={clearCart}>
          Очистить корзину
        </button>
      </div>
    </div>
  );
}