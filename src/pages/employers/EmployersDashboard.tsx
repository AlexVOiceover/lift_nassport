import React, { useState } from 'react';
import Dropdown from '../../components/ui/Dropdown';
import statements from '../../data/statements.json';
import { FaLock, FaLockOpen } from 'react-icons/fa';
import ActionsTable from '../../components/ui/ActionsTable';

const EmployersDashboard: React.FC = () => {
  const [filters, setFilters] = useState({
    subject: 'All',
    verb: 'All',
    object: 'All',
    isPublic: 'All',
  });

  const [selectedStatement, setSelectedStatement] = useState<
    (typeof statements)[0] | null
  >(null);

  const handleFilterChange = (key: keyof typeof filters, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const filteredStatements = statements.filter((statement) => {
    return (
      (filters.subject === 'All' || statement.subject === filters.subject) &&
      (filters.verb === 'All' || statement.verb === filters.verb) &&
      (filters.object === 'All' || statement.object === filters.object) &&
      (filters.isPublic === 'All' ||
        statement.isPublic === (filters.isPublic === 'Public'))
    );
  });

  const subjects = ['All', ...new Set(statements.map((s) => s.subject))];
  const verbs = ['All', ...new Set(statements.map((s) => s.verb))];
  const objects = ['All', ...new Set(statements.map((s) => s.object))];
  const privacies = ['All', 'Public', 'Private'];

  return (
    <div className='min-h-screen bg-gray-800 text-white flex flex-col items-center pt-6'>
      <h1 className='text-2xl font-bold mb-6'>Employers Dashboard</h1>
      <div className='flex space-x-4 mb-6'>
        <Dropdown
          label='Subject'
          options={subjects}
          onSelect={(value) => handleFilterChange('subject', value)}
        />
        <Dropdown
          label='Verb'
          options={verbs}
          onSelect={(value) => handleFilterChange('verb', value)}
        />
        <Dropdown
          label='Object'
          options={objects}
          onSelect={(value) => handleFilterChange('object', value)}
        />
        <Dropdown
          label='Privacy'
          options={privacies}
          onSelect={(value) => handleFilterChange('isPublic', value)}
          renderOption={(option) => (
            <div className='flex items-center space-x-2'>
              {option === 'Public' && <FaLockOpen className='text-green-500' />}
              {option === 'Private' && <FaLock className='text-red-500' />}
              {option === 'All' && <span>All</span>}
            </div>
          )}
        />
      </div>
      <table className='bg-white text-black rounded-md shadow-md w-3/4'>
        <thead>
          <tr>
            <th className='border px-4 py-2'>Subject</th>
            <th className='border px-4 py-2'>Verb</th>
            <th className='border px-4 py-2'>Object</th>
            <th className='border px-4 py-2'>Privacy</th>
          </tr>
        </thead>
        <tbody>
          {filteredStatements.map((statement, index) => (
            <tr
              key={index}
              className='hover:bg-gray-200'
              onClick={() => setSelectedStatement(statement)}
            >
              <td className='border px-4 py-2'>{statement.subject}</td>
              <td className='border px-4 py-2'>{statement.verb}</td>
              <td className='border px-4 py-2'>{statement.object}</td>
              <td className='border px-4 py-2 text-center'>
                {statement.isPublic ? (
                  <FaLockOpen
                    className='text-green-500 mx-auto'
                    style={{ background: 'transparent' }}
                  />
                ) : (
                  <FaLock
                    className='text-red-500 mx-auto'
                    style={{ background: 'transparent' }}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedStatement && (
        <div className='w-3/4'>
          <h2 className='text-xl font-bold mb-4'>Follow-up Tasks</h2>
          <ActionsTable actions={selectedStatement.actions || []} />
        </div>
      )}
    </div>
  );
};

export default EmployersDashboard;
