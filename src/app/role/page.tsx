import React from 'react';
import Link from 'next/link';

function Page() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Select Your Role</h1>
        <div className="space-y-4 flex flex-col">
          <Link href='/dashboard' className="bg-blue-500 text-lg hover:bg-blue-600 text-white py-4 px-4 rounded-md w-full">
            User
          </Link>
          <Link href='/doctor' className="bg-green-500 text-lg hover:bg-green-600 text-white py-4 px-4 rounded-md w-full">
            Doctor
          </Link>
          <Link href='/seller' className="bg-indigo-500 text-lg hover:bg-indigo-600 text-white py-4 px-4 rounded-md w-full">
            Seller
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
