import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from '@/hooks/useAuth';

const AdminSharedLayout = () => {
  const { user } = useAuth();
  const location = useLocation();
  console.log(user);

  if (!user) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default AdminSharedLayout;
