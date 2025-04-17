import Navbar from './components/Navbar';
import {Outlet} from 'react-router-dom';
import FooterX from './pages/FooterX';

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <FooterX />
    </>
  );
}
