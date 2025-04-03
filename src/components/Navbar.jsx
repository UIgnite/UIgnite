import React from 'react';

const Navbar = () => {
  return (

<nav className="flex justify-between items-center bg-zinc-800 p-[1rem] h-[100px] w-full">
  <div className=''>
    <img src="/logo" alt="Logo" />
    <div className='text-'>Tasker</div>
  </div>
</nav>
);
};

export default Navbar;