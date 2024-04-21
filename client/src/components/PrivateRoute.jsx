import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export default function PrivateRoute() {
  const { user: currentUser } = useUser();
  return currentUser ? <Outlet /> : <Navigate to="/signIn" />;
}
