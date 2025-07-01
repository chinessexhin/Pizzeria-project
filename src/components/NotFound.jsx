import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center p-5">
      <h1 style={{ fontSize: "5rem" }}>404</h1>
      <p style={{ fontSize: "1.5rem" }}>Oops... ¡No encontramos la página que buscas! 🍕</p>
      <img
        src="https://media.tenor.com/XK37GfbV0g8AAAAC/pizza-what.gif"
        alt="Pizza perdida"
        style={{ width: "300px", margin: "2rem auto" }}
      />
      <div>
        <Link to="/" className="btn btn-success mt-3">
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}

export default NotFound;

