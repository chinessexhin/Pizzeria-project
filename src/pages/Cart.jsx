import { useCart } from "../components/Context/CartContext.jsx";

const Cart = () => {
  const {
    cartItems,
    total,
    addToCart,
    updateQuantity,
    removeFromCart
  } = useCart();

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

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h4 className="mb-4">Detalles del pedido:</h4>

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

      <button className="btn btn-dark mt-3 w-30">Pagar</button>
    </div>
  )
}

export default Cart;
