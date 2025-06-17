import { useState } from "react"
import { pizzaCart } from "../Cards/pizzas"; 

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const calcularTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.count;
    });
    return total;
  };

  const restarCantidad = (id) => {
    const nuevoCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, count: Math.max(item.count - 1, 0) };
      }
      return item;
    });
    setCart(nuevoCart);
  };

  const aumentarCantidad = (id) => {
    const nuevoCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setCart(nuevoCart);
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h4 className="mb-4">Detalles del pedido:</h4>

      {cart.map((item) => (
        <div key={item.id} className="d-flex align-items-center mb-3">
          <img
            src={item.img}
            alt={item.name}
            style={{ width: "60px", height: "60px", objectFit: "cover" }}
          />
          <div className="ms-3" style={{ flex: 1 }}>
            <div>{item.name}</div>
            <div>${item.price.toLocaleString()}</div>
          </div>
          <div className="d-flex align-items-center">
            <button
              className="btn btn-outline-danger btn-sm me-1"
              onClick={() => restarCantidad(item.id)}
            >
              -
            </button>
            <span>{item.count}</span>
            <button
              className="btn btn-outline-primary btn-sm ms-1"
              onClick={() => aumentarCantidad(item.id)}
            >
              +
            </button>
          </div>
        </div>
      ))}

      <div className="mt-4">
        <h5>Total: ${calcularTotal().toLocaleString()}</h5>
      </div>

      <button className="btn btn-dark mt-3 w-30">Pagar</button>
    </div>
  )
}

export default Cart;
