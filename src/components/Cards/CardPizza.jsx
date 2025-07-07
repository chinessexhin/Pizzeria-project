import React from "react";
import { useCart } from "../Context/CartContext.jsx";

const CardPizza = ({ id, img, title, text, price }) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    const pizza = { id, title, price };
    addToCart(pizza);
  };

  return (
    <div className="card">
      <img src={img} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <p className="card-text">${price.toLocaleString()}</p>
        <div className="button-container">
          <button type="button" className="btn btn-dark" onClick={handleAdd}>
            ➕ Añadir
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardPizza;