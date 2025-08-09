import { useState, useEffect } from "react";
import { useCart } from "../components/Context/CartContext.jsx";
import { useUser } from "../components/Context/UserContext.jsx";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    total,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart
  } = useCart();

  const { token } = useUser();
  const navigate = useNavigate();

  const [mensajeExito, setMensajeExito] = useState("");

  const restarCantidad = (id, currentQty) => {
    if (currentQty <= 1) {
      removeFromCart(id);
    } else {
      updateQuantity(id, currentQty - 1);
    }
  };

  const aumentarCantidad = (item) => {
    addToCart(item);
  };

  const handleCheckout = async () => {
    if (!token) {
      alert("Debes estar logueado para realizar el pago.");
      navigate("/login");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ cart: cartItems })
      });

      if (!response.ok) throw new Error("Error al procesar el checkout");

      const data = await response.json();

      setMensajeExito(" ¡Compra realizada!");
      clearCart();
    } catch (error) {
      console.error("Error al hacer checkout:", error.message);
      alert("❌ Ocurrió un error al procesar tu compra.");
    }
  };

  useEffect(() => {
    if (mensajeExito) {
      const timer = setTimeout(() => setMensajeExito(""), 4000);
      return () => clearTimeout(timer);
    }
  }, [mensajeExito]);

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h4 className="mb-4">Detalles del pedido:</h4>

      {mensajeExito && (
        <div className="alert alert-success">{mensajeExito}</div>
      )}

      {cartItems.map((item) => (
        <div key={item.id} className="d-flex align-items-center mb-3">
          {item.img && (
            <img
              src={item.img}
              alt={item.title}
              style={{ width: "60px", height: "60px", objectFit: "cover" }}
            />
          )}
          <div className="ms-3" style={{ flex: 1 }}>
            <div>{item.title}</div>
            <div>${item.price.toLocaleString()}</div>
          </div>
          <div className="d-flex align-items-center">
            <button
              className="btn btn-outline-danger btn-sm me-1"
              onClick={() => restarCantidad(item.id, item.quantity)}
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              className="btn btn-outline-primary btn-sm ms-1"
              onClick={() => aumentarCantidad(item)}
            >
              +
            </button>
          </div>
        </div>
      ))}

      <div className="mt-4">
        <h5>Total: ${total.toLocaleString()}</h5>
      </div>

      <button
        className="btn btn-dark mt-3 w-30"
        onClick={handleCheckout}
        disabled={!token || cartItems.length === 0}
      >
        Pagar
      </button>

      {!token && (
        <p className="text-danger mt-2">
          Debes iniciar sesión para realizar el pago.
        </p>
      )}
    </div>
  )
}

export default Cart;