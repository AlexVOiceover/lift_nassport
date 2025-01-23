import React, { useState } from 'react';

interface AddActionRowProps {
  onAddAction: (newAction: { byDate: string; action: string }) => void;
}

const AddActionRow: React.FC<AddActionRowProps> = ({ onAddAction }) => {
  const [byDate, setByDate] = useState('');
  const [action, setAction] = useState('');

  const handleAddClick = () => {
    if (!byDate || !action) {
      alert('Both fields are required!');
      return;
    }

    onAddAction({ byDate, action }); // Pass new action to parent component
    setByDate(''); // Clear the fields
    setAction('');
  };

  return (
    <div className='flex items-center space-x-4'>
      {/* By Date Input */}
      <input
        type='date'
        value={byDate}
        onChange={(e) => setByDate(e.target.value)}
        className='border px-2 py-1 rounded'
        placeholder='By Date'
      />
      {/* Action Input */}
      <input
        type='text'
        value={action}
        onChange={(e) => setAction(e.target.value)}
        className='border px-2 py-1 rounded flex-grow'
        placeholder='Action Description'
      />
      {/* Add Button */}
      <button
        onClick={handleAddClick}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded'
      >
        Add
      </button>
    </div>
  );
};

export default AddActionRow;
