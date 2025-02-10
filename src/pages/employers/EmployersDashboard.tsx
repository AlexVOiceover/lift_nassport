import React, { useState } from 'react';
import Dropdown from '../../components/ui/Dropdown';
import Modal from '../../components/ui/Modal';
import statements from '../../data/statements.json';
// import { FaLock, FaLockOpen } from 'react-icons/fa';
import StatementsTable from '../../components/ui/StatementsTable';
import ActionsManager from '../../components/ui/ActionsManager';

// Utility function to generate dropdown options. Include 'All' by default.
const getUniqueOptions = (data: string[]) => Array.from(new Set(data));

//Testing Fetch
const API_URL = import.meta.env.VITE_API_URL;
console.log('Backend API:', API_URL);

// fetch(`${API_URL}/v`)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// POST request to create a new entry
async function postThenFetch() {
  try {
    // POST operation
    const postResponse = await fetch(`${API_URL}/newEntry`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        subject: 'Pacorro',
        verb: 'loves',
        object: 'apples',
        isPublic: true,
        statement: 'Paco loves apples',
      }),
    });
    if (!postResponse.ok) {
      throw new Error(`HTTP error on POST! status: ${postResponse.status}`);
    }
    const postData = await postResponse.json();
    console.log('Successfully posted:', postData);

    // GET operation after POST completes
    const getResponse = await fetch(`${API_URL}/n/s/Pacorro`);
    if (!getResponse.ok) {
      throw new Error(`HTTP error on GET! status: ${getResponse.status}`);
    }
    const getData = await getResponse.json();
    console.log(`Fetching from DV: ${JSON.stringify(getData, null, 2)}`);
  } catch (error) {
    console.error('Error with requests:', error);
  }
}

postThenFetch();

const EmployersDashboard: React.FC = () => {
  const [filters, setFilters] = useState({
    subject: 'All',
    verb: 'All',
    object: 'All',
    isPublic: 'Public',
    hasActions: 'All',
  });

  const [selectedStatement, setSelectedStatement] = useState<
    (typeof statements)[0] | null
  >(null);

  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal open/close state

  // Dropdown options
  const subjects = getUniqueOptions(statements.map((s) => s.subject));
  const verbs = getUniqueOptions(statements.map((s) => s.verb));
  const objects = getUniqueOptions(statements.map((s) => s.object));
  // const privacies = ['Public'];
  const hasActions = ['Yes', 'No'];

  // Filtered statements
  const filteredStatements = statements.filter((statement) => {
    const hasActions =
      filters.hasActions === 'All' ||
      (filters.hasActions === 'Yes' &&
        statement.actions &&
        statement.actions.length > 0) ||
      (filters.hasActions === 'No' &&
        (!statement.actions || statement.actions.length === 0));

    return (
      (filters.subject === 'All' || statement.subject === filters.subject) &&
      (filters.verb === 'All' || statement.verb === filters.verb) &&
      (filters.object === 'All' || statement.object === filters.object) &&
      (filters.isPublic === 'All' ||
        statement.isPublic === (filters.isPublic === 'Public')) &&
      hasActions
    );
  });

  const handleFilterChange = (key: keyof typeof filters, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleRowClick = (row: (typeof statements)[0]) => {
    if (row.actions && row.actions.length > 0) {
      // Open modal only if there are actions
      setSelectedStatement(row); // Set the selected statement
      setIsModalOpen(true); // Open the modal
    } else {
      console.log('No actions available for this statement.'); // Optional: Add a log for debugging
    }
  };

  return (
    <div className='min-h-screen bg-gray-800 text-white flex flex-col items-center pt-6'>
      <h1 className='text-2xl font-bold mb-6'>Employers Dashboard</h1>

      {/* Filters */}
      <div className='flex space-x-4 mb-6'>
        <Dropdown
          label='Subject'
          options={subjects}
          onSelect={(value) => handleFilterChange('subject', value)}
          includeAll
        />
        <Dropdown
          label='Verb'
          options={verbs}
          onSelect={(value) => handleFilterChange('verb', value)}
          includeAll
        />
        <Dropdown
          label='Object'
          options={objects}
          onSelect={(value) => handleFilterChange('object', value)}
          includeAll
        />

        <Dropdown
          label='Has Actions'
          options={hasActions}
          onSelect={(value) => handleFilterChange('hasActions', value)}
          includeAll
        />
      </div>

      {/* Statements Table */}
      <StatementsTable
        data={filteredStatements}
        onRowClick={handleRowClick} // Pass the row click handler
      />

      {/* Modal for Follow-Up Tasks */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Close the modal
        title='Follow-Up Tasks'
      >
        {selectedStatement ? (
          // <ActionsTable actions={selectedStatement.actions || []} />
          <ActionsManager statement={selectedStatement} />
        ) : (
          <p>No follow-up tasks available.</p>
        )}
      </Modal>
    </div>
  );
};

export default EmployersDashboard;
