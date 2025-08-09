import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./Context/UserContext";

const Profile = () => {
  const navigate = useNavigate();
  const { email, logout, getProfile, profile } = useUser();

  useEffect(() => {
    getProfile();
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="container text-center p-5">
      <h2>👤 Perfil de usuario</h2>

      <p>Email: <strong>{profile?.email || email || "Cargando..."}</strong></p>

      <button className="btn btn-danger mt-3" onClick={handleLogout}>
        🔓 Cerrar sesión
      </button>
    </div>
  )
}

export default Profile;