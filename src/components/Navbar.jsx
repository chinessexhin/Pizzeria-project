
const Navbar = () => {

  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid justify-content-start">
      <a className="navbar-brand" href="/Home">Pizzería Mamma Mia!</a>

      <div className="button-container2">
        <button type="button" className="btn btn-dark">🍕Home</button>
        <button type="button" className="btn btn-dark">🔐 Profile</button>
            {/* <button type="button" className="btn btn-dark">🔓 Logout</button> */}
            <button type="button" className="btn btn-dark">🔐 Login</button>
            <button type="button" className="btn btn-dark">📝 Register</button>
      </div>
    </div>

    <div className="navbar-nav ml-auto justify-content-start">
      <button type="button" className="btn btn-dark">🛒 Total: {}</button>
    </div>
  </nav>
);
};

export default Navbar;
