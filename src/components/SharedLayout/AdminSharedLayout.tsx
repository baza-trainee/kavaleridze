import { Outlet } from 'react-router-dom';

// import { useLocation, Navigate, Outlet } from 'react-router-dom';
// import useAuth from '@/hooks/useAuth';

const AdminSharedLayout = () => {
  //ToDo: when Login form will be done, uncomment code below (8-14 line)
  // const { user } = useAuth();
  // const location = useLocation();
  // console.log(user);

  // if (!user) {
  //   return <Navigate to="/admin/login" state={{ from: location }} replace />;
  // }

  //ToDo: add components for left bar below:
  return <Outlet />;
};

export default AdminSharedLayout;
