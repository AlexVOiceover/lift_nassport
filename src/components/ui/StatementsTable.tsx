import React from 'react';
import Table from './Table';
import { FaLock, FaLockOpen } from 'react-icons/fa';

const StatementsTable: React.FC<{
  data: {
    subject: string;
    verb: string;
    object: string;
    // adverbial: string;
    isPublic: boolean;
    actions?: { date: string; action: string }[]; // Optional actions array
  }[];
  onRowClick: (row: any) => void; // Click handler for rows
}> = ({ data, onRowClick }) => {
  const headers = ['Subject', 'Verb', 'Object', 'Privacy', 'Actions'];
  4;

  // Calculate actionable row indexes
  const actionableRows = data
    .map((row, index) => (row.actions && row.actions.length > 0 ? index : null))
    .filter((index) => index !== null) as number[];

  return (
    <Table
      headers={headers}
      data={data}
      actionableRows={actionableRows} // Pass actionable row indexes
      onRowClick={onRowClick}
      renderRow={(row) => (
        <>
          <td className='px-4 py-2'>{row.subject}</td>
          <td className='px-4 py-2'>{row.verb}</td>
          <td className='px-4 py-2'>{row.object}</td>
          <td className='px-4 py-2 flex justify-center items-center'>
            {row.isPublic ? (
              <FaLockOpen className='text-green-500' />
            ) : (
              <FaLock className='text-red-500' />
            )}
          </td>
          <td className='px-4 py-2 text-center'>
            {row.actions && row.actions.length > 0 ? 'Yes' : 'No'}
          </td>
        </>
      )}
    />
  );
};

export default StatementsTable;
