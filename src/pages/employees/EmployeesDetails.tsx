import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import employers from '../../data/employers.json';
import defaultStatements from '../../data/defaultStatements.json';
import descriptorsData from '../../data/subjects.json';

const EmployeesDetails: React.FC = () => {
  const navigate = useNavigate();

  // Use AppContext to get `userName` and `setUserName`
  const {
    userName,
    setUserName,
    employer,
    setEmployer,
    setStatements,
    setDescriptors,
  } = useContext(AppContext);

  // Local state for the user’s name and the selected employer
  // const [employeeName, setEmployeeName] = useState('');
  // const [selectedEmployer, setSelectedEmployer] = useState('');

  // Simple handler for the form submission
  const handleNext = (event: React.FormEvent) => {
    event.preventDefault();

    // Replace "Subject" with the actual userName in each statement
    const populatedStatements = defaultStatements.map((statement) => ({
      ...statement,
      subject: userName || 'Anonymous', // Fallback to 'Anonymous' if userName is empty
    }));

    console.log('Populated Statements:', populatedStatements);

    setStatements(populatedStatements);

    // A helper function to get descriptors by subject
    function getSubjectDescriptors(subject: string): string[] {
      const found = descriptorsData.find((d) => d.subject === subject);
      return found ? found.descriptors : [];
    }

    // 1) Find the descriptors for the userName
    const subjectDescriptors = getSubjectDescriptors(userName);

    // 2) Set them in context
    setDescriptors(subjectDescriptors);

    console.log('Populated Descriptors:', subjectDescriptors);

    // Navigate to the Sentence Builder route (e.g., /employees/statements)
    navigate('/employees/statements', {
      // state: { employeeName, employer: selectedEmployer },
      // state: { employer: selectedEmployer },
    });
  };

  return (
    <div className='min-h-screen bg-gray-900 text-white flex flex-col items-center pt-6'>
      <h1 className='text-2xl font-bold mb-4'>Wellcome</h1>

      <form
        className='space-y-4 bg-gray-800 p-6 rounded shadow-lg min-w-[100%] max-w-xl w-full'
        onSubmit={handleNext}
      >
        {/* Name input */}
        <div>
          <label className='block mb-1'>Your Name:</label>
          <input
            type='text'
            // value={employeeName}
            value={userName}
            // onChange={(e) => setEmployeeName(e.target.value)}
            onChange={(e) => setUserName(e.target.value)}
            className='w-full border border-gray-400 rounded px-2 py-1  bg-gray-900 text-white'
          />
        </div>

        {/* Employer dropdown */}
        <div>
          <label className='block mb-1'>Select Employer:</label>
          <select
            value={employer}
            onChange={(e) => setEmployer(e.target.value)}
            className='w-full border border-gray-400 rounded px-2 py-1  bg-gray-900 text-white'
          >
            <option value=''>-- Choose an employer --</option>
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
          className={`px-4 py-2 rounded ${
            !userName || !employer
              ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
          disabled={!userName || !employer}
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default EmployeesDetails;
