import { useState } from "react";

const Cart = () => {
  const pizzaCart = [
    {
      id: 1,
      name: "Napolitana",
      price: 5950,
      count: 1,
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c",
    },
    {
      id: 2,
      name: "Española",
      price: 7250,
      count: 1,
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab",
    },
    {
      id: 3,
      name: "Salame",
      price: 5990,
      count: 1,
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3",
    },
  ];

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
            <button className="btn btn-outline-danger btn-sm me-1" onClick={() => restarCantidad(item.id)}>
              -
            </button>
            <span>{item.count}</span>
            <button className="btn btn-outline-primary btn-sm ms-1" onClick={() => aumentarCantidad(item.id)}>
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
