import { Link } from 'react-router-dom';

const Navbar = () => {
  const total = 25000;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid d-flex justify-content-between align-items-center">

        <Link className="navbar-brand" to="/">Pizzería Mamma Mia!</Link>

        <div className="d-flex gap-2">
          <Link to="/" className="btn btn-dark">🍕 Home</Link>
          <Link to="/profile" className="btn btn-dark">👤 Profile</Link>
          <Link to="/login" className="btn btn-dark">🔐 Login</Link>
          <Link to="/register" className="btn btn-dark">📝 Register</Link>
        </div>

        <div>
          <Link to="/cart" className="btn btn-success">
            🛒 Total: ${total.toLocaleString()}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
