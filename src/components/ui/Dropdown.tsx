import React from 'react';

interface DropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  value,
  onChange,
}) => {
  return (
    <div className='relative inline-block text-left'>
      <button className='bg-gray-200 text-black px-4 py-2 rounded-md w-full'>
        {label}: {value || 'All'}
      </button>
      <ul className='absolute left-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto z-10 text-black'>
        <li
          className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
          onClick={() => onChange('')}
        >
          All
        </li>
        {options.map((option, index) => (
          <li
            key={index}
            className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
            onClick={() => onChange(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
