import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validarDatos = (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      window.alert("Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      window.alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    window.alert("Hola de vuelta!");

    setEmail('');
    setPassword('');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mb-4">Login!</h2>
          <form className="p-4 border rounded shadow-sm bg-white" onSubmit={validarDatos}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-success">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;