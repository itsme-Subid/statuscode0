'use client'
import React from 'react';
import Link from 'next/link';
import { useAuth0 } from "@auth0/auth0-react";
// import Inter from 'next/font/inter';

const Navbar = () => {
  const { loginWithRedirect,logout, isAuthenticated } = useAuth0();
  const { user } = useAuth0();
  // const inter = Inter({ subsets: ['latin'] })
  return (
    <nav className='flex items-center justify-between p-4 border-b-2 border-gray-200'>
      <div>
        <h1
          className='text-5xl font-extrabold'
          style={{
            letterSpacing: '-1px',
            backgroundImage: 'linear-gradient(180deg, #555, #000)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          <Link href='/'>Status Code 0</Link>
        </h1>
      </div>
      <div className='flex space-x-10 items-center'>
        <Link href='/' className='cursor-pointer'>Home</Link>
        <h1 className='cursor-pointer'>About</h1>
        {!isAuthenticated && <h1 onClick={() => loginWithRedirect()} className='cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md'>Login</h1>}
        {isAuthenticated && user && <h1>{user.name}</h1>}
        {isAuthenticated && <h1 onClick={() => logout()} className='cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md'>Logout</h1>}
      </div>
    </nav>
  );
};

export default Navbar;