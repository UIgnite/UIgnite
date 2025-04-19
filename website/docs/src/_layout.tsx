import Navbar from './components/Navbar';
import {Outlet} from 'react-router-dom';

export default function RootLayout() {
  return (
    <main className='flex flex-col h-screen w-screen overflow-x-hidden'>
      <Navbar />
      <Outlet />
    </main>
  );
}
