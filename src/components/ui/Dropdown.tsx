import React from 'react';

interface DropdownProps {
  label: string;
  options: string[];
  onSelect: (value: string) => void;
  includeAll?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  onSelect,
  includeAll = false,
}) => {
  const displayedOptions = includeAll ? ['All', ...options] : options;
  // const [isOpen, setIsOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState(
  //   includeAll ? 'All' : options[0] || label
  // );

  // const handleOptionClick = (option: string) => {
  //   setSelectedOption(option);
  //   onSelect(option);
  //   setIsOpen(false);
  // };

  return (
    <div className='w-full'>
      <label className='block text-sm font-medium text-white mb-1'>
        {label}
      </label>
      <select
        className='w-full p-2 border bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black'
        onChange={(e) => onSelect(e.target.value)}
      >
        {displayedOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
