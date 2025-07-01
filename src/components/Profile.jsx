import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const userEmail = "usuario@ejemplo.com";

  const handleLogout = () => {
    console.log("Sesión cerrada");
    navigate("/login");
  };

  return (
    <div className="container text-center p-5">
      <h2>👤 Perfil de usuario</h2>
      <p>Email: <strong>{userEmail}</strong></p>

      <button className="btn btn-danger mt-3" onClick={handleLogout}>
        🔓 Cerrar sesión
      </button>
    </div>
  )
}

export default Profile;
