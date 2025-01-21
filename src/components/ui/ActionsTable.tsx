import React from 'react';
import Table from './Table';

const ActionsTable: React.FC<{
  actions: { date: string; action: string }[];
}> = ({ actions }) => {
  const headers = ['Date', 'Action'];

  return (
    <Table
      headers={headers}
      data={actions}
      renderRow={(row) => (
        <>
          <td className='px-4 py-2'>{row.date}</td>
          <td className='px-4 py-2'>{row.action}</td>
        </>
      )}
    />
  );
};

export default ActionsTable;
