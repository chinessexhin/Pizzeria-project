import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './Context/CartContext.jsx';
import { useUser } from './Context/UserContext.jsx'; 

const Navbar = () => {
  const { total, quantity } = useCart();
  const { token, logout } = useUser(); 
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();          
    navigate("/");       
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <div className="container-fluid d-flex justify-content-between align-items-center">

        <div className="d-flex align-items-center gap-3">
          <Link className="navbar-brand mb-0 h1 text-white" to="/">
            Pizzería Mamma Mia!
          </Link>
          <Link to="/" className="btn btn-dark">🍕 Home</Link>
          <Link to="/profile" className="btn btn-dark">👤 Profile</Link>

          {token ? (
            <button onClick={handleLogout} className="btn btn-outline-warning">
              🔓 Cerrar sesión
            </button>
          ) : (
            <>
              <Link to="/login" className="btn btn-dark">🔐 Login</Link>
              <Link to="/register" className="btn btn-dark">📝 Register</Link>
            </>
          )}
        </div>

        <div>
          <Link to="/cart" className="btn btn-success">
            🛒 ({quantity}) Total: ${total.toLocaleString()}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
