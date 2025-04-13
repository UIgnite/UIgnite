import {Outlet, useLocation} from 'react-router-dom';
import {Navbar} from '../components/Navbar';

export function RootLayout() {
  const location = useLocation();
  console.log('location: ', location);
  return (
    <>
      {location.pathname === '/' || location.pathname === '/home' ? null : (
        <Navbar />
      )}
      <Outlet />
    </>
  );
}
