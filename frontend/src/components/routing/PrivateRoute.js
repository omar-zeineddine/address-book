import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/auth/AuthState";
import Loading from "../layout/Loading";

const PrivateRoute = ({ component: Component }) => {
  const [authState] = useAuth();
  const { isAuthenticated, loading } = authState;
  if (loading) return <Loading />;
  if (isAuthenticated) return <Component />;
  return <Navigate to="/login" />;
};

export default PrivateRoute;
