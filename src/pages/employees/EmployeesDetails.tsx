import React, { useState } from 'react';
import employers from '../../data/employers.json';

const EmployeesDetails: React.FC = () => {
  // Local state for the user’s name and the selected employer
  const [employeeName, setEmployeeName] = useState('');
  const [selectedEmployer, setSelectedEmployer] = useState('');

  return (
    <div className='min-h-screen bg-gray-900 text-white flex flex-col items-center pt-6'>
      <h1 className='text-2xl font-bold mb-4'>Employee Page</h1>
      <p>
        This page will let a user enter their name, pick their employer, etc.
      </p>
    </div>
  );
};

export default EmployeesDetails;
