import React from 'react';
import Table from './Table';
import { Action } from '../../types/types';

const ActionsTable: React.FC<{
  actions: Action[];
}> = ({ actions }) => {
  const headers = ['Creation Date', 'By Date', 'Action'];

  return (
    <Table
      headers={headers}
      data={actions}
      renderRow={(row) => (
        <>
          <td className='px-4 py-2'>{row.creationDate}</td>
          <td className='px-4 py-2'>{row.byDate}</td>
          <td className='px-4 py-2'>{row.action}</td>
        </>
      )}
    />
  );
};

export default ActionsTable;
