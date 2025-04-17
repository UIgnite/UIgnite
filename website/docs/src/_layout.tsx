import Navbar from './components/Navbar';
import {Outlet} from 'react-router-dom';
import Footer from './pages/Footer';

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
