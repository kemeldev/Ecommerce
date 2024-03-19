import { Navigate, Route } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ element, ...rest }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/Ecommerce" replace />
  );
};

export default ProtectedRoute;