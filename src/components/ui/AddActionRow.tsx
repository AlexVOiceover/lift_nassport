import React, { useState, useEffect } from 'react';
import { Action } from '../../types/types';

export interface AddActionRowProps {
  onAddAction: (newAction: Action) => void; // Exclude creationDate as it will be auto-generated
}

const AddActionRow: React.FC<AddActionRowProps> = ({ onAddAction }) => {
  const [creationDate, setCreationDate] = useState('');
  const [byDate, setByDate] = useState('');
  const [action, setAction] = useState('');

  // Initialize creationDate to today's date
  useEffect(() => {
    setCreationDate(new Date().toISOString().split('T')[0]); // Format: YYYY-MM-DD
  }, []);

  const handleAddClick = () => {
    if (!byDate || !action) {
      alert('Both fields are required!');
      return;
    }

    onAddAction({ creationDate, byDate, action }); // Pass new action to parent component
    setByDate(''); // Clear the fields
    setAction('');
  };

  return (
    <tr className='bg-gray-100 hover:bg-gray-200'>
      {/* Creation Date */}
      <td className='px-4 py-2 border text-center'>
        <input
          type='text'
          value={creationDate}
          readOnly
          className='w-full bg-transparent outline-none text-black text-center cursor-not-allowed'
        />
      </td>
      {/* By Date */}
      <td className='px-4 py-2 border text-center'>
        <input
          type='date'
          value={byDate}
          onChange={(e) => setByDate(e.target.value)}
          className='w-full bg-transparent outline-none text-black text-center'
        />
      </td>
      {/* Action */}
      <td className='px-4 py-2 border'>
        <input
          type='text'
          value={action}
          onChange={(e) => setAction(e.target.value)}
          placeholder='Action Description'
          className='w-full bg-transparent outline-none text-black'
        />
      </td>
      {/* Add Button */}
      <td className='px-4 py-2 border text-center'>
        <button
          onClick={handleAddClick}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded'
        >
          Add
        </button>
      </td>
    </tr>
  );
};

export default AddActionRow;
