import React from 'react';

interface TableProps<T> {
  headers: string[];
  data: T[];
  renderRow: (row: T, index: number) => React.ReactNode;
  onRowClick?: (row: T) => void; // Optional click handler for rows
  actionableRows?: number[]; // Array of actionable row indexes
}

const Table = <T extends object>({
  headers,
  data,
  renderRow,
  onRowClick,
  actionableRows = [],
}: TableProps<T>): JSX.Element => {
  return (
    <table className='min-w-full bg-white rounded-md shadow-md text-black'>
      <thead>
        <tr className='bg-gray-300'>
          {headers.map((header, index) => (
            <th key={index} className='px-4 py-2'>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr
            key={index}
            className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} ${
              actionableRows.includes(index)
                ? 'cursor-pointer bg-green-300'
                : ''
            }`}
            onClick={() => actionableRows.includes(index) && onRowClick?.(row)}
          >
            {renderRow(row, index)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
