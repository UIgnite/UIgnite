import Navbar from './components/Navbar';
import {Outlet, useLocation} from 'react-router-dom';

export default function RootLayout() {
  const location = useLocation();
  console.log('location: ', location);
  return (
    <>
      {location.pathname === '/' ||
      location.pathname === '/home' ||
      location.pathname === '/test' ? null : (
        <Navbar />
      )}
      <Outlet />
    </>
  );
}
