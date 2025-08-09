import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null); 
  const [email, setEmail] = useState(null);
  const [profile, setProfile] = useState(null);

  const login = async ({ email, password }) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      if (!res.ok) throw new Error("Error al iniciar sesión");

      const data = await res.json();
      setToken(data.token);
      setEmail(data.email);
    } catch (err) {
      console.error("Login fallido:", err.message);
    }
  };

  const register = async ({ email, password }) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      if (!res.ok) throw new Error("Error al registrarse");

      const data = await res.json();
      setToken(data.token);
      setEmail(data.email);
    } catch (err) {
      console.error("Registro fallido:", err.message);
    }
  };

  const logout = () => {
    setToken(null);
    setEmail(null);
    setProfile(null);
  };

  const getProfile = async () => {
    if (!token) return;

    try {
      const res = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });

      if (!res.ok) throw new Error("Error al obtener el perfil");

      const data = await res.json();
      setProfile(data);
    } catch (err) {
      console.error("Fallo al obtener perfil:", err.message);
    }
  };

  return (
    <UserContext.Provider value={{ token, email, profile, login, register, logout, getProfile }}>
      {children}
    </UserContext.Provider>
  )
}