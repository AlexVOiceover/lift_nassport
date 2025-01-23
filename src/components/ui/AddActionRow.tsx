import React, { useState } from 'react';
import { AddActionRowProps } from '../../types/types';

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
    <tr className='bg-gray-100 hover:bg-gray-200'>
      {/* By Date Input */}
      <td className='px-4 py-2 border'>
        <input
          type='date'
          value={byDate}
          onChange={(e) => setByDate(e.target.value)}
          className='w-full bg-transparent outline-none text-black text-center'
        />
      </td>
      {/* Action Input */}
      <td colSpan={2} className='px-4 py-2 border'>
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
