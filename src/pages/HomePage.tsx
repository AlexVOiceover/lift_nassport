import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center'>
      <h1 className='text-3xl font-bold mb-8'>Welcome to the Nassport App</h1>
      <div className='flex space-x-4'>
        <Link
          to='/employees'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Employee Dashboard
        </Link>
        <Link
          to='/employers'
          className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
        >
          Employer Dashboard
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
