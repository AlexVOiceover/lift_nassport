import React from 'react';
interface DropdownProps {
  label?: string;
  options: string[];
  onSelect: (value: string) => void;
  includeAll?: boolean;
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  onSelect,
  includeAll = false,
  placeholder,
}) => {
  const displayedOptions = includeAll ? ['All', ...options] : options;

  return (
    <div className='w-full'>
      {label && (
        <label className='block text-sm font-medium text-white mb-1'>
          {label}
        </label>
      )}
      <select
        className='w-full p-2 border bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black'
        onChange={(e) => onSelect(e.target.value)}
        defaultValue=''
      >
        {placeholder && (
          <option value='' disabled>
            {placeholder}
          </option>
        )}
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
