import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import employers from '../../data/employers.json';

const EmployeesDetails: React.FC = () => {
  const navigate = useNavigate();

  // Local state for the user’s name and the selected employer
  const [employeeName, setEmployeeName] = useState('');
  const [selectedEmployer, setSelectedEmployer] = useState('');

  // Simple handler for the form submission
  const handleNext = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page reload if you want

    // Navigate to the Sentence Builder route (e.g., /employees/statements)
    // Pass the data in location.state for retrieval in SentenceBuilder.
    navigate('/employees/statements', {
      state: { employeeName, employer: selectedEmployer },
    });
  };

  return (
    <div className='min-h-screen bg-gray-900 text-white flex flex-col items-center pt-6'>
      <h1 className='text-2xl font-bold mb-4'>Employees Details Page</h1>
      <p className='mb-6'>
        Enter your personal details and choose your employer.
      </p>

      <form className='space-y-4 bg-gray-800 p-4 rounded' onSubmit={handleNext}>
        {/* Name input */}
        <div>
          <label className='block mb-1'>Your Name:</label>
          <input
            type='text'
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            className='w-full border border-gray-400 rounded px-2 py-1 text-black'
            // placeholder='e.g., Dave'
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
            {/* <option value=''>-- Choose an employer --</option> */}
            {employers.map((employer) => (
              <option key={employer.company} value={employer.company}>
                {employer.company}
              </option>
            ))}
          </select>
        </div>

        {/* Next Button */}
        <button
          type='submit'
          className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
          disabled={!employeeName || !selectedEmployer}
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default EmployeesDetails;
