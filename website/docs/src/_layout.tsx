import MainNavbar from './components/Navbar';
import {Outlet} from 'react-router-dom';

export default function RootLayout() {
  return (
    <main className="flex flex-col h-screen w-screen overflow-x-hidden">
      <MainNavbar />
      <Outlet />
    </main>
  );
}
