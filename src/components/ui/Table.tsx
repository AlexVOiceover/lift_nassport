import React from 'react';

interface TableProps {
  data: {
    subject: string;
    verb: string;
    object: string;
    adverbial: string;
    isPublic: boolean;
  }[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <table className='min-w-full bg-white rounded-md'>
      <thead>
        <tr className='bg-gray-300'>
          <th className='px-4 py-2'>Subject</th>
          <th className='px-4 py-2'>Verb</th>
          <th className='px-4 py-2'>Object</th>
          <th className='px-4 py-2'>Adverbial</th>
          <th className='px-4 py-2'>Privacy</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr
            key={index}
            className={`${
              index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
            } hover:bg-gray-200`}
          >
            <td className='px-4 py-2'>{row.subject}</td>
            <td className='px-4 py-2'>{row.verb}</td>
            <td className='px-4 py-2'>{row.object}</td>
            <td className='px-4 py-2'>{row.adverbial}</td>
            <td className='px-4 py-2'>{row.isPublic ? 'Public' : 'Private'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
