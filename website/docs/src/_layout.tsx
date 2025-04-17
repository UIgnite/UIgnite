import Navbar from './components/Navbar';
import {Outlet} from 'react-router-dom';

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
