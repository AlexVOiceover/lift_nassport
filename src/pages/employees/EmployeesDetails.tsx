import React, { useState } from 'react';
import employers from '../../data/employers.json';

const EmployeesDetails: React.FC = () => {
  // Local state for the user’s name and the selected employer
  const [employeeName, setEmployeeName] = useState('');
  const [selectedEmployer, setSelectedEmployer] = useState('');

  return (
    <div className='min-h-screen bg-gray-900 text-white flex flex-col items-center pt-6'>
      <h1 className='text-2xl font-bold mb-4'>Employees Details Page</h1>
      <p className='mb-6'>
        Enter your personal details and choose your employer.
      </p>

      {/* A simple form (no submit yet) */}
      <form className='space-y-4 bg-gray-800 p-4 rounded'>
        {/* Name input */}
        <div>
          <label className='block mb-1'>Your Name:</label>
          <input
            type='text'
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            className='w-full border border-gray-400 rounded px-2 py-1 text-black'
            placeholder='e.g., Dave'
          />
        </div>

        {/* Employer dropdown */}
        <div>
          <label className='block mb-1'>Select Employer:</label>
          <select
            value={selectedEmployer}
            onChange={(e) => setSelectedEmployer(e.target.value)}
            className='w-full border border-gray-400 rounded px-2 py-1 text-black'
          >
            <option value=''>-- Choose an employer --</option>
            {employers.map((employer) => (
              <option key={employer.company} value={employer.company}>
                {employer.company}
              </option>
            ))}
          </select>
        </div>

        {/* 
          For now, we won't have a 'Next' button that navigates. 
          We'll add that in the next step.
        */}
      </form>
    </div>
  );
};

export default EmployeesDetails;
