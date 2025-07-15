import { Navigate } from "react-router-dom";
import { useUser } from "../components/Context/UserContext";

const PublicRoute = ({ children }) => {
  const { token } = useUser();

  if (token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PublicRoute;


