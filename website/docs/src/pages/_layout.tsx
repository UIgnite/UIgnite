
import { Navbar } from '@pkgs/uignite';
import {Outlet, useLocation} from 'react-router-dom';



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
