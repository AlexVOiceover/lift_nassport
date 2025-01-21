import React, { useState } from 'react';

interface DropdownProps {
  label: string;
  options: string[];
  onSelect: (value: string) => void;
  renderOption?: (option: string) => React.ReactNode; // Optional render function for custom option rendering
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  onSelect,
  renderOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('All');

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className='relative'>
      <button
        className='bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400'
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selectedOption === 'All' ? `${label}` : selectedOption}
      </button>
      {isOpen && (
        <ul className='absolute left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-md z-10 text-black'>
          {options.map((option) => (
            <li
              key={option}
              className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
              onClick={() => handleOptionClick(option)}
            >
              {renderOption ? renderOption(option) : option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
