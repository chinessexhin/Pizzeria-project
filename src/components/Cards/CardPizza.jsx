import { Link } from "react-router-dom";
import { useCart } from '../Context/CartContext';

const CardPizza = ({ id, img, title, text, price }) => {
  const { addToCart } = useCart();

  return (
    <div className="card">
      <img src={img} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <p className="card-text">${price}</p>

        <div className="button-container">
          <button onClick={() => addToCart({ id, title, price, img })} className="btn btn-dark">
            Añadir
          </button>

          <Link to={`/pizza/${id}`} className="btn btn-outline-primary">
            Ver más
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CardPizza;
