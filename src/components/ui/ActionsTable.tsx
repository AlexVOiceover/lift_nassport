import React from 'react';

interface ActionsTableProps {
  actions: { date: string; action: string }[];
}

const ActionsTable: React.FC<ActionsTableProps> = ({ actions }) => {
  return (
    <table className='bg-white text-black rounded-md shadow-md w-full'>
      <thead>
        <tr>
          <th className='border px-4 py-2'>Date</th>
          <th className='border px-4 py-2'>Action</th>
        </tr>
      </thead>
      <tbody>
        {actions.map((action, index) => (
          <tr key={index} className='hover:bg-gray-200'>
            <td className='border px-4 py-2'>{action.date}</td>
            <td className='border px-4 py-2'>{action.action}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ActionsTable;
